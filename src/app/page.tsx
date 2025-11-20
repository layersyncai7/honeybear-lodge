'use client';

import React from "react";
import { motion } from "framer-motion";
import Magnetic from "@/components/Magnetic";
import ParallaxCard from "@/components/ParallaxCard";

export default function Page() {
  return (
    <main className="overflow-hidden">

      {/* HERO SECTION */}
      <section
        className="relative h-[90vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/room2.jpg')",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-6xl md:text-8xl font-light tracking-tight"
        >
          Honeybear Lodge
        </motion.h1>
      </section>

      {/* ROOMS GRID */}
      <section className="py-24 max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {["room2", "room3", "room4", "room5", "room6", "room7"].map((room, i) => (
          <ParallaxCard key={i}>
            <div
              className="rounded-2xl shadow-lg h-64 bg-cover bg-center"
              style={{ backgroundImage: `url('/${room}.jpg')` }}
            />
          </ParallaxCard>
        ))}
      </section>

      {/* WELLNESS SECTION */}
      <section
        className="relative h-[70vh] bg-fixed bg-cover bg-center flex items-center"
        style={{
          backgroundImage: "url('/bar2.jpg')",
        }}
      >
        <div className="bg-black/40 w-full h-full flex items-center">
          <div className="max-w-3xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white text-5xl font-light"
            >
              Wellness & Comfort
            </motion.h2>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {[
          "room2",
          "room3",
          "room4",
          "room5",
          "room6",
          "room7",
          "bar1",
          "bar2",
          "ensuite1",
          "dining",
          "desk",
        ].map((img, i) => (
          <Magnetic key={i}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="h-64 rounded-xl bg-cover bg-center shadow-lg"
              style={{ backgroundImage: `url('/${img}.jpg')` }}
            />
          </Magnetic>
        ))}
      </section>
    </main>
  );
}
