# miniapp-front

> A Mpvue project

## Build Setup

``` bash
# 初始化项目
vue clone http://git.inspur.com/bss-miniapp/miniapp-front.git
cd miniapp-front

# 安装依赖
npm install

# 开发时构建
npm dev

# 在微信小程序中查看方式
将 dist 下的文件导入微信工具中即可


# 打包构建
npm build


# 生成 bundle 分析报告
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


<!-- 
手机号校验正则： /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
邮箱校验正则： /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/

@郎艳萍 注册那块的校验
 -->
