import * as React from 'react'
import { useRef, useState } from 'react'
import { isLocal } from '../utils'
const BASE_URL = 'https://gist.github.com/'
const EMBED_PROVIDER_URL = 'https://inkdrop-embed-provider.vercel.app/gist.html'

export function test(url) {
  return url.startsWith(BASE_URL)
}

export default function Gist(props) {
  const { href } = props
  const contentFrame = useRef()
  const [frameId] = useState('gist-' + Math.random())
  const url = `${EMBED_PROVIDER_URL}?url=${encodeURIComponent(
    href
  )}&id=${frameId}&origin=${isLocal ? 0 : 1}`

  return (
    <iframe
      id={frameId}
      className="embed-frame"
      ref={contentFrame}
      src={url}
    ></iframe>
  )
}
