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
[embed](https://gist.github.com/craftzdog/e33165a344f71890ad10f2265d083e44)
```

Links with a caption not starting with 'embed' will be rendered as regular link.

## Supported contents

- [Gist](https://gist.github.com/)

## Changelog

- 0.1.0
  - Initial release
