(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"115":function(e,t,n){},"117":function(e,t,n){},"166":function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(2),a=n(8),i=n(83),s=n(85),c=n(101),l=(n(115),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}());var u=function(e){function MySwiper(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,MySwiper);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(MySwiper.__proto__||Object.getPrototypeOf(MySwiper)).apply(this,arguments));return e.bannerClick=function(e){console.log(e)},e.forward=function(){o.a.navigateTo({"url":e.props.option.to})},e.state={"banner":[]},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(MySwiper,o["a"].Component),l(MySwiper,[{"key":"render","value":function render(){var e=this.props.option;return r.j.createElement(a.a,{"className":"list-item-one","onClick":this.forward},r.j.createElement(a.a,{"className":"item-name"},e.name),r.j.createElement(a.a,{"className":"item-right"},e.right&&r.j.createElement(c.a,{"className":"right-info"},e.right),r.j.createElement(s.a,{"prefixClass":"iconfont bzg","value":"right1","size":"14"})))}}]),MySwiper}();u.options={"addGlobalClass":!0};n(117);n.d(t,"default",function(){return m});var p=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),f=function get(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,n)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(n):void 0};var m=function(e){function Index(){!function user_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);var e=function user_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Index.__proto__||Object.getPrototypeOf(Index)).apply(this,arguments));return e.config={"navigationBarTitleText":"我的"},e.state={"menuList":[{"name":"我的余额","right":"188.5","to":"/pages/user/balance/index"},{"name":"邀请好友","to":"/pages/user/inviteUser/index"},{"name":"帮助中心","to":"/pages/activity/betaRegister/hello"},{"name":"退出登录","to":"/pages/activity/betaRegister/hello"}]},e}return function user_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,o["a"].Component),p(Index,[{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentDidShow","value":function componentDidShow(){}},{"key":"toRegister","value":function toRegister(){o.a.navigateTo({"url":"/pages/activity/betaRegister/hello"})}},{"key":"handleClick","value":function handleClick(e){this.setState({"menuList":e})}},{"key":"render","value":function render(){var e=this.state.menuList;return r.j.createElement(a.a,{"className":"user-page"},r.j.createElement(a.a,{"className":"top-area"},r.j.createElement(a.a,{"className":"title-area"},r.j.createElement(a.a,{"className":"top-one"}),r.j.createElement(a.a,{"className":"top-one usertitle"},"我的"),r.j.createElement(a.a,{"className":"top-one"})),r.j.createElement(a.a,{"className":"user-area"},r.j.createElement(a.a,{"className":"user-info"},r.j.createElement(a.a,{"className":"user-pic"},r.j.createElement(i.a,{"src":"https://assets.taozugong.com/baozugong/activity/hellobzg/title1.png","style":"width: 100%; height: 100%"})),r.j.createElement(a.a,{"className":"user-cnt"},r.j.createElement(a.a,{"className":"user-name"},"bu鲁bu因"),r.j.createElement(a.a,{"className":"user-mobile"},"17502872222"))),r.j.createElement(a.a,{"className":"set-area"},r.j.createElement(a.a,{"className":"setting-btn"},r.j.createElement(s.a,{"prefixClass":"iconfont bzg","value":"mzicon-setting","size":"22"})),r.j.createElement(a.a,{"className":"setting-btn"},r.j.createElement(s.a,{"prefixClass":"iconfont bzg","value":"kefu","size":"22"}))))),r.j.createElement(a.a,{"className":"menu-list"},e.map(function(e){return r.j.createElement(u,{"option":e})})))}},{"key":"componentDidHide","value":function componentDidHide(){f(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidHide",this)&&f(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidHide",this).call(this)}}]),Index}();m.options={"addGlobalClass":!0}}}]);