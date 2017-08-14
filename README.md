# react-native-started
react native 入门练习 - mac 环境

> - [IMOOC - React Native 基础与入门](http://www.imooc.com/video/14287)
> - [Official Getting Started](http://facebook.github.io/react-native/docs/getting-started.html)

## 组件
初始化项目
``` bash
react-native init sample
```

修改入口文件 `index.ios.js` `index.android.js`
``` javascript
import {
    AppRegistry,
} from 'react-native';
import Setup from './js/Setup'


AppRegistry.registerComponent('sample', () => Setup);
```
