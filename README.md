# Embed plugin for Inkdrop

Allows Inkdrop to embed external contents to a note.

Note that printing and exporting are not supported since external contents are loaded asynchronously.

![](https://github.com/inkdropapp/inkdrop-embed/raw/master/docs/screenshot.png)

## How to use

Install:

```sh
ipm install embed
```

Write a link with "embed" caption like so:

```markdown
[embed](https://twitter.com/inkdrop_app/status/1209029200989941760)
```

Or just write a URL:

```markdown
https://twitter.com/inkdrop_app/status/1209029200989941760
```

Links with a caption not starting with 'embed' will be rendered as regular link.

## Supported contents

- [Gist](https://gist.github.com/)
- [Twitter](https://twitter.com/)
- [YouTube](https://www.youtube.com/)
- [Vimeo](https://vimeo.com/)

PR will be welcomed for supporting other platforms.
See [the existing implementations here](https://github.com/inkdropapp/inkdrop-embed/tree/master/src/providers).
See also [inkdrop embed provider](https://github.com/inkdropapp/inkdrop-embed-provider) if you need a static webpage for loading external scripts inside an iframe.

## Settings

You can change them from Preferences window:

- **autolinks**: Create embeds from standard URLs

## Limitations

- You can't search embedded contents with keywords
- Printing and exporting not supported as they are loaded asynchronously

## Changelog

Check out [the releases page](https://github.com/inkdropapp/inkdrop-embed/releases).
