/*! For license information please see 01cf4833.f34b6a63.js.LICENSE.txt */
"use strict";(self.webpackChunkuilib_docs=self.webpackChunkuilib_docs||[]).push([[8303],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,b=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(b,i(i({ref:t},s),{},{components:n})):r.createElement(b,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2615:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(7462),o=(n(7378),n(3905));const a={id:"ExpandableSection",title:"ExpandableSection",sidebar_label:"ExpandableSection"},i=void 0,c={unversionedId:"components/basic/ExpandableSection",id:"components/basic/ExpandableSection",isDocsHomePage:!1,title:"ExpandableSection",description:"Component to render expanded section below or above the SectionHeader",source:"@site/../docs/components/basic/ExpandableSection.md",sourceDirName:"components/basic",slug:"/components/basic/ExpandableSection",permalink:"/react-native-ui-lib/docs/components/basic/ExpandableSection",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/components/basic/ExpandableSection.md",tags:[],version:"current",frontMatter:{id:"ExpandableSection",title:"ExpandableSection",sidebar_label:"ExpandableSection"},sidebar:"tutorialSidebar",previous:{title:"Drawer",permalink:"/react-native-ui-lib/docs/components/basic/Drawer"},next:{title:"Icon",permalink:"/react-native-ui-lib/docs/components/basic/Icon"}},l=[{value:"Usage",id:"usage",children:[]},{value:"API",id:"api",children:[{value:"children",id:"children",children:[]},{value:"expanded",id:"expanded",children:[]},{value:"onPress",id:"onpress",children:[]},{value:"sectionHeader",id:"sectionheader",children:[]},{value:"top",id:"top",children:[]}]}],p={toc:l};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Component to render expanded section below or above the SectionHeader",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/ExpandableSectionScreen.tsx"},"(code example)")),(0,o.kt)("div",{style:{display:"flex",flexDirection:"row",overflowX:"auto",maxHeight:"500px",alignItems:"center"}},(0,o.kt)("img",{style:{maxHeight:"420px"},src:"https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/ExpandableSection/ExpandableSection.gif?raw=true"})),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<ExpandableSection\n top={true}\n expanded={false}\n sectionHeader={<Text grey10 text60>The section header</Text>}\n onPress={() => console.log('pressed')}\n>\n")),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("h3",{id:"children"},"children"),(0,o.kt)("p",null,"The expandable's children",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"React.ReactNode ")," "),(0,o.kt)("h3",{id:"expanded"},"expanded"),(0,o.kt)("p",null,"Should the ExpandableSection be expanded",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,o.kt)("h3",{id:"onpress"},"onPress"),(0,o.kt)("p",null,"Called when pressing the header of the ExpandableSection",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"() => void ")," "),(0,o.kt)("h3",{id:"sectionheader"},"sectionHeader"),(0,o.kt)("p",null,"Header element",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"JSX.Element ")," "),(0,o.kt)("h3",{id:"top"},"top"),(0,o.kt)("p",null,"Should it open above the 'sectionHeader'",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"boolean ")))}s.isMDXComponent=!0},2525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,c,l=o(e),p=1;p<arguments.length;p++){for(var s in i=Object(arguments[p]))n.call(i,s)&&(l[s]=i[s]);if(t){c=t(i);for(var u=0;u<c.length;u++)r.call(i,c[u])&&(l[c[u]]=i[c[u]])}}return l}},1535:(e,t,n)=>{var r=n(2525),o=60103,a=60106;var i=60109,c=60110,l=60112;var p=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;o=u("react.element"),a=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),i=u("react.provider"),c=u("react.context"),l=u("react.forward_ref"),u("react.suspense"),p=u("react.memo"),s=u("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function y(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||b}function h(){}function v(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||b}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=y.prototype;var g=v.prototype=new h;g.constructor=v,r(g,y.prototype),g.isPureReactComponent=!0;var k={current:null},x=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,n){var r,a={},i=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)x.call(t,r)&&!w.hasOwnProperty(r)&&(a[r]=t[r]);var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){for(var p=Array(l),s=0;s<l;s++)p[s]=arguments[s+2];a.children=p}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===a[r]&&(a[r]=l[r]);return{$$typeof:o,type:e,key:i,ref:c,props:a,_owner:k.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var j=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,n,r,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var l=!1;if(null===e)l=!0;else switch(c){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case a:l=!0}}if(l)return i=i(l=e),e=""===r?"."+E(l,0):r,Array.isArray(i)?(n="",null!=e&&(n=e.replace(j,"$&/")+"/"),P(i,t,n,"",(function(e){return e}))):null!=i&&(S(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(j,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=""===r?".":r+":",Array.isArray(e))for(var p=0;p<e.length;p++){var s=r+E(c=e[p],p);l+=P(c,t,n,s,i)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),p=0;!(c=e.next()).done;)l+=P(c=c.value,t,n,s=r+E(c,p++),i);else if("object"===c)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function _(e,t,n){if(null==e)return e;var r=[],o=0;return P(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function C(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var N={current:null};function T(){var e=N.current;if(null===e)throw Error(f(321));return e}},7378:(e,t,n)=>{n(1535)}}]);