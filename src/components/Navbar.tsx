"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/propiedades", label: "Pueblos" },
  { href: "/vender", label: "Vende tu casa" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-verde-vida text-crema shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight">
            <span className="font-serif text-2xl font-bold text-terracota">
              Revivtaliza
            </span>
            <span className="text-xs text-salvia hidden sm:block">
              Donde las casas vuelven a vivir
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-terracota ${
                  pathname === link.href
                    ? "text-terracota border-b-2 border-terracota pb-0.5"
                    : "text-crema"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/propiedades"
              className="btn-primary text-sm py-2 px-4 rounded-lg"
            >
              Quiero vivir en un pueblo
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-crema hover:text-terracota"
            aria-label="Abrir menú"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-verde-vida border-t border-green-800 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block py-2 text-sm font-medium transition-colors hover:text-terracota ${
                pathname === link.href ? "text-terracota" : "text-crema"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/propiedades"
            onClick={() => setIsOpen(false)}
            className="block btn-primary text-center text-sm py-2 rounded-lg mt-2"
          >
            Quiero vivir en un pueblo
          </Link>
        </div>
      )}
    </nav>
  );
}
