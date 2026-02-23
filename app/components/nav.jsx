"use client";

import { GoArrowLeft } from 'react-icons/go';
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/timeline", label: "Timeline" },
  { href: "/contact", label: "Contact" },
];

export const Navigation = () => {
  const ref = useRef(null);
  const [isIntersecting, setIntersecting] = useState(true);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting));
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${
          isIntersecting ? "bg-zinc-900/0 border-transparent" : "bg-zinc-900/70 border-zinc-800"
        }`}
      >
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className="flex justify-between gap-6 text-sm sm:text-base">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="duration-200 text-zinc-400 hover:text-zinc-100 relative block">
                {l.label}
              </Link>
            ))}
          </div>

          <Link href="/" className="duration-200 text-zinc-300 hover:text-zinc-100" aria-label="Back home">
            <GoArrowLeft className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </header>
  );
};
