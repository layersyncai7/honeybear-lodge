// src/app/page.tsx
'use client';

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ParallaxCard from "@/components/ParallaxCard";
import Magnetic from "@/components/Magnetic";

export default function HomePage() {
  useEffect(() => {
    const cursor = document.querySelector(".mag-cursor") as HTMLElement | null;
    if (!cursor) return;

    function move(e: MouseEvent) {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    }

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const suites = ["room2","room3","room4","room5","room6","room7"];
  const gallery = [
    "room1","room2","room3","room4","room5","room6","room7",
    "bar1","bar2","ensuite1","dining","desk"
  ];

  // safely return an image path
  const img = (name: string) => `/${name}.jpg`;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="home"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.8 }}
        className="bg-white text-gray-900"
      >
        <div className="mag-cursor fixed pointer-events-none z-[9999]"></div>

        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/30 border-b border-white/10 py-4">
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            <span className="tracking-widest uppercase text-sm">Honeybear Lodge</span>
            <div className="hidden md:flex gap-8">
              <a href="#rooms">Suites</a>
              <a href="#wellness">Wellness</a>
              <a href="#gallery">Gallery</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </nav>

        {/* HERO */}
        <header className="relative h-screen flex items-end">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${img("room2")})` }}
          />
          <div className="absolute inset-0 bg-black/35" />

          <div className="relative z-10 mx-auto max-w-4xl text-center pb-24 px-6">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="text-5xl md:text-7xl font-light tracking-[0.18em] text-white mb-4"
            >
              Honeybear Guest Lodge
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-white/90"
            >
              Redefining boutique African hospitality
            </motion.p>
          </div>
        </header>

        {/* SUITES */}
        <section id="rooms" className="py-28 max-w-7xl mx-auto px-6">
          <h2 className="text-3xl text-center tracking-wide uppercase mb-12">
            Our Suites
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {suites.map((s) => (
              <ParallaxCard key={s}>
                <Magnetic>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <div
                      className="h-[420px] bg-cover bg-center"
                      style={{ backgroundImage: `url(${img(s)})` }}
                    />
                    <div className="p-6">
                      <h3 className="uppercase tracking-wide text-lg">Luxury Suite</h3>
                      <p className="text-sm text-muted-foreground mt-2">
                        Elegant rooms inspired by natural textures.
                      </p>
                    </div>
                  </div>
                </Magnetic>
              </ParallaxCard>
            ))}
          </div>
        </section>

        {/* WELLNESS */}
        <section id="wellness" className="py-28 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl uppercase tracking-wide mb-6">
                Wellness & Serenity
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Experience restorative calm in our curated wellness spaces.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg">
              <div
                className="h-[380px] bg-cover bg-center"
                style={{ backgroundImage: `url(${img("bar2")})` }}
              />
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="py-28 max-w-7xl mx-auto px-6">
          <h2 className="text-3xl text-center tracking-wide uppercase mb-12">
            Gallery
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {gallery.map((g) => (
              <Magnetic key={g}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-xl overflow-hidden shadow-lg"
                >
                  <div
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${img(g)})` }}
                  />
                </motion.div>
              </Magnetic>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer id="contact" className="py-12 bg-black text-white text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm">
              Honeybear Guest Lodge © {new Date().getFullYear()}
            </p>
          </div>
        </footer>
      </motion.div>
    </AnimatePresence>
  );
}
