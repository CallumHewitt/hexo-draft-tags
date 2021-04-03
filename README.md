# hexo-draft-tags

A hexo plugin which adds draft tags to isolate markdown text within a post that should be considered 'draft'.

This text will not be rendered in the production version of your site, but will be rendered when the site is run using:

```shell
hexo server --draft
```

## Usage

To mark draft text, use the 'draft' tag. End the draft section with the 'enddraft' tag.

```md

# Post title

This text should be shown in --draft mode and in production.

{% draft %}

This text should only be shown in --draft mode.

{% enddraft %}

```
