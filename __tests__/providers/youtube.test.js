import { extractVideoIdFromURL } from '../../src/providers/youtube'

describe('extractVideoIdFromURL', () => {
  test('extracts video ID from standard YouTube URL', () => {
    const url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    expect(extractVideoIdFromURL(url)).toBe('dQw4w9WgXcQ')
  })

  test('extracts video ID from YouTube URL with additional parameters', () => {
    const url =
      'https://www.youtube.com/watch?v=dQw4w9WgXcQ&feature=youtu.be&t=43s'
    expect(extractVideoIdFromURL(url)).toBe('dQw4w9WgXcQ')
  })

  test('extracts video ID from short YouTube URL', () => {
    const url = 'https://youtu.be/dQw4w9WgXcQ'
    expect(extractVideoIdFromURL(url)).toBe('dQw4w9WgXcQ')
  })

  test('extracts video ID from short YouTube URL with query parameters', () => {
    const url = 'https://youtu.be/dQw4w9WgXcQ?t=43s'
    expect(extractVideoIdFromURL(url)).toBe('dQw4w9WgXcQ')
  })

  test('returns null for non-YouTube URLs', () => {
    expect(extractVideoIdFromURL('https://example.com/video')).toBeNull()
    expect(extractVideoIdFromURL('https://vimeo.com/123456')).toBeNull()
  })

  test('returns null for invalid YouTube URLs without video ID', () => {
    expect(extractVideoIdFromURL('https://www.youtube.com/')).toBeNull()
    expect(
      extractVideoIdFromURL('https://www.youtube.com/playlist?list=123')
    ).toBeNull()
  })

  test('returns null for empty or invalid input', () => {
    expect(extractVideoIdFromURL('')).toBeNull()
    expect(extractVideoIdFromURL('not-a-url')).toBeNull()
  })
})
