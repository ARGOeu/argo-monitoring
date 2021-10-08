"use strict";(self.webpackChunkargo_monitoring=self.webpackChunkargo_monitoring||[]).push([[980],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5939:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:4,title:"Status Trends - Critical, Warning,Unknown"},c=void 0,l={unversionedId:"reports/status-critical-warning-unknown",id:"reports/status-critical-warning-unknown",isDocsHomePage:!1,title:"Status Trends - Critical, Warning,Unknown",description:"Description",source:"@site/docs/reports/status-critical-warning-unknown.md",sourceDirName:"reports",slug:"/reports/status-critical-warning-unknown",permalink:"/argo-monitoring/docs/reports/status-critical-warning-unknown",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Status Trends - Critical, Warning,Unknown"},sidebar:"tutorialSidebar",previous:{title:"Status Trends - Flapping",permalink:"/argo-monitoring/docs/reports/flapping-trends"}},u=[{value:"Description",id:"description",children:[]},{value:"Examples",id:"examples",children:[{value:"Example 1: Counting CRITICAL,WARNING,UNKNOWN status daily appearance and duration",id:"example-1-counting-criticalwarningunknown-status-daily-appearance-and-duration",children:[]}]}],p={toc:u};function m(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"The ARGO Monitoring Service is checking the services at regular intervals. It actually runs  explicit tests (checks) in order to assess the status of the service. The result of the checks decides on the state of the service. Based on that each service may have a state :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"OK"),": the check succeeds"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"CRITICAL"),": the check does not  succeed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"WARNING"),": the check succeeds but  performs unusually"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"MISSING"),": the check\u2019s state is not recorded"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"UNKNOWN"),": the check could not apply on the monitoring item and as a result the check\u2019s state is unknown")),(0,i.kt)("p",null,"As configuration problems, troublesome services, or other service internal problems occur, the checks on the monitoring items can result in a problematic state (critical , warning or unknown state), for a time period."),(0,i.kt)("p",null,"ARGO Monitoring service analyzes the status timelines in different levels,  detects the CRITICAL, WARNING, UNKNOWN states and  calculates the duration (in minutes) as well as the number of appearances of each state in the daily timelines. ARGO Monitoring service creates a report, for each of the problematic states, with the list of the monitored items which remain in the state for the longest time period."),(0,i.kt)("p",null,"It actually analyzes the stream of collected status data (monitoring results) using its analytics engine (a big data friendly platform) and traces the problematic states almost in real time, calculating their presence and duration. It uncovers hidden patterns, correlations and other insights and informs the user."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"State changes can occur due to network problems between monitoring host and monitored item for example:"),(0,i.kt)("h3",{id:"example-1-counting-criticalwarningunknown-status-daily-appearance-and-duration"},"Example 1: Counting CRITICAL,WARNING,UNKNOWN status daily appearance and duration"),(0,i.kt)("p",null,"We have a monitoring service that monitors HTTP activity in host2.example.com using the check_http probe. Due to network issues between monitoring box and host2.example.com we have a pattern that some HTTP checks are successful (",(0,i.kt)("strong",{parentName:"p"},"OK"),") some are critical (",(0,i.kt)("strong",{parentName:"p"},"CRITICAL"),"), some are warning (",(0,i.kt)("strong",{parentName:"p"},"WARNING"),") and some are unknown (",(0,i.kt)("strong",{parentName:"p"},"UNKNOWN"),") as shown in picture:\n",(0,i.kt)("img",{src:n(9210).Z})),(0,i.kt)("h4",{id:"result"},"Result"),(0,i.kt)("p",null,"ARGO Monitoring Service applies calculations on the recorded status timeline and counts the appearance  and duration of CRITICAL, WARNING, UNKNOWN state. "),(0,i.kt)("p",null,"The duration of the status is calculated by aggregating  the interval duration of each status appearance in the timeline."),(0,i.kt)("p",null,"In the above example, as the timeline is divided in 20 equal slots , each slot has a duration of  36 minutes."),(0,i.kt)("p",null,"The ARGO Monitoring Service detects that :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"WARNING appears 2 times , with duration 72 minutes (2 X 36 minutes)"),(0,i.kt)("li",{parentName:"ul"},"CRITICAL appears 5 times , with duration 180 minutes (5 X 36 minutes)"),(0,i.kt)("li",{parentName:"ul"},"UNKNOWN appears 1 time, , with duration 36 minutes (1 X 36 minutes)")))}m.isMDXComponent=!0},9210:function(e,t,n){t.Z=n.p+"assets/images/status-trends-flapping-img3-29a4599a2e23edda05ad7b75102c0905.png"}}]);