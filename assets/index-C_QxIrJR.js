const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CW3D9Hs-.js","assets/index-CATFAc3p.js","assets/index-D9y783ia.css"])))=>i.map(i=>d[i]);
import{_ as pe}from"./index-CATFAc3p.js";const me=Symbol(),ee=Object.getPrototypeOf,G=new WeakMap,he=e=>e&&(G.has(e)?G.get(e):ee(e)===Object.prototype||ee(e)===Array.prototype),Ie=e=>he(e)&&e[me]||null,te=(e,t=!0)=>{G.set(e,t)},J={BASE_URL:"/CF-LP-FE/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_PUBLIC_ALCHEMY_ID:"G4mBTQkil8YSCbr0acyhwhERxiELhfRh",VITE_PUBLIC_PINATA_GATEWAY:"fuchsia-shivering-sparrow-317.mypinata.cloud",VITE_PUBLIC_PINATA_JWT:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIwZjJhYTU3Mi0xZmVkLTQ3MmMtODhmYS0xOGUwMzEwMzFiMzgiLCJlbWFpbCI6InByYXRlZWs3ODAyQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6IkZSQTEifSx7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6Ik5ZQzEifV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiIwOTc3MGZlY2Q0MzM3YzMyNWQ1MiIsInNjb3BlZEtleVNlY3JldCI6IjQ2NGEzODYyNmZlOTc3ZjBlMzQxZWUzMWQ4ODNkZTNmNDY4ZWMyMTIyZmIyZjE3YmU3NTQ0MDQ1YTc5ZWIzZTMiLCJleHAiOjE3NTg0NDAyNjl9.BN7ScCqrpSX-3ZeOScD9CwL5M1yBepa9BI7uCltZ5Xk",VITE_PUBLIC_WALLETCONNECT_PROJECT_ID:"7ed975826af460eba1103fb3719f68b2"},Q=e=>typeof e=="object"&&e!==null,L=new WeakMap,V=new WeakSet,ge=(e=Object.is,t=(o,I)=>new Proxy(o,I),s=o=>Q(o)&&!V.has(o)&&(Array.isArray(o)||!(Symbol.iterator in o))&&!(o instanceof WeakMap)&&!(o instanceof WeakSet)&&!(o instanceof Error)&&!(o instanceof Number)&&!(o instanceof Date)&&!(o instanceof String)&&!(o instanceof RegExp)&&!(o instanceof ArrayBuffer),n=o=>{switch(o.status){case"fulfilled":return o.value;case"rejected":throw o.reason;default:throw o}},l=new WeakMap,c=(o,I,w=n)=>{const y=l.get(o);if((y==null?void 0:y[0])===I)return y[1];const b=Array.isArray(o)?[]:Object.create(Object.getPrototypeOf(o));return te(b,!0),l.set(o,[I,b]),Reflect.ownKeys(o).forEach(T=>{if(Object.getOwnPropertyDescriptor(b,T))return;const E=Reflect.get(o,T),A={value:E,enumerable:!0,configurable:!0};if(V.has(E))te(E,!1);else if(E instanceof Promise)delete A.value,A.get=()=>w(E);else if(L.has(E)){const[g,Y]=L.get(E);A.value=c(g,Y(),w)}Object.defineProperty(b,T,A)}),Object.preventExtensions(b)},d=new WeakMap,f=[1,1],_=o=>{if(!Q(o))throw new Error("object required");const I=d.get(o);if(I)return I;let w=f[0];const y=new Set,b=(a,i=++f[0])=>{w!==i&&(w=i,y.forEach(r=>r(a,i)))};let T=f[1];const E=(a=++f[1])=>(T!==a&&!y.size&&(T=a,g.forEach(([i])=>{const r=i[1](a);r>w&&(w=r)})),w),A=a=>(i,r)=>{const h=[...i];h[1]=[a,...h[1]],b(h,r)},g=new Map,Y=(a,i)=>{if((J?"production":void 0)!=="production"&&g.has(a))throw new Error("prop listener already exists");if(y.size){const r=i[3](A(a));g.set(a,[i,r])}else g.set(a,[i])},q=a=>{var i;const r=g.get(a);r&&(g.delete(a),(i=r[1])==null||i.call(r))},ue=a=>(y.add(a),y.size===1&&g.forEach(([r,h],j)=>{if((J?"production":void 0)!=="production"&&h)throw new Error("remove already exists");const R=r[3](A(j));g.set(j,[r,R])}),()=>{y.delete(a),y.size===0&&g.forEach(([r,h],j)=>{h&&(h(),g.set(j,[r]))})}),z=Array.isArray(o)?[]:Object.create(Object.getPrototypeOf(o)),Z=t(z,{deleteProperty(a,i){const r=Reflect.get(a,i);q(i);const h=Reflect.deleteProperty(a,i);return h&&b(["delete",[i],r]),h},set(a,i,r,h){const j=Reflect.has(a,i),R=Reflect.get(a,i,h);if(j&&(e(R,r)||d.has(r)&&e(R,d.get(r))))return!0;q(i),Q(r)&&(r=Ie(r)||r);let $=r;if(r instanceof Promise)r.then(O=>{r.status="fulfilled",r.value=O,b(["resolve",[i],O])}).catch(O=>{r.status="rejected",r.reason=O,b(["reject",[i],O])});else{!L.has(r)&&s(r)&&($=_(r));const O=!V.has($)&&L.get($);O&&Y(i,O)}return Reflect.set(a,i,$,h),b(["set",[i],r,R]),!0}});d.set(o,Z);const fe=[z,E,c,ue];return L.set(Z,fe),Reflect.ownKeys(o).forEach(a=>{const i=Object.getOwnPropertyDescriptor(o,a);"value"in i&&(Z[a]=o[a],delete i.value,delete i.writable),Object.defineProperty(z,a,i)}),Z})=>[_,L,V,e,t,s,n,l,c,d,f],[ye]=ge();function M(e={}){return ye(e)}function N(e,t,s){const n=L.get(e);(J?"production":void 0)!=="production"&&!n&&console.warn("Please use proxy object");let l;const c=[],d=n[3];let f=!1;const o=d(I=>{c.push(I),l||(l=Promise.resolve().then(()=>{l=void 0,f&&t(c.splice(0))}))});return f=!0,()=>{f=!1,o()}}function be(e,t){const s=L.get(e);(J?"production":void 0)!=="production"&&!s&&console.warn("Please use proxy object");const[n,l,c]=s;return c(n,l(),t)}const u=M({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),de={state:u,subscribe(e){return N(u,()=>e(u))},push(e,t){e!==u.view&&(u.view=e,t&&(u.data=t),u.history.push(e))},reset(e){u.view=e,u.history=[e]},replace(e){u.history.length>1&&(u.history[u.history.length-1]=e,u.view=e)},goBack(){if(u.history.length>1){u.history.pop();const[e]=u.history.slice(-1);u.view=e}},setData(e){u.data=e}},m={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){return m.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos(){const e=navigator.userAgent.toLowerCase();return m.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},isArray(e){return Array.isArray(e)&&e.length>0},isTelegram(){return typeof window<"u"&&(!!window.TelegramWebviewProxy||!!window.Telegram||!!window.TelegramWebviewProxyProto)},formatNativeUrl(e,t,s){if(m.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let n=e;n.includes("://")||(n=e.replaceAll("/","").replaceAll(":",""),n=`${n}://`),n.endsWith("/")||(n=`${n}/`),this.setWalletConnectDeepLink(n,s);const l=encodeURIComponent(t);return`${n}wc?uri=${l}`},formatUniversalUrl(e,t,s){if(!m.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let n=e;if(n.startsWith("https://t.me")){const c=Buffer.from(t).toString("base64").replace(/[=]/g,"");n.endsWith("/")&&(n=n.slice(0,-1)),this.setWalletConnectDeepLink(n,s);const d=new URL(n);return d.searchParams.set("startapp",c),d.toString()}n.endsWith("/")||(n=`${n}/`),this.setWalletConnectDeepLink(n,s);const l=encodeURIComponent(t);return`${n}wc?uri=${l}`},async wait(e){return new Promise(t=>{setTimeout(t,e)})},openHref(e,t){const s=this.isTelegram()?"_blank":t;window.open(e,s,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(m.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{const[t]=e.split("?");localStorage.setItem(m.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(m.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(m.WCM_VERSION,"2.7.0")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;const t=(e=de.state.data)==null?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},ve=typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),p=M({enabled:ve,userSessionId:"",events:[],connectedWalletId:void 0}),we={state:p,subscribe(e){return N(p.events,()=>e(be(p.events[p.events.length-1])))},initialize(){p.enabled&&typeof(crypto==null?void 0:crypto.randomUUID)<"u"&&(p.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){p.connectedWalletId=e},click(e){if(p.enabled){const t={type:"CLICK",name:e.name,userSessionId:p.userSessionId,timestamp:Date.now(),data:e};p.events.push(t)}},track(e){if(p.enabled){const t={type:"TRACK",name:e.name,userSessionId:p.userSessionId,timestamp:Date.now(),data:e};p.events.push(t)}},view(e){if(p.enabled){const t={type:"VIEW",name:e.name,userSessionId:p.userSessionId,timestamp:Date.now(),data:e};p.events.push(t)}}},W=M({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),v={state:W,subscribe(e){return N(W,()=>e(W))},setChains(e){W.chains=e},setWalletConnectUri(e){W.walletConnectUri=e},setIsCustomDesktop(e){W.isCustomDesktop=e},setIsCustomMobile(e){W.isCustomMobile=e},setIsDataLoaded(e){W.isDataLoaded=e},setIsUiLoaded(e){W.isUiLoaded=e},setIsAuth(e){W.isAuth=e}},x=M({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),U={state:x,subscribe(e){return N(x,()=>e(x))},setConfig(e){var t,s;we.initialize(),v.setChains(e.chains),v.setIsAuth(!!e.enableAuthMode),v.setIsCustomMobile(!!((t=e.mobileWallets)!=null&&t.length)),v.setIsCustomDesktop(!!((s=e.desktopWallets)!=null&&s.length)),m.setModalVersionInStorage(),Object.assign(x,e)}};var We=Object.defineProperty,se=Object.getOwnPropertySymbols,Ce=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable,ne=(e,t,s)=>t in e?We(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,_e=(e,t)=>{for(var s in t||(t={}))Ce.call(t,s)&&ne(e,s,t[s]);if(se)for(var s of se(t))Ee.call(t,s)&&ne(e,s,t[s]);return e};const K="https://explorer-api.walletconnect.com",F="wcm",H="js-2.7.0";async function B(e,t){const s=_e({sdkType:F,sdkVersion:H},t),n=new URL(e,K);return n.searchParams.append("projectId",U.state.projectId),Object.entries(s).forEach(([c,d])=>{d&&n.searchParams.append(c,String(d))}),(await fetch(n)).json()}const P={async getDesktopListings(e){return B("/w3m/v1/getDesktopListings",e)},async getMobileListings(e){return B("/w3m/v1/getMobileListings",e)},async getInjectedListings(e){return B("/w3m/v1/getInjectedListings",e)},async getAllListings(e){return B("/w3m/v1/getAllListings",e)},getWalletImageUrl(e){return`${K}/w3m/v1/getWalletImage/${e}?projectId=${U.state.projectId}&sdkType=${F}&sdkVersion=${H}`},getAssetImageUrl(e){return`${K}/w3m/v1/getAssetImage/${e}?projectId=${U.state.projectId}&sdkType=${F}&sdkVersion=${H}`}};var Oe=Object.defineProperty,oe=Object.getOwnPropertySymbols,Le=Object.prototype.hasOwnProperty,Me=Object.prototype.propertyIsEnumerable,re=(e,t,s)=>t in e?Oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Ae=(e,t)=>{for(var s in t||(t={}))Le.call(t,s)&&re(e,s,t[s]);if(oe)for(var s of oe(t))Me.call(t,s)&&re(e,s,t[s]);return e};const ie=m.isMobile(),C=M({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),ke={state:C,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=U.state;if(e==="NONE"||t==="ALL"&&!e)return C.recomendedWallets;if(m.isArray(e)){const n={recommendedIds:e.join(",")},{listings:l}=await P.getAllListings(n),c=Object.values(l);c.sort((d,f)=>{const _=e.indexOf(d.id),o=e.indexOf(f.id);return _-o}),C.recomendedWallets=c}else{const{chains:s,isAuth:n}=v.state,l=s==null?void 0:s.join(","),c=m.isArray(t),d={page:1,sdks:n?"auth_v1":void 0,entries:m.RECOMMENDED_WALLET_AMOUNT,chains:l,version:2,excludedIds:c?t.join(","):void 0},{listings:f}=ie?await P.getMobileListings(d):await P.getDesktopListings(d);C.recomendedWallets=Object.values(f)}return C.recomendedWallets},async getWallets(e){const t=Ae({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:n}=U.state,{recomendedWallets:l}=C;if(n==="ALL")return C.wallets;l.length?t.excludedIds=l.map(w=>w.id).join(","):m.isArray(s)&&(t.excludedIds=s.join(",")),m.isArray(n)&&(t.excludedIds=[t.excludedIds,n].filter(Boolean).join(",")),v.state.isAuth&&(t.sdks="auth_v1");const{page:c,search:d}=e,{listings:f,total:_}=ie?await P.getMobileListings(t):await P.getDesktopListings(t),o=Object.values(f),I=d?"search":"wallets";return C[I]={listings:[...C[I].listings,...o],total:_,page:c??1},{listings:o,total:_}},getWalletImageUrl(e){return P.getWalletImageUrl(e)},getAssetImageUrl(e){return P.getAssetImageUrl(e)},resetSearch(){C.search={listings:[],total:0,page:1}}},D=M({open:!1}),X={state:D,subscribe(e){return N(D,()=>e(D))},async open(e){return new Promise(t=>{const{isUiLoaded:s,isDataLoaded:n}=v.state;if(m.removeWalletConnectDeepLink(),v.setWalletConnectUri(e==null?void 0:e.uri),v.setChains(e==null?void 0:e.chains),de.reset("ConnectWallet"),s&&n)D.open=!0,t();else{const l=setInterval(()=>{const c=v.state;c.isUiLoaded&&c.isDataLoaded&&(clearInterval(l),D.open=!0,t())},200)}})},close(){D.open=!1}};var Pe=Object.defineProperty,ae=Object.getOwnPropertySymbols,Se=Object.prototype.hasOwnProperty,Ne=Object.prototype.propertyIsEnumerable,le=(e,t,s)=>t in e?Pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Te=(e,t)=>{for(var s in t||(t={}))Se.call(t,s)&&le(e,s,t[s]);if(ae)for(var s of ae(t))Ne.call(t,s)&&le(e,s,t[s]);return e};function je(){return typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}const k=M({themeMode:je()?"dark":"light"}),ce={state:k,subscribe(e){return N(k,()=>e(k))},setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(k.themeMode=t),s&&(k.themeVariables=Te({},s))}},S=M({open:!1,message:"",variant:"success"}),Ze={state:S,subscribe(e){return N(S,()=>e(S))},openToast(e,t){S.open=!0,S.message=e,S.variant=t},closeToast(){S.open=!1}};class De{constructor(t){this.openModal=X.open,this.closeModal=X.close,this.subscribeModal=X.subscribe,this.setTheme=ce.setThemeConfig,ce.setThemeConfig(t),U.setConfig(t),this.initUi()}async initUi(){if(typeof window<"u"){await pe(()=>import("./index-CW3D9Hs-.js"),__vite__mapDeps([0,1,2]));const t=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",t),v.setIsUiLoaded(!0)}}}const $e=Object.freeze(Object.defineProperty({__proto__:null,WalletConnectModal:De},Symbol.toStringTag,{value:"Module"}));export{m as C,ke as E,X as M,v as O,de as R,ce as T,Ze as a,we as b,U as c,$e as i};