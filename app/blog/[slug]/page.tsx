import { getPostBySlug, blogPosts } from "@/lib/posts";
import { formatDate } from "@/lib/utils";
import { ArrowLeft, Clock } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// BUG: params moet await worden in Next.js 14+ App Router
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div style={{
      maxWidth: '700px',
      margin: '0 auto',
      padding: '40px 20px'
    }}>
      <Link href="/blog" style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        color: '#7c3aed',
        textDecoration: 'none',
        fontSize: '14px',
        fontWeight: '500',
        marginBottom: '24px'
      }}>
        <ArrowLeft size={16} /> Terug naar Blog
      </Link>

      <div style={{
        display: 'flex',
        gap: '8px',
        marginBottom: '16px',
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

      <h1 style={{
        fontSize: '36px',
        fontWeight: 'bold',
        lineHeight: '1.2',
        marginBottom: '12px',
        color: '#1a1a1a'
      }}>{post.title}</h1>

      <div style={{
        display: 'flex',
        gap: '16px',
        color: '#9ca3af',
        fontSize: '14px',
        marginBottom: '32px'
      }}>
        <span>Door {post.author}</span>
        <span>{formatDate(post.date)}</span>
        <span style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        }}>
          <Clock size={14} /> {post.readTime} min leestijd
        </span>
      </div>

      <div style={{
        lineHeight: '1.8',
        color: '#374151',
        fontSize: '16px'
      }}>
        <p style={{ marginBottom: '16px' }}>
          Dit is een placeholder voor de volledige blog post content.
          In een echt project zou je hier Markdown of een CMS gebruiken.
        </p>
        <p style={{ marginBottom: '16px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}
