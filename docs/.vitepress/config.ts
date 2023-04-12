import { defineConfig } from 'vitepress'

import { head, nav, sidebar } from './configs'

export default defineConfig({
  base: './',
  outDir: '../dist',

  lang: 'zh-CN',
  title: '提桶跑路',
  description: '一个打灰狗的转行之路',
  head,

  lastUpdated: true,
  cleanUrls: true,

  /* markdown 配置 */
  markdown: {
    lineNumbers: true
  },

  /* 主题配置 */
  themeConfig: {
    i18nRouting: false,

    logo: '/logo.png',

    nav,
    sidebar,
    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '本页目录'
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/maomao1996/vitepress-fe-nav' }],

    footer: {
      message: `<a href=\'http://beian.miit.gov.cn\/\'>渝ICP备2023003035号</a><br>
                本站的模板来自 <a href='https://github.com/maomao1996/vitepress-fe-nav'>maomao大佬</a>`,
      copyright: 'Copyright © 2019-present maomao',
    },

    darkModeSwitchLabel: '外观',
    returnToTopLabel: '返回顶部',
    lastUpdatedText: '上次更新',

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    }
  }
})
