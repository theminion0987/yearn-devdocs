"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[503],{3905:(e,t,a)=>{a.d(t,{kt:()=>p});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),m=o,k=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return a?n.createElement(k,r(r({ref:t},c),{},{components:a})):n.createElement(k,r({ref:t},c))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5984:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(7462),o=(a(7294),a(3905));const i={},r="veYFI",l={unversionedId:"governance/veyfi",id:"governance/veyfi",title:"veYFI",description:"veYFI incorporates YIP-56: Buyback and Build funds into YFI tokenomics. Users can lock YFI tokens and receive veYFI, which allows them to boost vault rewards and vote on where bought-back YFI will be sent.",source:"@site/docs/contributing/governance/veyfi.md",sourceDirName:"governance",slug:"/governance/veyfi",permalink:"/contributing/governance/veyfi",draft:!1,tags:[],version:"current",lastUpdatedAt:1696431417,formattedLastUpdatedAt:"10/4/2023",frontMatter:{},sidebar:"mySidebar",previous:{title:"YFI",permalink:"/contributing/governance/yfi"},next:{title:"How to contribute to docs",permalink:"/contributing/documentation/working-on-docs"}},s={},d=[{value:"Specification",id:"specification",level:2},{value:"Overview",id:"overview",level:2},{value:"dYFI",id:"dyfi",level:3},{value:"Vault Gauges + Voting",id:"vault-gauges--voting",level:3},{value:"veYFI Reward Pool",id:"veyfi-reward-pool",level:3},{value:"Benefits",id:"benefits",level:2},{value:"Risks",id:"risks",level:2},{value:"Specification",id:"specification-1",level:2},{value:"Overview",id:"overview-1",level:2},{value:"Benefits",id:"benefits-1",level:2},{value:"Risks",id:"risks-1",level:2}],u={toc:d};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"veyfi"},"veYFI"),(0,o.kt)("p",null,"veYFI incorporates ",(0,o.kt)("a",{parentName:"p",href:"https://gov.yearn.fi/t/yip-56-buyback-and-build/8929"},"YIP-56: Buyback and Build")," funds into YFI tokenomics. Users can lock YFI tokens and receive veYFI, which allows them to boost vault rewards and vote on where bought-back YFI will be sent."),(0,o.kt)("p",null,"Contract Address: ",(0,o.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0x90c1f9220d90d3966fbee24045edd73e1d588ad5"},(0,o.kt)("inlineCode",{parentName:"a"},"0x90c1f9220d90d3966fbee24045edd73e1d588ad5"))),(0,o.kt)("h2",{id:"specification"},"Specification"),(0,o.kt)("p",null,"Governance Forum Thread: ",(0,o.kt)("a",{parentName:"p",href:"https://gov.yearn.fi/t/yip-65-evolving-yfi-tokenomics"},"https://gov.yearn.fi/t/yip-65-evolving-yfi-tokenomics")),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Receives bought-back YFI as reward."),(0,o.kt)("li",{parentName:"ul"},"Locking is similar to the ve-style program of Curve."),(0,o.kt)("li",{parentName:"ul"},"YFI can be locked into veYFI, which is non-transferable."),(0,o.kt)("li",{parentName:"ul"},"Lock duration can be decided on deposit: from 1 week to 4 years."),(0,o.kt)("li",{parentName:"ul"},"A user must have a veYFI lock to continue to earn rewards. No lock leads to no boosted rewards. A Maximum lock, continuously renewed, maximizes rewards."),(0,o.kt)("li",{parentName:"ul"},"It\u2019s possible to exit the lock early, in exchange for paying a penalty that gets allocated to the other veYFI holders."),(0,o.kt)("li",{parentName:"ul"},"The penalty is up to 75% locked amount and decays over time:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The total penalty is the minimum percentage between ",(0,o.kt)("inlineCode",{parentName:"li"},"75% locked amount")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"(time remaining / 4 years)")),(0,o.kt)("li",{parentName:"ul"},"So if your lock is over 3 years you will pay 75%."),(0,o.kt)("li",{parentName:"ul"},"If your lock is 2 years you will pay 2/4 = 50%"),(0,o.kt)("li",{parentName:"ul"},"Penalty Formula: ",(0,o.kt)("inlineCode",{parentName:"li"},"min(75%, lock_duration_left / 4 years * 100%)")))),(0,o.kt)("li",{parentName:"ul"},"Now that veYFI has been implemented, only veYFI is accepted voting power in Yearn Governance.")),(0,o.kt)("h3",{id:"dyfi"},"dYFI"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"dYFI is an ERC-20 token."),(0,o.kt)("li",{parentName:"ul"},"Gauges pay dYFI that you can either sell for ETH or convert to YFI (by paying ETH, this ETH gets routed to buybacks immediately)."),(0,o.kt)("li",{parentName:"ul"},"Gives its bearer the right to redeem an equivalent amount of YFI in exchange for ETH."),(0,o.kt)("li",{parentName:"ul"},"dYFI is burned upon redemption."),(0,o.kt)("li",{parentName:"ul"},"The circulating supply of dYFI must not exceed the amount of YFI available to be redeemed as part of the tokenomics program."),(0,o.kt)("li",{parentName:"ul"},"The amount of ETH required for redemption is at a discount to the current spot price of YFI/ETH."),(0,o.kt)("li",{parentName:"ul"},"ETH received from dYFI redemption is redirected to automated YFI buybacks handled by an immutable smart contract.")),(0,o.kt)("h3",{id:"vault-gauges--voting"},"Vault Gauges + Voting"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Vault gauges allow vault depositors to stake their vault tokens and earn YFI rewards according to their veYFI weight."),(0,o.kt)("li",{parentName:"ul"},"Weights decay as the remaining lock duration decreases and can be extended up to the max lock duration."),(0,o.kt)("li",{parentName:"ul"},"Increased locking duration is rewarded with increased weight, so locking for 4 years gives 100% weight, locking for 2 years 50% weight, etc."),(0,o.kt)("li",{parentName:"ul"},"YFI is allocated to gauges based on bi-monthly governance votes. Each gauge can get a different amount of bought-back YFI to emit."),(0,o.kt)("li",{parentName:"ul"},"Based on their veYFI lock, users can boost their gauge rewards by up to 10x proportional to the number of vault tokens deposited, when they claim YFI rewards from gauges. The greater the amount of veYFI, the more vault deposits can be boosted for the user."),(0,o.kt)("li",{parentName:"ul"},"The boost mechanism will calculate your earning weight by taking the smaller amount of two values, provided in the formula below: ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Gauge boost formula: ",(0,o.kt)("inlineCode",{parentName:"li"},"min(AmountDeposited, (AmountDeposited /10) + (TotalDepositedInTheGauge * VeYFIBalance / VeYFITotalSupply * 0.9))")))),(0,o.kt)("li",{parentName:"ul"},"A claim with boost under 100% will send the leftover tokens to veYFI holders.")),(0,o.kt)("h3",{id:"veyfi-reward-pool"},"veYFI Reward Pool"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Users who lock veYFI can claim accumulated fees from the veYFI reward pool. The reward pool gets fees two ways: YFI from the veYFI early exit fee and the non-distributed gauge rewards due to a lack of full boost."),(0,o.kt)("li",{parentName:"ul"},"You can claim from the veYFI reward pool two or three weeks (to be defined) from the Thursday after you lock.")),(0,o.kt)("h2",{id:"benefits"},"Benefits"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Incorporates YFI buybacks.")," The mandate of ",(0,o.kt)("a",{parentName:"li",href:"https://gov.yearn.fi/t/yip-56-buyback-and-build/8929"},"YIP-56: Buyback and Build")," is unchanged, the new design builds on top of and integrates the bought-back YFI."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Incentivizes a long-term view on Yearn.")," Token holders are motivated to support the protocol over the long-term rather than to speculate on the short-term."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Makes vaults more competitive.")," Additional YFI earned from vault gauges are effectively added yield for depositors in proportion to how dedicated they are in their support."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Motivates 3rd party protocols and DAOs to become YFI holders.")," Yearn products are used as yield components of a broader DeFi stack, and integrated into wallets and protocols. With this design, they have incentives to direct rewards to vaults and products they use."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"A seamless experience for integrators.")," Participation is optional. This maintains the simplicity integrators have come to appreciate and makes it easy to reason about vault behavior. Only those who are motivated to do so can participate.")),(0,o.kt)("h2",{id:"risks"},"Risks"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Risk of governance attacks"),", where one or several actors accumulate sizable positions of YFI and can control rewards and decisions of the protocol."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Risk of insufficient rewards to make locking attractive"),", where vaults may not generate enough tokens for the Treasury to buy back enough YFI to motivate YFI holders to lock into veYFI. This has somewhat of a balancing effect: as demand for locking decreases so does the share of the rewards for those who lock. If it\u2019s determined that the equilibrium does not lead to enough YFI being locked, additional YFI could be minted and rewarded to veYFI holders."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Risk of YFI liquidity drying up.")," Currently YFI is traded on multiple centralized and decentralized exchanges. As demand for using YFI elsewhere grows, there may be a lack of YFI/ETH LP supply in liquidity pools and lack of interest in general YFI market-making, leading to YFI becoming more illiquid. In such an event, additional incentives may be required to ensure healthy liquidity for trading in and out of YFI. The Treasury may also explore owning some of this liquidity outright.")),(0,o.kt)("h1",{id:"dyfi-1"},"dYFI"),(0,o.kt)("p",null,"dYFI (previously specified as oYFI) is a token introduced as part of Yearn's veYFI tokenomics program. It is an ERC-20 token that allows its holder to buy back YFI at a discount. "),(0,o.kt)("p",null,"Contract Address: ",(0,o.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0x41252e8691e964f7de35156b68493bab6797a275"},(0,o.kt)("inlineCode",{parentName:"a"},"0x41252e8691e964f7de35156b68493bab6797a275"))),(0,o.kt)("h2",{id:"specification-1"},"Specification"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Governance Forum Thread: ",(0,o.kt)("a",{parentName:"li",href:"https://gov.yearn.fi/t/yip-73-activate-veyfi-rewards-with-oyfi-gauges"},"https://gov.yearn.fi/t/yip-73-activate-veyfi-rewards-with-oyfi-gauges"))),(0,o.kt)("h2",{id:"overview-1"},"Overview"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Implements the ERC-20 standard."),(0,o.kt)("li",{parentName:"ul"},"Gives its bearer the right to redeem an equivalent YFI in exchange for ETH."),(0,o.kt)("li",{parentName:"ul"},"dYFI is burned upon redemption."),(0,o.kt)("li",{parentName:"ul"},"The circulating supply of dYFI must not exceed the amount of YFI available to be redeemed as part of the tokenomics program."),(0,o.kt)("li",{parentName:"ul"},"The amount of ETH required for redemption is at a discount to the current spot price of YFI/ETH."),(0,o.kt)("li",{parentName:"ul"},"Discount calculation is an approximation of the following formula:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"discount = ",(0,o.kt)("inlineCode",{parentName:"li"},"c / (1 + a * e^k(s * x \u2212 1))"),", where:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"c")," = ",(0,o.kt)("inlineCode",{parentName:"li"},"1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"a")," = ",(0,o.kt)("inlineCode",{parentName:"li"},"9.9999")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"k")," = ",(0,o.kt)("inlineCode",{parentName:"li"},"4.6969")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"s")," = ",(0,o.kt)("inlineCode",{parentName:"li"},"configurable scaling factor")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"x")," = ",(0,o.kt)("inlineCode",{parentName:"li"},"veYFI_supply / YFI_supply")))))),(0,o.kt)("li",{parentName:"ul"},"ETH received from dYFI redemption is redirected to automated YFI buybacks handled by an immutable smart contract, like the one already in production for DAI.")),(0,o.kt)("h2",{id:"benefits-1"},"Benefits"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Rewards active protocol participants.")," dYFI is rewarded to users who stake their vault tokens in gauges, thereby incentivizing active participation in the protocol."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Promotes YFI buybacks.")," The ETH received from dYFI redemption is used for automated YFI buybacks.")),(0,o.kt)("h2",{id:"risks-1"},"Risks"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Risk of insufficient rewards to make locking attractive"),", where vaults may not generate enough tokens for the Treasury to buy back enough YFI to motivate YFI holders to lock into veYFI. This has somewhat of a balancing effect: as demand for locking decreases so does the share of the rewards for those who lock. If it\u2019s determined that the equilibrium does not lead to enough YFI being locked, additional YFI could be minted and rewarded to veYFI holders."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Risk of YFI liquidity drying up.")," Currently YFI is traded on multiple centralized and decentralized exchanges. As demand for using YFI elsewhere grows, there may be a lack of YFI/ETH LP supply in liquidity pools and lack of interest in general YFI market-making, leading to YFI becoming more illiquid. In such an event, additional incentives may be required to ensure healthy liquidity exists for trading in and out of YFI. The Treasury may also explore owning some of this liquidity outright.")))}c.isMDXComponent=!0}}]);