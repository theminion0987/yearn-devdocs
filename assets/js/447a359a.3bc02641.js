(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{107:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),c=(r(0),r(220)),i={},o={unversionedId:"smart-contracts/smart-contracts/utils/ProxyFactoryInitializable",id:"smart-contracts/smart-contracts/utils/ProxyFactoryInitializable",isDocsHomePage:!1,title:"ProxyFactoryInitializable",description:"Functions",source:"@site/docs/v2/smart-contracts/smart-contracts/utils/ProxyFactoryInitializable.md",sourceDirName:"smart-contracts/smart-contracts/utils",slug:"/smart-contracts/smart-contracts/utils/ProxyFactoryInitializable",permalink:"/yearn-devdocs/v2/next/smart-contracts/smart-contracts/utils/ProxyFactoryInitializable",editUrl:"https://github.com/yearn/yearn-devdocs/edit/master/website/docs/v2/smart-contracts/smart-contracts/utils/ProxyFactoryInitializable.md",version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"TokenNoReturn",permalink:"/yearn-devdocs/v2/next/smart-contracts/smart-contracts/test/TokenNoReturn"},next:{title:"Vault.vy",permalink:"/yearn-devdocs/v2/next/smart-contracts/smart-contracts/vault"}},l=[{value:"Functions",id:"functions",children:[{value:"deployMinimal",id:"deployminimal",children:[]},{value:"_getRevertMsg",id:"_getrevertmsg",children:[]},{value:"slice",id:"slice",children:[]}]},{value:"Events",id:"events",children:[{value:"ProxyCreated",id:"proxycreated",children:[]}]}],s={toc:l};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"functions"},"Functions"),Object(c.b)("h3",{id:"deployminimal"},"deployMinimal"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-solidity"},"  function deployMinimal(\n  ) external returns (address proxy, bytes returnData)\n")),Object(c.b)("h3",{id:"_getrevertmsg"},"_getRevertMsg"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-solidity"},"  function _getRevertMsg(\n    bytes _res\n  ) internal returns (string)\n")),Object(c.b)("p",null,"This is needed in order to get the human-readable revert message from a call"),Object(c.b)("p",null,"Get the revert message from a call"),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"),Object(c.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"_res")),Object(c.b)("td",{parentName:"tr",align:"left"},"bytes"),Object(c.b)("td",{parentName:"tr",align:"left"},"Response of the call")))),Object(c.b)("h4",{id:"return-values"},"Return Values:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"),Object(c.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"Revert")),Object(c.b)("td",{parentName:"tr",align:"left"},"bytes"),Object(c.b)("td",{parentName:"tr",align:"left"},"message string")))),Object(c.b)("h3",{id:"slice"},"slice"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-solidity"},"  function slice(\n  ) internal returns (bytes)\n")),Object(c.b)("h2",{id:"events"},"Events"),Object(c.b)("h3",{id:"proxycreated"},"ProxyCreated"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-solidity"},"  event ProxyCreated(\n  )\n")))}b.isMDXComponent=!0},220:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(r),d=n,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||c;return r?a.a.createElement(m,o(o({ref:t},s),{},{components:r})):a.a.createElement(m,o({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<c;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);