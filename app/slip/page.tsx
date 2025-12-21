"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useEffect, useRef, useState, useMemo } from "react";

// --- INSTALLMENT CALCULATION LOGIC ---
function calculateInstallment(price: number, percent1: number, advDivide1: number, percent2: number, advDivide2: number) {
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
    const months = plan.monthsMap.find(([min, max]) => total >= min && total <= (max as number))?.[2] || 12;
    const advance = total / plan.divide;
    const remaining = total - advance;
    const monthly = remaining / (months as number);
    const weekly = monthly / 4;
    const daily = monthly / 30 + 50;

    result[plan.key] = {
      total: Math.round(total),
      months: `${months} Months`,
      advance: Math.round(advance),
      monthly: Math.round(monthly),
      weekly: Math.round(weekly),
      daily: Math.round(daily),
    };
  }
  return result;
}

type CartItem = {
  id: number;
  name: string;
  price: number;
  quality: string;
  qty: number;
};

function SlipContent() {
  const params = useSearchParams();
  const router = useRouter();
  const printRef = useRef<HTMLDivElement>(null);

  const [data, setData] = useState<{ cart: CartItem[]; cust: any; bike: string; selectedPlan: string | null }>({
    cart: [],
    cust: {},
    bike: "",
    selectedPlan: null,
  });

  useEffect(() => {
    try {
      const urlCart = params.get("cart");
      const urlCust = params.get("cust");
      const urlBike = params.get("bike") || "70";

      const finalCart = urlCart
        ? JSON.parse(decodeURIComponent(urlCart))
        : JSON.parse(localStorage.getItem("bike_cart") || "[]");

      const finalCust = urlCust
        ? JSON.parse(decodeURIComponent(urlCust))
        : JSON.parse(localStorage.getItem("customer_form") || "{}");

      const savedPlan = localStorage.getItem("selected_plan");

      setData({ cart: finalCart, cust: finalCust, bike: urlBike, selectedPlan: savedPlan });
    } catch (error) {
      console.error("Error parsing data", error);
    }
  }, [params]);

  const cashTotal = useMemo(() => {
    return data.cart.reduce((sum, item) => sum + item.price * (item.qty || 1), 0);
  }, [data.cart]);

  const instResults = useMemo(() => {
    return calculateInstallment(cashTotal, 21, 2.75, 41, 5.5);
  }, [cashTotal]);

  const currentPlan = data.selectedPlan ? instResults[data.selectedPlan] : null;

  const handleSavePDF = async () => {
    const html2canvas = (await import("html2canvas")).default;
    const { jsPDF } = await import("jspdf");

    if (printRef.current) {
      try {
        const canvas = await html2canvas(printRef.current, {
          scale: 2,
          useCORS: true,
          logging: false,
          backgroundColor: "#ffffff",
          // Is function se hum html2canvas ko crash hone se bachate hain
          onclone: (clonedDoc) => {
            const elements = clonedDoc.getElementsByTagName("*");
            for (let i = 0; i < elements.length; i++) {
              const el = elements[i] as HTMLElement;
              // Modern colors ko standard hex se replace kar rahe hain
              if (window.getComputedStyle(el).color.includes("lab")) {
                el.style.color = "#000000";
              }
              if (window.getComputedStyle(el).backgroundColor.includes("lab")) {
                el.style.backgroundColor = "#ffffff";
              }
            }
          }
        });
        
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save(`Slip_${data.cust.name || "Order"}.pdf`);
      } catch (err) {
        console.error("PDF generation error:", err);
        alert("PDF Error: Try standard Print button instead.");
      }
    }
  };

  const startNewBill = () => {
    if (confirm("Are you sure you want to clear all data and start a new bill?")) {
      localStorage.clear();
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-2 sm:px-4">
      {/* Print-only clean styling */}
      <style jsx global>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; padding: 0 !important; }
          .print-container { 
            border: none !important; 
            box-shadow: none !important; 
            margin: 0 !important; 
            width: 100% !important;
          }
        }
      `}</style>

      {/* Main Slip Area */}
      <div
        ref={printRef}
        id="slip-print-area"
        className="max-w-3xl mx-auto bg-white p-6 sm:p-10 border shadow-lg text-black rounded-sm print-container"
      >
        {/* SHOP HEADER */}
        <div className="text-center border-b-4 border-black pb-4 mb-6">
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter italic leading-none">
            UMMAT Bike Parts Shop
          </h1>
          <p className="text-xs sm:text-sm font-bold mt-2">
            UMMAT Electronics & Bike Exchange Garibabad Ghoth | CONTACT: 0344-2598379
          </p>
          <div className="mt-4 inline-block border-2 border-black px-6 py-1 font-black text-lg bg-black text-white uppercase tracking-widest">
            {currentPlan ? "Installment Memo" : "Cash Memo"} – {data.bike}cc
          </div>
        </div>

        {/* CUSTOMER & VEHICLE INFO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3 text-sm mb-8">
          {[
            { label: "Customer Name", value: data.cust.name },
            { label: "Date", value: data.cust.date },
            { label: "Reg No", value: data.cust.regNo },
            { label: "Color", value: data.cust.color },
            { label: "Chassis No", value: data.cust.chassisNo },
            { label: "Engine No", value: data.cust.engineNo },
            { label: "Account No", value: data.cust.accountNo, bold: true },
          ].map((info, idx) => (
            <p key={idx} className={`flex justify-between border-b border-gray-200 pb-1 ${info.bold ? 'font-bold text-lg' : ''}`}>
              <span className="text-gray-600 font-bold">{info.label}:</span>
              <span>{info.value || "__________"}</span>
            </p>
          ))}
        </div>

        {/* PARTS TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full border-2 border-black text-sm mb-6">
            <thead>
              <tr className="bg-gray-100 border-b-2 border-black">
                <th className="border-r-2 border-black p-3 text-left">Item Description</th>
                <th className="border-r-2 border-black p-3 text-center w-24">Quality</th>
                <th className="border-r-2 border-black p-3 text-right w-28">Price</th>
                <th className="p-3 text-right w-32">Amount</th>
              </tr>
            </thead>
            <tbody>
              {data.cart.map((item, i) => (
                <tr key={i} className="border-b border-gray-300">
                  <td className="border-r-2 border-black p-3 font-medium">
                    {item.name} <span className="text-gray-500 text-xs">x{item.qty}</span>
                  </td>
                  <td className="border-r-2 border-black p-3 text-center capitalize">{item.quality}</td>
                  <td className="border-r-2 border-black p-3 text-right font-mono">{item.price.toLocaleString()}</td>
                  <td className="p-3 text-right font-bold font-mono">{(item.price * (item.qty || 1)).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="font-black bg-gray-50 border-t-2 border-black">
                <td colSpan={3} className="border-r-2 border-black p-3 text-right uppercase tracking-wider">Total Cash Amount (PKR)</td>
                <td className="p-3 text-right font-mono text-lg">{cashTotal.toLocaleString()}</td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* INSTALLMENT BREAKDOWN */}
        {currentPlan && (
          <div className="border-2 border-black p-5 mb-8 bg-gray-50 rounded-lg">
            <h3 className="text-center font-black uppercase border-b-2 border-black mb-4 pb-2 text-xl">
              Installment Plan:  {currentPlan.months}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3">
              <p className="flex justify-between border-b border-gray-300 pb-1"><b>Total Payable:</b> <span className="font-black text-xl">Rs {currentPlan.total.toLocaleString()}</span></p>
              <p className="flex justify-between border-b border-gray-300 pb-1"><b>Advance Paid:</b> <span className="font-bold">Rs {currentPlan.advance.toLocaleString()}</span></p>
              <p className="flex justify-between border-b border-gray-300 pb-1 text-blue-800"><b>Monthly Installment:</b> <span className="font-black">Rs {currentPlan.monthly.toLocaleString()}</span></p>
              <p className="flex justify-between border-b border-gray-300 pb-1"><b>Duration:</b> <span className="font-bold">{currentPlan.months}</span></p>
            </div>
          </div>
        )}

        {/* SIGNATURES */}
        <div className="flex justify-between mt-20 mb-6 px-4">
          <div className="text-center border-t-2 border-black w-48 pt-2 text-xs font-bold uppercase">Customer Signature</div>
          <div className="text-center border-t-2 border-black w-48 pt-2 text-xs font-bold uppercase">Authorized Stamp</div>
        </div>

        <p className="text-[10px] text-center text-gray-400 italic mt-10">Software by Gemini AI - All Rights Reserved</p>
      </div>

      {/* ACTION BUTTONS (Hidden in Print) */}
      <div className="max-w-3xl mx-auto mt-8 no-print px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button 
            onClick={() => router.push(`/parts?bike=${data.bike}`)}
            className="p-4 bg-gray-800 text-white rounded-xl font-bold hover:bg-black flex items-center justify-center gap-2"
          >
            ← EDIT ITEMS
          </button>
          <button 
            onClick={handleSavePDF}
            className="p-4 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 shadow-lg"
          >
            SAVE AS PDF 💾
          </button>
          <button 
            onClick={() => window.print()} 
            className="p-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 shadow-lg"
          >
            PRINT SLIP 📄
          </button>
          <button 
            onClick={startNewBill} 
            className="p-4 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 shadow-lg"
          >
            NEW BILL 🗑️
          </button>
        </div>
      </div>
    </div>
  );
}

export default function SlipPage() {
  return (
    <Suspense fallback={<div className="p-20 text-center font-bold animate-pulse">Generating Slip...</div>}>
      <SlipContent />
    </Suspense>
  );
}