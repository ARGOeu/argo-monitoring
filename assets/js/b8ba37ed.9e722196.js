"use strict";(self.webpackChunkargo_monitoring=self.webpackChunkargo_monitoring||[]).push([[583],{8526:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=i(7462),o=i(3366),r=(i(7294),i(3905)),s=["components"],a={sidebar_position:2,title:"Status Trends - Flapping"},l=void 0,p={unversionedId:"reports/flapping-trends",id:"reports/flapping-trends",isDocsHomePage:!1,title:"Status Trends - Flapping",description:"Description",source:"@site/docs/reports/flapping-trends.md",sourceDirName:"reports",slug:"/reports/flapping-trends",permalink:"/argo-monitoring/docs/reports/flapping-trends",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Status Trends - Flapping"},sidebar:"tutorialSidebar",previous:{title:"Reports",permalink:"/argo-monitoring/docs/reports/reports"},next:{title:"status-critical-warning-unknown",permalink:"/argo-monitoring/docs/reports/status-critical-warning-unknown"}},c=[{value:"Description",id:"description",children:[]},{value:"Examples",id:"examples",children:[{value:"Example 1: Flapping due to network issue",id:"example-1-flapping-due-to-network-issue",children:[]},{value:"Example 2: Flapping due to internal problem of the service",id:"example-2-flapping-due-to-internal-problem-of-the-service",children:[]}]}],u={toc:c};function d(e){var t=e.components,i=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Flapping occurs when a service or host changes state too frequently, resulting in a storm of problems and recovery notifications. Flapping can be indicative of configuration problems (i.e.  wrong configuration between the monitored item and the monitoring host), troublesome services, or real network problems. This causes a lot of alarms and notifications. "),(0,r.kt)("p",null,"ARGO Monitoring service analyzes the status timelines in different levels, detects the flapping patterns and creates a report with the list of the most problematic monitored items.  It actually analyzes the stream of collected status data (monitoring results) in a big data friendly platform (analytics engine)  and traces flapping patterns almost immediately. It uncovers hidden patterns, correlations and other insights and informs the user."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Flapping can occur due to network problems between monitoring host and monitored item for example:"),(0,r.kt)("h3",{id:"example-1-flapping-due-to-network-issue"},"Example 1: Flapping due to network issue"),(0,r.kt)("p",null,"ARGO Monitoring service monitors HTTP activity in host1.example.com using the check_http check. Due to network issues between the ARGO Monitoring service and host1.example.com a pattern arises that some http checks are successful (OK) and some are critical (CRITICAL) (in successive order) as shown in picture:"),(0,r.kt)("h4",{id:"result"},"Result"),(0,r.kt)("p",null,"Based on this behaviour, during the data computations, the service is flagged as a flapping service, and it is included in the list of flapping services presented in the ARGO Monitoring UI. "),(0,r.kt)("h3",{id:"example-2-flapping-due-to-internal-problem-of-the-service"},"Example 2: Flapping due to internal problem of the service"),(0,r.kt)("p",null,"ARGO Monitoring service monitors the file upload functionality in host2.example.com (object storage) using the file upload check. Due to an internal error of the service, the check uploads a file successfully (OK), then issues a deletion request on it but the deletion takes too long. In a second attempt to re-upload the file the check receives a warning (WARNING) until the deletion of the original is completed. This results in a repeating pattern of status being OK then WARNING, then again OK etc as shown in the following picture:"),(0,r.kt)("h4",{id:"result-1"},"Result"),(0,r.kt)("p",null,"Based on this behaviour, during the data computations, the service is flagged as a flapping service, and it is included in the list of flapping services presented in the ARGO Monitoring UI."))}d.isMDXComponent=!0}}]);