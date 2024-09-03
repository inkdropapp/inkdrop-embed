# Embed plugin for Inkdrop

Allows Inkdrop to embed external content into a note.

> [!Note]
> Printing and exporting are not supported since external content is loaded asynchronously.

![](https://github.com/inkdropapp/inkdrop-embed/raw/master/docs/screenshot.png)

## Install

```sh
ipm install embed
```

## Enable embeds in a link

### Title attribute (Recommended)

Add the "!embed" link title attribute, which allows you to have a regular link caption:

```markdown
[Regular link caption](https://x.com/inkdrop_app/status/1724381913576554862 "!embed")
```

This way, you can still have a regular link caption on other Markdown renderers.

### Link caption

Write a link with the "embed" caption like so:

```markdown
[embed](https://twitter.com/inkdrop_app/status/1209029200989941760)
```

### Plain URL

```markdown
https://twitter.com/inkdrop_app/status/1209029200989941760
```

Or, with angle brackets:

```markdown
<https://twitter.com/inkdrop_app/status/1209029200989941760>
```

You can disable this behavior by setting the `autolinks` option to `false` in the plugin settings (See [Settings](#settings)).

## Supported contents

- [Gist](https://gist.github.com/)
- [Twitter](https://twitter.com/)
- [YouTube](https://www.youtube.com/)
- [Vimeo](https://vimeo.com/)

PRs are welcome for supporting other platforms.
See [the existing implementations here](https://github.com/inkdropapp/inkdrop-embed/tree/master/src/providers).
See also [inkdrop embed provider](https://github.com/inkdropapp/inkdrop-embed-provider) if you need a static webpage for loading external scripts inside an iframe.

## Settings

You can change them from the Preferences window:

- **autolinks**: Create embeds from standard URLs

## Limitations

- You can't search embedded content with keywords
- Printing and exporting not supported as they are loaded asynchronously

## Changelog

Check out [the releases page](https://github.com/inkdropapp/inkdrop-embed/releases).
