"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[298],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?i.createElement(g,o(o({ref:t},p),{},{components:n})):i.createElement(g,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3198:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(7462),r=(n(7294),n(3905));const a={sidebar_position:4,title:"Use Case 3: Integrate  External  Monitoring  service"},o=void 0,s={unversionedId:"guides/case3",id:"guides/case3",title:"Use Case 3: Integrate  External  Monitoring  service",description:"Introduction",source:"@site/docs/guides/case3.md",sourceDirName:"guides",slug:"/guides/case3",permalink:"/argo-monitoring/docs/guides/case3",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Use Case 3: Integrate  External  Monitoring  service"},sidebar:"tutorialSidebar",previous:{title:"Use Case 2: Monitor an Infrastructure (community)",permalink:"/argo-monitoring/docs/guides/case2"},next:{title:"Use Case 4: Combine Results of existing ARGO Tenants.",permalink:"/argo-monitoring/docs/guides/case4"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Solution",id:"solution",level:2},{value:"Step 1: EOSC helpdesk",id:"step-1-eosc-helpdesk",level:3},{value:"Step 2: The Monitoring team creates a new Tenant.",id:"step-2-the-monitoring-team-creates-a-new-tenant",level:3},{value:"Step 3: The monitoring team assists the interested party to create the necessary profiles.",id:"step-3-the-monitoring-team-assists-the-interested-party-to-create-the-necessary-profiles",level:3},{value:"Step 4:  Publish Metric Data",id:"step-4--publish-metric-data",level:3},{value:"Case 3.1: Supported monitoring Engine and Operating System (Nagios on Centos 7 or Debian 8).",id:"case-31-supported-monitoring-engine-and-operating-system-nagios-on-centos-7-or-debian-8",level:4},{value:"Case 3.2 Other monitoring systems",id:"case-32-other-monitoring-systems",level:4},{value:"Step 5: Start Monitoring",id:"step-5-start-monitoring",level:3}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"In order to be able to scale-out and take advantage of existing Monitoring systems, the EOSC Monitoring service is capable of accepting data from external sources. When referring to external sources we mean other monitoring engines that want to connect with the EOSC Monitoring Service. This use case is split in two different sections as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Case 3.1: Supported Monitoring Engine and Operating System (Nagios on Centos 7 or Debian 8)."),(0,r.kt)("li",{parentName:"ol"},"Case 3.2 Other Monitoring Engine and Operating System")),(0,r.kt)("h2",{id:"solution"},"Solution"),(0,r.kt)("p",null,"The connection of a monitoring system with EOSC is based mainly on the data that have the necessary information to create the final report. In this use case an external monitoring system replaces the internal monitoring engine and is thus reliable for the validity of the monitoring data that is published. "),(0,r.kt)("h3",{id:"step-1-eosc-helpdesk"},"Step 1: EOSC helpdesk"),(0,r.kt)("p",null,"The interested party opens a ticket on EOSC Helpdesk requesting to start the process to connect to the EOSC Monitoring Service. During the preparation of its  request they need to prepare their systems to be able to provide the following information: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The type of system used"),(0,r.kt)("li",{parentName:"ul"},"Infrastructure topology"),(0,r.kt)("li",{parentName:"ul"},"Personnel responsible for managing the necessary profiles "),(0,r.kt)("li",{parentName:"ul"},"URLs  for POEM and UI components. ")),(0,r.kt)("h3",{id:"step-2-the-monitoring-team-creates-a-new-tenant"},"Step 2: The Monitoring team creates a new Tenant."),(0,r.kt)("p",null,"The monitoring team creates a new tenant on the monitoring service and at the same time requests from the messaging team to create the necessary configuration on the EOSC Messaging service.  As a result the team will then send to the customer the necessary instructions and access tokens to connect to the Monitoring Service. "),(0,r.kt)("h3",{id:"step-3-the-monitoring-team-assists-the-interested-party-to-create-the-necessary-profiles"},"Step 3: The monitoring team assists the interested party to create the necessary profiles."),(0,r.kt)("p",null,"The profiles that need to be defined "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Metric Profile "),(0,r.kt)("li",{parentName:"ul"},"Aggregation Profile.")),(0,r.kt)("h3",{id:"step-4--publish-metric-data"},"Step 4:  Publish Metric Data"),(0,r.kt)("p",null,"The customer will need to make the necessary configuration on their monitoring engine in order to start publishing metric data via the EOSC messaging service.  The EOSC Monitoring Service supports two options "),(0,r.kt)("h4",{id:"case-31-supported-monitoring-engine-and-operating-system-nagios-on-centos-7-or-debian-8"},"Case 3.1: Supported monitoring Engine and Operating System (Nagios on Centos 7 or Debian 8)."),(0,r.kt)("p",null,"If the customers uses Nagios as its monitoring tool, EOSC Monitoring offers the argo-nagios-ams-publisher tool that is currently supported on Centos-7 and Debian-8",".","  argo-nagios-ams-publisher is a component acting as a bridge from Nagios to ARGO Messaging system and finally to the ARGO Monitoring Engine. It is responsible for forming and dispatching messages that wrap up results from the monitoring engine. In order to use the this solution the customer  will need to :"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"a)")," Install argo-nagios-ams-publisher and ams-library\n",(0,r.kt)("strong",{parentName:"p"},"b)")," Configure argo-nagios-ams-publisher\n",(0,r.kt)("strong",{parentName:"p"},"c)")," Enable OCSP in Nagios:"),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/nagios/nagios.cfg")," add this configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"obsess_over_services=1\nocsp_command=argo_service_check\nocsp_timeout=15\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"d)")," Add OCSP command:"),(0,r.kt)("p",null,"should add an OCSP command in  ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/nagios/objects/commands.cfg")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'define command {\n       command_name argo_service_check\n command_line /usr/bin/ams-metric-to-queue --queue /var/spool/argo-nagios-ams-publisher/metrics/  --hostname "$HOSTNAME$" --status "$SERVICESTATE$" --summary "$SERVICEOUTPUT$" --message "$LONGSERVICEOUTPUT$" --servicestatetype "$SERVICESTATETYPE$" --actual_data "$SERVICEPERFDATA$" --service "$_SERVICESERVICE_FLAVOUR$" --metric "$_SERVICEMETRIC_NAME$"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"e)")," All the Services to be published must have following attributes set:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"define service {\n \n    use                 generic-service; Name of service template to use\n    host_name               grnet.gr\n    service_description     HTTP\n    check_command           check_http\n    check_interval                  5\n   _service_flavour   WebPortal //the service \n   _metric_name   org.nagios.WebCheck\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"f)")," Start argo-nagios-ams-publisher by executing:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"service ams-publisherd start")),(0,r.kt)("h4",{id:"case-32-other-monitoring-systems"},"Case 3.2 Other monitoring systems"),(0,r.kt)("p",null,"In this solution - use case the client cannot or doesn't want to use the solution described in the case 3.1 . Then the external monitoring system should find a way to send the monitoring data (metric data) to the EOSC Monitoring . These data should follow a predefined format. "),(0,r.kt)("p",null,"The data should be stamped with their source and timestamp. Every metric should be prefixed with ","[","source","_","type","]",", following the metric naming best practises. Every metric is also labelled with the hostname and service description. These predefined messages should be sent to the EOSC Messaging service which is the service responsible to pass them to the computations engine which performs the necessary calculations to produce the reports. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "hostname": "host101.example.com",\n  "service": "eu.eosc.portal.services.url",\n  "metric": "org.nagios.WebCheck",\n  "timestamp": "2022-01-02T00:24:38Z",\n  "status": "OK",\n  "tags": {\n    "endpoint_group": "GroupA"\n  },\n  "summary": "200 OK",\n  "actual_data": "time=0.085796s;;;0.000000 size=1126B;;;0",\n  "monitoring_host": "monbox.example.com",//name of the external monitoring box \n  "message": "a more detailed message about the monitoring result"\n}\n')),(0,r.kt)("p",null,"Metric data comes in the form of avro files, (json files support currently in development )  and contains timestamped status information about the hostname, service and specific checks (metrics) that are being monitored. A typical item of information in the metric data contains the field listed in the snippet below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"namespace": "argo.avro",\n"type": "record",\n"name": "metric_data",\n"fields": [\n       {"name": "timestamp", "type": "string"},\n       {"name": "service", "type": "string"},\n       {"name": "hostname", "type": "string"},\n       {"name": "metric", "type": "string"},\n       {"name": "status", "type": "string"},\n       {"name": "monitoring_host", "type": ["null", "string"]},\n       {"name": "summary", "type": ["null", "string"]},\n       {"name": "message", "type": ["null", "string"]},\n       {"name": "tags", "type" : ["null", {"name" : "Tags",\n                             \n               "type" : "map",\n                                            "values" : ["null", "string"]\n                                          }]\n       }]\n}\n')),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Snippet: Accepted Avro schema")),(0,r.kt)("p",null,"The monitoring team will validate the published metric data against the supplied topology and perform a number of dry runs to ensure that there is no issue with the supplied data.  As soon as the metric data is validated by the Monitoring Team these will be the main data to compute A/R and status results. "),(0,r.kt)("h3",{id:"step-5-start-monitoring"},"Step 5: Start Monitoring"),(0,r.kt)("p",null,"Once information has been provided, the monitoring of the service starts and the ARGO monitoring Computation and Analytics component calculates availability and reliability of the service, and creates a report. The Infrastructure Manager can have a look at the A/R and status results from the dedicated UI.  Monitoring new services is described in ",(0,r.kt)("a",{parentName:"p",href:"/argo-monitoring/docs/guides/case1"},"Use Case 1"),"."))}m.isMDXComponent=!0}}]);