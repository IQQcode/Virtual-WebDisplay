[TOC]

> 今天开始了解学习 **Three.js** 时，在Github上学习一个Demo[webpack-typescript-starter](https://github.com/hungtcs-lab/webpack-typescript-starter)，在vs code中配置环境运行项目时，`npm install` 出现了问题，有很多 **npm ERR!**. 
>
> 可能是你懂得网络的问题，使配置文件下下来，总之有好多错误，忘截图记录了...
>
> 经过一天的倒腾，终于成功了！主要是解决了以下三个问题，在此记录一下，希望给有相似问题的小伙伴一个参考。参考的原文的解决方案在文末有链接，我是整合自己成功配置的内容方式。

### 1. 如何使用镜像 npm

> npm全称**Node Package Manager**，是node.js的模块依赖管理工具。由于npm的源在国外，所以国内用户使用起来各种不方便，在使用时故会导致环境配置失败。

解决办法是翻墙或者使用淘宝镜像`cnpm`下载；

下面整理出了一部分国内优秀的`npm`镜像资源，国内用户可以选择使用。

**以阿里`npm`镜像举例：**

在vs code 项目终端 或  cmd 输入：

```javascript
npm --registry https://registry.npm.taobao.org install express
```

```javascript
npm config set registry https://registry.npm.taobao.org
```

配置后可通过下面方式来验证是否成功

```javascript
npm config get registry
```

或者是

```javascript
npm info express
```

*****



安装好 npm 后，在继续安装 cnpm



**cnpm安装配置方法**

同理在vs code 项目终端 或  cmd 输入：

```javascript
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

使用

```javascript
cnpm install express
```



### 2. node-sass安装失败

<font color=red size=4>**nodejs -- node-sass安装失败**</font>

安装 [node-sass](https://github.com/sass/node-sass) 的时候总是会各种不成功，nodejs -- node-sass安装失败的原因是被墙了。

首先要知道的是，安装 `node-sass` 时在 `node scripts/install` 阶段会从 github.com 上下载一个 `.node` 文件，大部分安装不成功的原因都源自这里，因为 github Releases 里的文件都托管在 `s3.amazonaws.com` 上面，而这个网址在国内总是*网络不稳定*，所以我们需要通过第三方服务器下载这个文件。

******



**使用淘宝镜像**

直接运行下面的命令即可：

```javascript
SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass/ npm install node-sass
```

我们可能更希望能直接使用 `npm install` 安装所有依赖，所以我的做法是在项目内添加一个 `.npmrc` 文件：

将下面内容复制到`.npmrc`文件中

```
phantomjs_cdnurl=http://cnpmjs.org/downloads
sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
registry=https://registry.npm.taobao.org
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20191211183844744.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzIzMjk1NQ==,size_16,color_FFFFFF,t_70)



这样使用 `npm install` 安装 `node-sass` 和 `phantomjs` 时都能自动从淘宝源上下载，但是在使用 `npm publish` 的时候要把 `registry` 这一行给注释掉，否则就会发布到淘宝源上去了。



然后设置`sass`路径

```javascript
set SASS_BINARY_PATH=D:/nodejs/.nodes/win32-x64-57_binding.node
```



然后安装node-sass模块

```javascript
npm i node-sass -D --verbose
```

**********



### 3. webpack-dev-server报错

> webpack-dev-server’ 不是内部或外部命令，也不是可运行的程序

<font color=red size=4>**报错信息**</font>

```javascript
'webpack-dev-server' 不是内部或外部命令，也不是可运行的程序或批处理文件。
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! vuedemo3@1.0.0 dev: `webpack-dev-server --inline --progress --config build/webpack.dev.conf.js`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the vuedemo3@1.0.0 dev script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
 
npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\Administrator\AppData\Roaming\npm-cache\_logs\2018-10-20T10_23_54_162Z-debug.log
```



先检查本地电脑的 node版本是否与搭建的项目时一样	

终端输入

```javascript
node -v
```

- 将本地的 `node-modules` 文件删除

- 使用以下命令安装依赖

```javascript
npm i webpack-dev-server -D
```

- 重启vs code

- 再次在该项目下安装依赖

```javascript
npm install 
```

然后再运行 

```javascript
npm start
```



我报错的项目在经过上面的配置修改之后，`npm install`完，`npm run dev` 时又出现了问题。

用`nmp start`启动则成功了！

<img src = "https://img-blog.csdnimg.cn/20191211183722607.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzIzMjk1NQ==,size_16,color_FFFFFF,t_70" width="60%">

******



#### npm run dev 报错

<font color=red size=4>**missing script: dev**</font>

【解决方案】

[npm run dev 报错：missing script:dev](https://blog.csdn.net/dt1991524/article/details/82985570)



> [npm run dev和npm start区别](https://www.jianshu.com/p/f3230c16e75e)
>
> [npm run dev和npm start的区别](https://segmentfault.com/q/1010000015154536/a-1020000015155253)





【参考及相关解决方案】

[cnpm淘宝镜像的安装和使用方法](https://blog.csdn.net/wxl1555/article/details/71172285)

[webpack-dev-server不是内部或外部命令](https://blog.csdn.net/csl125/article/details/83217002)

[安装node-sass的正确姿势](https://blog.csdn.net/weixin_30555753/article/details/98233664)

[node-sass 安装失败 win32-x64-57_binding.node](https://blog.csdn.net/weisong530624687/article/details/78624593)

[npm run dev 报错：missing script:dev](https://blog.csdn.net/dt1991524/article/details/82985570)

