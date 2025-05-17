import { BlogHero } from "@/components/blog-hero"
import { BlogGrid } from "@/components/blog-grid"
import { FeaturedPosts } from "@/components/featured-posts"
import { NewsletterSignup } from "@/components/newsletter-signup"

export default function BlogPage() {
  return (
    <main>
      <BlogHero />
      <FeaturedPosts />
      <BlogGrid />
      <NewsletterSignup />
    </main>
  )
}
