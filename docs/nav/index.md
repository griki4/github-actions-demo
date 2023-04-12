---
layoutClass: m-nav-layout
outline: [2, 3, 4]
---

<script setup>
import MNavLinks from './components/MNavLinks.vue'

import { NAV_DATA } from './data'
</script>
<style src="./index.scss"></style>

# 前端导航

::: tip
该导航模板由 [maomao](https://github.com/maomao1996) 大佬开发 版权声明：<https://github.com/maomao1996/vitepress-fe-nav>
:::

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>

<br />

::: tip
该导航模板由 [maomao](https://github.com/maomao1996) 大佬开发 版权声明：<https://github.com/maomao1996/vitepress-fe-nav>
:::
