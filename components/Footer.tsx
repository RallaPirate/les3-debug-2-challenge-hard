import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#111827',
      color: 'white',
      padding: '48px 20px 24px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '40px'
      }}>
        <div>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '600',
            marginBottom: '16px'
          }}>🧩 Hard Challenge</h3>
          <p style={{
            color: '#9ca3af',
            lineHeight: '1.7',
            fontSize: '14px'
          }}>
            Een gevorderd debug project van NOVI Hogeschool.
            Leer omgaan met echte development fouten.
          </p>
        </div>

        <div>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '600',
            marginBottom: '16px'
          }}>Pagina&apos;s</h3>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}>
            <Link href="/" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '14px' }}>Home</Link>
            <Link href="/blog" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '14px' }}>Blog</Link>
            <Link href="/dashboard" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '14px' }}>Dashboard</Link>
          </div>
        </div>

        <div>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '600',
            marginBottom: '16px'
          }}>Contact</h3>
          <p style={{
            color: '#9ca3af',
            fontSize: '14px',
            lineHeight: '1.7'
          }}>
            NOVI Hogeschool<br />
            AI Development Cursus<br />
            Utrecht, Nederland
          </p>
        </div>
      </div>

      <div style={{
        borderTop: '1px solid #1f2937',
        marginTop: '40px',
        paddingTop: '20px',
        textAlign: 'center',
        color: '#6b7280',
        fontSize: '13px'
      }}>
        © 2025 Debug Challenge Hard — Les 3 Huiswerk
      </div>
    </footer>
  );
}
