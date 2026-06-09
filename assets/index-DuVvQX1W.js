function PT(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function CT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var F_={exports:{}},Pu={},z_={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ra=Symbol.for("react.element"),kT=Symbol.for("react.portal"),xT=Symbol.for("react.fragment"),NT=Symbol.for("react.strict_mode"),DT=Symbol.for("react.profiler"),VT=Symbol.for("react.provider"),bT=Symbol.for("react.context"),OT=Symbol.for("react.forward_ref"),LT=Symbol.for("react.suspense"),MT=Symbol.for("react.memo"),UT=Symbol.for("react.lazy"),bm=Symbol.iterator;function jT(t){return t===null||typeof t!="object"?null:(t=bm&&t[bm]||t["@@iterator"],typeof t=="function"?t:null)}var $_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B_=Object.assign,W_={};function hs(t,e,n){this.props=t,this.context=e,this.refs=W_,this.updater=n||$_}hs.prototype.isReactComponent={};hs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};hs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function q_(){}q_.prototype=hs.prototype;function $d(t,e,n){this.props=t,this.context=e,this.refs=W_,this.updater=n||$_}var Bd=$d.prototype=new q_;Bd.constructor=$d;B_(Bd,hs.prototype);Bd.isPureReactComponent=!0;var Om=Array.isArray,H_=Object.prototype.hasOwnProperty,Wd={current:null},K_={key:!0,ref:!0,__self:!0,__source:!0};function G_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)H_.call(e,r)&&!K_.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ra,type:t,key:s,ref:o,props:i,_owner:Wd.current}}function FT(t,e){return{$$typeof:ra,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function qd(t){return typeof t=="object"&&t!==null&&t.$$typeof===ra}function zT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Lm=/\/+/g;function Nc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?zT(""+t.key):e.toString(36)}function ul(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ra:case kT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Nc(o,0):r,Om(i)?(n="",t!=null&&(n=t.replace(Lm,"$&/")+"/"),ul(i,e,n,"",function(c){return c})):i!=null&&(qd(i)&&(i=FT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Lm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Om(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Nc(s,l);o+=ul(s,e,n,u,i)}else if(u=jT(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Nc(s,l++),o+=ul(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ma(t,e,n){if(t==null)return t;var r=[],i=0;return ul(t,r,"","",function(s){return e.call(n,s,i++)}),r}function $T(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var at={current:null},cl={transition:null},BT={ReactCurrentDispatcher:at,ReactCurrentBatchConfig:cl,ReactCurrentOwner:Wd};function Q_(){throw Error("act(...) is not supported in production builds of React.")}ne.Children={map:Ma,forEach:function(t,e,n){Ma(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ma(t,function(){e++}),e},toArray:function(t){return Ma(t,function(e){return e})||[]},only:function(t){if(!qd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=hs;ne.Fragment=xT;ne.Profiler=DT;ne.PureComponent=$d;ne.StrictMode=NT;ne.Suspense=LT;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=BT;ne.act=Q_;ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=B_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Wd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)H_.call(e,u)&&!K_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:ra,type:t.type,key:i,ref:s,props:r,_owner:o}};ne.createContext=function(t){return t={$$typeof:bT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:VT,_context:t},t.Consumer=t};ne.createElement=G_;ne.createFactory=function(t){var e=G_.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:OT,render:t}};ne.isValidElement=qd;ne.lazy=function(t){return{$$typeof:UT,_payload:{_status:-1,_result:t},_init:$T}};ne.memo=function(t,e){return{$$typeof:MT,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=cl.transition;cl.transition={};try{t()}finally{cl.transition=e}};ne.unstable_act=Q_;ne.useCallback=function(t,e){return at.current.useCallback(t,e)};ne.useContext=function(t){return at.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return at.current.useDeferredValue(t)};ne.useEffect=function(t,e){return at.current.useEffect(t,e)};ne.useId=function(){return at.current.useId()};ne.useImperativeHandle=function(t,e,n){return at.current.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return at.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return at.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return at.current.useMemo(t,e)};ne.useReducer=function(t,e,n){return at.current.useReducer(t,e,n)};ne.useRef=function(t){return at.current.useRef(t)};ne.useState=function(t){return at.current.useState(t)};ne.useSyncExternalStore=function(t,e,n){return at.current.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return at.current.useTransition()};ne.version="18.3.1";z_.exports=ne;var M=z_.exports;const yh=CT(M),WT=PT({__proto__:null,default:yh},[M]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qT=M,HT=Symbol.for("react.element"),KT=Symbol.for("react.fragment"),GT=Object.prototype.hasOwnProperty,QT=qT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,JT={key:!0,ref:!0,__self:!0,__source:!0};function J_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)GT.call(e,r)&&!JT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:HT,type:t,key:s,ref:o,props:i,_owner:QT.current}}Pu.Fragment=KT;Pu.jsx=J_;Pu.jsxs=J_;F_.exports=Pu;var y=F_.exports,Y_={exports:{}},It={},X_={exports:{}},Z_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(W,Q){var X=W.length;W.push(Q);e:for(;0<X;){var me=X-1>>>1,Ie=W[me];if(0<i(Ie,Q))W[me]=Q,W[X]=Ie,X=me;else break e}}function n(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var Q=W[0],X=W.pop();if(X!==Q){W[0]=X;e:for(var me=0,Ie=W.length,br=Ie>>>1;me<br;){var At=2*(me+1)-1,Or=W[At],Ot=At+1,On=W[Ot];if(0>i(Or,X))Ot<Ie&&0>i(On,Or)?(W[me]=On,W[Ot]=X,me=Ot):(W[me]=Or,W[At]=X,me=At);else if(Ot<Ie&&0>i(On,X))W[me]=On,W[Ot]=X,me=Ot;else break e}}return Q}function i(W,Q){var X=W.sortIndex-Q.sortIndex;return X!==0?X:W.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,p=null,g=3,A=!1,C=!1,N=!1,V=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(W){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=W)r(c),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(c)}}function b(W){if(N=!1,R(W),!C)if(n(u)!==null)C=!0,Is(j);else{var Q=n(c);Q!==null&&Ss(b,Q.startTime-W)}}function j(W,Q){C=!1,N&&(N=!1,I(_),_=-1),A=!0;var X=g;try{for(R(Q),p=n(u);p!==null&&(!(p.expirationTime>Q)||W&&!P());){var me=p.callback;if(typeof me=="function"){p.callback=null,g=p.priorityLevel;var Ie=me(p.expirationTime<=Q);Q=t.unstable_now(),typeof Ie=="function"?p.callback=Ie:p===n(u)&&r(u),R(Q)}else r(u);p=n(u)}if(p!==null)var br=!0;else{var At=n(c);At!==null&&Ss(b,At.startTime-Q),br=!1}return br}finally{p=null,g=X,A=!1}}var $=!1,E=null,_=-1,w=5,S=-1;function P(){return!(t.unstable_now()-S<w)}function k(){if(E!==null){var W=t.unstable_now();S=W;var Q=!0;try{Q=E(!0,W)}finally{Q?T():($=!1,E=null)}}else $=!1}var T;if(typeof v=="function")T=function(){v(k)};else if(typeof MessageChannel<"u"){var Fe=new MessageChannel,hn=Fe.port2;Fe.port1.onmessage=k,T=function(){hn.postMessage(null)}}else T=function(){V(k,0)};function Is(W){E=W,$||($=!0,T())}function Ss(W,Q){_=V(function(){W(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(W){W.callback=null},t.unstable_continueExecution=function(){C||A||(C=!0,Is(j))},t.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<W?Math.floor(1e3/W):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(W){switch(g){case 1:case 2:case 3:var Q=3;break;default:Q=g}var X=g;g=Q;try{return W()}finally{g=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(W,Q){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var X=g;g=W;try{return Q()}finally{g=X}},t.unstable_scheduleCallback=function(W,Q,X){var me=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?me+X:me):X=me,W){case 1:var Ie=-1;break;case 2:Ie=250;break;case 5:Ie=1073741823;break;case 4:Ie=1e4;break;default:Ie=5e3}return Ie=X+Ie,W={id:f++,callback:Q,priorityLevel:W,startTime:X,expirationTime:Ie,sortIndex:-1},X>me?(W.sortIndex=X,e(c,W),n(u)===null&&W===n(c)&&(N?(I(_),_=-1):N=!0,Ss(b,X-me))):(W.sortIndex=Ie,e(u,W),C||A||(C=!0,Is(j))),W},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(W){var Q=g;return function(){var X=g;g=Q;try{return W.apply(this,arguments)}finally{g=X}}}})(Z_);X_.exports=Z_;var YT=X_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var XT=M,Tt=YT;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ev=new Set,Ao={};function ci(t,e){Xi(t,e),Xi(t+"Capture",e)}function Xi(t,e){for(Ao[t]=e,t=0;t<e.length;t++)ev.add(e[t])}var In=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_h=Object.prototype.hasOwnProperty,ZT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mm={},Um={};function eI(t){return _h.call(Um,t)?!0:_h.call(Mm,t)?!1:ZT.test(t)?Um[t]=!0:(Mm[t]=!0,!1)}function tI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function nI(t,e,n,r){if(e===null||typeof e>"u"||tI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function lt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){qe[t]=new lt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];qe[e]=new lt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){qe[t]=new lt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){qe[t]=new lt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){qe[t]=new lt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){qe[t]=new lt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){qe[t]=new lt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){qe[t]=new lt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){qe[t]=new lt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Hd=/[\-:]([a-z])/g;function Kd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Hd,Kd);qe[e]=new lt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Hd,Kd);qe[e]=new lt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Hd,Kd);qe[e]=new lt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){qe[t]=new lt(t,1,!1,t.toLowerCase(),null,!1,!1)});qe.xlinkHref=new lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){qe[t]=new lt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Gd(t,e,n,r){var i=qe.hasOwnProperty(e)?qe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(nI(e,n,i,r)&&(n=null),r||i===null?eI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Dn=XT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ua=Symbol.for("react.element"),Ci=Symbol.for("react.portal"),ki=Symbol.for("react.fragment"),Qd=Symbol.for("react.strict_mode"),vh=Symbol.for("react.profiler"),tv=Symbol.for("react.provider"),nv=Symbol.for("react.context"),Jd=Symbol.for("react.forward_ref"),Eh=Symbol.for("react.suspense"),wh=Symbol.for("react.suspense_list"),Yd=Symbol.for("react.memo"),Wn=Symbol.for("react.lazy"),rv=Symbol.for("react.offscreen"),jm=Symbol.iterator;function zs(t){return t===null||typeof t!="object"?null:(t=jm&&t[jm]||t["@@iterator"],typeof t=="function"?t:null)}var Ee=Object.assign,Dc;function Zs(t){if(Dc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Dc=e&&e[1]||""}return`
`+Dc+t}var Vc=!1;function bc(t,e){if(!t||Vc)return"";Vc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Vc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Zs(t):""}function rI(t){switch(t.tag){case 5:return Zs(t.type);case 16:return Zs("Lazy");case 13:return Zs("Suspense");case 19:return Zs("SuspenseList");case 0:case 2:case 15:return t=bc(t.type,!1),t;case 11:return t=bc(t.type.render,!1),t;case 1:return t=bc(t.type,!0),t;default:return""}}function Th(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ki:return"Fragment";case Ci:return"Portal";case vh:return"Profiler";case Qd:return"StrictMode";case Eh:return"Suspense";case wh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case nv:return(t.displayName||"Context")+".Consumer";case tv:return(t._context.displayName||"Context")+".Provider";case Jd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Yd:return e=t.displayName||null,e!==null?e:Th(t.type)||"Memo";case Wn:e=t._payload,t=t._init;try{return Th(t(e))}catch{}}return null}function iI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Th(e);case 8:return e===Qd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function yr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function iv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function sI(t){var e=iv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ja(t){t._valueTracker||(t._valueTracker=sI(t))}function sv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=iv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function bl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ih(t,e){var n=e.checked;return Ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Fm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=yr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ov(t,e){e=e.checked,e!=null&&Gd(t,"checked",e,!1)}function Sh(t,e){ov(t,e);var n=yr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ah(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ah(t,e.type,yr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function zm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ah(t,e,n){(e!=="number"||bl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var eo=Array.isArray;function zi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+yr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Rh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function $m(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(eo(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:yr(n)}}function av(t,e){var n=yr(e.value),r=yr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Bm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function lv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ph(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?lv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Fa,uv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Fa=Fa||document.createElement("div"),Fa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Fa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ro(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var uo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},oI=["Webkit","ms","Moz","O"];Object.keys(uo).forEach(function(t){oI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),uo[e]=uo[t]})});function cv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||uo.hasOwnProperty(t)&&uo[t]?(""+e).trim():e+"px"}function hv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=cv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var aI=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ch(t,e){if(e){if(aI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function kh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xh=null;function Xd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Nh=null,$i=null,Bi=null;function Wm(t){if(t=oa(t)){if(typeof Nh!="function")throw Error(U(280));var e=t.stateNode;e&&(e=Du(e),Nh(t.stateNode,t.type,e))}}function dv(t){$i?Bi?Bi.push(t):Bi=[t]:$i=t}function fv(){if($i){var t=$i,e=Bi;if(Bi=$i=null,Wm(t),e)for(t=0;t<e.length;t++)Wm(e[t])}}function pv(t,e){return t(e)}function mv(){}var Oc=!1;function gv(t,e,n){if(Oc)return t(e,n);Oc=!0;try{return pv(t,e,n)}finally{Oc=!1,($i!==null||Bi!==null)&&(mv(),fv())}}function Po(t,e){var n=t.stateNode;if(n===null)return null;var r=Du(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var Dh=!1;if(In)try{var $s={};Object.defineProperty($s,"passive",{get:function(){Dh=!0}}),window.addEventListener("test",$s,$s),window.removeEventListener("test",$s,$s)}catch{Dh=!1}function lI(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var co=!1,Ol=null,Ll=!1,Vh=null,uI={onError:function(t){co=!0,Ol=t}};function cI(t,e,n,r,i,s,o,l,u){co=!1,Ol=null,lI.apply(uI,arguments)}function hI(t,e,n,r,i,s,o,l,u){if(cI.apply(this,arguments),co){if(co){var c=Ol;co=!1,Ol=null}else throw Error(U(198));Ll||(Ll=!0,Vh=c)}}function hi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function yv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function qm(t){if(hi(t)!==t)throw Error(U(188))}function dI(t){var e=t.alternate;if(!e){if(e=hi(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return qm(i),t;if(s===r)return qm(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function _v(t){return t=dI(t),t!==null?vv(t):null}function vv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=vv(t);if(e!==null)return e;t=t.sibling}return null}var Ev=Tt.unstable_scheduleCallback,Hm=Tt.unstable_cancelCallback,fI=Tt.unstable_shouldYield,pI=Tt.unstable_requestPaint,Ae=Tt.unstable_now,mI=Tt.unstable_getCurrentPriorityLevel,Zd=Tt.unstable_ImmediatePriority,wv=Tt.unstable_UserBlockingPriority,Ml=Tt.unstable_NormalPriority,gI=Tt.unstable_LowPriority,Tv=Tt.unstable_IdlePriority,Cu=null,tn=null;function yI(t){if(tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(Cu,t,void 0,(t.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:EI,_I=Math.log,vI=Math.LN2;function EI(t){return t>>>=0,t===0?32:31-(_I(t)/vI|0)|0}var za=64,$a=4194304;function to(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ul(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=to(l):(s&=o,s!==0&&(r=to(s)))}else o=n&~i,o!==0?r=to(o):s!==0&&(r=to(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Bt(e),i=1<<n,r|=t[n],e&=~i;return r}function wI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function TI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Bt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=wI(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function bh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Iv(){var t=za;return za<<=1,!(za&4194240)&&(za=64),t}function Lc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ia(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Bt(e),t[e]=n}function II(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Bt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ef(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Bt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ae=0;function Sv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Av,tf,Rv,Pv,Cv,Oh=!1,Ba=[],nr=null,rr=null,ir=null,Co=new Map,ko=new Map,Hn=[],SI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Km(t,e){switch(t){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":Co.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ko.delete(e.pointerId)}}function Bs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=oa(e),e!==null&&tf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function AI(t,e,n,r,i){switch(e){case"focusin":return nr=Bs(nr,t,e,n,r,i),!0;case"dragenter":return rr=Bs(rr,t,e,n,r,i),!0;case"mouseover":return ir=Bs(ir,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Co.set(s,Bs(Co.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ko.set(s,Bs(ko.get(s)||null,t,e,n,r,i)),!0}return!1}function kv(t){var e=Wr(t.target);if(e!==null){var n=hi(e);if(n!==null){if(e=n.tag,e===13){if(e=yv(n),e!==null){t.blockedOn=e,Cv(t.priority,function(){Rv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function hl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Lh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);xh=r,n.target.dispatchEvent(r),xh=null}else return e=oa(n),e!==null&&tf(e),t.blockedOn=n,!1;e.shift()}return!0}function Gm(t,e,n){hl(t)&&n.delete(e)}function RI(){Oh=!1,nr!==null&&hl(nr)&&(nr=null),rr!==null&&hl(rr)&&(rr=null),ir!==null&&hl(ir)&&(ir=null),Co.forEach(Gm),ko.forEach(Gm)}function Ws(t,e){t.blockedOn===e&&(t.blockedOn=null,Oh||(Oh=!0,Tt.unstable_scheduleCallback(Tt.unstable_NormalPriority,RI)))}function xo(t){function e(i){return Ws(i,t)}if(0<Ba.length){Ws(Ba[0],t);for(var n=1;n<Ba.length;n++){var r=Ba[n];r.blockedOn===t&&(r.blockedOn=null)}}for(nr!==null&&Ws(nr,t),rr!==null&&Ws(rr,t),ir!==null&&Ws(ir,t),Co.forEach(e),ko.forEach(e),n=0;n<Hn.length;n++)r=Hn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Hn.length&&(n=Hn[0],n.blockedOn===null);)kv(n),n.blockedOn===null&&Hn.shift()}var Wi=Dn.ReactCurrentBatchConfig,jl=!0;function PI(t,e,n,r){var i=ae,s=Wi.transition;Wi.transition=null;try{ae=1,nf(t,e,n,r)}finally{ae=i,Wi.transition=s}}function CI(t,e,n,r){var i=ae,s=Wi.transition;Wi.transition=null;try{ae=4,nf(t,e,n,r)}finally{ae=i,Wi.transition=s}}function nf(t,e,n,r){if(jl){var i=Lh(t,e,n,r);if(i===null)Hc(t,e,r,Fl,n),Km(t,r);else if(AI(i,t,e,n,r))r.stopPropagation();else if(Km(t,r),e&4&&-1<SI.indexOf(t)){for(;i!==null;){var s=oa(i);if(s!==null&&Av(s),s=Lh(t,e,n,r),s===null&&Hc(t,e,r,Fl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Hc(t,e,r,null,n)}}var Fl=null;function Lh(t,e,n,r){if(Fl=null,t=Xd(r),t=Wr(t),t!==null)if(e=hi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=yv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Fl=t,null}function xv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mI()){case Zd:return 1;case wv:return 4;case Ml:case gI:return 16;case Tv:return 536870912;default:return 16}default:return 16}}var Zn=null,rf=null,dl=null;function Nv(){if(dl)return dl;var t,e=rf,n=e.length,r,i="value"in Zn?Zn.value:Zn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return dl=i.slice(t,1<r?1-r:void 0)}function fl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Wa(){return!0}function Qm(){return!1}function St(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Wa:Qm,this.isPropagationStopped=Qm,this}return Ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wa)},persist:function(){},isPersistent:Wa}),e}var ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sf=St(ds),sa=Ee({},ds,{view:0,detail:0}),kI=St(sa),Mc,Uc,qs,ku=Ee({},sa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:of,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qs&&(qs&&t.type==="mousemove"?(Mc=t.screenX-qs.screenX,Uc=t.screenY-qs.screenY):Uc=Mc=0,qs=t),Mc)},movementY:function(t){return"movementY"in t?t.movementY:Uc}}),Jm=St(ku),xI=Ee({},ku,{dataTransfer:0}),NI=St(xI),DI=Ee({},sa,{relatedTarget:0}),jc=St(DI),VI=Ee({},ds,{animationName:0,elapsedTime:0,pseudoElement:0}),bI=St(VI),OI=Ee({},ds,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),LI=St(OI),MI=Ee({},ds,{data:0}),Ym=St(MI),UI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},FI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=FI[t])?!!e[t]:!1}function of(){return zI}var $I=Ee({},sa,{key:function(t){if(t.key){var e=UI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=fl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?jI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:of,charCode:function(t){return t.type==="keypress"?fl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?fl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),BI=St($I),WI=Ee({},ku,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xm=St(WI),qI=Ee({},sa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:of}),HI=St(qI),KI=Ee({},ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),GI=St(KI),QI=Ee({},ku,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),JI=St(QI),YI=[9,13,27,32],af=In&&"CompositionEvent"in window,ho=null;In&&"documentMode"in document&&(ho=document.documentMode);var XI=In&&"TextEvent"in window&&!ho,Dv=In&&(!af||ho&&8<ho&&11>=ho),Zm=" ",eg=!1;function Vv(t,e){switch(t){case"keyup":return YI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xi=!1;function ZI(t,e){switch(t){case"compositionend":return bv(e);case"keypress":return e.which!==32?null:(eg=!0,Zm);case"textInput":return t=e.data,t===Zm&&eg?null:t;default:return null}}function eS(t,e){if(xi)return t==="compositionend"||!af&&Vv(t,e)?(t=Nv(),dl=rf=Zn=null,xi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Dv&&e.locale!=="ko"?null:e.data;default:return null}}var tS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!tS[t.type]:e==="textarea"}function Ov(t,e,n,r){dv(r),e=zl(e,"onChange"),0<e.length&&(n=new sf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var fo=null,No=null;function nS(t){Hv(t,0)}function xu(t){var e=Vi(t);if(sv(e))return t}function rS(t,e){if(t==="change")return e}var Lv=!1;if(In){var Fc;if(In){var zc="oninput"in document;if(!zc){var ng=document.createElement("div");ng.setAttribute("oninput","return;"),zc=typeof ng.oninput=="function"}Fc=zc}else Fc=!1;Lv=Fc&&(!document.documentMode||9<document.documentMode)}function rg(){fo&&(fo.detachEvent("onpropertychange",Mv),No=fo=null)}function Mv(t){if(t.propertyName==="value"&&xu(No)){var e=[];Ov(e,No,t,Xd(t)),gv(nS,e)}}function iS(t,e,n){t==="focusin"?(rg(),fo=e,No=n,fo.attachEvent("onpropertychange",Mv)):t==="focusout"&&rg()}function sS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xu(No)}function oS(t,e){if(t==="click")return xu(e)}function aS(t,e){if(t==="input"||t==="change")return xu(e)}function lS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ht=typeof Object.is=="function"?Object.is:lS;function Do(t,e){if(Ht(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!_h.call(e,i)||!Ht(t[i],e[i]))return!1}return!0}function ig(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sg(t,e){var n=ig(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ig(n)}}function Uv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Uv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function jv(){for(var t=window,e=bl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=bl(t.document)}return e}function lf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function uS(t){var e=jv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Uv(n.ownerDocument.documentElement,n)){if(r!==null&&lf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=sg(n,s);var o=sg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var cS=In&&"documentMode"in document&&11>=document.documentMode,Ni=null,Mh=null,po=null,Uh=!1;function og(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Uh||Ni==null||Ni!==bl(r)||(r=Ni,"selectionStart"in r&&lf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),po&&Do(po,r)||(po=r,r=zl(Mh,"onSelect"),0<r.length&&(e=new sf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ni)))}function qa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Di={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionend:qa("Transition","TransitionEnd")},$c={},Fv={};In&&(Fv=document.createElement("div").style,"AnimationEvent"in window||(delete Di.animationend.animation,delete Di.animationiteration.animation,delete Di.animationstart.animation),"TransitionEvent"in window||delete Di.transitionend.transition);function Nu(t){if($c[t])return $c[t];if(!Di[t])return t;var e=Di[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Fv)return $c[t]=e[n];return t}var zv=Nu("animationend"),$v=Nu("animationiteration"),Bv=Nu("animationstart"),Wv=Nu("transitionend"),qv=new Map,ag="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rr(t,e){qv.set(t,e),ci(e,[t])}for(var Bc=0;Bc<ag.length;Bc++){var Wc=ag[Bc],hS=Wc.toLowerCase(),dS=Wc[0].toUpperCase()+Wc.slice(1);Rr(hS,"on"+dS)}Rr(zv,"onAnimationEnd");Rr($v,"onAnimationIteration");Rr(Bv,"onAnimationStart");Rr("dblclick","onDoubleClick");Rr("focusin","onFocus");Rr("focusout","onBlur");Rr(Wv,"onTransitionEnd");Xi("onMouseEnter",["mouseout","mouseover"]);Xi("onMouseLeave",["mouseout","mouseover"]);Xi("onPointerEnter",["pointerout","pointerover"]);Xi("onPointerLeave",["pointerout","pointerover"]);ci("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ci("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ci("onBeforeInput",["compositionend","keypress","textInput","paste"]);ci("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ci("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ci("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var no="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fS=new Set("cancel close invalid load scroll toggle".split(" ").concat(no));function lg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,hI(r,e,void 0,t),t.currentTarget=null}function Hv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;lg(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;lg(i,l,c),s=u}}}if(Ll)throw t=Vh,Ll=!1,Vh=null,t}function de(t,e){var n=e[Bh];n===void 0&&(n=e[Bh]=new Set);var r=t+"__bubble";n.has(r)||(Kv(e,t,2,!1),n.add(r))}function qc(t,e,n){var r=0;e&&(r|=4),Kv(n,t,r,e)}var Ha="_reactListening"+Math.random().toString(36).slice(2);function Vo(t){if(!t[Ha]){t[Ha]=!0,ev.forEach(function(n){n!=="selectionchange"&&(fS.has(n)||qc(n,!1,t),qc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ha]||(e[Ha]=!0,qc("selectionchange",!1,e))}}function Kv(t,e,n,r){switch(xv(e)){case 1:var i=PI;break;case 4:i=CI;break;default:i=nf}n=i.bind(null,e,n,t),i=void 0,!Dh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Hc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Wr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}gv(function(){var c=s,f=Xd(n),p=[];e:{var g=qv.get(t);if(g!==void 0){var A=sf,C=t;switch(t){case"keypress":if(fl(n)===0)break e;case"keydown":case"keyup":A=BI;break;case"focusin":C="focus",A=jc;break;case"focusout":C="blur",A=jc;break;case"beforeblur":case"afterblur":A=jc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=Jm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=NI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=HI;break;case zv:case $v:case Bv:A=bI;break;case Wv:A=GI;break;case"scroll":A=kI;break;case"wheel":A=JI;break;case"copy":case"cut":case"paste":A=LI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Xm}var N=(e&4)!==0,V=!N&&t==="scroll",I=N?g!==null?g+"Capture":null:g;N=[];for(var v=c,R;v!==null;){R=v;var b=R.stateNode;if(R.tag===5&&b!==null&&(R=b,I!==null&&(b=Po(v,I),b!=null&&N.push(bo(v,b,R)))),V)break;v=v.return}0<N.length&&(g=new A(g,C,null,n,f),p.push({event:g,listeners:N}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",g&&n!==xh&&(C=n.relatedTarget||n.fromElement)&&(Wr(C)||C[Sn]))break e;if((A||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,A?(C=n.relatedTarget||n.toElement,A=c,C=C?Wr(C):null,C!==null&&(V=hi(C),C!==V||C.tag!==5&&C.tag!==6)&&(C=null)):(A=null,C=c),A!==C)){if(N=Jm,b="onMouseLeave",I="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(N=Xm,b="onPointerLeave",I="onPointerEnter",v="pointer"),V=A==null?g:Vi(A),R=C==null?g:Vi(C),g=new N(b,v+"leave",A,n,f),g.target=V,g.relatedTarget=R,b=null,Wr(f)===c&&(N=new N(I,v+"enter",C,n,f),N.target=R,N.relatedTarget=V,b=N),V=b,A&&C)t:{for(N=A,I=C,v=0,R=N;R;R=wi(R))v++;for(R=0,b=I;b;b=wi(b))R++;for(;0<v-R;)N=wi(N),v--;for(;0<R-v;)I=wi(I),R--;for(;v--;){if(N===I||I!==null&&N===I.alternate)break t;N=wi(N),I=wi(I)}N=null}else N=null;A!==null&&ug(p,g,A,N,!1),C!==null&&V!==null&&ug(p,V,C,N,!0)}}e:{if(g=c?Vi(c):window,A=g.nodeName&&g.nodeName.toLowerCase(),A==="select"||A==="input"&&g.type==="file")var j=rS;else if(tg(g))if(Lv)j=aS;else{j=sS;var $=iS}else(A=g.nodeName)&&A.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(j=oS);if(j&&(j=j(t,c))){Ov(p,j,n,f);break e}$&&$(t,g,c),t==="focusout"&&($=g._wrapperState)&&$.controlled&&g.type==="number"&&Ah(g,"number",g.value)}switch($=c?Vi(c):window,t){case"focusin":(tg($)||$.contentEditable==="true")&&(Ni=$,Mh=c,po=null);break;case"focusout":po=Mh=Ni=null;break;case"mousedown":Uh=!0;break;case"contextmenu":case"mouseup":case"dragend":Uh=!1,og(p,n,f);break;case"selectionchange":if(cS)break;case"keydown":case"keyup":og(p,n,f)}var E;if(af)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else xi?Vv(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Dv&&n.locale!=="ko"&&(xi||_!=="onCompositionStart"?_==="onCompositionEnd"&&xi&&(E=Nv()):(Zn=f,rf="value"in Zn?Zn.value:Zn.textContent,xi=!0)),$=zl(c,_),0<$.length&&(_=new Ym(_,t,null,n,f),p.push({event:_,listeners:$}),E?_.data=E:(E=bv(n),E!==null&&(_.data=E)))),(E=XI?ZI(t,n):eS(t,n))&&(c=zl(c,"onBeforeInput"),0<c.length&&(f=new Ym("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=E))}Hv(p,e)})}function bo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function zl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Po(t,n),s!=null&&r.unshift(bo(t,s,i)),s=Po(t,e),s!=null&&r.push(bo(t,s,i))),t=t.return}return r}function wi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ug(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Po(n,s),u!=null&&o.unshift(bo(n,u,l))):i||(u=Po(n,s),u!=null&&o.push(bo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var pS=/\r\n?/g,mS=/\u0000|\uFFFD/g;function cg(t){return(typeof t=="string"?t:""+t).replace(pS,`
`).replace(mS,"")}function Ka(t,e,n){if(e=cg(e),cg(t)!==e&&n)throw Error(U(425))}function $l(){}var jh=null,Fh=null;function zh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $h=typeof setTimeout=="function"?setTimeout:void 0,gS=typeof clearTimeout=="function"?clearTimeout:void 0,hg=typeof Promise=="function"?Promise:void 0,yS=typeof queueMicrotask=="function"?queueMicrotask:typeof hg<"u"?function(t){return hg.resolve(null).then(t).catch(_S)}:$h;function _S(t){setTimeout(function(){throw t})}function Kc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),xo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);xo(e)}function sr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function dg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var fs=Math.random().toString(36).slice(2),en="__reactFiber$"+fs,Oo="__reactProps$"+fs,Sn="__reactContainer$"+fs,Bh="__reactEvents$"+fs,vS="__reactListeners$"+fs,ES="__reactHandles$"+fs;function Wr(t){var e=t[en];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Sn]||n[en]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=dg(t);t!==null;){if(n=t[en])return n;t=dg(t)}return e}t=n,n=t.parentNode}return null}function oa(t){return t=t[en]||t[Sn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Vi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function Du(t){return t[Oo]||null}var Wh=[],bi=-1;function Pr(t){return{current:t}}function pe(t){0>bi||(t.current=Wh[bi],Wh[bi]=null,bi--)}function ce(t,e){bi++,Wh[bi]=t.current,t.current=e}var _r={},tt=Pr(_r),pt=Pr(!1),Zr=_r;function Zi(t,e){var n=t.type.contextTypes;if(!n)return _r;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function mt(t){return t=t.childContextTypes,t!=null}function Bl(){pe(pt),pe(tt)}function fg(t,e,n){if(tt.current!==_r)throw Error(U(168));ce(tt,e),ce(pt,n)}function Gv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,iI(t)||"Unknown",i));return Ee({},n,r)}function Wl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||_r,Zr=tt.current,ce(tt,t),ce(pt,pt.current),!0}function pg(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=Gv(t,e,Zr),r.__reactInternalMemoizedMergedChildContext=t,pe(pt),pe(tt),ce(tt,t)):pe(pt),ce(pt,n)}var pn=null,Vu=!1,Gc=!1;function Qv(t){pn===null?pn=[t]:pn.push(t)}function wS(t){Vu=!0,Qv(t)}function Cr(){if(!Gc&&pn!==null){Gc=!0;var t=0,e=ae;try{var n=pn;for(ae=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}pn=null,Vu=!1}catch(i){throw pn!==null&&(pn=pn.slice(t+1)),Ev(Zd,Cr),i}finally{ae=e,Gc=!1}}return null}var Oi=[],Li=0,ql=null,Hl=0,Rt=[],Pt=0,ei=null,mn=1,gn="";function zr(t,e){Oi[Li++]=Hl,Oi[Li++]=ql,ql=t,Hl=e}function Jv(t,e,n){Rt[Pt++]=mn,Rt[Pt++]=gn,Rt[Pt++]=ei,ei=t;var r=mn;t=gn;var i=32-Bt(r)-1;r&=~(1<<i),n+=1;var s=32-Bt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,mn=1<<32-Bt(e)+i|n<<i|r,gn=s+t}else mn=1<<s|n<<i|r,gn=t}function uf(t){t.return!==null&&(zr(t,1),Jv(t,1,0))}function cf(t){for(;t===ql;)ql=Oi[--Li],Oi[Li]=null,Hl=Oi[--Li],Oi[Li]=null;for(;t===ei;)ei=Rt[--Pt],Rt[Pt]=null,gn=Rt[--Pt],Rt[Pt]=null,mn=Rt[--Pt],Rt[Pt]=null}var wt=null,vt=null,ge=!1,jt=null;function Yv(t,e){var n=Nt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function mg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,wt=t,vt=sr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,wt=t,vt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ei!==null?{id:mn,overflow:gn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Nt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,wt=t,vt=null,!0):!1;default:return!1}}function qh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Hh(t){if(ge){var e=vt;if(e){var n=e;if(!mg(t,e)){if(qh(t))throw Error(U(418));e=sr(n.nextSibling);var r=wt;e&&mg(t,e)?Yv(r,n):(t.flags=t.flags&-4097|2,ge=!1,wt=t)}}else{if(qh(t))throw Error(U(418));t.flags=t.flags&-4097|2,ge=!1,wt=t}}}function gg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wt=t}function Ga(t){if(t!==wt)return!1;if(!ge)return gg(t),ge=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!zh(t.type,t.memoizedProps)),e&&(e=vt)){if(qh(t))throw Xv(),Error(U(418));for(;e;)Yv(t,e),e=sr(e.nextSibling)}if(gg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){vt=sr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}vt=null}}else vt=wt?sr(t.stateNode.nextSibling):null;return!0}function Xv(){for(var t=vt;t;)t=sr(t.nextSibling)}function es(){vt=wt=null,ge=!1}function hf(t){jt===null?jt=[t]:jt.push(t)}var TS=Dn.ReactCurrentBatchConfig;function Hs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function Qa(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function yg(t){var e=t._init;return e(t._payload)}function Zv(t){function e(I,v){if(t){var R=I.deletions;R===null?(I.deletions=[v],I.flags|=16):R.push(v)}}function n(I,v){if(!t)return null;for(;v!==null;)e(I,v),v=v.sibling;return null}function r(I,v){for(I=new Map;v!==null;)v.key!==null?I.set(v.key,v):I.set(v.index,v),v=v.sibling;return I}function i(I,v){return I=ur(I,v),I.index=0,I.sibling=null,I}function s(I,v,R){return I.index=R,t?(R=I.alternate,R!==null?(R=R.index,R<v?(I.flags|=2,v):R):(I.flags|=2,v)):(I.flags|=1048576,v)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,v,R,b){return v===null||v.tag!==6?(v=th(R,I.mode,b),v.return=I,v):(v=i(v,R),v.return=I,v)}function u(I,v,R,b){var j=R.type;return j===ki?f(I,v,R.props.children,b,R.key):v!==null&&(v.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Wn&&yg(j)===v.type)?(b=i(v,R.props),b.ref=Hs(I,v,R),b.return=I,b):(b=El(R.type,R.key,R.props,null,I.mode,b),b.ref=Hs(I,v,R),b.return=I,b)}function c(I,v,R,b){return v===null||v.tag!==4||v.stateNode.containerInfo!==R.containerInfo||v.stateNode.implementation!==R.implementation?(v=nh(R,I.mode,b),v.return=I,v):(v=i(v,R.children||[]),v.return=I,v)}function f(I,v,R,b,j){return v===null||v.tag!==7?(v=Qr(R,I.mode,b,j),v.return=I,v):(v=i(v,R),v.return=I,v)}function p(I,v,R){if(typeof v=="string"&&v!==""||typeof v=="number")return v=th(""+v,I.mode,R),v.return=I,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ua:return R=El(v.type,v.key,v.props,null,I.mode,R),R.ref=Hs(I,null,v),R.return=I,R;case Ci:return v=nh(v,I.mode,R),v.return=I,v;case Wn:var b=v._init;return p(I,b(v._payload),R)}if(eo(v)||zs(v))return v=Qr(v,I.mode,R,null),v.return=I,v;Qa(I,v)}return null}function g(I,v,R,b){var j=v!==null?v.key:null;if(typeof R=="string"&&R!==""||typeof R=="number")return j!==null?null:l(I,v,""+R,b);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case Ua:return R.key===j?u(I,v,R,b):null;case Ci:return R.key===j?c(I,v,R,b):null;case Wn:return j=R._init,g(I,v,j(R._payload),b)}if(eo(R)||zs(R))return j!==null?null:f(I,v,R,b,null);Qa(I,R)}return null}function A(I,v,R,b,j){if(typeof b=="string"&&b!==""||typeof b=="number")return I=I.get(R)||null,l(v,I,""+b,j);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ua:return I=I.get(b.key===null?R:b.key)||null,u(v,I,b,j);case Ci:return I=I.get(b.key===null?R:b.key)||null,c(v,I,b,j);case Wn:var $=b._init;return A(I,v,R,$(b._payload),j)}if(eo(b)||zs(b))return I=I.get(R)||null,f(v,I,b,j,null);Qa(v,b)}return null}function C(I,v,R,b){for(var j=null,$=null,E=v,_=v=0,w=null;E!==null&&_<R.length;_++){E.index>_?(w=E,E=null):w=E.sibling;var S=g(I,E,R[_],b);if(S===null){E===null&&(E=w);break}t&&E&&S.alternate===null&&e(I,E),v=s(S,v,_),$===null?j=S:$.sibling=S,$=S,E=w}if(_===R.length)return n(I,E),ge&&zr(I,_),j;if(E===null){for(;_<R.length;_++)E=p(I,R[_],b),E!==null&&(v=s(E,v,_),$===null?j=E:$.sibling=E,$=E);return ge&&zr(I,_),j}for(E=r(I,E);_<R.length;_++)w=A(E,I,_,R[_],b),w!==null&&(t&&w.alternate!==null&&E.delete(w.key===null?_:w.key),v=s(w,v,_),$===null?j=w:$.sibling=w,$=w);return t&&E.forEach(function(P){return e(I,P)}),ge&&zr(I,_),j}function N(I,v,R,b){var j=zs(R);if(typeof j!="function")throw Error(U(150));if(R=j.call(R),R==null)throw Error(U(151));for(var $=j=null,E=v,_=v=0,w=null,S=R.next();E!==null&&!S.done;_++,S=R.next()){E.index>_?(w=E,E=null):w=E.sibling;var P=g(I,E,S.value,b);if(P===null){E===null&&(E=w);break}t&&E&&P.alternate===null&&e(I,E),v=s(P,v,_),$===null?j=P:$.sibling=P,$=P,E=w}if(S.done)return n(I,E),ge&&zr(I,_),j;if(E===null){for(;!S.done;_++,S=R.next())S=p(I,S.value,b),S!==null&&(v=s(S,v,_),$===null?j=S:$.sibling=S,$=S);return ge&&zr(I,_),j}for(E=r(I,E);!S.done;_++,S=R.next())S=A(E,I,_,S.value,b),S!==null&&(t&&S.alternate!==null&&E.delete(S.key===null?_:S.key),v=s(S,v,_),$===null?j=S:$.sibling=S,$=S);return t&&E.forEach(function(k){return e(I,k)}),ge&&zr(I,_),j}function V(I,v,R,b){if(typeof R=="object"&&R!==null&&R.type===ki&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case Ua:e:{for(var j=R.key,$=v;$!==null;){if($.key===j){if(j=R.type,j===ki){if($.tag===7){n(I,$.sibling),v=i($,R.props.children),v.return=I,I=v;break e}}else if($.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Wn&&yg(j)===$.type){n(I,$.sibling),v=i($,R.props),v.ref=Hs(I,$,R),v.return=I,I=v;break e}n(I,$);break}else e(I,$);$=$.sibling}R.type===ki?(v=Qr(R.props.children,I.mode,b,R.key),v.return=I,I=v):(b=El(R.type,R.key,R.props,null,I.mode,b),b.ref=Hs(I,v,R),b.return=I,I=b)}return o(I);case Ci:e:{for($=R.key;v!==null;){if(v.key===$)if(v.tag===4&&v.stateNode.containerInfo===R.containerInfo&&v.stateNode.implementation===R.implementation){n(I,v.sibling),v=i(v,R.children||[]),v.return=I,I=v;break e}else{n(I,v);break}else e(I,v);v=v.sibling}v=nh(R,I.mode,b),v.return=I,I=v}return o(I);case Wn:return $=R._init,V(I,v,$(R._payload),b)}if(eo(R))return C(I,v,R,b);if(zs(R))return N(I,v,R,b);Qa(I,R)}return typeof R=="string"&&R!==""||typeof R=="number"?(R=""+R,v!==null&&v.tag===6?(n(I,v.sibling),v=i(v,R),v.return=I,I=v):(n(I,v),v=th(R,I.mode,b),v.return=I,I=v),o(I)):n(I,v)}return V}var ts=Zv(!0),e0=Zv(!1),Kl=Pr(null),Gl=null,Mi=null,df=null;function ff(){df=Mi=Gl=null}function pf(t){var e=Kl.current;pe(Kl),t._currentValue=e}function Kh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function qi(t,e){Gl=t,df=Mi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ft=!0),t.firstContext=null)}function Vt(t){var e=t._currentValue;if(df!==t)if(t={context:t,memoizedValue:e,next:null},Mi===null){if(Gl===null)throw Error(U(308));Mi=t,Gl.dependencies={lanes:0,firstContext:t}}else Mi=Mi.next=t;return e}var qr=null;function mf(t){qr===null?qr=[t]:qr.push(t)}function t0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,mf(e)):(n.next=i.next,i.next=n),e.interleaved=n,An(t,r)}function An(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var qn=!1;function gf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function n0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function En(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function or(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,An(t,n)}return i=r.interleaved,i===null?(e.next=e,mf(r)):(e.next=i.next,i.next=e),r.interleaved=e,An(t,n)}function pl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ef(t,n)}}function _g(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ql(t,e,n,r){var i=t.updateQueue;qn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=c=u=null,l=s;do{var g=l.lane,A=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:A,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var C=t,N=l;switch(g=e,A=n,N.tag){case 1:if(C=N.payload,typeof C=="function"){p=C.call(A,p,g);break e}p=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=N.payload,g=typeof C=="function"?C.call(A,p,g):C,g==null)break e;p=Ee({},p,g);break e;case 2:qn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else A={eventTime:A,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=A,u=p):f=f.next=A,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ni|=o,t.lanes=o,t.memoizedState=p}}function vg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var aa={},nn=Pr(aa),Lo=Pr(aa),Mo=Pr(aa);function Hr(t){if(t===aa)throw Error(U(174));return t}function yf(t,e){switch(ce(Mo,e),ce(Lo,t),ce(nn,aa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ph(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ph(e,t)}pe(nn),ce(nn,e)}function ns(){pe(nn),pe(Lo),pe(Mo)}function r0(t){Hr(Mo.current);var e=Hr(nn.current),n=Ph(e,t.type);e!==n&&(ce(Lo,t),ce(nn,n))}function _f(t){Lo.current===t&&(pe(nn),pe(Lo))}var _e=Pr(0);function Jl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Qc=[];function vf(){for(var t=0;t<Qc.length;t++)Qc[t]._workInProgressVersionPrimary=null;Qc.length=0}var ml=Dn.ReactCurrentDispatcher,Jc=Dn.ReactCurrentBatchConfig,ti=0,ve=null,De=null,Ue=null,Yl=!1,mo=!1,Uo=0,IS=0;function Qe(){throw Error(U(321))}function Ef(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ht(t[n],e[n]))return!1;return!0}function wf(t,e,n,r,i,s){if(ti=s,ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ml.current=t===null||t.memoizedState===null?PS:CS,t=n(r,i),mo){s=0;do{if(mo=!1,Uo=0,25<=s)throw Error(U(301));s+=1,Ue=De=null,e.updateQueue=null,ml.current=kS,t=n(r,i)}while(mo)}if(ml.current=Xl,e=De!==null&&De.next!==null,ti=0,Ue=De=ve=null,Yl=!1,e)throw Error(U(300));return t}function Tf(){var t=Uo!==0;return Uo=0,t}function Xt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?ve.memoizedState=Ue=t:Ue=Ue.next=t,Ue}function bt(){if(De===null){var t=ve.alternate;t=t!==null?t.memoizedState:null}else t=De.next;var e=Ue===null?ve.memoizedState:Ue.next;if(e!==null)Ue=e,De=t;else{if(t===null)throw Error(U(310));De=t,t={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Ue===null?ve.memoizedState=Ue=t:Ue=Ue.next=t}return Ue}function jo(t,e){return typeof e=="function"?e(t):e}function Yc(t){var e=bt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=De,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var f=c.lane;if((ti&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,ve.lanes|=f,ni|=f}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Ht(r,e.memoizedState)||(ft=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ve.lanes|=s,ni|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Xc(t){var e=bt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ht(s,e.memoizedState)||(ft=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function i0(){}function s0(t,e){var n=ve,r=bt(),i=e(),s=!Ht(r.memoizedState,i);if(s&&(r.memoizedState=i,ft=!0),r=r.queue,If(l0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,Fo(9,a0.bind(null,n,r,i,e),void 0,null),je===null)throw Error(U(349));ti&30||o0(n,e,i)}return i}function o0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function a0(t,e,n,r){e.value=n,e.getSnapshot=r,u0(e)&&c0(t)}function l0(t,e,n){return n(function(){u0(e)&&c0(t)})}function u0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ht(t,n)}catch{return!0}}function c0(t){var e=An(t,1);e!==null&&Wt(e,t,1,-1)}function Eg(t){var e=Xt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:jo,lastRenderedState:t},e.queue=t,t=t.dispatch=RS.bind(null,ve,t),[e.memoizedState,t]}function Fo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function h0(){return bt().memoizedState}function gl(t,e,n,r){var i=Xt();ve.flags|=t,i.memoizedState=Fo(1|e,n,void 0,r===void 0?null:r)}function bu(t,e,n,r){var i=bt();r=r===void 0?null:r;var s=void 0;if(De!==null){var o=De.memoizedState;if(s=o.destroy,r!==null&&Ef(r,o.deps)){i.memoizedState=Fo(e,n,s,r);return}}ve.flags|=t,i.memoizedState=Fo(1|e,n,s,r)}function wg(t,e){return gl(8390656,8,t,e)}function If(t,e){return bu(2048,8,t,e)}function d0(t,e){return bu(4,2,t,e)}function f0(t,e){return bu(4,4,t,e)}function p0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function m0(t,e,n){return n=n!=null?n.concat([t]):null,bu(4,4,p0.bind(null,e,t),n)}function Sf(){}function g0(t,e){var n=bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ef(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function y0(t,e){var n=bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ef(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function _0(t,e,n){return ti&21?(Ht(n,e)||(n=Iv(),ve.lanes|=n,ni|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ft=!0),t.memoizedState=n)}function SS(t,e){var n=ae;ae=n!==0&&4>n?n:4,t(!0);var r=Jc.transition;Jc.transition={};try{t(!1),e()}finally{ae=n,Jc.transition=r}}function v0(){return bt().memoizedState}function AS(t,e,n){var r=lr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},E0(t))w0(e,n);else if(n=t0(t,e,n,r),n!==null){var i=ot();Wt(n,t,r,i),T0(n,e,r)}}function RS(t,e,n){var r=lr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(E0(t))w0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Ht(l,o)){var u=e.interleaved;u===null?(i.next=i,mf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=t0(t,e,i,r),n!==null&&(i=ot(),Wt(n,t,r,i),T0(n,e,r))}}function E0(t){var e=t.alternate;return t===ve||e!==null&&e===ve}function w0(t,e){mo=Yl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function T0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ef(t,n)}}var Xl={readContext:Vt,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},PS={readContext:Vt,useCallback:function(t,e){return Xt().memoizedState=[t,e===void 0?null:e],t},useContext:Vt,useEffect:wg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,gl(4194308,4,p0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return gl(4194308,4,t,e)},useInsertionEffect:function(t,e){return gl(4,2,t,e)},useMemo:function(t,e){var n=Xt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Xt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=AS.bind(null,ve,t),[r.memoizedState,t]},useRef:function(t){var e=Xt();return t={current:t},e.memoizedState=t},useState:Eg,useDebugValue:Sf,useDeferredValue:function(t){return Xt().memoizedState=t},useTransition:function(){var t=Eg(!1),e=t[0];return t=SS.bind(null,t[1]),Xt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ve,i=Xt();if(ge){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),je===null)throw Error(U(349));ti&30||o0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,wg(l0.bind(null,r,s,t),[t]),r.flags|=2048,Fo(9,a0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Xt(),e=je.identifierPrefix;if(ge){var n=gn,r=mn;n=(r&~(1<<32-Bt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Uo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=IS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},CS={readContext:Vt,useCallback:g0,useContext:Vt,useEffect:If,useImperativeHandle:m0,useInsertionEffect:d0,useLayoutEffect:f0,useMemo:y0,useReducer:Yc,useRef:h0,useState:function(){return Yc(jo)},useDebugValue:Sf,useDeferredValue:function(t){var e=bt();return _0(e,De.memoizedState,t)},useTransition:function(){var t=Yc(jo)[0],e=bt().memoizedState;return[t,e]},useMutableSource:i0,useSyncExternalStore:s0,useId:v0,unstable_isNewReconciler:!1},kS={readContext:Vt,useCallback:g0,useContext:Vt,useEffect:If,useImperativeHandle:m0,useInsertionEffect:d0,useLayoutEffect:f0,useMemo:y0,useReducer:Xc,useRef:h0,useState:function(){return Xc(jo)},useDebugValue:Sf,useDeferredValue:function(t){var e=bt();return De===null?e.memoizedState=t:_0(e,De.memoizedState,t)},useTransition:function(){var t=Xc(jo)[0],e=bt().memoizedState;return[t,e]},useMutableSource:i0,useSyncExternalStore:s0,useId:v0,unstable_isNewReconciler:!1};function Mt(t,e){if(t&&t.defaultProps){e=Ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Gh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ou={isMounted:function(t){return(t=t._reactInternals)?hi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ot(),i=lr(t),s=En(r,i);s.payload=e,n!=null&&(s.callback=n),e=or(t,s,i),e!==null&&(Wt(e,t,i,r),pl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ot(),i=lr(t),s=En(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=or(t,s,i),e!==null&&(Wt(e,t,i,r),pl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ot(),r=lr(t),i=En(n,r);i.tag=2,e!=null&&(i.callback=e),e=or(t,i,r),e!==null&&(Wt(e,t,r,n),pl(e,t,r))}};function Tg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Do(n,r)||!Do(i,s):!0}function I0(t,e,n){var r=!1,i=_r,s=e.contextType;return typeof s=="object"&&s!==null?s=Vt(s):(i=mt(e)?Zr:tt.current,r=e.contextTypes,s=(r=r!=null)?Zi(t,i):_r),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ou,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ig(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ou.enqueueReplaceState(e,e.state,null)}function Qh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},gf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Vt(s):(s=mt(e)?Zr:tt.current,i.context=Zi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Gh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ou.enqueueReplaceState(i,i.state,null),Ql(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function rs(t,e){try{var n="",r=e;do n+=rI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Zc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Jh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var xS=typeof WeakMap=="function"?WeakMap:Map;function S0(t,e,n){n=En(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){eu||(eu=!0,od=r),Jh(t,e)},n}function A0(t,e,n){n=En(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Jh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Jh(t,e),typeof r!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Sg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new xS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=WS.bind(null,t,e,n),e.then(t,t))}function Ag(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Rg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=En(-1,1),e.tag=2,or(n,e,1))),n.lanes|=1),t)}var NS=Dn.ReactCurrentOwner,ft=!1;function st(t,e,n,r){e.child=t===null?e0(e,null,n,r):ts(e,t.child,n,r)}function Pg(t,e,n,r,i){n=n.render;var s=e.ref;return qi(e,i),r=wf(t,e,n,r,s,i),n=Tf(),t!==null&&!ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Rn(t,e,i)):(ge&&n&&uf(e),e.flags|=1,st(t,e,r,i),e.child)}function Cg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Df(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,R0(t,e,s,r,i)):(t=El(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Do,n(o,r)&&t.ref===e.ref)return Rn(t,e,i)}return e.flags|=1,t=ur(s,r),t.ref=e.ref,t.return=e,e.child=t}function R0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Do(s,r)&&t.ref===e.ref)if(ft=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ft=!0);else return e.lanes=t.lanes,Rn(t,e,i)}return Yh(t,e,n,r,i)}function P0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(ji,_t),_t|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ce(ji,_t),_t|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ce(ji,_t),_t|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ce(ji,_t),_t|=r;return st(t,e,i,n),e.child}function C0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Yh(t,e,n,r,i){var s=mt(n)?Zr:tt.current;return s=Zi(e,s),qi(e,i),n=wf(t,e,n,r,s,i),r=Tf(),t!==null&&!ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Rn(t,e,i)):(ge&&r&&uf(e),e.flags|=1,st(t,e,n,i),e.child)}function kg(t,e,n,r,i){if(mt(n)){var s=!0;Wl(e)}else s=!1;if(qi(e,i),e.stateNode===null)yl(t,e),I0(e,n,r),Qh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Vt(c):(c=mt(n)?Zr:tt.current,c=Zi(e,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Ig(e,o,r,c),qn=!1;var g=e.memoizedState;o.state=g,Ql(e,r,o,i),u=e.memoizedState,l!==r||g!==u||pt.current||qn?(typeof f=="function"&&(Gh(e,n,f,r),u=e.memoizedState),(l=qn||Tg(e,n,l,r,g,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,n0(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Mt(e.type,l),o.props=c,p=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Vt(u):(u=mt(n)?Zr:tt.current,u=Zi(e,u));var A=n.getDerivedStateFromProps;(f=typeof A=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||g!==u)&&Ig(e,o,r,u),qn=!1,g=e.memoizedState,o.state=g,Ql(e,r,o,i);var C=e.memoizedState;l!==p||g!==C||pt.current||qn?(typeof A=="function"&&(Gh(e,n,A,r),C=e.memoizedState),(c=qn||Tg(e,n,c,r,g,C,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Xh(t,e,n,r,s,i)}function Xh(t,e,n,r,i,s){C0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&pg(e,n,!1),Rn(t,e,s);r=e.stateNode,NS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ts(e,t.child,null,s),e.child=ts(e,null,l,s)):st(t,e,l,s),e.memoizedState=r.state,i&&pg(e,n,!0),e.child}function k0(t){var e=t.stateNode;e.pendingContext?fg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&fg(t,e.context,!1),yf(t,e.containerInfo)}function xg(t,e,n,r,i){return es(),hf(i),e.flags|=256,st(t,e,n,r),e.child}var Zh={dehydrated:null,treeContext:null,retryLane:0};function ed(t){return{baseLanes:t,cachePool:null,transitions:null}}function x0(t,e,n){var r=e.pendingProps,i=_e.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ce(_e,i&1),t===null)return Hh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Uu(o,r,0,null),t=Qr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ed(n),e.memoizedState=Zh,t):Af(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return DS(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ur(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=ur(l,s):(s=Qr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ed(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Zh,r}return s=t.child,t=s.sibling,r=ur(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Af(t,e){return e=Uu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ja(t,e,n,r){return r!==null&&hf(r),ts(e,t.child,null,n),t=Af(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function DS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Zc(Error(U(422))),Ja(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Uu({mode:"visible",children:r.children},i,0,null),s=Qr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ts(e,t.child,null,o),e.child.memoizedState=ed(o),e.memoizedState=Zh,s);if(!(e.mode&1))return Ja(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(U(419)),r=Zc(s,r,void 0),Ja(t,e,o,r)}if(l=(o&t.childLanes)!==0,ft||l){if(r=je,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,An(t,i),Wt(r,t,i,-1))}return Nf(),r=Zc(Error(U(421))),Ja(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=qS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,vt=sr(i.nextSibling),wt=e,ge=!0,jt=null,t!==null&&(Rt[Pt++]=mn,Rt[Pt++]=gn,Rt[Pt++]=ei,mn=t.id,gn=t.overflow,ei=e),e=Af(e,r.children),e.flags|=4096,e)}function Ng(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Kh(t.return,e,n)}function eh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function N0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(st(t,e,r.children,n),r=_e.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ng(t,n,e);else if(t.tag===19)Ng(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ce(_e,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Jl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),eh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Jl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}eh(e,!0,n,null,s);break;case"together":eh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function yl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Rn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ni|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=ur(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ur(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function VS(t,e,n){switch(e.tag){case 3:k0(e),es();break;case 5:r0(e);break;case 1:mt(e.type)&&Wl(e);break;case 4:yf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ce(Kl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ce(_e,_e.current&1),e.flags|=128,null):n&e.child.childLanes?x0(t,e,n):(ce(_e,_e.current&1),t=Rn(t,e,n),t!==null?t.sibling:null);ce(_e,_e.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return N0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(_e,_e.current),r)break;return null;case 22:case 23:return e.lanes=0,P0(t,e,n)}return Rn(t,e,n)}var D0,td,V0,b0;D0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};td=function(){};V0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Hr(nn.current);var s=null;switch(n){case"input":i=Ih(t,i),r=Ih(t,r),s=[];break;case"select":i=Ee({},i,{value:void 0}),r=Ee({},r,{value:void 0}),s=[];break;case"textarea":i=Rh(t,i),r=Rh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=$l)}Ch(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ao.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ao.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&de("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};b0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ks(t,e){if(!ge)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Je(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function bS(t,e,n){var r=e.pendingProps;switch(cf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(e),null;case 1:return mt(e.type)&&Bl(),Je(e),null;case 3:return r=e.stateNode,ns(),pe(pt),pe(tt),vf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ga(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jt!==null&&(ud(jt),jt=null))),td(t,e),Je(e),null;case 5:_f(e);var i=Hr(Mo.current);if(n=e.type,t!==null&&e.stateNode!=null)V0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return Je(e),null}if(t=Hr(nn.current),Ga(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[en]=e,r[Oo]=s,t=(e.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<no.length;i++)de(no[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":Fm(r,s),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},de("invalid",r);break;case"textarea":$m(r,s),de("invalid",r)}Ch(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ka(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ka(r.textContent,l,t),i=["children",""+l]):Ao.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&de("scroll",r)}switch(n){case"input":ja(r),zm(r,s,!0);break;case"textarea":ja(r),Bm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=$l)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=lv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[en]=e,t[Oo]=r,D0(t,e,!1,!1),e.stateNode=t;e:{switch(o=kh(n,r),n){case"dialog":de("cancel",t),de("close",t),i=r;break;case"iframe":case"object":case"embed":de("load",t),i=r;break;case"video":case"audio":for(i=0;i<no.length;i++)de(no[i],t);i=r;break;case"source":de("error",t),i=r;break;case"img":case"image":case"link":de("error",t),de("load",t),i=r;break;case"details":de("toggle",t),i=r;break;case"input":Fm(t,r),i=Ih(t,r),de("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ee({},r,{value:void 0}),de("invalid",t);break;case"textarea":$m(t,r),i=Rh(t,r),de("invalid",t);break;default:i=r}Ch(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?hv(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&uv(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ro(t,u):typeof u=="number"&&Ro(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ao.hasOwnProperty(s)?u!=null&&s==="onScroll"&&de("scroll",t):u!=null&&Gd(t,s,u,o))}switch(n){case"input":ja(t),zm(t,r,!1);break;case"textarea":ja(t),Bm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+yr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?zi(t,!!r.multiple,s,!1):r.defaultValue!=null&&zi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=$l)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Je(e),null;case 6:if(t&&e.stateNode!=null)b0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=Hr(Mo.current),Hr(nn.current),Ga(e)){if(r=e.stateNode,n=e.memoizedProps,r[en]=e,(s=r.nodeValue!==n)&&(t=wt,t!==null))switch(t.tag){case 3:Ka(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ka(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[en]=e,e.stateNode=r}return Je(e),null;case 13:if(pe(_e),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ge&&vt!==null&&e.mode&1&&!(e.flags&128))Xv(),es(),e.flags|=98560,s=!1;else if(s=Ga(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[en]=e}else es(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Je(e),s=!1}else jt!==null&&(ud(jt),jt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||_e.current&1?Ve===0&&(Ve=3):Nf())),e.updateQueue!==null&&(e.flags|=4),Je(e),null);case 4:return ns(),td(t,e),t===null&&Vo(e.stateNode.containerInfo),Je(e),null;case 10:return pf(e.type._context),Je(e),null;case 17:return mt(e.type)&&Bl(),Je(e),null;case 19:if(pe(_e),s=e.memoizedState,s===null)return Je(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ks(s,!1);else{if(Ve!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Jl(t),o!==null){for(e.flags|=128,Ks(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ce(_e,_e.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ae()>is&&(e.flags|=128,r=!0,Ks(s,!1),e.lanes=4194304)}else{if(!r)if(t=Jl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ks(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ge)return Je(e),null}else 2*Ae()-s.renderingStartTime>is&&n!==1073741824&&(e.flags|=128,r=!0,Ks(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ae(),e.sibling=null,n=_e.current,ce(_e,r?n&1|2:n&1),e):(Je(e),null);case 22:case 23:return xf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?_t&1073741824&&(Je(e),e.subtreeFlags&6&&(e.flags|=8192)):Je(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function OS(t,e){switch(cf(e),e.tag){case 1:return mt(e.type)&&Bl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ns(),pe(pt),pe(tt),vf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return _f(e),null;case 13:if(pe(_e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));es()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pe(_e),null;case 4:return ns(),null;case 10:return pf(e.type._context),null;case 22:case 23:return xf(),null;case 24:return null;default:return null}}var Ya=!1,Ze=!1,LS=typeof WeakSet=="function"?WeakSet:Set,q=null;function Ui(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(t,e,r)}else n.current=null}function nd(t,e,n){try{n()}catch(r){Te(t,e,r)}}var Dg=!1;function MS(t,e){if(jh=jl,t=jv(),lf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,p=t,g=null;t:for(;;){for(var A;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(A=p.firstChild)!==null;)g=p,p=A;for(;;){if(p===t)break t;if(g===n&&++c===i&&(l=o),g===s&&++f===r&&(u=o),(A=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=A}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fh={focusedElem:t,selectionRange:n},jl=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var N=C.memoizedProps,V=C.memoizedState,I=e.stateNode,v=I.getSnapshotBeforeUpdate(e.elementType===e.type?N:Mt(e.type,N),V);I.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var R=e.stateNode.containerInfo;R.nodeType===1?R.textContent="":R.nodeType===9&&R.documentElement&&R.removeChild(R.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(b){Te(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return C=Dg,Dg=!1,C}function go(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&nd(e,n,s)}i=i.next}while(i!==r)}}function Lu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function rd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function O0(t){var e=t.alternate;e!==null&&(t.alternate=null,O0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[en],delete e[Oo],delete e[Bh],delete e[vS],delete e[ES])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function L0(t){return t.tag===5||t.tag===3||t.tag===4}function Vg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||L0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function id(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=$l));else if(r!==4&&(t=t.child,t!==null))for(id(t,e,n),t=t.sibling;t!==null;)id(t,e,n),t=t.sibling}function sd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(sd(t,e,n),t=t.sibling;t!==null;)sd(t,e,n),t=t.sibling}var ze=null,Ut=!1;function $n(t,e,n){for(n=n.child;n!==null;)M0(t,e,n),n=n.sibling}function M0(t,e,n){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(Cu,n)}catch{}switch(n.tag){case 5:Ze||Ui(n,e);case 6:var r=ze,i=Ut;ze=null,$n(t,e,n),ze=r,Ut=i,ze!==null&&(Ut?(t=ze,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ze.removeChild(n.stateNode));break;case 18:ze!==null&&(Ut?(t=ze,n=n.stateNode,t.nodeType===8?Kc(t.parentNode,n):t.nodeType===1&&Kc(t,n),xo(t)):Kc(ze,n.stateNode));break;case 4:r=ze,i=Ut,ze=n.stateNode.containerInfo,Ut=!0,$n(t,e,n),ze=r,Ut=i;break;case 0:case 11:case 14:case 15:if(!Ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&nd(n,e,o),i=i.next}while(i!==r)}$n(t,e,n);break;case 1:if(!Ze&&(Ui(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Te(n,e,l)}$n(t,e,n);break;case 21:$n(t,e,n);break;case 22:n.mode&1?(Ze=(r=Ze)||n.memoizedState!==null,$n(t,e,n),Ze=r):$n(t,e,n);break;default:$n(t,e,n)}}function bg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new LS),e.forEach(function(r){var i=HS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Lt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:ze=l.stateNode,Ut=!1;break e;case 3:ze=l.stateNode.containerInfo,Ut=!0;break e;case 4:ze=l.stateNode.containerInfo,Ut=!0;break e}l=l.return}if(ze===null)throw Error(U(160));M0(s,o,i),ze=null,Ut=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Te(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)U0(e,t),e=e.sibling}function U0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Lt(e,t),Yt(t),r&4){try{go(3,t,t.return),Lu(3,t)}catch(N){Te(t,t.return,N)}try{go(5,t,t.return)}catch(N){Te(t,t.return,N)}}break;case 1:Lt(e,t),Yt(t),r&512&&n!==null&&Ui(n,n.return);break;case 5:if(Lt(e,t),Yt(t),r&512&&n!==null&&Ui(n,n.return),t.flags&32){var i=t.stateNode;try{Ro(i,"")}catch(N){Te(t,t.return,N)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&ov(i,s),kh(l,o);var c=kh(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?hv(i,p):f==="dangerouslySetInnerHTML"?uv(i,p):f==="children"?Ro(i,p):Gd(i,f,p,c)}switch(l){case"input":Sh(i,s);break;case"textarea":av(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var A=s.value;A!=null?zi(i,!!s.multiple,A,!1):g!==!!s.multiple&&(s.defaultValue!=null?zi(i,!!s.multiple,s.defaultValue,!0):zi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Oo]=s}catch(N){Te(t,t.return,N)}}break;case 6:if(Lt(e,t),Yt(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(N){Te(t,t.return,N)}}break;case 3:if(Lt(e,t),Yt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{xo(e.containerInfo)}catch(N){Te(t,t.return,N)}break;case 4:Lt(e,t),Yt(t);break;case 13:Lt(e,t),Yt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Cf=Ae())),r&4&&bg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Ze=(c=Ze)||f,Lt(e,t),Ze=c):Lt(e,t),Yt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(q=t,f=t.child;f!==null;){for(p=q=f;q!==null;){switch(g=q,A=g.child,g.tag){case 0:case 11:case 14:case 15:go(4,g,g.return);break;case 1:Ui(g,g.return);var C=g.stateNode;if(typeof C.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(N){Te(r,n,N)}}break;case 5:Ui(g,g.return);break;case 22:if(g.memoizedState!==null){Lg(p);continue}}A!==null?(A.return=g,q=A):Lg(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=cv("display",o))}catch(N){Te(t,t.return,N)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(N){Te(t,t.return,N)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Lt(e,t),Yt(t),r&4&&bg(t);break;case 21:break;default:Lt(e,t),Yt(t)}}function Yt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(L0(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ro(i,""),r.flags&=-33);var s=Vg(t);sd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Vg(t);id(t,l,o);break;default:throw Error(U(161))}}catch(u){Te(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function US(t,e,n){q=t,j0(t)}function j0(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ya;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Ze;l=Ya;var c=Ze;if(Ya=o,(Ze=u)&&!c)for(q=i;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?Mg(i):u!==null?(u.return=o,q=u):Mg(i);for(;s!==null;)q=s,j0(s),s=s.sibling;q=i,Ya=l,Ze=c}Og(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):Og(t)}}function Og(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ze||Lu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ze)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Mt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&vg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}vg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&xo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}Ze||e.flags&512&&rd(e)}catch(g){Te(e,e.return,g)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function Lg(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function Mg(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Lu(4,e)}catch(u){Te(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Te(e,i,u)}}var s=e.return;try{rd(e)}catch(u){Te(e,s,u)}break;case 5:var o=e.return;try{rd(e)}catch(u){Te(e,o,u)}}}catch(u){Te(e,e.return,u)}if(e===t){q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,q=l;break}q=e.return}}var jS=Math.ceil,Zl=Dn.ReactCurrentDispatcher,Rf=Dn.ReactCurrentOwner,Dt=Dn.ReactCurrentBatchConfig,se=0,je=null,Ce=null,We=0,_t=0,ji=Pr(0),Ve=0,zo=null,ni=0,Mu=0,Pf=0,yo=null,dt=null,Cf=0,is=1/0,fn=null,eu=!1,od=null,ar=null,Xa=!1,er=null,tu=0,_o=0,ad=null,_l=-1,vl=0;function ot(){return se&6?Ae():_l!==-1?_l:_l=Ae()}function lr(t){return t.mode&1?se&2&&We!==0?We&-We:TS.transition!==null?(vl===0&&(vl=Iv()),vl):(t=ae,t!==0||(t=window.event,t=t===void 0?16:xv(t.type)),t):1}function Wt(t,e,n,r){if(50<_o)throw _o=0,ad=null,Error(U(185));ia(t,n,r),(!(se&2)||t!==je)&&(t===je&&(!(se&2)&&(Mu|=n),Ve===4&&Kn(t,We)),gt(t,r),n===1&&se===0&&!(e.mode&1)&&(is=Ae()+500,Vu&&Cr()))}function gt(t,e){var n=t.callbackNode;TI(t,e);var r=Ul(t,t===je?We:0);if(r===0)n!==null&&Hm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Hm(n),e===1)t.tag===0?wS(Ug.bind(null,t)):Qv(Ug.bind(null,t)),yS(function(){!(se&6)&&Cr()}),n=null;else{switch(Sv(r)){case 1:n=Zd;break;case 4:n=wv;break;case 16:n=Ml;break;case 536870912:n=Tv;break;default:n=Ml}n=K0(n,F0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function F0(t,e){if(_l=-1,vl=0,se&6)throw Error(U(327));var n=t.callbackNode;if(Hi()&&t.callbackNode!==n)return null;var r=Ul(t,t===je?We:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=nu(t,r);else{e=r;var i=se;se|=2;var s=$0();(je!==t||We!==e)&&(fn=null,is=Ae()+500,Gr(t,e));do try{$S();break}catch(l){z0(t,l)}while(!0);ff(),Zl.current=s,se=i,Ce!==null?e=0:(je=null,We=0,e=Ve)}if(e!==0){if(e===2&&(i=bh(t),i!==0&&(r=i,e=ld(t,i))),e===1)throw n=zo,Gr(t,0),Kn(t,r),gt(t,Ae()),n;if(e===6)Kn(t,r);else{if(i=t.current.alternate,!(r&30)&&!FS(i)&&(e=nu(t,r),e===2&&(s=bh(t),s!==0&&(r=s,e=ld(t,s))),e===1))throw n=zo,Gr(t,0),Kn(t,r),gt(t,Ae()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:$r(t,dt,fn);break;case 3:if(Kn(t,r),(r&130023424)===r&&(e=Cf+500-Ae(),10<e)){if(Ul(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ot(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=$h($r.bind(null,t,dt,fn),e);break}$r(t,dt,fn);break;case 4:if(Kn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Bt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*jS(r/1960))-r,10<r){t.timeoutHandle=$h($r.bind(null,t,dt,fn),r);break}$r(t,dt,fn);break;case 5:$r(t,dt,fn);break;default:throw Error(U(329))}}}return gt(t,Ae()),t.callbackNode===n?F0.bind(null,t):null}function ld(t,e){var n=yo;return t.current.memoizedState.isDehydrated&&(Gr(t,e).flags|=256),t=nu(t,e),t!==2&&(e=dt,dt=n,e!==null&&ud(e)),t}function ud(t){dt===null?dt=t:dt.push.apply(dt,t)}function FS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ht(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Kn(t,e){for(e&=~Pf,e&=~Mu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Bt(e),r=1<<n;t[n]=-1,e&=~r}}function Ug(t){if(se&6)throw Error(U(327));Hi();var e=Ul(t,0);if(!(e&1))return gt(t,Ae()),null;var n=nu(t,e);if(t.tag!==0&&n===2){var r=bh(t);r!==0&&(e=r,n=ld(t,r))}if(n===1)throw n=zo,Gr(t,0),Kn(t,e),gt(t,Ae()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,$r(t,dt,fn),gt(t,Ae()),null}function kf(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(is=Ae()+500,Vu&&Cr())}}function ri(t){er!==null&&er.tag===0&&!(se&6)&&Hi();var e=se;se|=1;var n=Dt.transition,r=ae;try{if(Dt.transition=null,ae=1,t)return t()}finally{ae=r,Dt.transition=n,se=e,!(se&6)&&Cr()}}function xf(){_t=ji.current,pe(ji)}function Gr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,gS(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(cf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Bl();break;case 3:ns(),pe(pt),pe(tt),vf();break;case 5:_f(r);break;case 4:ns();break;case 13:pe(_e);break;case 19:pe(_e);break;case 10:pf(r.type._context);break;case 22:case 23:xf()}n=n.return}if(je=t,Ce=t=ur(t.current,null),We=_t=e,Ve=0,zo=null,Pf=Mu=ni=0,dt=yo=null,qr!==null){for(e=0;e<qr.length;e++)if(n=qr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}qr=null}return t}function z0(t,e){do{var n=Ce;try{if(ff(),ml.current=Xl,Yl){for(var r=ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Yl=!1}if(ti=0,Ue=De=ve=null,mo=!1,Uo=0,Rf.current=null,n===null||n.return===null){Ve=1,zo=e,Ce=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=We,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var A=Ag(o);if(A!==null){A.flags&=-257,Rg(A,o,l,s,e),A.mode&1&&Sg(s,c,e),e=A,u=c;var C=e.updateQueue;if(C===null){var N=new Set;N.add(u),e.updateQueue=N}else C.add(u);break e}else{if(!(e&1)){Sg(s,c,e),Nf();break e}u=Error(U(426))}}else if(ge&&l.mode&1){var V=Ag(o);if(V!==null){!(V.flags&65536)&&(V.flags|=256),Rg(V,o,l,s,e),hf(rs(u,l));break e}}s=u=rs(u,l),Ve!==4&&(Ve=2),yo===null?yo=[s]:yo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=S0(s,u,e);_g(s,I);break e;case 1:l=u;var v=s.type,R=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||R!==null&&typeof R.componentDidCatch=="function"&&(ar===null||!ar.has(R)))){s.flags|=65536,e&=-e,s.lanes|=e;var b=A0(s,l,e);_g(s,b);break e}}s=s.return}while(s!==null)}W0(n)}catch(j){e=j,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(!0)}function $0(){var t=Zl.current;return Zl.current=Xl,t===null?Xl:t}function Nf(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),je===null||!(ni&268435455)&&!(Mu&268435455)||Kn(je,We)}function nu(t,e){var n=se;se|=2;var r=$0();(je!==t||We!==e)&&(fn=null,Gr(t,e));do try{zS();break}catch(i){z0(t,i)}while(!0);if(ff(),se=n,Zl.current=r,Ce!==null)throw Error(U(261));return je=null,We=0,Ve}function zS(){for(;Ce!==null;)B0(Ce)}function $S(){for(;Ce!==null&&!fI();)B0(Ce)}function B0(t){var e=H0(t.alternate,t,_t);t.memoizedProps=t.pendingProps,e===null?W0(t):Ce=e,Rf.current=null}function W0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=OS(n,e),n!==null){n.flags&=32767,Ce=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ve=6,Ce=null;return}}else if(n=bS(n,e,_t),n!==null){Ce=n;return}if(e=e.sibling,e!==null){Ce=e;return}Ce=e=t}while(e!==null);Ve===0&&(Ve=5)}function $r(t,e,n){var r=ae,i=Dt.transition;try{Dt.transition=null,ae=1,BS(t,e,n,r)}finally{Dt.transition=i,ae=r}return null}function BS(t,e,n,r){do Hi();while(er!==null);if(se&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(II(t,s),t===je&&(Ce=je=null,We=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xa||(Xa=!0,K0(Ml,function(){return Hi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dt.transition,Dt.transition=null;var o=ae;ae=1;var l=se;se|=4,Rf.current=null,MS(t,n),U0(n,t),uS(Fh),jl=!!jh,Fh=jh=null,t.current=n,US(n),pI(),se=l,ae=o,Dt.transition=s}else t.current=n;if(Xa&&(Xa=!1,er=t,tu=i),s=t.pendingLanes,s===0&&(ar=null),yI(n.stateNode),gt(t,Ae()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(eu)throw eu=!1,t=od,od=null,t;return tu&1&&t.tag!==0&&Hi(),s=t.pendingLanes,s&1?t===ad?_o++:(_o=0,ad=t):_o=0,Cr(),null}function Hi(){if(er!==null){var t=Sv(tu),e=Dt.transition,n=ae;try{if(Dt.transition=null,ae=16>t?16:t,er===null)var r=!1;else{if(t=er,er=null,tu=0,se&6)throw Error(U(331));var i=se;for(se|=4,q=t.current;q!==null;){var s=q,o=s.child;if(q.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(q=c;q!==null;){var f=q;switch(f.tag){case 0:case 11:case 15:go(8,f,s)}var p=f.child;if(p!==null)p.return=f,q=p;else for(;q!==null;){f=q;var g=f.sibling,A=f.return;if(O0(f),f===c){q=null;break}if(g!==null){g.return=A,q=g;break}q=A}}}var C=s.alternate;if(C!==null){var N=C.child;if(N!==null){C.child=null;do{var V=N.sibling;N.sibling=null,N=V}while(N!==null)}}q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:go(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,q=I;break e}q=s.return}}var v=t.current;for(q=v;q!==null;){o=q;var R=o.child;if(o.subtreeFlags&2064&&R!==null)R.return=o,q=R;else e:for(o=v;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Lu(9,l)}}catch(j){Te(l,l.return,j)}if(l===o){q=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,q=b;break e}q=l.return}}if(se=i,Cr(),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(Cu,t)}catch{}r=!0}return r}finally{ae=n,Dt.transition=e}}return!1}function jg(t,e,n){e=rs(n,e),e=S0(t,e,1),t=or(t,e,1),e=ot(),t!==null&&(ia(t,1,e),gt(t,e))}function Te(t,e,n){if(t.tag===3)jg(t,t,n);else for(;e!==null;){if(e.tag===3){jg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ar===null||!ar.has(r))){t=rs(n,t),t=A0(e,t,1),e=or(e,t,1),t=ot(),e!==null&&(ia(e,1,t),gt(e,t));break}}e=e.return}}function WS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ot(),t.pingedLanes|=t.suspendedLanes&n,je===t&&(We&n)===n&&(Ve===4||Ve===3&&(We&130023424)===We&&500>Ae()-Cf?Gr(t,0):Pf|=n),gt(t,e)}function q0(t,e){e===0&&(t.mode&1?(e=$a,$a<<=1,!($a&130023424)&&($a=4194304)):e=1);var n=ot();t=An(t,e),t!==null&&(ia(t,e,n),gt(t,n))}function qS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),q0(t,n)}function HS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),q0(t,n)}var H0;H0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||pt.current)ft=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ft=!1,VS(t,e,n);ft=!!(t.flags&131072)}else ft=!1,ge&&e.flags&1048576&&Jv(e,Hl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;yl(t,e),t=e.pendingProps;var i=Zi(e,tt.current);qi(e,n),i=wf(null,e,r,t,i,n);var s=Tf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mt(r)?(s=!0,Wl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,gf(e),i.updater=Ou,e.stateNode=i,i._reactInternals=e,Qh(e,r,t,n),e=Xh(null,e,r,!0,s,n)):(e.tag=0,ge&&s&&uf(e),st(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(yl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=GS(r),t=Mt(r,t),i){case 0:e=Yh(null,e,r,t,n);break e;case 1:e=kg(null,e,r,t,n);break e;case 11:e=Pg(null,e,r,t,n);break e;case 14:e=Cg(null,e,r,Mt(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),Yh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),kg(t,e,r,i,n);case 3:e:{if(k0(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,n0(t,e),Ql(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=rs(Error(U(423)),e),e=xg(t,e,r,n,i);break e}else if(r!==i){i=rs(Error(U(424)),e),e=xg(t,e,r,n,i);break e}else for(vt=sr(e.stateNode.containerInfo.firstChild),wt=e,ge=!0,jt=null,n=e0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(es(),r===i){e=Rn(t,e,n);break e}st(t,e,r,n)}e=e.child}return e;case 5:return r0(e),t===null&&Hh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,zh(r,i)?o=null:s!==null&&zh(r,s)&&(e.flags|=32),C0(t,e),st(t,e,o,n),e.child;case 6:return t===null&&Hh(e),null;case 13:return x0(t,e,n);case 4:return yf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ts(e,null,r,n):st(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),Pg(t,e,r,i,n);case 7:return st(t,e,e.pendingProps,n),e.child;case 8:return st(t,e,e.pendingProps.children,n),e.child;case 12:return st(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ce(Kl,r._currentValue),r._currentValue=o,s!==null)if(Ht(s.value,o)){if(s.children===i.children&&!pt.current){e=Rn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=En(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Kh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Kh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}st(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,qi(e,n),i=Vt(i),r=r(i),e.flags|=1,st(t,e,r,n),e.child;case 14:return r=e.type,i=Mt(r,e.pendingProps),i=Mt(r.type,i),Cg(t,e,r,i,n);case 15:return R0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),yl(t,e),e.tag=1,mt(r)?(t=!0,Wl(e)):t=!1,qi(e,n),I0(e,r,i),Qh(e,r,i,n),Xh(null,e,r,!0,t,n);case 19:return N0(t,e,n);case 22:return P0(t,e,n)}throw Error(U(156,e.tag))};function K0(t,e){return Ev(t,e)}function KS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(t,e,n,r){return new KS(t,e,n,r)}function Df(t){return t=t.prototype,!(!t||!t.isReactComponent)}function GS(t){if(typeof t=="function")return Df(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Jd)return 11;if(t===Yd)return 14}return 2}function ur(t,e){var n=t.alternate;return n===null?(n=Nt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function El(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Df(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ki:return Qr(n.children,i,s,e);case Qd:o=8,i|=8;break;case vh:return t=Nt(12,n,e,i|2),t.elementType=vh,t.lanes=s,t;case Eh:return t=Nt(13,n,e,i),t.elementType=Eh,t.lanes=s,t;case wh:return t=Nt(19,n,e,i),t.elementType=wh,t.lanes=s,t;case rv:return Uu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case tv:o=10;break e;case nv:o=9;break e;case Jd:o=11;break e;case Yd:o=14;break e;case Wn:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=Nt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Qr(t,e,n,r){return t=Nt(7,t,r,e),t.lanes=n,t}function Uu(t,e,n,r){return t=Nt(22,t,r,e),t.elementType=rv,t.lanes=n,t.stateNode={isHidden:!1},t}function th(t,e,n){return t=Nt(6,t,null,e),t.lanes=n,t}function nh(t,e,n){return e=Nt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function QS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Lc(0),this.expirationTimes=Lc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Vf(t,e,n,r,i,s,o,l,u){return t=new QS(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Nt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gf(s),t}function JS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ci,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function G0(t){if(!t)return _r;t=t._reactInternals;e:{if(hi(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(mt(n))return Gv(t,n,e)}return e}function Q0(t,e,n,r,i,s,o,l,u){return t=Vf(n,r,!0,t,i,s,o,l,u),t.context=G0(null),n=t.current,r=ot(),i=lr(n),s=En(r,i),s.callback=e??null,or(n,s,i),t.current.lanes=i,ia(t,i,r),gt(t,r),t}function ju(t,e,n,r){var i=e.current,s=ot(),o=lr(i);return n=G0(n),e.context===null?e.context=n:e.pendingContext=n,e=En(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=or(i,e,o),t!==null&&(Wt(t,i,o,s),pl(t,i,o)),o}function ru(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Fg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function bf(t,e){Fg(t,e),(t=t.alternate)&&Fg(t,e)}function YS(){return null}var J0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Of(t){this._internalRoot=t}Fu.prototype.render=Of.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));ju(t,e,null,null)};Fu.prototype.unmount=Of.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ri(function(){ju(null,t,null,null)}),e[Sn]=null}};function Fu(t){this._internalRoot=t}Fu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Pv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Hn.length&&e!==0&&e<Hn[n].priority;n++);Hn.splice(n,0,t),n===0&&kv(t)}};function Lf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function zu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function zg(){}function XS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=ru(o);s.call(c)}}var o=Q0(e,r,t,0,null,!1,!1,"",zg);return t._reactRootContainer=o,t[Sn]=o.current,Vo(t.nodeType===8?t.parentNode:t),ri(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=ru(u);l.call(c)}}var u=Vf(t,0,!1,null,null,!1,!1,"",zg);return t._reactRootContainer=u,t[Sn]=u.current,Vo(t.nodeType===8?t.parentNode:t),ri(function(){ju(e,u,n,r)}),u}function $u(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=ru(o);l.call(u)}}ju(e,o,t,i)}else o=XS(n,e,t,i,r);return ru(o)}Av=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=to(e.pendingLanes);n!==0&&(ef(e,n|1),gt(e,Ae()),!(se&6)&&(is=Ae()+500,Cr()))}break;case 13:ri(function(){var r=An(t,1);if(r!==null){var i=ot();Wt(r,t,1,i)}}),bf(t,1)}};tf=function(t){if(t.tag===13){var e=An(t,134217728);if(e!==null){var n=ot();Wt(e,t,134217728,n)}bf(t,134217728)}};Rv=function(t){if(t.tag===13){var e=lr(t),n=An(t,e);if(n!==null){var r=ot();Wt(n,t,e,r)}bf(t,e)}};Pv=function(){return ae};Cv=function(t,e){var n=ae;try{return ae=t,e()}finally{ae=n}};Nh=function(t,e,n){switch(e){case"input":if(Sh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Du(r);if(!i)throw Error(U(90));sv(r),Sh(r,i)}}}break;case"textarea":av(t,n);break;case"select":e=n.value,e!=null&&zi(t,!!n.multiple,e,!1)}};pv=kf;mv=ri;var ZS={usingClientEntryPoint:!1,Events:[oa,Vi,Du,dv,fv,kf]},Gs={findFiberByHostInstance:Wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},eA={bundleType:Gs.bundleType,version:Gs.version,rendererPackageName:Gs.rendererPackageName,rendererConfig:Gs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=_v(t),t===null?null:t.stateNode},findFiberByHostInstance:Gs.findFiberByHostInstance||YS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Za=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Za.isDisabled&&Za.supportsFiber)try{Cu=Za.inject(eA),tn=Za}catch{}}It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZS;It.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lf(e))throw Error(U(200));return JS(t,e,null,n)};It.createRoot=function(t,e){if(!Lf(t))throw Error(U(299));var n=!1,r="",i=J0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Vf(t,1,!1,null,null,n,!1,r,i),t[Sn]=e.current,Vo(t.nodeType===8?t.parentNode:t),new Of(e)};It.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=_v(e),t=t===null?null:t.stateNode,t};It.flushSync=function(t){return ri(t)};It.hydrate=function(t,e,n){if(!zu(e))throw Error(U(200));return $u(null,t,e,!0,n)};It.hydrateRoot=function(t,e,n){if(!Lf(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=J0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Q0(e,null,t,1,n??null,i,!1,s,o),t[Sn]=e.current,Vo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Fu(e)};It.render=function(t,e,n){if(!zu(e))throw Error(U(200));return $u(null,t,e,!1,n)};It.unmountComponentAtNode=function(t){if(!zu(t))throw Error(U(40));return t._reactRootContainer?(ri(function(){$u(null,null,t,!1,function(){t._reactRootContainer=null,t[Sn]=null})}),!0):!1};It.unstable_batchedUpdates=kf;It.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!zu(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return $u(t,e,n,!1,r)};It.version="18.3.1-next-f1338f8080-20240426";function Y0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Y0)}catch(t){console.error(t)}}Y0(),Y_.exports=It;var tA=Y_.exports,X0,$g=tA;X0=$g.createRoot,$g.hydrateRoot;/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $o(){return $o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},$o.apply(this,arguments)}var tr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(tr||(tr={}));const Bg="popstate";function nA(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return cd("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:iu(i)}return iA(e,n,null,t)}function Re(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Z0(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function rA(){return Math.random().toString(36).substr(2,8)}function Wg(t,e){return{usr:t.state,key:t.key,idx:e}}function cd(t,e,n,r){return n===void 0&&(n=null),$o({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ps(e):e,{state:n,key:e&&e.key||r||rA()})}function iu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ps(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function iA(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=tr.Pop,u=null,c=f();c==null&&(c=0,o.replaceState($o({},o.state,{idx:c}),""));function f(){return(o.state||{idx:null}).idx}function p(){l=tr.Pop;let V=f(),I=V==null?null:V-c;c=V,u&&u({action:l,location:N.location,delta:I})}function g(V,I){l=tr.Push;let v=cd(N.location,V,I);c=f()+1;let R=Wg(v,c),b=N.createHref(v);try{o.pushState(R,"",b)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(b)}s&&u&&u({action:l,location:N.location,delta:1})}function A(V,I){l=tr.Replace;let v=cd(N.location,V,I);c=f();let R=Wg(v,c),b=N.createHref(v);o.replaceState(R,"",b),s&&u&&u({action:l,location:N.location,delta:0})}function C(V){let I=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof V=="string"?V:iu(V);return v=v.replace(/ $/,"%20"),Re(I,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,I)}let N={get action(){return l},get location(){return t(i,o)},listen(V){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Bg,p),u=V,()=>{i.removeEventListener(Bg,p),u=null}},createHref(V){return e(i,V)},createURL:C,encodeLocation(V){let I=C(V);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:g,replace:A,go(V){return o.go(V)}};return N}var qg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(qg||(qg={}));function sA(t,e,n){return n===void 0&&(n="/"),oA(t,e,n,!1)}function oA(t,e,n,r){let i=typeof e=="string"?ps(e):e,s=Mf(i.pathname||"/",n);if(s==null)return null;let o=eE(t);aA(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=_A(s);l=gA(o[u],c,r)}return l}function eE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Re(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=cr([r,u.relativePath]),f=n.concat(u);s.children&&s.children.length>0&&(Re(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),eE(s.children,e,f,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:pA(c,s.index),routesMeta:f})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of tE(s.path))i(s,o,u)}),e}function tE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=tE(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function aA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:mA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const lA=/^:[\w-]+$/,uA=3,cA=2,hA=1,dA=10,fA=-2,Hg=t=>t==="*";function pA(t,e){let n=t.split("/"),r=n.length;return n.some(Hg)&&(r+=fA),e&&(r+=cA),n.filter(i=>!Hg(i)).reduce((i,s)=>i+(lA.test(s)?uA:s===""?hA:dA),r)}function mA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function gA(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,f=s==="/"?e:e.slice(s.length)||"/",p=Kg({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},f),g=u.route;if(!p&&c&&n&&!r[r.length-1].route.index&&(p=Kg({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},f)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:cr([s,p.pathname]),pathnameBase:TA(cr([s,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(s=cr([s,p.pathnameBase]))}return o}function Kg(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=yA(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,f,p)=>{let{paramName:g,isOptional:A}=f;if(g==="*"){let N=l[p]||"";o=s.slice(0,s.length-N.length).replace(/(.)\/+$/,"$1")}const C=l[p];return A&&!C?c[g]=void 0:c[g]=(C||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function yA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Z0(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function _A(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Z0(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Mf(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function vA(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ps(t):t;return{pathname:n?n.startsWith("/")?n:EA(n,e):e,search:IA(r),hash:SA(i)}}function EA(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function rh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function wA(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Uf(t,e){let n=wA(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function jf(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ps(t):(i=$o({},t),Re(!i.pathname||!i.pathname.includes("?"),rh("?","pathname","search",i)),Re(!i.pathname||!i.pathname.includes("#"),rh("#","pathname","hash",i)),Re(!i.search||!i.search.includes("#"),rh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),p-=1;i.pathname=g.join("/")}l=p>=0?e[p]:"/"}let u=vA(i,l),c=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||f)&&(u.pathname+="/"),u}const cr=t=>t.join("/").replace(/\/\/+/g,"/"),TA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),IA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,SA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function AA(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const nE=["post","put","patch","delete"];new Set(nE);const RA=["get",...nE];new Set(RA);/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bo(){return Bo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Bo.apply(this,arguments)}const Ff=M.createContext(null),PA=M.createContext(null),kr=M.createContext(null),Bu=M.createContext(null),xr=M.createContext({outlet:null,matches:[],isDataRoute:!1}),rE=M.createContext(null);function CA(t,e){let{relative:n}=e===void 0?{}:e;ms()||Re(!1);let{basename:r,navigator:i}=M.useContext(kr),{hash:s,pathname:o,search:l}=oE(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:cr([r,o])),i.createHref({pathname:u,search:l,hash:s})}function ms(){return M.useContext(Bu)!=null}function la(){return ms()||Re(!1),M.useContext(Bu).location}function iE(t){M.useContext(kr).static||M.useLayoutEffect(t)}function sE(){let{isDataRoute:t}=M.useContext(xr);return t?zA():kA()}function kA(){ms()||Re(!1);let t=M.useContext(Ff),{basename:e,future:n,navigator:r}=M.useContext(kr),{matches:i}=M.useContext(xr),{pathname:s}=la(),o=JSON.stringify(Uf(i,n.v7_relativeSplatPath)),l=M.useRef(!1);return iE(()=>{l.current=!0}),M.useCallback(function(c,f){if(f===void 0&&(f={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=jf(c,JSON.parse(o),s,f.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:cr([e,p.pathname])),(f.replace?r.replace:r.push)(p,f.state,f)},[e,r,o,s,t])}function oE(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=M.useContext(kr),{matches:i}=M.useContext(xr),{pathname:s}=la(),o=JSON.stringify(Uf(i,r.v7_relativeSplatPath));return M.useMemo(()=>jf(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function xA(t,e){return NA(t,e)}function NA(t,e,n,r){ms()||Re(!1);let{navigator:i}=M.useContext(kr),{matches:s}=M.useContext(xr),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=la(),f;if(e){var p;let V=typeof e=="string"?ps(e):e;u==="/"||(p=V.pathname)!=null&&p.startsWith(u)||Re(!1),f=V}else f=c;let g=f.pathname||"/",A=g;if(u!=="/"){let V=u.replace(/^\//,"").split("/");A="/"+g.replace(/^\//,"").split("/").slice(V.length).join("/")}let C=sA(t,{pathname:A}),N=LA(C&&C.map(V=>Object.assign({},V,{params:Object.assign({},l,V.params),pathname:cr([u,i.encodeLocation?i.encodeLocation(V.pathname).pathname:V.pathname]),pathnameBase:V.pathnameBase==="/"?u:cr([u,i.encodeLocation?i.encodeLocation(V.pathnameBase).pathname:V.pathnameBase])})),s,n,r);return e&&N?M.createElement(Bu.Provider,{value:{location:Bo({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:tr.Pop}},N):N}function DA(){let t=FA(),e=AA(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},e),n?M.createElement("pre",{style:i},n):null,null)}const VA=M.createElement(DA,null);class bA extends M.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?M.createElement(xr.Provider,{value:this.props.routeContext},M.createElement(rE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function OA(t){let{routeContext:e,match:n,children:r}=t,i=M.useContext(Ff);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),M.createElement(xr.Provider,{value:e},r)}function LA(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let f=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);f>=0||Re(!1),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let p=o[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=f),p.route.id){let{loaderData:g,errors:A}=n,C=p.route.loader&&g[p.route.id]===void 0&&(!A||A[p.route.id]===void 0);if(p.route.lazy||C){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((f,p,g)=>{let A,C=!1,N=null,V=null;n&&(A=l&&p.route.id?l[p.route.id]:void 0,N=p.route.errorElement||VA,u&&(c<0&&g===0?(C=!0,V=null):c===g&&(C=!0,V=p.route.hydrateFallbackElement||null)));let I=e.concat(o.slice(0,g+1)),v=()=>{let R;return A?R=N:C?R=V:p.route.Component?R=M.createElement(p.route.Component,null):p.route.element?R=p.route.element:R=f,M.createElement(OA,{match:p,routeContext:{outlet:f,matches:I,isDataRoute:n!=null},children:R})};return n&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?M.createElement(bA,{location:n.location,revalidation:n.revalidation,component:N,error:A,children:v(),routeContext:{outlet:null,matches:I,isDataRoute:!0}}):v()},null)}var aE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(aE||{}),su=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(su||{});function MA(t){let e=M.useContext(Ff);return e||Re(!1),e}function UA(t){let e=M.useContext(PA);return e||Re(!1),e}function jA(t){let e=M.useContext(xr);return e||Re(!1),e}function lE(t){let e=jA(),n=e.matches[e.matches.length-1];return n.route.id||Re(!1),n.route.id}function FA(){var t;let e=M.useContext(rE),n=UA(su.UseRouteError),r=lE(su.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function zA(){let{router:t}=MA(aE.UseNavigateStable),e=lE(su.UseNavigateStable),n=M.useRef(!1);return iE(()=>{n.current=!0}),M.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Bo({fromRouteId:e},s)))},[t,e])}const Gg={};function $A(t,e){Gg[e]||(Gg[e]=!0,console.warn(e))}const Qg=(t,e,n)=>$A(t,"⚠️ React Router Future Flag Warning: "+e+". "+("You can use the `"+t+"` future flag to opt-in early. ")+("For more information, see "+n+"."));function BA(t,e){t!=null&&t.v7_startTransition||Qg("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),!(t!=null&&t.v7_relativeSplatPath)&&!e&&Qg("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")}function el(t){let{to:e,replace:n,state:r,relative:i}=t;ms()||Re(!1);let{future:s,static:o}=M.useContext(kr),{matches:l}=M.useContext(xr),{pathname:u}=la(),c=sE(),f=jf(e,Uf(l,s.v7_relativeSplatPath),u,i==="path"),p=JSON.stringify(f);return M.useEffect(()=>c(JSON.parse(p),{replace:n,state:r,relative:i}),[c,p,i,n,r]),null}function Ii(t){Re(!1)}function WA(t){let{basename:e="/",children:n=null,location:r,navigationType:i=tr.Pop,navigator:s,static:o=!1,future:l}=t;ms()&&Re(!1);let u=e.replace(/^\/*/,"/"),c=M.useMemo(()=>({basename:u,navigator:s,static:o,future:Bo({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=ps(r));let{pathname:f="/",search:p="",hash:g="",state:A=null,key:C="default"}=r,N=M.useMemo(()=>{let V=Mf(f,u);return V==null?null:{location:{pathname:V,search:p,hash:g,state:A,key:C},navigationType:i}},[u,f,p,g,A,C,i]);return N==null?null:M.createElement(kr.Provider,{value:c},M.createElement(Bu.Provider,{children:n,value:N}))}function qA(t){let{children:e,location:n}=t;return xA(hd(e),n)}new Promise(()=>{});function hd(t,e){e===void 0&&(e=[]);let n=[];return M.Children.forEach(t,(r,i)=>{if(!M.isValidElement(r))return;let s=[...e,i];if(r.type===M.Fragment){n.push.apply(n,hd(r.props.children,s));return}r.type!==Ii&&Re(!1),!r.props.index||!r.props.children||Re(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=hd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function dd(){return dd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},dd.apply(this,arguments)}function HA(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function KA(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function GA(t,e){return t.button===0&&(!e||e==="_self")&&!KA(t)}const QA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],JA="6";try{window.__reactRouterVersion=JA}catch{}const YA="startTransition",Jg=WT[YA];function XA(t){let{basename:e,children:n,future:r,window:i}=t,s=M.useRef();s.current==null&&(s.current=nA({window:i,v5Compat:!0}));let o=s.current,[l,u]=M.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},f=M.useCallback(p=>{c&&Jg?Jg(()=>u(p)):u(p)},[u,c]);return M.useLayoutEffect(()=>o.listen(f),[o,f]),M.useEffect(()=>BA(r),[r]),M.createElement(WA,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const ZA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",eR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,vo=M.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:f,viewTransition:p}=e,g=HA(e,QA),{basename:A}=M.useContext(kr),C,N=!1;if(typeof c=="string"&&eR.test(c)&&(C=c,ZA))try{let R=new URL(window.location.href),b=c.startsWith("//")?new URL(R.protocol+c):new URL(c),j=Mf(b.pathname,A);b.origin===R.origin&&j!=null?c=j+b.search+b.hash:N=!0}catch{}let V=CA(c,{relative:i}),I=tR(c,{replace:o,state:l,target:u,preventScrollReset:f,relative:i,viewTransition:p});function v(R){r&&r(R),R.defaultPrevented||I(R)}return M.createElement("a",dd({},g,{href:C||V,onClick:N||s?r:v,ref:n,target:u}))});var Yg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Yg||(Yg={}));var Xg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Xg||(Xg={}));function tR(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=sE(),c=la(),f=oE(t,{relative:o});return M.useCallback(p=>{if(GA(p,n)){p.preventDefault();let g=r!==void 0?r:iu(c)===iu(f);u(t,{replace:g,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,u,f,r,i,n,t,s,o,l])}const Zg=t=>{let e;const n=new Set,r=(c,f)=>{const p=typeof c=="function"?c(e):c;if(!Object.is(p,e)){const g=e;e=f??(typeof p!="object"||p===null)?p:Object.assign({},e,p),n.forEach(A=>A(e,g))}},i=()=>e,l={setState:r,getState:i,getInitialState:()=>u,subscribe:c=>(n.add(c),()=>n.delete(c))},u=e=t(r,i,l);return l},nR=t=>t?Zg(t):Zg,rR=t=>t;function iR(t,e=rR){const n=yh.useSyncExternalStore(t.subscribe,()=>e(t.getState()),()=>e(t.getInitialState()));return yh.useDebugValue(n),n}const ey=t=>{const e=nR(t),n=r=>iR(e,r);return Object.assign(n,e),n},zf=t=>t?ey(t):ey,sR=()=>{};var ty={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},oR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},cE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let g=(l&15)<<2|c>>6,A=c&63;u||(A=64,o||(g=64)),r.push(n[f],n[p],n[g],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(uE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):oR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new aR;const g=s<<2|l>>4;if(r.push(g),c!==64){const A=l<<4&240|c>>2;if(r.push(A),p!==64){const C=c<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class aR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lR=function(t){const e=uE(t);return cE.encodeByteArray(e,!0)},ou=function(t){return lR(t).replace(/\./g,"")},hE=function(t){try{return cE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR=()=>uR().__FIREBASE_DEFAULTS__,hR=()=>{if(typeof process>"u"||typeof ty>"u")return;const t=ty.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},dR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&hE(t[1]);return e&&JSON.parse(e)},Wu=()=>{try{return sR()||cR()||hR()||dR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},dE=t=>{var e,n;return(n=(e=Wu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},fR=t=>{const e=dE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},fE=()=>{var t;return(t=Wu())==null?void 0:t.config},pE=t=>{var e;return(e=Wu())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[ou(JSON.stringify(n)),ou(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt())}function yR(){var e;const t=(e=Wu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function _R(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function vR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ER(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wR(){const t=nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function TR(){return!yR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function IR(){try{return typeof indexedDB=="object"}catch{return!1}}function SR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR="FirebaseError";class Vn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=AR,Object.setPrototypeOf(this,Vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ua.prototype.create)}}class ua{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?RR(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Vn(i,l,r)}}function RR(t,e){return t.replace(PR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const PR=/\{\$([^}]+)}/g;function CR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ii(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(ny(s)&&ny(o)){if(!ii(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function ny(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ro(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function io(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function kR(t,e){const n=new xR(t,e);return n.subscribe.bind(n)}class xR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");NR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ih),i.error===void 0&&(i.error=ih),i.complete===void 0&&(i.complete=ih);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function NR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ih(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function mE(t){return(await fetch(t,{credentials:"include"})).ok}class si{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new pR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bR(e))try{this.getOrInitializeService({instanceIdentifier:Br})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Br){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Br){return this.instances.has(e)}getOptions(e=Br){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:VR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Br){return this.component?this.component.multipleInstances?e:Br:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function VR(t){return t===Br?void 0:t}function bR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new DR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const LR={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},MR=re.INFO,UR={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},jR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=UR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $f{constructor(e){this.name=e,this._logLevel=MR,this._logHandler=jR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?LR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const FR=(t,e)=>e.some(n=>t instanceof n);let ry,iy;function zR(){return ry||(ry=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $R(){return iy||(iy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gE=new WeakMap,fd=new WeakMap,yE=new WeakMap,sh=new WeakMap,Bf=new WeakMap;function BR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(hr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&gE.set(n,t)}).catch(()=>{}),Bf.set(e,t),e}function WR(t){if(fd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});fd.set(t,e)}let pd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||yE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function qR(t){pd=t(pd)}function HR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(oh(this),e,...n);return yE.set(r,e.sort?e.sort():[e]),hr(r)}:$R().includes(t)?function(...e){return t.apply(oh(this),e),hr(gE.get(this))}:function(...e){return hr(t.apply(oh(this),e))}}function KR(t){return typeof t=="function"?HR(t):(t instanceof IDBTransaction&&WR(t),FR(t,zR())?new Proxy(t,pd):t)}function hr(t){if(t instanceof IDBRequest)return BR(t);if(sh.has(t))return sh.get(t);const e=KR(t);return e!==t&&(sh.set(t,e),Bf.set(e,t)),e}const oh=t=>Bf.get(t);function GR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=hr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(hr(o.result),u.oldVersion,u.newVersion,hr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const QR=["get","getKey","getAll","getAllKeys","count"],JR=["put","add","delete","clear"],ah=new Map;function sy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ah.get(e))return ah.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=JR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||QR.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return ah.set(e,s),s}qR(t=>({...t,get:(e,n,r)=>sy(e,n)||t.get(e,n,r),has:(e,n)=>!!sy(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(XR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function XR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const md="@firebase/app",oy="0.14.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=new $f("@firebase/app"),ZR="@firebase/app-compat",eP="@firebase/analytics-compat",tP="@firebase/analytics",nP="@firebase/app-check-compat",rP="@firebase/app-check",iP="@firebase/auth",sP="@firebase/auth-compat",oP="@firebase/database",aP="@firebase/data-connect",lP="@firebase/database-compat",uP="@firebase/functions",cP="@firebase/functions-compat",hP="@firebase/installations",dP="@firebase/installations-compat",fP="@firebase/messaging",pP="@firebase/messaging-compat",mP="@firebase/performance",gP="@firebase/performance-compat",yP="@firebase/remote-config",_P="@firebase/remote-config-compat",vP="@firebase/storage",EP="@firebase/storage-compat",wP="@firebase/firestore",TP="@firebase/ai",IP="@firebase/firestore-compat",SP="firebase",AP="12.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd="[DEFAULT]",RP={[md]:"fire-core",[ZR]:"fire-core-compat",[tP]:"fire-analytics",[eP]:"fire-analytics-compat",[rP]:"fire-app-check",[nP]:"fire-app-check-compat",[iP]:"fire-auth",[sP]:"fire-auth-compat",[oP]:"fire-rtdb",[aP]:"fire-data-connect",[lP]:"fire-rtdb-compat",[uP]:"fire-fn",[cP]:"fire-fn-compat",[hP]:"fire-iid",[dP]:"fire-iid-compat",[fP]:"fire-fcm",[pP]:"fire-fcm-compat",[mP]:"fire-perf",[gP]:"fire-perf-compat",[yP]:"fire-rc",[_P]:"fire-rc-compat",[vP]:"fire-gcs",[EP]:"fire-gcs-compat",[wP]:"fire-fst",[IP]:"fire-fst-compat",[TP]:"fire-vertex","fire-js":"fire-js",[SP]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au=new Map,PP=new Map,yd=new Map;function ay(t,e){try{t.container.addComponent(e)}catch(n){Pn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ss(t){const e=t.name;if(yd.has(e))return Pn.debug(`There were multiple attempts to register component ${e}.`),!1;yd.set(e,t);for(const n of au.values())ay(n,t);for(const n of PP.values())ay(n,t);return!0}function Wf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ct(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},dr=new ua("app","Firebase",CP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kP{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new si("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs=AP;function _E(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:gd,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw dr.create("bad-app-name",{appName:String(i)});if(n||(n=fE()),!n)throw dr.create("no-options");const s=au.get(i);if(s){if(ii(n,s.options)&&ii(r,s.config))return s;throw dr.create("duplicate-app",{appName:i})}const o=new OR(i);for(const u of yd.values())o.addComponent(u);const l=new kP(n,r,o);return au.set(i,l),l}function vE(t=gd){const e=au.get(t);if(!e&&t===gd&&fE())return _E();if(!e)throw dr.create("no-app",{appName:t});return e}function fr(t,e,n){let r=RP[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pn.warn(o.join(" "));return}ss(new si(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xP="firebase-heartbeat-database",NP=1,Wo="firebase-heartbeat-store";let lh=null;function EE(){return lh||(lh=GR(xP,NP,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Wo)}catch(n){console.warn(n)}}}}).catch(t=>{throw dr.create("idb-open",{originalErrorMessage:t.message})})),lh}async function DP(t){try{const n=(await EE()).transaction(Wo),r=await n.objectStore(Wo).get(wE(t));return await n.done,r}catch(e){if(e instanceof Vn)Pn.warn(e.message);else{const n=dr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pn.warn(n.message)}}}async function ly(t,e){try{const r=(await EE()).transaction(Wo,"readwrite");await r.objectStore(Wo).put(e,wE(t)),await r.done}catch(n){if(n instanceof Vn)Pn.warn(n.message);else{const r=dr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Pn.warn(r.message)}}}function wE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VP=1024,bP=30;class OP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new MP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=uy();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>bP){const o=UP(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Pn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=uy(),{heartbeatsToSend:r,unsentEntries:i}=LP(this._heartbeatsCache.heartbeats),s=ou(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Pn.warn(n),""}}}function uy(){return new Date().toISOString().substring(0,10)}function LP(t,e=VP){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),cy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),cy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class MP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return IR()?SR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await DP(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ly(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ly(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function cy(t){return ou(JSON.stringify({version:2,heartbeats:t})).length}function UP(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jP(t){ss(new si("platform-logger",e=>new YR(e),"PRIVATE")),ss(new si("heartbeat",e=>new OP(e),"PRIVATE")),fr(md,oy,t),fr(md,oy,"esm2020"),fr("fire-js","")}jP("");var FP="firebase",zP="12.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fr(FP,zP,"app");function TE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $P=TE,IE=new ua("auth","Firebase",TE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu=new $f("@firebase/auth");function BP(t,...e){lu.logLevel<=re.WARN&&lu.warn(`Auth (${gs}): ${t}`,...e)}function wl(t,...e){lu.logLevel<=re.ERROR&&lu.error(`Auth (${gs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(t,...e){throw qf(t,...e)}function rn(t,...e){return qf(t,...e)}function SE(t,e,n){const r={...$P(),[e]:n};return new ua("auth","Firebase",r).create(e,{appName:t.name})}function wn(t){return SE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function qf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return IE.create(t,...e)}function K(t,e,...n){if(!t)throw qf(e,...n)}function yn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw wl(e),new Error(e)}function Cn(t,e){t||yn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _d(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function WP(){return hy()==="http:"||hy()==="https:"}function hy(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(WP()||vR()||"connection"in navigator)?navigator.onLine:!0}function HP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,n){this.shortDelay=e,this.longDelay=n,Cn(n>e,"Short delay should be less than long delay!"),this.isMobile=gR()||ER()}get(){return qP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf(t,e){Cn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GP=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],QP=new da(3e4,6e4);function Nr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function bn(t,e,n,r,i={}){return RE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ca({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...s};return _R()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&ha(t.emulatorConfig.host)&&(c.credentials="include"),AE.fetch()(await PE(t,t.config.apiHost,n,l),c)})}async function RE(t,e,n){t._canInitEmulator=!1;const r={...KP,...e};try{const i=new YP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw tl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw tl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw tl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw tl(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw SE(t,f,c);Kt(t,f)}}catch(i){if(i instanceof Vn)throw i;Kt(t,"network-request-failed",{message:String(i)})}}async function fa(t,e,n,r,i={}){const s=await bn(t,e,n,r,i);return"mfaPendingCredential"in s&&Kt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function PE(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Hf(t.config,i):`${t.config.apiScheme}://${i}`;return GP.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function JP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class YP{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(rn(this.auth,"network-request-failed")),QP.get())})}}function tl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=rn(t,e,r);return i.customData._tokenResponse=n,i}function dy(t){return t!==void 0&&t.enterprise!==void 0}class XP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return JP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function ZP(t,e){return bn(t,"GET","/v2/recaptchaConfig",Nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eC(t,e){return bn(t,"POST","/v1/accounts:delete",e)}async function uu(t,e){return bn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tC(t,e=!1){const n=He(t),r=await n.getIdToken(e),i=Kf(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Eo(uh(i.auth_time)),issuedAtTime:Eo(uh(i.iat)),expirationTime:Eo(uh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function uh(t){return Number(t)*1e3}function Kf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return wl("JWT malformed, contained fewer than 3 sections"),null;try{const i=hE(n);return i?JSON.parse(i):(wl("Failed to decode base64 JWT payload"),null)}catch(i){return wl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function fy(t){const e=Kf(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function os(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Vn&&nC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function nC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Eo(this.lastLoginAt),this.creationTime=Eo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cu(t){var p;const e=t.auth,n=await t.getIdToken(),r=await os(t,uu(e,{idToken:n}));K(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(p=i.providerUserInfo)!=null&&p.length?CE(i.providerUserInfo):[],o=sC(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new vd(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function iC(t){const e=He(t);await cu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function CE(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oC(t,e){const n=await RE(t,{},async()=>{const r=ca({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await PE(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&ha(t.emulatorConfig.host)&&(u.credentials="include"),AE.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function aC(t,e){return bn(t,"POST","/v2/accounts:revokeToken",Nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=fy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await oC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ki;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ki,this.toJSON())}_performRefresh(){return yn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ft{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new rC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new vd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await os(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return tC(this,e)}reload(){return iC(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ft({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await cu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ct(this.auth.app))return Promise.reject(wn(this.auth));const e=await this.getIdToken();return await os(this,eC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:g,isAnonymous:A,providerData:C,stsTokenManager:N}=n;K(p&&N,e,"internal-error");const V=Ki.fromJSON(this.name,N);K(typeof p=="string",e,"internal-error"),Bn(r,e.name),Bn(i,e.name),K(typeof g=="boolean",e,"internal-error"),K(typeof A=="boolean",e,"internal-error"),Bn(s,e.name),Bn(o,e.name),Bn(l,e.name),Bn(u,e.name),Bn(c,e.name),Bn(f,e.name);const I=new Ft({uid:p,auth:e,email:i,emailVerified:g,displayName:r,isAnonymous:A,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:V,createdAt:c,lastLoginAt:f});return C&&Array.isArray(C)&&(I.providerData=C.map(v=>({...v}))),u&&(I._redirectEventId=u),I}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ki;i.updateFromServerResponse(n);const s=new Ft({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await cu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];K(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?CE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Ki;l.updateFromIdToken(r);const u=new Ft({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new vd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py=new Map;function _n(t){Cn(t instanceof Function,"Expected a class definition");let e=py.get(t);return e?(Cn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,py.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}kE.type="NONE";const my=kE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(t,e,n){return`firebase:${t}:${e}:${n}`}class Gi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Tl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Tl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await uu(this.auth,{idToken:e}).catch(()=>{});return n?Ft._fromGetAccountInfoResponse(this.auth,n,e):null}return Ft._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Gi(_n(my),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||_n(my);const o=Tl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){let p;if(typeof f=="string"){const g=await uu(e,{idToken:f}).catch(()=>{});if(!g)break;p=await Ft._fromGetAccountInfoResponse(e,g,f)}else p=Ft._fromJSON(e,f);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Gi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Gi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(VE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(OE(e))return"Blackberry";if(LE(e))return"Webos";if(NE(e))return"Safari";if((e.includes("chrome/")||DE(e))&&!e.includes("edge/"))return"Chrome";if(bE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function xE(t=nt()){return/firefox\//i.test(t)}function NE(t=nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function DE(t=nt()){return/crios\//i.test(t)}function VE(t=nt()){return/iemobile/i.test(t)}function bE(t=nt()){return/android/i.test(t)}function OE(t=nt()){return/blackberry/i.test(t)}function LE(t=nt()){return/webos/i.test(t)}function Gf(t=nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function lC(t=nt()){var e;return Gf(t)&&!!((e=window.navigator)!=null&&e.standalone)}function uC(){return wR()&&document.documentMode===10}function ME(t=nt()){return Gf(t)||bE(t)||LE(t)||OE(t)||/windows phone/i.test(t)||VE(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UE(t,e=[]){let n;switch(t){case"Browser":n=gy(nt());break;case"Worker":n=`${gy(nt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${gs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hC(t,e={}){return bn(t,"GET","/v2/passwordPolicy",Nr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dC=6;class fC{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??dC,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yy(this),this.idTokenSubscription=new yy(this),this.beforeStateQueue=new cC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=IE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=_n(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Gi.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await uu(this,{idToken:e}),r=await Ft._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Ct(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await cu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=HP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ct(this.app))return Promise.reject(wn(this));const n=e?He(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ct(this.app)?Promise.reject(wn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ct(this.app)?Promise.reject(wn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_n(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hC(this),n=new fC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ua("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await aC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&_n(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Gi.create(this,[_n(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=UE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Ct(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&BP(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function di(t){return He(t)}class yy{constructor(e){this.auth=e,this.observer=null,this.addObserver=kR(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function mC(t){qu=t}function jE(t){return qu.loadJS(t)}function gC(){return qu.recaptchaEnterpriseScript}function yC(){return qu.gapiScript}function _C(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class vC{constructor(){this.enterprise=new EC}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class EC{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const wC="recaptcha-enterprise",FE="NO_RECAPTCHA";class TC{constructor(e){this.type=wC,this.auth=di(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{ZP(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new XP(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;dy(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(FE)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new vC().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&dy(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=gC();u.length!==0&&(u+=l),jE(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function _y(t,e,n,r=!1,i=!1){const s=new TC(t);let o;if(i)o=FE;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Ed(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await _y(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await _y(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IC(t,e){const n=Wf(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ii(s,e??{}))return i;Kt(i,"already-initialized")}return n.initialize({options:e})}function SC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_n);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function AC(t,e,n){const r=di(t);K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=zE(e),{host:o,port:l}=RC(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){K(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),K(ii(c,r.config.emulator)&&ii(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,ha(o)?mE(`${s}//${o}${u}`):PC()}function zE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function RC(t){const e=zE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:vy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:vy(o)}}}function vy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function PC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return yn("not implemented")}_getIdTokenResponse(e){return yn("not implemented")}_linkToIdToken(e,n){return yn("not implemented")}_getReauthenticationResolver(e){return yn("not implemented")}}async function CC(t,e){return bn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kC(t,e){return fa(t,"POST","/v1/accounts:signInWithPassword",Nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xC(t,e){return fa(t,"POST","/v1/accounts:signInWithEmailLink",Nr(t,e))}async function NC(t,e){return fa(t,"POST","/v1/accounts:signInWithEmailLink",Nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo extends Qf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new qo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new qo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ed(e,n,"signInWithPassword",kC);case"emailLink":return xC(e,{email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ed(e,r,"signUpPassword",CC);case"emailLink":return NC(e,{idToken:n,email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qi(t,e){return fa(t,"POST","/v1/accounts:signInWithIdp",Nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DC="http://localhost";class oi extends Qf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new oi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new oi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Qi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Qi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Qi(e,n)}buildRequest(){const e={requestUri:DC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ca(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function bC(t){const e=ro(io(t)).link,n=e?ro(io(e)).deep_link_id:null,r=ro(io(t)).deep_link_id;return(r?ro(io(r)).link:null)||r||n||e||t}class Jf{constructor(e){const n=ro(io(e)),r=n.apiKey??null,i=n.oobCode??null,s=VC(n.mode??null);K(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=bC(e);try{return new Jf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(){this.providerId=ys.PROVIDER_ID}static credential(e,n){return qo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Jf.parseLink(n);return K(r,"argument-error"),qo._fromEmailAndCode(e,r.code,r.tenantId)}}ys.PROVIDER_ID="password";ys.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ys.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa extends $E{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends pa{constructor(){super("facebook.com")}static credential(e){return oi._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends pa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return oi._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Qn.credential(n,r)}catch{return null}}}Qn.GOOGLE_SIGN_IN_METHOD="google.com";Qn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends pa{constructor(){super("github.com")}static credential(e){return oi._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.GITHUB_SIGN_IN_METHOD="github.com";Jn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends pa{constructor(){super("twitter.com")}static credential(e,n){return oi._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Yn.credential(n,r)}catch{return null}}}Yn.TWITTER_SIGN_IN_METHOD="twitter.com";Yn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OC(t,e){return fa(t,"POST","/v1/accounts:signUp",Nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ft._fromIdTokenResponse(e,r,i),o=Ey(r);return new ai({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Ey(r);return new ai({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Ey(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu extends Vn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,hu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new hu(e,n,r,i)}}function BE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?hu._fromErrorAndOperation(t,s,e,r):s})}async function LC(t,e,n=!1){const r=await os(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ai._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MC(t,e,n=!1){const{auth:r}=t;if(Ct(r.app))return Promise.reject(wn(r));const i="reauthenticate";try{const s=await os(t,BE(r,i,e,t),n);K(s.idToken,r,"internal-error");const o=Kf(s.idToken);K(o,r,"internal-error");const{sub:l}=o;return K(t.uid===l,r,"user-mismatch"),ai._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Kt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WE(t,e,n=!1){if(Ct(t.app))return Promise.reject(wn(t));const r="signIn",i=await BE(t,r,e),s=await ai._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function UC(t,e){return WE(di(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qE(t){const e=di(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function jC(t,e,n){if(Ct(t.app))return Promise.reject(wn(t));const r=di(t),o=await Ed(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",OC).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&qE(t),u}),l=await ai._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function FC(t,e,n){return Ct(t.app)?Promise.reject(wn(t)):UC(He(t),ys.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&qE(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zC(t,e){return bn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wy(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=He(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await os(r,zC(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function $C(t,e,n,r){return He(t).onIdTokenChanged(e,n,r)}function BC(t,e,n){return He(t).beforeAuthStateChanged(e,n)}function WC(t,e,n,r){return He(t).onAuthStateChanged(e,n,r)}function qC(t){return He(t).signOut()}const du="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(du,"1"),this.storage.removeItem(du),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HC=1e3,KC=10;class KE extends HE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ME(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);uC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,KC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},HC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}KE.type="LOCAL";const GC=KE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE extends HE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}GE.type="SESSION";const QE=GE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Hu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await QC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Yf("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(){return window}function YC(t){sn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JE(){return typeof sn().WorkerGlobalScope<"u"&&typeof sn().importScripts=="function"}async function XC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ZC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function ek(){return JE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE="firebaseLocalStorageDb",tk=1,fu="firebaseLocalStorage",XE="fbase_key";class ma{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ku(t,e){return t.transaction([fu],e?"readwrite":"readonly").objectStore(fu)}function nk(){const t=indexedDB.deleteDatabase(YE);return new ma(t).toPromise()}function ZE(){const t=indexedDB.open(YE,tk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(fu,{keyPath:XE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(fu)?e(r):(r.close(),await nk(),e(await ZE()))})})}async function Ty(t,e,n){const r=Ku(t,!0).put({[XE]:e,value:n});return new ma(r).toPromise()}async function rk(t,e){const n=Ku(t,!1).get(e),r=await new ma(n).toPromise();return r===void 0?null:r.value}function Iy(t,e){const n=Ku(t,!0).delete(e);return new ma(n).toPromise()}const ik=800,sk=3;class ew{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=ZE(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>sk)throw r;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return JE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hu._getInstance(ek()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await XC(),!this.activeServiceWorker)return;this.sender=new JC(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ZC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await Ty(e,du,"1"),await Iy(e,du)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ty(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>rk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Iy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ku(i,!1).getAll();return new ma(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ik)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ew.type="LOCAL";const ok=ew;new da(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ak(t,e){return e?_n(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf extends Qf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Qi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Qi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function lk(t){return WE(t.auth,new Xf(t),t.bypassAuthState)}function uk(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),MC(n,new Xf(t),t.bypassAuthState)}async function ck(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),LC(n,new Xf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lk;case"linkViaPopup":case"linkViaRedirect":return ck;case"reauthViaPopup":case"reauthViaRedirect":return uk;default:Kt(this.auth,"internal-error")}}resolve(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hk=new da(2e3,1e4);class Fi extends tw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Fi.currentPopupAction&&Fi.currentPopupAction.cancel(),Fi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Cn(this.filter.length===1,"Popup operations only handle one event");const e=Yf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,hk.get())};e()}}Fi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dk="pendingRedirect",Il=new Map;class fk extends tw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Il.get(this.auth._key());if(!e){try{const r=await pk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Il.set(this.auth._key(),e)}return this.bypassAuthState||Il.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pk(t,e){const n=yk(e),r=gk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function mk(t,e){Il.set(t._key(),e)}function gk(t){return _n(t._redirectPersistence)}function yk(t){return Tl(dk,t.config.apiKey,t.name)}async function _k(t,e,n=!1){if(Ct(t.app))return Promise.reject(wn(t));const r=di(t),i=ak(r,e),o=await new fk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk=10*60*1e3;class Ek{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!nw(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(rn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sy(e))}saveEventToCache(e){this.cachedEventUids.add(Sy(e)),this.lastProcessedEventTime=Date.now()}}function Sy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function nw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function wk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tk(t,e={}){return bn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ik=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Sk=/^https?/;async function Ak(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Tk(t);for(const n of e)try{if(Rk(n))return}catch{}Kt(t,"unauthorized-domain")}function Rk(t){const e=_d(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Sk.test(n))return!1;if(Ik.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk=new da(3e4,6e4);function Ay(){const t=sn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Ck(t){return new Promise((e,n)=>{var i,s,o;function r(){Ay(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ay(),n(rn(t,"network-request-failed"))},timeout:Pk.get()})}if((s=(i=sn().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=sn().gapi)!=null&&o.load)r();else{const l=_C("iframefcb");return sn()[l]=()=>{gapi.load?r():n(rn(t,"network-request-failed"))},jE(`${yC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Sl=null,e})}let Sl=null;function kk(t){return Sl=Sl||Ck(t),Sl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xk=new da(5e3,15e3),Nk="__/auth/iframe",Dk="emulator/auth/iframe",Vk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ok(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Hf(e,Dk):`https://${t.config.authDomain}/${Nk}`,r={apiKey:e.apiKey,appName:t.name,v:gs},i=bk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ca(r).slice(1)}`}async function Lk(t){const e=await kk(t),n=sn().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:Ok(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Vk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=rn(t,"network-request-failed"),l=sn().setTimeout(()=>{s(o)},xk.get());function u(){sn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Uk=500,jk=600,Fk="_blank",zk="http://localhost";class Ry{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $k(t,e,n,r=Uk,i=jk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...Mk,width:r.toString(),height:i.toString(),top:s,left:o},c=nt().toLowerCase();n&&(l=DE(c)?Fk:n),xE(c)&&(e=e||zk,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[A,C])=>`${g}${A}=${C},`,"");if(lC(c)&&l!=="_self")return Bk(e||"",l),new Ry(null);const p=window.open(e||"",l,f);K(p,t,"popup-blocked");try{p.focus()}catch{}return new Ry(p)}function Bk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wk="__/auth/handler",qk="emulator/auth/handler",Hk=encodeURIComponent("fac");async function Py(t,e,n,r,i,s){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:gs,eventId:i};if(e instanceof $E){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",CR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof pa){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${Hk}=${encodeURIComponent(u)}`:"";return`${Kk(t)}?${ca(l).slice(1)}${c}`}function Kk({config:t}){return t.emulator?Hf(t,qk):`https://${t.authDomain}/${Wk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch="webStorageSupport";class Gk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=QE,this._completeRedirectFn=_k,this._overrideRedirectResult=mk}async _openPopup(e,n,r,i){var o;Cn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Py(e,n,r,_d(),i);return $k(e,s,Yf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Py(e,n,r,_d(),i);return YC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Cn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Lk(e),r=new Ek(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ch,{type:ch},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[ch];s!==void 0&&n(!!s),Kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ak(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ME()||NE()||Gf()}}const Qk=Gk;var Cy="@firebase/auth",ky="1.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Xk(t){ss(new si("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:UE(t)},c=new pC(r,i,s,u);return SC(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ss(new si("auth-internal",e=>{const n=di(e.getProvider("auth").getImmediate());return(r=>new Jk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),fr(Cy,ky,Yk(t)),fr(Cy,ky,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk=5*60,ex=pE("authIdTokenMaxAge")||Zk;let xy=null;const tx=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ex)return;const i=n==null?void 0:n.token;xy!==i&&(xy=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function nx(t=vE()){const e=Wf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=IC(t,{popupRedirectResolver:Qk,persistence:[ok,GC,QE]}),r=pE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=tx(s.toString());BC(n,o,()=>o(n.currentUser)),$C(n,l=>o(l))}}const i=dE("auth");return i&&AC(n,`http://${i}`),n}function rx(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}mC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=rn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",rx().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Xk("Browser");var Ny=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pr,rw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,_){function w(){}w.prototype=_.prototype,E.F=_.prototype,E.prototype=new w,E.prototype.constructor=E,E.D=function(S,P,k){for(var T=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)T[Fe-2]=arguments[Fe];return _.prototype[P].apply(S,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,_,w){w||(w=0);const S=Array(16);if(typeof _=="string")for(var P=0;P<16;++P)S[P]=_.charCodeAt(w++)|_.charCodeAt(w++)<<8|_.charCodeAt(w++)<<16|_.charCodeAt(w++)<<24;else for(P=0;P<16;++P)S[P]=_[w++]|_[w++]<<8|_[w++]<<16|_[w++]<<24;_=E.g[0],w=E.g[1],P=E.g[2];let k=E.g[3],T;T=_+(k^w&(P^k))+S[0]+3614090360&4294967295,_=w+(T<<7&4294967295|T>>>25),T=k+(P^_&(w^P))+S[1]+3905402710&4294967295,k=_+(T<<12&4294967295|T>>>20),T=P+(w^k&(_^w))+S[2]+606105819&4294967295,P=k+(T<<17&4294967295|T>>>15),T=w+(_^P&(k^_))+S[3]+3250441966&4294967295,w=P+(T<<22&4294967295|T>>>10),T=_+(k^w&(P^k))+S[4]+4118548399&4294967295,_=w+(T<<7&4294967295|T>>>25),T=k+(P^_&(w^P))+S[5]+1200080426&4294967295,k=_+(T<<12&4294967295|T>>>20),T=P+(w^k&(_^w))+S[6]+2821735955&4294967295,P=k+(T<<17&4294967295|T>>>15),T=w+(_^P&(k^_))+S[7]+4249261313&4294967295,w=P+(T<<22&4294967295|T>>>10),T=_+(k^w&(P^k))+S[8]+1770035416&4294967295,_=w+(T<<7&4294967295|T>>>25),T=k+(P^_&(w^P))+S[9]+2336552879&4294967295,k=_+(T<<12&4294967295|T>>>20),T=P+(w^k&(_^w))+S[10]+4294925233&4294967295,P=k+(T<<17&4294967295|T>>>15),T=w+(_^P&(k^_))+S[11]+2304563134&4294967295,w=P+(T<<22&4294967295|T>>>10),T=_+(k^w&(P^k))+S[12]+1804603682&4294967295,_=w+(T<<7&4294967295|T>>>25),T=k+(P^_&(w^P))+S[13]+4254626195&4294967295,k=_+(T<<12&4294967295|T>>>20),T=P+(w^k&(_^w))+S[14]+2792965006&4294967295,P=k+(T<<17&4294967295|T>>>15),T=w+(_^P&(k^_))+S[15]+1236535329&4294967295,w=P+(T<<22&4294967295|T>>>10),T=_+(P^k&(w^P))+S[1]+4129170786&4294967295,_=w+(T<<5&4294967295|T>>>27),T=k+(w^P&(_^w))+S[6]+3225465664&4294967295,k=_+(T<<9&4294967295|T>>>23),T=P+(_^w&(k^_))+S[11]+643717713&4294967295,P=k+(T<<14&4294967295|T>>>18),T=w+(k^_&(P^k))+S[0]+3921069994&4294967295,w=P+(T<<20&4294967295|T>>>12),T=_+(P^k&(w^P))+S[5]+3593408605&4294967295,_=w+(T<<5&4294967295|T>>>27),T=k+(w^P&(_^w))+S[10]+38016083&4294967295,k=_+(T<<9&4294967295|T>>>23),T=P+(_^w&(k^_))+S[15]+3634488961&4294967295,P=k+(T<<14&4294967295|T>>>18),T=w+(k^_&(P^k))+S[4]+3889429448&4294967295,w=P+(T<<20&4294967295|T>>>12),T=_+(P^k&(w^P))+S[9]+568446438&4294967295,_=w+(T<<5&4294967295|T>>>27),T=k+(w^P&(_^w))+S[14]+3275163606&4294967295,k=_+(T<<9&4294967295|T>>>23),T=P+(_^w&(k^_))+S[3]+4107603335&4294967295,P=k+(T<<14&4294967295|T>>>18),T=w+(k^_&(P^k))+S[8]+1163531501&4294967295,w=P+(T<<20&4294967295|T>>>12),T=_+(P^k&(w^P))+S[13]+2850285829&4294967295,_=w+(T<<5&4294967295|T>>>27),T=k+(w^P&(_^w))+S[2]+4243563512&4294967295,k=_+(T<<9&4294967295|T>>>23),T=P+(_^w&(k^_))+S[7]+1735328473&4294967295,P=k+(T<<14&4294967295|T>>>18),T=w+(k^_&(P^k))+S[12]+2368359562&4294967295,w=P+(T<<20&4294967295|T>>>12),T=_+(w^P^k)+S[5]+4294588738&4294967295,_=w+(T<<4&4294967295|T>>>28),T=k+(_^w^P)+S[8]+2272392833&4294967295,k=_+(T<<11&4294967295|T>>>21),T=P+(k^_^w)+S[11]+1839030562&4294967295,P=k+(T<<16&4294967295|T>>>16),T=w+(P^k^_)+S[14]+4259657740&4294967295,w=P+(T<<23&4294967295|T>>>9),T=_+(w^P^k)+S[1]+2763975236&4294967295,_=w+(T<<4&4294967295|T>>>28),T=k+(_^w^P)+S[4]+1272893353&4294967295,k=_+(T<<11&4294967295|T>>>21),T=P+(k^_^w)+S[7]+4139469664&4294967295,P=k+(T<<16&4294967295|T>>>16),T=w+(P^k^_)+S[10]+3200236656&4294967295,w=P+(T<<23&4294967295|T>>>9),T=_+(w^P^k)+S[13]+681279174&4294967295,_=w+(T<<4&4294967295|T>>>28),T=k+(_^w^P)+S[0]+3936430074&4294967295,k=_+(T<<11&4294967295|T>>>21),T=P+(k^_^w)+S[3]+3572445317&4294967295,P=k+(T<<16&4294967295|T>>>16),T=w+(P^k^_)+S[6]+76029189&4294967295,w=P+(T<<23&4294967295|T>>>9),T=_+(w^P^k)+S[9]+3654602809&4294967295,_=w+(T<<4&4294967295|T>>>28),T=k+(_^w^P)+S[12]+3873151461&4294967295,k=_+(T<<11&4294967295|T>>>21),T=P+(k^_^w)+S[15]+530742520&4294967295,P=k+(T<<16&4294967295|T>>>16),T=w+(P^k^_)+S[2]+3299628645&4294967295,w=P+(T<<23&4294967295|T>>>9),T=_+(P^(w|~k))+S[0]+4096336452&4294967295,_=w+(T<<6&4294967295|T>>>26),T=k+(w^(_|~P))+S[7]+1126891415&4294967295,k=_+(T<<10&4294967295|T>>>22),T=P+(_^(k|~w))+S[14]+2878612391&4294967295,P=k+(T<<15&4294967295|T>>>17),T=w+(k^(P|~_))+S[5]+4237533241&4294967295,w=P+(T<<21&4294967295|T>>>11),T=_+(P^(w|~k))+S[12]+1700485571&4294967295,_=w+(T<<6&4294967295|T>>>26),T=k+(w^(_|~P))+S[3]+2399980690&4294967295,k=_+(T<<10&4294967295|T>>>22),T=P+(_^(k|~w))+S[10]+4293915773&4294967295,P=k+(T<<15&4294967295|T>>>17),T=w+(k^(P|~_))+S[1]+2240044497&4294967295,w=P+(T<<21&4294967295|T>>>11),T=_+(P^(w|~k))+S[8]+1873313359&4294967295,_=w+(T<<6&4294967295|T>>>26),T=k+(w^(_|~P))+S[15]+4264355552&4294967295,k=_+(T<<10&4294967295|T>>>22),T=P+(_^(k|~w))+S[6]+2734768916&4294967295,P=k+(T<<15&4294967295|T>>>17),T=w+(k^(P|~_))+S[13]+1309151649&4294967295,w=P+(T<<21&4294967295|T>>>11),T=_+(P^(w|~k))+S[4]+4149444226&4294967295,_=w+(T<<6&4294967295|T>>>26),T=k+(w^(_|~P))+S[11]+3174756917&4294967295,k=_+(T<<10&4294967295|T>>>22),T=P+(_^(k|~w))+S[2]+718787259&4294967295,P=k+(T<<15&4294967295|T>>>17),T=w+(k^(P|~_))+S[9]+3951481745&4294967295,E.g[0]=E.g[0]+_&4294967295,E.g[1]=E.g[1]+(P+(T<<21&4294967295|T>>>11))&4294967295,E.g[2]=E.g[2]+P&4294967295,E.g[3]=E.g[3]+k&4294967295}r.prototype.v=function(E,_){_===void 0&&(_=E.length);const w=_-this.blockSize,S=this.C;let P=this.h,k=0;for(;k<_;){if(P==0)for(;k<=w;)i(this,E,k),k+=this.blockSize;if(typeof E=="string"){for(;k<_;)if(S[P++]=E.charCodeAt(k++),P==this.blockSize){i(this,S),P=0;break}}else for(;k<_;)if(S[P++]=E[k++],P==this.blockSize){i(this,S),P=0;break}}this.h=P,this.o+=_},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var _=1;_<E.length-8;++_)E[_]=0;_=this.o*8;for(var w=E.length-8;w<E.length;++w)E[w]=_&255,_/=256;for(this.v(E),E=Array(16),_=0,w=0;w<4;++w)for(let S=0;S<32;S+=8)E[_++]=this.g[w]>>>S&255;return E};function s(E,_){var w=l;return Object.prototype.hasOwnProperty.call(w,E)?w[E]:w[E]=_(E)}function o(E,_){this.h=_;const w=[];let S=!0;for(let P=E.length-1;P>=0;P--){const k=E[P]|0;S&&k==_||(w[P]=k,S=!1)}this.g=w}var l={};function u(E){return-128<=E&&E<128?s(E,function(_){return new o([_|0],_<0?-1:0)}):new o([E|0],E<0?-1:0)}function c(E){if(isNaN(E)||!isFinite(E))return p;if(E<0)return V(c(-E));const _=[];let w=1;for(let S=0;E>=w;S++)_[S]=E/w|0,w*=4294967296;return new o(_,0)}function f(E,_){if(E.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(E.charAt(0)=="-")return V(f(E.substring(1),_));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const w=c(Math.pow(_,8));let S=p;for(let k=0;k<E.length;k+=8){var P=Math.min(8,E.length-k);const T=parseInt(E.substring(k,k+P),_);P<8?(P=c(Math.pow(_,P)),S=S.j(P).add(c(T))):(S=S.j(w),S=S.add(c(T)))}return S}var p=u(0),g=u(1),A=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-V(this).m();let E=0,_=1;for(let w=0;w<this.g.length;w++){const S=this.i(w);E+=(S>=0?S:4294967296+S)*_,_*=4294967296}return E},t.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(C(this))return"0";if(N(this))return"-"+V(this).toString(E);const _=c(Math.pow(E,6));var w=this;let S="";for(;;){const P=b(w,_).g;w=I(w,P.j(_));let k=((w.g.length>0?w.g[0]:w.h)>>>0).toString(E);if(w=P,C(w))return k+S;for(;k.length<6;)k="0"+k;S=k+S}},t.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function C(E){if(E.h!=0)return!1;for(let _=0;_<E.g.length;_++)if(E.g[_]!=0)return!1;return!0}function N(E){return E.h==-1}t.l=function(E){return E=I(this,E),N(E)?-1:C(E)?0:1};function V(E){const _=E.g.length,w=[];for(let S=0;S<_;S++)w[S]=~E.g[S];return new o(w,~E.h).add(g)}t.abs=function(){return N(this)?V(this):this},t.add=function(E){const _=Math.max(this.g.length,E.g.length),w=[];let S=0;for(let P=0;P<=_;P++){let k=S+(this.i(P)&65535)+(E.i(P)&65535),T=(k>>>16)+(this.i(P)>>>16)+(E.i(P)>>>16);S=T>>>16,k&=65535,T&=65535,w[P]=T<<16|k}return new o(w,w[w.length-1]&-2147483648?-1:0)};function I(E,_){return E.add(V(_))}t.j=function(E){if(C(this)||C(E))return p;if(N(this))return N(E)?V(this).j(V(E)):V(V(this).j(E));if(N(E))return V(this.j(V(E)));if(this.l(A)<0&&E.l(A)<0)return c(this.m()*E.m());const _=this.g.length+E.g.length,w=[];for(var S=0;S<2*_;S++)w[S]=0;for(S=0;S<this.g.length;S++)for(let P=0;P<E.g.length;P++){const k=this.i(S)>>>16,T=this.i(S)&65535,Fe=E.i(P)>>>16,hn=E.i(P)&65535;w[2*S+2*P]+=T*hn,v(w,2*S+2*P),w[2*S+2*P+1]+=k*hn,v(w,2*S+2*P+1),w[2*S+2*P+1]+=T*Fe,v(w,2*S+2*P+1),w[2*S+2*P+2]+=k*Fe,v(w,2*S+2*P+2)}for(E=0;E<_;E++)w[E]=w[2*E+1]<<16|w[2*E];for(E=_;E<2*_;E++)w[E]=0;return new o(w,0)};function v(E,_){for(;(E[_]&65535)!=E[_];)E[_+1]+=E[_]>>>16,E[_]&=65535,_++}function R(E,_){this.g=E,this.h=_}function b(E,_){if(C(_))throw Error("division by zero");if(C(E))return new R(p,p);if(N(E))return _=b(V(E),_),new R(V(_.g),V(_.h));if(N(_))return _=b(E,V(_)),new R(V(_.g),_.h);if(E.g.length>30){if(N(E)||N(_))throw Error("slowDivide_ only works with positive integers.");for(var w=g,S=_;S.l(E)<=0;)w=j(w),S=j(S);var P=$(w,1),k=$(S,1);for(S=$(S,2),w=$(w,2);!C(S);){var T=k.add(S);T.l(E)<=0&&(P=P.add(w),k=T),S=$(S,1),w=$(w,1)}return _=I(E,P.j(_)),new R(P,_)}for(P=p;E.l(_)>=0;){for(w=Math.max(1,Math.floor(E.m()/_.m())),S=Math.ceil(Math.log(w)/Math.LN2),S=S<=48?1:Math.pow(2,S-48),k=c(w),T=k.j(_);N(T)||T.l(E)>0;)w-=S,k=c(w),T=k.j(_);C(k)&&(k=g),P=P.add(k),E=I(E,T)}return new R(P,E)}t.B=function(E){return b(this,E).h},t.and=function(E){const _=Math.max(this.g.length,E.g.length),w=[];for(let S=0;S<_;S++)w[S]=this.i(S)&E.i(S);return new o(w,this.h&E.h)},t.or=function(E){const _=Math.max(this.g.length,E.g.length),w=[];for(let S=0;S<_;S++)w[S]=this.i(S)|E.i(S);return new o(w,this.h|E.h)},t.xor=function(E){const _=Math.max(this.g.length,E.g.length),w=[];for(let S=0;S<_;S++)w[S]=this.i(S)^E.i(S);return new o(w,this.h^E.h)};function j(E){const _=E.g.length+1,w=[];for(let S=0;S<_;S++)w[S]=E.i(S)<<1|E.i(S-1)>>>31;return new o(w,E.h)}function $(E,_){const w=_>>5;_%=32;const S=E.g.length-w,P=[];for(let k=0;k<S;k++)P[k]=_>0?E.i(k+w)>>>_|E.i(k+w+1)<<32-_:E.i(k+w);return new o(P,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,rw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,pr=o}).apply(typeof Ny<"u"?Ny:typeof self<"u"?self:typeof window<"u"?window:{});var nl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var iw,so,sw,Al,wd,ow,aw,lw;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof nl=="object"&&nl];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var x=a[m];if(!(x in d))break e;d=d[x]}a=a[a.length-1],m=d[a],h=h(m),h!=m&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(h){var d=[],m;for(m in h)Object.prototype.hasOwnProperty.call(h,m)&&d.push([m,h[m]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,d){return a.call.apply(a.bind,arguments)}function c(a,h,d){return c=u,c.apply(null,arguments)}function f(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function p(a,h){function d(){}d.prototype=h.prototype,a.Z=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(m,x,D){for(var F=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)F[Z-2]=arguments[Z];return h.prototype[x].apply(m,F)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function A(a){const h=a.length;if(h>0){const d=Array(h);for(let m=0;m<h;m++)d[m]=a[m];return d}return[]}function C(a,h){for(let m=1;m<arguments.length;m++){const x=arguments[m];var d=typeof x;if(d=d!="object"?d:x?Array.isArray(x)?"array":d:"null",d=="array"||d=="object"&&typeof x.length=="number"){d=a.length||0;const D=x.length||0;a.length=d+D;for(let F=0;F<D;F++)a[d+F]=x[F]}else a.push(x)}}class N{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function V(a){o.setTimeout(()=>{throw a},0)}function I(){var a=E;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class v{constructor(){this.h=this.g=null}add(h,d){const m=R.get();m.set(h,d),this.h?this.h.next=m:this.g=m,this.h=m}}var R=new N(()=>new b,a=>a.reset());class b{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let j,$=!1,E=new v,_=()=>{const a=Promise.resolve(void 0);j=()=>{a.then(w)}};function w(){for(var a;a=I();){try{a.h.call(a.g)}catch(d){V(d)}var h=R;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}$=!1}function S(){this.u=this.u,this.C=this.C}S.prototype.u=!1,S.prototype.dispose=function(){this.u||(this.u=!0,this.N())},S.prototype[Symbol.dispose]=function(){this.dispose()},S.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function P(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}P.prototype.h=function(){this.defaultPrevented=!0};var k=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,h),o.removeEventListener("test",d,h)}catch{}return a}();function T(a){return/^[\s\xa0]*$/.test(a)}function Fe(a,h){P.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(Fe,P),Fe.prototype.init=function(a,h){const d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Fe.Z.h.call(this)},Fe.prototype.h=function(){Fe.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var hn="closure_listenable_"+(Math.random()*1e6|0),Is=0;function Ss(a,h,d,m,x){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!m,this.ha=x,this.key=++Is,this.da=this.fa=!1}function W(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Q(a,h,d){for(const m in a)h.call(d,a[m],m,a)}function X(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function me(a){const h={};for(const d in a)h[d]=a[d];return h}const Ie="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function br(a,h){let d,m;for(let x=1;x<arguments.length;x++){m=arguments[x];for(d in m)a[d]=m[d];for(let D=0;D<Ie.length;D++)d=Ie[D],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function At(a){this.src=a,this.g={},this.h=0}At.prototype.add=function(a,h,d,m,x){const D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);const F=Ot(a,h,m,x);return F>-1?(h=a[F],d||(h.fa=!1)):(h=new Ss(h,this.src,D,!!m,x),h.fa=d,a.push(h)),h};function Or(a,h){const d=h.type;if(d in a.g){var m=a.g[d],x=Array.prototype.indexOf.call(m,h,void 0),D;(D=x>=0)&&Array.prototype.splice.call(m,x,1),D&&(W(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Ot(a,h,d,m){for(let x=0;x<a.length;++x){const D=a[x];if(!D.da&&D.listener==h&&D.capture==!!d&&D.ha==m)return x}return-1}var On="closure_lm_"+(Math.random()*1e6|0),cc={};function Lp(a,h,d,m,x){if(Array.isArray(h)){for(let D=0;D<h.length;D++)Lp(a,h[D],d,m,x);return null}return d=jp(d),a&&a[hn]?a.J(h,d,l(m)?!!m.capture:!!m,x):X1(a,h,d,!1,m,x)}function X1(a,h,d,m,x,D){if(!h)throw Error("Invalid event type");const F=l(x)?!!x.capture:!!x;let Z=dc(a);if(Z||(a[On]=Z=new At(a)),d=Z.add(h,d,m,F,D),d.proxy)return d;if(m=Z1(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)k||(x=F),x===void 0&&(x=!1),a.addEventListener(h.toString(),m,x);else if(a.attachEvent)a.attachEvent(Up(h.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Z1(){function a(d){return h.call(a.src,a.listener,d)}const h=eT;return a}function Mp(a,h,d,m,x){if(Array.isArray(h))for(var D=0;D<h.length;D++)Mp(a,h[D],d,m,x);else m=l(m)?!!m.capture:!!m,d=jp(d),a&&a[hn]?(a=a.i,D=String(h).toString(),D in a.g&&(h=a.g[D],d=Ot(h,d,m,x),d>-1&&(W(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete a.g[D],a.h--)))):a&&(a=dc(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Ot(h,d,m,x)),(d=a>-1?h[a]:null)&&hc(d))}function hc(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[hn])Or(h.i,a);else{var d=a.type,m=a.proxy;h.removeEventListener?h.removeEventListener(d,m,a.capture):h.detachEvent?h.detachEvent(Up(d),m):h.addListener&&h.removeListener&&h.removeListener(m),(d=dc(h))?(Or(d,a),d.h==0&&(d.src=null,h[On]=null)):W(a)}}}function Up(a){return a in cc?cc[a]:cc[a]="on"+a}function eT(a,h){if(a.da)a=!0;else{h=new Fe(h,this);const d=a.listener,m=a.ha||a.src;a.fa&&hc(a),a=d.call(m,h)}return a}function dc(a){return a=a[On],a instanceof At?a:null}var fc="__closure_events_fn_"+(Math.random()*1e9>>>0);function jp(a){return typeof a=="function"?a:(a[fc]||(a[fc]=function(h){return a.handleEvent(h)}),a[fc])}function Ge(){S.call(this),this.i=new At(this),this.M=this,this.G=null}p(Ge,S),Ge.prototype[hn]=!0,Ge.prototype.removeEventListener=function(a,h,d,m){Mp(this,a,h,d,m)};function rt(a,h){var d,m=a.G;if(m)for(d=[];m;m=m.G)d.push(m);if(a=a.M,m=h.type||h,typeof h=="string")h=new P(h,a);else if(h instanceof P)h.target=h.target||a;else{var x=h;h=new P(m,a),br(h,x)}x=!0;let D,F;if(d)for(F=d.length-1;F>=0;F--)D=h.g=d[F],x=Aa(D,m,!0,h)&&x;if(D=h.g=a,x=Aa(D,m,!0,h)&&x,x=Aa(D,m,!1,h)&&x,d)for(F=0;F<d.length;F++)D=h.g=d[F],x=Aa(D,m,!1,h)&&x}Ge.prototype.N=function(){if(Ge.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const d=a.g[h];for(let m=0;m<d.length;m++)W(d[m]);delete a.g[h],a.h--}}this.G=null},Ge.prototype.J=function(a,h,d,m){return this.i.add(String(a),h,!1,d,m)},Ge.prototype.K=function(a,h,d,m){return this.i.add(String(a),h,!0,d,m)};function Aa(a,h,d,m){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let x=!0;for(let D=0;D<h.length;++D){const F=h[D];if(F&&!F.da&&F.capture==d){const Z=F.listener,Ne=F.ha||F.src;F.fa&&Or(a.i,F),x=Z.call(Ne,m)!==!1&&x}}return x&&!m.defaultPrevented}function tT(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Fp(a){a.g=tT(()=>{a.g=null,a.i&&(a.i=!1,Fp(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class nT extends S{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Fp(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function As(a){S.call(this),this.h=a,this.g={}}p(As,S);var zp=[];function $p(a){Q(a.g,function(h,d){this.g.hasOwnProperty(d)&&hc(h)},a),a.g={}}As.prototype.N=function(){As.Z.N.call(this),$p(this)},As.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var pc=o.JSON.stringify,rT=o.JSON.parse,iT=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Bp(){}function Wp(){}var Rs={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function mc(){P.call(this,"d")}p(mc,P);function gc(){P.call(this,"c")}p(gc,P);var Lr={},qp=null;function Ra(){return qp=qp||new Ge}Lr.Ia="serverreachability";function Hp(a){P.call(this,Lr.Ia,a)}p(Hp,P);function Ps(a){const h=Ra();rt(h,new Hp(h))}Lr.STAT_EVENT="statevent";function Kp(a,h){P.call(this,Lr.STAT_EVENT,a),this.stat=h}p(Kp,P);function it(a){const h=Ra();rt(h,new Kp(h,a))}Lr.Ja="timingevent";function Gp(a,h){P.call(this,Lr.Ja,a),this.size=h}p(Gp,P);function Cs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function ks(){this.g=!0}ks.prototype.ua=function(){this.g=!1};function sT(a,h,d,m,x,D){a.info(function(){if(a.g)if(D){var F="",Z=D.split("&");for(let le=0;le<Z.length;le++){var Ne=Z[le].split("=");if(Ne.length>1){const Le=Ne[0];Ne=Ne[1];const Jt=Le.split("_");F=Jt.length>=2&&Jt[1]=="type"?F+(Le+"="+Ne+"&"):F+(Le+"=redacted&")}}}else F=null;else F=D;return"XMLHTTP REQ ("+m+") [attempt "+x+"]: "+h+`
`+d+`
`+F})}function oT(a,h,d,m,x,D,F){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+x+"]: "+h+`
`+d+`
`+D+" "+F})}function _i(a,h,d,m){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+lT(a,d)+(m?" "+m:"")})}function aT(a,h){a.info(function(){return"TIMEOUT: "+h})}ks.prototype.info=function(){};function lT(a,h){if(!a.g)return h;if(!h)return null;try{const D=JSON.parse(h);if(D){for(a=0;a<D.length;a++)if(Array.isArray(D[a])){var d=D[a];if(!(d.length<2)){var m=d[1];if(Array.isArray(m)&&!(m.length<1)){var x=m[0];if(x!="noop"&&x!="stop"&&x!="close")for(let F=1;F<m.length;F++)m[F]=""}}}}return pc(D)}catch{return h}}var Pa={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Qp={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Jp;function yc(){}p(yc,Bp),yc.prototype.g=function(){return new XMLHttpRequest},Jp=new yc;function xs(a){return encodeURIComponent(String(a))}function uT(a){var h=1;a=a.split(":");const d=[];for(;h>0&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function Ln(a,h,d,m){this.j=a,this.i=h,this.l=d,this.S=m||1,this.V=new As(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Yp}function Yp(){this.i=null,this.g="",this.h=!1}var Xp={},_c={};function vc(a,h,d){a.M=1,a.A=ka(Qt(h)),a.u=d,a.R=!0,Zp(a,null)}function Zp(a,h){a.F=Date.now(),Ca(a),a.B=Qt(a.A);var d=a.B,m=a.S;Array.isArray(m)||(m=[String(m)]),dm(d.i,"t",m),a.C=0,d=a.j.L,a.h=new Yp,a.g=xm(a.j,d?h:null,!a.u),a.P>0&&(a.O=new nT(c(a.Y,a,a.g),a.P)),h=a.V,d=a.g,m=a.ba;var x="readystatechange";Array.isArray(x)||(x&&(zp[0]=x.toString()),x=zp);for(let D=0;D<x.length;D++){const F=Lp(d,x[D],m||h.handleEvent,!1,h.h||h);if(!F)break;h.g[F.key]=F}h=a.J?me(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Ps(),sT(a.i,a.v,a.B,a.l,a.S,a.u)}Ln.prototype.ba=function(a){a=a.target;const h=this.O;h&&jn(a)==3?h.j():this.Y(a)},Ln.prototype.Y=function(a){try{if(a==this.g)e:{const Z=jn(this.g),Ne=this.g.ya(),le=this.g.ca();if(!(Z<3)&&(Z!=3||this.g&&(this.h.h||this.g.la()||vm(this.g)))){this.K||Z!=4||Ne==7||(Ne==8||le<=0?Ps(3):Ps(2)),Ec(this);var h=this.g.ca();this.X=h;var d=cT(this);if(this.o=h==200,oT(this.i,this.v,this.B,this.l,this.S,Z,h),this.o){if(this.U&&!this.L){t:{if(this.g){var m,x=this.g;if((m=x.g?x.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(m)){var D=m;break t}}D=null}if(a=D)_i(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,wc(this,a);else{this.o=!1,this.m=3,it(12),Mr(this),Ns(this);break e}}if(this.R){a=!0;let Le;for(;!this.K&&this.C<d.length;)if(Le=hT(this,d),Le==_c){Z==4&&(this.m=4,it(14),a=!1),_i(this.i,this.l,null,"[Incomplete Response]");break}else if(Le==Xp){this.m=4,it(15),_i(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else _i(this.i,this.l,Le,null),wc(this,Le);if(em(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Z!=4||d.length!=0||this.h.h||(this.m=1,it(16),a=!1),this.o=this.o&&a,!a)_i(this.i,this.l,d,"[Invalid Chunked Response]"),Mr(this),Ns(this);else if(d.length>0&&!this.W){this.W=!0;var F=this.j;F.g==this&&F.aa&&!F.P&&(F.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),kc(F),F.P=!0,it(11))}}else _i(this.i,this.l,d,null),wc(this,d);Z==4&&Mr(this),this.o&&!this.K&&(Z==4?Rm(this.j,this):(this.o=!1,Ca(this)))}else AT(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,it(12)):(this.m=0,it(13)),Mr(this),Ns(this)}}}catch{}finally{}};function cT(a){if(!em(a))return a.g.la();const h=vm(a.g);if(h==="")return"";let d="";const m=h.length,x=jn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Mr(a),Ns(a),"";a.h.i=new o.TextDecoder}for(let D=0;D<m;D++)a.h.h=!0,d+=a.h.i.decode(h[D],{stream:!(x&&D==m-1)});return h.length=0,a.h.g+=d,a.C=0,a.h.g}function em(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function hT(a,h){var d=a.C,m=h.indexOf(`
`,d);return m==-1?_c:(d=Number(h.substring(d,m)),isNaN(d)?Xp:(m+=1,m+d>h.length?_c:(h=h.slice(m,m+d),a.C=m+d,h)))}Ln.prototype.cancel=function(){this.K=!0,Mr(this)};function Ca(a){a.T=Date.now()+a.H,tm(a,a.H)}function tm(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Cs(c(a.aa,a),h)}function Ec(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Ln.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(aT(this.i,this.B),this.M!=2&&(Ps(),it(17)),Mr(this),this.m=2,Ns(this)):tm(this,this.T-a)};function Ns(a){a.j.I==0||a.K||Rm(a.j,a)}function Mr(a){Ec(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,$p(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function wc(a,h){try{var d=a.j;if(d.I!=0&&(d.g==a||Tc(d.h,a))){if(!a.L&&Tc(d.h,a)&&d.I==3){try{var m=d.Ba.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var x=m;if(x[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)ba(d),Da(d);else break e;Cc(d),it(18)}}else d.xa=x[1],0<d.xa-d.K&&x[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Cs(c(d.Va,d),6e3));im(d.h)<=1&&d.ta&&(d.ta=void 0)}else jr(d,11)}else if((a.L||d.g==a)&&ba(d),!T(h))for(x=d.Ba.g.parse(h),h=0;h<x.length;h++){let le=x[h];const Le=le[0];if(!(Le<=d.K))if(d.K=Le,le=le[1],d.I==2)if(le[0]=="c"){d.M=le[1],d.ba=le[2];const Jt=le[3];Jt!=null&&(d.ka=Jt,d.j.info("VER="+d.ka));const Fr=le[4];Fr!=null&&(d.za=Fr,d.j.info("SVER="+d.za));const Fn=le[5];Fn!=null&&typeof Fn=="number"&&Fn>0&&(m=1.5*Fn,d.O=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const zn=a.g;if(zn){const La=zn.g?zn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(La){var D=m.h;D.g||La.indexOf("spdy")==-1&&La.indexOf("quic")==-1&&La.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Ic(D,D.h),D.h=null))}if(m.G){const xc=zn.g?zn.g.getResponseHeader("X-HTTP-Session-Id"):null;xc&&(m.wa=xc,he(m.J,m.G,xc))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),m=d;var F=a;if(m.na=km(m,m.L?m.ba:null,m.W),F.L){sm(m.h,F);var Z=F,Ne=m.O;Ne&&(Z.H=Ne),Z.D&&(Ec(Z),Ca(Z)),m.g=F}else Sm(m);d.i.length>0&&Va(d)}else le[0]!="stop"&&le[0]!="close"||jr(d,7);else d.I==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?jr(d,7):Pc(d):le[0]!="noop"&&d.l&&d.l.qa(le),d.A=0)}}Ps(4)}catch{}}var dT=class{constructor(a,h){this.g=a,this.map=h}};function nm(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function rm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function im(a){return a.h?1:a.g?a.g.size:0}function Tc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Ic(a,h){a.g?a.g.add(h):a.h=h}function sm(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}nm.prototype.cancel=function(){if(this.i=om(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function om(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.G);return h}return A(a.i)}var am=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fT(a,h){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const m=a[d].indexOf("=");let x,D=null;m>=0?(x=a[d].substring(0,m),D=a[d].substring(m+1)):x=a[d],h(x,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Mn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Mn?(this.l=a.l,Ds(this,a.j),this.o=a.o,this.g=a.g,Vs(this,a.u),this.h=a.h,Sc(this,fm(a.i)),this.m=a.m):a&&(h=String(a).match(am))?(this.l=!1,Ds(this,h[1]||"",!0),this.o=bs(h[2]||""),this.g=bs(h[3]||"",!0),Vs(this,h[4]),this.h=bs(h[5]||"",!0),Sc(this,h[6]||"",!0),this.m=bs(h[7]||"")):(this.l=!1,this.i=new Ls(null,this.l))}Mn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Os(h,lm,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Os(h,lm,!0),"@"),a.push(xs(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Os(d,d.charAt(0)=="/"?gT:mT,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Os(d,_T)),a.join("")},Mn.prototype.resolve=function(a){const h=Qt(this);let d=!!a.j;d?Ds(h,a.j):d=!!a.o,d?h.o=a.o:d=!!a.g,d?h.g=a.g:d=a.u!=null;var m=a.h;if(d)Vs(h,a.u);else if(d=!!a.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var x=h.h.lastIndexOf("/");x!=-1&&(m=h.h.slice(0,x+1)+m)}if(x=m,x==".."||x==".")m="";else if(x.indexOf("./")!=-1||x.indexOf("/.")!=-1){m=x.lastIndexOf("/",0)==0,x=x.split("/");const D=[];for(let F=0;F<x.length;){const Z=x[F++];Z=="."?m&&F==x.length&&D.push(""):Z==".."?((D.length>1||D.length==1&&D[0]!="")&&D.pop(),m&&F==x.length&&D.push("")):(D.push(Z),m=!0)}m=D.join("/")}else m=x}return d?h.h=m:d=a.i.toString()!=="",d?Sc(h,fm(a.i)):d=!!a.m,d&&(h.m=a.m),h};function Qt(a){return new Mn(a)}function Ds(a,h,d){a.j=d?bs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Vs(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Sc(a,h,d){h instanceof Ls?(a.i=h,vT(a.i,a.l)):(d||(h=Os(h,yT)),a.i=new Ls(h,a.l))}function he(a,h,d){a.i.set(h,d)}function ka(a){return he(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function bs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Os(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,pT),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function pT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var lm=/[#\/\?@]/g,mT=/[#\?:]/g,gT=/[#\?]/g,yT=/[#\?@]/g,_T=/#/g;function Ls(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Ur(a){a.g||(a.g=new Map,a.h=0,a.i&&fT(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=Ls.prototype,t.add=function(a,h){Ur(this),this.i=null,a=vi(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function um(a,h){Ur(a),h=vi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function cm(a,h){return Ur(a),h=vi(a,h),a.g.has(h)}t.forEach=function(a,h){Ur(this),this.g.forEach(function(d,m){d.forEach(function(x){a.call(h,x,m,this)},this)},this)};function hm(a,h){Ur(a);let d=[];if(typeof h=="string")cm(a,h)&&(d=d.concat(a.g.get(vi(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)d=d.concat(a[h]);return d}t.set=function(a,h){return Ur(this),this.i=null,a=vi(this,a),cm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=hm(this,a),a.length>0?String(a[0]):h):h};function dm(a,h,d){um(a,h),d.length>0&&(a.i=null,a.g.set(vi(a,h),A(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let m=0;m<h.length;m++){var d=h[m];const x=xs(d);d=hm(this,d);for(let D=0;D<d.length;D++){let F=x;d[D]!==""&&(F+="="+xs(d[D])),a.push(F)}}return this.i=a.join("&")};function fm(a){const h=new Ls;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function vi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function vT(a,h){h&&!a.j&&(Ur(a),a.i=null,a.g.forEach(function(d,m){const x=m.toLowerCase();m!=x&&(um(this,m),dm(this,x,d))},a)),a.j=h}function ET(a,h){const d=new ks;if(o.Image){const m=new Image;m.onload=f(Un,d,"TestLoadImage: loaded",!0,h,m),m.onerror=f(Un,d,"TestLoadImage: error",!1,h,m),m.onabort=f(Un,d,"TestLoadImage: abort",!1,h,m),m.ontimeout=f(Un,d,"TestLoadImage: timeout",!1,h,m),o.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else h(!1)}function wT(a,h){const d=new ks,m=new AbortController,x=setTimeout(()=>{m.abort(),Un(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:m.signal}).then(D=>{clearTimeout(x),D.ok?Un(d,"TestPingServer: ok",!0,h):Un(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(x),Un(d,"TestPingServer: error",!1,h)})}function Un(a,h,d,m,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),m(d)}catch{}}function TT(){this.g=new iT}function Ac(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Ac,Bp),Ac.prototype.g=function(){return new xa(this.i,this.h)};function xa(a,h){Ge.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(xa,Ge),t=xa.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Us(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ms(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Us(this)),this.g&&(this.readyState=3,Us(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;pm(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function pm(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Ms(this):Us(this),this.readyState==3&&pm(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Ms(this))},t.Na=function(a){this.g&&(this.response=a,Ms(this))},t.ga=function(){this.g&&Ms(this)};function Ms(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Us(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Us(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(xa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function mm(a){let h="";return Q(a,function(d,m){h+=m,h+=":",h+=d,h+=`\r
`}),h}function Rc(a,h,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=mm(d),typeof a=="string"?d!=null&&xs(d):he(a,h,d))}function we(a){Ge.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(we,Ge);var IT=/^https?$/i,ST=["POST","PUT"];t=we.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Jp.g(),this.g.onreadystatechange=g(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){gm(this,D);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var x in m)d.set(x,m[x]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const D of m.keys())d.set(D,m.get(D));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),x=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(ST,h,void 0)>=0)||m||x||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,F]of d)this.g.setRequestHeader(D,F);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(D){gm(this,D)}};function gm(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,ym(a),Na(a)}function ym(a){a.A||(a.A=!0,rt(a,"complete"),rt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,rt(this,"complete"),rt(this,"abort"),Na(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Na(this,!0)),we.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?_m(this):this.Xa())},t.Xa=function(){_m(this)};function _m(a){if(a.h&&typeof s<"u"){if(a.v&&jn(a)==4)setTimeout(a.Ca.bind(a),0);else if(rt(a,"readystatechange"),jn(a)==4){a.h=!1;try{const D=a.ca();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var m;if(m=D===0){let F=String(a.D).match(am)[1]||null;!F&&o.self&&o.self.location&&(F=o.self.location.protocol.slice(0,-1)),m=!IT.test(F?F.toLowerCase():"")}d=m}if(d)rt(a,"complete"),rt(a,"success");else{a.o=6;try{var x=jn(a)>2?a.g.statusText:""}catch{x=""}a.l=x+" ["+a.ca()+"]",ym(a)}}finally{Na(a)}}}}function Na(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,h||rt(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function jn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return jn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),rT(h)}};function vm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function AT(a){const h={};a=(a.g&&jn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(T(a[m]))continue;var d=uT(a[m]);const x=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=h[x]||[];h[x]=D,D.push(d)}X(h,function(m){return m.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function js(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Em(a){this.za=0,this.i=[],this.j=new ks,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=js("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=js("baseRetryDelayMs",5e3,a),this.Za=js("retryDelaySeedMs",1e4,a),this.Ta=js("forwardChannelMaxRetries",2,a),this.va=js("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new nm(a&&a.concurrentRequestLimit),this.Ba=new TT,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Em.prototype,t.ka=8,t.I=1,t.connect=function(a,h,d,m){it(0),this.W=a,this.H=h||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.J=km(this,null,this.W),Va(this)};function Pc(a){if(wm(a),a.I==3){var h=a.V++,d=Qt(a.J);if(he(d,"SID",a.M),he(d,"RID",h),he(d,"TYPE","terminate"),Fs(a,d),h=new Ln(a,a.j,h),h.M=2,h.A=ka(Qt(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=h.A,d=!0),d||(h.g=xm(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Ca(h)}Cm(a)}function Da(a){a.g&&(kc(a),a.g.cancel(),a.g=null)}function wm(a){Da(a),a.v&&(o.clearTimeout(a.v),a.v=null),ba(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Va(a){if(!rm(a.h)&&!a.m){a.m=!0;var h=a.Ea;j||_(),$||(j(),$=!0),E.add(h,a),a.D=0}}function RT(a,h){return im(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Cs(c(a.Ea,a,h),Pm(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const x=new Ln(this,this.j,a);let D=this.o;if(this.U&&(D?(D=me(D),br(D,this.U)):D=this.U),this.u!==null||this.R||(x.J=D,D=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Im(this,x,h),d=Qt(this.J),he(d,"RID",a),he(d,"CVER",22),this.G&&he(d,"X-HTTP-Session-Id",this.G),Fs(this,d),D&&(this.R?h="headers="+xs(mm(D))+"&"+h:this.u&&Rc(d,this.u,D)),Ic(this.h,x),this.Ra&&he(d,"TYPE","init"),this.S?(he(d,"$req",h),he(d,"SID","null"),x.U=!0,vc(x,d,null)):vc(x,d,h),this.I=2}}else this.I==3&&(a?Tm(this,a):this.i.length==0||rm(this.h)||Tm(this))};function Tm(a,h){var d;h?d=h.l:d=a.V++;const m=Qt(a.J);he(m,"SID",a.M),he(m,"RID",d),he(m,"AID",a.K),Fs(a,m),a.u&&a.o&&Rc(m,a.u,a.o),d=new Ln(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Im(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Ic(a.h,d),vc(d,m,h)}function Fs(a,h){a.H&&Q(a.H,function(d,m){he(h,m,d)}),a.l&&Q({},function(d,m){he(h,m,d)})}function Im(a,h,d){d=Math.min(a.i.length,d);const m=a.l?c(a.l.Ka,a.l,a):null;e:{var x=a.i;let Z=-1;for(;;){const Ne=["count="+d];Z==-1?d>0?(Z=x[0].g,Ne.push("ofs="+Z)):Z=0:Ne.push("ofs="+Z);let le=!0;for(let Le=0;Le<d;Le++){var D=x[Le].g;const Jt=x[Le].map;if(D-=Z,D<0)Z=Math.max(0,x[Le].g-100),le=!1;else try{D="req"+D+"_"||"";try{var F=Jt instanceof Map?Jt:Object.entries(Jt);for(const[Fr,Fn]of F){let zn=Fn;l(Fn)&&(zn=pc(Fn)),Ne.push(D+Fr+"="+encodeURIComponent(zn))}}catch(Fr){throw Ne.push(D+"type="+encodeURIComponent("_badmap")),Fr}}catch{m&&m(Jt)}}if(le){F=Ne.join("&");break e}}F=void 0}return a=a.i.splice(0,d),h.G=a,F}function Sm(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;j||_(),$||(j(),$=!0),E.add(h,a),a.A=0}}function Cc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Cs(c(a.Da,a),Pm(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Am(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Cs(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,it(10),Da(this),Am(this))};function kc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Am(a){a.g=new Ln(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=Qt(a.na);he(h,"RID","rpc"),he(h,"SID",a.M),he(h,"AID",a.K),he(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&he(h,"TO",a.ia),he(h,"TYPE","xmlhttp"),Fs(a,h),a.u&&a.o&&Rc(h,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=ka(Qt(h)),d.u=null,d.R=!0,Zp(d,a)}t.Va=function(){this.C!=null&&(this.C=null,Da(this),Cc(this),it(19))};function ba(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Rm(a,h){var d=null;if(a.g==h){ba(a),kc(a),a.g=null;var m=2}else if(Tc(a.h,h))d=h.G,sm(a.h,h),m=1;else return;if(a.I!=0){if(h.o)if(m==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var x=a.D;m=Ra(),rt(m,new Gp(m,d)),Va(a)}else Sm(a);else if(x=h.m,x==3||x==0&&h.X>0||!(m==1&&RT(a,h)||m==2&&Cc(a)))switch(d&&d.length>0&&(h=a.h,h.i=h.i.concat(d)),x){case 1:jr(a,5);break;case 4:jr(a,10);break;case 3:jr(a,6);break;default:jr(a,2)}}}function Pm(a,h){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*h}function jr(a,h){if(a.j.info("Error code "+h),h==2){var d=c(a.bb,a),m=a.Ua;const x=!m;m=new Mn(m||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Ds(m,"https"),ka(m),x?ET(m.toString(),d):wT(m.toString(),d)}else it(2);a.I=0,a.l&&a.l.pa(h),Cm(a),wm(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function Cm(a){if(a.I=0,a.ja=[],a.l){const h=om(a.h);(h.length!=0||a.i.length!=0)&&(C(a.ja,h),C(a.ja,a.i),a.h.i.length=0,A(a.i),a.i.length=0),a.l.oa()}}function km(a,h,d){var m=d instanceof Mn?Qt(d):new Mn(d);if(m.g!="")h&&(m.g=h+"."+m.g),Vs(m,m.u);else{var x=o.location;m=x.protocol,h=h?h+"."+x.hostname:x.hostname,x=+x.port;const D=new Mn(null);m&&Ds(D,m),h&&(D.g=h),x&&Vs(D,x),d&&(D.h=d),m=D}return d=a.G,h=a.wa,d&&h&&he(m,d,h),he(m,"VER",a.ka),Fs(a,m),m}function xm(a,h,d){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new we(new Ac({ab:d})):new we(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Nm(){}t=Nm.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Oa(){}Oa.prototype.g=function(a,h){return new yt(a,h)};function yt(a,h){Ge.call(this),this.g=new Em(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!T(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!T(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Ei(this)}p(yt,Ge),yt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},yt.prototype.close=function(){Pc(this.g)},yt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=pc(a),a=d);h.i.push(new dT(h.Ya++,a)),h.I==3&&Va(h)},yt.prototype.N=function(){this.g.l=null,delete this.j,Pc(this.g),delete this.g,yt.Z.N.call(this)};function Dm(a){mc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(Dm,mc);function Vm(){gc.call(this),this.status=1}p(Vm,gc);function Ei(a){this.g=a}p(Ei,Nm),Ei.prototype.ra=function(){rt(this.g,"a")},Ei.prototype.qa=function(a){rt(this.g,new Dm(a))},Ei.prototype.pa=function(a){rt(this.g,new Vm)},Ei.prototype.oa=function(){rt(this.g,"b")},Oa.prototype.createWebChannel=Oa.prototype.g,yt.prototype.send=yt.prototype.o,yt.prototype.open=yt.prototype.m,yt.prototype.close=yt.prototype.close,lw=function(){return new Oa},aw=function(){return Ra()},ow=Lr,wd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Pa.NO_ERROR=0,Pa.TIMEOUT=8,Pa.HTTP_ERROR=6,Al=Pa,Qp.COMPLETE="complete",sw=Qp,Wp.EventType=Rs,Rs.OPEN="a",Rs.CLOSE="b",Rs.ERROR="c",Rs.MESSAGE="d",Ge.prototype.listen=Ge.prototype.J,so=Wp,we.prototype.listenOnce=we.prototype.K,we.prototype.getLastError=we.prototype.Ha,we.prototype.getLastErrorCode=we.prototype.ya,we.prototype.getStatus=we.prototype.ca,we.prototype.getResponseJson=we.prototype.La,we.prototype.getResponseText=we.prototype.la,we.prototype.send=we.prototype.ea,we.prototype.setWithCredentials=we.prototype.Fa,iw=we}).apply(typeof nl<"u"?nl:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xe=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _s="12.14.0";function ix(t){_s=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li=new $f("@firebase/firestore");function Si(){return li.logLevel}function z(t,...e){if(li.logLevel<=re.DEBUG){const n=e.map(Zf);li.debug(`Firestore (${_s}): ${t}`,...n)}}function kn(t,...e){if(li.logLevel<=re.ERROR){const n=e.map(Zf);li.error(`Firestore (${_s}): ${t}`,...n)}}function ui(t,...e){if(li.logLevel<=re.WARN){const n=e.map(Zf);li.warn(`Firestore (${_s}): ${t}`,...n)}}function Zf(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,uw(t,r,n)}function uw(t,e,n){let r=`FIRESTORE (${_s}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw kn(r),new Error(r)}function oe(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||uw(e,i,r)}function Y(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Xe.UNAUTHENTICATED))}shutdown(){}}class ox{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ax{constructor(e){this.t=e,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){oe(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new mr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new mr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new mr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(oe(typeof r.accessToken=="string",31837,{l:r}),new cw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string",2055,{h:e}),new Xe(e)}}class lx{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class ux{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new lx(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Dy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cx{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ct(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){oe(this.o===void 0,3512);const r=s=>{s.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Dy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(oe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Dy(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hx(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=hx(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ee(t,e){return t<e?-1:t>e?1:0}function Td(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return hh(i)===hh(s)?ee(i,s):hh(i)?1:-1}return ee(t.length,e.length)}const dx=55296,fx=57343;function hh(t){const e=t.charCodeAt(0);return e>=dx&&e<=fx}function as(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vy="__name__";class Zt{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&G(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Zt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Zt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Zt.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ee(e.length,n.length)}static compareSegments(e,n){const r=Zt.isNumericId(e),i=Zt.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Zt.extractNumericId(e).compare(Zt.extractNumericId(n)):Td(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return pr.fromString(e.substring(4,e.length-2))}}class ue extends Zt{construct(e,n,r){return new ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ue(n)}static emptyPath(){return new ue([])}}const px=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Be extends Zt{construct(e,n,r){return new Be(e,n,r)}static isValidIdentifier(e){return px.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Be.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Vy}static keyField(){return new Be([Vy])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new B(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new B(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new B(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new B(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Be(n)}static emptyPath(){return new Be([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(ue.fromString(e))}static fromName(e){return new H(ue.fromString(e).popFirst(5))}static empty(){return new H(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new ue(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(t,e,n){if(!n)throw new B(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function mx(t,e,n,r){if(e===!0&&r===!0)throw new B(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function by(t){if(!H.isDocumentKey(t))throw new B(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Oy(t){if(H.isDocumentKey(t))throw new B(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function dw(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Gu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G(12329,{type:typeof t})}function Jr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Gu(t);throw new B(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(t,e){const n={typeString:t};return e&&(n.value=e),n}function ga(t,e){if(!dw(t))throw new B(O.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new B(O.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly=-62135596800,My=1e6;class fe{static now(){return fe.fromMillis(Date.now())}static fromDate(e){return fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*My);return new fe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Ly)throw new B(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/My}_compareTo(e){return this.seconds===e.seconds?ee(this.nanoseconds,e.nanoseconds):ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:fe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ga(e,fe._jsonSchema))return new fe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ly;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}fe._jsonSchemaVersion="firestore/timestamp/1.0",fe._jsonSchema={type:xe("string",fe._jsonSchemaVersion),seconds:xe("number"),nanoseconds:xe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{static fromTimestamp(e){return new J(e)}static min(){return new J(new fe(0,0))}static max(){return new J(new fe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho=-1;function gx(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new fe(n+1,0):new fe(n,r));return new vr(i,H.empty(),e)}function yx(t){return new vr(t.readTime,t.key,Ho)}class vr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new vr(J.min(),H.empty(),Ho)}static max(){return new vr(J.max(),H.empty(),Ho)}}function _x(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:ee(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ex{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vs(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==vx)throw t;z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(i=>i?L.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new L((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new L((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function wx(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Es(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Qu.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp=-1;function Ju(t){return t==null}function pu(t){return t===0&&1/t==-1/0}function Tx(t){return typeof t=="number"&&Number.isInteger(t)&&!pu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw="";function Ix(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Uy(e)),e=Sx(t.get(n),e);return Uy(e)}function Sx(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case fw:n+="";break;default:n+=s}}return n}function Uy(t){return t+fw+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function fi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function pw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e,n){this.comparator=e,this.root=n||$e.EMPTY}insert(e,n){return new ye(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,$e.BLACK,null,null))}remove(e){return new ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$e.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new rl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new rl(this.root,e,this.comparator,!1)}getReverseIterator(){return new rl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new rl(this.root,e,this.comparator,!0)}}class rl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class $e{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??$e.RED,this.left=i??$e.EMPTY,this.right=s??$e.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new $e(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return $e.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return $e.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw G(43730,{key:this.key,value:this.value});if(this.right.isRed())throw G(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw G(27949);return e+(this.isRed()?0:1)}}$e.EMPTY=null,$e.RED=!0,$e.BLACK=!1;$e.EMPTY=new class{constructor(){this.size=0}get key(){throw G(57766)}get value(){throw G(16141)}get color(){throw G(16727)}get left(){throw G(29726)}get right(){throw G(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new $e(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.comparator=e,this.data=new ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Fy(this.data.getIterator())}getIteratorFrom(e){return new Fy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Oe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Oe(this.comparator);return n.data=e,n}}class Fy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.fields=e,e.sort(Be.comparator)}static empty(){return new zt([])}unionWith(e){let n=new Oe(Be.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new zt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return as(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new mw("Invalid base64 string: "+s):s}}(e);return new Ke(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ke(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const Ax=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Er(t){if(oe(!!t,39018),typeof t=="string"){let e=0;const n=Ax.exec(t);if(oe(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Se(t.seconds),nanos:Se(t.nanos)}}function Se(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function wr(t){return typeof t=="string"?Ke.fromBase64String(t):Ke.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw="server_timestamp",yw="__type__",_w="__previous_value__",vw="__local_write_time__";function np(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[yw])==null?void 0:r.stringValue)===gw}function Yu(t){const e=t.mapValue.fields[_w];return np(e)?Yu(e):e}function Ko(t){const e=Er(t.mapValue.fields[vw].timestampValue);return new fe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rx{constructor(e,n,r,i,s,o,l,u,c,f,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=f,this.apiKey=p}}const mu="(default)";class Go{constructor(e,n){this.projectId=e,this.database=n||mu}static empty(){return new Go("","")}get isDefaultDatabase(){return this.database===mu}isEqual(e){return e instanceof Go&&e.projectId===this.projectId&&e.database===this.database}}function Px(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new B(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Go(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew="__type__",ww="__max__",il={mapValue:{fields:{__type__:{stringValue:ww}}}},Tw="__vector__",gu="value";function Tr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?np(t)?4:kx(t)?9007199254740991:Cx(t)?10:11:G(28295,{value:t})}function un(t,e){if(t===e)return!0;const n=Tr(t);if(n!==Tr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ko(t).isEqual(Ko(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Er(i.timestampValue),l=Er(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return wr(i.bytesValue).isEqual(wr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Se(i.geoPointValue.latitude)===Se(s.geoPointValue.latitude)&&Se(i.geoPointValue.longitude)===Se(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Se(i.integerValue)===Se(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Se(i.doubleValue),l=Se(s.doubleValue);return o===l?pu(o)===pu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return as(t.arrayValue.values||[],e.arrayValue.values||[],un);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(jy(o)!==jy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!un(o[u],l[u])))return!1;return!0}(t,e);default:return G(52216,{left:t})}}function Qo(t,e){return(t.values||[]).find(n=>un(n,e))!==void 0}function ls(t,e){if(t===e)return 0;const n=Tr(t),r=Tr(e);if(n!==r)return ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ee(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Se(s.integerValue||s.doubleValue),u=Se(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return zy(t.timestampValue,e.timestampValue);case 4:return zy(Ko(t),Ko(e));case 5:return Td(t.stringValue,e.stringValue);case 6:return function(s,o){const l=wr(s),u=wr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=ee(l[c],u[c]);if(f!==0)return f}return ee(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ee(Se(s.latitude),Se(o.latitude));return l!==0?l:ee(Se(s.longitude),Se(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return $y(t.arrayValue,e.arrayValue);case 10:return function(s,o){var g,A,C,N;const l=s.fields||{},u=o.fields||{},c=(g=l[gu])==null?void 0:g.arrayValue,f=(A=u[gu])==null?void 0:A.arrayValue,p=ee(((C=c==null?void 0:c.values)==null?void 0:C.length)||0,((N=f==null?void 0:f.values)==null?void 0:N.length)||0);return p!==0?p:$y(c,f)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===il.mapValue&&o===il.mapValue)return 0;if(s===il.mapValue)return 1;if(o===il.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const g=Td(u[p],f[p]);if(g!==0)return g;const A=ls(l[u[p]],c[f[p]]);if(A!==0)return A}return ee(u.length,f.length)}(t.mapValue,e.mapValue);default:throw G(23264,{he:n})}}function zy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ee(t,e);const n=Er(t),r=Er(e),i=ee(n.seconds,r.seconds);return i!==0?i:ee(n.nanos,r.nanos)}function $y(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=ls(n[i],r[i]);if(s)return s}return ee(n.length,r.length)}function us(t){return Id(t)}function Id(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Er(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return wr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Id(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Id(n.fields[o])}`;return i+"}"}(t.mapValue):G(61005,{value:t})}function Rl(t){switch(Tr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Yu(t);return e?16+Rl(e):16;case 5:return 2*t.stringValue.length;case 6:return wr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Rl(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return fi(r.fields,(s,o)=>{i+=s.length+Rl(o)}),i}(t.mapValue);default:throw G(13486,{value:t})}}function By(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Jo(t){return!!t&&"integerValue"in t}function Iw(t){return Jo(t)||function(n){return!!n&&"doubleValue"in n}(t)}function rp(t){return!!t&&"arrayValue"in t}function Wy(t){return!!t&&"nullValue"in t}function qy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Pl(t){return!!t&&"mapValue"in t}function Cx(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Ew])==null?void 0:r.stringValue)===Tw}function wo(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return fi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=wo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=wo(t.arrayValue.values[n]);return e}return{...t}}function kx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===ww}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.value=e}static empty(){return new kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Pl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=wo(n)}setAll(e){let n=Be.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=wo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Pl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return un(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Pl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){fi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new kt(wo(this.value))}}function Sw(t){const e=[];return fi(t.fields,(n,r)=>{const i=new Be([n]);if(Pl(r)){const s=Sw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new zt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new et(e,0,J.min(),J.min(),J.min(),kt.empty(),0)}static newFoundDocument(e,n,r,i){return new et(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new et(e,2,n,J.min(),J.min(),kt.empty(),0)}static newUnknownDocument(e,n){return new et(e,3,n,J.min(),J.min(),kt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e,n){this.position=e,this.inclusive=n}}function Hy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=ls(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ky(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!un(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,n="asc"){this.field=e,this.dir=n}}function xx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{}class ke extends Aw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Dx(e,n,r):n==="array-contains"?new Ox(e,r):n==="in"?new Lx(e,r):n==="not-in"?new Mx(e,r):n==="array-contains-any"?new Ux(e,r):new ke(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Vx(e,r):new bx(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ls(n,this.value)):n!==null&&Tr(this.value)===Tr(n)&&this.matchesComparison(ls(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Gt extends Aw{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Gt(e,n)}matches(e){return Rw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Rw(t){return t.op==="and"}function Pw(t){return Nx(t)&&Rw(t)}function Nx(t){for(const e of t.filters)if(e instanceof Gt)return!1;return!0}function Sd(t){if(t instanceof ke)return t.field.canonicalString()+t.op.toString()+us(t.value);if(Pw(t))return t.filters.map(e=>Sd(e)).join(",");{const e=t.filters.map(n=>Sd(n)).join(",");return`${t.op}(${e})`}}function Cw(t,e){return t instanceof ke?function(r,i){return i instanceof ke&&r.op===i.op&&r.field.isEqual(i.field)&&un(r.value,i.value)}(t,e):t instanceof Gt?function(r,i){return i instanceof Gt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&Cw(o,i.filters[l]),!0):!1}(t,e):void G(19439)}function kw(t){return t instanceof ke?function(n){return`${n.field.canonicalString()} ${n.op} ${us(n.value)}`}(t):t instanceof Gt?function(n){return n.op.toString()+" {"+n.getFilters().map(kw).join(" ,")+"}"}(t):"Filter"}class Dx extends ke{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class Vx extends ke{constructor(e,n){super(e,"in",n),this.keys=xw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class bx extends ke{constructor(e,n){super(e,"not-in",n),this.keys=xw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function xw(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class Ox extends ke{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return rp(n)&&Qo(n.arrayValue,this.value)}}class Lx extends ke{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Qo(this.value.arrayValue,n)}}class Mx extends ke{constructor(e,n){super(e,"not-in",n)}matches(e){if(Qo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Qo(this.value.arrayValue,n)}}class Ux extends ke{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!rp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Qo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function Gy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new jx(t,e,n,r,i,s,o)}function ip(t){const e=Y(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Sd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ju(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>us(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>us(r)).join(",")),e.Te=n}return e.Te}function sp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!xx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Cw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ky(t.startAt,e.startAt)&&Ky(t.endAt,e.endAt)}function Ad(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Fx(t,e,n,r,i,s,o,l){return new ws(t,e,n,r,i,s,o,l)}function op(t){return new ws(t)}function Qy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function zx(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Nw(t){return t.collectionGroup!==null}function To(t){const e=Y(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Oe(Be.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new Yo(s,r))}),n.has(Be.keyField().canonicalString())||e.Ie.push(new Yo(Be.keyField(),r))}return e.Ie}function on(t){const e=Y(t);return e.Ee||(e.Ee=$x(e,To(t))),e.Ee}function $x(t,e){if(t.limitType==="F")return Gy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Yo(i.field,s)});const n=t.endAt?new yu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new yu(t.startAt.position,t.startAt.inclusive):null;return Gy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Rd(t,e){const n=t.filters.concat([e]);return new ws(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Bx(t,e){const n=t.explicitOrderBy.concat([e]);return new ws(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function Pd(t,e,n){return new ws(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Xu(t,e){return sp(on(t),on(e))&&t.limitType===e.limitType}function Dw(t){return`${ip(on(t))}|lt:${t.limitType}`}function Ai(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>kw(i)).join(", ")}]`),Ju(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>us(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>us(i)).join(",")),`Target(${r})`}(on(t))}; limitType=${t.limitType})`}function Zu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of To(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=Hy(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,To(r),i)||r.endAt&&!function(o,l,u){const c=Hy(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,To(r),i))}(t,e)}function Wx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Vw(t){return(e,n)=>{let r=!1;for(const i of To(t)){const s=qx(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function qx(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?ls(u,c):G(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){fi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return pw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hx=new ye(H.comparator);function xn(){return Hx}const bw=new ye(H.comparator);function oo(...t){let e=bw;for(const n of t)e=e.insert(n.key,n);return e}function Ow(t){let e=bw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Kr(){return Io()}function Lw(){return Io()}function Io(){return new pi(t=>t.toString(),(t,e)=>t.isEqual(e))}const Kx=new ye(H.comparator),Gx=new Oe(H.comparator);function te(...t){let e=Gx;for(const n of t)e=e.add(n);return e}const Qx=new Oe(ee);function Jx(){return Qx}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pu(e)?"-0":e}}function ap(t){return{integerValue:""+t}}function Yx(t,e){return Tx(e)?ap(e):ec(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(){this._=void 0}}function Xx(t,e,n){return t instanceof Xo?function(i,s){const o={fields:{[yw]:{stringValue:gw},[vw]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&np(s)&&(s=Yu(s)),s&&(o.fields[_w]=s),{mapValue:o}}(n,e):t instanceof Zo?Uw(t,e):t instanceof ea?jw(t,e):t instanceof ta?function(i,s){const o=Mw(i,s),l=Eu(o)+Eu(i.Ae);return Jo(o)&&Jo(i.Ae)?ap(l):ec(i.serializer,l)}(t,e):t instanceof _u?function(i,s){return Jy(i,s,Math.min)}(t,e):t instanceof vu?function(i,s){return Jy(i,s,Math.max)}(t,e):void 0}function Zx(t,e,n){return t instanceof Zo?Uw(t,e):t instanceof ea?jw(t,e):n}function Mw(t,e){return t instanceof ta?Iw(e)?e:{integerValue:0}:null}class Xo extends tc{}class Zo extends tc{constructor(e){super(),this.elements=e}}function Uw(t,e){const n=Fw(e);for(const r of t.elements)n.some(i=>un(i,r))||n.push(r);return{arrayValue:{values:n}}}class ea extends tc{constructor(e){super(),this.elements=e}}function jw(t,e){let n=Fw(e);for(const r of t.elements)n=n.filter(i=>!un(i,r));return{arrayValue:{values:n}}}class lp extends tc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}class ta extends lp{}class _u extends lp{}class vu extends lp{}function Jy(t,e,n){if(!Iw(e))return t.Ae;const r=n(Eu(e),Eu(t.Ae));return Jo(e)&&Jo(t.Ae)?ap(r):ec(t.serializer,r)}function Eu(t){return Se(t.integerValue||t.doubleValue)}function Fw(t){return rp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(e,n){this.field=e,this.transform=n}}function tN(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Zo&&i instanceof Zo||r instanceof ea&&i instanceof ea?as(r.elements,i.elements,un):r instanceof ta&&i instanceof ta||r instanceof _u&&i instanceof _u||r instanceof vu&&i instanceof vu?un(r.Ae,i.Ae):r instanceof Xo&&i instanceof Xo}(t.transform,e.transform)}class nN{constructor(e,n){this.version=e,this.transformResults=n}}class Tn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Tn}static exists(e){return new Tn(void 0,e)}static updateTime(e){return new Tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Cl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class nc{}function zw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Bw(t.key,Tn.none()):new ya(t.key,t.data,Tn.none());{const n=t.data,r=kt.empty();let i=new Oe(Be.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new mi(t.key,r,new zt(i.toArray()),Tn.none())}}function rN(t,e,n){t instanceof ya?function(i,s,o){const l=i.value.clone(),u=Xy(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof mi?function(i,s,o){if(!Cl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Xy(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll($w(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function So(t,e,n,r){return t instanceof ya?function(s,o,l,u){if(!Cl(s.precondition,o))return l;const c=s.value.clone(),f=Zy(s.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof mi?function(s,o,l,u){if(!Cl(s.precondition,o))return l;const c=Zy(s.fieldTransforms,u,o),f=o.data;return f.setAll($w(s)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Cl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function iN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Mw(r.transform,i||null);s!=null&&(n===null&&(n=kt.empty()),n.set(r.field,s))}return n||null}function Yy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&as(r,i,(s,o)=>tN(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ya extends nc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class mi extends nc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function $w(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Xy(t,e,n){const r=new Map;oe(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,Zx(o,l,n[i]))}return r}function Zy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Xx(s,o,e))}return r}class Bw extends nc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sN extends nc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&rN(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=So(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=So(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Lw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=zw(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&as(this.mutations,e.mutations,(n,r)=>Yy(n,r))&&as(this.baseMutations,e.baseMutations,(n,r)=>Yy(n,r))}}class up{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){oe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return Kx}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new up(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe,ie;function uN(t){switch(t){case O.OK:return G(64938);case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0;default:return G(15467,{code:t})}}function Ww(t){if(t===void 0)return kn("GRPC error has no .code"),O.UNKNOWN;switch(t){case Pe.OK:return O.OK;case Pe.CANCELLED:return O.CANCELLED;case Pe.UNKNOWN:return O.UNKNOWN;case Pe.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Pe.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Pe.INTERNAL:return O.INTERNAL;case Pe.UNAVAILABLE:return O.UNAVAILABLE;case Pe.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Pe.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Pe.NOT_FOUND:return O.NOT_FOUND;case Pe.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Pe.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Pe.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Pe.ABORTED:return O.ABORTED;case Pe.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Pe.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Pe.DATA_LOSS:return O.DATA_LOSS;default:return G(39323,{code:t})}}(ie=Pe||(Pe={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cN(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hN=new pr([4294967295,4294967295],0);function e_(t){const e=cN().encode(t),n=new rw;return n.update(e),new Uint8Array(n.digest())}function t_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new pr([n,r],0),new pr([i,s],0)]}class cp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ao(`Invalid padding: ${n}`);if(r<0)throw new ao(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ao(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ao(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=pr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(pr.fromNumber(r)));return i.compare(hN)===1&&(i=new pr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=e_(e),[r,i]=t_(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new cp(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=e_(e),[r,i]=t_(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ao extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,va.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new _a(J.min(),i,new ye(ee),xn(),te())}}class va{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new va(r,n,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class qw{constructor(e,n){this.targetId=e,this.Ce=n}}class Hw{constructor(e,n,r=Ke.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class n_{constructor(e){this.targetId=e,this.ve=0,this.Fe=r_(),this.Me=Ke.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=te(),n=te(),r=te();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:G(38017,{changeType:s})}}),new va(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=r_()}Ke(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,oe(this.ve>=0,3241,{ve:this.ve,targetId:this.targetId})}Qe(){this.Oe=!0,this.xe=!0}}const Qs="WatchChangeAggregator";class dN{constructor(e){this.Ge=e,this.ze=new Map,this.je=xn(),this.Je=sl(),this.He=sl(),this.Ze=new ye(ee)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.ze.get(n);if(r)switch(e.state){case 0:this.nt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Le(e.resumeToken));break;default:G(56790,{state:e.state})}else z(Qs,`handleTargetChange received targetChange for untracked target ID (${n}) with state (${e.state})`)})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.nt(i)&&n(i)})}it(e){const n=e.targetId,r=e.Ce.count,i=this.st(n);if(i){const s=i.target;if(Ad(s))if(r===0){const o=new H(s.path);this.et(n,o,et.newNoDocument(o,J.min()))}else oe(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const l=this._t(e),u=l?this.ut(l,e,o):1;if(u!==0){this.rt(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,c)}}}}}_t(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=wr(r).toUint8Array()}catch(u){if(u instanceof mw)return ui("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new cp(o,i,s)}catch(u){return ui(u instanceof ao?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ut(e,n,r){return n.Ce.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.lt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Pt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.st(o);if(l){if(s.current&&Ad(l.target)){const u=new H(l.target.path);this.Tt(u).has(o)||this.It(o,u)||this.et(o,u,et.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=te();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.st(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new _a(e,n,this.Ze,this.je,r);return this.je=xn(),this.Je=sl(),this.He=sl(),this.Ze=new ye(ee),i}Ye(e,n){const r=this.ze.get(e);if(!r||!this.nt(e))return void z(Qs,`addDocumentToTarget received document for unknown inactive target (${e})`);const i=this.It(e,n.key)?2:0;r.Ke(n.key,i),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Tt(n.key).add(e)),this.He=this.He.insert(n.key,this.Et(n.key).add(e))}et(e,n,r){const i=this.ze.get(e);i&&this.nt(e)?(this.It(e,n)?i.Ke(n,1):i.Ue(n),this.He=this.He.insert(n,this.Et(n).delete(e)),this.He=this.He.insert(n,this.Et(n).add(e)),r&&(this.je=this.je.insert(n,r))):z(Qs,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.ze.delete(e)}ot(e){const n=this.ze.get(e);if(!n)return 0;const r=n.ke();return this.Ge.getRemoteKeysForTarget(e).size+r.addedDocuments.size-r.removedDocuments.size}$e(e){let n=this.ze.get(e);n||(z(Qs,`recordPendingTargetRequest set up tracking for target ID ${e}`),n=new n_(e),this.ze.set(e,n)),n.$e()}Et(e){let n=this.He.get(e);return n||(n=new Oe(ee),this.He=this.He.insert(e,n)),n}Tt(e){let n=this.Je.get(e);return n||(n=new Oe(ee),this.Je=this.Je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||z(Qs,"Detected inactive target",e),n}st(e){const n=this.ze.get(e);return n===void 0||n.Ne?null:this.Ge.Rt(e)}rt(e){this.ze.set(e,new n_(e)),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}It(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function sl(){return new ye(H.comparator)}function r_(){return new ye(H.comparator)}const fN={asc:"ASCENDING",desc:"DESCENDING"},pN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},mN={and:"AND",or:"OR"};class gN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Cd(t,e){return t.useProto3Json||Ju(e)?e:{value:e}}function wu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Kw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function yN(t,e){return wu(t,e.toTimestamp())}function an(t){return oe(!!t,49232),J.fromTimestamp(function(n){const r=Er(n);return new fe(r.seconds,r.nanos)}(t))}function hp(t,e){return kd(t,e).canonicalString()}function kd(t,e){const n=function(i){return new ue(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Gw(t){const e=ue.fromString(t);return oe(Zw(e),10190,{key:e.toString()}),e}function xd(t,e){return hp(t.databaseId,e.path)}function dh(t,e){const n=Gw(e);if(n.get(1)!==t.databaseId.projectId)throw new B(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(Jw(n))}function Qw(t,e){return hp(t.databaseId,e)}function _N(t){const e=Gw(t);return e.length===4?ue.emptyPath():Jw(e)}function Nd(t){return new ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Jw(t){return oe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function i_(t,e,n){return{name:xd(t,e),fields:n.value.mapValue.fields}}function vN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:G(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,f){return c.useProto3Json?(oe(f===void 0||typeof f=="string",58123),Ke.fromBase64String(f||"")):(oe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Ke.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?O.UNKNOWN:Ww(c.code);return new B(f,c.message||"")}(o);n=new Hw(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=dh(t,r.document.name),s=an(r.document.updateTime),o=r.document.createTime?an(r.document.createTime):J.min(),l=new kt({mapValue:{fields:r.document.fields}}),u=et.newFoundDocument(i,s,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new kl(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=dh(t,r.document),s=r.readTime?an(r.readTime):J.min(),o=et.newNoDocument(i,s),l=r.removedTargetIds||[];n=new kl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=dh(t,r.document),s=r.removedTargetIds||[];n=new kl([],s,i,null)}else{if(!("filter"in e))return G(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new lN(i,s),l=r.targetId;n=new qw(l,o)}}return n}function EN(t,e){let n;if(e instanceof ya)n={update:i_(t,e.key,e.value)};else if(e instanceof Bw)n={delete:xd(t,e.key)};else if(e instanceof mi)n={update:i_(t,e.key,e.data),updateMask:kN(e.fieldMask)};else{if(!(e instanceof sN))return G(16599,{Vt:e.type});n={verify:xd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Xo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Zo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ea)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ta)return{fieldPath:o.field.canonicalString(),increment:l.Ae};if(l instanceof _u)return{fieldPath:o.field.canonicalString(),minimum:l.Ae};if(l instanceof vu)return{fieldPath:o.field.canonicalString(),maximum:l.Ae};throw G(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:yN(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G(27497)}(t,e.precondition)),n}function wN(t,e){return t&&t.length>0?(oe(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?an(i.updateTime):an(s);return o.isEqual(J.min())&&(o=an(s)),new nN(o,i.transformResults||[])}(n,e))):[]}function TN(t,e){return{documents:[Qw(t,e.path)]}}function IN(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Qw(t,i);const s=function(c){if(c.length!==0)return Xw(Gt.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(f=>function(g){return{field:Ri(g.field),direction:RN(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Cd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{dt:n,parent:i}}function SN(t){let e=_N(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){oe(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const g=Yw(p);return g instanceof Gt&&Pw(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(C){return new Yo(Pi(C.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,Ju(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(p){const g=!!p.before,A=p.values||[];return new yu(A,g)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const g=!p.before,A=p.values||[];return new yu(A,g)}(n.endAt)),Fx(e,i,o,s,l,"F",u,c)}function AN(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Yw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Pi(n.unaryFilter.field);return ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Pi(n.unaryFilter.field);return ke.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Pi(n.unaryFilter.field);return ke.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Pi(n.unaryFilter.field);return ke.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return G(61313);default:return G(60726)}}(t):t.fieldFilter!==void 0?function(n){return ke.create(Pi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return G(58110);default:return G(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Gt.create(n.compositeFilter.filters.map(r=>Yw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G(1026)}}(n.compositeFilter.op))}(t):G(30097,{filter:t})}function RN(t){return fN[t]}function PN(t){return pN[t]}function CN(t){return mN[t]}function Ri(t){return{fieldPath:t.canonicalString()}}function Pi(t){return Be.fromServerFormat(t.fieldPath)}function Xw(t){return t instanceof ke?function(n){if(n.op==="=="){if(qy(n.value))return{unaryFilter:{field:Ri(n.field),op:"IS_NAN"}};if(Wy(n.value))return{unaryFilter:{field:Ri(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(qy(n.value))return{unaryFilter:{field:Ri(n.field),op:"IS_NOT_NAN"}};if(Wy(n.value))return{unaryFilter:{field:Ri(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ri(n.field),op:PN(n.op),value:n.value}}}(t):t instanceof Gt?function(n){const r=n.getFilters().map(i=>Xw(i));return r.length===1?r[0]:{compositeFilter:{op:CN(n.op),filters:r}}}(t):G(54877,{filter:t})}function kN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Zw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function e1(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e,n,r,i,s=J.min(),o=J.min(),l=Ke.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new vn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new vn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(e){this.gt=e}}function NN(t){const e=SN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Pd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(){this.Sn=new VN}addToCollectionParentIndex(e,n){return this.Sn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(vr.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(vr.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class VN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Oe(ue.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Oe(ue.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},t1=41943040;class ct{static withCacheSize(e){return new ct(e,ct.DEFAULT_COLLECTION_PERCENTILE,ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ct.DEFAULT_COLLECTION_PERCENTILE=10,ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ct.DEFAULT=new ct(t1,ct.DEFAULT_COLLECTION_PERCENTILE,ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ct.DISABLED=new ct(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e){this.ir=e}next(){return this.ir+=2,this.ir}static sr(){return new Ir(0)}static _r(){return new Ir(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_="LruGarbageCollector",bN=1048576;function a_([t,e],[n,r]){const i=ee(t,n);return i===0?ee(e,r):i}class ON{constructor(e){this.hr=e,this.buffer=new Oe(a_),this.Pr=0}Tr(){return++this.Pr}Ir(e){const n=[e,this.Tr()];if(this.buffer.size<this.hr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();a_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class LN{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Er=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Er&&(this.Er.cancel(),this.Er=null)}get started(){return this.Er!==null}Rr(e){z(o_,`Garbage collection scheduled in ${e}ms`),this.Er=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Er=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Es(n)?z(o_,"Ignoring IndexedDB error during garbage collection: ",n):await vs(n)}await this.Rr(3e5)})}}class MN{constructor(e,n){this.Ar=e,this.params=n}calculateTargetCount(e,n){return this.Ar.Vr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return L.resolve(Qu.ce);const r=new ON(n);return this.Ar.forEachTarget(e,i=>r.Ir(i.sequenceNumber)).next(()=>this.Ar.dr(e,i=>r.Ir(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Ar.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Ar.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(z("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(s_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),s_):this.mr(e,n))}getCacheSize(e){return this.Ar.getCacheSize(e)}mr(e,n){let r,i,s,o,l,u,c;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),Si()<=re.DEBUG&&z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-f}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function UN(t,e){return new MN(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jN{constructor(){this.changes=new pi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&So(r.mutation,i,zt.empty(),fe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=Kr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=oo();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Kr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=xn();const o=Io(),l=function(){return Io()}();return n.forEach((u,c)=>{const f=r.get(c.key);i.has(c.key)&&(f===void 0||f.mutation instanceof mi)?s=s.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),So(f.mutation,c,f.mutation.getFieldMask(),fe.now())):o.set(c.key,zt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>l.set(c,new FN(f,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Io();let i=new ye((o,l)=>o-l),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||zt.empty();f=l.applyToLocalView(c,f),r.set(u,f);const p=(i.get(l.batchId)||te()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,p=Lw();f.forEach(g=>{if(!s.has(g)){const A=zw(n.get(g),r.get(g));A!==null&&p.set(g,A),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return zx(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Nw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):L.resolve(Kr());let l=Ho,u=s;return o.next(c=>L.forEach(c,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,te())).next(f=>({batchId:l,changes:Ow(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let i=oo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=oo();return this.indexManager.getCollectionParents(e,s).next(l=>L.forEach(l,u=>{const c=function(p,g){return new ws(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,et.newInvalidDocument(f)))});let l=oo();return o.forEach((u,c)=>{const f=s.get(u);f!==void 0&&So(f.mutation,c,zt.empty(),fe.now()),Zu(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(e){this.serializer=e,this.Or=new Map,this.Nr=new Map}getBundleMetadata(e,n){return L.resolve(this.Or.get(n))}saveBundleMetadata(e,n){return this.Or.set(n.id,function(i){return{id:i.id,version:i.version,createTime:an(i.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Nr.get(n))}saveNamedQuery(e,n){return this.Nr.set(n.name,function(i){return{name:i.name,query:NN(i.bundledQuery),readTime:an(i.readTime)}}(n)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(){this.overlays=new ye(H.comparator),this.Br=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Kr();return L.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.wt(e,n,s)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Br.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Br.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const i=Kr(),s=n.length+1,o=new H(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return L.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ye((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=s.get(c.largestBatchId);f===null&&(f=Kr(),s=s.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=Kr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=i)););return L.resolve(l)}wt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Br.get(i.largestBatchId).delete(r.key);this.Br.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new aN(n,r));let s=this.Br.get(n);s===void 0&&(s=te(),this.Br.set(n,s)),this.Br.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(){this.sessionToken=Ke.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(){this.Lr=new Oe(Me.kr),this.qr=new Oe(Me.Kr)}isEmpty(){return this.Lr.isEmpty()}addReference(e,n){const r=new Me(e,n);this.Lr=this.Lr.add(r),this.qr=this.qr.add(r)}Ur(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.$r(new Me(e,n))}Wr(e,n){e.forEach(r=>this.removeReference(r,n))}Qr(e){const n=new H(new ue([])),r=new Me(n,e),i=new Me(n,e+1),s=[];return this.qr.forEachInRange([r,i],o=>{this.$r(o),s.push(o.key)}),s}Gr(){this.Lr.forEach(e=>this.$r(e))}$r(e){this.Lr=this.Lr.delete(e),this.qr=this.qr.delete(e)}zr(e){const n=new H(new ue([])),r=new Me(n,e),i=new Me(n,e+1);let s=te();return this.qr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Me(e,0),r=this.Lr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Me{constructor(e,n){this.key=e,this.jr=n}static kr(e,n){return H.comparator(e.key,n.key)||ee(e.jr,n.jr)}static Kr(e,n){return ee(e.jr,n.jr)||H.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Xn=1,this.Jr=new Oe(Me.kr)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Xn;this.Xn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new oN(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Jr=this.Jr.add(new Me(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Hr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Zr(r),s=i<0?0:i;return L.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?tp:this.Xn-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Me(n,0),i=new Me(n,Number.POSITIVE_INFINITY),s=[];return this.Jr.forEachInRange([r,i],o=>{const l=this.Hr(o.jr);s.push(l)}),L.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Oe(ee);return n.forEach(i=>{const s=new Me(i,0),o=new Me(i,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([s,o],l=>{r=r.add(l.jr)})}),L.resolve(this.Xr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const o=new Me(new H(s),0);let l=new Oe(ee);return this.Jr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.jr)),!0)},o),L.resolve(this.Xr(l))}Xr(e){const n=[];return e.forEach(r=>{const i=this.Hr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){oe(this.Yr(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return L.forEach(n.mutations,i=>{const s=new Me(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Jr=r})}tr(e){}containsKey(e,n){const r=new Me(n,0),i=this.Jr.firstAfterOrEqual(r);return L.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Yr(e,n){return this.Zr(e)}Zr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Hr(e){const n=this.Zr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{constructor(e){this.ei=e,this.docs=function(){return new ye(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ei(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():et.newInvalidDocument(n))}getEntries(e,n){let r=xn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():et.newInvalidDocument(i))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=xn();const o=n.path,l=new H(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||_x(yx(f),r)<=0||(i.has(f.key)||Zu(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return L.resolve(s)}getAllFromCollectionGroup(e,n,r,i){G(9500)}ti(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new KN(this)}getSize(e){return L.resolve(this.size)}}class KN extends jN{constructor(e){super(),this.Fr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Fr.addEntry(e,i)):this.Fr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.Fr.getEntry(e,n)}getAllFromCache(e,n){return this.Fr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GN{constructor(e){this.persistence=e,this.ni=new pi(n=>ip(n),sp),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.ri=0,this.ii=new dp,this.targetCount=0,this.si=Ir.sr()}forEachTarget(e,n){return this.ni.forEach((r,i)=>n(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.ri)}allocateTargetId(e){return this.highestTargetId=this.si.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ri&&(this.ri=n),L.resolve()}cr(e){this.ni.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.si=new Ir(n),this.highestTargetId=n),e.sequenceNumber>this.ri&&(this.ri=e.sequenceNumber)}addTargetData(e,n){return this.cr(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.cr(n),L.resolve()}removeTargetData(e,n){return this.ni.delete(n.target),this.ii.Qr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ni.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ni.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),L.waitFor(s).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.ni.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.ii.Ur(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.ii.Wr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),L.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.ii.Qr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ii.zr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.ii.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(e,n){this.oi={},this.overlays={},this._i=new Qu(0),this.ai=!1,this.ai=!0,this.ui=new WN,this.referenceDelegate=e(this),this.ci=new GN(this),this.indexManager=new DN,this.remoteDocumentCache=function(i){return new HN(i)}(r=>this.referenceDelegate.li(r)),this.serializer=new xN(n),this.hi=new $N(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ai=!1,Promise.resolve()}get started(){return this.ai}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new BN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.oi[e.toKey()];return r||(r=new qN(n,this.referenceDelegate),this.oi[e.toKey()]=r),r}getGlobalsCache(){return this.ui}getTargetCache(){return this.ci}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.hi}runTransaction(e,n,r){z("MemoryPersistence","Starting transaction:",e);const i=new QN(this._i.next());return this.referenceDelegate.Pi(),r(i).next(s=>this.referenceDelegate.Ti(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ii(e,n){return L.or(Object.values(this.oi).map(r=>()=>r.containsKey(e,n)))}}class QN extends Ex{constructor(e){super(),this.currentSequenceNumber=e}}class fp{constructor(e){this.persistence=e,this.Ei=new dp,this.Ri=null}static Ai(e){return new fp(e)}get Vi(){if(this.Ri)return this.Ri;throw G(60996)}addReference(e,n,r){return this.Ei.addReference(r,n),this.Vi.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Ei.removeReference(r,n),this.Vi.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.Vi.add(n.toString()),L.resolve()}removeTarget(e,n){this.Ei.Qr(n.targetId).forEach(i=>this.Vi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Vi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Pi(){this.Ri=new Set}Ti(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Vi,r=>{const i=H.fromPath(r);return this.di(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.Ri=null,n.apply(e)))}updateLimboDocument(e,n){return this.di(e,n).next(r=>{r?this.Vi.delete(n.toString()):this.Vi.add(n.toString())})}li(e){return 0}di(e,n){return L.or([()=>L.resolve(this.Ei.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ii(e,n)])}}class Tu{constructor(e,n){this.persistence=e,this.mi=new pi(r=>Ix(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=UN(this,n)}static Ai(e,n){return new Tu(e,n)}Pi(){}Ti(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Vr(e){const n=this.gr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}gr(e){let n=0;return this.dr(e,r=>{n++}).next(()=>n)}dr(e,n){return L.forEach(this.mi,(r,i)=>this.yr(e,r,i).next(s=>s?L.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ti(e,o=>this.yr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,J.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.mi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.mi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,n,r){return this.mi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.mi.set(n,e.currentSequenceNumber),L.resolve()}li(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Rl(e.data.value)),n}yr(e,n,r){return L.or([()=>this.persistence.Ii(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.mi.get(n);return L.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ps=r,this.Ts=i}static Is(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new pp(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{constructor(){this.Es=!1,this.Rs=!1,this.As=100,this.Vs=function(){return TR()?8:wx(nt())>0?6:4}()}initialize(e,n){this.ds=e,this.indexManager=n,this.Es=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.fs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.gs(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new JN;return this.ps(e,n,o).next(l=>{if(s.result=l,this.Rs)return this.ys(e,n,o,l.size)})}).next(()=>s.result)}ys(e,n,r,i){return r.documentReadCount<this.As?(Si()<=re.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",Ai(n),"since it only creates cache indexes for collection contains","more than or equal to",this.As,"documents"),L.resolve()):(Si()<=re.DEBUG&&z("QueryEngine","Query:",Ai(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Vs*i?(Si()<=re.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",Ai(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,on(n))):L.resolve())}fs(e,n){if(Qy(n))return L.resolve(null);let r=on(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Pd(n,null,"F"),r=on(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=te(...s);return this.ds.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ws(n,l);return this.Ss(n,c,o,u.readTime)?this.fs(e,Pd(n,null,"F")):this.bs(e,c,n,u)}))})))}gs(e,n,r,i){return Qy(n)||i.isEqual(J.min())?L.resolve(null):this.ds.getDocuments(e,r).next(s=>{const o=this.ws(n,s);return this.Ss(n,o,r,i)?L.resolve(null):(Si()<=re.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ai(n)),this.bs(e,o,n,gx(i,Ho)).next(l=>l))})}ws(e,n){let r=new Oe(Vw(e));return n.forEach((i,s)=>{Zu(e,s)&&(r=r.add(s))}),r}Ss(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ps(e,n,r){return Si()<=re.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",Ai(n)),this.ds.getDocumentsMatchingQuery(e,n,vr.min(),r)}bs(e,n,r,i){return this.ds.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp="LocalStore",XN=3e8;class ZN{constructor(e,n,r,i){this.persistence=e,this.Ds=n,this.serializer=i,this.Cs=new ye(ee),this.vs=new pi(s=>ip(s),sp),this.Fs=new Map,this.Ms=e.getRemoteDocumentCache(),this.ci=e.getTargetCache(),this.hi=e.getBundleCache(),this.xs(r)}xs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new zN(this.Ms,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ms.setIndexManager(this.indexManager),this.Ds.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Cs))}}function e2(t,e,n,r){return new ZN(t,e,n,r)}async function r1(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.xs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=te();for(const c of i){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of s){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Os:c,removedBatchIds:o,addedBatchIds:l}))})})}function t2(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ms.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const p=c.batch,g=p.keys();let A=L.resolve();return g.forEach(C=>{A=A.next(()=>f.getEntry(u,C)).next(N=>{const V=c.docVersions.get(C);oe(V!==null,48541),N.version.compareTo(V)<0&&(p.applyToRemoteDocument(N,c),N.isValidDocument()&&(N.setReadTime(c.commitVersion),f.addEntry(N)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=te();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function i1(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.ci.getLastRemoteSnapshotVersion(n))}function n2(t,e){const n=Y(t),r=e.snapshotVersion;let i=n.Cs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ms.newChangeBuffer({trackRemovals:!0});i=n.Cs;const l=[];e.targetChanges.forEach((f,p)=>{const g=i.get(p);if(!g)return;l.push(n.ci.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.ci.addMatchingKeys(s,f.addedDocuments,p)));let A=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?A=A.withResumeToken(Ke.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),i=i.insert(p,A),function(N,V,I){return N.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=XN?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(g,A,f)&&l.push(n.ci.updateTargetData(s,A))});let u=xn(),c=te();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(r2(s,o,e.documentUpdates).next(f=>{u=f.Ns,c=f.Bs})),!r.isEqual(J.min())){const f=n.ci.getLastRemoteSnapshotVersion(s).next(p=>n.ci.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return L.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.Cs=i,s))}function r2(t,e,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=xn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):z(mp,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ns:o,Bs:i}})}function i2(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=tp),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function s2(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.ci.getTargetData(r,e).next(s=>s?(i=s,L.resolve(i)):n.ci.allocateTargetId(r).next(o=>(i=new vn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.ci.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Cs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Cs=n.Cs.insert(r.targetId,r),n.vs.set(e,r.targetId)),r})}async function Dd(t,e,n){const r=Y(t),i=r.Cs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Es(o))throw o;z(mp,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Cs=r.Cs.remove(e),r.vs.delete(i.target)}function l_(t,e,n){const r=Y(t);let i=J.min(),s=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const p=Y(u),g=p.vs.get(f);return g!==void 0?L.resolve(p.Cs.get(g)):p.ci.getTargetData(c,f)}(r,o,on(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.ci.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Ds.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:te())).next(l=>(o2(r,Wx(e),l),{documents:l,Ls:s})))}function o2(t,e,n){let r=t.Fs.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Fs.set(e,r)}class u_{constructor(){this.activeTargetIds=Jx()}Ws(e){this.activeTargetIds=this.activeTargetIds.add(e)}Qs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}$s(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class a2{constructor(){this.Co=new u_,this.vo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Co.Ws(e),this.vo[e]||"not-current"}updateQueryState(e,n,r){this.vo[e]=n}removeLocalQueryTarget(e){this.Co.Qs(e)}isLocalQueryTarget(e){return this.Co.activeTargetIds.has(e)}clearQueryState(e){delete this.vo[e]}getAllActiveQueryTargets(){return this.Co.activeTargetIds}isActiveQueryTarget(e){return this.Co.activeTargetIds.has(e)}start(){return this.Co=new u_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l2{Fo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_="ConnectivityMonitor";class h_{constructor(){this.Mo=()=>this.xo(),this.Oo=()=>this.No(),this.Bo=[],this.Lo()}Fo(e){this.Bo.push(e)}shutdown(){window.removeEventListener("online",this.Mo),window.removeEventListener("offline",this.Oo)}Lo(){window.addEventListener("online",this.Mo),window.addEventListener("offline",this.Oo)}xo(){z(c_,"Network connectivity changed: AVAILABLE");for(const e of this.Bo)e(0)}No(){z(c_,"Network connectivity changed: UNAVAILABLE");for(const e of this.Bo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ol=null;function Vd(){return ol===null?ol=function(){return 268435456+Math.round(2147483648*Math.random())}():ol++,"0x"+ol.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh="RestConnection",u2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class c2{get ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Uo=this.databaseId.database===mu?`project_id=${r}`:`project_id=${r}&database_id=${i}`}$o(e,n,r,i,s){const o=Vd(),l=this.Wo(e,n.toUriEncodedString());z(fh,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Uo};this.Qo(u,i,s);const{host:c}=new URL(l),f=ha(c);return this.Go(e,l,u,r,f).then(p=>(z(fh,`Received RPC '${e}' ${o}: `,p),p),p=>{throw ui(fh,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}zo(e,n,r,i,s,o){return this.$o(e,n,r,i,s)}Qo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+_s}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Wo(e,n){const r=u2[e];let i=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{constructor(e){this.jo=e.jo,this.Jo=e.Jo}Ho(e){this.Zo=e}Xo(e){this.Yo=e}e_(e){this.t_=e}onMessage(e){this.n_=e}close(){this.Jo()}send(e){this.jo(e)}r_(){this.Zo()}i_(){this.Yo()}s_(e){this.t_(e)}o_(e){this.n_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye="WebChannelConnection",Js=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class Ji extends c2{constructor(e){super(e),this.__=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static a_(){if(!Ji.u_){const e=aw();Js(e,ow.STAT_EVENT,n=>{n.stat===wd.PROXY?z(Ye,"STAT_EVENT: detected buffering proxy"):n.stat===wd.NOPROXY&&z(Ye,"STAT_EVENT: detected no buffering proxy")}),Ji.u_=!0}}Go(e,n,r,i,s){const o=Vd();return new Promise((l,u)=>{const c=new iw;c.setWithCredentials(!0),c.listenOnce(sw.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Al.NO_ERROR:const p=c.getResponseJson();z(Ye,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Al.TIMEOUT:z(Ye,`RPC '${e}' ${o} timed out`),u(new B(O.DEADLINE_EXCEEDED,"Request time out"));break;case Al.HTTP_ERROR:const g=c.getStatus();if(z(Ye,`RPC '${e}' ${o} failed with status:`,g,"response text:",c.getResponseText()),g>0){let A=c.getResponseJson();Array.isArray(A)&&(A=A[0]);const C=A==null?void 0:A.error;if(C&&C.status&&C.message){const N=function(I){const v=I.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(v)>=0?v:O.UNKNOWN}(C.status);u(new B(N,C.message))}else u(new B(O.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new B(O.UNAVAILABLE,"Connection failed."));break;default:G(9055,{c_:e,streamId:o,l_:c.getLastErrorCode(),h_:c.getLastError()})}}finally{z(Ye,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);z(Ye,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",f,r,15)})}P_(e,n,r){const i=Vd(),s=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Qo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");z(Ye,`Creating RPC '${e}' stream ${i}: ${c}`,l);const f=o.createWebChannel(c,l);this.T_(f);let p=!1,g=!1;const A=new h2({jo:C=>{g?z(Ye,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(p||(z(Ye,`Opening RPC '${e}' stream ${i} transport.`),f.open(),p=!0),z(Ye,`RPC '${e}' stream ${i} sending:`,C),f.send(C))},Jo:()=>f.close()});return Js(f,so.EventType.OPEN,()=>{g||(z(Ye,`RPC '${e}' stream ${i} transport opened.`),A.r_())}),Js(f,so.EventType.CLOSE,()=>{g||(g=!0,z(Ye,`RPC '${e}' stream ${i} transport closed`),A.s_(),this.I_(f))}),Js(f,so.EventType.ERROR,C=>{g||(g=!0,ui(Ye,`RPC '${e}' stream ${i} transport errored. Name:`,C.name,"Message:",C.message),A.s_(new B(O.UNAVAILABLE,"The operation could not be completed")))}),Js(f,so.EventType.MESSAGE,C=>{var N;if(!g){const V=C.data[0];oe(!!V,16349);const I=V,v=(I==null?void 0:I.error)||((N=I[0])==null?void 0:N.error);if(v){z(Ye,`RPC '${e}' stream ${i} received error:`,v);const R=v.status;let b=function(E){const _=Pe[E];if(_!==void 0)return Ww(_)}(R),j=v.message;R==="NOT_FOUND"&&j.includes("database")&&j.includes("does not exist")&&j.includes(this.databaseId.database)&&ui(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),b===void 0&&(b=O.INTERNAL,j="Unknown error status: "+R+" with message "+v.message),g=!0,A.s_(new B(b,j)),f.close()}else z(Ye,`RPC '${e}' stream ${i} received:`,V),A.o_(V)}}),Ji.a_(),setTimeout(()=>{A.i_()},0),A}terminate(){this.__.forEach(e=>e.close()),this.__=[]}T_(e){this.__.push(e)}I_(e){this.__=this.__.filter(n=>n===e)}Qo(e,n,r){super.Qo(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return lw()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d2(t){return new Ji(t)}function ph(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(t){return new gN(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ji.u_=!1;class s1{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Di=e,this.timerId=n,this.E_=r,this.R_=i,this.A_=s,this.V_=0,this.d_=null,this.m_=Date.now(),this.reset()}reset(){this.V_=0}f_(){this.V_=this.A_}g_(e){this.cancel();const n=Math.floor(this.V_+this.p_()),r=Math.max(0,Date.now()-this.m_),i=Math.max(0,n-r);i>0&&z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.d_=this.Di.enqueueAfterDelay(this.timerId,i,()=>(this.m_=Date.now(),e())),this.V_*=this.R_,this.V_<this.E_&&(this.V_=this.E_),this.V_>this.A_&&(this.V_=this.A_)}y_(){this.d_!==null&&(this.d_.skipDelay(),this.d_=null)}cancel(){this.d_!==null&&(this.d_.cancel(),this.d_=null)}p_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_="PersistentStream";class o1{constructor(e,n,r,i,s,o,l,u){this.Di=e,this.w_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.C_=null,this.stream=null,this.v_=0,this.F_=new s1(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Di.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}async close(e,n){this.q_(),this.K_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(kn(n.toString()),kn("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.e_(n)}U_(){}auth(){this.state=1;const e=this.W_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.b_===n&&this.Q_(r,i)},r=>{e(()=>{const i=new B(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(i)})})}Q_(e,n){const r=this.W_(this.b_);this.stream=this.z_(e,n),this.stream.Ho(()=>{r(()=>this.listener.Ho())}),this.stream.Xo(()=>{r(()=>(this.state=2,this.C_=this.Di.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.Xo()))}),this.stream.e_(i=>{r(()=>this.G_(i))}),this.stream.onMessage(i=>{r(()=>++this.v_==1?this.j_(i):this.onNext(i))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return z(d_,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Di.enqueueAndForget(()=>this.b_===e?n():(z(d_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class f2 extends o1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=vN(this.serializer,e),r=function(s){if(!("targetChange"in s))return J.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?an(o.readTime):J.min()}(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=Nd(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Ad(u)?{documents:TN(s,u)}:{query:IN(s,u).dt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Kw(s,o.resumeToken);const c=Cd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(J.min())>0){l.readTime=wu(s,o.snapshotVersion.toTimestamp());const c=Cd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=AN(this.serializer,e);r&&(n.labels=r),this.k_(n)}Z_(e){const n={};n.database=Nd(this.serializer),n.removeTarget=e,this.k_(n)}}class p2 extends o1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get X_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.X_&&this.Y_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return oe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,oe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){oe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=wN(e.writeResults,e.commitTime),r=an(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=Nd(this.serializer),this.k_(e)}Y_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>EN(this.serializer,r))};this.k_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m2{}class g2 extends m2{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new B(O.FAILED_PRECONDITION,"The client has already been terminated.")}$o(e,n,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.$o(e,kd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(O.UNKNOWN,s.toString())})}zo(e,n,r,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.zo(e,kd(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(O.UNKNOWN,o.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}function y2(t,e,n,r){return new g2(t,e,n,r)}class _2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(kn(n),this._a=!1):z("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn="RemoteStore";class v2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Map,this.Ea=new Map,this.Ra=new Ir(1e3),this.Aa=new Ir(1001),this.Va=new Set,this.da=[],this.ma=s,this.ma.Fo(o=>{r.enqueueAndForget(async()=>{gi(this)&&(z(cn,"Restarting streams for network reachability change."),await async function(u){const c=Y(u);c.Va.add(4),await Ea(c),c.fa.set("Unknown"),c.Va.delete(4),await ic(c)}(this))})}),this.fa=new _2(r,i)}}async function ic(t){if(gi(t))for(const e of t.da)await e(!0)}async function Ea(t){for(const e of t.da)await e(!1)}function bd(t,e){return t.Ia.get(e)||void 0}function a1(t,e){const n=Y(t),r=bd(n,e.targetId);if(r!==void 0&&n.Ta.has(r))return;const i=function(l,u){const c=bd(l,u);c!==void 0&&l.Ea.delete(c);const f=function(g,A){return A%2!=0?g.Aa.next():g.Ra.next()}(l,u);return l.Ia.set(u,f),l.Ea.set(f,u),f}(n,e.targetId);z(cn,"remoteStoreListen mapping SDK target ID to remote",e.targetId,i);const s=new vn(e.target,i,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);n.Ta.set(i,s),vp(n)?_p(n):Ts(n).x_()&&yp(n,s)}function gp(t,e){const n=Y(t),r=Ts(n),i=bd(n,e);z(cn,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,i),n.Ta.delete(i),n.Ia.delete(e),n.Ea.delete(i),r.x_()&&l1(n,i),n.Ta.size===0&&(r.x_()?r.B_():gi(n)&&n.fa.set("Unknown"))}function yp(t,e){if(t.ga.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.Ea.get(e.targetId);if(n===void 0)return void z(cn,"SDK target ID not found for remote ID: "+e.targetId);const r=t.remoteSyncer.getRemoteKeysForTarget(n).size;e=e.withExpectedCount(r)}Ts(t).H_(e)}function l1(t,e){t.ga.$e(e),Ts(t).Z_(e)}function _p(t){t.ga=new dN({getRemoteKeysForTarget:e=>{const n=t.Ea.get(e);return n!==void 0?t.remoteSyncer.getRemoteKeysForTarget(n):te()},Rt:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),Ts(t).start(),t.fa.aa()}function vp(t){return gi(t)&&!Ts(t).M_()&&t.Ta.size>0}function gi(t){return Y(t).Va.size===0}function u1(t){t.ga=void 0}async function E2(t){t.fa.set("Online")}async function w2(t){t.Ta.forEach((e,n)=>{yp(t,e)})}async function T2(t,e){u1(t),vp(t)?(t.fa.la(e),_p(t)):t.fa.set("Unknown")}async function I2(t,e,n){if(t.fa.set("Online"),e instanceof Hw&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds){if(i.Ta.has(l)){const u=i.Ea.get(l);u!==void 0&&(await i.remoteSyncer.rejectListen(u,o),i.Ia.delete(u),i.Ea.delete(l)),i.Ta.delete(l)}i.ga.removeTarget(l)}}(t,e)}catch(r){z(cn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Iu(t,r)}else if(e instanceof kl?t.ga.Xe(e):e instanceof qw?t.ga.it(e):t.ga.tt(e),!n.isEqual(J.min()))try{const r=await i1(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.ga.Pt(o);l.targetChanges.forEach((c,f)=>{if(c.resumeToken.approximateByteSize()>0){const p=s.Ta.get(f);p&&s.Ta.set(f,p.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,f)=>{const p=s.Ta.get(c);if(!p)return;s.Ta.set(c,p.withResumeToken(Ke.EMPTY_BYTE_STRING,p.snapshotVersion)),l1(s,c);const g=new vn(p.target,c,f,p.sequenceNumber);yp(s,g)});const u=function(f,p){const g=new Map;p.targetChanges.forEach((C,N)=>{const V=f.Ea.get(N);V!==void 0&&g.set(V,C)});let A=new ye(ee);return p.targetMismatches.forEach((C,N)=>{const V=f.Ea.get(C);V!==void 0&&(A=A.insert(V,N))}),new _a(p.snapshotVersion,g,A,p.documentUpdates,p.resolvedLimboDocuments)}(s,l);return s.remoteSyncer.applyRemoteEvent(u)}(t,n)}catch(r){z(cn,"Failed to raise snapshot:",r),await Iu(t,r)}}async function Iu(t,e,n){if(!Es(e))throw e;t.Va.add(1),await Ea(t),t.fa.set("Offline"),n||(n=()=>i1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{z(cn,"Retrying IndexedDB access"),await n(),t.Va.delete(1),await ic(t)})}function c1(t,e){return e().catch(n=>Iu(t,n,e))}async function sc(t){const e=Y(t),n=Sr(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:tp;for(;S2(e);)try{const i=await i2(e.localStore,r);if(i===null){e.Pa.length===0&&n.B_();break}r=i.batchId,A2(e,i)}catch(i){await Iu(e,i)}h1(e)&&d1(e)}function S2(t){return gi(t)&&t.Pa.length<10}function A2(t,e){t.Pa.push(e);const n=Sr(t);n.x_()&&n.X_&&n.Y_(e.mutations)}function h1(t){return gi(t)&&!Sr(t).M_()&&t.Pa.length>0}function d1(t){Sr(t).start()}async function R2(t){Sr(t).na()}async function P2(t){const e=Sr(t);for(const n of t.Pa)e.Y_(n.mutations)}async function C2(t,e,n){const r=t.Pa.shift(),i=up.from(r,e,n);await c1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await sc(t)}async function k2(t,e){e&&Sr(t).X_&&await async function(r,i){if(function(o){return uN(o)&&o!==O.ABORTED}(i.code)){const s=r.Pa.shift();Sr(r).N_(),await c1(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await sc(r)}}(t,e),h1(t)&&d1(t)}async function f_(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),z(cn,"RemoteStore received new credentials");const r=gi(n);n.Va.add(3),await Ea(n),r&&n.fa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Va.delete(3),await ic(n)}async function x2(t,e){const n=Y(t);e?(n.Va.delete(2),await ic(n)):e||(n.Va.add(2),await Ea(n),n.fa.set("Unknown"))}function Ts(t){return t.pa||(t.pa=function(n,r,i){const s=Y(n);return s.ia(),new f2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Ho:E2.bind(null,t),Xo:w2.bind(null,t),e_:T2.bind(null,t),J_:I2.bind(null,t)}),t.da.push(async e=>{e?(t.pa.N_(),vp(t)?_p(t):t.fa.set("Unknown")):(await t.pa.stop(),u1(t))})),t.pa}function Sr(t){return t.ya||(t.ya=function(n,r,i){const s=Y(n);return s.ia(),new p2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Ho:()=>Promise.resolve(),Xo:R2.bind(null,t),e_:k2.bind(null,t),ea:P2.bind(null,t),ta:C2.bind(null,t)}),t.da.push(async e=>{e?(t.ya.N_(),await sc(t)):(await t.ya.stop(),t.Pa.length>0&&(z(cn,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))})),t.ya}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new mr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Ep(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wp(t,e){if(kn("AsyncQueue",`${e}: ${t}`),Es(t))return new B(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{static emptySet(e){return new Yi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=oo(),this.sortedSet=new ye(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Yi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Yi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(){this.wa=new ye(H.comparator)}track(e){const n=e.doc.key,r=this.wa.get(n);r?e.type!==0&&r.type===3?this.wa=this.wa.insert(n,e):e.type===3&&r.type!==1?this.wa=this.wa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.wa=this.wa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.wa=this.wa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.wa=this.wa.remove(n):e.type===1&&r.type===2?this.wa=this.wa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.wa=this.wa.insert(n,{type:2,doc:e.doc}):G(63341,{At:e,Sa:r}):this.wa=this.wa.insert(n,e)}ba(){const e=[];return this.wa.inorderTraversal((n,r)=>{e.push(r)}),e}}class cs{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new cs(e,n,Yi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2{constructor(){this.Da=void 0,this.Ca=[]}va(){return this.Ca.some(e=>e.Fa())}}class D2{constructor(){this.queries=m_(),this.onlineState="Unknown",this.Ma=new Set}terminate(){(function(n,r){const i=Y(n),s=i.queries;i.queries=m_(),s.forEach((o,l)=>{for(const u of l.Ca)u.onError(r)})})(this,new B(O.ABORTED,"Firestore shutting down"))}}function m_(){return new pi(t=>Dw(t),Xu)}async function f1(t,e){const n=Y(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.va()&&e.Fa()&&(r=2):(s=new N2,r=e.Fa()?0:1);try{switch(r){case 0:s.Da=await n.onListen(i,!0);break;case 1:s.Da=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=wp(o,`Initialization of query '${Ai(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Ca.push(e),e.xa(n.onlineState),s.Da&&e.Oa(s.Da)&&Tp(n)}async function p1(t,e){const n=Y(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Ca.indexOf(e);o>=0&&(s.Ca.splice(o,1),s.Ca.length===0?i=e.Fa()?0:1:!s.va()&&e.Fa()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function V2(t,e){const n=Y(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Ca)l.Oa(i)&&(r=!0);o.Da=i}}r&&Tp(n)}function b2(t,e,n){const r=Y(t),i=r.queries.get(e);if(i)for(const s of i.Ca)s.onError(n);r.queries.delete(e)}function Tp(t){t.Ma.forEach(e=>{e.next()})}var Od,g_;(g_=Od||(Od={})).Na="default",g_.Cache="cache";class m1{constructor(e,n,r){this.query=e,this.Ba=n,this.La=!1,this.ka=null,this.onlineState="Unknown",this.options=r||{}}Oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new cs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.La?this.qa(e)&&(this.Ba.next(e),n=!0):this.Ka(e,this.onlineState)&&(this.Ua(e),n=!0),this.ka=e,n}onError(e){this.Ba.error(e)}xa(e){this.onlineState=e;let n=!1;return this.ka&&!this.La&&this.Ka(this.ka,e)&&(this.Ua(this.ka),n=!0),n}Ka(e,n){if(!e.fromCache||!this.Fa())return!0;const r=n!=="Offline";return(!this.options.$a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const n=this.ka&&this.ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Ua(e){e=cs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.La=!0,this.Ba.next(e)}Fa(){return this.options.source!==Od.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(e){this.key=e}}class y1{constructor(e){this.key=e}}class O2{constructor(e,n){this.query=e,this.eu=n,this.tu=null,this.hasCachedResults=!1,this.current=!1,this.nu=te(),this.mutatedKeys=te(),this.ru=Vw(e),this.iu=new Yi(this.ru)}get su(){return this.eu}ou(e,n){const r=n?n._u:new p_,i=n?n.iu:this.iu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const g=i.get(f),A=Zu(this.query,p)?p:null,C=!!g&&this.mutatedKeys.has(g.key),N=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let V=!1;g&&A?g.data.isEqual(A.data)?C!==N&&(r.track({type:3,doc:A}),V=!0):this.au(g,A)||(r.track({type:2,doc:A}),V=!0,(u&&this.ru(A,u)>0||c&&this.ru(A,c)<0)&&(l=!0)):!g&&A?(r.track({type:0,doc:A}),V=!0):g&&!A&&(r.track({type:1,doc:g}),V=!0,(u||c)&&(l=!0)),V&&(A?(o=o.add(A),s=N?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{iu:o,_u:r,Ss:l,mutatedKeys:s}}au(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.iu;this.iu=e.iu,this.mutatedKeys=e.mutatedKeys;const o=e._u.ba();o.sort((f,p)=>function(A,C){const N=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G(20277,{At:V})}};return N(A)-N(C)}(f.type,p.type)||this.ru(f.doc,p.doc)),this.uu(r),i=i??!1;const l=n&&!i?this.cu():[],u=this.nu.size===0&&this.current&&!i?1:0,c=u!==this.tu;return this.tu=u,o.length!==0||c?{snapshot:new cs(this.query,e.iu,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),lu:l}:{lu:l}}xa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({iu:this.iu,_u:new p_,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{lu:[]}}hu(e){return!this.eu.has(e)&&!!this.iu.has(e)&&!this.iu.get(e).hasLocalMutations}uu(e){e&&(e.addedDocuments.forEach(n=>this.eu=this.eu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.eu=this.eu.delete(n)),this.current=e.current)}cu(){if(!this.current)return[];const e=this.nu;this.nu=te(),this.iu.forEach(r=>{this.hu(r.key)&&(this.nu=this.nu.add(r.key))});const n=[];return e.forEach(r=>{this.nu.has(r)||n.push(new y1(r))}),this.nu.forEach(r=>{e.has(r)||n.push(new g1(r))}),n}Pu(e){this.eu=e.Ls,this.nu=te();const n=this.ou(e.documents);return this.applyChanges(n,!0)}Tu(){return cs.fromInitialDocuments(this.query,this.iu,this.mutatedKeys,this.tu===0,this.hasCachedResults)}}const Ip="SyncEngine";class L2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class M2{constructor(e){this.key=e,this.Iu=!1}}class U2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Eu={},this.Ru=new pi(l=>Dw(l),Xu),this.Au=new Map,this.Vu=new Set,this.du=new ye(H.comparator),this.mu=new Map,this.fu=new dp,this.gu={},this.pu=new Map,this.yu=Ir._r(),this.onlineState="Unknown",this.wu=void 0}get isPrimaryClient(){return this.wu===!0}}async function j2(t,e,n=!0){const r=I1(t);let i;const s=r.Ru.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Tu()):i=await _1(r,e,n,!0),i}async function F2(t,e){const n=I1(t);await _1(n,e,!0,!1)}async function _1(t,e,n,r){const i=await s2(t.localStore,on(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await z2(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&a1(t.remoteStore,i),l}async function z2(t,e,n,r,i){t.Su=(p,g,A)=>async function(N,V,I,v){let R=V.view.ou(I);R.Ss&&(R=await l_(N.localStore,V.query,!1).then(({documents:E})=>V.view.ou(E,R)));const b=v&&v.targetChanges.get(V.targetId),j=v&&v.targetMismatches.get(V.targetId)!=null,$=V.view.applyChanges(R,N.isPrimaryClient,b,j);return __(N,V.targetId,$.lu),$.snapshot}(t,p,g,A);const s=await l_(t.localStore,e,!0),o=new O2(e,s.Ls),l=o.ou(s.documents),u=va.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);__(t,n,c.lu);const f=new L2(e,n,o);return t.Ru.set(e,f),t.Au.has(n)?t.Au.get(n).push(e):t.Au.set(n,[e]),c.snapshot}async function $2(t,e,n){const r=Y(t),i=r.Ru.get(e),s=r.Au.get(i.targetId);if(s.length>1)return r.Au.set(i.targetId,s.filter(o=>!Xu(o,e))),void r.Ru.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Dd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&gp(r.remoteStore,i.targetId),Ld(r,i.targetId)}).catch(vs)):(Ld(r,i.targetId),await Dd(r.localStore,i.targetId,!0))}async function B2(t,e){const n=Y(t),r=n.Ru.get(e),i=n.Au.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),gp(n.remoteStore,r.targetId))}async function W2(t,e,n){const r=Y2(t);try{const i=await function(o,l){const u=Y(o),c=fe.now(),f=l.reduce((A,C)=>A.add(C.key),te());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let C=xn(),N=te();return u.Ms.getEntries(A,f).next(V=>{C=V,C.forEach((I,v)=>{v.isValidDocument()||(N=N.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,C)).next(V=>{p=V;const I=[];for(const v of l){const R=iN(v,p.get(v.key).overlayedDocument);R!=null&&I.push(new mi(v.key,R,Sw(R.value.mapValue),Tn.exists(!0)))}return u.mutationQueue.addMutationBatch(A,c,I,l)}).next(V=>{g=V;const I=V.applyToLocalDocumentSet(p,N);return u.documentOverlayCache.saveOverlays(A,V.batchId,I)})}).then(()=>({batchId:g.batchId,changes:Ow(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.gu[o.currentUser.toKey()];c||(c=new ye(ee)),c=c.insert(l,u),o.gu[o.currentUser.toKey()]=c}(r,i.batchId,n),await wa(r,i.changes),await sc(r.remoteStore)}catch(i){const s=wp(i,"Failed to persist write");n.reject(s)}}async function v1(t,e){const n=Y(t);try{const r=await n2(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.mu.get(s);o&&(oe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.Iu=!0:i.modifiedDocuments.size>0?oe(o.Iu,14607):i.removedDocuments.size>0&&(oe(o.Iu,42227),o.Iu=!1))}),await wa(n,r,e)}catch(r){await vs(r)}}function y_(t,e,n){const r=Y(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Ru.forEach((s,o)=>{const l=o.view.xa(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Y(o);u.onlineState=l;let c=!1;u.queries.forEach((f,p)=>{for(const g of p.Ca)g.xa(l)&&(c=!0)}),c&&Tp(u)}(r.eventManager,e),i.length&&r.Eu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function q2(t,e,n){const r=Y(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.mu.get(e),s=i&&i.key;if(s){let o=new ye(H.comparator);o=o.insert(s,et.newNoDocument(s,J.min()));const l=te().add(s),u=new _a(J.min(),new Map,new ye(ee),o,l);await v1(r,u),r.du=r.du.remove(s),r.mu.delete(e),Sp(r)}else await Dd(r.localStore,e,!1).then(()=>Ld(r,e,n)).catch(vs)}async function H2(t,e){const n=Y(t),r=e.batch.batchId;try{const i=await t2(n.localStore,e);w1(n,r,null),E1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await wa(n,i)}catch(i){await vs(i)}}async function K2(t,e,n){const r=Y(t);try{const i=await function(o,l){const u=Y(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(oe(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);w1(r,e,n),E1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await wa(r,i)}catch(i){await vs(i)}}function E1(t,e){(t.pu.get(e)||[]).forEach(n=>{n.resolve()}),t.pu.delete(e)}function w1(t,e,n){const r=Y(t);let i=r.gu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.gu[r.currentUser.toKey()]=i}}function Ld(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Au.get(e))t.Ru.delete(r),n&&t.Eu.bu(r,n);t.Au.delete(e),t.isPrimaryClient&&t.fu.Qr(e).forEach(r=>{t.fu.containsKey(r)||T1(t,r)})}function T1(t,e){t.Vu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(gp(t.remoteStore,n),t.du=t.du.remove(e),t.mu.delete(n),Sp(t))}function __(t,e,n){for(const r of n)r instanceof g1?(t.fu.addReference(r.key,e),G2(t,r)):r instanceof y1?(z(Ip,"Document no longer in limbo: "+r.key),t.fu.removeReference(r.key,e),t.fu.containsKey(r.key)||T1(t,r.key)):G(19791,{Du:r})}function G2(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Vu.has(r)||(z(Ip,"New document in limbo: "+n),t.Vu.add(r),Sp(t))}function Sp(t){for(;t.Vu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Vu.values().next().value;t.Vu.delete(e);const n=new H(ue.fromString(e)),r=t.yu.next();t.mu.set(r,new M2(n)),t.du=t.du.insert(n,r),a1(t.remoteStore,new vn(on(op(n.path)),r,"TargetPurposeLimboResolution",Qu.ce))}}async function wa(t,e,n){const r=Y(t),i=[],s=[],o=[];r.Ru.isEmpty()||(r.Ru.forEach((l,u)=>{o.push(r.Su(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=pp.Is(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Eu.J_(i),await async function(u,c){const f=Y(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>L.forEach(c,g=>L.forEach(g.Ps,A=>f.persistence.referenceDelegate.addReference(p,g.targetId,A)).next(()=>L.forEach(g.Ts,A=>f.persistence.referenceDelegate.removeReference(p,g.targetId,A)))))}catch(p){if(!Es(p))throw p;z(mp,"Failed to update sequence numbers: "+p)}for(const p of c){const g=p.targetId;if(!p.fromCache){const A=f.Cs.get(g),C=A.snapshotVersion,N=A.withLastLimboFreeSnapshotVersion(C);f.Cs=f.Cs.insert(g,N)}}}(r.localStore,s))}async function Q2(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){z(Ip,"User change. New user:",e.toKey());const r=await r1(n.localStore,e);n.currentUser=e,function(s,o){s.pu.forEach(l=>{l.forEach(u=>{u.reject(new B(O.CANCELLED,o))})}),s.pu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await wa(n,r.Os)}}function J2(t,e){const n=Y(t),r=n.mu.get(e);if(r&&r.Iu)return te().add(r.key);{let i=te();const s=n.Au.get(e);if(!s)return i;for(const o of s){const l=n.Ru.get(o);i=i.unionWith(l.view.su)}return i}}function I1(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=v1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=J2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=q2.bind(null,e),e.Eu.J_=V2.bind(null,e.eventManager),e.Eu.bu=b2.bind(null,e.eventManager),e}function Y2(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=H2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=K2.bind(null,e),e}class Su{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=rc(e.databaseInfo.databaseId),this.sharedClientState=this.Fu(e),this.persistence=this.Mu(e),await this.persistence.start(),this.localStore=this.xu(e),this.gcScheduler=this.Ou(e,this.localStore),this.indexBackfillerScheduler=this.Nu(e,this.localStore)}Ou(e,n){return null}Nu(e,n){return null}xu(e){return e2(this.persistence,new YN,e.initialUser,this.serializer)}Mu(e){return new n1(fp.Ai,this.serializer)}Fu(e){return new a2}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Su.provider={build:()=>new Su};class X2 extends Su{constructor(e){super(),this.cacheSizeBytes=e}Ou(e,n){oe(this.persistence.referenceDelegate instanceof Tu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new LN(r,e.asyncQueue,n)}Mu(e){const n=this.cacheSizeBytes!==void 0?ct.withCacheSize(this.cacheSizeBytes):ct.DEFAULT;return new n1(r=>Tu.Ai(r,n),this.serializer)}}class Md{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>y_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Q2.bind(null,this.syncEngine),await x2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new D2}()}createDatastore(e){const n=rc(e.databaseInfo.databaseId),r=d2(e.databaseInfo);return y2(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new v2(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>y_(this.syncEngine,n,0),function(){return h_.v()?new h_:new l2}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,f){const p=new U2(i,s,o,l,u,c);return f&&(p.wu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Y(i);z(cn,"RemoteStore shutting down."),s.Va.add(5),await Ea(s),s.ma.shutdown(),s.fa.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Md.provider={build:()=>new Md};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Lu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Lu(this.observer.error,e):kn("Uncaught Error in snapshot listener:",e.toString()))}ku(){this.muted=!0}Lu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar="FirestoreClient";class Z2{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=Xe.UNAUTHENTICATED,this.clientId=ep.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{z(Ar,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(z(Ar,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=wp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function mh(t,e){t.asyncQueue.verifyOperationInProgress(),z(Ar,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await r1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function v_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await eD(t);z(Ar,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>f_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>f_(e.remoteStore,i)),t._onlineComponents=e}async function eD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){z(Ar,"Using user provided OfflineComponentProvider");try{await mh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===O.FAILED_PRECONDITION||i.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;ui("Error using user provided cache. Falling back to memory cache: "+n),await mh(t,new Su)}}else z(Ar,"Using default OfflineComponentProvider"),await mh(t,new X2(void 0));return t._offlineComponents}async function A1(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(z(Ar,"Using user provided OnlineComponentProvider"),await v_(t,t._uninitializedComponentsProvider._online)):(z(Ar,"Using default OnlineComponentProvider"),await v_(t,new Md))),t._onlineComponents}function tD(t){return A1(t).then(e=>e.syncEngine)}async function Ud(t){const e=await A1(t),n=e.eventManager;return n.onListen=j2.bind(null,e.syncEngine),n.onUnlisten=$2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=F2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=B2.bind(null,e.syncEngine),n}function nD(t,e,n,r){const i=new S1(r),s=new m1(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>f1(await Ud(t),s)),()=>{i.ku(),t.asyncQueue.enqueueAndForget(async()=>p1(await Ud(t),s))}}function rD(t,e,n={}){const r=new mr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const f=new S1({next:g=>{f.ku(),o.enqueueAndForget(()=>p1(s,p)),g.fromCache&&u.source==="server"?c.reject(new B(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(g)},error:g=>c.reject(g)}),p=new m1(l,f,{includeMetadataChanges:!0,$a:!0});return f1(s,p)}(await Ud(t),t.asyncQueue,e,n,r)),r.promise}function iD(t,e){const n=new mr;return t.asyncQueue.enqueueAndForget(async()=>W2(await tD(t),e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R1(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sD="ComponentProvider",E_=new Map;function oD(t,e,n,r,i){return new Rx(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,R1(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P1="firestore.googleapis.com",w_=!0;class T_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new B(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=P1,this.ssl=w_}else this.host=e.host,this.ssl=e.ssl??w_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=t1;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<bN)throw new B(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=R1(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new B(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new B(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new B(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class oc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new T_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new T_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new sx;switch(r.type){case"firstParty":return new ux(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=E_.get(n);r&&(z(sD,"Removing Datastore"),E_.delete(n),r.terminate())}(this),Promise.resolve()}}function aD(t,e,n,r={}){var c;t=Jr(t,oc);const i=ha(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&mE(`https://${l}`),s.host!==P1&&s.host!==l&&ui("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!ii(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=Xe.MOCK_USER;else{f=mR(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new B(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Xe(g)}t._authCredentials=new ox(new cw(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Dr(this.firestore,e,this._query)}}class be{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new be(this.firestore,e,this._key)}toJSON(){return{type:be._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ga(n,be._jsonSchema))return new be(e,r||null,new H(ue.fromString(n.referencePath)))}}be._jsonSchemaVersion="firestore/documentReference/1.0",be._jsonSchema={type:xe("string",be._jsonSchemaVersion),referencePath:xe("string")};class gr extends Dr{constructor(e,n,r){super(e,n,op(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new be(this.firestore,null,new H(e))}withConverter(e){return new gr(this.firestore,e,this._path)}}function Ys(t,e,...n){if(t=He(t),hw("collection","path",e),t instanceof oc){const r=ue.fromString(e,...n);return Oy(r),new gr(t,null,r)}{if(!(t instanceof be||t instanceof gr))throw new B(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return Oy(r),new gr(t.firestore,null,r)}}function lD(t,e,...n){if(t=He(t),arguments.length===1&&(e=ep.newId()),hw("doc","path",e),t instanceof oc){const r=ue.fromString(e,...n);return by(r),new be(t,null,new H(r))}{if(!(t instanceof be||t instanceof gr))throw new B(O.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return by(r),new be(t.firestore,t instanceof gr?t.converter:null,new H(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_="AsyncQueue";class S_{constructor(e=Promise.resolve()){this.nc=[],this.rc=!1,this.sc=[],this.oc=null,this._c=!1,this.ac=!1,this.uc=[],this.F_=new s1(this,"async_queue_retry"),this.cc=()=>{const r=ph();r&&z(I_,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this.lc=e;const n=ph();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.cc)}get isShuttingDown(){return this.rc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.hc(),this.Pc(e)}enterRestrictedMode(e){if(!this.rc){this.rc=!0,this.ac=e||!1;const n=ph();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.cc)}}enqueue(e){if(this.hc(),this.rc)return new Promise(()=>{});const n=new mr;return this.Pc(()=>this.rc&&this.ac?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.nc.push(e),this.Tc()))}async Tc(){if(this.nc.length!==0){try{await this.nc[0](),this.nc.shift(),this.F_.reset()}catch(e){if(!Es(e))throw e;z(I_,"Operation failed with retryable error: "+e)}this.nc.length>0&&this.F_.g_(()=>this.Tc())}}Pc(e){const n=this.lc.then(()=>(this._c=!0,e().catch(r=>{throw this.oc=r,this._c=!1,kn("INTERNAL UNHANDLED ERROR: ",A_(r)),r}).then(r=>(this._c=!1,r))));return this.lc=n,n}enqueueAfterDelay(e,n,r){this.hc(),this.uc.indexOf(e)>-1&&(n=0);const i=Ep.createAndSchedule(this,e,n,r,s=>this.Ic(s));return this.sc.push(i),i}hc(){this.oc&&G(47125,{Ec:A_(this.oc)})}verifyOperationInProgress(){}async Rc(){let e;do e=this.lc,await e;while(e!==this.lc)}Ac(e){for(const n of this.sc)if(n.timerId===e)return!0;return!1}Vc(e){return this.Rc().then(()=>{this.sc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.sc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Rc()})}dc(e){this.uc.push(e)}Ic(e){const n=this.sc.indexOf(e);this.sc.splice(n,1)}}function A_(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class na extends oc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new S_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new S_(e),this._firestoreClient=void 0,await e}}}function uD(t,e){const n=typeof t=="object"?t:vE(),r=typeof t=="string"?t:mu,i=Wf(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=fR("firestore");s&&aD(i,...s)}return i}function Ap(t){if(t._terminated)throw new B(O.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||cD(t),t._firestoreClient}function cD(t){var r,i,s,o;const e=t._freezeSettings(),n=oD(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new Z2(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new xt(Ke.fromBase64String(e))}catch(n){throw new B(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new xt(Ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:xt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ga(e,xt._jsonSchema))return xt.fromBase64String(e.bytes)}}xt._jsonSchemaVersion="firestore/bytes/1.0",xt._jsonSchema={type:xe("string",xt._jsonSchemaVersion),bytes:xe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ee(this._lat,e._lat)||ee(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ln._jsonSchemaVersion}}static fromJSON(e){if(ga(e,ln._jsonSchema))return new ln(e.latitude,e.longitude)}}ln._jsonSchemaVersion="firestore/geoPoint/1.0",ln._jsonSchema={type:xe("string",ln._jsonSchemaVersion),latitude:xe("number"),longitude:xe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:qt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ga(e,qt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new qt(e.vectorValues);throw new B(O.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}qt._jsonSchemaVersion="firestore/vectorValue/1.0",qt._jsonSchema={type:xe("string",qt._jsonSchemaVersion),vectorValues:xe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hD=/^__.*__$/;class dD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new mi(e,this.data,this.fieldMask,n,this.fieldTransforms):new ya(e,this.data,n,this.fieldTransforms)}}function k1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G(40011,{dataSource:t})}}class Pp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Pp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}gc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.yc(e),r}wc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.mc(),r}Sc(e){return this.i({path:void 0,arrayElement:!0})}bc(e){return Au(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mc(){if(this.path)for(let e=0;e<this.path.length;e++)this.yc(this.path.get(e))}yc(e){if(e.length===0)throw this.bc("Document fields must not be empty");if(k1(this.dataSource)&&hD.test(e))throw this.bc('Document fields cannot begin and end with "__"')}}class fD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||rc(e)}V(e,n,r,i=!1){return new Pp({dataSource:e,methodName:n,targetDoc:r,path:Be.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function x1(t){const e=t._freezeSettings(),n=rc(t._databaseId);return new fD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function pD(t,e,n,r,i,s={}){const o=t.V(s.merge||s.mergeFields?2:0,e,n,i);V1("Data must be an object, but it was:",o,r);const l=N1(r,o);let u,c;if(s.merge)u=new zt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const g=Ta(e,p,n);if(!o.contains(g))throw new B(O.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);_D(f,g)||f.push(g)}u=new zt(f),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new dD(new kt(l),u,c)}class Cp extends Rp{_toFieldTransform(e){return new eN(e.path,new Xo)}isEqual(e){return e instanceof Cp}}function mD(t,e,n,r=!1){return kp(n,t.V(r?4:3,e))}function kp(t,e){if(D1(t=He(t)))return V1("Unsupported field value:",e,t),N1(t,e);if(t instanceof Rp)return function(r,i){if(!k1(i.dataSource))throw i.bc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.bc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.bc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=kp(l,i.Sc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=He(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Yx(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=fe.fromDate(r);return{timestampValue:wu(i.serializer,s)}}if(r instanceof fe){const s=new fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:wu(i.serializer,s)}}if(r instanceof ln)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof xt)return{bytesValue:Kw(i.serializer,r._byteString)};if(r instanceof be){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.bc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:hp(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof qt)return function(o,l){const u=o instanceof qt?o.toArray():o;return{mapValue:{fields:{[Ew]:{stringValue:Tw},[gu]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw l.bc("VectorValues must only contain numeric values.");return ec(l.serializer,f)})}}}}}}(r,i);if(e1(r))return r._toProto(i.serializer);throw i.bc(`Unsupported field value: ${Gu(r)}`)}(t,e)}function N1(t,e){const n={};return pw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):fi(t,(r,i)=>{const s=kp(i,e.gc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function D1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof fe||t instanceof ln||t instanceof xt||t instanceof be||t instanceof Rp||t instanceof qt||e1(t))}function V1(t,e,n){if(!D1(n)||!dw(n)){const r=Gu(n);throw r==="an object"?e.bc(t+" a custom object"):e.bc(t+" "+r)}}function Ta(t,e,n){if((e=He(e))instanceof C1)return e._internalPath;if(typeof e=="string")return yD(t,e);throw Au("Field path arguments must be of type string or ",t,!1,void 0,n)}const gD=new RegExp("[~\\*/\\[\\]]");function yD(t,e,n){if(e.search(gD)>=0)throw Au(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new C1(...e.split("."))._internalPath}catch{throw Au(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Au(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new B(O.INVALID_ARGUMENT,l+t+u)}function _D(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vD{convertValue(e,n="none"){switch(Tr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(wr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw G(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return fi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[gu].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Se(o.doubleValue));return new qt(n)}convertGeoPoint(e){return new ln(Se(e.latitude),Se(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Yu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ko(e));default:return null}}convertTimestamp(e){const n=Er(e);return new fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ue.fromString(e);oe(Zw(r),9688,{name:e});const i=new Go(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(n)||kn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp extends vD{constructor(e){super(),this.firestore=e}convertBytes(e){return new xt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new be(this.firestore,null,n)}}function R_(){return new Cp("serverTimestamp")}const P_="@firebase/firestore",C_="4.15.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ED(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Ta("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ED extends b1{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O1(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Np{}class L1 extends Np{}function al(t,e,...n){let r=[];e instanceof Np&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Dp).length,l=s.filter(u=>u instanceof ac).length;if(o>1||o>0&&l>0)throw new B(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class ac extends L1{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new ac(e,n,r)}_apply(e){const n=this._parse(e);return M1(e._query,n),new Dr(e.firestore,e.converter,Rd(e._query,n))}_parse(e){const n=x1(e.firestore);return function(s,o,l,u,c,f,p){let g;if(c.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new B(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){D_(p,f);const C=[];for(const N of p)C.push(N_(u,s,N));g={arrayValue:{values:C}}}else g=N_(u,s,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||D_(p,f),g=mD(l,o,p,f==="in"||f==="not-in");return ke.create(c,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function gh(t,e,n){const r=e,i=Ta("where",t);return ac._create(i,r,n)}class Dp extends Np{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Dp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Gt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)M1(o,u),o=Rd(o,u)}(e._query,n),new Dr(e.firestore,e.converter,Rd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Vp extends L1{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Vp(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new B(O.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new B(O.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Yo(s,o)}(e._query,this._field,this._direction);return new Dr(e.firestore,e.converter,Bx(e._query,n))}}function x_(t,e="asc"){const n=e,r=Ta("orderBy",t);return Vp._create(r,n)}function N_(t,e,n){if(typeof(n=He(n))=="string"){if(n==="")throw new B(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Nw(e)&&n.indexOf("/")!==-1)throw new B(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ue.fromString(n));if(!H.isDocumentKey(r))throw new B(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return By(t,new H(r))}if(n instanceof be)return By(t,n._key);throw new B(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Gu(n)}.`)}function D_(t,e){if(!Array.isArray(t)||t.length===0)throw new B(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function M1(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new B(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function wD(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class lo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Yr extends b1{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new xl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ta("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new B(O.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Yr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Yr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Yr._jsonSchema={type:xe("string",Yr._jsonSchemaVersion),bundleSource:xe("string","DocumentSnapshot"),bundleName:xe("string"),bundle:xe("string")};class xl extends Yr{data(e={}){return super.data(e)}}class Xr{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new lo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new xl(this._firestore,this._userDataWriter,r.key,r,new lo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new xl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new lo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new xl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new lo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:TD(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new B(O.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Xr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ep.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function TD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G(61501,{type:t})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xr._jsonSchemaVersion="firestore/querySnapshot/1.0",Xr._jsonSchema={type:xe("string",Xr._jsonSchemaVersion),bundleSource:xe("string","QuerySnapshot"),bundleName:xe("string"),bundle:xe("string")};function V_(t){t=Jr(t,Dr);const e=Jr(t.firestore,na),n=Ap(e),r=new xp(e);return O1(t._query),rD(n,t._query).then(i=>new Xr(e,r,t,i))}function b_(t,e){const n=Jr(t.firestore,na),r=lD(t),i=wD(t.converter,e),s=x1(t.firestore);return ID(n,[pD(s,"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Tn.exists(!1))]).then(()=>r)}function O_(t,...e){var c,f,p;t=He(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||k_(e[r])||(n=e[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(k_(e[r])){const g=e[r];e[r]=(c=g.next)==null?void 0:c.bind(g),e[r+1]=(f=g.error)==null?void 0:f.bind(g),e[r+2]=(p=g.complete)==null?void 0:p.bind(g)}let s,o,l;if(t instanceof be)o=Jr(t.firestore,na),l=op(t._key.path),s={next:g=>{e[r]&&e[r](SD(o,t,g))},error:e[r+1],complete:e[r+2]};else{const g=Jr(t,Dr);o=Jr(g.firestore,na),l=g._query;const A=new xp(o);s={next:C=>{e[r]&&e[r](new Xr(o,A,g,C))},error:e[r+1],complete:e[r+2]},O1(t._query)}const u=Ap(o);return nD(u,l,i,s)}function ID(t,e){const n=Ap(t);return iD(n,e)}function SD(t,e,n){const r=n.docs.get(e._key),i=new xp(t);return new Yr(t,i,e._key,r,new lo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){ix(gs),ss(new si("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new na(new ax(r.getProvider("auth-internal")),new cx(o,r.getProvider("app-check-internal")),Px(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),fr(P_,C_,e),fr(P_,C_,"esm2020")})();const AD={apiKey:"YOUR_API_KEY",authDomain:"YOUR_AUTH_DOMAIN",projectId:"YOUR_PROJECT_ID",storageBucket:"YOUR_STORAGE_BUCKET",messagingSenderId:"YOUR_MESSAGING_SENDER_ID",appId:"YOUR_APP_ID"},U1=_E(AD),Ti=nx(U1),Xs=uD(U1);let RD={data:""},PD=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||RD,CD=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,kD=/\/\*[^]*?\*\/|  +/g,L_=/\n+/g,Xn=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?Xn(o,s):s+"{"+Xn(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=Xn(o,e?e.replace(/([^,])+/g,l=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,u=>/&/.test(u)?u.replace(/&/g,l):l?l+" "+u:u)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=Xn.p?Xn.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},dn={},j1=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+j1(t[n]);return e}return t},xD=(t,e,n,r,i)=>{let s=j1(t),o=dn[s]||(dn[s]=(u=>{let c=0,f=11;for(;c<u.length;)f=101*f+u.charCodeAt(c++)>>>0;return"go"+f})(s));if(!dn[o]){let u=s!==t?t:(c=>{let f,p,g=[{}];for(;f=CD.exec(c.replace(kD,""));)f[4]?g.shift():f[3]?(p=f[3].replace(L_," ").trim(),g.unshift(g[0][p]=g[0][p]||{})):g[0][f[1]]=f[2].replace(L_," ").trim();return g[0]})(t);dn[o]=Xn(i?{["@keyframes "+o]:u}:u,n?"":"."+o)}let l=n&&dn.g?dn.g:null;return n&&(dn.g=dn[o]),((u,c,f,p)=>{p?c.data=c.data.replace(p,u):c.data.indexOf(u)===-1&&(c.data=f?u+c.data:c.data+u)})(dn[o],e,r,l),o},ND=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let l=o(n),u=l&&l.props&&l.props.className||/^go/.test(l)&&l;o=u?"."+u:l&&typeof l=="object"?l.props?"":Xn(l,""):l===!1?"":l}return r+i+(o??"")},"");function lc(t){let e=this||{},n=t.call?t(e.p):t;return xD(n.unshift?n.raw?ND(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,PD(e.target),e.g,e.o,e.k)}let F1,jd,Fd;lc.bind({g:1});let Nn=lc.bind({k:1});function DD(t,e,n,r){Xn.p=e,F1=t,jd=n,Fd=r}function Vr(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let l=Object.assign({},s),u=l.className||i.className;n.p=Object.assign({theme:jd&&jd()},l),n.o=/ *go\d+/.test(u),l.className=lc.apply(n,r)+(u?" "+u:"");let c=t;return t[0]&&(c=l.as||t,delete l.as),Fd&&c[0]&&Fd(l),F1(c,l)}return i}}var VD=t=>typeof t=="function",Ru=(t,e)=>VD(t)?t(e):t,bD=(()=>{let t=0;return()=>(++t).toString()})(),z1=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),OD=20,Nl=new Map,LD=1e3,M_=t=>{if(Nl.has(t))return;let e=setTimeout(()=>{Nl.delete(t),yi({type:4,toastId:t})},LD);Nl.set(t,e)},MD=t=>{let e=Nl.get(t);e&&clearTimeout(e)},zd=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,OD)};case 1:return e.toast.id&&MD(e.toast.id),{...t,toasts:t.toasts.map(s=>s.id===e.toast.id?{...s,...e.toast}:s)};case 2:let{toast:n}=e;return t.toasts.find(s=>s.id===n.id)?zd(t,{type:1,toast:n}):zd(t,{type:0,toast:n});case 3:let{toastId:r}=e;return r?M_(r):t.toasts.forEach(s=>{M_(s.id)}),{...t,toasts:t.toasts.map(s=>s.id===r||r===void 0?{...s,visible:!1}:s)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(s=>s.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+i}))}}},Dl=[],Vl={toasts:[],pausedAt:void 0},yi=t=>{Vl=zd(Vl,t),Dl.forEach(e=>{e(Vl)})},UD={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},jD=(t={})=>{let[e,n]=M.useState(Vl);M.useEffect(()=>(Dl.push(n),()=>{let i=Dl.indexOf(n);i>-1&&Dl.splice(i,1)}),[e]);let r=e.toasts.map(i=>{var s,o;return{...t,...t[i.type],...i,duration:i.duration||((s=t[i.type])==null?void 0:s.duration)||(t==null?void 0:t.duration)||UD[i.type],style:{...t.style,...(o=t[i.type])==null?void 0:o.style,...i.style}}});return{...e,toasts:r}},FD=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||bD()}),Ia=t=>(e,n)=>{let r=FD(e,t,n);return yi({type:2,toast:r}),r.id},Et=(t,e)=>Ia("blank")(t,e);Et.error=Ia("error");Et.success=Ia("success");Et.loading=Ia("loading");Et.custom=Ia("custom");Et.dismiss=t=>{yi({type:3,toastId:t})};Et.remove=t=>yi({type:4,toastId:t});Et.promise=(t,e,n)=>{let r=Et.loading(e.loading,{...n,...n==null?void 0:n.loading});return t.then(i=>(Et.success(Ru(e.success,i),{id:r,...n,...n==null?void 0:n.success}),i)).catch(i=>{Et.error(Ru(e.error,i),{id:r,...n,...n==null?void 0:n.error})}),t};var zD=(t,e)=>{yi({type:1,toast:{id:t,height:e}})},$D=()=>{yi({type:5,time:Date.now()})},BD=t=>{let{toasts:e,pausedAt:n}=jD(t);M.useEffect(()=>{if(n)return;let s=Date.now(),o=e.map(l=>{if(l.duration===1/0)return;let u=(l.duration||0)+l.pauseDuration-(s-l.createdAt);if(u<0){l.visible&&Et.dismiss(l.id);return}return setTimeout(()=>Et.dismiss(l.id),u)});return()=>{o.forEach(l=>l&&clearTimeout(l))}},[e,n]);let r=M.useCallback(()=>{n&&yi({type:6,time:Date.now()})},[n]),i=M.useCallback((s,o)=>{let{reverseOrder:l=!1,gutter:u=8,defaultPosition:c}=o||{},f=e.filter(A=>(A.position||c)===(s.position||c)&&A.height),p=f.findIndex(A=>A.id===s.id),g=f.filter((A,C)=>C<p&&A.visible).length;return f.filter(A=>A.visible).slice(...l?[g+1]:[0,g]).reduce((A,C)=>A+(C.height||0)+u,0)},[e]);return{toasts:e,handlers:{updateHeight:zD,startPause:$D,endPause:r,calculateOffset:i}}},WD=Nn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,qD=Nn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,HD=Nn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,KD=Vr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${WD} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${qD} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${HD} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,GD=Nn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,QD=Vr("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${GD} 1s linear infinite;
`,JD=Nn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,YD=Nn`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,XD=Vr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${JD} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${YD} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,ZD=Vr("div")`
  position: absolute;
`,eV=Vr("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,tV=Nn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,nV=Vr("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${tV} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,rV=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?M.createElement(nV,null,e):e:n==="blank"?null:M.createElement(eV,null,M.createElement(QD,{...r}),n!=="loading"&&M.createElement(ZD,null,n==="error"?M.createElement(KD,{...r}):M.createElement(XD,{...r})))},iV=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,sV=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,oV="0%{opacity:0;} 100%{opacity:1;}",aV="0%{opacity:1;} 100%{opacity:0;}",lV=Vr("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,uV=Vr("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,cV=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=z1()?[oV,aV]:[iV(n),sV(n)];return{animation:e?`${Nn(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Nn(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},hV=M.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?cV(t.position||e||"top-center",t.visible):{opacity:0},s=M.createElement(rV,{toast:t}),o=M.createElement(uV,{...t.ariaProps},Ru(t.message,t));return M.createElement(lV,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:s,message:o}):M.createElement(M.Fragment,null,s,o))});DD(M.createElement);var dV=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let s=M.useCallback(o=>{if(o){let l=()=>{let u=o.getBoundingClientRect().height;r(t,u)};l(),new MutationObserver(l).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return M.createElement("div",{ref:s,className:e,style:n},i)},fV=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:z1()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},pV=lc`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ll=16,mV=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,containerStyle:s,containerClassName:o})=>{let{toasts:l,handlers:u}=BD(n);return M.createElement("div",{style:{position:"fixed",zIndex:9999,top:ll,left:ll,right:ll,bottom:ll,pointerEvents:"none",...s},className:o,onMouseEnter:u.startPause,onMouseLeave:u.endPause},l.map(c=>{let f=c.position||e,p=u.calculateOffset(c,{reverseOrder:t,gutter:r,defaultPosition:e}),g=fV(f,p);return M.createElement(dV,{id:c.id,key:c.id,onHeightUpdate:u.updateHeight,className:c.visible?pV:"",style:g},c.type==="custom"?Ru(c.message,c):i?i(c):M.createElement(hV,{toast:c,position:f}))}))},ht=Et;const $t=zf(t=>({authUser:null,isSigningUp:!1,isLoggingIn:!1,isUpdatingProfile:!1,isCheckingAuth:!0,checkAuth:()=>{WC(Ti,e=>{t(e?{authUser:e,isCheckingAuth:!1}:{authUser:null,isCheckingAuth:!1})})},signup:async e=>{t({isSigningUp:!0});try{const n=await jC(Ti,e.email,e.password);await wy(n.user,{displayName:e.fullName}),t({authUser:n.user}),ht.success("Account created successfully")}catch(n){ht.error(n.message)}finally{t({isSigningUp:!1})}},login:async e=>{t({isLoggingIn:!0});try{const n=await FC(Ti,e.email,e.password);t({authUser:n.user}),ht.success("Logged in successfully")}catch(n){ht.error(n.message)}finally{t({isLoggingIn:!1})}},logout:async()=>{try{await qC(Ti),t({authUser:null}),ht.success("Logged out successfully")}catch(e){ht.error(e.message)}},updateProfile:async e=>{t({isUpdatingProfile:!0});try{await wy(Ti.currentUser,{displayName:e.fullName,photoURL:e.photoURL}),t({authUser:Ti.currentUser}),ht.success("Profile updated successfully")}catch(n){ht.error(n.message)}finally{t({isUpdatingProfile:!1})}}}));/**
 * @license lucide-react v0.459.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gV=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),$1=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.459.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var yV={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.459.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _V=M.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},u)=>M.createElement("svg",{ref:u,...yV,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:$1("lucide",i),...l},[...o.map(([c,f])=>M.createElement(c,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.459.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ut=(t,e)=>{const n=M.forwardRef(({className:r,...i},s)=>M.createElement(_V,{ref:s,iconNode:e,className:$1(`lucide-${gV(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.459.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vV=ut("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.459.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=ut("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.459.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=ut("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.459.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EV=ut("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.459.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=ut("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.459.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wV=ut("Loader",[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]]);/**
 * @license lucide-react v0.459.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=ut("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.459.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TV=ut("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.459.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=ut("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.459.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc=ut("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.459.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=ut("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.459.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IV=ut("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.459.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=ut("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.459.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=ut("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.459.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=ut("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),SV=()=>{const{logout:t,authUser:e}=$t();return y.jsx("header",{className:`bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 
    backdrop-blur-lg bg-base-100/80`,children:y.jsx("div",{className:"container mx-auto px-4 h-16",children:y.jsxs("div",{className:"flex items-center justify-between h-full",children:[y.jsx("div",{className:"flex items-center gap-8",children:y.jsxs(vo,{to:"/",className:"flex items-center gap-2.5 hover:opacity-80 transition-all",children:[y.jsx("div",{className:"size-9 rounded-lg bg-primary/10 flex items-center justify-center",children:y.jsx(uc,{className:"w-5 h-5 text-primary"})}),y.jsx("h1",{className:"text-lg font-bold",children:"Chatty"})]})}),y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsxs(vo,{to:"/settings",className:`
              btn btn-sm gap-2 transition-colors
              
              `,children:[y.jsx(IV,{className:"w-4 h-4"}),y.jsx("span",{className:"hidden sm:inline",children:"Settings"})]}),e&&y.jsxs(y.Fragment,{children:[y.jsxs(vo,{to:"/profile",className:"btn btn-sm gap-2",children:[y.jsx(Op,{className:"size-5"}),y.jsx("span",{className:"hidden sm:inline",children:"Profile"})]}),y.jsxs("button",{className:"flex gap-2 items-center",onClick:t,children:[y.jsx(TV,{className:"size-5"}),y.jsx("span",{className:"hidden sm:inline",children:"Logout"})]})]})]})]})})})},Sa=zf((t,e)=>({messages:[],users:[],selectedUser:null,isUsersLoading:!1,isMessagesLoading:!1,unsubscribe:null,getUsers:async()=>{t({isUsersLoading:!0});try{const n=Ys(Xs,"users"),r=al(n,gh("uid","!=",$t.getState().authUser.uid)),i=await V_(r),s=[];i.forEach(o=>{s.push(o.data())}),t({users:s})}catch(n){console.log("Error in getUsers:",n)}finally{t({isUsersLoading:!1})}},getMessages:n=>{t({isMessagesLoading:!0});const r=$t.getState().authUser,i=Ys(Xs,"chats"),s=al(i,gh("participants","array-contains",r.uid),x_("createdAt","asc")),o=O_(s,l=>{l.docChanges().forEach(u=>{u.type==="added"&&u.doc.data().participants.includes(n)&&e().listenForMessages(u.doc.id)})});t({unsubscribe:o})},listenForMessages:n=>{const r=Ys(Xs,`chats/${n}/messages`),i=al(r,x_("createdAt","asc")),s=O_(i,o=>{const l=[];o.forEach(u=>{l.push(u.data())}),t({messages:l,isMessagesLoading:!1})});t({unsubscribe:s})},sendMessage:async n=>{const{selectedUser:r}=e(),i=$t.getState().authUser;let s=await e().findOrCreateChat(r.uid);const o=Ys(Xs,`chats/${s}/messages`);await b_(o,{...n,sender:i.uid,createdAt:R_()})},findOrCreateChat:async n=>{const r=$t.getState().authUser,i=Ys(Xs,"chats"),s=al(i,gh("participants","in",[[r.uid,n],[n,r.uid]])),o=await V_(s);return o.empty?(await b_(i,{participants:[r.uid,n],createdAt:R_()})).id:o.docs[0].id},setSelectedUser:n=>{var r,i;(i=(r=e()).unsubscribe)==null||i.call(r),t({selectedUser:n,messages:[]}),n&&e().getMessages(n.uid)}})),AV=()=>{const t=Array(8).fill(null);return y.jsxs("aside",{className:`h-full w-20 lg:w-72 border-r border-base-300 
    flex flex-col transition-all duration-200`,children:[y.jsx("div",{className:"border-b border-base-300 w-full p-5",children:y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx(G1,{className:"w-6 h-6"}),y.jsx("span",{className:"font-medium hidden lg:block",children:"Contacts"})]})}),y.jsx("div",{className:"overflow-y-auto w-full py-3",children:t.map((e,n)=>y.jsxs("div",{className:"w-full p-3 flex items-center gap-3",children:[y.jsx("div",{className:"relative mx-auto lg:mx-0",children:y.jsx("div",{className:"skeleton size-12 rounded-full"})}),y.jsxs("div",{className:"hidden lg:block text-left min-w-0 flex-1",children:[y.jsx("div",{className:"skeleton h-4 w-32 mb-2"}),y.jsx("div",{className:"skeleton h-3 w-16"})]})]},n))})]})},RV=()=>{const{getUsers:t,users:e,selectedUser:n,setSelectedUser:r,isUsersLoading:i}=Sa();return M.useEffect(()=>{t()},[t]),i?y.jsx(AV,{}):y.jsxs("aside",{className:"h-full w-20 lg:w-72 border-r border-base-300 flex flex-col transition-all duration-200",children:[y.jsx("div",{className:"border-b border-base-300 w-full p-5",children:y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx(G1,{className:"size-6"}),y.jsx("span",{className:"font-medium hidden lg:block",children:"Contacts"})]})}),y.jsxs("div",{className:"overflow-y-auto w-full py-3",children:[e.map(s=>y.jsxs("button",{onClick:()=>r(s),className:`
              w-full p-3 flex items-center gap-3
              hover:bg-base-300 transition-colors
              ${(n==null?void 0:n.uid)===s.uid?"bg-base-300 ring-1 ring-base-300":""}
            `,children:[y.jsx("div",{className:"relative mx-auto lg:mx-0",children:y.jsx("img",{src:s.photoURL||"/avatar.png",alt:s.displayName,className:"size-12 object-cover rounded-full"})}),y.jsx("div",{className:"hidden lg:block text-left min-w-0",children:y.jsx("div",{className:"font-medium truncate",children:s.displayName})})]},s.uid)),e.length===0&&y.jsx("div",{className:"text-center text-zinc-500 py-4",children:"No users found"})]})]})},PV=()=>y.jsx("div",{className:"w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50",children:y.jsxs("div",{className:"max-w-md text-center space-y-6",children:[y.jsx("div",{className:"flex justify-center gap-4 mb-4",children:y.jsx("div",{className:"relative",children:y.jsx("div",{className:`w-16 h-16 rounded-2xl bg-primary/10 flex items-center
             justify-center animate-bounce`,children:y.jsx(uc,{className:"w-8 h-8 text-primary "})})})}),y.jsx("h2",{className:"text-2xl font-bold",children:"Welcome to Chatty!"}),y.jsx("p",{className:"text-base-content/60",children:"Select a conversation from the sidebar to start chatting"})]})}),U_=()=>{const{selectedUser:t,setSelectedUser:e}=Sa(),{onlineUsers:n}=$t();return y.jsx("div",{className:"p-2.5 border-b border-base-300",children:y.jsxs("div",{className:"flex items-center justify-between",children:[y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsx("div",{className:"avatar",children:y.jsx("div",{className:"size-10 rounded-full relative",children:y.jsx("img",{src:t.profilePic||"/avatar.png",alt:t.fullName})})}),y.jsxs("div",{children:[y.jsx("h3",{className:"font-medium",children:t.fullName}),y.jsx("p",{className:"text-sm text-base-content/70",children:n.includes(t._id)?"Online":"Offline"})]})]}),y.jsx("button",{onClick:()=>e(null),children:y.jsx(Q1,{})})]})})},j_=()=>{const[t,e]=M.useState(""),[n,r]=M.useState(null),i=M.useRef(null),{sendMessage:s}=Sa(),o=c=>{const f=c.target.files[0];if(!f.type.startsWith("image/")){ht.error("Please select an image file");return}const p=new FileReader;p.onloadend=()=>{r(p.result)},p.readAsDataURL(f)},l=()=>{r(null),i.current&&(i.current.value="")},u=async c=>{if(c.preventDefault(),!(!t.trim()&&!n))try{await s({text:t.trim(),image:n}),e(""),r(null),i.current&&(i.current.value="")}catch(f){console.error("Failed to send message:",f)}};return y.jsxs("div",{className:"p-4 w-full",children:[n&&y.jsx("div",{className:"mb-3 flex items-center gap-2",children:y.jsxs("div",{className:"relative",children:[y.jsx("img",{src:n,alt:"Preview",className:"w-20 h-20 object-cover rounded-lg border border-zinc-700"}),y.jsx("button",{onClick:l,className:`absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-base-300
              flex items-center justify-center`,type:"button",children:y.jsx(Q1,{className:"size-3"})})]})}),y.jsxs("form",{onSubmit:u,className:"flex items-center gap-2",children:[y.jsxs("div",{className:"flex-1 flex gap-2",children:[y.jsx("input",{type:"text",className:"w-full input input-bordered rounded-lg input-sm sm:input-md",placeholder:"Type a message...",value:t,onChange:c=>e(c.target.value)}),y.jsx("input",{type:"file",accept:"image/*",className:"hidden",ref:i,onChange:o}),y.jsx("button",{type:"button",className:`hidden sm:flex btn btn-circle
                     ${n?"text-emerald-500":"text-zinc-400"}`,onClick:()=>{var c;return(c=i.current)==null?void 0:c.click()},children:y.jsx(EV,{size:20})})]}),y.jsx("button",{type:"submit",className:"btn btn-sm btn-circle",disabled:!t.trim()&&!n,children:y.jsx(K1,{size:22})})]})]})},CV=()=>{const t=Array(6).fill(null);return y.jsx("div",{className:"flex-1 overflow-y-auto p-4 space-y-4",children:t.map((e,n)=>y.jsxs("div",{className:`chat ${n%2===0?"chat-start":"chat-end"}`,children:[y.jsx("div",{className:"chat-image avatar",children:y.jsx("div",{className:"size-10 rounded-full",children:y.jsx("div",{className:"skeleton w-full h-full rounded-full"})})}),y.jsx("div",{className:"chat-header mb-1",children:y.jsx("div",{className:"skeleton h-4 w-16"})}),y.jsx("div",{className:"chat-bubble bg-transparent p-0",children:y.jsx("div",{className:"skeleton h-16 w-[200px]"})})]},n))})};function kV(t){return new Date(t).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!1})}const xV=()=>{const{messages:t,isMessagesLoading:e,selectedUser:n}=Sa(),{authUser:r}=$t(),i=M.useRef(null);return M.useEffect(()=>{i.current&&t&&i.current.scrollIntoView({behavior:"smooth"})},[t]),e&&t.length===0?y.jsxs("div",{className:"flex-1 flex flex-col overflow-auto",children:[y.jsx(U_,{}),y.jsx(CV,{}),y.jsx(j_,{})]}):y.jsxs("div",{className:"flex-1 flex flex-col overflow-auto",children:[y.jsx(U_,{}),y.jsx("div",{className:"flex-1 overflow-y-auto p-4 space-y-4",children:t.map((s,o)=>{var l;return y.jsxs("div",{className:`chat ${s.sender===r.uid?"chat-end":"chat-start"}`,ref:i,children:[y.jsx("div",{className:" chat-image avatar",children:y.jsx("div",{className:"size-10 rounded-full border",children:y.jsx("img",{src:s.sender===r.uid?r.photoURL||"/avatar.png":n.photoURL||"/avatar.png",alt:"profile pic"})})}),y.jsx("div",{className:"chat-header mb-1",children:y.jsx("time",{className:"text-xs opacity-50 ml-1",children:s.createdAt?kV(s.createdAt.toDate()):"..."})}),y.jsxs("div",{className:"chat-bubble flex flex-col",children:[s.image&&y.jsx("img",{src:s.image,alt:"Attachment",className:"sm:max-w-[200px] rounded-md mb-2"}),s.text&&y.jsx("p",{children:s.text})]})]},((l=s.createdAt)==null?void 0:l.seconds)||o)})}),y.jsx(j_,{})]})},NV=()=>{const{selectedUser:t}=Sa();return y.jsx("div",{className:"h-screen bg-base-200",children:y.jsx("div",{className:"flex items-center justify-center pt-20 px-4",children:y.jsx("div",{className:"bg-base-100 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-8rem)]",children:y.jsxs("div",{className:"flex h-full rounded-lg overflow-hidden",children:[y.jsx(RV,{}),t?y.jsx(xV,{}):y.jsx(PV,{})]})})})})},J1=({title:t,subtitle:e})=>y.jsx("div",{className:"hidden lg:flex items-center justify-center bg-base-200 p-12",children:y.jsxs("div",{className:"max-w-md text-center",children:[y.jsx("div",{className:"grid grid-cols-3 gap-3 mb-8",children:[...Array(9)].map((n,r)=>y.jsx("div",{className:`aspect-square rounded-2xl bg-primary/10 ${r%2===0?"animate-pulse":""}`},r))}),y.jsx("h2",{className:"text-2xl font-bold mb-4",children:t}),y.jsx("p",{className:"text-base-content/60",children:e})]})}),DV=()=>{const[t,e]=M.useState(!1),[n,r]=M.useState({fullName:"",email:"",password:""}),{signup:i,isSigningUp:s}=$t(),o=()=>n.fullName.trim()?n.email.trim()?/\S+@\S+\.\S+/.test(n.email)?n.password?n.password.length<6?ht.error("Password must be at least 6 characters"):!0:ht.error("Password is required"):ht.error("Invalid email format"):ht.error("Email is required"):ht.error("Full name is required"),l=u=>{u.preventDefault(),o()===!0&&i(n)};return y.jsxs("div",{className:"min-h-screen grid lg:grid-cols-2",children:[y.jsx("div",{className:"flex flex-col justify-center items-center p-6 sm:p-12",children:y.jsxs("div",{className:"w-full max-w-md space-y-8",children:[y.jsx("div",{className:"text-center mb-8",children:y.jsxs("div",{className:"flex flex-col items-center gap-2 group",children:[y.jsx("div",{className:`size-12 rounded-xl bg-primary/10 flex items-center justify-center 
              group-hover:bg-primary/20 transition-colors`,children:y.jsx(uc,{className:"size-6 text-primary"})}),y.jsx("h1",{className:"text-2xl font-bold mt-2",children:"Create Account"}),y.jsx("p",{className:"text-base-content/60",children:"Get started with your free account"})]})}),y.jsxs("form",{onSubmit:l,className:"space-y-6",children:[y.jsxs("div",{className:"form-control",children:[y.jsx("label",{className:"label",children:y.jsx("span",{className:"label-text font-medium",children:"Full Name"})}),y.jsxs("div",{className:"relative",children:[y.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:y.jsx(Op,{className:"size-5 text-base-content/40"})}),y.jsx("input",{type:"text",className:"input input-bordered w-full pl-10",placeholder:"John Doe",value:n.fullName,onChange:u=>r({...n,fullName:u.target.value})})]})]}),y.jsxs("div",{className:"form-control",children:[y.jsx("label",{className:"label",children:y.jsx("span",{className:"label-text font-medium",children:"Email"})}),y.jsxs("div",{className:"relative",children:[y.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:y.jsx(bp,{className:"size-5 text-base-content/40"})}),y.jsx("input",{type:"email",className:"input input-bordered w-full pl-10",placeholder:"you@example.com",value:n.email,onChange:u=>r({...n,email:u.target.value})})]})]}),y.jsxs("div",{className:"form-control",children:[y.jsx("label",{className:"label",children:y.jsx("span",{className:"label-text font-medium",children:"Password"})}),y.jsxs("div",{className:"relative",children:[y.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:y.jsx(H1,{className:"size-5 text-base-content/40"})}),y.jsx("input",{type:t?"text":"password",className:"input input-bordered w-full pl-10",placeholder:"••••••••",value:n.password,onChange:u=>r({...n,password:u.target.value})}),y.jsx("button",{type:"button",className:"absolute inset-y-0 right-0 pr-3 flex items-center",onClick:()=>e(!t),children:t?y.jsx(B1,{className:"size-5 text-base-content/40"}):y.jsx(W1,{className:"size-5 text-base-content/40"})})]})]}),y.jsx("button",{type:"submit",className:"btn btn-primary w-full",disabled:s,children:s?y.jsxs(y.Fragment,{children:[y.jsx(q1,{className:"size-5 animate-spin"}),"Loading..."]}):"Create Account"})]}),y.jsx("div",{className:"text-center",children:y.jsxs("p",{className:"text-base-content/60",children:["Already have an account?"," ",y.jsx(vo,{to:"/login",className:"link link-primary",children:"Sign in"})]})})]})}),y.jsx(J1,{title:"Join our community",subtitle:"Connect with friends, share moments, and stay in touch with your loved ones."})]})},VV=()=>{const[t,e]=M.useState(!1),[n,r]=M.useState({email:"",password:""}),{login:i,isLoggingIn:s}=$t(),o=async l=>{l.preventDefault(),i(n)};return y.jsxs("div",{className:"h-screen grid lg:grid-cols-2",children:[y.jsx("div",{className:"flex flex-col justify-center items-center p-6 sm:p-12",children:y.jsxs("div",{className:"w-full max-w-md space-y-8",children:[y.jsx("div",{className:"text-center mb-8",children:y.jsxs("div",{className:"flex flex-col items-center gap-2 group",children:[y.jsx("div",{className:`w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20
              transition-colors`,children:y.jsx(uc,{className:"w-6 h-6 text-primary"})}),y.jsx("h1",{className:"text-2xl font-bold mt-2",children:"Welcome Back"}),y.jsx("p",{className:"text-base-content/60",children:"Sign in to your account"})]})}),y.jsxs("form",{onSubmit:o,className:"space-y-6",children:[y.jsxs("div",{className:"form-control",children:[y.jsx("label",{className:"label",children:y.jsx("span",{className:"label-text font-medium",children:"Email"})}),y.jsxs("div",{className:"relative",children:[y.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:y.jsx(bp,{className:"h-5 w-5 text-base-content/40"})}),y.jsx("input",{type:"email",className:"input input-bordered w-full pl-10",placeholder:"you@example.com",value:n.email,onChange:l=>r({...n,email:l.target.value})})]})]}),y.jsxs("div",{className:"form-control",children:[y.jsx("label",{className:"label",children:y.jsx("span",{className:"label-text font-medium",children:"Password"})}),y.jsxs("div",{className:"relative",children:[y.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:y.jsx(H1,{className:"h-5 w-5 text-base-content/40"})}),y.jsx("input",{type:t?"text":"password",className:"input input-bordered w-full pl-10",placeholder:"••••••••",value:n.password,onChange:l=>r({...n,password:l.target.value})}),y.jsx("button",{type:"button",className:"absolute inset-y-0 right-0 pr-3 flex items-center",onClick:()=>e(!t),children:t?y.jsx(B1,{className:"h-5 w-5 text-base-content/40"}):y.jsx(W1,{className:"h-5 w-5 text-base-content/40"})})]})]}),y.jsx("button",{type:"submit",className:"btn btn-primary w-full",disabled:s,children:s?y.jsxs(y.Fragment,{children:[y.jsx(q1,{className:"h-5 w-5 animate-spin"}),"Loading..."]}):"Sign in"})]}),y.jsx("div",{className:"text-center",children:y.jsxs("p",{className:"text-base-content/60",children:["Don't have an account?"," ",y.jsx(vo,{to:"/signup",className:"link link-primary",children:"Create account"})]})})]})}),y.jsx(J1,{title:"Welcome back!",subtitle:"Sign in to continue your conversations and catch up with your messages."})]})},bV=["light","dark","cupcake","bumblebee","emerald","corporate","synthwave","retro","cyberpunk","valentine","halloween","garden","forest","aqua","lofi","pastel","fantasy","wireframe","black","luxury","dracula","cmyk","autumn","business","acid","lemonade","night","coffee","winter","dim","nord","sunset"],Y1=zf(t=>({theme:localStorage.getItem("chat-theme")||"coffee",setTheme:e=>{localStorage.setItem("chat-theme",e),t({theme:e})}})),OV=[{id:1,content:"Hey! How's it going?",isSent:!1},{id:2,content:"I'm doing great! Just working on some new features.",isSent:!0}],LV=()=>{const{theme:t,setTheme:e}=Y1();return y.jsx("div",{className:"h-screen container mx-auto px-4 pt-20 max-w-5xl",children:y.jsxs("div",{className:"space-y-6",children:[y.jsxs("div",{className:"flex flex-col gap-1",children:[y.jsx("h2",{className:"text-lg font-semibold",children:"Theme"}),y.jsx("p",{className:"text-sm text-base-content/70",children:"Choose a theme for your chat interface"})]}),y.jsx("div",{className:"grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2",children:bV.map(n=>y.jsxs("button",{className:`
                group flex flex-col items-center gap-1.5 p-2 rounded-lg transition-colors
                ${t===n?"bg-base-200":"hover:bg-base-200/50"}
              `,onClick:()=>e(n),children:[y.jsx("div",{className:"relative h-8 w-full rounded-md overflow-hidden","data-theme":n,children:y.jsxs("div",{className:"absolute inset-0 grid grid-cols-4 gap-px p-1",children:[y.jsx("div",{className:"rounded bg-primary"}),y.jsx("div",{className:"rounded bg-secondary"}),y.jsx("div",{className:"rounded bg-accent"}),y.jsx("div",{className:"rounded bg-neutral"})]})}),y.jsx("span",{className:"text-[11px] font-medium truncate w-full text-center",children:n.charAt(0).toUpperCase()+n.slice(1)})]},n))}),y.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Preview"}),y.jsx("div",{className:"rounded-xl border border-base-300 overflow-hidden bg-base-100 shadow-lg",children:y.jsx("div",{className:"p-4 bg-base-200",children:y.jsx("div",{className:"max-w-lg mx-auto",children:y.jsxs("div",{className:"bg-base-100 rounded-xl shadow-sm overflow-hidden",children:[y.jsx("div",{className:"px-4 py-3 border-b border-base-300 bg-base-100",children:y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsx("div",{className:"w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-content font-medium",children:"J"}),y.jsxs("div",{children:[y.jsx("h3",{className:"font-medium text-sm",children:"John Doe"}),y.jsx("p",{className:"text-xs text-base-content/70",children:"Online"})]})]})}),y.jsx("div",{className:"p-4 space-y-4 min-h-[200px] max-h-[200px] overflow-y-auto bg-base-100",children:OV.map(n=>y.jsx("div",{className:`flex ${n.isSent?"justify-end":"justify-start"}`,children:y.jsxs("div",{className:`
                          max-w-[80%] rounded-xl p-3 shadow-sm
                          ${n.isSent?"bg-primary text-primary-content":"bg-base-200"}
                        `,children:[y.jsx("p",{className:"text-sm",children:n.content}),y.jsx("p",{className:`
                            text-[10px] mt-1.5
                            ${n.isSent?"text-primary-content/70":"text-base-content/70"}
                          `,children:"12:00 PM"})]})},n.id))}),y.jsx("div",{className:"p-4 border-t border-base-300 bg-base-100",children:y.jsxs("div",{className:"flex gap-2",children:[y.jsx("input",{type:"text",className:"input input-bordered flex-1 text-sm h-10",placeholder:"Type a message...",value:"This is a preview",readOnly:!0}),y.jsx("button",{className:"btn btn-primary h-10 min-h-0",children:y.jsx(K1,{size:18})})]})})]})})})})]})})},MV=()=>{const{authUser:t,isUpdatingProfile:e,updateProfile:n}=$t(),[r,i]=M.useState(null),s=async o=>{const l=o.target.files[0];if(!l)return;const u=new FileReader;u.readAsDataURL(l),u.onload=async()=>{const c=u.result;i(c),await n({photoURL:c})}};return y.jsx("div",{className:"h-screen pt-20",children:y.jsx("div",{className:"max-w-2xl mx-auto p-4 py-8",children:y.jsxs("div",{className:"bg-base-300 rounded-xl p-6 space-y-8",children:[y.jsxs("div",{className:"text-center",children:[y.jsx("h1",{className:"text-2xl font-semibold ",children:"Profile"}),y.jsx("p",{className:"mt-2",children:"Your profile information"})]}),y.jsxs("div",{className:"flex flex-col items-center gap-4",children:[y.jsxs("div",{className:"relative",children:[y.jsx("img",{src:r||t.photoURL||"/avatar.png",alt:"Profile",className:"size-32 rounded-full object-cover border-4 "}),y.jsxs("label",{htmlFor:"avatar-upload",className:`
                  absolute bottom-0 right-0 
                  bg-base-content hover:scale-105
                  p-2 rounded-full cursor-pointer 
                  transition-all duration-200
                  ${e?"animate-pulse pointer-events-none":""}
                `,children:[y.jsx(vV,{className:"w-5 h-5 text-base-200"}),y.jsx("input",{type:"file",id:"avatar-upload",className:"hidden",accept:"image/*",onChange:s,disabled:e})]})]}),y.jsx("p",{className:"text-sm text-zinc-400",children:e?"Uploading...":"Click the camera icon to update your photo"})]}),y.jsxs("div",{className:"space-y-6",children:[y.jsxs("div",{className:"space-y-1.5",children:[y.jsxs("div",{className:"text-sm text-zinc-400 flex items-center gap-2",children:[y.jsx(Op,{className:"w-4 h-4"}),"Full Name"]}),y.jsx("p",{className:"px-4 py-2.5 bg-base-200 rounded-lg border",children:t==null?void 0:t.displayName})]}),y.jsxs("div",{className:"space-y-1.5",children:[y.jsxs("div",{className:"text-sm text-zinc-400 flex items-center gap-2",children:[y.jsx(bp,{className:"w-4 h-4"}),"Email Address"]}),y.jsx("p",{className:"px-4 py-2.5 bg-base-200 rounded-lg border",children:t==null?void 0:t.email})]})]}),y.jsxs("div",{className:"mt-6 bg-base-300 rounded-xl p-6",children:[y.jsx("h2",{className:"text-lg font-medium  mb-4",children:"Account Information"}),y.jsxs("div",{className:"space-y-3 text-sm",children:[y.jsxs("div",{className:"flex items-center justify-between py-2 border-b border-zinc-700",children:[y.jsx("span",{children:"Member Since"}),y.jsx("span",{children:new Date(t.metadata.creationTime).toLocaleDateString()})]}),y.jsxs("div",{className:"flex items-center justify-between py-2",children:[y.jsx("span",{children:"Account Status"}),y.jsx("span",{className:"text-green-500",children:"Active"})]})]})]})]})})})},UV=()=>{const{authUser:t,checkAuth:e,isCheckingAuth:n,onlineUsers:r}=$t(),{theme:i}=Y1();return console.log({onlineUsers:r}),M.useEffect(()=>{e()},[e]),console.log({authUser:t}),n&&!t?y.jsx("div",{className:"flex items-center justify-center h-screen",children:y.jsx(wV,{className:"size-10 animate-spin"})}):y.jsxs("div",{"data-theme":i,children:[y.jsx(SV,{}),y.jsxs(qA,{children:[y.jsx(Ii,{path:"/",element:t?y.jsx(NV,{}):y.jsx(el,{to:"/login"})}),y.jsx(Ii,{path:"/signup",element:t?y.jsx(el,{to:"/"}):y.jsx(DV,{})}),y.jsx(Ii,{path:"/login",element:t?y.jsx(el,{to:"/"}):y.jsx(VV,{})}),y.jsx(Ii,{path:"/settings",element:y.jsx(LV,{})}),y.jsx(Ii,{path:"/profile",element:t?y.jsx(MV,{}):y.jsx(el,{to:"/login"})})]}),y.jsx(mV,{})]})};X0(document.getElementById("root")).render(y.jsx(M.StrictMode,{children:y.jsx(XA,{children:y.jsx(UV,{})})}));
