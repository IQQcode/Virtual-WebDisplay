# Virtual-WebDisplay

> WebGL和three.js简介

## WebGL three.js是什么

- webgl (全称Web Graphics Library)是一种JavaScript API，用于在不使用插件的情况下在任何兼容的网页浏览器中呈现交互式2D和3D图形。维基百科: https://zh.wikipedia.org/wiki/WebGL 说白了就是可以让你用JS在浏览器里写3D的一套方案.
- Three.js 官网: https://threejs.org/ 是一个跨浏览器的脚本，使用JavaScript函数库或API来在网页浏览器中创建和展示动画的三维计算机图形。Three.js使用WebGL。源代码托管在GitHub。维基百科: https://zh.wikipedia.org/wiki/Three.js 其实就是封装了webgl的一个框架或者说库.
- 其他webgl框架/库
  - babylon.js 比较偏向于游戏,自带物理引擎
  - PlayCanvas 比较偏向于游戏,有一套不错的可视化编辑工具(有点像unity)
  - Cesium 比较纯粹的地图引擎,想做非地图的项目,还是用其他库

## Unity Web Player 比较于 WebGL

### Unity Web Player

**优点**

- 成熟：在开发过程中遇到问题，在论坛或其它地方可以找到答案
- 稳定：bug更少，经过Unity不同版本的迭代更新，web player技术稳定
- 轻量级：打开网页即可进行游戏，不需要安装客户端

**缺点**

- 插件支持：浏览器需要安装插件来支持unity3d游戏
- 停止支持：chrome停止支持NPAPI plugin 包括web player
- 文件限制：出于安全原因，没有本地databases或者其它Streaming Assets

### WebGL

**优点**

- 无插件：firefox及chrome无需插件即可支持
- 新事物：技术在更新迭代，在未来也许webgl会替代web player
- 美好的未来：在移动市场，google及mozilla大力支持webgl

**缺点**

- Audio：音频方面目前仅仅支持mp3
- 不稳定：目前bug和坑比较多，因技术新使用人群较少，这个平台遇到的bug，论坛上比较难找到解答
- 性能：和本地代码相比，webgl在某些方面性能较低下，比如支持多线程的3D物理
- 文件大：打包文件的size比web player更大
- 打包慢：build时等待的时间长，使用新技术il2cpp
