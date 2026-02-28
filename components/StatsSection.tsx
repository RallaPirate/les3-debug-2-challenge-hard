import { Code, Users, Zap, BookOpen } from "lucide-react";

const stats = [
  { icon: <Code size={28} />, value: "12", label: "Fouten Verstopt" },
  { icon: <Users size={28} />, value: "3", label: "Pagina's" },
  { icon: <Zap size={28} />, value: "7", label: "Componenten" },
  { icon: <BookOpen size={28} />, value: "∞", label: "Leermomenten" },
];

export default function StatsSection() {
  return (
    <section style={{
      padding: '40px 20px',
      backgroundColor: 'white',
      borderBottom: '1px solid #e5e7eb'
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '24px',
        textAlign: 'center'
      }}>
        {stats.map((stat, i) => (
          <div key={i} style={{
            padding: '20px'
          }}>
            <div style={{
              color: '#7c3aed',
              marginBottom: '8px',
              display: 'flex',
              justifyContent: 'center'
            }}>
              {stat.icon}
            </div>
            <div style={{
              fontSize: '32px',
              fontWeight: 'bold',
              color: '#1a1a1a',
              marginBottom: '4px'
            }}>{stat.value}</div>
            <div style={{
              color: '#6b7280',
              fontSize: '14px',
              fontWeight: '500'
            }}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
