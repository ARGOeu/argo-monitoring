"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[128],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var i=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),h=o,f=d["".concat(l,".").concat(h)]||d[h]||p[h]||n;return r?i.createElement(f,a(a({ref:t},u),{},{components:r})):i.createElement(f,a({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,a=new Array(n);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<n;c++)a[c]=r[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4128:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var i=r(7462),o=(r(7294),r(3905));const n={sidebar_position:2,title:"Monitoring Data in the Providers Portal"},a=void 0,s={unversionedId:"UseCases/ProvidersPortal",id:"UseCases/ProvidersPortal",title:"Monitoring Data in the Providers Portal",description:"The EOSC Providers Portal (https://providers.eosc-portal.eu/) is a single platform for providers to onboard their organization into EOSC portal, register and manage their resources and gain rich insights about their offerings in the catalogue. It also offers the Provider dashboard, where representatives from provider organizations have a detailed view on their offerings in the EOSC portal as well as various usage statistics on their resources.",source:"@site/docs/UseCases/ProvidersPortal.md",sourceDirName:"UseCases",slug:"/UseCases/ProvidersPortal",permalink:"/argo-monitoring/docs/UseCases/ProvidersPortal",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Monitoring Data in the Providers Portal"},sidebar:"tutorialSidebar",previous:{title:"Use Cases",permalink:"/argo-monitoring/docs/category/use-cases"},next:{title:"Communication",permalink:"/argo-monitoring/docs/category/communication"}},l={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The EOSC Providers Portal (",(0,o.kt)("a",{parentName:"p",href:"https://providers.eosc-portal.eu/"},"https://providers.eosc-portal.eu/"),") is a single platform for providers to onboard their organization into EOSC portal, register and manage their resources and gain rich insights about their offerings in the catalogue. It also offers the Provider dashboard, where representatives from provider organizations have a detailed view on their offerings in the EOSC portal as well as various usage statistics on their resources. "),(0,o.kt)("p",null,"EOSC Monitoring (",(0,o.kt)("a",{parentName:"p",href:"https://monitoring.eosc-portal.eu/"},"https://monitoring.eosc-portal.eu/"),") is the key service needed to gain insights into the Resources Onboarded in EOSC. It is continuous and on-demand to quickly detect, correlate, and analyse data for a fast reaction to anomalous behaviour. EOSC Monitoring continuously checks the service so\xa0\xa0\u2028"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Providers can have a more reliable service with better availability\xa0"),(0,o.kt)("li",{parentName:"ul"},"Users select the service without facing unexpected service errors.\xa0")),(0,o.kt)("p",null,"The EOSC Providers Portal is integrated with the EOSC Monitoring  and it allows Providers to specify monitoring aspects for their resources, whilst at the same time it presents monitoring statistics. From the techical point of view the EOSC Monitoring API is used to fetch information about the availability and reliability of the services. Each service has a unique id in the EOSC ecosystem and this supports the integration of both systems, as it is used as a unique identifier in both systems. The EOSC Monitoring API offers the latest availability/reliability results either in a daily or a monthly basis. "),(0,o.kt)("p",null,"Providers Portal uses Monitoring data to display a diagram for each service as you can see in the example below."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Argo Monitoring Service",src:r(4537).Z,width:"1717",height:"873"})),(0,o.kt)("p",null,"The display of the monitoring data help Providers\xa0to: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u0399ncrease customer satisfaction"),(0,o.kt)("li",{parentName:"ul"},"Diagnose and prevent internal , or user related issues"),(0,o.kt)("li",{parentName:"ul"},"build trust with the end users or potential new customer")))}p.isMDXComponent=!0},4537:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/Providers_Portal_usecase-080c780c1449434197193dbe3f58d3f5.png"}}]);