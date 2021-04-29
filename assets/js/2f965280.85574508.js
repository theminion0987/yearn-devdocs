(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{100:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var a=r(3),n=r(7),o=(r(0),r(220)),i={},s={unversionedId:"how-to-guides/how-to-make-a-yip",id:"how-to-guides/how-to-make-a-yip",isDocsHomePage:!1,title:"How To Make a YIP",description:"Abstract",source:"@site/docs/getting-started/how-to-guides/how-to-make-a-yip.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/how-to-make-a-yip",permalink:"/yearn-devdocs/getting-started/how-to-guides/how-to-make-a-yip",version:"current",lastUpdatedBy:"steffel",lastUpdatedAt:1619430305,formattedLastUpdatedAt:"4/26/2021",frontMatter:{},sidebar:"mySidebar",previous:{title:"How to Add a Custom Token to MetaMask",permalink:"/yearn-devdocs/getting-started/how-to-guides/how-to-add-a-custom-token-to-metamask"},next:{title:"How to Mint yUSD",permalink:"/yearn-devdocs/getting-started/how-to-guides/how-to-mint-yusd"}},l=[{value:"Contributing",id:"contributing",children:[]},{value:"YIP Statuses",id:"yip-statuses",children:[{value:"Example YIP",id:"example-yip",children:[]}]},{value:"Validation",id:"validation",children:[]},{value:"Copyright",id:"copyright",children:[]}],c={toc:l};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Abstract"),Object(o.b)("p",null,"The yEarn Improvement Proposals ","(",Object(o.b)("inlineCode",{parentName:"p"},"YIP"),"s",")"," describe standards for the yEarn platform, including core protocol specifications, client APIs, and contract standards. This is the definitive, ",Object(o.b)("inlineCode",{parentName:"p"},"canonical")," reference specification for the core logic."),Object(o.b)("h2",{id:"contributing"},"Contributing"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Review ",Object(o.b)("a",{parentName:"li",href:"https://github.com/yearn/YIPS/blob/master/YIPS/yip-0.md"},"YIP-0"),"."),Object(o.b)("li",{parentName:"ol"},'Fork the repository by clicking "Fork" in the top right.'),Object(o.b)("li",{parentName:"ol"},"Add your YIP to your fork of the repository. There is a ",Object(o.b)("a",{parentName:"li",href:"https://github.com/yearn/YIPS/blob/master/yip-X.md"},"template YIP here"),"."),Object(o.b)("li",{parentName:"ol"},"Submit a Pull Request to yEarn's ",Object(o.b)("a",{parentName:"li",href:"https://github.com/yearn/YIPS/"},"YIPs repository"),".")),Object(o.b)("p",null,"Your first PR should be a first draft of the final YIP. It must meet the formatting criteria enforced by the build ","(","largely, correct metadata in the header",")",". An editor will manually review the first PR for a new YIP and assign it a number before merging it. Make sure you include a ",Object(o.b)("inlineCode",{parentName:"p"},"discussions-to")," header with the URL to a new thread on ",Object(o.b)("a",{parentName:"p",href:"https://gov.yearn.finance/"},"gov.yearn.finance")," where people can discuss the YIP as a whole."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: It is important that their be community support behind a proposed ",Object(o.b)("inlineCode",{parentName:"p"},"YIP")," - It is up to the author","(","s",")"," to shepard their proposal through the process.")),Object(o.b)("p",null,"If your YIP requires images, the image files should be included in a subdirectory of the ",Object(o.b)("inlineCode",{parentName:"p"},"assets")," folder for that YIP as follow: ",Object(o.b)("inlineCode",{parentName:"p"},"assets/yip-X")," ","(","for yip ",Object(o.b)("strong",{parentName:"p"},"X"),")",". When linking to an image in the YIP, use relative links such as ",Object(o.b)("inlineCode",{parentName:"p"},"../assets/yip-X/image.png"),"."),Object(o.b)("p",null,"When you believe your YIP is mature and ready to progress past the WIP phase, you should ask to have your issue added to the next governance call where it can be discussed for inclusion in a future platform upgrade. If the community agrees to include it, the YIP editors will update the state of your YIP to 'Approved'."),Object(o.b)("h2",{id:"yip-statuses"},"YIP Statuses"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"WIP")," - a YIP that is still being developed."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Proposed")," - a YIP that is ready to be reviewed in a governance call."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Approved")," - a YIP that has been accepted for implementation by the yEarn community."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Implemented")," - a YIP that has been released to mainnet."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Rejected")," - a YIP that has been rejected.")),Object(o.b)("h3",{id:"example-yip"},"Example YIP"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-diff"},"-Status: Proposed\n+Status: Approved\nYIP: integer,\nCreated: 2020-09-01\n-Last-Modified: 2020-09-03\n+Last-Modified: 2020-09-08\n")),Object(o.b)("h2",{id:"validation"},"Validation"),Object(o.b)("p",null,"YIPs MUST pass some validation tests. The YIP repository ensures this by running tests using ",Object(o.b)("a",{parentName:"p",href:"https://rubygems.org/gems/html-proofer"},"html-proofer")," and ",Object(o.b)("a",{parentName:"p",href:"https://rubygems.org/gems/yip_validator"},"yip_validator"),"."),Object(o.b)("p",null,"It is possible to run the YIP validator locally:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ruby"},"gem install yip_validator\nyip_validator <INPUT_FILES>\n")),Object(o.b)("h2",{id:"copyright"},"Copyright"),Object(o.b)("p",null,"Copyright and related rights waived via ",Object(o.b)("a",{parentName:"p",href:"https://creativecommons.org/publicdomain/zero/1.0/"},"CC0"),"."))}p.isMDXComponent=!0},220:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=n.a.createContext({}),p=function(e){var t=n.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},b=function(e){var t=p(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(r),d=a,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return r?n.a.createElement(m,s(s({ref:t},c),{},{components:r})):n.a.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);