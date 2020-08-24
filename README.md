
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
├── build
├── config                
├── test                   单元测试
├── jsons                  将Json转成Dart Model类,用于保存Json文件
├── l10n-arb               用于保存各国语言对应的arb文件
├── src                    开发入口
│    ├── assets            通用资源
│    ├── components        分块组件    
│    ├── layouts           布局
│    ├── router            路由
│    ├── styles            css、less、sass样式代码
     ├── App.vue           vue入口模块代码
│    └── main.js           vue入口代码           
└── test
```


For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
