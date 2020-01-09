(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(n,t,e){n.exports=e(73)},73:function(n,t,e){"use strict";e.r(t);var r=e(0),o=e.n(r),a=e(27),i=e.n(a),c=e(10),s=e(5),u=e(6),l={SET_THEME:"".concat("@hnClone/app","/SET_THEME")},h=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{theme:"dark"},t=arguments.length>1?arguments[1]:void 0,e=t.type,r=t.payload;switch(e){case l.SET_THEME:return Object(u.a)({},n,r);default:return n}},d=e(17),f=e(8),p=e(9),g=e(30),S=e.n(g),m=Object({NODE_ENV:"production",PUBLIC_URL:"/hacker_news_clone"}).URL||"http://localhost:3000/",E=2e4,b={"Content-Type":"application/json",Accept:"application/json"},v=new(function(){function n(t){var e=t.baseURL,r=void 0===e?m:e,o=t.timeout,a=void 0===o?E:o,i=t.headers,c=void 0===i?b:i,s=t.auth;Object(f.a)(this,n);var u=S.a.create({baseURL:r,timeout:a,headers:c,auth:s});u.interceptors.response.use(this.handleSuccess,this.handleError),this.client=u}return Object(p.a)(n,[{key:"handleSuccess",value:function(n){return n}},{key:"handleError",value:function(n){return Promise.reject(n)}},{key:"get",value:function(n){return this.client.get(n).then(function(n){return n.data})}},{key:"post",value:function(n,t){return this.client.post(n,t).then(function(n){return n.data})}},{key:"put",value:function(n,t){return this.client.put(n,t).then(function(n){return n.data})}},{key:"patch",value:function(n,t){return this.client.patch(n,t).then(function(n){return n.data})}},{key:"delete",value:function(n){return this.client.delete(n).then(function(n){return n.data})}}]),n}())({baseURL:"https://hacker-news.firebaseio.com/v0"}),y={};y.getTopStoryIds=function(){return v.get("/topstories".concat(".json?print=pretty"))},y.getStory=function(n){return v.get("/item/".concat(n).concat(".json?print=pretty"))},y.getStoriesByPage=function(n,t){var e=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{begin:t*n,end:(t+1)*n}}(20,t),r=function(n){var t=n.begin,e=n.end;return n.items.slice(t,e)}({begin:e.begin,end:e.end,items:n}).map(function(n){return y.getStory(n)});return Promise.all(r)};var _=y,T="@hnReader/story",w={FETCH_STORY_IDS_REQUEST:"".concat(T,"/FETCH_STORY_IDS_REQUEST"),FETCH_STORY_IDS_SUCCESS:"".concat(T,"/FETCH_STORY_IDS_SUCCESS"),FETCH_STORY_IDS_FAILURE:"".concat(T,"/FETCH_STORY_IDS_FAILURE"),FETCH_STORIES_REQUEST:"".concat(T,"/FETCH_STORIES_REQUEST"),FETCH_STORIES_SUCCESS:"".concat(T,"/FETCH_STORIES_SUCCESS"),FETCH_STORIES_FAILURE:"".concat(T,"/FETCH_STORIES_FAILURE")},O=function(n,t){return{type:n,payload:t}},I={fetchStoryIds:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return t(O(w.FETCH_STORY_IDS_REQUEST,n)),_.getTopStoryIds().then(function(n){return t(O(w.FETCH_STORY_IDS_SUCCESS,{storyIds:n})),t(I.fetchStories({storyIds:n,page:0})),n}).catch(function(n){return t(O(w.FETCH_STORY_IDS_FAILURE,n))})}},fetchStories:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){var e=n.storyIds,r=n.page;return t(O(w.FETCH_STORIES_REQUEST,n)),_.getStoriesByPage(e,r).then(function(n){return t(O(w.FETCH_STORIES_SUCCESS,{stories:n}))}).catch(function(n){return t(O(w.FETCH_STORIES_FAILURE,n))})}}},C=I,R=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{storyIds:[],stories:[],page:0,isFetching:!1,error:""},t=arguments.length>1?arguments[1]:void 0,e=t.type,r=t.payload;switch(e){case w.FETCH_STORY_IDS_REQUEST:case w.FETCH_STORIES_REQUEST:return Object(u.a)({},n,{isFetching:!0});case w.FETCH_STORY_IDS_SUCCESS:return Object(u.a)({},n,r);case w.FETCH_STORIES_SUCCESS:return Object(u.a)({},n,{stories:[].concat(Object(d.a)(n.stories),Object(d.a)(r.stories)),page:n.page+1,isFetching:!1});default:return n}},x=Object(s.c)({app:h,story:R}),j=e(31),k=(e(32),[]);k.push(j.a);var F=Object(s.d)(s.a.apply(void 0,k)),U=function(n){return Object(s.e)(x,n,F)},H=e(33),A=Object(H.a)(function(n){return n.story.storyIds},function(n){return n.story.stories},function(n,t){return n.length>t.length}),L=e(40),D=e(34),Y=e(41),P=e(2),N=e(37),Q=e.n(N),M=e(38),W=e.n(M),z=e(39),B=e.n(z),J=function(n){var t="";return n&&(n.includes("//")||(n="http://".concat(n)),t=B.a.parse(n).hostname),t.includes("www.")&&(t=t.split("www.")[1]),t},V="https://news.ycombinator.com",$="".concat(V,"/item?id="),q="".concat(V,"/user?id="),G=function(n){var t=n.url,e=n.id,r="".concat($).concat(e);return t||r},K=e(3);function X(){var n=Object(K.a)(["\n  color: ",";\n  &:visited {\n    color: ",";\n  }\n"]);return X=function(){return n},n}function Z(){var n=Object(K.a)(["\n  font-size: 14px;\n  color: ",";\n"]);return Z=function(){return n},n}function nn(){var n=Object(K.a)(["\n  color: ",";\n  display: flex;\n  width: 100%;\n  height: 100%;\n  flex-direction: row;\n  align-items: center;\n  text-decoration: none;\n"]);return nn=function(){return n},n}function tn(){var n=Object(K.a)(["\n  color: ",";\n  font-size: 12px;\n"]);return tn=function(){return n},n}function en(){var n=Object(K.a)(["\n  color: ",";\n  margin-top: 0;\n  margin-bottom: 6px;\n  font-weight: 400;\n  font-size: 16px;\n  letter-spacing: 0.4px;\n"]);return en=function(){return n},n}function rn(){var n=Object(K.a)(["\n  border-bottom: 1px solid ",";\n  padding: 14px 24px;\n  &:last-child {\n    border-bottom: none;\n  }\n"]);return rn=function(){return n},n}var on=P.b.li(rn(),function(n){return n.theme.border}),an=P.b.h3(en(),function(n){return n.theme.text}),cn=P.b.span(tn(),function(n){return n.theme.textSecondary}),sn=P.b.a(nn(),function(n){return n.theme.text}),un=P.b.div(Z(),function(n){return n.theme.textSecondary}),ln=P.b.a(X(),function(n){return n.theme.textSecondary},function(n){return n.theme.textSecondary}),hn="nofollow noreferrer noopener",dn=function(n){var t=n.by,e=n.kids,r=void 0===e?[]:e,a=n.score,i=n.url,c=n.title,s=n.id,u=(n.type,n.time),l=J(i)||"news.ycombinator.com",h=G({url:i,id:s}),d="".concat($).concat(s),f="".concat(q).concat(t);return o.a.createElement(on,null,o.a.createElement(sn,{href:h,rel:hn,target:"_blank"},o.a.createElement(an,null,c," ",o.a.createElement(cn,null,"(",l,")"))),o.a.createElement(un,null,a," points by"," ",o.a.createElement(ln,{href:f,rel:hn,target:"_blank"},t)," [ ",W()(1e3*u).fromNow()," "," ] ",o.a.createElement(ln,{href:d,rel:hn,target:"_blank"},r.length," Comments")))};function fn(){var n=Object(K.a)(["\n  background-color: ",";\n  border-radius: 4px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n"]);return fn=function(){return n},n}var pn=P.b.ul(fn(),function(n){return n.theme.backgroundSecondary}),gn=function(n){var t=n.stories;return o.a.createElement(pn,null,t.map(function(n){return o.a.createElement(dn,Object.assign({},n,{key:n.id}))}))};function Sn(){var n=Object(K.a)(["\n  text-align: center;\n  span {\n    color: ",";\n    display: inline-block;\n    margin-left: 4px;\n    margin-right: 4px;\n    font-size: 80px;\n    line-height: 0.1;\n    /**\n    * Use the blink animation, which is defined above\n    */\n    animation-name: ",";\n    /**\n    * The total time of animation\n    */\n    animation-duration: 1s;\n    /**\n    * It will repeat itself forever\n    */\n    animation-iteration-count: infinite;\n    /**\n    * This makes sure that the starting style (opacity: .2)\n    * of the animation is applied before the animation starts.\n    * Otherwise we would see a short flash or would have\n    * to set the default styling of the dots to the same\n    * as the animation. Same applies for the ending styles.\n    */\n    animation-fill-mode: both;\n  }\n  span:nth-child(2) {\n    animation-delay: 0.2s;\n  }\n  span:nth-child(3) {\n    animation-delay: 0.4s;\n  }\n"]);return Sn=function(){return n},n}function mn(){var n=Object(K.a)(["\n  /**\n  * At the start of the animation the dot\n  * has an opacity of .2\n  */\n  0% {\n    opacity: .2;\n  }\n  /**\n  * At 20% the dot is fully visible and\n  * then fades out slowly\n  */\n  20% {\n    opacity: 1;\n  }\n  /**\n  * Until it reaches an opacity of .2 and\n  * the animation can start again\n  */\n  100% {\n    opacity: .2;\n  }\n"]);return mn=function(){return n},n}var En=Object(P.d)(mn()),bn=P.b.div(Sn(),function(n){return n.theme.textSecondary},En),vn=function(){return o.a.createElement(bn,null,o.a.createElement("span",null,"."),o.a.createElement("span",null,"."),o.a.createElement("span",null,"."))},yn={background:"#272727",backgroundSecondary:"#393C3E",text:"#bfbebe",textSecondary:"#848886",border:"#272727"};function _n(){var n=Object(K.a)(["\n  color: ",";\n  font-size: 20px;\n  font-weight: 300;\n  margin-top: 24px;\n  margin-bottom: 26px;\n"]);return _n=function(){return n},n}function Tn(){var n=Object(K.a)(["\n  width: 85%;\n  margin-left: auto;\n  margin-right: auto;\n  height: 100%;\n  overflow: hidden; \n  padding-bottom: 200px;\n  "," {\n    width: 96%;\n  }\n"]);return Tn=function(){return n},n}var wn=P.b.div(Tn(),"@media only screen and  (max-width: 768px)"),On=P.b.h1(_n(),function(n){return n.theme.textSecondary}),In=function(n){function t(){var n,e;Object(f.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=Object(L.a)(this,(n=Object(D.a)(t)).call.apply(n,[this].concat(o)))).fetchStories=function(){var n=e.props,t=n.storyIds,r=n.page,o=n.fetchStories;n.isFetching||o({storyIds:t,page:r})},e}return Object(Y.a)(t,n),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchStoriesFirstPage()}},{key:"render",value:function(){var n=this.props,t=n.stories,e=n.hasMoreStores;return o.a.createElement(P.a,{theme:yn},o.a.createElement("div",null,o.a.createElement(wn,null,o.a.createElement(On,null,"Hacker News Reader"),o.a.createElement(Q.a,{dataLength:t.length,next:this.fetchStories,hasMore:e,loader:o.a.createElement(vn,null),style:{height:"100%",overflow:"visible"}},o.a.createElement(gn,{stories:t})))))}}]),t}(r.Component),Cn=Object(c.b)(function(n){return{theme:n.app.theme,stories:n.story.stories,page:n.story.page,storyIds:n.story.storyIds,isFetching:n.story.isFetching,hasMoreStores:A(n)}},function(n){return{fetchStoriesFirstPage:function(){return n(C.fetchStoryIds())},fetchStories:function(t){var e=t.storyIds,r=t.page;return n(C.fetchStories({storyIds:e,page:r}))}}})(In);function Rn(){var n=Object(K.a)(["\n    * {\n      box-sizing: border-box;\n    }\n    html, body {\n      font-family: Lato,Helvetica-Neue,Helvetica,Arial,sans-serif;\n      width: 100vw;\n      overflow-x: hidden;\n      margin: 0;\n      padding: 0;\n      min-height: 100vh;\n      background-color: ",";\n    }\n    ul {\n      list-style: none;\n      padding: 0;\n    }\n    a {\n      text-decoration: none;\n      &:visited {\n        color: inherit;\n      }\n    }\n  "]);return Rn=function(){return n},n}var xn=function(){return Object(P.c)(Rn(),yn.background)},jn=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function kn(n,t){navigator.serviceWorker.register(n).then(function(n){n.onupdatefound=function(){var e=n.installing;null!=e&&(e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(n)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(n)))})}}).catch(function(n){console.error("Error during service worker registration:",n)})}xn(),_.getTopStoryIds().then(function(n){return console.log(n)});!function(){var n=U({});n.dispatch({type:"@hnClone/@@INIT"}),i.a.render(o.a.createElement(c.a,{store:n},o.a.createElement(Cn,null)),document.getElementById("root"))}(),function(n){if("serviceWorker"in navigator){if(new URL("/hacker_news_clone",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/hacker_news_clone","/service-worker.js");jn?(function(n,t){fetch(n).then(function(e){var r=e.headers.get("content-type");404===e.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(n){n.unregister().then(function(){window.location.reload()})}):kn(n,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,n),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):kn(t,n)})}}()}},[[42,2,1]]]);
//# sourceMappingURL=main.b46bd520.chunk.js.map