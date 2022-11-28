import * as React from 'react'
import { useRef, useState } from 'react'
const BASE_URL = 'https://www.youtube.com/'
const EMBED_PROVIDER_URL = 'https://www.youtube.com/embed/'

export function test(url) {
  return url.startsWith(BASE_URL)
}

export default function YouTube(props) {
  const { href } = props
  const contentFrame = useRef()
  const [frameId] = useState('youtube-' + Math.random())
  const query = new URLSearchParams(href.split('?')[1])
  const videoId = query.get('v')
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
}
