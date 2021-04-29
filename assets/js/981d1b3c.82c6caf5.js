(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{170:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(220)),i={},l={unversionedId:"how-to-guides/how-to-understand-yvault-roi",id:"how-to-guides/how-to-understand-yvault-roi",isDocsHomePage:!1,title:"How To Understand yVault ROI",description:"ROI",source:"@site/docs/getting-started/how-to-guides/how-to-understand-yvault-roi.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/how-to-understand-yvault-roi",permalink:"/yearn-devdocs/getting-started/how-to-guides/how-to-understand-yvault-roi",version:"current",lastUpdatedBy:"steffel",lastUpdatedAt:1619430305,formattedLastUpdatedAt:"4/26/2021",frontMatter:{},sidebar:"mySidebar",previous:{title:"How to understand the Hegic v2 vault",permalink:"/yearn-devdocs/getting-started/how-to-guides/how-to-understand-the-Hegic-v2-vault"},next:{title:"How to understand yveCRV",permalink:"/yearn-devdocs/getting-started/how-to-guides/how-to-understand-yveCRV"}},s=[{value:"ROI calculation",id:"roi-calculation",children:[{value:"Why can&#39;t we use compound or linear interest formulas to estimate yVaults returns?",id:"why-cant-we-use-compound-or-linear-interest-formulas-to-estimate-yvaults-returns",children:[]},{value:"Why does this happen?",id:"why-does-this-happen",children:[]},{value:"ROI extrapolation applied to the yUSD Vault chart",id:"roi-extrapolation-applied-to-the-yusd-vault-chart",children:[]},{value:"Example",id:"example",children:[]},{value:"Conclusions",id:"conclusions",children:[]},{value:"Other references",id:"other-references",children:[]}]}],c={toc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"ROI"),Object(o.b)("p",null,'Are you an advanced user trying to understand how ROI is calculated? Skip directly to "',Object(o.b)("a",{parentName:"p",href:"https://docs.yearn.finance/how-to-guides/how-to-understand-yvault-roi#why-cant-we-use-compound-or-linear-interest-formulas-to-estimate-yvaults-returns"},Object(o.b)("em",{parentName:"a"},"Why we can't use compound or linear interest formulas to estimate yVaults returns")),'"'),Object(o.b)("p",null,"If you are a beginner in DeFi or new to Yearn keep on reading."),Object(o.b)("h4",{id:"roi-definition"},"ROI definition:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Return on investment ","(","ROI",")"," is a ratio between net profit ","(","over a period",")"," and cost of investment ","(","resulting from an investment of some resources at a point in time",")",". A high ROI means the investment's gains compare favorably to its cost. As a performance measure, ROI is used to evaluate the efficiency of an investment or to compare the efficiencies of several different investments.","[","1","]"," In economic terms, it is one way of relating profits to capital invested. Source: ",Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Return_on_investment"},"Wikipedia"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"ROI is a key performance indicator ","(","KPI",")"," available in all Yearn Vaults ","(","yVaults",")"," located here: ",Object(o.b)("a",{parentName:"li",href:"https://yearn.finance/vaults"},"https://yearn.finance/vaults"),"."),Object(o.b)("li",{parentName:"ul"},"ROI is useful when comparing and assessing vault performance."),Object(o.b)("li",{parentName:"ul"},"ROI presented in Yearn is a ",Object(o.b)("strong",{parentName:"li"},"yearly ROI"),". You deposit X and 1 year later you receive X + ","(","X ","*"," ROI",")","."),Object(o.b)("li",{parentName:"ul"},"The ROI presented is a ",Object(o.b)("em",{parentName:"li"},"current estimation")," based on data since the yVault's inception. If performance remains constant, after 1 year you will receive the displayed ROI. Rates are unstable currently, and fluctuate based on market/strategy.")),Object(o.b)("p",null,"yVaults have different yield farming ",Object(o.b)("a",{parentName:"p",href:"https://docs.yearn.finance/faq#vault-strategies"},"strategies"),", which determine how assets are moved between liquidity pools. Strategies are created by the ",Object(o.b)("inlineCode",{parentName:"p"},"Controller")," who manages the yVault."),Object(o.b)("p",null,"New strategies are also voted by the community through ",Object(o.b)("a",{parentName:"p",href:"https://gov.yearn.finance"},"governance proposals"),". A new strategy creates a new challenge in terms of ROI calculation."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Individuals interested in participating in a yVault should monitor the ROI presented in the vault dashboard after a strategy change. The rate presented reflects the most recent ROI."),Object(o.b)("li",{parentName:"ul"},"An individual participating before a strategy change might be interested in comparing ROI before and ROI after. Historic ROI, e.g. since yVault creation, can also help users understand performance and inform future decisions.")),Object(o.b)("h2",{id:"roi-calculation"},"ROI calculation"),Object(o.b)("p",null,"Even though yVaults have a compounding effect inherently, this compound interest is not fixed like in a CeFi savings account. Hence, the concept of ",Object(o.b)("a",{parentName:"p",href:"https://www.investopedia.com/terms/a/apy.asp"},"APY")," and ",Object(o.b)("a",{parentName:"p",href:"https://www.investopedia.com/terms/a/apr.asp"},"APR")," do not apply directly to yVaults. They are used by the community but interpreting them should be taken with a grain of salt."),Object(o.b)("h3",{id:"why-cant-we-use-compound-or-linear-interest-formulas-to-estimate-yvaults-returns"},"Why can't we use compound or linear interest formulas to estimate yVaults returns?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"This shows the estimation of an asset that has interest / compounded interest applied to it:")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/OZKqesB.png",alt:null})),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"This is the actual, measured performance of an asset in the yUSD vault:")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/NpogiO9.png",alt:null})),Object(o.b)("h3",{id:"why-does-this-happen"},"Why does this happen?"),Object(o.b)("p",null,"A bank's interest rate is constant: either linear or compounding. The interest rate is multiplied by the asset value each period."),Object(o.b)("p",null,"yVaults work differently:"),Object(o.b)("p",null,"After depositing into a yVault, the user receives 'wrapped' tokens. These tokens start with a 'y' prefix and the depositor receives fewer tokens than were deposited ","(","why is explained below",")","."),Object(o.b)("p",null,"Starting from its inception, the vault's input and output are governed by the following equation:"),Object(o.b)("p",null,"$$F = I * P$$"),Object(o.b)("p",null,"Where $F$ is the amount of the tokens in the vault, $I$ is the amount of 'wrapped' tokens held by users and $P$ is the 'price' of those wrapped tokens."),Object(o.b)("p",null,"At the start, $$P = 1$$"),Object(o.b)("p",null,"Thus $$I = F$$, amount of tokens inside the vault is equal to amount of wrapped tokens."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Almost all strategies are identical"),": invest deposited tokens, accumulate additional tokens which can be withdrawn in the future."),Object(o.b)("p",null,"By keeping track of the number of wrapped tokens, and the amount of tokens inside the vault ","(","which increase the longer they are held in the vault",")"," the price can be calculated as follows:"),Object(o.b)("p",null,"$$(vault tokens) / (wrapped tokens) = P$$"),Object(o.b)("p",null,"Since the amount of wrapped tokens is constant but the amount of vault tokens increases, the price will increase."),Object(o.b)("p",null,"The balance and thus price are therefore constantly increasing."),Object(o.b)("p",null,"Therefore, the only thing we can do is:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Try to use data from two different points in time"),Object(o.b)("li",{parentName:"ul"},"Assume growth is linear ","(","because simply there is no other information we have",")"),Object(o.b)("li",{parentName:"ul"},"Construct a line using both points which we then extrapolate"),Object(o.b)("li",{parentName:"ul"},"Calculate price at future data to display ROI.")),Object(o.b)("p",null,"However, as shown below this is dependent on where we take those points."),Object(o.b)("h3",{id:"roi-extrapolation-applied-to-the-yusd-vault-chart"},"ROI extrapolation applied to the yUSD Vault chart"),Object(o.b)("p",null,"Below are examples to show different results possible by applying linear extrapolation to two points of the price chart for the yUSD yVault."),Object(o.b)("p",null,"First of all, why and how is this done?"),Object(o.b)("p",null,"Vault input/output formula:"),Object(o.b)("p",null,"$$F = I * P$$"),Object(o.b)("p",null,"Now, we want to calculate the increment of $F$ which would be our return."),Object(o.b)("p",null,"Since $I$ is constant, and only $P$ changes, if we know $P$ at a future date, we can calulate our return."),Object(o.b)("p",null,"In order to get the formula for a line having two points we have to do some math:"),Object(o.b)("p",null,"Formula for a line: $$y = m*x + c$$"),Object(o.b)("p",null,"where $y$ is the price, $x$ is the block height and $m$, $c$ are what we are looking for."),Object(o.b)("p",null,"First, let's get $c$."),Object(o.b)("p",null,"When $x = 0$ ","(","so at inception of the yVault",")",", we know that the price is 1, hence: $y = m","*","0+c$ ","(","x = 0",")"," $y = c$ $y = 1$ ","(","price is 1 when x = 0",")"," $c = 1$"),Object(o.b)("p",null,"Now m ","(","here we have to apply derivatives",")",":"),Object(o.b)("p",null,"Using the product formula and the constants formula:"),Object(o.b)("p",null,"$y'","(","x",")"," = m$"),Object(o.b)("p",null,"Approximating the derivative of a linear function can be done by:"),Object(o.b)("p",null,"$y'","(","x",")"," = ","(","y2-y1",")","/","(","x2-x1",")"," = m$"),Object(o.b)("p",null,"$y2$ being the price at block $x2$ and $y1$ the price at block $x1$."),Object(o.b)("p",null,"Finally we have the complete formula and can estimate the price at any date in the future."),Object(o.b)("p",null,"However, since $y","(","x",")","$ is ",Object(o.b)("strong",{parentName:"p"},"not")," linear, we get different lines for different points ","(","shown below",")","."),Object(o.b)("p",null,"As a result, our estimation for price in future and the return varies greatly depending on which points we choose."),Object(o.b)("p",null,"Here we take two points of the performance chart for the yUSD vault ","(","numbered colored points",")"," and apply the above. Notice that the different lines are relatively good indications for the short term, but when we try to use them to predict long term they're totally inaccurate!"),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/g2I40pQ.png",alt:null})),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("p",null,"Jane has 100 yCRV tokens and decides to invest them in the yUSD yVault."),Object(o.b)("p",null,"At that time the price $P$ is 1.045, the total number of vault tokens is 10,450 and of wrapped tokens 10,000. $$10450 / 10000 = 1.045$$"),Object(o.b)("p",null,"Now her yCRV tokens get adjusted according to the formula above which is why she sees her now wrapped tokens ","(","yUSD",")"," reduce in quantity and the tokens in the vault ","(","yCRV",")"," are equal to the amount she invested."),Object(o.b)("p",null,"So, how many wrapped tokens will she receive?"),Object(o.b)("p",null,"$$I = F/P = 100/1.045 = 95.7 yUSD$$"),Object(o.b)("p",null,"This action, did ",Object(o.b)("strong",{parentName:"p"},"not")," change the price because she supplied to the number of wrapped tokens and vault tokens each exactly according to the ratio of the current price. This is quite important since it means that deposits and withdrawals will not have any effect on the price of the wrapped token."),Object(o.b)("p",null,"Fast forward a few days, the strategy uses Jane's funds to yield farm and uses the profits to purchase more tokens held inside the vault, increasing the balance to 10,500. For simplicity's sake, assume there were no other deposits. The wrapped tokens are still 10,000 and thus: $$P = 10500/10000 = 1.05$$"),Object(o.b)("p",null,"When Jane now looks at her balance of wrapped tokens, she will see that they have incremented to approx.:"),Object(o.b)("p",null,"$$F = I ",Object(o.b)("em",{parentName:"p"}," P = 95.7 ")," 1.05 = 100.5$$"),Object(o.b)("p",null,"At this point, she could withdraw and receive her initial yCRV deposit and an additional amount of yCRV tokens, giving her a return of 0.5% on her initial investment (ignoring the 0.5% withdrawal fee)."),Object(o.b)("h3",{id:"conclusions"},"Conclusions"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The short-term ROI data is a suitable estimation for the short-term ","(","i.e. if we compare the % from the last two days, it's likely that the following two days are going go be similar",")","."),Object(o.b)("li",{parentName:"ol"},"Short-term ROI data is ",Object(o.b)("em",{parentName:"li"},Object(o.b)("strong",{parentName:"em"},"absolutely not accurate"))," when extrapolated in the long-term."),Object(o.b)("li",{parentName:"ol"},"Long-term data ","(","say today and ",Object(o.b)("a",{parentName:"li",href:"https://docs.yearn.finance/faq#lists-of-smart-contracts"},"inception of vault"),")"," is a good overall estimation of the vaults performance and should be used when comparing different investment opportunities.")),Object(o.b)("p",null,"In other words, if your goal is to approximate returns in the short-term, you should use datasets that are recent ","(","daily/weekly",")","."),Object(o.b)("p",null,"If you would like to make a crude estimation on how returns may look like in a year or longer, the longest possible historic timeframe should be taken."),Object(o.b)("h3",{id:"other-references"},"Other references"),Object(o.b)("p",null,"The community has been actively creating tools and guides on this topic."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/thegismar/yearn_roi/blob/master/yearn_vaults_ROI_calc.ipynb"},"https://github.com/thegismar/yearn_roi/blob/master/yearn_vaults_ROI_calc.ipynb")," provides a mathemathical explanation on how ROI is calculated with some caveats. ","(","This repository is no longer being maintained",")","."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://docs.yearn.finance/faq#statistics"},"Statistics FAQ"))))}u.isMDXComponent=!0},220:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,d=p["".concat(i,".").concat(b)]||p[b]||h[b]||o;return n?r.a.createElement(d,l(l({ref:t},c),{},{components:n})):r.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);