hexo.extend.tag.register('draft', (args, content) => {
    return process.argv.includes('--draft') ? 
        hexo.render.renderSync({ text: content, engine: "markdown" }) :
        hexo.render.renderSync({ text: '', engine: "markdown" })
}, { ends: true });