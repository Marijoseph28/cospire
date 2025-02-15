"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, Maximize, ExternalLink } from "lucide-react"

interface ImagePreviewProps {
  src: string
  alt: string
  onClose: () => void
}

export function ImagePreview({ src, alt, onClose }: ImagePreviewProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [scale, setScale] = useState(1)
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  const handleZoom = (event: React.WheelEvent) => {
    event.preventDefault()
    setScale((prevScale) => {
      const newScale = prevScale - event.deltaY * 0.01
      return Math.min(Math.max(1, newScale), 3) // Limit zoom between 1x and 3x
    })
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
    setScale(1) // Reset zoom when toggling fullscreen
  }

  const openInNewTab = () => {
    window.open(src, "_blank")
  }

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        className={`relative transition-transform duration-300 ${
          isVisible ? "scale-100" : "scale-95"
        } ${isFullscreen ? "w-screen h-screen" : "w-[90vw] h-[90vh] max-w-7xl max-h-[90vh]"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-4 right-4 flex space-x-4 z-10">
          <button
            onClick={toggleFullscreen}
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="Toggle fullscreen"
          >
            <Maximize size={24} />
          </button>
          <button
            onClick={openInNewTab}
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="Open in new tab"
          >
            <ExternalLink size={24} />
          </button>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="Close preview"
          >
            <X size={24} />
          </button>
        </div>
        <div className={`overflow-auto w-full h-full`} onWheel={handleZoom}>
          <div className="min-h-full flex items-center justify-center">
            <Image
              src={src || "/placeholder.svg"}
              alt={alt}
              width={1920}
              height={1080}
              className={`object-contain transition-transform duration-200 ease-in-out cursor-zoom-in ${
                isFullscreen ? "max-w-none max-h-none" : "max-w-full max-h-full"
              }`}
              style={{ transform: `scale(${scale})` }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

