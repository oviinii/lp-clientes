"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV, PHONE_DISPLAY, PHONE_HREF, WHATSAPP } from "@/lib/data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* topbar */}
      <div className="bg-deep-950 text-white/80 text-[12.5px]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2">
          <p className="hidden sm:block">Rua Salvador Corrêa, 628 — Sorocaba/SP · Seg–Sex 9h às 19h · Sáb 9h às 13h</p>
          <p className="sm:hidden">Sorocaba/SP · Seg–Sex 9h às 19h</p>
          <div className="flex items-center gap-4">
            <a href={PHONE_HREF} className="font-semibold text-gold-400 hover:text-gold-100">{PHONE_DISPLAY}</a>
            <a href={WHATSAPP} target="_blank" className="hidden rounded-full bg-white/10 px-3 py-1 font-medium text-white hover:bg-white/20 md:block">
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all ${
          scrolled ? "bg-deep-950/90 shadow-2xl shadow-black/20 backdrop-blur-xl" : "bg-deep-950"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Conexão Planeta Turismo"
              className="h-12 w-auto rounded-xl bg-white px-3 py-1.5 shadow-lg shadow-black/20"
            />
            <span className="hidden leading-tight xl:block">
              <span className="block text-[11px] font-medium uppercase tracking-[0.22em] text-white/50">
                Lazer · Grupos · Corporativo
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="rounded-full px-4 py-2.5 text-[14px] font-medium text-white/85 transition hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="invisible absolute left-0 top-full w-[340px] translate-y-2 pt-3 opacity-0 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white p-2 shadow-2xl">
                      {item.children.map((c) => (
                        <Link key={c.label} href={c.href} className="block rounded-xl px-4 py-3 hover:bg-cream-100">
                          <span className="block text-[14px] font-semibold text-ink-900">{c.label}</span>
                          {"desc" in c && <span className="block text-[12.5px] text-ink-500">{c.desc}</span>}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              className="ml-3 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 px-5 py-2.5 text-[14px] font-bold text-deep-950 shadow-lg shadow-gold-500/25 transition hover:brightness-110"
            >
              Orçamento →
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-white lg:hidden"
            aria-label="Abrir menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* mobile */}
        {open && (
          <div className="border-t border-white/10 bg-deep-950 px-5 pb-8 pt-2 lg:hidden">
            {NAV.map((item) => (
              <div key={item.label} className="border-b border-white/5 py-1">
                <div className="flex items-center justify-between">
                  <Link href={item.href} onClick={() => setOpen(false)} className="py-3 font-semibold text-white">
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      onClick={() => setOpenSub(openSub === item.label ? null : item.label)}
                      className="rounded-lg bg-white/10 px-3 py-1.5 text-white"
                    >
                      {openSub === item.label ? "−" : "+"}
                    </button>
                  )}
                </div>
                {item.children && openSub === item.label && (
                  <div className="pb-3 pl-2">
                    {item.children.map((c) => (
                      <Link
                        key={c.label}
                        href={c.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-lg px-3 py-2.5 text-[14px] text-white/75 hover:bg-white/10 hover:text-white"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              className="mt-5 block rounded-2xl bg-gradient-to-r from-gold-400 to-gold-500 px-5 py-3.5 text-center font-bold text-deep-950"
            >
              Pedir orçamento no WhatsApp →
            </a>
          </div>
        )}
      </header>
    </>
  );
}
