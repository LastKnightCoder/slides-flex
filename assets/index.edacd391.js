(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function Va(e,t){const n=Object.create(null),a=e.split(",");for(let o=0;o<a.length;o++)n[a[o]]=!0;return t?o=>!!n[o.toLowerCase()]:o=>!!n[o]}const Sd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ed=Va(Sd);function Mc(e){return!!e||e===""}function De(e){if(se(e)){const t={};for(let n=0;n<e.length;n++){const a=e[n],o=Re(a)?Id(a):De(a);if(o)for(const l in o)t[l]=o[l]}return t}else{if(Re(e))return e;if(je(e))return e}}const Od=/;(?![^(]*\))/g,Cd=/:(.+)/;function Id(e){const t={};return e.split(Od).forEach(n=>{if(n){const a=n.split(Cd);a.length>1&&(t[a[0].trim()]=a[1].trim())}}),t}function Me(e){let t="";if(Re(e))t=e;else if(se(e))for(let n=0;n<e.length;n++){const a=Me(e[n]);a&&(t+=a+" ")}else if(je(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function Ce(e){if(!e)return null;let{class:t,style:n}=e;return t&&!Re(t)&&(e.class=Me(t)),n&&(e.style=De(n)),e}const Fd="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",Pd=Va(Fd),fn=e=>Re(e)?e:e==null?"":se(e)||je(e)&&(e.toString===Bc||!ie(e.toString))?JSON.stringify(e,Lc,2):String(e),Lc=(e,t)=>t&&t.__v_isRef?Lc(e,t.value):Jn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[a,o])=>(n[`${a} =>`]=o,n),{})}:Rc(t)?{[`Set(${t.size})`]:[...t.values()]}:je(t)&&!se(t)&&!Dc(t)?String(t):t,Ie={},Qn=[],Ct=()=>{},Td=()=>!1,Ad=/^on[^a-z]/,Wa=e=>Ad.test(e),Cl=e=>e.startsWith("onUpdate:"),it=Object.assign,Il=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},jd=Object.prototype.hasOwnProperty,ge=(e,t)=>jd.call(e,t),se=Array.isArray,Jn=e=>Ka(e)==="[object Map]",Rc=e=>Ka(e)==="[object Set]",ie=e=>typeof e=="function",Re=e=>typeof e=="string",Fl=e=>typeof e=="symbol",je=e=>e!==null&&typeof e=="object",Nc=e=>je(e)&&ie(e.then)&&ie(e.catch),Bc=Object.prototype.toString,Ka=e=>Bc.call(e),Md=e=>Ka(e).slice(8,-1),Dc=e=>Ka(e)==="[object Object]",Pl=e=>Re(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ka=Va(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),za=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Ld=/-(\w)/g,qt=za(e=>e.replace(Ld,(t,n)=>n?n.toUpperCase():"")),Rd=/\B([A-Z])/g,Nn=za(e=>e.replace(Rd,"-$1").toLowerCase()),Ua=za(e=>e.charAt(0).toUpperCase()+e.slice(1)),po=za(e=>e?`on${Ua(e)}`:""),qs=(e,t)=>!Object.is(e,t),es=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Oa=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Ro=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Si;const Nd=()=>Si||(Si=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ft;class Hc{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&ft&&(this.parent=ft,this.index=(ft.scopes||(ft.scopes=[])).push(this)-1)}run(t){if(this.active){const n=ft;try{return ft=this,t()}finally{ft=n}}}on(){ft=this}off(){ft=this.parent}stop(t){if(this.active){let n,a;for(n=0,a=this.effects.length;n<a;n++)this.effects[n].stop();for(n=0,a=this.cleanups.length;n<a;n++)this.cleanups[n]();if(this.scopes)for(n=0,a=this.scopes.length;n<a;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.active=!1}}}function Bd(e){return new Hc(e)}function Dd(e,t=ft){t&&t.active&&t.effects.push(e)}function qc(){return ft}function Vc(e){ft&&ft.cleanups.push(e)}const Tl=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Wc=e=>(e.w&hn)>0,Kc=e=>(e.n&hn)>0,Hd=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=hn},qd=e=>{const{deps:t}=e;if(t.length){let n=0;for(let a=0;a<t.length;a++){const o=t[a];Wc(o)&&!Kc(o)?o.delete(e):t[n++]=o,o.w&=~hn,o.n&=~hn}t.length=n}},No=new WeakMap;let Cs=0,hn=1;const Bo=30;let St;const Pn=Symbol(""),Do=Symbol("");class Al{constructor(t,n=null,a){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Dd(this,a)}run(){if(!this.active)return this.fn();let t=St,n=rn;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=St,St=this,rn=!0,hn=1<<++Cs,Cs<=Bo?Hd(this):Ei(this),this.fn()}finally{Cs<=Bo&&qd(this),hn=1<<--Cs,St=this.parent,rn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){St===this?this.deferStop=!0:this.active&&(Ei(this),this.onStop&&this.onStop(),this.active=!1)}}function Ei(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let rn=!0;const zc=[];function ps(){zc.push(rn),rn=!1}function ds(){const e=zc.pop();rn=e===void 0?!0:e}function _t(e,t,n){if(rn&&St){let a=No.get(e);a||No.set(e,a=new Map);let o=a.get(n);o||a.set(n,o=Tl()),Uc(o)}}function Uc(e,t){let n=!1;Cs<=Bo?Kc(e)||(e.n|=hn,n=!Wc(e)):n=!e.has(St),n&&(e.add(St),St.deps.push(e))}function Gt(e,t,n,a,o,l){const i=No.get(e);if(!i)return;let c=[];if(t==="clear")c=[...i.values()];else if(n==="length"&&se(e))i.forEach((u,p)=>{(p==="length"||p>=a)&&c.push(u)});else switch(n!==void 0&&c.push(i.get(n)),t){case"add":se(e)?Pl(n)&&c.push(i.get("length")):(c.push(i.get(Pn)),Jn(e)&&c.push(i.get(Do)));break;case"delete":se(e)||(c.push(i.get(Pn)),Jn(e)&&c.push(i.get(Do)));break;case"set":Jn(e)&&c.push(i.get(Pn));break}if(c.length===1)c[0]&&Ho(c[0]);else{const u=[];for(const p of c)p&&u.push(...p);Ho(Tl(u))}}function Ho(e,t){const n=se(e)?e:[...e];for(const a of n)a.computed&&Oi(a);for(const a of n)a.computed||Oi(a)}function Oi(e,t){(e!==St||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Vd=Va("__proto__,__v_isRef,__isVue"),Yc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Fl)),Wd=jl(),Kd=jl(!1,!0),zd=jl(!0),Ci=Ud();function Ud(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const a=be(this);for(let l=0,i=this.length;l<i;l++)_t(a,"get",l+"");const o=a[t](...n);return o===-1||o===!1?a[t](...n.map(be)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){ps();const a=be(this)[t].apply(this,n);return ds(),a}}),e}function jl(e=!1,t=!1){return function(a,o,l){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return t;if(o==="__v_raw"&&l===(e?t?uf:Jc:t?Qc:Xc).get(a))return a;const i=se(a);if(!e&&i&&ge(Ci,o))return Reflect.get(Ci,o,l);const c=Reflect.get(a,o,l);return(Fl(o)?Yc.has(o):Vd(o))||(e||_t(a,"get",o),t)?c:we(c)?i&&Pl(o)?c:c.value:je(c)?e?Gn(c):Ae(c):c}}const Yd=Zc(),Zd=Zc(!0);function Zc(e=!1){return function(n,a,o,l){let i=n[a];if(ls(i)&&we(i)&&!we(o))return!1;if(!e&&(!Ca(o)&&!ls(o)&&(i=be(i),o=be(o)),!se(n)&&we(i)&&!we(o)))return i.value=o,!0;const c=se(n)&&Pl(a)?Number(a)<n.length:ge(n,a),u=Reflect.set(n,a,o,l);return n===be(l)&&(c?qs(o,i)&&Gt(n,"set",a,o):Gt(n,"add",a,o)),u}}function Gd(e,t){const n=ge(e,t);e[t];const a=Reflect.deleteProperty(e,t);return a&&n&&Gt(e,"delete",t,void 0),a}function Xd(e,t){const n=Reflect.has(e,t);return(!Fl(t)||!Yc.has(t))&&_t(e,"has",t),n}function Qd(e){return _t(e,"iterate",se(e)?"length":Pn),Reflect.ownKeys(e)}const Gc={get:Wd,set:Yd,deleteProperty:Gd,has:Xd,ownKeys:Qd},Jd={get:zd,set(e,t){return!0},deleteProperty(e,t){return!0}},ef=it({},Gc,{get:Kd,set:Zd}),Ml=e=>e,Ya=e=>Reflect.getPrototypeOf(e);function ca(e,t,n=!1,a=!1){e=e.__v_raw;const o=be(e),l=be(t);n||(t!==l&&_t(o,"get",t),_t(o,"get",l));const{has:i}=Ya(o),c=a?Ml:n?Nl:Vs;if(i.call(o,t))return c(e.get(t));if(i.call(o,l))return c(e.get(l));e!==o&&e.get(t)}function ua(e,t=!1){const n=this.__v_raw,a=be(n),o=be(e);return t||(e!==o&&_t(a,"has",e),_t(a,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)}function pa(e,t=!1){return e=e.__v_raw,!t&&_t(be(e),"iterate",Pn),Reflect.get(e,"size",e)}function Ii(e){e=be(e);const t=be(this);return Ya(t).has.call(t,e)||(t.add(e),Gt(t,"add",e,e)),this}function Fi(e,t){t=be(t);const n=be(this),{has:a,get:o}=Ya(n);let l=a.call(n,e);l||(e=be(e),l=a.call(n,e));const i=o.call(n,e);return n.set(e,t),l?qs(t,i)&&Gt(n,"set",e,t):Gt(n,"add",e,t),this}function Pi(e){const t=be(this),{has:n,get:a}=Ya(t);let o=n.call(t,e);o||(e=be(e),o=n.call(t,e)),a&&a.call(t,e);const l=t.delete(e);return o&&Gt(t,"delete",e,void 0),l}function Ti(){const e=be(this),t=e.size!==0,n=e.clear();return t&&Gt(e,"clear",void 0,void 0),n}function da(e,t){return function(a,o){const l=this,i=l.__v_raw,c=be(i),u=t?Ml:e?Nl:Vs;return!e&&_t(c,"iterate",Pn),i.forEach((p,d)=>a.call(o,u(p),u(d),l))}}function fa(e,t,n){return function(...a){const o=this.__v_raw,l=be(o),i=Jn(l),c=e==="entries"||e===Symbol.iterator&&i,u=e==="keys"&&i,p=o[e](...a),d=n?Ml:t?Nl:Vs;return!t&&_t(l,"iterate",u?Do:Pn),{next(){const{value:f,done:h}=p.next();return h?{value:f,done:h}:{value:c?[d(f[0]),d(f[1])]:d(f),done:h}},[Symbol.iterator](){return this}}}}function nn(e){return function(...t){return e==="delete"?!1:this}}function tf(){const e={get(l){return ca(this,l)},get size(){return pa(this)},has:ua,add:Ii,set:Fi,delete:Pi,clear:Ti,forEach:da(!1,!1)},t={get(l){return ca(this,l,!1,!0)},get size(){return pa(this)},has:ua,add:Ii,set:Fi,delete:Pi,clear:Ti,forEach:da(!1,!0)},n={get(l){return ca(this,l,!0)},get size(){return pa(this,!0)},has(l){return ua.call(this,l,!0)},add:nn("add"),set:nn("set"),delete:nn("delete"),clear:nn("clear"),forEach:da(!0,!1)},a={get(l){return ca(this,l,!0,!0)},get size(){return pa(this,!0)},has(l){return ua.call(this,l,!0)},add:nn("add"),set:nn("set"),delete:nn("delete"),clear:nn("clear"),forEach:da(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(l=>{e[l]=fa(l,!1,!1),n[l]=fa(l,!0,!1),t[l]=fa(l,!1,!0),a[l]=fa(l,!0,!0)}),[e,n,t,a]}const[nf,sf,af,of]=tf();function Ll(e,t){const n=t?e?of:af:e?sf:nf;return(a,o,l)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?a:Reflect.get(ge(n,o)&&o in a?n:a,o,l)}const lf={get:Ll(!1,!1)},rf={get:Ll(!1,!0)},cf={get:Ll(!0,!1)},Xc=new WeakMap,Qc=new WeakMap,Jc=new WeakMap,uf=new WeakMap;function pf(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function df(e){return e.__v_skip||!Object.isExtensible(e)?0:pf(Md(e))}function Ae(e){return ls(e)?e:Rl(e,!1,Gc,lf,Xc)}function ff(e){return Rl(e,!1,ef,rf,Qc)}function Gn(e){return Rl(e,!0,Jd,cf,Jc)}function Rl(e,t,n,a,o){if(!je(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const l=o.get(e);if(l)return l;const i=df(e);if(i===0)return e;const c=new Proxy(e,i===2?a:n);return o.set(e,c),c}function ts(e){return ls(e)?ts(e.__v_raw):!!(e&&e.__v_isReactive)}function ls(e){return!!(e&&e.__v_isReadonly)}function Ca(e){return!!(e&&e.__v_isShallow)}function eu(e){return ts(e)||ls(e)}function be(e){const t=e&&e.__v_raw;return t?be(t):e}function Za(e){return Oa(e,"__v_skip",!0),e}const Vs=e=>je(e)?Ae(e):e,Nl=e=>je(e)?Gn(e):e;function Bl(e){rn&&St&&(e=be(e),Uc(e.dep||(e.dep=Tl())))}function Dl(e,t){e=be(e),e.dep&&Ho(e.dep)}function we(e){return!!(e&&e.__v_isRef===!0)}function q(e){return tu(e,!1)}function Vt(e){return tu(e,!0)}function tu(e,t){return we(e)?e:new hf(e,t)}class hf{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:be(t),this._value=n?t:Vs(t)}get value(){return Bl(this),this._value}set value(t){const n=this.__v_isShallow||Ca(t)||ls(t);t=n?t:be(t),qs(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Vs(t),Dl(this))}}function w(e){return we(e)?e.value:e}const mf={get:(e,t,n)=>w(Reflect.get(e,t,n)),set:(e,t,n,a)=>{const o=e[t];return we(o)&&!we(n)?(o.value=n,!0):Reflect.set(e,t,n,a)}};function nu(e){return ts(e)?e:new Proxy(e,mf)}class gf{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:a}=t(()=>Bl(this),()=>Dl(this));this._get=n,this._set=a}get value(){return this._get()}set value(t){this._set(t)}}function su(e){return new gf(e)}function vf(e){const t=se(e)?new Array(e.length):{};for(const n in e)t[n]=kf(e,n);return t}class _f{constructor(t,n,a){this._object=t,this._key=n,this._defaultValue=a,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function kf(e,t,n){const a=e[t];return we(a)?a:new _f(e,t,n)}var au;class xf{constructor(t,n,a,o){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[au]=!1,this._dirty=!0,this.effect=new Al(t,()=>{this._dirty||(this._dirty=!0,Dl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=a}get value(){const t=be(this);return Bl(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}au="__v_isReadonly";function bf(e,t,n=!1){let a,o;const l=ie(e);return l?(a=e,o=Ct):(a=e.get,o=e.set),new xf(a,o,l||!o,n)}function cn(e,t,n,a){let o;try{o=a?e(...a):e()}catch(l){Ga(l,t,n)}return o}function It(e,t,n,a){if(ie(e)){const l=cn(e,t,n,a);return l&&Nc(l)&&l.catch(i=>{Ga(i,t,n)}),l}const o=[];for(let l=0;l<e.length;l++)o.push(It(e[l],t,n,a));return o}function Ga(e,t,n,a=!0){const o=t?t.vnode:null;if(t){let l=t.parent;const i=t.proxy,c=n;for(;l;){const p=l.ec;if(p){for(let d=0;d<p.length;d++)if(p[d](e,i,c)===!1)return}l=l.parent}const u=t.appContext.config.errorHandler;if(u){cn(u,null,10,[e,i,c]);return}}yf(e,n,o,a)}function yf(e,t,n,a=!0){console.error(e)}let Ws=!1,qo=!1;const Xe=[];let Nt=0;const ns=[];let Ut=null,wn=0;const ou=Promise.resolve();let Hl=null;function Qe(e){const t=Hl||ou;return e?t.then(this?e.bind(this):e):t}function wf(e){let t=Nt+1,n=Xe.length;for(;t<n;){const a=t+n>>>1;Ks(Xe[a])<e?t=a+1:n=a}return t}function ql(e){(!Xe.length||!Xe.includes(e,Ws&&e.allowRecurse?Nt+1:Nt))&&(e.id==null?Xe.push(e):Xe.splice(wf(e.id),0,e),lu())}function lu(){!Ws&&!qo&&(qo=!0,Hl=ou.then(ru))}function $f(e){const t=Xe.indexOf(e);t>Nt&&Xe.splice(t,1)}function Sf(e){se(e)?ns.push(...e):(!Ut||!Ut.includes(e,e.allowRecurse?wn+1:wn))&&ns.push(e),lu()}function Ai(e,t=Ws?Nt+1:0){for(;t<Xe.length;t++){const n=Xe[t];n&&n.pre&&(Xe.splice(t,1),t--,n())}}function iu(e){if(ns.length){const t=[...new Set(ns)];if(ns.length=0,Ut){Ut.push(...t);return}for(Ut=t,Ut.sort((n,a)=>Ks(n)-Ks(a)),wn=0;wn<Ut.length;wn++)Ut[wn]();Ut=null,wn=0}}const Ks=e=>e.id==null?1/0:e.id,Ef=(e,t)=>{const n=Ks(e)-Ks(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function ru(e){qo=!1,Ws=!0,Xe.sort(Ef);const t=Ct;try{for(Nt=0;Nt<Xe.length;Nt++){const n=Xe[Nt];n&&n.active!==!1&&cn(n,null,14)}}finally{Nt=0,Xe.length=0,iu(),Ws=!1,Hl=null,(Xe.length||ns.length)&&ru()}}function Of(e,t,...n){if(e.isUnmounted)return;const a=e.vnode.props||Ie;let o=n;const l=t.startsWith("update:"),i=l&&t.slice(7);if(i&&i in a){const d=`${i==="modelValue"?"model":i}Modifiers`,{number:f,trim:h}=a[d]||Ie;h&&(o=n.map(g=>g.trim())),f&&(o=n.map(Ro))}let c,u=a[c=po(t)]||a[c=po(qt(t))];!u&&l&&(u=a[c=po(Nn(t))]),u&&It(u,e,6,o);const p=a[c+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,It(p,e,6,o)}}function cu(e,t,n=!1){const a=t.emitsCache,o=a.get(e);if(o!==void 0)return o;const l=e.emits;let i={},c=!1;if(!ie(e)){const u=p=>{const d=cu(p,t,!0);d&&(c=!0,it(i,d))};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!l&&!c?(je(e)&&a.set(e,null),null):(se(l)?l.forEach(u=>i[u]=null):it(i,l),je(e)&&a.set(e,i),i)}function Xa(e,t){return!e||!Wa(t)?!1:(t=t.slice(2).replace(/Once$/,""),ge(e,t[0].toLowerCase()+t.slice(1))||ge(e,Nn(t))||ge(e,t))}let Je=null,Qa=null;function Ia(e){const t=Je;return Je=e,Qa=e&&e.type.__scopeId||null,t}function Ja(e){Qa=e}function eo(){Qa=null}function O(e,t=Je,n){if(!t||e._n)return e;const a=(...o)=>{a._d&&Ki(-1);const l=Ia(t),i=e(...o);return Ia(l),a._d&&Ki(1),i};return a._n=!0,a._c=!0,a._d=!0,a}function fo(e){const{type:t,vnode:n,proxy:a,withProxy:o,props:l,propsOptions:[i],slots:c,attrs:u,emit:p,render:d,renderCache:f,data:h,setupState:g,ctx:m,inheritAttrs:x}=e;let b,y;const S=Ia(e);try{if(n.shapeFlag&4){const I=o||a;b=Rt(d.call(I,I,f,l,g,h,m)),y=u}else{const I=t;b=Rt(I.length>1?I(l,{attrs:u,slots:c,emit:p}):I(l,null)),y=t.props?u:Cf(u)}}catch(I){Ps.length=0,Ga(I,e,1),b=_(mn)}let $=b;if(y&&x!==!1){const I=Object.keys(y),{shapeFlag:M}=$;I.length&&M&7&&(i&&I.some(Cl)&&(y=If(y,i)),$=Rn($,y))}return n.dirs&&($=Rn($),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&($.transition=n.transition),b=$,Ia(S),b}const Cf=e=>{let t;for(const n in e)(n==="class"||n==="style"||Wa(n))&&((t||(t={}))[n]=e[n]);return t},If=(e,t)=>{const n={};for(const a in e)(!Cl(a)||!(a.slice(9)in t))&&(n[a]=e[a]);return n};function Ff(e,t,n){const{props:a,children:o,component:l}=e,{props:i,children:c,patchFlag:u}=t,p=l.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return a?ji(a,i,p):!!i;if(u&8){const d=t.dynamicProps;for(let f=0;f<d.length;f++){const h=d[f];if(i[h]!==a[h]&&!Xa(p,h))return!0}}}else return(o||c)&&(!c||!c.$stable)?!0:a===i?!1:a?i?ji(a,i,p):!0:!!i;return!1}function ji(e,t,n){const a=Object.keys(t);if(a.length!==Object.keys(e).length)return!0;for(let o=0;o<a.length;o++){const l=a[o];if(t[l]!==e[l]&&!Xa(n,l))return!0}return!1}function Pf({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const uu=e=>e.__isSuspense;function Tf(e,t){t&&t.pendingBranch?se(e)?t.effects.push(...e):t.effects.push(e):Sf(e)}function mt(e,t){if(ze){let n=ze.provides;const a=ze.parent&&ze.parent.provides;a===n&&(n=ze.provides=Object.create(a)),n[e]=t}}function V(e,t,n=!1){const a=ze||Je;if(a){const o=a.parent==null?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&ie(t)?t.call(a.proxy):t}}function fs(e,t){return Vl(e,null,t)}const Mi={};function ue(e,t,n){return Vl(e,t,n)}function Vl(e,t,{immediate:n,deep:a,flush:o,onTrack:l,onTrigger:i}=Ie){const c=ze;let u,p=!1,d=!1;if(we(e)?(u=()=>e.value,p=Ca(e)):ts(e)?(u=()=>e,a=!0):se(e)?(d=!0,p=e.some(y=>ts(y)||Ca(y)),u=()=>e.map(y=>{if(we(y))return y.value;if(ts(y))return On(y);if(ie(y))return cn(y,c,2)})):ie(e)?t?u=()=>cn(e,c,2):u=()=>{if(!(c&&c.isUnmounted))return f&&f(),It(e,c,3,[h])}:u=Ct,t&&a){const y=u;u=()=>On(y())}let f,h=y=>{f=b.onStop=()=>{cn(y,c,4)}};if(Us)return h=Ct,t?n&&It(t,c,3,[u(),d?[]:void 0,h]):u(),Ct;let g=d?[]:Mi;const m=()=>{if(!!b.active)if(t){const y=b.run();(a||p||(d?y.some((S,$)=>qs(S,g[$])):qs(y,g)))&&(f&&f(),It(t,c,3,[y,g===Mi?void 0:g,h]),g=y)}else b.run()};m.allowRecurse=!!t;let x;o==="sync"?x=m:o==="post"?x=()=>Ue(m,c&&c.suspense):(m.pre=!0,c&&(m.id=c.uid),x=()=>ql(m));const b=new Al(u,x);return t?n?m():g=b.run():o==="post"?Ue(b.run.bind(b),c&&c.suspense):b.run(),()=>{b.stop(),c&&c.scope&&Il(c.scope.effects,b)}}function Af(e,t,n){const a=this.proxy,o=Re(e)?e.includes(".")?pu(a,e):()=>a[e]:e.bind(a,a);let l;ie(t)?l=t:(l=t.handler,n=t);const i=ze;is(this);const c=Vl(o,l.bind(a),n);return i?is(i):Tn(),c}function pu(e,t){const n=t.split(".");return()=>{let a=e;for(let o=0;o<n.length&&a;o++)a=a[n[o]];return a}}function On(e,t){if(!je(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),we(e))On(e.value,t);else if(se(e))for(let n=0;n<e.length;n++)On(e[n],t);else if(Rc(e)||Jn(e))e.forEach(n=>{On(n,t)});else if(Dc(e))for(const n in e)On(e[n],t);return e}function du(e,t){e.shapeFlag&6&&e.component?du(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ve(e){return ie(e)?{setup:e,name:e.name}:e}const ss=e=>!!e.type.__asyncLoader,fu=e=>e.type.__isKeepAlive,jf={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=Bn(),a=n.ctx;if(!a.renderer)return()=>{const S=t.default&&t.default();return S&&S.length===1?S[0]:S};const o=new Map,l=new Set;let i=null;const c=n.suspense,{renderer:{p:u,m:p,um:d,o:{createElement:f}}}=a,h=f("div");a.activate=(S,$,I,M,L)=>{const B=S.component;p(S,$,I,0,c),u(B.vnode,S,$,I,B,c,M,S.slotScopeIds,L),Ue(()=>{B.isDeactivated=!1,B.a&&es(B.a);const Q=S.props&&S.props.onVnodeMounted;Q&&kt(Q,B.parent,S)},c)},a.deactivate=S=>{const $=S.component;p(S,h,null,1,c),Ue(()=>{$.da&&es($.da);const I=S.props&&S.props.onVnodeUnmounted;I&&kt(I,$.parent,S),$.isDeactivated=!0},c)};function g(S){ho(S),d(S,n,c,!0)}function m(S){o.forEach(($,I)=>{const M=Zo($.type);M&&(!S||!S(M))&&x(I)})}function x(S){const $=o.get(S);!i||$.type!==i.type?g($):i&&ho(i),o.delete(S),l.delete(S)}ue(()=>[e.include,e.exclude],([S,$])=>{S&&m(I=>Is(S,I)),$&&m(I=>!Is($,I))},{flush:"post",deep:!0});let b=null;const y=()=>{b!=null&&o.set(b,mo(n.subTree))};return hs(y),Wl(y),no(()=>{o.forEach(S=>{const{subTree:$,suspense:I}=n,M=mo($);if(S.type===M.type){ho(M);const L=M.component.da;L&&Ue(L,I);return}g(S)})}),()=>{if(b=null,!t.default)return null;const S=t.default(),$=S[0];if(S.length>1)return i=null,S;if(!Ln($)||!($.shapeFlag&4)&&!($.shapeFlag&128))return i=null,$;let I=mo($);const M=I.type,L=Zo(ss(I)?I.type.__asyncResolved||{}:M),{include:B,exclude:Q,max:ce}=e;if(B&&(!L||!Is(B,L))||Q&&L&&Is(Q,L))return i=I,$;const pe=I.key==null?M:I.key,_e=o.get(pe);return I.el&&(I=Rn(I),$.shapeFlag&128&&($.ssContent=I)),b=pe,_e?(I.el=_e.el,I.component=_e.component,I.transition&&du(I,I.transition),I.shapeFlag|=512,l.delete(pe),l.add(pe)):(l.add(pe),ce&&l.size>parseInt(ce,10)&&x(l.values().next().value)),I.shapeFlag|=256,i=I,uu($.type)?$:I}}},hu=jf;function Is(e,t){return se(e)?e.some(n=>Is(n,t)):Re(e)?e.split(",").includes(t):e.test?e.test(t):!1}function Mf(e,t){mu(e,"a",t)}function Lf(e,t){mu(e,"da",t)}function mu(e,t,n=ze){const a=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(to(t,a,n),n){let o=n.parent;for(;o&&o.parent;)fu(o.parent.vnode)&&Rf(a,t,n,o),o=o.parent}}function Rf(e,t,n,a){const o=to(t,e,a,!0);so(()=>{Il(a[t],o)},n)}function ho(e){let t=e.shapeFlag;t&256&&(t-=256),t&512&&(t-=512),e.shapeFlag=t}function mo(e){return e.shapeFlag&128?e.ssContent:e}function to(e,t,n=ze,a=!1){if(n){const o=n[e]||(n[e]=[]),l=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;ps(),is(n);const c=It(t,n,e,i);return Tn(),ds(),c});return a?o.unshift(l):o.push(l),l}}const Qt=e=>(t,n=ze)=>(!Us||e==="sp")&&to(e,(...a)=>t(...a),n),Nf=Qt("bm"),hs=Qt("m"),Bf=Qt("bu"),Wl=Qt("u"),no=Qt("bum"),so=Qt("um"),Df=Qt("sp"),Hf=Qt("rtg"),qf=Qt("rtc");function Vf(e,t=ze){to("ec",e,t)}function ao(e,t){const n=Je;if(n===null)return e;const a=lo(n)||n.proxy,o=e.dirs||(e.dirs=[]);for(let l=0;l<t.length;l++){let[i,c,u,p=Ie]=t[l];ie(i)&&(i={mounted:i,updated:i}),i.deep&&On(c),o.push({dir:i,instance:a,value:c,oldValue:void 0,arg:u,modifiers:p})}return e}function vn(e,t,n,a){const o=e.dirs,l=t&&t.dirs;for(let i=0;i<o.length;i++){const c=o[i];l&&(c.oldValue=l[i].value);let u=c.dir[a];u&&(ps(),It(u,n,8,[e.el,c,e,t]),ds())}}const gu="components",Wf="directives";function Fa(e,t){return vu(gu,e,!0,t)||e}const Kf=Symbol();function Li(e){return vu(Wf,e)}function vu(e,t,n=!0,a=!1){const o=Je||ze;if(o){const l=o.type;if(e===gu){const c=Zo(l,!1);if(c&&(c===t||c===qt(t)||c===Ua(qt(t))))return l}const i=Ri(o[e]||l[e],t)||Ri(o.appContext[e],t);return!i&&a?l:i}}function Ri(e,t){return e&&(e[t]||e[qt(t)]||e[Ua(qt(t))])}function ms(e,t,n,a){let o;const l=n&&n[a];if(se(e)||Re(e)){o=new Array(e.length);for(let i=0,c=e.length;i<c;i++)o[i]=t(e[i],i,void 0,l&&l[i])}else if(typeof e=="number"){o=new Array(e);for(let i=0;i<e;i++)o[i]=t(i+1,i,void 0,l&&l[i])}else if(je(e))if(e[Symbol.iterator])o=Array.from(e,(i,c)=>t(i,c,void 0,l&&l[c]));else{const i=Object.keys(e);o=new Array(i.length);for(let c=0,u=i.length;c<u;c++){const p=i[c];o[c]=t(e[p],p,c,l&&l[c])}}else o=[];return n&&(n[a]=o),o}function Pt(e,t,n={},a,o){if(Je.isCE||Je.parent&&ss(Je.parent)&&Je.parent.isCE)return _("slot",t==="default"?null:{name:t},a&&a());let l=e[t];l&&l._c&&(l._d=!1),E();const i=l&&_u(l(n)),c=X(ye,{key:n.key||i&&i.key||`_${t}`},i||(a?a():[]),i&&e._===1?64:-2);return!o&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),l&&l._c&&(l._d=!0),c}function _u(e){return e.some(t=>Ln(t)?!(t.type===mn||t.type===ye&&!_u(t.children)):!0)?e:null}const Vo=e=>e?Cu(e)?lo(e)||e.proxy:Vo(e.parent):null,Pa=it(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Vo(e.parent),$root:e=>Vo(e.root),$emit:e=>e.emit,$options:e=>Kl(e),$forceUpdate:e=>e.f||(e.f=()=>ql(e.update)),$nextTick:e=>e.n||(e.n=Qe.bind(e.proxy)),$watch:e=>Af.bind(e)}),zf={get({_:e},t){const{ctx:n,setupState:a,data:o,props:l,accessCache:i,type:c,appContext:u}=e;let p;if(t[0]!=="$"){const g=i[t];if(g!==void 0)switch(g){case 1:return a[t];case 2:return o[t];case 4:return n[t];case 3:return l[t]}else{if(a!==Ie&&ge(a,t))return i[t]=1,a[t];if(o!==Ie&&ge(o,t))return i[t]=2,o[t];if((p=e.propsOptions[0])&&ge(p,t))return i[t]=3,l[t];if(n!==Ie&&ge(n,t))return i[t]=4,n[t];Wo&&(i[t]=0)}}const d=Pa[t];let f,h;if(d)return t==="$attrs"&&_t(e,"get",t),d(e);if((f=c.__cssModules)&&(f=f[t]))return f;if(n!==Ie&&ge(n,t))return i[t]=4,n[t];if(h=u.config.globalProperties,ge(h,t))return h[t]},set({_:e},t,n){const{data:a,setupState:o,ctx:l}=e;return o!==Ie&&ge(o,t)?(o[t]=n,!0):a!==Ie&&ge(a,t)?(a[t]=n,!0):ge(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(l[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:a,appContext:o,propsOptions:l}},i){let c;return!!n[i]||e!==Ie&&ge(e,i)||t!==Ie&&ge(t,i)||(c=l[0])&&ge(c,i)||ge(a,i)||ge(Pa,i)||ge(o.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ge(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Wo=!0;function Uf(e){const t=Kl(e),n=e.proxy,a=e.ctx;Wo=!1,t.beforeCreate&&Ni(t.beforeCreate,e,"bc");const{data:o,computed:l,methods:i,watch:c,provide:u,inject:p,created:d,beforeMount:f,mounted:h,beforeUpdate:g,updated:m,activated:x,deactivated:b,beforeDestroy:y,beforeUnmount:S,destroyed:$,unmounted:I,render:M,renderTracked:L,renderTriggered:B,errorCaptured:Q,serverPrefetch:ce,expose:pe,inheritAttrs:_e,components:Ke,directives:He,filters:Le}=t;if(p&&Yf(p,a,null,e.appContext.config.unwrapInjectedRef),i)for(const Y in i){const ne=i[Y];ie(ne)&&(a[Y]=ne.bind(n))}if(o){const Y=o.call(n,n);je(Y)&&(e.data=Ae(Y))}if(Wo=!0,l)for(const Y in l){const ne=l[Y],de=ie(ne)?ne.bind(n,n):ie(ne.get)?ne.get.bind(n,n):Ct,$e=!ie(ne)&&ie(ne.set)?ne.set.bind(n):Ct,nt=F({get:de,set:$e});Object.defineProperty(a,Y,{enumerable:!0,configurable:!0,get:()=>nt.value,set:Ne=>nt.value=Ne})}if(c)for(const Y in c)ku(c[Y],a,n,Y);if(u){const Y=ie(u)?u.call(n):u;Reflect.ownKeys(Y).forEach(ne=>{mt(ne,Y[ne])})}d&&Ni(d,e,"c");function Te(Y,ne){se(ne)?ne.forEach(de=>Y(de.bind(n))):ne&&Y(ne.bind(n))}if(Te(Nf,f),Te(hs,h),Te(Bf,g),Te(Wl,m),Te(Mf,x),Te(Lf,b),Te(Vf,Q),Te(qf,L),Te(Hf,B),Te(no,S),Te(so,I),Te(Df,ce),se(pe))if(pe.length){const Y=e.exposed||(e.exposed={});pe.forEach(ne=>{Object.defineProperty(Y,ne,{get:()=>n[ne],set:de=>n[ne]=de})})}else e.exposed||(e.exposed={});M&&e.render===Ct&&(e.render=M),_e!=null&&(e.inheritAttrs=_e),Ke&&(e.components=Ke),He&&(e.directives=He)}function Yf(e,t,n=Ct,a=!1){se(e)&&(e=Ko(e));for(const o in e){const l=e[o];let i;je(l)?"default"in l?i=V(l.from||o,l.default,!0):i=V(l.from||o):i=V(l),we(i)&&a?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>i.value,set:c=>i.value=c}):t[o]=i}}function Ni(e,t,n){It(se(e)?e.map(a=>a.bind(t.proxy)):e.bind(t.proxy),t,n)}function ku(e,t,n,a){const o=a.includes(".")?pu(n,a):()=>n[a];if(Re(e)){const l=t[e];ie(l)&&ue(o,l)}else if(ie(e))ue(o,e.bind(n));else if(je(e))if(se(e))e.forEach(l=>ku(l,t,n,a));else{const l=ie(e.handler)?e.handler.bind(n):t[e.handler];ie(l)&&ue(o,l,e)}}function Kl(e){const t=e.type,{mixins:n,extends:a}=t,{mixins:o,optionsCache:l,config:{optionMergeStrategies:i}}=e.appContext,c=l.get(t);let u;return c?u=c:!o.length&&!n&&!a?u=t:(u={},o.length&&o.forEach(p=>Ta(u,p,i,!0)),Ta(u,t,i)),je(t)&&l.set(t,u),u}function Ta(e,t,n,a=!1){const{mixins:o,extends:l}=t;l&&Ta(e,l,n,!0),o&&o.forEach(i=>Ta(e,i,n,!0));for(const i in t)if(!(a&&i==="expose")){const c=Zf[i]||n&&n[i];e[i]=c?c(e[i],t[i]):t[i]}return e}const Zf={data:Bi,props:bn,emits:bn,methods:bn,computed:bn,beforeCreate:st,created:st,beforeMount:st,mounted:st,beforeUpdate:st,updated:st,beforeDestroy:st,beforeUnmount:st,destroyed:st,unmounted:st,activated:st,deactivated:st,errorCaptured:st,serverPrefetch:st,components:bn,directives:bn,watch:Xf,provide:Bi,inject:Gf};function Bi(e,t){return t?e?function(){return it(ie(e)?e.call(this,this):e,ie(t)?t.call(this,this):t)}:t:e}function Gf(e,t){return bn(Ko(e),Ko(t))}function Ko(e){if(se(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function st(e,t){return e?[...new Set([].concat(e,t))]:t}function bn(e,t){return e?it(it(Object.create(null),e),t):t}function Xf(e,t){if(!e)return t;if(!t)return e;const n=it(Object.create(null),e);for(const a in t)n[a]=st(e[a],t[a]);return n}function Qf(e,t,n,a=!1){const o={},l={};Oa(l,oo,1),e.propsDefaults=Object.create(null),xu(e,t,o,l);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);n?e.props=a?o:ff(o):e.type.props?e.props=o:e.props=l,e.attrs=l}function Jf(e,t,n,a){const{props:o,attrs:l,vnode:{patchFlag:i}}=e,c=be(o),[u]=e.propsOptions;let p=!1;if((a||i>0)&&!(i&16)){if(i&8){const d=e.vnode.dynamicProps;for(let f=0;f<d.length;f++){let h=d[f];if(Xa(e.emitsOptions,h))continue;const g=t[h];if(u)if(ge(l,h))g!==l[h]&&(l[h]=g,p=!0);else{const m=qt(h);o[m]=zo(u,c,m,g,e,!1)}else g!==l[h]&&(l[h]=g,p=!0)}}}else{xu(e,t,o,l)&&(p=!0);let d;for(const f in c)(!t||!ge(t,f)&&((d=Nn(f))===f||!ge(t,d)))&&(u?n&&(n[f]!==void 0||n[d]!==void 0)&&(o[f]=zo(u,c,f,void 0,e,!0)):delete o[f]);if(l!==c)for(const f in l)(!t||!ge(t,f)&&!0)&&(delete l[f],p=!0)}p&&Gt(e,"set","$attrs")}function xu(e,t,n,a){const[o,l]=e.propsOptions;let i=!1,c;if(t)for(let u in t){if(ka(u))continue;const p=t[u];let d;o&&ge(o,d=qt(u))?!l||!l.includes(d)?n[d]=p:(c||(c={}))[d]=p:Xa(e.emitsOptions,u)||(!(u in a)||p!==a[u])&&(a[u]=p,i=!0)}if(l){const u=be(n),p=c||Ie;for(let d=0;d<l.length;d++){const f=l[d];n[f]=zo(o,u,f,p[f],e,!ge(p,f))}}return i}function zo(e,t,n,a,o,l){const i=e[n];if(i!=null){const c=ge(i,"default");if(c&&a===void 0){const u=i.default;if(i.type!==Function&&ie(u)){const{propsDefaults:p}=o;n in p?a=p[n]:(is(o),a=p[n]=u.call(null,t),Tn())}else a=u}i[0]&&(l&&!c?a=!1:i[1]&&(a===""||a===Nn(n))&&(a=!0))}return a}function bu(e,t,n=!1){const a=t.propsCache,o=a.get(e);if(o)return o;const l=e.props,i={},c=[];let u=!1;if(!ie(e)){const d=f=>{u=!0;const[h,g]=bu(f,t,!0);it(i,h),g&&c.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!l&&!u)return je(e)&&a.set(e,Qn),Qn;if(se(l))for(let d=0;d<l.length;d++){const f=qt(l[d]);Di(f)&&(i[f]=Ie)}else if(l)for(const d in l){const f=qt(d);if(Di(f)){const h=l[d],g=i[f]=se(h)||ie(h)?{type:h}:h;if(g){const m=Vi(Boolean,g.type),x=Vi(String,g.type);g[0]=m>-1,g[1]=x<0||m<x,(m>-1||ge(g,"default"))&&c.push(f)}}}const p=[i,c];return je(e)&&a.set(e,p),p}function Di(e){return e[0]!=="$"}function Hi(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function qi(e,t){return Hi(e)===Hi(t)}function Vi(e,t){return se(t)?t.findIndex(n=>qi(n,e)):ie(t)&&qi(t,e)?0:-1}const yu=e=>e[0]==="_"||e==="$stable",zl=e=>se(e)?e.map(Rt):[Rt(e)],eh=(e,t,n)=>{if(t._n)return t;const a=O((...o)=>zl(t(...o)),n);return a._c=!1,a},wu=(e,t,n)=>{const a=e._ctx;for(const o in e){if(yu(o))continue;const l=e[o];if(ie(l))t[o]=eh(o,l,a);else if(l!=null){const i=zl(l);t[o]=()=>i}}},$u=(e,t)=>{const n=zl(t);e.slots.default=()=>n},th=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=be(t),Oa(t,"_",n)):wu(t,e.slots={})}else e.slots={},t&&$u(e,t);Oa(e.slots,oo,1)},nh=(e,t,n)=>{const{vnode:a,slots:o}=e;let l=!0,i=Ie;if(a.shapeFlag&32){const c=t._;c?n&&c===1?l=!1:(it(o,t),!n&&c===1&&delete o._):(l=!t.$stable,wu(t,o)),i=t}else t&&($u(e,t),i={default:1});if(l)for(const c in o)!yu(c)&&!(c in i)&&delete o[c]};function Su(){return{app:null,config:{isNativeTag:Td,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let sh=0;function ah(e,t){return function(a,o=null){ie(a)||(a=Object.assign({},a)),o!=null&&!je(o)&&(o=null);const l=Su(),i=new Set;let c=!1;const u=l.app={_uid:sh++,_component:a,_props:o,_container:null,_context:l,_instance:null,version:wh,get config(){return l.config},set config(p){},use(p,...d){return i.has(p)||(p&&ie(p.install)?(i.add(p),p.install(u,...d)):ie(p)&&(i.add(p),p(u,...d))),u},mixin(p){return l.mixins.includes(p)||l.mixins.push(p),u},component(p,d){return d?(l.components[p]=d,u):l.components[p]},directive(p,d){return d?(l.directives[p]=d,u):l.directives[p]},mount(p,d,f){if(!c){const h=_(a,o);return h.appContext=l,d&&t?t(h,p):e(h,p,f),c=!0,u._container=p,p.__vue_app__=u,lo(h.component)||h.component.proxy}},unmount(){c&&(e(null,u._container),delete u._container.__vue_app__)},provide(p,d){return l.provides[p]=d,u}};return u}}function Uo(e,t,n,a,o=!1){if(se(e)){e.forEach((h,g)=>Uo(h,t&&(se(t)?t[g]:t),n,a,o));return}if(ss(a)&&!o)return;const l=a.shapeFlag&4?lo(a.component)||a.component.proxy:a.el,i=o?null:l,{i:c,r:u}=e,p=t&&t.r,d=c.refs===Ie?c.refs={}:c.refs,f=c.setupState;if(p!=null&&p!==u&&(Re(p)?(d[p]=null,ge(f,p)&&(f[p]=null)):we(p)&&(p.value=null)),ie(u))cn(u,c,12,[i,d]);else{const h=Re(u),g=we(u);if(h||g){const m=()=>{if(e.f){const x=h?d[u]:u.value;o?se(x)&&Il(x,l):se(x)?x.includes(l)||x.push(l):h?(d[u]=[l],ge(f,u)&&(f[u]=d[u])):(u.value=[l],e.k&&(d[e.k]=u.value))}else h?(d[u]=i,ge(f,u)&&(f[u]=i)):g&&(u.value=i,e.k&&(d[e.k]=i))};i?(m.id=-1,Ue(m,n)):m()}}}const Ue=Tf;function oh(e){return lh(e)}function lh(e,t){const n=Nd();n.__VUE__=!0;const{insert:a,remove:o,patchProp:l,createElement:i,createText:c,createComment:u,setText:p,setElementText:d,parentNode:f,nextSibling:h,setScopeId:g=Ct,insertStaticContent:m}=e,x=(v,k,C,P=null,A=null,N=null,z=!1,R=null,D=!!k.dynamicChildren)=>{if(v===k)return;v&&!xs(v,k)&&(P=W(v),Ne(v,A,N,!0),v=null),k.patchFlag===-2&&(D=!1,k.dynamicChildren=null);const{type:j,ref:J,shapeFlag:Z}=k;switch(j){case Yl:b(v,k,C,P);break;case mn:y(v,k,C,P);break;case xa:v==null&&S(k,C,P,z);break;case ye:Ke(v,k,C,P,A,N,z,R,D);break;default:Z&1?M(v,k,C,P,A,N,z,R,D):Z&6?He(v,k,C,P,A,N,z,R,D):(Z&64||Z&128)&&j.process(v,k,C,P,A,N,z,R,D,fe)}J!=null&&A&&Uo(J,v&&v.ref,N,k||v,!k)},b=(v,k,C,P)=>{if(v==null)a(k.el=c(k.children),C,P);else{const A=k.el=v.el;k.children!==v.children&&p(A,k.children)}},y=(v,k,C,P)=>{v==null?a(k.el=u(k.children||""),C,P):k.el=v.el},S=(v,k,C,P)=>{[v.el,v.anchor]=m(v.children,k,C,P,v.el,v.anchor)},$=({el:v,anchor:k},C,P)=>{let A;for(;v&&v!==k;)A=h(v),a(v,C,P),v=A;a(k,C,P)},I=({el:v,anchor:k})=>{let C;for(;v&&v!==k;)C=h(v),o(v),v=C;o(k)},M=(v,k,C,P,A,N,z,R,D)=>{z=z||k.type==="svg",v==null?L(k,C,P,A,N,z,R,D):ce(v,k,A,N,z,R,D)},L=(v,k,C,P,A,N,z,R)=>{let D,j;const{type:J,props:Z,shapeFlag:ee,transition:ae,dirs:he}=v;if(D=v.el=i(v.type,N,Z&&Z.is,Z),ee&8?d(D,v.children):ee&16&&Q(v.children,D,null,P,A,N&&J!=="foreignObject",z,R),he&&vn(v,null,P,"created"),Z){for(const Oe in Z)Oe!=="value"&&!ka(Oe)&&l(D,Oe,null,Z[Oe],N,v.children,P,A,K);"value"in Z&&l(D,"value",null,Z.value),(j=Z.onVnodeBeforeMount)&&kt(j,P,v)}B(D,v,v.scopeId,z,P),he&&vn(v,null,P,"beforeMount");const Fe=(!A||A&&!A.pendingBranch)&&ae&&!ae.persisted;Fe&&ae.beforeEnter(D),a(D,k,C),((j=Z&&Z.onVnodeMounted)||Fe||he)&&Ue(()=>{j&&kt(j,P,v),Fe&&ae.enter(D),he&&vn(v,null,P,"mounted")},A)},B=(v,k,C,P,A)=>{if(C&&g(v,C),P)for(let N=0;N<P.length;N++)g(v,P[N]);if(A){let N=A.subTree;if(k===N){const z=A.vnode;B(v,z,z.scopeId,z.slotScopeIds,A.parent)}}},Q=(v,k,C,P,A,N,z,R,D=0)=>{for(let j=D;j<v.length;j++){const J=v[j]=R?an(v[j]):Rt(v[j]);x(null,J,k,C,P,A,N,z,R)}},ce=(v,k,C,P,A,N,z)=>{const R=k.el=v.el;let{patchFlag:D,dynamicChildren:j,dirs:J}=k;D|=v.patchFlag&16;const Z=v.props||Ie,ee=k.props||Ie;let ae;C&&_n(C,!1),(ae=ee.onVnodeBeforeUpdate)&&kt(ae,C,k,v),J&&vn(k,v,C,"beforeUpdate"),C&&_n(C,!0);const he=A&&k.type!=="foreignObject";if(j?pe(v.dynamicChildren,j,R,C,P,he,N):z||ne(v,k,R,null,C,P,he,N,!1),D>0){if(D&16)_e(R,k,Z,ee,C,P,A);else if(D&2&&Z.class!==ee.class&&l(R,"class",null,ee.class,A),D&4&&l(R,"style",Z.style,ee.style,A),D&8){const Fe=k.dynamicProps;for(let Oe=0;Oe<Fe.length;Oe++){const Be=Fe[Oe],yt=Z[Be],Vn=ee[Be];(Vn!==yt||Be==="value")&&l(R,Be,yt,Vn,A,v.children,C,P,K)}}D&1&&v.children!==k.children&&d(R,k.children)}else!z&&j==null&&_e(R,k,Z,ee,C,P,A);((ae=ee.onVnodeUpdated)||J)&&Ue(()=>{ae&&kt(ae,C,k,v),J&&vn(k,v,C,"updated")},P)},pe=(v,k,C,P,A,N,z)=>{for(let R=0;R<k.length;R++){const D=v[R],j=k[R],J=D.el&&(D.type===ye||!xs(D,j)||D.shapeFlag&70)?f(D.el):C;x(D,j,J,null,P,A,N,z,!0)}},_e=(v,k,C,P,A,N,z)=>{if(C!==P){if(C!==Ie)for(const R in C)!ka(R)&&!(R in P)&&l(v,R,C[R],null,z,k.children,A,N,K);for(const R in P){if(ka(R))continue;const D=P[R],j=C[R];D!==j&&R!=="value"&&l(v,R,j,D,z,k.children,A,N,K)}"value"in P&&l(v,"value",C.value,P.value)}},Ke=(v,k,C,P,A,N,z,R,D)=>{const j=k.el=v?v.el:c(""),J=k.anchor=v?v.anchor:c("");let{patchFlag:Z,dynamicChildren:ee,slotScopeIds:ae}=k;ae&&(R=R?R.concat(ae):ae),v==null?(a(j,C,P),a(J,C,P),Q(k.children,C,J,A,N,z,R,D)):Z>0&&Z&64&&ee&&v.dynamicChildren?(pe(v.dynamicChildren,ee,C,A,N,z,R),(k.key!=null||A&&k===A.subTree)&&Ul(v,k,!0)):ne(v,k,C,J,A,N,z,R,D)},He=(v,k,C,P,A,N,z,R,D)=>{k.slotScopeIds=R,v==null?k.shapeFlag&512?A.ctx.activate(k,C,P,z,D):Le(k,C,P,A,N,z,D):Pe(v,k,D)},Le=(v,k,C,P,A,N,z)=>{const R=v.component=gh(v,P,A);if(fu(v)&&(R.ctx.renderer=fe),vh(R),R.asyncDep){if(A&&A.registerDep(R,Te),!v.el){const D=R.subTree=_(mn);y(null,D,k,C)}return}Te(R,v,k,C,A,N,z)},Pe=(v,k,C)=>{const P=k.component=v.component;if(Ff(v,k,C))if(P.asyncDep&&!P.asyncResolved){Y(P,k,C);return}else P.next=k,$f(P.update),P.update();else k.el=v.el,P.vnode=k},Te=(v,k,C,P,A,N,z)=>{const R=()=>{if(v.isMounted){let{next:J,bu:Z,u:ee,parent:ae,vnode:he}=v,Fe=J,Oe;_n(v,!1),J?(J.el=he.el,Y(v,J,z)):J=he,Z&&es(Z),(Oe=J.props&&J.props.onVnodeBeforeUpdate)&&kt(Oe,ae,J,he),_n(v,!0);const Be=fo(v),yt=v.subTree;v.subTree=Be,x(yt,Be,f(yt.el),W(yt),v,A,N),J.el=Be.el,Fe===null&&Pf(v,Be.el),ee&&Ue(ee,A),(Oe=J.props&&J.props.onVnodeUpdated)&&Ue(()=>kt(Oe,ae,J,he),A)}else{let J;const{el:Z,props:ee}=k,{bm:ae,m:he,parent:Fe}=v,Oe=ss(k);if(_n(v,!1),ae&&es(ae),!Oe&&(J=ee&&ee.onVnodeBeforeMount)&&kt(J,Fe,k),_n(v,!0),Z&&oe){const Be=()=>{v.subTree=fo(v),oe(Z,v.subTree,v,A,null)};Oe?k.type.__asyncLoader().then(()=>!v.isUnmounted&&Be()):Be()}else{const Be=v.subTree=fo(v);x(null,Be,C,P,v,A,N),k.el=Be.el}if(he&&Ue(he,A),!Oe&&(J=ee&&ee.onVnodeMounted)){const Be=k;Ue(()=>kt(J,Fe,Be),A)}(k.shapeFlag&256||Fe&&ss(Fe.vnode)&&Fe.vnode.shapeFlag&256)&&v.a&&Ue(v.a,A),v.isMounted=!0,k=C=P=null}},D=v.effect=new Al(R,()=>ql(j),v.scope),j=v.update=()=>D.run();j.id=v.uid,_n(v,!0),j()},Y=(v,k,C)=>{k.component=v;const P=v.vnode.props;v.vnode=k,v.next=null,Jf(v,k.props,P,C),nh(v,k.children,C),ps(),Ai(),ds()},ne=(v,k,C,P,A,N,z,R,D=!1)=>{const j=v&&v.children,J=v?v.shapeFlag:0,Z=k.children,{patchFlag:ee,shapeFlag:ae}=k;if(ee>0){if(ee&128){$e(j,Z,C,P,A,N,z,R,D);return}else if(ee&256){de(j,Z,C,P,A,N,z,R,D);return}}ae&8?(J&16&&K(j,A,N),Z!==j&&d(C,Z)):J&16?ae&16?$e(j,Z,C,P,A,N,z,R,D):K(j,A,N,!0):(J&8&&d(C,""),ae&16&&Q(Z,C,P,A,N,z,R,D))},de=(v,k,C,P,A,N,z,R,D)=>{v=v||Qn,k=k||Qn;const j=v.length,J=k.length,Z=Math.min(j,J);let ee;for(ee=0;ee<Z;ee++){const ae=k[ee]=D?an(k[ee]):Rt(k[ee]);x(v[ee],ae,C,null,A,N,z,R,D)}j>J?K(v,A,N,!0,!1,Z):Q(k,C,P,A,N,z,R,D,Z)},$e=(v,k,C,P,A,N,z,R,D)=>{let j=0;const J=k.length;let Z=v.length-1,ee=J-1;for(;j<=Z&&j<=ee;){const ae=v[j],he=k[j]=D?an(k[j]):Rt(k[j]);if(xs(ae,he))x(ae,he,C,null,A,N,z,R,D);else break;j++}for(;j<=Z&&j<=ee;){const ae=v[Z],he=k[ee]=D?an(k[ee]):Rt(k[ee]);if(xs(ae,he))x(ae,he,C,null,A,N,z,R,D);else break;Z--,ee--}if(j>Z){if(j<=ee){const ae=ee+1,he=ae<J?k[ae].el:P;for(;j<=ee;)x(null,k[j]=D?an(k[j]):Rt(k[j]),C,he,A,N,z,R,D),j++}}else if(j>ee)for(;j<=Z;)Ne(v[j],A,N,!0),j++;else{const ae=j,he=j,Fe=new Map;for(j=he;j<=ee;j++){const ut=k[j]=D?an(k[j]):Rt(k[j]);ut.key!=null&&Fe.set(ut.key,j)}let Oe,Be=0;const yt=ee-he+1;let Vn=!1,yi=0;const ks=new Array(yt);for(j=0;j<yt;j++)ks[j]=0;for(j=ae;j<=Z;j++){const ut=v[j];if(Be>=yt){Ne(ut,A,N,!0);continue}let Lt;if(ut.key!=null)Lt=Fe.get(ut.key);else for(Oe=he;Oe<=ee;Oe++)if(ks[Oe-he]===0&&xs(ut,k[Oe])){Lt=Oe;break}Lt===void 0?Ne(ut,A,N,!0):(ks[Lt-he]=j+1,Lt>=yi?yi=Lt:Vn=!0,x(ut,k[Lt],C,null,A,N,z,R,D),Be++)}const wi=Vn?ih(ks):Qn;for(Oe=wi.length-1,j=yt-1;j>=0;j--){const ut=he+j,Lt=k[ut],$i=ut+1<J?k[ut+1].el:P;ks[j]===0?x(null,Lt,C,$i,A,N,z,R,D):Vn&&(Oe<0||j!==wi[Oe]?nt(Lt,C,$i,2):Oe--)}}},nt=(v,k,C,P,A=null)=>{const{el:N,type:z,transition:R,children:D,shapeFlag:j}=v;if(j&6){nt(v.component.subTree,k,C,P);return}if(j&128){v.suspense.move(k,C,P);return}if(j&64){z.move(v,k,C,fe);return}if(z===ye){a(N,k,C);for(let Z=0;Z<D.length;Z++)nt(D[Z],k,C,P);a(v.anchor,k,C);return}if(z===xa){$(v,k,C);return}if(P!==2&&j&1&&R)if(P===0)R.beforeEnter(N),a(N,k,C),Ue(()=>R.enter(N),A);else{const{leave:Z,delayLeave:ee,afterLeave:ae}=R,he=()=>a(N,k,C),Fe=()=>{Z(N,()=>{he(),ae&&ae()})};ee?ee(N,he,Fe):Fe()}else a(N,k,C)},Ne=(v,k,C,P=!1,A=!1)=>{const{type:N,props:z,ref:R,children:D,dynamicChildren:j,shapeFlag:J,patchFlag:Z,dirs:ee}=v;if(R!=null&&Uo(R,null,C,v,!0),J&256){k.ctx.deactivate(v);return}const ae=J&1&&ee,he=!ss(v);let Fe;if(he&&(Fe=z&&z.onVnodeBeforeUnmount)&&kt(Fe,k,v),J&6)T(v.component,C,P);else{if(J&128){v.suspense.unmount(C,P);return}ae&&vn(v,null,k,"beforeUnmount"),J&64?v.type.remove(v,k,C,A,fe,P):j&&(N!==ye||Z>0&&Z&64)?K(j,k,C,!1,!0):(N===ye&&Z&384||!A&&J&16)&&K(D,k,C),P&&tn(v)}(he&&(Fe=z&&z.onVnodeUnmounted)||ae)&&Ue(()=>{Fe&&kt(Fe,k,v),ae&&vn(v,null,k,"unmounted")},C)},tn=v=>{const{type:k,el:C,anchor:P,transition:A}=v;if(k===ye){qn(C,P);return}if(k===xa){I(v);return}const N=()=>{o(C),A&&!A.persisted&&A.afterLeave&&A.afterLeave()};if(v.shapeFlag&1&&A&&!A.persisted){const{leave:z,delayLeave:R}=A,D=()=>z(C,N);R?R(v.el,N,D):D()}else N()},qn=(v,k)=>{let C;for(;v!==k;)C=h(v),o(v),v=C;o(k)},T=(v,k,C)=>{const{bum:P,scope:A,update:N,subTree:z,um:R}=v;P&&es(P),A.stop(),N&&(N.active=!1,Ne(z,v,k,C)),R&&Ue(R,k),Ue(()=>{v.isUnmounted=!0},k),k&&k.pendingBranch&&!k.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===k.pendingId&&(k.deps--,k.deps===0&&k.resolve())},K=(v,k,C,P=!1,A=!1,N=0)=>{for(let z=N;z<v.length;z++)Ne(v[z],k,C,P,A)},W=v=>v.shapeFlag&6?W(v.component.subTree):v.shapeFlag&128?v.suspense.next():h(v.anchor||v.el),G=(v,k,C)=>{v==null?k._vnode&&Ne(k._vnode,null,null,!0):x(k._vnode||null,v,k,null,null,null,C),Ai(),iu(),k._vnode=v},fe={p:x,um:Ne,m:nt,r:tn,mt:Le,mc:Q,pc:ne,pbc:pe,n:W,o:e};let ke,oe;return t&&([ke,oe]=t(fe)),{render:G,hydrate:ke,createApp:ah(G,ke)}}function _n({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Ul(e,t,n=!1){const a=e.children,o=t.children;if(se(a)&&se(o))for(let l=0;l<a.length;l++){const i=a[l];let c=o[l];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=o[l]=an(o[l]),c.el=i.el),n||Ul(i,c))}}function ih(e){const t=e.slice(),n=[0];let a,o,l,i,c;const u=e.length;for(a=0;a<u;a++){const p=e[a];if(p!==0){if(o=n[n.length-1],e[o]<p){t[a]=o,n.push(a);continue}for(l=0,i=n.length-1;l<i;)c=l+i>>1,e[n[c]]<p?l=c+1:i=c;p<e[n[l]]&&(l>0&&(t[a]=n[l-1]),n[l]=a)}}for(l=n.length,i=n[l-1];l-- >0;)n[l]=i,i=t[i];return n}const rh=e=>e.__isTeleport,Fs=e=>e&&(e.disabled||e.disabled===""),Wi=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Yo=(e,t)=>{const n=e&&e.to;return Re(n)?t?t(n):null:n},ch={__isTeleport:!0,process(e,t,n,a,o,l,i,c,u,p){const{mc:d,pc:f,pbc:h,o:{insert:g,querySelector:m,createText:x,createComment:b}}=p,y=Fs(t.props);let{shapeFlag:S,children:$,dynamicChildren:I}=t;if(e==null){const M=t.el=x(""),L=t.anchor=x("");g(M,n,a),g(L,n,a);const B=t.target=Yo(t.props,m),Q=t.targetAnchor=x("");B&&(g(Q,B),i=i||Wi(B));const ce=(pe,_e)=>{S&16&&d($,pe,_e,o,l,i,c,u)};y?ce(n,L):B&&ce(B,Q)}else{t.el=e.el;const M=t.anchor=e.anchor,L=t.target=e.target,B=t.targetAnchor=e.targetAnchor,Q=Fs(e.props),ce=Q?n:L,pe=Q?M:B;if(i=i||Wi(L),I?(h(e.dynamicChildren,I,ce,o,l,i,c),Ul(e,t,!0)):u||f(e,t,ce,pe,o,l,i,c,!1),y)Q||ha(t,n,M,p,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const _e=t.target=Yo(t.props,m);_e&&ha(t,_e,null,p,0)}else Q&&ha(t,L,B,p,1)}},remove(e,t,n,a,{um:o,o:{remove:l}},i){const{shapeFlag:c,children:u,anchor:p,targetAnchor:d,target:f,props:h}=e;if(f&&l(d),(i||!Fs(h))&&(l(p),c&16))for(let g=0;g<u.length;g++){const m=u[g];o(m,t,n,!0,!!m.dynamicChildren)}},move:ha,hydrate:uh};function ha(e,t,n,{o:{insert:a},m:o},l=2){l===0&&a(e.targetAnchor,t,n);const{el:i,anchor:c,shapeFlag:u,children:p,props:d}=e,f=l===2;if(f&&a(i,t,n),(!f||Fs(d))&&u&16)for(let h=0;h<p.length;h++)o(p[h],t,n,2);f&&a(c,t,n)}function uh(e,t,n,a,o,l,{o:{nextSibling:i,parentNode:c,querySelector:u}},p){const d=t.target=Yo(t.props,u);if(d){const f=d._lpa||d.firstChild;if(t.shapeFlag&16)if(Fs(t.props))t.anchor=p(i(e),t,c(e),n,a,o,l),t.targetAnchor=f;else{t.anchor=i(e);let h=f;for(;h;)if(h=i(h),h&&h.nodeType===8&&h.data==="teleport anchor"){t.targetAnchor=h,d._lpa=t.targetAnchor&&i(t.targetAnchor);break}p(f,t,d,n,a,o,l)}}return t.anchor&&i(t.anchor)}const ph=ch,ye=Symbol(void 0),Yl=Symbol(void 0),mn=Symbol(void 0),xa=Symbol(void 0),Ps=[];let Et=null;function E(e=!1){Ps.push(Et=e?null:[])}function dh(){Ps.pop(),Et=Ps[Ps.length-1]||null}let zs=1;function Ki(e){zs+=e}function Eu(e){return e.dynamicChildren=zs>0?Et||Qn:null,dh(),zs>0&&Et&&Et.push(e),e}function H(e,t,n,a,o,l){return Eu(s(e,t,n,a,o,l,!0))}function X(e,t,n,a,o){return Eu(_(e,t,n,a,o,!0))}function Ln(e){return e?e.__v_isVNode===!0:!1}function xs(e,t){return e.type===t.type&&e.key===t.key}const oo="__vInternal",Ou=({key:e})=>e!=null?e:null,ba=({ref:e,ref_key:t,ref_for:n})=>e!=null?Re(e)||we(e)||ie(e)?{i:Je,r:e,k:t,f:!!n}:e:null;function s(e,t=null,n=null,a=0,o=null,l=e===ye?0:1,i=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ou(t),ref:t&&ba(t),scopeId:Qa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:a,dynamicProps:o,dynamicChildren:null,appContext:null};return c?(Gl(u,n),l&128&&e.normalize(u)):n&&(u.shapeFlag|=Re(n)?8:16),zs>0&&!i&&Et&&(u.patchFlag>0||l&6)&&u.patchFlag!==32&&Et.push(u),u}const _=fh;function fh(e,t=null,n=null,a=0,o=null,l=!1){if((!e||e===Kf)&&(e=mn),Ln(e)){const c=Rn(e,t,!0);return n&&Gl(c,n),zs>0&&!l&&Et&&(c.shapeFlag&6?Et[Et.indexOf(e)]=c:Et.push(c)),c.patchFlag|=-2,c}if(xh(e)&&(e=e.__vccOpts),t){t=Ee(t);let{class:c,style:u}=t;c&&!Re(c)&&(t.class=Me(c)),je(u)&&(eu(u)&&!se(u)&&(u=it({},u)),t.style=De(u))}const i=Re(e)?1:uu(e)?128:rh(e)?64:je(e)?4:ie(e)?2:0;return s(e,t,n,a,o,i,l,!0)}function Ee(e){return e?eu(e)||oo in e?it({},e):e:null}function Rn(e,t,n=!1){const{props:a,ref:o,patchFlag:l,children:i}=e,c=t?te(a||{},t):a;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Ou(c),ref:t&&t.ref?n&&o?se(o)?o.concat(ba(t)):[o,ba(t)]:ba(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ye?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Rn(e.ssContent),ssFallback:e.ssFallback&&Rn(e.ssFallback),el:e.el,anchor:e.anchor}}function r(e=" ",t=0){return _(Yl,null,e,t)}function Zl(e,t){const n=_(xa,null,e);return n.staticCount=t,n}function me(e="",t=!1){return t?(E(),X(mn,null,e)):_(mn,null,e)}function Rt(e){return e==null||typeof e=="boolean"?_(mn):se(e)?_(ye,null,e.slice()):typeof e=="object"?an(e):_(Yl,null,String(e))}function an(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Rn(e)}function Gl(e,t){let n=0;const{shapeFlag:a}=e;if(t==null)t=null;else if(se(t))n=16;else if(typeof t=="object")if(a&65){const o=t.default;o&&(o._c&&(o._d=!1),Gl(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!(oo in t)?t._ctx=Je:o===3&&Je&&(Je.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ie(t)?(t={default:t,_ctx:Je},n=32):(t=String(t),a&64?(n=16,t=[r(t)]):n=8);e.children=t,e.shapeFlag|=n}function te(...e){const t={};for(let n=0;n<e.length;n++){const a=e[n];for(const o in a)if(o==="class")t.class!==a.class&&(t.class=Me([t.class,a.class]));else if(o==="style")t.style=De([t.style,a.style]);else if(Wa(o)){const l=t[o],i=a[o];i&&l!==i&&!(se(l)&&l.includes(i))&&(t[o]=l?[].concat(l,i):i)}else o!==""&&(t[o]=a[o])}return t}function kt(e,t,n,a=null){It(e,t,7,[n,a])}const hh=Su();let mh=0;function gh(e,t,n){const a=e.type,o=(t?t.appContext:e.appContext)||hh,l={uid:mh++,vnode:e,type:a,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new Hc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bu(a,o),emitsOptions:cu(a,o),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:a.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=t?t.root:l,l.emit=Of.bind(null,l),e.ce&&e.ce(l),l}let ze=null;const Bn=()=>ze||Je,is=e=>{ze=e,e.scope.on()},Tn=()=>{ze&&ze.scope.off(),ze=null};function Cu(e){return e.vnode.shapeFlag&4}let Us=!1;function vh(e,t=!1){Us=t;const{props:n,children:a}=e.vnode,o=Cu(e);Qf(e,n,o,t),th(e,a);const l=o?_h(e,t):void 0;return Us=!1,l}function _h(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Za(new Proxy(e.ctx,zf));const{setup:a}=n;if(a){const o=e.setupContext=a.length>1?Fu(e):null;is(e),ps();const l=cn(a,e,0,[e.props,o]);if(ds(),Tn(),Nc(l)){if(l.then(Tn,Tn),t)return l.then(i=>{zi(e,i,t)}).catch(i=>{Ga(i,e,0)});e.asyncDep=l}else zi(e,l,t)}else Iu(e,t)}function zi(e,t,n){ie(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:je(t)&&(e.setupState=nu(t)),Iu(e,n)}let Ui;function Iu(e,t,n){const a=e.type;if(!e.render){if(!t&&Ui&&!a.render){const o=a.template||Kl(e).template;if(o){const{isCustomElement:l,compilerOptions:i}=e.appContext.config,{delimiters:c,compilerOptions:u}=a,p=it(it({isCustomElement:l,delimiters:c},i),u);a.render=Ui(o,p)}}e.render=a.render||Ct}is(e),ps(),Uf(e),ds(),Tn()}function kh(e){return new Proxy(e.attrs,{get(t,n){return _t(e,"get","$attrs"),t[n]}})}function Fu(e){const t=a=>{e.exposed=a||{}};let n;return{get attrs(){return n||(n=kh(e))},slots:e.slots,emit:e.emit,expose:t}}function lo(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(nu(Za(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Pa)return Pa[n](e)}}))}function Zo(e,t=!0){return ie(e)?e.displayName||e.name:e.name||t&&e.__name}function xh(e){return ie(e)&&"__vccOpts"in e}const F=(e,t)=>bf(e,t,Us);function bh(){return yh().slots}function yh(){const e=Bn();return e.setupContext||(e.setupContext=Fu(e))}function ot(e,t,n){const a=arguments.length;return a===2?je(t)&&!se(t)?Ln(t)?_(e,null,[t]):_(e,t):_(e,null,t):(a>3?n=Array.prototype.slice.call(arguments,2):a===3&&Ln(n)&&(n=[n]),_(e,t,n))}const wh="3.2.40",$h="http://www.w3.org/2000/svg",$n=typeof document<"u"?document:null,Yi=$n&&$n.createElement("template"),Sh={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,a)=>{const o=t?$n.createElementNS($h,e):$n.createElement(e,n?{is:n}:void 0);return e==="select"&&a&&a.multiple!=null&&o.setAttribute("multiple",a.multiple),o},createText:e=>$n.createTextNode(e),createComment:e=>$n.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>$n.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,a,o,l){const i=n?n.previousSibling:t.lastChild;if(o&&(o===l||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===l||!(o=o.nextSibling)););else{Yi.innerHTML=a?`<svg>${e}</svg>`:e;const c=Yi.content;if(a){const u=c.firstChild;for(;u.firstChild;)c.appendChild(u.firstChild);c.removeChild(u)}t.insertBefore(c,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Eh(e,t,n){const a=e._vtc;a&&(t=(t?[t,...a]:[...a]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Oh(e,t,n){const a=e.style,o=Re(n);if(n&&!o){for(const l in n)Go(a,l,n[l]);if(t&&!Re(t))for(const l in t)n[l]==null&&Go(a,l,"")}else{const l=a.display;o?t!==n&&(a.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(a.display=l)}}const Zi=/\s*!important$/;function Go(e,t,n){if(se(n))n.forEach(a=>Go(e,t,a));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const a=Ch(e,t);Zi.test(n)?e.setProperty(Nn(a),n.replace(Zi,""),"important"):e[a]=n}}const Gi=["Webkit","Moz","ms"],go={};function Ch(e,t){const n=go[t];if(n)return n;let a=qt(t);if(a!=="filter"&&a in e)return go[t]=a;a=Ua(a);for(let o=0;o<Gi.length;o++){const l=Gi[o]+a;if(l in e)return go[t]=l}return t}const Xi="http://www.w3.org/1999/xlink";function Ih(e,t,n,a,o){if(a&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Xi,t.slice(6,t.length)):e.setAttributeNS(Xi,t,n);else{const l=Ed(t);n==null||l&&!Mc(n)?e.removeAttribute(t):e.setAttribute(t,l?"":n)}}function Fh(e,t,n,a,o,l,i){if(t==="innerHTML"||t==="textContent"){a&&i(a,o,l),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const u=n==null?"":n;(e.value!==u||e.tagName==="OPTION")&&(e.value=u),n==null&&e.removeAttribute(t);return}let c=!1;if(n===""||n==null){const u=typeof e[t];u==="boolean"?n=Mc(n):n==null&&u==="string"?(n="",c=!0):u==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}const[Pu,Ph]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let Xo=0;const Th=Promise.resolve(),Ah=()=>{Xo=0},jh=()=>Xo||(Th.then(Ah),Xo=Pu());function Un(e,t,n,a){e.addEventListener(t,n,a)}function Mh(e,t,n,a){e.removeEventListener(t,n,a)}function Lh(e,t,n,a,o=null){const l=e._vei||(e._vei={}),i=l[t];if(a&&i)i.value=a;else{const[c,u]=Rh(t);if(a){const p=l[t]=Nh(a,o);Un(e,c,p,u)}else i&&(Mh(e,c,i,u),l[t]=void 0)}}const Qi=/(?:Once|Passive|Capture)$/;function Rh(e){let t;if(Qi.test(e)){t={};let a;for(;a=e.match(Qi);)e=e.slice(0,e.length-a[0].length),t[a[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Nn(e.slice(2)),t]}function Nh(e,t){const n=a=>{const o=a.timeStamp||Pu();(Ph||o>=n.attached-1)&&It(Bh(a,n.value),t,5,[a])};return n.value=e,n.attached=jh(),n}function Bh(e,t){if(se(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(a=>o=>!o._stopped&&a&&a(o))}else return t}const Ji=/^on[a-z]/,Dh=(e,t,n,a,o=!1,l,i,c,u)=>{t==="class"?Eh(e,a,o):t==="style"?Oh(e,n,a):Wa(t)?Cl(t)||Lh(e,t,n,a,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Hh(e,t,a,o))?Fh(e,t,a,l,i,c,u):(t==="true-value"?e._trueValue=a:t==="false-value"&&(e._falseValue=a),Ih(e,t,a,o))};function Hh(e,t,n,a){return a?!!(t==="innerHTML"||t==="textContent"||t in e&&Ji.test(t)&&ie(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ji.test(t)&&Re(n)?!1:t in e}const er=e=>{const t=e.props["onUpdate:modelValue"]||!1;return se(t)?n=>es(t,n):t};function qh(e){e.target.composing=!0}function tr(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Vh={created(e,{modifiers:{lazy:t,trim:n,number:a}},o){e._assign=er(o);const l=a||o.props&&o.props.type==="number";Un(e,t?"change":"input",i=>{if(i.target.composing)return;let c=e.value;n&&(c=c.trim()),l&&(c=Ro(c)),e._assign(c)}),n&&Un(e,"change",()=>{e.value=e.value.trim()}),t||(Un(e,"compositionstart",qh),Un(e,"compositionend",tr),Un(e,"change",tr))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:a,number:o}},l){if(e._assign=er(l),e.composing||document.activeElement===e&&e.type!=="range"&&(n||a&&e.value.trim()===t||(o||e.type==="number")&&Ro(e.value)===t))return;const i=t==null?"":t;e.value!==i&&(e.value=i)}},Wh={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},nr=(e,t)=>n=>{if(!("key"in n))return;const a=Nn(n.key);if(t.some(o=>o===a||Wh[o]===a))return e(n)},Tu={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):bs(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:a}){!t!=!n&&(a?t?(a.beforeEnter(e),bs(e,!0),a.enter(e)):a.leave(e,()=>{bs(e,!1)}):bs(e,t))},beforeUnmount(e,{value:t}){bs(e,t)}};function bs(e,t){e.style.display=t?e._vod:"none"}const Kh=it({patchProp:Dh},Sh);let sr;function zh(){return sr||(sr=oh(Kh))}const Uh=(...e)=>{const t=zh().createApp(...e),{mount:n}=t;return t.mount=a=>{const o=Yh(a);if(!o)return;const l=t._component;!ie(l)&&!l.render&&!l.template&&(l.template=o.innerHTML),o.innerHTML="";const i=n(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},t};function Yh(e){return Re(e)?document.querySelector(e):e}var ar;const Tt=typeof window<"u",Zh=e=>typeof e<"u",Gh=Object.prototype.toString,Aa=e=>typeof e=="function",Xh=e=>typeof e=="number",Au=e=>typeof e=="string",Qo=e=>Gh.call(e)==="[object Object]",Jo=()=>+Date.now(),An=()=>{};Tt&&((ar=window==null?void 0:window.navigator)==null?void 0:ar.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Ge(e){return typeof e=="function"?e():w(e)}function Qh(e,t){function n(...a){e(()=>t.apply(this,a),{fn:t,thisArg:this,args:a})}return n}const ju=e=>e();function Jh(e=ju){const t=q(!0);function n(){t.value=!1}function a(){t.value=!0}return{isActive:t,pause:n,resume:a,eventFilter:(...l)=>{t.value&&e(...l)}}}function em(e){return e}function tm(e,t){var n;if(typeof e=="number")return e+t;const a=((n=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:n[0])||"",o=e.slice(a.length),l=parseFloat(a)+t;return Number.isNaN(l)?e:l+o}function nm(e,t){let n,a,o;const l=q(!0),i=()=>{l.value=!0,o()};ue(e,i,{flush:"sync"});const c=Aa(t)?t:t.get,u=Aa(t)?void 0:t.set,p=su((d,f)=>(a=d,o=f,{get(){return l.value&&(n=c(),l.value=!1),a(),n},set(h){u==null||u(h)}}));return Object.isExtensible(p)&&(p.trigger=i),p}function Xt(e){return qc()?(Vc(e),!0):!1}function sm(e){if(!we(e))return Ae(e);const t=new Proxy({},{get(n,a,o){return w(Reflect.get(e.value,a,o))},set(n,a,o){return we(e.value[a])&&!we(o)?e.value[a].value=o:e.value[a]=o,!0},deleteProperty(n,a){return Reflect.deleteProperty(e.value,a)},has(n,a){return Reflect.has(e.value,a)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Ae(t)}function Mu(e){return typeof e=="function"?F(e):q(e)}var am=Object.defineProperty,om=Object.defineProperties,lm=Object.getOwnPropertyDescriptors,or=Object.getOwnPropertySymbols,im=Object.prototype.hasOwnProperty,rm=Object.prototype.propertyIsEnumerable,lr=(e,t,n)=>t in e?am(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,cm=(e,t)=>{for(var n in t||(t={}))im.call(t,n)&&lr(e,n,t[n]);if(or)for(var n of or(t))rm.call(t,n)&&lr(e,n,t[n]);return e},um=(e,t)=>om(e,lm(t));function pm(e){if(!we(e))return vf(e);const t=Array.isArray(e.value)?new Array(e.value.length):{};for(const n in e.value)t[n]=su(()=>({get(){return e.value[n]},set(a){if(Array.isArray(e.value)){const o=[...e.value];o[n]=a,e.value=o}else{const o=um(cm({},e.value),{[n]:a});Object.setPrototypeOf(o,e.value),e.value=o}}}));return t}function Lu(e,t=!0){Bn()?hs(e):t?e():Qe(e)}function dm(e){Bn()&&so(e)}function fm(e,t=1e3,n={}){const{immediate:a=!0,immediateCallback:o=!1}=n;let l=null;const i=q(!1);function c(){l&&(clearInterval(l),l=null)}function u(){i.value=!1,c()}function p(){w(t)<=0||(i.value=!0,o&&e(),c(),l=setInterval(e,Ge(t)))}if(a&&Tt&&p(),we(t)){const d=ue(t,()=>{i.value&&Tt&&p()});Xt(d)}return Xt(u),{isActive:i,pause:u,resume:p}}function hm(e,t,n={}){const{immediate:a=!0}=n,o=q(!1);let l=null;function i(){l&&(clearTimeout(l),l=null)}function c(){o.value=!1,i()}function u(...p){i(),o.value=!0,l=setTimeout(()=>{o.value=!1,l=null,e(...p)},Ge(t))}return a&&(o.value=!0,Tt&&u()),Xt(c),{isPending:o,start:u,stop:c}}function Ru(e=!1,t={}){const{truthyValue:n=!0,falsyValue:a=!1}=t,o=we(e),l=q(e);function i(c){if(arguments.length)return l.value=c,l.value;{const u=Ge(n);return l.value=l.value===u?Ge(a):u,l.value}}return o?i:[l,i]}var ir=Object.getOwnPropertySymbols,mm=Object.prototype.hasOwnProperty,gm=Object.prototype.propertyIsEnumerable,vm=(e,t)=>{var n={};for(var a in e)mm.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&ir)for(var a of ir(e))t.indexOf(a)<0&&gm.call(e,a)&&(n[a]=e[a]);return n};function _m(e,t,n={}){const a=n,{eventFilter:o=ju}=a,l=vm(a,["eventFilter"]);return ue(e,Qh(o,t),l)}var km=Object.defineProperty,xm=Object.defineProperties,bm=Object.getOwnPropertyDescriptors,ja=Object.getOwnPropertySymbols,Nu=Object.prototype.hasOwnProperty,Bu=Object.prototype.propertyIsEnumerable,rr=(e,t,n)=>t in e?km(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ym=(e,t)=>{for(var n in t||(t={}))Nu.call(t,n)&&rr(e,n,t[n]);if(ja)for(var n of ja(t))Bu.call(t,n)&&rr(e,n,t[n]);return e},wm=(e,t)=>xm(e,bm(t)),$m=(e,t)=>{var n={};for(var a in e)Nu.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&ja)for(var a of ja(e))t.indexOf(a)<0&&Bu.call(e,a)&&(n[a]=e[a]);return n};function Sm(e,t,n={}){const a=n,{eventFilter:o}=a,l=$m(a,["eventFilter"]),{eventFilter:i,pause:c,resume:u,isActive:p}=Jh(o);return{stop:_m(e,t,wm(ym({},l),{eventFilter:i})),pause:c,resume:u,isActive:p}}var Du="usehead",cr="head:count",vo="data-head-attrs",Hu="data-meta-body",Em=(e,t)=>{const n=a=>{if(a.props.renderPriority)return a.props.renderPriority;switch(a.tag){case"base":return-1;case"meta":return a.props.charset?-2:a.props["http-equiv"]==="content-security-policy"?0:10;default:return 10}};return n(e)-n(t)},Om=e=>{if(!["meta","base","script","link","title"].includes(e.tag))return!1;const{props:t,tag:n}=e;if(n==="base"||n==="title")return n;if(n==="link"&&t.rel==="canonical")return"canonical";if(t.charset)return"charset";const a=["key","id","name","property","http-equiv"];for(const o of a){let l;if(typeof t.getAttribute=="function"&&t.hasAttribute(o)?l=t.getAttribute(o):l=t[o],l!==void 0)return`${n}-${o}-${l}`}return!1};function el(e){const t=Ge(e);return!e||!t?t:Array.isArray(t)?t.map(el):typeof t=="object"?Object.fromEntries(Object.entries(t).map(([n,a])=>n==="titleTemplate"?[n,w(a)]:[n,el(a)])):t}function Cm(e){return{...e,input:el(e.input)}}function ur(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){const n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){const a=t.cloneNode(!0);return a.setAttribute("nonce",""),a.nonce=n,n===e.nonce&&e.isEqualNode(a)}}return e.isEqualNode(t)}var pr=(e,t)=>{const n=e.getAttribute(vo);if(n)for(const o of n.split(","))o in t||e.removeAttribute(o);const a=[];for(const o in t){const l=t[o];l!=null&&(l===!1?e.removeAttribute(o):e.setAttribute(o,l),a.push(o))}a.length?e.setAttribute(vo,a.join(",")):e.removeAttribute(vo)},Im=(e,t,n)=>{const a=n.createElement(e);for(const o of Object.keys(t))if(o==="body"&&t.body===!0)a.setAttribute(Hu,"true");else{const l=t[o];if(o==="renderPriority"||o==="key"||l===!1)continue;o==="children"||o==="textContent"?a.textContent=l:o==="innerHTML"?a.innerHTML=l:a.setAttribute(o,l)}return a},Fm=(e=window.document,t,n)=>{var a,o;const l=e.head,i=e.body;let c=l.querySelector(`meta[name="${cr}"]`);const u=i.querySelectorAll(`[${Hu}]`),p=c?Number(c.getAttribute("content")):0,d=[],f=[];if(u)for(let g=0;g<u.length;g++)u[g]&&((a=u[g].tagName)==null?void 0:a.toLowerCase())===t&&f.push(u[g]);if(c)for(let g=0,m=c.previousElementSibling;g<p;g++,m=(m==null?void 0:m.previousElementSibling)||null)((o=m==null?void 0:m.tagName)==null?void 0:o.toLowerCase())===t&&d.push(m);else c=e.createElement("meta"),c.setAttribute("name",cr),c.setAttribute("content","0"),l.append(c);let h=n.map(g=>{var m;return{element:Im(g.tag,g.props,e),body:(m=g.props.body)!=null?m:!1}});h=h.filter(g=>{for(let m=0;m<d.length;m++){const x=d[m];if(ur(x,g.element))return d.splice(m,1),!1}for(let m=0;m<f.length;m++){const x=f[m];if(ur(x,g.element))return f.splice(m,1),!1}return!0}),f.forEach(g=>{var m;return(m=g.parentNode)==null?void 0:m.removeChild(g)}),d.forEach(g=>{var m;return(m=g.parentNode)==null?void 0:m.removeChild(g)}),h.forEach(g=>{g.body===!0?i.insertAdjacentElement("beforeend",g.element):l.insertBefore(g.element,c)}),c.setAttribute("content",`${p-d.length+h.filter(g=>!g.body).length}`)},Pm=({domCtx:e,document:t,previousTags:n})=>{t||(t=window.document),e.title!==void 0&&(t.title=e.title),pr(t.documentElement,e.htmlAttrs),pr(t.body,e.bodyAttrs);const a=new Set([...Object.keys(e.actualTags),...n]);for(const o of a)Fm(t,o,e.actualTags[o]||[]);n.clear(),Object.keys(e.actualTags).forEach(o=>n.add(o))},Tm=()=>{const e=V(Du);if(!e)throw new Error("You may forget to apply app.use(head)");return e},Am=["title","meta","link","base","style","script","noscript","htmlAttrs","bodyAttrs"],jm=(e,t)=>e==null?"":typeof e=="function"?e(t):e.replace("%s",t!=null?t:""),Mm=e=>{const t=[],n=Object.keys(e),a=o=>(o.hid&&(o.key=o.hid,delete o.hid),o.vmid&&(o.key=o.vmid,delete o.vmid),o);for(const o of n)if(e[o]!=null)switch(o){case"title":t.push({tag:o,props:{textContent:e[o]}});break;case"titleTemplate":break;case"base":t.push({tag:o,props:{key:"default",...e[o]}});break;default:if(Am.includes(o)){const l=e[o];Array.isArray(l)?l.forEach(i=>{const c=a(i);t.push({tag:o,props:c})}):l&&t.push({tag:o,props:a(l)})}break}return t},Lm=e=>{let t=[];const n=new Set;let a=0;const o=[],l=[];e&&t.push({input:e});let i=null,c;const u={install(p){p.config.globalProperties.$head=u,p.provide(Du,u)},hookBeforeDomUpdate:o,hookTagsResolved:l,get headTags(){const p=[],d={},f=t.map(Cm),h=f.map(m=>m.input.titleTemplate).reverse().find(m=>m!=null);f.forEach((m,x)=>{Mm(m.input).forEach((y,S)=>{var $;if(y._position=x*1e4+S,y._options&&delete y._options,m.options&&(y._options=m.options),h&&y.tag==="title"&&(y.props.textContent=jm(h,y.props.textContent)),!(($=y._options)!=null&&$.raw)){for(const M in y.props)M.startsWith("on")&&(console.warn("[@vueuse/head] Warning, you must use `useHeadRaw` to set event listeners. See https://github.com/vueuse/head/pull/118",y),delete y.props[M]);y.props.innerHTML&&(console.warn("[@vueuse/head] Warning, you must use `useHeadRaw` to use `innerHTML`",y),delete y.props.innerHTML)}const I=Om(y);I?d[I]=y:p.push(y)})}),p.push(...Object.values(d));const g=p.sort((m,x)=>m._position-x._position);return u.hookTagsResolved.forEach(m=>m(g)),g},addHeadObjs(p,d){const f={input:p,options:d,id:a++};return t.push(f),()=>{t=t.filter(h=>h.id!==f.id)}},removeHeadObjs(p){t=t.filter(d=>d.input!==p)},updateDOM:(p,d)=>{c={title:void 0,htmlAttrs:{},bodyAttrs:{},actualTags:{}};for(const h of u.headTags.sort(Em)){if(h.tag==="title"){c.title=h.props.textContent;continue}if(h.tag==="htmlAttrs"||h.tag==="bodyAttrs"){Object.assign(c[h.tag],h.props);continue}c.actualTags[h.tag]=c.actualTags[h.tag]||[],c.actualTags[h.tag].push(h)}const f=()=>{i=null;for(const h in u.hookBeforeDomUpdate)if(u.hookBeforeDomUpdate[h](c.actualTags)===!1)return;Pm({domCtx:c,document:p,previousTags:n})};if(d){f();return}i=i||Qe(()=>f())}};return u},Rm=typeof window<"u",Nm=(e,t={})=>{const n=Tm(),a=n.addHeadObjs(e,t);Rm&&(fs(()=>{n.updateDOM()}),no(()=>{a(),n.updateDOM()}))},Bm=e=>{Nm(e)};const Ts=Symbol("v-click-clicks"),Sn=Symbol("v-click-clicks-elements"),tl=Symbol("v-click-clicks-order-map"),As=Symbol("v-click-clicks-disabled"),qu=Symbol("slidev-slide-scale"),U=Symbol("slidev-slidev-context"),Dm=Symbol("slidev-route"),Hm=Symbol("slidev-slide-context"),yn="slidev-vclick-target",_o="slidev-vclick-hidden",qm="slidev-vclick-fade",ko="slidev-vclick-hidden-explicitly",ys="slidev-vclick-current",ma="slidev-vclick-prior";function Vm(e){return e=e||[],Array.isArray(e)?e:[e]}function nl(e,t){if(!e)return!1;const n=e.indexOf(t);return n>=0?(e.splice(n,1),!0):!1}function Wm(...e){let t,n,a;e.length===1?(t=0,a=1,[n]=e):[t,n,a=1]=e;const o=[];let l=t;for(;l<n;)o.push(l),l+=a||1;return o}function Km(e){return e!=null}function zm(e,t){return Object.fromEntries(Object.entries(e).map(([n,a])=>t(n,a)).filter(Km))}const Cn={theme:"default",title:"Flex \u5E03\u5C40",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,info:!1,highlighter:"prism",lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:1300,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Robot"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:['"Robot Slab"',"ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Robot","Robot Slab","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"windicss",background:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/flex-bg.3wlnmzcqmq60.jpeg",layout:"cover"},xe=Cn;var Ac;const un=(Ac=xe.aspectRatio)!=null?Ac:16/9;var jc;const jn=(jc=xe.canvasWidth)!=null?jc:980,Vu=Math.round(jn/un),Wu=F(()=>zm(xe.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t]));function bt(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,enumerable:!1})}const Dn=Ae({page:0,clicks:0});let Um=[],Ym=[];bt(Dn,"$syncUp",!0);bt(Dn,"$syncDown",!0);bt(Dn,"$paused",!1);bt(Dn,"$onSet",e=>Um.push(e));bt(Dn,"$onPatch",e=>Ym.push(e));bt(Dn,"$patch",async()=>!1);function Ku(e,t,n=!1){const a=[];let o=!1,l=!1,i,c;const u=Ae(t);function p(g){a.push(g)}function d(g,m){clearTimeout(i),o=!0,u[g]=m,i=setTimeout(()=>o=!1,0)}function f(g){o||(clearTimeout(c),l=!0,Object.entries(g).forEach(([m,x])=>{u[m]=x}),c=setTimeout(()=>l=!1,0))}function h(g){let m;n?n&&window.addEventListener("storage",b=>{b&&b.key===g&&b.newValue&&f(JSON.parse(b.newValue))}):(m=new BroadcastChannel(g),m.addEventListener("message",b=>f(b.data)));function x(){!n&&m&&!l?m.postMessage(be(u)):n&&!l&&window.localStorage.setItem(g,JSON.stringify(u)),o||a.forEach(b=>b(u))}if(ue(u,x,{deep:!0}),n){const b=window.localStorage.getItem(g);b&&f(JSON.parse(b))}}return{init:h,onPatch:p,patch:d,state:u}}const{init:Zm,onPatch:Gm,patch:dr,state:xo}=Ku(Dn,{page:1,clicks:0}),Hn=Ae({});let Xm=[],Qm=[];bt(Hn,"$syncUp",!0);bt(Hn,"$syncDown",!0);bt(Hn,"$paused",!1);bt(Hn,"$onSet",e=>Xm.push(e));bt(Hn,"$onPatch",e=>Qm.push(e));bt(Hn,"$patch",async()=>!1);const{init:Jm,onPatch:eg,patch:zu,state:Ma}=Ku(Hn,{},!1),tg="modulepreload",ng=function(e){return"/slides-flex/"+e},fr={},gs=function(t,n,a){return!n||n.length===0?t():Promise.all(n.map(o=>{if(o=ng(o),o in fr)return;fr[o]=!0;const l=o.endsWith(".css"),i=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${i}`))return;const c=document.createElement("link");if(c.rel=l?"stylesheet":tg,l||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),l)return new Promise((u,p)=>{c.addEventListener("load",u),c.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())};function Ot(e){var t;const n=Ge(e);return(t=n==null?void 0:n.$el)!=null?t:n}const tt=Tt?window:void 0,sg=Tt?window.document:void 0,ag=Tt?window.navigator:void 0;function re(...e){let t,n,a,o;if(Au(e[0])?([n,a,o]=e,t=tt):[t,n,a,o]=e,!t)return An;let l=An;const i=ue(()=>Ot(t),u=>{l(),u&&(u.addEventListener(n,a,o),l=()=>{u.removeEventListener(n,a,o),l=An})},{immediate:!0,flush:"post"}),c=()=>{i(),l()};return Xt(c),c}function og(e,t,n={}){const{window:a=tt,ignore:o,capture:l=!0,detectIframe:i=!1}=n;if(!a)return;const c=q(!0);let u;const p=g=>{a.clearTimeout(u);const m=Ot(e);!m||m===g.target||g.composedPath().includes(m)||!c.value||t(g)},d=g=>o&&o.some(m=>{const x=Ot(m);return x&&(g.target===x||g.composedPath().includes(x))}),f=[re(a,"click",p,{passive:!0,capture:l}),re(a,"pointerdown",g=>{const m=Ot(e);c.value=!!m&&!g.composedPath().includes(m)&&!d(g)},{passive:!0}),re(a,"pointerup",g=>{if(g.button===0){const m=g.composedPath();g.composedPath=()=>m,u=a.setTimeout(()=>p(g),50)}},{passive:!0}),i&&re(a,"blur",g=>{var m;const x=Ot(e);((m=document.activeElement)==null?void 0:m.tagName)==="IFRAME"&&!(x!=null&&x.contains(document.activeElement))&&t(g)})].filter(Boolean);return()=>f.forEach(g=>g())}const lg=e=>typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):()=>!0;function ig(...e){let t,n,a={};e.length===3?(t=e[0],n=e[1],a=e[2]):e.length===2?typeof e[1]=="object"?(t=!0,n=e[0],a=e[1]):(t=e[0],n=e[1]):(t=!0,n=e[0]);const{target:o=tt,eventName:l="keydown",passive:i=!1}=a,c=lg(t);return re(o,l,p=>{c(p)&&n(p)},i)}function rg(e={}){const{window:t=tt}=e,n=nm(()=>null,()=>t==null?void 0:t.document.activeElement);return t&&(re(t,"blur",n.trigger,!0),re(t,"focus",n.trigger,!0)),n}function na(e,t=!1){const n=q(),a=()=>n.value=Boolean(e());return a(),Lu(a,t),n}function Yn(e,t={}){const{window:n=tt}=t,a=na(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let o;const l=q(!1),i=()=>{!o||("removeEventListener"in o?o.removeEventListener("change",c):o.removeListener(c))},c=()=>{!a.value||(i(),o=n.matchMedia(Mu(e).value),l.value=o.matches,"addEventListener"in o?o.addEventListener("change",c):o.addListener(c))};return fs(c),Xt(()=>i()),l}const cg={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var ug=Object.defineProperty,hr=Object.getOwnPropertySymbols,pg=Object.prototype.hasOwnProperty,dg=Object.prototype.propertyIsEnumerable,mr=(e,t,n)=>t in e?ug(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,fg=(e,t)=>{for(var n in t||(t={}))pg.call(t,n)&&mr(e,n,t[n]);if(hr)for(var n of hr(t))dg.call(t,n)&&mr(e,n,t[n]);return e};function hg(e,t={}){function n(c,u){let p=e[c];return u!=null&&(p=tm(p,u)),typeof p=="number"&&(p=`${p}px`),p}const{window:a=tt}=t;function o(c){return a?a.matchMedia(c).matches:!1}const l=c=>Yn(`(min-width: ${n(c)})`,t),i=Object.keys(e).reduce((c,u)=>(Object.defineProperty(c,u,{get:()=>l(u),enumerable:!0,configurable:!0}),c),{});return fg({greater(c){return Yn(`(min-width: ${n(c,.1)})`,t)},greaterOrEqual:l,smaller(c){return Yn(`(max-width: ${n(c,-.1)})`,t)},smallerOrEqual(c){return Yn(`(max-width: ${n(c)})`,t)},between(c,u){return Yn(`(min-width: ${n(c)}) and (max-width: ${n(u,-.1)})`,t)},isGreater(c){return o(`(min-width: ${n(c,.1)})`)},isGreaterOrEqual(c){return o(`(min-width: ${n(c)})`)},isSmaller(c){return o(`(max-width: ${n(c,-.1)})`)},isSmallerOrEqual(c){return o(`(max-width: ${n(c)})`)},isInBetween(c,u){return o(`(min-width: ${n(c)}) and (max-width: ${n(u,-.1)})`)}},i)}function mg(e={}){const{navigator:t=ag,read:n=!1,source:a,copiedDuring:o=1500}=e,l=["copy","cut"],i=na(()=>t&&"clipboard"in t),c=q(""),u=q(!1),p=hm(()=>u.value=!1,o);function d(){t.clipboard.readText().then(h=>{c.value=h})}if(i.value&&n)for(const h of l)re(h,d);async function f(h=Ge(a)){i.value&&h!=null&&(await t.clipboard.writeText(h),c.value=h,u.value=!0,p.start())}return{isSupported:i,text:c,copied:u,copy:f}}function gg(e){return JSON.parse(JSON.stringify(e))}const sl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},al="__vueuse_ssr_handlers__";sl[al]=sl[al]||{};const vg=sl[al];function _g(e,t){return vg[e]||t}function kg(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}var xg=Object.defineProperty,gr=Object.getOwnPropertySymbols,bg=Object.prototype.hasOwnProperty,yg=Object.prototype.propertyIsEnumerable,vr=(e,t,n)=>t in e?xg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_r=(e,t)=>{for(var n in t||(t={}))bg.call(t,n)&&vr(e,n,t[n]);if(gr)for(var n of gr(t))yg.call(t,n)&&vr(e,n,t[n]);return e};const wg={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function jt(e,t,n,a={}){var o;const{flush:l="pre",deep:i=!0,listenToStorageChanges:c=!0,writeDefaults:u=!0,mergeDefaults:p=!1,shallow:d,window:f=tt,eventFilter:h,onError:g=B=>{console.error(B)}}=a,m=(d?Vt:q)(t);if(!n)try{n=_g("getDefaultStorage",()=>{var B;return(B=tt)==null?void 0:B.localStorage})()}catch(B){g(B)}if(!n)return m;const x=Ge(t),b=kg(x),y=(o=a.serializer)!=null?o:wg[b],{pause:S,resume:$}=Sm(m,()=>I(m.value),{flush:l,deep:i,eventFilter:h});return f&&c&&re(f,"storage",L),L(),m;function I(B){try{B==null?n.removeItem(e):n.setItem(e,y.write(B))}catch(Q){g(Q)}}function M(B){if(!(B&&B.key!==e)){S();try{const Q=B?B.newValue:n.getItem(e);if(Q==null)return u&&x!==null&&n.setItem(e,y.write(x)),x;if(!B&&p){const ce=y.read(Q);return Aa(p)?p(ce,x):b==="object"&&!Array.isArray(ce)?_r(_r({},x),ce):ce}else return typeof Q!="string"?Q:y.read(Q)}catch(Q){g(Q)}finally{$()}}}function L(B){B&&B.key!==e||(m.value=M(B))}}function $g(e){return Yn("(prefers-color-scheme: dark)",e)}var Sg=Object.defineProperty,Eg=Object.defineProperties,Og=Object.getOwnPropertyDescriptors,kr=Object.getOwnPropertySymbols,Cg=Object.prototype.hasOwnProperty,Ig=Object.prototype.propertyIsEnumerable,xr=(e,t,n)=>t in e?Sg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Fg=(e,t)=>{for(var n in t||(t={}))Cg.call(t,n)&&xr(e,n,t[n]);if(kr)for(var n of kr(t))Ig.call(t,n)&&xr(e,n,t[n]);return e},Pg=(e,t)=>Eg(e,Og(t));function a3(e,t={}){var n,a,o;const l=(n=t.draggingElement)!=null?n:tt,i=(a=t.handle)!=null?a:e,c=q((o=Ge(t.initialValue))!=null?o:{x:0,y:0}),u=q(),p=m=>t.pointerTypes?t.pointerTypes.includes(m.pointerType):!0,d=m=>{Ge(t.preventDefault)&&m.preventDefault(),Ge(t.stopPropagation)&&m.stopPropagation()},f=m=>{var x;if(!p(m)||Ge(t.exact)&&m.target!==Ge(e))return;const b=Ge(e).getBoundingClientRect(),y={x:m.pageX-b.left,y:m.pageY-b.top};((x=t.onStart)==null?void 0:x.call(t,y,m))!==!1&&(u.value=y,d(m))},h=m=>{var x;!p(m)||!u.value||(c.value={x:m.pageX-u.value.x,y:m.pageY-u.value.y},(x=t.onMove)==null||x.call(t,c.value,m),d(m))},g=m=>{var x;!p(m)||!u.value||(u.value=void 0,(x=t.onEnd)==null||x.call(t,c.value,m),d(m))};return Tt&&(re(i,"pointerdown",f,!0),re(l,"pointermove",h,!0),re(l,"pointerup",g,!0)),Pg(Fg({},pm(c)),{position:c,isDragging:F(()=>!!u.value),style:F(()=>`left:${c.value.x}px;top:${c.value.y}px;`)})}var br=Object.getOwnPropertySymbols,Tg=Object.prototype.hasOwnProperty,Ag=Object.prototype.propertyIsEnumerable,jg=(e,t)=>{var n={};for(var a in e)Tg.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&br)for(var a of br(e))t.indexOf(a)<0&&Ag.call(e,a)&&(n[a]=e[a]);return n};function Mg(e,t,n={}){const a=n,{window:o=tt}=a,l=jg(a,["window"]);let i;const c=na(()=>o&&"ResizeObserver"in o),u=()=>{i&&(i.disconnect(),i=void 0)},p=ue(()=>Ot(e),f=>{u(),c.value&&o&&f&&(i=new ResizeObserver(t),i.observe(f,l))},{immediate:!0,flush:"post"}),d=()=>{u(),p()};return Xt(d),{isSupported:c,stop:d}}function Lg(e,t={}){const{immediate:n=!0,window:a=tt}=t,o=q(!1);let l=null;function i(){!o.value||!a||(e(),l=a.requestAnimationFrame(i))}function c(){!o.value&&a&&(o.value=!0,i())}function u(){o.value=!1,l!=null&&a&&(a.cancelAnimationFrame(l),l=null)}return n&&c(),Xt(u),{isActive:o,pause:u,resume:c}}function Rg(e,t={width:0,height:0},n={}){const{box:a="content-box"}=n,o=q(t.width),l=q(t.height);return Mg(e,([i])=>{const c=a==="border-box"?i.borderBoxSize:a==="content-box"?i.contentBoxSize:i.devicePixelContentBoxSize;c?(o.value=c.reduce((u,{inlineSize:p})=>u+p,0),l.value=c.reduce((u,{blockSize:p})=>u+p,0)):(o.value=i.contentRect.width,l.value=i.contentRect.height)},n),ue(()=>Ot(e),i=>{o.value=i?t.width:0,l.value=i?t.height:0}),{width:o,height:l}}const yr=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function Ng(e,t={}){const{document:n=sg,autoExit:a=!1}=t,o=e||(n==null?void 0:n.querySelector("html")),l=q(!1);let i=yr[0];const c=na(()=>{if(n){for(const x of yr)if(x[1]in n)return i=x,!0}else return!1;return!1}),[u,p,d,,f]=i;async function h(){!c.value||(n!=null&&n[d]&&await n[p](),l.value=!1)}async function g(){if(!c.value)return;await h();const x=Ot(o);x&&(await x[u](),l.value=!0)}async function m(){l.value?await h():await g()}return n&&re(n,f,()=>{l.value=!!(n!=null&&n[d])},!1),a&&Xt(h),{isSupported:c,isFullscreen:l,enter:g,exit:h,toggle:m}}function Bg(e,t,n={}){const{root:a,rootMargin:o="0px",threshold:l=.1,window:i=tt}=n,c=na(()=>i&&"IntersectionObserver"in i);let u=An;const p=c.value?ue(()=>({el:Ot(e),root:Ot(a)}),({el:f,root:h})=>{if(u(),!f)return;const g=new IntersectionObserver(t,{root:h,rootMargin:o,threshold:l});g.observe(f),u=()=>{g.disconnect(),u=An}},{immediate:!0,flush:"post"}):An,d=()=>{u(),p()};return Xt(d),{isSupported:c,stop:d}}const Dg={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function Hg(e={}){const{reactive:t=!1,target:n=tt,aliasMap:a=Dg,passive:o=!0,onEventFired:l=An}=e,i=Ae(new Set),c={toJSON(){return{}},current:i},u=t?Ae(c):c,p=new Set,d=new Set;function f(x,b){x in u&&(t?u[x]=b:u[x].value=b)}function h(){for(const x of d)f(x,!1)}function g(x,b){var y,S;const $=(y=x.key)==null?void 0:y.toLowerCase(),M=[(S=x.code)==null?void 0:S.toLowerCase(),$].filter(Boolean);$&&(b?i.add($):i.delete($));for(const L of M)d.add(L),f(L,b);$==="meta"&&!b?(p.forEach(L=>{i.delete(L),f(L,!1)}),p.clear()):typeof x.getModifierState=="function"&&x.getModifierState("Meta")&&b&&[...i,...M].forEach(L=>p.add(L))}re(n,"keydown",x=>(g(x,!0),l(x)),{passive:o}),re(n,"keyup",x=>(g(x,!1),l(x)),{passive:o}),re("blur",h,{passive:!0}),re("focus",h,{passive:!0});const m=new Proxy(u,{get(x,b,y){if(typeof b!="string")return Reflect.get(x,b,y);if(b=b.toLowerCase(),b in a&&(b=a[b]),!(b in u))if(/[+_-]/.test(b)){const $=b.split(/[+_-]/g).map(I=>I.trim());u[b]=F(()=>$.every(I=>w(m[I])))}else u[b]=q(!1);const S=Reflect.get(x,b,y);return t?w(S):S}});return m}function o3(e={}){const{type:t="page",touch:n=!0,resetOnTouchEnds:a=!1,initialValue:o={x:0,y:0},window:l=tt,eventFilter:i}=e,c=q(o.x),u=q(o.y),p=q(null),d=x=>{t==="page"?(c.value=x.pageX,u.value=x.pageY):t==="client"&&(c.value=x.clientX,u.value=x.clientY),p.value="mouse"},f=()=>{c.value=o.x,u.value=o.y},h=x=>{if(x.touches.length>0){const b=x.touches[0];t==="page"?(c.value=b.pageX,u.value=b.pageY):t==="client"&&(c.value=b.clientX,u.value=b.clientY),p.value="touch"}},g=x=>i===void 0?d(x):i(()=>d(x),{}),m=x=>i===void 0?h(x):i(()=>h(x),{});return l&&(re(l,"mousemove",g,{passive:!0}),re(l,"dragover",g,{passive:!0}),n&&(re(l,"touchstart",m,{passive:!0}),re(l,"touchmove",m,{passive:!0}),a&&re(l,"touchend",f,{passive:!0}))),{x:c,y:u,sourceType:p}}var Zt;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Zt||(Zt={}));function qg(e,t={}){const n=Mu(e),{threshold:a=50,onSwipe:o,onSwipeEnd:l,onSwipeStart:i}=t,c=Ae({x:0,y:0}),u=(L,B)=>{c.x=L,c.y=B},p=Ae({x:0,y:0}),d=(L,B)=>{p.x=L,p.y=B},f=F(()=>c.x-p.x),h=F(()=>c.y-p.y),{max:g,abs:m}=Math,x=F(()=>g(m(f.value),m(h.value))>=a),b=q(!1),y=q(!1),S=F(()=>x.value?m(f.value)>m(h.value)?f.value>0?Zt.LEFT:Zt.RIGHT:h.value>0?Zt.UP:Zt.DOWN:Zt.NONE),$=L=>t.pointerTypes?t.pointerTypes.includes(L.pointerType):!0,I=[re(e,"pointerdown",L=>{var B,Q;if(!$(L))return;y.value=!0,(Q=(B=n.value)==null?void 0:B.style)==null||Q.setProperty("touch-action","none");const ce=L.target;ce==null||ce.setPointerCapture(L.pointerId);const{clientX:pe,clientY:_e}=L;u(pe,_e),d(pe,_e),i==null||i(L)}),re(e,"pointermove",L=>{if(!$(L)||!y.value)return;const{clientX:B,clientY:Q}=L;d(B,Q),!b.value&&x.value&&(b.value=!0),b.value&&(o==null||o(L))}),re(e,"pointerup",L=>{var B,Q;!$(L)||(b.value&&(l==null||l(L,S.value)),y.value=!1,b.value=!1,(Q=(B=n.value)==null?void 0:B.style)==null||Q.setProperty("touch-action","initial"))})],M=()=>I.forEach(L=>L());return{isSwiping:Gn(b),direction:Gn(S),posStart:Gn(c),posEnd:Gn(p),distanceX:f,distanceY:h,stop:M}}var Vg=Object.defineProperty,wr=Object.getOwnPropertySymbols,Wg=Object.prototype.hasOwnProperty,Kg=Object.prototype.propertyIsEnumerable,$r=(e,t,n)=>t in e?Vg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,zg=(e,t)=>{for(var n in t||(t={}))Wg.call(t,n)&&$r(e,n,t[n]);if(wr)for(var n of wr(t))Kg.call(t,n)&&$r(e,n,t[n]);return e};function l3(e={}){const{controls:t=!1,offset:n=0,immediate:a=!0,interval:o="requestAnimationFrame",callback:l}=e,i=q(Jo()+n),c=()=>i.value=Jo()+n,u=l?()=>{c(),l(i.value)}:c,p=o==="requestAnimationFrame"?Lg(u,{immediate:a}):fm(u,o,{immediate:a});return t?zg({timestamp:i},p):i}var Ug=Object.defineProperty,Sr=Object.getOwnPropertySymbols,Yg=Object.prototype.hasOwnProperty,Zg=Object.prototype.propertyIsEnumerable,Er=(e,t,n)=>t in e?Ug(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Gg=(e,t)=>{for(var n in t||(t={}))Yg.call(t,n)&&Er(e,n,t[n]);if(Sr)for(var n of Sr(t))Zg.call(t,n)&&Er(e,n,t[n]);return e};const Xg={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Gg({linear:em},Xg);function Dt(e,t,n,a={}){var o,l,i;const{clone:c=!1,passive:u=!1,eventName:p,deep:d=!1,defaultValue:f}=a,h=Bn(),g=n||(h==null?void 0:h.emit)||((o=h==null?void 0:h.$emit)==null?void 0:o.bind(h))||((i=(l=h==null?void 0:h.proxy)==null?void 0:l.$emit)==null?void 0:i.bind(h==null?void 0:h.proxy));let m=p;t||(t="modelValue"),m=p||m||`update:${t.toString()}`;const x=y=>c?Aa(c)?c(y):gg(y):y,b=()=>Zh(e[t])?x(e[t]):f;if(u){const y=b(),S=q(y);return ue(()=>e[t],$=>S.value=x($)),ue(S,$=>{($!==e[t]||d)&&g(m,$)},{deep:d}),S}else return F({get(){return b()},set(y){g(m,y)}})}function i3({window:e=tt}={}){if(!e)return q(!1);const t=q(e.document.hasFocus());return re(e,"blur",()=>{t.value=!1}),re(e,"focus",()=>{t.value=!0}),t}function Qg(e={}){const{window:t=tt,initialWidth:n=1/0,initialHeight:a=1/0,listenOrientation:o=!0,includeScrollbar:l=!0}=e,i=q(n),c=q(a),u=()=>{t&&(l?(i.value=t.innerWidth,c.value=t.innerHeight):(i.value=t.document.documentElement.clientWidth,c.value=t.document.documentElement.clientHeight))};return u(),Lu(u),re("resize",u,{passive:!0}),o&&re("orientationchange",u,{passive:!0}),{width:i,height:c}}/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Zn=typeof window<"u";function Jg(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Se=Object.assign;function bo(e,t){const n={};for(const a in t){const o=t[a];n[a]=At(o)?o.map(e):e(o)}return n}const js=()=>{},At=Array.isArray,ev=/\/$/,tv=e=>e.replace(ev,"");function yo(e,t,n="/"){let a,o={},l="",i="";const c=t.indexOf("#");let u=t.indexOf("?");return c<u&&c>=0&&(u=-1),u>-1&&(a=t.slice(0,u),l=t.slice(u+1,c>-1?c:t.length),o=e(l)),c>-1&&(a=a||t.slice(0,c),i=t.slice(c,t.length)),a=ov(a!=null?a:t,n),{fullPath:a+(l&&"?")+l+i,path:a,query:o,hash:i}}function nv(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Or(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function sv(e,t,n){const a=t.matched.length-1,o=n.matched.length-1;return a>-1&&a===o&&rs(t.matched[a],n.matched[o])&&Uu(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function rs(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Uu(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!av(e[n],t[n]))return!1;return!0}function av(e,t){return At(e)?Cr(e,t):At(t)?Cr(t,e):e===t}function Cr(e,t){return At(t)?e.length===t.length&&e.every((n,a)=>n===t[a]):e.length===1&&e[0]===t}function ov(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),a=e.split("/");let o=n.length-1,l,i;for(l=0;l<a.length;l++)if(i=a[l],i!==".")if(i==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+a.slice(l-(l===a.length?1:0)).join("/")}var Ys;(function(e){e.pop="pop",e.push="push"})(Ys||(Ys={}));var Ms;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Ms||(Ms={}));function lv(e){if(!e)if(Zn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),tv(e)}const iv=/^[^#]+#/;function rv(e,t){return e.replace(iv,"#")+t}function cv(e,t){const n=document.documentElement.getBoundingClientRect(),a=e.getBoundingClientRect();return{behavior:t.behavior,left:a.left-n.left-(t.left||0),top:a.top-n.top-(t.top||0)}}const io=()=>({left:window.pageXOffset,top:window.pageYOffset});function uv(e){let t;if("el"in e){const n=e.el,a=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?a?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=cv(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Ir(e,t){return(history.state?history.state.position-t:-1)+e}const ol=new Map;function pv(e,t){ol.set(e,t)}function dv(e){const t=ol.get(e);return ol.delete(e),t}let fv=()=>location.protocol+"//"+location.host;function Yu(e,t){const{pathname:n,search:a,hash:o}=t,l=e.indexOf("#");if(l>-1){let c=o.includes(e.slice(l))?e.slice(l).length:1,u=o.slice(c);return u[0]!=="/"&&(u="/"+u),Or(u,"")}return Or(n,e)+a+o}function hv(e,t,n,a){let o=[],l=[],i=null;const c=({state:h})=>{const g=Yu(e,location),m=n.value,x=t.value;let b=0;if(h){if(n.value=g,t.value=h,i&&i===m){i=null;return}b=x?h.position-x.position:0}else a(g);o.forEach(y=>{y(n.value,m,{delta:b,type:Ys.pop,direction:b?b>0?Ms.forward:Ms.back:Ms.unknown})})};function u(){i=n.value}function p(h){o.push(h);const g=()=>{const m=o.indexOf(h);m>-1&&o.splice(m,1)};return l.push(g),g}function d(){const{history:h}=window;!h.state||h.replaceState(Se({},h.state,{scroll:io()}),"")}function f(){for(const h of l)h();l=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d),{pauseListeners:u,listen:p,destroy:f}}function Fr(e,t,n,a=!1,o=!1){return{back:e,current:t,forward:n,replaced:a,position:window.history.length,scroll:o?io():null}}function mv(e){const{history:t,location:n}=window,a={value:Yu(e,n)},o={value:t.state};o.value||l(a.value,{back:null,current:a.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function l(u,p,d){const f=e.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+u:fv()+e+u;try{t[d?"replaceState":"pushState"](p,"",h),o.value=p}catch(g){console.error(g),n[d?"replace":"assign"](h)}}function i(u,p){const d=Se({},t.state,Fr(o.value.back,u,o.value.forward,!0),p,{position:o.value.position});l(u,d,!0),a.value=u}function c(u,p){const d=Se({},o.value,t.state,{forward:u,scroll:io()});l(d.current,d,!0);const f=Se({},Fr(a.value,u,null),{position:d.position+1},p);l(u,f,!1),a.value=u}return{location:a,state:o,push:c,replace:i}}function gv(e){e=lv(e);const t=mv(e),n=hv(e,t.state,t.location,t.replace);function a(l,i=!0){i||n.pauseListeners(),history.go(l)}const o=Se({location:"",base:e,go:a,createHref:rv.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function vv(e){return typeof e=="string"||e&&typeof e=="object"}function Zu(e){return typeof e=="string"||typeof e=="symbol"}const sn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Gu=Symbol("");var Pr;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Pr||(Pr={}));function cs(e,t){return Se(new Error,{type:e,[Gu]:!0},t)}function Kt(e,t){return e instanceof Error&&Gu in e&&(t==null||!!(e.type&t))}const Tr="[^/]+?",_v={sensitive:!1,strict:!1,start:!0,end:!0},kv=/[.+*?^${}()[\]/\\]/g;function xv(e,t){const n=Se({},_v,t),a=[];let o=n.start?"^":"";const l=[];for(const p of e){const d=p.length?[]:[90];n.strict&&!p.length&&(o+="/");for(let f=0;f<p.length;f++){const h=p[f];let g=40+(n.sensitive?.25:0);if(h.type===0)f||(o+="/"),o+=h.value.replace(kv,"\\$&"),g+=40;else if(h.type===1){const{value:m,repeatable:x,optional:b,regexp:y}=h;l.push({name:m,repeatable:x,optional:b});const S=y||Tr;if(S!==Tr){g+=10;try{new RegExp(`(${S})`)}catch(I){throw new Error(`Invalid custom RegExp for param "${m}" (${S}): `+I.message)}}let $=x?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;f||($=b&&p.length<2?`(?:/${$})`:"/"+$),b&&($+="?"),o+=$,g+=20,b&&(g+=-8),x&&(g+=-20),S===".*"&&(g+=-50)}d.push(g)}a.push(d)}if(n.strict&&n.end){const p=a.length-1;a[p][a[p].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const i=new RegExp(o,n.sensitive?"":"i");function c(p){const d=p.match(i),f={};if(!d)return null;for(let h=1;h<d.length;h++){const g=d[h]||"",m=l[h-1];f[m.name]=g&&m.repeatable?g.split("/"):g}return f}function u(p){let d="",f=!1;for(const h of e){(!f||!d.endsWith("/"))&&(d+="/"),f=!1;for(const g of h)if(g.type===0)d+=g.value;else if(g.type===1){const{value:m,repeatable:x,optional:b}=g,y=m in p?p[m]:"";if(At(y)&&!x)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const S=At(y)?y.join("/"):y;if(!S)if(b)h.length<2&&(d.endsWith("/")?d=d.slice(0,-1):f=!0);else throw new Error(`Missing required param "${m}"`);d+=S}}return d||"/"}return{re:i,score:a,keys:l,parse:c,stringify:u}}function bv(e,t){let n=0;for(;n<e.length&&n<t.length;){const a=t[n]-e[n];if(a)return a;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function yv(e,t){let n=0;const a=e.score,o=t.score;for(;n<a.length&&n<o.length;){const l=bv(a[n],o[n]);if(l)return l;n++}if(Math.abs(o.length-a.length)===1){if(Ar(a))return 1;if(Ar(o))return-1}return o.length-a.length}function Ar(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const wv={type:0,value:""},$v=/[a-zA-Z0-9_]/;function Sv(e){if(!e)return[[]];if(e==="/")return[[wv]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${p}": ${g}`)}let n=0,a=n;const o=[];let l;function i(){l&&o.push(l),l=[]}let c=0,u,p="",d="";function f(){!p||(n===0?l.push({type:0,value:p}):n===1||n===2||n===3?(l.length>1&&(u==="*"||u==="+")&&t(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:p,regexp:d,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):t("Invalid state to consume buffer"),p="")}function h(){p+=u}for(;c<e.length;){if(u=e[c++],u==="\\"&&n!==2){a=n,n=4;continue}switch(n){case 0:u==="/"?(p&&f(),i()):u===":"?(f(),n=1):h();break;case 4:h(),n=a;break;case 1:u==="("?n=2:$v.test(u)?h():(f(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&c--);break;case 2:u===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+u:n=3:d+=u;break;case 3:f(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&c--,d="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${p}"`),f(),i(),o}function Ev(e,t,n){const a=xv(Sv(e.path),n),o=Se(a,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function Ov(e,t){const n=[],a=new Map;t=Lr({strict:!1,end:!0,sensitive:!1},t);function o(d){return a.get(d)}function l(d,f,h){const g=!h,m=Cv(d);m.aliasOf=h&&h.record;const x=Lr(t,d),b=[m];if("alias"in d){const $=typeof d.alias=="string"?[d.alias]:d.alias;for(const I of $)b.push(Se({},m,{components:h?h.record.components:m.components,path:I,aliasOf:h?h.record:m}))}let y,S;for(const $ of b){const{path:I}=$;if(f&&I[0]!=="/"){const M=f.record.path,L=M[M.length-1]==="/"?"":"/";$.path=f.record.path+(I&&L+I)}if(y=Ev($,f,x),h?h.alias.push(y):(S=S||y,S!==y&&S.alias.push(y),g&&d.name&&!Mr(y)&&i(d.name)),m.children){const M=m.children;for(let L=0;L<M.length;L++)l(M[L],y,h&&h.children[L])}h=h||y,u(y)}return S?()=>{i(S)}:js}function i(d){if(Zu(d)){const f=a.get(d);f&&(a.delete(d),n.splice(n.indexOf(f),1),f.children.forEach(i),f.alias.forEach(i))}else{const f=n.indexOf(d);f>-1&&(n.splice(f,1),d.record.name&&a.delete(d.record.name),d.children.forEach(i),d.alias.forEach(i))}}function c(){return n}function u(d){let f=0;for(;f<n.length&&yv(d,n[f])>=0&&(d.record.path!==n[f].record.path||!Xu(d,n[f]));)f++;n.splice(f,0,d),d.record.name&&!Mr(d)&&a.set(d.record.name,d)}function p(d,f){let h,g={},m,x;if("name"in d&&d.name){if(h=a.get(d.name),!h)throw cs(1,{location:d});x=h.record.name,g=Se(jr(f.params,h.keys.filter(S=>!S.optional).map(S=>S.name)),d.params&&jr(d.params,h.keys.map(S=>S.name))),m=h.stringify(g)}else if("path"in d)m=d.path,h=n.find(S=>S.re.test(m)),h&&(g=h.parse(m),x=h.record.name);else{if(h=f.name?a.get(f.name):n.find(S=>S.re.test(f.path)),!h)throw cs(1,{location:d,currentLocation:f});x=h.record.name,g=Se({},f.params,d.params),m=h.stringify(g)}const b=[];let y=h;for(;y;)b.unshift(y.record),y=y.parent;return{name:x,path:m,params:g,matched:b,meta:Fv(b)}}return e.forEach(d=>l(d)),{addRoute:l,resolve:p,removeRoute:i,getRoutes:c,getRecordMatcher:o}}function jr(e,t){const n={};for(const a of t)a in e&&(n[a]=e[a]);return n}function Cv(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Iv(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Iv(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const a in e.components)t[a]=typeof n=="boolean"?n:n[a];return t}function Mr(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Fv(e){return e.reduce((t,n)=>Se(t,n.meta),{})}function Lr(e,t){const n={};for(const a in e)n[a]=a in t?t[a]:e[a];return n}function Xu(e,t){return t.children.some(n=>n===e||Xu(e,n))}const Qu=/#/g,Pv=/&/g,Tv=/\//g,Av=/=/g,jv=/\?/g,Ju=/\+/g,Mv=/%5B/g,Lv=/%5D/g,ep=/%5E/g,Rv=/%60/g,tp=/%7B/g,Nv=/%7C/g,np=/%7D/g,Bv=/%20/g;function Xl(e){return encodeURI(""+e).replace(Nv,"|").replace(Mv,"[").replace(Lv,"]")}function Dv(e){return Xl(e).replace(tp,"{").replace(np,"}").replace(ep,"^")}function ll(e){return Xl(e).replace(Ju,"%2B").replace(Bv,"+").replace(Qu,"%23").replace(Pv,"%26").replace(Rv,"`").replace(tp,"{").replace(np,"}").replace(ep,"^")}function Hv(e){return ll(e).replace(Av,"%3D")}function qv(e){return Xl(e).replace(Qu,"%23").replace(jv,"%3F")}function Vv(e){return e==null?"":qv(e).replace(Tv,"%2F")}function La(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Wv(e){const t={};if(e===""||e==="?")return t;const a=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<a.length;++o){const l=a[o].replace(Ju," "),i=l.indexOf("="),c=La(i<0?l:l.slice(0,i)),u=i<0?null:La(l.slice(i+1));if(c in t){let p=t[c];At(p)||(p=t[c]=[p]),p.push(u)}else t[c]=u}return t}function Rr(e){let t="";for(let n in e){const a=e[n];if(n=Hv(n),a==null){a!==void 0&&(t+=(t.length?"&":"")+n);continue}(At(a)?a.map(l=>l&&ll(l)):[a&&ll(a)]).forEach(l=>{l!==void 0&&(t+=(t.length?"&":"")+n,l!=null&&(t+="="+l))})}return t}function Kv(e){const t={};for(const n in e){const a=e[n];a!==void 0&&(t[n]=At(a)?a.map(o=>o==null?null:""+o):a==null?a:""+a)}return t}const zv=Symbol(""),Nr=Symbol(""),Ql=Symbol(""),sp=Symbol(""),il=Symbol("");function ws(){let e=[];function t(a){return e.push(a),()=>{const o=e.indexOf(a);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function on(e,t,n,a,o){const l=a&&(a.enterCallbacks[o]=a.enterCallbacks[o]||[]);return()=>new Promise((i,c)=>{const u=f=>{f===!1?c(cs(4,{from:n,to:t})):f instanceof Error?c(f):vv(f)?c(cs(2,{from:t,to:f})):(l&&a.enterCallbacks[o]===l&&typeof f=="function"&&l.push(f),i())},p=e.call(a&&a.instances[o],t,n,u);let d=Promise.resolve(p);e.length<3&&(d=d.then(u)),d.catch(f=>c(f))})}function wo(e,t,n,a){const o=[];for(const l of e)for(const i in l.components){let c=l.components[i];if(!(t!=="beforeRouteEnter"&&!l.instances[i]))if(Uv(c)){const p=(c.__vccOpts||c)[t];p&&o.push(on(p,n,a,l,i))}else{let u=c();o.push(()=>u.then(p=>{if(!p)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${l.path}"`));const d=Jg(p)?p.default:p;l.components[i]=d;const h=(d.__vccOpts||d)[t];return h&&on(h,n,a,l,i)()}))}}return o}function Uv(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Br(e){const t=V(Ql),n=V(sp),a=F(()=>t.resolve(w(e.to))),o=F(()=>{const{matched:u}=a.value,{length:p}=u,d=u[p-1],f=n.matched;if(!d||!f.length)return-1;const h=f.findIndex(rs.bind(null,d));if(h>-1)return h;const g=Dr(u[p-2]);return p>1&&Dr(d)===g&&f[f.length-1].path!==g?f.findIndex(rs.bind(null,u[p-2])):h}),l=F(()=>o.value>-1&&Xv(n.params,a.value.params)),i=F(()=>o.value>-1&&o.value===n.matched.length-1&&Uu(n.params,a.value.params));function c(u={}){return Gv(u)?t[w(e.replace)?"replace":"push"](w(e.to)).catch(js):Promise.resolve()}return{route:a,href:F(()=>a.value.href),isActive:l,isExactActive:i,navigate:c}}const Yv=ve({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Br,setup(e,{slots:t}){const n=Ae(Br(e)),{options:a}=V(Ql),o=F(()=>({[Hr(e.activeClass,a.linkActiveClass,"router-link-active")]:n.isActive,[Hr(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const l=t.default&&t.default(n);return e.custom?l:ot("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},l)}}}),Zv=Yv;function Gv(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Xv(e,t){for(const n in t){const a=t[n],o=e[n];if(typeof a=="string"){if(a!==o)return!1}else if(!At(o)||o.length!==a.length||a.some((l,i)=>l!==o[i]))return!1}return!0}function Dr(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Hr=(e,t,n)=>e!=null?e:t!=null?t:n,Qv=ve({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const a=V(il),o=F(()=>e.route||a.value),l=V(Nr,0),i=F(()=>{let p=w(l);const{matched:d}=o.value;let f;for(;(f=d[p])&&!f.components;)p++;return p}),c=F(()=>o.value.matched[i.value]);mt(Nr,F(()=>i.value+1)),mt(zv,c),mt(il,o);const u=q();return ue(()=>[u.value,c.value,e.name],([p,d,f],[h,g,m])=>{d&&(d.instances[f]=p,g&&g!==d&&p&&p===h&&(d.leaveGuards.size||(d.leaveGuards=g.leaveGuards),d.updateGuards.size||(d.updateGuards=g.updateGuards))),p&&d&&(!g||!rs(d,g)||!h)&&(d.enterCallbacks[f]||[]).forEach(x=>x(p))},{flush:"post"}),()=>{const p=o.value,d=e.name,f=c.value,h=f&&f.components[d];if(!h)return qr(n.default,{Component:h,route:p});const g=f.props[d],m=g?g===!0?p.params:typeof g=="function"?g(p):g:null,b=ot(h,Se({},m,t,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(f.instances[d]=null)},ref:u}));return qr(n.default,{Component:b,route:p})||b}}});function qr(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Jv=Qv;function e_(e){const t=Ov(e.routes,e),n=e.parseQuery||Wv,a=e.stringifyQuery||Rr,o=e.history,l=ws(),i=ws(),c=ws(),u=Vt(sn);let p=sn;Zn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=bo.bind(null,T=>""+T),f=bo.bind(null,Vv),h=bo.bind(null,La);function g(T,K){let W,G;return Zu(T)?(W=t.getRecordMatcher(T),G=K):G=T,t.addRoute(G,W)}function m(T){const K=t.getRecordMatcher(T);K&&t.removeRoute(K)}function x(){return t.getRoutes().map(T=>T.record)}function b(T){return!!t.getRecordMatcher(T)}function y(T,K){if(K=Se({},K||u.value),typeof T=="string"){const v=yo(n,T,K.path),k=t.resolve({path:v.path},K),C=o.createHref(v.fullPath);return Se(v,k,{params:h(k.params),hash:La(v.hash),redirectedFrom:void 0,href:C})}let W;if("path"in T)W=Se({},T,{path:yo(n,T.path,K.path).path});else{const v=Se({},T.params);for(const k in v)v[k]==null&&delete v[k];W=Se({},T,{params:f(T.params)}),K.params=f(K.params)}const G=t.resolve(W,K),fe=T.hash||"";G.params=d(h(G.params));const ke=nv(a,Se({},T,{hash:Dv(fe),path:G.path})),oe=o.createHref(ke);return Se({fullPath:ke,hash:fe,query:a===Rr?Kv(T.query):T.query||{}},G,{redirectedFrom:void 0,href:oe})}function S(T){return typeof T=="string"?yo(n,T,u.value.path):Se({},T)}function $(T,K){if(p!==T)return cs(8,{from:K,to:T})}function I(T){return B(T)}function M(T){return I(Se(S(T),{replace:!0}))}function L(T){const K=T.matched[T.matched.length-1];if(K&&K.redirect){const{redirect:W}=K;let G=typeof W=="function"?W(T):W;return typeof G=="string"&&(G=G.includes("?")||G.includes("#")?G=S(G):{path:G},G.params={}),Se({query:T.query,hash:T.hash,params:"path"in G?{}:T.params},G)}}function B(T,K){const W=p=y(T),G=u.value,fe=T.state,ke=T.force,oe=T.replace===!0,v=L(W);if(v)return B(Se(S(v),{state:typeof v=="object"?Se({},fe,v.state):fe,force:ke,replace:oe}),K||W);const k=W;k.redirectedFrom=K;let C;return!ke&&sv(a,G,W)&&(C=cs(16,{to:k,from:G}),$e(G,G,!0,!1)),(C?Promise.resolve(C):ce(k,G)).catch(P=>Kt(P)?Kt(P,2)?P:de(P):Y(P,k,G)).then(P=>{if(P){if(Kt(P,2))return B(Se({replace:oe},S(P.to),{state:typeof P.to=="object"?Se({},fe,P.to.state):fe,force:ke}),K||k)}else P=_e(k,G,!0,oe,fe);return pe(k,G,P),P})}function Q(T,K){const W=$(T,K);return W?Promise.reject(W):Promise.resolve()}function ce(T,K){let W;const[G,fe,ke]=t_(T,K);W=wo(G.reverse(),"beforeRouteLeave",T,K);for(const v of G)v.leaveGuards.forEach(k=>{W.push(on(k,T,K))});const oe=Q.bind(null,T,K);return W.push(oe),Wn(W).then(()=>{W=[];for(const v of l.list())W.push(on(v,T,K));return W.push(oe),Wn(W)}).then(()=>{W=wo(fe,"beforeRouteUpdate",T,K);for(const v of fe)v.updateGuards.forEach(k=>{W.push(on(k,T,K))});return W.push(oe),Wn(W)}).then(()=>{W=[];for(const v of T.matched)if(v.beforeEnter&&!K.matched.includes(v))if(At(v.beforeEnter))for(const k of v.beforeEnter)W.push(on(k,T,K));else W.push(on(v.beforeEnter,T,K));return W.push(oe),Wn(W)}).then(()=>(T.matched.forEach(v=>v.enterCallbacks={}),W=wo(ke,"beforeRouteEnter",T,K),W.push(oe),Wn(W))).then(()=>{W=[];for(const v of i.list())W.push(on(v,T,K));return W.push(oe),Wn(W)}).catch(v=>Kt(v,8)?v:Promise.reject(v))}function pe(T,K,W){for(const G of c.list())G(T,K,W)}function _e(T,K,W,G,fe){const ke=$(T,K);if(ke)return ke;const oe=K===sn,v=Zn?history.state:{};W&&(G||oe?o.replace(T.fullPath,Se({scroll:oe&&v&&v.scroll},fe)):o.push(T.fullPath,fe)),u.value=T,$e(T,K,W,oe),de()}let Ke;function He(){Ke||(Ke=o.listen((T,K,W)=>{if(!qn.listening)return;const G=y(T),fe=L(G);if(fe){B(Se(fe,{replace:!0}),G).catch(js);return}p=G;const ke=u.value;Zn&&pv(Ir(ke.fullPath,W.delta),io()),ce(G,ke).catch(oe=>Kt(oe,12)?oe:Kt(oe,2)?(B(oe.to,G).then(v=>{Kt(v,20)&&!W.delta&&W.type===Ys.pop&&o.go(-1,!1)}).catch(js),Promise.reject()):(W.delta&&o.go(-W.delta,!1),Y(oe,G,ke))).then(oe=>{oe=oe||_e(G,ke,!1),oe&&(W.delta&&!Kt(oe,8)?o.go(-W.delta,!1):W.type===Ys.pop&&Kt(oe,20)&&o.go(-1,!1)),pe(G,ke,oe)}).catch(js)}))}let Le=ws(),Pe=ws(),Te;function Y(T,K,W){de(T);const G=Pe.list();return G.length?G.forEach(fe=>fe(T,K,W)):console.error(T),Promise.reject(T)}function ne(){return Te&&u.value!==sn?Promise.resolve():new Promise((T,K)=>{Le.add([T,K])})}function de(T){return Te||(Te=!T,He(),Le.list().forEach(([K,W])=>T?W(T):K()),Le.reset()),T}function $e(T,K,W,G){const{scrollBehavior:fe}=e;if(!Zn||!fe)return Promise.resolve();const ke=!W&&dv(Ir(T.fullPath,0))||(G||!W)&&history.state&&history.state.scroll||null;return Qe().then(()=>fe(T,K,ke)).then(oe=>oe&&uv(oe)).catch(oe=>Y(oe,T,K))}const nt=T=>o.go(T);let Ne;const tn=new Set,qn={currentRoute:u,listening:!0,addRoute:g,removeRoute:m,hasRoute:b,getRoutes:x,resolve:y,options:e,push:I,replace:M,go:nt,back:()=>nt(-1),forward:()=>nt(1),beforeEach:l.add,beforeResolve:i.add,afterEach:c.add,onError:Pe.add,isReady:ne,install(T){const K=this;T.component("RouterLink",Zv),T.component("RouterView",Jv),T.config.globalProperties.$router=K,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>w(u)}),Zn&&!Ne&&u.value===sn&&(Ne=!0,I(o.location).catch(fe=>{}));const W={};for(const fe in sn)W[fe]=F(()=>u.value[fe]);T.provide(Ql,K),T.provide(sp,Ae(W)),T.provide(il,u);const G=T.unmount;tn.add(T),T.unmount=function(){tn.delete(T),tn.size<1&&(p=sn,Ke&&Ke(),Ke=null,u.value=sn,Ne=!1,Te=!1),G()}}};return qn}function Wn(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function t_(e,t){const n=[],a=[],o=[],l=Math.max(t.matched.length,e.matched.length);for(let i=0;i<l;i++){const c=t.matched[i];c&&(e.matched.find(p=>rs(p,c))?a.push(c):n.push(c));const u=e.matched[i];u&&(t.matched.find(p=>rs(p,u))||o.push(u))}return[n,a,o]}const $o=q(!1),Ls=q(!1),Xn=q(!1),n_=q(!0),rl=hg({xs:460,...cg}),Mn=Qg(),ap=Hg(),s_=F(()=>Mn.height.value-Mn.width.value/un>180),op=Ng(Tt?document.body:null),as=rg(),a_=F(()=>{var e,t;return["INPUT","TEXTAREA"].includes(((e=as.value)==null?void 0:e.tagName)||"")||((t=as.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),o_=F(()=>{var e;return["BUTTON","A"].includes(((e=as.value)==null?void 0:e.tagName)||"")});jt("slidev-camera","default");jt("slidev-mic","default");const ya=jt("slidev-scale",0),at=jt("slidev-show-overview",!1),So=jt("slidev-presenter-cursor",!0),Vr=jt("slidev-show-editor",!1);jt("slidev-editor-width",Tt?window.innerWidth*.4:100);const lp=Ru(at);function Wr(e,t,n,a=o=>o){return e*a(.5-t*(.5-n))}function l_(e){return[-e[0],-e[1]]}function $t(e,t){return[e[0]+t[0],e[1]+t[1]]}function xt(e,t){return[e[0]-t[0],e[1]-t[1]]}function wt(e,t){return[e[0]*t,e[1]*t]}function i_(e,t){return[e[0]/t,e[1]/t]}function $s(e){return[e[1],-e[0]]}function Kr(e,t){return e[0]*t[0]+e[1]*t[1]}function r_(e,t){return e[0]===t[0]&&e[1]===t[1]}function c_(e){return Math.hypot(e[0],e[1])}function u_(e){return e[0]*e[0]+e[1]*e[1]}function zr(e,t){return u_(xt(e,t))}function ip(e){return i_(e,c_(e))}function p_(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function Ss(e,t,n){let a=Math.sin(n),o=Math.cos(n),l=e[0]-t[0],i=e[1]-t[1],c=l*o-i*a,u=l*a+i*o;return[c+t[0],u+t[1]]}function cl(e,t,n){return $t(e,wt(xt(t,e),n))}function Ur(e,t,n){return $t(e,wt(t,n))}var{min:Kn,PI:d_}=Math,Yr=.275,Es=d_+1e-4;function f_(e,t={}){let{size:n=16,smoothing:a=.5,thinning:o=.5,simulatePressure:l=!0,easing:i=Y=>Y,start:c={},end:u={},last:p=!1}=t,{cap:d=!0,easing:f=Y=>Y*(2-Y)}=c,{cap:h=!0,easing:g=Y=>--Y*Y*Y+1}=u;if(e.length===0||n<=0)return[];let m=e[e.length-1].runningLength,x=c.taper===!1?0:c.taper===!0?Math.max(n,m):c.taper,b=u.taper===!1?0:u.taper===!0?Math.max(n,m):u.taper,y=Math.pow(n*a,2),S=[],$=[],I=e.slice(0,10).reduce((Y,ne)=>{let de=ne.pressure;if(l){let $e=Kn(1,ne.distance/n),nt=Kn(1,1-$e);de=Kn(1,Y+(nt-Y)*($e*Yr))}return(Y+de)/2},e[0].pressure),M=Wr(n,o,e[e.length-1].pressure,i),L,B=e[0].vector,Q=e[0].point,ce=Q,pe=Q,_e=ce,Ke=!1;for(let Y=0;Y<e.length;Y++){let{pressure:ne}=e[Y],{point:de,vector:$e,distance:nt,runningLength:Ne}=e[Y];if(Y<e.length-1&&m-Ne<3)continue;if(o){if(l){let ke=Kn(1,nt/n),oe=Kn(1,1-ke);ne=Kn(1,I+(oe-I)*(ke*Yr))}M=Wr(n,o,ne,i)}else M=n/2;L===void 0&&(L=M);let tn=Ne<x?f(Ne/x):1,qn=m-Ne<b?g((m-Ne)/b):1;M=Math.max(.01,M*Math.min(tn,qn));let T=(Y<e.length-1?e[Y+1]:e[Y]).vector,K=Y<e.length-1?Kr($e,T):1,W=Kr($e,B)<0&&!Ke,G=K!==null&&K<0;if(W||G){let ke=wt($s(B),M);for(let oe=1/13,v=0;v<=1;v+=oe)pe=Ss(xt(de,ke),de,Es*v),S.push(pe),_e=Ss($t(de,ke),de,Es*-v),$.push(_e);Q=pe,ce=_e,G&&(Ke=!0);continue}if(Ke=!1,Y===e.length-1){let ke=wt($s($e),M);S.push(xt(de,ke)),$.push($t(de,ke));continue}let fe=wt($s(cl(T,$e,K)),M);pe=xt(de,fe),(Y<=1||zr(Q,pe)>y)&&(S.push(pe),Q=pe),_e=$t(de,fe),(Y<=1||zr(ce,_e)>y)&&($.push(_e),ce=_e),I=ne,B=$e}let He=e[0].point.slice(0,2),Le=e.length>1?e[e.length-1].point.slice(0,2):$t(e[0].point,[1,1]),Pe=[],Te=[];if(e.length===1){if(!(x||b)||p){let Y=Ur(He,ip($s(xt(He,Le))),-(L||M)),ne=[];for(let de=1/13,$e=de;$e<=1;$e+=de)ne.push(Ss(Y,He,Es*2*$e));return ne}}else{if(!(x||b&&e.length===1))if(d)for(let ne=1/13,de=ne;de<=1;de+=ne){let $e=Ss($[0],He,Es*de);Pe.push($e)}else{let ne=xt(S[0],$[0]),de=wt(ne,.5),$e=wt(ne,.51);Pe.push(xt(He,de),xt(He,$e),$t(He,$e),$t(He,de))}let Y=$s(l_(e[e.length-1].vector));if(b||x&&e.length===1)Te.push(Le);else if(h){let ne=Ur(Le,Y,M);for(let de=1/29,$e=de;$e<1;$e+=de)Te.push(Ss(ne,Le,Es*3*$e))}else Te.push($t(Le,wt(Y,M)),$t(Le,wt(Y,M*.99)),xt(Le,wt(Y,M*.99)),xt(Le,wt(Y,M)))}return S.concat(Te,$.reverse(),Pe)}function h_(e,t={}){var n;let{streamline:a=.5,size:o=16,last:l=!1}=t;if(e.length===0)return[];let i=.15+(1-a)*.85,c=Array.isArray(e[0])?e:e.map(({x:g,y:m,pressure:x=.5})=>[g,m,x]);if(c.length===2){let g=c[1];c=c.slice(0,-1);for(let m=1;m<5;m++)c.push(cl(c[0],g,m/4))}c.length===1&&(c=[...c,[...$t(c[0],[1,1]),...c[0].slice(2)]]);let u=[{point:[c[0][0],c[0][1]],pressure:c[0][2]>=0?c[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],p=!1,d=0,f=u[0],h=c.length-1;for(let g=1;g<c.length;g++){let m=l&&g===h?c[g].slice(0,2):cl(f.point,c[g],i);if(r_(f.point,m))continue;let x=p_(m,f.point);if(d+=x,g<h&&!p){if(d<o)continue;p=!0}f={point:m,pressure:c[g][2]>=0?c[g][2]:.5,vector:ip(xt(f.point,m)),distance:x,runningLength:d},u.push(f)}return u[0].vector=((n=u[1])==null?void 0:n.vector)||[0,0],u}function m_(e,t={}){return f_(h_(e,t),t)}var g_=()=>({events:{},emit(e,...t){let n=this.events[e]||[];for(let a=0,o=n.length;a<o;a++)n[a](...t)},on(e,t){var n;return(n=this.events[e])!=null&&n.push(t)||(this.events[e]=[t]),()=>{var a;this.events[e]=(a=this.events[e])==null?void 0:a.filter(o=>t!==o)}}});function Ra(e,t){return e-t}function v_(e){return e<0?-1:1}function Na(e){return[Math.abs(e),v_(e)]}function rp(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var __=2,Yt=__,vs=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var o;var t;const n=this.drauu.el,a=(o=this.drauu.options.coordinateScale)!=null?o:1;if(this.drauu.options.coordinateTransform===!1){const l=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-l.left)*a,y:(e.pageY-l.top)*a,pressure:e.pressure}}else{const l=this.drauu.svgPoint;l.x=e.clientX,l.y=e.clientY;const i=l.matrixTransform((t=n.getScreenCTM())==null?void 0:t.inverse());return{x:i.x*a,y:i.y*a,pressure:e.pressure}}}createElement(e,t){var o;const n=document.createElementNS("http://www.w3.org/2000/svg",e),a=t?{...this.brush,...t}:this.brush;return n.setAttribute("fill",(o=a.fill)!=null?o:"transparent"),n.setAttribute("stroke",a.color),n.setAttribute("stroke-width",a.size.toString()),n.setAttribute("stroke-linecap","round"),a.dasharray&&n.setAttribute("stroke-dasharray",a.dasharray),n}attr(e,t){this.el.setAttribute(e,typeof t=="string"?t:t.toFixed(Yt))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},k_=class extends vs{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const t=m_(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!t.length)return"";const n=t.reduce((a,[o,l],i,c)=>{const[u,p]=c[(i+1)%c.length];return a.push(o,l,(o+u)/2,(l+p)/2),a},["M",...t[0],"Q"]);return n.push("Z"),n.map(a=>typeof a=="number"?a.toFixed(2):a).join(" ")}},x_=class extends vs{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Na(e.x-this.start.x),[a,o]=Na(e.y-this.start.y);if(this.shiftPressed){const l=Math.min(t,a);t=l,a=l}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",a);else{const[l,i]=[this.start.x,this.start.x+t*n].sort(Ra),[c,u]=[this.start.y,this.start.y+a*o].sort(Ra);this.attr("cx",(l+i)/2),this.attr("cy",(c+u)/2),this.attr("rx",(i-l)/2),this.attr("ry",(u-c)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function cp(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg","defs"),a=document.createElementNS("http://www.w3.org/2000/svg","marker"),o=document.createElementNS("http://www.w3.org/2000/svg","path");return o.setAttribute("fill",t),a.setAttribute("id",e),a.setAttribute("viewBox","0 -5 10 10"),a.setAttribute("refX","5"),a.setAttribute("refY","0"),a.setAttribute("markerWidth","4"),a.setAttribute("markerHeight","4"),a.setAttribute("orient","auto"),o.setAttribute("d","M0,-5L10,0L0,5"),a.appendChild(o),n.appendChild(a),n}var b_=class extends vs{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const t=rp(),n=document.createElementNS("http://www.w3.org/2000/svg","g");return n.append(cp(t,this.brush.color)),n.append(this.el),this.attr("marker-end",`url(#${t})`),n}return this.el}onMove(e){if(!this.el)return!1;let{x:t,y:n}=e;if(this.shiftPressed){const a=e.x-this.start.x,o=e.y-this.start.y;if(o!==0){let l=a/o;l=Math.round(l),Math.abs(l)<=1?(t=this.start.x+o*l,n=this.start.y+o):(t=this.start.x+a,n=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-n),this.attr("x2",t),this.attr("y2",n)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",n)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},y_=class extends vs{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Na(e.x-this.start.x),[a,o]=Na(e.y-this.start.y);if(this.shiftPressed){const l=Math.min(t,a);t=l,a=l}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-a),this.attr("width",t*2),this.attr("height",a*2);else{const[l,i]=[this.start.x,this.start.x+t*n].sort(Ra),[c,u]=[this.start.y,this.start.y+a*o].sort(Ra);this.attr("x",l),this.attr("y",c),this.attr("width",i-l),this.attr("height",u-c)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function w_(e,t){const n=e.x-t.x,a=e.y-t.y;return n*n+a*a}function $_(e,t,n){let a=t.x,o=t.y,l=n.x-a,i=n.y-o;if(l!==0||i!==0){const c=((e.x-a)*l+(e.y-o)*i)/(l*l+i*i);c>1?(a=n.x,o=n.y):c>0&&(a+=l*c,o+=i*c)}return l=e.x-a,i=e.y-o,l*l+i*i}function S_(e,t){let n=e[0];const a=[n];let o;for(let l=1,i=e.length;l<i;l++)o=e[l],w_(o,n)>t&&(a.push(o),n=o);return n!==o&&o&&a.push(o),a}function ul(e,t,n,a,o){let l=a,i=0;for(let c=t+1;c<n;c++){const u=$_(e[c],e[t],e[n]);u>l&&(i=c,l=u)}l>a&&(i-t>1&&ul(e,t,i,a,o),o.push(e[i]),n-i>1&&ul(e,i,n,a,o))}function E_(e,t){const n=e.length-1,a=[e[0]];return ul(e,0,n,t,a),a.push(e[n]),a}function Zr(e,t,n=!1){if(e.length<=2)return e;const a=t!==void 0?t*t:1;return e=n?e:S_(e,a),e=E_(e,a),e}var O_=class extends vs{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=rp();const t=cp(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=Zr(this.points,1,!0),this.count=0),this.attr("d",Xr(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",Xr(Zr(this.points,1,!0))),!e.getTotalLength()))}};function C_(e,t){const n=t.x-e.x,a=t.y-e.y;return{length:Math.sqrt(n**2+a**2),angle:Math.atan2(a,n)}}function Gr(e,t,n,a){const o=t||e,l=n||e,i=.2,c=C_(o,l),u=c.angle+(a?Math.PI:0),p=c.length*i,d=e.x+Math.cos(u)*p,f=e.y+Math.sin(u)*p;return{x:d,y:f}}function I_(e,t,n){const a=Gr(n[t-1],n[t-2],e),o=Gr(e,n[t-1],n[t+1],!0);return`C ${a.x.toFixed(Yt)},${a.y.toFixed(Yt)} ${o.x.toFixed(Yt)},${o.y.toFixed(Yt)} ${e.x.toFixed(Yt)},${e.y.toFixed(Yt)}`}function Xr(e){return e.reduce((t,n,a,o)=>a===0?`M ${n.x.toFixed(Yt)},${n.y.toFixed(Yt)}`:`${t} ${I_(n,a,o)}`,"")}var F_=class extends vs{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const t=(n,a)=>{if(n&&n.length)for(let o=0;o<n.length;o++){const l=n[o];if(l.getTotalLength){const i=l.getTotalLength();for(let c=0;c<this.pathSubFactor;c++){const u=l.getPointAtLength(i*c/this.pathSubFactor),p=l.getPointAtLength(i*(c+1)/this.pathSubFactor);this.pathFragments.push({x1:u.x,x2:p.x,y1:u.y,y2:p.y,segment:c,element:a||l})}}else l.children&&t(l.children,l)}};e&&t(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const n=this.pathFragments[t],a={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(n,a)&&(n.element.remove(),e.push(t))}return e.length&&(this.pathFragments=this.pathFragments.filter((t,n)=>!e.includes(n))),e.length>0}lineLineIntersect(e,t){const n=e.x1,a=e.x2,o=t.x1,l=t.x2,i=e.y1,c=e.y2,u=t.y1,p=t.y2,d=(n-a)*(u-p)-(i-c)*(o-l),f=(n*c-i*a)*(o-l)-(n-a)*(o*p-u*l),h=(n*c-i*a)*(u-p)-(i-c)*(o*p-u*l),g=(m,x,b)=>m>=x&&m<=b?!0:m>=b&&m<=x;if(d===0)return!1;{const m={x:f/d,y:h/d};return g(m.x,n,a)&&g(m.y,i,c)&&g(m.x,o,l)&&g(m.y,u,p)}}};function P_(e){return{draw:new O_(e),stylus:new k_(e),line:new b_(e),rectangle:new y_(e),ellipse:new x_(e),eraseLine:new F_(e)}}var T_=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=g_(),this._models=P_(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(t)||this.el,a=this.eventStart.bind(this),o=this.eventMove.bind(this),l=this.eventEnd.bind(this),i=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",a,{passive:!1}),window.addEventListener("pointermove",o,{passive:!1}),window.addEventListener("pointerup",l,{passive:!1}),window.addEventListener("pointercancel",l,{passive:!1}),window.addEventListener("keydown",i,!1),window.addEventListener("keyup",i,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",a),window.removeEventListener("pointermove",o),window.removeEventListener("pointerup",l),window.removeEventListener("pointercancel",l),window.removeEventListener("keydown",i,!1),window.removeEventListener("keyup",i,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,t){return this._emitter.on(e,t)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){!this.acceptsInput(e)||(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const t=this.model._eventUp(e);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function A_(e){return new T_(e)}const pl=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Ht=jt("slidev-drawing-enabled",!1),r3=jt("slidev-drawing-pinned",!1),j_=q(!1),M_=q(!1),L_=q(!1),Zs=q(!1),In=sm(jt("slidev-drawing-brush",{color:pl[0],size:4,mode:"stylus"})),Qr=q("stylus"),up=F(()=>xe.drawings.syncAll||Bt.value);let Gs=!1;const Os=F({get(){return Qr.value},set(e){Qr.value=e,e==="arrow"?(In.mode="line",In.arrowEnd=!0):(In.mode=e,In.arrowEnd=!1)}}),R_=Ae({brush:In,acceptsInputTypes:F(()=>Ht.value?void 0:["pen"]),coordinateTransform:!1}),lt=Za(A_(R_));function N_(){lt.clear(),up.value&&zu(We.value,"")}function pp(){var e;M_.value=lt.canRedo(),j_.value=lt.canUndo(),L_.value=!!((e=lt.el)!=null&&e.children.length)}function B_(e){Gs=!0;const t=Ma[e||We.value];t!=null?lt.load(t):lt.clear(),Gs=!1}lt.on("changed",()=>{if(pp(),!Gs){const e=lt.dump(),t=We.value;(Ma[t]||"")!==e&&up.value&&zu(t,lt.dump())}});eg(e=>{Gs=!0,e[We.value]!=null&&lt.load(e[We.value]||""),Gs=!1,pp()});Qe(()=>{ue(We,()=>{!lt.mounted||B_()},{immediate:!0})});lt.on("start",()=>Zs.value=!0);lt.on("end",()=>Zs.value=!1);window.addEventListener("keydown",e=>{if(!Ht.value)return;const t=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let n=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?lt.redo():lt.undo():e.code==="Escape"?Ht.value=!1:e.code==="KeyL"&&t?Os.value="line":e.code==="KeyA"&&t?Os.value="arrow":e.code==="KeyS"&&t?Os.value="stylus":e.code==="KeyR"&&t?Os.value="rectangle":e.code==="KeyE"&&t?Os.value="ellipse":e.code==="KeyC"&&t?N_():e.code.startsWith("Digit")&&t&&+e.code[5]<=pl.length?In.color=pl[+e.code[5]-1]:n=!1,n&&(e.preventDefault(),e.stopPropagation())},!1);function qe(...e){return F(()=>e.every(t=>Ge(t)))}function dt(e){return F(()=>!Ge(e))}const Jr=$g(),Eo=jt("slidev-color-schema","auto"),dl=F(()=>xe.colorSchema!=="auto"),Jl=F({get(){return dl.value?xe.colorSchema==="dark":Eo.value==="auto"?Jr.value:Eo.value==="dark"},set(e){dl.value||(Eo.value=e===Jr.value?"auto":e?"dark":"light")}}),dp=Ru(Jl);Tt&&ue(Jl,e=>{const t=document.querySelector("html");t.classList.toggle("dark",e),t.classList.toggle("light",!e)},{immediate:!0});const wa=q(1),$a=F(()=>Ve.length-1),gt=q(0),ei=q(0);function D_(){gt.value>wa.value&&(gt.value-=1)}function H_(){gt.value<$a.value&&(gt.value+=1)}function q_(){if(gt.value>wa.value){let e=gt.value-ei.value;e<wa.value&&(e=wa.value),gt.value=e}}function V_(){if(gt.value<$a.value){let e=gt.value+ei.value;e>$a.value&&(e=$a.value),gt.value=e}}function W_(){const{escape:e,space:t,shift:n,left:a,right:o,up:l,down:i,enter:c,d:u,g:p,o:d}=ap;let f=[{name:"next_space",key:qe(t,dt(n)),fn:pn,autoRepeat:!0},{name:"prev_space",key:qe(t,n),fn:dn,autoRepeat:!0},{name:"next_right",key:qe(o,dt(n),dt(at)),fn:pn,autoRepeat:!0},{name:"prev_left",key:qe(a,dt(n),dt(at)),fn:dn,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:pn,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:dn,autoRepeat:!0},{name:"next_down",key:qe(i,dt(at)),fn:Qs,autoRepeat:!0},{name:"prev_up",key:qe(l,dt(at)),fn:()=>Js(!1),autoRepeat:!0},{name:"next_shift",key:qe(o,n),fn:Qs,autoRepeat:!0},{name:"prev_shift",key:qe(a,n),fn:()=>Js(!1),autoRepeat:!0},{name:"toggle_dark",key:qe(u,dt(Ht)),fn:dp},{name:"toggle_overview",key:qe(d,dt(Ht)),fn:lp},{name:"hide_overview",key:qe(e,dt(Ht)),fn:()=>at.value=!1},{name:"goto",key:qe(p,dt(Ht)),fn:()=>Xn.value=!Xn.value},{name:"next_overview",key:qe(o,at),fn:H_},{name:"prev_overview",key:qe(a,at),fn:D_},{name:"up_overview",key:qe(l,at),fn:q_},{name:"down_overview",key:qe(i,at),fn:V_},{name:"goto_from_overview",key:qe(c,at),fn:()=>{us(gt.value),at.value=!1}}];const h=new Set(f.map(m=>m.name));if(f.filter(m=>m.name&&h.has(m.name)).length===0){const m=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(m),console.warn(m)}return f}const fp=qe(dt(a_),dt(o_),n_);function K_(e,t,n=!1){typeof e=="string"&&(e=ap[e]);const a=qe(e,fp);let o=0,l;const i=()=>{if(clearTimeout(l),!a.value){o=0;return}n&&(l=setTimeout(i,Math.max(1e3-o*250,150)),o++),t()};return ue(a,i,{flush:"sync"})}function z_(e,t){return ig(e,n=>{!fp.value||n.repeat||t()})}function U_(){const e=W_();new Map(e.map(n=>[n.key,n])).forEach(n=>{n.fn&&K_(n.key,n.fn,n.autoRepeat)}),z_("f",()=>op.toggle())}const Y_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Z_=s("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),G_=[Z_];function X_(e,t){return E(),H("svg",Y_,G_)}const Q_={name:"carbon-close",render:X_};function ti(e){var n,a;const t=(a=(n=e==null?void 0:e.meta)==null?void 0:n.slide)==null?void 0:a.no;return t!=null?`slidev-page-${t}`:""}const hp=ve({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const t=e;V(U);const n=q(),a=Rg(n),o=F(()=>t.width?t.width:a.width.value),l=F(()=>t.width?t.width/un:a.height.value);t.width&&fs(()=>{n.value&&(n.value.style.width=`${o.value}px`,n.value.style.height=`${l.value}px`)});const i=F(()=>o.value/l.value),c=F(()=>t.scale?t.scale:i.value<un?o.value/jn:l.value*un/jn),u=F(()=>({height:`${Vu}px`,width:`${jn}px`,transform:`translate(-50%, -50%) scale(${c.value})`})),p=F(()=>({"select-none":!xe.selectable,"slidev-code-line-numbers":xe.lineNumbers}));return mt(qu,c),(d,f)=>(E(),H("div",{id:"slide-container",ref_key:"root",ref:n,class:Me(w(p))},[s("div",{id:"slide-content",style:De(w(u))},[Pt(d.$slots,"default")],4),Pt(d.$slots,"controls")],2))}});const ni=ve({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:t}){const n=Dt(e,"clicks",t),a=Dt(e,"clicksElements",t),o=Dt(e,"clicksDisabled",t),l=Dt(e,"clicksOrderMap",t);a.value.length=0,mt(Dm,e.route),mt(Hm,e.context),mt(Ts,n),mt(As,o),mt(Sn,a),mt(tl,l)},render(){var e,t;return this.$props.is?ot(this.$props.is):(t=(e=this.$slots)==null?void 0:e.default)==null?void 0:t.call(e)}}),J_=["innerHTML"],e0=ve({__name:"DrawingPreview",props:{page:null},setup(e){return V(U),(t,n)=>w(Ma)[e.page]?(E(),H("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:w(Ma)[e.page]},null,8,J_)):me("v-if",!0)}}),t0={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},n0=["onClick"],s0=ve({__name:"SlidesOverview",props:{modelValue:{type:Boolean}},emits:[],setup(e,{emit:t}){const n=e;V(U);const a=Dt(n,"modelValue",t);function o(){a.value=!1}function l(g){us(g),o()}function i(g){return g===gt.value}const c=rl.smaller("xs"),u=rl.smaller("sm"),p=4*16*2,d=2*16,f=F(()=>c.value?Mn.width.value-p:u.value?(Mn.width.value-p-d)/2:300),h=F(()=>Math.floor((Mn.width.value-p)/(f.value+d)));return fs(()=>{gt.value=We.value,ei.value=h.value}),(g,m)=>{const x=Q_;return E(),H(ye,null,[ao(s("div",t0,[s("div",{class:"grid gap-y-4 gap-x-8 w-full",style:De(`grid-template-columns: repeat(auto-fit,minmax(${w(f)}px,1fr))`)},[(E(!0),H(ye,null,ms(w(Ve).slice(0,-1),(b,y)=>(E(),H("div",{key:b.path,class:"relative"},[s("div",{class:Me(["inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":i(y+1)}]),onClick:S=>l(+b.path)},[(E(),X(hp,{key:b.path,width:w(f),"clicks-disabled":!0,class:"pointer-events-none"},{default:O(()=>[_(w(ni),{is:b==null?void 0:b.component,"clicks-disabled":!0,class:Me(w(ti)(b)),route:b,context:"overview"},null,8,["is","class","route"]),_(e0,{page:+b.path},null,8,["page"])]),_:2},1032,["width"]))],10,n0),s("div",{class:"absolute top-0 opacity-50",style:De(`left: ${w(f)+5}px`)},fn(y+1),5)]))),128))],4)],512),[[Tu,w(a)]]),w(a)?(E(),H("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:o},[_(x)])):me("v-if",!0)],64)}}});const a0="/slides-flex/assets/logo.b72bde5d.png",o0={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},l0=ve({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:t}){const n=e;V(U);const a=Dt(n,"modelValue",t);function o(){a.value=!1}return(l,i)=>(E(),X(hu,null,[w(a)?(E(),H("div",o0,[s("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:i[0]||(i[0]=c=>o())}),s("div",{class:Me(["m-auto rounded-md bg-main shadow",n.class]),"dark:border":"~ gray-400 opacity-10"},[Pt(l.$slots,"default")],2)])):me("v-if",!0)],1024))}}),i0={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},r0=["innerHTML"],c0=s("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[s("div",{class:"flex gap-1 children:my-auto"},[s("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),s("img",{class:"w-5 h-5",src:a0,alt:"Slidev"}),s("div",{style:{color:"#2082A6"}},[s("b",null,"Sli"),r("dev ")])])],-1),u0=ve({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:t}){const n=e;V(U);const a=Dt(n,"modelValue",t),o=F(()=>typeof xe.info=="string");return(l,i)=>(E(),X(l0,{modelValue:w(a),"onUpdate:modelValue":i[0]||(i[0]=c=>we(a)?a.value=c:null),class:"px-6 py-4"},{default:O(()=>[s("div",i0,[w(o)?(E(),H("div",{key:0,class:"mb-4",innerHTML:w(xe).info},null,8,r0)):me("v-if",!0),c0])]),_:1},8,["modelValue"]))}});const p0=["disabled","onKeydown"],d0=ve({__name:"Goto",setup(e){V(U);const t=q(),n=q(""),a=F(()=>{if(n.value.startsWith("/"))return!!Ve.find(i=>i.path===n.value.substring(1));{const i=+n.value;return!isNaN(i)&&i>0&&i<=Ap.value}});function o(){a.value&&(n.value.startsWith("/")?us(n.value.substring(1)):us(+n.value)),l()}function l(){Xn.value=!1}return ue(Xn,async i=>{var c,u;i?(await Qe(),n.value="",(c=t.value)==null||c.focus()):(u=t.value)==null||u.blur()}),ue(n,i=>{i.match(/^[^0-9/]/)&&(n.value=n.value.substring(1))}),(i,c)=>(E(),H("div",{id:"slidev-goto-dialog",class:Me(["fixed right-5 bg-main transform transition-all",w(Xn)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[ao(s("input",{ref_key:"input",ref:t,"onUpdate:modelValue":c[0]||(c[0]=u=>n.value=u),type:"text",disabled:!w(Xn),class:Me(["outline-none bg-transparent",{"text-red-400":!w(a)&&n.value}]),placeholder:"Goto...",onKeydown:[nr(o,["enter"]),nr(l,["escape"])],onBlur:l},null,42,p0),[[Vh,n.value]])],2))}}),f0=ve({__name:"Controls",setup(e){V(U);const t=Vt(),n=Vt();return(a,o)=>(E(),H(ye,null,[_(s0,{modelValue:w(at),"onUpdate:modelValue":o[0]||(o[0]=l=>we(at)?at.value=l:null)},null,8,["modelValue"]),_(d0),w(t)?(E(),X(w(t),{key:0})):me("v-if",!0),w(n)?(E(),X(w(n),{key:1,modelValue:w($o),"onUpdate:modelValue":o[1]||(o[1]=l=>we($o)?$o.value=l:null)},null,8,["modelValue"])):me("v-if",!0),w(xe).info?(E(),X(u0,{key:2,modelValue:w(Ls),"onUpdate:modelValue":o[2]||(o[2]=l=>we(Ls)?Ls.value=l:null)},null,8,["modelValue"])):me("v-if",!0)],64))}}),h0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},m0=s("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),g0=[m0];function v0(e,t){return E(),H("svg",h0,g0)}const _0={name:"carbon-settings-adjust",render:v0},k0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},x0=s("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),b0=s("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),y0=[x0,b0];function w0(e,t){return E(),H("svg",k0,y0)}const $0={name:"carbon-information",render:w0},S0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},E0=s("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),O0=[E0];function C0(e,t){return E(),H("svg",S0,O0)}const I0={name:"carbon-download",render:C0},F0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},P0=s("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),T0=s("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),A0=[P0,T0];function j0(e,t){return E(),H("svg",F0,A0)}const M0={name:"carbon-user-speaker",render:j0},L0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},R0=s("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),N0=s("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),B0=[R0,N0];function D0(e,t){return E(),H("svg",L0,B0)}const H0={name:"carbon-presentation-file",render:D0},q0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},V0=s("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),W0=[V0];function K0(e,t){return E(),H("svg",q0,W0)}const z0={name:"carbon-pen",render:K0},U0={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Y0=s("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),Z0=s("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),G0=[Y0,Z0];function X0(e,t){return E(),H("svg",U0,G0)}const Q0={name:"ph-cursor-duotone",render:X0},J0={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},ek=s("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),tk=[ek];function nk(e,t){return E(),H("svg",J0,tk)}const mp={name:"ph-cursor-fill",render:nk},sk={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ak=s("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),ok=[ak];function lk(e,t){return E(),H("svg",sk,ok)}const ik={name:"carbon-sun",render:lk},rk={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ck=s("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),uk=[ck];function pk(e,t){return E(),H("svg",rk,uk)}const dk={name:"carbon-moon",render:pk},fk={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},hk=s("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),mk=[hk];function gk(e,t){return E(),H("svg",fk,mk)}const vk={name:"carbon-apps",render:gk},_k={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},kk=s("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),xk=[kk];function bk(e,t){return E(),H("svg",_k,xk)}const yk={name:"carbon-arrow-right",render:bk},wk={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},$k=s("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),Sk=[$k];function Ek(e,t){return E(),H("svg",wk,Sk)}const Ok={name:"carbon-arrow-left",render:Ek},Ck={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ik=s("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),Fk=[Ik];function Pk(e,t){return E(),H("svg",Ck,Fk)}const Tk={name:"carbon-maximize",render:Pk},Ak={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},jk=s("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),Mk=[jk];function Lk(e,t){return E(),H("svg",Ak,Mk)}const Rk={name:"carbon-minimize",render:Lk},Nk={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Bk=s("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),Dk=[Bk];function Hk(e,t){return E(),H("svg",Nk,Dk)}const qk={name:"carbon-checkmark",render:Hk},Vk={class:"select-list"},Wk={class:"title"},Kk={class:"items"},zk=["onClick"],Uk=ve({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:t}){const n=e;V(U);const a=Dt(n,"modelValue",t,{passive:!0});return(o,l)=>{const i=qk;return E(),H("div",Vk,[s("div",Wk,fn(e.title),1),s("div",Kk,[(E(!0),H(ye,null,ms(e.items,c=>(E(),H("div",{key:c.value,class:Me(["item",{active:w(a)===c.value}]),onClick:()=>{var u;a.value=c.value,(u=c.onClick)==null||u.call(c)}},[_(i,{class:Me(["text-green-500",{"opacity-0":w(a)!==c.value}])},null,8,["class"]),r(" "+fn(c.display||c.value),1)],10,zk))),128))])])}}});const Wt=(e,t)=>{const n=e.__vccOpts||e;for(const[a,o]of t)n[a]=o;return n},Yk=Wt(Uk,[["__scopeId","data-v-7dd0eaca"]]),Zk={class:"text-sm"},Gk=ve({__name:"Settings",setup(e){V(U);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(n,a)=>(E(),H("div",Zk,[_(Yk,{modelValue:w(ya),"onUpdate:modelValue":a[0]||(a[0]=o=>we(ya)?ya.value=o:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),Xk={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},Qk=ve({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:t}){const n=e;V(U);const a=Dt(n,"modelValue",t,{passive:!0}),o=q();return og(o,()=>{a.value=!1}),(l,i)=>(E(),H("div",{ref_key:"el",ref:o,class:"flex relative"},[s("button",{class:Me({disabled:e.disabled}),onClick:i[0]||(i[0]=c=>a.value=!w(a))},[Pt(l.$slots,"button",{class:Me({disabled:e.disabled})})],2),(E(),X(hu,null,[w(a)?(E(),H("div",Xk,[Pt(l.$slots,"menu")])):me("v-if",!0)],1024))],512))}}),Jk={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},ga={__name:"VerticalDivider",setup(e){return V(U),(t,n)=>(E(),H("div",Jk))}},e1={render(){return[]}},t1={class:"icon-btn"},n1={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},s1={class:"my-auto"},a1={class:"opacity-50"},o1=ve({__name:"NavControls",props:{persist:{default:!1}},setup(e){const t=e;V(U);const n=rl.smaller("md"),{isFullscreen:a,toggle:o}=op,l=F(()=>hl.value?`?password=${hl.value}`:""),i=F(()=>`/presenter/${We.value}${l.value}`),c=F(()=>`/${We.value}${l.value}`),u=q(),p=()=>{u.value&&as.value&&u.value.contains(as.value)&&as.value.blur()},d=F(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),f=Vt(),h=Vt();return gs(()=>import("./DrawingControls.46ab931f.js"),["assets/DrawingControls.46ab931f.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.8c454c5a.js"]).then(g=>h.value=g.default),(g,m)=>{const x=Rk,b=Tk,y=Ok,S=yk,$=vk,I=dk,M=ik,L=mp,B=Q0,Q=z0,ce=H0,pe=Fa("RouterLink"),_e=M0,Ke=I0,He=$0,Le=_0;return E(),H("nav",{ref_key:"root",ref:u,class:"flex flex-col"},[s("div",{class:Me(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",w(d)]),onMouseleave:p},[w(zt)?me("v-if",!0):(E(),H("button",{key:0,class:"icon-btn",onClick:m[0]||(m[0]=(...Pe)=>w(o)&&w(o)(...Pe))},[w(a)?(E(),X(x,{key:0})):(E(),X(b,{key:1}))])),s("button",{class:Me(["icon-btn",{disabled:!w(P$)}]),onClick:m[1]||(m[1]=(...Pe)=>w(dn)&&w(dn)(...Pe))},[_(y)],2),s("button",{class:Me(["icon-btn",{disabled:!w(F$)}]),title:"Next",onClick:m[2]||(m[2]=(...Pe)=>w(pn)&&w(pn)(...Pe))},[_(S)],2),w(zt)?me("v-if",!0):(E(),H("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:m[3]||(m[3]=Pe=>w(lp)())},[_($)])),w(dl)?me("v-if",!0):(E(),H("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:m[4]||(m[4]=Pe=>w(dp)())},[w(Jl)?(E(),X(I,{key:0})):(E(),X(M,{key:1}))])),_(ga),w(zt)?me("v-if",!0):(E(),H(ye,{key:3},[!w(Bt)&&!w(n)&&w(f)?(E(),H(ye,{key:0},[_(w(f)),_(ga)],64)):me("v-if",!0),w(Bt)?(E(),H("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:m[5]||(m[5]=Pe=>So.value=!w(So))},[w(So)?(E(),X(L,{key:0})):(E(),X(B,{key:1,class:"opacity-50"}))])):me("v-if",!0)],64)),!w(xe).drawings.presenterOnly&&!w(zt)?(E(),H(ye,{key:4},[s("button",{class:"icon-btn relative",title:"Drawing",onClick:m[6]||(m[6]=Pe=>Ht.value=!w(Ht))},[_(Q),w(Ht)?(E(),H("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:De({background:w(In).color})},null,4)):me("v-if",!0)]),_(ga)],64)):me("v-if",!0),w(zt)?me("v-if",!0):(E(),H(ye,{key:5},[w(Bt)?(E(),X(pe,{key:0,to:w(c),class:"icon-btn",title:"Play Mode"},{default:O(()=>[_(ce)]),_:1},8,["to"])):me("v-if",!0),w(O$)?(E(),X(pe,{key:1,to:w(i),class:"icon-btn",title:"Presenter Mode"},{default:O(()=>[_(_e)]),_:1},8,["to"])):me("v-if",!0),me("v-if",!0)],64)),(E(),H(ye,{key:6},[w(xe).download?(E(),H("button",{key:0,class:"icon-btn",onClick:m[8]||(m[8]=(...Pe)=>w(ml)&&w(ml)(...Pe))},[_(Ke)])):me("v-if",!0)],64)),!w(Bt)&&w(xe).info&&!w(zt)?(E(),H("button",{key:7,class:"icon-btn",onClick:m[9]||(m[9]=Pe=>Ls.value=!w(Ls))},[_(He)])):me("v-if",!0),!w(Bt)&&!w(zt)?(E(),X(Qk,{key:8},{button:O(()=>[s("button",t1,[_(Le)])]),menu:O(()=>[_(Gk)]),_:1})):me("v-if",!0),w(zt)?me("v-if",!0):(E(),X(ga,{key:9})),s("div",n1,[s("div",s1,[r(fn(w(We))+" ",1),s("span",a1,"/ "+fn(w(Ap)),1)])]),_(w(e1))],34)],512)}}}),gp={render(){return[]}},vp={render(){return[]}},l1={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},i1=ve({__name:"PresenterMouse",setup(e){return V(U),(t,n)=>{const a=mp;return w(xo).cursor?(E(),H("div",l1,[_(a,{class:"absolute",style:De({left:`${w(xo).cursor.x}%`,top:`${w(xo).cursor.y}%`})},null,8,["style"])])):me("v-if",!0)}}}),r1=ve({__name:"SlidesShow",props:{context:null},setup(e){V(U),ue(ht,()=>{var n,a;((n=ht.value)==null?void 0:n.meta)&&ht.value.meta.preload!==!1&&(ht.value.meta.__preloaded=!0),((a=Oo.value)==null?void 0:a.meta)&&Oo.value.meta.preload!==!1&&(Oo.value.meta.__preloaded=!0)},{immediate:!0});const t=Vt();return gs(()=>import("./DrawingLayer.90694b1d.js"),[]).then(n=>t.value=n.default),(n,a)=>(E(),H(ye,null,[me(" Global Bottom "),_(w(vp)),me(" Slides "),(E(!0),H(ye,null,ms(w(Ve),o=>{var l,i;return E(),H(ye,{key:o.path},[((l=o.meta)==null?void 0:l.__preloaded)||o===w(ht)?ao((E(),X(w(ni),{key:0,is:o==null?void 0:o.component,clicks:o===w(ht)?w(Ft):0,"clicks-elements":((i=o.meta)==null?void 0:i.__clicksElements)||[],"clicks-disabled":!1,class:Me(w(ti)(o)),route:o,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Tu,o===w(ht)]]):me("v-if",!0)],64)}),128)),me(" Global Top "),_(w(gp)),w(t)?(E(),X(w(t),{key:0})):me("v-if",!0),w(Bt)?me("v-if",!0):(E(),X(i1,{key:1}))],64))}}),c1=ve({__name:"Play",setup(e){V(U),U_();const t=q();function n(l){var i;Vr.value||((i=l.target)==null?void 0:i.id)==="slide-container"&&(l.screenX/window.innerWidth>.6?pn():dn())}j$(t);const a=F(()=>s_.value||Vr.value);Vt();const o=Vt();return gs(()=>import("./DrawingControls.46ab931f.js"),["assets/DrawingControls.46ab931f.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.8c454c5a.js"]).then(l=>o.value=l.default),(l,i)=>(E(),H(ye,null,[s("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:De(w(Wu))},[_(hp,{class:"w-full h-full",style:De({background:"var(--slidev-slide-container-background, black)"}),width:w(li)?w(Mn).width.value:void 0,scale:w(ya),onPointerdown:n},{default:O(()=>[_(r1,{context:"slide"})]),controls:O(()=>[s("div",{class:Me(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[w(a)?"opacity-100 right-0":"opacity-0 p-2",w(Zs)?"pointer-events-none":""]])},[_(o1,{class:"m-auto",persist:w(a)},null,8,["persist"])],2),!w(xe).drawings.presenterOnly&&!w(zt)&&w(o)?(E(),X(w(o),{key:0,class:"ml-0"})):me("v-if",!0)]),_:1},8,["style","width","scale"]),me("v-if",!0)],4),_(f0)],64))}});function _p(e){const t=F(()=>e.value.path),n=F(()=>Ve.length-1),a=F(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),o=F(()=>ro(a.value)),l=F(()=>Ve.find(h=>h.path===`${a.value}`)),i=F(()=>{var h,g,m;return(m=(g=(h=l.value)==null?void 0:h.meta)==null?void 0:g.slide)==null?void 0:m.id}),c=F(()=>{var h,g;return(g=(h=l.value)==null?void 0:h.meta)==null?void 0:g.layout}),u=F(()=>Ve.find(h=>h.path===`${Math.min(Ve.length,a.value+1)}`)),p=F(()=>Ve.filter(h=>{var g,m;return(m=(g=h.meta)==null?void 0:g.slide)==null?void 0:m.title}).reduce((h,g)=>(ii(h,g),h),[])),d=F(()=>ri(p.value,l.value)),f=F(()=>ci(d.value));return{route:e,path:t,total:n,currentPage:a,currentPath:o,currentRoute:l,currentSlideId:i,currentLayout:c,nextRoute:u,rawTree:p,treeWithActiveStatuses:d,tree:f}}function kp(e,t,n){const a=q(0);Qe(()=>{vt.afterEach(async()=>{await Qe(),a.value+=1})});const o=F(()=>{var u,p;return a.value,((p=(u=t.value)==null?void 0:u.meta)==null?void 0:p.__clicksElements)||[]}),l=F(()=>{var u,p,d;return+((d=(p=(u=t.value)==null?void 0:u.meta)==null?void 0:p.clicks)!=null?d:o.value.length)}),i=F(()=>n.value<Ve.length-1||e.value<l.value),c=F(()=>n.value>1||e.value>0);return{clicks:e,clicksElements:o,clicksTotal:l,hasNext:i,hasPrev:c}}const u1=["id"],ec=ve({__name:"PrintSlideClick",props:{clicks:null,clicksElements:null,nav:null,route:null},emits:["update:clicksElements"],setup(e,{emit:t}){const n=e,a=Dt(n,"clicksElements",t),o=F(()=>({height:`${Vu}px`,width:`${jn}px`})),l=Vt();gs(()=>import("./DrawingPreview.c7b64e30.js"),[]).then(p=>l.value=p.default);const i=F(()=>n.clicks),c=kp(i,n.nav.currentRoute,n.nav.currentPage),u=F(()=>`${n.route.path.toString().padStart(3,"0")}-${(i.value+1).toString().padStart(2,"0")}`);return mt(U,Ae({nav:{...n.nav,...c},configs:xe,themeConfigs:F(()=>xe.themeConfig)})),(p,d)=>{var f;return E(),H("div",{id:w(u),class:"slide-container",style:De(w(o))},[_(w(vp)),_(w(ni),{is:(f=e.route)==null?void 0:f.component,"clicks-elements":w(a),"onUpdate:clicks-elements":d[0]||(d[0]=h=>we(a)?a.value=h:null),clicks:w(i),"clicks-disabled":!1,class:Me(w(ti)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),w(l)?(E(),X(w(l),{key:0,page:+e.route.path},null,8,["page"])):me("v-if",!0),_(w(gp))],12,u1)}}}),p1=ve({__name:"PrintSlide",props:{route:null},setup(e){var l;const t=e;V(U);const n=Ae(((l=t.route.meta)==null?void 0:l.__clicksElements)||[]),a=F(()=>t.route),o=_p(a);return(i,c)=>(E(),H(ye,null,[_(ec,{"clicks-elements":n,"onUpdate:clicks-elements":c[0]||(c[0]=u=>we(n)?n.value=u:null),clicks:0,nav:w(o),route:w(a)},null,8,["clicks-elements","nav","route"]),w(Rs)?me("v-if",!0):(E(!0),H(ye,{key:0},ms(n.length,u=>(E(),X(ec,{key:u,clicks:u,nav:w(o),route:w(a)},null,8,["clicks","nav","route"]))),128))],64))}}),d1={id:"print-content"},f1=ve({__name:"PrintContainer",props:{width:null},setup(e){const t=e;V(U);const n=F(()=>t.width),a=F(()=>t.width/un),o=F(()=>n.value/a.value),l=F(()=>o.value<un?n.value/jn:a.value*un/jn),i=Ve.slice(0,-1),c=F(()=>({"select-none":!xe.selectable,"slidev-code-line-numbers":xe.lineNumbers}));return mt(qu,l),(u,p)=>(E(),H("div",{id:"print-container",class:Me(w(c))},[s("div",d1,[(E(!0),H(ye,null,ms(w(i),d=>(E(),X(p1,{key:d.path,route:d},null,8,["route"]))),128))]),Pt(u.$slots,"controls")],2))}});const h1=ve({__name:"Print",setup(e){V(U);const t=Cn.canvasWidth,n=Math.round(t/Cn.aspectRatio)+1;function a(o,{slots:l}){if(l.default)return ot("style",l.default())}return fs(()=>{li?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(o,l)=>(E(),H(ye,null,[_(a,null,{default:O(()=>[r(" @page { size: "+fn(w(t))+"px "+fn(n)+"px; margin: 0px; } ",1)]),_:1}),s("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:De(w(Wu))},[_(f1,{class:"w-full h-full",style:De({background:"var(--slidev-slide-container-background, black)"}),width:w(Mn).width.value},null,8,["style","width"])],4)],64))}});const m1={class:"slidev-layout end"},g1={__name:"end",setup(e){return V(U),(t,n)=>(E(),H("div",m1," END "))}},v1=Wt(g1,[["__scopeId","data-v-ab32435f"]]);function tc(e){return e.startsWith("/")?"/slides-flex/"+e.slice(1):e}function _1(e,t=!1){const n=e&&["#","rgb","hsl"].some(o=>e.indexOf(o)===0),a={background:n?e:void 0,color:e&&!n?"white":void 0,backgroundImage:n?void 0:e?t?`linear-gradient(#0005, #0008), url(${tc(e)})`:`url("${tc(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return a.background||delete a.background,a}const k1={class:"my-auto w-full"},sa=ve({__name:"cover",props:{background:{default:""}},setup(e){const t=e;V(U);const n=F(()=>_1(t.background,!0));return(a,o)=>(E(),H("div",{class:"slidev-layout cover",style:De(w(n))},[s("div",k1,[Pt(a.$slots,"default")])],4))}}),x1=s("h1",null,"Flex \u5E03\u5C40",-1),b1={__name:"1",setup(e){const t={background:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/flex-bg.3wlnmzcqmq60.jpeg",highlighter:"prism",canvasWidth:1300,layout:"cover",fonts:{sans:"Robot",serif:"Robot Slab",mono:"Fira Code"}};return V(U),(n,a)=>(E(),X(sa,Ce(Ee(t)),{default:O(()=>[x1]),_:1},16))}},gn=ve({props:{every:{type:Number,default:1},at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){var l,i;const e=Li("click"),t=Li("after"),n=(c,u,p)=>ao(c,[[u,this.at!=null?+this.at+p:null,"",{hide:this.hide,fade:this.fade}]]);let a=(i=(l=this.$slots).default)==null?void 0:i.call(l);if(!a)return;a=Vm(a);const o=c=>c.map((u,p)=>Ln(u)?n(ot(u),p%this.every===0?e:t,Math.floor(p/this.every)):u);return a.length===1&&["ul","ol"].includes(a[0].type)&&Array.isArray(a[0].children)?ot(a[0],{},[o(a[0].children)]):o(a)}}),y1={class:"slidev-layout default"},Ye={__name:"default",setup(e){return V(U),(t,n)=>(E(),H("div",y1,[Pt(t.$slots,"default")]))}},w1=s("h1",null,"Flex \u5E03\u5C40",-1),$1=s("p",null,"2009 \u5E74\uFF0CW3C \u63D0\u51FA\u4E86\u4E00\u79CD\u65B0\u7684\u5E03\u5C40\u65B9\u6848----Flex \u5E03\u5C40\u3002",-1),S1=s("p",null,"Flex \u662F Flexible Box \u7684\u7F29\u5199\uFF0C\u610F\u4E3A\u5F39\u6027\u76D2\u5B50\uFF0C\u901A\u8FC7 Flex \u5E03\u5C40\u53EF\u4EE5\u7B80\u4FBF\u3001\u54CD\u5E94\u5F0F\u5730\u5B9E\u73B0\u5404\u79CD\u9875\u9762\u5E03\u5C40\u3002",-1),E1=s("ul",null,[s("li",null,[r("\u5E03\u5C40\u7684\u4F20\u7EDF\u89E3\u51B3\u65B9\u6848\u57FA\u4E8E\u76D2\u6A21\u578B\uFF0C\u501F\u52A9 "),s("kbd",null,"display"),r("\u3001"),s("kbd",null,"position"),r("\u3001"),s("kbd",null,"float"),r(" \u8FDB\u884C\u5E03\u5C40\uFF0C\u5BF9\u4E8E\u4E00\u4E9B\u7279\u6B8A\u5E03\u5C40\u975E\u5E38\u7684\u4E0D\u65B9\u4FBF\uFF0C\u800C\u901A\u8FC7 Flex \u5E03\u5C40\u53EF\u4EE5\u8F7B\u6613\u5B9E\u73B0\u57FA\u4E8E\u76D2\u6A21\u578B\u65E0\u6CD5\u5B9E\u73B0\u6216\u8005\u5F88\u96BE\u5B9E\u73B0\u7684\u5E03\u5C40\u3002")]),s("li",null,[r("\u76EE\u524D Flex \u5E03\u5C40\u5DF2\u5F97\u5230\u6240\u6709\u6D4F\u89C8\u5668\u7684\u652F\u6301\uFF0CFlex \u5E03\u5C40\u5DF2\u7ECF\u6210\u4E3A\u672A\u6765\u5E03\u5C40\u7684\u9996\u9009\u65B9\u6848\u3002"),s("a",{href:"https://caniuse.com/?search=flex",target:"_blank",rel:"noopener"},"Learn More"),r(". "),s("img",{src:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/caniuse-flex.3jpw2y28lba0.png"})]),s("li",null,[r("\u5F53\u6211\u4EEC\u8BBE\u7F6E\u5143\u7D20 "),s("kbd",null,"display: flex"),r("\uFF0C\u90A3\u4E48\u8BE5\u5143\u7D20\u5C31\u53D8\u4E3A\u4E86\u5F39\u6027\u76D2\u5B50\uFF0C\u5F39\u6027\u76D2\u5B50\u4E2D\u7684\u5143\u7D20\u6309\u7167\u67D0\u79CD\u89C4\u5219\u8FDB\u884C\u6392\u5217\u3002")])],-1),O1={__name:"2",setup(e){const t={};return V(U),(n,a)=>{const o=gn;return E(),X(Ye,Ce(Ee(t)),{default:O(()=>[w1,$1,S1,_(o,null,{default:O(()=>[E1]),_:1})]),_:1},16)}}},C1=s("h1",null,"\u5C5E\u6027\u521D\u89C8",-1),I1=s("p",null,"FlexBox \u4E0A\u7684\u5C5E\u6027\u4ECB\u7ECD\u3002",-1),F1=s("p",null,"FlexBox \u4E2D\u5143\u7D20\u7684\u6392\u5217\u4E3B\u8981\u662F\u901A\u8FC7\u4E00\u7CFB\u5217\u7684\u5C5E\u6027\u6765\u51B3\u5B9A\u7684\uFF0C\u6211\u4EEC\u5C06 FlexBox \u79F0\u4E3A Container(\u5BB9\u5668)\uFF0C\u800C FlexBox \u4E2D\u7684\u5143\u7D20\u79F0\u4E3A Item(\u5B50\u9879)\uFF0C\u5728\u5BB9\u5668\u548C\u5B50\u9879\u4E2D\u5747\u53EF\u8BBE\u7F6E\u76F8\u5E94\u7684\u5C5E\u6027\u503C\u6765\u89C4\u5B9A \u5B50\u9879\u5728\u5BB9\u5668\u4E2D\u7684\u6392\u5217\u3002",-1),P1=s("div",{grid:"~ cols-2 gap-2",m:"-t-2"},[s("div",null,[s("p",null,[s("kbd",null,"Container"),r(" \u4E0A\u7684\u5C5E\u6027\uFF1A")]),s("ul",null,[s("li",null,[s("kbd",null,"flex-direction")]),s("li",null,[s("kbd",null,"flex-wrap")]),s("li",null,[s("kbd",null,"flex-flow")]),s("li",null,[s("kbd",null,"jusitify-content")]),s("li",null,[s("kbd",null,"align-items")]),s("li",null,[s("kbd",null,"align-content")])])]),s("div",null,[s("p",null,[s("kbd",null,"Item"),r(" \u4E0A\u7684\u5C5E\u6027\uFF1A")]),s("ul",null,[s("li",null,[s("kbd",null,"flex-basis")]),s("li",null,[s("kbd",null,"flex-grow")]),s("li",null,[s("kbd",null,"flex-shrink")]),s("li",null,[s("kbd",null,"flex")]),s("li",null,[s("kbd",null,"order")]),s("li",null,[s("kbd",null,"align-self")])])])],-1),T1=s("p",null,[r("\u5176\u4E2D "),s("kbd",null,"flex-flow"),r(" \u548C "),s("kbd",null,"flex"),r(" \u4E3A\u7B80\u5199\u5F62\u5F0F\u3002")],-1),A1={__name:"3",setup(e){const t={};return V(U),(n,a)=>(E(),X(Ye,Ce(Ee(t)),{default:O(()=>[C1,I1,F1,P1,T1]),_:1},16))}},Mt=ve({props:{at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){return _(gn,{every:99999,at:this.at,hide:this.hide,fade:this.fade},{default:this.$slots.default})}});const j1={__name:"FlexItemBox",props:{containerStyle:{default:function(){return{}}},itemStyle:{default:function(){return{}}},itemStyles:{default:function(){return[]}},itemContents:{default:function(){return[]}},counts:{default:5}},setup(e){const t=e;V(U);const n=q(t.containerStyle),a=q(t.itemStyle),o=q(t.itemStyles),l=q(t.itemContents),i=q(new Array(t.counts));return(c,u)=>(E(),H("div",{class:"container",style:De(n.value)},[(E(!0),H(ye,null,ms(i.value,(p,d)=>{var f;return E(),H("div",{class:"item",style:De([a.value,o.value[d]]),key:d},fn((f=l.value[d])!=null?f:d+1),5)}),128))],4))}},Ze=Wt(j1,[["__scopeId","data-v-5f24cb94"]]),M1={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},L1=s("path",{fill:"currentColor",d:"M200 32h-36.3a47.8 47.8 0 0 0-71.4 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32.1 32.1 0 0 1 32 32H96a32.1 32.1 0 0 1 32-32Zm72 184H56V48h26.8A47.2 47.2 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.2 47.2 0 0 0-2.8-16H200Z"},null,-1),R1=[L1];function N1(e,t){return E(),H("svg",M1,R1)}const B1={name:"ph-clipboard",render:N1},D1={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},H1=s("path",{fill:"currentColor",d:"M177.8 98.5a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3ZM232 128A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),q1=[H1];function V1(e,t){return E(),H("svg",D1,q1)}const W1={name:"ph-check-circle",render:V1};/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function xp(e){return typeof e>"u"||e===null}function K1(e){return typeof e=="object"&&e!==null}function z1(e){return Array.isArray(e)?e:xp(e)?[]:[e]}function U1(e,t){var n,a,o,l;if(t)for(l=Object.keys(t),n=0,a=l.length;n<a;n+=1)o=l[n],e[o]=t[o];return e}function Y1(e,t){var n="",a;for(a=0;a<t;a+=1)n+=e;return n}function Z1(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var G1=xp,X1=K1,Q1=z1,J1=Y1,ex=Z1,tx=U1,si={isNothing:G1,isObject:X1,toArray:Q1,repeat:J1,isNegativeZero:ex,extend:tx};function bp(e,t){var n="",a=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(n+='in "'+e.mark.name+'" '),n+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(n+=`

`+e.mark.snippet),a+" "+n):a}function Xs(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=bp(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Xs.prototype=Object.create(Error.prototype);Xs.prototype.constructor=Xs;Xs.prototype.toString=function(t){return this.name+": "+bp(this,t)};var En=Xs,nx=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],sx=["scalar","sequence","mapping"];function ax(e){var t={};return e!==null&&Object.keys(e).forEach(function(n){e[n].forEach(function(a){t[String(a)]=n})}),t}function ox(e,t){if(t=t||{},Object.keys(t).forEach(function(n){if(nx.indexOf(n)===-1)throw new En('Unknown option "'+n+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(n){return n},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=ax(t.styleAliases||null),sx.indexOf(this.kind)===-1)throw new En('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var et=ox;function nc(e,t){var n=[];return e[t].forEach(function(a){var o=n.length;n.forEach(function(l,i){l.tag===a.tag&&l.kind===a.kind&&l.multi===a.multi&&(o=i)}),n[o]=a}),n}function lx(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,n;function a(o){o.multi?(e.multi[o.kind].push(o),e.multi.fallback.push(o)):e[o.kind][o.tag]=e.fallback[o.tag]=o}for(t=0,n=arguments.length;t<n;t+=1)arguments[t].forEach(a);return e}function fl(e){return this.extend(e)}fl.prototype.extend=function(t){var n=[],a=[];if(t instanceof et)a.push(t);else if(Array.isArray(t))a=a.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(n=n.concat(t.implicit)),t.explicit&&(a=a.concat(t.explicit));else throw new En("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");n.forEach(function(l){if(!(l instanceof et))throw new En("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(l.loadKind&&l.loadKind!=="scalar")throw new En("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(l.multi)throw new En("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),a.forEach(function(l){if(!(l instanceof et))throw new En("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var o=Object.create(fl.prototype);return o.implicit=(this.implicit||[]).concat(n),o.explicit=(this.explicit||[]).concat(a),o.compiledImplicit=nc(o,"implicit"),o.compiledExplicit=nc(o,"explicit"),o.compiledTypeMap=lx(o.compiledImplicit,o.compiledExplicit),o};var ix=fl,rx=new et("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),cx=new et("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),ux=new et("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),px=new ix({explicit:[rx,cx,ux]});function dx(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")}function fx(){return null}function hx(e){return e===null}var mx=new et("tag:yaml.org,2002:null",{kind:"scalar",resolve:dx,construct:fx,predicate:hx,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function gx(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")}function vx(e){return e==="true"||e==="True"||e==="TRUE"}function _x(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var kx=new et("tag:yaml.org,2002:bool",{kind:"scalar",resolve:gx,construct:vx,predicate:_x,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function xx(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function bx(e){return 48<=e&&e<=55}function yx(e){return 48<=e&&e<=57}function wx(e){if(e===null)return!1;var t=e.length,n=0,a=!1,o;if(!t)return!1;if(o=e[n],(o==="-"||o==="+")&&(o=e[++n]),o==="0"){if(n+1===t)return!0;if(o=e[++n],o==="b"){for(n++;n<t;n++)if(o=e[n],o!=="_"){if(o!=="0"&&o!=="1")return!1;a=!0}return a&&o!=="_"}if(o==="x"){for(n++;n<t;n++)if(o=e[n],o!=="_"){if(!xx(e.charCodeAt(n)))return!1;a=!0}return a&&o!=="_"}if(o==="o"){for(n++;n<t;n++)if(o=e[n],o!=="_"){if(!bx(e.charCodeAt(n)))return!1;a=!0}return a&&o!=="_"}}if(o==="_")return!1;for(;n<t;n++)if(o=e[n],o!=="_"){if(!yx(e.charCodeAt(n)))return!1;a=!0}return!(!a||o==="_")}function $x(e){var t=e,n=1,a;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),a=t[0],(a==="-"||a==="+")&&(a==="-"&&(n=-1),t=t.slice(1),a=t[0]),t==="0")return 0;if(a==="0"){if(t[1]==="b")return n*parseInt(t.slice(2),2);if(t[1]==="x")return n*parseInt(t.slice(2),16);if(t[1]==="o")return n*parseInt(t.slice(2),8)}return n*parseInt(t,10)}function Sx(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!si.isNegativeZero(e)}var Ex=new et("tag:yaml.org,2002:int",{kind:"scalar",resolve:wx,construct:$x,predicate:Sx,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Ox=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function Cx(e){return!(e===null||!Ox.test(e)||e[e.length-1]==="_")}function Ix(e){var t,n;return t=e.replace(/_/g,"").toLowerCase(),n=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?n===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:n*parseFloat(t,10)}var Fx=/^[-+]?[0-9]+e/;function Px(e,t){var n;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(si.isNegativeZero(e))return"-0.0";return n=e.toString(10),Fx.test(n)?n.replace("e",".e"):n}function Tx(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||si.isNegativeZero(e))}var Ax=new et("tag:yaml.org,2002:float",{kind:"scalar",resolve:Cx,construct:Ix,predicate:Tx,represent:Px,defaultStyle:"lowercase"}),jx=px.extend({implicit:[mx,kx,Ex,Ax]}),Mx=jx,yp=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),wp=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function Lx(e){return e===null?!1:yp.exec(e)!==null||wp.exec(e)!==null}function Rx(e){var t,n,a,o,l,i,c,u=0,p=null,d,f,h;if(t=yp.exec(e),t===null&&(t=wp.exec(e)),t===null)throw new Error("Date resolve error");if(n=+t[1],a=+t[2]-1,o=+t[3],!t[4])return new Date(Date.UTC(n,a,o));if(l=+t[4],i=+t[5],c=+t[6],t[7]){for(u=t[7].slice(0,3);u.length<3;)u+="0";u=+u}return t[9]&&(d=+t[10],f=+(t[11]||0),p=(d*60+f)*6e4,t[9]==="-"&&(p=-p)),h=new Date(Date.UTC(n,a,o,l,i,c,u)),p&&h.setTime(h.getTime()-p),h}function Nx(e){return e.toISOString()}var Bx=new et("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:Lx,construct:Rx,instanceOf:Date,represent:Nx});function Dx(e){return e==="<<"||e===null}var Hx=new et("tag:yaml.org,2002:merge",{kind:"scalar",resolve:Dx}),ai=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function qx(e){if(e===null)return!1;var t,n,a=0,o=e.length,l=ai;for(n=0;n<o;n++)if(t=l.indexOf(e.charAt(n)),!(t>64)){if(t<0)return!1;a+=6}return a%8===0}function Vx(e){var t,n,a=e.replace(/[\r\n=]/g,""),o=a.length,l=ai,i=0,c=[];for(t=0;t<o;t++)t%4===0&&t&&(c.push(i>>16&255),c.push(i>>8&255),c.push(i&255)),i=i<<6|l.indexOf(a.charAt(t));return n=o%4*6,n===0?(c.push(i>>16&255),c.push(i>>8&255),c.push(i&255)):n===18?(c.push(i>>10&255),c.push(i>>2&255)):n===12&&c.push(i>>4&255),new Uint8Array(c)}function Wx(e){var t="",n=0,a,o,l=e.length,i=ai;for(a=0;a<l;a++)a%3===0&&a&&(t+=i[n>>18&63],t+=i[n>>12&63],t+=i[n>>6&63],t+=i[n&63]),n=(n<<8)+e[a];return o=l%3,o===0?(t+=i[n>>18&63],t+=i[n>>12&63],t+=i[n>>6&63],t+=i[n&63]):o===2?(t+=i[n>>10&63],t+=i[n>>4&63],t+=i[n<<2&63],t+=i[64]):o===1&&(t+=i[n>>2&63],t+=i[n<<4&63],t+=i[64],t+=i[64]),t}function Kx(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var zx=new et("tag:yaml.org,2002:binary",{kind:"scalar",resolve:qx,construct:Vx,predicate:Kx,represent:Wx}),Ux=Object.prototype.hasOwnProperty,Yx=Object.prototype.toString;function Zx(e){if(e===null)return!0;var t=[],n,a,o,l,i,c=e;for(n=0,a=c.length;n<a;n+=1){if(o=c[n],i=!1,Yx.call(o)!=="[object Object]")return!1;for(l in o)if(Ux.call(o,l))if(!i)i=!0;else return!1;if(!i)return!1;if(t.indexOf(l)===-1)t.push(l);else return!1}return!0}function Gx(e){return e!==null?e:[]}var Xx=new et("tag:yaml.org,2002:omap",{kind:"sequence",resolve:Zx,construct:Gx}),Qx=Object.prototype.toString;function Jx(e){if(e===null)return!0;var t,n,a,o,l,i=e;for(l=new Array(i.length),t=0,n=i.length;t<n;t+=1){if(a=i[t],Qx.call(a)!=="[object Object]"||(o=Object.keys(a),o.length!==1))return!1;l[t]=[o[0],a[o[0]]]}return!0}function eb(e){if(e===null)return[];var t,n,a,o,l,i=e;for(l=new Array(i.length),t=0,n=i.length;t<n;t+=1)a=i[t],o=Object.keys(a),l[t]=[o[0],a[o[0]]];return l}var tb=new et("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:Jx,construct:eb}),nb=Object.prototype.hasOwnProperty;function sb(e){if(e===null)return!0;var t,n=e;for(t in n)if(nb.call(n,t)&&n[t]!==null)return!1;return!0}function ab(e){return e!==null?e:{}}var ob=new et("tag:yaml.org,2002:set",{kind:"mapping",resolve:sb,construct:ab});Mx.extend({implicit:[Bx,Hx],explicit:[zx,Xx,tb,ob]});function sc(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"\x85":e===95?"\xA0":e===76?"\u2028":e===80?"\u2029":""}var lb=new Array(256),ib=new Array(256);for(var zn=0;zn<256;zn++)lb[zn]=sc(zn)?1:0,ib[zn]=sc(zn);function rb(e){return Array.from(new Set(e))}function ac(...e){let t,n,a;e.length===1?(t=0,a=1,[n]=e):[t,n,a=1]=e;const o=[];let l=t;for(;l<n;)o.push(l),l+=a||1;return o}function cb(e,t){if(!t||t==="all"||t==="*")return ac(1,e+1);const n=[];for(const a of t.split(/[,;]/g))if(!a.includes("-"))n.push(+a);else{const[o,l]=a.split("-",2);n.push(...ac(+o,l?+l+1:e+1))}return rb(n).filter(a=>a<=e).sort((a,o)=>a-o)}const ub=["title"],ct=ve({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const t=e;V(U);const n=V(Ts),a=V(Sn),o=V(As);function l(f=5){const h=[],g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",m=g.length;for(let x=0;x<f;x++)h.push(g.charAt(Math.floor(Math.random()*m)));return h.join("")}const i=q(),c=Bn();hs(()=>{const f=t.at==null?a==null?void 0:a.value.length:t.at,h=F(()=>o!=null&&o.value?t.ranges.length-1:Math.min(Math.max(0,((n==null?void 0:n.value)||0)-(f||0)),t.ranges.length-1)),g=F(()=>t.ranges[h.value]||"");if(t.ranges.length>=2&&!(o!=null&&o.value)){const m=l(),x=Wm(t.ranges.length-1).map(b=>m+b);a!=null&&a.value&&(a.value.push(...x),so(()=>x.forEach(b=>nl(a.value,b)),c))}fs(()=>{if(!i.value)return;const x=i.value.querySelector(".shiki-dark")?Array.from(i.value.querySelectorAll(".shiki")):[i.value];for(const b of x){const y=Array.from(b.querySelectorAll(".line")),S=cb(y.length,g.value);if(y.forEach(($,I)=>{const M=S.includes(I+1);$.classList.toggle(yn,!0),$.classList.toggle("highlighted",M),$.classList.toggle("dishonored",!M)}),t.maxHeight){const $=b.querySelector(".line.highlighted");$&&$.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:u,copy:p}=mg();function d(){var h,g;const f=(g=(h=i.value)==null?void 0:h.querySelector(".slidev-code"))==null?void 0:g.textContent;f&&p(f)}return(f,h)=>{const g=W1,m=B1;return E(),H("div",{ref_key:"el",ref:i,class:"slidev-code-wrapper relative group",style:De({"max-height":t.maxHeight,"overflow-y":t.maxHeight?"scroll":void 0})},[Pt(f.$slots,"default"),w(xe).codeCopy?(E(),H("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:w(u)?"Copied":"Copy",onClick:h[0]||(h[0]=x=>d())},[w(u)?(E(),X(g,{key:0,class:"p-2 w-8 h-8"})):(E(),X(m,{key:1,class:"p-2 w-8 h-8"}))],8,ub)):me("v-if",!0)],4)}}});function oc(e){return e.startsWith("/")?"/slides-flex/"+e.slice(1):e}function $p(e,t=!1){const n=e&&e[0]==="#"&&e.startsWith("rgb"),a={background:n?e:void 0,color:e&&!n?"white":void 0,backgroundImage:n?void 0:e?t?`linear-gradient(#0005, #0008), url(${oc(e)})`:`url("${oc(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return a.background||delete a.background,a}const pb={class:"grid grid-cols-2 w-full h-full"},aa=ve({__name:"image-right",props:{image:{type:String},class:{type:String}},setup(e){const t=e;V(U);const n=F(()=>$p(t.image));return(a,o)=>(E(),H("div",pb,[s("div",{class:Me(["slidev-layout default",t.class])},[Pt(a.$slots,"default")],2),s("div",{class:"w-full w-full",style:De(w(n))},null,4)]))}}),db=s("h1",null,"display: flex",-1),fb=s("p",null,"\u5F53\u4E0D\u8BBE\u7F6E\u4EFB\u4F55\u5C5E\u6027\u65F6 FlexBox \u4E2D\u5143\u7D20\u7684\u6392\u5217\u3002",-1),hb=s("pre",{class:"slidev-code language-html"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),r("div")]),r(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),r("container"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")])]),r(`
`),s("span",{class:"line"},[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),r("div")]),r(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),r("item"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),r("1"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),r("div")]),s("span",{class:"token punctuation"},">")])]),r(`
`),s("span",{class:"line"},[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),r("div")]),r(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),r("item"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),r("2"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),r("div")]),s("span",{class:"token punctuation"},">")])]),r(`
`),s("span",{class:"line"},[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),r("div")]),r(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),r("item"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),r("3"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),r("div")]),s("span",{class:"token punctuation"},">")])]),r(`
`),s("span",{class:"line"},[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),r("div")]),r(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),r("item"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),r("4"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),r("div")]),s("span",{class:"token punctuation"},">")])]),r(`
`),s("span",{class:"line"},[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),r("div")]),s("span",{class:"token punctuation"},">")])])])],-1),mb=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},"<style>"),r(`
`),s("span",{class:"line"},[s("span",{class:"token selector"},".container"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token property"},"display"),s("span",{class:"token punctuation"},":"),r(" flex"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{class:"token selector"},".item"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token property"},"width"),s("span",{class:"token punctuation"},":"),r(" 100px"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token property"},"height"),s("span",{class:"token punctuation"},":"),r(" 100px"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token property"},"background"),s("span",{class:"token punctuation"},":"),r(" #ce5777"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),r(`
`),s("span",{class:"line"},"</style>")])],-1),gb={class:"mt-8"},vb=s("div",{class:"mt-8"}," \u5143\u7D20\u4F9D\u6B21\u4ECE\u5DE6\u5411\u53F3\u6392\u5217\uFF0C\u5143\u7D20\u4E4B\u95F4\u7D27\u7D27\u6328\u7740\u6CA1\u6709\u7A7A\u9699\u3002 ",-1),_b={__name:"4",setup(e){const t={layout:"image-right",image:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/display-bg.1ynu0b2f6g3k.jpeg"};return V(U),(n,a)=>{const o=ct,l=Ze,i=Mt;return E(),X(aa,Ce(Ee(t)),{default:O(()=>[db,fb,_(o,te({},{ranges:[""]}),{default:O(()=>[hb]),_:1},16),_(o,te({},{ranges:[""]}),{default:O(()=>[mb]),_:1},16),_(i,null,{default:O(()=>[s("div",gb,[_(l,{counts:4})]),vb]),_:1})]),_:1},16)}}},kb=s("h1",null,"Container \u4E0A\u7684\u5C5E\u6027",-1),xb={__name:"5",setup(e){const t={layout:"cover",background:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/container-bg.4x2ywhgh2yo0.jpeg"};return V(U),(n,a)=>(E(),X(sa,Ce(Ee(t)),{default:O(()=>[kb]),_:1},16))}},bb=s("h1",null,"flex-direction",-1),yb=s("p",null,"\u63A7\u5236\u4E3B\u8F74\u548C\u526F\u8F74\u7684\u65B9\u5411",-1),wb={class:"grid grid-cols-2 gap-2"},$b={class:"grid grid-rows-2 gap-2"},Sb=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".container"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"flex-direction"),s("span",{class:"token punctuation"},":"),r(" row"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),Eb=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".container"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"flex-direction"),s("span",{class:"token punctuation"},":"),r(" row-reverse"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),Ob={class:"grid grid-cols-2 gap-2"},Cb=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".container"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"flex-direction"),s("span",{class:"token punctuation"},":"),r(" column"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),Ib=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".container"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"flex-direction"),s("span",{class:"token punctuation"},":"),r(" column-reverse"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),Fb={__name:"6",setup(e){const t={};return V(U),(n,a)=>{const o=ct,l=Ze,i=Mt;return E(),X(Ye,Ce(Ee(t)),{default:O(()=>[bb,yb,s("div",wb,[s("div",$b,[_(i,null,{default:O(()=>[s("div",null,[_(o,te({},{ranges:["2"]}),{default:O(()=>[Sb]),_:1},16),_(l,{counts:4,containerStyle:{flexDirection:"row",marginTop:"20px"}})])]),_:1}),_(i,null,{default:O(()=>[s("div",null,[_(o,te({},{ranges:["2"]}),{default:O(()=>[Eb]),_:1},16),_(l,{counts:4,containerStyle:{flexDirection:"row-reverse",marginTop:"20px"}})])]),_:1})]),s("div",Ob,[_(i,null,{default:O(()=>[s("div",null,[_(o,te({},{ranges:["2"]}),{default:O(()=>[Cb]),_:1},16),_(l,{counts:4,containerStyle:{flexDirection:"column",marginTop:"20px"}})])]),_:1}),_(i,null,{default:O(()=>[s("div",null,[_(o,te({},{ranges:["2"]}),{default:O(()=>[Ib]),_:1},16),_(l,{counts:4,containerStyle:{flexDirection:"column-reverse",marginTop:"20px"}})])]),_:1})])])]),_:1},16)}}},Pb=s("h1",null,"flex-wrap",-1),Tb=s("p",null,"\u5F53\u5B50\u9879\u7684\u603B\u957F\u5EA6\u8D85\u8FC7\u5BB9\u5668\u5BBD\u5EA6\u65F6\uFF0C\u5B50\u9879\u662F\u5426\u6298\u53E0",-1),Ab={grid:"~ cols-2 gap-2"},jb=s("pre",{class:"slidev-code language-html"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),r("div")]),r(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),r("container"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")])]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),r("div")]),r(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),r("item"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),r("1"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),r("div")]),s("span",{class:"token punctuation"},">")])]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),r("div")]),r(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),r("item"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),r("2"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),r("div")]),s("span",{class:"token punctuation"},">")])]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),r("div")]),r(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),r("item"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),r("3"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),r("div")]),s("span",{class:"token punctuation"},">")])]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),r("div")]),r(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),r("item"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),r("4"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),r("div")]),s("span",{class:"token punctuation"},">")])]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),r("div")]),r(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),r("item"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),r("5"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),r("div")]),s("span",{class:"token punctuation"},">")])]),r(`
`),s("span",{class:"line"},[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),r("div")]),s("span",{class:"token punctuation"},">")])])])],-1),Mb=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".container"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"width"),s("span",{class:"token punctuation"},":"),r(" 400px"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"display"),s("span",{class:"token punctuation"},":"),r(" flex"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token selector"},".item"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"width"),s("span",{class:"token punctuation"},":"),r(" 100px"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"height"),s("span",{class:"token punctuation"},":"),r(" 100px"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),Lb=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".container"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"flex-wrap"),s("span",{class:"token punctuation"},":"),r(" wrap"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),Rb=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".container"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"flex-wrap"),s("span",{class:"token punctuation"},":"),r(" wrap-reverse"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),Nb={__name:"7",setup(e){const t={};return V(U),(n,a)=>{const o=ct,l=Mt,i=Ze;return E(),X(Ye,Ce(Ee(t)),{default:O(()=>[Pb,Tb,s("div",Ab,[s("div",null,[_(l,null,{default:O(()=>[_(o,te({},{ranges:["all"]}),{default:O(()=>[jb]),_:1},16),_(o,te({},{ranges:["all"]}),{default:O(()=>[Mb]),_:1},16)]),_:1}),_(l,null,{default:O(()=>[_(i,{counts:5,containerStyle:{width:"400px",marginTop:"40px"}})]),_:1})]),s("div",null,[_(l,null,{default:O(()=>[_(o,te({},{ranges:["2"]}),{default:O(()=>[Lb]),_:1},16),_(i,{counts:5,containerStyle:{width:"400px",flexWrap:"wrap"}})]),_:1}),_(l,null,{default:O(()=>[_(o,te({},{ranges:["2"]}),{default:O(()=>[Rb]),_:1},16),_(i,{counts:5,containerStyle:{width:"400px",flexWrap:"wrap-reverse"}})]),_:1})])])]),_:1},16)}}},Bb=s("h1",null,"flex-flow",-1),Db=s("p",null,[s("kbd",null,"flex-flow"),r(" \u4E3A "),s("kbd",null,"flex-direction"),r(" \u4E0E "),s("kbd",null,"flex-wrap"),r(" \u7684\u7B80\u5199\u5F62\u5F0F")],-1),Hb=s("p",null,[s("kbd",null,"flex-flow"),r(" \u6709 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"4"),s("mo",null,"\u2217"),s("mn",null,"3"),s("mo",null,"="),s("mn",null,"12")]),s("annotation",{encoding:"application/x-tex"},"4*3 = 12")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"4"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"\u2217"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"3"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"12")])])]),r(" \u79CD\u7EC4\u5408\uFF0C\u4E0B\u9762\u6F14\u793A\u4E86\u56DB\u79CD"),s("kbd",null,"row wrap"),r("\u3001"),s("kbd",null,"row no-wrap"),r("\u3001"),s("kbd",null,"column wrap"),r("\u3001"),s("kbd",null,"column no-wrap")],-1),qb={grid:"~ cols-2 gap-4"},Vb={grid:"~ rows-2 gap-2"},Wb=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".container"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"width"),s("span",{class:"token punctuation"},":"),r(" 400px"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"flex-flow"),s("span",{class:"token punctuation"},":"),r(" row wrap"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),Kb=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".container"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"width"),s("span",{class:"token punctuation"},":"),r(" 400px"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"flex-flow"),s("span",{class:"token punctuation"},":"),r(" row nowrap"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),zb={grid:"~ cols-2 gap-2"},Ub=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".container"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"height"),s("span",{class:"token punctuation"},":"),r(" 400px"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"flex-flow"),s("span",{class:"token punctuation"},":"),r(" column wrap"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),Yb=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".container"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"height"),s("span",{class:"token punctuation"},":"),r(" 400px"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"flex-flow"),s("span",{class:"token punctuation"},":"),r(" column nowrap"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),Zb={__name:"8",setup(e){const t={};return V(U),(n,a)=>{const o=ct,l=Ze,i=Mt;return E(),X(Ye,Ce(Ee(t)),{default:O(()=>[Bb,Db,Hb,s("div",qb,[s("div",Vb,[_(i,null,{default:O(()=>[s("div",null,[_(o,te({},{ranges:[""]}),{default:O(()=>[Wb]),_:1},16),_(l,{counts:5,style:{width:"400px",flexFlow:"row wrap"}})])]),_:1}),_(i,null,{default:O(()=>[s("div",null,[_(o,te({},{ranges:[""]}),{default:O(()=>[Kb]),_:1},16),_(l,{counts:5,style:{width:"400px",flexFlow:"row nowrap"}})])]),_:1})]),s("div",zb,[_(i,null,{default:O(()=>[s("div",null,[_(o,te({},{ranges:[""]}),{default:O(()=>[Ub]),_:1},16),_(l,{counts:5,style:{height:"400px",flexFlow:"column wrap"}})])]),_:1}),_(i,null,{default:O(()=>[s("div",null,[_(o,te({},{ranges:[""]}),{default:O(()=>[Yb]),_:1},16),_(l,{counts:5,style:{height:"400px",flexFlow:"column nowrap"}})])]),_:1})])])]),_:1},16)}}},Gb=s("h1",null,"jusitify-content",-1),Xb=s("p",null,"\u63A7\u5236\u5B50\u9879\u5728\u4E3B\u8F74\u4E0A\u7684\u5BF9\u9F50",-1),Qb=s("table",null,[s("thead",null,[s("tr",null,[s("th"),s("th"),s("th")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("kbd",null,"flex-start")]),s("td",null,[s("kbd",null,"flex-end")]),s("td",null,[s("kbd",null,"center")])]),s("tr",null,[s("td",null,[s("kbd",null,"space-between")]),s("td",null,[s("kbd",null,"space-around")]),s("td",null,[s("kbd",null,"space-evenly")])])])],-1),Jb={class:"mt-13"},ey=s("kbd",null,"flex-start:",-1),ty=s("br",null,null,-1),ny=s("br",null,null,-1),sy={class:"mt-8"},ay=s("kbd",null,"flex-end:",-1),oy=s("br",null,null,-1),ly=s("br",null,null,-1),iy={__name:"9",setup(e){const t={layout:"image-right",image:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/justify-bg.18ryxf9vkfa8.jpeg"};return V(U),(n,a)=>{const o=Ze,l=Mt;return E(),X(aa,Ce(Ee(t)),{default:O(()=>[Gb,Xb,s("div",null,[Qb,_(l,null,{default:O(()=>[s("div",Jb,[ey,ty,ny,_(o,{counts:4,style:{justifyContent:"flex-start"}})])]),_:1}),_(l,null,{default:O(()=>[s("div",sy,[ay,oy,ly,_(o,{counts:4,style:{justifyContent:"flex-end"}})])]),_:1})])]),_:1},16)}}},ry=s("h1",null,"justify-content(\u7EED)",-1),cy={class:"grid grid-cols-2 gap-30"},uy=s("kbd",null,"center:",-1),py=s("br",null,null,-1),dy=s("br",null,null,-1),fy=s("kbd",null,"space-between:",-1),hy=s("br",null,null,-1),my=s("br",null,null,-1),gy=s("kbd",null,"space-around:",-1),vy=s("br",null,null,-1),_y=s("br",null,null,-1),ky=s("kbd",null,"space-evenly:",-1),xy=s("br",null,null,-1),by=s("br",null,null,-1),yy={__name:"10",setup(e){const t={};return V(U),(n,a)=>{const o=Ze,l=Mt;return E(),X(Ye,Ce(Ee(t)),{default:O(()=>[ry,s("div",cy,[_(l,null,{default:O(()=>[s("div",null,[uy,py,dy,_(o,{counts:4,style:{justifyContent:"center"}})])]),_:1}),_(l,null,{default:O(()=>[s("div",null,[fy,hy,my,_(o,{counts:4,style:{justifyContent:"space-between"}})])]),_:1}),_(l,null,{default:O(()=>[s("div",null,[gy,vy,_y,_(o,{counts:4,style:{justifyContent:"space-around"}})])]),_:1}),_(l,null,{default:O(()=>[s("div",null,[ky,xy,by,_(o,{counts:4,style:{justifyContent:"space-evenly"}})])]),_:1})])]),_:1},16)}}},wy=s("h1",null,"align-items",-1),$y=s("p",null,"\u63A7\u5236\u5B50\u9879\u5728\u526F\u8F74\u4E0A\u7684\u5BF9\u9F50",-1),Sy=s("table",null,[s("thead",null,[s("tr",null,[s("th"),s("th"),s("th")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("kbd",null,"stretch")]),s("td",null,[s("kbd",null,"flex-start")]),s("td",null,[s("kbd",null,"flex-end")])]),s("tr",null,[s("td",null,[s("kbd",null,"center")]),s("td",null,[s("kbd",null,"baseline")]),s("td")])])],-1),Ey={grid:"~ cols-2 gap-20",class:"mt-4"},Oy=s("kbd",null,"stretch:",-1),Cy=s("br",null,null,-1),Iy=s("br",null,null,-1),Fy=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".container"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"display"),s("span",{class:"token punctuation"},":"),r(" flex"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"height"),s("span",{class:"token punctuation"},":"),r(" 100px"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"align-items"),s("span",{class:"token punctuation"},":"),r(" stretch"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token selector"},".item"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"width"),s("span",{class:"token punctuation"},":"),r(" 100px"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"height"),s("span",{class:"token punctuation"},":"),r(" auto"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),Py=s("kbd",null,"stretch:",-1),Ty=s("br",null,null,-1),Ay=s("br",null,null,-1),jy=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".container"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"display"),s("span",{class:"token punctuation"},":"),r(" flex"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"height"),s("span",{class:"token punctuation"},":"),r(" 100px"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"align-items"),s("span",{class:"token punctuation"},":"),r(" stretch"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token selector"},".item"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"width"),s("span",{class:"token punctuation"},":"),r(" 100px"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"height"),s("span",{class:"token punctuation"},":"),r(" 100px"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),My={__name:"11",setup(e){const t={};return V(U),(n,a)=>{const o=ct,l=Ze,i=Mt;return E(),X(Ye,Ce(Ee(t)),{default:O(()=>[wy,$y,Sy,s("div",Ey,[_(i,null,{default:O(()=>[s("div",null,[r(" \u5B50\u9879\u4E0D\u7ED9\u5B9A\u9AD8\u5EA6\uFF0C"),Oy,Cy,Iy,_(o,te({},{ranges:["2-3,8"]}),{default:O(()=>[Fy]),_:1},16),_(l,{counts:4,style:{height:"150px"},itemStyle:{height:"auto"}})])]),_:1}),_(i,null,{default:O(()=>[s("div",null,[r(" \u5B50\u9879\u7ED9\u5B9A\u9AD8\u5EA6\uFF0C"),Py,Ty,Ay,_(o,te({},{ranges:["2-3,8"]}),{default:O(()=>[jy]),_:1},16),_(l,{counts:4,style:{height:"150px"}})])]),_:1})])]),_:1},16)}}},Ly=s("h1",null,"align-items(\u7EED)",-1),Ry={grid:"~ cols-2 gap-2"},Ny=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".container"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"width"),s("span",{class:"token punctuation"},":"),r(" 500px"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"height"),s("span",{class:"token punctuation"},":"),r(" 150px"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"align-items"),s("span",{class:"token punctuation"},":"),r(" flex-start"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),By=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".container"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"width"),s("span",{class:"token punctuation"},":"),r(" 500px"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"height"),s("span",{class:"token punctuation"},":"),r(" 150px"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"align-items"),s("span",{class:"token punctuation"},":"),r(" flex-end"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),Dy=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".container"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token property"},"width"),s("span",{class:"token punctuation"},":"),r(" 500px"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token property"},"height"),s("span",{class:"token punctuation"},":"),r(" 150px"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token property"},"align-items"),s("span",{class:"token punctuation"},":"),r(" center"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),Hy=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".container"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"width"),s("span",{class:"token punctuation"},":"),r(" 500px"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"height"),s("span",{class:"token punctuation"},":"),r(" 150px"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"align-items"),s("span",{class:"token punctuation"},":"),r(" baseline"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token selector"},".item1"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"margin-top"),s("span",{class:"token punctuation"},":"),r(" 20px"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),qy={__name:"12",setup(e){const t={};return V(U),(n,a)=>{const o=ct,l=Ze,i=Mt;return E(),X(Ye,Ce(Ee(t)),{default:O(()=>[Ly,s("div",Ry,[_(i,null,{default:O(()=>[s("div",null,[_(o,te({},{ranges:[""]}),{default:O(()=>[Ny]),_:1},16),_(l,{counts:4,containerStyle:{width:"500px",height:"150px",alignItems:"flex-start"}})])]),_:1}),_(i,null,{default:O(()=>[s("div",null,[_(o,te({},{ranges:[""]}),{default:O(()=>[By]),_:1},16),_(l,{counts:4,containerStyle:{width:"500px",height:"150px",alignItems:"flex-end"}})])]),_:1}),_(i,null,{default:O(()=>[s("div",null,[_(o,te({},{ranges:[""]}),{default:O(()=>[Dy]),_:1},16),_(l,{counts:4,containerStyle:{width:"500px",height:"150px",alignItems:"center"}})])]),_:1}),_(i,null,{default:O(()=>[s("div",null,[_(o,te({},{ranges:[""]}),{default:O(()=>[Hy]),_:1},16),_(l,{counts:4,containerStyle:{width:"500px",height:"150px",alignItems:"baseline"},itemStyle:{width:"100px",fontSize:"10px",justifyContent:"flex-start",alignItems:"stretch"},itemStyles:[{height:"50px",marginTop:"20px"},{height:"70px"},{height:"120px"},{height:"100px"}],itemContents:["Hello World!","Hello World!","Hello World!","Hello World!"]})])]),_:1})])]),_:1},16)}}},Vy=s("h1",null,"align-content",-1),Wy=s("p",null,"\u5177\u6709\u591A\u884C\u60C5\u51B5\u4E0B\uFF0C\u5B50\u9879\u5728\u526F\u8F74\u4E0A\u7684\u5BF9\u9F50",-1),Ky=s("table",null,[s("thead",null,[s("tr",null,[s("th"),s("th"),s("th")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("kbd",null,"stretch")]),s("td",null,[s("kbd",null,"flex-start")]),s("td",null,[s("kbd",null,"flex-end")])]),s("tr",null,[s("td",null,[s("kbd",null,"center")]),s("td",null,[s("kbd",null,"space-between")]),s("td",null,[s("kbd",null,"space-around")])]),s("tr",null,[s("td",null,[s("kbd",null,"space-evenly")]),s("td"),s("td")])])],-1),zy={grid:"~ cols-2 gap-2",class:"mt-4"},Uy=s("kbd",null,"stretch:",-1),Yy=s("kbd",null,"stretch:",-1),Zy={__name:"13",setup(e){const t={};return V(U),(n,a)=>{const o=Ze,l=Mt;return E(),X(Ye,Ce(Ee(t)),{default:O(()=>[Vy,Wy,Ky,s("div",zy,[_(l,null,{default:O(()=>[s("div",null,[r(" \u4E0D\u7ED9\u5B9A\u9AD8\u5EA6\uFF0C"),Uy,_(o,{containerStyle:{width:"400px",height:"250px",flexWrap:"wrap"},counts:6,itemStyle:{height:"auto"}})])]),_:1}),_(l,null,{default:O(()=>[s("div",null,[r(" \u7ED9\u5B9A\u9AD8\u5EA6\uFF0C"),Yy,_(o,{containerStyle:{width:"400px",height:"250px",flexWrap:"wrap"},counts:6})])]),_:1})])]),_:1},16)}}},Gy=s("h1",null,"align-content(\u7EED)",-1),Xy={grid:"~ cols-2 gap-2"},Qy=s("kbd",null,"flex-start:",-1),Jy=s("kbd",null,"flex-end:",-1),ew=s("kbd",null,"center:",-1),tw=s("kbd",null,"space-between:",-1),nw={__name:"14",setup(e){const t={};return V(U),(n,a)=>{const o=Ze,l=Mt;return E(),X(Ye,Ce(Ee(t)),{default:O(()=>[Gy,s("div",Xy,[_(l,null,{default:O(()=>[s("div",null,[Qy,_(o,{containerStyle:{width:"400px",height:"250px",flexWrap:"wrap",alignContent:"flex-start",marginTop:"10px"},counts:6})])]),_:1}),_(l,null,{default:O(()=>[s("div",null,[Jy,_(o,{containerStyle:{width:"400px",height:"250px",flexWrap:"wrap",alignContent:"flex-end",marginTop:"10px"},counts:6})])]),_:1}),_(l,null,{default:O(()=>[s("div",null,[ew,_(o,{containerStyle:{width:"400px",height:"250px",flexWrap:"wrap",alignContent:"center",marginTop:"10px"},counts:6})])]),_:1}),_(l,null,{default:O(()=>[s("div",null,[tw,_(o,{containerStyle:{width:"400px",height:"250px",flexWrap:"wrap",alignContent:"space-between",marginTop:"10px"},counts:6})])]),_:1})])]),_:1},16)}}},sw=s("h1",null,"align-content(\u7EED)",-1),aw=s("kbd",null,"space-around:",-1),ow=s("kbd",null,"space-evenly:",-1),lw={__name:"15",setup(e){const t={layout:"image-right",image:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/content-right.4qbnxs62dl40.jpeg"};return V(U),(n,a)=>{const o=Ze,l=Mt;return E(),X(aa,Ce(Ee(t)),{default:O(()=>[sw,_(l,null,{default:O(()=>[s("div",null,[aw,_(o,{containerStyle:{width:"400px",height:"250px",flexWrap:"wrap",alignContent:"space-around",margin:"10px 0"},counts:6})])]),_:1}),_(l,null,{default:O(()=>[s("div",null,[ow,_(o,{containerStyle:{width:"400px",height:"250px",flexWrap:"wrap",alignContent:"space-evenly",marginTop:"10px"},counts:6})])]),_:1})]),_:1},16)}}},iw=s("h1",null,"Item \u4E0A\u7684\u5C5E\u6027",-1),rw={__name:"16",setup(e){const t={layout:"cover",background:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/content-right.4qbnxs62dl40.jpeg"};return V(U),(n,a)=>(E(),X(sa,Ce(Ee(t)),{default:O(()=>[iw]),_:1},16))}},cw=s("h1",null,"flex-grow",-1),uw=s("p",null,"\u5F53\u5BB9\u5668\u6709\u5269\u4F59\u7A7A\u95F4\u65F6\uFF0C\u5B50\u9879\u5982\u4F55\u5E73\u5206\u5269\u4F59\u7A7A\u95F4",-1),pw=s("p",null,[r("\u9ED8\u8BA4 "),s("kbd",null,"flex-grow"),r(" \u4E3A 0")],-1),dw={grid:"~ cols-2 gap-2"},fw=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".item"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"flex-grow"),s("span",{class:"token punctuation"},":"),r(" 0"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),hw=s("br",null,null,-1),mw=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".item"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"flex-grow"),s("span",{class:"token punctuation"},":"),r(" 1"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),gw={m:"l-8"},vw=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".item"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"width"),s("span",{class:"token punctuation"},":"),r(" 0"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"flex-grow"),s("span",{class:"token punctuation"},":"),r(" 1"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token selector"},".item3"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"flex-grow"),s("span",{class:"token punctuation"},":"),r(" 2"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),_w={__name:"17",setup(e){const t={};return V(U),(n,a)=>{const o=ct,l=Ze,i=gn;return E(),X(Ye,Ce(Ee(t)),{default:O(()=>[cw,uw,pw,s("div",dw,[s("div",null,[_(i,null,{default:O(()=>[_(o,te({},{ranges:[""]}),{default:O(()=>[fw]),_:1},16),_(l,{counts:4})]),_:1}),hw,_(i,null,{default:O(()=>[_(o,te({},{ranges:[""]}),{default:O(()=>[mw]),_:1},16),_(l,{counts:4,itemStyle:{flexGrow:1}})]),_:1})]),s("div",gw,[_(i,null,{default:O(()=>[_(o,te({},{ranges:[""]}),{default:O(()=>[vw]),_:1},16),_(l,{counts:4,itemStyle:{flexGrow:1,width:0},itemStyles:[{},{},{flexGrow:2}]})]),_:1})])])]),_:1},16)}}},kw=s("h1",null,"flex-shrink",-1),xw=s("p",null,"\u5F53\u5BB9\u5668\u7A7A\u95F4\u4E0D\u8DB3\u65F6\uFF0C\u5B50\u9879\u5982\u4F55\u6536\u7F29",-1),bw={grid:"~ cols-2 gap-2"},yw=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".container"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"width"),s("span",{class:"token punctuation"},":"),r(" 400px"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token selector"},".item"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"width"),s("span",{class:"token punctuation"},":"),r(" 100px"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"height"),s("span",{class:"token punctuation"},":"),r(" 100px"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),ww=s("p",{style:{"line-height":"1.4"}},[r(" \u5F53\u7A7A\u95F4\u4E0D\u8DB3\u65F6\uFF0C\u6BCF\u4E2A\u5B50\u9879\u9ED8\u8BA4\u4F1A\u6536\u7F29\u6765\u9002\u5E94\u5BB9\u5668\u7684\u5927\u5C0F\u3002\u5982\u4F55\u6536\u7F29\uFF0C\u7531 "),s("kbd",null,"flex-shrink"),r(" \u6765\u51B3\u5B9A\uFF0C\u9ED8\u8BA4\u6BCF\u4E2A\u5B50\u9879\u7684 "),s("kbd",null,"flex-shrink"),r(" \u7684\u503C\u4E3A "),s("kbd",null,"1"),r("\uFF0C\u8BE5\u6570\u503C\u7684\u4F5C\u7528\u540C "),s("kbd",null,"flex-grow"),r("\uFF0C\u8868\u793A\u5360\u636E\u7684\u4EFD\u6570\u3002")],-1),$w=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".item"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"flex-shrink"),s("span",{class:"token punctuation"},":"),r(" 0"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token selector"},".item4"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"flex-shrink"),s("span",{class:"token punctuation"},":"),r(" 1"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token selector"},".item5"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"flex-shrink"),s("span",{class:"token punctuation"},":"),r(" 1"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),Sw=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".item"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"flex-shrink"),s("span",{class:"token punctuation"},":"),r(" 0"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),Ew={__name:"18",setup(e){const t={};return V(U),(n,a)=>{const o=ct,l=Ze,i=gn;return E(),X(Ye,Ce(Ee(t)),{default:O(()=>[kw,xw,s("div",bw,[s("div",null,[_(i,null,{default:O(()=>[_(o,te({},{ranges:[""]}),{default:O(()=>[yw]),_:1},16),_(l,{containerStyle:{width:"400px"}}),ww]),_:1})]),s("div",null,[_(i,null,{default:O(()=>[_(o,te({},{ranges:[""]}),{default:O(()=>[$w]),_:1},16),_(l,{containerStyle:{width:"400px"},itemStyle:{flexShrink:0},itemStyles:[{},{},{},{flexShrink:1},{flexShrink:1}]}),_(o,te({},{ranges:[""]}),{default:O(()=>[Sw]),_:1},16),_(l,{containerStyle:{width:"400px"},itemStyle:{flexShrink:0}})]),_:1})])])]),_:1},16)}}};const Jt=e=>(Ja("data-v-ef6353f1"),e=e(),eo(),e),Ow=Jt(()=>s("h1",null,"flex-basis",-1)),Cw=Jt(()=>s("p",null,"\u89C4\u5B9A\u5B50\u9879\u5728\u4E3B\u8F74\u4E0A\u7684\u5927\u5C0F",-1)),Iw={grid:"~ cols-2 gap-2"},Fw=Jt(()=>s("p",{style:{"line-height":"1.4"}},[r("\u4E4B\u524D\u6211\u4EEC\u4E00\u76F4\u4F7F\u7528 "),s("kbd",null,"width"),r(" \u6216\u8005 "),s("kbd",null,"height"),r(" \u6765\u89C4\u5B9A\u5B50\u9879\u5728\u4E3B\u8F74\u4E0A\u7684\u5927\u5C0F\uFF0C\u4F46\u662F\u5176\u5B9E\u771F\u6B63\u89C4\u5B9A\u5B50\u9879\u5927\u5C0F\u7684\u5C5E\u6027\u662F "),s("kbd",null,"flex-basis"),r("\uFF0C"),s("kbd",null,"width"),r(" \u548C "),s("kbd",null,"height"),r(" \u53EA\u662F\u4E3A "),s("kbd",null,"flex-basis"),r(" \u4F5C\u4E3A\u4E00\u4E2A\u53C2\u8003\u3002")],-1)),Pw=Jt(()=>s("blockquote",null,[s("p",null,[r("\u5B50\u9879\u7684\u5B9E\u9645\u5927\u5C0F\u53EF\u80FD\u4E0E "),s("kbd",null,"flex-basis"),r(" \u8BBE\u7F6E\u7684\u5927\u5C0F\u4E0D\u540C\uFF0C"),s("kbd",null,"flex-basis"),r("\u89C4\u5B9A\u7684\u53EA\u662F\u5B50\u9879\u5728\u4E3B\u8F74\u4E0A\u7684"),s("b",{style:{color:"#ce5577"}},"\u521D\u59CB(\u57FA\u672C)"),r("\u5927\u5C0F\uFF0C"),s("kbd",null,"flex-grow"),r(" \u4E0E "),s("kbd",null,"flex-shrink"),r(" \u53EF\u80FD\u4F1A\u5BF9\u5B50\u9879\u8FDB\u884C\u4F38\u7F29\uFF0C\u5BFC\u81F4\u5B9E\u9645\u5927\u5C0F\u4E0E\u8BBE\u7F6E\u7684\u5927\u5C0F\u4E0D\u540C\u3002")])],-1)),Tw=Jt(()=>s("p",null,[s("kbd",null,"flex-basis"),r(" \u7684\u9ED8\u8BA4\u503C\u4E3A "),s("kbd",null,"auto"),r("\uFF0C\u5373\u5176\u5927\u5C0F\u7531\u5185\u5BB9\u7684\u5927\u5C0F\u786E\u5B9A\uFF0C\u5F53\u89C4\u5B9A\u4E86\u76D2\u5B50\u7684\u5927\u5C0F\u65F6\uFF0C\u90A3\u4E48 "),s("kbd",null,"flex-basis"),r(" \u7684\u53D6\u503C\u5C31\u7B49\u4E8E "),s("kbd",null,"width"),r(" \u6216\u8005 "),s("kbd",null,"height"),r("\u3002")],-1)),Aw={m:"l-16"},jw=Jt(()=>s("p",null,[r("\u5982\u679C\u6211\u4EEC\u624B\u52A8\u8BBE\u7F6E\u4E86 "),s("kbd",null,"flex-basis"),r(" \u7684\u5927\u5C0F\uFF0C\u90A3\u4E48 "),s("kbd",null,"width"),r(" \u7684\u53D6\u503C\u5C06\u4F1A\u88AB\u5FFD\u7565")],-1)),Mw=Jt(()=>s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".item"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"width"),s("span",{class:"token punctuation"},":"),r(" 100px"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"flex-basis"),s("span",{class:"token punctuation"},":"),r(" 50px"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1)),Lw=Jt(()=>s("p",null,[r("\u8FD9\u91CC\u6709\u4E00\u70B9\u9700\u8981\u6CE8\u610F\uFF0C\u867D\u7136 "),s("kbd",null,"flex-basis"),r(" \u7684\u4F18\u5148\u7EA7\u9AD8\u4E8E "),s("kbd",null,"width"),r("(\u5047\u8BBE\u4E3B\u8F74\u4E3A\u6A2A\u5411)\uFF0C\u4F46\u662F "),s("kbd",null,"flex-basis"),r(" \u7684\u53D6\u503C\u53C8\u4F1A\u53D7\u5230 "),s("kbd",null,"min-width"),r(" \u548C "),s("kbd",null,"max-width"),r(" \u7684\u7EA6\u675F\u3002")],-1)),Rw=Jt(()=>s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".item"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"flex-basis"),s("span",{class:"token punctuation"},":"),r(" 50px"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"min-width"),s("span",{class:"token punctuation"},":"),r(" 100px"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1)),Nw={__name:"19",setup(e){const t={};return V(U),(n,a)=>{const o=Ze,l=gn,i=ct;return E(),X(Ye,Ce(Ee(t)),{default:O(()=>[Ow,Cw,s("div",Iw,[s("div",null,[_(l,null,{default:O(()=>[Fw,Pw,Tw,_(o)]),_:1})]),s("div",Aw,[_(l,null,{default:O(()=>[jw,_(i,te({},{ranges:[""]}),{default:O(()=>[Mw]),_:1},16),_(o,{itemStyle:{flexBasis:"50px"}}),Lw,_(i,te({},{ranges:[""]}),{default:O(()=>[Rw]),_:1},16),_(o,{itemStyle:{flexBasis:"50px",minWidth:"100px"}})]),_:1})])])]),_:1},16)}}},Bw=Wt(Nw,[["__scopeId","data-v-ef6353f1"]]),Dw=s("h1",null,"flex",-1),Hw=s("p",null,[r("flex \u662F "),s("kbd",null,"flex-grow"),r("\u3001"),s("kbd",null,"flex-shrink"),r("\u3001"),s("kbd",null,"flex-basis"),r(" \u7684\u7B80\u5199\u5F62\u5F0F")],-1),qw=s("p",null,[s("kbd",null,"flex"),r(" \u7684\u53D6\u503C\u5982\u4E0B")],-1),Vw=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token property"},"flex"),s("span",{class:"token punctuation"},":"),r(" flex-grow flex-shrink flex-basis"),s("span",{class:"token punctuation"},";")])])],-1),Ww=s("p",null,[r("\u540E\u9762\u4E24\u4E2A\u53D6\u503C\u4E3A\u53EF\u9009\uFF0C\u9ED8\u8BA4\u503C\u4E3A "),s("kbd",null,"flex: 0 1 auto;"),r("\u3002")],-1),Kw=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".item"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"width"),s("span",{class:"token punctuation"},":"),r(" 0"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"flex"),s("span",{class:"token punctuation"},":"),r(" 1"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),zw=s("p",null,[s("kbd",null,"flex"),r(" \u6709\u4E24\u4E2A\u5FEB\u6377\u53D6\u503C "),s("kbd",null,"auto(1 1 auto)"),r(" \u548C "),s("kbd",null,"none(0 0 auto)"),r("\u3002")],-1),Uw=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".item"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"flex"),s("span",{class:"token punctuation"},":"),r(" none"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),Yw=s("p",null,"\u63A8\u8350\u4F7F\u7528\u7B80\u5199\u5C5E\u6027\u800C\u4E0D\u662F\u5206\u5F00\u5199\u4E09\u4E2A\u5C5E\u6027\u3002",-1),Zw={__name:"20",setup(e){const t={layout:"image-right",image:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/flexitem-bg.hcg0d0nlcm.jpeg"};return V(U),(n,a)=>{const o=ct,l=Ze;return E(),X(aa,Ce(Ee(t)),{default:O(()=>[Dw,Hw,qw,_(o,te({},{ranges:[""]}),{default:O(()=>[Vw]),_:1},16),Ww,_(o,te({},{ranges:[""]}),{default:O(()=>[Kw]),_:1},16),_(l,{itemStyle:{flex:1,width:0}}),zw,_(o,te({},{ranges:[""]}),{default:O(()=>[Uw]),_:1},16),Yw]),_:1},16)}}},Gw={class:"grid grid-cols-2 w-full h-full"},Xw=ve({__name:"image-left",props:{image:{type:String},class:{type:String}},setup(e){const t=e;V(U);const n=F(()=>$p(t.image));return(a,o)=>(E(),H("div",Gw,[s("div",{class:"w-full w-full",style:De(w(n))},null,4),s("div",{class:Me(["slidev-layout default",t.class])},[Pt(a.$slots,"default")],2)]))}}),Qw=s("h1",null,"order",-1),Jw=s("p",null,"\u63A7\u5236\u5B50\u9879\u7684\u6392\u5217\u987A\u5E8F",-1),e2=s("p",null,[r("\u5B50\u9879\u5728\u5BB9\u5668\u4E2D\u7684\u6392\u5E8F\u662F\u6839\u636E DOM \u7684\u5148\u540E\u987A\u5E8F\u6765\u7684\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 "),s("kbd",null,"order"),r(" \u5C5E\u6027\u6765\u6539\u53D8\u5148\u540E\u987A\u5E8F\uFF0C\u5B83\u7684\u53D6\u503C\u4E3A\u4E00\u4E2A\u6570\u5B57\uFF0C\u503C\u8D8A\u5C0F\u8D8A\u9760\u524D\uFF0C\u9ED8\u8BA4\u53D6\u503C\u4E3A 0.")],-1),t2=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".item1:"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"order"),s("span",{class:"token punctuation"},":"),r(" 1"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token selector"},".item3"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"order"),s("span",{class:"token punctuation"},":"),r(" -1"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),n2={__name:"21",setup(e){const t={layout:"image-left",image:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/order-bg.49niyspoqso0.jpeg"};return V(U),(n,a)=>{const o=ct,l=Ze;return E(),X(Xw,Ce(Ee(t)),{default:O(()=>[Qw,Jw,e2,_(o,te({},{ranges:[""]}),{default:O(()=>[t2]),_:1},16),_(l,{itemStyles:[{order:1},{},{order:-1}]})]),_:1},16)}}},s2=s("h1",null,"align-self",-1),a2=s("p",null,"\u63A7\u5236\u5B50\u9879\u5728\u526F\u8F74\u4E0A\u7684\u5BF9\u9F50\u65B9\u5F0F",-1),o2=s("p",null,[r("\u4E4B\u524D\u6211\u4EEC\u4ECB\u7ECD\u8FC7 "),s("kbd",null,"align-items"),r(" \u4E0E "),s("kbd",null,"align-content"),r(" \u5C5E\u6027\uFF0C\u5B83\u4EEC\u90FD\u662F\u5199\u5728\u5BB9\u5668\u4E0A\u7684\u5C5E\u6027\uFF0C\u63A7\u5236\u4E00\u884C\u6216\u8005\u591A\u884C\u5728\u526F\u8F74\u4E0A\u7684\u5BF9\u9F50\u65B9\u5F0F\u3002\u800C "),s("kbd",null,"align-self"),r(" \u63A7\u5236\u7684\u662F\u67D0\u4E2A\u5B50\u9879\u5728\u526F\u8F74\u4E0A\u7684\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u5B83\u5141\u8BB8\u67D0\u4E2A\u5B50\u9879\u4E0E\u5176\u4ED6\u5B50\u9879\u6709\u4E0D\u540C\u7684\u5BF9\u9F50\u65B9\u5F0F\u3002")],-1),l2=s("p",null,[r("\u5B83\u7684\u53D6\u503C\u540C "),s("kbd",null,"align-items"),r("\uFF0C\u9ED8\u8BA4\u53D6\u503C\u4E3A "),s("kbd",null,"auto"),r("\uFF0C\u8868\u793A\u7EE7\u627F\u7236\u5143\u7D20\u7684 "),s("kbd",null,"align-items"),r(" \u5C5E\u6027\u3002")],-1),i2=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".container"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"align-items"),s("span",{class:"token punctuation"},":"),r(" flex-start"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token selector"},".item2"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"align-self"),s("span",{class:"token punctuation"},":"),r(" center"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token selector"},".item4"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"align-self"),s("span",{class:"token punctuation"},":"),r(" flex-end"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),r2={__name:"22",setup(e){const t={layout:"image-right",image:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/alignSelf-bg.54op6h5ecqo0.jpeg"};return V(U),(n,a)=>{const o=ct,l=Ze,i=gn;return E(),X(aa,Ce(Ee(t)),{default:O(()=>[s2,a2,_(i,null,{default:O(()=>[o2,l2,_(o,te({},{ranges:[""]}),{default:O(()=>[i2]),_:1},16),_(l,{containerStyle:{height:"200px",alignItems:"flex-start"},itemStyles:[{},{alignSelf:"center"},{},{alignSelf:"flex-end"}]})]),_:1})]),_:1},16)}}},c2=s("h1",null,"\u5B9E\u6218\uFF1A\u9AB0\u5B50",-1),u2={__name:"23",setup(e){const t={layout:"cover",background:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/prac-bg.3lqgj1bku2s0.jpeg"};return V(U),(n,a)=>(E(),X(sa,Ce(Ee(t)),{default:O(()=>[c2]),_:1},16))}};const p2={class:"container"},d2=Zl('<div class="column" data-v-8333be4f><div class="pip" data-v-8333be4f></div><div class="pip" data-v-8333be4f></div><div class="pip" data-v-8333be4f></div></div><div class="column" data-v-8333be4f><div class="pip" data-v-8333be4f></div><div class="pip" data-v-8333be4f></div><div class="pip" data-v-8333be4f></div></div>',2),f2=[d2],h2={__name:"Dice6",setup(e){return V(U),(t,n)=>(E(),H("div",p2,f2))}},Sp=Wt(h2,[["__scopeId","data-v-8333be4f"]]);const m2={class:"container"},g2=Zl('<div class="column" data-v-82221a22><div class="pip" data-v-82221a22></div><div class="pip" data-v-82221a22></div></div><div class="column" data-v-82221a22><div class="pip" data-v-82221a22></div></div><div class="column" data-v-82221a22><div class="pip" data-v-82221a22></div><div class="pip" data-v-82221a22></div></div>',3),v2=[g2],_2={__name:"Dice5",setup(e){return V(U),(t,n)=>(E(),H("div",m2,v2))}},Ep=Wt(_2,[["__scopeId","data-v-82221a22"]]);const k2={class:"container"},x2=Zl('<div class="column" data-v-e2a77993><div class="pip" data-v-e2a77993></div><div class="pip" data-v-e2a77993></div></div><div class="column" data-v-e2a77993><div class="pip" data-v-e2a77993></div><div class="pip" data-v-e2a77993></div></div>',2),b2=[x2],y2={__name:"Dice4",setup(e){return V(U),(t,n)=>(E(),H("div",k2,b2))}},Op=Wt(y2,[["__scopeId","data-v-e2a77993"]]);const oi=e=>(Ja("data-v-33c4f0e7"),e=e(),eo(),e),w2={class:"container"},$2=oi(()=>s("div",{class:"pip"},null,-1)),S2=oi(()=>s("div",{class:"pip"},null,-1)),E2=oi(()=>s("div",{class:"pip"},null,-1)),O2=[$2,S2,E2],C2={__name:"Dice3",setup(e){return V(U),(t,n)=>(E(),H("div",w2,O2))}},Cp=Wt(C2,[["__scopeId","data-v-33c4f0e7"]]);const Ip=e=>(Ja("data-v-cff13b20"),e=e(),eo(),e),I2={class:"container"},F2=Ip(()=>s("div",{class:"pip"},null,-1)),P2=Ip(()=>s("div",{class:"pip"},null,-1)),T2=[F2,P2],A2={__name:"Dice2",setup(e){return V(U),(t,n)=>(E(),H("div",I2,T2))}},Fp=Wt(A2,[["__scopeId","data-v-cff13b20"]]);const j2=e=>(Ja("data-v-57f31fca"),e=e(),eo(),e),M2={class:"container"},L2=j2(()=>s("div",{class:"pip"},null,-1)),R2=[L2],N2={__name:"Dice1",setup(e){return V(U),(t,n)=>(E(),H("div",M2,R2))}},Pp=Wt(N2,[["__scopeId","data-v-57f31fca"]]),B2=s("h1",null,"\u6F14\u793A",-1),D2={grid:"~ cols-3 gap-20",m:"t-12"},H2={__name:"24",setup(e){const t={};return V(U),(n,a)=>{const o=Pp,l=Fp,i=Cp,c=Op,u=Ep,p=Sp;return E(),X(Ye,Ce(Ee(t)),{default:O(()=>[B2,s("div",D2,[_(o),_(l),_(i),_(c),_(u),_(p)])]),_:1},16)}}},q2=s("h1",null,"\u5177\u4F53\u5B9E\u73B0",-1),V2={grid:"~ cols-3 gap-2"},W2=s("br",null,null,-1),K2=s("br",null,null,-1),z2=s("br",null,null,-1),U2=s("pre",{class:"slidev-code language-html"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),r("div")]),r(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),r("container"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")])]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),r("div")]),r(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),r("pip"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),r("div")]),s("span",{class:"token punctuation"},">")])]),r(`
`),s("span",{class:"line"},[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),r("div")]),s("span",{class:"token punctuation"},">")])])])],-1),Y2=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".container"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"display"),s("span",{class:"token punctuation"},":"),r(" flex"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"justify-content"),s("span",{class:"token punctuation"},":"),r(" center"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"align-items"),s("span",{class:"token punctuation"},":"),r(" center"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),Z2=s("br",null,null,-1),G2=s("br",null,null,-1),X2=s("br",null,null,-1),Q2=s("pre",{class:"slidev-code language-html"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),r("div")]),r(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),r("container"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")])]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),r("div")]),r(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),r("pip"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),r("div")]),s("span",{class:"token punctuation"},">")])]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),r("div")]),r(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),r("pip"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),r("div")]),s("span",{class:"token punctuation"},">")])]),r(`
`),s("span",{class:"line"},[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),r("div")]),s("span",{class:"token punctuation"},">")])])])],-1),J2=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".container"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"display"),s("span",{class:"token punctuation"},":"),r(" flex"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"justify-content"),s("span",{class:"token punctuation"},":"),r(" space-between"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token selector"},".pip:nth-child(2)"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"align-self"),s("span",{class:"token punctuation"},":"),r(" flex-end"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),e$=s("br",null,null,-1),t$=s("br",null,null,-1),n$=s("br",null,null,-1),s$=s("pre",{class:"slidev-code language-html"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),r("div")]),r(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),r("container"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")])]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),r("div")]),r(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),r("pip"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),r("div")]),s("span",{class:"token punctuation"},">")])]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),r("div")]),r(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),r("pip"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),r("div")]),s("span",{class:"token punctuation"},">")])]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),r("div")]),r(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),r("pip"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),r("div")]),s("span",{class:"token punctuation"},">")])]),r(`
`),s("span",{class:"line"},[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),r("div")]),s("span",{class:"token punctuation"},">")])])])],-1),a$=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".container"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"display"),s("span",{class:"token punctuation"},":"),r(" flex"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"justify-content"),s("span",{class:"token punctuation"},":"),r(" space-between"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token selector"},".pip:nth-child(2)"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"align-self"),s("span",{class:"token punctuation"},":"),r(" center"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token selector"},".pip:nth-child(3)"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"align-self"),s("span",{class:"token punctuation"},":"),r(" flex-end"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),o$={__name:"25",setup(e){const t={};return V(U),(n,a)=>{const o=Pp,l=ct,i=gn,c=Fp,u=Cp;return E(),X(Ye,Ce(Ee(t)),{default:O(()=>[q2,s("div",V2,[s("div",null,[_(o),W2,K2,z2,_(i,null,{default:O(()=>[_(l,te({},{ranges:[""]}),{default:O(()=>[U2]),_:1},16),_(l,te({},{ranges:[""]}),{default:O(()=>[Y2]),_:1},16)]),_:1})]),s("div",null,[_(c),Z2,G2,X2,_(i,null,{default:O(()=>[_(l,te({},{ranges:[""]}),{default:O(()=>[Q2]),_:1},16),_(l,te({},{ranges:[""]}),{default:O(()=>[J2]),_:1},16)]),_:1})]),s("div",null,[_(u),e$,t$,n$,_(i,null,{default:O(()=>[_(l,te({},{ranges:[""]}),{default:O(()=>[s$]),_:1},16),_(l,te({},{ranges:[""]}),{default:O(()=>[a$]),_:1},16)]),_:1})])])]),_:1},16)}}},l$={grid:"~ cols-3 gap-2"},i$=s("br",null,null,-1),r$=s("pre",{class:"slidev-code language-html"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),r("div")]),r(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),r("container"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")])]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),r("div")]),r(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),r("column"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")])]),r(`
`),s("span",{class:"line"},[r("    "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),r("div")]),r(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),r("pip"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),r("div")]),s("span",{class:"token punctuation"},">")])]),r(`
`),s("span",{class:"line"},[r("    "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),r("div")]),r(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),r("pip"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),r("div")]),s("span",{class:"token punctuation"},">")])]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),r("div")]),s("span",{class:"token punctuation"},">")])]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),r("div")]),r(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),r("column"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")])]),r(`
`),s("span",{class:"line"},[r("    "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),r("div")]),r(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),r("pip"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),r("div")]),s("span",{class:"token punctuation"},">")])]),r(`
`),s("span",{class:"line"},[r("    "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),r("div")]),r(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),r("pip"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),r("div")]),s("span",{class:"token punctuation"},">")])]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),r("div")]),s("span",{class:"token punctuation"},">")])]),r(`
`),s("span",{class:"line"},[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),r("div")]),s("span",{class:"token punctuation"},">")])])])],-1),c$=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".container"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"display"),s("span",{class:"token punctuation"},":"),r(" flex"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"justify-content"),s("span",{class:"token punctuation"},":"),r(" space-between"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token selector"},".column"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"display"),s("span",{class:"token punctuation"},":"),r(" flex"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"flex-direction"),s("span",{class:"token punctuation"},":"),r(" column"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"justify-content"),s("span",{class:"token punctuation"},":"),r(" space-between"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),u$=s("br",null,null,-1),p$={style:{transform:"scale(.98)","transform-origin":"left top"}},d$=s("pre",{class:"slidev-code language-html"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),r("div")]),r(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),r("container"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")])]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),r("div")]),r(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),r("column"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")])]),r(`
`),s("span",{class:"line"},[r("    "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),r("div")]),r(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),r("pip"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),r("div")]),s("span",{class:"token punctuation"},">")])]),r(`
`),s("span",{class:"line"},[r("    "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),r("div")]),r(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),r("pip"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),r("div")]),s("span",{class:"token punctuation"},">")])]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),r("div")]),s("span",{class:"token punctuation"},">")])]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),r("div")]),r(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),r("column"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")])]),r(`
`),s("span",{class:"line"},"    "),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),r("div")]),s("span",{class:"token punctuation"},">")])]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),r("div")]),r(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),r("column"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")])]),r(`
`),s("span",{class:"line"},[r("    "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),r("div")]),r(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),r("pip"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),r("div")]),s("span",{class:"token punctuation"},">")])]),r(`
`),s("span",{class:"line"},[r("    "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),r("div")]),r(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),r("pip"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),r("div")]),s("span",{class:"token punctuation"},">")])]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),r("div")]),s("span",{class:"token punctuation"},">")])]),r(`
`),s("span",{class:"line"},[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),r("div")]),s("span",{class:"token punctuation"},">")])])])],-1),f$=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".container"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"display"),s("span",{class:"token punctuation"},":"),r(" flex"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"justify-content"),s("span",{class:"token punctuation"},":"),r(" space-between"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token selector"},".column"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"display"),s("span",{class:"token punctuation"},":"),r(" flex"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"flex-direction"),s("span",{class:"token punctuation"},":"),r(" column"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"justify-content"),s("span",{class:"token punctuation"},":"),r(" space-between"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token selector"},".column:nth-child(2)"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"justify-content"),s("span",{class:"token punctuation"},":"),r(" center"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),h$=s("br",null,null,-1),m$=s("pre",{class:"slidev-code language-html"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),r("div")]),r(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),r("container"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")])]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),r("div")]),r(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),r("column"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")])]),r(`
`),s("span",{class:"line"},[r("    "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),r("div")]),r(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),r("pip"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),r("div")]),s("span",{class:"token punctuation"},">")])]),r(`
`),s("span",{class:"line"},[r("    "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),r("div")]),r(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),r("pip"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),r("div")]),s("span",{class:"token punctuation"},">")])]),r(`
`),s("span",{class:"line"},[r("    "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),r("div")]),r(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),r("pip"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),r("div")]),s("span",{class:"token punctuation"},">")])]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),r("div")]),s("span",{class:"token punctuation"},">")])]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),r("div")]),r(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),r("column"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")])]),r(`
`),s("span",{class:"line"},[r("    "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),r("div")]),r(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),r("pip"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),r("div")]),s("span",{class:"token punctuation"},">")])]),r(`
`),s("span",{class:"line"},[r("    "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),r("div")]),r(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),r("pip"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),r("div")]),s("span",{class:"token punctuation"},">")])]),r(`
`),s("span",{class:"line"},[r("    "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),r("div")]),r(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),r("pip"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),r("div")]),s("span",{class:"token punctuation"},">")])]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),r("div")]),s("span",{class:"token punctuation"},">")])]),r(`
`),s("span",{class:"line"},[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),r("div")]),s("span",{class:"token punctuation"},">")])])])],-1),g$=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".container"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"display"),s("span",{class:"token punctuation"},":"),r(" flex"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"justify-content"),s("span",{class:"token punctuation"},":"),r(" space-between"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token selector"},".column"),r(),s("span",{class:"token punctuation"},"{")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"display"),s("span",{class:"token punctuation"},":"),r(" flex"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"flex-direction"),s("span",{class:"token punctuation"},":"),r(" column"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[r("  "),s("span",{class:"token property"},"justify-content"),s("span",{class:"token punctuation"},":"),r(" space-between"),s("span",{class:"token punctuation"},";")]),r(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),v$={__name:"26",setup(e){const t={};return V(U),(n,a)=>{const o=Op,l=ct,i=gn,c=Ep,u=Sp;return E(),X(Ye,Ce(Ee(t)),{default:O(()=>[s("div",l$,[s("div",null,[_(o),i$,_(i,null,{default:O(()=>[_(l,te({},{ranges:[""]}),{default:O(()=>[r$]),_:1},16),_(l,te({},{ranges:[""]}),{default:O(()=>[c$]),_:1},16)]),_:1})]),s("div",null,[_(c),u$,s("div",p$,[_(i,null,{default:O(()=>[_(l,te({},{ranges:[""]}),{default:O(()=>[d$]),_:1},16),_(l,te({},{ranges:[""]}),{default:O(()=>[f$]),_:1},16)]),_:1})])]),s("div",null,[_(u),h$,_(i,null,{default:O(()=>[_(l,te({},{ranges:[""]}),{default:O(()=>[m$]),_:1},16),_(l,te({},{ranges:[""]}),{default:O(()=>[g$]),_:1},16)]),_:1})])])]),_:1},16)}}},_$=s("h1",null,"\u53C2\u8003\u94FE\u63A5",-1),k$=s("ul",null,[s("li",null,[s("a",{href:"https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html",target:"_blank",rel:"noopener"},"Flex \u5E03\u5C40\u6559\u7A0B\uFF1A\u8BED\u6CD5\u7BC7")]),s("li",null,[s("a",{href:"https://www.ruanyifeng.com/blog/2015/07/flex-examples.html",target:"_blank",rel:"noopener"},"Flex \u5E03\u5C40\u6559\u7A0B\uFF1A\u5B9E\u4F8B\u7BC7")]),s("li",null,[s("a",{href:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/",target:"_blank",rel:"noopener"},"A Complete Guide to Flexbox")]),s("li",null,[s("a",{href:"https://yoksel.github.io/flex-cheatsheet/",target:"_blank",rel:"noopener"},"flex-cheatsheet")]),s("li",null,[s("a",{href:"https://www.zhangxinxu.com/wordpress/2019/12/css-flex-basis/",target:"_blank",rel:"noopener"},"Oh My God\uFF0CCSS flex-basis \u539F\u6765\u6709\u8FD9\u4E48\u591A\u7EC6\u8282")]),s("li",null,[s("a",{href:"https://stackoverflow.com/questions/34352140/what-are-the-differences-between-flex-basis-and-width",target:"_blank",rel:"noopener"},"What are the differences between flex-basis and width?")]),s("li",null,[s("a",{href:"https://codepen.io/LandonSchropp/pen/KpzzGo?editors=1100",target:"_blank",rel:"noopener"},"Flexbox Dice")])],-1),x$={__name:"27",setup(e){const t={};return V(U),(n,a)=>(E(),X(Ye,Ce(Ee(t)),{default:O(()=>[_$,k$]),_:1},16))}},b$=s("h1",null,"\u8C22\u8C22",-1),y$={__name:"28",setup(e){const t={layout:"cover",background:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/thanks-bg.4j2jdscwhkm0.jpeg"};return V(U),(n,a)=>(E(),X(sa,Ce(Ee(t)),{default:O(()=>[b$]),_:1},16))}},w$=[{path:"1",name:"page-1",component:b1,meta:{background:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/flex-bg.3wlnmzcqmq60.jpeg",highlighter:"prism",canvasWidth:1300,layout:"cover",fonts:{sans:"Robot",serif:"Robot Slab",mono:"Fira Code"},title:"Flex \u5E03\u5C40",slide:{raw:`---
background: >-
  https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/flex-bg.3wlnmzcqmq60.jpeg
highlighter: prism
canvasWidth: 1300
layout: cover
fonts:
  sans: Robot
  serif: Robot Slab
  mono: Fira Code
title: Flex \u5E03\u5C40
---

# Flex \u5E03\u5C40

<!--
## \u73B0\u4EE3\u5E03\u5C40\u65B9\u6848
-->
`,title:"Flex \u5E03\u5C40",level:1,content:"# Flex \u5E03\u5C40",frontmatter:{background:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/flex-bg.3wlnmzcqmq60.jpeg",highlighter:"prism",canvasWidth:1300,layout:"cover",fonts:{sans:"Robot",serif:"Robot Slab",mono:"Fira Code"},title:"Flex \u5E03\u5C40"},note:"## \u73B0\u4EE3\u5E03\u5C40\u65B9\u6848",index:0,start:0,end:19,notesHTML:`<h2>\u73B0\u4EE3\u5E03\u5C40\u65B9\u6848</h2>
`,filepath:"/home/runner/work/slides-flex/slides-flex/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:O1,meta:{slide:{raw:`
# Flex \u5E03\u5C40

2009 \u5E74\uFF0CW3C \u63D0\u51FA\u4E86\u4E00\u79CD\u65B0\u7684\u5E03\u5C40\u65B9\u6848----Flex \u5E03\u5C40\u3002

Flex \u662F Flexible Box \u7684\u7F29\u5199\uFF0C\u610F\u4E3A\u5F39\u6027\u76D2\u5B50\uFF0C\u901A\u8FC7 Flex \u5E03\u5C40\u53EF\u4EE5\u7B80\u4FBF\u3001\u54CD\u5E94\u5F0F\u5730\u5B9E\u73B0\u5404\u79CD\u9875\u9762\u5E03\u5C40\u3002

<v-clicks>

- \u5E03\u5C40\u7684\u4F20\u7EDF\u89E3\u51B3\u65B9\u6848\u57FA\u4E8E\u76D2\u6A21\u578B\uFF0C\u501F\u52A9 <kbd>display</kbd>\u3001<kbd>position</kbd>\u3001<kbd>float</kbd> \u8FDB\u884C\u5E03\u5C40\uFF0C\u5BF9\u4E8E\u4E00\u4E9B\u7279\u6B8A\u5E03\u5C40\u975E\u5E38\u7684\u4E0D\u65B9\u4FBF\uFF0C\u800C\u901A\u8FC7 Flex
\u5E03\u5C40\u53EF\u4EE5\u8F7B\u6613\u5B9E\u73B0\u57FA\u4E8E\u76D2\u6A21\u578B\u65E0\u6CD5\u5B9E\u73B0\u6216\u8005\u5F88\u96BE\u5B9E\u73B0\u7684\u5E03\u5C40\u3002
- \u76EE\u524D Flex \u5E03\u5C40\u5DF2\u5F97\u5230\u6240\u6709\u6D4F\u89C8\u5668\u7684\u652F\u6301\uFF0CFlex \u5E03\u5C40\u5DF2\u7ECF\u6210\u4E3A\u672A\u6765\u5E03\u5C40\u7684\u9996\u9009\u65B9\u6848\u3002[Learn More](https://caniuse.com/?search=flex).
<img src="https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/caniuse-flex.3jpw2y28lba0.png">
- \u5F53\u6211\u4EEC\u8BBE\u7F6E\u5143\u7D20 <kbd>display: flex</kbd>\uFF0C\u90A3\u4E48\u8BE5\u5143\u7D20\u5C31\u53D8\u4E3A\u4E86\u5F39\u6027\u76D2\u5B50\uFF0C\u5F39\u6027\u76D2\u5B50\u4E2D\u7684\u5143\u7D20\u6309\u7167\u67D0\u79CD\u89C4\u5219\u8FDB\u884C\u6392\u5217\u3002

</v-clicks>

`,title:"Flex \u5E03\u5C40",level:1,content:`# Flex \u5E03\u5C40

2009 \u5E74\uFF0CW3C \u63D0\u51FA\u4E86\u4E00\u79CD\u65B0\u7684\u5E03\u5C40\u65B9\u6848----Flex \u5E03\u5C40\u3002

Flex \u662F Flexible Box \u7684\u7F29\u5199\uFF0C\u610F\u4E3A\u5F39\u6027\u76D2\u5B50\uFF0C\u901A\u8FC7 Flex \u5E03\u5C40\u53EF\u4EE5\u7B80\u4FBF\u3001\u54CD\u5E94\u5F0F\u5730\u5B9E\u73B0\u5404\u79CD\u9875\u9762\u5E03\u5C40\u3002

<v-clicks>

- \u5E03\u5C40\u7684\u4F20\u7EDF\u89E3\u51B3\u65B9\u6848\u57FA\u4E8E\u76D2\u6A21\u578B\uFF0C\u501F\u52A9 <kbd>display</kbd>\u3001<kbd>position</kbd>\u3001<kbd>float</kbd> \u8FDB\u884C\u5E03\u5C40\uFF0C\u5BF9\u4E8E\u4E00\u4E9B\u7279\u6B8A\u5E03\u5C40\u975E\u5E38\u7684\u4E0D\u65B9\u4FBF\uFF0C\u800C\u901A\u8FC7 Flex
\u5E03\u5C40\u53EF\u4EE5\u8F7B\u6613\u5B9E\u73B0\u57FA\u4E8E\u76D2\u6A21\u578B\u65E0\u6CD5\u5B9E\u73B0\u6216\u8005\u5F88\u96BE\u5B9E\u73B0\u7684\u5E03\u5C40\u3002
- \u76EE\u524D Flex \u5E03\u5C40\u5DF2\u5F97\u5230\u6240\u6709\u6D4F\u89C8\u5668\u7684\u652F\u6301\uFF0CFlex \u5E03\u5C40\u5DF2\u7ECF\u6210\u4E3A\u672A\u6765\u5E03\u5C40\u7684\u9996\u9009\u65B9\u6848\u3002[Learn More](https://caniuse.com/?search=flex).
<img src="https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/caniuse-flex.3jpw2y28lba0.png">
- \u5F53\u6211\u4EEC\u8BBE\u7F6E\u5143\u7D20 <kbd>display: flex</kbd>\uFF0C\u90A3\u4E48\u8BE5\u5143\u7D20\u5C31\u53D8\u4E3A\u4E86\u5F39\u6027\u76D2\u5B50\uFF0C\u5F39\u6027\u76D2\u5B50\u4E2D\u7684\u5143\u7D20\u6309\u7167\u67D0\u79CD\u89C4\u5219\u8FDB\u884C\u6392\u5217\u3002

</v-clicks>`,frontmatter:{},index:1,start:20,end:38,notesHTML:"",filepath:"/home/runner/work/slides-flex/slides-flex/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:A1,meta:{slide:{raw:`
# \u5C5E\u6027\u521D\u89C8

FlexBox \u4E0A\u7684\u5C5E\u6027\u4ECB\u7ECD\u3002

FlexBox \u4E2D\u5143\u7D20\u7684\u6392\u5217\u4E3B\u8981\u662F\u901A\u8FC7\u4E00\u7CFB\u5217\u7684\u5C5E\u6027\u6765\u51B3\u5B9A\u7684\uFF0C\u6211\u4EEC\u5C06 FlexBox \u79F0\u4E3A Container(\u5BB9\u5668)\uFF0C\u800C FlexBox \u4E2D\u7684\u5143\u7D20\u79F0\u4E3A Item(\u5B50\u9879)\uFF0C\u5728\u5BB9\u5668\u548C\u5B50\u9879\u4E2D\u5747\u53EF\u8BBE\u7F6E\u76F8\u5E94\u7684\u5C5E\u6027\u503C\u6765\u89C4\u5B9A \u5B50\u9879\u5728\u5BB9\u5668\u4E2D\u7684\u6392\u5217\u3002

<div grid="~ cols-2 gap-2" m="-t-2">
<div>

<kbd>Container</kbd> \u4E0A\u7684\u5C5E\u6027\uFF1A

- <kbd>flex-direction</kbd>
- <kbd>flex-wrap</kbd>
- <kbd>flex-flow</kbd>
- <kbd>jusitify-content</kbd>
- <kbd>align-items</kbd>
- <kbd>align-content</kbd>

</div>
<div>

<kbd>Item</kbd> \u4E0A\u7684\u5C5E\u6027\uFF1A
- <kbd>flex-basis</kbd>
- <kbd>flex-grow</kbd>
- <kbd>flex-shrink</kbd>
- <kbd>flex</kbd>
- <kbd>order</kbd>
- <kbd>align-self</kbd>

</div>
</div>

\u5176\u4E2D <kbd>flex-flow</kbd> \u548C <kbd>flex</kbd> \u4E3A\u7B80\u5199\u5F62\u5F0F\u3002

`,title:"\u5C5E\u6027\u521D\u89C8",level:1,content:`# \u5C5E\u6027\u521D\u89C8

FlexBox \u4E0A\u7684\u5C5E\u6027\u4ECB\u7ECD\u3002

FlexBox \u4E2D\u5143\u7D20\u7684\u6392\u5217\u4E3B\u8981\u662F\u901A\u8FC7\u4E00\u7CFB\u5217\u7684\u5C5E\u6027\u6765\u51B3\u5B9A\u7684\uFF0C\u6211\u4EEC\u5C06 FlexBox \u79F0\u4E3A Container(\u5BB9\u5668)\uFF0C\u800C FlexBox \u4E2D\u7684\u5143\u7D20\u79F0\u4E3A Item(\u5B50\u9879)\uFF0C\u5728\u5BB9\u5668\u548C\u5B50\u9879\u4E2D\u5747\u53EF\u8BBE\u7F6E\u76F8\u5E94\u7684\u5C5E\u6027\u503C\u6765\u89C4\u5B9A \u5B50\u9879\u5728\u5BB9\u5668\u4E2D\u7684\u6392\u5217\u3002

<div grid="~ cols-2 gap-2" m="-t-2">
<div>

<kbd>Container</kbd> \u4E0A\u7684\u5C5E\u6027\uFF1A

- <kbd>flex-direction</kbd>
- <kbd>flex-wrap</kbd>
- <kbd>flex-flow</kbd>
- <kbd>jusitify-content</kbd>
- <kbd>align-items</kbd>
- <kbd>align-content</kbd>

</div>
<div>

<kbd>Item</kbd> \u4E0A\u7684\u5C5E\u6027\uFF1A
- <kbd>flex-basis</kbd>
- <kbd>flex-grow</kbd>
- <kbd>flex-shrink</kbd>
- <kbd>flex</kbd>
- <kbd>order</kbd>
- <kbd>align-self</kbd>

</div>
</div>

\u5176\u4E2D <kbd>flex-flow</kbd> \u548C <kbd>flex</kbd> \u4E3A\u7B80\u5199\u5F62\u5F0F\u3002`,frontmatter:{},index:2,start:39,end:75,notesHTML:"",filepath:"/home/runner/work/slides-flex/slides-flex/slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:_b,meta:{layout:"image-right",image:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/display-bg.1ynu0b2f6g3k.jpeg",slide:{raw:`---
layout: image-right
image: >-
  https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/display-bg.1ynu0b2f6g3k.jpeg
---

# display: flex

\u5F53\u4E0D\u8BBE\u7F6E\u4EFB\u4F55\u5C5E\u6027\u65F6 FlexBox \u4E2D\u5143\u7D20\u7684\u6392\u5217\u3002

\`\`\`html
<div class="container">
<div class="item">1</div>
<div class="item">2</div>
<div class="item">3</div>
<div class="item">4</div>
</div>
\`\`\`

\`\`\`css
<style>
.container {
display: flex;
}

.item {
width: 100px;
height: 100px;
background: #ce5777;
}
</style>
\`\`\`

<v-click>
<div class="mt-8">
<FlexItemBox :counts="4" />
</div>

<div class="mt-8">
\u5143\u7D20\u4F9D\u6B21\u4ECE\u5DE6\u5411\u53F3\u6392\u5217\uFF0C\u5143\u7D20\u4E4B\u95F4\u7D27\u7D27\u6328\u7740\u6CA1\u6709\u7A7A\u9699\u3002
</div>
</v-click>

`,title:"display: flex",level:1,content:`# display: flex

\u5F53\u4E0D\u8BBE\u7F6E\u4EFB\u4F55\u5C5E\u6027\u65F6 FlexBox \u4E2D\u5143\u7D20\u7684\u6392\u5217\u3002

\`\`\`html
<div class="container">
<div class="item">1</div>
<div class="item">2</div>
<div class="item">3</div>
<div class="item">4</div>
</div>
\`\`\`

\`\`\`css
<style>
.container {
display: flex;
}

.item {
width: 100px;
height: 100px;
background: #ce5777;
}
</style>
\`\`\`

<v-click>
<div class="mt-8">
<FlexItemBox :counts="4" />
</div>

<div class="mt-8">
\u5143\u7D20\u4F9D\u6B21\u4ECE\u5DE6\u5411\u53F3\u6392\u5217\uFF0C\u5143\u7D20\u4E4B\u95F4\u7D27\u7D27\u6328\u7740\u6CA1\u6709\u7A7A\u9699\u3002
</div>
</v-click>`,frontmatter:{layout:"image-right",image:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/display-bg.1ynu0b2f6g3k.jpeg"},index:3,start:75,end:119,notesHTML:"",filepath:"/home/runner/work/slides-flex/slides-flex/slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:xb,meta:{layout:"cover",background:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/container-bg.4x2ywhgh2yo0.jpeg",slide:{raw:`---
layout: cover
background: >-
  https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/container-bg.4x2ywhgh2yo0.jpeg
---

# Container \u4E0A\u7684\u5C5E\u6027

`,title:"Container \u4E0A\u7684\u5C5E\u6027",level:1,content:"# Container \u4E0A\u7684\u5C5E\u6027",frontmatter:{layout:"cover",background:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/container-bg.4x2ywhgh2yo0.jpeg"},index:4,start:119,end:128,notesHTML:"",filepath:"/home/runner/work/slides-flex/slides-flex/slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:Fb,meta:{slide:{raw:`
# flex-direction

\u63A7\u5236\u4E3B\u8F74\u548C\u526F\u8F74\u7684\u65B9\u5411

<div class="grid grid-cols-2 gap-2">

<div class="grid grid-rows-2 gap-2">

<v-click>
<div>
\`\`\`css {2}
.container {
  flex-direction: row;
}
\`\`\`
<FlexItemBox :counts="4" :containerStyle="{flexDirection: 'row', marginTop: '20px'}" />
</div>
</v-click>

<v-click>
<div>
\`\`\`css {2}
.container {
  flex-direction: row-reverse;
}
\`\`\`
<FlexItemBox :counts="4" :containerStyle="{flexDirection: 'row-reverse', marginTop: '20px'}" />
</div>
</v-click>

</div>

<div class="grid grid-cols-2 gap-2">

<v-click>
<div>
\`\`\`css {2}
.container {
  flex-direction: column;
}
\`\`\`
<FlexItemBox :counts="4" :containerStyle="{flexDirection: 'column', marginTop: '20px'}" />
</div>
</v-click>

<v-click>
<div>
\`\`\`css {2}
.container {
  flex-direction: column-reverse;
}
\`\`\`
<FlexItemBox :counts="4" :containerStyle="{flexDirection: 'column-reverse', marginTop: '20px'}" />
</div>
</v-click>

</div>

</div>

`,title:"flex-direction",level:1,content:`# flex-direction

\u63A7\u5236\u4E3B\u8F74\u548C\u526F\u8F74\u7684\u65B9\u5411

<div class="grid grid-cols-2 gap-2">

<div class="grid grid-rows-2 gap-2">

<v-click>
<div>
\`\`\`css {2}
.container {
  flex-direction: row;
}
\`\`\`
<FlexItemBox :counts="4" :containerStyle="{flexDirection: 'row', marginTop: '20px'}" />
</div>
</v-click>

<v-click>
<div>
\`\`\`css {2}
.container {
  flex-direction: row-reverse;
}
\`\`\`
<FlexItemBox :counts="4" :containerStyle="{flexDirection: 'row-reverse', marginTop: '20px'}" />
</div>
</v-click>

</div>

<div class="grid grid-cols-2 gap-2">

<v-click>
<div>
\`\`\`css {2}
.container {
  flex-direction: column;
}
\`\`\`
<FlexItemBox :counts="4" :containerStyle="{flexDirection: 'column', marginTop: '20px'}" />
</div>
</v-click>

<v-click>
<div>
\`\`\`css {2}
.container {
  flex-direction: column-reverse;
}
\`\`\`
<FlexItemBox :counts="4" :containerStyle="{flexDirection: 'column-reverse', marginTop: '20px'}" />
</div>
</v-click>

</div>

</div>`,frontmatter:{},index:5,start:129,end:191,notesHTML:"",filepath:"/home/runner/work/slides-flex/slides-flex/slides.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:Nb,meta:{slide:{raw:`
# flex-wrap

\u5F53\u5B50\u9879\u7684\u603B\u957F\u5EA6\u8D85\u8FC7\u5BB9\u5668\u5BBD\u5EA6\u65F6\uFF0C\u5B50\u9879\u662F\u5426\u6298\u53E0

<div grid="~ cols-2 gap-2">

<div>
<v-click>

\`\`\`html {all}
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
\`\`\`

\`\`\`css {all}
.container {
  width: 400px;
  display: flex;
}
.item {
  width: 100px;
  height: 100px;
}
\`\`\`

</v-click>

<v-click>
<FlexItemBox :counts="5" :containerStyle="{width: '400px', marginTop: '40px'}" />
</v-click>

</div>

<div>

<v-click>

\`\`\`css {2}
.container {
  flex-wrap: wrap;
}
\`\`\`

<FlexItemBox :counts="5" :containerStyle="{width: '400px', flexWrap: 'wrap'}" />

</v-click>

<v-click>

\`\`\`css {2}
.container {
  flex-wrap: wrap-reverse;
}
\`\`\`

<FlexItemBox :counts="5" :containerStyle="{width: '400px', flexWrap: 'wrap-reverse'}" />

</v-click>

</div>
</div>

`,title:"flex-wrap",level:1,content:`# flex-wrap

\u5F53\u5B50\u9879\u7684\u603B\u957F\u5EA6\u8D85\u8FC7\u5BB9\u5668\u5BBD\u5EA6\u65F6\uFF0C\u5B50\u9879\u662F\u5426\u6298\u53E0

<div grid="~ cols-2 gap-2">

<div>
<v-click>

\`\`\`html {all}
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
\`\`\`

\`\`\`css {all}
.container {
  width: 400px;
  display: flex;
}
.item {
  width: 100px;
  height: 100px;
}
\`\`\`

</v-click>

<v-click>
<FlexItemBox :counts="5" :containerStyle="{width: '400px', marginTop: '40px'}" />
</v-click>

</div>

<div>

<v-click>

\`\`\`css {2}
.container {
  flex-wrap: wrap;
}
\`\`\`

<FlexItemBox :counts="5" :containerStyle="{width: '400px', flexWrap: 'wrap'}" />

</v-click>

<v-click>

\`\`\`css {2}
.container {
  flex-wrap: wrap-reverse;
}
\`\`\`

<FlexItemBox :counts="5" :containerStyle="{width: '400px', flexWrap: 'wrap-reverse'}" />

</v-click>

</div>
</div>`,frontmatter:{},index:6,start:192,end:261,notesHTML:"",filepath:"/home/runner/work/slides-flex/slides-flex/slides.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:Zb,meta:{slide:{raw:`
# flex-flow

<kbd>flex-flow</kbd> \u4E3A <kbd>flex-direction</kbd> \u4E0E <kbd>flex-wrap</kbd> \u7684\u7B80\u5199\u5F62\u5F0F

<kbd>flex-flow</kbd> \u6709 $4*3 = 12$ \u79CD\u7EC4\u5408\uFF0C\u4E0B\u9762\u6F14\u793A\u4E86\u56DB\u79CD<kbd>row wrap</kbd>\u3001<kbd>row no-wrap</kbd>\u3001<kbd>column
wrap</kbd>\u3001<kbd>column no-wrap</kbd>

<div grid="~ cols-2 gap-4">

<div grid="~ rows-2 gap-2">

<v-click>

<div>

\`\`\`css
.container {
  width: 400px;
  flex-flow: row wrap;
}
\`\`\`

<FlexItemBox :counts="5" :style="{width: '400px', flexFlow: 'row wrap'}" />

</div>

</v-click>

<v-click>

<div>

\`\`\`css
.container {
  width: 400px;
  flex-flow: row nowrap;
}
\`\`\`

<FlexItemBox :counts="5" :style="{width: '400px', flexFlow: 'row nowrap'}" />

</div>

</v-click>

</div>

<div grid="~ cols-2 gap-2">

<v-click>

<div>

\`\`\`css
.container {
  height: 400px;
  flex-flow: column wrap;
}
\`\`\`

<FlexItemBox :counts="5" :style="{height: '400px', flexFlow: 'column wrap'}" />

</div>

</v-click>

<v-click>

<div>

\`\`\`css
.container {
  height: 400px;
  flex-flow: column nowrap;
}
\`\`\`

<FlexItemBox :counts="5" :style="{height: '400px', flexFlow: 'column nowrap'}" />

</div>

</v-click>

</div>

</div>

`,title:"flex-flow",level:1,content:`# flex-flow

<kbd>flex-flow</kbd> \u4E3A <kbd>flex-direction</kbd> \u4E0E <kbd>flex-wrap</kbd> \u7684\u7B80\u5199\u5F62\u5F0F

<kbd>flex-flow</kbd> \u6709 $4*3 = 12$ \u79CD\u7EC4\u5408\uFF0C\u4E0B\u9762\u6F14\u793A\u4E86\u56DB\u79CD<kbd>row wrap</kbd>\u3001<kbd>row no-wrap</kbd>\u3001<kbd>column
wrap</kbd>\u3001<kbd>column no-wrap</kbd>

<div grid="~ cols-2 gap-4">

<div grid="~ rows-2 gap-2">

<v-click>

<div>

\`\`\`css
.container {
  width: 400px;
  flex-flow: row wrap;
}
\`\`\`

<FlexItemBox :counts="5" :style="{width: '400px', flexFlow: 'row wrap'}" />

</div>

</v-click>

<v-click>

<div>

\`\`\`css
.container {
  width: 400px;
  flex-flow: row nowrap;
}
\`\`\`

<FlexItemBox :counts="5" :style="{width: '400px', flexFlow: 'row nowrap'}" />

</div>

</v-click>

</div>

<div grid="~ cols-2 gap-2">

<v-click>

<div>

\`\`\`css
.container {
  height: 400px;
  flex-flow: column wrap;
}
\`\`\`

<FlexItemBox :counts="5" :style="{height: '400px', flexFlow: 'column wrap'}" />

</div>

</v-click>

<v-click>

<div>

\`\`\`css
.container {
  height: 400px;
  flex-flow: column nowrap;
}
\`\`\`

<FlexItemBox :counts="5" :style="{height: '400px', flexFlow: 'column nowrap'}" />

</div>

</v-click>

</div>

</div>`,frontmatter:{},index:7,start:262,end:351,notesHTML:"",filepath:"/home/runner/work/slides-flex/slides-flex/slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:iy,meta:{layout:"image-right",image:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/justify-bg.18ryxf9vkfa8.jpeg",slide:{raw:`---
layout: image-right
image: >-
  https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/justify-bg.18ryxf9vkfa8.jpeg
---

# jusitify-content

\u63A7\u5236\u5B50\u9879\u5728\u4E3B\u8F74\u4E0A\u7684\u5BF9\u9F50

<div>

|                          |                         |                         |
| ------------------------ | ----------------------- | ----------------------- |
| <kbd>flex-start</kbd>    | <kbd>flex-end</kbd>     | <kbd>center</kbd>       |
| <kbd>space-between</kbd> | <kbd>space-around</kbd> | <kbd>space-evenly</kbd> |

<v-click>

<div class="mt-13">
<kbd>flex-start:</kbd>
<br>
<br>
<FlexItemBox :counts="4" :style="{justifyContent: 'flex-start'}" />

</div>

</v-click>

<v-click>

<div class="mt-8">
<kbd>flex-end:</kbd>
<br>
<br>
<FlexItemBox :counts="4" :style="{justifyContent: 'flex-end'}" />
</div>

</v-click>

</div>

`,title:"jusitify-content",level:1,content:`# jusitify-content

\u63A7\u5236\u5B50\u9879\u5728\u4E3B\u8F74\u4E0A\u7684\u5BF9\u9F50

<div>

|                          |                         |                         |
| ------------------------ | ----------------------- | ----------------------- |
| <kbd>flex-start</kbd>    | <kbd>flex-end</kbd>     | <kbd>center</kbd>       |
| <kbd>space-between</kbd> | <kbd>space-around</kbd> | <kbd>space-evenly</kbd> |

<v-click>

<div class="mt-13">
<kbd>flex-start:</kbd>
<br>
<br>
<FlexItemBox :counts="4" :style="{justifyContent: 'flex-start'}" />

</div>

</v-click>

<v-click>

<div class="mt-8">
<kbd>flex-end:</kbd>
<br>
<br>
<FlexItemBox :counts="4" :style="{justifyContent: 'flex-end'}" />
</div>

</v-click>

</div>`,frontmatter:{layout:"image-right",image:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/justify-bg.18ryxf9vkfa8.jpeg"},index:8,start:351,end:394,notesHTML:"",filepath:"/home/runner/work/slides-flex/slides-flex/slides.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:yy,meta:{slide:{raw:`
# justify-content(\u7EED)

<div class="grid grid-cols-2 gap-30">

<v-click>

<div>
<kbd>center:</kbd>
<br>
<br>
<FlexItemBox :counts="4" :style="{justifyContent: 'center'}" />
</div>

</v-click>

<v-click>

<div>
<kbd>space-between:</kbd>
<br>
<br>
<FlexItemBox :counts="4" :style="{justifyContent: 'space-between'}" />
</div>

</v-click>

<v-click>

<div>
<kbd>space-around:</kbd>
<br>
<br>
<FlexItemBox :counts="4" :style="{justifyContent: 'space-around'}" />
</div>

</v-click>

<v-click>

<div>
<kbd>space-evenly:</kbd>
<br>
<br>
<FlexItemBox :counts="4" :style="{justifyContent: 'space-evenly'}" />
</div>

</v-click>

</div>

`,title:"justify-content(\u7EED)",level:1,content:`# justify-content(\u7EED)

<div class="grid grid-cols-2 gap-30">

<v-click>

<div>
<kbd>center:</kbd>
<br>
<br>
<FlexItemBox :counts="4" :style="{justifyContent: 'center'}" />
</div>

</v-click>

<v-click>

<div>
<kbd>space-between:</kbd>
<br>
<br>
<FlexItemBox :counts="4" :style="{justifyContent: 'space-between'}" />
</div>

</v-click>

<v-click>

<div>
<kbd>space-around:</kbd>
<br>
<br>
<FlexItemBox :counts="4" :style="{justifyContent: 'space-around'}" />
</div>

</v-click>

<v-click>

<div>
<kbd>space-evenly:</kbd>
<br>
<br>
<FlexItemBox :counts="4" :style="{justifyContent: 'space-evenly'}" />
</div>

</v-click>

</div>`,frontmatter:{},index:9,start:395,end:447,notesHTML:"",filepath:"/home/runner/work/slides-flex/slides-flex/slides.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:My,meta:{slide:{raw:`
# align-items

\u63A7\u5236\u5B50\u9879\u5728\u526F\u8F74\u4E0A\u7684\u5BF9\u9F50

|                    |                       |                     |
| ------------------ | --------------------- | ------------------- |
| <kbd>stretch</kbd> | <kbd>flex-start</kbd> | <kbd>flex-end</kbd> |
| <kbd>center</kbd>  | <kbd>baseline</kbd>   |                     |

<div grid="~ cols-2 gap-20" class="mt-4">

<v-click>
<div>
\u5B50\u9879\u4E0D\u7ED9\u5B9A\u9AD8\u5EA6\uFF0C<kbd>stretch:</kbd>

<br>
<br>

\`\`\`css {2-3,8}
.container {
  display: flex;
  height: 100px;
  align-items: stretch;
}
.item {
  width: 100px;
  height: auto;
}
\`\`\`

<FlexItemBox :counts="4" :style="{height: '150px'}" :itemStyle="{height: 'auto'}" />

</div>

</v-click>

<v-click>
<div>
\u5B50\u9879\u7ED9\u5B9A\u9AD8\u5EA6\uFF0C<kbd>stretch:</kbd>

<br>
<br>

\`\`\`css {2-3,8}
.container {
  display: flex;
  height: 100px;
  align-items: stretch;
}
.item {
  width: 100px;
  height: 100px;
}
\`\`\`

<FlexItemBox :counts="4" :style="{height: '150px'}" />

</div>

</v-click>

</div>

`,title:"align-items",level:1,content:`# align-items

\u63A7\u5236\u5B50\u9879\u5728\u526F\u8F74\u4E0A\u7684\u5BF9\u9F50

|                    |                       |                     |
| ------------------ | --------------------- | ------------------- |
| <kbd>stretch</kbd> | <kbd>flex-start</kbd> | <kbd>flex-end</kbd> |
| <kbd>center</kbd>  | <kbd>baseline</kbd>   |                     |

<div grid="~ cols-2 gap-20" class="mt-4">

<v-click>
<div>
\u5B50\u9879\u4E0D\u7ED9\u5B9A\u9AD8\u5EA6\uFF0C<kbd>stretch:</kbd>

<br>
<br>

\`\`\`css {2-3,8}
.container {
  display: flex;
  height: 100px;
  align-items: stretch;
}
.item {
  width: 100px;
  height: auto;
}
\`\`\`

<FlexItemBox :counts="4" :style="{height: '150px'}" :itemStyle="{height: 'auto'}" />

</div>

</v-click>

<v-click>
<div>
\u5B50\u9879\u7ED9\u5B9A\u9AD8\u5EA6\uFF0C<kbd>stretch:</kbd>

<br>
<br>

\`\`\`css {2-3,8}
.container {
  display: flex;
  height: 100px;
  align-items: stretch;
}
.item {
  width: 100px;
  height: 100px;
}
\`\`\`

<FlexItemBox :counts="4" :style="{height: '150px'}" />

</div>

</v-click>

</div>`,frontmatter:{},index:10,start:448,end:513,notesHTML:"",filepath:"/home/runner/work/slides-flex/slides-flex/slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:qy,meta:{slide:{raw:`
# align-items(\u7EED)

<div grid="~ cols-2 gap-2">

<v-click>
<div>

\`\`\`css
.container {
  width: 500px;
  height: 150px;
  align-items: flex-start;
}
\`\`\`

<FlexItemBox :counts="4" :containerStyle="{width: '500px', height: '150px', alignItems: 'flex-start'}" />

</div>

</v-click>

<v-click>

<div>

\`\`\`css
.container {
  width: 500px;
  height: 150px;
  align-items: flex-end;
}
\`\`\`

<FlexItemBox :counts="4" :containerStyle="{width: '500px', height: '150px', alignItems: 'flex-end'}" />

</div>

</v-click>

<v-click>

<div>

\`\`\`css
.container {
width: 500px;
height: 150px;
align-items: center;
}
\`\`\`

<FlexItemBox :counts="4" :containerStyle="{width: '500px', height: '150px', alignItems: 'center'}" />

</div>

</v-click>

<v-click>

<div>

\`\`\`css
.container {
  width: 500px;
  height: 150px;
  align-items: baseline;
}
.item1 {
  margin-top: 20px;
}
\`\`\`

<FlexItemBox 
  :counts="4" 
  :containerStyle="{width: '500px', height: '150px', alignItems: 'baseline'}" 
  :itemStyle="{
  width: '100px',
  fontSize: '10px',
  justifyContent: 'flex-start',
  alignItems: 'stretch'
  }" 
  :itemStyles="[
    {height: '50px', marginTop: '20px'},
    {height: '70px'},
    {height: '120px'},
    {height: '100px'},
  ]" 
  :itemContents="['Hello World!', 'Hello World!', 'Hello World!', 'Hello World!']" />

</div>

</v-click>

</div>

`,title:"align-items(\u7EED)",level:1,content:`# align-items(\u7EED)

<div grid="~ cols-2 gap-2">

<v-click>
<div>

\`\`\`css
.container {
  width: 500px;
  height: 150px;
  align-items: flex-start;
}
\`\`\`

<FlexItemBox :counts="4" :containerStyle="{width: '500px', height: '150px', alignItems: 'flex-start'}" />

</div>

</v-click>

<v-click>

<div>

\`\`\`css
.container {
  width: 500px;
  height: 150px;
  align-items: flex-end;
}
\`\`\`

<FlexItemBox :counts="4" :containerStyle="{width: '500px', height: '150px', alignItems: 'flex-end'}" />

</div>

</v-click>

<v-click>

<div>

\`\`\`css
.container {
width: 500px;
height: 150px;
align-items: center;
}
\`\`\`

<FlexItemBox :counts="4" :containerStyle="{width: '500px', height: '150px', alignItems: 'center'}" />

</div>

</v-click>

<v-click>

<div>

\`\`\`css
.container {
  width: 500px;
  height: 150px;
  align-items: baseline;
}
.item1 {
  margin-top: 20px;
}
\`\`\`

<FlexItemBox 
  :counts="4" 
  :containerStyle="{width: '500px', height: '150px', alignItems: 'baseline'}" 
  :itemStyle="{
  width: '100px',
  fontSize: '10px',
  justifyContent: 'flex-start',
  alignItems: 'stretch'
  }" 
  :itemStyles="[
    {height: '50px', marginTop: '20px'},
    {height: '70px'},
    {height: '120px'},
    {height: '100px'},
  ]" 
  :itemContents="['Hello World!', 'Hello World!', 'Hello World!', 'Hello World!']" />

</div>

</v-click>

</div>`,frontmatter:{},index:11,start:514,end:611,notesHTML:"",filepath:"/home/runner/work/slides-flex/slides-flex/slides.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:Zy,meta:{slide:{raw:`
# align-content

\u5177\u6709\u591A\u884C\u60C5\u51B5\u4E0B\uFF0C\u5B50\u9879\u5728\u526F\u8F74\u4E0A\u7684\u5BF9\u9F50

|                         |                          |                         |
| ----------------------- | ------------------------ | ----------------------- |
| <kbd>stretch</kbd>      | <kbd>flex-start</kbd>    | <kbd>flex-end</kbd>     |
| <kbd>center</kbd>       | <kbd>space-between</kbd> | <kbd>space-around</kbd> |
| <kbd>space-evenly</kbd> |                          |

<div grid="~ cols-2 gap-2" class="mt-4">

<v-click>
<div>
\u4E0D\u7ED9\u5B9A\u9AD8\u5EA6\uFF0C<kbd>stretch:</kbd>

<FlexItemBox :containerStyle="{width: '400px', height: '250px', flexWrap: 'wrap'}" :counts="6"
:itemStyle="{height: 'auto'}" />

</div>

</v-click>

<v-click>
<div>
\u7ED9\u5B9A\u9AD8\u5EA6\uFF0C<kbd>stretch:</kbd>

<FlexItemBox :containerStyle="{width: '400px', height: '250px', flexWrap: 'wrap'}" :counts="6" />

</div>

</v-click>

</div>

<!--
\`\`\`css
.container {
width: 400px;
height: 250px;
display: flex;
flex-wrap: wrap;
}
\`\`\`
-->
`,title:"align-content",level:1,content:`# align-content

\u5177\u6709\u591A\u884C\u60C5\u51B5\u4E0B\uFF0C\u5B50\u9879\u5728\u526F\u8F74\u4E0A\u7684\u5BF9\u9F50

|                         |                          |                         |
| ----------------------- | ------------------------ | ----------------------- |
| <kbd>stretch</kbd>      | <kbd>flex-start</kbd>    | <kbd>flex-end</kbd>     |
| <kbd>center</kbd>       | <kbd>space-between</kbd> | <kbd>space-around</kbd> |
| <kbd>space-evenly</kbd> |                          |

<div grid="~ cols-2 gap-2" class="mt-4">

<v-click>
<div>
\u4E0D\u7ED9\u5B9A\u9AD8\u5EA6\uFF0C<kbd>stretch:</kbd>

<FlexItemBox :containerStyle="{width: '400px', height: '250px', flexWrap: 'wrap'}" :counts="6"
:itemStyle="{height: 'auto'}" />

</div>

</v-click>

<v-click>
<div>
\u7ED9\u5B9A\u9AD8\u5EA6\uFF0C<kbd>stretch:</kbd>

<FlexItemBox :containerStyle="{width: '400px', height: '250px', flexWrap: 'wrap'}" :counts="6" />

</div>

</v-click>

</div>`,frontmatter:{},note:`\`\`\`css
.container {
width: 400px;
height: 250px;
display: flex;
flex-wrap: wrap;
}
\`\`\``,index:12,start:612,end:659,notesHTML:`<pre><code class="language-css">.container {
width: 400px;
height: 250px;
display: flex;
flex-wrap: wrap;
}
</code></pre>
`,filepath:"/home/runner/work/slides-flex/slides-flex/slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:nw,meta:{slide:{raw:`
# align-content(\u7EED)

<div grid="~ cols-2 gap-2">

<v-click>
<div>
<kbd>flex-start:</kbd>

<FlexItemBox :containerStyle="{
width: '400px',
height: '250px',
flexWrap: 'wrap',
alignContent: 'flex-start',
marginTop: '10px'
}" :counts="6" />

</div>

</v-click>

<v-click>
<div>
<kbd>flex-end:</kbd>

<FlexItemBox :containerStyle="{
width: '400px',
height: '250px',
flexWrap: 'wrap',
alignContent: 'flex-end',
marginTop: '10px'
}" :counts="6" />

</div>

</v-click>

<v-click>
<div>
<kbd>center:</kbd>

<FlexItemBox :containerStyle="{
width: '400px',
height: '250px',
flexWrap: 'wrap',
alignContent: 'center',
marginTop: '10px'
}" :counts="6" />

</div>

</v-click>

<v-click>
<div>
<kbd>space-between:</kbd>

<FlexItemBox :containerStyle="{
width: '400px',
height: '250px',
flexWrap: 'wrap',
alignContent: 'space-between',
marginTop: '10px'
}" :counts="6" />

</div>

</v-click>

</div>

`,title:"align-content(\u7EED)",level:1,content:`# align-content(\u7EED)

<div grid="~ cols-2 gap-2">

<v-click>
<div>
<kbd>flex-start:</kbd>

<FlexItemBox :containerStyle="{
width: '400px',
height: '250px',
flexWrap: 'wrap',
alignContent: 'flex-start',
marginTop: '10px'
}" :counts="6" />

</div>

</v-click>

<v-click>
<div>
<kbd>flex-end:</kbd>

<FlexItemBox :containerStyle="{
width: '400px',
height: '250px',
flexWrap: 'wrap',
alignContent: 'flex-end',
marginTop: '10px'
}" :counts="6" />

</div>

</v-click>

<v-click>
<div>
<kbd>center:</kbd>

<FlexItemBox :containerStyle="{
width: '400px',
height: '250px',
flexWrap: 'wrap',
alignContent: 'center',
marginTop: '10px'
}" :counts="6" />

</div>

</v-click>

<v-click>
<div>
<kbd>space-between:</kbd>

<FlexItemBox :containerStyle="{
width: '400px',
height: '250px',
flexWrap: 'wrap',
alignContent: 'space-between',
marginTop: '10px'
}" :counts="6" />

</div>

</v-click>

</div>`,frontmatter:{},index:13,start:660,end:732,notesHTML:"",filepath:"/home/runner/work/slides-flex/slides-flex/slides.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:lw,meta:{layout:"image-right",image:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/content-right.4qbnxs62dl40.jpeg",slide:{raw:`---
layout: image-right
image: >-
  https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/content-right.4qbnxs62dl40.jpeg
---

# align-content(\u7EED)

<v-click>
<div>
<kbd>space-around:</kbd>

<FlexItemBox 
  :containerStyle="{
    width: '400px',
    height: '250px',
    flexWrap: 'wrap',
    alignContent: 'space-around',
    margin: '10px 0'
  }" 
  :counts="6" />

</div>
</v-click>

<v-click>
<div>
<kbd>space-evenly:</kbd>

<FlexItemBox 
  :containerStyle="{
    width: '400px',
    height: '250px',
    flexWrap: 'wrap',
    alignContent: 'space-evenly',
    marginTop: '10px'
  }" 
  :counts="6" />

</div>
</v-click>

`,title:"align-content(\u7EED)",level:1,content:`# align-content(\u7EED)

<v-click>
<div>
<kbd>space-around:</kbd>

<FlexItemBox 
  :containerStyle="{
    width: '400px',
    height: '250px',
    flexWrap: 'wrap',
    alignContent: 'space-around',
    margin: '10px 0'
  }" 
  :counts="6" />

</div>
</v-click>

<v-click>
<div>
<kbd>space-evenly:</kbd>

<FlexItemBox 
  :containerStyle="{
    width: '400px',
    height: '250px',
    flexWrap: 'wrap',
    alignContent: 'space-evenly',
    marginTop: '10px'
  }" 
  :counts="6" />

</div>
</v-click>`,frontmatter:{layout:"image-right",image:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/content-right.4qbnxs62dl40.jpeg"},index:14,start:732,end:775,notesHTML:"",filepath:"/home/runner/work/slides-flex/slides-flex/slides.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:rw,meta:{layout:"cover",background:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/content-right.4qbnxs62dl40.jpeg",slide:{raw:`---
layout: cover
background: >-
  https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/content-right.4qbnxs62dl40.jpeg
---

# Item \u4E0A\u7684\u5C5E\u6027

`,title:"Item \u4E0A\u7684\u5C5E\u6027",level:1,content:"# Item \u4E0A\u7684\u5C5E\u6027",frontmatter:{layout:"cover",background:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/content-right.4qbnxs62dl40.jpeg"},index:15,start:775,end:784,notesHTML:"",filepath:"/home/runner/work/slides-flex/slides-flex/slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:_w,meta:{slide:{raw:`
# flex-grow

\u5F53\u5BB9\u5668\u6709\u5269\u4F59\u7A7A\u95F4\u65F6\uFF0C\u5B50\u9879\u5982\u4F55\u5E73\u5206\u5269\u4F59\u7A7A\u95F4

\u9ED8\u8BA4 <kbd>flex-grow</kbd> \u4E3A 0

<div grid="~ cols-2 gap-2">

<div>

<v-clicks>

\`\`\`css
.item {
  flex-grow: 0;
}
\`\`\`

<FlexItemBox :counts="4" />

</v-clicks>

<br>

<v-clicks>

\`\`\`css
.item {
  flex-grow: 1;
}
\`\`\`

<FlexItemBox :counts="4" :itemStyle="{flexGrow: 1}" />

</v-clicks>

</div>

<div m="l-8">

<v-clicks>

\`\`\`css
.item {
  width: 0;
  flex-grow: 1;
}
.item3 {
  flex-grow: 2;
}
\`\`\`

<FlexItemBox :counts="4" :itemStyle="{flexGrow: 1, width: 0}" :itemStyles="[
{},
{},
{flexGrow: 2}
]" />

</v-clicks>

</div>
</div>

`,title:"flex-grow",level:1,content:`# flex-grow

\u5F53\u5BB9\u5668\u6709\u5269\u4F59\u7A7A\u95F4\u65F6\uFF0C\u5B50\u9879\u5982\u4F55\u5E73\u5206\u5269\u4F59\u7A7A\u95F4

\u9ED8\u8BA4 <kbd>flex-grow</kbd> \u4E3A 0

<div grid="~ cols-2 gap-2">

<div>

<v-clicks>

\`\`\`css
.item {
  flex-grow: 0;
}
\`\`\`

<FlexItemBox :counts="4" />

</v-clicks>

<br>

<v-clicks>

\`\`\`css
.item {
  flex-grow: 1;
}
\`\`\`

<FlexItemBox :counts="4" :itemStyle="{flexGrow: 1}" />

</v-clicks>

</div>

<div m="l-8">

<v-clicks>

\`\`\`css
.item {
  width: 0;
  flex-grow: 1;
}
.item3 {
  flex-grow: 2;
}
\`\`\`

<FlexItemBox :counts="4" :itemStyle="{flexGrow: 1, width: 0}" :itemStyles="[
{},
{},
{flexGrow: 2}
]" />

</v-clicks>

</div>
</div>`,frontmatter:{},index:16,start:785,end:850,notesHTML:"",filepath:"/home/runner/work/slides-flex/slides-flex/slides.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:Ew,meta:{slide:{raw:`
# flex-shrink

\u5F53\u5BB9\u5668\u7A7A\u95F4\u4E0D\u8DB3\u65F6\uFF0C\u5B50\u9879\u5982\u4F55\u6536\u7F29

<div grid="~ cols-2 gap-2">
<div>

<v-clicks>

\`\`\`css
.container {
  width: 400px;
}
.item {
  width: 100px;
  height: 100px;
}
\`\`\`

<FlexItemBox :containerStyle="{width: '400px'}" />

<p style="line-height: 1.4;"> \u5F53\u7A7A\u95F4\u4E0D\u8DB3\u65F6\uFF0C\u6BCF\u4E2A\u5B50\u9879\u9ED8\u8BA4\u4F1A\u6536\u7F29\u6765\u9002\u5E94\u5BB9\u5668\u7684\u5927\u5C0F\u3002\u5982\u4F55\u6536\u7F29\uFF0C\u7531 <kbd>flex-shrink</kbd> \u6765\u51B3\u5B9A\uFF0C\u9ED8\u8BA4\u6BCF\u4E2A\u5B50\u9879\u7684
<kbd>flex-shrink</kbd> \u7684\u503C\u4E3A <kbd>1</kbd>\uFF0C\u8BE5\u6570\u503C\u7684\u4F5C\u7528\u540C <kbd>flex-grow</kbd>\uFF0C\u8868\u793A\u5360\u636E\u7684\u4EFD\u6570\u3002</p>

</v-clicks>

</div>

<div>

<v-clicks>

\`\`\`css
.item {
  flex-shrink: 0;
}
.item4 {
  flex-shrink: 1;
}
.item5 {
  flex-shrink: 1;
}
\`\`\`

<FlexItemBox :containerStyle="{width: '400px'}" :itemStyle="{flexShrink: 0}" :itemStyles="[
{},
{},
{},
{flexShrink: 1},
{flexShrink: 1}
]" />

\`\`\`css
.item {
  flex-shrink: 0;
}
\`\`\`

<FlexItemBox :containerStyle="{width: '400px'}" :itemStyle="{flexShrink: 0}" />

</v-clicks>

</div>
</div>

`,title:"flex-shrink",level:1,content:`# flex-shrink

\u5F53\u5BB9\u5668\u7A7A\u95F4\u4E0D\u8DB3\u65F6\uFF0C\u5B50\u9879\u5982\u4F55\u6536\u7F29

<div grid="~ cols-2 gap-2">
<div>

<v-clicks>

\`\`\`css
.container {
  width: 400px;
}
.item {
  width: 100px;
  height: 100px;
}
\`\`\`

<FlexItemBox :containerStyle="{width: '400px'}" />

<p style="line-height: 1.4;"> \u5F53\u7A7A\u95F4\u4E0D\u8DB3\u65F6\uFF0C\u6BCF\u4E2A\u5B50\u9879\u9ED8\u8BA4\u4F1A\u6536\u7F29\u6765\u9002\u5E94\u5BB9\u5668\u7684\u5927\u5C0F\u3002\u5982\u4F55\u6536\u7F29\uFF0C\u7531 <kbd>flex-shrink</kbd> \u6765\u51B3\u5B9A\uFF0C\u9ED8\u8BA4\u6BCF\u4E2A\u5B50\u9879\u7684
<kbd>flex-shrink</kbd> \u7684\u503C\u4E3A <kbd>1</kbd>\uFF0C\u8BE5\u6570\u503C\u7684\u4F5C\u7528\u540C <kbd>flex-grow</kbd>\uFF0C\u8868\u793A\u5360\u636E\u7684\u4EFD\u6570\u3002</p>

</v-clicks>

</div>

<div>

<v-clicks>

\`\`\`css
.item {
  flex-shrink: 0;
}
.item4 {
  flex-shrink: 1;
}
.item5 {
  flex-shrink: 1;
}
\`\`\`

<FlexItemBox :containerStyle="{width: '400px'}" :itemStyle="{flexShrink: 0}" :itemStyles="[
{},
{},
{},
{flexShrink: 1},
{flexShrink: 1}
]" />

\`\`\`css
.item {
  flex-shrink: 0;
}
\`\`\`

<FlexItemBox :containerStyle="{width: '400px'}" :itemStyle="{flexShrink: 0}" />

</v-clicks>

</div>
</div>`,frontmatter:{},index:17,start:851,end:918,notesHTML:"",filepath:"/home/runner/work/slides-flex/slides-flex/slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:Bw,meta:{slide:{raw:`
# flex-basis

\u89C4\u5B9A\u5B50\u9879\u5728\u4E3B\u8F74\u4E0A\u7684\u5927\u5C0F

<div grid="~ cols-2 gap-2">
<div>

<v-clicks>

<p style="line-height: 1.4;">\u4E4B\u524D\u6211\u4EEC\u4E00\u76F4\u4F7F\u7528 <kbd>width</kbd> \u6216\u8005 <kbd>height</kbd> \u6765\u89C4\u5B9A\u5B50\u9879\u5728\u4E3B\u8F74\u4E0A\u7684\u5927\u5C0F\uFF0C\u4F46\u662F\u5176\u5B9E\u771F\u6B63\u89C4\u5B9A\u5B50\u9879\u5927\u5C0F\u7684\u5C5E\u6027\u662F
<kbd>flex-basis</kbd>\uFF0C<kbd>width</kbd> \u548C <kbd>height</kbd> \u53EA\u662F\u4E3A <kbd>flex-basis</kbd> \u4F5C\u4E3A\u4E00\u4E2A\u53C2\u8003\u3002</p>

<blockquote>

\u5B50\u9879\u7684\u5B9E\u9645\u5927\u5C0F\u53EF\u80FD\u4E0E <kbd>flex-basis</kbd> \u8BBE\u7F6E\u7684\u5927\u5C0F\u4E0D\u540C\uFF0C<kbd>flex-basis</kbd>\u89C4\u5B9A\u7684\u53EA\u662F\u5B50\u9879\u5728\u4E3B\u8F74\u4E0A\u7684<b
style="color: #ce5577;">\u521D\u59CB(\u57FA\u672C)</b>\u5927\u5C0F\uFF0C<kbd>flex-grow</kbd> \u4E0E <kbd>flex-shrink</kbd> \u53EF\u80FD\u4F1A\u5BF9\u5B50\u9879\u8FDB\u884C\u4F38\u7F29\uFF0C\u5BFC\u81F4\u5B9E\u9645\u5927\u5C0F\u4E0E\u8BBE\u7F6E\u7684\u5927\u5C0F\u4E0D\u540C\u3002

</blockquote>

<style>
blockquote {
  border-left-width: 5px;
}
</style>

<kbd>flex-basis</kbd> \u7684\u9ED8\u8BA4\u503C\u4E3A <kbd>auto</kbd>\uFF0C\u5373\u5176\u5927\u5C0F\u7531\u5185\u5BB9\u7684\u5927\u5C0F\u786E\u5B9A\uFF0C\u5F53\u89C4\u5B9A\u4E86\u76D2\u5B50\u7684\u5927\u5C0F\u65F6\uFF0C\u90A3\u4E48 <kbd>flex-basis</kbd> \u7684\u53D6\u503C\u5C31\u7B49\u4E8E
<kbd>width</kbd> \u6216\u8005 <kbd>height</kbd>\u3002

<FlexItemBox />

</v-clicks>

</div>

<div m="l-16">

<v-clicks>

\u5982\u679C\u6211\u4EEC\u624B\u52A8\u8BBE\u7F6E\u4E86 <kbd>flex-basis</kbd> \u7684\u5927\u5C0F\uFF0C\u90A3\u4E48 <kbd>width</kbd> \u7684\u53D6\u503C\u5C06\u4F1A\u88AB\u5FFD\u7565

\`\`\`css
.item {
  width: 100px;
  flex-basis: 50px;
}
\`\`\`

<FlexItemBox :itemStyle="{flexBasis: '50px'}" />

\u8FD9\u91CC\u6709\u4E00\u70B9\u9700\u8981\u6CE8\u610F\uFF0C\u867D\u7136 <kbd>flex-basis</kbd> \u7684\u4F18\u5148\u7EA7\u9AD8\u4E8E <kbd>width</kbd>(\u5047\u8BBE\u4E3B\u8F74\u4E3A\u6A2A\u5411)\uFF0C\u4F46\u662F <kbd>flex-basis</kbd> \u7684\u53D6\u503C\u53C8\u4F1A\u53D7\u5230
<kbd>min-width</kbd> \u548C <kbd>max-width</kbd> \u7684\u7EA6\u675F\u3002

\`\`\`css
.item {
  flex-basis: 50px;
  min-width: 100px;
}
\`\`\`

<FlexItemBox :itemStyle="{flexBasis: '50px', minWidth: '100px'}" />

</v-clicks>

</div>
</div>

`,title:"flex-basis",level:1,content:`# flex-basis

\u89C4\u5B9A\u5B50\u9879\u5728\u4E3B\u8F74\u4E0A\u7684\u5927\u5C0F

<div grid="~ cols-2 gap-2">
<div>

<v-clicks>

<p style="line-height: 1.4;">\u4E4B\u524D\u6211\u4EEC\u4E00\u76F4\u4F7F\u7528 <kbd>width</kbd> \u6216\u8005 <kbd>height</kbd> \u6765\u89C4\u5B9A\u5B50\u9879\u5728\u4E3B\u8F74\u4E0A\u7684\u5927\u5C0F\uFF0C\u4F46\u662F\u5176\u5B9E\u771F\u6B63\u89C4\u5B9A\u5B50\u9879\u5927\u5C0F\u7684\u5C5E\u6027\u662F
<kbd>flex-basis</kbd>\uFF0C<kbd>width</kbd> \u548C <kbd>height</kbd> \u53EA\u662F\u4E3A <kbd>flex-basis</kbd> \u4F5C\u4E3A\u4E00\u4E2A\u53C2\u8003\u3002</p>

<blockquote>

\u5B50\u9879\u7684\u5B9E\u9645\u5927\u5C0F\u53EF\u80FD\u4E0E <kbd>flex-basis</kbd> \u8BBE\u7F6E\u7684\u5927\u5C0F\u4E0D\u540C\uFF0C<kbd>flex-basis</kbd>\u89C4\u5B9A\u7684\u53EA\u662F\u5B50\u9879\u5728\u4E3B\u8F74\u4E0A\u7684<b
style="color: #ce5577;">\u521D\u59CB(\u57FA\u672C)</b>\u5927\u5C0F\uFF0C<kbd>flex-grow</kbd> \u4E0E <kbd>flex-shrink</kbd> \u53EF\u80FD\u4F1A\u5BF9\u5B50\u9879\u8FDB\u884C\u4F38\u7F29\uFF0C\u5BFC\u81F4\u5B9E\u9645\u5927\u5C0F\u4E0E\u8BBE\u7F6E\u7684\u5927\u5C0F\u4E0D\u540C\u3002

</blockquote>

<style>
blockquote {
  border-left-width: 5px;
}
</style>

<kbd>flex-basis</kbd> \u7684\u9ED8\u8BA4\u503C\u4E3A <kbd>auto</kbd>\uFF0C\u5373\u5176\u5927\u5C0F\u7531\u5185\u5BB9\u7684\u5927\u5C0F\u786E\u5B9A\uFF0C\u5F53\u89C4\u5B9A\u4E86\u76D2\u5B50\u7684\u5927\u5C0F\u65F6\uFF0C\u90A3\u4E48 <kbd>flex-basis</kbd> \u7684\u53D6\u503C\u5C31\u7B49\u4E8E
<kbd>width</kbd> \u6216\u8005 <kbd>height</kbd>\u3002

<FlexItemBox />

</v-clicks>

</div>

<div m="l-16">

<v-clicks>

\u5982\u679C\u6211\u4EEC\u624B\u52A8\u8BBE\u7F6E\u4E86 <kbd>flex-basis</kbd> \u7684\u5927\u5C0F\uFF0C\u90A3\u4E48 <kbd>width</kbd> \u7684\u53D6\u503C\u5C06\u4F1A\u88AB\u5FFD\u7565

\`\`\`css
.item {
  width: 100px;
  flex-basis: 50px;
}
\`\`\`

<FlexItemBox :itemStyle="{flexBasis: '50px'}" />

\u8FD9\u91CC\u6709\u4E00\u70B9\u9700\u8981\u6CE8\u610F\uFF0C\u867D\u7136 <kbd>flex-basis</kbd> \u7684\u4F18\u5148\u7EA7\u9AD8\u4E8E <kbd>width</kbd>(\u5047\u8BBE\u4E3B\u8F74\u4E3A\u6A2A\u5411)\uFF0C\u4F46\u662F <kbd>flex-basis</kbd> \u7684\u53D6\u503C\u53C8\u4F1A\u53D7\u5230
<kbd>min-width</kbd> \u548C <kbd>max-width</kbd> \u7684\u7EA6\u675F\u3002

\`\`\`css
.item {
  flex-basis: 50px;
  min-width: 100px;
}
\`\`\`

<FlexItemBox :itemStyle="{flexBasis: '50px', minWidth: '100px'}" />

</v-clicks>

</div>
</div>`,frontmatter:{},index:18,start:919,end:987,notesHTML:"",filepath:"/home/runner/work/slides-flex/slides-flex/slides.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:Zw,meta:{layout:"image-right",image:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/flexitem-bg.hcg0d0nlcm.jpeg",slide:{raw:`---
layout: image-right
image: >-
  https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/flexitem-bg.hcg0d0nlcm.jpeg
---

# flex

flex \u662F <kbd>flex-grow</kbd>\u3001<kbd>flex-shrink</kbd>\u3001<kbd>flex-basis</kbd> \u7684\u7B80\u5199\u5F62\u5F0F

<kbd>flex</kbd> \u7684\u53D6\u503C\u5982\u4E0B

\`\`\`css
flex: flex-grow flex-shrink flex-basis;
\`\`\`

\u540E\u9762\u4E24\u4E2A\u53D6\u503C\u4E3A\u53EF\u9009\uFF0C\u9ED8\u8BA4\u503C\u4E3A <kbd>flex: 0 1 auto;</kbd>\u3002

\`\`\`css
.item {
  width: 0;
  flex: 1;
}
\`\`\`

<FlexItemBox :itemStyle="{flex: 1, width: 0}" />

<kbd>flex</kbd> \u6709\u4E24\u4E2A\u5FEB\u6377\u53D6\u503C <kbd>auto(1 1 auto)</kbd> \u548C <kbd>none(0 0 auto)</kbd>\u3002

\`\`\`css
.item {
  flex: none;
}
\`\`\`

\u63A8\u8350\u4F7F\u7528\u7B80\u5199\u5C5E\u6027\u800C\u4E0D\u662F\u5206\u5F00\u5199\u4E09\u4E2A\u5C5E\u6027\u3002

`,title:"flex",level:1,content:`# flex

flex \u662F <kbd>flex-grow</kbd>\u3001<kbd>flex-shrink</kbd>\u3001<kbd>flex-basis</kbd> \u7684\u7B80\u5199\u5F62\u5F0F

<kbd>flex</kbd> \u7684\u53D6\u503C\u5982\u4E0B

\`\`\`css
flex: flex-grow flex-shrink flex-basis;
\`\`\`

\u540E\u9762\u4E24\u4E2A\u53D6\u503C\u4E3A\u53EF\u9009\uFF0C\u9ED8\u8BA4\u503C\u4E3A <kbd>flex: 0 1 auto;</kbd>\u3002

\`\`\`css
.item {
  width: 0;
  flex: 1;
}
\`\`\`

<FlexItemBox :itemStyle="{flex: 1, width: 0}" />

<kbd>flex</kbd> \u6709\u4E24\u4E2A\u5FEB\u6377\u53D6\u503C <kbd>auto(1 1 auto)</kbd> \u548C <kbd>none(0 0 auto)</kbd>\u3002

\`\`\`css
.item {
  flex: none;
}
\`\`\`

\u63A8\u8350\u4F7F\u7528\u7B80\u5199\u5C5E\u6027\u800C\u4E0D\u662F\u5206\u5F00\u5199\u4E09\u4E2A\u5C5E\u6027\u3002`,frontmatter:{layout:"image-right",image:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/flexitem-bg.hcg0d0nlcm.jpeg"},index:19,start:987,end:1025,notesHTML:"",filepath:"/home/runner/work/slides-flex/slides-flex/slides.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:n2,meta:{layout:"image-left",image:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/order-bg.49niyspoqso0.jpeg",slide:{raw:`---
layout: image-left
image: >-
  https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/order-bg.49niyspoqso0.jpeg
---

# order

\u63A7\u5236\u5B50\u9879\u7684\u6392\u5217\u987A\u5E8F

\u5B50\u9879\u5728\u5BB9\u5668\u4E2D\u7684\u6392\u5E8F\u662F\u6839\u636E DOM \u7684\u5148\u540E\u987A\u5E8F\u6765\u7684\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 <kbd>order</kbd> \u5C5E\u6027\u6765\u6539\u53D8\u5148\u540E\u987A\u5E8F\uFF0C\u5B83\u7684\u53D6\u503C\u4E3A\u4E00\u4E2A\u6570\u5B57\uFF0C\u503C\u8D8A\u5C0F\u8D8A\u9760\u524D\uFF0C\u9ED8\u8BA4\u53D6\u503C\u4E3A 0.

\`\`\`css
.item1: {
  order: 1;
}
.item3 {
  order: -1;
}
\`\`\`

<FlexItemBox :itemStyles="[
{order: 1}, {}, {order: -1}
]" />

`,title:"order",level:1,content:`# order

\u63A7\u5236\u5B50\u9879\u7684\u6392\u5217\u987A\u5E8F

\u5B50\u9879\u5728\u5BB9\u5668\u4E2D\u7684\u6392\u5E8F\u662F\u6839\u636E DOM \u7684\u5148\u540E\u987A\u5E8F\u6765\u7684\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 <kbd>order</kbd> \u5C5E\u6027\u6765\u6539\u53D8\u5148\u540E\u987A\u5E8F\uFF0C\u5B83\u7684\u53D6\u503C\u4E3A\u4E00\u4E2A\u6570\u5B57\uFF0C\u503C\u8D8A\u5C0F\u8D8A\u9760\u524D\uFF0C\u9ED8\u8BA4\u53D6\u503C\u4E3A 0.

\`\`\`css
.item1: {
  order: 1;
}
.item3 {
  order: -1;
}
\`\`\`

<FlexItemBox :itemStyles="[
{order: 1}, {}, {order: -1}
]" />`,frontmatter:{layout:"image-left",image:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/order-bg.49niyspoqso0.jpeg"},index:20,start:1025,end:1051,notesHTML:"",filepath:"/home/runner/work/slides-flex/slides-flex/slides.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:r2,meta:{layout:"image-right",image:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/alignSelf-bg.54op6h5ecqo0.jpeg",slide:{raw:`---
layout: image-right
image: >-
  https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/alignSelf-bg.54op6h5ecqo0.jpeg
---

# align-self

\u63A7\u5236\u5B50\u9879\u5728\u526F\u8F74\u4E0A\u7684\u5BF9\u9F50\u65B9\u5F0F

<v-clicks>

\u4E4B\u524D\u6211\u4EEC\u4ECB\u7ECD\u8FC7 <kbd>align-items</kbd> \u4E0E <kbd>align-content</kbd> \u5C5E\u6027\uFF0C\u5B83\u4EEC\u90FD\u662F\u5199\u5728\u5BB9\u5668\u4E0A\u7684\u5C5E\u6027\uFF0C\u63A7\u5236\u4E00\u884C\u6216\u8005\u591A\u884C\u5728\u526F\u8F74\u4E0A\u7684\u5BF9\u9F50\u65B9\u5F0F\u3002\u800C <kbd>align-self</kbd>
\u63A7\u5236\u7684\u662F\u67D0\u4E2A\u5B50\u9879\u5728\u526F\u8F74\u4E0A\u7684\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u5B83\u5141\u8BB8\u67D0\u4E2A\u5B50\u9879\u4E0E\u5176\u4ED6\u5B50\u9879\u6709\u4E0D\u540C\u7684\u5BF9\u9F50\u65B9\u5F0F\u3002

\u5B83\u7684\u53D6\u503C\u540C <kbd>align-items</kbd>\uFF0C\u9ED8\u8BA4\u53D6\u503C\u4E3A <kbd>auto</kbd>\uFF0C\u8868\u793A\u7EE7\u627F\u7236\u5143\u7D20\u7684 <kbd>align-items</kbd> \u5C5E\u6027\u3002

\`\`\`css
.container {
  align-items: flex-start;
}
.item2 {
  align-self: center;
}
.item4 {
  align-self: flex-end;
}
\`\`\`

<FlexItemBox :containerStyle="{height: '200px', alignItems: 'flex-start'}" :itemStyles="[
{},
{alignSelf: 'center'},
{},
{alignSelf: 'flex-end'}
]" />

</v-clicks>

`,title:"align-self",level:1,content:`# align-self

\u63A7\u5236\u5B50\u9879\u5728\u526F\u8F74\u4E0A\u7684\u5BF9\u9F50\u65B9\u5F0F

<v-clicks>

\u4E4B\u524D\u6211\u4EEC\u4ECB\u7ECD\u8FC7 <kbd>align-items</kbd> \u4E0E <kbd>align-content</kbd> \u5C5E\u6027\uFF0C\u5B83\u4EEC\u90FD\u662F\u5199\u5728\u5BB9\u5668\u4E0A\u7684\u5C5E\u6027\uFF0C\u63A7\u5236\u4E00\u884C\u6216\u8005\u591A\u884C\u5728\u526F\u8F74\u4E0A\u7684\u5BF9\u9F50\u65B9\u5F0F\u3002\u800C <kbd>align-self</kbd>
\u63A7\u5236\u7684\u662F\u67D0\u4E2A\u5B50\u9879\u5728\u526F\u8F74\u4E0A\u7684\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u5B83\u5141\u8BB8\u67D0\u4E2A\u5B50\u9879\u4E0E\u5176\u4ED6\u5B50\u9879\u6709\u4E0D\u540C\u7684\u5BF9\u9F50\u65B9\u5F0F\u3002

\u5B83\u7684\u53D6\u503C\u540C <kbd>align-items</kbd>\uFF0C\u9ED8\u8BA4\u53D6\u503C\u4E3A <kbd>auto</kbd>\uFF0C\u8868\u793A\u7EE7\u627F\u7236\u5143\u7D20\u7684 <kbd>align-items</kbd> \u5C5E\u6027\u3002

\`\`\`css
.container {
  align-items: flex-start;
}
.item2 {
  align-self: center;
}
.item4 {
  align-self: flex-end;
}
\`\`\`

<FlexItemBox :containerStyle="{height: '200px', alignItems: 'flex-start'}" :itemStyles="[
{},
{alignSelf: 'center'},
{},
{alignSelf: 'flex-end'}
]" />

</v-clicks>`,frontmatter:{layout:"image-right",image:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/alignSelf-bg.54op6h5ecqo0.jpeg"},index:21,start:1051,end:1090,notesHTML:"",filepath:"/home/runner/work/slides-flex/slides-flex/slides.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:u2,meta:{layout:"cover",background:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/prac-bg.3lqgj1bku2s0.jpeg",slide:{raw:`---
layout: cover
background: >-
  https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/prac-bg.3lqgj1bku2s0.jpeg
---

# \u5B9E\u6218\uFF1A\u9AB0\u5B50

`,title:"\u5B9E\u6218\uFF1A\u9AB0\u5B50",level:1,content:"# \u5B9E\u6218\uFF1A\u9AB0\u5B50",frontmatter:{layout:"cover",background:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/prac-bg.3lqgj1bku2s0.jpeg"},index:22,start:1090,end:1099,notesHTML:"",filepath:"/home/runner/work/slides-flex/slides-flex/slides.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:H2,meta:{slide:{raw:`
# \u6F14\u793A

<div grid="~ cols-3 gap-20" m="t-12">

<Dice1 />
<Dice2 />
<Dice3 />
<Dice4 />
<Dice5 />
<Dice6 />

</div>

`,title:"\u6F14\u793A",level:1,content:`# \u6F14\u793A

<div grid="~ cols-3 gap-20" m="t-12">

<Dice1 />
<Dice2 />
<Dice3 />
<Dice4 />
<Dice5 />
<Dice6 />

</div>`,frontmatter:{},index:23,start:1100,end:1115,notesHTML:"",filepath:"/home/runner/work/slides-flex/slides-flex/slides.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:o$,meta:{slide:{raw:`
# \u5177\u4F53\u5B9E\u73B0

<div grid="~ cols-3 gap-2">
<div>

<Dice1 />

<br>
<br>
<br>

<v-clicks>

\`\`\`html
<div class="container">
  <div class="pip"></div>
</div>
\`\`\`

\`\`\`css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
\`\`\`

</v-clicks>

</div>

<div>

<Dice2 />

<br>
<br>
<br>

<v-clicks>

\`\`\`html
<div class="container">
  <div class="pip"></div>
  <div class="pip"></div>
</div>
\`\`\`

\`\`\`css
.container {
  display: flex;
  justify-content: space-between;
}
.pip:nth-child(2) {
  align-self: flex-end;
}
\`\`\`

</v-clicks>

</div>

<div>

<Dice3 />

<br>
<br>
<br>

<v-clicks>

\`\`\`html
<div class="container">
  <div class="pip"></div>
  <div class="pip"></div>
  <div class="pip"></div>
</div>
\`\`\`

\`\`\`css
.container {
  display: flex;
  justify-content: space-between;
}
.pip:nth-child(2) {
  align-self: center;
}
.pip:nth-child(3) {
  align-self: flex-end;
}
\`\`\`

</v-clicks>

</div>

</div>

`,title:"\u5177\u4F53\u5B9E\u73B0",level:1,content:`# \u5177\u4F53\u5B9E\u73B0

<div grid="~ cols-3 gap-2">
<div>

<Dice1 />

<br>
<br>
<br>

<v-clicks>

\`\`\`html
<div class="container">
  <div class="pip"></div>
</div>
\`\`\`

\`\`\`css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
\`\`\`

</v-clicks>

</div>

<div>

<Dice2 />

<br>
<br>
<br>

<v-clicks>

\`\`\`html
<div class="container">
  <div class="pip"></div>
  <div class="pip"></div>
</div>
\`\`\`

\`\`\`css
.container {
  display: flex;
  justify-content: space-between;
}
.pip:nth-child(2) {
  align-self: flex-end;
}
\`\`\`

</v-clicks>

</div>

<div>

<Dice3 />

<br>
<br>
<br>

<v-clicks>

\`\`\`html
<div class="container">
  <div class="pip"></div>
  <div class="pip"></div>
  <div class="pip"></div>
</div>
\`\`\`

\`\`\`css
.container {
  display: flex;
  justify-content: space-between;
}
.pip:nth-child(2) {
  align-self: center;
}
.pip:nth-child(3) {
  align-self: flex-end;
}
\`\`\`

</v-clicks>

</div>

</div>`,frontmatter:{},index:24,start:1116,end:1217,notesHTML:"",filepath:"/home/runner/work/slides-flex/slides-flex/slides.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:v$,meta:{slide:{raw:`
<div grid="~ cols-3 gap-2">
<div>

<Dice4 />

<br>

<v-clicks>

\`\`\`html
<div class="container">
  <div class="column">
    <div class="pip"></div>
    <div class="pip"></div>
  </div>
  <div class="column">
    <div class="pip"></div>
    <div class="pip"></div>
  </div>
</div>
\`\`\`

\`\`\`css
.container {
  display: flex;
  justify-content: space-between;
}
.column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
\`\`\`

</v-clicks>

</div>

<div>

<Dice5 />

<br>

<div style="transform: scale(.98);transform-origin: left top;">

<v-clicks>

\`\`\`html
<div class="container">
  <div class="column">
    <div class="pip"></div>
    <div class="pip"></div>
  </div>
  <div class="column">
    
  </div>
  <div class="column">
    <div class="pip"></div>
    <div class="pip"></div>
  </div>
</div>
\`\`\`

\`\`\`css
.container {
  display: flex;
  justify-content: space-between;
}
.column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.column:nth-child(2) {
  justify-content: center;
}
\`\`\`

</v-clicks>

</div>

</div>

<div>

<Dice6 />

<br>

<v-clicks>

\`\`\`html
<div class="container">
  <div class="column">
    <div class="pip"></div>
    <div class="pip"></div>
    <div class="pip"></div>
  </div>
  <div class="column">
    <div class="pip"></div>
    <div class="pip"></div>
    <div class="pip"></div>
  </div>
</div>
\`\`\`

\`\`\`css
.container {
  display: flex;
  justify-content: space-between;
}
.column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
\`\`\`

</v-clicks>

</div>

</div>

`,content:`<div grid="~ cols-3 gap-2">
<div>

<Dice4 />

<br>

<v-clicks>

\`\`\`html
<div class="container">
  <div class="column">
    <div class="pip"></div>
    <div class="pip"></div>
  </div>
  <div class="column">
    <div class="pip"></div>
    <div class="pip"></div>
  </div>
</div>
\`\`\`

\`\`\`css
.container {
  display: flex;
  justify-content: space-between;
}
.column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
\`\`\`

</v-clicks>

</div>

<div>

<Dice5 />

<br>

<div style="transform: scale(.98);transform-origin: left top;">

<v-clicks>

\`\`\`html
<div class="container">
  <div class="column">
    <div class="pip"></div>
    <div class="pip"></div>
  </div>
  <div class="column">
    
  </div>
  <div class="column">
    <div class="pip"></div>
    <div class="pip"></div>
  </div>
</div>
\`\`\`

\`\`\`css
.container {
  display: flex;
  justify-content: space-between;
}
.column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.column:nth-child(2) {
  justify-content: center;
}
\`\`\`

</v-clicks>

</div>

</div>

<div>

<Dice6 />

<br>

<v-clicks>

\`\`\`html
<div class="container">
  <div class="column">
    <div class="pip"></div>
    <div class="pip"></div>
    <div class="pip"></div>
  </div>
  <div class="column">
    <div class="pip"></div>
    <div class="pip"></div>
    <div class="pip"></div>
  </div>
</div>
\`\`\`

\`\`\`css
.container {
  display: flex;
  justify-content: space-between;
}
.column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
\`\`\`

</v-clicks>

</div>

</div>`,frontmatter:{},index:25,start:1218,end:1346,notesHTML:"",filepath:"/home/runner/work/slides-flex/slides-flex/slides.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:x$,meta:{slide:{raw:`
# \u53C2\u8003\u94FE\u63A5

- [Flex \u5E03\u5C40\u6559\u7A0B\uFF1A\u8BED\u6CD5\u7BC7](https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
- [Flex \u5E03\u5C40\u6559\u7A0B\uFF1A\u5B9E\u4F8B\u7BC7](https://www.ruanyifeng.com/blog/2015/07/flex-examples.html)
- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [flex-cheatsheet](https://yoksel.github.io/flex-cheatsheet/)
- [Oh My God\uFF0CCSS flex-basis \u539F\u6765\u6709\u8FD9\u4E48\u591A\u7EC6\u8282](https://www.zhangxinxu.com/wordpress/2019/12/css-flex-basis/)
- [What are the differences between flex-basis and width?](https://stackoverflow.com/questions/34352140/what-are-the-differences-between-flex-basis-and-width)
- [Flexbox Dice](https://codepen.io/LandonSchropp/pen/KpzzGo?editors=1100)

`,title:"\u53C2\u8003\u94FE\u63A5",level:1,content:`# \u53C2\u8003\u94FE\u63A5

- [Flex \u5E03\u5C40\u6559\u7A0B\uFF1A\u8BED\u6CD5\u7BC7](https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
- [Flex \u5E03\u5C40\u6559\u7A0B\uFF1A\u5B9E\u4F8B\u7BC7](https://www.ruanyifeng.com/blog/2015/07/flex-examples.html)
- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [flex-cheatsheet](https://yoksel.github.io/flex-cheatsheet/)
- [Oh My God\uFF0CCSS flex-basis \u539F\u6765\u6709\u8FD9\u4E48\u591A\u7EC6\u8282](https://www.zhangxinxu.com/wordpress/2019/12/css-flex-basis/)
- [What are the differences between flex-basis and width?](https://stackoverflow.com/questions/34352140/what-are-the-differences-between-flex-basis-and-width)
- [Flexbox Dice](https://codepen.io/LandonSchropp/pen/KpzzGo?editors=1100)`,frontmatter:{},index:26,start:1347,end:1359,notesHTML:"",filepath:"/home/runner/work/slides-flex/slides-flex/slides.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:y$,meta:{layout:"cover",background:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/thanks-bg.4j2jdscwhkm0.jpeg",slide:{raw:`---
layout: cover
background: >-
  https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/thanks-bg.4j2jdscwhkm0.jpeg
---

# \u8C22\u8C22
`,title:"\u8C22\u8C22",level:1,content:"# \u8C22\u8C22",frontmatter:{layout:"cover",background:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/thanks-bg.4j2jdscwhkm0.jpeg"},index:27,start:1359,end:1367,notesHTML:"",filepath:"/home/runner/work/slides-flex/slides-flex/slides.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",component:v1,meta:{layout:"end"}}],Ve=w$,$$=[{name:"play",path:"/",component:c1,children:[...Ve]},{name:"print",path:"/print",component:h1},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}},{name:"presenter",path:"/presenter/:no",component:()=>gs(()=>import("./Presenter.43fb83ea.js"),["assets/Presenter.43fb83ea.js","assets/Presenter.1ea605f8.css","assets/DrawingControls.vue_vue_type_script_setup_true_lang.8c454c5a.js"]),beforeEnter:e=>{if(!Cn.remote||Cn.remote===e.query.password)return!0;if(Cn.remote&&e.query.password===void 0){const t=prompt("Enter password");if(Cn.remote===t)return!0}return e.params.no?{path:`/${e.params.no}`}:{path:""}}},{path:"/presenter",redirect:{path:"/presenter/1"}}],vt=e_({history:gv("/slides-flex/"),routes:$$});function S$(e,t,{mode:n="replace"}={}){return F({get(){const a=vt.currentRoute.value.query[e];return a==null?t!=null?t:null:Array.isArray(a)?a.filter(Boolean):a},set(a){Qe(()=>{vt[w(n)]({query:{...vt.currentRoute.value.query,[e]:a}})})}})}const Tp=q(0);Qe(()=>{vt.afterEach(async()=>{await Qe(),Tp.value+=1})});const en=F(()=>vt.currentRoute.value),li=F(()=>en.value.query.print!==void 0),E$=F(()=>en.value.query.print==="clicks"),zt=F(()=>en.value.query.embedded!==void 0),Bt=F(()=>en.value.path.startsWith("/presenter")),Rs=F(()=>li.value&&!E$.value),hl=F(()=>en.value.query.password),O$=F(()=>!Bt.value&&(!xe.remote||hl.value===xe.remote)),lc=S$("clicks","0"),Ap=F(()=>Ve.length-1),C$=F(()=>en.value.path),We=F(()=>parseInt(C$.value.split(/\//g).slice(-1)[0])||1);F(()=>ro(We.value));const ht=F(()=>Ve.find(e=>e.path===`${We.value}`));F(()=>{var e,t,n;return(n=(t=(e=ht.value)==null?void 0:e.meta)==null?void 0:t.slide)==null?void 0:n.id});F(()=>{var e,t;return(t=(e=ht.value)==null?void 0:e.meta)==null?void 0:t.layout});const Oo=F(()=>Ve.find(e=>e.path===`${Math.min(Ve.length,We.value+1)}`)),I$=F(()=>{var e,t;return Tp.value,((t=(e=ht.value)==null?void 0:e.meta)==null?void 0:t.__clicksElements)||[]}),Ft=F({get(){if(Rs.value)return 99999;let e=+(lc.value||0);return isNaN(e)&&(e=0),e},set(e){lc.value=e.toString()}}),Ba=F(()=>{var e,t,n;return+((n=(t=(e=ht.value)==null?void 0:e.meta)==null?void 0:t.clicks)!=null?n:I$.value.length)}),F$=F(()=>We.value<Ve.length-1||Ft.value<Ba.value),P$=F(()=>We.value>1||Ft.value>0),T$=F(()=>Ve.filter(e=>{var t,n;return(n=(t=e.meta)==null?void 0:t.slide)==null?void 0:n.title}).reduce((e,t)=>(ii(e,t),e),[])),A$=F(()=>ri(T$.value,ht.value));F(()=>ci(A$.value));function pn(){Ba.value<=Ft.value?Qs():Ft.value+=1}async function dn(){Ft.value<=0?await Js():Ft.value-=1}function ro(e){return Bt.value?`/presenter/${e}`:`/${e}`}function Qs(){const e=Math.min(Ve.length,We.value+1);return us(e)}async function Js(e=!0){const t=Math.max(1,We.value-1);await us(t),e&&Ba.value&&vt.replace({query:{...en.value.query,clicks:Ba.value}})}function us(e,t){return vt.push({path:ro(e),query:{...en.value.query,clicks:t}})}function j$(e){const t=q(0),{direction:n,distanceX:a,distanceY:o}=qg(e,{onSwipeStart(l){l.pointerType==="touch"&&(Zs.value||(t.value=Jo()))},onSwipeEnd(l){if(l.pointerType!=="touch"||!t.value||Zs.value)return;const i=Math.abs(a.value),c=Math.abs(o.value);i/window.innerWidth>.3||i>100?n.value===Zt.LEFT?pn():dn():(c/window.innerHeight>.4||c>200)&&(n.value===Zt.DOWN?Js():Qs())}})}async function ml(){const{saveAs:e}=await gs(()=>import("./FileSaver.min.7f56e709.js").then(t=>t.F),[]);e(Au(xe.download)?xe.download:xe.exportFilename?`${xe.exportFilename}.pdf`:"/slides-flex/slidev-exported.pdf",`${xe.title}.pdf`)}async function M$(e){var t,n;if(e==null){const a=(n=(t=ht.value)==null?void 0:t.meta)==null?void 0:n.slide;if(!(a!=null&&a.filepath))return!1;e=`${a.filepath}:${a.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function ii(e,t,n=1){var o,l,i,c,u;const a=(l=(o=t.meta)==null?void 0:o.slide)==null?void 0:l.level;a&&a>n&&e.length>0?ii(e[e.length-1].children,t,n+1):e.push({children:[],level:n,path:t.path,hideInToc:Boolean((i=t.meta)==null?void 0:i.hideInToc),title:(u=(c=t.meta)==null?void 0:c.slide)==null?void 0:u.title})}function ri(e,t,n=!1,a){return e.map(o=>{const l={...o,active:o.path===(t==null?void 0:t.path),hasActiveParent:n};return l.children.length>0&&(l.children=ri(l.children,t,l.active||l.hasActiveParent,l)),a&&(l.active||l.activeParent)&&(a.activeParent=!0),l})}function ci(e,t=1){return e.filter(n=>!n.hideInToc).map(n=>({...n,children:ci(n.children,t+1)}))}function L$(){const e=xe.titleTemplate.replace("%s",xe.title||"Slidev");Bm({title:e}),Zm(`${e} - shared`),Jm(`${e} - drawings`);function t(){Bt.value&&(dr("page",+We.value),dr("clicks",Ft.value))}vt.afterEach(t),ue(Ft,t),Gm(n=>{(+n.page!=+We.value||Ft.value!==n.clicks)&&vt.replace({path:ro(n.page),query:{...vt.currentRoute.value.query,clicks:n.clicks||0}})})}const R$=ve({__name:"App",setup(e){return V(U),L$(),(t,n)=>{const a=Fa("RouterView"),o=Fa("StarportCarrier");return E(),H(ye,null,[_(a),_(o)],64)}}});function Co(e){return e!==null&&typeof e=="object"}function gl(e,t,n=".",a){if(!Co(t))return gl(e,{},n,a);const o=Object.assign({},t);for(const l in e){if(l==="__proto__"||l==="constructor")continue;const i=e[l];i!=null&&(a&&a(o,l,i,n)||(Array.isArray(i)&&Array.isArray(o[l])?o[l]=i.concat(o[l]):Co(i)&&Co(o[l])?o[l]=gl(i,o[l],(n?`${n}.`:"")+l.toString(),a):o[l]=i))}return o}function N$(e){return(...t)=>t.reduce((n,a)=>gl(n,a,"",e),{})}const B$=N$(),jp=1/60*1e3,D$=typeof performance<"u"?()=>performance.now():()=>Date.now(),Mp=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(D$()),jp);function H$(e){let t=[],n=[],a=0,o=!1,l=!1;const i=new WeakSet,c={schedule:(u,p=!1,d=!1)=>{const f=d&&o,h=f?t:n;return p&&i.add(u),h.indexOf(u)===-1&&(h.push(u),f&&o&&(a=t.length)),u},cancel:u=>{const p=n.indexOf(u);p!==-1&&n.splice(p,1),i.delete(u)},process:u=>{if(o){l=!0;return}if(o=!0,[t,n]=[n,t],n.length=0,a=t.length,a)for(let p=0;p<a;p++){const d=t[p];d(u),i.has(d)&&(c.schedule(d),e())}o=!1,l&&(l=!1,c.process(u))}};return c}const q$=40;let vl=!0,ea=!1,_l=!1;const os={delta:0,timestamp:0},oa=["read","update","preRender","render","postRender"],co=oa.reduce((e,t)=>(e[t]=H$(()=>ea=!0),e),{}),kl=oa.reduce((e,t)=>{const n=co[t];return e[t]=(a,o=!1,l=!1)=>(ea||K$(),n.schedule(a,o,l)),e},{}),V$=oa.reduce((e,t)=>(e[t]=co[t].cancel,e),{});oa.reduce((e,t)=>(e[t]=()=>co[t].process(os),e),{});const W$=e=>co[e].process(os),Lp=e=>{ea=!1,os.delta=vl?jp:Math.max(Math.min(e-os.timestamp,q$),1),os.timestamp=e,_l=!0,oa.forEach(W$),_l=!1,ea&&(vl=!1,Mp(Lp))},K$=()=>{ea=!0,vl=!0,_l||Mp(Lp)},Rp=()=>os;function Np(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]]);return n}var z$=function(){},ic=function(){};const xl=(e,t,n)=>Math.min(Math.max(n,e),t),Io=.001,U$=.01,rc=10,Y$=.05,Z$=1;function G$({duration:e=800,bounce:t=.25,velocity:n=0,mass:a=1}){let o,l;z$(e<=rc*1e3);let i=1-t;i=xl(Y$,Z$,i),e=xl(U$,rc,e/1e3),i<1?(o=p=>{const d=p*i,f=d*e,h=d-n,g=bl(p,i),m=Math.exp(-f);return Io-h/g*m},l=p=>{const f=p*i*e,h=f*n+n,g=Math.pow(i,2)*Math.pow(p,2)*e,m=Math.exp(-f),x=bl(Math.pow(p,2),i);return(-o(p)+Io>0?-1:1)*((h-g)*m)/x}):(o=p=>{const d=Math.exp(-p*e),f=(p-n)*e+1;return-Io+d*f},l=p=>{const d=Math.exp(-p*e),f=(n-p)*(e*e);return d*f});const c=5/e,u=Q$(o,l,c);if(e=e*1e3,isNaN(u))return{stiffness:100,damping:10,duration:e};{const p=Math.pow(u,2)*a;return{stiffness:p,damping:i*2*Math.sqrt(a*p),duration:e}}}const X$=12;function Q$(e,t,n){let a=n;for(let o=1;o<X$;o++)a=a-e(a)/t(a);return a}function bl(e,t){return e*Math.sqrt(1-t*t)}const J$=["duration","bounce"],eS=["stiffness","damping","mass"];function cc(e,t){return t.some(n=>e[n]!==void 0)}function tS(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!cc(e,eS)&&cc(e,J$)){const n=G$(e);t=Object.assign(Object.assign(Object.assign({},t),n),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function ui(e){var{from:t=0,to:n=1,restSpeed:a=2,restDelta:o}=e,l=Np(e,["from","to","restSpeed","restDelta"]);const i={done:!1,value:t};let{stiffness:c,damping:u,mass:p,velocity:d,duration:f,isResolvedFromDuration:h}=tS(l),g=uc,m=uc;function x(){const b=d?-(d/1e3):0,y=n-t,S=u/(2*Math.sqrt(c*p)),$=Math.sqrt(c/p)/1e3;if(o===void 0&&(o=Math.min(Math.abs(n-t)/100,.4)),S<1){const I=bl($,S);g=M=>{const L=Math.exp(-S*$*M);return n-L*((b+S*$*y)/I*Math.sin(I*M)+y*Math.cos(I*M))},m=M=>{const L=Math.exp(-S*$*M);return S*$*L*(Math.sin(I*M)*(b+S*$*y)/I+y*Math.cos(I*M))-L*(Math.cos(I*M)*(b+S*$*y)-I*y*Math.sin(I*M))}}else if(S===1)g=I=>n-Math.exp(-$*I)*(y+(b+$*y)*I);else{const I=$*Math.sqrt(S*S-1);g=M=>{const L=Math.exp(-S*$*M),B=Math.min(I*M,300);return n-L*((b+S*$*y)*Math.sinh(B)+I*y*Math.cosh(B))/I}}}return x(),{next:b=>{const y=g(b);if(h)i.done=b>=f;else{const S=m(b)*1e3,$=Math.abs(S)<=a,I=Math.abs(n-y)<=o;i.done=$&&I}return i.value=i.done?n:y,i},flipTarget:()=>{d=-d,[t,n]=[n,t],x()}}}ui.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const uc=e=>0,Bp=(e,t,n)=>{const a=t-e;return a===0?1:(n-e)/a},pi=(e,t,n)=>-n*e+n*t+e,Dp=(e,t)=>n=>Math.max(Math.min(n,t),e),Ns=e=>e%1?Number(e.toFixed(5)):e,ta=/(-)?([\d]*\.?[\d])+/g,yl=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,nS=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function la(e){return typeof e=="string"}const ia={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Bs=Object.assign(Object.assign({},ia),{transform:Dp(0,1)}),va=Object.assign(Object.assign({},ia),{default:1}),di=e=>({test:t=>la(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),kn=di("deg"),Ds=di("%"),le=di("px"),pc=Object.assign(Object.assign({},Ds),{parse:e=>Ds.parse(e)/100,transform:e=>Ds.transform(e*100)}),fi=(e,t)=>n=>Boolean(la(n)&&nS.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),Hp=(e,t,n)=>a=>{if(!la(a))return a;const[o,l,i,c]=a.match(ta);return{[e]:parseFloat(o),[t]:parseFloat(l),[n]:parseFloat(i),alpha:c!==void 0?parseFloat(c):1}},Fn={test:fi("hsl","hue"),parse:Hp("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:a=1})=>"hsla("+Math.round(e)+", "+Ds.transform(Ns(t))+", "+Ds.transform(Ns(n))+", "+Ns(Bs.transform(a))+")"},sS=Dp(0,255),Fo=Object.assign(Object.assign({},ia),{transform:e=>Math.round(sS(e))}),ln={test:fi("rgb","red"),parse:Hp("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:a=1})=>"rgba("+Fo.transform(e)+", "+Fo.transform(t)+", "+Fo.transform(n)+", "+Ns(Bs.transform(a))+")"};function aS(e){let t="",n="",a="",o="";return e.length>5?(t=e.substr(1,2),n=e.substr(3,2),a=e.substr(5,2),o=e.substr(7,2)):(t=e.substr(1,1),n=e.substr(2,1),a=e.substr(3,1),o=e.substr(4,1),t+=t,n+=n,a+=a,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(a,16),alpha:o?parseInt(o,16)/255:1}}const wl={test:fi("#"),parse:aS,transform:ln.transform},rt={test:e=>ln.test(e)||wl.test(e)||Fn.test(e),parse:e=>ln.test(e)?ln.parse(e):Fn.test(e)?Fn.parse(e):wl.parse(e),transform:e=>la(e)?e:e.hasOwnProperty("red")?ln.transform(e):Fn.transform(e)},qp="${c}",Vp="${n}";function oS(e){var t,n,a,o;return isNaN(e)&&la(e)&&((n=(t=e.match(ta))===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)+((o=(a=e.match(yl))===null||a===void 0?void 0:a.length)!==null&&o!==void 0?o:0)>0}function Wp(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0;const a=e.match(yl);a&&(n=a.length,e=e.replace(yl,qp),t.push(...a.map(rt.parse)));const o=e.match(ta);return o&&(e=e.replace(ta,Vp),t.push(...o.map(ia.parse))),{values:t,numColors:n,tokenised:e}}function Kp(e){return Wp(e).values}function zp(e){const{values:t,numColors:n,tokenised:a}=Wp(e),o=t.length;return l=>{let i=a;for(let c=0;c<o;c++)i=i.replace(c<n?qp:Vp,c<n?rt.transform(l[c]):Ns(l[c]));return i}}const lS=e=>typeof e=="number"?0:e;function iS(e){const t=Kp(e);return zp(e)(t.map(lS))}const ra={test:oS,parse:Kp,createTransformer:zp,getAnimatableNone:iS},rS=new Set(["brightness","contrast","saturate","opacity"]);function cS(e){let[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[a]=n.match(ta)||[];if(!a)return e;const o=n.replace(a,"");let l=rS.has(t)?1:0;return a!==n&&(l*=100),t+"("+l+o+")"}const uS=/([a-z-]*)\(.*?\)/g,$l=Object.assign(Object.assign({},ra),{getAnimatableNone:e=>{const t=e.match(uS);return t?t.map(cS).join(" "):e}});function Po(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function dc({hue:e,saturation:t,lightness:n,alpha:a}){e/=360,t/=100,n/=100;let o=0,l=0,i=0;if(!t)o=l=i=n;else{const c=n<.5?n*(1+t):n+t-n*t,u=2*n-c;o=Po(u,c,e+1/3),l=Po(u,c,e),i=Po(u,c,e-1/3)}return{red:Math.round(o*255),green:Math.round(l*255),blue:Math.round(i*255),alpha:a}}const pS=(e,t,n)=>{const a=e*e,o=t*t;return Math.sqrt(Math.max(0,n*(o-a)+a))},dS=[wl,ln,Fn],fc=e=>dS.find(t=>t.test(e)),Up=(e,t)=>{let n=fc(e),a=fc(t),o=n.parse(e),l=a.parse(t);n===Fn&&(o=dc(o),n=ln),a===Fn&&(l=dc(l),a=ln);const i=Object.assign({},o);return c=>{for(const u in i)u!=="alpha"&&(i[u]=pS(o[u],l[u],c));return i.alpha=pi(o.alpha,l.alpha,c),n.transform(i)}},fS=e=>typeof e=="number",hS=(e,t)=>n=>t(e(n)),Yp=(...e)=>e.reduce(hS);function Zp(e,t){return fS(e)?n=>pi(e,t,n):rt.test(e)?Up(e,t):Xp(e,t)}const Gp=(e,t)=>{const n=[...e],a=n.length,o=e.map((l,i)=>Zp(l,t[i]));return l=>{for(let i=0;i<a;i++)n[i]=o[i](l);return n}},mS=(e,t)=>{const n=Object.assign(Object.assign({},e),t),a={};for(const o in n)e[o]!==void 0&&t[o]!==void 0&&(a[o]=Zp(e[o],t[o]));return o=>{for(const l in a)n[l]=a[l](o);return n}};function hc(e){const t=ra.parse(e),n=t.length;let a=0,o=0,l=0;for(let i=0;i<n;i++)a||typeof t[i]=="number"?a++:t[i].hue!==void 0?l++:o++;return{parsed:t,numNumbers:a,numRGB:o,numHSL:l}}const Xp=(e,t)=>{const n=ra.createTransformer(t),a=hc(e),o=hc(t);return a.numHSL===o.numHSL&&a.numRGB===o.numRGB&&a.numNumbers>=o.numNumbers?Yp(Gp(a.parsed,o.parsed),n):i=>`${i>0?t:e}`},gS=(e,t)=>n=>pi(e,t,n);function vS(e){if(typeof e=="number")return gS;if(typeof e=="string")return rt.test(e)?Up:Xp;if(Array.isArray(e))return Gp;if(typeof e=="object")return mS}function _S(e,t,n){const a=[],o=n||vS(e[0]),l=e.length-1;for(let i=0;i<l;i++){let c=o(e[i],e[i+1]);if(t){const u=Array.isArray(t)?t[i]:t;c=Yp(u,c)}a.push(c)}return a}function kS([e,t],[n]){return a=>n(Bp(e,t,a))}function xS(e,t){const n=e.length,a=n-1;return o=>{let l=0,i=!1;if(o<=e[0]?i=!0:o>=e[a]&&(l=a-1,i=!0),!i){let u=1;for(;u<n&&!(e[u]>o||u===a);u++);l=u-1}const c=Bp(e[l],e[l+1],o);return t[l](c)}}function Qp(e,t,{clamp:n=!0,ease:a,mixer:o}={}){const l=e.length;ic(l===t.length),ic(!a||!Array.isArray(a)||a.length===l-1),e[0]>e[l-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const i=_S(t,a,o),c=l===2?kS(e,i):xS(e,i);return n?u=>c(xl(e[0],e[l-1],u)):c}const uo=e=>t=>1-e(1-t),hi=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,bS=e=>t=>Math.pow(t,e),Jp=e=>t=>t*t*((e+1)*t-e),yS=e=>{const t=Jp(e);return n=>(n*=2)<1?.5*t(n):.5*(2-Math.pow(2,-10*(n-1)))},ed=1.525,wS=4/11,$S=8/11,SS=9/10,td=e=>e,mi=bS(2),ES=uo(mi),nd=hi(mi),sd=e=>1-Math.sin(Math.acos(e)),ad=uo(sd),OS=hi(ad),gi=Jp(ed),CS=uo(gi),IS=hi(gi),FS=yS(ed),PS=4356/361,TS=35442/1805,AS=16061/1805,Da=e=>{if(e===1||e===0)return e;const t=e*e;return e<wS?7.5625*t:e<$S?9.075*t-9.9*e+3.4:e<SS?PS*t-TS*e+AS:10.8*e*e-20.52*e+10.72},jS=uo(Da),MS=e=>e<.5?.5*(1-Da(1-e*2)):.5*Da(e*2-1)+.5;function LS(e,t){return e.map(()=>t||nd).splice(0,e.length-1)}function RS(e){const t=e.length;return e.map((n,a)=>a!==0?a/(t-1):0)}function NS(e,t){return e.map(n=>n*t)}function Sa({from:e=0,to:t=1,ease:n,offset:a,duration:o=300}){const l={done:!1,value:e},i=Array.isArray(t)?t:[e,t],c=NS(a&&a.length===i.length?a:RS(i),o);function u(){return Qp(c,i,{ease:Array.isArray(n)?n:LS(i,n)})}let p=u();return{next:d=>(l.value=p(d),l.done=d>=o,l),flipTarget:()=>{i.reverse(),p=u()}}}function BS({velocity:e=0,from:t=0,power:n=.8,timeConstant:a=350,restDelta:o=.5,modifyTarget:l}){const i={done:!1,value:t};let c=n*e;const u=t+c,p=l===void 0?u:l(u);return p!==u&&(c=p-t),{next:d=>{const f=-c*Math.exp(-d/a);return i.done=!(f>o||f<-o),i.value=i.done?p:p+f,i},flipTarget:()=>{}}}const mc={keyframes:Sa,spring:ui,decay:BS};function DS(e){if(Array.isArray(e.to))return Sa;if(mc[e.type])return mc[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?Sa:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?ui:Sa}function od(e,t,n=0){return e-t-n}function HS(e,t,n=0,a=!0){return a?od(t+-e,t,n):t-(e-t)+n}function qS(e,t,n,a){return a?e>=t+n:e<=-n}const VS=e=>{const t=({delta:n})=>e(n);return{start:()=>kl.update(t,!0),stop:()=>V$.update(t)}};function ld(e){var t,n,{from:a,autoplay:o=!0,driver:l=VS,elapsed:i=0,repeat:c=0,repeatType:u="loop",repeatDelay:p=0,onPlay:d,onStop:f,onComplete:h,onRepeat:g,onUpdate:m}=e,x=Np(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:b}=x,y,S=0,$=x.duration,I,M=!1,L=!0,B;const Q=DS(x);!((n=(t=Q).needsInterpolation)===null||n===void 0)&&n.call(t,a,b)&&(B=Qp([0,100],[a,b],{clamp:!1}),a=0,b=100);const ce=Q(Object.assign(Object.assign({},x),{from:a,to:b}));function pe(){S++,u==="reverse"?(L=S%2===0,i=HS(i,$,p,L)):(i=od(i,$,p),u==="mirror"&&ce.flipTarget()),M=!1,g&&g()}function _e(){y.stop(),h&&h()}function Ke(Le){if(L||(Le=-Le),i+=Le,!M){const Pe=ce.next(Math.max(0,i));I=Pe.value,B&&(I=B(I)),M=L?Pe.done:i<=0}m==null||m(I),M&&(S===0&&($!=null||($=i)),S<c?qS(i,$,p,L)&&pe():_e())}function He(){d==null||d(),y=l(Ke),y.start()}return o&&He(),{stop:()=>{f==null||f(),y.stop()}}}function id(e,t){return t?e*(1e3/t):0}function WS({from:e=0,velocity:t=0,min:n,max:a,power:o=.8,timeConstant:l=750,bounceStiffness:i=500,bounceDamping:c=10,restDelta:u=1,modifyTarget:p,driver:d,onUpdate:f,onComplete:h,onStop:g}){let m;function x($){return n!==void 0&&$<n||a!==void 0&&$>a}function b($){return n===void 0?a:a===void 0||Math.abs(n-$)<Math.abs(a-$)?n:a}function y($){m==null||m.stop(),m=ld(Object.assign(Object.assign({},$),{driver:d,onUpdate:I=>{var M;f==null||f(I),(M=$.onUpdate)===null||M===void 0||M.call($,I)},onComplete:h,onStop:g}))}function S($){y(Object.assign({type:"spring",stiffness:i,damping:c,restDelta:u},$))}if(x(e))S({from:e,velocity:t,to:b(e)});else{let $=o*t+e;typeof p<"u"&&($=p($));const I=b($),M=I===n?-1:1;let L,B;const Q=ce=>{L=B,B=ce,t=id(ce-L,Rp().delta),(M===1&&ce>I||M===-1&&ce<I)&&S({from:ce,to:I,velocity:t})};y({type:"decay",from:e,velocity:t,timeConstant:l,power:o,restDelta:u,modifyTarget:p,onUpdate:x($)?Q:void 0})}return{stop:()=>m==null?void 0:m.stop()}}const rd=(e,t)=>1-3*t+3*e,cd=(e,t)=>3*t-6*e,ud=e=>3*e,Ha=(e,t,n)=>((rd(t,n)*e+cd(t,n))*e+ud(t))*e,pd=(e,t,n)=>3*rd(t,n)*e*e+2*cd(t,n)*e+ud(t),KS=1e-7,zS=10;function US(e,t,n,a,o){let l,i,c=0;do i=t+(n-t)/2,l=Ha(i,a,o)-e,l>0?n=i:t=i;while(Math.abs(l)>KS&&++c<zS);return i}const YS=8,ZS=.001;function GS(e,t,n,a){for(let o=0;o<YS;++o){const l=pd(t,n,a);if(l===0)return t;t-=(Ha(t,n,a)-e)/l}return t}const Ea=11,_a=1/(Ea-1);function XS(e,t,n,a){if(e===t&&n===a)return td;const o=new Float32Array(Ea);for(let i=0;i<Ea;++i)o[i]=Ha(i*_a,e,n);function l(i){let c=0,u=1;const p=Ea-1;for(;u!==p&&o[u]<=i;++u)c+=_a;--u;const d=(i-o[u])/(o[u+1]-o[u]),f=c+d*_a,h=pd(f,e,n);return h>=ZS?GS(i,f,e,n):h===0?f:US(i,c,c+_a,e,n)}return i=>i===0||i===1?i:Ha(l(i),t,a)}const To={};class QS{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,n,a){if(!!this.subscriptions.size)for(const o of this.subscriptions)o(t,n,a)}clear(){this.subscriptions.clear()}}const gc=e=>!isNaN(parseFloat(e));class JS{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new QS,this.canTrackVelocity=!1,this.updateAndNotify=n=>{this.prev=this.current,this.current=n;const{delta:a,timestamp:o}=Rp();this.lastUpdated!==o&&(this.timeDelta=a,this.lastUpdated=o),kl.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>kl.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{this.canTrackVelocity||(this.canTrackVelocity=gc(this.current)),n!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=gc(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?id(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{const{stop:a}=t(n);this.stopAnimation=a}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function e4(e){return new JS(e)}const{isArray:t4}=Array;function n4(){const e=q({}),t=a=>{const o=l=>{!e.value[l]||(e.value[l].stop(),e.value[l].destroy(),delete e.value[l])};a?t4(a)?a.forEach(o):o(a):Object.keys(e.value).forEach(o)},n=(a,o,l)=>{if(e.value[a])return e.value[a];const i=e4(o);return i.onChange(c=>l[a]=c),e.value[a]=i,i};return dm(t),{motionValues:e,get:n,stop:t}}const s4=e=>Array.isArray(e),xn=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),Ao=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),a4=e=>({type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}),jo=()=>({type:"keyframes",ease:"linear",duration:300}),o4=e=>({type:"keyframes",duration:800,values:e}),vc={default:a4,x:xn,y:xn,z:xn,rotate:xn,rotateX:xn,rotateY:xn,rotateZ:xn,scaleX:Ao,scaleY:Ao,scale:Ao,backgroundColor:jo,color:jo,opacity:jo},dd=(e,t)=>{let n;return s4(t)?n=o4:n=vc[e]||vc.default,{to:t,...n(t)}},_c={...ia,transform:Math.round},fd={color:rt,backgroundColor:rt,outlineColor:rt,fill:rt,stroke:rt,borderColor:rt,borderTopColor:rt,borderRightColor:rt,borderBottomColor:rt,borderLeftColor:rt,borderWidth:le,borderTopWidth:le,borderRightWidth:le,borderBottomWidth:le,borderLeftWidth:le,borderRadius:le,radius:le,borderTopLeftRadius:le,borderTopRightRadius:le,borderBottomRightRadius:le,borderBottomLeftRadius:le,width:le,maxWidth:le,height:le,maxHeight:le,size:le,top:le,right:le,bottom:le,left:le,padding:le,paddingTop:le,paddingRight:le,paddingBottom:le,paddingLeft:le,margin:le,marginTop:le,marginRight:le,marginBottom:le,marginLeft:le,rotate:kn,rotateX:kn,rotateY:kn,rotateZ:kn,scale:va,scaleX:va,scaleY:va,scaleZ:va,skew:kn,skewX:kn,skewY:kn,distance:le,translateX:le,translateY:le,translateZ:le,x:le,y:le,z:le,perspective:le,transformPerspective:le,opacity:Bs,originX:pc,originY:pc,originZ:le,zIndex:_c,filter:$l,WebkitFilter:$l,fillOpacity:Bs,strokeOpacity:Bs,numOctaves:_c},vi=e=>fd[e],hd=(e,t)=>t&&typeof e=="number"&&t.transform?t.transform(e):e;function l4(e,t){let n=vi(e);return n!==$l&&(n=ra),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const i4={linear:td,easeIn:mi,easeInOut:nd,easeOut:ES,circIn:sd,circInOut:OS,circOut:ad,backIn:gi,backInOut:IS,backOut:CS,anticipate:FS,bounceIn:jS,bounceInOut:MS,bounceOut:Da},kc=e=>{if(Array.isArray(e)){const[t,n,a,o]=e;return XS(t,n,a,o)}else if(typeof e=="string")return i4[e];return e},r4=e=>Array.isArray(e)&&typeof e[0]!="number",xc=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&ra.test(t)&&!t.startsWith("url("));function c4(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function u4({ease:e,times:t,delay:n,...a}){const o={...a};return t&&(o.offset=t),e&&(o.ease=r4(e)?e.map(kc):kc(e)),n&&(o.elapsed=-n),o}function p4(e,t,n){return Array.isArray(t.to)&&(e.duration||(e.duration=800)),c4(t),d4(e)||(e={...e,...dd(n,t.to)}),{...t,...u4(e)}}function d4({delay:e,repeat:t,repeatType:n,repeatDelay:a,from:o,...l}){return!!Object.keys(l).length}function f4(e,t){return e[t]||e.default||e}function h4(e,t,n,a,o){const l=f4(a,e);let i=l.from===null||l.from===void 0?t.get():l.from;const c=xc(e,n);i==="none"&&c&&typeof n=="string"&&(i=l4(e,n));const u=xc(e,i);function p(f){const h={from:i,to:n,velocity:a.velocity?a.velocity:t.getVelocity(),onUpdate:g=>t.set(g)};return l.type==="inertia"||l.type==="decay"?WS({...h,...l}):ld({...p4(l,h,e),onUpdate:g=>{h.onUpdate(g),l.onUpdate&&l.onUpdate(g)},onComplete:()=>{a.onComplete&&a.onComplete(),o&&o(),f&&f()}})}function d(f){return t.set(n),a.onComplete&&a.onComplete(),o&&o(),f&&f(),{stop:()=>{}}}return!u||!c||l.type===!1?d:p}function m4(){const{motionValues:e,stop:t,get:n}=n4();return{motionValues:e,stop:t,push:(o,l,i,c={},u)=>{const p=i[o],d=n(o,p,i);if(c&&c.immediate){d.set(l);return}const f=h4(o,d,l,c,u);d.start(f)}}}function g4(e,t={},{motionValues:n,push:a,stop:o}=m4()){const l=w(t),i=q(!1);ue(n,f=>{i.value=Object.values(f).filter(h=>h.isAnimating()).length>0},{immediate:!0,deep:!0});const c=f=>{if(!l||!l[f])throw new Error(`The variant ${f} does not exist.`);return l[f]},u=f=>(typeof f=="string"&&(f=c(f)),Promise.all(Object.entries(f).map(([h,g])=>{if(h!=="transition")return new Promise(m=>{a(h,g,e,f.transition||dd(h,f[h]),m)})}).filter(Boolean)));return{isAnimating:i,apply:u,set:f=>{const h=Qo(f)?f:c(f);Object.entries(h).forEach(([g,m])=>{g!=="transition"&&a(g,m,e,{immediate:!0})})},leave:async f=>{let h;if(l&&(l.leave&&(h=l.leave),!l.leave&&l.initial&&(h=l.initial)),!h){f();return}await u(h),f()},stop:o}}const _i=typeof window<"u",v4=()=>_i&&window.onpointerdown===null,_4=()=>_i&&window.ontouchstart===null,k4=()=>_i&&window.onmousedown===null;function x4({target:e,state:t,variants:n,apply:a}){const o=w(n),l=q(!1),i=q(!1),c=q(!1),u=F(()=>{let d=[];return o&&(o.hovered&&(d=[...d,...Object.keys(o.hovered)]),o.tapped&&(d=[...d,...Object.keys(o.tapped)]),o.focused&&(d=[...d,...Object.keys(o.focused)])),d}),p=F(()=>{const d={};Object.assign(d,t.value),l.value&&o.hovered&&Object.assign(d,o.hovered),i.value&&o.tapped&&Object.assign(d,o.tapped),c.value&&o.focused&&Object.assign(d,o.focused);for(const f in d)u.value.includes(f)||delete d[f];return d});o.hovered&&(re(e,"mouseenter",()=>l.value=!0),re(e,"mouseleave",()=>{l.value=!1,i.value=!1}),re(e,"mouseout",()=>{l.value=!1,i.value=!1})),o.tapped&&(k4()&&(re(e,"mousedown",()=>i.value=!0),re(e,"mouseup",()=>i.value=!1)),v4()&&(re(e,"pointerdown",()=>i.value=!0),re(e,"pointerup",()=>i.value=!1)),_4()&&(re(e,"touchstart",()=>i.value=!0),re(e,"touchend",()=>i.value=!1))),o.focused&&(re(e,"focus",()=>c.value=!0),re(e,"blur",()=>c.value=!1)),ue(p,a)}function b4({set:e,target:t,apply:n,variants:a,variant:o}){const l=w(a);ue(()=>t,()=>{!l||(l.initial&&e("initial"),l.enter&&(o.value="enter"))},{immediate:!0,flush:"pre"})}function y4({state:e,apply:t}){ue(e,n=>{n&&t(n)},{immediate:!0})}function w4({target:e,variants:t,variant:n}){const a=w(t);a&&(a.visible||a.visibleOnce)&&Bg(e,([{isIntersecting:o}])=>{a.visible?o?n.value="visible":n.value="initial":a.visibleOnce&&(o&&n.value!=="visibleOnce"?n.value="visibleOnce":n.value||(n.value="initial"))})}function $4(e,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){t.lifeCycleHooks&&b4(e),t.syncVariants&&y4(e),t.visibilityHooks&&w4(e),t.eventListeners&&x4(e)}function md(e={}){const t=Ae({...e}),n=q({});return ue(t,()=>{const a={};for(const[o,l]of Object.entries(t)){const i=vi(o),c=hd(l,i);a[o]=c}n.value=a},{immediate:!0,deep:!0}),{state:t,style:n}}function ki(e,t){ue(()=>Ot(e),n=>{!n||t(n)},{immediate:!0})}const S4={x:"translateX",y:"translateY",z:"translateZ"};function gd(e={},t=!0){const n=Ae({...e}),a=q("");return ue(n,o=>{let l="",i=!1;t&&(o.x||o.y||o.z)&&(l+=`translate3d(${[o.x||0,o.y||0,o.z||0].map(le.transform).join(",")}) `,i=!0);for(const[c,u]of Object.entries(o)){if(t&&(c==="x"||c==="y"||c==="z"))continue;const p=vi(c),d=hd(u,p);l+=`${S4[c]||c}(${d}) `}t&&!i&&(l+="translateZ(0px) "),a.value=l.trim()},{immediate:!0,deep:!0}),{state:n,transform:a}}const E4=["","X","Y","Z"],O4=["perspective","translate","scale","rotate","skew"],vd=["transformPerspective","x","y","z"];O4.forEach(e=>{E4.forEach(t=>{const n=e+t;vd.push(n)})});const C4=new Set(vd);function xi(e){return C4.has(e)}const I4=new Set(["originX","originY","originZ"]);function _d(e){return I4.has(e)}function F4(e){const t={},n={};return Object.entries(e).forEach(([a,o])=>{xi(a)||_d(a)?t[a]=o:n[a]=o}),{transform:t,style:n}}function kd(e){const{transform:t,style:n}=F4(e),{transform:a}=gd(t),{style:o}=md(n);return a.value&&(o.value.transform=a.value),o.value}function P4(e,t){let n,a;const{state:o,style:l}=md();return ki(e,i=>{a=i;for(const c of Object.keys(fd))i.style[c]===null||i.style[c]===""||xi(c)||_d(c)||(o[c]=i.style[c]);n&&Object.entries(n).forEach(([c,u])=>i.style[c]=u),t&&t(o)}),ue(l,i=>{if(!a){n=i;return}for(const c in i)a.style[c]=i[c]},{immediate:!0}),{style:o}}function T4(e){const t=e.trim().split(/\) |\)/);if(t.length===1)return{};const n=a=>a.endsWith("px")||a.endsWith("deg")?parseFloat(a):isNaN(Number(a))?Number(a):a;return t.reduce((a,o)=>{if(!o)return a;const[l,i]=o.split("("),u=i.split(",").map(d=>n(d.endsWith(")")?d.replace(")",""):d.trim())),p=u.length===1?u[0]:u;return{...a,[l]:p}},{})}function A4(e,t){Object.entries(T4(t)).forEach(([n,a])=>{const o=["x","y","z"];if(n==="translate3d"){if(a===0){o.forEach(l=>e[l]=0);return}a.forEach((l,i)=>e[o[i]]=l);return}if(a=parseFloat(a),n==="translateX"){e.x=a;return}if(n==="translateY"){e.y=a;return}if(n==="translateZ"){e.z=a;return}e[n]=a})}function j4(e,t){let n,a;const{state:o,transform:l}=gd();return ki(e,i=>{a=i,i.style.transform&&A4(o,i.style.transform),n&&(i.style.transform=n),t&&t(o)}),ue(l,i=>{if(!a){n=i;return}a.style.transform=i},{immediate:!0}),{transform:o}}function M4(e,t){const n=Ae({}),a=i=>Object.entries(i).forEach(([c,u])=>n[c]=u),{style:o}=P4(e,a),{transform:l}=j4(e,a);return ue(n,i=>{Object.entries(i).forEach(([c,u])=>{const p=xi(c)?l:o;p[c]&&p[c]===u||(p[c]=u)})},{immediate:!0,deep:!0}),ki(e,()=>t&&a(t)),{motionProperties:n,style:o,transform:l}}function L4(e={}){const t=w(e),n=q();return{state:F(()=>{if(!!n.value)return t[n.value]}),variant:n}}function xd(e,t={},n){const{motionProperties:a}=M4(e),{variant:o,state:l}=L4(t),i=g4(a,t),c={target:e,variant:o,variants:t,state:l,motionProperties:a,...i};return $4(c,n),c}const R4=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],N4=(e,t)=>{const n=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};n&&(n.variants&&Qo(n.variants)&&(t.value={...t.value,...n.variants}),R4.forEach(a=>{if(a==="delay"){if(n&&n[a]&&Xh(n[a])){const o=n[a];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition={delay:o,...t.value.enter.transition}),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition={delay:o,...t.value.visible.transition}),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition={delay:o,...t.value.visibleOnce.transition}))}return}a==="visible-once"&&(a="visibleOnce"),n&&n[a]&&Qo(n[a])&&(t.value[a]=n[a])}))},Mo=e=>({created:(a,o,l)=>{const i=o.value&&typeof o.value=="string"?o.value:l.key;i&&To[i]&&To[i].stop();const c=q(e||{});typeof o.value=="object"&&(c.value=o.value),N4(l,c);const u=xd(a,c);a.motionInstance=u,i&&(To[i]=u)},unmounted:a=>{a.motionInstance&&a.motionInstance.stop()},getSSRProps(a,o){let{initial:l}=a.value||o&&(o==null?void 0:o.props)||{};l=w(l);const i=B$((e==null?void 0:e.initial)||{},l||{});return!i||Object.keys(i).length===0?void 0:{style:kd(i)}}}),B4={initial:{opacity:0},enter:{opacity:1}},D4={initial:{opacity:0},visible:{opacity:1}},H4={initial:{opacity:0},visibleOnce:{opacity:1}},q4={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},V4={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},W4={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},K4={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},z4={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},U4={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},Y4={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},Z4={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},G4={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},X4={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},Q4={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},J4={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},eE={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},tE={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},nE={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},sE={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},aE={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},oE={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},lE={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},iE={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},rE={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},cE={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},uE={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},pE={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},dE={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},fE={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},hE={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},Sl={__proto__:null,fade:B4,fadeVisible:D4,fadeVisibleOnce:H4,pop:q4,popVisible:V4,popVisibleOnce:W4,rollBottom:eE,rollLeft:K4,rollRight:Y4,rollTop:X4,rollVisibleBottom:tE,rollVisibleLeft:z4,rollVisibleRight:Z4,rollVisibleTop:Q4,rollVisibleOnceBottom:nE,rollVisibleOnceLeft:U4,rollVisibleOnceRight:G4,rollVisibleOnceTop:J4,slideBottom:dE,slideLeft:sE,slideRight:lE,slideTop:cE,slideVisibleBottom:fE,slideVisibleLeft:aE,slideVisibleRight:iE,slideVisibleTop:uE,slideVisibleOnceBottom:hE,slideVisibleOnceLeft:oE,slideVisibleOnceRight:rE,slideVisibleOnceTop:pE},mE=ve({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(e){var c;const t=bh(),n=Ae({});if(!e.is&&!t.default)return()=>ot("div",{});const a=F(()=>{let u;return e.preset&&(u=Sl[e.preset]),u}),o=F(()=>({initial:e.initial,enter:e.enter,leave:e.leave,visible:e.visible,visibleOnce:e.visibleOnce,hovered:e.hovered,tapped:e.tapped,focused:e.focused})),l=F(()=>{const u={...o.value,...a.value||{},...e.variants||{}};return e.delay&&(u.enter.transition={...u.enter.transition},u.enter.transition.delay=parseInt(e.delay)),u}),i=F(()=>{if(!e.is)return;let u=e.is;return typeof i.value=="string"&&!Pd(u)&&(u=Fa(u)),u});if(((c=process==null?void 0:process.env)==null?void 0:c.NODE_ENV)==="development"||(process==null?void 0:process.dev)){const u=p=>{var d;(d=p.variants)!=null&&d.initial&&p.set("initial"),setTimeout(()=>{var f,h,g;(f=p.variants)!=null&&f.enter&&p.apply("enter"),(h=p.variants)!=null&&h.visible&&p.apply("visible"),(g=p.variants)!=null&&g.visibleOnce&&p.apply("visibleOnce")},10)};Wl(()=>Object.entries(n).forEach(([p,d])=>u(d)))}return{slots:t,component:i,motionConfig:l,instances:n}},render({slots:e,motionConfig:t,instances:n,component:a}){var c;const o=kd(t.initial||{}),l=(u,p)=>(u.props||(u.props={}),u.props.style=o,u.props.onVnodeMounted=({el:d})=>{const f=xd(d,t);n[p]=f},u);if(a){const u=ot(a,void 0,e);return l(u,0),u}return(((c=e.default)==null?void 0:c.call(e))||[]).map((u,p)=>l(u,p))}});function gE(e){const t="\xE0\xE1\xE2\xE4\xE6\xE3\xE5\u0101\u0103\u0105\xE7\u0107\u010D\u0111\u010F\xE8\xE9\xEA\xEB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xEE\xEF\xED\u012B\u012F\xEC\u0142\u1E3F\xF1\u0144\u01F9\u0148\xF4\xF6\xF2\xF3\u0153\xF8\u014D\xF5\u0151\u1E55\u0155\u0159\xDF\u015B\u0161\u015F\u0219\u0165\u021B\xFB\xFC\xF9\xFA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xFF\xFD\u017E\u017A\u017C\xB7/_,:;",n="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",a=new RegExp(t.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,o=>`-${o}`).toLowerCase().replace(/\s+/g,"-").replace(a,o=>n.charAt(t.indexOf(o))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const vE={install(e,t){if(e.directive("motion",Mo()),e.component("Motion",mE),!t||t&&!t.excludePresets)for(const n in Sl){const a=Sl[n];e.directive(`motion-${gE(n)}`,Mo(a))}if(t&&t.directives)for(const n in t.directives){const a=t.directives[n];a.initial,e.directive(`motion-${n}`,Mo(a))}}};var bc;const Hs=typeof window<"u",_E=Object.prototype.toString,kE=e=>_E.call(e)==="[object Object]";Hs&&((bc=window==null?void 0:window.navigator)==null?void 0:bc.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function xE(e){return qc()?(Vc(e),!0):!1}function bE(e){var t;const n=w(e);return(t=n==null?void 0:n.$el)!=null?t:n}const yE=Hs?window:void 0,El=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ol="__vueuse_ssr_handlers__";El[Ol]=El[Ol]||{};El[Ol];function wE(e,t={}){const{immediate:n=!0,window:a=yE}=t,o=q(!1);let l=null;function i(){!o.value||!a||(e(),l=a.requestAnimationFrame(i))}function c(){!o.value&&a&&(o.value=!0,i())}function u(){o.value=!1,l!=null&&a&&(a.cancelAnimationFrame(l),l=null)}return n&&c(),xE(u),{isActive:o,pause:u,resume:c}}var yc;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(yc||(yc={}));const bi="vue-starport-injection",bd="vue-starport-options",$E={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},yd={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var SE=Object.defineProperty,qa=Object.getOwnPropertySymbols,wd=Object.prototype.hasOwnProperty,$d=Object.prototype.propertyIsEnumerable,wc=(e,t,n)=>t in e?SE(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,EE=(e,t)=>{for(var n in t||(t={}))wd.call(t,n)&&wc(e,n,t[n]);if(qa)for(var n of qa(t))$d.call(t,n)&&wc(e,n,t[n]);return e},$c=(e,t)=>{var n={};for(var a in e)wd.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&qa)for(var a of qa(e))t.indexOf(a)<0&&$d.call(e,a)&&(n[a]=e[a]);return n};const OE=ve({name:"StarportProxy",props:EE({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},yd),setup(e,t){const n=V(bi),a=F(()=>n.getInstance(e.port,e.component)),o=q(),l=a.value.generateId(),i=q(!1);return a.value.isVisible||(a.value.land(),i.value=!0),hs(async()=>{a.value.el||(a.value.el=o.value,await Qe(),i.value=!0,a.value.rect.update())}),no(async()=>{a.value.rect.update(),a.value.liftOff(),a.value.el=void 0,i.value=!1,!a.value.options.keepAlive&&(await Qe(),await Qe(),!a.value.el&&n.dispose(a.value.port))}),ue(()=>e,async()=>{a.value.props&&await Qe();const c=e,{props:u}=c,p=$c(c,["props"]);a.value.props=u||{},a.value.setLocalOptions(p)},{deep:!0,immediate:!0}),()=>{const c=e,{initialProps:u,mountedProps:p}=c,d=$c(c,["initialProps","mountedProps"]),f=te(d,(i.value?p:u)||{});return ot("div",te(f,{id:l,ref:o,"data-starport-proxy":a.value.componentId,"data-starport-landed":a.value.isLanded?"true":void 0,"data-starport-floating":a.value.isLanded?void 0:"true"}),t.slots.default?ot(t.slots.default):void 0)}}});var CE=Object.defineProperty,IE=Object.defineProperties,FE=Object.getOwnPropertyDescriptors,Sc=Object.getOwnPropertySymbols,PE=Object.prototype.hasOwnProperty,TE=Object.prototype.propertyIsEnumerable,Ec=(e,t,n)=>t in e?CE(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,AE=(e,t)=>{for(var n in t||(t={}))PE.call(t,n)&&Ec(e,n,t[n]);if(Sc)for(var n of Sc(t))TE.call(t,n)&&Ec(e,n,t[n]);return e},jE=(e,t)=>IE(e,FE(t));const ME=ve({name:"Starport",inheritAttrs:!0,props:yd,setup(e,t){const n=q(!1);return hs(()=>{n.value=!0}),()=>{var i,c;const a=(c=(i=t.slots).default)==null?void 0:c.call(i);if(!a)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(a.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${a.length}`);const o=a[0];let l=o.type;return(!kE(l)||Ln(l))&&(l={render(){return a}}),ot(OE,jE(AE({},e),{key:e.port,component:Za(l),props:o.props}))}}});function LE(e){const t=Ae({height:0,width:0,left:0,top:0,update:a,listen:l,pause:i,margin:"0px",padding:"0px"}),n=Hs?document.documentElement||document.body:void 0;function a(){if(!Hs)return;const c=bE(e);if(!c)return;const{height:u,width:p,left:d,top:f}=c.getBoundingClientRect(),h=window.getComputedStyle(c),g=h.margin,m=h.padding;Object.assign(t,{height:u,width:p,left:d,top:n.scrollTop+f,margin:g,padding:m})}const o=wE(a,{immediate:!1});function l(){!Hs||(a(),o.resume())}function i(){o.pause()}return t}let RE=(e,t=21)=>(n=t)=>{let a="",o=n;for(;o--;)a+=e[Math.random()*e.length|0];return a};const Oc=RE("abcdefghijklmnopqrstuvwxyz",5);function Cc(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function NE(e){var t;return e.name||((t=e.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}var BE=Object.defineProperty,Ic=Object.getOwnPropertySymbols,DE=Object.prototype.hasOwnProperty,HE=Object.prototype.propertyIsEnumerable,Fc=(e,t,n)=>t in e?BE(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Lo=(e,t)=>{for(var n in t||(t={}))DE.call(t,n)&&Fc(e,n,t[n]);if(Ic)for(var n of Ic(t))HE.call(t,n)&&Fc(e,n,t[n]);return e};function qE(e,t,n={}){const a=NE(t),o=Cc(a)||Oc(),l=q(),i=q(null),c=q(!1),u=q(!1),p=Bd(!0),d=q({}),f=F(()=>Lo(Lo(Lo({},$E),n),d.value)),h=q(0);let g;p.run(()=>{g=LE(l),ue(l,async y=>{y&&(u.value=!0),await Qe(),l.value||(u.value=!1)})});const m=Cc(e);function x(){return`starport-${o}-${m}-${Oc()}`}const b=x();return Ae({el:l,id:b,port:e,props:i,rect:g,scope:p,isLanded:c,isVisible:u,options:f,liftOffTime:h,component:t,componentName:a,componentId:o,generateId:x,setLocalOptions(y={}){d.value=JSON.parse(JSON.stringify(y))},elRef(){return l},liftOff(){!c.value||(c.value=!1,h.value=Date.now(),g.listen())},land(){c.value||(c.value=!0,g.pause())}})}function VE(e){const t=Ae(new Map);function n(o,l){let i=t.get(o);return i||(i=qE(o,l,e),t.set(o,i)),i.component=l,i}function a(o){var l;(l=t.get(o))==null||l.scope.stop(),t.delete(o)}return{portMap:t,dispose:a,getInstance:n}}var WE=Object.defineProperty,KE=Object.defineProperties,zE=Object.getOwnPropertyDescriptors,Pc=Object.getOwnPropertySymbols,UE=Object.prototype.hasOwnProperty,YE=Object.prototype.propertyIsEnumerable,Tc=(e,t,n)=>t in e?WE(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ZE=(e,t)=>{for(var n in t||(t={}))UE.call(t,n)&&Tc(e,n,t[n]);if(Pc)for(var n of Pc(t))YE.call(t,n)&&Tc(e,n,t[n]);return e},GE=(e,t)=>KE(e,zE(t));const XE=ve({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const t=V(bi);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const n=F(()=>t.getInstance(e.port,e.component)),a=F(()=>{var i;return((i=n.value.el)==null?void 0:i.id)||n.value.id}),o=F(()=>{const i=Date.now()-n.value.liftOffTime,c=Math.max(0,n.value.options.duration-i),u=n.value.rect,p={position:"absolute",left:0,top:0,width:`${u.width}px`,height:`${u.height}px`,margin:u.margin,padding:u.padding,transform:`translate3d(${u.left}px,${u.top}px,0px)`};return!n.value.isVisible||!n.value.el?GE(ZE({},p),{zIndex:-1,display:"none"}):(n.value.isLanded?p.display="none":Object.assign(p,{transitionProperty:"all",transitionDuration:`${c}ms`,transitionTimingFunction:n.value.options.easing}),p)}),l={};return()=>{const i=!!(n.value.isLanded&&n.value.el);return ot("div",{style:o.value,"data-starport-craft":n.value.componentId,"data-starport-landed":n.value.isLanded?"true":void 0,"data-starport-floating":n.value.isLanded?void 0:"true",onTransitionend:n.value.land},ot(ph,{to:i?`#${a.value}`:"body",disabled:!i},ot(n.value.component,te(l,n.value.props))))}}}),QE=ve({name:"StarportCarrier",setup(e,{slots:t}){const n=VE(V(bd,{}));return Bn().appContext.app.provide(bi,n),()=>{var o;return[(o=t.default)==null?void 0:o.call(t),Array.from(n.portMap.entries()).map(([l,{component:i}])=>ot(XE,{key:l,port:l,component:i}))]}}});function JE(e={}){return{install(t){t.provide(bd,e),t.component("Starport",ME),t.component("StarportCarrier",QE)}}}function e3(e){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),e.app.use(vE),e.app.use(JE({keepAlive:!0}))}function pt(e,t,n){var a,o;return(o=((a=e.instance)==null?void 0:a.$).provides[t])!=null?o:n}function t3(){return{install(e){e.directive("click",{name:"v-click",mounted(t,n){var d,f,h,g;if(Rs.value||((d=pt(n,As))==null?void 0:d.value))return;const a=pt(n,Sn),o=pt(n,Ts),l=pt(n,tl),i=n.modifiers.hide!==!1&&n.modifiers.hide!=null,c=n.modifiers.fade!==!1&&n.modifiers.fade!=null,u=((f=a==null?void 0:a.value)==null?void 0:f.length)||0,p=c?qm:_o;if(a&&!((h=a==null?void 0:a.value)!=null&&h.includes(t))&&a.value.push(t),n.value==null&&(n.value=a==null?void 0:a.value.length),!(l!=null&&l.value.has(n.value)))l==null||l.value.set(n.value,[t]);else if(!((g=l==null?void 0:l.value.get(n.value))!=null&&g.includes(t))){const m=(l==null?void 0:l.value.get(n.value))||[];l==null||l.value.set(n.value,[t].concat(m))}t==null||t.classList.toggle(yn,!0),o&&ue(o,()=>{var y;const m=(y=o==null?void 0:o.value)!=null?y:0,x=n.value!=null?m>=n.value:m>u;t.classList.contains(ko)||t.classList.toggle(p,!x),i!==!1&&i!==void 0&&t.classList.toggle(p,x),t.classList.toggle(ys,!1);const b=l==null?void 0:l.value.get(m);b==null||b.forEach((S,$)=>{S.classList.toggle(ma,!1),$===b.length-1?S.classList.toggle(ys,!0):S.classList.toggle(ma,!0)}),t.classList.contains(ys)||t.classList.toggle(ma,x)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(yn,!1);const a=pt(n,Sn);a!=null&&a.value&&nl(a.value,t)}}),e.directive("after",{name:"v-after",mounted(t,n){var c,u;if(Rs.value||((c=pt(n,As))==null?void 0:c.value))return;const a=pt(n,Sn),o=pt(n,Ts),l=pt(n,tl),i=a==null?void 0:a.value.length;n.value==null&&(n.value=a==null?void 0:a.value.length),l!=null&&l.value.has(n.value)?(u=l==null?void 0:l.value.get(n.value))==null||u.push(t):l==null||l.value.set(n.value,[t]),t==null||t.classList.toggle(yn,!0),o&&ue(o,()=>{var d,f,h;const p=((d=o.value)!=null?d:0)>=((h=(f=n.value)!=null?f:i)!=null?h:0);t.classList.contains(ko)||t.classList.toggle(_o,!p),t.classList.toggle(ys,!1),t.classList.contains(ys)||t.classList.toggle(ma,p)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(yn,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(t,n){var i,c,u;if(Rs.value||((i=pt(n,As))==null?void 0:i.value))return;const a=pt(n,Sn),o=pt(n,Ts),l=((c=a==null?void 0:a.value)==null?void 0:c.length)||0;a&&!((u=a==null?void 0:a.value)!=null&&u.includes(t))&&a.value.push(t),t==null||t.classList.toggle(yn,!0),o&&ue(o,()=>{var f;const p=(f=o==null?void 0:o.value)!=null?f:0,d=n.value!=null?p>=n.value:p>l;t.classList.toggle(_o,d),t.classList.toggle(ko,d)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(yn,!1);const a=pt(n,Sn);a!=null&&a.value&&nl(a.value,t)}})}}}function n3(e,t){const n=_p(e),a=kp(t,n.currentRoute,n.currentPage);return{nav:{...n,...a,downloadPDF:ml,next:pn,nextSlide:Qs,openInEditor:M$,prev:dn,prevSlide:Js},configs:xe,themeConfigs:F(()=>xe.themeConfig)}}function s3(){return{install(e){const t=n3(en,Ft);e.provide(U,Ae(t))}}}const _s=Uh(R$);_s.use(vt);_s.use(Lm());_s.use(t3());_s.use(s3());e3({app:_s,router:vt});_s.mount("#app");export{Os as $,me as A,we as B,at as C,s0 as D,Ja as E,ye as F,eo as G,Ft as H,Ba as I,F$ as J,Oo as K,xo as L,Zs as M,So as N,Wu as O,r1 as P,ti as Q,o1 as R,ni as S,We as T,Ap as U,d0 as V,Wt as W,jt as X,a3 as Y,Pt as Z,hp as _,s as a,ga as a0,ms as a1,In as a2,Ht as a3,pl as a4,j_ as a5,M_ as a6,L_ as a7,N_ as a8,ao as a9,Tu as aa,r3 as ab,lt as ac,z0 as ad,qu as ae,B_ as af,no as ag,e0 as ah,F as b,H as c,ve as d,U as e,ht as f,X as g,w as h,V as i,U_ as j,j$ as k,xe as l,Bm as m,Me as n,E as o,hs as p,Ae as q,q as r,o3 as s,fn as t,l3 as u,i3 as v,ue as w,_ as x,De as y,O as z};
