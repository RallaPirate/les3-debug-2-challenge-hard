import { blogPosts } from "@/lib/posts";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { Clock } from "lucide-react";

export default function BlogPage() {
  const pageContainerClass = "max-w-[1200px] mx-auto px-5 py-12";
  const sectionTitleClass = "text-[32px] font-bold text-center mb-10 text-[#1a1a1a]";
  const cardClass =
    "p-6 bg-white rounded-xl border border-gray-200 transition-all duration-200 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] hover:-translate-y-0.5";

  return (
    <div className={pageContainerClass}>
      <h1 className={sectionTitleClass}>Blog</h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '24px'
      }}>
        {blogPosts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} style={{
            textDecoration: 'none',
            color: 'inherit'
          }}>
            <article className={cardClass} style={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{
                display: 'flex',
                gap: '8px',
                marginBottom: '12px',
                flexWrap: 'wrap'
              }}>
                {post.tags.map((tag) => (
                  <span key={tag} style={{
                    backgroundColor: '#ede9fe',
                    color: '#7c3aed',
                    padding: '2px 10px',
                    borderRadius: '9999px',
                    fontSize: '12px',
                    fontWeight: '500'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              <h2 style={{
                fontSize: '20px',
                fontWeight: '600',
                marginBottom: '8px',
                color: '#1a1a1a'
              }}>{post.title}</h2>

              <p style={{
                color: '#6b7280',
                lineHeight: '1.6',
                flex: '1',
                fontSize: '15px'
              }}>{post.excerpt}</p>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '16px',
                paddingTop: '16px',
                borderTop: '1px solid #e5e7eb',
                fontSize: '13px',
                color: '#9ca3af'
              }}>
                <span>{formatDate(post.date)} · {post.author}</span>
                <span style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <Clock size={14} /> {post.readTime} min
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
