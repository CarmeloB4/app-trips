import{C as de,D as me,Da as _e,E as pe,Ea as ze,F as y,G as O,Ga as Le,H as he,I as tt,J as ge,K as ye,Ka as Re,Ma as je,Na as We,P as It,Q as ve,R as ct,T as be,U as xe,V as Ce,W as Ae,X as g,Y as v,Z as ft,_ as we,aa as Ie,ba as ke,c as pa,ca as Se,d as ha,da as C,ea as W,fa as G,h as oe,ia as H,ja as X,ka as Oe,n as se,o as le,qa as Ee,r as Z,s as ce,sa as Te,ta as Pe,u as fe,ua as Fe,v as ue,va as De,x as lt,xa as Ne,za as Me}from"./chunk-LFECLDGT.js";var ca=pa(I=>{"use strict";Object.defineProperty(I,"__esModule",{value:!0});var aa="fas",ia="star",ra=576,oa=512,re=[11088,61446],sa="f005",la="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z";I.definition={prefix:aa,iconName:ia,icon:[ra,oa,re,sa,la]};I.faStar=I.definition;I.prefix=aa;I.iconName=ia;I.width=ra;I.height=oa;I.ligatures=re;I.unicode=sa;I.svgPathData=la;I.aliases=re});function ga(t,e,n){return(e=va(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function He(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?He(Object(n),!0).forEach(function(a){ga(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):He(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function ya(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function va(t){var e=ya(t,"string");return typeof e=="symbol"?e:e+""}var $e=()=>{},Gt={},hn={},gn=null,yn={mark:$e,measure:$e};try{typeof window<"u"&&(Gt=window),typeof document<"u"&&(hn=document),typeof MutationObserver<"u"&&(gn=MutationObserver),typeof performance<"u"&&(yn=performance)}catch{}var{userAgent:Ye=""}=Gt.navigator||{},z=Gt,h=hn,Ue=gn,ut=yn,Mr=!!z.document,N=!!h.documentElement&&!!h.head&&typeof h.addEventListener=="function"&&typeof h.createElement=="function",vn=~Ye.indexOf("MSIE")||~Ye.indexOf("Trident/"),ba=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,xa=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,bn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Ca={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},xn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],b="classic",yt="duotone",Aa="sharp",wa="sharp-duotone",Cn=[b,yt,Aa,wa],Ia={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},ka={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Sa=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Oa={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Ea=["fak","fa-kit","fakd","fa-kit-duotone"],Be={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Ta=["kit"],Pa={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Fa=["fak","fakd"],Da={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Ve={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},dt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Na=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Ma=["fak","fa-kit","fakd","fa-kit-duotone"],_a={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},za={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},La={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Pt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Ra=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Ft=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Na,...Ra],ja=["solid","regular","light","thin","duotone","brands"],An=[1,2,3,4,5,6,7,8,9,10],Wa=An.concat([11,12,13,14,15,16,17,18,19,20]),Ha=[...Object.keys(La),...ja,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",dt.GROUP,dt.SWAP_OPACITY,dt.PRIMARY,dt.SECONDARY].concat(An.map(t=>"".concat(t,"x"))).concat(Wa.map(t=>"w-".concat(t))),$a={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},F="___FONT_AWESOME___",Dt=16,wn="fa",In="svg-inline--fa",Y="data-fa-i2svg",Nt="data-fa-pseudo-element",Ya="data-fa-pseudo-element-pending",Xt="data-prefix",Kt="data-icon",Ge="fontawesome-i2svg",Ua="async",Ba=["HTML","HEAD","STYLE","SCRIPT"],kn=(()=>{try{return!0}catch{return!1}})();function ot(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[b]}})}var Sn=s({},bn);Sn[b]=s(s(s(s({},{"fa-duotone":"duotone"}),bn[b]),Be.kit),Be["kit-duotone"]);var Va=ot(Sn),Mt=s({},Oa);Mt[b]=s(s(s(s({},{duotone:"fad"}),Mt[b]),Ve.kit),Ve["kit-duotone"]);var Xe=ot(Mt),_t=s({},Pt);_t[b]=s(s({},_t[b]),Da.kit);var qt=ot(_t),zt=s({},za);zt[b]=s(s({},zt[b]),Pa.kit);var _r=ot(zt),Ga=ba,On="fa-layers-text",Xa=xa,Ka=s({},Ia),zr=ot(Ka),qa=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],kt=Ca,Ja=[...Ta,...Ha],nt=z.FontAwesomeConfig||{};function Qa(t){var e=h.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Za(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}h&&typeof h.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e,i=Za(Qa(n));i!=null&&(nt[a]=i)});var En={styleDefault:"solid",familyDefault:b,cssPrefix:wn,replacementClass:In,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};nt.familyPrefix&&(nt.cssPrefix=nt.familyPrefix);var J=s(s({},En),nt);J.autoReplaceSvg||(J.observeMutations=!1);var c={};Object.keys(En).forEach(t=>{Object.defineProperty(c,t,{enumerable:!0,set:function(e){J[t]=e,at.forEach(n=>n(c))},get:function(){return J[t]}})});Object.defineProperty(c,"familyPrefix",{enumerable:!0,set:function(t){J.cssPrefix=t,at.forEach(e=>e(c))},get:function(){return J.cssPrefix}});z.FontAwesomeConfig=c;var at=[];function ti(t){return at.push(t),()=>{at.splice(at.indexOf(t),1)}}var _=Dt,E={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ei(t){if(!t||!N)return;let e=h.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;let n=h.head.childNodes,a=null;for(let i=n.length-1;i>-1;i--){let r=n[i],o=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=r)}return h.head.insertBefore(e,a),t}var ni="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function it(){let t=12,e="";for(;t-- >0;)e+=ni[Math.random()*62|0];return e}function Q(t){let e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Jt(t){return t.classList?Q(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Tn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ai(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Tn(t[n]),'" '),"").trim()}function vt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Qt(t){return t.size!==E.size||t.x!==E.x||t.y!==E.y||t.rotate!==E.rotate||t.flipX||t.flipY}function ii(t){let{transform:e,containerWidth:n,iconWidth:a}=t,i={transform:"translate(".concat(n/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(r," ").concat(o," ").concat(l)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:i,inner:u,path:f}}function ri(t){let{transform:e,width:n=Dt,height:a=Dt,startCentered:i=!1}=t,r="";return i&&vn?r+="translate(".concat(e.x/_-n/2,"em, ").concat(e.y/_-a/2,"em) "):i?r+="translate(calc(-50% + ".concat(e.x/_,"em), calc(-50% + ").concat(e.y/_,"em)) "):r+="translate(".concat(e.x/_,"em, ").concat(e.y/_,"em) "),r+="scale(".concat(e.size/_*(e.flipX?-1:1),", ").concat(e.size/_*(e.flipY?-1:1),") "),r+="rotate(".concat(e.rotate,"deg) "),r}var oi=`:root, :host {
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
}`;function Pn(){let t=wn,e=In,n=c.cssPrefix,a=c.replacementClass,i=oi;if(n!==t||a!==e){let r=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");i=i.replace(r,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(a))}return i}var Ke=!1;function St(){c.autoAddCss&&!Ke&&(ei(Pn()),Ke=!0)}var si={mixout(){return{dom:{css:Pn,insertCss:St}}},hooks(){return{beforeDOMElementCreation(){St()},beforeI2svg(){St()}}}},D=z||{};D[F]||(D[F]={});D[F].styles||(D[F].styles={});D[F].hooks||(D[F].hooks={});D[F].shims||(D[F].shims=[]);var T=D[F],Fn=[],Dn=function(){h.removeEventListener("DOMContentLoaded",Dn),ht=1,Fn.map(t=>t())},ht=!1;N&&(ht=(h.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(h.readyState),ht||h.addEventListener("DOMContentLoaded",Dn));function li(t){N&&(ht?setTimeout(t,0):Fn.push(t))}function st(t){let{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?Tn(t):"<".concat(e," ").concat(ai(n),">").concat(a.map(st).join(""),"</").concat(e,">")}function qe(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var ci=function(e,n){return function(a,i,r,o){return e.call(n,a,i,r,o)}},Ot=function(e,n,a,i){var r=Object.keys(e),o=r.length,l=i!==void 0?ci(n,i):n,u,f,d;for(a===void 0?(u=1,d=e[r[0]]):(u=0,d=a);u<o;u++)f=r[u],d=l(d,e[f],f,e);return d};function fi(t){let e=[],n=0,a=t.length;for(;n<a;){let i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<a){let r=t.charCodeAt(n++);(r&64512)==56320?e.push(((i&1023)<<10)+(r&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Lt(t){let e=fi(t);return e.length===1?e[0].toString(16):null}function ui(t,e){let n=t.length,a=t.charCodeAt(e),i;return a>=55296&&a<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(a-55296)*1024+i-56320+65536:a}function Je(t){return Object.keys(t).reduce((e,n)=>{let a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function Rt(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:a=!1}=n,i=Je(e);typeof T.hooks.addPack=="function"&&!a?T.hooks.addPack(t,Je(e)):T.styles[t]=s(s({},T.styles[t]||{}),i),t==="fas"&&Rt("fa",e)}var{styles:rt,shims:di}=T,Nn=Object.keys(qt),mi=Nn.reduce((t,e)=>(t[e]=Object.keys(qt[e]),t),{}),Zt=null,Mn={},_n={},zn={},Ln={},Rn={};function pi(t){return~Ja.indexOf(t)}function hi(t,e){let n=e.split("-"),a=n[0],i=n.slice(1).join("-");return a===t&&i!==""&&!pi(i)?i:null}var jn=()=>{let t=a=>Ot(rt,(i,r,o)=>(i[o]=Ot(r,a,{}),i),{});Mn=t((a,i,r)=>(i[3]&&(a[i[3]]=r),i[2]&&i[2].filter(l=>typeof l=="number").forEach(l=>{a[l.toString(16)]=r}),a)),_n=t((a,i,r)=>(a[r]=r,i[2]&&i[2].filter(l=>typeof l=="string").forEach(l=>{a[l]=r}),a)),Rn=t((a,i,r)=>{let o=i[2];return a[r]=r,o.forEach(l=>{a[l]=r}),a});let e="far"in rt||c.autoFetchSvg,n=Ot(di,(a,i)=>{let r=i[0],o=i[1],l=i[2];return o==="far"&&!e&&(o="fas"),typeof r=="string"&&(a.names[r]={prefix:o,iconName:l}),typeof r=="number"&&(a.unicodes[r.toString(16)]={prefix:o,iconName:l}),a},{names:{},unicodes:{}});zn=n.names,Ln=n.unicodes,Zt=bt(c.styleDefault,{family:c.familyDefault})};ti(t=>{Zt=bt(t.styleDefault,{family:c.familyDefault})});jn();function te(t,e){return(Mn[t]||{})[e]}function gi(t,e){return(_n[t]||{})[e]}function $(t,e){return(Rn[t]||{})[e]}function Wn(t){return zn[t]||{prefix:null,iconName:null}}function yi(t){let e=Ln[t],n=te("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function L(){return Zt}var Hn=()=>({prefix:null,iconName:null,rest:[]});function vi(t){let e=b,n=Nn.reduce((a,i)=>(a[i]="".concat(c.cssPrefix,"-").concat(i),a),{});return Cn.forEach(a=>{(t.includes(n[a])||t.some(i=>mi[a].includes(i)))&&(e=a)}),e}function bt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:n=b}=e,a=Va[n][t];if(n===yt&&!t)return"fad";let i=Xe[n][t]||Xe[n][a],r=t in T.styles?t:null;return i||r||null}function bi(t){let e=[],n=null;return t.forEach(a=>{let i=hi(c.cssPrefix,a);i?n=i:a&&e.push(a)}),{iconName:n,rest:e}}function Qe(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function xt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:n=!1}=e,a=null,i=Ft.concat(Ma),r=Qe(t.filter(p=>i.includes(p))),o=Qe(t.filter(p=>!Ft.includes(p))),l=r.filter(p=>(a=p,!xn.includes(p))),[u=null]=l,f=vi(r),d=s(s({},bi(o)),{},{prefix:bt(u,{family:f})});return s(s(s({},d),wi({values:t,family:f,styles:rt,config:c,canonical:d,givenPrefix:a})),xi(n,a,d))}function xi(t,e,n){let{prefix:a,iconName:i}=n;if(t||!a||!i)return{prefix:a,iconName:i};let r=e==="fa"?Wn(i):{},o=$(a,i);return i=r.iconName||o||i,a=r.prefix||a,a==="far"&&!rt.far&&rt.fas&&!c.autoFetchSvg&&(a="fas"),{prefix:a,iconName:i}}var Ci=Cn.filter(t=>t!==b||t!==yt),Ai=Object.keys(Pt).filter(t=>t!==b).map(t=>Object.keys(Pt[t])).flat();function wi(t){let{values:e,family:n,canonical:a,givenPrefix:i="",styles:r={},config:o={}}=t,l=n===yt,u=e.includes("fa-duotone")||e.includes("fad"),f=o.familyDefault==="duotone",d=a.prefix==="fad"||a.prefix==="fa-duotone";if(!l&&(u||f||d)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&Ci.includes(n)&&(Object.keys(r).find(m=>Ai.includes(m))||o.autoFetchSvg)){let m=Sa.get(n).defaultShortPrefixId;a.prefix=m,a.iconName=$(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||i==="fa")&&(a.prefix=L()||"fas"),a}var jt=class{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];let i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(r=>{this.definitions[r]=s(s({},this.definitions[r]||{}),i[r]),Rt(r,i[r]);let o=qt[b][r];o&&Rt(o,i[r]),jn()})}reset(){this.definitions={}}_pullDefinitions(e,n){let a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(i=>{let{prefix:r,iconName:o,icon:l}=a[i],u=l[2];e[r]||(e[r]={}),u.length>0&&u.forEach(f=>{typeof f=="string"&&(e[r][f]=l)}),e[r][o]=l}),e}},Ze=[],K={},q={},Ii=Object.keys(q);function ki(t,e){let{mixoutsTo:n}=e;return Ze=t,K={},Object.keys(q).forEach(a=>{Ii.indexOf(a)===-1&&delete q[a]}),Ze.forEach(a=>{let i=a.mixout?a.mixout():{};if(Object.keys(i).forEach(r=>{typeof i[r]=="function"&&(n[r]=i[r]),typeof i[r]=="object"&&Object.keys(i[r]).forEach(o=>{n[r]||(n[r]={}),n[r][o]=i[r][o]})}),a.hooks){let r=a.hooks();Object.keys(r).forEach(o=>{K[o]||(K[o]=[]),K[o].push(r[o])})}a.provides&&a.provides(q)}),n}function Wt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),i=2;i<n;i++)a[i-2]=arguments[i];return(K[t]||[]).forEach(o=>{e=o.apply(null,[e,...a])}),e}function U(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(K[t]||[]).forEach(r=>{r.apply(null,n)})}function R(){let t=arguments[0],e=Array.prototype.slice.call(arguments,1);return q[t]?q[t].apply(null,e):void 0}function Ht(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t,n=t.prefix||L();if(e)return e=$(n,e)||e,qe($n.definitions,n,e)||qe(T.styles,n,e)}var $n=new jt,Si=()=>{c.autoReplaceSvg=!1,c.observeMutations=!1,U("noAuto")},Oi={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return N?(U("beforeI2svg",t),R("pseudoElements2svg",t),R("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:e}=t;c.autoReplaceSvg===!1&&(c.autoReplaceSvg=!0),c.observeMutations=!0,li(()=>{Ti({autoReplaceSvgRoot:e}),U("watch",t)})}},Ei={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:$(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){let e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=bt(t[0]);return{prefix:n,iconName:$(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(c.cssPrefix,"-"))>-1||t.match(Ga))){let e=xt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||L(),iconName:$(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){let e=L();return{prefix:e,iconName:$(e,t)||t}}}},w={noAuto:Si,config:c,dom:Oi,parse:Ei,library:$n,findIconDefinition:Ht,toHtml:st},Ti=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:e=h}=t;(Object.keys(T.styles).length>0||c.autoFetchSvg)&&N&&c.autoReplaceSvg&&w.dom.i2svg({node:e})};function Ct(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>st(n))}}),Object.defineProperty(t,"node",{get:function(){if(!N)return;let n=h.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Pi(t){let{children:e,main:n,mask:a,attributes:i,styles:r,transform:o}=t;if(Qt(o)&&n.found&&!a.found){let{width:l,height:u}=n,f={x:l/u/2,y:.5};i.style=vt(s(s({},r),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function Fi(t){let{prefix:e,iconName:n,children:a,attributes:i,symbol:r}=t,o=r===!0?"".concat(e,"-").concat(c.cssPrefix,"-").concat(n):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:s(s({},i),{},{id:o}),children:a}]}]}function ee(t){let{icons:{main:e,mask:n},prefix:a,iconName:i,transform:r,symbol:o,title:l,maskId:u,titleId:f,extra:d,watchable:p=!1}=t,{width:m,height:x}=n.found?n:e,M=Fa.includes(a),j=[c.replacementClass,i?"".concat(c.cssPrefix,"-").concat(i):""].filter(V=>d.classes.indexOf(V)===-1).filter(V=>V!==""||!!V).concat(d.classes).join(" "),k={children:[],attributes:s(s({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:j,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(x)})},P=M&&!~d.classes.indexOf("fa-fw")?{width:"".concat(m/x*16*.0625,"em")}:{};p&&(k.attributes[Y]=""),l&&(k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(f||it())},children:[l]}),delete k.attributes.title);let A=s(s({},k),{},{prefix:a,iconName:i,main:e,mask:n,maskId:u,transform:r,symbol:o,styles:s(s({},P),d.styles)}),{children:S,attributes:B}=n.found&&e.found?R("generateAbstractMask",A)||{children:[],attributes:{}}:R("generateAbstractIcon",A)||{children:[],attributes:{}};return A.children=S,A.attributes=B,o?Fi(A):Pi(A)}function tn(t){let{content:e,width:n,height:a,transform:i,title:r,extra:o,watchable:l=!1}=t,u=s(s(s({},o.attributes),r?{title:r}:{}),{},{class:o.classes.join(" ")});l&&(u[Y]="");let f=s({},o.styles);Qt(i)&&(f.transform=ri({transform:i,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);let d=vt(f);d.length>0&&(u.style=d);let p=[];return p.push({tag:"span",attributes:u,children:[e]}),r&&p.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),p}function Di(t){let{content:e,title:n,extra:a}=t,i=s(s(s({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),r=vt(a.styles);r.length>0&&(i.style=r);let o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var{styles:Et}=T;function $t(t){let e=t[0],n=t[1],[a]=t.slice(4),i=null;return Array.isArray(a)?i={tag:"g",attributes:{class:"".concat(c.cssPrefix,"-").concat(kt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(c.cssPrefix,"-").concat(kt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(c.cssPrefix,"-").concat(kt.PRIMARY),fill:"currentColor",d:a[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:i}}var Ni={found:!1,width:512,height:512};function Mi(t,e){!kn&&!c.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Yt(t,e){let n=e;return e==="fa"&&c.styleDefault!==null&&(e=L()),new Promise((a,i)=>{if(n==="fa"){let r=Wn(t)||{};t=r.iconName||t,e=r.prefix||e}if(t&&e&&Et[e]&&Et[e][t]){let r=Et[e][t];return a($t(r))}Mi(t,e),a(s(s({},Ni),{},{icon:c.showMissingIcons&&t?R("missingIconAbstract")||{}:{}}))})}var en=()=>{},Ut=c.measurePerformance&&ut&&ut.mark&&ut.measure?ut:{mark:en,measure:en},et='FA "6.7.1"',_i=t=>(Ut.mark("".concat(et," ").concat(t," begins")),()=>Yn(t)),Yn=t=>{Ut.mark("".concat(et," ").concat(t," ends")),Ut.measure("".concat(et," ").concat(t),"".concat(et," ").concat(t," begins"),"".concat(et," ").concat(t," ends"))},ne={begin:_i,end:Yn},mt=()=>{};function nn(t){return typeof(t.getAttribute?t.getAttribute(Y):null)=="string"}function zi(t){let e=t.getAttribute?t.getAttribute(Xt):null,n=t.getAttribute?t.getAttribute(Kt):null;return e&&n}function Li(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(c.replacementClass)}function Ri(){return c.autoReplaceSvg===!0?pt.replace:pt[c.autoReplaceSvg]||pt.replace}function ji(t){return h.createElementNS("http://www.w3.org/2000/svg",t)}function Wi(t){return h.createElement(t)}function Un(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:n=t.tag==="svg"?ji:Wi}=e;if(typeof t=="string")return h.createTextNode(t);let a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(r){a.setAttribute(r,t.attributes[r])}),(t.children||[]).forEach(function(r){a.appendChild(Un(r,{ceFn:n}))}),a}function Hi(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var pt={replace:function(t){let e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Un(n),e)}),e.getAttribute(Y)===null&&c.keepOriginalSource){let n=h.createComment(Hi(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){let e=t[0],n=t[1];if(~Jt(e).indexOf(c.replacementClass))return pt.replace(t);let a=new RegExp("".concat(c.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){let r=n[0].attributes.class.split(" ").reduce((o,l)=>(l===c.replacementClass||l.match(a)?o.toSvg.push(l):o.toNode.push(l),o),{toNode:[],toSvg:[]});n[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",r.toNode.join(" "))}let i=n.map(r=>st(r)).join(`
`);e.setAttribute(Y,""),e.innerHTML=i}};function an(t){t()}function Bn(t,e){let n=typeof e=="function"?e:mt;if(t.length===0)n();else{let a=an;c.mutateApproach===Ua&&(a=z.requestAnimationFrame||an),a(()=>{let i=Ri(),r=ne.begin("mutate");t.map(i),r(),n()})}}var ae=!1;function Vn(){ae=!0}function Bt(){ae=!1}var gt=null;function rn(t){if(!Ue||!c.observeMutations)return;let{treeCallback:e=mt,nodeCallback:n=mt,pseudoElementsCallback:a=mt,observeMutationsRoot:i=h}=t;gt=new Ue(r=>{if(ae)return;let o=L();Q(r).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!nn(l.addedNodes[0])&&(c.searchPseudoElements&&a(l.target),e(l.target)),l.type==="attributes"&&l.target.parentNode&&c.searchPseudoElements&&a(l.target.parentNode),l.type==="attributes"&&nn(l.target)&&~qa.indexOf(l.attributeName))if(l.attributeName==="class"&&zi(l.target)){let{prefix:u,iconName:f}=xt(Jt(l.target));l.target.setAttribute(Xt,u||o),f&&l.target.setAttribute(Kt,f)}else Li(l.target)&&n(l.target)})}),N&&gt.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function $i(){gt&&gt.disconnect()}function Yi(t){let e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce((a,i)=>{let r=i.split(":"),o=r[0],l=r.slice(1);return o&&l.length>0&&(a[o]=l.join(":").trim()),a},{})),n}function Ui(t){let e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",i=xt(Jt(t));return i.prefix||(i.prefix=L()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&a.length>0&&(i.iconName=gi(i.prefix,t.innerText)||te(i.prefix,Lt(t.innerText))),!i.iconName&&c.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function Bi(t){let e=Q(t.attributes).reduce((i,r)=>(i.name!=="class"&&i.name!=="style"&&(i[r.name]=r.value),i),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return c.autoA11y&&(n?e["aria-labelledby"]="".concat(c.replacementClass,"-title-").concat(a||it()):(e["aria-hidden"]="true",e.focusable="false")),e}function Vi(){return{iconName:null,title:null,titleId:null,prefix:null,transform:E,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function on(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:n,prefix:a,rest:i}=Ui(t),r=Bi(t),o=Wt("parseNodeAttributes",{},t),l=e.styleParser?Yi(t):[];return s({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:E,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:r}},o)}var{styles:Gi}=T;function Gn(t){let e=c.autoReplaceSvg==="nest"?on(t,{styleParser:!1}):on(t);return~e.extra.classes.indexOf(On)?R("generateLayersText",t,e):R("generateSvgReplacementMutation",t,e)}function Xi(){return[...Ea,...Ft]}function sn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!N)return Promise.resolve();let n=h.documentElement.classList,a=d=>n.add("".concat(Ge,"-").concat(d)),i=d=>n.remove("".concat(Ge,"-").concat(d)),r=c.autoFetchSvg?Xi():xn.concat(Object.keys(Gi));r.includes("fa")||r.push("fa");let o=[".".concat(On,":not([").concat(Y,"])")].concat(r.map(d=>".".concat(d,":not([").concat(Y,"])"))).join(", ");if(o.length===0)return Promise.resolve();let l=[];try{l=Q(t.querySelectorAll(o))}catch{}if(l.length>0)a("pending"),i("complete");else return Promise.resolve();let u=ne.begin("onTree"),f=l.reduce((d,p)=>{try{let m=Gn(p);m&&d.push(m)}catch(m){kn||m.name==="MissingIcon"&&console.error(m)}return d},[]);return new Promise((d,p)=>{Promise.all(f).then(m=>{Bn(m,()=>{a("active"),a("complete"),i("pending"),typeof e=="function"&&e(),u(),d()})}).catch(m=>{u(),p(m)})})}function Ki(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Gn(t).then(n=>{n&&Bn([n],e)})}function qi(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:Ht(e||{}),{mask:i}=n;return i&&(i=(i||{}).icon?i:Ht(i||{})),t(a,s(s({},n),{},{mask:i}))}}var Ji=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=E,symbol:a=!1,mask:i=null,maskId:r=null,title:o=null,titleId:l=null,classes:u=[],attributes:f={},styles:d={}}=e;if(!t)return;let{prefix:p,iconName:m,icon:x}=t;return Ct(s({type:"icon"},t),()=>(U("beforeDOMElementCreation",{iconDefinition:t,params:e}),c.autoA11y&&(o?f["aria-labelledby"]="".concat(c.replacementClass,"-title-").concat(l||it()):(f["aria-hidden"]="true",f.focusable="false")),ee({icons:{main:$t(x),mask:i?$t(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:m,transform:s(s({},E),n),symbol:a,title:o,maskId:r,titleId:l,extra:{attributes:f,styles:d,classes:u}})))},Qi={mixout(){return{icon:qi(Ji)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=sn,t.nodeCallback=Ki,t}}},provides(t){t.i2svg=function(e){let{node:n=h,callback:a=()=>{}}=e;return sn(n,a)},t.generateSvgReplacementMutation=function(e,n){let{iconName:a,title:i,titleId:r,prefix:o,transform:l,symbol:u,mask:f,maskId:d,extra:p}=n;return new Promise((m,x)=>{Promise.all([Yt(a,o),f.iconName?Yt(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(M=>{let[j,k]=M;m([e,ee({icons:{main:j,mask:k},prefix:o,iconName:a,transform:l,symbol:u,maskId:d,title:i,titleId:r,extra:p,watchable:!0})])}).catch(x)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:i,transform:r,styles:o}=e,l=vt(o);l.length>0&&(a.style=l);let u;return Qt(r)&&(u=R("generateAbstractTransformGrouping",{main:i,transform:r,containerWidth:i.width,iconWidth:i.width})),n.push(u||i.icon),{children:n,attributes:a}}}},Zi={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:n=[]}=e;return Ct({type:"layer"},()=>{U("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(i=>{Array.isArray(i)?i.map(r=>{a=a.concat(r.abstract)}):a=a.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(c.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},tr={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:n=null,classes:a=[],attributes:i={},styles:r={}}=e;return Ct({type:"counter",content:t},()=>(U("beforeDOMElementCreation",{content:t,params:e}),Di({content:t.toString(),title:n,extra:{attributes:i,styles:r,classes:["".concat(c.cssPrefix,"-layers-counter"),...a]}})))}}}},er={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=E,title:a=null,classes:i=[],attributes:r={},styles:o={}}=e;return Ct({type:"text",content:t},()=>(U("beforeDOMElementCreation",{content:t,params:e}),tn({content:t,transform:s(s({},E),n),title:a,extra:{attributes:r,styles:o,classes:["".concat(c.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){let{title:a,transform:i,extra:r}=n,o=null,l=null;if(vn){let u=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();o=f.width/u,l=f.height/u}return c.autoA11y&&!a&&(r.attributes["aria-hidden"]="true"),Promise.resolve([e,tn({content:e.innerHTML,width:o,height:l,transform:i,title:a,extra:r,watchable:!0})])}}},nr=new RegExp('"',"ug"),ln=[1105920,1112319],cn=s(s(s(s({},{FontAwesome:{normal:"fas",400:"fas"}}),ka),$a),_a),Vt=Object.keys(cn).reduce((t,e)=>(t[e.toLowerCase()]=cn[e],t),{}),ar=Object.keys(Vt).reduce((t,e)=>{let n=Vt[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function ir(t){let e=t.replace(nr,""),n=ui(e,0),a=n>=ln[0]&&n<=ln[1],i=e.length===2?e[0]===e[1]:!1;return{value:Lt(i?e[0]:e),isSecondary:a||i}}function rr(t,e){let n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),i=isNaN(a)?"normal":a;return(Vt[n]||{})[i]||ar[n]}function fn(t,e){let n="".concat(Ya).concat(e.replace(":","-"));return new Promise((a,i)=>{if(t.getAttribute(n)!==null)return a();let o=Q(t.children).filter(m=>m.getAttribute(Nt)===e)[0],l=z.getComputedStyle(t,e),u=l.getPropertyValue("font-family"),f=u.match(Xa),d=l.getPropertyValue("font-weight"),p=l.getPropertyValue("content");if(o&&!f)return t.removeChild(o),a();if(f&&p!=="none"&&p!==""){let m=l.getPropertyValue("content"),x=rr(u,d),{value:M,isSecondary:j}=ir(m),k=f[0].startsWith("FontAwesome"),P=te(x,M),A=P;if(k){let S=yi(M);S.iconName&&S.prefix&&(P=S.iconName,x=S.prefix)}if(P&&!j&&(!o||o.getAttribute(Xt)!==x||o.getAttribute(Kt)!==A)){t.setAttribute(n,A),o&&t.removeChild(o);let S=Vi(),{extra:B}=S;B.attributes[Nt]=e,Yt(P,x).then(V=>{let da=ee(s(s({},S),{},{icons:{main:V,mask:Hn()},prefix:x,iconName:A,extra:B,watchable:!0})),wt=h.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(wt,t.firstChild):t.appendChild(wt),wt.outerHTML=da.map(ma=>st(ma)).join(`
`),t.removeAttribute(n),a()}).catch(i)}else a()}else a()})}function or(t){return Promise.all([fn(t,"::before"),fn(t,"::after")])}function sr(t){return t.parentNode!==document.head&&!~Ba.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Nt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function un(t){if(N)return new Promise((e,n)=>{let a=Q(t.querySelectorAll("*")).filter(sr).map(or),i=ne.begin("searchPseudoElements");Vn(),Promise.all(a).then(()=>{i(),Bt(),e()}).catch(()=>{i(),Bt(),n()})})}var lr={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=un,t}}},provides(t){t.pseudoElements2svg=function(e){let{node:n=h}=e;c.searchPseudoElements&&un(n)}}},dn=!1,cr={mixout(){return{dom:{unwatch(){Vn(),dn=!0}}}},hooks(){return{bootstrap(){rn(Wt("mutationObserverCallbacks",{}))},noAuto(){$i()},watch(t){let{observeMutationsRoot:e}=t;dn?Bt():rn(Wt("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},mn=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{let i=a.toLowerCase().split("-"),r=i[0],o=i.slice(1).join("-");if(r&&o==="h")return n.flipX=!0,n;if(r&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(r){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)},fr={mixout(){return{parse:{transform:t=>mn(t)}}},hooks(){return{parseNodeAttributes(t,e){let n=e.getAttribute("data-fa-transform");return n&&(t.transform=mn(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:i,iconWidth:r}=e,o={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(f)},p={transform:"translate(".concat(r/2*-1," -256)")},m={outer:o,inner:d,path:p};return{tag:"g",attributes:s({},m.outer),children:[{tag:"g",attributes:s({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:s(s({},n.icon.attributes),m.path)}]}]}}}},Tt={x:0,y:0,width:"100%",height:"100%"};function pn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function ur(t){return t.tag==="g"?t.children:[t]}var dr={hooks(){return{parseNodeAttributes(t,e){let n=e.getAttribute("data-fa-mask"),a=n?xt(n.split(" ").map(i=>i.trim())):Hn();return a.prefix||(a.prefix=L()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:i,mask:r,maskId:o,transform:l}=e,{width:u,icon:f}=i,{width:d,icon:p}=r,m=ii({transform:l,containerWidth:d,iconWidth:u}),x={tag:"rect",attributes:s(s({},Tt),{},{fill:"white"})},M=f.children?{children:f.children.map(pn)}:{},j={tag:"g",attributes:s({},m.inner),children:[pn(s({tag:f.tag,attributes:s(s({},f.attributes),m.path)},M))]},k={tag:"g",attributes:s({},m.outer),children:[j]},P="mask-".concat(o||it()),A="clip-".concat(o||it()),S={tag:"mask",attributes:s(s({},Tt),{},{id:P,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,k]},B={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:ur(p)},S]};return n.push(B,{tag:"rect",attributes:s({fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(P,")")},Tt)}),{children:n,attributes:a}}}},mr={provides(t){let e=!1;z.matchMedia&&(e=z.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){let n=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:s(s({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let r=s(s({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:s(s({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:s(s({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:s(s({},r),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:s(s({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:s(s({},r),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:s(s({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:s(s({},r),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},pr={hooks(){return{parseNodeAttributes(t,e){let n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},hr=[si,Qi,Zi,tr,er,lr,cr,fr,dr,mr,pr];ki(hr,{mixoutsTo:w});var Lr=w.noAuto,Xn=w.config,Rr=w.library,Kn=w.dom,qn=w.parse,jr=w.findIconDefinition,Wr=w.toHtml,Jn=w.icon,Hr=w.layer,gr=w.text,yr=w.counter;var vr=["*"],br=t=>{throw new Error(`Could not find icon with iconName=${t.iconName} and prefix=${t.prefix} in the icon library.`)},xr=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},ta=t=>t!=null&&(t===90||t===180||t===270||t==="90"||t==="180"||t==="270"),Cr=t=>{let e=ta(t.rotate),n={[`fa-${t.animation}`]:t.animation!=null&&!t.animation.startsWith("spin"),"fa-spin":t.animation==="spin"||t.animation==="spin-reverse","fa-spin-pulse":t.animation==="spin-pulse"||t.animation==="spin-pulse-reverse","fa-spin-reverse":t.animation==="spin-reverse"||t.animation==="spin-pulse-reverse","fa-pulse":t.animation==="spin-pulse"||t.animation==="spin-pulse-reverse","fa-fw":t.fixedWidth,"fa-border":t.border,"fa-inverse":t.inverse,"fa-layers-counter":t.counter,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both",[`fa-${t.size}`]:t.size!==null,[`fa-rotate-${t.rotate}`]:e,"fa-rotate-by":t.rotate!=null&&!e,[`fa-pull-${t.pull}`]:t.pull!==null,[`fa-stack-${t.stackItemSize}`]:t.stackItemSize!=null};return Object.keys(n).map(a=>n[a]?a:null).filter(a=>a)},ie=new WeakSet,Qn="fa-auto-css";function Ar(t,e){if(!e.autoAddCss||ie.has(t))return;if(t.getElementById(Qn)!=null){e.autoAddCss=!1,ie.add(t);return}let n=t.createElement("style");n.setAttribute("type","text/css"),n.setAttribute("id",Qn),n.innerHTML=Kn.css();let a=t.head.childNodes,i=null;for(let r=a.length-1;r>-1;r--){let o=a[r],l=o.nodeName.toUpperCase();["STYLE","LINK"].indexOf(l)>-1&&(i=o)}t.head.insertBefore(n,i),e.autoAddCss=!1,ie.add(t)}var wr=t=>t.prefix!==void 0&&t.iconName!==void 0,Ir=(t,e)=>wr(t)?t:Array.isArray(t)&&t.length===2?{prefix:t[0],iconName:t[1]}:{prefix:e,iconName:t},kr=(()=>{class t{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null,this._autoAddCss=!0}set autoAddCss(n){Xn.autoAddCss=n,this._autoAddCss=n}get autoAddCss(){return this._autoAddCss}static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275prov=Z({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),Sr=(()=>{class t{constructor(){this.definitions={}}addIcons(...n){for(let a of n){a.prefix in this.definitions||(this.definitions[a.prefix]={}),this.definitions[a.prefix][a.iconName]=a;for(let i of a.icon[2])typeof i=="string"&&(this.definitions[a.prefix][i]=a)}}addIconPacks(...n){for(let a of n){let i=Object.keys(a).map(r=>a[r]);this.addIcons(...i)}}getIconDefinition(n,a){return n in this.definitions&&a in this.definitions[n]?this.definitions[n][a]:null}static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275prov=Z({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),Or=(()=>{class t{constructor(){this.stackItemSize="1x"}ngOnChanges(n){if("size"in n)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275dir=ye({type:t,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},features:[lt]})}}return t})(),Er=(()=>{class t{constructor(n,a){this.renderer=n,this.elementRef=a}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(n){"size"in n&&(n.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${n.size.currentValue}`),n.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${n.size.previousValue}`))}static{this.\u0275fac=function(a){return new(a||t)(O(he),O(de))}}static{this.\u0275cmp=tt({type:t,selectors:[["fa-stack"]],inputs:{size:"size"},features:[lt],ngContentSelectors:vr,decls:1,vars:0,template:function(a,i){a&1&&(ke(),Se(0))},encapsulation:2})}}return t})(),ea=(()=>{class t{constructor(n,a,i,r,o){this.sanitizer=n,this.config=a,this.iconLibrary=i,this.stackItem=r,this.document=ue(Ee),o!=null&&r==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(n){if(this.icon==null&&this.config.fallbackIcon==null){xr();return}if(n){let a=this.findIconDefinition(this.icon??this.config.fallbackIcon);if(a!=null){let i=this.buildParams();Ar(this.document,this.config);let r=Jn(a,i);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(r.html.join(`
`))}}}render(){this.ngOnChanges({})}findIconDefinition(n){let a=Ir(n,this.config.defaultPrefix);if("icon"in a)return a;let i=this.iconLibrary.getIconDefinition(a.prefix,a.iconName);return i??(br(a),null)}buildParams(){let n={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},a=typeof this.transform=="string"?qn.transform(this.transform):this.transform,i={};return n.rotate!=null&&!ta(n.rotate)&&(i["--fa-rotate-angle"]=`${n.rotate}`),{title:this.title,transform:a,classes:Cr(n),mask:this.mask!=null?this.findIconDefinition(this.mask):null,symbol:this.symbol,attributes:{role:this.a11yRole},styles:i}}static{this.\u0275fac=function(a){return new(a||t)(O(_e),O(kr),O(Sr),O(Or,8),O(Er,8))}}static{this.\u0275cmp=tt({type:t,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(a,i){a&2&&(we("innerHTML",i.renderedIconHTML,me),ve("title",i.title))},inputs:{icon:"icon",title:"title",animation:"animation",mask:"mask",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",transform:"transform",a11yRole:"a11yRole"},features:[lt],decls:0,vars:0,template:function(a,i){},encapsulation:2})}}return t})();var na=(()=>{class t{static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275mod=ge({type:t})}static{this.\u0275inj=ce({})}}return t})();var ua=ha(ca());var At=class t{constructor(e){this.httpClient=e}apiUrl=We.apiUrl;keyTripOfTheDay="tripOfTheDay";keyTripOfTheDayDate="tripOfTheDayDate";setTripOfTheDay(e,n){localStorage.setItem(this.keyTripOfTheDay,JSON.stringify(e)),localStorage.setItem(this.keyTripOfTheDayDate,n)}getTripDetail(e){return this.httpClient.get(`${this.apiUrl}/${e}`)}getTripOfTheDay(){let e=new Date().toDateString(),n=localStorage.getItem(this.keyTripOfTheDayDate),a=localStorage.getItem(this.keyTripOfTheDay);return e===n&&a?oe(JSON.parse(a)):this.httpClient.get(`${this.apiUrl}/random/trip-of-the-day`).pipe(le(i=>{this.setTripOfTheDay(i,e)}))}static \u0275fac=function(n){return new(n||t)(fe(Me))};static \u0275prov=Z({token:t,factory:t.\u0275fac,providedIn:"root"})};function Fr(t,e){if(t&1&&(g(0,"div",28),C(1),v()),t&2){let n=e.$implicit;y(),W(n)}}function Dr(t,e){if(t&1&&(g(0,"div",0)(1,"div",1)(2,"ul")(3,"li")(4,"a",2),C(5,"Home"),v()(),g(6,"li")(7,"a"),C(8),H(9,"titlecase"),v()()()(),g(10,"div",3)(11,"div",4)(12,"div",5)(13,"div",6)(14,"div",7)(15,"h1",8),C(16),v(),g(17,"h3",9),C(18),H(19,"currency"),v()()(),g(20,"div",10)(21,"figure"),ft(22,"img",11),v()()(),g(23,"div",12)(24,"div",13),ft(25,"app-score",14),v(),g(26,"div")(27,"div",15)(28,"div",16)(29,"p"),C(30),v(),g(31,"div",17)(32,"p",18),C(33),ft(34,"fa-icon",19),g(35,"span",20),C(36),v()()(),g(37,"div",21)(38,"h4",22),C(39),H(40,"translate"),v(),g(41,"p"),C(42),H(43,"date"),v()()()()(),g(44,"div",23)(45,"div",24)(46,"div",25),C(47),H(48,"titlecase"),v(),g(49,"div",26),C(50),v()(),g(51,"div",27),Ce(52,Fr,2,1,"div",28,xe),v()()()()()()),t&2){let n=e,a=Ie();y(8),W(X(9,16,n.title)),y(8),W(n.title),y(2),G(" ",Oe(19,18,n.price,"EUR")," "),y(4),ct("src",n.imageUrl,pe)("alt",n.title),y(3),ct("rating",n.rating)("nrOfRatings",n.nrOfRatings)("co2",n.co2),y(5),W(n.description),y(3),G(" ",n.rating," "),y(),ct("icon",a.faStar),y(2),W(n.nrOfRatings),y(3),G(" ",X(40,21,"card.creationDate")," "),y(3),W(X(43,23,n.creationDate)),y(5),G(" ",X(48,25,n.verticalType)," "),y(3),G("",n.co2," cO2"),y(2),Ae(n.tags)}}function Nr(t,e){t&1&&(g(0,"p"),C(1,"Ops, no trip for you"),v())}var fa=class t{constructor(e,n){this.route=e;this.apiTripsDetail=n}trip$;faStar=ua.faStar;ngOnInit(){this.trip$=this.route.paramMap.pipe(se(e=>{let n=e.get("id");return n==="tripOfTheDay"?this.apiTripsDetail.getTripOfTheDay():this.apiTripsDetail.getTripDetail(n)}))}static \u0275fac=function(n){return new(n||t)(O(ze),O(At))};static \u0275cmp=tt({type:t,selectors:[["app-trips-detail-container"]],decls:3,vars:3,consts:[[1,"trips-detail-container","p-2"],[1,"breadcrumbs","text-sm"],["routerLink","/"],[1,"trips-detail","px-4","md:px-8","lg:px-16","pt-2"],[1,"flex","flex-col","lg:flex-row","gap-4","items-start"],[1,"flex","flex-col","gap-2","w-full","lg:w-1/2"],[1,"flex","justify-between","items-center"],[1,"flex","flex-col","gap-1"],[1,"text-xl","md:text-2xl","font-bold"],[1,"text-l","font-semibold"],[1,"w-full"],[1,"w-full","h-auto","object-cover","rounded-lg",3,"src","alt"],[1,"flex","flex-col","gap-4","w-full","lg:w-1/2"],[1,"self-end"],[3,"rating","nrOfRatings","co2"],[1,"card","bg-base-100","shadow-xl","w-full"],[1,"card-body"],[1,"flex","justify-start"],[1,"text-accent"],[3,"icon"],[1,"ml-1","text-xs"],[1,"flex","flex-col"],[1,"font-medium"],[1,"flex","flex-col","gap-4"],[1,"flex","flex-wrap","justify-between","items-center","gap-2"],[1,"badge","badge-lg","badge-primary"],[1,"badge","badge-lg"],[1,"flex","flex-wrap","gap-1"],[1,"badge","badge-secondary"]],template:function(n,a){if(n&1&&(It(0,Dr,54,27,"div",0),H(1,"async"),It(2,Nr,2,0,"p")),n&2){let i;be((i=X(1,1,a.trip$))?0:2,i)}},dependencies:[na,ea,Ne,Te,Pe,De,Fe,Re,Le,je],encapsulation:2})};export{fa as TripsDetailContainerComponent};
