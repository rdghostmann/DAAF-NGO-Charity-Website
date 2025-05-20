"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { PDFViewer } from "@/components/pdf-viewer"

export function CallToActionWithProfile() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Learn More About Us</h2>
            <p className="mb-8 text-lg text-white/80">
              Discover our mission, vision, and organizational structure in detail.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                className="bg-white text-primary font-semibold hover:bg-primary/90 hover:text-white transition"
                onClick={() => setOpen(true)}
              >
                View Organisational Profile
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl mx-auto w-[95vw] h-[90vh] p-0 overflow-hidden">
          <DialogHeader className="p-4 border-b">
            <DialogTitle>Organisational Profile PDF</DialogTitle>
          </DialogHeader>
          <div className="w-full h-[calc(90vh-4rem)] bg-gray-100">
            <PDFViewer pdfUrl="/DIOCESE-OF-ASABA-AGAPE-FOUNDATION-PROFILE(Updated).pdf" />
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
