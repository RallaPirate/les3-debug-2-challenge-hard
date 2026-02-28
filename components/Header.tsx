"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/dashboard", label: "Dashboard" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{
      backgroundColor: 'white',
      borderBottom: '1px solid #e5e7eb',
      position: 'sticky',
      top: '0',
      zIndex: '50'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '64px'
      }}>
        <Link href="/" style={{
          fontSize: '20px',
          fontWeight: 'bold',
          color: '#4c6ef5',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          🧩 Hard Challenge
        </Link>

        {/* Desktop navigatie */}
        <nav style={{
          display: 'flex',
          gap: '24px',
          alignItems: 'center'
        }}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} style={{
              color: '#4b5563',
              textDecoration: 'none',
              fontWeight: '500',
              fontSize: '15px'
            }}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger — BUG: menu toggled maar content niet zichtbaar */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#4b5563'
          }}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* BUG: Mobile menu is altijd display:none */}
      {menuOpen && (
        <div style={{
          display: 'none',
          flexDirection: 'column',
          padding: '12px 20px',
          borderTop: '1px solid #e5e7eb',
          backgroundColor: 'white'
        }}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} style={{
              color: '#4b5563',
              textDecoration: 'none',
              padding: '8px 0',
              fontWeight: '500'
            }}
            onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
