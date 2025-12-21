"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { bikeParts } from "@/lib/data"; 
import { useState, useEffect, Suspense } from "react";

// --- INSTALLMENT CALCULATION LOGIC ---
export function calculateInstallment(price: number, percent1: number, advDivide1: number, percent2: number, advDivide2: number) {
  const result: any = {};
  const toNum = (val: any, fallback = 1) => {
    const num = Number(val);
    return isNaN(num) || num <= 0 ? fallback : num;
  };

  const plans = [
    {
      key: "plan1",
      percent: toNum(percent1, 21),
      divide: toNum(advDivide1, 2.75),
      monthsMap: [[0, 3599, 1], [3600, 9699, 2], [9700, 18599, 3], [18600, 29699, 4], [29700, 43199, 5], [43200, Infinity, 6]],
    },
    {
      key: "plan2",
      percent: toNum(percent2, 41),
      divide: toNum(advDivide2, 5.5),
      monthsMap: [[0, 3899, 2], [3900, 10999, 4], [11000, 21999, 6], [22000, 34999, 8], [35000, 50999, 10], [51000, Infinity, 12]],
    },
  ];

  for (const plan of plans) {
    const total = price * (1 + plan.percent / 100);
    const months = plan.monthsMap.find(([min, max]) => total >= min && total <= max)?.[2] || 12;
    const advance = total / plan.divide;
    const remaining = total - advance;
    const monthly = remaining / months;
    const weekly = monthly / 4;
    const daily = monthly / 30 + 50;

    result[plan.key] = {
      total: Math.round(total),
      months: `${months} Months`,
      advance: Math.round(advance),
      monthly: Math.round(monthly),
      weekly: Math.round(weekly),
      daily: Math.round(daily),
      monthsRaw: months,
    };
  }
  return result;
}

// --- TYPES ---
interface CartItem {
  id: number;
  name: string;
  price: number;
  qty: number;
  quality: string;
}

