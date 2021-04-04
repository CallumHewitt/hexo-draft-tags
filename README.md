# hexo-draft-tags

A hexo plugin which adds draft tags to isolate markdown text within a post that should be considered 'draft'.

This text will not be rendered in the production version of your site, but will be rendered when the site is run using:

```shell
hexo server --draft
```

## Installation

Installation of the plugin is best managed via [npm](https://www.npmjs.com/package/hexo-draft-tags). Run the following to install the plugin:

```shell
npm i hexo-draft-tags
```

The latest release can also be found [here](https://github.com/CallumHewitt/hexo-draft-tags/releases).

## Usage

To mark draft text, use the 'draft' tag. End the draft section with the 'enddraft' tag.

```markdown

# Post title

This text should be shown in --draft mode and in production.

{% draft %}

This text should only be shown in --draft mode.

{% enddraft %}

```
