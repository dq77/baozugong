(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"129":function(e,t,n){"use strict";var o=n(130),r={"text/plain":"Text","text/html":"Url","default":"Text"},i="Copy to clipboard: #{key}, Enter";e.exports=function copy(e,t){var n,a,c,l,s,u,p=!1;t||(t={}),n=t.debug||!1;try{if(c=o(),l=document.createRange(),s=document.getSelection(),(u=document.createElement("span")).textContent=e,u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",function(o){if(o.stopPropagation(),t.format)if(o.preventDefault(),void 0===o.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var i=r[t.format]||r.default;window.clipboardData.setData(i,e)}else o.clipboardData.clearData(),o.clipboardData.setData(t.format,e);t.onCopy&&(o.preventDefault(),t.onCopy(o.clipboardData))}),document.body.appendChild(u),l.selectNodeContents(u),s.addRange(l),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");p=!0}catch(o){n&&console.error("unable to copy using execCommand: ",o),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),p=!0}catch(o){n&&console.error("unable to copy using clipboardData: ",o),n&&console.error("falling back to prompt"),a=function format(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:i),window.prompt(a,e)}}finally{s&&("function"==typeof s.removeRange?s.removeRange(l):s.removeAllRanges()),u&&document.body.removeChild(u),c()}return p}},"130":function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],o=0;o<e.rangeCount;o++)n.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach(function(t){e.addRange(t)}),t&&t.focus()}}},"131":function(e,t,n){},"153":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return f});var o=n(0),r=n(163),i=n(2),a=n(8),c=n(83),l=n(84),s=n(129),u=n.n(s),p=(n(131),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}()),d=function get(e,t,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,n)}if("value"in o)return o.value;var i=o.get;return void 0!==i?i.call(n):void 0};var f=function(e){function InviteUser(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,InviteUser);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(InviteUser.__proto__||Object.getPrototypeOf(InviteUser)).apply(this,arguments));return e.config={"navigationBarTitleText":"邀请好友"},e.savePic=function(){Object(r.a)({"title":"长按图片即可保存","icon":"none"})},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(InviteUser,i["a"].Component),p(InviteUser,[{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentDidShow","value":function componentDidShow(){}},{"key":"copyText","value":function copyText(){u()("加入包租公，躺着赚租金，快来看看！ https://partner.taozugong.com/#/pages/welcomPage/index"),Object(r.a)({"title":"复制成功"})}},{"key":"render","value":function render(){return o.j.createElement(a.a,{"className":"invite-page"},o.j.createElement(a.a,{"className":"block"}),o.j.createElement(a.a,{"className":"titlepic"},o.j.createElement(c.a,{"src":"https://assets.taozugong.com/baozugong/user/invite/invitePic23.png","mode":"widthFix","style":" width: 100%; height: 100%"})),o.j.createElement(a.a,{"className":"btn-area"},o.j.createElement(a.a,null,o.j.createElement(l.a,{"className":"btn link","onClick":this.copyText},"复制链接")),o.j.createElement(a.a,null,o.j.createElement(l.a,{"className":"btn pic","onClick":this.savePic},"保存图片"))))}},{"key":"componentDidHide","value":function componentDidHide(){d(InviteUser.prototype.__proto__||Object.getPrototypeOf(InviteUser.prototype),"componentDidHide",this)&&d(InviteUser.prototype.__proto__||Object.getPrototypeOf(InviteUser.prototype),"componentDidHide",this).call(this)}}]),InviteUser}();f.options={"addGlobalClass":!0}},"77":function(e,t,n){var o=n(78);"string"==typeof o&&(o=[[e.i,o,""]]);var r={"sourceMap":!1,"insertAt":"top","hmr":!0,"transform":void 0,"insertInto":void 0};n(15)(o,r);o.locals&&(e.exports=o.locals)},"78":function(e,t,n){(e.exports=n(14)(!1)).push([e.i,'img[src=""] {\n  opacity: 0;\n}\n\n.taro-img {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  font-size: 0;\n  width: 320px;\n  height: 240px;\n}\n\n.taro-img.taro-img__widthfix {\n  height: 100%;\n}\n\n.taro-img__mode-scaletofill {\n  width: 100%;\n  height: 100%;\n}\n\n.taro-img__mode-aspectfit {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.taro-img__mode-aspectfill {\n  min-width: 100%;\n  height: 100%;\n}\n\n.taro-img__mode-widthfix {\n  width: 100%;\n}\n\n.taro-img__mode-top {\n  width: 100%;\n}\n\n.taro-img__mode-bottom {\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n}\n\n.taro-img__mode-left {\n  height: 100%;\n}\n\n.taro-img__mode-right {\n  position: absolute;\n  height: 100%;\n  right: 0;\n}\n\n.taro-img__mode-topright {\n  position: absolute;\n  right: 0;\n}\n\n.taro-img__mode-bottomleft {\n  position: absolute;\n  bottom: 0;\n}\n\n.taro-img__mode-bottomright {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n}',""])},"81":function(e,t,n){var o=n(82);"string"==typeof o&&(o=[[e.i,o,""]]);var r={"sourceMap":!1,"insertAt":"top","hmr":!0,"transform":void 0,"insertInto":void 0};n(15)(o,r);o.locals&&(e.exports=o.locals)},"82":function(e,t,n){(e.exports=n(14)(!1)).push([e.i,"button {\n  position: relative;\n  display: block;\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 14px;\n  padding-right: 14px;\n  box-sizing: border-box;\n  font-size: 18px;\n  text-align: center;\n  text-decoration: none;\n  line-height: 2.55555556;\n  border-radius: 5px;\n  -webkit-tap-highlight-color: transparent;\n  overflow: hidden;\n  color: #000000;\n  background-color: #F8F8F8;\n}\n\nbutton[plain] {\n  color: #353535;\n  border: 1px solid #353535;\n  background-color: transparent;\n}\n\nbutton[plain][disabled] {\n  color: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  background-color: #F7F7F7;\n}\n\nbutton[type=primary] {\n  color: #FFFFFF;\n  background-color: #1AAD19;\n}\n\nbutton[type=primary][plain] {\n  color: #1aad19;\n  border: 1px solid #1aad19;\n  background-color: transparent;\n}\n\nbutton[type=primary][plain][disabled] {\n  color: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  background-color: #F7F7F7;\n}",""])},"83":function(e,t,n){"use strict";n(6);var o=n(0),r=n(4),i=n.n(r),a=(n(77),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}),c=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var l=function(e){function Image(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Image);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Image.__proto__||Object.getPrototypeOf(Image)).apply(this,arguments));return e.state={"isLoaded":!1},e._handleScroll=e._handleScroll.bind(e),e.handleScroll=e.throttle(e._handleScroll,100),e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Image,o["j"].Component),c(Image,[{"key":"componentDidMount","value":function componentDidMount(){this.props.lazyLoad&&(window.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.handleScroll),this._handleScroll())}},{"key":"componentWillUnMount","value":function componentWillUnMount(){this.props.lazyLoad&&(window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("resize",this.handleScroll))}},{"key":"getClientHeight","value":function getClientHeight(){return document.body.clientHeight&&document.documentElement.clientHeight?Math.min(document.body.clientHeight,document.documentElement.clientHeight):Math.max(document.body.clientHeight,document.documentElement.clientHeight)}},{"key":"getScrollTop","value":function getScrollTop(){return document.documentElement&&document.documentElement.scrollTop?document.documentElement.scrollTop:document.body?document.body.scrollTop:window.scrollY||window.pageYOffset}},{"key":"throttle","value":function throttle(e,t){var n=null;return function(){var o=this,r=arguments;clearTimeout(n),n=setTimeout(function(){e.apply(o,r)},t)}}},{"key":"_handleScroll","value":function _handleScroll(){var e=this,t=this.props.offset,n=void 0===t?0:t,r=this.getNodeTop(),i=r.nodeTop,a=r.nodeBottom,c=this.getScrollTop(),l=c+this.getClientHeight();a+n>=c&&i-n<=l&&(this.setState({"isLoaded":!0},function(){o.j.findDOMNode(e).children[0].src=e.props.src}),window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("resize",this.handleScroll))}},{"key":"getNodeTop","value":function getNodeTop(){var e=this.getScrollTop(),t=o.j.findDOMNode(this),n=t.getBoundingClientRect().top+e;return{"nodeTop":n,"nodeBottom":n+t.offsetHeight}}},{"key":"render","value":function render(){var e=this.props,t=e.className,n=e.src,r=e.style,c=e.mode,l=e.onLoad,s=e.onError,u=e.lazyLoad,p=function _objectWithoutProperties(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(e,["className","src","style","mode","onLoad","onError","lazyLoad"]),d=i()("taro-img",{"taro-img__widthfix":"widthFix"===c},t),f=i()("taro-img__mode-"+(c||"scaleToFill").toLowerCase().replace(/\s/g,"")),m=n;u&&(m=this.state.isLoaded?n:"");return o.j.createElement("div",a({"className":d,"style":r},p),u?o.j.createElement("img",{"className":f,"data-src":m,"onLoad":l,"onError":s}):o.j.createElement("img",{"className":f,"src":m,"onLoad":l,"onError":s}))}}]),Image}();t.a=l},"84":function(e,t,n){"use strict";n(6);var o=n(0),r=n(16),i=n(4),a=n.n(i),c=(n(81),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}),l=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}var s=function(e){function Button(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Button);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Button.__proto__||Object.getPrototypeOf(Button)).apply(this,arguments));return e.state={"hover":!1,"touch":!1},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Button,o["j"].Component),l(Button,[{"key":"render","value":function render(){var e,t=this,n=this.props,i=n.children,l=n.disabled,s=n.className,u=n.style,p=n.onClick,d=n.onTouchStart,f=n.onTouchEnd,m=n.hoverClass,h=void 0===m?"button-hover":m,g=n.hoverStartTime,b=void 0===g?20:g,y=n.hoverStayTime,v=void 0===y?70:y,w=n.size,_=n.plain,E=n.loading,x=void 0!==E&&E,j=n.type,O=void 0===j?"default":j,C=s||a()("weui-btn",(_defineProperty(e={},""+h,this.state.hover&&!l),_defineProperty(e,"weui-btn_plain-"+O,_),_defineProperty(e,"weui-btn_"+O,!_&&O),_defineProperty(e,"weui-btn_mini","mini"===w),_defineProperty(e,"weui-btn_loading",x),_defineProperty(e,"weui-btn_disabled",l),e));return o.j.createElement("button",c({},Object(r.a)(this.props,["hoverClass","onTouchStart","onTouchEnd"]),{"className":C,"style":u,"onClick":p,"disabled":l,"onTouchStart":function _onTouchStart(e){t.setState(function(){return{"touch":!0}}),h&&!l&&setTimeout(function(){t.state.touch&&t.setState(function(){return{"hover":!0}})},b),d&&d(e)},"onTouchEnd":function _onTouchEnd(e){t.setState(function(){return{"touch":!1}}),h&&!l&&setTimeout(function(){t.state.touch||t.setState(function(){return{"hover":!1}})},v),f&&f(e)}}),x&&o.j.createElement("i",{"class":"weui-loading"}),i)}}]),Button}();t.a=s}}]);