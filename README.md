# react-native-started
react native 入门练习 - mac 环境

> - [IMOOC - React Native 基础与入门](http://www.imooc.com/video/14287)
> - [Official Getting Started](http://facebook.github.io/react-native/docs/getting-started.html)

## 组件
修改入口文件 `index.ios.js` `index.android.js`
``` javascript
import {
    AppRegistry,
} from 'react-native';
import Setup from './js/Setup'


AppRegistry.registerComponent('sample', () => Setup);
```

三种创建组件的方式
- ES6 - 推荐。eg:[HelloComponent.js](js/HelloComponent.js)
- ES5 eg:[HelloES5.js](js/HelloES5.js)
- 函数式 - 无状态，不能使用 `this`，没有完整生命周期，可以使用 props。eg:[HelloFunc.js](js/HelloFunc.js)
