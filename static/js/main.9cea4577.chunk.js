(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,r){e.exports=r(23)},18:function(e,t,r){},23:function(e,t,r){"use strict";r.r(t);var n=r(1),o=r.n(n),a=r(11),i=r.n(a),c=r(12),u=r(4),s=r(3),l=o.a.createContext({}),f=function(){var e=Object(n.useContext)(l);return o.a.createElement("div",{className:"p-2 border m-2 space-y-2"},o.a.createElement("p",null,"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"),o.a.createElement("div",{className:"flex flex-wrap space-x-4"},o.a.createElement("div",null,o.a.createElement("p",null,"\u0421\u0435\u0440\u0432\u0435\u0440:"),o.a.createElement("input",{className:"border",type:"text",value:e.setup.server,onChange:function(t){return function(t){e.setSetup(Object(u.a)(Object(u.a)({},e.setup),{},{server:t}));var r=e.db.transaction("setup","readwrite").objectStore("setup"),n=r.get("server");n.onerror=function(e){r.add({id:"server",value:t})},n.onsuccess=function(e){r.put({id:"server",value:t})}}(t.target.value)}})),o.a.createElement("div",null,o.a.createElement("p",null,"\u042d\u043a\u0441\u043f\u0435\u0434\u0438\u0442\u043e\u0440:"),o.a.createElement("input",{className:"border",type:"text",value:e.setup.agent,onChange:function(t){return function(t){e.setSetup(Object(u.a)(Object(u.a)({},e.setup),{},{agent:t}));var r=e.db.transaction("setup","readwrite").objectStore("setup"),n=r.get("agent");n.onerror=function(e){r.add({id:"agent",value:t})},n.onsuccess=function(e){r.put({id:"agent",value:t})}}(t.target.value)}}))))},h=function(e){return o.a.createElement("div",{className:"p-4 flex justify-between items-center bg-blue-800"},o.a.createElement("span",{className:"text-white"},"\u041c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0439 \u0432\u043e\u0434\u044f\u043d\u043e\u0439"),o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 text-white"},o.a.createElement("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"})))},d=r(25);r(18);function v(){v=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(_){u=function(e,t,r){return e[t]=r}}function s(e,t,r,o){var a=t&&t.prototype instanceof h?t:h,i=Object.create(a.prototype),c=new L(o||[]);return n(i,"_invoke",{value:x(e,r,c)}),i}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(_){return{type:"throw",arg:_}}}e.wrap=s;var f={};function h(){}function d(){}function p(){}var m={};u(m,a,function(){return this});var g=Object.getPrototypeOf,y=g&&g(g(N([])));y&&y!==t&&r.call(y,a)&&(m=y);var w=p.prototype=h.prototype=Object.create(m);function b(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var o;n(this,"_invoke",{value:function(n,a){function i(){return new t(function(o,i){!function n(o,a,i,c){var u=l(e[o],e,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then(function(e){n("next",e,i,c)},function(e){n("throw",e,i,c)}):t.resolve(f).then(function(e){s.value=e,i(s)},function(e){return n("throw",e,i,c)})}c(u.arg)}(n,a,o,i)})}return o=o?o.then(i,i):i()}})}function x(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return S()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=j(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function j(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,j(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=l(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,f;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function N(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return d.prototype=p,n(w,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:d,configurable:!0}),d.displayName=u(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,u(e,c,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},b(E.prototype),u(E.prototype,i,function(){return this}),e.AsyncIterator=E,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new E(s(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},b(w),u(w,c,"Generator"),u(w,a,function(){return this}),u(w,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=N,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:N(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}var p=function(){var e=Object(n.useState)({server:"",agent:""}),t=Object(s.a)(e,2),r=t[0],a=t[1],i=Object(n.useState)(""),p=Object(s.a)(i,2),m=p[0],g=p[1],y=Object(n.useState)(),w=Object(s.a)(y,2),b=w[0],E=w[1];return Object(n.useEffect)(function(){var e=indexedDB.open("store",1);e.onsuccess=function(e){E(e.target.result)},e.onupgradeneeded=function(t){e.result.objectStoreNames.contains("setup")||e.result.createObjectStore("setup",{keyPath:"id"}),e.result.objectStoreNames.contains("delivery")||e.result.createObjectStore("delivery",{keyPath:"id"})}},[]),Object(n.useEffect)(function(){if(b)try{b.transaction("setup","readwrite").objectStore("setup").openCursor().onsuccess=function(e){var t=e.target.result;t&&("server"==t.key&&a(function(e){return Object(u.a)(Object(u.a)({},e),{},{server:t.value.value})}),"agent"==t.key&&a(function(e){return Object(u.a)(Object(u.a)({},e),{},{agent:t.value.value})}),t.continue())}}catch(e){}},[b]),Object(n.useEffect)(function(){var e=function(){var e=Object(c.a)(v().mark(function e(){var t;return v().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(d.a)("https://".concat(r.server,".eu.ngrok.io/dev-voda/hs/mobvoda/get_dostavka/").concat(r.agent));case 3:t=e.sent,console.log(t),200==t.status?g({uidd:t.data.UID,delivery:t.data.\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430.map(function(e){return{client_id:e.\u041a\u043b\u0438\u0435\u043d\u0442UID,client:e.\u041a\u043b\u0438\u0435\u043d\u0442,adres_id:e.\u0410\u0434\u0440\u0435\u0441UID,adres:e.\u0410\u0434\u0440\u0435\u0441,cargo:t.data.\u0413\u0440\u0443\u0437.filter(function(t){return t.\u0410\u0434\u0440\u0435\u0441UID===e.\u0410\u0434\u0440\u0435\u0441UID}).map(function(e){return{id:e.\u0422\u043e\u0432\u0430\u0440UID,art:e.\u0422\u043e\u0432\u0430\u0440\u0410\u0440\u0442\u0438\u043a\u0443\u043b,name:e.\u0422\u043e\u0432\u0430\u0440,qt:e.\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e}})}})}):g({}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),g({});case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(){return e.apply(this,arguments)}}();if(r.server&&r.agent)try{e()}catch(t){g({})}else g({})},[r]),o.a.createElement(l.Provider,{value:{setup:r,setSetup:a,delivery:m,setDelivery:g,db:b}},o.a.createElement("div",{className:"min-h-screen max-h-screen"},o.a.createElement(h,null),o.a.createElement("div",{className:"flex-1"},o.a.createElement(f,null),o.a.createElement("ul",{className:"overflow-scroll overflow-x-hidden",Style:"height: calc(100vh - 200px) "},m&&m.delivery&&m.delivery.map(function(e){return o.a.createElement("li",null,o.a.createElement("a",{href:"",className:"flex justify-between items-center border-b-2 space-y-1"},o.a.createElement("div",{className:""},o.a.createElement("p",{className:"text-lg font-bold"},e.adres),o.a.createElement("p",{className:"text-xs"},e.client)),o.a.createElement("div",{className:"p-2 text-sm"},e.cargo.map(function(e){return o.a.createElement("div",null,o.a.createElement("span",null,e.art),o.a.createElement("span",null,"-"),o.a.createElement("span",null,e.qt))}))))})))))},m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var r=e.installing;null!=r&&(r.onstatechange=function(){"installed"===r.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(o.a.createElement(p,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("https://.github.io/csb-ckeh68",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("https://.github.io/csb-ckeh68","/service-worker.js");m?(function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then(function(r){var n=r.headers.get("content-type");404===r.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):g(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")})):g(t,e)})}}()}},[[13,1,2]]]);
//# sourceMappingURL=main.9cea4577.chunk.js.map