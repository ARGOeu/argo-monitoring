"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1295],{4356:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var i=n(4848),s=n(8453);const o={sidebar_position:4,title:"Status Trends - Flapping"},r=void 0,a={id:"reports/flapping-trends",title:"Status Trends - Flapping",description:"Description",source:"@site/docs/reports/flapping-trends.md",sourceDirName:"reports",slug:"/reports/flapping-trends",permalink:"/argo-monitoring/docs/reports/flapping-trends",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Status Trends - Flapping"},sidebar:"tutorialSidebar",previous:{title:"A/R results",permalink:"/argo-monitoring/docs/reports/ar"},next:{title:"Status Trends - Critical, Warning,Unknown",permalink:"/argo-monitoring/docs/reports/status-critical-warning-unknown"}},l={},p=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1: Flapping due to network issue",id:"example-1-flapping-due-to-network-issue",level:3},{value:"Result",id:"result",level:4},{value:"Example 2: Flapping due to internal problem of the service",id:"example-2-flapping-due-to-internal-problem-of-the-service",level:3},{value:"Result",id:"result-1",level:4}];function c(e){const t={h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Flapping occurs when a service or host changes state too frequently, resulting in a storm of problems and recovery notifications. Flapping can be indicative of configuration problems (i.e.  wrong configuration between the monitored item and the monitoring host), troublesome services, or real network problems. This causes a lot of alarms and notifications."}),"\n",(0,i.jsx)(t.p,{children:"ARGO Monitoring service analyzes the status timelines in different levels, detects the flapping patterns and creates a report with the list of the most problematic monitored items.  It actually analyzes the stream of collected status data (monitoring results) in a big data friendly platform (analytics engine)  and traces flapping patterns almost immediately. It uncovers hidden patterns, correlations and other insights and informs the user."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(t.p,{children:["Flapping can occur due to network problems between monitoring host and monitored item for example:\n",(0,i.jsx)(t.img,{src:n(9258).A+"",width:"1700",height:"971"})]}),"\n",(0,i.jsx)(t.h3,{id:"example-1-flapping-due-to-network-issue",children:"Example 1: Flapping due to network issue"}),"\n",(0,i.jsx)(t.p,{children:"ARGO Monitoring service monitors HTTP activity in host1.example.com using the check_http check. Due to network issues between the ARGO Monitoring service and host1.example.com a pattern arises that some http checks are successful (OK) and some are critical (CRITICAL) (in successive order) as shown in picture:"}),"\n",(0,i.jsx)(t.h4,{id:"result",children:"Result"}),"\n",(0,i.jsx)(t.p,{children:"Based on this behaviour, during the data computations, the service is flagged as a flapping service, and it is included in the list of flapping services presented in the ARGO Monitoring UI."}),"\n",(0,i.jsx)(t.h3,{id:"example-2-flapping-due-to-internal-problem-of-the-service",children:"Example 2: Flapping due to internal problem of the service"}),"\n",(0,i.jsxs)(t.p,{children:["ARGO Monitoring service monitors the file upload functionality in host2.example.com (object storage) using the file upload check. Due to an internal error of the service, the check uploads a file successfully (OK), then issues a deletion request on it but the deletion takes too long. In a second attempt to re-upload the file the check receives a warning (WARNING) until the deletion of the original is completed. This results in a repeating pattern of status being OK then WARNING, then again OK etc as shown in the following picture:\n",(0,i.jsx)(t.img,{src:n(9425).A+"",width:"1700",height:"992"})]}),"\n",(0,i.jsx)(t.h4,{id:"result-1",children:"Result"}),"\n",(0,i.jsx)(t.p,{children:"Based on this behaviour, during the data computations, the service is flagged as a flapping service, and it is included in the list of flapping services presented in the ARGO Monitoring UI."})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},9258:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/status-trends-flapping-img1-785dbb798f0519caf516915bf4059ae8.png"},9425:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/status-trends-flapping-img2-d8aa17773903cc5cd4b0b8b0bbea0282.png"},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(6540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);