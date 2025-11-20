// src/app/page.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

/**
 * Final production-ready page.tsx
 * - Hero A (full-screen cinematic hero)
 * - Images from /images/*.jpg
 * - No `any` usage; Variants typed
 * - Magnetic cursor + parallax hover cards
 */

/* Motion variants typed with framer-motion's Variants */
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

/* Parallax card component (no external dependency) */
function ParallaxCard({ children }: { children: React.ReactNode }) {
  const elRef = useRef<HTMLDivElement | null>(null);

  function handleMove(e: React.MouseEvent) {
    const el = elRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const rotX = y * 6; // tilt intensity
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
      style={{ transition: 'transform 560ms cubic-bezier(.2,.9,.2,1)', willChange: 'transform' }}
      className="parallax-card"
    >
      {children}
    </div>
  );
}

/* Magnetic wrapper toggles cursor hover attribute on documentElement */
function Magnetic({ children }: { children: React.ReactNode }) {
  function onEnter(): void {
    document.documentElement.setAttribute('data-cursor', 'hover');
  }
  function onLeave(): void {
    document.documentElement.removeAttribute('data-cursor');
  }
  return (
    <div onMouseEnter={onEnter} onMouseLeave={onLeave}>
      {children}
    </div>
  );
}

export default function Page(): JSX.Element {
  const suites = ['room2', 'room3', 'room4', 'room5', 'room6', 'room7'] as const;
  const gallery = [
    'ensuite1',
    'room1',
    'room2',
    'room3',
    'dining',
    'dining2',
    'bar1',
    'bar2',
    'room4',
    'room5',
    'room6',
    'room7',
    'desk',
    'honeybear-front',
  ] as const;

  /* Magnetic cursor: lightweight, performant */
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'mag-cursor';
    document.body.appendChild(cursor);

    function onMove(e: MouseEvent) {
      // center cursor on pointer; use translate3d for GPU acceleration
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    }

    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cursor.remove();
    };
  }, []);

  return (
    <>
      {/* Page-scoped CSS (fonts loaded in app/layout.tsx) */}
      <style>{`
        :root{
          --accent: #A97B46;
          --muted: #8f8a86;
          --bg: #f7f5f2;
        }
        html,body,#__next { height:100%; }
        body { margin:0; background:var(--bg); font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; color:#2b2724; -webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale; }
        h1,h2,h3 { font-family: 'Playfair Display', serif; margin:0; color:#2b2724; }
        .nav { position:fixed; top:0; left:0; right:0; z-index:60; backdrop-filter: blur(6px) saturate(120%); background: rgba(255,255,255,0.56); border-bottom:1px solid rgba(0,0,0,0.04); }
        .nav-inner { max-width:1200px; margin:0 auto; padding:18px 20px; display:flex; align-items:center; justify-content:space-between; }
        .brand { font-weight:500; font-size:20px; letter-spacing:0.01em; }
        .nav a { color:#3c3835; margin-left:26px; text-decoration:none; font-weight:500; }
        .btn-primary { background:var(--accent); color:#fff; padding:12px 28px; border-radius:999px; text-decoration:none; box-shadow: 0 10px 30px rgba(10,10,10,0.06); display:inline-block; }
        .btn-ghost { background:#fff; padding:10px 20px; border-radius:999px; border:1px solid rgba(0,0,0,0.06); text-decoration:none; color:#2b2724; }
        .section-pad { padding:80px 20px; }
        @media(min-width:1280px) { .section-pad { padding:120px 40px; } .nav a { margin-left:34px; } }
        /* cursor */
        .mag-cursor { width:18px; height:18px; border-radius:50%; background: rgba(255,255,255,0.95); border:1px solid rgba(0,0,0,0.08); position:fixed; pointer-events:none; transform:translate3d(-50%,-50%,0); z-index:9999; transition: width .18s ease, height .18s ease, background .18s ease, transform .18s ease; }
        [data-cursor="hover"] .mag-cursor, a:hover ~ .mag-cursor, button:hover ~ .mag-cursor { width:44px; height:44px; background: rgba(255,255,255,0.78); }
        .parallax-card { display:block; }
        .muted { color:var(--muted); }
        .large-hero { font-size: clamp(48px, 7.5vw, 88px); line-height:0.95; letter-spacing:-0.02em; }
      `}</style>

      {/* Navigation */}
      <header className="nav" aria-hidden>
        <div className="nav-inner">
          <div className="brand">Honeybear</div>
          <nav aria-label="main navigation">
            <a href="#rooms">Rooms</a>
            <a href="#wellness">Wellness</a>
            <a href="#experiences">Experiences</a>
            <a href="#gallery">Gallery</a>
            <a href="#reserve" style={{ marginLeft: 28 }}><span className="btn-ghost">Reserve Your Stay</span></a>
          </nav>
        </div>
      </header>

      <main style={{ paddingTop: 86 }}>
        {/* HERO A - Cinematic Fullscreen */}
        <section
          aria-label="Hero"
          style={{
            minHeight: '82vh',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Background image (covers entire hero). Using CSS background for cinematic scale. */}
          <motion.div
            aria-hidden
            initial={{ scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 0,
              backgroundImage: "url('/images/room2.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'contrast(95%) brightness(85%)',
            }}
          />

          {/* soft gradient overlay */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 1,
              background: 'linear-gradient(180deg, rgba(247,245,242,0.2), rgba(247,245,242,0.9))',
            }}
          />

          {/* Hero content */}
          <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', width: '100%', maxWidth: 1100, padding: '0 20px' }}>
            <motion.h1
              variants={heroFade}
              initial="initial"
              animate="animate"
              className="large-hero"
              style={{ color: 'rgba(255,255,255,0.96)', textShadow: '0 8px 30px rgba(0,0,0,0.25)', marginBottom: 12 }}
            >
              Honeybear Guest Lodge
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.9, ease: 'easeOut' }}
              style={{ marginTop: 6, color: 'rgba(255,255,255,0.9)', fontSize: 18 }}
            >
              An exclusive sanctuary of refined comfort
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.8, ease: 'easeOut' }} style={{ marginTop: 28 }}>
              <a href="#rooms" className="btn-primary" style={{ marginRight: 12 }}>Discover Your Sanctuary</a>
              <a href="#contact" className="btn-ghost">Enquire Now</a>
            </motion.div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="section-pad" style={{ textAlign: 'center' }}>
          <motion.div variants={fadeUp} initial="initial" animate="animate">
            <div style={{ fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12 }}>Our Philosophy</div>
            <h2 style={{ fontSize: 42, marginBottom: 14 }}>A Place to Breathe</h2>
            <p style={{ maxWidth: 920, margin: '0 auto', color: 'var(--muted)', fontSize: 17, lineHeight: 1.7 }}>
              Honeybear Guest Lodge blends contemporary African warmth with quietly curated comforts.
              Natural textures, thoughtful light and discreet hospitality invite you to slow down and linger — a measured pause from the everyday.
            </p>
          </motion.div>
        </section>

        {/* Rooms */}
        <section id="rooms" className="section-pad">
          <motion.div variants={fadeUp} initial="initial" animate="animate">
            <div style={{ textAlign: 'center', marginBottom: 36 }}>
              <div style={{ fontSize: 12, letterSpacing: '0.18em', color: 'var(--muted)', textTransform: 'uppercase' }}>Accommodation</div>
              <h2 style={{ fontSize: 40, marginTop: 8 }}>Our Rooms & Suites</h2>
              <p style={{ color: 'var(--muted)', maxWidth: 820, margin: '18px auto 0' }}>Each space thoughtfully designed to be your personal haven.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
              {['Standard Rooms', 'Wellness Suites', 'Family Suites'].map((title, idx) => (
                <motion.div
                  key={title}
                  whileHover={{ translateY: -6, boxShadow: '0 20px 40px rgba(22,18,15,0.06)' }}
                  transition={{ duration: 0.45 }}
                  style={{ borderRadius: 12, padding: 18 }}
                >
                  <ParallaxCard>
                    <Magnetic>
                      <div style={{ height: 260, borderRadius: 10, overflow: 'hidden', marginBottom: 14 }}>
                        <Image
                          src={`/images/${suites[idx]}.jpg`}
                          alt={title}
                          width={1200}
                          height={800}
                          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        />
                      </div>
                      <h3 style={{ margin: '0 0 8px', fontSize: 20 }}>{title}</h3>
                      <p style={{ margin: 0, color: 'var(--muted)' }}>
                        {idx === 0 && 'Refined comfort with authentic African character'}
                        {idx === 1 && 'Premium suites for the discerning guest'}
                        {idx === 2 && 'Spacious family accommodations with elegant finishes'}
                      </p>
                      <div style={{ marginTop: 12 }}><a href="#rooms" style={{ color: 'var(--accent)' }}>Explore →</a></div>
                    </Magnetic>
                  </ParallaxCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Experiences */}
        <section id="experiences" className="section-pad">
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <motion.div variants={fadeUp} initial="initial" animate="animate">
              <div style={{ textAlign: 'center', marginBottom: 28 }}>
                <div style={{ fontSize: 12, letterSpacing: '0.18em', color: 'var(--muted)', textTransform: 'uppercase' }}>Experiences</div>
                <h2 style={{ fontSize: 36, marginTop: 8 }}>What Awaits You</h2>
              </div>
            </motion.div>

            <motion.div initial="initial" whileInView="whileInView" variants={revealInView} viewport={{ once: true }} transition={{ duration: 0.9, ease: 'easeOut' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
                {[
                  { title: 'Garden Courtyards', text: 'Lush green spaces where nature and design harmonize' },
                  { title: 'Outdoor Lounges', text: 'Serene spaces for relaxation under African skies' },
                  { title: 'Dining Terrace', text: 'Culinary experiences in the embrace of nature' },
                  { title: 'Business-Friendly', text: 'Professional amenities for the modern traveler' },
                  { title: 'Eco-Conscious', text: 'Sustainable luxury in harmony with the environment' },
                  { title: 'Central Location', text: 'Perfectly positioned in the heart of Harare' },
                ].map((item) => (
                  <div key={item.title} style={{ textAlign: 'center', padding: 18 }}>
                    <div style={{ width: 72, height: 72, borderRadius: 72, background: 'rgba(250,248,246,0.8)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="6" stroke="#C9B8A0" strokeWidth="1.4" /></svg>
                    </div>
                    <h4 style={{ margin: '8px 0', fontSize: 18 }}>{item.title}</h4>
                    <p style={{ margin: 0, color: 'var(--muted)' }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Wellness */}
        <section id="wellness" className="section-pad" style={{ background: 'rgba(255,255,255,0.6)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, alignItems: 'center' }}>
            <motion.div variants={fadeUp} initial="initial" animate="animate">
              <div style={{ fontSize: 12, letterSpacing: '0.18em', color: 'var(--muted)', textTransform: 'uppercase' }}>Wellness</div>
              <h2 style={{ fontSize: 36, marginTop: 8 }}>Wellness & Serenity</h2>
              <p style={{ color: 'var(--muted)', maxWidth: 560 }}>
                Our wellness philosophy is rooted in understated luxury and natural harmony. From the tranquil garden spaces to the carefully appointed interiors, every element has been designed to promote restoration and balance.
              </p>
              <div style={{ marginTop: 18 }}><a className="btn-ghost" href="#wellness">Learn More</a></div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: 'easeOut' }}>
              <div style={{ height: 420, borderRadius: 14, overflow: 'hidden' }}>
                <Image src="/images/bar2.jpg" alt="Wellness" width={1200} height={900} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Location */}
        <section id="location" className="section-pad">
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, alignItems: 'center' }}>
            <motion.div variants={fadeUp} initial="initial" animate="animate">
              <div style={{ fontSize: 12, letterSpacing: '0.18em', color: 'var(--muted)', textTransform: 'uppercase' }}>Location</div>
              <h2 style={{ fontSize: 32, marginTop: 8 }}>Where Harare Meets Harmony</h2>
              <p style={{ color: 'var(--muted)', maxWidth: 560 }}>
                Nestled in the vibrant heart of Harare, Honeybear Guest Lodge offers the perfect balance of urban accessibility and natural tranquility — minutes from cultural landmarks yet a world away in atmosphere.
              </p>
              <div style={{ marginTop: 18 }}><a className="btn-ghost" href="#map">View on Map</a></div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: 'easeOut' }}>
              <div style={{ borderRadius: 12, height: 340, background: 'rgba(245,243,241,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)' }}>
                Map Placeholder
              </div>
            </motion.div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="section-pad">
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <motion.div variants={fadeUp} initial="initial" animate="animate">
              <div style={{ textAlign: 'center', marginBottom: 20 }}>
                <div style={{ fontSize: 12, letterSpacing: '0.18em', color: 'var(--muted)', textTransform: 'uppercase' }}>Gallery</div>
                <h2 style={{ fontSize: 36, marginTop: 8 }}>Glimpses of Honeybear</h2>
              </div>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
              {gallery.map((g) => (
                <motion.div key={g} whileHover={{ scale: 1.03 }} style={{ overflow: 'hidden', borderRadius: 10, height: 220 }}>
                  <Image src={`/images/${g}.jpg`} alt={g} width={800} height={600} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-pad" style={{ textAlign: 'center' }}>
          <motion.div variants={fadeUp} initial="initial" animate="animate">
            <h2 style={{ fontSize: 32 }}>Your Haven Awaits</h2>
            <p style={{ color: 'var(--muted)', maxWidth: 800, margin: '12px auto 18px' }}>Step into a world where nature and luxury intertwine. Reserve your stay at Honeybear Guest Lodge today.</p>
            <a href="#reserve" className="btn-primary">Reserve Your Stay</a>
          </motion.div>
        </section>

        {/* Footer */}
        <footer style={{ borderTop: '1px solid rgba(0,0,0,0.04)', padding: '48px 24px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
            <div>
              <h4 style={{ margin: '0 0 8px' }}>Honeybear Guest Lodge</h4>
              <p style={{ margin: 0, color: 'var(--muted)' }}>Your eco-luxury haven in the heart of Harare, Zimbabwe</p>
            </div>
            <div>
              <h5 style={{ margin: '0 0 8px' }}>Contact</h5>
              <p style={{ margin: 0, color: 'var(--muted)' }}>Harare, Zimbabwe<br />info@honeybearlodge.com<br />+263 XX XXX XXXX</p>
            </div>
            <div>
              <h5 style={{ margin: '0 0 8px' }}>Quick Links</h5>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <a href="#rooms" style={{ color: 'var(--muted)' }}>Rooms</a>
                <a href="#wellness" style={{ color: 'var(--muted)' }}>Wellness</a>
                <a href="#experiences" style={{ color: 'var(--muted)' }}>Experiences</a>
                <a href="#gallery" style={{ color: 'var(--muted)' }}>Gallery</a>
              </nav>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: 28, color: 'var(--muted)' }}>
            © {new Date().getFullYear()} Honeybear Guest Lodge. All rights reserved.
          </div>
        </footer>
      </main>
    </>
  );
}
