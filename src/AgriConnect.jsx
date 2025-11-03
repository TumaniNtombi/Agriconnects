import React from "react";
import { ShoppingCart, CloudSun, Truck, Users } from "lucide-react";
import { motion } from "framer-motion";
import "./App.css";



export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 text-gray-800">
      {/* Hero Section */}
      <header className="text-center py-20 px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 text-green-800"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          AgriConnect – Farmer's Marketplace
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto text-lg text-gray-600 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Empowering smallholder farmers through technology — connecting them
          directly to buyers, weather insights, and logistics. Designed for
          accessibility and usability across all literacy levels.
        </motion.p>
        <motion.button
          className="bg-green-700 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:bg-green-800 transition"
          whileHover={{ scale: 1.05 }}
        >
          Explore Marketplace
        </motion.button>
      </header>

      {/* Features Section */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-16 py-16 bg-white shadow-inner">
        {[
          {
            icon: <ShoppingCart className="w-10 h-10 text-green-700" />,
            title: "Direct Market Access",
            desc: "Farmers connect directly with verified buyers, increasing transparency and fair pricing.",
          },
          {
            icon: <CloudSun className="w-10 h-10 text-green-700" />,
            title: "Real-Time Weather Data",
            desc: "Integrated climate tools help farmers plan better, avoid losses, and boost productivity.",
          },
          {
            icon: <Truck className="w-10 h-10 text-green-700" />,
            title: "Smart Logistics",
            desc: "A simple delivery coordination feature ensures farm produce reaches buyers efficiently.",
          },
          {
            icon: <Users className="w-10 h-10 text-green-700" />,
            title: "Inclusive Design",
            desc: "Built for low-literacy users with visual cues, voice prompts, and multi-language support.",
          },
        ].map((feature, i) => (
          <motion.div
            key={i}
            className="bg-green-50 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* About Section */}
      <section className="py-20 px-6 md:px-20 text-center bg-green-800 text-white">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Designed for Africa’s Growth
        </motion.h2>
        <motion.p
          className="max-w-3xl mx-auto text-lg text-green-100 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          AgriConnect combines UX research and user testing with smallholder
          farmers across Africa. Every feature—from weather forecasts to
          logistics coordination—is optimized for simplicity, trust, and impact.
          The goal: empower farmers to thrive in the digital economy.
        </motion.p>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 bg-green-900 text-green-200 text-sm">
        © {new Date().getFullYear()} AgriConnect. Built with love and purpose for African farmers.
      </footer>
    </div>
  );
}

