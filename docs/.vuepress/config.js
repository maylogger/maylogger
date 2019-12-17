module.exports = {
  locales: {
    '/': {
      lang: 'zh-TW', // 将会被设置为 <html> 的 lang 属性
      title: '美勞哥的美勞作業',
      description: '歡迎光臨美勞哥的遊戲直播心得筆記',
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
    nav: [
      { text: '新手上路', link: '/beginner/' },
      { text: '進階筆記', link: '/advanced/' },
      { text: 'YouTube', link: 'https://www.youtube.com/channel/UCr_3T33ww06v-q7vAmC7_cA' },
      { text: 'FB 粉專', link: 'https://facebook.com/maylogger' },
      { text: 'Twitch 直播', link: 'https://www.twitch.tv/may_logger/' }
    ],
    sidebar: {
      '/beginner/': getBeginnerSidebar('新手上路', 'Tetris 俄羅斯方塊入門', 'Puyo 魔法氣泡入門'),
      '/advanced/': getAdvancedSidebar('Tetris 俄羅斯方塊進階', 'Puyo 魔法氣泡進階')
    }
  }
}

function getBeginnerSidebar (groupA,groupB,groupC) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        ['', '基本介紹'],
        'control',
        'how-to-win',
        'how-to-attack'
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
      ]
    },
    {
      title: groupC,
      collapsable: false,
      children: [
      ]
    }
  ]
}

function getAdvancedSidebar (groupA,groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        'mr-coffee-all-clear-guide'
      ]
    }
  ]
}