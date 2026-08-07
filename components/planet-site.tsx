'use client'

import { useState } from 'react'
import {
  ArrowDownRight,
  ArrowUpRight,
  ChevronRight,
  Menu,
  Orbit,
  Play,
  Sparkles,
  X,
} from 'lucide-react'

const navItems = [
  { label: 'Our home', href: '#home' },
  { label: 'The numbers', href: '#numbers' },
  { label: 'Field notes', href: '#notes' },
]

const planetFacts = [
  { value: '4.54B', label: 'years old', detail: 'A world with a long memory' },
  { value: '71%', label: 'covered by water', detail: 'The blue planet, literally' },
  { value: '8.7M', label: 'known species', detail: 'And countless stories left to find' },
]

export function PlanetSite() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function handleSubscribe(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (email.trim()) setSubscribed(true)
  }

  return (
    <main id="home" className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#home" className="flex items-center gap-3" aria-label="Planet home">
            <span className="flex size-9 items-center justify-center rounded-full border border-cyan-300/70 text-cyan-300">
              <Orbit size={18} strokeWidth={1.5} aria-hidden="true" />
            </span>
            <span className="font-mono text-sm font-medium tracking-[0.28em] text-slate-100">PLATNET<span className="text-cyan-300">/</span>01</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-300 transition-colors hover:text-cyan-300">
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#join" className="hidden items-center gap-2 rounded-full border border-cyan-300/50 px-4 py-2 text-sm text-cyan-200 transition-colors hover:bg-cyan-300 hover:text-ink sm:flex">
            Join the orbit <ArrowUpRight size={15} aria-hidden="true" />
          </a>

          <button type="button" className="text-slate-100 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="flex flex-col gap-5 border-t border-white/10 px-6 py-5 md:hidden" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-200" onClick={() => setMenuOpen(false)}>{item.label}</a>
            ))}
            <a href="#join" className="text-sm text-cyan-300" onClick={() => setMenuOpen(false)}>Join the orbit →</a>
          </nav>
        )}
      </header>

      <section className="relative isolate flex min-h-[760px] items-end overflow-hidden pt-28 lg:min-h-[820px]">
        <div className="absolute inset-0 -z-20 bg-navy" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_65%_42%,rgba(21,106,139,0.28),transparent_26%),linear-gradient(100deg,navy_6%,rgba(7,21,34,0.7)_46%,rgba(7,21,34,0.06)_100%)]" />
        <img src="/planet-hero.png" alt="Earth viewed from orbit at sunrise" className="absolute inset-y-0 right-0 -z-10 h-full w-full object-cover object-[68%_center] opacity-90 mix-blend-screen lg:w-[68%]" />
        <div className="absolute bottom-0 left-0 right-0 -z-10 h-1/2 bg-gradient-to-t from-navy to-transparent" />

        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:px-10 lg:pb-28">
          <div className="max-w-2xl">
            <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-cyan-300"><span className="h-px w-8 bg-cyan-300" />A living archive / issue 01</div>
            <h1 className="max-w-3xl text-balance font-sans text-6xl font-medium leading-[0.92] tracking-[-0.06em] text-slate-50 sm:text-7xl lg:text-[7.6rem]">A small world<br /><span className="text-cyan-300">with everything</span> in it.</h1>
            <p className="mt-8 max-w-md text-pretty text-base leading-7 text-slate-300 sm:text-lg">Planet is a field guide to our only home — its quiet systems, wild edges, and the improbable beauty of being here.</p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a href="#numbers" className="inline-flex items-center gap-3 rounded-full bg-cyan-300 px-5 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-1">Explore Earth <ArrowDownRight size={17} /></a>
              <a href="#notes" className="group inline-flex items-center gap-3 text-sm text-slate-200"><span className="flex size-10 items-center justify-center rounded-full border border-white/30 transition-colors group-hover:border-cyan-300 group-hover:text-cyan-300"><Play size={14} fill="currentColor" /></span> Watch the overview</a>
            </div>
          </div>
          <div className="flex justify-start lg:justify-end">
            <div className="w-full max-w-xs border-l border-white/20 pl-5 text-sm leading-6 text-slate-300"><span className="mb-3 block font-mono text-xs uppercase tracking-[0.2em] text-slate-500">Coordinates</span><p>40° 42′ N, 74° 00′ W</p><p className="text-slate-500">Somewhere between here and everywhere.</p></div>
          </div>
        </div>
      </section>

      <section id="numbers" className="bg-paper px-6 py-24 text-ink lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-cyan">01 / The numbers</p><h2 className="max-w-xl text-balance text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl">The statistics are staggering. The details are better.</h2></div><p className="max-w-xs text-sm leading-6 text-slate-600">A few coordinates for a world that refuses to be reduced to a single story.</p></div>
          <div className="grid border-t border-ink/20 md:grid-cols-3">
            {planetFacts.map((fact, index) => <article key={fact.label} className="border-b border-ink/20 py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"><span className="font-mono text-xs text-cyan">0{index + 1}</span><p className="mt-8 text-6xl font-medium tracking-[-0.06em] sm:text-7xl">{fact.value}</p><h3 className="mt-4 text-lg font-medium">{fact.label}</h3><p className="mt-2 text-sm text-slate-600">{fact.detail}</p></article>)}
          </div>
        </div>
      </section>

      <section id="notes" className="bg-deep px-6 py-24 text-slate-100 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24"><div><p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-cyan-300">02 / Field notes</p><h2 className="text-balance text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl">Look closer.<br />Everything changes.</h2><a href="#join" className="mt-10 inline-flex items-center gap-2 text-sm text-cyan-300 transition-colors hover:text-slate-100">Read all dispatches <ChevronRight size={16} /></a></div><div className="grid gap-0 border-t border-white/20"><article className="group flex items-start justify-between gap-8 border-b border-white/20 py-7"><div><span className="font-mono text-xs text-slate-500">OCEAN / 04.18.26</span><h3 className="mt-3 text-2xl font-medium tracking-tight group-hover:text-cyan-300">The language of a tide pool</h3><p className="mt-2 max-w-lg text-sm leading-6 text-slate-400">On small worlds inside the big one, and the creatures that build cities from salt.</p></div><ArrowUpRight className="shrink-0 text-slate-500 transition-colors group-hover:text-cyan-300" size={20} /></article><article className="group flex items-start justify-between gap-8 border-b border-white/20 py-7"><div><span className="font-mono text-xs text-slate-500">ATMOSPHERE / 03.02.26</span><h3 className="mt-3 text-2xl font-medium tracking-tight group-hover:text-cyan-300">A cloud is a moving archive</h3><p className="mt-2 max-w-lg text-sm leading-6 text-slate-400">What the sky keeps track of while we look down at our phones.</p></div><ArrowUpRight className="shrink-0 text-slate-500 transition-colors group-hover:text-cyan-300" size={20} /></article><article className="group flex items-start justify-between gap-8 border-b border-white/20 py-7"><div><span className="font-mono text-xs text-slate-500">WILD / 01.27.26</span><h3 className="mt-3 text-2xl font-medium tracking-tight group-hover:text-cyan-300">Instructions for noticing</h3><p className="mt-2 max-w-lg text-sm leading-6 text-slate-400">A pocket guide to paying attention to the life already around you.</p></div><ArrowUpRight className="shrink-0 text-slate-500 transition-colors group-hover:text-cyan-300" size={20} /></article></div></div>
      </section>

      <section id="join" className="bg-cyan-300 px-6 py-20 text-ink lg:px-10 lg:py-28"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-12 lg:flex-row lg:items-end"><div><Sparkles className="mb-8" size={24} /><h2 className="max-w-2xl text-balance text-4xl font-medium leading-[1] tracking-[-0.05em] sm:text-6xl">Stay curious.<br />We&apos;ll send the good stuff.</h2></div><div className="w-full max-w-sm"><p className="mb-5 text-sm leading-6 text-ink/70">A monthly dispatch of field notes, impossible facts, and ways to see the world differently.</p>{subscribed ? <p className="font-medium">You&apos;re on the list. See you out there.</p> : <form onSubmit={handleSubscribe} className="flex border-b border-ink/50 pb-3"><label htmlFor="email" className="sr-only">Email address</label><input id="email" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Your email address" className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-ink/60" /><button type="submit" className="font-mono text-xs uppercase tracking-[0.18em]">Subscribe <span aria-hidden="true">→</span></button></form>}</div></div></section>

      <footer className="flex flex-col justify-between gap-4 bg-navy px-6 py-8 text-xs text-slate-500 sm:flex-row sm:items-center lg:px-10"><span className="font-mono tracking-[0.2em]">PLATNET/01 — FOR THE CURIOUS</span><span>Made for the world we share.</span></footer>
    </main>
  )
}
