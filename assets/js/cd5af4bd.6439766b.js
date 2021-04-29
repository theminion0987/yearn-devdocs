(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{204:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return o})),r.d(t,"default",(function(){return d}));var n=r(3),a=r(7),i=(r(0),r(220)),c={},s={unversionedId:"smart-contracts/StrategyAPI",id:"version-0.3.0/smart-contracts/StrategyAPI",isDocsHomePage:!1,title:"StrategyAPI",description:"This interface is here for the keeper bot to use.",source:"@site/versioned_docs/version-0.3.0/smart-contracts/StrategyAPI.md",sourceDirName:"smart-contracts",slug:"/smart-contracts/StrategyAPI",permalink:"/yearn-devdocs/v2/0.3.0/smart-contracts/StrategyAPI",editUrl:"https://github.com/yearn/yearn-devdocs/edit/master/website/versioned_docs/version-0.3.0/smart-contracts/StrategyAPI.md",version:"0.3.0",frontMatter:{},sidebar:"version-0.3.1/mySidebar",previous:{title:"BaseStrategy",permalink:"/yearn-devdocs/v2/0.3.0/smart-contracts/BaseStrategy"},next:{title:"VaultAPI",permalink:"/yearn-devdocs/v2/0.3.0/smart-contracts/VaultAPI"}},o=[{value:"Functions",id:"functions",children:[{value:"apiVersion",id:"apiversion",children:[]},{value:"isActive",id:"isactive",children:[]},{value:"delegatedAssets",id:"delegatedassets",children:[]},{value:"name",id:"name",children:[]},{value:"vault",id:"vault",children:[]},{value:"keeper",id:"keeper",children:[]},{value:"tendTrigger",id:"tendtrigger",children:[]},{value:"tend",id:"tend",children:[]},{value:"harvestTrigger",id:"harvesttrigger",children:[]},{value:"harvest",id:"harvest",children:[]}]},{value:"Events",id:"events",children:[{value:"Harvested",id:"harvested",children:[]}]}],l={toc:o};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This interface is here for the keeper bot to use."),Object(i.b)("h2",{id:"functions"},"Functions"),Object(i.b)("h3",{id:"apiversion"},"apiVersion"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  function apiVersion(\n  ) external returns (string)\n")),Object(i.b)("h3",{id:"isactive"},"isActive"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  function isActive(\n  ) external returns (bool)\n")),Object(i.b)("h3",{id:"delegatedassets"},"delegatedAssets"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  function delegatedAssets(\n  ) external returns (uint256)\n")),Object(i.b)("h3",{id:"name"},"name"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  function name(\n  ) external returns (string)\n")),Object(i.b)("h3",{id:"vault"},"vault"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  function vault(\n  ) external returns (address)\n")),Object(i.b)("h3",{id:"keeper"},"keeper"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  function keeper(\n  ) external returns (address)\n")),Object(i.b)("h3",{id:"tendtrigger"},"tendTrigger"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  function tendTrigger(\n  ) external returns (bool)\n")),Object(i.b)("h3",{id:"tend"},"tend"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  function tend(\n  ) external\n")),Object(i.b)("h3",{id:"harvesttrigger"},"harvestTrigger"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  function harvestTrigger(\n  ) external returns (bool)\n")),Object(i.b)("h3",{id:"harvest"},"harvest"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  function harvest(\n  ) external\n")),Object(i.b)("h2",{id:"events"},"Events"),Object(i.b)("h3",{id:"harvested"},"Harvested"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  event Harvested(\n  )\n")))}d.isMDXComponent=!0},220:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return v}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=d(r),p=n,v=u["".concat(c,".").concat(p)]||u[p]||b[p]||i;return r?a.a.createElement(v,s(s({ref:t},l),{},{components:r})):a.a.createElement(v,s({ref:t},l))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var l=2;l<i;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);