import * as React from 'react'
import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'
const BASE_URL = 'https://gist.github.com/'

export function test(url) {
  return url.startsWith(BASE_URL)
}

export default function Gist(props) {
  const { href } = props
  const contentFrame = useRef()
  const [frameId] = useState('gist-' + Math.random())

  useEffect(() => {
    const { current: frame } = contentFrame
    if (frame && frame.contentDocument) {
      const html = `
        <html><body onload="window.parent.postMessage({message: 'embed:adjust-iframe-size', id: '${frameId}', height: document.body.scrollHeight});">
        <script type="text/javascript" src="${href}.js"></script>
        <script>
        document.addEventListener('click', function (event) {
          if (event.target.tagName === 'A') {
            event.preventDefault();
            window.parent.postMessage({ message: 'embed:open-external', uri: event.target.href })
          }
        }, false);
        </script>
        </body></html>
      `
      frame.contentDocument.writeln(html)
      frame.contentDocument.close()
    }
  }, [href])
  return (
    <iframe id={frameId} className="embed-frame" ref={contentFrame}></iframe>
  )
}

Gist.prototype.propTypes = {
  href: PropTypes.string
}
