"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[8421],{3905:function(e,t,n){n.d(t,{kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),g=a,m=p["".concat(l,".").concat(g)]||p[g]||u[g]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},265:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={},l=void 0,c={unversionedId:"smart-contracts/VaultAPI",id:"version-0.3.0/smart-contracts/VaultAPI",title:"VaultAPI",description:"Functions",source:"@site/versioned_docs/version-0.3.0/smart-contracts/VaultAPI.md",sourceDirName:"smart-contracts",slug:"/smart-contracts/VaultAPI",permalink:"/vaults/0.3.0/smart-contracts/VaultAPI",draft:!1,editUrl:"https://github.com/yearn/yearn-devdocs/edit/master/website/versioned_docs/version-0.3.0/smart-contracts/VaultAPI.md",tags:[],version:"0.3.0",frontMatter:{},sidebar:"version-0.3.1/mySidebar",previous:{title:"StrategyAPI",permalink:"/vaults/0.3.0/smart-contracts/StrategyAPI"},next:{title:"Registry.vy",permalink:"/vaults/0.3.0/smart-contracts/registry"}},u={},d=[{value:"Functions",id:"functions",level:2},{value:"apiVersion",id:"apiversion",level:3},{value:"withdraw",id:"withdraw",level:3},{value:"token",id:"token",level:3},{value:"strategies",id:"strategies",level:3},{value:"creditAvailable",id:"creditavailable",level:3},{value:"debtOutstanding",id:"debtoutstanding",level:3},{value:"expectedReturn",id:"expectedreturn",level:3},{value:"report",id:"report",level:3},{value:"revokeStrategy",id:"revokestrategy",level:3},{value:"governance",id:"governance",level:3}],p={toc:d};function g(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"apiversion"},"apiVersion"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function apiVersion(\n  ) external returns (string)\n")),(0,i.kt)("h3",{id:"withdraw"},"withdraw"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function withdraw(\n  ) external\n")),(0,i.kt)("h3",{id:"token"},"token"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function token(\n  ) external returns (address)\n")),(0,i.kt)("h3",{id:"strategies"},"strategies"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function strategies(\n  ) external returns (struct StrategyParams)\n")),(0,i.kt)("h3",{id:"creditavailable"},"creditAvailable"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function creditAvailable(\n  ) external returns (uint256)\n")),(0,i.kt)("p",null,"View how much the Vault would increase this Strategy's borrow limit,\nbased on its present performance (since its last report). Can be used to\ndetermine expectedReturn in your Strategy."),(0,i.kt)("h3",{id:"debtoutstanding"},"debtOutstanding"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function debtOutstanding(\n  ) external returns (uint256)\n")),(0,i.kt)("p",null,"View how much the Vault would like to pull back from the Strategy,\nbased on its present performance (since its last report). Can be used to\ndetermine expectedReturn in your Strategy."),(0,i.kt)("h3",{id:"expectedreturn"},"expectedReturn"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function expectedReturn(\n  ) external returns (uint256)\n")),(0,i.kt)("p",null,"View how much the Vault expect this Strategy to return at the current\nblock, based on its present performance (since its last report). Can be\nused to determine expectedReturn in your Strategy."),(0,i.kt)("h3",{id:"report"},"report"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function report(\n  ) external returns (uint256)\n")),(0,i.kt)("p",null,"This is the main contact point where the Strategy interacts with the\nVault. It is critical that this call is handled as intended by the\nStrategy. Therefore, this function will be called by BaseStrategy to\nmake sure the integration is correct."),(0,i.kt)("h3",{id:"revokestrategy"},"revokeStrategy"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function revokeStrategy(\n  ) external\n")),(0,i.kt)("p",null,'This function should only be used in the scenario where the Strategy is\nbeing retired but no migration of the positions are possible, or in the\nextreme scenario that the Strategy needs to be put into "Emergency Exit"\nmode in order for it to exit as quickly as possible. The latter scenario\ncould be for any reason that is considered "critical" that the Strategy\nexits its position as fast as possible, such as a sudden change in\nmarket conditions leading to losses, or an imminent failure in an\nexternal dependency.'),(0,i.kt)("h3",{id:"governance"},"governance"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function governance(\n  ) external returns (address)\n")),(0,i.kt)("p",null,"View the governance address of the Vault to assert privileged functions\ncan only be called by governance. The Strategy serves the Vault, so it\nis subject to governance defined by the Vault."))}g.isMDXComponent=!0}}]);