# AnyProgress

元素顶部进度条

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

## 详细

### 构造函数

构造函数接受以下参数

``` js
new AnyProgress({
  // 颜色
  color?: string,
  // z轴层级
  zIndex?: number,
  // 阴影
  shadow?: string,
  // 高度
  height?: string,
  // 自定义样式 使用js-style
  style?: { [propName: string]: any },
  // 目标元素
  el?: string,
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

``` js
new AnyProgress().done();
```

### finish

进度条直接到100%，但是依然保留在界面上

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

``` js
const ap = new AnyProgress().start();

setTimeout(() => {
  ap.pause();

  setTimeout(() => {
    ap.fadeOut();
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
