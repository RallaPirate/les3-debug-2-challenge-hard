"use client";

import { useState, useEffect } from "react";
import { DashboardStat } from "@/types";
import { TrendingUp, TrendingDown, Users, Eye, Clock, Star } from "lucide-react";

const stats: DashboardStat[] = [
  { label: "Bezoekers", value: "12.847", change: 12.5, icon: "users" },
  { label: "Pageviews", value: "48.291", change: -3.2, icon: "eye" },
  { label: "Gem. Tijd", value: "4:32", change: 8.1, icon: "clock" },
  { label: "Rating", value: "4.8/5", change: 0.3, icon: "star" },
];

// BUG: icon mapping functie returned soms undefined
function getIcon(iconName: string) {
  const icons: Record<string, React.ReactNode> = {
    users: <Users size={24} />,
    eye: <Eye size={24} />,
    clock: <Clock size={24} />,
  };
  return icons[iconName];
}

export default function DashboardPage() {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    async function loadQuote() {
      const res = await fetch("/api/quotes");
      const data = await res.json();

      if (!cancelled) {
        setQuote(data.text ?? "");
        setLoading(false);
      }
    }
    loadQuote();
    return () => { cancelled = true; };
  }, []);

  return (
    <div className="page-container py-12">
      <h1 className="section-title">Dashboard</h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '20px',
        marginBottom: '40px'
      }}>
        {stats.map((stat) => (
          <div key={stat.label} className="card" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{
                color: '#6b7280',
                fontSize: '14px',
                fontWeight: '500'
              }}>{stat.label}</span>
              <div style={{
                color: '#7c3aed',
                backgroundColor: '#ede9fe',
                padding: '8px',
                borderRadius: '8px'
              }}>
                {getIcon(stat.icon)}
              </div>
            </div>
            <span style={{
              fontSize: '28px',
              fontWeight: 'bold',
              color: '#1a1a1a'
            }}>{stat.value}</span>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '13px'
            }}>
              {stat.change > 0 ? (
                <>
                  <TrendingUp size={14} style={{ color: '#10b981' }} />
                  <span style={{ color: '#10b981' }}>+{stat.change}%</span>
                </>
              ) : (
                <>
                  <TrendingDown size={14} style={{ color: '#ef4444' }} />
                  <span style={{ color: '#ef4444' }}>{stat.change}%</span>
                </>
              )}
              <span style={{ color: '#9ca3af' }}>vs vorige maand</span>
            </div>
          </div>
        ))}
      </div>

      <div className="card" style={{ padding: '32px' }}>
        <h2 style={{
          fontSize: '20px',
          fontWeight: '600',
          marginBottom: '12px'
        }}>Quote van de Dag</h2>
        {loading ? (
          <p style={{ color: '#9ca3af' }}>Laden...</p>
        ) : (
          <blockquote style={{
            fontStyle: 'italic',
            color: '#4b5563',
            fontSize: '18px',
            borderLeft: '3px solid #7c3aed',
            paddingLeft: '16px'
          }}>
            {quote}
          </blockquote>
        )}
      </div>
    </div>
  );
}
