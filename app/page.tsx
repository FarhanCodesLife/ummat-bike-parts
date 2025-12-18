"use client";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const router = useRouter();
  
  // States
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState("");

  // Check if already logged in
  useEffect(() => {
    const auth = localStorage.getItem("isAuth");
    if (auth === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  // Login Handler (Aap apna password yahan set kar sakte hain)
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === "0344") { // <--- Aapka Password
      localStorage.setItem("isAuth", "true");
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Ghalat Passcode! Dubara koshish karen.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    setIsLoggedIn(false);
  };

  const bikeOptions = [
    {
      id: "70",
      title: "Honda 70cc",
      description: "Economy Class Spare Parts",
      image: "https://www.motorguider.com/wp-content/uploads/2022/08/Honda-CD-70-2023-Price-in-Pakistan-1200x675.jpg",
      path: "/parts?bike=70",
    },
    {
      id: "125",
      title: "Honda 125cc",
      description: "Premium Performance Parts",
      image: "https://assets-autodeals.s3.amazonaws.com/17482884955061.jpeg",
      path: "/parts?bike=125",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#020617] text-white px-4 relative overflow-hidden">
      
      {/* Dynamic Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-red-600/10 blur-[120px] rounded-full"></div>
      </div>

      <AnimatePresence mode="wait">
        {!isLoggedIn ? (
          /* LOGIN FORM SCREEN */
          <motion.div
            key="login"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="w-full max-w-md bg-slate-900/50 backdrop-blur-xl p-8 rounded-[2.5rem] border border-slate-800 shadow-2xl"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-black italic tracking-tighter text-blue-500 uppercase">Admin Access</h2>
              <p className="text-slate-500 text-xs font-bold mt-2 tracking-widest uppercase">Enter Passcode to Enter Portal</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="password"
                placeholder="****"
                className="w-full bg-slate-800 border-2 border-slate-700 p-4 rounded-2xl text-center text-2xl tracking-[1em] focus:border-blue-500 outline-none transition-all font-black text-white"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                autoFocus
              />
              {error && <p className="text-red-500 text-xs text-center font-bold animate-pulse">{error}</p>}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 py-4 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl shadow-blue-900/20 transition-all"
              >
                Unlock Portal
              </button>
            </form>
          </motion.div>
        ) : (
          /* MAIN CONTENT (BIKE SELECTION) */
          <motion.div
            key="portal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full max-w-5xl"
          >
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-none">
                  <span className="text-blue-500">UMMAT</span> BIKE PARTS
                </h1>
                <p className="text-slate-500 mt-2 font-black tracking-widest uppercase text-[10px] md:text-xs italic">
                  Inventory Management & Billing System
                </p>
              </div>
              <button 
                onClick={handleLogout}
                className="bg-slate-800 hover:bg-red-900/40 text-slate-400 hover:text-red-500 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-slate-700 transition-all"
              >
                Logout 🔒
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {bikeOptions.map((bike, index) => (
                <motion.div
                  key={bike.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  onClick={() => router.push(bike.path)}
                  className="group cursor-pointer bg-slate-900/40 border border-slate-800 rounded-[2.5rem] overflow-hidden hover:border-blue-500/50 transition-all shadow-2xl shadow-black"
                >
                  <div className="h-56 relative overflow-hidden">
                    <img
                      src={bike.image}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                      alt={bike.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>
                  </div>
                  <div className="p-8">
                    <h2 className="text-4xl font-black italic uppercase italic tracking-tighter mb-2">{bike.title}</h2>
                    <p className="text-slate-500 text-sm mb-6 font-medium">{bike.description}</p>
                    <div className="w-full py-4 rounded-2xl bg-slate-800 group-hover:bg-blue-600 transition-colors text-center font-black uppercase tracking-widest text-xs">
                      Open Inventory
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="mt-16 text-slate-600 text-[10px] font-black tracking-[0.3em] uppercase opacity-50">
        System Security Active | Encrypted Portal
      </footer>
    </div>
  );
}