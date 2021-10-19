"use strict";(self.webpackChunkargo_monitoring=self.webpackChunkargo_monitoring||[]).push([[46],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var i=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=i.createContext({}),l=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=l(r),m=o,d=g["".concat(c,".").concat(m)]||g[m]||u[m]||n;return r?i.createElement(d,a(a({ref:t},p),{},{components:r})):i.createElement(d,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,a=new Array(n);a[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<n;l++)a[l]=r[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}g.displayName="MDXCreateElement"},7173:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return g}});var i=r(7462),o=r(3366),n=(r(7294),r(3905)),a=["components"],s={sidebar_position:1,title:"Monitoring guide for Service Providers"},c=void 0,l={unversionedId:"Monitoring/SP_guide",id:"Monitoring/SP_guide",isDocsHomePage:!1,title:"Monitoring guide for Service Providers",description:"Overview",source:"@site/docs/Monitoring/SP_guide.md",sourceDirName:"Monitoring",slug:"/Monitoring/SP_guide",permalink:"/argo-monitoring/docs/Monitoring/SP_guide",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Monitoring guide for Service Providers"},sidebar:"tutorialSidebar",previous:{title:"Topology",permalink:"/argo-monitoring/docs/InformationFeeds/topology"},next:{title:"Guidelines for monitoring probes",permalink:"/argo-monitoring/docs/Monitoring/guidelines"}},p=[{value:"Overview",id:"overview",children:[]},{value:"Topology",id:"topology",children:[{value:"Topology information",id:"topology-information",children:[]}]},{value:"Metrics &amp; probes",id:"metrics--probes",children:[{value:"Service probe",id:"service-probe",children:[]}]},{value:"Setting up service monitoring",id:"setting-up-service-monitoring",children:[]}],u={toc:p};function g(e){var t=e.components,s=(0,o.Z)(e,a);return(0,n.kt)("wrapper",(0,i.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"The ARGO Monitoring service provides a flexible and scalable framework for monitoring status, availability and reliability of a wide range of services provided by infrastructures with medium to high complexity. ARGO generates reports using customer defined profiles (e.g. for SLA management, operations, etc.). During the report generation, ARGO takes into account custom factors such as the importance of a specific service endpoint and scheduled or unscheduled downtimes."),(0,n.kt)("h2",{id:"topology"},"Topology"),(0,n.kt)("p",null,"Topology database is actually a central registry for e-Infrastructure topology. "),(0,n.kt)("h3",{id:"topology-information"},"Topology information"),(0,n.kt)("p",null,"Monitoring service relies on topology database to provide the following information:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the ",(0,n.kt)("strong",{parentName:"li"},"monitored service(s)"),","),(0,n.kt)("li",{parentName:"ul"},"the ",(0,n.kt)("strong",{parentName:"li"},"service types")," they are running (e.g. wiki),"),(0,n.kt)("li",{parentName:"ul"},"the ",(0,n.kt)("strong",{parentName:"li"},"service endpoints")," of the service (e.g. endpoint),"),(0,n.kt)("li",{parentName:"ul"},"the ",(0,n.kt)("strong",{parentName:"li"},"way they are organized")," (e.g. in groups of sites, in groups of services),"),(0,n.kt)("li",{parentName:"ul"},"the ",(0,n.kt)("strong",{parentName:"li"},"service actors")," (owners, admins, contact points).")),(0,n.kt)("h2",{id:"metrics--probes"},"Metrics & probes"),(0,n.kt)("p",null,"A metric is a procedure that checks specific functionality of a given service, i.e. a single measurement. For example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://poem.argo.grnet.gr/ui/public_metrictemplates/org.nagios.WebCheck"},"org.nagios.WebCheck"),": checks the http if it responds;"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://poem.argo.grnet.gr/ui/public_metrictemplates/eu.egi.CertValidity"},"eu.egi.CertValidity"),": checks the validity of a certificate.")),(0,n.kt)("h3",{id:"service-probe"},"Service probe"),(0,n.kt)("p",null,"Probe is piece of code which implements single or multiple tests. All the probes intended to be used for monitoring must comply with the ",(0,n.kt)("a",{parentName:"p",href:"/argo-monitoring/docs/Monitoring/guidelines"},"guidelines for monitoring probes"),"."),(0,n.kt)("p",null,"The owners of the service are the ones that ",(0,n.kt)("strong",{parentName:"p"},"know exactly how the service is working"),". The service development team with the support of the monitoring team is responsible to implement the probe that checks and at the same time mimics the actual end user behaviour without requiring special privileges or special configurations."),(0,n.kt)("p",null,"Before you start implementing your probe, please check in the ",(0,n.kt)("a",{parentName:"p",href:"https://poem.argo.grnet.gr/ui/public_probes"},"POEM library")," if appropriate probe is already used for monitoring services."),(0,n.kt)("h2",{id:"setting-up-service-monitoring"},"Setting up service monitoring"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(22).Z})))}g.isMDXComponent=!0},22:function(e,t,r){t.Z=r.p+"assets/images/flowchart-cd8414acd3acdd48a1b98299bb09675e.png"}}]);