'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

type Tone = 'poetic' | 'luxurious' | 'corporate';

const content = {
  hero: {
    poetic: {
      subtitle: 'Where golden light meets tranquil refuge',
    },
    luxurious: {
      subtitle: 'An exclusive sanctuary of refined comfort',
    },
    corporate: {
      subtitle: 'Professional hospitality in Zimbabwe\'s capital',
    },
  },
  philosophy: {
    poetic: {
      text: 'In the heart of the city, nature breathes. Here, time slows to the rhythm of rustling leaves and dappled sunlight. Each moment is an invitation to pause, to breathe, to reconnect with the earth beneath your feet and the sky above. Honeybear is not merely a place to stay—it is a threshold between the urgency of the world and the serenity of the soul.',
    },
    luxurious: {
      text: 'Honeybear Guest Lodge represents the pinnacle of boutique hospitality in Harare. Our meticulously designed spaces blend contemporary African aesthetics with internationally acclaimed comfort standards. Every detail has been carefully curated to deliver an experience that transcends accommodation, offering our discerning guests a haven of sophistication and natural beauty.',
    },
    corporate: {
      text: 'Honeybear Guest Lodge provides premium accommodation services in Harare, Zimbabwe. Our facility combines modern amenities with eco-conscious design principles, offering business travelers and tourists a comfortable, sustainable lodging option. Located centrally with excellent access to business districts and tourist attractions, we deliver reliable, professional hospitality with a commitment to environmental responsibility.',
    },
  },
  wellness: {
    poetic: {
      title: 'The Art of Stillness',
      text: 'Sunlight filters through native flora. A gentle breeze carries the scent of earth and blossom. In our garden courtyards, time dissolves. Here, wellness is not a practice but a presence—the quiet joy of being fully, simply, here.',
    },
    luxurious: {
      title: 'Wellness & Serenity',
      text: 'Our wellness philosophy is rooted in understated luxury and natural harmony. From the tranquil garden spaces to the carefully appointed interiors, every element has been designed to promote restoration and balance. Experience the rare luxury of true peace.',
    },
    corporate: {
      title: 'Wellness Facilities',
      text: 'Honeybear Guest Lodge features dedicated wellness spaces designed to support guest relaxation and recovery. Our landscaped gardens, quiet lounges, and thoughtfully designed accommodations provide an optimal environment for rest after business engagements or travel.',
    },
  },
  rooms: {
    standard: {
      poetic: 'A cocoon of comfort where simplicity becomes elegance',
      luxurious: 'Refined comfort with authentic African character',
      corporate: 'Well-appointed rooms with modern amenities',
    },
    wellness: {
      poetic: 'Sanctuaries designed for the traveler seeking deeper rest',
      luxurious: 'Premium suites for the discerning guest',
      corporate: 'Enhanced accommodations with additional space and features',
    },
    family: {
      poetic: 'Generous spaces where loved ones gather and memories bloom',
      luxurious: 'Spacious family accommodations with elegant finishes',
      corporate: 'Multi-room suites suitable for families or extended stays',
    },
  },
};

