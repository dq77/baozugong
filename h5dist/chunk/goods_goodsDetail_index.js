(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"133":function(e,a,t){},"154":function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return u});var l=t(0),n=t(2),c=t(8),m=t(148),s=t(83),r=t(84),o=t(152),i=t(126),j=t(127),E=(t(133),function(){function defineProperties(e,a){for(var t=0;t<a.length;t++){var l=a[t];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(e,a,t){return a&&defineProperties(e.prototype,a),t&&defineProperties(e,t),e}}()),N=function get(e,a,t){null===e&&(e=Function.prototype);var l=Object.getOwnPropertyDescriptor(e,a);if(void 0===l){var n=Object.getPrototypeOf(e);return null===n?void 0:get(n,a,t)}if("value"in l)return l.value;var c=l.get;return void 0!==c?c.call(t):void 0};var u=function(e){function Index(){!function _classCallCheck(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,Index);var e=function _possibleConstructorReturn(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}(this,(Index.__proto__||Object.getPrototypeOf(Index)).apply(this,arguments));return e.config={"navigationBarTitleText":"生意详情"},e.showRisk=function(a){e.setState({"riskModalShow":!0})},e.showPlan=function(){e.setState({"planModalShow":!0})},e.closeModal=function(){e.setState({"riskModalShow":!1,"planModalShow":!1})},e.forward=function(){n.a.navigateTo({"url":"/pages/order/orderConfirm/index?no="+e.$router.params.no})},e.state={"name":"","riskModalShow":!1,"planModalShow":!1},e}return function _inherits(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(Index,n["a"].Component),E(Index,[{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentDidShow","value":function componentDidShow(){}},{"key":"render","value":function render(){var e=this.state,a=e.riskModalShow,t=e.planModalShow;return l.j.createElement(c.a,{"className":"good-detail-page"},l.j.createElement(m.a,{"className":"good-detail-scroll","scrollY":!0,"onScrollToUpper":this.onScrollToUpper,"onScroll":this.onScroll},l.j.createElement(c.a,{"className":"good-income-info"},l.j.createElement(c.a,{"className":"good-id-area"},"资产包编号：2020031808965"),l.j.createElement(c.a,{"className":"income-area"},l.j.createElement(c.a,{"className":"income-item"},l.j.createElement(c.a,{"className":"dtl-num red"},"20%"),l.j.createElement(c.a,{"className":"dtl-info"},"租金收益率")),l.j.createElement(c.a,{"className":"income-item"},l.j.createElement(c.a,{"className":"dtl-num"},"120天"),l.j.createElement(c.a,{"className":"dtl-info"},"出租时长")),l.j.createElement(c.a,{"className":"income-item"},l.j.createElement(c.a,{"className":"dtl-num"},"1800元"),l.j.createElement(c.a,{"className":"dtl-info"},"进货成本")))),l.j.createElement(c.a,{"className":"tzg-tip"},"淘租公提供风险保障"),l.j.createElement(c.a,{"className":"good-detail-card"},l.j.createElement(c.a,{"className":"good-top-info"},l.j.createElement(c.a,{"className":"good-pic-area"},l.j.createElement(s.a,{"src":"https://assets.taozugong.com/baozugong/activity/hellobzg/title1.png","style":" width: 100%; height: 100%"})),l.j.createElement(c.a,{"className":"good-names-area"},l.j.createElement(c.a,{"className":"good-name"},"【租完免换】Yaman/雅萌BLOOM美容仪"))),l.j.createElement(c.a,{"className":"order-info-list"},l.j.createElement(c.a,{"className":"order-item"},l.j.createElement(c.a,null,"寻租人"),l.j.createElement(c.a,null,"张**")),l.j.createElement(c.a,{"className":"order-item"},l.j.createElement(c.a,null,"信用评级"),l.j.createElement(c.a,{"className":"blue"},"极高")),l.j.createElement(c.a,{"className":"order-item"},l.j.createElement(c.a,null,"租赁时长"),l.j.createElement(c.a,null,"120天")),l.j.createElement(c.a,{"className":"order-item"},l.j.createElement(c.a,null,"进货成本"),l.j.createElement(c.a,null,"1800元")),l.j.createElement(c.a,{"className":"order-item"},l.j.createElement(c.a,null,"租金收益"),l.j.createElement(c.a,null,"99元/月")),l.j.createElement(c.a,{"className":"order-item"},l.j.createElement(c.a,null,"资产回购价"),l.j.createElement(c.a,null,"1600元")))),l.j.createElement(c.a,{"className":"saveback-card"},l.j.createElement(c.a,{"className":"item","onClick":this.showRisk},"风控信息"),l.j.createElement(c.a,{"className":"item","onClick":this.showPlan},"回款计划"))),l.j.createElement(c.a,{"className":"good-detail-bottom-area"},l.j.createElement(r.a,{"className":"confirm-btn","onClick":this.forward},"赚租金")),l.j.createElement(o.a,{"isOpened":a,"onClose":this.closeModal},l.j.createElement(i.a,null,"风控信息"),l.j.createElement(j.a,null,l.j.createElement(c.a,{"className":"risk-item"},l.j.createElement(c.a,{"className":"label"},"居住城市："),l.j.createElement(c.a,{"className":"value"},"上海")),l.j.createElement(c.a,{"className":"risk-item"},l.j.createElement(c.a,{"className":"label"},"年龄："),l.j.createElement(c.a,{"className":"value"},"24")),l.j.createElement(c.a,{"className":"risk-item"},l.j.createElement(c.a,{"className":"label"},"同盾分数："),l.j.createElement(c.a,{"className":"value"},"0")),l.j.createElement(c.a,{"className":"risk-item"},l.j.createElement(c.a,{"className":"label"},"前海分数："),l.j.createElement(c.a,{"className":"value"},"35")),l.j.createElement(c.a,{"className":"risk-item"},l.j.createElement(c.a,{"className":"label"},"综合评分："),l.j.createElement(c.a,{"className":"value blue"},"信用极好")))),l.j.createElement(o.a,{"isOpened":t,"onClose":this.closeModal},l.j.createElement(i.a,null,"回款计划"),l.j.createElement(j.a,null,l.j.createElement(c.a,{"className":"plan-item head"},l.j.createElement(c.a,{"className":"info"},"说明"),l.j.createElement(c.a,{"className":"money"},"金额"),l.j.createElement(c.a,{"className":"time"},"时间")),l.j.createElement(c.a,{"className":"plan-item"},l.j.createElement(c.a,{"className":"info"},"租金"),l.j.createElement(c.a,{"className":"money"},"99.0"),l.j.createElement(c.a,{"className":"time"},"2020-03-04")),l.j.createElement(c.a,{"className":"plan-item"},l.j.createElement(c.a,{"className":"info"},"租金"),l.j.createElement(c.a,{"className":"money"},"99.0"),l.j.createElement(c.a,{"className":"time"},"2020-03-04")),l.j.createElement(c.a,{"className":"plan-item"},l.j.createElement(c.a,{"className":"info"},"租金"),l.j.createElement(c.a,{"className":"money"},"99.0"),l.j.createElement(c.a,{"className":"time"},"2020-03-04")),l.j.createElement(c.a,{"className":"plan-item"},l.j.createElement(c.a,{"className":"info"},"租金"),l.j.createElement(c.a,{"className":"money"},"99.0"),l.j.createElement(c.a,{"className":"time"},"2020-03-04")),l.j.createElement(c.a,{"className":"plan-item"},l.j.createElement(c.a,{"className":"info"},"租金"),l.j.createElement(c.a,{"className":"money"},"99.0"),l.j.createElement(c.a,{"className":"time"},"2020-03-04")),l.j.createElement(c.a,{"className":"plan-item"},l.j.createElement(c.a,{"className":"info"},"租金"),l.j.createElement(c.a,{"className":"money"},"99.0"),l.j.createElement(c.a,{"className":"time"},"2020-03-04")),l.j.createElement(c.a,{"className":"plan-item"},l.j.createElement(c.a,{"className":"info"},"租金"),l.j.createElement(c.a,{"className":"money"},"99.0"),l.j.createElement(c.a,{"className":"time"},"2020-03-04")),l.j.createElement(c.a,{"className":"plan-item"},l.j.createElement(c.a,{"className":"info"},"租金"),l.j.createElement(c.a,{"className":"money"},"99.0"),l.j.createElement(c.a,{"className":"time"},"2020-03-04")),l.j.createElement(c.a,{"className":"plan-item"},l.j.createElement(c.a,{"className":"info"},"租金"),l.j.createElement(c.a,{"className":"money"},"99.0"),l.j.createElement(c.a,{"className":"time"},"2020-03-04")),l.j.createElement(c.a,{"className":"plan-item"},l.j.createElement(c.a,{"className":"info"},"租金"),l.j.createElement(c.a,{"className":"money"},"99.0"),l.j.createElement(c.a,{"className":"time"},"2020-03-04")),l.j.createElement(c.a,{"className":"plan-item"},l.j.createElement(c.a,{"className":"info"},"租金"),l.j.createElement(c.a,{"className":"money"},"99.0"),l.j.createElement(c.a,{"className":"time"},"2020-03-04")),l.j.createElement(c.a,{"className":"plan-item"},l.j.createElement(c.a,{"className":"info"},"租金"),l.j.createElement(c.a,{"className":"money"},"99.0"),l.j.createElement(c.a,{"className":"time"},"2020-03-04")))))}},{"key":"componentDidHide","value":function componentDidHide(){N(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidHide",this)&&N(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidHide",this).call(this)}}]),Index}()}}]);