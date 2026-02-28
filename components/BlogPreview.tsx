import { blogPosts } from "@/lib/posts";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

export default function BlogPreview() {
  // BUG: toont alleen eerste 2, maar .slice() heeft verkeerde parameters
  const recentPosts = blogPosts.slice(-2, 0);

  return (
    <section style={{
      padding: '60px 20px',
      backgroundColor: 'white'
    }}>
      <div className="page-container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '32px'
        }}>
          <h2 className="section-title" style={{ marginBottom: '0' }}>
            Laatste Posts
          </h2>
          <Link href="/blog" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            color: '#7c3aed',
            textDecoration: 'none',
            fontWeight: '500',
            fontSize: '14px'
          }}>
            Alle posts <ArrowRight size={16} />
          </Link>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '24px'
        }}>
          {recentPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} style={{
              textDecoration: 'none',
              color: 'inherit'
            }}>
              <article className="card" style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  marginBottom: '8px',
                  color: '#1a1a1a'
                }}>{post.title}</h3>
                <p style={{
                  color: '#6b7280',
                  lineHeight: '1.6',
                  flex: '1',
                  fontSize: '14px'
                }}>{post.excerpt}</p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '12px',
                  paddingTop: '12px',
                  borderTop: '1px solid #e5e7eb',
                  fontSize: '13px',
                  color: '#9ca3af'
                }}>
                  <span>{formatDate(post.date)}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={12} /> {post.readTime} min
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
