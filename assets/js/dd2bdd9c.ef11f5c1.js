/*! For license information please see dd2bdd9c.ef11f5c1.js.LICENSE.txt */
"use strict";(self.webpackChunkuilib_docs=self.webpackChunkuilib_docs||[]).push([[9569],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},940:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7378),r(3905));const i={id:"GridView",title:"GridView",sidebar_label:"GridView"},a=void 0,l={unversionedId:"components/layoutsAndTemplates/GridView",id:"components/layoutsAndTemplates/GridView",isDocsHomePage:!1,title:"GridView",description:"An auto-generated grid view that calculate item size according to given props",source:"@site/../docs/components/layoutsAndTemplates/GridView.md",sourceDirName:"components/layoutsAndTemplates",slug:"/components/layoutsAndTemplates/GridView",permalink:"/react-native-ui-lib/docs/components/layoutsAndTemplates/GridView",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/components/layoutsAndTemplates/GridView.md",tags:[],version:"current",frontMatter:{id:"GridView",title:"GridView",sidebar_label:"GridView"},sidebar:"tutorialSidebar",previous:{title:"GridListItem",permalink:"/react-native-ui-lib/docs/components/layoutsAndTemplates/GridListItem"},next:{title:"LoaderScreen",permalink:"/react-native-ui-lib/docs/components/layoutsAndTemplates/LoaderScreen"}},s=[{value:"Usage",id:"usage",children:[]},{value:"API",id:"api",children:[{value:"itemSpacing",id:"itemspacing",children:[]},{value:"items",id:"items",children:[]},{value:"keepItemSize",id:"keepitemsize",children:[]},{value:"lastItemLabel",id:"lastitemlabel",children:[]},{value:"lastItemOverlayColor",id:"lastitemoverlaycolor",children:[]},{value:"numColumns",id:"numcolumns",children:[]},{value:"renderCustomItem",id:"rendercustomitem",children:[]},{value:"viewWidth",id:"viewwidth",children:[]}]}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"An auto-generated grid view that calculate item size according to given props",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/GridViewScreen.tsx"},"(code example)")),(0,o.kt)("div",{style:{display:"flex",flexDirection:"row",overflowX:"auto",maxHeight:"500px",alignItems:"center"}}),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<GridView\n items={[{title: 'item 1', onPress: () => console.log('item 1 pressed')}, {title: 'item 2', onPress: () => console.log('item 2 pressed')}, ]}\n numColumns={2}\n lastItemLabel={'+'}\n lastItemOverlayColor={'Colors.rgba(Colors.blue30)'}\n/>\n")),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("h3",{id:"itemspacing"},"itemSpacing"),(0,o.kt)("p",null,"Spacing between each item",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,o.kt)("h3",{id:"items"},"items"),(0,o.kt)("p",null,"The list of items based on GridListItem props",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"GridListItemProps[] ")," "),(0,o.kt)("h3",{id:"keepitemsize"},"keepItemSize"),(0,o.kt)("p",null,"whether to keep the items initial size when orientation changes, in which case the apt number of columns will be calculated automatically.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,o.kt)("h3",{id:"lastitemlabel"},"lastItemLabel"),(0,o.kt)("p",null,"overlay label for the last item",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"string | number ")," "),(0,o.kt)("h3",{id:"lastitemoverlaycolor"},"lastItemOverlayColor"),(0,o.kt)("p",null,"color of overlay label for the last item",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,o.kt)("h3",{id:"numcolumns"},"numColumns"),(0,o.kt)("p",null,"Number of items to show in a row",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,o.kt)("h3",{id:"rendercustomitem"},"renderCustomItem"),(0,o.kt)("p",null,"Pass to render a custom item",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"(item: GridListItemProps) => React.ReactElement ")," "),(0,o.kt)("h3",{id:"viewwidth"},"viewWidth"),(0,o.kt)("p",null,"pass the desired grid view width (will improve loading time)",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"number ")))}u.isMDXComponent=!0},2525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var a,l,s=o(e),c=1;c<arguments.length;c++){for(var u in a=Object(arguments[c]))r.call(a,u)&&(s[u]=a[u]);if(t){l=t(a);for(var p=0;p<l.length;p++)n.call(a,l[p])&&(s[l[p]]=a[l[p]])}}return s}},1535:(e,t,r)=>{var n=r(2525),o=60103,i=60106;var a=60109,l=60110,s=60112;var c=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),i=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),a=p("react.provider"),l=p("react.context"),s=p("react.forward_ref"),p("react.suspense"),c=p("react.memo"),u=p("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function b(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||f}function h(){}function v(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||f}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=b.prototype;var g=v.prototype=new h;g.constructor=v,n(g,b.prototype),g.isPureReactComponent=!0;var w={current:null},k=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var n,i={},a=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(a=""+t.key),t)k.call(t,n)&&!O.hasOwnProperty(n)&&(i[n]=t[n]);var s=arguments.length-2;if(1===s)i.children=r;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===i[n]&&(i[n]=s[n]);return{$$typeof:o,type:e,key:a,ref:l,props:i,_owner:w.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,r,n,a){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case i:s=!0}}if(s)return a=a(s=e),e=""===n?"."+S(s,0):n,Array.isArray(a)?(r="",null!=e&&(r=e.replace(P,"$&/")+"/"),_(a,t,r,"",(function(e){return e}))):null!=a&&(C(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,r+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+e)),t.push(a)),1;if(s=0,n=""===n?".":n+":",Array.isArray(e))for(var c=0;c<e.length;c++){var u=n+S(l=e[c],c);s+=_(l,t,r,u,a)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),c=0;!(l=e.next()).done;)s+=_(l=l.value,t,r,u=n+S(l,c++),a);else if("object"===l)throw t=""+e,Error(m(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function N(e,t,r){if(null==e)return e;var n=[],o=0;return _(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function x(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var I={current:null};function G(){var e=I.current;if(null===e)throw Error(m(321));return e}},7378:(e,t,r)=>{r(1535)}}]);