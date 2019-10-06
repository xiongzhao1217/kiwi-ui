```javascript
// 路由配置
export default [{
  path: 'markdown-example',
  name: 'markdown-example',
  meta: {
    icon: 'ios-radio-button-on',
    title: 'Markdown演示'
  },
  component: () => import('./markdown-example.md')
}
```

