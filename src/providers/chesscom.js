import * as React from 'react'
import { useRef, useState } from 'react'
import { isLocal } from '../utils'
const BASE_URL = 'https://chess.com/'
const EMBED_PROVIDER_URL = 'https://chess.com/emboard'

/* Example:

<iframe id="<ID>" allowtransparency="true" frameborder="0" style="width:100%;border:none;" src="https://www.chess.com/emboard?id=<ID>"></iframe>
<script nonce="chesscom-diagram">window.addEventListener("message",e=>{e['data']&&"<ID>"===e['data']['id']&&document.getElementById(`${e['data']['id']}`)&&(document.getElementById(`${e['data']['id']}`).style.height=`${e['data']['frameHeight']+37}px`)});</script>

*/

export function test(url) {
  return url.startsWith(BASE_URL)
}

export default function Chesscom(props) {
  const { href } = props
  const contentFrame = useRef()
  const [frameId] = useState('chesscom-' + Math.random())
  const query = new URLSearchParams(href.split('?')[1])
  const chesscomId = query.get('id')
  const url = `${EMBED_PROVIDER_URL}?id=${chesscomId}`

  return (
    <>
      <iframe
        allowtransparency="true"
        frameborder="0"
        style="width:100%;border:none;"
        id={chesscomId}
        frameId={frameId}
        className="embed-frame"
        ref={contentFrame}
        src={url}
      ></iframe>
      <script nonce="chesscom-diagram">
        window.addEventListener("message", function(e)
        {e['data'] &&
          chesscomId === e['data']['id'] &&
          document.getElementById(`${e['data']['id']}`) &&
          (document.getElementById(`${e['data']['id']}`).style.height =
            `${e['data']['frameHeight'] + 37}px`)}
        );
      </script>
    </>
  )
}
