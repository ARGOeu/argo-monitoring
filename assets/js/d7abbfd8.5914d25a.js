"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3786],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),h=n,g=m["".concat(l,".").concat(h)]||m[h]||u[h]||a;return r?o.createElement(g,i(i({ref:t},c),{},{components:r})):o.createElement(g,i({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9380:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:1,title:"Topology"},i=void 0,s={unversionedId:"information_feeds/topology",id:"information_feeds/topology",title:"Topology",description:"One of the main sources of truth used in the Monitoring Service is the topology. It helps to discover and map relationships between services / resources. Via the topology the owner may have in-depth visibility into the infrastructure, by enabling the Monitoring Service to categorize, classify, and finally monitor the services in it.",source:"@site/docs/information_feeds/topology.md",sourceDirName:"information_feeds",slug:"/information_feeds/topology",permalink:"/argo-monitoring/docs/information_feeds/topology",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Topology"},sidebar:"tutorialSidebar",previous:{title:"Information Feeds",permalink:"/argo-monitoring/docs/category/information-feeds"},next:{title:"Downtimes",permalink:"/argo-monitoring/docs/information_feeds/downtimes"}},l={},p=[{value:"Examples",id:"examples",level:2},{value:"Example 1: Monitoring the services of a Project- The topology:",id:"example-1-monitoring-the-services-of-a-project--the-topology",level:3},{value:"Example 2: Monitoring the services of 1 or more Organisations - The topology:",id:"example-2-monitoring-the-services-of-1-or-more-organisations---the-topology",level:3}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"One of the main sources of truth used in the Monitoring Service is the topology. It helps to discover and map relationships between services / resources. Via the topology the owner may have in-depth visibility into the infrastructure, by enabling the Monitoring Service to categorize, classify, and finally monitor the services in it. "),(0,n.kt)("p",null,"Topology includes all the necessary information about how an infrastructure is structured and organized.  ARGO Monitoring Service via the connectors (components used to connect to well known Configuration Databases (DPMT, GOCDB, csv files, json) retrieves information about the infrastructure, the hierarchy of the services that will be monitored, and  the service owners."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Topology information includes :")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the monitored services"),(0,n.kt)("li",{parentName:"ul"},"the way they are organized  (ex. in groups of sites, in groups of services, in projects). The Service can model different types of infrastructure architectures"),(0,n.kt)("li",{parentName:"ul"},"the service actors (owners, admins)")),(0,n.kt)("p",null,"The ways the services are organized (sites, services, projects)  can be part of a bigger structure, that gathers a number of groups. "),(0,n.kt)("p",null,"Organisations offer services that can be grouped based on the location (SITES), or based on the project they are used by (PROJECT) . This can be one more level to the topology hierarchy. The topology should also provide information about this bigger group, it's type and the services it contains."),(0,n.kt)("p",null,"The ARGO Monitoring Service allows the users to model their infrastructure by defining multiple level of groups, starting from groups of Service Endpoints and moving to higher level groups of groups. In this way it is easy to model different infrastructure architectures. We have to mention here that the levels of the topology is something that can be updated and depends on the requirements of each infrastructure."),(0,n.kt)("p",null,"But before we start lets explain a few acronyms. "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Type")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Description")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Example")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Grouping")),(0,n.kt)("td",{parentName:"tr",align:null},"A way to organize and group the services ",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"SITE"),"  An organization responsible for the service ",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"PROJECT"),"  When you offer services on behalf of a project ",(0,n.kt)("br",null)," ",(0,n.kt)("strong",{parentName:"td"},"SERVICE GROUPS"),"  A group of related services"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"SITE"),"  GRNET ",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"PROJECT"),"  MyProject ",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"SERVICE GROUP"),"  Cluster of databases")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Service Type")),(0,n.kt)("td",{parentName:"tr",align:null},"Each service type can have a defined sets of metrics, which are explicit tests when we check"),(0,n.kt)("td",{parentName:"tr",align:null},"repository")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Endpoint")),(0,n.kt)("td",{parentName:"tr",align:null},"the combination of hostname and Service Type, defining where the service runs"),(0,n.kt)("td",{parentName:"tr",align:null},"a repository at ",(0,n.kt)("a",{parentName:"td",href:"http://www.example-repository.com"},"www.example-repository.com")," uses port 4333")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Service actors")),(0,n.kt)("td",{parentName:"tr",align:null},"the people responsible for the service operation"),(0,n.kt)("td",{parentName:"tr",align:null},"Administrator : John Smith jsmith ","[AT]"," grnet.gr ",(0,n.kt)("br",null),"Site Owner: John Doe jDoe ","[AT]"," grnet.gr ",(0,n.kt)("br",null),"Security: George Papadopoulos jpapad ","[AT]","  grnet.gr")))),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Via a Topology the structure of  a Project, an Organization, a SITE, can be monitored. For example: "),(0,n.kt)("h3",{id:"example-1-monitoring-the-services-of-a-project--the-topology"},"Example 1: Monitoring the services of a Project- The topology:"),(0,n.kt)("p",null,"When we participate at a Project we offer a number of services. Based on this a project gathers the services to offer to a higher level and creates one more level of hierarchy. Project acts as a group, at the top level of the infrastructure definition.  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Project   \n   |---Service or Group of services                 \n             |--Service Endpoints \n")),(0,n.kt)("p",null,"As an example, we may say that we have a project (MyProject) which offers an AAI Service and a Document Management Service. The information about the topology includes the group  (MyProject), the services (AAI service, Document Management Service) that combine the service endpoints (aai.myproject.org, aai1.myproject.org) and (docu.myproject.org, database.myproject.org) . The following image is trying to represent the hierarchy of the topology. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"                                    MyProject\n        |---AAI service                            |---Document Management Service                  \n            |------aai.myproject.org                   |------docu.myproject.org\n            |------aai1.myproject.org                  |------database.myproject.org  \n")),(0,n.kt)("h3",{id:"example-2-monitoring-the-services-of-1-or-more-organisations---the-topology"},"Example 2: Monitoring the services of 1 or more Organisations - The topology:"),(0,n.kt)("p",null,"Another way to organise the topology is to add a new layer of group which is the Organisations. An Organisation usually has a number of Sites where it hosts the services used by the users. In the following example the hierarchy of this type of topology is represented. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"ORGANINATION \n   |----SITE   \n        |---Service or Group of services                 \n            |------Service Endpoints \n\n")),(0,n.kt)("p",null,"As an example,  we may say that we have an organization, such as GRNET, which has a number of Sites like HEBLAB,IASA,EKT. Each Site gathers a number of services like SRM and WEBDAV.  These services combine a number of  like service-endpoints grid02.physics.uoi.gr, se01.marie.hellasgrid.gr, se01.athena.hellasgrid.gr. The following image is trying to represent the hierarchy of the topology. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"                                            GRNET \n|---- HEBLAB\n         |-- SRM \n               |-- grid02.physics.uoi.gr\n|---- IASA \n         |-- WEBDAV \n               |-- se01.marie.hellasgrid.\n|---- EKT\n         |-- SRM \n               |-- se01.athena.hellasgrid.gr\n")),(0,n.kt)("p",null,"A visual representation of the above topology example can be represented from the image below: "),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(2612).Z,width:"1161",height:"657"})," "),(0,n.kt)("p",null,"Monitoring Service has a number of connectors for well-known configuration databases and sources like: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"DPMT (Data Project Management Tool, that also manages topology and resources information)  "),(0,n.kt)("li",{parentName:"ul"},"GOCDB (Repository for storing and presenting topology and resources information) "),(0,n.kt)("li",{parentName:"ul"},"CSV files (predefined format)"),(0,n.kt)("li",{parentName:"ul"},"Json files (predefined format)")),(0,n.kt)("p",null,"An example of the Json file is as follows: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'[ \n  {\n"Service Description (Alphanumeric and basic punctuation)": "My service", \n"URL": "https://example.com", \n"SITENAME-SERVICEGROUP": "MY_SITE", \n"Service Unique ID": "1234", \n"COUNTRY_NAME": "Greece", \n"notification flag?": "Yes", \n"CONTACT_EMAIL": "address@example.com", \n"Status ": "Development", \n"SERVICE_TYPE": "my.service.type"\n  } \n\u2026\n]\n\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"xml files  (predefined format)")))}u.isMDXComponent=!0},2612:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/topology-bdb633d4948060e86915e5cc1b634de8.png"}}]);