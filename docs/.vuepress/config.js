module.exports = {
  locales: {
    '/': {
      lang: 'zh-TW', // 将会被设置为 <html> 的 lang 属性
      title: '美勞哥的美勞作業',
      description: '美勞哥的直播心得筆記',
    }
  },
  markdown: {
    config: md => {
      md.use(require('markdown-it-tetris')).use(require('markdown-it-puyo'))
    }
  },
  head: [
    [ "link", { rel: "stylesheet", href: "/app.css" } ],
    ['meta', { name: 'theme-color', content: '#6441A4' }]
  ],
  themeConfig: {
    logo: '/maylogger.jpg',
    nav: [
      { text: 'Tetris', link: '/tetris/' },
      { text: 'Puyo', link: '/puyo/' },
      { text: 'Facebook', link: 'https://facebook.com/maylogger' },
      { text: 'YouTube', link: 'https://www.youtube.com/channel/UCr_3T33ww06v-q7vAmC7_cA' },
      { text: 'Twitch', link: 'https://www.twitch.tv/may_logger/' },
    ],
    sidebar: {
      '/puyo/': genSidebarConfig('氣泡筆記')
    }
  }
}

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'mr-coffee-all-clear-guide'
      ]
    }
  ]
}