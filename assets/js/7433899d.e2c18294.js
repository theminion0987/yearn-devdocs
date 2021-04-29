(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{143:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return c}));var n=r(3),a=r(7),o=(r(0),r(220)),i={title:"Partnership"},s={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Partnership",description:"We propose two options:",source:"@site/docs/partners/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/yearn-devdocs/partners/introduction",version:"current",lastUpdatedBy:"banteg",lastUpdatedAt:1619706676,formattedLastUpdatedAt:"4/29/2021",frontMatter:{title:"Partnership"},sidebar:"mySidebar"},u=[{value:"1/ WRAPPER",id:"1-wrapper",children:[]},{value:"2/ DELEGATED DEPOSIT",id:"2-delegated-deposit",children:[]}],l={toc:u};function c(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We propose two options:"),Object(o.b)("h2",{id:"1-wrapper"},"1/ WRAPPER"),Object(o.b)("p",null,"User makes a deposit into your Wrapper,\nWrapper deposits into Yearn Vault,\nVault issues vault tokens to Wrapper,\nWrapper issues wrapper tokens to User."),Object(o.b)("p",null,"See the templeate available on Github with tests","[0]"),Object(o.b)("p",null,"Implications:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"your contributed TVLs are easily tracked with precision."),Object(o.b)("li",{parentName:"ul"},"your vault tokens are not fungible with other partner tokens or with yearn's vanilla vault tokens."),Object(o.b)("li",{parentName:"ul"},"each vault requires its own wrapper."),Object(o.b)("li",{parentName:"ul"},"solution and testing is comparatively complex.")),Object(o.b)("h2",{id:"2-delegated-deposit"},"2/ DELEGATED DEPOSIT"),Object(o.b)("p",null,"User makes a deposit via your routing contract,\nRouting contract routes the deposit into the Yearn Vault,\nVault issues vault tokens to User."),Object(o.b)("p",null,"The v2 vault's deposit() function has a recipient parameter which defaults to msg.sender, but can also take any other address, effectively allowing a contract or EOA to delegate a deposit on behalf of another intended recipient.","[1]"),Object(o.b)("p",null,"If you deposit funds using this delegated method, from an address already known to Yearn, we can\xa0attribute the TVL to you and pay you profit share based on this."),Object(o.b)("p",null,"You deploy a simple routing contract which deposits your user's funds into the yearn vault in question via this address, which acts as your unique identifier. One single contract could handle all routing for you, or you could do one routing contract per vault. You can tailor the design to your needs, as long as Yearn can use a defined set of addresses that source the deposits, which you provide to us to keep track of your contributed share of TVL."),Object(o.b)("p",null,"There is one catch: If your user transfers the vault token away from the original recipient address, we won't track it anymore and TVL will no longer be attributed to you. We believe that a strong majortity of users will not be moving vault tokens around, tokens tend to stay in the end user's wallet until funds are withdrawn from the vault."),Object(o.b)("p",null,"Implications:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"user gets credited regular vanilla yearn vault tokens for a better user expereince"),Object(o.b)("li",{parentName:"ul"},"loss of TVL attributed if users transfers the vault tokens  "),Object(o.b)("li",{parentName:"ul"},"simpler implementation and testing")),Object(o.b)("p",null,"[0]"," ",Object(o.b)("a",{parentName:"p",href:"https://github.com/yearn/brownie-wrapper-mix"},"https://github.com/yearn/brownie-wrapper-mix")),Object(o.b)("p",null,"[1]"," See live example for yDAI, #24: ",Object(o.b)("a",{parentName:"p",href:"https://etherscan.io/address/0x19D3364A399d251E894aC732651be8B0E4e85001#writeContract"},"https://etherscan.io/address/0x19D3364A399d251E894aC732651be8B0E4e85001#writeContract")))}c.isMDXComponent=!0},220:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),c=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=c(r),b=n,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return r?a.a.createElement(f,s(s({ref:t},l),{},{components:r})):a.a.createElement(f,s({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);