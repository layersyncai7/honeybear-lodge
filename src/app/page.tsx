'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

/* --------------------------------------------------
   Motion Variants
-------------------------------------------------- */
const heroFade: Variants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 1.1, ease: 'easeOut' },
};

const fadeUp: Variants = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.85, ease: 'easeOut' },
};

const revealInView: Variants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: 'easeOut' },
};

/* --------------------------------------------------
   Parallax Card Component
-------------------------------------------------- */
function ParallaxCard({ children }: { children: React.ReactNode }) {
  const elRef = useRef<HTMLDivElement | null>(null);

  function handleMove(e: React.MouseEvent) {
    const el = elRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const rotX = y * 6;
    const rotY = x * -6;
    el.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`;
  }

  function handleLeave() {
    const el = elRef.current;
    if (!el) return;
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)';
  }

  return (
    <div
      ref={elRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        transition: 'transform 560ms cubic-bezier(.2,.9,.2,1)',
        willChange: 'transform',
      }}
      className="parallax-card"
    >
      {children}
    </div>
  );
}

/* --------------------------------------------------
   Magnetic Cursor
-------------------------------------------------- */
function useMagneticCursor() {
  useEffect(() => {
    const cursor = document.querySelector('.magnetic-cursor') as HTMLElement | null;
    if (!cursor) return;

    function move(e: MouseEvent) {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    }

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);
}

/* --------------------------------------------------
   PAGE
-------------------------------------------------- */
export default function Home() {
  useMagneticCursor();

  return (
    <main className="w-full min-h-screen relative overflow-hidden">

      {/* -------------------------------
          Magnetic Cursor
      -------------------------------- */}
      <div className="magnetic-cursor pointer-events-none fixed top-0 left-0 z-[9999] w-6 h-6 rounded-full bg-white mix-blend-difference"></div>

      {/* -------------------------------
          HERO SECTION (Option A)
      -------------------------------- */}
      <section className="relative h-screen w-full flex items-center justify-center">
        <motion.div
          variants={heroFade}
          initial="initial"
          animate="animate"
          className="absolute inset-0"
        >
          <Image
            src="/images/honeybear-front.jpg"
            fill
            alt="Honeybear exterior"
            className="object-cover"
            priority
          />
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="initial"
          animate="animate"
          className="relative z-20 text-white text-6xl md:text-7xl font-light tracking-tight drop-shadow-2xl"
        >
          Honeybear Haven
        </motion.h1>
      </section>

      {/* -------------------------------
          ROOMS SECTION
      -------------------------------- */}
      <section className="px-6 md:px-12 py-24 space-y-20 max-w-7xl mx-auto">

        <motion.h2
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-4xl font-light text-center"
        >
          Suites & Rooms
        </motion.h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {[
            'ensuite1.jpg',
            'room1.jpg',
            'room2.jpg',
            'room3.jpg',
            'room4.jpg',
            'room5.jpg',
            'room6.jpg',
            'room7.jpg',
          ].map((img, i) => (
            <motion.div
              key={img}
              variants={revealInView}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: '-40px' }}
            >
              <ParallaxCard>
                <div className="relative w-full h-[360px] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={`/images/${img}`}
                    alt="Room"
                    fill
                    className="object-cover"
                  />
                </div>
              </ParallaxCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* -------------------------------
          DINING SECTION
      -------------------------------- */}
      <section className="px-6 md:px-12 py-24 space-y-20 max-w-7xl mx-auto">

        <motion.h2
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-4xl font-light text-center"
        >
          Dining & Lounge
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {['dining.jpg', 'dining2.jpg', 'bar1.jpg', 'bar2.jpg'].map((img) => (
            <motion.div
              key={img}
              variants={revealInView}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <ParallaxCard>
                <div className="relative w-full h-[360px] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={`/images/${img}`}
                    alt="Dining"
                    fill
                    className="object-cover"
                  />
                </div>
              </ParallaxCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* -------------------------------
          AMENITIES
      -------------------------------- */}
      <section className="px-6 md:px-12 py-24 max-w-5xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <h2 className="text-4xl font-light">Amenities</h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Enjoy breathtaking mountain views, modern comfort, soft-glow
            lighting, workspace desks, high-speed Wi-Fi, curated textiles,
            and a peaceful retreat atmosphere throughout Honeybear Haven.
          </p>
        </motion.div>
      </section>

      {/* -------------------------------
          FOOTER
      -------------------------------- */}
      <footer className="py-12 text-center text-neutral-500">
        © {new Date().getFullYear()} Honeybear Haven
      </footer>
    </main>
  );
}
