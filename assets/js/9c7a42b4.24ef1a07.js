"use strict";(self.webpackChunkargo_monitoring=self.webpackChunkargo_monitoring||[]).push([[694],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=p(n),m=i,f=g["".concat(s,".").concat(m)]||g[m]||u[m]||r;return n?o.createElement(f,a(a({ref:t},c),{},{components:n})):o.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2246:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return g}});var o=n(7462),i=n(3366),r=(n(7294),n(3905)),a=["components"],l={sidebar_position:2,title:"Aggregation Profile"},s=void 0,p={unversionedId:"Profiles/aggregation-profile",id:"Profiles/aggregation-profile",isDocsHomePage:!1,title:"Aggregation Profile",description:"Description",source:"@site/docs/Profiles/aggregation-profile.md",sourceDirName:"Profiles",slug:"/Profiles/aggregation-profile",permalink:"/argo-monitoring/docs/Profiles/aggregation-profile",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Aggregation Profile"},sidebar:"tutorialSidebar",previous:{title:"Operations Profile",permalink:"/argo-monitoring/docs/Profiles/operations-profile"},next:{title:"Threshold Profile",permalink:"/argo-monitoring/docs/Profiles/thresholds-profile"}},c=[{value:"Description",id:"description",children:[{value:"Grouping of monitored items",id:"grouping-of-monitored-items",children:[]},{value:"Combining endpoints to service offerings",id:"combining-endpoints-to-service-offerings",children:[]},{value:"Combining service offerings to higher groups",id:"combining-service-offerings-to-higher-groups",children:[]},{value:"Aggregation profile anatomy (JSON format)",id:"aggregation-profile-anatomy-json-format",children:[]}]}],u={toc:c};function g(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"An aggregation profile defines how to aggregate service flavour statuses into higher hierarchical grouping (i.e. a service_group) status results.\nThey are actually used to define logical rules on how to aggregate individual status computations into groups."),(0,r.kt)("h3",{id:"grouping-of-monitored-items"},"Grouping of monitored items"),(0,r.kt)("p",null,"ARGO allows you to combine your monitored items into hierarchies of groups giving you the ability to represent real world structures of your data centers, organizations, service offerings, federations etc. The most basic level that everything else is built upon is the level of the service endpoint."),(0,r.kt)("p",null,"A service endpoint is actually the host plus the service instance that runs on that host. For example you might have a bare metal machine (host) named db01.example.com that hosts an instance of a mysql database on port 3306. In this example the service endpoint being the combination of the hostname plus the type of the service running on the host gives:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"service endpoint = db01.infra.example.com(mysql)")),(0,r.kt)("h3",{id:"combining-endpoints-to-service-offerings"},"Combining endpoints to service offerings"),(0,r.kt)("p",null,"You might offer mysql as a cluster which actually depends on the following service endpoints such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"db01.infra.example.com(mysql)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"db02.infra.example.com(mysql)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"db03.infra.example.com(mysql)"))),(0,r.kt)("p",null,"Now you want to have a combined view for the service offering (mysql cluster) as a whole that includes a daily timeline of the status that your mysql offering and the corresponding availability / reliability score results. The mysql cluster might be deployed in an distributed way so that every host must be in a working OK condition in order to consider that the general mysql offering is OK. Or it might be deployed in a high availability fashion so even if one of the service endpoints is in working condition (OK state) the whole mysql offering is considered to be working (OK). As mentioned previously, operation profiles describe the ways that we combine items into groups based on the way they are working together (distributed/ha). Usually an operation profile declares possible states that monitored items might have and how these states are combined through combine operations/actions (namely \u201cAND\u201d, \u201cOR\u201d logical operations between items as described here: ",(0,r.kt)("a",{parentName:"p",href:"/argo-monitoring/docs/Profiles/operations-profile"},"link")),(0,r.kt)("p",null,"Important: If operations profile describe the available states and the combination operations possible upon them, the aggregation profile describes where those operation take place in the hierarchy of groups we are trying to create"),(0,r.kt)("p",null,"In the previous example of mysql service offering the aggregation profile will include a declaration that endpoints of mysql service types are combined into service groups of mysql offerings through an \u2018OR\u2019 combination operation because our mysql clusters are deployed in a highly available way. "),(0,r.kt)("h3",{id:"combining-service-offerings-to-higher-groups"},"Combining service offerings to higher groups"),(0,r.kt)("p",null,"You might have another service offering in your infrastructure that provides along with the database a cloud storage platform such as nextcloud. Similar to the database you might have the following endpoints:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cloud01.infra.example.com(nextcloud)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cloud02.infra.example.com(nextcloud)"))),(0,r.kt)("p",null,"And you want to combine them in a single nextcloud offering that actually is distributed among them so you must combine them in an \u201cAND\u201d fashion (again see  ",(0,r.kt)("a",{parentName:"p",href:"/argo-monitoring/docs/Profiles/operations-profile"},"link"),") "),(0,r.kt)("p",null,"The aggregation profile in this case will include another entry that defines that the nextcloud endpoints are combined through an \u2018AND\u2019 operation to a higher level nextcloud service offering."),(0,r.kt)("p",null,"Finally you might want to provide a high level group of your infrastructure that includes all service offerings (mysql and nextcloud). In this case you might have something like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"infra.example.com (my infrastructure)\n      |\n      |\n  (*offers)\n      |\n      |________ nextcloud service\n      |                 |\n      |                 |\n      |       (*has HA components)\n      |                 |\n      |                 |__ db01.infra.example.com\n      |                 |__ db02.infra.example.com\n      |                 |__ db03.infra.example.com\n      |\n      |_________mysql service\n                        |\n                        |\n           (*has distributed components)\n                        |\n                        |__ cloud01.infra.example.com\n                        |__ cloud02.infra.example.com\n")),(0,r.kt)("p",null,"So the case might be that the nextcloud service and the mysql service must be combined in an \u2018AND\u2019 fashion in order to provide a general picture for the whole infrastructure (infra.example.com). This is also something that we define in the aggregation profile."),(0,r.kt)("p",null,"To sum it up, the aggregation profile comes along with the operation profile and defines what kind of levels and groups our monitored items are going to be combined to and with what kind of operations (AND/OR etc\u2026). The operations are declared and named on the operations profile and they are referenced by name in the aggregations profile. In the aggregation profile you cannot have references to operations that don\u2019t exist in the accompanied aggregation profile. "),(0,r.kt)("h3",{id:"aggregation-profile-anatomy-json-format"},"Aggregation profile anatomy (JSON format)"),(0,r.kt)("p",null,"The aggregation profile has the following information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A name ",(0,r.kt)("em",{parentName:"li"},"(obviously)")),(0,r.kt)("li",{parentName:"ul"},"A reference to a metric profile attached to it ",(0,r.kt)("em",{parentName:"li"},"(to know what kind of service types are relevant)")),(0,r.kt)("li",{parentName:"ul"},"The type of high level group representation that our service offerings are organized to ",(0,r.kt)("em",{parentName:"li"},"(for example: DATACENTER, INFRASTRUCTURE, ORGANIZATION, SITE, SERVICEGROUP etc\u2026)")),(0,r.kt)("li",{parentName:"ul"},"Some general types of combination operations applied globally such as:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"How are the individual metrics/checks are going to be combined for each endpoint"),(0,r.kt)("li",{parentName:"ul"},"How are the different high level groups are going to be combined to a final group etc\u2026"))),(0,r.kt)("li",{parentName:"ul"},"A detailed list of the high level groups we want to construct ",(0,r.kt)("em",{parentName:"li"},"(representing as mentioned before data centers or infrastructures, or sites, or service groups etc\u2026)")," and with what kind of operations each individual service type is combined to these groups")),(0,r.kt)("p",null,"The JSON format representation of an aggregation profile is provided in the following example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n           "name": "Infra_aggregation",\n           "endpoint_group": "DATACENTER",\n           "metric_operation": "AND",\n           "profile_operation": "AND",\n           "metric_profile": {\n               "name": "my_infra_metrics",\n               "id": "uuid-reference-here"\n           },\n           "groups": [\n               {\n                   "name": "database",\n                   "operation": "OR",\n                   "services": [\n                       {\n                           "name": "mysql",\n                           "operation": "OR"\n                       }\n                   ]\n               },\n               {\n                   "name": "storage",\n                   "operation": "OR",\n                   "services": [\n                       {\n                           "name": "nextcloud",\n                           "operation": "AND"\n                       }\n                   ]\n               }\n           ]\n}\n')))}g.isMDXComponent=!0}}]);