/*! For license information please see 4353c836.d4c5fe68.js.LICENSE.txt */
"use strict";(self.webpackChunkuilib_docs=self.webpackChunkuilib_docs||[]).push([[326],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4635:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7378),r(3905));const o={id:"Image",title:"Image",sidebar_label:"Image"},i=void 0,s={unversionedId:"components/basic/Image",id:"components/basic/Image",isDocsHomePage:!1,title:"Image",description:"Image wrapper with extra functionality like source transform and assets support",source:"@site/../docs/components/basic/Image.md",sourceDirName:"components/basic",slug:"/components/basic/Image",permalink:"/react-native-ui-lib/docs/components/basic/Image",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/components/basic/Image.md",tags:[],version:"current",frontMatter:{id:"Image",title:"Image",sidebar_label:"Image"},sidebar:"tutorialSidebar",previous:{title:"Icon",permalink:"/react-native-ui-lib/docs/components/basic/Icon"},next:{title:"ListItem",permalink:"/react-native-ui-lib/docs/components/basic/ListItem/ListItem"}},c=[{value:"Usage",id:"usage",children:[]},{value:"API",id:"api",children:[{value:"aspectRatio",id:"aspectratio",children:[]},{value:"assetGroup",id:"assetgroup",children:[]},{value:"assetName",id:"assetname",children:[]},{value:"cover",id:"cover",children:[]},{value:"customOverlayContent",id:"customoverlaycontent",children:[]},{value:"errorSource",id:"errorsource",children:[]},{value:"imageId",id:"imageid",children:[]},{value:"overlayColor",id:"overlaycolor",children:[]},{value:"overlayIntensity",id:"overlayintensity",children:[]},{value:"overlayType",id:"overlaytype",children:[]},{value:"sourceTransformer",id:"sourcetransformer",children:[]},{value:"supportRTL",id:"supportrtl",children:[]},{value:"tintColor",id:"tintcolor",children:[]}]}],l={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Image wrapper with extra functionality like source transform and assets support",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/ImageScreen.tsx"},"(code example)")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This component extends ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://reactnative.dev/docs/image"},"Image"))," props."))),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This component support ",(0,a.kt)("strong",{parentName:"p"},"margin")," modifiers."))),(0,a.kt)("div",{style:{display:"flex",flexDirection:"row",overflowX:"auto",maxHeight:"500px",alignItems:"center"}}),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<Image source={{uri: https://github.com/wix/react-native-ui-lib/blob/master/demo/src/assets/images/card-example.jpg}}/>\n")),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"aspectratio"},"aspectRatio"),(0,a.kt)("p",null,"The aspect ratio for the image",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,a.kt)("h3",{id:"assetgroup"},"assetGroup"),(0,a.kt)("p",null,"the asset group, default is icons",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,a.kt)("h3",{id:"assetname"},"assetName"),(0,a.kt)("p",null,"if provided image source will be driven from asset name",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,a.kt)("h3",{id:"cover"},"cover"),(0,a.kt)("p",null,"Show image as a cover, full width, image (according to aspect ratio, default: 16:8)",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,a.kt)("h3",{id:"customoverlaycontent"},"customOverlayContent"),(0,a.kt)("p",null,"Render an overlay with custom content",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"JSX.Element ")," "),(0,a.kt)("h3",{id:"errorsource"},"errorSource"),(0,a.kt)("p",null,"Default image source in case of an error",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"ImageSourcePropType ")," "),(0,a.kt)("h3",{id:"imageid"},"imageId"),(0,a.kt)("p",null,"An imageId that can be used in sourceTransformer logic",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,a.kt)("h3",{id:"overlaycolor"},"overlayColor"),(0,a.kt)("p",null,"Pass a custom color for the overlay",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,a.kt)("h3",{id:"overlayintensity"},"overlayIntensity"),(0,a.kt)("p",null,"OverlayIntensityType",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"LOW | MEDIUM | HIGH ")," "),(0,a.kt)("h3",{id:"overlaytype"},"overlayType"),(0,a.kt)("p",null,"The type of overlay to place on top of the image.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"VERTICAL | TOP | BOTTOM | SOLID ")," "),(0,a.kt)("h3",{id:"sourcetransformer"},"sourceTransformer"),(0,a.kt)("p",null,"custom source transform handler for manipulating the image source (great for size control)",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"(props: any) => ImageSourcePropType ")," "),(0,a.kt)("h3",{id:"supportrtl"},"supportRTL"),(0,a.kt)("p",null,"whether the image should flip horizontally on RTL locals",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,a.kt)("h3",{id:"tintcolor"},"tintColor"),(0,a.kt)("p",null,"the asset tint",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"string ")))}p.isMDXComponent=!0},2525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var i,s,c=a(e),l=1;l<arguments.length;l++){for(var p in i=Object(arguments[l]))r.call(i,p)&&(c[p]=i[p]);if(t){s=t(i);for(var u=0;u<s.length;u++)n.call(i,s[u])&&(c[s[u]]=i[s[u]])}}return c}},1535:(e,t,r)=>{var n=r(2525),a=60103,o=60106;var i=60109,s=60110,c=60112;var l=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;a=u("react.element"),o=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),i=u("react.provider"),s=u("react.context"),c=u("react.forward_ref"),u("react.suspense"),l=u("react.memo"),p=u("react.lazy")}var m="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function h(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||f}function y(){}function g(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||f}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=h.prototype;var b=g.prototype=new y;b.constructor=g,n(b,h.prototype),b.isPureReactComponent=!0;var k={current:null},w=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,r){var n,o={},i=null,s=null;if(null!=t)for(n in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,n)&&!N.hasOwnProperty(n)&&(o[n]=t[n]);var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){for(var l=Array(c),p=0;p<c;p++)l[p]=arguments[p+2];o.children=l}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===o[n]&&(o[n]=c[n]);return{$$typeof:a,type:e,key:i,ref:s,props:o,_owner:k.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var I=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function x(e,t,r,n,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case a:case o:c=!0}}if(c)return i=i(c=e),e=""===n?"."+C(c,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(I,"$&/")+"/"),x(i,t,r,"",(function(e){return e}))):null!=i&&(j(i)&&(i=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(I,"$&/")+"/")+e)),t.push(i)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var l=0;l<e.length;l++){var p=n+C(s=e[l],l);c+=x(s,t,r,p,i)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),l=0;!(s=e.next()).done;)c+=x(s=s.value,t,r,p=n+C(s,l++),i);else if("object"===s)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function S(e,t,r){if(null==e)return e;var n=[],a=0;return x(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function P(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var T={current:null};function _(){var e=T.current;if(null===e)throw Error(d(321));return e}},7378:(e,t,r)=>{r(1535)}}]);