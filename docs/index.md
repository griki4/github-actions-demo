---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: 打灰的
  text: 个人网站
  tagline: 
  image:
    src: /logo.png
    alt: 提桶跑路
  actions:
    - text: 前端导航
      link: /nav/
      theme: alt
features:
  - icon: 📖
    title: 前端基础
    details: 整理前端常用知识点<br />万丈高楼平地起
  - icon: 📘
    title: 源码阅读
    details: 了解各种库和框架的实现原理<br />学习其中的小技巧和冷知识
  - icon: 💡
    title: 面经
    details: 面试题目<br />寻找自己学习时遗漏的知识点
  - icon: 🧰
    title: 提效工具
    details: 工欲善其事，必先利其器<br />记录开发和日常使用中所用到的软件、插件、扩展等
  - icon: 🐞
    title: 踩坑记录
    details: 那些年我们踩过的坑<br />水有多深只有趟了才知道
  - icon: 💯
    title: 吾志所向，一往无前。
    details: '<small class="bottom-small">不努力，就会被拉去打灰</small>'
---

<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>
