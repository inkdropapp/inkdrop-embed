import * as React from 'react'
import { useRef, useState } from 'react'
const BASE_URLS = ['https://www.youtube.com/', 'https://youtu.be/']
const EMBED_PROVIDER_URL = 'https://www.youtube.com/embed/'

export function test(url) {
  return BASE_URLS.some(baseUrl => url.startsWith(baseUrl))
}

export function extractVideoIdFromURL(url) {
  if (url.startsWith('https://www.youtube.com/')) {
    const query = new URLSearchParams(url.split('?')[1])
    return query.get('v')
  } else if (url.startsWith('https://youtu.be/')) {
    const parts = url.split('/')
    const lastPart = parts[parts.length - 1]
    return lastPart.split('?')[0]
  }
  return null
}

export default function YouTube(props) {
  const { href } = props
  const contentFrame = useRef()
  const [frameId] = useState('youtube-' + Math.random())
  const videoId = extractVideoIdFromURL(href)

  if (videoId) {
    const url = `${EMBED_PROVIDER_URL}${videoId}`

    return (
      <iframe
        id={frameId}
        className="embed-frame"
        ref={contentFrame}
        height="344"
        src={url}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    )
  } else {
    return (
      <div className="embed-error">
        <p>Invalid YouTube URL. Cannot extract a video ID.</p>
      </div>
    )
  }
}
