!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("AnyProgress",[],e):"object"==typeof exports?exports.AnyProgress=e():t.AnyProgress=e()}(window,function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var o=function(){return(o=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},r={blue:"#2196f3",pink:"#e91e63",purple:"#9c27b0",red:"#f44336",teal:"#009688",green:"#4caf50",black:"#000000",white:"#ffffff"},i={l0:"",l1:"0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)",l2:"0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)",l3:"0 3px 3px -2px rgba(0,0,0,.2), 0 3px 4px 0 rgba(0,0,0,.14), 0 1px 8px 0 rgba(0,0,0,.12)",l4:"0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12)",l5:"0 3px 5px -1px rgba(0,0,0,.2), 0 5px 8px 0 rgba(0,0,0,.14), 0 1px 14px 0 rgba(0,0,0,.12)"},s=function(t){var e,n=o({color:"blue",zIndex:100,shadow:"l2",style:{},height:"2px",el:"document"},t);return n.color=(e=n.color||"blue",r[e]||e),n.shadow=function(t){return i[t]||t}(n.shadow||"l2"),n},p=function(){function t(t){this.options=t,this.el=document.createElement("div"),this.timer=null,this.initOptions(),this.initElement()}return t.prototype.getContainer=function(){return"document"===this.options.el?document.body:document.querySelector(this.options.el)||document.body},t.prototype.initOptions=function(){this.options=s(this.options)},t.prototype.initElement=function(){var t=this.getElement();this.el=t,this.getContainer().appendChild(t)},t.prototype.getElement=function(){var t=this.el,e=t.style;return e.zIndex=String(this.options.zIndex),e.backgroundColor=this.options.color,e.position="absolute",e.top="0",e.left="0",e.height="3px",e.width="0%",e.transition="all .2s linear",e.boxShadow=this.options.shadow,function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t.style[n]=e[n])}(t,this.options.style),t},t.prototype.hideElement=function(){this.el.style.display="none"},t.prototype.setElementWidth=function(t){this.el.style.width=t},t.prototype.progressStart=function(){var t=this;this.timer=setInterval(function(){var e=parseInt(t.el.style.width,10),n=[0,0];e<=20?n=[1,2]:e<=40?n=[.8,1.3]:e<=60?n=[.6,1.2]:e<=80?n=[.4,1.1]:e<=90?n=[.1,0]:e>=97&&t.pause();var o=n[0]+(Math.floor(Math.random()*n[1])+1);o>=97&&(e=0,o=99.5),t.setElementWidth(e+o+"%")},200)},t.prototype.cleanTimer=function(){clearInterval(this.timer),this.timer=null},t.prototype.pause=function(){return this.cleanTimer(),this},t.prototype.stop=function(){return this.cleanTimer(),this.hideElement(),this},t.prototype.start=function(){return this.timer?this:(this.el.style.display="block",this.el.style.opacity="1",this.el.style.width="0",this.progressStart(),this)},t.prototype.finish=function(){return this.pause(),this.el.style.width="100%",this},t.prototype.fadeOut=function(t){var e=this;return void 0===t&&(t=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]}),setTimeout(function(){e.el.style.transition="all .3s ease",e.el.style.opacity="0",setTimeout(function(){e.hideElement(),t(e)},300)},300),this},t.prototype.done=function(){return this.cleanTimer(),this.finish(),this.fadeOut(),this},t}();e.default=p}]).default});