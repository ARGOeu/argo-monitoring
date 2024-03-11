"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2073],{9037:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>h});var r=n(4848),i=n(8453);const s={sidebar_position:3,title:"Threshold Profile"},o=void 0,a={id:"profiles/thresholds-profile",title:"Threshold Profile",description:"Description",source:"@site/docs/profiles/thresholds-profile.md",sourceDirName:"profiles",slug:"/profiles/thresholds-profile",permalink:"/argo-monitoring/docs/profiles/thresholds-profile",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Threshold Profile"},sidebar:"tutorialSidebar",previous:{title:"Aggregation Profile",permalink:"/argo-monitoring/docs/profiles/aggregation-profile"},next:{title:"Metrics Profile",permalink:"/argo-monitoring/docs/profiles/metrics-profile"}},l={},h=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Technical part",id:"technical-part",level:3}];function c(e){const t={code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"The ARGO Monitoring Service is generating Status and A/R reports based on the metric results that it gathers from the execution of the monitoring probes. Each metric result includes a status and performance data that typically contain values related to the provided status. Currently the ARGO Monitoring Service relies solely on the statuses returned by the probes in order to generate the Status and A/R reports."}),"\n",(0,r.jsx)(t.p,{children:"Each probe has a hard-coded built-in static logic in order to compute the probe status. Although this have been proven sufficient for the purposes of infrastructure monitoring up to now, it does not give us any flexibility in providing different \tSLA targets customers."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"For example,"})," let\u2019s say that a probe check the average response time of the tickets in helpdesk system.\n",(0,r.jsx)(t.em,{children:"With the current implementation"}),", the acceptable response time is part of the probe configuration.\nIf we want to have ",(0,r.jsx)(t.em,{children:"different acceptable response time for a specific customer"}),", then we will have to create a new probe configuration and execute a new test."]}),"\n",(0,r.jsxs)(t.p,{children:["So in order to have ",(0,r.jsx)(t.strong,{children:"different acceptable response time for each customer"}),", we have to easily define these hardcoded values and use them as parameters. So actually we have to  move the metric status computation to something more dynamic like the ARGO analytics engine. So the monitoring probes executed will return the actual data (e.g. the average response time) and then on the ARGO Analytics Engine we can have use multiple threshold profiles, which will be used in order to generate reports based on the customer needs."]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.p,{children:"Let's take the check_ping as an example which returns the packet loss and lets assume that it has been enhanced to return average round trip time as a response. Sample output from the metric check might look like this:"}),"\n",(0,r.jsx)(t.p,{children:"PING ok - Packet loss = 0%,  response=0.80 | response=20ms;0;300;299;1000"}),"\n",(0,r.jsx)(t.p,{children:"This is the default result of the metric."}),"\n",(0,r.jsx)(t.p,{children:"In our example we have 2 hosts"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"webserver01.example.com"}),"\n",(0,r.jsx)(t.li,{children:"webserver02.example.com"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"The SLA defines a different response times for each of them. In order to achieve that we have to define 2 different thresholds one for each host."}),"\n",(0,r.jsx)(t.p,{children:"The way to define the thresholds follow the following format."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"'label'=value[UOM];[warn];[crit];[min];[max]\n"})}),"\n",(0,r.jsx)(t.p,{children:"where"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"label : can contain alphanumeric characters but must always begin with a letter\nvalue : is a float or integer\nuom : is a string unit of measurement (accepted values: s,us,ms,B,KB,MB,TB,%,c)\nwarning: is a range defining the warning threshold limits\ncritical: is a range defining the critical threshold limits\n"})}),"\n",(0,r.jsx)(t.p,{children:"So based on the SLA we define the following 2 thresholds"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"host: webserver01.example.com\nthresholds: response=20ms;0:200;199:300\n\nhost: webserver02.example.com\nthresholds: response=20ms;0:500;499:1000\n"})}),"\n",(0,r.jsx)(t.p,{children:"BY using the threshold profiles, we managed to have different  Warning and Critical limits for webserver01.example.com and webserver02.example.com and we support them for their SLA."}),"\n",(0,r.jsx)(t.h3,{id:"technical-part",children:"Technical part"}),"\n",(0,r.jsx)(t.p,{children:"The connection of the Threshold profiles with the other components of ARGO"}),"\n",(0,r.jsx)(t.p,{children:"They are:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"defined in POEM"}),"\n",(0,r.jsx)(t.li,{children:"stored in ARGO Web API"}),"\n",(0,r.jsx)(t.li,{children:"part of a report and the correlation is also configured in POEM"}),"\n",(0,r.jsx)(t.li,{children:"Used for the computations in the Analytics Engine"}),"\n",(0,r.jsx)(t.li,{children:"Presented in the ARGO Web UI."}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(6540);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);