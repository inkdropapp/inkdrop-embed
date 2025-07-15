import * as React from 'react'
import { useRef, useState } from 'react'
import { isLocal } from '../utils'
const BASE_URL = 'https://lichess.org/'
const EMBED_PROVIDER_URL = 'https://lichess.org/embed/game/'

/* Example:

<iframe src="https://lichess.org/embed/game/<ID>?theme=auto&bg=auto"
width=600 height=397 frameborder=0></iframe>

*/

export function test(url) {
  return url.startsWith(BASE_URL)
}

export default function Lichess(props) {
  const { href } = props
  const contentFrame = useRef()
  const [frameId] = useState('lichess-' + Math.random())
  const urlObj = new URL(href)
  const lichessId = urlObj.pathname.split('/').pop()
  const url = `${EMBED_PROVIDER_URL}${lichessId}?theme=auto&bg=auto`

  return (
    <iframe
      src={url}
      id={frameId}
      className="embed-frame"
      ref={contentFrame}
      width="600"
      height="397"
      frameborder="0"
    ></iframe>
  )
}
