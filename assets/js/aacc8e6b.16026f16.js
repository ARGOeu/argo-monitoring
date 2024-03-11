"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3850],{7818:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=n(4848),s=n(8453);const o={sidebar_position:5,title:"Use Case 4: Combine Results of existing ARGO Tenants."},r=void 0,a={id:"guides/case4",title:"Use Case 4: Combine Results of existing ARGO Tenants.",description:"Introduction",source:"@site/docs/guides/case4.md",sourceDirName:"guides",slug:"/guides/case4",permalink:"/argo-monitoring/docs/guides/case4",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Use Case 4: Combine Results of existing ARGO Tenants."},sidebar:"tutorialSidebar",previous:{title:"Use Case 3: Integrate  External  Monitoring  service",permalink:"/argo-monitoring/docs/guides/case3"},next:{title:"Use Case  5: Third-party services exploiting EOSC Monitoring data",permalink:"/argo-monitoring/docs/guides/case5"}},l={},c=[{value:"Introduction",id:"introduction",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Solution",id:"solution",level:3},{value:"Step 1: Open a ticket to helpdesk",id:"step-1-open-a-ticket-to-helpdesk",level:4},{value:"Step 2: Creation of the Combined Tenant.",id:"step-2-creation-of-the-combined-tenant",level:4},{value:"Step 3 Start monitoring",id:"step-3-start-monitoring",level:4}];function d(e){const t={h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h3,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(t.p,{children:"This use case covers the scenarios where the topology and the results of multiple tenants need to be combined in a number of reports."}),"\n",(0,i.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(t.p,{children:"In order to combine results from tenants A, B (example names), those tenants should be already monitored by ARGO Monitoring service complete with the following definitions for each tenant:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Latest Data available:"})," Each tenant should be checked that has an active stream of incoming monitoring data."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Topology:"})," Each tenant should already have a well defined source of topology that includes lists of groups, endpoints and services."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Metric Profile:"})," In simple terms, a list of all services to be checked along with all relevant metrics per service"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"solution",children:"Solution"}),"\n",(0,i.jsx)(t.h4,{id:"step-1-open-a-ticket-to-helpdesk",children:"Step 1: Open a ticket to helpdesk"}),"\n",(0,i.jsx)(t.p,{children:"In order to have results, the customer should create a ticket on the helpdesk describing:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Tenants to be used in the combined report"}),"\n",(0,i.jsx)(t.li,{children:"Services and metrics"}),"\n",(0,i.jsx)(t.li,{children:"Aggregation profile."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"For each tenant that is going to take part in producing the combined results check that all of the prerequisites (mentioned in the previous section) do apply."}),"\n",(0,i.jsx)(t.h4,{id:"step-2-creation-of-the-combined-tenant",children:"Step 2: Creation of the Combined Tenant."}),"\n",(0,i.jsx)(t.p,{children:"Create a new tenant that will host the combined report. This tenant will act as a host tenant for the combined results and will rely on the data of the other tenants as input for the computations of the availability, reliability and status results."}),"\n",(0,i.jsx)(t.h4,{id:"step-3-start-monitoring",children:"Step 3 Start monitoring"}),"\n",(0,i.jsx)(t.p,{children:"Once all the information has been provided, the monitoring of the service starts and the ARGO monitoring Computation and Analytics component calculates availability and reliability of the services, and creates a report."}),"\n",(0,i.jsx)(t.p,{children:"The User can have a look at the A/R and status results from the combined reports from the UI."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(6540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);