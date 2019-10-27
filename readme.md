# AnyProgress

元素顶部进度条。

[中文](/readme.md) | [english](/readme-en.md)

<img width="375" src="https://github.com/hiNISAL/any-progress/blob/master/public/preview.gif?raw=true" />

## 安装

``` shell
npm i any-progress -S
```

## 使用

- ES Module

``` js
import AnyProgress from 'any-progress';

const ap = new AnyProgress();

ap.start();

setTimeout(() => {
  ap.done();
}, 2000);
```

- Browser

``` html
<script src="any-progress.js"></script>

<script>
  new AnyProgress().start();  
</script>
```

## Q & A

- 提供了`el`配置项目但是没出现在目标元素的顶部

`检查目标元素的position属性，必须继承或者具有relative、fixed、absolute等定位属性`

## Support

### Vue

> 因为内容比较简单，所以没暴露`install`静态方法作为插件。

在入口文件引入`any-progress`，直接挂到原型上。

``` js
import AnyProgress from 'any-progress';

Vue.prototype.$progress = AnyProgress;
```

如果使用`typescript`，记得要扩充一下类型。

``` ts
declare module 'vue/types/vue' {
  interface Vue {
    // ....
  }
}
```

## 详细

### 构造函数

构造函数接受以下参数

``` js
new AnyProgress({
  // 颜色
  color?: string = 'blue',
  // z轴层级
  zIndex?: number = 100,
  // 阴影
  shadow?: string = 'l2',
  // 高度
  height?: string = '3px',
  // 自定义样式 使用js-style
  style?: { [propName: string]: any } = {},
  // 目标元素
  el?: string = 'body',
});
```

其中`color`与`shadow`可以使用预设值。

- color

``` shell
blue: '#2196f3',
pink: '#e91e63',
purple: '#9c27b0',
red: '#f44336',
teal: '#009688',
green: '#4caf50',
black: '#000000',
white: '#ffffff',
```

``` js
new AnyProgress({
  color: 'pink',
});

// 不传递预选项则直接使用传入的值
new AnyProgress({
  color: '#fafafa',
});
```

- shadow

``` shell
l0: '',
l1: '0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)',
l2: '0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)',
l3: '0 3px 3px -2px rgba(0,0,0,.2), 0 3px 4px 0 rgba(0,0,0,.14), 0 1px 8px 0 rgba(0,0,0,.12)',
l4: '0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12)',
l5: '0 3px 5px -1px rgba(0,0,0,.2), 0 5px 8px 0 rgba(0,0,0,.14), 0 1px 14px 0 rgba(0,0,0,.12)',
```

``` js
new AnyProgress({
  shadow: 'l4',
});

// 不传递预选项则直接使用传入的值
new AnyProgress({
  shadow: '1px 2px 5px rgba(0, 0, 0, .1)',
});
```

### start

进度条开始

``` js
new AnyProgress().start();
```

### done

进度条直接到100%并且淡出

接受一个参数，参数为一个函数，在淡出结束后被调用。

``` js
new AnyProgress().done();

new AnyProgress().done(() => {
  console.log('done');
});
```

### finish

进度条直接到100%，但是依然显示在界面上

``` js
new AnyProgress().done();

setTimeout(() => {
  ap.finish();
}, 1000);
```

### pause

进度条暂停

``` js
new AnyProgress().done();

setTimeout(() => {
  ap.pause();
}, 1000);
```

### fadeOut

淡出进度条

接受一个参数，参数为一个函数，在淡出结束后被调用。

``` js
const ap = new AnyProgress().start();

setTimeout(() => {
  ap.pause();

  setTimeout(() => {
    ap.fadeOut(() => {
      console.log('after fadeout!')
    });
  }, 1000);
}, 2000);
```

### stop

直接取消进度条

``` js
const ap = new AnyProgress().start();

setTimeout(() => {
  ap.stop();
}, 1000);
```

### remove

将元素从DOM树中移除

``` js
const ap = new AnyProgress().start();

setTimeout(() => {
  ap.done(() => {
    ap.remove();
  });
}, 1000);
```
