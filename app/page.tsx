"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion"; // Animation ke liye: npm install framer-motion

export default function Home() {
  const router = useRouter();

  const bikeOptions = [
    {
      id: "70",
      title: "70",
      description: "Standard Spare Parts & Accessories",
      color: "from-blue-500 to-blue-700",
      image: "https://www.motorguider.com/wp-content/uploads/2022/08/Honda-CD-70-2023-Price-in-Pakistan-1200x675.jpg", // Generic bike image
      path: "/parts?bike=70",
    },
    {
      id: "125",
      title: "125",
      description: "Premium Performance & Engine Parts",
      color: "from-red-500 to-red-700",
      image: "https://assets-autodeals.s3.amazonaws.com/17482884955061.jpeg", // Generic bike image
      path: "/parts?bike=125",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f172a] text-white px-4">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-red-900/20 blur-[120px] rounded-full"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">
          <span className="text-blue-500 text-stroke">UMMAT</span> Bike Parts 
        </h1>
        <p className="text-gray-400 mt-2 font-medium tracking-widest uppercase text-sm">
          Select Vehicle Category to Continue
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {bikeOptions.map((bike, index) => (
          <motion.div
            key={bike.id}
            initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push(bike.path)}
            className="group cursor-pointer relative overflow-hidden rounded-3xl bg-slate-800/50 border border-slate-700 hover:border-white/30 transition-all duration-500 shadow-2xl"
          >
            {/* Image Overlay */}
            <div className="h-64 relative overflow-hidden">
              <img 
                src={bike.image} 
                alt={bike.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              <div className={`absolute top-4 right-4 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${bike.id === '70' ? 'bg-blue-500' : 'bg-red-500'}`}>
                Economy Class
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <h2 className="text-3xl font-black italic uppercase italic">{bike.title}</h2>
              <p className="text-gray-400 mt-1 mb-6 text-sm">{bike.description}</p>
              
              <div className={`w-full py-4 rounded-xl text-center font-bold uppercase tracking-widest transition-all ${bike.id === '70' ? 'bg-blue-600 group-hover:bg-blue-500 shadow-blue-500/20' : 'bg-red-600 group-hover:bg-red-500 shadow-red-500/20'} shadow-lg`}>
                Select Engine {bike.id}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <footer className="mt-16 text-gray-500 text-xs font-medium tracking-widest uppercase">
        Professional Inventory Management System v2.0
      </footer>
    </div>
  );
}