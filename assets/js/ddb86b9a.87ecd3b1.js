"use strict";(self.webpackChunkargo_monitoring=self.webpackChunkargo_monitoring||[]).push([[489],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(r),m=o,f=h["".concat(s,".").concat(m)]||h[m]||u[m]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},6988:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return h}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],l={sidebar_position:3,title:"Threshold Profile"},s=void 0,c={unversionedId:"Profiles/thresholds-profile",id:"Profiles/thresholds-profile",isDocsHomePage:!1,title:"Threshold Profile",description:"Description",source:"@site/docs/Profiles/thresholds-profile.md",sourceDirName:"Profiles",slug:"/Profiles/thresholds-profile",permalink:"/argo-monitoring/docs/Profiles/thresholds-profile",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Threshold Profile"},sidebar:"tutorialSidebar",previous:{title:"Aggregation Profile",permalink:"/argo-monitoring/docs/Profiles/aggregation-profile"},next:{title:"Metrics Profile",permalink:"/argo-monitoring/docs/Profiles/metrics-profile"}},p=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[{value:"Technical part",id:"technical-part",children:[]}]}],u={toc:p};function h(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"The ARGO Monitoring Service is generating Status and A/R reports based on the metric results that it gathers from the execution of the monitoring probes. Each metric result includes a status and performance data that typically contain values related to the provided status. Currently the ARGO Monitoring Service relies solely on the statuses returned by the probes in order to generate the Status and A/R reports. "),(0,i.kt)("p",null,"Each probe has a hard-coded built-in static logic in order to compute the probe status. Although this have been proven sufficient for the purposes of infrastructure monitoring up to now, it does not give us any flexibility in providing different \tSLA targets customers. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"For example,")," let\u2019s say that a probe check the average response time of the tickets in helpdesk system.\n",(0,i.kt)("em",{parentName:"p"},"With the current implementation"),", the acceptable response time is part of the probe configuration.\nIf we want to have ",(0,i.kt)("em",{parentName:"p"},"different acceptable response time for a specific customer"),", then we will have to create a new probe configuration and execute a new test. "),(0,i.kt)("p",null,"So in order to have ",(0,i.kt)("strong",{parentName:"p"},"different acceptable response time for each customer")," , we have to easily define these hardcoded values and use them as parameters. So actually we have to  move the metric status computation to something more dynamic like the ARGO analytics engine. So the monitoring probes executed will return the actual data (e.g. the average response time) and then on the ARGO Analytics Engine we can have use multiple threshold profiles, which will be used in order to generate reports based on the customer needs."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Let's take the check_ping as an example which returns the packet loss and lets assume that it has been enhanced to return average round trip time as a response. Sample output from the metric check might look like this:"),(0,i.kt)("p",null,"PING ok - Packet loss = 0%,  response=0.80 | response=20ms;0;300;299;1000"),(0,i.kt)("p",null,"This is the default result of the metric. "),(0,i.kt)("p",null,"In our example we have 2 hosts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"webserver01.example.com"),(0,i.kt)("li",{parentName:"ul"},"webserver02.example.com")),(0,i.kt)("p",null,"The SLA defines a different response times for each of them. In order to achieve that we have to define 2 different thresholds one for each host."),(0,i.kt)("p",null,"The way to define the thresholds follow the following format. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"'label'=value[UOM];[warn];[crit];[min];[max]\n")),(0,i.kt)("p",null,"where"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"label : can contain alphanumeric characters but must always begin with a letter\nvalue : is a float or integer\nuom : is a string unit of measurement (accepted values: s,us,ms,B,KB,MB,TB,%,c)\nwarning: is a range defining the warning threshold limits\ncritical: is a range defining the critical threshold limits\n")),(0,i.kt)("p",null,"So based on the SLA we define the following 2 thresholds "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"host: webserver01.example.com\nthresholds: response=20ms;0:200;199:300\n\nhost: webserver02.example.com\nthresholds: response=20ms;0:500;499:1000\n")),(0,i.kt)("p",null,"BY using the threshold profiles, we managed to have different  Warning and Critical limits for webserver01.example.com and webserver02.example.com and we support them for their SLA. "),(0,i.kt)("h3",{id:"technical-part"},"Technical part"),(0,i.kt)("p",null,"The connection of the Threshold profiles with the other components of ARGO "),(0,i.kt)("p",null,"They are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"defined in POEM "),(0,i.kt)("li",{parentName:"ul"},"stored in ARGO Web API "),(0,i.kt)("li",{parentName:"ul"},"part of a report and the correlation is also configured in POEM  "),(0,i.kt)("li",{parentName:"ul"},"Used for the computations in the Analytics Engine "),(0,i.kt)("li",{parentName:"ul"},"Presented in the ARGO Web UI.")))}h.isMDXComponent=!0}}]);