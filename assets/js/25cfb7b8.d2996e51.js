"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[2340],{3905:(e,t,a)=>{a.d(t,{kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(a),d=i,h=m["".concat(o,".").concat(d)]||m[d]||c[d]||r;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var u=2;u<r;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},6704:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var n=a(7462),i=(a(7294),a(3905));const r={},l="Smart Contracts Review Guideline",s={unversionedId:"v2/CONTRACTS_REVIEW",id:"v2/CONTRACTS_REVIEW",title:"Smart Contracts Review Guideline",description:"---",source:"@site/docs/developers/v2/CONTRACTS_REVIEW.md",sourceDirName:"v2",slug:"/v2/CONTRACTS_REVIEW",permalink:"/developers/v2/CONTRACTS_REVIEW",draft:!1,tags:[],version:"current",lastUpdatedAt:1644276245,formattedLastUpdatedAt:"2/7/2022",frontMatter:{}},o={},u=[{value:"Goals",id:"goals",level:2},{value:"Considerations",id:"considerations",level:2},{value:"Solidity Version",id:"solidity-version",level:3},{value:"Formatting &amp; Naming Conventions",id:"formatting--naming-conventions",level:2},{value:"Formating",id:"formating",level:3},{value:"Naming Conventions",id:"naming-conventions",level:3},{value:"Internal or Private Functions",id:"internal-or-private-functions",level:4},{value:"Use Constants",id:"use-constants",level:4},{value:"Best Practices",id:"best-practices",level:2},{value:"Reduce Bytecode Size",id:"reduce-bytecode-size",level:3},{value:"Use libraries",id:"use-libraries",level:4},{value:"Use Interfaces",id:"use-interfaces",level:4},{value:"Assert Returns values",id:"assert-returns-values",level:3},{value:"Variables - Naming Convention",id:"variables---naming-convention",level:3},{value:"Multiple Routers",id:"multiple-routers",level:3},{value:"Github Issues",id:"github-issues",level:2},{value:"Known Issues",id:"known-issues",level:2},{value:"Tools",id:"tools",level:2},{value:"Required Checklists",id:"required-checklists",level:2},{value:"General",id:"general",level:3},{value:"Strategies",id:"strategies",level:3},{value:"Single Sided LPs Strategies",id:"single-sided-lps-strategies",level:4},{value:"Leveraged Strategies",id:"leveraged-strategies",level:4},{value:"Joint / Hedged Strategies",id:"joint--hedged-strategies",level:4},{value:"Fixed Rate Strategies",id:"fixed-rate-strategies",level:4},{value:"MasterChef Strategies",id:"masterchef-strategies",level:4},{value:"Sources",id:"sources",level:2}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"smart-contracts-review-guideline"},"Smart Contracts Review Guideline"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"goals"},"Goals"),(0,i.kt)("p",null,"This document specifies some guidelines to develop smart contracts and essential considerations when we do security reviews."),(0,i.kt)("p",null,"The information described here applies not ONLY to strategies (our main point of risk); if not, the main goal is to help all yDoers that develop or review contracts, especially Solidity."),(0,i.kt)("p",null,"The main goals are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Apply the best practices on developing smart contracts."),(0,i.kt)("li",{parentName:"ul"},"Document our experiences as learning lessons to mitigate risks and new attack vectors."),(0,i.kt)("li",{parentName:"ul"},"Reduce risks to get rekt on mainnet."),(0,i.kt)("li",{parentName:"ul"},"Discover potential issues, bugs, or exploits in the development or review phase."),(0,i.kt)("li",{parentName:"ul"},"Learn about the hacks or exploits that occurred in the DeFi ecosystem during the last months or years.")),(0,i.kt)("p",null,"This document is based on:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The experience that the Yearn team has reached out to developing smart contracts and helping other protocols to mitigate risks."),(0,i.kt)("li",{parentName:"ul"},"Third sources (website, posts, and others). See more info in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Sources")," section.")),(0,i.kt)("h2",{id:"considerations"},"Considerations"),(0,i.kt)("h3",{id:"solidity-version"},"Solidity Version"),(0,i.kt)("p",null,"Most smart contracts are built in Solidity (except the core contracts) and use the ",(0,i.kt)("inlineCode",{parentName:"p"},"0.6.12")," version."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"In new Solidity versions, some considerations are not required.")),(0,i.kt)("h2",{id:"formatting--naming-conventions"},"Formatting & Naming Conventions"),(0,i.kt)("p",null,"All of us are working remotely, and each of us has different ways to develop smart contracts. So, it is extremelly important to get a standard and a naming convention for developing the smart contracts."),(0,i.kt)("h3",{id:"formating"},"Formating"),(0,i.kt)("p",null,"The linting or formatting the smart contract is a very important action to make them more readable, clear and easy to understand."),(0,i.kt)("p",null,"In our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/yearn/brownie-strategy-mix"},"Brownie Strategy Mix repo")," we use ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/pretty-quick"},"Pretty Quick"),"."),(0,i.kt)("p",null,"To lint the contracts, you just need to execute the command:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"yarn lint")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Before executing the CLI, you need to install the dependencies using ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn install"),".")),(0,i.kt)("h3",{id:"naming-conventions"},"Naming Conventions"),(0,i.kt)("h4",{id:"internal-or-private-functions"},"Internal or Private Functions"),(0,i.kt)("p",null,"To make the contracts more clear, a good practice is to add the ",(0,i.kt)("inlineCode",{parentName:"p"},"_")," prefix to all the internal or private functions.\nSo, for example for this function"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript="},"function myFunction() internal {\n    ...\n}\n")),(0,i.kt)("p",null,"We should use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript="},"function _myFunction() internal {\n    ...\n}\n")),(0,i.kt)("h4",{id:"use-constants"},"Use Constants"),(0,i.kt)("p",null,"Avoid using magic numbers or values. Instead, use constants with a meaningful name (in ",(0,i.kt)("strong",{parentName:"p"},"uppercase"),")."),(0,i.kt)("p",null,"Instead of"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript="},"function myFunction() public {\n    ...\n    uint256 value = aValue.mul(1234);\n    ...\n}\n")),(0,i.kt)("p",null,"use"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript="},"\n// Add a sentence describing what this constant means.\nuint256 public constant VALUE_MULTIPLIER = 1234;\n...\n...\nfunction myFunction() public {\n    ...\n    uint256 value = aValue.mul(VALUE_MULTIPLIER);\n    ...\n}\n")),(0,i.kt)("h2",{id:"best-practices"},"Best Practices"),(0,i.kt)("h3",{id:"reduce-bytecode-size"},"Reduce Bytecode Size"),(0,i.kt)("h4",{id:"use-libraries"},"Use libraries"),(0,i.kt)("p",null,"One option is creating libraries because it encapsulates logic (move logic from the contract itself to the library) and reduces the strategy bytecode size."),(0,i.kt)("p",null,"References:"),(0,i.kt)("h4",{id:"use-interfaces"},"Use Interfaces"),(0,i.kt)("p",null,"If the contract interacts with multiple protocols, you should use interfaces to interact with them instead of using the contract itself."),(0,i.kt)("h3",{id:"assert-returns-values"},"Assert Returns values"),(0,i.kt)("p",null,"We must assert the returned values in any external call to check that the call was successful."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity="},'uint256 value = externalContract.externalFunction(param1, ...paramN);\nrequire(value > 0, "invalid external value");\n')),(0,i.kt)("h3",{id:"variables---naming-convention"},"Variables - Naming Convention"),(0,i.kt)("p",null,"In order to make the code more clear and readable, we need to identify the unit in the variables that express amounts."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"amountInWant"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"balanceInYShares"),", etc.")),(0,i.kt)("h3",{id:"multiple-routers"},"Multiple Routers"),(0,i.kt)("p",null,"In case we need to use multiple routers to swap tokens, we should use this approach:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create constants for the router addresses."),(0,i.kt)("li",{parentName:"ul"},"Create a variable ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean useUniswap")," or similar."),(0,i.kt)("li",{parentName:"ul"},"Create a external/public function to switch the ",(0,i.kt)("inlineCode",{parentName:"li"},"useUniswap")," value."),(0,i.kt)("li",{parentName:"ul"},"To get the router, use:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Router router = useUniswap ? uniswapRouter : sushiswapRouter;"))))),(0,i.kt)("p",null,"See example ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/therealmonoloco/geist-lender-borrower/blob/master/contracts/Strategy.sol#L158"},"here"),"."),(0,i.kt)("h2",{id:"github-issues"},"Github Issues"),(0,i.kt)("p",null,"Use a new branch for each new strategy. Some old comments have references to lines of codes in branches that were already modified. It is more complicated to follow the comment when it happens."),(0,i.kt)("h2",{id:"known-issues"},"Known Issues"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the strategy uses another vault, we should add the maxLoss setting. See comment ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/jmonteer/yearnV2-strat-SNX-staking/pull/9#issuecomment-872376640"},"here"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Strategy"),".",(0,i.kt)("em",{parentName:"li"},"liquidatePosition")," function: This condition must be true. ",(0,i.kt)("inlineCode",{parentName:"li"},"amountNeeded == liquidatedAmount + loss")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Must")," have the health check address set.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/flashfish0x/Strategy0xDAOStaker/blob/ripae/contracts/GenericMasterChefStrategy.sol#L210"},"Example for Fantom")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/tonkers-kuma/strategy-ssb/blob/main/contracts/Strategy.sol#L93"},"Example for Ethereum")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Must")," use the ",(0,i.kt)("inlineCode",{parentName:"li"},"SafeMath")," library to do calculations in the Solidity version ",(0,i.kt)("inlineCode",{parentName:"li"},"0.6.x"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The over/underflow issues are fixed in the Solidity version ",(0,i.kt)("inlineCode",{parentName:"li"},"0.8.x"),"."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"BaseStrategy")," already imports and declares the ",(0,i.kt)("inlineCode",{parentName:"li"},"SafeMath")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"SafeERC20")," libraries, so you don't need to use the ",(0,i.kt)("inlineCode",{parentName:"li"},"using SafeMath for uint")," statement. The same with ",(0,i.kt)("inlineCode",{parentName:"li"},"SafeERC20"),".")))),(0,i.kt)("h2",{id:"tools"},"Tools"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.ethsecurity.org/research-and-developer-resources/tools"},"ETH Security Tools")),(0,i.kt)("li",{parentName:"ul"},"Trail of Bits Tools",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/crytic/slither"},"Slither")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/trailofbits/manticore"},"Manticore")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/crytic/echidna"},"Echidna")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/trailofbits/eth-security-toolbox/"},"Docker Image with all ToB tools"))))),(0,i.kt)("h2",{id:"required-checklists"},"Required Checklists"),(0,i.kt)("p",null,"Each strategy must pass two checklist verifications, a general checklist and another one depending on its type. Both checklists are ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"required"))," to deploy the strategy on any mainnet network."),(0,i.kt)("h3",{id:"general"},"General"),(0,i.kt)("p",null,"These posts describe the most important considerations on security reviews."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ethereum.stackexchange.com/questions/8551/security-review-checklist-for-a-smart-contract"},"Stackoverflow - Security Review on Smart Contracts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/sushiswap/bentobox/blob/master/documentation/checks.txt"},"Sushiswap - Multiple Checks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.notonlyowner.com/learn/intro-security-hacking-smart-contracts-ethereum"},"Not Only Owner - Intro Security Hacking Smart Contracts"))),(0,i.kt)("h3",{id:"strategies"},"Strategies"),(0,i.kt)("h4",{id:"single-sided-lps-strategies"},"Single Sided LPs Strategies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Item 1"),(0,i.kt)("li",{parentName:"ul"},"Item 2")),(0,i.kt)("h4",{id:"leveraged-strategies"},"Leveraged Strategies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Item 1"),(0,i.kt)("li",{parentName:"ul"},"Item 2")),(0,i.kt)("h4",{id:"joint--hedged-strategies"},"Joint / Hedged Strategies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Item 1"),(0,i.kt)("li",{parentName:"ul"},"Item 2")),(0,i.kt)("h4",{id:"fixed-rate-strategies"},"Fixed Rate Strategies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Item 1"),(0,i.kt)("li",{parentName:"ul"},"Item 2")),(0,i.kt)("h4",{id:"masterchef-strategies"},"MasterChef Strategies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Item 1"),(0,i.kt)("li",{parentName:"ul"},"Item 2")),(0,i.kt)("h2",{id:"sources"},"Sources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://halborn.com/explained-the-xtoken-hack-august-2021/"},"Explained XToken Hack")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://bzx.network/blog/post-mortem-update"},"BzX Network Post Mortem")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/immunefi/harvest-finance-uninitialized-proxies-bug-fix-postmortem-ea5c0f7af96b"},"Harvest Finance Uninitialized Proxies")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://twitter.com/mudit__gupta/status/1459340913751117826?s=21"},"Uniswap V3: Risk Analysis for TWAP")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/taipei-ethereum-meetup/reason-why-you-should-use-eip1167-proxy-contract-with-tutorial-cbb776d98e53"},"Minimal Proxies - Reasons Why You Should Use EIP1167")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.originprotocol.com/a-minimal-proxy-in-the-wild-ae3f7b8da990"},"Origin Protocol - Understanding Minimal Proxies")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.openzeppelin.com/deep-dive-into-the-minimal-proxy-contract/"},"Open Zeppelin - Understanding Minimal Proxies")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.openzeppelin.com/deconstructing-a-solidity-contract-part-ii-creation-vs-runtime-6b9d60ecb44c/"},"Open Zeppelin - Creation vs Runtime Code")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://twitter.com/tinchoabbate/status/1433435829372850180?s=21"},"Not Only Owner - Spanish & English")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://twitter.com/moo9000/status/1448967076698333192?s=21"},"Twitter Thread - How Your Crypto Fund or Exchange Gets Hacked"))),(0,i.kt)("hr",null))}p.isMDXComponent=!0}}]);