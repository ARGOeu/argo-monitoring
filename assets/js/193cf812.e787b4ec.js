"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[355],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>h});var r=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,o=function(e,t){if(null==e)return{};var i,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var i=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(i),h=o,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||n;return i?r.createElement(m,a(a({ref:t},u),{},{components:i})):r.createElement(m,a({ref:t},u))}));function h(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=i.length,a=new Array(n);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<n;c++)a[c]=i[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}d.displayName="MDXCreateElement"},6999:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var r=i(7462),o=(i(7294),i(3905));const n={sidebar_position:1,title:"Introduction"},a=void 0,s={unversionedId:"guides/intro",id:"guides/intro",title:"Introduction",description:"Monitoring is the key service needed to gain insights into an infrastructure. It needs to be continuous and on-demand to quickly detect, correlate, and analyse data for a fast reaction to anomalous behaviour. The challenge of this type of monitoring is how to quickly identify and correlate problems before they affect end-users and ultimately the productivity of the organisation. Management teams can monitor the availability and reliability of the services from a high level view down to individual system metrics and monitor the conformance of multiple SLAs.  The key functional requirements are:",source:"@site/docs/guides/intro.md",sourceDirName:"guides",slug:"/guides/intro",permalink:"/argo-monitoring/docs/guides/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Introduction"},sidebar:"tutorialSidebar",previous:{title:"Guides",permalink:"/argo-monitoring/docs/category/guides"},next:{title:"Use Case 1: Monitor an Onboarded Service (central one)",permalink:"/argo-monitoring/docs/guides/case1"}},l={},c=[{value:"High-level Service Reference Architecture",id:"high-level-service-reference-architecture",level:2},{value:"Definitions",id:"definitions",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Monitoring is the key service needed to gain insights into an infrastructure. It needs to be continuous and on-demand to quickly detect, correlate, and analyse data for a fast reaction to anomalous behaviour. The challenge of this type of monitoring is how to quickly identify and correlate problems before they affect end-users and ultimately the productivity of the organisation. Management teams can monitor the availability and reliability of the services from a high level view down to individual system metrics and monitor the conformance of multiple SLAs.  The key functional requirements are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Monitoring of services"),(0,o.kt)("li",{parentName:"ul"},"Reporting availability and reliability,"),(0,o.kt)("li",{parentName:"ul"},"Visualisation of the services status, "),(0,o.kt)("li",{parentName:"ul"},"Provide dashboard interfaces,"),(0,o.kt)("li",{parentName:"ul"},"Sending real-time alerts. ")),(0,o.kt)("p",null,"The dashboard design should enable easy access and visualisation of data for end-users. APIs should also be supported so as to allow third parties to gather monitoring data from the system through them."),(0,o.kt)("p",null,"The key requirements of a monitoring system are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Support for multiple entry points (different types of systems can work together)"),(0,o.kt)("li",{parentName:"ul"},"Interoperable "),(0,o.kt)("li",{parentName:"ul"},"High availability of the different components of the system"),(0,o.kt)("li",{parentName:"ul"},"Loosely coupled: support API's in the full stack so that components are independent in their development cycles"),(0,o.kt)("li",{parentName:"ul"},"Support for Multiple Tenants, Configurations, Metrics and profiles to add flexibility and ease of customisation.  ")),(0,o.kt)("p",null,"For EOSC there are two monitoring services already in place: EOSC CORE and the EOSC Exchange Monitoring Service. These two services are responsible to monitor the Core services (EOSC Core Monitoring) and the services onboarded to the Marketplace (EOSC-Exchange Monitoring)."),(0,o.kt)("h2",{id:"high-level-service-reference-architecture"},"High-level Service Reference Architecture"),(0,o.kt)("p",null,"The service collects status (metrics) results from one or more monitoring engine(es) and delivers daily and/or monthly availability (A) and reliability (R) results of distributed services. Both status results and A/R metrics are presented through a Web UI, with the ability for a user to drill-down from the availability of a site to individual test results that contributed to the computed figure."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Architecture",src:i(1242).Z,width:"952",height:"765"})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Figure 1","."," High level architecture of a Monitoring service")," "),(0,o.kt)("p",null,"The main components of a monitoring service are depicted in the high-level architecture diagram and described below. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Monitoring Engine(s):")," This service component executes the service checks against the infrastructure and delivers the metric data (probe check results) to the Messaging Service. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Sources of Truth:"),"  The Monitoring system should support a number of connector plugins that are able to fetch topology, Metrics and Factors  from various sources such as the CMDB and the Providers Portal.  It also offers a Metric and Profile Management Component which is used in order to define checks (probes) and associate them to service types. Each grouping of checks and service types forms a profile. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Messaging:"),"  The monitoring system depends on a Pub/Sub Messaging Service to be in place, in order to facilitate the communication between its components."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Computations & Analytics:")," This component of the system should include computational job definitions for ingesting data, calculating status and availability/reliability and a management service to automatically configure, deploy and execute those jobs on a distributed processing engine for stateful computations. At the same time this component analyzes the monitoring results and sends notifications based on a set of rules, to inform the users (operators, NGIs) about the status of their services. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"WEB API:")," Rest-like HTTP API service that provides access to status and availability/reliability results. It supports token based authentication and authorization with established roles. Results are provided in JSON Format. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"WEB UI:"),' The Web UI is the component used to store, consolidate and "feed" data into the web application. The global information from the primary and heterogeneous data sources  is retrieved by means of the different plugins. The collected information is structured and organized within configuration files in the service and, finally, made available to the web application without the need for any further computations. This modular architecture is conceived in order to make it easy to add new data sources and to use cached information if a primary source is unavailable. The resulting data is exposed through a ',(0,o.kt)("a",{parentName:"p",href:"http://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm"},"RESTful")," web service interface."),(0,o.kt)("h2",{id:"definitions"},"Definitions"),(0,o.kt)("p",null,"In this section we explain the basic concepts of EOSC Monitoring."),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"Tenant")," is an isolated instance of the ARGO Monitor service that relies on common components and provides the  user with its own environment. "),(0,o.kt)("p",null,"ARGO provides default ",(0,o.kt)("strong",{parentName:"p"},"UI and POEM URLs")," in following form:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"UI: ",(0,o.kt)("inlineCode",{parentName:"li"},"https://<tenant_name>.ui.argo.grnet.gr")),(0,o.kt)("li",{parentName:"ul"},"POEM: ",(0,o.kt)("inlineCode",{parentName:"li"},"https://<tenant_name>.ui.argo.grnet.gr"))),(0,o.kt)("p",null,"In case custom ones are to be used, the customer is responsible for providing valid certificates and DNS aliases."),(0,o.kt)("p",null,"ARGO Monitoring service requires following ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/argo-monitoring/docs/information_feeds/topology"},"topology"))," information in order to monitor services:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the services and service endpoints they are running,"),(0,o.kt)("li",{parentName:"ul"},"the way they are organised (e.g. groups of sites, groups of services),"),(0,o.kt)("li",{parentName:"ul"},"the service actors (owners, admins, contact points).")),(0,o.kt)("p",null,"Topology can be further extended with attributes needed for individual probes (e.g. service port or URL, path to be used in case of storage services, e.g.)."),(0,o.kt)("p",null,"Supported topology sources are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"EOSC Resource Registry (Providers Portal): ")),(0,o.kt)("p",null,"Need to be extended to hold the following information for Monitoring."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Service unique Id")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"the service endpoints,")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"the way they are organised (service, service components),")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"the service actors (owners, admins, contact points).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"EGI Configuration Database (GOCDB) ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"EUDAT DPMT")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"JSON feed in the predefined format."))),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"Metric")," is a chunk of code that checks specific functionality of a given service. For example a metric such as Portal-WebCheck runs on a site and checks if the HTTP connection responds correctly  or not. "),(0,o.kt)("p",null,"A Probe is a piece of code that implements single or multiple tests. The probe must comply with ",(0,o.kt)("a",{parentName:"p",href:"/argo-monitoring/docs/monitoring/guidelines"},"the guidelines for monitoring probes"),". "),(0,o.kt)("p",null,"ARGO provides a registry of probes and metrics. New probes and metrics can be added to the registry with the support of the ARGO monitoring team."),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/argo-monitoring/docs/profiles/metrics-profile"},"Metric Profile"))," is used to associate a Service with the corresponding metrics."),(0,o.kt)("p",null,"An ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/argo-monitoring/docs/profiles/aggregation-profile"},"Aggregation Profile"))," defines how to aggregate service statuses into higher hierarchical grouping (i.e. a service","_","group) status results. They are actually used to define logical rules on how to aggregate individual service status computations into groups."),(0,o.kt)("p",null,"The results of the metrics are computed, into EOSC Monitoring Service calculations, in order to conclude into the operational state of the service, during a specific period. In order to conclude about the operational state of the service, all or part of the metrics that check the service's functionality should be taken into account. In Metrics Profiles are included, for each service, these metrics whose results are considered to the computations of the service's state. For example, a service WebSite runs on host1.example.com. The WebSite service should operate properly, be accessible and some actions should be available such as downloading or uploading material (documents, images etc). Three metrics can apply on the service to check it's functionalities:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Portal-WebCheck is a metric to check if the http responds"),(0,o.kt)("li",{parentName:"ul"},"http.download is a metric to check if download functionality operates well"),(0,o.kt)("li",{parentName:"ul"},"http.upload is a metric to check if upload functionality operates well")),(0,o.kt)("p",null,"The service is assumed to operate properly if it is accessible and can support downloading material. Uploading material does not affect the state of the service (whether it is working properly or not). So in the Metrics Profile, the metrics Portal-WebCheck and http.download will be defined in order to be taken into account for concluding the status of the service."),(0,o.kt)("p",null,"Adopted Standards"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"REST (",(0,o.kt)("a",{parentName:"li",href:"https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm"},"https://www.ics.uci.edu/~fielding/pubs/"),")"),(0,o.kt)("li",{parentName:"ul"},"SAML2 (",(0,o.kt)("a",{parentName:"li",href:"https://wiki.oasis-open.org/security/FrontPage"},"https://wiki.oasis-open.org/security/FrontPage"),")"),(0,o.kt)("li",{parentName:"ul"},"X509 (",(0,o.kt)("a",{parentName:"li",href:"https://www.rfc-editor.org/info/rfc5280"},"https://www.rfc-editor.org/info/rfc5280"),")"),(0,o.kt)("li",{parentName:"ul"},"Apache Avro (",(0,o.kt)("a",{parentName:"li",href:"http://avro.apache.org/"},"http://avro.apache.org/"),")")),(0,o.kt)("p",null,"Adopted Protocols"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"HTTPS  (",(0,o.kt)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc2818"},"https://tools.ietf.org/html/rfc2818"),")"),(0,o.kt)("li",{parentName:"ul"},"Nagios Plugin API (",(0,o.kt)("a",{parentName:"li",href:"https://nagios-plugins.org/doc/guidelines.html"},"https://nagios-plugins.org/doc/guidelines.html"),")"),(0,o.kt)("li",{parentName:"ul"},"ARGO API over REST API (",(0,o.kt)("a",{parentName:"li",href:"http://argoeu.github.io/guides/api/"},"http://argoeu.github.io/guides/api/"),")")))}p.isMDXComponent=!0},1242:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/architecture-a66d2793f3e6fc0cd5b39bfc25c0dfdb.png"}}]);