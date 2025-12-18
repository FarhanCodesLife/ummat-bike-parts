"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { bikeParts } from "@/lib/data";
import { useState, useEffect } from "react";

export default function PartsPage() {
  const params = useSearchParams();
  const router = useRouter();
  const bikeType = params.get("bike") || "70";

  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem("bike_cart");
    if (savedCart) setCart(JSON.parse(savedCart));
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) localStorage.setItem("bike_cart", JSON.stringify(cart));
  }, [cart, isLoaded]);

  const priceOptions = bikeType === "125" 
    ? [{ key: "a125", label: "125-A" }, { key: "b125", label: "125-B" }]
    : [{ key: "a70", label: "70-A" }, { key: "b70", label: "70-B" }];

  const addToCart = (part, price, qualityLabel) => {
    let finalPrice = price;
    if (finalPrice === 0) {
      const customPrice = prompt(`Enter price for ${part.name}:`, "0");
      if (customPrice === null || customPrice === "" || isNaN(customPrice)) return;
      finalPrice = parseInt(customPrice);
    }
    setCart(prev => {
      const otherItems = prev.filter(item => item.id !== part.id);
      return [...otherItems, { id: part.id, name: part.name, price: finalPrice, qty: 1, quality: qualityLabel }];
    });
  };

  const updateQty = (id, price, delta) => {
    setCart(prev =>
      prev
        .map(i => (i.id === id && i.price === price ? { ...i, qty: i.qty + delta } : i))
        .filter(i => i.qty > 0)
    );
  };

  const nextStep = () => {
    if (cart.length === 0) {
      alert("Please select at least one item!");
      return;
    }
    router.push(`/customer?bike=${bikeType}`);
  };

  const filteredParts = bikeParts.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
  const total = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);

  if (!isLoaded) return <div className="h-screen flex items-center justify-center font-bold text-slate-400 uppercase tracking-widest">Loading Inventory...</div>;

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 bg-[#f8fafc] text-slate-900 min-h-screen">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <div>
          <h1 className="text-2xl font-black italic uppercase tracking-tighter">
            Inventory <span className="text-blue-600">Selection</span>
          </h1>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em]">Honda {bikeType}cc Portal</p>
        </div>
        <div className="w-full md:w-auto bg-slate-900 text-white px-6 py-3 rounded-xl text-center md:text-right shadow-lg shadow-slate-200">
          <p className="text-[10px] uppercase opacity-60 tracking-widest font-bold font-mono">Total Balance</p>
          <p className="text-2xl font-black text-blue-400">Rs {total.toLocaleString()}</p>
        </div>
      </div>

      {/* SEARCH BAR */}
      <div className="mb-6 relative">
        <input 
          className="w-full p-4 pl-12 bg-white border-2 border-slate-100 rounded-2xl focus:border-blue-500 transition-all outline-none shadow-sm font-bold text-slate-700" 
          placeholder="Search items (e.g. Break, Engine, Body...)" 
          value={search} 
          onChange={e => setSearch(e.target.value)} 
        />
        <span className="absolute left-4 top-1/2 -translate-y-1/2 grayscale opacity-50">🔍</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT: Items List */}
        <div className="lg:col-span-8 space-y-4">
          
          {/* DESKTOP TABLE (Hidden on Mobile) */}
          <div className="hidden md:block bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-100">
                <tr>
                  <th className="p-4 text-left font-bold text-slate-400 uppercase text-xs tracking-widest">Description</th>
                  {priceOptions.map(p => (
                    <th key={p.key} className="p-4 text-center font-bold text-slate-400 uppercase text-xs tracking-widest">{p.label}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {filteredParts.map(part => (
                  <tr key={part.id} className="hover:bg-blue-50/20 transition-colors">
                    <td className="p-4 font-black text-slate-700 uppercase text-xs">{part.name}</td>
                    {priceOptions.map(opt => {
                      const isSelected = cart.find(i => i.id === part.id && i.quality === opt.label);
                      return (
                        <td key={opt.key} className="p-4 text-center">
                          <button
                            onClick={() => addToCart(part, part[opt.key], opt.label)}
                            className={`min-w-[100px] py-2 rounded-lg font-black text-xs transition-all border ${isSelected ? "bg-blue-600 text-white border-blue-600 shadow-md" : "bg-slate-50 text-slate-500 border-slate-200 hover:bg-slate-200"}`}
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

          {/* MOBILE LIST (Hidden on Desktop) */}
          <div className="md:hidden space-y-3">
            {filteredParts.map(part => (
              <div key={part.id} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm space-y-3">
                <p className="font-black text-slate-800 uppercase text-xs tracking-tight border-b border-slate-50 pb-2">{part.name}</p>
                <div className="grid grid-cols-2 gap-3">
                  {priceOptions.map(opt => {
                    const isSelected = cart.find(i => i.id === part.id && i.quality === opt.label);
                    return (
                      <button
                        key={opt.key}
                        onClick={() => addToCart(part, part[opt.key], opt.label)}
                        className={`py-3 rounded-xl font-black text-[10px] flex flex-col items-center justify-center gap-1 border transition-all ${
                          isSelected ? "bg-blue-600 text-white border-blue-600 shadow-lg scale-95" : "bg-slate-50 text-slate-500 border-slate-100"
                        }`}
                      >
                        <span className="opacity-60 text-[8px] uppercase">{opt.label}</span>
                        <span>{part[opt.key] === 0 ? "Custom" : `Rs ${part[opt.key]}`}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Summary Cart */}
        <div className="lg:col-span-4 lg:sticky lg:top-8 h-fit">
          <div className="bg-white p-6 rounded-3xl shadow-xl border-t-4 border-blue-600">
            <h2 className="font-black uppercase italic tracking-tighter text-lg mb-4 flex justify-between">
              Order Summary <span className="text-blue-600 not-italic">[{cart.length}]</span>
            </h2>

            <div className="space-y-3 max-h-[350px] overflow-y-auto mb-6 pr-1 custom-scrollbar">
              {cart.length === 0 ? (
                <div className="text-center py-10 text-slate-300 font-bold uppercase text-[10px] tracking-widest border-2 border-dashed border-slate-50 rounded-2xl">
                  Empty Quote
                </div>
              ) : (
                cart.map(item => (
                  <div key={`${item.id}-${item.quality}`} className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex justify-between items-center group">
                    <div className="flex-1">
                      <p className="text-[10px] font-black uppercase text-slate-800 leading-none mb-1">{item.name}</p>
                      <p className="text-[9px] font-bold text-blue-500 uppercase">{item.quality} | Rs {item.price}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => updateQty(item.id, item.price, -1)} className="w-6 h-6 bg-white border border-slate-200 rounded text-slate-400 font-bold">-</button>
                      <span className="text-xs font-black">{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.price, 1)} className="w-6 h-6 bg-white border border-slate-200 rounded text-slate-400 font-bold">+</button>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="pt-4 border-t-2 border-slate-100">
              <div className="flex justify-between items-center mb-6">
                <span className="font-black text-slate-400 uppercase text-[10px]">Grand Total</span>
                <span className="font-black text-xl text-slate-900">Rs {total.toLocaleString()}</span>
              </div>
              <button 
                onClick={nextStep} 
                disabled={cart.length === 0}
                className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl transition-all ${
                  cart.length > 0 ? "bg-blue-600 text-white hover:bg-blue-700 shadow-blue-100 active:scale-95" : "bg-slate-200 text-slate-400"
                }`}
              >
                Next: Customer Info →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}