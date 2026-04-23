import { Terminal, Cpu, LayoutGrid as Layout, Twitter, Youtube, ArrowUpRight, Code2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const cards = [
  {
    icon: Layout,
    title: 'Interactive Web Apps',
    desc: 'Fast, responsive interfaces that feel alive. Built for humans, not demos.',
  },
  {
    icon: Cpu,
    title: 'AI-Powered Tools',
    desc: 'Practical AI integrations that solve real problems — not buzzword bingo.',
  },
  {
    icon: Terminal,
    title: 'Landing Pages',
    desc: 'Sharp, conversion-focused pages that communicate what you actually do.',
  },
];

const socials = [
  {
    icon: Twitter,
    label: 'Twitter / X',
    handle: '@LukasBuildAi',
    href: 'https://x.com',
    color: 'hover:border-sky-500/60 hover:bg-sky-500/5',
    dot: 'bg-sky-400',
  },
  {
    icon: Youtube,
    label: 'YouTube',
    handle: 'Lukas',
    href: 'https://youtube.com',
    color: 'hover:border-red-500/60 hover:bg-red-500/5',
    dot: 'bg-red-400',
  },
];

export default function App() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!gridRef.current) return;

      const rect = gridRef.current.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const x = (e.clientX - rect.left - centerX) * 0.15;
      const y = (e.clientY - rect.top - centerY) * 0.15;

      setOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e8e8e8] font-sans selection:bg-emerald-500/30">
      {/* Parallax grid background */}
      <div
        ref={gridRef}
        className="fixed inset-0 pointer-events-none overflow-hidden"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            transform: `translate(${offset.x}px, ${offset.y}px)`,
            transition: 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        />
      </div>

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-2">
          <Code2 size={20} className="text-emerald-400" />
          <span className="text-sm font-mono text-neutral-400 tracking-widest uppercase">gehrman.dev</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono text-neutral-500">available for work</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-start justify-center px-6 pt-24 pb-32 max-w-5xl mx-auto">
        <div className="mb-6">
          <span className="inline-block text-xs font-mono text-emerald-400 border border-emerald-400/30 bg-emerald-400/5 px-3 py-1 rounded-full tracking-widest uppercase">
            Developer &amp; Builder
          </span>
        </div>

        <h1 className="text-7xl sm:text-8xl md:text-[9rem] font-black leading-[0.9] tracking-tight text-white mb-8">
          Gehr
          <span className="text-emerald-400">man</span>
          <span className="text-neutral-600">.</span>
        </h1>

        <p className="text-lg sm:text-xl text-neutral-400 max-w-xl leading-relaxed font-light">
          Building AI-powered web tools in public.{' '}
          <span className="text-neutral-200 font-normal">Follow the journey.</span>
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#follow"
            className="inline-flex items-center gap-2 bg-emerald-400 text-black text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-emerald-300 transition-colors duration-200"
          >
            Follow along
            <ArrowUpRight size={15} />
          </a>
          <a
            href="#build"
            className="inline-flex items-center gap-2 border border-neutral-700 text-neutral-300 text-sm font-medium px-5 py-2.5 rounded-lg hover:border-neutral-500 hover:text-white transition-colors duration-200"
          >
            What I build
          </a>
        </div>
      </section>

      {/* Divider */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
      </div>

      {/* What I Build */}
      <section id="build" className="relative z-10 max-w-5xl mx-auto px-6 py-24">
        <div className="mb-12">
          <p className="text-xs font-mono text-emerald-400 tracking-widest uppercase mb-3">/ what i build</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Tools worth using.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {cards.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative border border-neutral-800 bg-neutral-900/50 rounded-xl p-6 hover:border-neutral-600 transition-all duration-300 hover:bg-neutral-900/80"
            >
              <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 group-hover:bg-emerald-400/15 transition-colors duration-300">
                <Icon size={18} />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
      </div>

      {/* Follow the Journey */}
      <section id="follow" className="relative z-10 max-w-5xl mx-auto px-6 py-24">
        <div className="mb-12">
          <p className="text-xs font-mono text-emerald-400 tracking-widest uppercase mb-3">/ follow the journey</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Watch it get built.
          </h2>
          <p className="text-neutral-500 mt-3 text-base max-w-md">
            No polished highlight reels — raw process, real mistakes, actual progress.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
          {socials.map(({ icon: Icon, label, handle, href, color, dot }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center justify-between border border-neutral-800 bg-neutral-900/50 rounded-xl p-5 transition-all duration-300 ${color}`}
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-neutral-800 text-neutral-300 group-hover:text-white transition-colors duration-200">
                  <Icon size={17} />
                </div>
                <div>
                  <p className="text-sm font-medium text-white leading-none mb-1">{label}</p>
                  <p className="text-xs text-neutral-500 font-mono">{handle}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`h-1.5 w-1.5 rounded-full ${dot} opacity-60`} />
                <ArrowUpRight size={14} className="text-neutral-600 group-hover:text-neutral-300 transition-colors duration-200" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-neutral-800/60 px-6 py-8 max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-xs font-mono text-neutral-600">2026 Lukas</span>
        <span className="text-xs font-mono text-neutral-700">built in public</span>
      </footer>
    </div>
  );
}
