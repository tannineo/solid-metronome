# B-Briefing (CN)

## 目的

- 尝试技术组合
- 折腾个节拍器督促自己练琴
- 水B站视频

## 用到的libs

- SolidJS
  - 咋一看写法很像React, 其实不一样
  - 很轻很快 学习负担小(可能是react过来的原因)
  - 没用重复render 没有virtual DOM
    - https://www.solidjs.com/guides/comparison
- UnoCSS
  - 替代TailwindCSS
  - VSCode插件好用!
  - Attributify
  - 可定制/直接拿preset
    - (极少数情况)不能直接拿已有的Tailwind代码来用
- Astro
  - meta framework (vs NextJS)
    - SSR - Server Side Rendering
    - SSG - Static Site Generation
  - 强大生态 + 多框架支持 (Astro Islands)
- nanostore
  - 跨框架状态管理
  - 小, 够用
  - action vs reducer
    - 组织逻辑代码, 集中在store内
    - 不足...(同context)

## 小坑

### `content-['']` 与 `content-empty`

- [自定义 Toggle 组件](src/components/base/Toggle.tsx)
- see: https://github.com/unocss/unocss/issues/124#issuecomment-981532905

### 组件 props 解构

- see: https://www.solidjs.com/tutorial/props_split
- 类似的不同很多:
  - signal的调用
  - 组件contrusctor, 而非组件renderer (函数式)
  - 提供的控制流程组件: `Show`, `For`, etc...

## 项目在哪里

- 打包至GH Pages
  - 新action 新deploy in beta
  - `astro` docs 对应 `pnpm` v7, 目前是v8

## 给Star 给三连

么么哒~
