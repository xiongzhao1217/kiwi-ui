# kiwi-ui

基于VUE的前端快速开发框架

## 简介

kiwi中文译为几维鸟，是一种翅膀退化的鸟类，网上有一个关于kiwi为了实现遨游天空的梦想而坚韧不拔勇往直前的动画短片，项目取名kiwi-ui既是表达对kiwi的敬意也是对其精神的延续，希望在coding的路上不管遇到什么困难，都勇往直前，不断打造更好的快速开发组件。

## 特性

* 基于iview，所有组件特性被完美继承

* 基于iview-admin，相关组件可直接使用

* 对常用组件进行深度封装，提供大量简单易用的api，大大提升开发效率

* 统一权限控制、统一请求api封装、统一错误提示、统一错误日志收集

* 文档简洁清晰，所见即所得，可快速上手

## 文档地址
[kiwi-ui文档1.0](https://xiongzhao1217.github.io/kiwi-ui)

## 快速开始
获取最新的kiwi-ui代码(master分支)
~~~shell
git clone -b master https://github.com/xiongzhao1217/kiwi-ui.git
~~~

然后进入项目目录
~~~shell
cd kiwi-ui
~~~

安装依赖并启动项目
~~~shell
// 配置淘宝镜像(官方镜像国内访问慢)
npm config set registry https://registry.npm.taobao.org
// 安装依赖
npm install
// 启动项目
npm run dev
~~~

生产环境构建
~~~shell
npm run build
~~~

## 许可证
[MIT](http://opensource.org/licenses/MIT)