export default function Home() {
  const [tone, setTone] = useState<Tone>('luxurious');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <h1 className="text-2xl md:text-3xl font-semibold text-foreground">Honeybear</h1>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#rooms" className="text-sm hover:text-primary transition-colors">Rooms</a>
              <a href="#wellness" className="text-sm hover:text-primary transition-colors">Wellness</a>
              <a href="#experiences" className="text-sm hover:text-primary transition-colors">Experiences</a>
              <a href="#gallery" className="text-sm hover:text-primary transition-colors">Gallery</a>
              <Button variant="outline" className="rounded-full">Reserve Your Stay</Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <a href="#rooms" className="block text-sm hover:text-primary transition-colors">Rooms</a>
              <a href="#wellness" className="block text-sm hover:text-primary transition-colors">Wellness</a>
              <a href="#experiences" className="block text-sm hover:text-primary transition-colors">Experiences</a>
              <a href="#gallery" className="block text-sm hover:text-primary transition-colors">Gallery</a>
              <Button variant="outline" className="rounded-full w-full">Reserve Your Stay</Button>
            </div>
          )}
        </div>
      </nav>

      {/* Tone Switcher */}
      <div className="fixed top-24 right-4 z-40 bg-card border border-border rounded-full p-1 shadow-lg">
        <div className="flex gap-1">
          <button
            onClick={() => setTone('poetic')}
            className={`px-3 py-1.5 text-xs rounded-full transition-all ${
              tone === 'poetic' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
            }`}
          >
            Poetic
          </button>
          <button
            onClick={() => setTone('luxurious')}
            className={`px-3 py-1.5 text-xs rounded-full transition-all ${
              tone === 'luxurious' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
            }`}
          >
            Luxurious
          </button>
          <button
            onClick={() => setTone('corporate')}
            className={`px-3 py-1.5 text-xs rounded-full transition-all ${
              tone === 'corporate' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
            }`}
          >
            Corporate
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero.jpg)',
          }}
        />
        <div className="relative z-20 text-center text-white px-4 animate-fade-in-slow">
          <p className="text-sm md:text-base uppercase tracking-widest mb-4 opacity-90">Harare, Zimbabwe</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance">
            Honeybear Guest Lodge
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-3xl mx-auto text-balance font-light">
            {content.hero[tone].subtitle}
          </p>
          <Button size="lg" className="rounded-full text-base px-8 py-6 bg-white text-foreground hover:bg-white/90">
            Discover Your Sanctuary
          </Button>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 md:py-32 px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6">Our Philosophy</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 text-balance">
            A Place to Breathe
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            {content.philosophy[tone].text}
          </p>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-24 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Accommodation</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">Our Rooms & Suites</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each space thoughtfully designed to be your personal haven
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Standard Rooms */}
            <div className="group cursor-pointer animate-fade-in">
              <div className="aspect-[4/5] mb-6 overflow-hidden rounded-lg">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: 'url(/images/standard-room.jpg)' }}
                />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Standard Rooms</h3>
              <p className="text-muted-foreground mb-4">
                {content.rooms.standard[tone]}
              </p>
              <Button variant="link" className="p-0 h-auto text-primary">
                Explore →
              </Button>
            </div>

            {/* Wellness Suites */}
            <div className="group cursor-pointer animate-fade-in">
              <div className="aspect-[4/5] mb-6 overflow-hidden rounded-lg">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: 'url(/images/wellness-suite.jpg)' }}
                />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Wellness Suites</h3>
              <p className="text-muted-foreground mb-4">
                {content.rooms.wellness[tone]}
              </p>
              <Button variant="link" className="p-0 h-auto text-primary">
                Explore →
              </Button>
            </div>

            {/* Family Suites */}
            <div className="group cursor-pointer animate-fade-in">
              <div className="aspect-[4/5] mb-6 overflow-hidden rounded-lg">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: 'url(/images/family-suite.jpg)' }}
                />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Family Suites</h3>
              <p className="text-muted-foreground mb-4">
                {content.rooms.family[tone]}
              </p>
              <Button variant="link" className="p-0 h-auto text-primary">
                Explore →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Wellness Section */}
      <section id="wellness" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: 'url(/images/wellness.jpg)' }}
                />
              </div>
            </div>
            <div className="animate-fade-in">
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6">Wellness</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8">
                {content.wellness[tone].title}
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                {content.wellness[tone].text}
              </p>
              <Button variant="outline" className="rounded-full">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section id="experiences" className="py-24 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Experiences</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">What Awaits You</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 animate-fade-in">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Garden Courtyards</h3>
              <p className="text-muted-foreground">
                Lush green spaces where nature and design harmonize
              </p>
            </div>

            <div className="text-center p-8 animate-fade-in">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Outdoor Lounges</h3>
              <p className="text-muted-foreground">
                Serene spaces for relaxation under African skies
              </p>
            </div>

            <div className="text-center p-8 animate-fade-in">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M3 7v1a3 3 0 003 3h12a3 3 0 003-3V7m-5 6v6m-8-6v6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Dining Terrace</h3>
              <p className="text-muted-foreground">
                Culinary experiences in the embrace of nature
              </p>
            </div>

            <div className="text-center p-8 animate-fade-in">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Business-Friendly</h3>
              <p className="text-muted-foreground">
                Professional amenities for the modern traveler
              </p>
            </div>

            <div className="text-center p-8 animate-fade-in">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Eco-Conscious</h3>
              <p className="text-muted-foreground">
                Sustainable luxury in harmony with the environment
              </p>
            </div>

            <div className="text-center p-8 animate-fade-in">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Central Location</h3>
              <p className="text-muted-foreground">
                Perfectly positioned in the heart of Harare
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6">Location</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8">
                Where Harare Meets Harmony
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                Nestled in the vibrant heart of Harare, Honeybear Guest Lodge offers the perfect balance of urban accessibility and natural tranquility. Minutes from business districts, cultural landmarks, and the city's finest attractions, yet a world away in atmosphere.
              </p>
              <Button variant="outline" className="rounded-full">
                View on Map
              </Button>
            </div>
            <div className="animate-fade-in">
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted/50 flex items-center justify-center">
                <p className="text-muted-foreground">Map Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Gallery</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">Glimpses of Honeybear</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-lg overflow-hidden group cursor-pointer animate-fade-in"
              >
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(/images/gallery-${i}.jpg)` }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 text-balance">
            Your Haven Awaits
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Step into a world where nature and luxury intertwine. Reserve your stay at Honeybear Guest Lodge today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full text-base px-8 py-6">
              Reserve Your Stay
            </Button>
            <Button size="lg" variant="outline" className="rounded-full text-base px-8 py-6">
              Enquire Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Honeybear Guest Lodge</h3>
              <p className="text-muted-foreground mb-4">
                Your eco-luxury haven in the heart of Harare, Zimbabwe
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-muted-foreground mb-2">Harare, Zimbabwe</p>
              <p className="text-muted-foreground mb-2">info@honeybearlodge.com</p>
              <p className="text-muted-foreground">+263 XX XXX XXXX</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#rooms" className="block text-muted-foreground hover:text-primary transition-colors">Rooms</a>
                <a href="#wellness" className="block text-muted-foreground hover:text-primary transition-colors">Wellness</a>
                <a href="#experiences" className="block text-muted-foreground hover:text-primary transition-colors">Experiences</a>
                <a href="#gallery" className="block text-muted-foreground hover:text-primary transition-colors">Gallery</a>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 Honeybear Guest Lodge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
