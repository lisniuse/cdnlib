# cdnlib

> Insert a cdn library for your static page.

## 特性
- 支持众多主流cdn网站。
- 直接从指定html文件中插入/移除库。
- 可从文件中查看安装了多少cdn个库。
- 可一次性安装/移除多个库。
- 支持在线模糊搜索。
- 支持库版本查看。

## 安装 cdnlib

使用全局安装

```shell
> npm install cdnlib -g
```

## 使用

### 安装一个库

指定版本：

```shell
> cdn install bootstrap.min@4.1.1 -f index.html
```

不指定版本，默认安装最新版本：

```shell
> cdn install bootstrap.min -f index.html
```

不指定``-f``参数，默认插入到``index.html``文件：

```shell
> cdn install bootstrap.min
```

### 移除一个库

```shell
> cdn uninstall bootstrap.min@4.1.1 -f index.html
```

### 切换域

```shell
> cdn use cdnjs.com
```

## 目前支持cdn网站

网址 | 说明
---|---
https://www.bootcdn.cn/ | （国内）Bootstrap 中文网开源项目免费 CDN 加速服务 。
https://cdn.baomitu.com/ | （国内）前端静态资源库，首个支持 HTTP/2 的 CDN 服务，共收录了 3401 个开源项目
http://staticfile.org/ | （国内）开放静态文件 - 为开源库稳定、快速的免费 CDN 服务。
https://www.beecdn.com/ | （国内）BeeCDN是一个专门为前端程序猿提供的开源库CDN加速服务。BeeCDN借助阿里云的OSS存储以及三家互联网巨头（百度云、腾讯云、阿里云）提供的CDN服务，为广大程序猿带来完美的CDN加速体验，让你的服务器减轻负重，让你的网站速度更上一个台阶。
https://cdn.bytedance.com/ | （国内）今日头条静态资源公共库。
http://www.cdnjs.net/ | （国内）前端公共库CDN加速，阿里云CDN加速，永久免费，保护隐私，500+节点毫秒级响应。每日同步cdnjs.com，支持https及请求合并，安全稳定快速
https://cdnjs.com/libraries | （国外）cdnjs.com - The best FOSS CDN for web related libraries to speed up your websites!