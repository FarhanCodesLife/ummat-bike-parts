"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect, Suspense } from "react";

// 1. Types define karen (TypeScript safety ke liye)
interface CustomerFormState {
  name: string;
  regNo: string;
  chassisNo: string;
  engineNo: string;
  color: string;
  accountNo: string;
  date: string;
}

// 2. Main Logic Component
function CustomerFormContent() {
  const params = useSearchParams();
  const router = useRouter();
  const bike = params.get("bike") || "70";

  const [form, setForm] = useState<CustomerFormState>({
    name: "",
    regNo: "",
    chassisNo: "",
    engineNo: "",
    color: "",
    accountNo: "",
    date: new Date().toISOString().split('T')[0],
  });

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Security Check 🔒
    const auth = localStorage.getItem("isAuth");
    if (auth !== "true") {
      router.push("/");
      return;
    }

    const savedForm = localStorage.getItem("customer_form");
    if (savedForm) setForm(JSON.parse(savedForm));
    setIsLoaded(true);
  }, [router]);

  useEffect(() => {
    if (isLoaded) localStorage.setItem("customer_form", JSON.stringify(form));
  }, [form, isLoaded]);

  const submit = () => {
    const cartData = localStorage.getItem("bike_cart");
    if (!cartData || JSON.parse(cartData).length === 0) {
      alert("Error: No parts selected in cart!");
      router.push(`/parts?bike=${bike}`);
      return;
    }
    if (!form.name || !form.regNo) {
      alert("Please fill in Customer Name and Registration No.");
      return;
    }
    router.push(`/slip?bike=${bike}`);
  };

  if (!isLoaded) return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f1f5f9] py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white shadow-2xl rounded-[2rem] overflow-hidden border border-slate-100">
        
        {/* Header Section */}
        <div className="bg-slate-900 p-8 text-center relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-500"></div>
          <h2 className="text-3xl font-black text-white uppercase tracking-tighter italic">
            Customer <span className="text-blue-400">Details</span>
          </h2>
          <p className="text-slate-400 text-xs mt-2 font-bold uppercase tracking-[0.2em]">Workshop Management System</p>
        </div>

        <div className="p-8 md:p-12 space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2 group">
              <label className="block text-[10px] font-black text-slate-400 uppercase mb-2 ml-1 tracking-widest">Customer Name *</label>
              <input
                type="text"
                placeholder="Enter Full Name"
                className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-500 focus:bg-white transition-all outline-none font-bold text-slate-700"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>

            <div className="group">
              <label className="block text-[10px] font-black text-slate-400 uppercase mb-2 ml-1 tracking-widest">Registration No *</label>
              <input
                type="text"
                placeholder="ABC-1234"
                className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-500 focus:bg-white transition-all outline-none font-bold text-slate-700"
                value={form.regNo}
                onChange={(e) => setForm({ ...form, regNo: e.target.value })}
              />
            </div>

            <div className="group">
              <label className="block text-[10px] font-black text-slate-400 uppercase mb-2 ml-1 tracking-widest">Entry Date</label>
              <input
                type="date"
                className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-500 focus:bg-white transition-all outline-none font-bold text-slate-700"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
              />
            </div>

            <div className="group">
              <label className="block text-[10px] font-black text-slate-400 uppercase mb-2 ml-1 tracking-widest">Chassis Number</label>
              <input
                type="text"
                placeholder="Optional"
                className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-500 focus:bg-white transition-all outline-none font-bold text-slate-700"
                value={form.chassisNo}
                onChange={(e) => setForm({ ...form, chassisNo: e.target.value })}
              />
            </div>

            <div className="group">
              <label className="block text-[10px] font-black text-slate-400 uppercase mb-2 ml-1 tracking-widest">Engine Number</label>
              <input
                type="text"
                placeholder="Optional"
                className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-500 focus:bg-white transition-all outline-none font-bold text-slate-700"
                value={form.engineNo}
                onChange={(e) => setForm({ ...form, engineNo: e.target.value })}
              />
            </div>

            <div className="group">
              <label className="block text-[10px] font-black text-slate-400 uppercase mb-2 ml-1 tracking-widest">Bike Color</label>
              <input
                type="text"
                placeholder="Red / Black"
                className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-500 focus:bg-white transition-all outline-none font-bold text-slate-700"
                value={form.color}
                onChange={(e) => setForm({ ...form, color: e.target.value })}
              />
            </div>

            <div className="group">
              <label className="block text-[10px] font-black text-slate-400 uppercase mb-2 ml-1 tracking-widest">Account / ID No</label>
              <input
                type="text"
                placeholder="Optional"
                className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-500 focus:bg-white transition-all outline-none font-bold text-slate-700"
                value={form.accountNo}
                onChange={(e) => setForm({ ...form, accountNo: e.target.value })}
              />
            </div>
          </div>

          <div className="mt-10 space-y-4">
            <button 
              onClick={() => router.push(`/parts?bike=${bike}`)}
              className="w-full bg-blue-50 text-blue-600 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-100 transition-all border-2 border-blue-100 flex items-center justify-center gap-2"
            >
              <span>+</span> Add / Edit Parts
            </button>

            <div className="flex gap-4">
              <button 
                onClick={() => router.back()} 
                className="flex-1 bg-slate-100 text-slate-500 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-200 transition-all"
              >
                Back
              </button>
              
              <button 
                onClick={submit} 
                className="flex-[2] bg-blue-600 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-2"
              >
                Generate Final Slip 📄
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 3. Final Export with Suspense Boundary 🚀
export default function CustomerPage() {
  return (
    <Suspense fallback={
      <div className="h-screen flex items-center justify-center bg-white font-bold text-slate-400 tracking-widest uppercase animate-pulse">
        Loading Customer Portal...
      </div>
    }>
      <CustomerFormContent />
    </Suspense>
  );
}