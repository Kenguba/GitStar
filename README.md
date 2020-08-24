# githubstart

> A Vue.js project

## 构建和安装

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## 目录结构
```
github_client_app
├── android
├── ios
├── fonts                  用于保存Icon文件
├── imgs                   用于保存图
├── jsons                  将Json转成Dart Model类,用于保存Json文件
├── l10n-arb               用于保存各国语言对应的arb文件
├── lib 
│    ├── common            一些工具类，如通用方法类、网络接口类、保存全局变量的静态类等
│    ├── l10n              国际化相关的类都在此目录下
│    ├── models            Json文件对应的Dart Model类会在此目录下
│    ├── states            保存APP中需要跨组件共享的状态类
│    ├── routes            存放所有路由页面类
│    └── widgets           APP内封装的一些Widget组件都在该目录下
└── test
```


For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
