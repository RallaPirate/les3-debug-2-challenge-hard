import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #4c6ef5 0%, #7c3aed 50%, #c026d3 100%)',
      padding: '100px 20px',
      textAlign: 'center',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        maxWidth: '750px',
        margin: '0 auto',
        position: 'relative',
        zIndex: '1'
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          backgroundColor: 'rgba(255,255,255,0.15)',
          padding: '6px 16px',
          borderRadius: '9999px',
          fontSize: '14px',
          fontWeight: '500',
          marginBottom: '24px'
        }}>
          <Sparkles size={14} /> Debug Challenge — Hard Mode
        </div>

        <h1 style={{
          fontSize: '52px',
          fontWeight: 'bold',
          marginBottom: '20px',
          lineHeight: '1.15'
        }}>
          Kun Jij Alle Bugs Vinden?
        </h1>

        <p style={{
          fontSize: '20px',
          marginBottom: '36px',
          opacity: '0.9',
          lineHeight: '1.6',
          maxWidth: '600px',
          margin: '0 auto 36px'
        }}>
          Dit project zit vol met fouten. Missende imports, verkeerde patterns,
          inline styles, en runtime bugs. Fix ze allemaal!
        </p>

        <div style={{
          display: 'flex',
          gap: '12px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <Link href="/blog" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'white',
            color: '#4c6ef5',
            padding: '14px 28px',
            borderRadius: '9999px',
            fontWeight: '600',
            fontSize: '16px',
            textDecoration: 'none'
          }}>
            Bekijk Blog <ArrowRight size={18} />
          </Link>

          <Link href="/dashboard" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(255,255,255,0.15)',
            color: 'white',
            padding: '14px 28px',
            borderRadius: '9999px',
            fontWeight: '600',
            fontSize: '16px',
            textDecoration: 'none',
            border: '1px solid rgba(255,255,255,0.3)'
          }}>
            Dashboard
          </Link>
        </div>
      </div>
    </section>
  );
}
