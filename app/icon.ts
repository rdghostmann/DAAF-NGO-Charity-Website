import React from 'react'
import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon(): ImageResponse {
  return new ImageResponse(
    // Use JSX with React.createElement, not plain objects
    React.createElement(
      "div",
      {
        style: {
          fontSize: 24,
          background: 'blue',
          width: size.width,
          height: size.height,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '100%',
        }
      },
      "D"
    ),
    {
      width: size.width,
      height: size.height,
    }
  )
}