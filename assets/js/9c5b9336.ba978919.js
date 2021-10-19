"use strict";(self.webpackChunkargo_monitoring=self.webpackChunkargo_monitoring||[]).push([[896],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=l(r),d=o,h=f["".concat(s,".").concat(d)]||f[d]||u[d]||i;return r?n.createElement(h,c(c({ref:t},p),{},{components:r})):n.createElement(h,c({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7548:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),c=["components"],a={sidebar_position:4,title:"Metrics Profile"},s=void 0,l={unversionedId:"Profiles/metrics-profile",id:"Profiles/metrics-profile",isDocsHomePage:!1,title:"Metrics Profile",description:"Description",source:"@site/docs/Profiles/metrics-profile.md",sourceDirName:"Profiles",slug:"/Profiles/metrics-profile",permalink:"/argo-monitoring/docs/Profiles/metrics-profile",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Metrics Profile"},sidebar:"tutorialSidebar",previous:{title:"Threshold Profile",permalink:"/argo-monitoring/docs/Profiles/thresholds-profile"},next:{title:"Status Timelines & A/R Results",permalink:"/argo-monitoring/docs/Reports/timelines_&_ar"}},p=[{value:"Description",id:"description",children:[]}],u={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"An infrastructure may offer various services. These services need to be checked periodically in order to decide their operational state. The various functionalities of a given service are checked by metrics (a chunk of code) and the results of the metrics are computed in order to conclude into the operations state of the service during a specific period.   "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"e.x  Web-Site.Portal-WebCheck  checks if the http connection responds or not.")),(0,i.kt)("p",null,"A client can define, through POEM API,  the metrics that will be included in the calculations in order to decide the service operational state, in the Metrics Profile.  During the calculations of the Argo Monitoring Service the Metrics Profile information is retrieved and only the defined metric results are taken into account to decide the service state. "),(0,i.kt)("h5",{id:"example-1-"},"Example 1 :"),(0,i.kt)("p",null,"A service of type Site runs on  host1.example.com. Three metrics can apply on the service to decide it\u2019s operational status :\n",(0,i.kt)("strong",{parentName:"p"},"Portal-WebCheck")," to check if  the http responds\n",(0,i.kt)("strong",{parentName:"p"},"http.download")," to check if download functionality operates well\n",(0,i.kt)("strong",{parentName:"p"},"http.upload")," to check if upload functionality operates well. "),(0,i.kt)("p",null,"In the Metrics Profile for the specific service , the metrics  http.download and http.upload are defined as associated metrics, so only the results of these checks will be considered by the argo monitoring service  to the calculations"),(0,i.kt)("h4",{id:"example-2"},"Example 2:"),(0,i.kt)("p",null,"A service of type Repository runs on  host2.example.com. Two metrics can apply on the service to decide it\u2019s operational status :\n",(0,i.kt)("strong",{parentName:"p"},"Portal-WebCheck")," to check if the http responds\n",(0,i.kt)("strong",{parentName:"p"},"CertValidity")," to check if the certification is valid. "),(0,i.kt)("p",null,"In the Metrics Profile for the specific service , both  metric are defined, so both metric results  will be considered by the argo monitoring service  to the calculations"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"services": [\n               {\n                   "service": "WEB-SITE",\n                   "metrics": [\n                       "http.download",\n                       "http.upload"\n                   ]\n               },\n               {\n                   "service": "www.example-repository.com",\n                   "metrics": [\n                       "Portal-WebCheck",\n                       "CertValidity"\n                   ]\n               }\n      ]\n')))}f.isMDXComponent=!0}}]);