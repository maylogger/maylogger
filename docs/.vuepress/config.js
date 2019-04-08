module.exports = {
  base: "/maylogger/",
  locales: {
    '/': {
      lang: 'zh-TW', // 将会被设置为 <html> 的 lang 属性
      title: '美勞哥的美勞作業',
      description: '美勞哥的各種筆記',
    }
  },
  markdown: {
    config: md => {
      md.use(require('markdown-it-tetris')).use(require('markdown-it-puyo'))
    }
  },
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "/app.css"
      }
    ]
  ]
}