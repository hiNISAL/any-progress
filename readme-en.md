# AnyProgress

The progress bar at `HTML Element` top.

[中文](/readme.md) | [english](/readme-en.md)

<img width="375" src="https://github.com/hiNISAL/any-progress/blob/master/public/preview.gif?raw=true" />

## Install

``` shell
npm i any-progress -S
```

## Usage

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

- The el configuration item is provided, but not available.

`Check the CSS properties of the element. Position need relative、absolute or fixed.`

## 其他支持

### Vue

import `any-progress` at the entrance, then mount on the prototype.

``` js
import AnyProgress from 'any-progress';

Vue.prototype.$progress = AnyProgress;
```

If use typescrit, remember to extension the type.

``` ts
declare module 'vue/types/vue' {
  interface Vue {
    // ....
  }
}
```

## Details

### Constructor

arguments

``` js
new AnyProgress({
  // bar color
  color?: string = 'blue',
  // z-index
  zIndex?: number = 100,
  // shadow
  shadow?: string = 'l2',
  // height
  height?: string = '3px',
  // custom css, use js-style
  style?: { [propName: string]: any } = {},
  // target element
  el?: string = 'body',
});
```

`color` and `shadow` have default values can be used.

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

new AnyProgress({
  shadow: '1px 2px 5px rgba(0, 0, 0, .1)',
});
```

### start

The progress bar starts moving

``` js
new AnyProgress().start();
```

### done

The progress bar goes to 100% and fades out

``` js
new AnyProgress().done();

new AnyProgress().done(() => {
  console.log('done');
});
```

### finish

The progress bar goes to 100%, but it still shows up

``` js
new AnyProgress().done();

setTimeout(() => {
  ap.finish();
}, 1000);
```

### pause

``` js
new AnyProgress().done();

setTimeout(() => {
  ap.pause();
}, 1000);
```

### fadeOut

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

``` js
const ap = new AnyProgress().start();

setTimeout(() => {
  ap.stop();
}, 1000);
```

### remove

remove from DOM

``` js
const ap = new AnyProgress().start();

setTimeout(() => {
  ap.done(() => {
    ap.remove();
  });
}, 1000);
```
