"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[7826],{3905:function(e,t,r){r.d(t,{kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},6329:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={},u="Subgraph and yDaemon",p={unversionedId:"v2/yearn-data",id:"v2/yearn-data",title:"Subgraph and yDaemon",description:"If you need to fetch large amounts of historical yearn data there are 2 services built for that:",source:"@site/docs/developers/v2/yearn-data.md",sourceDirName:"v2",slug:"/v2/yearn-data",permalink:"/developers/v2/yearn-data",draft:!1,tags:[],version:"current",lastUpdatedAt:1666008183,formattedLastUpdatedAt:"10/17/2022",frontMatter:{},sidebar:"mySidebar",previous:{title:"Ledger Plugin",permalink:"/developers/v2/ledger-plugin"},next:{title:"Hacking on Yearn",permalink:"/developers/v2/hacking-with-yearn"}},c={},s=[{value:"yDaemon",id:"ydaemon",level:2},{value:"Subgraph",id:"subgraph",level:2}],m={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"subgraph-and-ydaemon"},"Subgraph and yDaemon"),(0,o.kt)("p",null,"If you need to fetch large amounts of historical yearn data there are 2 services built for that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The subgraph is a GraphQL interface to raw historical data"),(0,o.kt)("li",{parentName:"ul"},"yDaemon is a RESTful API that hydrates subgraph responses with more data, like APY calculations")),(0,o.kt)("h2",{id:"ydaemon"},"yDaemon"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Live API:")," ",(0,o.kt)("a",{parentName:"li",href:"https://ydaemon.yearn.finance/"},"https://ydaemon.yearn.finance/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Source + Docs:")," ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/yearn/ydaemon"},"https://github.com/yearn/ydaemon")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Guide:")," ",(0,o.kt)("a",{parentName:"li",href:"https://medium.com/iearn/ydaemon-one-api-to-unify-all-yearn-data-4fc74dc9a33b"},"https://medium.com/iearn/ydaemon-one-api-to-unify-all-yearn-data-4fc74dc9a33b"))),(0,o.kt)("h2",{id:"subgraph"},"Subgraph"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Live API + Docs:")," ",(0,o.kt)("a",{parentName:"li",href:"https://api.thegraph.com/subgraphs/name/messari/yearn-v2-ethereum/graphql"},"https://api.thegraph.com/subgraphs/name/messari/yearn-v2-ethereum/graphql"))))}d.isMDXComponent=!0}}]);