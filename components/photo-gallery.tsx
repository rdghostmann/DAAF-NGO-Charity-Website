"use client"

import { useState } from "react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import Autoplay from "embla-carousel-autoplay"

// Define the types for our gallery data
interface GalleryImage {
  id: string
  src: string
  alt: string
}

interface SubGallery {
  id: string
  title: string
  description?: string
  images: GalleryImage[]
}

interface PhotoGalleryProps {
  galleries: SubGallery[]
  className?: string
}

export function PhotoGallery({ galleries, className }: PhotoGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image)
    setIsOpen(true)
  }

  return (
    <div className={cn("space-y-12", className)}>
      {galleries.map((gallery) => (
        <div key={gallery.id} className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">{gallery.title}</h2>
            {gallery.description && <p className="text-muted-foreground">{gallery.description}</p>}
          </div>

          <Carousel
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {gallery.images.map((image) => (
                <CarouselItem key={image.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div
                    className="overflow-hidden rounded-lg cursor-pointer transition-all hover:opacity-90 hover:shadow-lg"
                    onClick={() => handleImageClick(image)}
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      width={400}
                      height={300}
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end gap-2 mt-4">
              <CarouselPrevious className="static translate-y-0 mr-2" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
      ))}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl w-[90vw]">
          <DialogHeader>
            <DialogTitle>{selectedImage?.alt}</DialogTitle>
            <DialogDescription>Click outside to close</DialogDescription>
          </DialogHeader>
          {selectedImage && (
            <div className="relative w-full h-[70vh]">
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
