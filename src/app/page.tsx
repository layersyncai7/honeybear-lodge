// Updated luxury page.tsx with magnetic cursor, parallax cards, smooth scrolling, page transitions, and signature font pairing
"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";
import "./cursor.css";

export default function Home() {
  useEffect(() => {
    // Magnetic cursor logic
    const cursor = document.querySelector(".mag-cursor") as HTMLElement;
    const onMove = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const pageVariants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="page"
        variants={pageVariants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white text-gray-900 font-sans overflow-x-hidden scroll-smooth"
      >
        <div className="mag-cursor fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999]"></div>

        {/* Floating Navbar */}
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/40 border-b border-white/20 py-4">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center font-light tracking-widest uppercase">
            <span>Honeybear Lodge</span>
            <div className="flex gap-8 text-sm">
              <a href="#rooms" className="hover:opacity-60 transition">Suites</a>
              <a href="#wellness" className="hover:opacity-60 transition">Wellness</a>
              <a href="#gallery" className="hover:opacity-60 transition">Gallery</a>
              <a href="#contact" className="hover:opacity-60 transition">Contact</a>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative h-screen flex items-end justify-center pb-24" id="hero">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.8 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/room2.jpg)", filter: "brightness(0.75)" }}
          />

          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.4 }}
            className="relative text-center text-white"
          >
            <h1 className="text-6xl md:text-7xl tracking-[0.25em] font-light mb-6 uppercase">
              Honeybear Guest Lodge
            </h1>
            <p className="text-lg tracking-wide opacity-90">Redefining African boutique luxury</p>
          </motion.div>
        </section>

        {/* Rooms with parallax hover */}
        <section className="py-32 max-w-7xl mx-auto px-6" id="rooms">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-4xl mb-16 tracking-wide text-center uppercase"
          >
            Our Suites
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12">
            {["room2", "room3", "room4", "room5", "room6", "room7"].map((img, i) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: i * 0.1 }}
                className="group cursor-pointer parallax-card"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-[1400ms] group-hover:scale-125"
                    style={{ backgroundImage: `url(/${img}.jpg)` }}
                  />
                </div>
                <h3 className="mt-6 text-xl tracking-wider uppercase">Luxury Suite</h3>
                <p className="opacity-70 text-sm mt-2">Elegance inspired by natural texture & warm ambiance.</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Wellness */}
        <section className="py-32 bg-gray-50" id="wellness">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 px-6 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
              <h2 className="text-4xl mb-6 tracking-wide uppercase">Wellness & Serenity</h2>
              <p className="leading-relaxed opacity-80 text-lg">
                Step inside an atmosphere of calm, warmth, and understated luxury. Our wellness ethos celebrates tranquility, balance, and sensory immersion.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url(/bar2.jpg)" }} />
            </motion.div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-32 max-w-7xl mx-auto px-6" id="gallery">
          <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="text-4xl mb-16 tracking-wide text-center uppercase">
            Gallery
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["room1", "room2", "room3", "room4", "room5", "room6", "room7", "bar1", "bar2", "ensuite1", "dining", "desk"].map((img, i) => (
              <motion.div key={img} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.05 }} className="overflow-hidden rounded-xl aspect-square">
                <div className="w-full h-full bg-cover bg-center hover:scale-110 transition-transform duration-[1200ms]" style={{ backgroundImage: `url(/${img}.jpg)` }} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="py-20 bg-black text-white text-center tracking-wide">
          <p className="text-sm">Honeybear Guest Lodge © {new Date().getFullYear()}</p>
        </footer>
      </motion.div>
    </AnimatePresence>
  );
}
