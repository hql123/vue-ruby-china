# Vue Ruby China

> Ruby China 山寨版 （Vue框架）

## Demo

https://hql123.github.io/

## 项目简介

这个项目还是以Ruby China为范本搭建的模仿平台，Vue.js框架+Bootstrap框架开发，集成vue-cli + vuex + vue-router + vue-resource，大概还会尝试加入服务端渲染的SSR。这个项目我个人觉得挺适合Vuex的初学者尝试的，功能简单逻辑也不复杂，对于actions、 getters、mutations、modules的单向数据流模式应该都使用得挺清晰的。

## 关于项目目录

当初写 React 的 Ruby China 山寨版的时候有人提出了 components 是UI组件，功能主要是可复用，纯粹的渲染组件，尽量不掺杂vuex或redux的使用到这里面，我深以为然！于是在这个项目里面可以看到 components 里面所有的组件都是单纯的渲染可复用组件，在 views 的组件里面定义好 vuex 的 state 通过 props 传过去使用，这是一个好习惯呀！

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## nginx配置

```bash
http {
  include       mime.types;
  default_type  application/octet-stream;
  server {
    listen       9000;
    server_name  ruby-china.local;
    root ../ruby-china/dist/; //项目根目录
    index index.html;
    location ^~ /static/ {
     gzip_static on;
     expires max;
     add_header Cache-Control public;
    }
    location / {
       try_files $uri $uri/ /index.html;
    }
    location /api/v3{
        proxy_pass https://ruby-china.org/api/v3;
        proxy_redirect off;
        proxy_buffering off;
    }
  }
}
```

##Vuex数据流

<p align="center">
  <img width="700px" src="https://raw.githubusercontent.com/vuejs/vuex/dev/docs/en/images/vuex.png">
</p>

## 参考文献

[Vue.js官方GitHub](https://github.com/vuejs)

[Vue.js](https://cn.vuejs.org/)

[Vuex](https://vuex.vuejs.org/zh-cn/)

[vue-router 2](https://router.vuejs.org/zh-cn/)

