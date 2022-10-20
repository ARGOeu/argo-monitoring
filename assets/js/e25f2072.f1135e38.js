"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4395],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,h=c["".concat(l,".").concat(m)]||c[m]||p[m]||i;return r?n.createElement(h,o(o({ref:t},d),{},{components:r})):n.createElement(h,o({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},2775:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:7,title:"Get Monitoring Status Data based on the Resource-ID"},o=void 0,s={unversionedId:"guides/EOSC-getStatusData",id:"guides/EOSC-getStatusData",title:"Get Monitoring Status Data based on the Resource-ID",description:"Introduction",source:"@site/docs/guides/EOSC-getStatusData.md",sourceDirName:"guides",slug:"/guides/EOSC-getStatusData",permalink:"/argo-monitoring/docs/guides/EOSC-getStatusData",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Get Monitoring Status Data based on the Resource-ID"},sidebar:"tutorialSidebar",previous:{title:"Use Case  5: Third-party services exploiting EOSC Monitoring data",permalink:"/argo-monitoring/docs/guides/case5"},next:{title:"Introduction",permalink:"/argo-monitoring/docs/intro"}},l={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Solution",id:"solution",level:2},{value:"Step 1: Request an account",id:"step-1-request-an-account",level:3},{value:"Step 2 The response",id:"step-2-the-response",level:3},{value:"Step 3 Start using the api",id:"step-3-start-using-the-api",level:3},{value:"Example Request 1: Latest status result for endpoint with id: simple-queue",id:"example-request-1-latest-status-result-for-endpoint-with-id-simple-queue",level:4},{value:"Request",id:"request",level:5},{value:"Method",id:"method",level:6},{value:"Path",id:"path",level:6},{value:"Headers",id:"headers",level:6},{value:"Response",id:"response",level:5},{value:"Code",id:"code",level:6},{value:"Body",id:"body",level:6}],d={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"This use case covers the scenario of getting status data from the EOSC-Monitoring Service based on the resource-id.\nOne scenario is to get the status data of a service Onboarded to EOSC via the Providers Portal.\nBased on the Service-ID of the service from the  Providers Portal you can get the status from the monitoring service."),(0,a.kt)("h2",{id:"solution"},"Solution"),(0,a.kt)("p",null,"When a resource is on-boarded in the Providers Portal is automatically gets a resource-id. By the time it is on-boarded, it is also integrated with\nEOSC-Core services like Monitoring. The Monitoring Service based on the data defined in the Providers Portal, starts monitoring the resource and\ncreates near real time status reports, and availability and reliability reports. This is the information a customer can get for a resource. In this\nguide we describe how the customer can get the Status data for a specific resource-id."),(0,a.kt)("p",null,"In order to start getting status monitoring data for a service or a list of services, a customer should follow the steps described below. "),(0,a.kt)("h3",{id:"step-1-request-an-account"},"Step 1: Request an account"),(0,a.kt)("p",null,"The first step to start using/testing the service is to request an account via the EOSC helpdesk and from the unit monitoring service.\nJust create a ticket with the title Account request to fetch the status of the services.\nIn the description of the ticket please describe the use case and the service that needs this type of monitoring data. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("p",null," ",(0,a.kt)("em",{parentName:"p"},"Title"),": Account request to fetch the status of the services\n",(0,a.kt)("em",{parentName:"p"},"Description"),": I am the service owner of EOSC Marketplace and i would like to display the status monitoring data. I would like to request an account\nto get access to the onboarded resources.  "),(0,a.kt)("h3",{id:"step-2-the-response"},"Step 2 The response"),(0,a.kt)("p",null,"In the response you will get the following information "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"report_name")),(0,a.kt)("td",{parentName:"tr",align:null},"The Name of the report that contains information about the status of the resource id.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"URL")),(0,a.kt)("td",{parentName:"tr",align:null},"The URL where you may find the  api")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"account details")),(0,a.kt)("td",{parentName:"tr",align:null},"Your account details. We usually send them via another service (dnote) for security reasons")))),(0,a.kt)("h3",{id:"step-3-start-using-the-api"},"Step 3 Start using the api"),(0,a.kt)("p",null,"By the time you have the data described in the previous step, you can start using the API.\nThe API method supports 2 different methods "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a simple form: It will return the latest status result for the requested resource-id. With ",(0,a.kt)("inlineCode",{parentName:"li"},"view=details")," the user can examine a detailed timeline for the current day, or specify a different period of time (using ",(0,a.kt)("inlineCode",{parentName:"li"},"start_time")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"end_time"),")"),(0,a.kt)("li",{parentName:"ul"},"an advanced form: This form supports a number of filters which help the customer get more information about the requested resource-id. ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"?view=details"),": to view the most recent timeline of results for the requested resource-id"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"start_time"),": a parameter to view the detailed timeline of results for this specific resource-id under a certain period of time"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"end_time"),": the end_time of the period requested ")))),(0,a.kt)("p",null,"You may test the API call or get detailed information about the API method in the following links. "),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://argoeu.github.io/argo-web-api/docs/apiv3/v3_status_results/#get-list-latest-status-result-for-a-specific-endpoint-using-its-resource-id"},"Details of the API Call")," "),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://argoeu.github.io/argo-web-api/openapi/explore#/Status%20Results%20(v3)/statusEndpointsByID"},"Test it online: Status Results (v3): GET /v3/status/{report_name}/id/{resource_id}")),(0,a.kt)("h4",{id:"example-request-1-latest-status-result-for-endpoint-with-id-simple-queue"},"Example Request 1: Latest status result for endpoint with id: simple-queue"),(0,a.kt)("h5",{id:"request"},"Request"),(0,a.kt)("h6",{id:"method"},"Method"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"HTTP GET")),(0,a.kt)("h6",{id:"path"},"Path"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/api/v2/status/Report_A/id/simple-queue\n")),(0,a.kt)("h6",{id:"headers"},"Headers"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'x-api-key: "tenant_key_value"\nAccept: "application/json"\n')),(0,a.kt)("h5",{id:"response"},"Response"),(0,a.kt)("h6",{id:"code"},"Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Status: 200 OK\n")),(0,a.kt)("h6",{id:"body"},"Body"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "simple-queue",\n    "endpoints": [\n        {\n            "hostname": "queue01.example.com",\n            "service": "compute.queue",\n            "group": "Infra-01",\n            "info": {\n                "URL": "http://submit.queue01.example.com"\n            },\n            "statuses": [\n                {\n                    "timestamp": "2022-10-12T13:25:26Z",\n                    "value": "OK"\n                }\n            ]\n        }\n    ]\n}\n')))}p.isMDXComponent=!0}}]);