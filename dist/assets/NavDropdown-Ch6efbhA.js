import{r as h,b as no,c as ro,$ as tt,j as R}from"./index-D6tVopA3.js";import{P as I,u as ct,w as ao,o as oo,l as re,i as Ir,a as io,j as so,d as at,c as ot,A as Tr,h as Mr,B as lo,e as co,k as fo,b as uo}from"./warning-D09d6w1x.js";const po=(t,e,n,r)=>{var o,i,s,f;const a=[n,{code:e,...r||{}}];if((i=(o=t==null?void 0:t.services)==null?void 0:o.logger)!=null&&i.forward)return t.services.logger.forward(a,"warn","react-i18next::",!0);yt(a[0])&&(a[0]=`react-i18next:: ${a[0]}`),(f=(s=t==null?void 0:t.services)==null?void 0:s.logger)!=null&&f.warn?t.services.logger.warn(...a):console!=null&&console.warn&&console.warn(...a)},Rn={},Re=(t,e,n,r)=>{yt(n)&&Rn[n]||(yt(n)&&(Rn[n]=new Date),po(t,e,n,r))},Dr=(t,e)=>()=>{if(t.isInitialized)e();else{const n=()=>{setTimeout(()=>{t.off("initialized",n)},0),e()};t.on("initialized",n)}},$e=(t,e,n)=>{t.loadNamespaces(e,Dr(t,n))},$n=(t,e,n,r)=>{if(yt(n)&&(n=[n]),t.options.preload&&t.options.preload.indexOf(e)>-1)return $e(t,n,r);n.forEach(a=>{t.options.ns.indexOf(a)<0&&t.options.ns.push(a)}),t.loadLanguages(e,Dr(t,r))},mo=(t,e,n={})=>!e.languages||!e.languages.length?(Re(e,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:e.languages}),!0):e.hasLoadedNamespace(t,{lng:n.lng,precheck:(r,a)=>{var o;if(((o=n.bindI18n)==null?void 0:o.indexOf("languageChanging"))>-1&&r.services.backendConnector.backend&&r.isLanguageChangingTo&&!a(r.isLanguageChangingTo,t))return!1}}),yt=t=>typeof t=="string",go=t=>typeof t=="object"&&t!==null,ho=h.createContext();class vo{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const bo=(t,e)=>{const n=h.useRef();return h.useEffect(()=>{n.current=t},[t,e]),n.current},jr=(t,e,n,r)=>t.getFixedT(e,n,r),yo=(t,e,n,r)=>h.useCallback(jr(t,e,n,r),[t,e,n,r]),Nc=(t,e={})=>{var A,O,k,E;const{i18n:n}=e,{i18n:r,defaultNS:a}=h.useContext(ho)||{},o=n||r||no();if(o&&!o.reportNamespaces&&(o.reportNamespaces=new vo),!o){Re(o,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const P=(T,S)=>yt(S)?S:go(S)&&yt(S.defaultValue)?S.defaultValue:Array.isArray(T)?T[T.length-1]:T,N=[P,{},!1];return N.t=P,N.i18n={},N.ready=!1,N}(A=o.options.react)!=null&&A.wait&&Re(o,"DEPRECATED_OPTION","useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const i={...ro(),...o.options.react,...e},{useSuspense:s,keyPrefix:f}=i;let l=t||a||((O=o.options)==null?void 0:O.defaultNS);l=yt(l)?[l]:l||["translation"],(E=(k=o.reportNamespaces).addUsedNamespaces)==null||E.call(k,l);const c=(o.isInitialized||o.initializedStoreOnce)&&l.every(P=>mo(P,o,i)),u=yo(o,e.lng||null,i.nsMode==="fallback"?l:l[0],f),d=()=>u,m=()=>jr(o,e.lng||null,i.nsMode==="fallback"?l:l[0],f),[v,y]=h.useState(d);let g=l.join();e.lng&&(g=`${e.lng}${g}`);const w=bo(g),b=h.useRef(!0);h.useEffect(()=>{const{bindI18n:P,bindI18nStore:N}=i;b.current=!0,!c&&!s&&(e.lng?$n(o,e.lng,l,()=>{b.current&&y(m)}):$e(o,l,()=>{b.current&&y(m)})),c&&w&&w!==g&&b.current&&y(m);const T=()=>{b.current&&y(m)};return P&&(o==null||o.on(P,T)),N&&(o==null||o.store.on(N,T)),()=>{b.current=!1,o&&(P==null||P.split(" ").forEach(S=>o.off(S,T))),N&&o&&N.split(" ").forEach(S=>o.store.off(S,T))}},[o,g]),h.useEffect(()=>{b.current&&c&&y(d)},[o,f,c]);const x=[v,o,c];if(x.t=v,x.i18n=o,x.ready=c,c||!c&&!s)return x;throw new Promise(P=>{e.lng?$n(o,e.lng,l,()=>P()):$e(o,l,()=>P())})};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function xo(t,e,n){return(e=Oo(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ln(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ln(Object(n),!0).forEach(function(r){xo(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ln(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function wo(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Oo(t){var e=wo(t,"string");return typeof e=="symbol"?e:e+""}const Fn=()=>{};let an={},Rr={},$r=null,Lr={mark:Fn,measure:Fn};try{typeof window<"u"&&(an=window),typeof document<"u"&&(Rr=document),typeof MutationObserver<"u"&&($r=MutationObserver),typeof performance<"u"&&(Lr=performance)}catch{}const{userAgent:zn=""}=an.navigator||{},ft=an,j=Rr,_n=$r,ae=Lr;ft.document;const it=!!j.documentElement&&!!j.head&&typeof j.addEventListener=="function"&&typeof j.createElement=="function",Fr=~zn.indexOf("MSIE")||~zn.indexOf("Trident/");var Ao=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Co=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,zr={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Po={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},_r=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],z="classic",he="duotone",So="sharp",Eo="sharp-duotone",Wr=[z,he,So,Eo],ko={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},No={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Io=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),To={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Mo=["fak","fa-kit","fakd","fa-kit-duotone"],Wn={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Do=["kit"],jo={kit:{"fa-kit":"fak"}},Ro=["fak","fakd"],$o={kit:{fak:"fa-kit"}},Bn={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},oe={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Lo=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Fo=["fak","fa-kit","fakd","fa-kit-duotone"],zo={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},_o={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Wo={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Le={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Bo=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Fe=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Lo,...Bo],Uo=["solid","regular","light","thin","duotone","brands"],Br=[1,2,3,4,5,6,7,8,9,10],Ho=Br.concat([11,12,13,14,15,16,17,18,19,20]),Yo=[...Object.keys(Wo),...Uo,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",oe.GROUP,oe.SWAP_OPACITY,oe.PRIMARY,oe.SECONDARY].concat(Br.map(t=>"".concat(t,"x"))).concat(Ho.map(t=>"w-".concat(t))),Vo={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const et="___FONT_AWESOME___",ze=16,Ur="fa",Hr="svg-inline--fa",wt="data-fa-i2svg",_e="data-fa-pseudo-element",Xo="data-fa-pseudo-element-pending",on="data-prefix",sn="data-icon",Un="fontawesome-i2svg",Go="async",qo=["HTML","HEAD","STYLE","SCRIPT"],Yr=(()=>{try{return!0}catch{return!1}})();function qt(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[z]}})}const Vr=p({},zr);Vr[z]=p(p(p(p({},{"fa-duotone":"duotone"}),zr[z]),Wn.kit),Wn["kit-duotone"]);const Ko=qt(Vr),We=p({},To);We[z]=p(p(p(p({},{duotone:"fad"}),We[z]),Bn.kit),Bn["kit-duotone"]);const Hn=qt(We),Be=p({},Le);Be[z]=p(p({},Be[z]),$o.kit);const ln=qt(Be),Ue=p({},_o);Ue[z]=p(p({},Ue[z]),jo.kit);qt(Ue);const Jo=Ao,Xr="fa-layers-text",Qo=Co,Zo=p({},ko);qt(Zo);const ti=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ee=Po,ei=[...Do,...Yo],_t=ft.FontAwesomeConfig||{};function ni(t){var e=j.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function ri(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}j&&typeof j.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const a=ri(ni(n));a!=null&&(_t[r]=a)});const Gr={styleDefault:"solid",familyDefault:z,cssPrefix:Ur,replacementClass:Hr,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};_t.familyPrefix&&(_t.cssPrefix=_t.familyPrefix);const Nt=p(p({},Gr),_t);Nt.autoReplaceSvg||(Nt.observeMutations=!1);const C={};Object.keys(Gr).forEach(t=>{Object.defineProperty(C,t,{enumerable:!0,set:function(e){Nt[t]=e,Wt.forEach(n=>n(C))},get:function(){return Nt[t]}})});Object.defineProperty(C,"familyPrefix",{enumerable:!0,set:function(t){Nt.cssPrefix=t,Wt.forEach(e=>e(C))},get:function(){return Nt.cssPrefix}});ft.FontAwesomeConfig=C;const Wt=[];function ai(t){return Wt.push(t),()=>{Wt.splice(Wt.indexOf(t),1)}}const lt=ze,K={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function oi(t){if(!t||!it)return;const e=j.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=j.head.childNodes;let r=null;for(let a=n.length-1;a>-1;a--){const o=n[a],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=o)}return j.head.insertBefore(e,r),t}const ii="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Yt(){let t=12,e="";for(;t-- >0;)e+=ii[Math.random()*62|0];return e}function jt(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function cn(t){return t.classList?jt(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function qr(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function si(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(qr(t[n]),'" '),"").trim()}function ve(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function fn(t){return t.size!==K.size||t.x!==K.x||t.y!==K.y||t.rotate!==K.rotate||t.flipX||t.flipY}function li(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const a={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(o," ").concat(i," ").concat(s)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:f,path:l}}function ci(t){let{transform:e,width:n=ze,height:r=ze,startCentered:a=!1}=t,o="";return a&&Fr?o+="translate(".concat(e.x/lt-n/2,"em, ").concat(e.y/lt-r/2,"em) "):a?o+="translate(calc(-50% + ".concat(e.x/lt,"em), calc(-50% + ").concat(e.y/lt,"em)) "):o+="translate(".concat(e.x/lt,"em, ").concat(e.y/lt,"em) "),o+="scale(".concat(e.size/lt*(e.flipX?-1:1),", ").concat(e.size/lt*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var fi=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function Kr(){const t=Ur,e=Hr,n=C.cssPrefix,r=C.replacementClass;let a=fi;if(n!==t||r!==e){const o=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");a=a.replace(o,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(s,".".concat(r))}return a}let Yn=!1;function ke(){C.autoAddCss&&!Yn&&(oi(Kr()),Yn=!0)}var ui={mixout(){return{dom:{css:Kr,insertCss:ke}}},hooks(){return{beforeDOMElementCreation(){ke()},beforeI2svg(){ke()}}}};const nt=ft||{};nt[et]||(nt[et]={});nt[et].styles||(nt[et].styles={});nt[et].hooks||(nt[et].hooks={});nt[et].shims||(nt[et].shims=[]);var J=nt[et];const Jr=[],Qr=function(){j.removeEventListener("DOMContentLoaded",Qr),fe=1,Jr.map(t=>t())};let fe=!1;it&&(fe=(j.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(j.readyState),fe||j.addEventListener("DOMContentLoaded",Qr));function di(t){it&&(fe?setTimeout(t,0):Jr.push(t))}function Kt(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?qr(t):"<".concat(e," ").concat(si(n),">").concat(r.map(Kt).join(""),"</").concat(e,">")}function Vn(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Ne=function(e,n,r,a){var o=Object.keys(e),i=o.length,s=n,f,l,c;for(r===void 0?(f=1,c=e[o[0]]):(f=0,c=r);f<i;f++)l=o[f],c=s(c,e[l],l,e);return c};function pi(t){const e=[];let n=0;const r=t.length;for(;n<r;){const a=t.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){const o=t.charCodeAt(n++);(o&64512)==56320?e.push(((a&1023)<<10)+(o&1023)+65536):(e.push(a),n--)}else e.push(a)}return e}function He(t){const e=pi(t);return e.length===1?e[0].toString(16):null}function mi(t,e){const n=t.length;let r=t.charCodeAt(e),a;return r>=55296&&r<=56319&&n>e+1&&(a=t.charCodeAt(e+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Xn(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function Ye(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,a=Xn(e);typeof J.hooks.addPack=="function"&&!r?J.hooks.addPack(t,Xn(e)):J.styles[t]=p(p({},J.styles[t]||{}),a),t==="fas"&&Ye("fa",e)}const{styles:Vt,shims:gi}=J,Zr=Object.keys(ln),hi=Zr.reduce((t,e)=>(t[e]=Object.keys(ln[e]),t),{});let un=null,ta={},ea={},na={},ra={},aa={};function vi(t){return~ei.indexOf(t)}function bi(t,e){const n=e.split("-"),r=n[0],a=n.slice(1).join("-");return r===t&&a!==""&&!vi(a)?a:null}const oa=()=>{const t=r=>Ne(Vt,(a,o,i)=>(a[i]=Ne(o,r,{}),a),{});ta=t((r,a,o)=>(a[3]&&(r[a[3]]=o),a[2]&&a[2].filter(s=>typeof s=="number").forEach(s=>{r[s.toString(16)]=o}),r)),ea=t((r,a,o)=>(r[o]=o,a[2]&&a[2].filter(s=>typeof s=="string").forEach(s=>{r[s]=o}),r)),aa=t((r,a,o)=>{const i=a[2];return r[o]=o,i.forEach(s=>{r[s]=o}),r});const e="far"in Vt||C.autoFetchSvg,n=Ne(gi,(r,a)=>{const o=a[0];let i=a[1];const s=a[2];return i==="far"&&!e&&(i="fas"),typeof o=="string"&&(r.names[o]={prefix:i,iconName:s}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:i,iconName:s}),r},{names:{},unicodes:{}});na=n.names,ra=n.unicodes,un=be(C.styleDefault,{family:C.familyDefault})};ai(t=>{un=be(t.styleDefault,{family:C.familyDefault})});oa();function dn(t,e){return(ta[t]||{})[e]}function yi(t,e){return(ea[t]||{})[e]}function vt(t,e){return(aa[t]||{})[e]}function ia(t){return na[t]||{prefix:null,iconName:null}}function xi(t){const e=ra[t],n=dn("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ut(){return un}const sa=()=>({prefix:null,iconName:null,rest:[]});function wi(t){let e=z;const n=Zr.reduce((r,a)=>(r[a]="".concat(C.cssPrefix,"-").concat(a),r),{});return Wr.forEach(r=>{(t.includes(n[r])||t.some(a=>hi[r].includes(a)))&&(e=r)}),e}function be(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=z}=e,r=Ko[n][t];if(n===he&&!t)return"fad";const a=Hn[n][t]||Hn[n][r],o=t in J.styles?t:null;return a||o||null}function Oi(t){let e=[],n=null;return t.forEach(r=>{const a=bi(C.cssPrefix,r);a?n=a:r&&e.push(r)}),{iconName:n,rest:e}}function Gn(t){return t.sort().filter((e,n,r)=>r.indexOf(e)===n)}function ye(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let r=null;const a=Fe.concat(Fo),o=Gn(t.filter(u=>a.includes(u))),i=Gn(t.filter(u=>!Fe.includes(u))),s=o.filter(u=>(r=u,!_r.includes(u))),[f=null]=s,l=wi(o),c=p(p({},Oi(i)),{},{prefix:be(f,{family:l})});return p(p(p({},c),Si({values:t,family:l,styles:Vt,config:C,canonical:c,givenPrefix:r})),Ai(n,r,c))}function Ai(t,e,n){let{prefix:r,iconName:a}=n;if(t||!r||!a)return{prefix:r,iconName:a};const o=e==="fa"?ia(a):{},i=vt(r,a);return a=o.iconName||i||a,r=o.prefix||r,r==="far"&&!Vt.far&&Vt.fas&&!C.autoFetchSvg&&(r="fas"),{prefix:r,iconName:a}}const Ci=Wr.filter(t=>t!==z||t!==he),Pi=Object.keys(Le).filter(t=>t!==z).map(t=>Object.keys(Le[t])).flat();function Si(t){const{values:e,family:n,canonical:r,givenPrefix:a="",styles:o={},config:i={}}=t,s=n===he,f=e.includes("fa-duotone")||e.includes("fad"),l=i.familyDefault==="duotone",c=r.prefix==="fad"||r.prefix==="fa-duotone";if(!s&&(f||l||c)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&Ci.includes(n)&&(Object.keys(o).find(d=>Pi.includes(d))||i.autoFetchSvg)){const d=Io.get(n).defaultShortPrefixId;r.prefix=d,r.iconName=vt(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||a==="fa")&&(r.prefix=ut()||"fas"),r}class Ei{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const a=n.reduce(this._pullDefinitions,{});Object.keys(a).forEach(o=>{this.definitions[o]=p(p({},this.definitions[o]||{}),a[o]),Ye(o,a[o]);const i=ln[z][o];i&&Ye(i,a[o]),oa()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(a=>{const{prefix:o,iconName:i,icon:s}=r[a],f=s[2];e[o]||(e[o]={}),f.length>0&&f.forEach(l=>{typeof l=="string"&&(e[o][l]=s)}),e[o][i]=s}),e}}let qn=[],St={};const kt={},ki=Object.keys(kt);function Ni(t,e){let{mixoutsTo:n}=e;return qn=t,St={},Object.keys(kt).forEach(r=>{ki.indexOf(r)===-1&&delete kt[r]}),qn.forEach(r=>{const a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(o=>{typeof a[o]=="function"&&(n[o]=a[o]),typeof a[o]=="object"&&Object.keys(a[o]).forEach(i=>{n[o]||(n[o]={}),n[o][i]=a[o][i]})}),r.hooks){const o=r.hooks();Object.keys(o).forEach(i=>{St[i]||(St[i]=[]),St[i].push(o[i])})}r.provides&&r.provides(kt)}),n}function Ve(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return(St[t]||[]).forEach(i=>{e=i.apply(null,[e,...r])}),e}function Ot(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(St[t]||[]).forEach(o=>{o.apply(null,n)})}function dt(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return kt[t]?kt[t].apply(null,e):void 0}function Xe(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||ut();if(e)return e=vt(n,e)||e,Vn(la.definitions,n,e)||Vn(J.styles,n,e)}const la=new Ei,Ii=()=>{C.autoReplaceSvg=!1,C.observeMutations=!1,Ot("noAuto")},Ti={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return it?(Ot("beforeI2svg",t),dt("pseudoElements2svg",t),dt("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;C.autoReplaceSvg===!1&&(C.autoReplaceSvg=!0),C.observeMutations=!0,di(()=>{Di({autoReplaceSvgRoot:e}),Ot("watch",t)})}},Mi={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:vt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=be(t[0]);return{prefix:n,iconName:vt(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(C.cssPrefix,"-"))>-1||t.match(Jo))){const e=ye(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||ut(),iconName:vt(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=ut();return{prefix:e,iconName:vt(e,t)||t}}}},Y={noAuto:Ii,config:C,dom:Ti,parse:Mi,library:la,findIconDefinition:Xe,toHtml:Kt},Di=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=j}=t;(Object.keys(J.styles).length>0||C.autoFetchSvg)&&it&&C.autoReplaceSvg&&Y.dom.i2svg({node:e})};function xe(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Kt(n))}}),Object.defineProperty(t,"node",{get:function(){if(!it)return;const n=j.createElement("div");return n.innerHTML=t.html,n.children}}),t}function ji(t){let{children:e,main:n,mask:r,attributes:a,styles:o,transform:i}=t;if(fn(i)&&n.found&&!r.found){const{width:s,height:f}=n,l={x:s/f/2,y:.5};a.style=ve(p(p({},o),{},{"transform-origin":"".concat(l.x+i.x/16,"em ").concat(l.y+i.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function Ri(t){let{prefix:e,iconName:n,children:r,attributes:a,symbol:o}=t;const i=o===!0?"".concat(e,"-").concat(C.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:p(p({},a),{},{id:i}),children:r}]}]}function pn(t){const{icons:{main:e,mask:n},prefix:r,iconName:a,transform:o,symbol:i,title:s,maskId:f,titleId:l,extra:c,watchable:u=!1}=t,{width:d,height:m}=n.found?n:e,v=Ro.includes(r),y=[C.replacementClass,a?"".concat(C.cssPrefix,"-").concat(a):""].filter(O=>c.classes.indexOf(O)===-1).filter(O=>O!==""||!!O).concat(c.classes).join(" ");let g={children:[],attributes:p(p({},c.attributes),{},{"data-prefix":r,"data-icon":a,class:y,role:c.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(m)})};const w=v&&!~c.classes.indexOf("fa-fw")?{width:"".concat(d/m*16*.0625,"em")}:{};u&&(g.attributes[wt]=""),s&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(l||Yt())},children:[s]}),delete g.attributes.title);const b=p(p({},g),{},{prefix:r,iconName:a,main:e,mask:n,maskId:f,transform:o,symbol:i,styles:p(p({},w),c.styles)}),{children:x,attributes:A}=n.found&&e.found?dt("generateAbstractMask",b)||{children:[],attributes:{}}:dt("generateAbstractIcon",b)||{children:[],attributes:{}};return b.children=x,b.attributes=A,i?Ri(b):ji(b)}function Kn(t){const{content:e,width:n,height:r,transform:a,title:o,extra:i,watchable:s=!1}=t,f=p(p(p({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});s&&(f[wt]="");const l=p({},i.styles);fn(a)&&(l.transform=ci({transform:a,startCentered:!0,width:n,height:r}),l["-webkit-transform"]=l.transform);const c=ve(l);c.length>0&&(f.style=c);const u=[];return u.push({tag:"span",attributes:f,children:[e]}),o&&u.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),u}function $i(t){const{content:e,title:n,extra:r}=t,a=p(p(p({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=ve(r.styles);o.length>0&&(a.style=o);const i=[];return i.push({tag:"span",attributes:a,children:[e]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}const{styles:Ie}=J;function Ge(t){const e=t[0],n=t[1],[r]=t.slice(4);let a=null;return Array.isArray(r)?a={tag:"g",attributes:{class:"".concat(C.cssPrefix,"-").concat(Ee.GROUP)},children:[{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(Ee.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(Ee.PRIMARY),fill:"currentColor",d:r[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:a}}const Li={found:!1,width:512,height:512};function Fi(t,e){!Yr&&!C.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function qe(t,e){let n=e;return e==="fa"&&C.styleDefault!==null&&(e=ut()),new Promise((r,a)=>{if(n==="fa"){const o=ia(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&Ie[e]&&Ie[e][t]){const o=Ie[e][t];return r(Ge(o))}Fi(t,e),r(p(p({},Li),{},{icon:C.showMissingIcons&&t?dt("missingIconAbstract")||{}:{}}))})}const Jn=()=>{},Ke=C.measurePerformance&&ae&&ae.mark&&ae.measure?ae:{mark:Jn,measure:Jn},zt='FA "6.7.2"',zi=t=>(Ke.mark("".concat(zt," ").concat(t," begins")),()=>ca(t)),ca=t=>{Ke.mark("".concat(zt," ").concat(t," ends")),Ke.measure("".concat(zt," ").concat(t),"".concat(zt," ").concat(t," begins"),"".concat(zt," ").concat(t," ends"))};var mn={begin:zi,end:ca};const se=()=>{};function Qn(t){return typeof(t.getAttribute?t.getAttribute(wt):null)=="string"}function _i(t){const e=t.getAttribute?t.getAttribute(on):null,n=t.getAttribute?t.getAttribute(sn):null;return e&&n}function Wi(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(C.replacementClass)}function Bi(){return C.autoReplaceSvg===!0?le.replace:le[C.autoReplaceSvg]||le.replace}function Ui(t){return j.createElementNS("http://www.w3.org/2000/svg",t)}function Hi(t){return j.createElement(t)}function fa(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?Ui:Hi}=e;if(typeof t=="string")return j.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])}),(t.children||[]).forEach(function(o){r.appendChild(fa(o,{ceFn:n}))}),r}function Yi(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const le={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(fa(n),e)}),e.getAttribute(wt)===null&&C.keepOriginalSource){let n=j.createComment(Yi(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~cn(e).indexOf(C.replacementClass))return le.replace(t);const r=new RegExp("".concat(C.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((i,s)=>(s===C.replacementClass||s.match(r)?i.toSvg.push(s):i.toNode.push(s),i),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",o.toNode.join(" "))}const a=n.map(o=>Kt(o)).join(`
`);e.setAttribute(wt,""),e.innerHTML=a}};function Zn(t){t()}function ua(t,e){const n=typeof e=="function"?e:se;if(t.length===0)n();else{let r=Zn;C.mutateApproach===Go&&(r=ft.requestAnimationFrame||Zn),r(()=>{const a=Bi(),o=mn.begin("mutate");t.map(a),o(),n()})}}let gn=!1;function da(){gn=!0}function Je(){gn=!1}let ue=null;function tr(t){if(!_n||!C.observeMutations)return;const{treeCallback:e=se,nodeCallback:n=se,pseudoElementsCallback:r=se,observeMutationsRoot:a=j}=t;ue=new _n(o=>{if(gn)return;const i=ut();jt(o).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!Qn(s.addedNodes[0])&&(C.searchPseudoElements&&r(s.target),e(s.target)),s.type==="attributes"&&s.target.parentNode&&C.searchPseudoElements&&r(s.target.parentNode),s.type==="attributes"&&Qn(s.target)&&~ti.indexOf(s.attributeName))if(s.attributeName==="class"&&_i(s.target)){const{prefix:f,iconName:l}=ye(cn(s.target));s.target.setAttribute(on,f||i),l&&s.target.setAttribute(sn,l)}else Wi(s.target)&&n(s.target)})}),it&&ue.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Vi(){ue&&ue.disconnect()}function Xi(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,a)=>{const o=a.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(r[i]=s.join(":").trim()),r},{})),n}function Gi(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let a=ye(cn(t));return a.prefix||(a.prefix=ut()),e&&n&&(a.prefix=e,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=yi(a.prefix,t.innerText)||dn(a.prefix,He(t.innerText))),!a.iconName&&C.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=t.firstChild.data)),a}function qi(t){const e=jt(t.attributes).reduce((a,o)=>(a.name!=="class"&&a.name!=="style"&&(a[o.name]=o.value),a),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return C.autoA11y&&(n?e["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(r||Yt()):(e["aria-hidden"]="true",e.focusable="false")),e}function Ki(){return{iconName:null,title:null,titleId:null,prefix:null,transform:K,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function er(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:a}=Gi(t),o=qi(t),i=Ve("parseNodeAttributes",{},t);let s=e.styleParser?Xi(t):[];return p({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:K,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:s,attributes:o}},i)}const{styles:Ji}=J;function pa(t){const e=C.autoReplaceSvg==="nest"?er(t,{styleParser:!1}):er(t);return~e.extra.classes.indexOf(Xr)?dt("generateLayersText",t,e):dt("generateSvgReplacementMutation",t,e)}function Qi(){return[...Mo,...Fe]}function nr(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!it)return Promise.resolve();const n=j.documentElement.classList,r=c=>n.add("".concat(Un,"-").concat(c)),a=c=>n.remove("".concat(Un,"-").concat(c)),o=C.autoFetchSvg?Qi():_r.concat(Object.keys(Ji));o.includes("fa")||o.push("fa");const i=[".".concat(Xr,":not([").concat(wt,"])")].concat(o.map(c=>".".concat(c,":not([").concat(wt,"])"))).join(", ");if(i.length===0)return Promise.resolve();let s=[];try{s=jt(t.querySelectorAll(i))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();const f=mn.begin("onTree"),l=s.reduce((c,u)=>{try{const d=pa(u);d&&c.push(d)}catch(d){Yr||d.name==="MissingIcon"&&console.error(d)}return c},[]);return new Promise((c,u)=>{Promise.all(l).then(d=>{ua(d,()=>{r("active"),r("complete"),a("pending"),typeof e=="function"&&e(),f(),c()})}).catch(d=>{f(),u(d)})})}function Zi(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;pa(t).then(n=>{n&&ua([n],e)})}function ts(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:Xe(e||{});let{mask:a}=n;return a&&(a=(a||{}).icon?a:Xe(a||{})),t(r,p(p({},n),{},{mask:a}))}}const es=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=K,symbol:r=!1,mask:a=null,maskId:o=null,title:i=null,titleId:s=null,classes:f=[],attributes:l={},styles:c={}}=e;if(!t)return;const{prefix:u,iconName:d,icon:m}=t;return xe(p({type:"icon"},t),()=>(Ot("beforeDOMElementCreation",{iconDefinition:t,params:e}),C.autoA11y&&(i?l["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(s||Yt()):(l["aria-hidden"]="true",l.focusable="false")),pn({icons:{main:Ge(m),mask:a?Ge(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:u,iconName:d,transform:p(p({},K),n),symbol:r,title:i,maskId:o,titleId:s,extra:{attributes:l,styles:c,classes:f}})))};var ns={mixout(){return{icon:ts(es)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=nr,t.nodeCallback=Zi,t}}},provides(t){t.i2svg=function(e){const{node:n=j,callback:r=()=>{}}=e;return nr(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:a,titleId:o,prefix:i,transform:s,symbol:f,mask:l,maskId:c,extra:u}=n;return new Promise((d,m)=>{Promise.all([qe(r,i),l.iconName?qe(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(v=>{let[y,g]=v;d([e,pn({icons:{main:y,mask:g},prefix:i,iconName:r,transform:s,symbol:f,maskId:c,title:a,titleId:o,extra:u,watchable:!0})])}).catch(m)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:a,transform:o,styles:i}=e;const s=ve(i);s.length>0&&(r.style=s);let f;return fn(o)&&(f=dt("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),n.push(f||a.icon),{children:n,attributes:r}}}},rs={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return xe({type:"layer"},()=>{Ot("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(a=>{Array.isArray(a)?a.map(o=>{r=r.concat(o.abstract)}):r=r.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(C.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},as={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:a={},styles:o={}}=e;return xe({type:"counter",content:t},()=>(Ot("beforeDOMElementCreation",{content:t,params:e}),$i({content:t.toString(),title:n,extra:{attributes:a,styles:o,classes:["".concat(C.cssPrefix,"-layers-counter"),...r]}})))}}}},os={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=K,title:r=null,classes:a=[],attributes:o={},styles:i={}}=e;return xe({type:"text",content:t},()=>(Ot("beforeDOMElementCreation",{content:t,params:e}),Kn({content:t,transform:p(p({},K),n),title:r,extra:{attributes:o,styles:i,classes:["".concat(C.cssPrefix,"-layers-text"),...a]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:a,extra:o}=n;let i=null,s=null;if(Fr){const f=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();i=l.width/f,s=l.height/f}return C.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,Kn({content:e.innerHTML,width:i,height:s,transform:a,title:r,extra:o,watchable:!0})])}}};const is=new RegExp('"',"ug"),rr=[1105920,1112319],ar=p(p(p(p({},{FontAwesome:{normal:"fas",400:"fas"}}),No),Vo),zo),Qe=Object.keys(ar).reduce((t,e)=>(t[e.toLowerCase()]=ar[e],t),{}),ss=Object.keys(Qe).reduce((t,e)=>{const n=Qe[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function ls(t){const e=t.replace(is,""),n=mi(e,0),r=n>=rr[0]&&n<=rr[1],a=e.length===2?e[0]===e[1]:!1;return{value:He(a?e[0]:e),isSecondary:r||a}}function cs(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),a=isNaN(r)?"normal":r;return(Qe[n]||{})[a]||ss[n]}function or(t,e){const n="".concat(Xo).concat(e.replace(":","-"));return new Promise((r,a)=>{if(t.getAttribute(n)!==null)return r();const i=jt(t.children).filter(d=>d.getAttribute(_e)===e)[0],s=ft.getComputedStyle(t,e),f=s.getPropertyValue("font-family"),l=f.match(Qo),c=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(i&&!l)return t.removeChild(i),r();if(l&&u!=="none"&&u!==""){const d=s.getPropertyValue("content");let m=cs(f,c);const{value:v,isSecondary:y}=ls(d),g=l[0].startsWith("FontAwesome");let w=dn(m,v),b=w;if(g){const x=xi(v);x.iconName&&x.prefix&&(w=x.iconName,m=x.prefix)}if(w&&!y&&(!i||i.getAttribute(on)!==m||i.getAttribute(sn)!==b)){t.setAttribute(n,b),i&&t.removeChild(i);const x=Ki(),{extra:A}=x;A.attributes[_e]=e,qe(w,m).then(O=>{const k=pn(p(p({},x),{},{icons:{main:O,mask:sa()},prefix:m,iconName:b,extra:A,watchable:!0})),E=j.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(E,t.firstChild):t.appendChild(E),E.outerHTML=k.map(P=>Kt(P)).join(`
`),t.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function fs(t){return Promise.all([or(t,"::before"),or(t,"::after")])}function us(t){return t.parentNode!==document.head&&!~qo.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(_e)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function ir(t){if(it)return new Promise((e,n)=>{const r=jt(t.querySelectorAll("*")).filter(us).map(fs),a=mn.begin("searchPseudoElements");da(),Promise.all(r).then(()=>{a(),Je(),e()}).catch(()=>{a(),Je(),n()})})}var ds={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=ir,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=j}=e;C.searchPseudoElements&&ir(n)}}};let sr=!1;var ps={mixout(){return{dom:{unwatch(){da(),sr=!0}}}},hooks(){return{bootstrap(){tr(Ve("mutationObserverCallbacks",{}))},noAuto(){Vi()},watch(t){const{observeMutationsRoot:e}=t;sr?Je():tr(Ve("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const lr=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const a=r.toLowerCase().split("-"),o=a[0];let i=a.slice(1).join("-");if(o&&i==="h")return n.flipX=!0,n;if(o&&i==="v")return n.flipY=!0,n;if(i=parseFloat(i),isNaN(i))return n;switch(o){case"grow":n.size=n.size+i;break;case"shrink":n.size=n.size-i;break;case"left":n.x=n.x-i;break;case"right":n.x=n.x+i;break;case"up":n.y=n.y-i;break;case"down":n.y=n.y+i;break;case"rotate":n.rotate=n.rotate+i;break}return n},e)};var ms={mixout(){return{parse:{transform:t=>lr(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=lr(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:a,iconWidth:o}=e;const i={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(r.x*32,", ").concat(r.y*32,") "),f="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),c={transform:"".concat(s," ").concat(f," ").concat(l)},u={transform:"translate(".concat(o/2*-1," -256)")},d={outer:i,inner:c,path:u};return{tag:"g",attributes:p({},d.outer),children:[{tag:"g",attributes:p({},d.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:p(p({},n.icon.attributes),d.path)}]}]}}}};const Te={x:0,y:0,width:"100%",height:"100%"};function cr(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function gs(t){return t.tag==="g"?t.children:[t]}var hs={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?ye(n.split(" ").map(a=>a.trim())):sa();return r.prefix||(r.prefix=ut()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:a,mask:o,maskId:i,transform:s}=e;const{width:f,icon:l}=a,{width:c,icon:u}=o,d=li({transform:s,containerWidth:c,iconWidth:f}),m={tag:"rect",attributes:p(p({},Te),{},{fill:"white"})},v=l.children?{children:l.children.map(cr)}:{},y={tag:"g",attributes:p({},d.inner),children:[cr(p({tag:l.tag,attributes:p(p({},l.attributes),d.path)},v))]},g={tag:"g",attributes:p({},d.outer),children:[y]},w="mask-".concat(i||Yt()),b="clip-".concat(i||Yt()),x={tag:"mask",attributes:p(p({},Te),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[m,g]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:gs(u)},x]};return n.push(A,{tag:"rect",attributes:p({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(w,")")},Te)}),{children:n,attributes:r}}}},vs={provides(t){let e=!1;ft.matchMedia&&(e=ft.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:p(p({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const o=p(p({},a),{},{attributeName:"opacity"}),i={tag:"circle",attributes:p(p({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||i.children.push({tag:"animate",attributes:p(p({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:p(p({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(i),n.push({tag:"path",attributes:p(p({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:p(p({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:p(p({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:p(p({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},bs={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},ys=[ui,ns,rs,as,os,ds,ps,ms,hs,vs,bs];Ni(ys,{mixoutsTo:Y});Y.noAuto;Y.config;Y.library;Y.dom;const Ze=Y.parse;Y.findIconDefinition;Y.toHtml;const xs=Y.icon;Y.layer;Y.text;Y.counter;function fr(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function q(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?fr(Object(n),!0).forEach(function(r){Et(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):fr(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function de(t){"@babel/helpers - typeof";return de=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},de(t)}function Et(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ws(t,e){if(t==null)return{};var n={},r=Object.keys(t),a,o;for(o=0;o<r.length;o++)a=r[o],!(e.indexOf(a)>=0)&&(n[a]=t[a]);return n}function Os(t,e){if(t==null)return{};var n=ws(t,e),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function tn(t){return As(t)||Cs(t)||Ps(t)||Ss()}function As(t){if(Array.isArray(t))return en(t)}function Cs(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ps(t,e){if(t){if(typeof t=="string")return en(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return en(t,e)}}function en(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Ss(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Es(t){var e,n=t.beat,r=t.fade,a=t.beatFade,o=t.bounce,i=t.shake,s=t.flash,f=t.spin,l=t.spinPulse,c=t.spinReverse,u=t.pulse,d=t.fixedWidth,m=t.inverse,v=t.border,y=t.listItem,g=t.flip,w=t.size,b=t.rotation,x=t.pull,A=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":o,"fa-shake":i,"fa-flash":s,"fa-spin":f,"fa-spin-reverse":c,"fa-spin-pulse":l,"fa-pulse":u,"fa-fw":d,"fa-inverse":m,"fa-border":v,"fa-li":y,"fa-flip":g===!0,"fa-flip-horizontal":g==="horizontal"||g==="both","fa-flip-vertical":g==="vertical"||g==="both"},Et(e,"fa-".concat(w),typeof w<"u"&&w!==null),Et(e,"fa-rotate-".concat(b),typeof b<"u"&&b!==null&&b!==0),Et(e,"fa-pull-".concat(x),typeof x<"u"&&x!==null),Et(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(A).map(function(O){return A[O]?O:null}).filter(function(O){return O})}function ks(t){return t=t-0,t===t}function ma(t){return ks(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Ns=["style"];function Is(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Ts(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),a=ma(n.slice(0,r)),o=n.slice(r+1).trim();return a.startsWith("webkit")?e[Is(a)]=o:e[a]=o,e},{})}function ga(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(f){return ga(t,f)}),a=Object.keys(e.attributes||{}).reduce(function(f,l){var c=e.attributes[l];switch(l){case"class":f.attrs.className=c,delete e.attributes.class;break;case"style":f.attrs.style=Ts(c);break;default:l.indexOf("aria-")===0||l.indexOf("data-")===0?f.attrs[l.toLowerCase()]=c:f.attrs[ma(l)]=c}return f},{attrs:{}}),o=n.style,i=o===void 0?{}:o,s=Os(n,Ns);return a.attrs.style=q(q({},a.attrs.style),i),t.apply(void 0,[e.tag,q(q({},a.attrs),s)].concat(tn(r)))}var ha=!1;try{ha=!0}catch{}function Ms(){if(!ha&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function ur(t){if(t&&de(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Ze.icon)return Ze.icon(t);if(t===null)return null;if(t&&de(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Me(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Et({},t,e):{}}var dr={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},va=tt.forwardRef(function(t,e){var n=q(q({},dr),t),r=n.icon,a=n.mask,o=n.symbol,i=n.className,s=n.title,f=n.titleId,l=n.maskId,c=ur(r),u=Me("classes",[].concat(tn(Es(n)),tn((i||"").split(" ")))),d=Me("transform",typeof n.transform=="string"?Ze.transform(n.transform):n.transform),m=Me("mask",ur(a)),v=xs(c,q(q(q(q({},u),d),m),{},{symbol:o,title:s,titleId:f,maskId:l}));if(!v)return Ms("Could not find icon",c),null;var y=v.abstract,g={ref:e};return Object.keys(n).forEach(function(w){dr.hasOwnProperty(w)||(g[w]=n[w])}),Ds(y[0],g)});va.displayName="FontAwesomeIcon";va.propTypes={beat:I.bool,border:I.bool,beatFade:I.bool,bounce:I.bool,className:I.string,fade:I.bool,flash:I.bool,mask:I.oneOfType([I.object,I.array,I.string]),maskId:I.string,fixedWidth:I.bool,inverse:I.bool,flip:I.oneOf([!0,!1,"horizontal","vertical","both"]),icon:I.oneOfType([I.object,I.array,I.string]),listItem:I.bool,pull:I.oneOf(["right","left"]),pulse:I.bool,rotation:I.oneOf([0,90,180,270]),shake:I.bool,size:I.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:I.bool,spinPulse:I.bool,spinReverse:I.bool,symbol:I.oneOfType([I.bool,I.string]),title:I.string,titleId:I.string,transform:I.oneOfType([I.string,I.object]),swapOpacity:I.bool};var Ds=ga.bind(null,tt.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Ic={prefix:"fas",iconName:"cloud",icon:[640,512,[9729],"f0c2","M0 336c0 79.5 64.5 144 144 144l368 0c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"]},Tc={prefix:"fas",iconName:"lock",icon:[448,512,[128274],"f023","M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z"]},Mc={prefix:"fas",iconName:"globe",icon:[512,512,[127760],"f0ac","M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"]},js={prefix:"fas",iconName:"shield-halved",icon:[512,512,["shield-alt"],"f3ed","M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8l0 378.1C394 378 431.1 230.1 432 141.4L256 66.8s0 0 0 0z"]},Dc=js,jc={prefix:"fas",iconName:"chart-line",icon:[512,512,["line-chart"],"f201","M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"]},Rc={prefix:"fas",iconName:"phone-volume",icon:[512,512,["volume-control-phone"],"f2a0","M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"]};function Rs(){return h.useState(null)}function $s(t,e,n,r=!1){const a=ct(n);h.useEffect(()=>{const o=typeof t=="function"?t():t;return o.addEventListener(e,a,r),()=>o.removeEventListener(e,a,r)},[t])}function Ls(){const t=h.useRef(!0),e=h.useRef(()=>t.current);return h.useEffect(()=>(t.current=!0,()=>{t.current=!1}),[]),e.current}function Fs(t){const e=h.useRef(null);return h.useEffect(()=>{e.current=t}),e.current}var zs=Function.prototype.bind.call(Function.prototype.call,[].slice);function pr(t,e){return zs(t.querySelectorAll(e))}function _s(t,e,n){const r=h.useRef(t!==void 0),[a,o]=h.useState(e),i=t!==void 0,s=r.current;return r.current=i,!i&&s&&a!==e&&o(e),[i?t:a,h.useCallback((...f)=>{const[l,...c]=f;let u=n==null?void 0:n(l,...c);return o(l),u},[n])]}function Ws(){const[,t]=h.useReducer(e=>e+1,0);return t}const we=h.createContext(null);var mr=Object.prototype.hasOwnProperty;function gr(t,e,n){for(n of t.keys())if(Bt(n,e))return n}function Bt(t,e){var n,r,a;if(t===e)return!0;if(t&&e&&(n=t.constructor)===e.constructor){if(n===Date)return t.getTime()===e.getTime();if(n===RegExp)return t.toString()===e.toString();if(n===Array){if((r=t.length)===e.length)for(;r--&&Bt(t[r],e[r]););return r===-1}if(n===Set){if(t.size!==e.size)return!1;for(r of t)if(a=r,a&&typeof a=="object"&&(a=gr(e,a),!a)||!e.has(a))return!1;return!0}if(n===Map){if(t.size!==e.size)return!1;for(r of t)if(a=r[0],a&&typeof a=="object"&&(a=gr(e,a),!a)||!Bt(r[1],e.get(a)))return!1;return!0}if(n===ArrayBuffer)t=new Uint8Array(t),e=new Uint8Array(e);else if(n===DataView){if((r=t.byteLength)===e.byteLength)for(;r--&&t.getInt8(r)===e.getInt8(r););return r===-1}if(ArrayBuffer.isView(t)){if((r=t.byteLength)===e.byteLength)for(;r--&&t[r]===e[r];);return r===-1}if(!n||typeof t=="object"){r=0;for(n in t)if(mr.call(t,n)&&++r&&!mr.call(e,n)||!(n in e)||!Bt(t[n],e[n]))return!1;return Object.keys(e).length===r}}return t!==t&&e!==e}function Bs(t){const e=Ls();return[t[0],h.useCallback(n=>{if(e())return t[1](n)},[e,t[1]])]}var W="top",V="bottom",X="right",B="left",hn="auto",Jt=[W,V,X,B],It="start",Xt="end",Us="clippingParents",ba="viewport",Ft="popper",Hs="reference",hr=Jt.reduce(function(t,e){return t.concat([e+"-"+It,e+"-"+Xt])},[]),ya=[].concat(Jt,[hn]).reduce(function(t,e){return t.concat([e,e+"-"+It,e+"-"+Xt])},[]),Ys="beforeRead",Vs="read",Xs="afterRead",Gs="beforeMain",qs="main",Ks="afterMain",Js="beforeWrite",Qs="write",Zs="afterWrite",tl=[Ys,Vs,Xs,Gs,qs,Ks,Js,Qs,Zs];function Q(t){return t.split("-")[0]}function H(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function At(t){var e=H(t).Element;return t instanceof e||t instanceof Element}function Z(t){var e=H(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function vn(t){if(typeof ShadowRoot>"u")return!1;var e=H(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}var xt=Math.max,pe=Math.min,Tt=Math.round;function nn(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function xa(){return!/^((?!chrome|android).)*safari/i.test(nn())}function Mt(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!1);var r=t.getBoundingClientRect(),a=1,o=1;e&&Z(t)&&(a=t.offsetWidth>0&&Tt(r.width)/t.offsetWidth||1,o=t.offsetHeight>0&&Tt(r.height)/t.offsetHeight||1);var i=At(t)?H(t):window,s=i.visualViewport,f=!xa()&&n,l=(r.left+(f&&s?s.offsetLeft:0))/a,c=(r.top+(f&&s?s.offsetTop:0))/o,u=r.width/a,d=r.height/o;return{width:u,height:d,top:c,right:l+u,bottom:c+d,left:l,x:l,y:c}}function bn(t){var e=Mt(t),n=t.offsetWidth,r=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:r}}function wa(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&vn(n)){var r=e;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function pt(t){return t?(t.nodeName||"").toLowerCase():null}function rt(t){return H(t).getComputedStyle(t)}function el(t){return["table","td","th"].indexOf(pt(t))>=0}function mt(t){return((At(t)?t.ownerDocument:t.document)||window.document).documentElement}function Oe(t){return pt(t)==="html"?t:t.assignedSlot||t.parentNode||(vn(t)?t.host:null)||mt(t)}function vr(t){return!Z(t)||rt(t).position==="fixed"?null:t.offsetParent}function nl(t){var e=/firefox/i.test(nn()),n=/Trident/i.test(nn());if(n&&Z(t)){var r=rt(t);if(r.position==="fixed")return null}var a=Oe(t);for(vn(a)&&(a=a.host);Z(a)&&["html","body"].indexOf(pt(a))<0;){var o=rt(a);if(o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].indexOf(o.willChange)!==-1||e&&o.willChange==="filter"||e&&o.filter&&o.filter!=="none")return a;a=a.parentNode}return null}function Qt(t){for(var e=H(t),n=vr(t);n&&el(n)&&rt(n).position==="static";)n=vr(n);return n&&(pt(n)==="html"||pt(n)==="body"&&rt(n).position==="static")?e:n||nl(t)||e}function yn(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Ut(t,e,n){return xt(t,pe(e,n))}function rl(t,e,n){var r=Ut(t,e,n);return r>n?n:r}function Oa(){return{top:0,right:0,bottom:0,left:0}}function Aa(t){return Object.assign({},Oa(),t)}function Ca(t,e){return e.reduce(function(n,r){return n[r]=t,n},{})}var al=function(e,n){return e=typeof e=="function"?e(Object.assign({},n.rects,{placement:n.placement})):e,Aa(typeof e!="number"?e:Ca(e,Jt))};function ol(t){var e,n=t.state,r=t.name,a=t.options,o=n.elements.arrow,i=n.modifiersData.popperOffsets,s=Q(n.placement),f=yn(s),l=[B,X].indexOf(s)>=0,c=l?"height":"width";if(!(!o||!i)){var u=al(a.padding,n),d=bn(o),m=f==="y"?W:B,v=f==="y"?V:X,y=n.rects.reference[c]+n.rects.reference[f]-i[f]-n.rects.popper[c],g=i[f]-n.rects.reference[f],w=Qt(o),b=w?f==="y"?w.clientHeight||0:w.clientWidth||0:0,x=y/2-g/2,A=u[m],O=b-d[c]-u[v],k=b/2-d[c]/2+x,E=Ut(A,k,O),P=f;n.modifiersData[r]=(e={},e[P]=E,e.centerOffset=E-k,e)}}function il(t){var e=t.state,n=t.options,r=n.element,a=r===void 0?"[data-popper-arrow]":r;a!=null&&(typeof a=="string"&&(a=e.elements.popper.querySelector(a),!a)||wa(e.elements.popper,a)&&(e.elements.arrow=a))}const sl={name:"arrow",enabled:!0,phase:"main",fn:ol,effect:il,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Dt(t){return t.split("-")[1]}var ll={top:"auto",right:"auto",bottom:"auto",left:"auto"};function cl(t,e){var n=t.x,r=t.y,a=e.devicePixelRatio||1;return{x:Tt(n*a)/a||0,y:Tt(r*a)/a||0}}function br(t){var e,n=t.popper,r=t.popperRect,a=t.placement,o=t.variation,i=t.offsets,s=t.position,f=t.gpuAcceleration,l=t.adaptive,c=t.roundOffsets,u=t.isFixed,d=i.x,m=d===void 0?0:d,v=i.y,y=v===void 0?0:v,g=typeof c=="function"?c({x:m,y}):{x:m,y};m=g.x,y=g.y;var w=i.hasOwnProperty("x"),b=i.hasOwnProperty("y"),x=B,A=W,O=window;if(l){var k=Qt(n),E="clientHeight",P="clientWidth";if(k===H(n)&&(k=mt(n),rt(k).position!=="static"&&s==="absolute"&&(E="scrollHeight",P="scrollWidth")),k=k,a===W||(a===B||a===X)&&o===Xt){A=V;var N=u&&k===O&&O.visualViewport?O.visualViewport.height:k[E];y-=N-r.height,y*=f?1:-1}if(a===B||(a===W||a===V)&&o===Xt){x=X;var T=u&&k===O&&O.visualViewport?O.visualViewport.width:k[P];m-=T-r.width,m*=f?1:-1}}var S=Object.assign({position:s},l&&ll),M=c===!0?cl({x:m,y},H(n)):{x:m,y};if(m=M.x,y=M.y,f){var D;return Object.assign({},S,(D={},D[A]=b?"0":"",D[x]=w?"0":"",D.transform=(O.devicePixelRatio||1)<=1?"translate("+m+"px, "+y+"px)":"translate3d("+m+"px, "+y+"px, 0)",D))}return Object.assign({},S,(e={},e[A]=b?y+"px":"",e[x]=w?m+"px":"",e.transform="",e))}function fl(t){var e=t.state,n=t.options,r=n.gpuAcceleration,a=r===void 0?!0:r,o=n.adaptive,i=o===void 0?!0:o,s=n.roundOffsets,f=s===void 0?!0:s,l={placement:Q(e.placement),variation:Dt(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:a,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,br(Object.assign({},l,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:i,roundOffsets:f})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,br(Object.assign({},l,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const ul={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:fl,data:{}};var ie={passive:!0};function dl(t){var e=t.state,n=t.instance,r=t.options,a=r.scroll,o=a===void 0?!0:a,i=r.resize,s=i===void 0?!0:i,f=H(e.elements.popper),l=[].concat(e.scrollParents.reference,e.scrollParents.popper);return o&&l.forEach(function(c){c.addEventListener("scroll",n.update,ie)}),s&&f.addEventListener("resize",n.update,ie),function(){o&&l.forEach(function(c){c.removeEventListener("scroll",n.update,ie)}),s&&f.removeEventListener("resize",n.update,ie)}}const pl={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:dl,data:{}};var ml={left:"right",right:"left",bottom:"top",top:"bottom"};function ce(t){return t.replace(/left|right|bottom|top/g,function(e){return ml[e]})}var gl={start:"end",end:"start"};function yr(t){return t.replace(/start|end/g,function(e){return gl[e]})}function xn(t){var e=H(t),n=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:n,scrollTop:r}}function wn(t){return Mt(mt(t)).left+xn(t).scrollLeft}function hl(t,e){var n=H(t),r=mt(t),a=n.visualViewport,o=r.clientWidth,i=r.clientHeight,s=0,f=0;if(a){o=a.width,i=a.height;var l=xa();(l||!l&&e==="fixed")&&(s=a.offsetLeft,f=a.offsetTop)}return{width:o,height:i,x:s+wn(t),y:f}}function vl(t){var e,n=mt(t),r=xn(t),a=(e=t.ownerDocument)==null?void 0:e.body,o=xt(n.scrollWidth,n.clientWidth,a?a.scrollWidth:0,a?a.clientWidth:0),i=xt(n.scrollHeight,n.clientHeight,a?a.scrollHeight:0,a?a.clientHeight:0),s=-r.scrollLeft+wn(t),f=-r.scrollTop;return rt(a||n).direction==="rtl"&&(s+=xt(n.clientWidth,a?a.clientWidth:0)-o),{width:o,height:i,x:s,y:f}}function On(t){var e=rt(t),n=e.overflow,r=e.overflowX,a=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+a+r)}function Pa(t){return["html","body","#document"].indexOf(pt(t))>=0?t.ownerDocument.body:Z(t)&&On(t)?t:Pa(Oe(t))}function Ht(t,e){var n;e===void 0&&(e=[]);var r=Pa(t),a=r===((n=t.ownerDocument)==null?void 0:n.body),o=H(r),i=a?[o].concat(o.visualViewport||[],On(r)?r:[]):r,s=e.concat(i);return a?s:s.concat(Ht(Oe(i)))}function rn(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function bl(t,e){var n=Mt(t,!1,e==="fixed");return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}function xr(t,e,n){return e===ba?rn(hl(t,n)):At(e)?bl(e,n):rn(vl(mt(t)))}function yl(t){var e=Ht(Oe(t)),n=["absolute","fixed"].indexOf(rt(t).position)>=0,r=n&&Z(t)?Qt(t):t;return At(r)?e.filter(function(a){return At(a)&&wa(a,r)&&pt(a)!=="body"}):[]}function xl(t,e,n,r){var a=e==="clippingParents"?yl(t):[].concat(e),o=[].concat(a,[n]),i=o[0],s=o.reduce(function(f,l){var c=xr(t,l,r);return f.top=xt(c.top,f.top),f.right=pe(c.right,f.right),f.bottom=pe(c.bottom,f.bottom),f.left=xt(c.left,f.left),f},xr(t,i,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function Sa(t){var e=t.reference,n=t.element,r=t.placement,a=r?Q(r):null,o=r?Dt(r):null,i=e.x+e.width/2-n.width/2,s=e.y+e.height/2-n.height/2,f;switch(a){case W:f={x:i,y:e.y-n.height};break;case V:f={x:i,y:e.y+e.height};break;case X:f={x:e.x+e.width,y:s};break;case B:f={x:e.x-n.width,y:s};break;default:f={x:e.x,y:e.y}}var l=a?yn(a):null;if(l!=null){var c=l==="y"?"height":"width";switch(o){case It:f[l]=f[l]-(e[c]/2-n[c]/2);break;case Xt:f[l]=f[l]+(e[c]/2-n[c]/2);break}}return f}function Gt(t,e){e===void 0&&(e={});var n=e,r=n.placement,a=r===void 0?t.placement:r,o=n.strategy,i=o===void 0?t.strategy:o,s=n.boundary,f=s===void 0?Us:s,l=n.rootBoundary,c=l===void 0?ba:l,u=n.elementContext,d=u===void 0?Ft:u,m=n.altBoundary,v=m===void 0?!1:m,y=n.padding,g=y===void 0?0:y,w=Aa(typeof g!="number"?g:Ca(g,Jt)),b=d===Ft?Hs:Ft,x=t.rects.popper,A=t.elements[v?b:d],O=xl(At(A)?A:A.contextElement||mt(t.elements.popper),f,c,i),k=Mt(t.elements.reference),E=Sa({reference:k,element:x,placement:a}),P=rn(Object.assign({},x,E)),N=d===Ft?P:k,T={top:O.top-N.top+w.top,bottom:N.bottom-O.bottom+w.bottom,left:O.left-N.left+w.left,right:N.right-O.right+w.right},S=t.modifiersData.offset;if(d===Ft&&S){var M=S[a];Object.keys(T).forEach(function(D){var $=[X,V].indexOf(D)>=0?1:-1,_=[W,V].indexOf(D)>=0?"y":"x";T[D]+=M[_]*$})}return T}function wl(t,e){e===void 0&&(e={});var n=e,r=n.placement,a=n.boundary,o=n.rootBoundary,i=n.padding,s=n.flipVariations,f=n.allowedAutoPlacements,l=f===void 0?ya:f,c=Dt(r),u=c?s?hr:hr.filter(function(v){return Dt(v)===c}):Jt,d=u.filter(function(v){return l.indexOf(v)>=0});d.length===0&&(d=u);var m=d.reduce(function(v,y){return v[y]=Gt(t,{placement:y,boundary:a,rootBoundary:o,padding:i})[Q(y)],v},{});return Object.keys(m).sort(function(v,y){return m[v]-m[y]})}function Ol(t){if(Q(t)===hn)return[];var e=ce(t);return[yr(t),e,yr(e)]}function Al(t){var e=t.state,n=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var a=n.mainAxis,o=a===void 0?!0:a,i=n.altAxis,s=i===void 0?!0:i,f=n.fallbackPlacements,l=n.padding,c=n.boundary,u=n.rootBoundary,d=n.altBoundary,m=n.flipVariations,v=m===void 0?!0:m,y=n.allowedAutoPlacements,g=e.options.placement,w=Q(g),b=w===g,x=f||(b||!v?[ce(g)]:Ol(g)),A=[g].concat(x).reduce(function(Pt,st){return Pt.concat(Q(st)===hn?wl(e,{placement:st,boundary:c,rootBoundary:u,padding:l,flipVariations:v,allowedAutoPlacements:y}):st)},[]),O=e.rects.reference,k=e.rects.popper,E=new Map,P=!0,N=A[0],T=0;T<A.length;T++){var S=A[T],M=Q(S),D=Dt(S)===It,$=[W,V].indexOf(M)>=0,_=$?"width":"height",L=Gt(e,{placement:S,boundary:c,rootBoundary:u,altBoundary:d,padding:l}),U=$?D?X:B:D?V:W;O[_]>k[_]&&(U=ce(U));var Rt=ce(U),G=[];if(o&&G.push(L[M]<=0),s&&G.push(L[U]<=0,L[Rt]<=0),G.every(function(Pt){return Pt})){N=S,P=!1;break}E.set(S,G)}if(P)for(var F=v?3:1,Ct=function(st){var Lt=A.find(function(ee){var gt=E.get(ee);if(gt)return gt.slice(0,st).every(function(Ce){return Ce})});if(Lt)return N=Lt,"break"},$t=F;$t>0;$t--){var te=Ct($t);if(te==="break")break}e.placement!==N&&(e.modifiersData[r]._skip=!0,e.placement=N,e.reset=!0)}}const Cl={name:"flip",enabled:!0,phase:"main",fn:Al,requiresIfExists:["offset"],data:{_skip:!1}};function wr(t,e,n){return n===void 0&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function Or(t){return[W,X,V,B].some(function(e){return t[e]>=0})}function Pl(t){var e=t.state,n=t.name,r=e.rects.reference,a=e.rects.popper,o=e.modifiersData.preventOverflow,i=Gt(e,{elementContext:"reference"}),s=Gt(e,{altBoundary:!0}),f=wr(i,r),l=wr(s,a,o),c=Or(f),u=Or(l);e.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:l,isReferenceHidden:c,hasPopperEscaped:u},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":u})}const Sl={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Pl};function El(t,e,n){var r=Q(t),a=[B,W].indexOf(r)>=0?-1:1,o=typeof n=="function"?n(Object.assign({},e,{placement:t})):n,i=o[0],s=o[1];return i=i||0,s=(s||0)*a,[B,X].indexOf(r)>=0?{x:s,y:i}:{x:i,y:s}}function kl(t){var e=t.state,n=t.options,r=t.name,a=n.offset,o=a===void 0?[0,0]:a,i=ya.reduce(function(c,u){return c[u]=El(u,e.rects,o),c},{}),s=i[e.placement],f=s.x,l=s.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=f,e.modifiersData.popperOffsets.y+=l),e.modifiersData[r]=i}const Nl={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:kl};function Il(t){var e=t.state,n=t.name;e.modifiersData[n]=Sa({reference:e.rects.reference,element:e.rects.popper,placement:e.placement})}const Tl={name:"popperOffsets",enabled:!0,phase:"read",fn:Il,data:{}};function Ml(t){return t==="x"?"y":"x"}function Dl(t){var e=t.state,n=t.options,r=t.name,a=n.mainAxis,o=a===void 0?!0:a,i=n.altAxis,s=i===void 0?!1:i,f=n.boundary,l=n.rootBoundary,c=n.altBoundary,u=n.padding,d=n.tether,m=d===void 0?!0:d,v=n.tetherOffset,y=v===void 0?0:v,g=Gt(e,{boundary:f,rootBoundary:l,padding:u,altBoundary:c}),w=Q(e.placement),b=Dt(e.placement),x=!b,A=yn(w),O=Ml(A),k=e.modifiersData.popperOffsets,E=e.rects.reference,P=e.rects.popper,N=typeof y=="function"?y(Object.assign({},e.rects,{placement:e.placement})):y,T=typeof N=="number"?{mainAxis:N,altAxis:N}:Object.assign({mainAxis:0,altAxis:0},N),S=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,M={x:0,y:0};if(k){if(o){var D,$=A==="y"?W:B,_=A==="y"?V:X,L=A==="y"?"height":"width",U=k[A],Rt=U+g[$],G=U-g[_],F=m?-P[L]/2:0,Ct=b===It?E[L]:P[L],$t=b===It?-P[L]:-E[L],te=e.elements.arrow,Pt=m&&te?bn(te):{width:0,height:0},st=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Oa(),Lt=st[$],ee=st[_],gt=Ut(0,E[L],Pt[L]),Ce=x?E[L]/2-F-gt-Lt-T.mainAxis:Ct-gt-Lt-T.mainAxis,Ka=x?-E[L]/2+F+gt+ee+T.mainAxis:$t+gt+ee+T.mainAxis,Pe=e.elements.arrow&&Qt(e.elements.arrow),Ja=Pe?A==="y"?Pe.clientTop||0:Pe.clientLeft||0:0,Sn=(D=S==null?void 0:S[A])!=null?D:0,Qa=U+Ce-Sn-Ja,Za=U+Ka-Sn,En=Ut(m?pe(Rt,Qa):Rt,U,m?xt(G,Za):G);k[A]=En,M[A]=En-U}if(s){var kn,to=A==="x"?W:B,eo=A==="x"?V:X,ht=k[O],ne=O==="y"?"height":"width",Nn=ht+g[to],In=ht-g[eo],Se=[W,B].indexOf(w)!==-1,Tn=(kn=S==null?void 0:S[O])!=null?kn:0,Mn=Se?Nn:ht-E[ne]-P[ne]-Tn+T.altAxis,Dn=Se?ht+E[ne]+P[ne]-Tn-T.altAxis:In,jn=m&&Se?rl(Mn,ht,Dn):Ut(m?Mn:Nn,ht,m?Dn:In);k[O]=jn,M[O]=jn-ht}e.modifiersData[r]=M}}const jl={name:"preventOverflow",enabled:!0,phase:"main",fn:Dl,requiresIfExists:["offset"]};function Rl(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function $l(t){return t===H(t)||!Z(t)?xn(t):Rl(t)}function Ll(t){var e=t.getBoundingClientRect(),n=Tt(e.width)/t.offsetWidth||1,r=Tt(e.height)/t.offsetHeight||1;return n!==1||r!==1}function Fl(t,e,n){n===void 0&&(n=!1);var r=Z(e),a=Z(e)&&Ll(e),o=mt(e),i=Mt(t,a,n),s={scrollLeft:0,scrollTop:0},f={x:0,y:0};return(r||!r&&!n)&&((pt(e)!=="body"||On(o))&&(s=$l(e)),Z(e)?(f=Mt(e,!0),f.x+=e.clientLeft,f.y+=e.clientTop):o&&(f.x=wn(o))),{x:i.left+s.scrollLeft-f.x,y:i.top+s.scrollTop-f.y,width:i.width,height:i.height}}function zl(t){var e=new Map,n=new Set,r=[];t.forEach(function(o){e.set(o.name,o)});function a(o){n.add(o.name);var i=[].concat(o.requires||[],o.requiresIfExists||[]);i.forEach(function(s){if(!n.has(s)){var f=e.get(s);f&&a(f)}}),r.push(o)}return t.forEach(function(o){n.has(o.name)||a(o)}),r}function _l(t){var e=zl(t);return tl.reduce(function(n,r){return n.concat(e.filter(function(a){return a.phase===r}))},[])}function Wl(t){var e;return function(){return e||(e=new Promise(function(n){Promise.resolve().then(function(){e=void 0,n(t())})})),e}}function Bl(t){var e=t.reduce(function(n,r){var a=n[r.name];return n[r.name]=a?Object.assign({},a,r,{options:Object.assign({},a.options,r.options),data:Object.assign({},a.data,r.data)}):r,n},{});return Object.keys(e).map(function(n){return e[n]})}var Ar={placement:"bottom",modifiers:[],strategy:"absolute"};function Cr(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function Ul(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,r=n===void 0?[]:n,a=e.defaultOptions,o=a===void 0?Ar:a;return function(s,f,l){l===void 0&&(l=o);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},Ar,o),modifiersData:{},elements:{reference:s,popper:f},attributes:{},styles:{}},u=[],d=!1,m={state:c,setOptions:function(w){var b=typeof w=="function"?w(c.options):w;y(),c.options=Object.assign({},o,c.options,b),c.scrollParents={reference:At(s)?Ht(s):s.contextElement?Ht(s.contextElement):[],popper:Ht(f)};var x=_l(Bl([].concat(r,c.options.modifiers)));return c.orderedModifiers=x.filter(function(A){return A.enabled}),v(),m.update()},forceUpdate:function(){if(!d){var w=c.elements,b=w.reference,x=w.popper;if(Cr(b,x)){c.rects={reference:Fl(b,Qt(x),c.options.strategy==="fixed"),popper:bn(x)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(T){return c.modifiersData[T.name]=Object.assign({},T.data)});for(var A=0;A<c.orderedModifiers.length;A++){if(c.reset===!0){c.reset=!1,A=-1;continue}var O=c.orderedModifiers[A],k=O.fn,E=O.options,P=E===void 0?{}:E,N=O.name;typeof k=="function"&&(c=k({state:c,options:P,name:N,instance:m})||c)}}}},update:Wl(function(){return new Promise(function(g){m.forceUpdate(),g(c)})}),destroy:function(){y(),d=!0}};if(!Cr(s,f))return m;m.setOptions(l).then(function(g){!d&&l.onFirstUpdate&&l.onFirstUpdate(g)});function v(){c.orderedModifiers.forEach(function(g){var w=g.name,b=g.options,x=b===void 0?{}:b,A=g.effect;if(typeof A=="function"){var O=A({state:c,name:w,instance:m,options:x}),k=function(){};u.push(O||k)}})}function y(){u.forEach(function(g){return g()}),u=[]}return m}}const Hl=Ul({defaultModifiers:[Sl,Tl,ul,pl,Nl,Cl,jl,sl]}),Yl=["enabled","placement","strategy","modifiers"];function Vl(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}const Xl={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:()=>{}},Gl={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:({state:t})=>()=>{const{reference:e,popper:n}=t.elements;if("removeAttribute"in e){const r=(e.getAttribute("aria-describedby")||"").split(",").filter(a=>a.trim()!==n.id);r.length?e.setAttribute("aria-describedby",r.join(",")):e.removeAttribute("aria-describedby")}},fn:({state:t})=>{var e;const{popper:n,reference:r}=t.elements,a=(e=n.getAttribute("role"))==null?void 0:e.toLowerCase();if(n.id&&a==="tooltip"&&"setAttribute"in r){const o=r.getAttribute("aria-describedby");if(o&&o.split(",").indexOf(n.id)!==-1)return;r.setAttribute("aria-describedby",o?`${o},${n.id}`:n.id)}}},ql=[];function Kl(t,e,n={}){let{enabled:r=!0,placement:a="bottom",strategy:o="absolute",modifiers:i=ql}=n,s=Vl(n,Yl);const f=h.useRef(i),l=h.useRef(),c=h.useCallback(()=>{var g;(g=l.current)==null||g.update()},[]),u=h.useCallback(()=>{var g;(g=l.current)==null||g.forceUpdate()},[]),[d,m]=Bs(h.useState({placement:a,update:c,forceUpdate:u,attributes:{},styles:{popper:{},arrow:{}}})),v=h.useMemo(()=>({name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:({state:g})=>{const w={},b={};Object.keys(g.elements).forEach(x=>{w[x]=g.styles[x],b[x]=g.attributes[x]}),m({state:g,styles:w,attributes:b,update:c,forceUpdate:u,placement:g.placement})}}),[c,u,m]),y=h.useMemo(()=>(Bt(f.current,i)||(f.current=i),f.current),[i]);return h.useEffect(()=>{!l.current||!r||l.current.setOptions({placement:a,strategy:o,modifiers:[...y,v,Xl]})},[o,a,v,r,y]),h.useEffect(()=>{if(!(!r||t==null||e==null))return l.current=Hl(t,e,Object.assign({},s,{placement:a,strategy:o,modifiers:[...y,Gl,v]})),()=>{l.current!=null&&(l.current.destroy(),l.current=void 0,m(g=>Object.assign({},g,{attributes:{},styles:{popper:{}}})))}},[r,t,e]),d}function Pr(t,e){if(t.contains)return t.contains(e);if(t.compareDocumentPosition)return t===e||!!(t.compareDocumentPosition(e)&16)}const Sr=()=>{};function Jl(t){return t.button===0}function Ql(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}const De=t=>t&&("current"in t?t.current:t),Er={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"};function Zl(t,e=Sr,{disabled:n,clickTrigger:r="click"}={}){const a=h.useRef(!1),o=h.useRef(!1),i=h.useCallback(l=>{const c=De(t);ao(!!c,"ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"),a.current=!c||Ql(l)||!Jl(l)||!!Pr(c,l.target)||o.current,o.current=!1},[t]),s=ct(l=>{const c=De(t);c&&Pr(c,l.target)?o.current=!0:o.current=!1}),f=ct(l=>{a.current||e(l)});h.useEffect(()=>{var l,c;if(n||t==null)return;const u=oo(De(t)),d=u.defaultView||window;let m=(l=d.event)!=null?l:(c=d.parent)==null?void 0:c.event,v=null;Er[r]&&(v=re(u,Er[r],s,!0));const y=re(u,r,i,!0),g=re(u,r,b=>{if(b===m){m=void 0;return}f(b)});let w=[];return"ontouchstart"in u.documentElement&&(w=[].slice.call(u.body.children).map(b=>re(b,"mousemove",Sr))),()=>{v==null||v(),y(),g(),w.forEach(b=>b())}},[t,n,r,i,s,f])}function tc(t){const e={};return Array.isArray(t)?(t==null||t.forEach(n=>{e[n.name]=n}),e):t||e}function ec(t={}){return Array.isArray(t)?t:Object.keys(t).map(e=>(t[e].name=e,t[e]))}function nc({enabled:t,enableEvents:e,placement:n,flip:r,offset:a,fixed:o,containerPadding:i,arrowElement:s,popperConfig:f={}}){var l,c,u,d,m;const v=tc(f.modifiers);return Object.assign({},f,{placement:n,enabled:t,strategy:o?"fixed":f.strategy,modifiers:ec(Object.assign({},v,{eventListeners:{enabled:e,options:(l=v.eventListeners)==null?void 0:l.options},preventOverflow:Object.assign({},v.preventOverflow,{options:i?Object.assign({padding:i},(c=v.preventOverflow)==null?void 0:c.options):(u=v.preventOverflow)==null?void 0:u.options}),offset:{options:Object.assign({offset:a},(d=v.offset)==null?void 0:d.options)},arrow:Object.assign({},v.arrow,{enabled:!!s,options:Object.assign({},(m=v.arrow)==null?void 0:m.options,{element:s})}),flip:Object.assign({enabled:!!r},v.flip)}))})}const rc=["children","usePopper"];function ac(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}const oc=()=>{};function Ea(t={}){const e=h.useContext(we),[n,r]=Rs(),a=h.useRef(!1),{flip:o,offset:i,rootCloseEvent:s,fixed:f=!1,placement:l,popperConfig:c={},enableEventListeners:u=!0,usePopper:d=!!e}=t,m=(e==null?void 0:e.show)==null?!!t.show:e.show;m&&!a.current&&(a.current=!0);const v=k=>{e==null||e.toggle(!1,k)},{placement:y,setMenu:g,menuElement:w,toggleElement:b}=e||{},x=Kl(b,w,nc({placement:l||y||"bottom-start",enabled:d,enableEvents:u??m,offset:i,flip:o,fixed:f,arrowElement:n,popperConfig:c})),A=Object.assign({ref:g||oc,"aria-labelledby":b==null?void 0:b.id},x.attributes.popper,{style:x.styles.popper}),O={show:m,placement:y,hasShown:a.current,toggle:e==null?void 0:e.toggle,popper:d?x:null,arrowProps:d?Object.assign({ref:r},x.attributes.arrow,{style:x.styles.arrow}):{}};return Zl(w,v,{clickTrigger:s,disabled:!m}),[A,O]}function ka(t){let{children:e,usePopper:n=!0}=t,r=ac(t,rc);const[a,o]=Ea(Object.assign({},r,{usePopper:n}));return R.jsx(R.Fragment,{children:e(a,o)})}ka.displayName="DropdownMenu";const Na={prefix:String(Math.round(Math.random()*1e10)),current:0},Ia=tt.createContext(Na),ic=tt.createContext(!1);let je=new WeakMap;function sc(t=!1){let e=h.useContext(Ia),n=h.useRef(null);if(n.current===null&&!t){var r,a;let o=(a=tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)===null||a===void 0||(r=a.ReactCurrentOwner)===null||r===void 0?void 0:r.current;if(o){let i=je.get(o);i==null?je.set(o,{id:e.current,state:o.memoizedState}):o.memoizedState!==i.state&&(e.current=i.id,je.delete(o))}n.current=++e.current}return n.current}function lc(t){let e=h.useContext(Ia),n=sc(!!t),r=`react-aria${e.prefix}`;return t||`${r}-${n}`}function cc(t){let e=tt.useId(),[n]=h.useState(mc()),r=n?"react-aria":`react-aria${Na.prefix}`;return t||`${r}-${e}`}const fc=typeof tt.useId=="function"?cc:lc;function uc(){return!1}function dc(){return!0}function pc(t){return()=>{}}function mc(){return typeof tt.useSyncExternalStore=="function"?tt.useSyncExternalStore(pc,uc,dc):h.useContext(ic)}const Ta=t=>{var e;return((e=t.getAttribute("role"))==null?void 0:e.toLowerCase())==="menu"},kr=()=>{};function Ma(){const t=fc(),{show:e=!1,toggle:n=kr,setToggle:r,menuElement:a}=h.useContext(we)||{},o=h.useCallback(s=>{n(!e,s)},[e,n]),i={id:t,ref:r||kr,onClick:o,"aria-expanded":!!e};return a&&Ta(a)&&(i["aria-haspopup"]=!0),[i,{show:e,toggle:n}]}function Da({children:t}){const[e,n]=Ma();return R.jsx(R.Fragment,{children:t(e,n)})}Da.displayName="DropdownToggle";const me=h.createContext(null),ge=(t,e=null)=>t!=null?String(t):e||null,An=h.createContext(null);An.displayName="NavContext";const gc="data-rr-ui-",hc="rrUi";function Ae(t){return`${gc}${t}`}function $c(t){return`${hc}${t}`}const vc=["eventKey","disabled","onClick","active","as"];function bc(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function ja({key:t,href:e,active:n,disabled:r,onClick:a}){const o=h.useContext(me),i=h.useContext(An),{activeKey:s}=i||{},f=ge(t,e),l=n==null&&t!=null?ge(s)===f:n;return[{onClick:ct(u=>{r||(a==null||a(u),o&&!u.isPropagationStopped()&&o(f,u))}),"aria-disabled":r||void 0,"aria-selected":l,[Ae("dropdown-item")]:""},{isActive:l}]}const Ra=h.forwardRef((t,e)=>{let{eventKey:n,disabled:r,onClick:a,active:o,as:i=Ir}=t,s=bc(t,vc);const[f]=ja({key:n,href:s.href,disabled:r,onClick:a,active:o});return R.jsx(i,Object.assign({},s,{ref:e},f))});Ra.displayName="DropdownItem";const $a=h.createContext(io?window:void 0);$a.Provider;function yc(){return h.useContext($a)}function Nr(){const t=Ws(),e=h.useRef(null),n=h.useCallback(r=>{e.current=r,t()},[t]);return[e,n]}function Zt({defaultShow:t,show:e,onSelect:n,onToggle:r,itemSelector:a=`* [${Ae("dropdown-item")}]`,focusFirstItemOnShow:o,placement:i="bottom-start",children:s}){const f=yc(),[l,c]=_s(e,t,r),[u,d]=Nr(),m=u.current,[v,y]=Nr(),g=v.current,w=Fs(l),b=h.useRef(null),x=h.useRef(!1),A=h.useContext(me),O=h.useCallback((S,M,D=M==null?void 0:M.type)=>{c(S,{originalEvent:M,source:D})},[c]),k=ct((S,M)=>{n==null||n(S,M),O(!1,M,"select"),M.isPropagationStopped()||A==null||A(S,M)}),E=h.useMemo(()=>({toggle:O,placement:i,show:l,menuElement:m,toggleElement:g,setMenu:d,setToggle:y}),[O,i,l,m,g,d,y]);m&&w&&!l&&(x.current=m.contains(m.ownerDocument.activeElement));const P=ct(()=>{g&&g.focus&&g.focus()}),N=ct(()=>{const S=b.current;let M=o;if(M==null&&(M=u.current&&Ta(u.current)?"keyboard":!1),M===!1||M==="keyboard"&&!/^key.+$/.test(S))return;const D=pr(u.current,a)[0];D&&D.focus&&D.focus()});h.useEffect(()=>{l?N():x.current&&(x.current=!1,P())},[l,x,P,N]),h.useEffect(()=>{b.current=null});const T=(S,M)=>{if(!u.current)return null;const D=pr(u.current,a);let $=D.indexOf(S)+M;return $=Math.max(0,Math.min($,D.length)),D[$]};return $s(h.useCallback(()=>f.document,[f]),"keydown",S=>{var M,D;const{key:$}=S,_=S.target,L=(M=u.current)==null?void 0:M.contains(_),U=(D=v.current)==null?void 0:D.contains(_);if(/input|textarea/i.test(_.tagName)&&($===" "||$!=="Escape"&&L||$==="Escape"&&_.type==="search")||!L&&!U||$==="Tab"&&(!u.current||!l))return;b.current=S.type;const G={originalEvent:S,source:S.type};switch($){case"ArrowUp":{const F=T(_,-1);F&&F.focus&&F.focus(),S.preventDefault();return}case"ArrowDown":if(S.preventDefault(),!l)c(!0,G);else{const F=T(_,1);F&&F.focus&&F.focus()}return;case"Tab":so(_.ownerDocument,"keyup",F=>{var Ct;(F.key==="Tab"&&!F.target||!((Ct=u.current)!=null&&Ct.contains(F.target)))&&c(!1,G)},{once:!0});break;case"Escape":$==="Escape"&&(S.preventDefault(),S.stopPropagation()),c(!1,G);break}}),R.jsx(me.Provider,{value:k,children:R.jsx(we.Provider,{value:E,children:s})})}Zt.displayName="Dropdown";Zt.Menu=ka;Zt.Toggle=Da;Zt.Item=Ra;const Cn=h.createContext({});Cn.displayName="DropdownContext";const La=h.forwardRef(({className:t,bsPrefix:e,as:n="hr",role:r="separator",...a},o)=>(e=at(e,"dropdown-divider"),R.jsx(n,{ref:o,className:ot(t,e),role:r,...a})));La.displayName="DropdownDivider";const Fa=h.forwardRef(({className:t,bsPrefix:e,as:n="div",role:r="heading",...a},o)=>(e=at(e,"dropdown-header"),R.jsx(n,{ref:o,className:ot(t,e),role:r,...a})));Fa.displayName="DropdownHeader";const za=h.forwardRef(({bsPrefix:t,className:e,eventKey:n,disabled:r=!1,onClick:a,active:o,as:i=Tr,...s},f)=>{const l=at(t,"dropdown-item"),[c,u]=ja({key:n,href:s.href,disabled:r,onClick:a,active:o});return R.jsx(i,{...s,...c,ref:f,className:ot(e,l,u.isActive&&"active",r&&"disabled")})});za.displayName="DropdownItem";const _a=h.forwardRef(({className:t,bsPrefix:e,as:n="span",...r},a)=>(e=at(e,"dropdown-item-text"),R.jsx(n,{ref:a,className:ot(t,e),...r})));_a.displayName="DropdownItemText";const xc=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",wc=typeof document<"u",Oc=wc||xc?h.useLayoutEffect:h.useEffect,Pn=h.createContext(null);Pn.displayName="InputGroupContext";const Wa=h.createContext(null);Wa.displayName="NavbarContext";function Ba(t,e){return t}function Ua(t,e,n){const r=n?"top-end":"top-start",a=n?"top-start":"top-end",o=n?"bottom-end":"bottom-start",i=n?"bottom-start":"bottom-end",s=n?"right-start":"left-start",f=n?"right-end":"left-end",l=n?"left-start":"right-start",c=n?"left-end":"right-end";let u=t?i:o;return e==="up"?u=t?a:r:e==="end"?u=t?c:l:e==="start"?u=t?f:s:e==="down-centered"?u="bottom":e==="up-centered"&&(u="top"),u}const Ha=h.forwardRef(({bsPrefix:t,className:e,align:n,rootCloseEvent:r,flip:a=!0,show:o,renderOnMount:i,as:s="div",popperConfig:f,variant:l,...c},u)=>{let d=!1;const m=h.useContext(Wa),v=at(t,"dropdown-menu"),{align:y,drop:g,isRTL:w}=h.useContext(Cn);n=n||y;const b=h.useContext(Pn),x=[];if(n)if(typeof n=="object"){const S=Object.keys(n);if(S.length){const M=S[0],D=n[M];d=D==="start",x.push(`${v}-${M}-${D}`)}}else n==="end"&&(d=!0);const A=Ua(d,g,w),[O,{hasShown:k,popper:E,show:P,toggle:N}]=Ea({flip:a,rootCloseEvent:r,show:o,usePopper:!m&&x.length===0,offset:[0,2],popperConfig:f,placement:A});if(O.ref=Mr(Ba(u),O.ref),Oc(()=>{P&&(E==null||E.update())},[P]),!k&&!i&&!b)return null;typeof s!="string"&&(O.show=P,O.close=()=>N==null?void 0:N(!1),O.align=n);let T=c.style;return E!=null&&E.placement&&(T={...c.style,...O.style},c["x-placement"]=E.placement),R.jsx(s,{...c,...O,style:T,...(x.length||m)&&{"data-bs-popper":"static"},className:ot(e,v,P&&"show",d&&`${v}-end`,l&&`${v}-${l}`,...x)})});Ha.displayName="DropdownMenu";const Ya=h.forwardRef(({bsPrefix:t,split:e,className:n,childBsPrefix:r,as:a=lo,...o},i)=>{const s=at(t,"dropdown-toggle"),f=h.useContext(we);r!==void 0&&(o.bsPrefix=r);const[l]=Ma();return l.ref=Mr(l.ref,Ba(i)),R.jsx(a,{className:ot(n,s,e&&`${s}-split`,(f==null?void 0:f.show)&&"show"),...l,...o})});Ya.displayName="DropdownToggle";const Va=h.forwardRef((t,e)=>{const{bsPrefix:n,drop:r="down",show:a,className:o,align:i="start",onSelect:s,onToggle:f,focusFirstItemOnShow:l,as:c="div",navbar:u,autoClose:d=!0,...m}=co(t,{show:"onToggle"}),v=h.useContext(Pn),y=at(n,"dropdown"),g=fo(),w=E=>d===!1?E==="click":d==="inside"?E!=="rootClose":d==="outside"?E!=="select":!0,b=uo((E,P)=>{var N;!((N=P.originalEvent)==null||(N=N.target)==null)&&N.classList.contains("dropdown-toggle")&&P.source==="mousedown"||(P.originalEvent.currentTarget===document&&(P.source!=="keydown"||P.originalEvent.key==="Escape")&&(P.source="rootClose"),w(P.source)&&(f==null||f(E,P)))}),A=Ua(i==="end",r,g),O=h.useMemo(()=>({align:i,drop:r,isRTL:g}),[i,r,g]),k={down:y,"down-centered":`${y}-center`,up:"dropup","up-centered":"dropup-center dropup",end:"dropend",start:"dropstart"};return R.jsx(Cn.Provider,{value:O,children:R.jsx(Zt,{placement:A,show:a,onSelect:s,onToggle:b,focusFirstItemOnShow:l,itemSelector:`.${y}-item:not(.disabled):not(:disabled)`,children:v?m.children:R.jsx(c,{...m,ref:e,className:ot(o,a&&"show",k[r])})})})});Va.displayName="Dropdown";const bt=Object.assign(Va,{Toggle:Ya,Menu:Ha,Item:za,ItemText:_a,Divider:La,Header:Fa}),Ac=h.createContext(null),Cc=["as","active","eventKey"];function Pc(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function Xa({key:t,onClick:e,active:n,id:r,role:a,disabled:o}){const i=h.useContext(me),s=h.useContext(An),f=h.useContext(Ac);let l=n;const c={role:a};if(s){!a&&s.role==="tablist"&&(c.role="tab");const u=s.getControllerId(t??null),d=s.getControlledId(t??null);c[Ae("event-key")]=t,c.id=u||r,l=n==null&&t!=null?s.activeKey===t:n,(l||!(f!=null&&f.unmountOnExit)&&!(f!=null&&f.mountOnEnter))&&(c["aria-controls"]=d)}return c.role==="tab"&&(c["aria-selected"]=l,l||(c.tabIndex=-1),o&&(c.tabIndex=-1,c["aria-disabled"]=!0)),c.onClick=ct(u=>{o||(e==null||e(u),t!=null&&i&&!u.isPropagationStopped()&&i(t,u))}),[c,{isActive:l}]}const Sc=h.forwardRef((t,e)=>{let{as:n=Ir,active:r,eventKey:a}=t,o=Pc(t,Cc);const[i,s]=Xa(Object.assign({key:ge(a,o.href),active:r},o));return i[Ae("active")]=s.isActive,R.jsx(n,Object.assign({},o,i,{ref:e}))});Sc.displayName="NavItem";const Ga=h.forwardRef(({bsPrefix:t,className:e,as:n=Tr,active:r,eventKey:a,disabled:o=!1,...i},s)=>{t=at(t,"nav-link");const[f,l]=Xa({key:ge(a,i.href),active:r,disabled:o,...i});return R.jsx(n,{...i,...f,ref:s,disabled:o,className:ot(e,t,o&&"disabled",l.isActive&&"active")})});Ga.displayName="NavLink";const qa=h.forwardRef(({id:t,title:e,children:n,bsPrefix:r,className:a,rootCloseEvent:o,menuRole:i,disabled:s,active:f,renderMenuOnMount:l,menuVariant:c,...u},d)=>{const m=at(void 0,"nav-item");return R.jsxs(bt,{ref:d,...u,className:ot(a,m),children:[R.jsx(bt.Toggle,{id:t,eventKey:null,active:f,disabled:s,childBsPrefix:r,as:Ga,children:e}),R.jsx(bt.Menu,{role:i,renderOnMount:l,rootCloseEvent:o,variant:c,children:n})]})});qa.displayName="NavDropdown";const Lc=Object.assign(qa,{Item:bt.Item,ItemText:bt.ItemText,Divider:bt.Divider,Header:bt.Header});export{va as F,Lc as N,me as S,Ac as T,Ic as a,Tc as b,Mc as c,Sc as d,Ws as e,Dc as f,Ae as g,An as h,$c as i,yc as j,Ls as k,Fs as l,ge as m,Pr as n,Ga as o,Wa as p,pr as q,Oc as r,jc as s,Rc as t,Nc as u};
