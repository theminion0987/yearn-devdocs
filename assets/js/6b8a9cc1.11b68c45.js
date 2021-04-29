(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(220)),o={},c={unversionedId:"smart-contracts/test/TestStrategy",id:"version-0.3.3/smart-contracts/test/TestStrategy",isDocsHomePage:!1,title:"TestStrategy",description:"Functions",source:"@site/versioned_docs/version-0.3.3/smart-contracts/test/TestStrategy.md",sourceDirName:"smart-contracts/test",slug:"/smart-contracts/test/TestStrategy",permalink:"/yearn-devdocs/v2/0.3.3/smart-contracts/test/TestStrategy",editUrl:"https://github.com/yearn/yearn-devdocs/edit/master/website/versioned_docs/version-0.3.3/smart-contracts/test/TestStrategy.md",version:"0.3.3",frontMatter:{},sidebar:"version-0.3.3/mySidebar",previous:{title:"TestGuestList",permalink:"/yearn-devdocs/v2/0.3.3/smart-contracts/test/TestGuestList"},next:{title:"Token",permalink:"/yearn-devdocs/v2/0.3.3/smart-contracts/test/Token"}},s=[{value:"Functions",id:"functions",children:[{value:"constructor",id:"constructor",children:[]},{value:"name",id:"name",children:[]},{value:"_takeFunds",id:"_takefunds",children:[]},{value:"_toggleReentrancyExploit",id:"_togglereentrancyexploit",children:[]},{value:"_setWant",id:"_setwant",children:[]},{value:"estimatedTotalAssets",id:"estimatedtotalassets",children:[]},{value:"prepareReturn",id:"preparereturn",children:[]},{value:"adjustPosition",id:"adjustposition",children:[]},{value:"liquidatePosition",id:"liquidateposition",children:[]},{value:"prepareMigration",id:"preparemigration",children:[]},{value:"protectedTokens",id:"protectedtokens",children:[]}]}],l={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"functions"},"Functions"),Object(i.b)("h3",{id:"constructor"},"constructor"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  function constructor(\n  ) public\n")),Object(i.b)("h3",{id:"name"},"name"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  function name(\n  ) external returns (string)\n")),Object(i.b)("h3",{id:"_takefunds"},"_takeFunds"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  function _takeFunds(\n  ) public\n")),Object(i.b)("h3",{id:"_togglereentrancyexploit"},"_toggleReentrancyExploit"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  function _toggleReentrancyExploit(\n  ) public\n")),Object(i.b)("h3",{id:"_setwant"},"_setWant"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  function _setWant(\n  ) public\n")),Object(i.b)("h3",{id:"estimatedtotalassets"},"estimatedTotalAssets"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  function estimatedTotalAssets(\n  ) public returns (uint256)\n")),Object(i.b)("h3",{id:"preparereturn"},"prepareReturn"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  function prepareReturn(\n  ) internal returns (uint256 _profit, uint256 _loss, uint256 _debtPayment)\n")),Object(i.b)("h3",{id:"adjustposition"},"adjustPosition"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  function adjustPosition(\n  ) internal\n")),Object(i.b)("h3",{id:"liquidateposition"},"liquidatePosition"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  function liquidatePosition(\n  ) internal returns (uint256 _liquidatedAmount, uint256 _loss)\n")),Object(i.b)("h3",{id:"preparemigration"},"prepareMigration"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  function prepareMigration(\n  ) internal\n")),Object(i.b)("h3",{id:"protectedtokens"},"protectedTokens"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  function protectedTokens(\n  ) internal returns (address[])\n")))}u.isMDXComponent=!0},220:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,m=d["".concat(o,".").concat(b)]||d[b]||p[b]||i;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);