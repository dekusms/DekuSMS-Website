import{r as s,u as I,j as t,c as z,P as y,B as ce,R as v,a as N,C as q,b as de,d as P,L as E,F as j,f as ue,e as fe,g as V,h as me,i as F,k as ge,l as xe}from"./index-DIHmhXmC.js";function D(){return D=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var a in r)({}).hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},D.apply(null,arguments)}function pe(e,n){if(e==null)return{};var r={};for(var a in e)if({}.hasOwnProperty.call(e,a)){if(n.indexOf(a)!==-1)continue;r[a]=e[a]}return r}function K(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function be(e){var n=he(e,"string");return typeof n=="symbol"?n:String(n)}function he(e,n){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var a=r.call(e,n);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function ve(e,n,r){var a=s.useRef(e!==void 0),o=s.useState(n),i=o[0],f=o[1],d=e!==void 0,u=a.current;return a.current=d,!d&&u&&i!==n&&f(n),[d?e:i,s.useCallback(function(m){for(var c=arguments.length,g=new Array(c>1?c-1:0),l=1;l<c;l++)g[l-1]=arguments[l];r&&r.apply(void 0,[m].concat(g)),f(m)},[r])]}function je(e,n){return Object.keys(n).reduce(function(r,a){var o,i=r,f=i[K(a)],d=i[a],u=pe(i,[K(a),a].map(be)),m=n[a],c=ve(d,f,e[m]),g=c[0],l=c[1];return D({},u,(o={},o[a]=g,o[m]=l,o))},e)}function we(e){const n=s.useRef(e);return s.useEffect(()=>{n.current=e},[e]),n}function ye(e){const n=we(e);return s.useCallback(function(...r){return n.current&&n.current(...r)},[n])}function Ne(e){const n=s.useRef(e);return s.useEffect(()=>{n.current=e},[e]),n}function ke(e){const n=Ne(e);return s.useCallback(function(...r){return n.current&&n.current(...r)},[n])}var Ce=Function.prototype.bind.call(Function.prototype.call,[].slice);function Oe(e,n){return Ce(e.querySelectorAll(n))}function Se(){const[,e]=s.useReducer(n=>n+1,0);return e}const R=s.createContext(null),_=(e,n=null)=>e!=null?String(e):n||null,$=s.createContext(null);$.displayName="NavContext";const Pe="data-rr-ui-",Ee="rrUi";function T(e){return`${Pe}${e}`}function De(e){return`${Ee}${e}`}y.string,y.bool,y.bool,y.bool,y.bool;const J=s.forwardRef(({bsPrefix:e,className:n,fluid:r=!1,rounded:a=!1,roundedCircle:o=!1,thumbnail:i=!1,...f},d)=>(e=I(e,"img"),t.jsx("img",{ref:d,...f,className:z(n,r&&`${e}-fluid`,a&&"rounded",o&&"rounded-circle",i&&`${e}-thumbnail`)})));J.displayName="Image";const B=e=>!e||typeof e=="function"?e:n=>{e.current=n};function Re(e,n){const r=B(e),a=B(n);return o=>{r&&r(o),a&&a(o)}}function Ie(e,n){return s.useMemo(()=>Re(e,n),[e,n])}const Q=s.createContext(null),ze=["as","active","eventKey"];function _e(e,n){if(e==null)return{};var r={};for(var a in e)if({}.hasOwnProperty.call(e,a)){if(n.indexOf(a)>=0)continue;r[a]=e[a]}return r}function Z({key:e,onClick:n,active:r,id:a,role:o,disabled:i}){const f=s.useContext(R),d=s.useContext($),u=s.useContext(Q);let m=r;const c={role:o};if(d){!o&&d.role==="tablist"&&(c.role="tab");const g=d.getControllerId(e??null),l=d.getControlledId(e??null);c[T("event-key")]=e,c.id=g||a,m=r==null&&e!=null?d.activeKey===e:r,(m||!(u!=null&&u.unmountOnExit)&&!(u!=null&&u.mountOnEnter))&&(c["aria-controls"]=l)}return c.role==="tab"&&(c["aria-selected"]=m,m||(c.tabIndex=-1),i&&(c.tabIndex=-1,c["aria-disabled"]=!0)),c.onClick=ke(g=>{i||(n==null||n(g),e!=null&&f&&!g.isPropagationStopped()&&f(e,g))}),[c,{isActive:m}]}const ee=s.forwardRef((e,n)=>{let{as:r=ce,active:a,eventKey:o}=e,i=_e(e,ze);const[f,d]=Z(Object.assign({key:_(o,i.href),active:a},i));return f[T("active")]=d.isActive,t.jsx(r,Object.assign({},i,f,{ref:n}))});ee.displayName="NavItem";const $e=["as","onSelect","activeKey","role","onKeyDown"];function Te(e,n){if(e==null)return{};var r={};for(var a in e)if({}.hasOwnProperty.call(e,a)){if(n.indexOf(a)>=0)continue;r[a]=e[a]}return r}const W=()=>{},H=T("event-key"),te=s.forwardRef((e,n)=>{let{as:r="div",onSelect:a,activeKey:o,role:i,onKeyDown:f}=e,d=Te(e,$e);const u=Se(),m=s.useRef(!1),c=s.useContext(R),g=s.useContext(Q);let l,p;g&&(i=i||"tablist",o=g.activeKey,l=g.getControlledId,p=g.getControllerId);const h=s.useRef(null),L=x=>{const b=h.current;if(!b)return null;const k=Oe(b,`[${H}]:not([aria-disabled=true])`),S=b.querySelector("[aria-selected=true]");if(!S||S!==document.activeElement)return null;const A=k.indexOf(S);if(A===-1)return null;let w=A+x;return w>=k.length&&(w=0),w<0&&(w=k.length-1),k[w]},M=(x,b)=>{x!=null&&(a==null||a(x,b),c==null||c(x,b))},le=x=>{if(f==null||f(x),!g)return;let b;switch(x.key){case"ArrowLeft":case"ArrowUp":b=L(-1);break;case"ArrowRight":case"ArrowDown":b=L(1);break;default:return}b&&(x.preventDefault(),M(b.dataset[De("EventKey")]||null,x),m.current=!0,u())};s.useEffect(()=>{if(h.current&&m.current){const x=h.current.querySelector(`[${H}][aria-selected=true]`);x==null||x.focus()}m.current=!1});const se=Ie(n,h);return t.jsx(R.Provider,{value:M,children:t.jsx($.Provider,{value:{role:i,activeKey:_(o),getControlledId:l||W,getControllerId:p||W},children:t.jsx(r,Object.assign({},d,{onKeyDown:le,ref:se,role:i}))})})});te.displayName="Nav";const Le=Object.assign(te,{Item:ee}),ne=s.forwardRef(({bsPrefix:e,active:n,disabled:r,eventKey:a,className:o,variant:i,action:f,as:d,...u},m)=>{e=I(e,"list-group-item");const[c,g]=Z({key:_(a,u.href),active:n,...u}),l=ye(h=>{if(r){h.preventDefault(),h.stopPropagation();return}c.onClick(h)});r&&u.tabIndex===void 0&&(u.tabIndex=-1,u["aria-disabled"]=!0);const p=d||(f?u.href?"a":"button":"div");return t.jsx(p,{ref:m,...u,...c,onClick:l,className:z(o,e,g.isActive&&"active",r&&"disabled",i&&`${e}-${i}`,f&&`${e}-action`)})});ne.displayName="ListGroupItem";const re=s.forwardRef((e,n)=>{const{className:r,bsPrefix:a,variant:o,horizontal:i,numbered:f,as:d="div",...u}=je(e,{activeKey:"onSelect"}),m=I(a,"list-group");let c;return i&&(c=i===!0?"horizontal":`horizontal-${i}`),t.jsx(Le,{ref:n,...u,as:d,className:z(r,m,o&&`${m}-${o}`,c&&`${m}-${c}`,f&&`${m}-numbered`)})});re.displayName="ListGroup";const U=Object.assign(re,{Item:ne});var ae={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},G=v.createContext&&v.createContext(ae),Me=["attr","size","title"];function Ae(e,n){if(e==null)return{};var r=Fe(e,n),a,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],!(n.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function Fe(e,n){if(e==null)return{};var r={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(n.indexOf(a)>=0)continue;r[a]=e[a]}return r}function C(){return C=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},C.apply(this,arguments)}function X(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,a)}return r}function O(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?X(Object(r),!0).forEach(function(a){Ke(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):X(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}function Ke(e,n,r){return n=Be(n),n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function Be(e){var n=We(e,"string");return typeof n=="symbol"?n:n+""}function We(e,n){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var a=r.call(e,n);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function oe(e){return e&&e.map((n,r)=>v.createElement(n.tag,O({key:r},n.attr),oe(n.child)))}function ie(e){return n=>v.createElement(He,C({attr:O({},e.attr)},n),oe(e.child))}function He(e){var n=r=>{var{attr:a,size:o,title:i}=e,f=Ae(e,Me),d=o||r.size||"1em",u;return r.className&&(u=r.className),e.className&&(u=(u?u+" ":"")+e.className),v.createElement("svg",C({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,a,f,{className:u,style:O(O({color:e.color||r.color},r.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),i&&v.createElement("title",null,i),e.children)};return G!==void 0?v.createElement(G.Consumer,null,r=>n(r)):n(ae)}function Ue(e){return ie({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(e)}function Ge(e){return ie({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"},child:[]}]})(e)}const Xe=()=>{const{t:e}=N("dekusms"),[n,r]=s.useState(!1),a=[e("landing.features.feature1"),e("landing.features.feature2"),e("landing.features.feature3"),e("landing.features.feature4")];return t.jsx("div",{style:{background:"linear-gradient(135deg, #0f2027, #203a43, #0f2027)",boxShadow:"0 8px 24px #203a43",color:"white",paddingTop:"80px",minHeight:"100vh",display:"flex",alignItems:"center"},children:t.jsx(q,{fluid:!0,children:t.jsxs(de,{className:"align-items-center text-center text-md-start flex-wrap",children:[t.jsxs(P,{xs:12,md:5,className:"px-4 text-md-start text-center d-flex flex-column justify-content-center",children:[t.jsx("h1",{className:"fw-bold text-white mb-3 display-4 display-md-2",children:e("landing.title")}),t.jsx("p",{className:"fs-5 text-light mb-2",children:e("landing.title2")}),t.jsx("p",{className:"text-light fs-5 lh-lg mb-4",style:{textAlign:"justify"},children:e("landing.description")}),t.jsxs("div",{className:"d-flex flex-wrap justify-content-center justify-content-md-start gap-3 mt-3 mb-5",children:[t.jsxs(E,{to:"/download",onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),className:"btn d-flex align-items-center justify-content-center px-4 py-2",style:{minWidth:"140px",fontWeight:600,background:n?"#20b7a0":"#2ED3B7",color:n?"#ffffff":"#203a43",transition:"all 0.3s ease",boxShadow:n?"0 4px 12px rgba(0, 0, 0, 0.15)":"none",transform:n?"translateY(-2px)":"none"},children:[t.jsx(Ge,{className:"me-2"})," ",e("landing.download")]}),t.jsx("a",{href:"https://opencollective.com/dekusms",target:"_blank",rel:"noreferrer",className:"btn btn-outline-light px-4 py-2",style:{minWidth:"140px",fontWeight:"600",color:"#2ED3B7"},children:e("landing.donate")})]}),t.jsxs("p",{className:"mb-2",children:[e("landing.join")," ",t.jsx("a",{href:"https://t.me/dekusms",target:"_blank",rel:"noreferrer","aria-label":"Telegram",style:{color:"#2ED3B7",textDecoration:"none",fontWeight:"500"},onMouseOver:o=>o.target.style.textDecoration="underline",onMouseOut:o=>o.target.style.textDecoration="none",children:"Telegram"})," ","&"," ",t.jsx("a",{href:"https://t.me/dekusms",target:"_blank",rel:"noreferrer","aria-label":"Reddit",style:{color:"#2ED3B7",textDecoration:"none",fontWeight:"500"},onMouseOver:o=>o.target.style.textDecoration="underline",onMouseOut:o=>o.target.style.textDecoration="none",children:"Reddit"})," ",e("landing.forUpdates")," "]})]}),t.jsx(P,{xs:12,md:4,className:"d-flex justify-content-center mb-4 mb-md-0 mt-md-0 mt-4",children:t.jsx(J,{src:"/Home.png",alt:"Illustration of DekuSMS mobile interface",fluid:!0,className:"img-responsive",style:{width:"100%",maxWidth:"300px",height:"auto",maxHeight:"65vh",objectFit:"contain",transform:"rotate(-10deg)",pointerEvents:"none"}})}),t.jsxs(P,{xs:12,md:3,className:"pt-md-5 px-4",children:[t.jsx("h5",{className:"text-uppercase fw-semibold text-light mb-3",children:e("landing.features.featuresTitle")}),t.jsx(U,{variant:"flush",className:"text-white",children:a.map((o,i)=>t.jsxs(U.Item,{className:"bg-transparent border-0 d-flex align-items-center text-white px-0 py-2",children:[t.jsx(Ue,{className:"me-2",style:{color:"#2ED3B7"}}),o]},i))})]})]})})})},Ye=()=>{const{t:e,i18n:n}=N("dekusms"),r=["fa","ar"].includes(n.language),a=[{image:"CloudForwarding.png",title:e("landing.feature.feature3Title"),desc:e("landing.feature.feature3Desc")},{image:"Cloud-forwarding.png",title:e("landing.feature.feature2Title"),desc:e("landing.feature.feature2Desc")},{image:"e2ee.png",title:e("landing.feature.feature1Title"),desc:e("landing.feature.feature1Desc")},{image:"UX.png",title:e("landing.feature.feature4Title"),desc:e("landing.feature.feature4Desc")}];return t.jsxs("section",{className:"features-section",dir:r?"rtl":"ltr",children:[t.jsxs(q,{children:[t.jsxs("div",{className:"text-center mb-5",children:[t.jsx("h2",{className:"fw-bold",children:e("landing.featuresTitle")}),t.jsx("p",{className:"text-light fs-5",children:e("landing.featuresIntro")})]}),t.jsx("div",{className:"timeline",children:a.map((o,i)=>{const d=i%2===0===!r?"left":"right";return t.jsx("div",{className:`timeline-item ${d}`,children:t.jsxs("div",{className:`content-box feature-bg-${i%4+1}`,children:[t.jsx("div",{className:"icon",children:t.jsx("img",{src:o.image,alt:`Feature icon: ${o.title}`,className:"card-icon"})}),t.jsx("h5",{className:"fw-bold",children:o.title}),t.jsx("p",{children:o.desc})]})},i)})})]}),t.jsx("style",{jsx:!0,children:`
        .features-section {
          background: linear-gradient(15deg, #203a43, rgb(47, 56, 55), #203a43);
          box-shadow: 0 8px 24px rgba(26, 39, 49, 0.5);
          color: white;
          padding: 50px 0;
          overflow-x: hidden;
        }
        .card-icon {
          width: 60px;
          height: 60px;
          object-fit: contain;
        }

        .feature-bg-1 {
          background-color: #26272b;
        }
        .feature-bg-2 {
          background-color: rgb(63, 68, 71);
        }

        .feature-bg-3 {
          background-color: rgb(41, 43, 49);
          color: rgb(236, 243, 248);
        }

        .feature-bg-4 {
          background-color: rgb(63, 68, 71);
        }

        .timeline {
          position: relative;
          margin-top: 40px;
          padding: 0 5px;
        }

        .timeline::before {
          content: "";
          position: absolute;
          top: 60px;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          background-color: rgb(64, 177, 171);
          z-index: 1;
        }

        .timeline-item {
          position: relative;
          width: 50%;
          padding: 20px 40px;
          box-sizing: border-box;
          z-index: 2;
        }

        .timeline-item.left {
          left: 0;
          display: flex;
          justify-content: flex-start;
        }

        .timeline-item.right {
          left: 50%;
          display: flex;
          justify-content: flex-end;
        }

        .content-box {
          border-radius: 1rem;
          padding: 30px;
          position: relative;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
          text-align: start;
        }

        [dir="rtl"] .content-box {
          text-align: right;
        }

        [dir="ltr"] .content-box {
          text-align: left;
        }

        .content-box h5 {
          font-size: clamp(1rem, 2vw, 1.5rem);
          line-height: 1.3;
          margin-bottom: 12px;
        }

        .content-box p {
          font-size: clamp(0.9rem, 1.6vw, 1.1rem);
          line-height: 1.6;
          margin-bottom: 0;
        }

        .timeline-item.left .content-box::after,
        .timeline-item.right .content-box::after {
          content: "";
          position: absolute;
          top: 30px;
          width: 12px;
          height: 12px;
          background: rgb(64, 177, 171);
          border-radius: 50%;
          z-index: 3;
        }

        .timeline-item.left .content-box::after {
          right: -46px;
        }

        .timeline-item.right .content-box::after {
          left: -46px;
        }

        .icon {
          margin-bottom: 10px;
        }

        [dir="rtl"] .timeline::before {
          left: auto;
          right: 50%;
          transform: translateX(50%);
        }

        [dir="rtl"] .timeline-item.left {
          left: auto;
          right: 0;
          justify-content: flex-end;
        }

        [dir="rtl"] .timeline-item.right {
          left: auto;
          right: 50%;
          justify-content: flex-start;
        }

        [dir="rtl"] .timeline-item.left .content-box::after {
          left: -46px;
          right: auto;
        }

        [dir="rtl"] .timeline-item.right .content-box::after {
          right: -46px;
          left: auto;
        }

        @media (max-width: 768px) {
          .timeline::before {
            display: none;
          }

          .timeline-item,
          .timeline-item.left,
          .timeline-item.right {
            left: 0 !important;
            right: 0 !important;
            width: 100% !important;
            margin-bottom: 40px;
            display: block;
            justify-content: center !important;
            padding: 0;
          }

          .timeline-item .content-box {
            margin: 0 auto;
            max-width: 90%;
            padding: 20px;
            text-align: start;
          }

          [dir="rtl"] .timeline-item .content-box {
            text-align: right;
          }

          .timeline-item .content-box::after {
            display: none;
          }
        }
      `})]})},qe=()=>{const{t:e,i18n:n}=N("dekusms"),r=n.dir()==="rtl",a=[{href:"https://play.google.com/store/apps/details?id=com.afkanerd.deku&pcampaignid=web_share",img:"/playstore.webp",alt:"Google Play Store",title:e("download.googlePlay.title"),desc:e("download.googlePlay.desc"),bg:"#e9f8f0"},{href:"https://f-droid.org/docs/Reproducible_Builds/",img:"/fdroid.png",alt:"F-Droid",title:e("download.fdroid.title"),desc:e("download.fdroid.desc"),bg:"#ecf2fd"},{href:"https://github.com/dekusms/DekuSMS-Android?tab=readme-ov-file",img:"/github.png",alt:"GitHub",title:e("download.github.title"),desc:e("download.github.desc"),bg:"#f4f4f4"}];return t.jsx("section",{id:"download",dir:n.dir(),className:"download-section",children:t.jsxs("div",{className:"container text-center",children:[t.jsx("h2",{className:"fw-bold mb-3 display-6 download-title",children:e("download.title")}),t.jsx("p",{className:"text-muted mb-5",children:e("download.subtitle")}),t.jsx("div",{className:"row justify-content-center g-4",children:a.map((o,i)=>t.jsx("div",{className:"col-md-6 col-lg-4",children:t.jsxs("a",{href:o.href,target:"_blank",rel:"noopener noreferrer",className:`download-card d-flex ${r?"flex-row-reverse text-end":"text-start"} align-items-center h-100 shadow-sm`,style:{background:o.bg,borderRadius:"1.5rem",padding:"1.5rem",gap:"1rem",height:"100%",textDecoration:"none",color:"#111",transition:"all 0.3s ease-in-out"},children:[t.jsx("img",{src:o.img,alt:o.alt,style:{width:"50px",height:"50px",objectFit:"contain",borderRadius:"12px",flexShrink:0}}),t.jsxs("div",{className:"flex-grow-1",children:[t.jsx("h5",{className:"fw-semibold mb-1",children:o.title}),t.jsx("p",{className:"text-muted small mb-0",children:o.desc})]})]})},i))})]})})},Y=[{code:"en",label:"English",flag:"🇬🇧"},{code:"fr",label:"Français",flag:"🇫🇷"},{code:"fa",label:"فارسی",flag:"🇮🇷"},{code:"ar",label:"العربية",flag:"🇸🇦"},{code:"es",label:"Español",flag:"🇪🇸"},{code:"it",label:"Italiano",flag:"🇮🇹"},{code:"de",label:"Nederlands",flag:"🇳🇱"}],Ve=()=>{var g;const{t:e}=N("dekusms"),[n,r]=s.useState(!1),[a,o]=s.useState(!1),i=s.useRef(null),f=s.useRef(null),[d,u]=s.useState(!1);s.useEffect(()=>{function l(p){i.current&&!i.current.contains(p.target)&&o(!1)}return document.addEventListener("mousedown",l),()=>document.removeEventListener("mousedown",l)},[]),s.useEffect(()=>{function l(){u(window.scrollY>50)}return window.addEventListener("scroll",l),()=>window.removeEventListener("scroll",l)},[]);const m=l=>{F.changeLanguage(l),o(!1),r(!1)},c=[{href:"https://blog.smswithoutborders.com",label:e("navbar.blog"),external:!0},{href:"https://docs.smswithoutborders.com",label:e("navbar.documentation"),external:!0},{href:"https://opencollective.com/dekusms",label:e("navbar.support"),external:!0},{to:"/download",label:e("navbar.download"),external:!1}];return t.jsx(t.Fragment,{children:t.jsxs("nav",{ref:f,className:`navbar-glassmorphism ${d?"navbar-scrolled":""}`,role:"navigation","aria-label":"main navigation",children:[t.jsxs("div",{className:"navbar-container",children:[t.jsx(E,{to:"/",className:"navbar-brand",onClick:()=>r(!1),children:t.jsx("img",{src:"/logo/DekuSMS-Dark Theme.png",alt:"DekuSMS Logo",className:"navbar-logo",loading:"lazy"})}),t.jsx("button",{className:"navbar-burger","aria-label":"menu","aria-expanded":n,onClick:()=>r(!n),children:t.jsx(j,{icon:n?ue:fe,size:"lg"})}),t.jsx("div",{className:`navbar-menu ${n?"is-active":""}`,children:t.jsxs("ul",{className:"navbar-links",children:[c.map((l,p)=>t.jsx("li",{children:l.external?t.jsx("a",{href:l.href,target:"_blank",rel:"noopener noreferrer",onClick:()=>r(!1),className:"nav-link",children:l.label}):t.jsx(E,{to:l.to,onClick:()=>r(!1),className:"nav-link",children:l.label})},p)),t.jsx("li",{children:t.jsx("a",{href:"https://github.com/dekusms/DekuSMS-Android",target:"_blank",rel:"noopener noreferrer",className:"nav-link icon-link",onClick:()=>r(!1),"aria-label":"GitHub",children:t.jsx(j,{icon:V,size:"lg"})})}),t.jsxs("li",{className:"language-selector",ref:i,children:[t.jsxs("button",{className:"lang-button",onClick:()=>o(!a),"aria-haspopup":"true","aria-expanded":a,children:[t.jsx(j,{icon:me}),t.jsx("span",{className:"lang-flag",children:(g=Y.find(l=>l.code===F.language))==null?void 0:g.flag}),t.jsx("span",{className:"lang-label",children:e("navbar.language")})]}),a&&t.jsx("ul",{className:"lang-dropdown",role:"menu",children:Y.map(l=>t.jsxs("li",{className:"lang-option",onClick:()=>m(l.code),role:"menuitem",tabIndex:0,onKeyDown:p=>{(p.key==="Enter"||p.key===" ")&&m(l.code)},children:[t.jsx("span",{className:"lang-flag",children:l.flag}),t.jsx("span",{className:"lang-label",children:l.label})]},l.code))})]})]})})]}),n&&t.jsx("div",{className:"navbar-overlay",onClick:()=>r(!1),"aria-hidden":"true"}),t.jsx("style",{jsx:"true",children:`
          * {
            box-sizing: border-box;
          }
          a {
            text-decoration: none;
          }

          .navbar-glassmorphism {
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 1100;
            backdrop-filter: blur(10px);
            background: rgba(15, 32, 39, 0.5);
            border-bottom: 1px solid rgba(255 255 255 / 0.1);
            transition: background-color 0.3s ease, box-shadow 0.3s ease;
            font-family: 'Unbounded', 'Mona Sans', sans-serif;
          }

          .navbar-scrolled {
            background: rgba(15, 32, 39, 0.85);
            box-shadow: 0 2px 10px rgba(46, 211, 183, 0.3);
          }

          .navbar-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0.5rem 1.5rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .navbar-brand {
            display: flex;
            align-items: center;
            cursor: pointer;
            transition: transform 0.3s ease;
          }
          .navbar-brand:hover {
            transform: scale(1.07);
          }
          .navbar-logo {
            height: 26px;
            user-select: none;
          }

          .navbar-burger {
            display: none;
            background: none;
            border: none;
            color:rgb(25, 218, 185);
            cursor: pointer;
            transition: color 0.3s ease;
          }
          .navbar-burger:hover {
            color:rgb(150, 235, 232);
          }

          .navbar-menu {
            display: flex;
            align-items: center;
          }

          .navbar-links {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            gap: 2rem;
          }
          .navbar-links li {
            position: relative;
          }

          .nav-link {
            font-weight: 600;
            font-size: 1rem;
            color: #ffffffdd;
            padding: 8px 0;
            position: relative;
            transition: color 0.3s ease;
          }
          .nav-link::after {
            content: "";
            position: absolute;
            width: 0%;
            height: 2px;
            left: 0;
            bottom: -3px;
            background: #2ed3b7;
            transition: width 0.3s ease;
            border-radius: 2px;
          }
          .nav-link:hover,
          .nav-link:focus {
            color: #2ed3b7;
            outline: none;
          }
          .nav-link:hover::after,
          .nav-link:focus::after {
            width: 100%;
          }

          .icon-link {
            font-size: 1.25rem;
          }
          .icon-link:hover {
            color: #00fff7;
          }

          .language-selector {
            position: relative;
          }
          .lang-button {
            background: transparent;
            border: 1.5px solid #2ed3b7;
            color: #2ed3b7;
            padding: 6px 12px;
            font-weight: 600;
            border-radius: 10px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: background-color 0.3s ease, color 0.3s ease;
          }
          .lang-button:hover,
          .lang-button:focus {
            background: #2ed3b7;
            color: #0f2027;
            outline: none;
          }
          .lang-flag {
            font-size: 18px;
          }
          .lang-label {
            font-size: 0.9rem;
            user-select: none;
          }

          .lang-dropdown {
            position: absolute;
            top: calc(100% + 6px);
            right: 0;
            background: #0f2027;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
            width: 180px;
            overflow: hidden;
            z-index: 1200;
            animation: dropdownFadeIn 0.25s ease forwards;
          }
          @keyframes dropdownFadeIn {
            from {
              opacity: 0;
              transform: translateY(-5px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .lang-option {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 10px 14px;
            font-size: 1rem;
            color: #c5f5eb;
            cursor: pointer;
            user-select: none;
            transition: background-color 0.2s ease;
          }
          .lang-option:hover,
          .lang-option:focus {
            background-color: #2ed3b7;
            outline: none;
          }

          @media (max-width: 991px) {
            .navbar-burger {
              display: block;
            }
          .navbar-menu {
  position: fixed;
  top: 0;
  right: 0;
  height: 70vh;
  width: 200px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  background: rgba(15, 32, 39, 0.95);
  backdrop-filter: blur(15px);
  flex-direction: column;
  padding: 3rem 2rem;
  transform: translateX(100%);
  transition: transform 0.3s ease;
  box-shadow: -2px 0 10px rgba(46, 211, 183, 0.3);
  z-index: 1200;
}
            .navbar-menu.is-active {
              transform: translateX(0);
            }
            .navbar-links {
              flex-direction: column;
              gap: 1.6rem;
            }
            .language-selector {
              margin-top: auto;
            }
          }

          .navbar-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.25);
            z-index: 1100;
          }
        `})]})})},Je=()=>{const{t:e}=N("dekusms");return t.jsx("footer",{className:"footer text-white py-5",style:{background:"linear-gradient(135deg, #0f2027, #203a43, #2c5364)",boxShadow:"5px 5px 15px rgba(37, 63, 78, 0.97)"},children:t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"row",children:[t.jsxs("div",{className:"col-12 col-md-3 mb-4",children:[t.jsx("h2",{className:"footer-logo text-light",children:e("footer.branding.logo")}),t.jsx("p",{className:"footer-tagline",children:e("footer.branding.tagline")}),t.jsxs("div",{className:"footer-socials d-flex gap-3 mt-3",children:[t.jsx("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",className:"text-light",children:t.jsx(j,{icon:ge,className:"social-icon"})}),t.jsx("a",{href:"https://github.com/dekusms/DekuSMS-Android",target:"_blank",rel:"noopener noreferrer",className:"text-light",children:t.jsx(j,{icon:V,className:"social-icon"})}),t.jsx("a",{href:"https://t.me/deku_sms",target:"_blank",rel:"noopener noreferrer",className:"text-light",children:t.jsx(j,{icon:xe,className:"social-icon"})})]})]}),t.jsxs("div",{className:"col-12 col-md-3 mb-4",children:[t.jsx("h3",{className:"footer-title text-light",children:e("footer.navigation.title")}),t.jsxs("ul",{className:"list-unstyled",children:[t.jsx("li",{children:t.jsx("a",{href:"https://github.com/dekusms/DekuSMS-Android/blob/master/README.md#-end-to-end-encryption",target:"_blank",rel:"noopener noreferrer",children:e("footer.navigation.about")})}),t.jsx("li",{children:t.jsx("a",{href:"https://play.google.com/store/apps/details?id=com.afkanerd.deku&pcampaignid=web_share",target:"_blank",rel:"noopener noreferrer",children:e("footer.navigation.download")})})]})]}),t.jsxs("div",{className:"col-12 col-md-3 mb-4",children:[t.jsx("h3",{className:"footer-title text-light",children:e("footer.resources.title")}),t.jsxs("ul",{className:"list-unstyled",children:[t.jsx("li",{children:t.jsx("a",{href:"mailto:developers@smswithoutborders.com",children:e("footer.navigation.contact")})}),t.jsx("li",{children:t.jsx("a",{href:"https://docs.smswithoutborders.com/docs/Troubleshooting/DekuSMS",target:"_blank",rel:"noopener noreferrer",children:e("footer.donate.documentation")})})]})]}),t.jsxs("div",{className:"col-12 col-md-3 mb-4",children:[t.jsx("h3",{className:"footer-title text-light",children:e("footer.donate.title")||"Support Our Mission"}),t.jsx("p",{className:"text-light small",children:e("footer.donate.message")||"Help us keep DekuSMS free, secure, and open source for everyone."}),t.jsx("a",{href:"https://www.buymeacoffee.com/dekusms",target:"_blank",rel:"noopener noreferrer",className:"btn btn-outline-light",style:{fontWeight:"600",padding:"6px 18px",borderRadius:"25px"},children:e("footer.donate.donate")||"Donate"})]})]}),t.jsx("div",{className:"footer-bottom text-center mt-4",children:t.jsx("p",{children:e("footer.copyright",{year:new Date().getFullYear()})})})]})})},Ze=()=>t.jsxs("section",{className:"home",children:[t.jsx(Ve,{}),t.jsx(Xe,{}),t.jsx(Ye,{}),t.jsx(qe,{}),t.jsx(Je,{})]});export{Ze as default};
