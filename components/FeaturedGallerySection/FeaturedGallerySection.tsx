"use client"
import Link from "next/link"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const featuredPhotos = [
  {
    src: "/elderly-care-ministry-2.png",
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
    src: "/st-barnabas-orphanage-6.png",
    alt: "St. Barnabas Orphanage Home",
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
      <div className="mb-8">
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-2xl mx-auto"
        >
          <CarouselContent>
            {featuredPhotos.map((photo, idx) => (
              <CarouselItem
                key={idx}
                className="basis-1/2 flex flex-col items-center"
              >
                <div className="overflow-hidden rounded-lg shadow hover:shadow-lg transition w-full">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={400}
                    height={300}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-2 text-center text-sm font-medium">{photo.alt}</div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-4">
            {/* <CarouselPrevious /> */}
            {/* <CarouselNext /> */}
          </div>
        </Carousel>
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