// src/app/page.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';

/**
 * Page: Honeybear Guest Lodge (production-ready)
 * - Uses images from /public/images/<name>.jpg
 * - Includes magnetic cursor + parallax cards implemented inline
 * - Uses framer-motion for entrance/hover animations
 * - crossOrigin fixed in Head (anonymous)
 */

/* Small typed helpers for TS */
type SuiteKey = 'room1' | 'room2' | 'room3' | 'room4' | 'room5' | 'room6' | 'room7';

const headingFont = 'Playfair Display, serif';
const uiFont = 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial';

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1] },
};

/* Small inline ParallaxCard component (no external file required) */
function ParallaxCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);

  function handleMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const rotX = y * 6;
    const rotY = x * -6;
    el.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`;
  }
  function handleLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)';
  }

  return (
    <div
      ref={ref}
      className="parallax-card"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transition: 'transform 550ms cubic-bezier(.2,.9,.2,1)', willChange: 'transform' }}
    >
      {children}
    </div>
  );
}

/* Magnetic wrapper toggling enlarged cursor state */
function Magnetic({ children }: { children: React.ReactNode }) {
  function onEnter() {
    document.documentElement.setAttribute('data-cursor', 'hover');
  }
  function onLeave() {
    document.documentElement.removeAttribute('data-cursor');
  }
  return (
    <div onMouseEnter={onEnter} onMouseLeave={onLeave}>
      {children}
    </div>
  );
}

export default function Page() {
  const suites: SuiteKey[] = ['room2', 'room3', 'room4', 'room5', 'room6', 'room7'];
  const gallery = [
    'room1','room2','room3','room4','room5','room6','room7',
    'bar1','bar2','ensuite1','dining','desk'
  ];

  /* Magnetic cursor logic (simple, performant) */
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'mag-cursor';
    document.body.appendChild(cursor);

    function move(e: MouseEvent) {
      const x = e.clientX;
      const y = e.clientY;
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }
    window.addEventListener('mousemove', move);
    return () => {
      window.removeEventListener('mousemove', move);
      cursor.remove();
    };
  }, []);

  return (
    <>
      <Head>
        <title>Honeybear Guest Lodge — Your Haven Awaits</title>
        <meta name="description" content="Honeybear Guest Lodge — a serene boutique retreat in Harare. Find rest, nature and quiet luxury." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Playfair+Display:wght@400;600;700&display=swap" rel="stylesheet" />
        <style>{`
          :root{
            --font-display: ${headingFont};
            --font-ui: ${uiFont};
            --accent: #A97B46;
            --muted: #8f8a86;
            --bg: #f7f5f2;
            --card: #ffffff;
          }
          html,body,#__next{height:100%}
          body{
            margin:0;
            background:var(--bg);
            font-family:var(--font-ui);
            -webkit-font-smoothing:antialiased;
            -moz-osx-font-smoothing:grayscale;
            color:#2b2724;
          }
          h1,h2,h3{ font-family:var(--font-display); color: #2b2724; margin:0; }
          .large-hero{ font-size: clamp(48px, 7.5vw, 88px); line-height:0.95; letter-spacing:-0.02em; }
          .nav { position: fixed; top: 0; left: 0; right: 0; z-index:60; backdrop-filter: blur(6px) saturate(120%); background: rgba(255,255,255,0.55); border-bottom: 1px solid rgba(0,0,0,0.04); }
          .nav-inner { max-width: 1200px; margin: 0 auto; padding: 18px 20px; display:flex; align-items:center; justify-content:space-between; }
          .nav .brand { font-family: var(--font-display); font-weight:500; font-size:20px; letter-spacing:0.02em; color:#2b2724; }
          .nav a { text-decoration:none; color:#3c3835; margin-left:26px; font-weight:500; }
          .btn-primary { background:var(--accent); color:white; padding:12px 28px; border-radius:999px; display:inline-block; text-decoration:none; box-shadow: 0 10px 30px rgba(10,10,10,0.06); }
          .btn-ghost { background:#fff; padding:10px 22px; border-radius:999px; border:1px solid rgba(0,0,0,0.06); text-decoration:none; color:#2b2724; }
          .section-pad{ padding:80px 20px; }
          @media(min-width: 1280px){ .section-pad{ padding:120px 40px; } .nav a{ margin-left:34px } }
          /* magnetic cursor */
          .mag-cursor{ width:18px; height:18px; border-radius:50%; background: rgba(255,255,255,0.95); border:1px solid rgba(0,0,0,0.08); position:fixed; pointer-events:none; transform:translate3d(-50%,-50%,0); z-index:9999; transition: width .18s ease, height .18s ease, background .18s ease, transform .18s ease; mix-blend-mode: normal; }
          [data-cursor="hover"] .mag-cursor, a:hover ~ .mag-cursor, button:hover ~ .mag-cursor { width:44px; height:44px; background: rgba(255,255,255,0.78); }
          /* parallax card helper */
          .parallax-card { display:block; }
          /* small utility */
          .muted { color:var(--muted); }
        `}</style>
      </Head>

      <div className="nav" aria-hidden>
        <div className="nav-inner">
          <div className="brand">Honeybear</div>
          <nav aria-label="Main navigation">
            <a href="#rooms">Rooms</a>
            <a href="#wellness">Wellness</a>
            <a href="#experiences">Experiences</a>
            <a href="#gallery">Gallery</a>
            <a href="#reserve" style={{ marginLeft: 28 }}><span className="btn-ghost">Reserve Your Stay</span></a>
          </nav>
        </div>
      </div>

      <main style={{ paddingTop: 88 }}>
        {/* HERO */}
        <section style={{ minHeight: '82vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          <motion.div
            initial={{ scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8 }}
            style={{
              position: 'absolute', inset: 0, zIndex: 0,
              backgroundImage: "url('/images/room2.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'contrast(95%) brightness(85%)'
            }}
          />
          <div style={{ position:'absolute', inset:0, zIndex:1, background:'linear-gradient(180deg, rgba(247,245,242,0.2), rgba(247,245,242,0.9))' }} />
          <div style={{ position:'relative', zIndex:2, textAlign:'center', width:'100%', maxWidth:1100, padding:'0 20px' }}>
            <motion.h1 initial={{ opacity:0, y:22 }} animate={{ opacity:1, y:0 }} transition={{ duration: 1.2 }} className="large-hero" style={{ color:'rgba(255,255,255,0.96)', textShadow:'0 8px 30px rgba(0,0,0,0.25)' }}>
              Honeybear Guest Lodge
            </motion.h1>
            <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay: 0.45 }} style={{ marginTop:18, color:'rgba(255,255,255,0.9)', fontSize:18 }}>
              An exclusive sanctuary of refined comfort
            </motion.p>
            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay: 0.9 }} style={{ marginTop:28 }}>
              <a href="#rooms" className="btn-primary" style={{ marginRight:12 }}>Discover Your Sanctuary</a>
              <a href="#contact" className="btn-ghost">Enquire Now</a>
            </motion.div>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="section-pad" style={{ textAlign:'center' }}>
          <motion.div initial="initial" animate="animate" variants={fadeUp}>
            <div style={{ fontSize:12, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--muted)', marginBottom:12 }}>Our Philosophy</div>
            <h2 style={{ fontSize:42, marginBottom:14 }}>A Place to Breathe</h2>
            <p style={{ maxWidth:920, margin:'0 auto', color:'var(--muted)', fontSize:17, lineHeight:1.7 }}>
              Honeybear Guest Lodge blends contemporary African warmth with quietly curated comforts. Natural textures,
              thoughtful light and discreet hospitality invite you to slow down and linger — a measured pause from the everyday.
            </p>
          </motion.div>
        </section>

        {/* ROOMS */}
        <section id="rooms" className="section-pad">
          <motion.div {...fadeUp}>
            <div style={{ textAlign:'center', marginBottom:36 }}>
              <div style={{ fontSize:12, letterSpacing:'0.18em', color:'var(--muted)', textTransform:'uppercase' }}>Accommodation</div>
              <h2 style={{ fontSize:40, marginTop:8 }}>Our Rooms & Suites</h2>
              <p style={{ color:'var(--muted)', maxWidth:820, margin:'18px auto 0' }}>Each space thoughtfully designed to be your personal haven.</p>
            </div>

            <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:28 }}>
              {['Standard Rooms', 'Wellness Suites', 'Family Suites'].map((title, idx) => (
                <motion.div key={title} whileHover={{ translateY:-6, boxShadow:'0 20px 40px rgba(22,18,15,0.06)' }} transition={{ duration:0.45 }} style={{ borderRadius:12, padding:18 }}>
                  <div style={{ height:260, borderRadius:10, overflow:'hidden', marginBottom:14 }}>
                    <Image src={`/images/${suites[idx]}.jpg`} alt={title} width={1200} height={800} style={{ objectFit:'cover', width:'100%', height:'100%' }} />
                  </div>
                  <h3 style={{ margin:'0 0 8px', fontSize:20 }}>{title}</h3>
                  <p style={{ margin:0, color:'var(--muted)' }}>
                    {idx === 0 && 'Refined comfort with authentic African character'}
                    {idx === 1 && 'Premium suites for the discerning guest'}
                    {idx === 2 && 'Spacious family accommodations with elegant finishes'}
                  </p>
                  <div style={{ marginTop:12 }}><a href="#rooms" style={{ color:'var(--accent)' }}>Explore →</a></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* EXPERIENCES */}
        <section id="experiences" className="section-pad">
          <div style={{ maxWidth:1100, margin:'0 auto' }}>
            <motion.div {...fadeUp}>
              <div style={{ textAlign:'center', marginBottom:28 }}>
                <div style={{ fontSize:12, letterSpacing:'0.18em', color:'var(--muted)', textTransform:'uppercase' }}>Experiences</div>
                <h2 style={{ fontSize:36, marginTop:8 }}>What Awaits You</h2>
              </div>
            </motion.div>

            <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.9 }}>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:28 }}>
                {[
                  {title:'Garden Courtyards', text:'Lush green spaces where nature and design harmonize'},
                  {title:'Outdoor Lounges', text:'Serene spaces for relaxation under African skies'},
                  {title:'Dining Terrace', text:'Culinary experiences in the embrace of nature'},
                  {title:'Business-Friendly', text:'Professional amenities for the modern traveler'},
                  {title:'Eco-Conscious', text:'Sustainable luxury in harmony with the environment'},
                  {title:'Central Location', text:'Perfectly positioned in the heart of Harare'},
                ].map(item => (
                  <div key={item.title} style={{ textAlign:'center', padding:18 }}>
                    <div style={{ width:72,height:72,borderRadius:72, background:'rgba(250,248,246,0.8)', display:'inline-flex', alignItems:'center', justifyContent:'center', marginBottom:14 }}>
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="6" stroke="#C9B8A0" strokeWidth="1.4" /></svg>
                    </div>
                    <h4 style={{ margin:'8px 0', fontSize:18 }}>{item.title}</h4>
                    <p style={{ margin:0, color:'var(--muted)' }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* WELLNESS */}
        <section id="wellness" className="section-pad" style={{ background:'rgba(255,255,255,0.6)' }}>
          <div style={{ maxWidth:1100, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:36, alignItems:'center' }}>
            <motion.div {...fadeUp}>
              <div style={{ fontSize:12, letterSpacing:'0.18em', color:'var(--muted)', textTransform:'uppercase' }}>Wellness</div>
              <h2 style={{ fontSize:36, marginTop:8 }}>Wellness & Serenity</h2>
              <p style={{ color:'var(--muted)', maxWidth:560 }}>
                Our wellness philosophy is rooted in understated luxury and natural harmony. From the tranquil garden spaces to the carefully appointed interiors, every element has been designed to promote restoration and balance.
              </p>
              <div style={{ marginTop:18 }}><a className="btn-ghost" href="#wellness">Learn More</a></div>
            </motion.div>

            <motion.div initial={{ opacity:0, x:30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}>
              <div style={{ height:420, borderRadius:14, overflow:'hidden' }}>
                <Image src="/images/bar2.jpg" alt="Wellness" width={1200} height={900} style={{ objectFit:'cover', width:'100%', height:'100%' }} />
              </div>
            </motion.div>
          </div>
        </section>

        {/* LOCATION */}
        <section id="location" className="section-pad">
          <div style={{ maxWidth:1100, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:36, alignItems:'center' }}>
            <motion.div {...fadeUp}>
              <div style={{ fontSize:12, letterSpacing:'0.18em', color:'var(--muted)', textTransform:'uppercase' }}>Location</div>
              <h2 style={{ fontSize:32, marginTop:8 }}>Where Harare Meets Harmony</h2>
              <p style={{ color:'var(--muted)', maxWidth:560 }}>
                Nestled in the vibrant heart of Harare, Honeybear Guest Lodge offers the perfect balance of urban accessibility and natural tranquility — minutes from cultural landmarks yet a world away in atmosphere.
              </p>
              <div style={{ marginTop:18 }}><a className="btn-ghost" href="#map">View on Map</a></div>
            </motion.div>

            <motion.div initial={{ opacity:0, x:30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}>
              <div style={{ borderRadius:12, height:340, background:'rgba(245,243,241,0.7)', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--muted)' }}>
                Map Placeholder
              </div>
            </motion.div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="section-pad">
          <div style={{ maxWidth:1200, margin:'0 auto' }}>
            <motion.div {...fadeUp}>
              <div style={{ textAlign:'center', marginBottom:20 }}>
                <div style={{ fontSize:12, letterSpacing:'0.18em', color:'var(--muted)', textTransform:'uppercase' }}>Gallery</div>
                <h2 style={{ fontSize:36, marginTop:8 }}>Glimpses of Honeybear</h2>
              </div>
            </motion.div>

            <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:12 }}>
              {gallery.map((g) => (
                <motion.div key={g} whileHover={{ scale:1.03 }} style={{ overflow:'hidden', borderRadius:10, height:220 }}>
                  <Image src={`/images/${g}.jpg`} alt={g} width={800} height={600} style={{ objectFit:'cover', width:'100%', height:'100%' }} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-pad" style={{ textAlign:'center' }}>
          <motion.div {...fadeUp}>
            <h2 style={{ fontSize:32 }}>Your Haven Awaits</h2>
            <p style={{ color:'var(--muted)', maxWidth:800, margin:'12px auto 18px' }}>Step into a world where nature and luxury intertwine. Reserve your stay at Honeybear Guest Lodge today.</p>
            <a href="#reserve" className="btn-primary">Reserve Your Stay</a>
          </motion.div>
        </section>

        {/* FOOTER */}
        <footer style={{ borderTop:'1px solid rgba(0,0,0,0.04)', padding:'48px 24px' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:20 }}>
            <div>
              <h4 style={{ margin:'0 0 8px' }}>Honeybear Guest Lodge</h4>
              <p style={{ margin:0, color:'var(--muted)' }}>Your eco-luxury haven in the heart of Harare, Zimbabwe</p>
            </div>
            <div>
              <h5 style={{ margin:'0 0 8px' }}>Contact</h5>
              <p style={{ margin:0, color:'var(--muted)' }}>Harare, Zimbabwe<br/>info@honeybearlodge.com<br/>+263 XX XXX XXXX</p>
            </div>
            <div>
              <h5 style={{ margin:'0 0 8px' }}>Quick Links</h5>
              <nav style={{ display:'flex', flexDirection:'column', gap:8 }}>
                <a href="#rooms" style={{ color:'var(--muted)' }}>Rooms</a>
                <a href="#wellness" style={{ color:'var(--muted)' }}>Wellness</a>
                <a href="#experiences" style={{ color:'var(--muted)' }}>Experiences</a>
                <a href="#gallery" style={{ color:'var(--muted)' }}>Gallery</a>
              </nav>
            </div>
          </div>

          <div style={{ textAlign:'center', marginTop:28, color:'var(--muted)' }}>
            © {new Date().getFullYear()} Honeybear Guest Lodge. All rights reserved.
          </div>
        </footer>
      </main>
    </>
  );
}
