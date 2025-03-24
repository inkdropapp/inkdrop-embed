import * as React from 'react'
import { useRef, useState } from 'react'
import { isLocal } from '../utils'
const BASE_X_URL = 'https://x.com/'
const BASE_TWITTER_URL = 'https://twitter.com/'
const EMBED_PROVIDER_URL =
  'https://inkdrop-embed-provider.vercel.app/twitter.html'

export function test(url) {
  console.log('test url:', url)
  return url.startsWith(BASE_X_URL) || url.startsWith(BASE_TWITTER_URL)
}

export default function Tweet(props) {
  const { href } = props
  const contentFrame = useRef()
  const [frameId] = useState('twitter-' + Math.random())
  const url = `${EMBED_PROVIDER_URL}?url=${encodeURIComponent(
    href
  )}&id=${frameId}&origin=${isLocal ? 0 : 1}`

  return (
    <iframe
      id={frameId}
      className="embed-frame"
      ref={contentFrame}
      src={url}
      // eslint-disable-next-line
      allowTransparency="true"
    ></iframe>
  )
}
