import Hero from "@/components/Hero";
import BlogPreview from "@/components/BlogPreview";
import QuoteOfTheDay from "@/components/QuoteOfTheDay";
import StatsSection from "@/components/StatsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <BlogPreview />
      <QuoteOfTheDay />
    </>
  );
}
