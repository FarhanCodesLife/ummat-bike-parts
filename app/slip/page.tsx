"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quality: string;
  qty: number; // Qty add kar di gayi hai
};

function SlipContent() {
  const params = useSearchParams();
  const router = useRouter();

  const [data, setData] = useState<{ cart: CartItem[]; cust: any; bike: string }>({
    cart: [],
    cust: {},
    bike: "",
  });

  useEffect(() => {
    try {
      const urlCart = params.get("cart");
      const urlCust = params.get("cust");
      const urlBike = params.get("bike") || "";

      const finalCart = urlCart
        ? JSON.parse(decodeURIComponent(urlCart))
        : JSON.parse(localStorage.getItem("bike_cart") || "[]");

      const finalCust = urlCust
        ? JSON.parse(decodeURIComponent(urlCust))
        : JSON.parse(localStorage.getItem("customer_form") || "{}");

      setData({ cart: finalCart, cust: finalCust, bike: urlBike });
    } catch (error) {
      console.error("Error parsing data", error);
    }
  }, [params]);

  // Total calculation with quantity
  const total = data.cart.reduce((sum, item) => sum + item.price * (item.qty || 1), 0);

  const startNewBill = () => {
    if (confirm("Are you sure you want to clear all data and start a new bill?")) {
      localStorage.removeItem("bike_cart");
      localStorage.removeItem("customer_form");
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-2 sm:px-4">
      <div
        id="slip-print-area"
        className="max-w-3xl mx-auto bg-white p-4 sm:p-8 border shadow-lg text-black rounded-sm print:shadow-none print:border-none print:p-0"
      >
        {/* SHOP HEADER */}
        <div className="text-center border-b-2 border-black pb-4 mb-6">
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter italic">
           UMMAT Bike Parts Shop
          </h1>
          <p className="text-xs sm:text-sm font-bold">UMMAT Electronics & Bike Exchange Garibabad Ghoth | CONTACT: 0344-2598379</p>
          <div className="mt-4 inline-block border-2 border-black px-4 sm:px-6 py-1 font-black text-base sm:text-lg bg-gray-50 uppercase">
            Installment Memo – {data.bike} cc
          </div>
        </div>

        {/* CUSTOMER & VEHICLE INFO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8 text-sm mb-6 border-b pb-6">
          <p className="flex justify-between border-b border-gray-100 pb-1">
            <b>Customer Name:</b> <span>{data.cust.name || "__________"}</span>
          </p>
          <p className="flex justify-between border-b border-gray-100 pb-1">
            <b>Date:</b> <span>{data.cust.date || "__________"}</span>
          </p>
          <p className="flex justify-between border-b border-gray-100 pb-1">
            <b>Reg No:</b> <span>{data.cust.regNo || "__________"}</span>
          </p>
          <p className="flex justify-between border-b border-gray-100 pb-1">
            <b>Color:</b> <span>{data.cust.color || "__________"}</span>
          </p>
          <p className="flex justify-between border-b border-gray-100 pb-1">
            <b>Chassis No:</b> <span>{data.cust.chassisNo || "__________"}</span>
          </p>
          <p className="flex justify-between border-b border-gray-100 pb-1">
            <b>Engine No:</b> <span>{data.cust.engineNo || "__________"}</span>
          </p>
          <p className="flex justify-between border-b border-gray-100 pb-1 font-bold">
            <b>Account No:</b> <span>{data.cust.accountNo || "__________"}</span>
          </p>
        </div>

        {/* PARTS TABLE */}
        <table className="w-full border-2 border-black text-sm mb-6">
          <thead>
            <tr className="bg-gray-200 border-b-2 border-black">
              <th className="border-r-2 border-black p-2 text-left w-2/5">Item Description</th>
              <th className="border-r-2 border-black p-2 text-center w-1/5">Quality</th>
              <th className="border-r-2 border-black p-2 text-right">Price</th>
              <th className="p-2 text-right">Amount</th>
            </tr>
          </thead>

          <tbody>
            {data.cart.map((item, i) => (
              <tr key={i} className="border-b border-gray-300 break-inside-avoid">
                <td className="border-r-2 border-black p-2 font-medium">{item.name}</td>
                <td className="border-r-2 border-black p-2 text-center">{item.quality}</td>
                <td className="border-r-2 border-black p-2 text-right font-mono">
                  {item.price.toLocaleString()}
                </td>
                <td className="p-2 text-right font-bold font-mono">
                  {(item.price * (item.qty || 1)).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr className="font-black bg-gray-100 border-t-2 border-black">
              {/* Corrected Colspan: 3 columns for label, 1 for value */}
              <td colSpan={3} className="border-r-2 border-black p-3 text-right text-lg uppercase">
                Grand Total (PKR)
              </td>
              <td className="p-3 text-right text-xl font-mono underline decoration-double">
                {total.toLocaleString()}
              </td>
            </tr>
          </tfoot>
        </table>

        {/* SIGNATURES */}
        <div className="flex justify-between mt-16 mb-4 px-4">
          <div className="text-center border-t border-black w-32 sm:w-48 pt-1 text-xs font-bold uppercase">
            Customer Signature
          </div>
          <div className="text-center border-t border-black w-32 sm:w-48 pt-1 text-xs font-bold uppercase">
            Authorized Signature
          </div>
        </div>

        {/* FOOTER BUTTONS */}
        <div className="flex flex-wrap gap-3 justify-center mt-10 no-print">
          <button
            onClick={() => window.print()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold shadow-md transition-all"
          >
            PRINT / SAVE PDF 📄
          </button>

          <button
            onClick={() => window.history.back()}
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-bold shadow-md transition-all"
          >
            EDIT INFO
          </button>

          <button
            onClick={startNewBill}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold shadow-md transition-all"
          >
            NEW BILL
          </button>
        </div>

        {/* PRINT CSS */}
        <style jsx global>{`
          @media print {
            .no-print {
              display: none !important;
            }
            body {
              background: white !important;
              margin: 0;
              padding: 0;
            }
            @page {
              size: A4 portrait;
              margin: 10mm;
            }
            #slip-print-area {
              box-shadow: none !important;
              border: none !important;
              width: 100% !important;
              max-width: none !important;
            }
            table {
              page-break-inside: auto;
            }
            tr {
              page-break-inside: avoid;
              page-break-after: auto;
            }
          }
        `}</style>
      </div>
    </div>
  );
}

export default function SlipPage() {
  return (
    <Suspense fallback={<div className="p-20 text-center font-bold">Generating Slip...</div>}>
      <SlipContent />
    </Suspense>
  );
}