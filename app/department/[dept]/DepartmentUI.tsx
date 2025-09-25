"use client";

import React, { useMemo, useState } from "react";

type Props = {
  // data.tsx currently exports a plain array; use a permissive any here
  department: any;
};

export default function DepartmentUI({ department }: Props) {
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const events = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return department.events;
    return department.events.filter((e: any) => {
      return (
        e.title.toLowerCase().includes(q) ||
        e.description.toLowerCase().includes(q) ||
        (e.guidelines || "").toLowerCase().includes(q)
      );
    });
  }, [department.events, query]);

  function onCopy(text: string) {
    if (!text) return;
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setMessage("Copied to clipboard");
        setTimeout(() => setMessage(null), 2000);
      })
      .catch(() => {
        setMessage("Copy failed");
        setTimeout(() => setMessage(null), 2000);
      });
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex items-center gap-6 mb-8">
        {department.clubAsset ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={department.clubAsset}
            alt={department.name}
            width={80}
            height={80}
            className="rounded-full object-cover w-20 h-20"
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center text-white text-lg">
            {department.name.charAt(0)}
          </div>
        )}

        <div>
          <h1 className="text-3xl font-extrabold text-white">{department.name}</h1>
          {department.short && (
            <p className="text-sm text-gray-300 mt-1 max-w-xl">{department.short}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
        <div className="flex-1 w-full">
          <input
            aria-label="Search events"
            value={query}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
            placeholder="Search events, rules or keywords..."
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 placeholder:text-gray-400 text-white"
          />
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => setQuery("")}
            className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white"
          >
            Clear
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((ev: any) => (
          <article
            key={ev.id}
            className="bg-white/6 p-5 rounded-xl border border-white/6 hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-start gap-4">
              <div>
                <h3 className="text-xl font-semibold text-white">{ev.title}</h3>
                <p className="text-sm text-gray-300 mt-2">{ev.description}</p>
              </div>

              <div className="flex flex-col items-end gap-2">
                <button
                  onClick={() => setExpanded((s) => (s === ev.id ? null : ev.id))}
                  className="text-sm px-3 py-1 rounded-md bg-white/8 text-white"
                >
                  {expanded === ev.id ? "Hide" : "Details"}
                </button>
              </div>
            </div>

            {expanded === ev.id && (
              <div className="mt-4 border-t border-white/6 pt-4">
                {ev.guidelines && (
                  <p className="text-sm text-gray-200">{ev.guidelines}</p>
                )}

                <div className="flex flex-wrap gap-3 mt-4">
                  {ev.guidelineUrl && (
                    <a
                      href={ev.guidelineUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block px-4 py-2 bg-gradient-to-br from-cyan-500 to-blue-500 text-white rounded-md"
                    >
                      View Guidelines
                    </a>
                  )}

                  {ev.registerUrl && (
                    <a
                      href={ev.registerUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block px-4 py-2 bg-white text-gray-900 rounded-md"
                    >
                      Register
                    </a>
                  )}

                  {ev.contact && (
                    <button
                      onClick={() => onCopy(ev.contact ?? "")}
                      className="inline-block px-4 py-2 bg-white/8 text-white rounded-md"
                    >
                      Copy Contact
                    </button>
                  )}
                </div>
              </div>
            )}
          </article>
        ))}
      </div>

      {events.length === 0 && (
        <p className="text-center text-gray-300 mt-8">No events match your search.</p>
      )}

      {message && (
        <div className="fixed bottom-6 right-6 bg-black/70 text-white px-4 py-2 rounded-md">
          {message}
        </div>
      )}
    </div>
  );
}
