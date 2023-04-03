import * as React from 'react'
import { useRef, useState } from 'react'
const BASE_URL_REGEX = /https:\/\/(www\.|)vimeo.com\//
const EMBED_PROVIDER_URL = 'https://player.vimeo.com/video/'

export function test(url) {
  return url.match(BASE_URL_REGEX)
}

export default function Vimeo(props) {
  const { href } = props
  const contentFrame = useRef()
  const [frameId] = useState('vimeo-' + Math.random())
  const splitUrl = href.split('/')
  const videoId = splitUrl[splitUrl.length - 1]
  const url = `${EMBED_PROVIDER_URL}${videoId}?transparent=0`

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
