"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4648],{3828:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=n(4848),s=n(8453);const r={sidebar_position:5,title:"Status Trends - Critical, Warning,Unknown"},a=void 0,o={id:"reports/status-critical-warning-unknown",title:"Status Trends - Critical, Warning,Unknown",description:"Description",source:"@site/docs/reports/status-critical-warning-unknown.md",sourceDirName:"reports",slug:"/reports/status-critical-warning-unknown",permalink:"/argo-monitoring/docs/reports/status-critical-warning-unknown",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Status Trends - Critical, Warning,Unknown"},sidebar:"tutorialSidebar",previous:{title:"Status Trends - Flapping",permalink:"/argo-monitoring/docs/reports/flapping-trends"},next:{title:"Performance Data",permalink:"/argo-monitoring/docs/reports/performance_data"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1: Counting CRITICAL,WARNING,UNKNOWN status daily appearance and duration",id:"example-1-counting-criticalwarningunknown-status-daily-appearance-and-duration",level:3},{value:"Result",id:"result",level:4}];function d(e){const t={h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"The ARGO Monitoring Service is checking the services at regular intervals. It actually runs  explicit tests (checks) in order to assess the status of the service. The result of the checks decides on the state of the service. Based on that each service may have a state :"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"OK"}),": the check succeeds"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"CRITICAL"}),": the check does not  succeed"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"WARNING"}),": the check succeeds but  performs unusually"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"MISSING"}),": the check\u2019s state is not recorded"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"UNKNOWN"}),": the check could not apply on the monitoring item and as a result the check\u2019s state is unknown"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"As configuration problems, troublesome services, or other service internal problems occur, the checks on the monitoring items can result in a problematic state (critical, warning or unknown state), for a time period."}),"\n",(0,i.jsx)(t.p,{children:"ARGO Monitoring service analyzes the status timelines in different levels,  detects the CRITICAL, WARNING, UNKNOWN states and  calculates the duration (in minutes) as well as the number of appearances of each state in the daily timelines. ARGO Monitoring service creates a report, for each of the problematic states, with the list of the monitored items which remain in the state for the longest time period."}),"\n",(0,i.jsx)(t.p,{children:"It actually analyzes the stream of collected status data (monitoring results) using its analytics engine (a big data friendly platform) and traces the problematic states almost in real time, calculating their presence and duration. It uncovers hidden patterns, correlations and other insights and informs the user."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.p,{children:"State changes can occur due to network problems between monitoring host and monitored item for example:"}),"\n",(0,i.jsx)(t.h3,{id:"example-1-counting-criticalwarningunknown-status-daily-appearance-and-duration",children:"Example 1: Counting CRITICAL,WARNING,UNKNOWN status daily appearance and duration"}),"\n",(0,i.jsxs)(t.p,{children:["We have a monitoring service that monitors HTTP activity in host2.example.com using the check_http probe. Due to network issues between monitoring box and host2.example.com we have a pattern that some HTTP checks are successful (",(0,i.jsx)(t.strong,{children:"OK"}),") some are critical (",(0,i.jsx)(t.strong,{children:"CRITICAL"}),"), some are warning (",(0,i.jsx)(t.strong,{children:"WARNING"}),") and some are unknown (",(0,i.jsx)(t.strong,{children:"UNKNOWN"}),") as shown in picture:\n",(0,i.jsx)(t.img,{src:n(1560).A+"",width:"1700",height:"1001"})]}),"\n",(0,i.jsx)(t.h4,{id:"result",children:"Result"}),"\n",(0,i.jsx)(t.p,{children:"ARGO Monitoring Service applies calculations on the recorded status timeline and counts the appearance  and duration of CRITICAL, WARNING, UNKNOWN state."}),"\n",(0,i.jsx)(t.p,{children:"The duration of the status is calculated by aggregating  the interval duration of each status appearance in the timeline."}),"\n",(0,i.jsx)(t.p,{children:"In the above example, as the timeline is divided in 20 equal slots, each slot has a duration of  36 minutes."}),"\n",(0,i.jsx)(t.p,{children:"The ARGO Monitoring Service detects that :"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"WARNING appears 2 times, with duration 72 minutes (2 X 36 minutes)"}),"\n",(0,i.jsx)(t.li,{children:"CRITICAL appears 5 times, with duration 180 minutes (5 X 36 minutes)"}),"\n",(0,i.jsx)(t.li,{children:"UNKNOWN appears 1 time,, with duration 36 minutes (1 X 36 minutes)"}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1560:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/status-trends-flapping-img3-29a4599a2e23edda05ad7b75102c0905.png"},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var i=n(6540);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);