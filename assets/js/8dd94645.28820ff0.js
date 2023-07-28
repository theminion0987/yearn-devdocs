"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[2032],{3905:(t,e,n)=>{n.d(e,{kt:()=>d});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},s=Object.keys(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),c=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,s=t.originalType,l=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return n?r.createElement(g,i(i({ref:e},p),{},{components:n})):r.createElement(g,i({ref:e},p))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var s=n.length,i=new Array(s);i[0]=p;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7215:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const s={},i=void 0,o={unversionedId:"smart-contracts/test/TestGuestList",id:"version-0.3.2/smart-contracts/test/TestGuestList",title:"TestGuestList",description:"A basic guest list contract for testing.",source:"@site/versioned_docs/version-0.3.2/smart-contracts/test/TestGuestList.md",sourceDirName:"smart-contracts/test",slug:"/smart-contracts/test/TestGuestList",permalink:"/vaults/0.3.2/smart-contracts/test/TestGuestList",draft:!1,editUrl:"https://github.com/yearn/yearn-devdocs/edit/master/website/versioned_docs/version-0.3.2/smart-contracts/test/TestGuestList.md",tags:[],version:"0.3.2",frontMatter:{},sidebar:"version-0.3.2/mySidebar",previous:{title:"Registry.vy",permalink:"/vaults/0.3.2/smart-contracts/registry"},next:{title:"TestStrategy",permalink:"/vaults/0.3.2/smart-contracts/test/TestStrategy"}},l={},c=[{value:"Functions",id:"functions",level:2},{value:"constructor",id:"constructor",level:3},{value:"setGuests",id:"setguests",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"authorized",id:"authorized",level:3},{value:"Parameters:",id:"parameters-1",level:4}],u={toc:c};function p(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A basic guest list contract for testing."),(0,a.kt)("p",null,"For a Vyper implementation of this contract containing additional\nfunctionality, see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/banteg/guest-list/blob/master/contracts/GuestList.vy"},"https://github.com/banteg/guest-list/blob/master/contracts/GuestList.vy")),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function constructor(\n  ) public\n")),(0,a.kt)("p",null,"Create the test guest list, setting the message sender as\n",(0,a.kt)("inlineCode",{parentName:"p"},"bouncer"),"."),(0,a.kt)("p",null,"Note that since this is just for testing, you're unable to change\n",(0,a.kt)("inlineCode",{parentName:"p"},"bouncer"),"."),(0,a.kt)("h3",{id:"setguests"},"setGuests"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setGuests(\n    address[] _guests,\n    bool[] _invited\n  ) external\n")),(0,a.kt)("p",null,"Invite guests or kick them from the party."),(0,a.kt)("h4",{id:"parameters"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"_guests")),(0,a.kt)("td",{parentName:"tr",align:"left"},"address[]"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The guests to add or update.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"_invited")),(0,a.kt)("td",{parentName:"tr",align:"left"},"bool[]"),(0,a.kt)("td",{parentName:"tr",align:"left"},"A flag for each guest at the matching index, inviting or")))),(0,a.kt)("p",null,"uninviting the guest."),(0,a.kt)("h3",{id:"authorized"},"authorized"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function authorized(\n    address _guest,\n    uint256 _amount\n  ) external returns (bool)\n")),(0,a.kt)("p",null,"Check if a guest with a bag of a certain size is allowed into\nthe party."),(0,a.kt)("p",null,"Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"_amount")," isn't checked to keep test setup simple, since\nfrom the vault tests' perspective this is a pass/fail call anyway."),(0,a.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"_guest")),(0,a.kt)("td",{parentName:"tr",align:"left"},"address"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The guest's address to check.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"_amount")),(0,a.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Not used. The amount of tokens the guest is bringing.")))))}p.isMDXComponent=!0}}]);