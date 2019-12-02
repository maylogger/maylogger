module.exports = {
  locales: {
    '/': {
      lang: 'zh-TW', // 将会被设置为 <html> 的 lang 属性
      title: '美勞哥的美勞作業',
      description: '美勞哥的遊戲直播心得筆記',
    }
  },
  markdown: {
    config: md => {
      md.use(require('markdown-it-tetris')).use(require('markdown-it-puyo'))
    }
  },
  head: [
    ['link', { rel: 'stylesheet', href: '/app.css' } ],
    ['meta', { name: 'theme-color', content: '#6441A4' }]
  ],
  themeConfig: {
    logo: '/maylogger.jpg',
    nav: [
      { text: '新手上路', link: '/beginner/' },
      { text: 'YouTube', link: 'https://www.youtube.com/channel/UCr_3T33ww06v-q7vAmC7_cA' },
      { text: 'FB 粉專', link: 'https://facebook.com/maylogger' },
      { text: 'Twitch 直播', link: 'https://www.twitch.tv/may_logger/' }
    ],
    sidebar: {
      '/beginner/': getBeginnerSidebar('簡介', 'Tetris 俄羅斯方塊入門', 'Puyo 魔法氣泡入門')
    }
  }
}

function getBeginnerSidebar (groupA,groupB,groupC) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        ''
      ]
    },
    {
      title: groupB,
      collapsable: true,
      children: [
      ]
    },
    {
      title: groupC,
      collapsable: true,
      children: [
        'mr-coffee-all-clear-guide'
      ]
    }
  ]
}