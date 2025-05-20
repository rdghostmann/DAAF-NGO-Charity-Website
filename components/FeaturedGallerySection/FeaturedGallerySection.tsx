// Add this section where you want the featured photos to appear, e.g. before the full gallery section

import Link from "next/link"
import Image from "next/image"

const featuredPhotos = [
  {
    src: "/elderly-care-ministry-1-1.png",
    alt: "Elderly Care Ministry",
  },
  {
    src: "/st-barnabas-orphanage-5.png",
    alt: "St. Barnabas Orphanage Home",
  },
  {
    src: "/health-care-services-3.png",
    alt: "Balm of Gilead Hospital",
  },
  {
    src: "/food-security.png",
    alt: "Food Security - Ewulu Integrated Farm",
  },
]

export function FeaturedGallerySection() {
  return (
    <section className="container mx-auto py-10">
      <div className="space-y-4 text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Featured Photos</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A glimpse into our impact and activities. See more in our full gallery!
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mb-8">
        {featuredPhotos.map((photo, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow hover:shadow-lg transition">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={400}
              height={300}
              className="w-full h-56 object-cover"
            />
            <div className="p-2 text-center text-sm font-medium">{photo.alt}</div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link href="/our-gallery">
          <button className="inline-block rounded bg-primary px-6 py-2 text-white font-semibold hover:bg-primary/90 transition">
            View All Photos
          </button>
        </Link>
      </div>
    </section>
  )
}