function PartsContent() {
  const params = useSearchParams();
  const router = useRouter();
  const bikeType = params.get("bike") || "70";

  const [search, setSearch] = useState<string>("");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const auth = localStorage.getItem("isAuth");
    if (auth !== "true") { router.push("/"); return; }
    const savedCart = localStorage.getItem("bike_cart");
    if (savedCart) {
      try { setCart(JSON.parse(savedCart)); } catch (e) { console.error(e); }
    }
    setIsLoaded(true);
  }, [router]);

  useEffect(() => {
    if (isLoaded) localStorage.setItem("bike_cart", JSON.stringify(cart));
  }, [cart, isLoaded]);

  const priceOptions = bikeType === "125" 
    ? [{ key: "a125", label: "125-A" }, { key: "b125", label: "125-B" }]
    : [{ key: "a70", label: "70-A" }, { key: "b70", label: "70-B" }];

  const addToCart = (part: any, price: number, qualityLabel: string) => {
    let finalPrice = price;
    if (finalPrice === 0) {
      const customPrice = prompt(`Enter price for ${part.name}:`, "0");
      if (!customPrice || isNaN(Number(customPrice))) return;
      finalPrice = parseInt(customPrice);
    }
    setCart(prev => {
      const otherItems = prev.filter(item => item.id !== part.id);
      return [...otherItems, { id: part.id, name: part.name, price: finalPrice, qty: 1, quality: qualityLabel }];
    });
  };

  const updateQty = (id: number, price: number, delta: number) => {
    setCart(prev => prev.map(i => (i.id === id && i.price === price ? { ...i, qty: i.qty + delta } : i)).filter(i => i.qty > 0));
  };

  const filteredParts = bikeParts.filter((p: any) => {
    const q = search.toLowerCase().trim();
    if (!q) return true;
    return p.id.toString() === q || p.name.toLowerCase().includes(q) || (p.tags && p.tags.some((t: string) => t.toLowerCase().includes(q)));
  });

  const total = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);



  useEffect(() => {
    const savedCart = localStorage.getItem("bike_cart");
    const savedPlan = localStorage.getItem("selected_plan");
    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedPlan) setSelectedPlan(savedPlan);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("bike_cart", JSON.stringify(cart));
      if (selectedPlan) localStorage.setItem("selected_plan", selectedPlan);
      else localStorage.removeItem("selected_plan");
    }
  }, [cart, selectedPlan, isLoaded]);
  
  // Get Installment Details
  const instResults = calculateInstallment(total, 21, 2.75, 41, 5.5);
  const currentPlan = selectedPlan ? instResults[selectedPlan] : null;


  

  if (!isLoaded) return <div className="h-screen flex items-center justify-center font-bold text-slate-400 animate-pulse">LOADING...</div>;

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 bg-[#f8fafc] text-slate-900 min-h-screen">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <div>
          <h1 className="text-2xl font-black italic uppercase tracking-tighter italic">Inventory <span className="text-blue-600">Portal</span></h1>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Honda {bikeType}cc Selection</p>
        </div>
        <div className="w-full md:w-auto bg-slate-900 text-white px-6 py-3 rounded-xl shadow-lg shadow-slate-200">
          <p className="text-[10px] uppercase opacity-60 font-bold">Cash Total</p>
          <p className="text-2xl font-black text-blue-400">Rs {total.toLocaleString()}</p>
        </div>
      </div>

      {/* SEARCH BAR */}
      <div className="mb-6 relative">
        <input 
          className="w-full p-4 pl-12 bg-white border-2 border-slate-100 rounded-2xl focus:border-blue-500 transition-all outline-none shadow-sm font-bold text-slate-700" 
          placeholder="Search by ID, Name or Tags (light, patti, wire)..." 
          value={search} 
          onChange={e => setSearch(e.target.value)} 
        />
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">🔍</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* LEFT: PARTS LIST */}
        <div className="lg:col-span-8 space-y-4">
          <div className="hidden md:block bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-100 text-slate-400 uppercase font-black text-[11px]">
                <tr>
                  <th className="p-4 text-left">ID</th>
                  <th className="p-4 text-left">Description</th>
                  {priceOptions.map(p => <th key={p.key} className="p-4 text-center">{p.label}</th>)}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {filteredParts.map((part: any) => (
                  <tr key={part.id} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-300">#{part.id}</td>
                    <td className="p-4 font-black text-slate-700 uppercase">{part.name}</td>
                    {priceOptions.map(opt => {
                      const isSelected = cart.find(i => i.id === part.id && i.quality === opt.label);
                      return (
                        <td key={opt.key} className="p-4 text-center">
                          <button
                            onClick={() => addToCart(part, part[opt.key], opt.label)}
                            className={`min-w-[100px] py-2 rounded-lg font-black text-sm border transition-all ${
                              isSelected ? "bg-blue-600 text-white border-blue-600 shadow-md scale-95" : "bg-white text-slate-500 border-slate-200 hover:border-blue-300"
                            }`}
                          >
                            {part[opt.key] === 0 ? "Custom" : `Rs ${part[opt.key]}`}
                          </button>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* MOBILE LIST */}
          <div className="md:hidden space-y-3">
            {filteredParts.map((part: any) => (
              <div key={part.id} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                <div className="flex justify-between items-center mb-3">
                  <p className="font-black text-slate-800 uppercase text-sm leading-tight">{part.name}</p>
                  <span className="text-[10px] font-bold text-slate-300 bg-slate-50 px-2 py-1 rounded">#{part.id}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {priceOptions.map(opt => {
                    const isSelected = cart.find(i => i.id === part.id && i.quality === opt.label);
                    return (
                      <button
                        key={opt.key}
                        onClick={() => addToCart(part, part[opt.key], opt.label)}
                        className={`py-3 rounded-xl font-black text-sm border flex flex-col items-center ${
                          isSelected ? "bg-blue-600 text-white border-blue-600" : "bg-slate-50 text-slate-500 border-slate-100"
                        }`}
                      >
                        <span className="opacity-50 text-[9px] uppercase">{opt.label}</span>
                        <span>{part[opt.key] === 0 ? "Custom" : `Rs ${part[opt.key]}`}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: SUMMARY & INSTALLMENTS */}
        <div className="lg:col-span-4 lg:sticky lg:top-8 h-fit space-y-4">
          <div className="bg-white p-6 rounded-3xl shadow-xl border-t-4 border-blue-600">
            <h2 className="font-black uppercase italic text-sm mb-4 text-slate-400">Selected Items ({cart.length})</h2>
            <div className="space-y-2 max-h-[200px] overflow-y-auto mb-6 custom-scrollbar pr-1">
              {cart.map(item => (
                <div key={`${item.id}-${item.quality}`} className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex justify-between items-center">
                  <div className="flex-1">
                    <p className="text-[10px] font-black uppercase text-slate-800 leading-none">{item.name}</p>
                    <p className="text-[9px] font-bold text-blue-500 uppercase mt-1">{item.quality} | Rs {item.price}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => updateQty(item.id, item.price, -1)} className="w-6 h-6 bg-white border border-slate-200 rounded text-xs font-bold">-</button>
                    <span className="text-sm font-black w-4 text-center">{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.price, 1)} className="w-6 h-6 bg-white border border-slate-200 rounded text-xs font-bold">+</button>
                  </div>
                </div>
              ))}
            </div>

            {/* PLAN SELECTION */}
            <div className="mb-4 pt-4 border-t border-slate-100">
              <p className="text-[10px] font-black uppercase text-slate-400 mb-2">Change to Installment Plan</p>
              <div className="grid grid-cols-2 gap-2">
                <button 
                  onClick={() => setSelectedPlan(selectedPlan === "plan1" ? null : "plan1")}
                  className={`py-2 rounded-xl font-bold text-xs border transition-all ${selectedPlan === "plan1" ? "bg-slate-900 text-white border-slate-900" : "bg-white text-slate-500 border-slate-200"}`}
                >Plan 1 (Short)</button>
                <button 
                  onClick={() => setSelectedPlan(selectedPlan === "plan2" ? null : "plan2")}
                  className={`py-2 rounded-xl font-bold text-xs border transition-all ${selectedPlan === "plan2" ? "bg-slate-900 text-white border-slate-900" : "bg-white text-slate-500 border-slate-200"}`}
                >Plan 2 (Long)</button>
              </div>
            </div>

            {/* INSTALLMENT DETAILS CARD */}
            {currentPlan ? (
              <div className="bg-blue-600 text-white p-5 rounded-2xl mb-6 shadow-lg shadow-blue-100 space-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
                <div className="flex justify-between items-end border-b border-white/20 pb-2">
                  <span className="text-[9px] font-bold uppercase opacity-80">Total Inst. Price</span>
                  <span className="text-xl font-black">Rs {currentPlan.total.toLocaleString()}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/10 p-2 rounded-xl">
                    <p className="text-[8px] font-bold uppercase opacity-70">Advance</p>
                    <p className="font-black text-sm">Rs {currentPlan.advance.toLocaleString()}</p>
                  </div>
                  <div className="bg-white/10 p-2 rounded-xl">
                    <p className="text-[8px] font-bold uppercase opacity-70">Duration</p>
                    <p className="font-black text-sm">{currentPlan.months}</p>
                  </div>
                </div>
                <div className="bg-white text-blue-600 p-3 rounded-xl flex justify-between items-center">
                  <span className="text-[10px] font-black uppercase">Monthly Pay</span>
                  <span className="text-lg font-black tracking-tight">Rs {currentPlan.monthly.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[9px] font-bold opacity-80 px-1">
                   <span>WEEKLY: Rs {currentPlan.weekly}</span>
                   <span>DAILY (+50): Rs {currentPlan.daily}</span>
                </div>
              </div>
            ) : (
              <div className="flex justify-between items-center py-4 px-2 mb-4 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                 <span className="text-[10px] font-bold text-slate-400 uppercase">Cash Amount</span>
                 <span className="font-black text-slate-900">Rs {total.toLocaleString()}</span>
              </div>
            )}

            <button 
              onClick={() => router.push(`/customer?bike=${bikeType}`)} 
              disabled={cart.length === 0}
              className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest text-sm transition-all shadow-xl ${
                cart.length > 0 ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-slate-200 text-slate-400 cursor-not-allowed"
              }`}
            >
              Checkout Now →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PartsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PartsContent />
    </Suspense>
  );
}