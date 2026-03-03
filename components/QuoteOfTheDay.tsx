"use client";

import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

type QuoteData = {
  id: number;
  text: string;
  author: string;
};

export default function QuoteOfTheDay() {
  const [quote, setQuote] = useState<QuoteData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data);
        setLoading(false);
      });
  }, []);

  return (
    <section style={{
      padding: '60px 20px',
      backgroundColor: '#faf5ff'
    }}>
      <div style={{
        maxWidth: '700px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <Quote size={40} style={{
          color: '#c084fc',
          margin: '0 auto 20px'
        }} />

        {loading ? (
          <p style={{ color: '#9ca3af', fontSize: '18px' }}>Quote laden...</p>
        ) : !quote ? (
          <p style={{ color: '#9ca3af', fontSize: '18px' }}>
            Geen quote beschikbaar.
          </p>
        ) : (
          <>
            <blockquote style={{
              fontSize: '22px',
              fontStyle: 'italic',
              color: '#374151',
              lineHeight: '1.6',
              marginBottom: '16px'
            }}>
              &ldquo;{quote.text}&rdquo;
            </blockquote>
            <cite style={{
              color: '#7c3aed',
              fontWeight: '500',
              fontSize: '15px',
              fontStyle: 'normal'
            }}>
              — {quote.author}
            </cite>
          </>
        )}
      </div>
    </section>
  );
}
