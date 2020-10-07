module.exports = {
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-154844551-1'
      }
    ]
  ],
  locales: {
    '/': {
      lang: 'zh-TW', // 将会被设置为 <html> 的 lang 属性
      title: '勞首頁',
      description: '歡迎光臨勞哥的直播筆記',
    }
  },
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-tetris')).use(require('markdown-it-puyo'))
    }
  },
  head: [
    ['link', { rel: 'stylesheet', href: '/app.css' } ],
    ['meta', { name: 'theme-color', content: '#6441A4' }]
  ],
  themeConfig: {
    smoothScroll: true,
    nav: [
      { text: '新手上路', link: '/beginner/' },
      { text: '進階筆記', link: '/advanced/' },
      { text: '觀賽指南', link: '/spectators-guide/' },
      { text: '勞地盤 Discord', link: 'https://discord.gg/e5ck7ZF' },
      { text: '勞哥 Twitch', link: 'https://www.twitch.tv/may_logger/' }
    ],
    sidebar: {
      '/beginner/': getBeginnerSidebar('新手上路'),
      '/advanced/': getAdvancedSidebar('Tetris 俄羅斯方塊進階', 'Puyo 魔法氣泡進階'),
      '/spectators-guide/': getGuideSidebar('觀賽指南')
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
        'tetris-attack',
        'puyo-attack'
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
        'tofu-gtr-tail-guide',
        'mr-coffee-all-clear-guide'
      ]
    }
  ]
}

function getGuideSidebar (groupA) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        ['', '基本介紹'],
        'tetrio',
        'puyo'
      ]
    }
  ]
}