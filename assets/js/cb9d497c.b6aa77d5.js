"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[334],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var o=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=i,m=u["".concat(c,".").concat(d)]||u[d]||f[d]||n;return r?o.createElement(m,a(a({ref:t},p),{},{components:r})):o.createElement(m,a({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,a=new Array(n);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<n;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6769:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var o=r(7462),i=(r(7294),r(3905));const n={sidebar_position:4,title:"Metrics Profile"},a=void 0,s={unversionedId:"profiles/metrics-profile",id:"profiles/metrics-profile",title:"Metrics Profile",description:"Description",source:"@site/docs/profiles/metrics-profile.md",sourceDirName:"profiles",slug:"/profiles/metrics-profile",permalink:"/argo-monitoring/docs/profiles/metrics-profile",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Metrics Profile"},sidebar:"tutorialSidebar",previous:{title:"Threshold Profile",permalink:"/argo-monitoring/docs/profiles/thresholds-profile"},next:{title:"Metrics Tags",permalink:"/argo-monitoring/docs/profiles/metrics-tags"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Example 1  - Metrics Profile for a Site service:",id:"example-1----metrics-profile-for-a-site-service",level:5},{value:"Example 2  - Metrics Profile for a Repository service:",id:"example-2----metrics-profile-for-a-repository-service",level:4}],p={toc:l};function f(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"An infrastructure may offer various services. These services need to be checked periodically in order to decide their operational state. The various functionalities of a given service are checked by metrics (a chunk of code). For example a metric such as Web-Site.Portal-WebCheck runs on a site and checks if the http connection responds or not. The results of the metrics are computed, into ARGO Monitoring Service calculations, in order to conclude into the operational state of the service, during a specific period.\nIn order to conclude about the operational state of the service, all or part of the metrics that check the service\u2019s functionality should be taken into account. In Metrics Profiles are included, for each service, these metrics whose results are considered to the computations of the service\u2019s state."),(0,i.kt)("h5",{id:"example-1----metrics-profile-for-a-site-service"},"Example 1  - Metrics Profile for a Site service:"),(0,i.kt)("p",null,"A service of type Site runs on host1.example.com. The Site service should operate properly, be accessible and some actions should be available such as downloading or uploading material (documents, images etc).\nThree metrics can apply on the service to check it\u2019s functionalities:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Portal-WebCheck")," is a metric to check if the http responds"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"http.download")," is a metric to check if download functionality operates well"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"http.upload")," is a metric to check if upload functionality operates well")),(0,i.kt)("p",null,"The  site is assumed to operate properly if it is accessible and can support downloading material. Uploading material does not affect the state of the service (whether it is working properly or not). So in the Metrics Profile, the metrics ",(0,i.kt)("strong",{parentName:"p"},"Portal-WebCheck")," and ",(0,i.kt)("strong",{parentName:"p"},"http.download")," will be defined in order to be taken into account for concluding the status of the Site."),(0,i.kt)("h4",{id:"example-2----metrics-profile-for-a-repository-service"},"Example 2  - Metrics Profile for a Repository service:"),(0,i.kt)("p",null,"A service of type Repository runs on host2.example.com. The repository is considered to operate properly if it is accessible and validates the provided certificates. Two metrics can apply on the service to check it\u2019s functionalities:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Portal-WebCheck")," is a metric to check if the http responds"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"CertValidity")," is a metric to check if the certification is valid")),(0,i.kt)("p",null,"In order to conclude the operational state of the repository  both functionalities should operate properly. So in the Metrics Profile both metrics will be defined in order to be taken into account for concluding the status of the Repository."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The above examples could be represented by the following Metrics Profile definition:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"services": [\n               {\n                   "service": "WEB-SITE",\n                   "metrics": [\n                       "http.download",\n                       "Portal-WebCheck"\n                   ]\n               },\n               {\n                   "service": "www.example-repository.com",\n                   "metrics": [\n                       "Portal-WebCheck",\n                       "CertValidity"\n                   ]\n               }\n      ]\n')))}f.isMDXComponent=!0}}]);