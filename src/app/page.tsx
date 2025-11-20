// src/app/page.tsx
'use client';

import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';

const headingFont = 'Playfair Display, serif';
const uiFont = 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial';

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1] },
};

export default function Page() {
  const suites = ['room2', 'room3', 'room4', 'room5', 'room6', 'room7'];
  const gallery = [
    'room1','room2','room3','room4','room5','room6','room7',
    'bar1','bar2','ensuite1','dining','desk'
  ];

  return (
    <>
      <Head>
        <title>Honeybear Guest Lodge — Your Haven Awaits</title>
        <meta name="description" content="Honeybear Guest Lodge — a serene boutique retreat in Harare. Find rest, nature and quiet luxury." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Playfair+Display:wght@400;600;700&display=swap" rel="stylesheet" />
        <style>{`
          :root {
            --font-display: ${headingFont};
            --font-ui: ${uiFont};
            --accent: #A97B46; /* warm gold/mink accent */
            --muted: #9c948e;
            --bg: #f7f5f2; /* soft ivory */
            --card: #ffffff;
          }
          html,body,#__next { height: 100%; }
          body { background: var(--bg); font-family: var(--font-ui); -webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale; }
          h1,h2,h3 { font-family: var(--font-display); color:#2f2a27; }
          .large-hero { font-size: clamp(48px, 7.5vw, 96px); line-height: 0.9; letter-spacing: -0.02em; }
          .subtle { color: var(--muted); }
          .btn-primary { background: var(--accent); color: white; padding: 14px 34px; border-radius: 999px; display:inline-block; box-shadow: 0 6px 18px rgba(10,10,10,0.06); }
          .btn-ghost { background: white; border: 1px solid rgba(0,0,0,0.06); padding: 12px 28px; border-radius: 999px; color: #2f2a27; }
          .nav-link { color: #3a3734; margin-left: 26px; text-decoration: none; font-weight:500; }
          .muted-cta { color: var(--muted); }
          /* responsive spacing to match preview */
          .section-pad { padding: 80px 24px; }
          @media (min-width: 1280px) {
            .section-pad { padding: 120px 40px; }
            .nav-link { margin-left: 34px; }
          }
        `}</style>
      </Head>

      {/* NAV */}
      <header style={{ backdropFilter: 'saturate(120%) blur(6px)', background: 'rgba(255,255,255,0.6)', borderBottom: '1px solid rgba(0,0,0,0.04)' }}
        className="w-full fixed top-0 left-0 z-40">
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '22px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 500, color: '#2f2a27' }}>Honeybear</div>
          <nav style={{ display: 'flex', alignItems: 'center' }}>
            <a className="nav-link" href="#rooms">Rooms</a>
            <a className="nav-link" href="#wellness">Wellness</a>
            <a className="nav-link" href="#experiences">Experiences</a>
            <a className="nav-link" href="#gallery">Gallery</a>
            <a href="#reserve" className="nav-link" style={{ marginLeft: 28 }}>
              <span className="btn-ghost">Reserve Your Stay</span>
            </a>
          </nav>
        </div>
      </header>

      <main style={{ paddingTop: 100 }}>

        {/* HERO */}
        <section style={{ minHeight: '82vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
          {/* hero background - subtle parallax effect via transform on scroll is emulated with motion */}
          <motion.div
            initial={{ scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8 }}
            style={{
              position: 'absolute', inset: 0, zIndex: 0,
              backgroundImage: "url('/images/room2.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'grayscale(8%) contrast(90%) brightness(80%)',
            }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(247,245,242,0.3), rgba(247,245,242,0.85))', zIndex: 1 }} />
          <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 1120, textAlign: 'center', padding: '0 24px' }}>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="large-hero"
              style={{ margin: 0, color: 'rgba(255,255,255,0.94)', textShadow: '0 8px 30px rgba(0,0,0,0.25)' }}
            >
              Honeybear Guest Lodge
            </motion.h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.9 }}
              style={{ marginTop: 18, color: 'rgba(255,255,255,0.9)', fontSize: 20, maxWidth: 800, marginInline: 'auto' }}>
              An exclusive sanctuary of refined comfort
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} style={{ marginTop: 36 }}>
              <a href="#rooms" className="btn-primary" style={{ marginRight: 14 }}>Discover Your Sanctuary</a>
              <a href="#contact" className="btn-ghost">Enquire Now</a>
            </motion.div>
          </div>
        </section>

        {/* PHILOSOPHY / A PLACE TO BREATHE */}
        <section className="section-pad" style={{ textAlign: 'center' }}>
          <motion.div {...fadeUp}>
            <div style={{ fontSize: 13, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12 }}>Our Philosophy</div>
            <h2 style={{ fontSize: 48, margin: '0 0 18px 0' }}>A Place to Breathe</h2>
            <p style={{ maxWidth: 920, margin: '0 auto', color: 'var(--muted)', fontSize: 18, lineHeight: 1.7 }}>
              Honeybear Guest Lodge blends contemporary African warmth with quietly curated comforts.
              Natural textures, thoughtful light, and discreet hospitality invite you to slow down and
              linger — a measured pause from the everyday.
            </p>
          </motion.div>
        </section>

        {/* ROOMS */}
        <section id="rooms" className="section-pad" style={{ paddingTop: 40 }}>
          <motion.div {...fadeUp}>
            <div style={{ textAlign: 'center', marginBottom: 36 }}>
              <div style={{ fontSize: 13, letterSpacing: '0.18em', color: 'var(--muted)', textTransform: 'uppercase' }}>Accommodation</div>
              <h2 style={{ fontSize: 48, marginTop: 8 }}>Our Rooms & Suites</h2>
              <p style={{ color: 'var(--muted)', maxWidth: 820, margin: '18px auto 0' }}>
                Each space thoughtfully designed to be your personal haven.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
              {['Standard Rooms', 'Wellness Suites', 'Family Suites'].map((title, idx) => (
                <motion.div
                  key={title}
                  whileHover={{ translateY: -6, boxShadow: '0 20px 40px rgba(22,18,15,0.06)' }}
                  transition={{ duration: 0.45 }}
                  className="card"
                  style={{ background: 'transparent', padding: 22, borderRadius: 12 }}
                >
                  <div style={{ height: 260, borderRadius: 12, overflow: 'hidden', marginBottom: 18 }}>
                    <Image
                      src={`/images/${suites[idx + 0]}.jpg`}
                      alt={title}
                      width={1200}
                      height={780}
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                  </div>
                  <h3 style={{ margin: '0 0 8px', fontSize: 22 }}>{title}</h3>
                  <p style={{ margin: 0, color: 'var(--muted)' }}>
                    {idx === 0 && 'Refined comfort with authentic African character'}
                    {idx === 1 && 'Premium suites for the discerning guest'}
                    {idx === 2 && 'Spacious family accommodations with elegant finishes'}
                  </p>
                  <div style={{ marginTop: 12 }}>
                    <a href="#rooms" className="muted-cta" style={{ textDecoration: 'none', color: 'var(--accent)' }}>Explore →</a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* EXPERIENCES */}
        <section id="experiences" className="section-pad" style={{ background: 'transparent' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
            <motion.div {...fadeUp}>
              <div style={{ fontSize: 13, letterSpacing: '0.18em', color: 'var(--muted)', textTransform: 'uppercase' }}>Experiences</div>
              <h2 style={{ fontSize: 44, marginTop: 8, marginBottom: 28 }}>What Awaits You</h2>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 36 }}>
                {[
                  { title: 'Garden Courtyards', text: 'Lush green spaces where nature and design harmonize' },
                  { title: 'Outdoor Lounges', text: 'Serene spaces for relaxation under African skies' },
                  { title: 'Dining Terrace', text: 'Culinary experiences in the embrace of nature' },
                  { title: 'Business-Friendly', text: 'Professional amenities for the modern traveler' },
                  { title: 'Eco-Conscious', text: 'Sustainable luxury in harmony with the environment' },
                  { title: 'Central Location', text: 'Perfectly positioned in the heart of Harare' },
                ].map((item) => (
                  <div key={item.title} style={{ textAlign: 'center', padding: 18 }}>
                    <div style={{ width: 72, height: 72, borderRadius: 72, background: 'rgba(250,248,246,0.8)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                      {/* small icon placeholder */}
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="6" stroke="#C9B8A0" strokeWidth="1.5" /></svg>
                    </div>
                    <h4 style={{ margin: '8px 0', fontSize: 20 }}>{item.title}</h4>
                    <p style={{ margin: 0, color: 'var(--muted)' }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* WELLNESS */}
        <section id="wellness" className="section-pad" style={{ background: 'rgba(255,255,255,0.5)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center' }}>
            <motion.div {...fadeUp}>
              <div style={{ fontSize: 13, letterSpacing: '0.18em', color: 'var(--muted)', textTransform: 'uppercase' }}>Wellness</div>
              <h2 style={{ fontSize: 44, marginTop: 8 }}>Wellness & Serenity</h2>
              <p style={{ color: 'var(--muted)', maxWidth: 560 }}>
                Our wellness philosophy is rooted in understated luxury and natural harmony. From the tranquil garden spaces to the carefully appointed interiors, every element has been designed to promote restoration and balance.
              </p>
              <div style={{ marginTop: 18 }}>
                <a className="btn-ghost" href="#wellness">Learn More</a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div style={{ height: 420, borderRadius: 14, overflow: 'hidden' }}>
                <Image src="/images/bar2.jpg" alt="Wellness" width={1200} height={900} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </motion.div>
          </div>
        </section>

        {/* LOCATION */}
        <section id="location" className="section-pad" style={{ background: 'transparent' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center' }}>
            <motion.div {...fadeUp}>
              <div style={{ fontSize: 13, letterSpacing: '0.18em', color: 'var(--muted)', textTransform: 'uppercase' }}>Location</div>
              <h2 style={{ fontSize: 40, marginTop: 8 }}>Where Harare Meets Harmony</h2>
              <p style={{ color: 'var(--muted)', maxWidth: 560 }}>
                Nestled in the vibrant heart of Harare, Honeybear Guest Lodge offers the perfect balance of urban accessibility and natural tranquility — minutes from cultural landmarks yet a world away in atmosphere.
              </p>
              <div style={{ marginTop: 18 }}>
                <a className="btn-ghost" href="#map">View on Map</a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div style={{ borderRadius: 12, height: 340, background: 'rgba(245,243,241,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)' }}>
                Map Placeholder
              </div>
            </motion.div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="section-pad" style={{ background: 'transparent' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <motion.div {...fadeUp}>
              <div style={{ textAlign: 'center', marginBottom: 36 }}>
                <div style={{ fontSize: 13, letterSpacing: '0.18em', color: 'var(--muted)', textTransform: 'uppercase' }}>Gallery</div>
                <h2 style={{ fontSize: 44, marginTop: 8 }}>Glimpses of Honeybear</h2>
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
          <motion.div {...fadeUp}>
            <h2 style={{ fontSize: 36 }}>Your Haven Awaits</h2>
            <p style={{ color: 'var(--muted)', maxWidth: 800, margin: '12px auto 18px' }}>
              Step into a world where nature and luxury intertwine. Reserve your stay at Honeybear Guest Lodge today.
            </p>
            <a href="#reserve" className="btn-primary" style={{ marginTop: 12 }}>Reserve Your Stay</a>
          </motion.div>
        </section>

        {/* FOOTER */}
        <footer style={{ borderTop: '1px solid rgba(0,0,0,0.04)', padding: '48px 24px', marginTop: 24 }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20, alignItems: 'start' }}>
            <div>
              <h4 style={{ margin: '0 0 12px', fontSize: 20 }}>Honeybear Guest Lodge</h4>
              <p style={{ color: 'var(--muted)', margin: 0 }}>Your eco-luxury haven in the heart of Harare, Zimbabwe</p>
            </div>
            <div>
              <h5 style={{ margin: '0 0 12px' }}>Contact</h5>
              <p style={{ color: 'var(--muted)', margin: 0 }}>Harare, Zimbabwe<br />info@honeybearlodge.com<br />+263 XX XXX XXXX</p>
            </div>
            <div>
              <h5 style={{ margin: '0 0 12px' }}>Quick Links</h5>
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
