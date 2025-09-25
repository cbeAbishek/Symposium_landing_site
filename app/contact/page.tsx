"use client";

import React from "react";
import { Navigation } from "../components/nav";
import { PhoneCallIcon, MapPin } from "lucide-react";
import Particles from "../components/particles2";

const contacts = [
  { href: "tel:+917904823782", label: "+91 79048 23782", name: "Mrs. A. Jenifa", role: "CSE - Coordinator" },
  { href: "tel:+917871012810", label: "+91 78710 12810", name: "Mrs. M. Ramya", role: "IT - Coordinator" },
  { href: "tel:+916374948067", label: "+91 63749 48067", name: "Mrs. A. Yuvarani", role: "AI & DS - Coordinator" },
  { href: "tel:+919585480700", label: "+91 95854 80700", name: "Mr. M. Mohan", role: "MECH - Coordinator" },
  { href: "tel:+917092964232", label: "+91 70929 64232", name: "Mr. Mohan", role: "ECE - Coordinator" },
  { href: "tel:+918072965471", label: "+91 80729 65471", name: "Mr. G. Udhaya Kumar", role: "AGRI - Coordinator" },
  { href: "tel:+916374467626", label: "+91 63744 67626", name: "K. Kaaviyakanth", role: "BME - Coordinator" },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen relative bg-gradient-to-tr from-emerald-900 via-indigo-950 to-slate-900 text-white overflow-hidden">
      <Navigation />
      <Particles className="absolute inset-0 z-0 opacity-30" quantity={160} />

      <div className="absolute -left-36 top-24 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-indigo-600 to-emerald-400 opacity-20 blur-3xl animate-blob" />
      <div className="absolute right-[-120px] bottom-[-80px] w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-sky-500 to-violet-500 opacity-16 blur-3xl animate-blob animation-delay-2000" />

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <section className="space-y-6 p-6 lg:p-12">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">Let’s talk — we’ll handle the rest</h1>
            <p className="text-lg text-zinc-300 max-w-xl">Fast answers, clear guidance. Contact coordinators directly or send a message and we’ll route it to the right person.</p>

            {/* <div className="mt-6 flex flex-wrap gap-4">
              <a href="tel:+917904823782" className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-emerald-500 text-black font-semibold shadow-md hover:scale-105 transition"> 
                <PhoneCallIcon className="w-5 h-5" /> Call us
              </a>

              <a href="#department" className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-transparent border border-white/10 text-white hover:bg-white/6 transform transition">
                <MapPin className="w-5 h-5" /> Find a coordinator
              </a>
            </div> */}

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/6 backdrop-blur-sm border border-white/6">
                <h4 className="text-sm text-zinc-300">Location</h4>
                <p className="font-medium"> PPG IT </p>
              </div>
              {/* <div className="p-4 rounded-xl bg-white/6 backdrop-blur-sm border border-white/6">
                <h4 className="text-sm text-zinc-300">Hours</h4>
                <p className="font-medium">Mon — Fri, 9:00 — 18:00</p>
              </div> */}
            </div>
          </section>

          <aside className="p-1 rounded-3xl bg-gradient-to-br from-white/5 to-white/3 shadow-2xl">
            <div className="bg-white/5 rounded-3xl p-6 lg:p-8 backdrop-blur-md">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold">Contact the team</h3>
                  <p className="text-sm text-zinc-300">Pick a coordinator or send a quick message.</p>
                </div>
              
              </div>

              <div className="grid grid-cols-1 gap-3 mb-6">
                {contacts.map((c, i) => (
                  <div key={i} className="flex items-center justify-between gap-4 p-3 rounded-lg bg-white/6 border border-white/6 hover:scale-[1.02] transition-transform">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center text-slate-900 font-semibold">{c.role.split(' ')[0]}</div>
                      <div>
                        <div className="text-sm font-medium">{c.role}</div>
                        <div className="text-xs text-zinc-300">{c.name}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <a href={c.href} className="px-3 py-2 rounded-md bg-emerald-500 text-black text-sm">Call</a>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-sm text-zinc-300">To contact, tap <strong>Call</strong> on a coordinator card or use the quick call links above.</div>
            </div>
          </aside>
        </div>
      </main>

      <style jsx>{`
        .animate-blob {
          animation: blob 8s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @keyframes blob {
          0% { transform: translateY(0px) scale(1); }
          33% { transform: translateY(-20px) scale(1.05); }
          66% { transform: translateY(10px) scale(0.95); }
          100% { transform: translateY(0px) scale(1); }
        }
      `}</style>
    </div>
  );
}
