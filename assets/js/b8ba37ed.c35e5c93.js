"use strict";(self.webpackChunkargo_monitoring=self.webpackChunkargo_monitoring||[]).push([[583],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=i,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8526:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={sidebar_position:2,title:"Status Trends - Flapping"},l=void 0,p={unversionedId:"reports/flapping-trends",id:"reports/flapping-trends",isDocsHomePage:!1,title:"Status Trends - Flapping",description:"Description",source:"@site/docs/reports/flapping-trends.md",sourceDirName:"reports",slug:"/reports/flapping-trends",permalink:"/argo-monitoring/docs/reports/flapping-trends",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Status Trends - Flapping"},sidebar:"tutorialSidebar",previous:{title:"Reports",permalink:"/argo-monitoring/docs/reports/reports"},next:{title:"Status Trends - Critical, Warning,Unknown",permalink:"/argo-monitoring/docs/reports/status-critical-warning-unknown"}},c=[{value:"Description",id:"description",children:[]},{value:"Examples",id:"examples",children:[{value:"Example 1: Flapping due to network issue",id:"example-1-flapping-due-to-network-issue",children:[]},{value:"Example 2: Flapping due to internal problem of the service",id:"example-2-flapping-due-to-internal-problem-of-the-service",children:[]}]}],u={toc:c};function d(e){var t=e.components,s=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Flapping occurs when a service or host changes state too frequently, resulting in a storm of problems and recovery notifications. Flapping can be indicative of configuration problems (i.e.  wrong configuration between the monitored item and the monitoring host), troublesome services, or real network problems. This causes a lot of alarms and notifications. "),(0,o.kt)("p",null,"ARGO Monitoring service analyzes the status timelines in different levels, detects the flapping patterns and creates a report with the list of the most problematic monitored items.  It actually analyzes the stream of collected status data (monitoring results) in a big data friendly platform (analytics engine)  and traces flapping patterns almost immediately. It uncovers hidden patterns, correlations and other insights and informs the user."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Flapping can occur due to network problems between monitoring host and monitored item for example:\n",(0,o.kt)("img",{src:n(4909).Z})),(0,o.kt)("h3",{id:"example-1-flapping-due-to-network-issue"},"Example 1: Flapping due to network issue"),(0,o.kt)("p",null,"ARGO Monitoring service monitors HTTP activity in host1.example.com using the check_http check. Due to network issues between the ARGO Monitoring service and host1.example.com a pattern arises that some http checks are successful (OK) and some are critical (CRITICAL) (in successive order) as shown in picture:"),(0,o.kt)("h4",{id:"result"},"Result"),(0,o.kt)("p",null,"Based on this behaviour, during the data computations, the service is flagged as a flapping service, and it is included in the list of flapping services presented in the ARGO Monitoring UI. "),(0,o.kt)("h3",{id:"example-2-flapping-due-to-internal-problem-of-the-service"},"Example 2: Flapping due to internal problem of the service"),(0,o.kt)("p",null,"ARGO Monitoring service monitors the file upload functionality in host2.example.com (object storage) using the file upload check. Due to an internal error of the service, the check uploads a file successfully (OK), then issues a deletion request on it but the deletion takes too long. In a second attempt to re-upload the file the check receives a warning (WARNING) until the deletion of the original is completed. This results in a repeating pattern of status being OK then WARNING, then again OK etc as shown in the following picture:\n",(0,o.kt)("img",{src:n(5591).Z})),(0,o.kt)("h4",{id:"result-1"},"Result"),(0,o.kt)("p",null,"Based on this behaviour, during the data computations, the service is flagged as a flapping service, and it is included in the list of flapping services presented in the ARGO Monitoring UI."))}d.isMDXComponent=!0},4909:function(e,t,n){t.Z=n.p+"assets/images/status-trends-flapping-img1-785dbb798f0519caf516915bf4059ae8.png"},5591:function(e,t,n){t.Z=n.p+"assets/images/status-trends-flapping-img2-d8aa17773903cc5cd4b0b8b0bbea0282.png"}}]);