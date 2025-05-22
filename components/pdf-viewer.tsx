"use client"

import React, { useState } from "react"
import { PDFViewer as ReactPDFViewer } from "@react-pdf/renderer"

// Import your PDF content document here
import OrganisationalProfilePDF from "./OrganisationalProfile"

export function PDFViewer() {
  
  const [scale, setScale] = useState(1.0)

  function zoomIn() {
    setScale((prev) => Math.min(prev + 0.2, 2.5))
  }

  function zoomOut() {
    setScale((prev) => Math.max(prev - 0.2, 0.5))
  }

  return (
    <div className="flex flex-col h-full border rounded overflow-hidden">
      <div className="flex items-center justify-between p-2 bg-white border-b">
        <div className="flex items-center space-x-2">
          <button
            onClick={zoomOut}
            disabled={scale <= 0.5}
            className="btn btn-outline "
          >
            Zoom Out
          </button>
          <span>{Math.round(scale * 100)}%</span>
          <button
            onClick={zoomIn}
            disabled={scale >= 2.5}
            className="btn btn-outline"
          >
            Zoom In
          </button>
        </div>
      </div>

      <div
        className="flex-1"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          overflow: "auto",
        }}
      >
        <ReactPDFViewer
          style={{ width: "100%", height: "100vh" }}
        >
          <OrganisationalProfilePDF />
        </ReactPDFViewer>
      </div>
    </div>
  )
}
