(function(){"use strict";var t={8699:function(t,e,n){var r=n(6369),a=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("NavBar"),e("div",{staticClass:"container"},[e("router-view")],1)],1)},o=[],i=function(){var t=this,e=t._self._c;return e("div",[e("nav",{staticClass:"blue darken-3"},[e("div",{staticClass:"nav-wrapper"},[e("router-link",{attrs:{to:"/",custom:""},scopedSlots:t._u([{key:"default",fn:function({href:n,navigate:r}){return[e("a",{staticClass:"brand-logo",attrs:{href:n},on:{click:r}},[t._v("Tasks")])]}}])}),t._m(0),e("ul",{staticClass:"right hide-on-med-and-down"},t._l(t.menu,(function(n){return e("router-link",{key:n.path,attrs:{to:n.path,custom:""},scopedSlots:t._u([{key:"default",fn:function({href:r,navigate:a,isExactActive:o}){return[e("li",{class:[o&&"active"]},[e("a",{attrs:{href:r},on:{click:a}},[t._v(t._s(n.name))])])]}}],null,!0)})})),1)],1)]),e("ul",{staticClass:"sidenav",attrs:{id:"mobile-demo"}},t._l(t.menu,(function(n){return e("router-link",{key:n.path,attrs:{to:n.path,custom:""},scopedSlots:t._u([{key:"default",fn:function({href:r,navigate:a,isExactActive:o}){return[e("li",{class:[o&&"active"],on:{click:function(e){return t.mobileMenu.close()}}},[e("a",{attrs:{href:r},on:{click:a}},[t._v(t._s(n.name))])])]}}],null,!0)})})),1)])},s=[function(){var t=this,e=t._self._c;return e("a",{staticClass:"sidenav-trigger",attrs:{href:"#","data-target":"mobile-demo"}},[e("i",{staticClass:"material-icons"},[t._v("menu")])])}];const u=[{path:"/",name:"Tasks list",component:()=>n.e(241).then(n.bind(n,2241))},{path:"/create",name:"Create task",component:()=>n.e(897).then(n.bind(n,9897))},{path:"/update/:id",name:"Update task",component:()=>n.e(661).then(n.bind(n,4661))}];var c={name:"navBar",data:()=>({mobileMenu:null}),computed:{menu(){return u.filter((t=>"Update task"!==t.name))}},mounted(){const t=document.querySelectorAll(".sidenav"),e=document.querySelector("#mobile-demo");window.M.Sidenav.init(t),this.mobileMenu=window.M.Sidenav.getInstance(e)},destroyed(){this.mobileMenu&&this.mobileMenu.destroy&&this.mobileMenu.destroy()}},l=c,d=n(1001),f=(0,d.Z)(l,i,s,!1,null,"705fb6aa",null),m=f.exports,p={name:"App",components:{NavBar:m}},v=p,h=(0,d.Z)(v,a,o,!1,null,null,null),k=h.exports,g=n(679),b=n(3822);r.ZP.use(b.ZP);var y=new b.ZP.Store({actions:{createTask({commit:t},e){t("createTask",e)},deleteTask({commit:t},e){t("deleteTask",e)},updateTask({commit:t},e){t("updateTask",e)},completeTask({commit:t},e){t("completeTask",e)}},state:{tasks:JSON.parse(localStorage.getItem("tasks")||"[]").map((t=>(new Date(t.date)<new Date&&"completed"!==t.status&&(t.status="outdated"),t)))},mutations:{createTask(t,e){t.tasks.push(e),localStorage.setItem("tasks",JSON.stringify(t.tasks))},deleteTask(t,e){t.tasks=t.tasks.filter((t=>t.id!==e)),localStorage.setItem("tasks",JSON.stringify(t.tasks))},updateTask(t,e){const n=t.tasks.concat(),r=t.tasks.findIndex((t=>t.id===e.id)),a=new Date(e.date)<new Date?"outdated":"active";n[r]={...e,status:a},t.tasks=n,localStorage.setItem("tasks",JSON.stringify(t.tasks))},completeTask(t,e){t.tasks.find((t=>t.id===e)).status="completed",localStorage.setItem("tasks",JSON.stringify(t.tasks))}},getters:{tasks:t=>t.tasks}}),w=n(2631);r.ZP.use(w.ZP);const S=[...u],_=new w.ZP({mode:"history",base:{NODE_ENV:"production",BASE_URL:""}.BASE_DIR,routes:S});var T=_;n(5778);r.ZP.config.productionTip=!1,r.ZP.use(g.Z),new r.ZP({store:y,router:T,render:t=>t(k)}).$mount("#app")}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={exports:{}};return t[r].call(o.exports,o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,r,a,o){if(!r){var i=1/0;for(l=0;l<t.length;l++){r=t[l][0],a=t[l][1],o=t[l][2];for(var s=!0,u=0;u<r.length;u++)(!1&o||i>=o)&&Object.keys(n.O).every((function(t){return n.O[t](r[u])}))?r.splice(u--,1):(s=!1,o<i&&(i=o));if(s){t.splice(l--,1);var c=a();void 0!==c&&(e=c)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[r,a,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{241:"2f83d478",661:"39412bcc",897:"03c22438"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{241:"b98d8b64",661:"9c79b5c0",897:"aa2cb25a"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="VueToDo:";n.l=function(r,a,o,i){if(t[r])t[r].push(a);else{var s,u;if(void 0!==o)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+o){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+o),s.src=r),t[r]=[a];var f=function(e,n){s.onerror=s.onload=null,clearTimeout(m);var a=t[r];if(delete t[r],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(t){return t(n)})),e)return e(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var t=function(t,e,n,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var o=function(o){if(a.onerror=a.onload=null,"load"===o.type)n();else{var i=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=s,a.parentNode.removeChild(a),r(u)}};return a.onerror=a.onload=o,a.href=e,document.head.appendChild(a),a},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var a=n[r],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===t||o===e))return a}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){a=i[r],o=a.getAttribute("data-href");if(o===t||o===e)return a}},r=function(r){return new Promise((function(a,o){var i=n.miniCssF(r),s=n.p+i;if(e(i,s))return a();t(r,s,a,o)}))},a={143:0};n.f.miniCss=function(t,e){var n={241:1,661:1,897:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=r(t).then((function(){a[t]=0}),(function(e){throw delete a[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,r){var a=n.o(t,e)?t[e]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise((function(n,r){a=t[e]=[n,r]}));r.push(a[2]=o);var i=n.p+n.u(e),s=new Error,u=function(r){if(n.o(t,e)&&(a=t[e],0!==a&&(t[e]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,a[1](s)}};n.l(i,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var a,o,i=r[0],s=r[1],u=r[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(u)var l=u(n)}for(e&&e(r);c<i.length;c++)o=i[c],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(l)},r=self["webpackChunkVueToDo"]=self["webpackChunkVueToDo"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(8699)}));r=n.O(r)})();
//# sourceMappingURL=app.159b31ca.js.map