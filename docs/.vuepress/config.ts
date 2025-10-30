import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'ja-JP',

  title: 'TACOKUMO',
  description: 'tacokumoの世界へようこそ',

  theme: defaultTheme({
    logo: 'images/tacokumo.png',

    navbar: ['/', '/user-guide/', '/operator-guide/', '/developer-guide/', '/disclaimer/'],
  }),

  bundler: viteBundler(),
})
