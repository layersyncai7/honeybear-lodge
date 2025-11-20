'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

/* -------------------------------------------------------------------------- */
/*                            ANIMATION VARIANTS                              */
/* -------------------------------------------------------------------------- */

/* Correct FM v11 variants (transition MUST be inside each state) */
const heroFade: Variants = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 1.1, ease: "easeOut" },
  },
};

const fadeUp: Variants = {
  initial: { opacity: 0, y: 18 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.85, ease: "easeOut" },
  },
};

const revealInView: Variants = {
  initial: { opacity: 0, y: 20 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

/* -------------------------------------------------------------------------- */
/*                                PARALLAX CARD                               */
/* -------------------------------------------------------------------------- */

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

/* -------------------------------------------------------------------------- */
/*                                  PAGE BODY                                 */
/* -------------------------------------------------------------------------- */

export default function Page() {
  return (
    <main className="w-full min-h-screen bg-black text-white overflow-hidden">
      {/* ------------------------------------------------------------------ */}
      {/*                                HERO A                              */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative w-full h-screen flex items-center justify-center">
        <motion.div
          variants={heroFade}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-0"
        >
          <Image
            src="/images/honeybear-front.jpg"
            alt="Honeybear exterior"
            fill
            className="object-cover brightness-75"
            priority
          />
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="initial"
          animate="animate"
          className="relative text-6xl md:text-8xl font-light tracking-tight drop-shadow-xl"
        >
          HONEYBEAR
        </motion.h1>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*                           FEATURED ROOMS                           */}
      {/* ------------------------------------------------------------------ */}
      <section className="px-6 md:px-16 py-32 space-y-24">
        <motion.h2
          variants={fadeUp}
          initial="initial"
          animate="animate"
          className="text-4xl md:text-5xl font-light"
        >
          Suites & Rooms
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">
          {[
            "ensuite1.jpg",
            "room1.jpg",
            "room2.jpg",
            "room3.jpg",
            "room4.jpg",
            "room5.jpg",
            "room6.jpg",
            "room7.jpg",
            "desk.jpg",
          ].map((img, i) => (
            <motion.div
              key={i}
              variants={revealInView}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, amount: 0.35 }}
            >
              <ParallaxCard>
                <div className="relative w-full h-[420px] rounded-2xl overflow-hidden">
                  <Image
                    src={`/images/${img}`}
                    alt={img}
                    fill
                    className="object-cover"
                  />
                </div>
              </ParallaxCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*                              DINING                                */}
      {/* ------------------------------------------------------------------ */}
      <section className="px-6 md:px-16 py-32 space-y-20 bg-neutral-950">
        <motion.h2
          variants={fadeUp}
          initial="initial"
          animate="animate"
          className="text-4xl md:text-5xl font-light"
        >
          Dining & Lounge
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">
          {["dining.jpg", "dining2.jpg", "bar1.jpg", "bar2.jpg"].map(
            (img, i) => (
              <motion.div
                key={i}
                variants={revealInView}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true, amount: 0.35 }}
              >
                <ParallaxCard>
                  <div className="relative w-full h-[420px] rounded-2xl overflow-hidden">
                    <Image
                      src={`/images/${img}`}
                      alt={img}
                      fill
                      className="object-cover"
                    />
                  </div>
                </ParallaxCard>
              </motion.div>
            )
          )}
        </div>
      </section>
    </main>
  );
}
