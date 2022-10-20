"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3341],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,g=m["".concat(p,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7401:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:2,title:"Guidelines for monitoring probes"},o=void 0,l={unversionedId:"monitoring/guidelines",id:"monitoring/guidelines",title:"Guidelines for monitoring probes",description:"Overview",source:"@site/docs/monitoring/guidelines.md",sourceDirName:"monitoring",slug:"/monitoring/guidelines",permalink:"/argo-monitoring/docs/monitoring/guidelines",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Guidelines for monitoring probes"},sidebar:"tutorialSidebar",previous:{title:"Monitoring guide for Service Providers",permalink:"/argo-monitoring/docs/monitoring/SP_guide"},next:{title:"Profiles",permalink:"/argo-monitoring/docs/category/profiles"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Development",id:"development",level:2},{value:"Actual Data",id:"actual-data",level:3},{value:"Packaging",id:"packaging",level:2},{value:"Integration, Testing and Deployment",id:"integration-testing-and-deployment",level:2},{value:"Testing",id:"testing",level:3},{value:"Deployment",id:"deployment",level:3}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"This document describes the policy to develop, package and integrate new probes into the ARGO Monitoring Engine."),(0,i.kt)("h2",{id:"development"},"Development"),(0,i.kt)("p",null,"Before starting with development, check if probe already exists on ",(0,i.kt)("a",{parentName:"p",href:"https://exchange.nagios.org/"},"Nagios Exchange"),"."),(0,i.kt)("p",null,"Please refer to the official Nagios documentation for probe development guidelines:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nagios-plugins.org/doc/guidelines.html"},"Nagios Development Guidelines"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://assets.nagios.com/downloads/nagioscore/docs/nagioscore/4/en/pluginapi.html"},"Nagios Plugin API"),".")),(0,i.kt)("p",null,"Probes can be developed in any of these languages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Python,"),(0,i.kt)("li",{parentName:"ul"},"Perl - in case of Perl use of module ",(0,i.kt)("inlineCode",{parentName:"li"},"Nagios::Plugin")," is highly recommended,"),(0,i.kt)("li",{parentName:"ul"},"C/C++,"),(0,i.kt)("li",{parentName:"ul"},"shell scripting (Bash, Bourne).")),(0,i.kt)("p",null,"ARGO Monitoring engine currently supports RHEL 7 and derivatives, so probes should use language versions and libraries provided for these distributions."),(0,i.kt)("p",null,"List of existing probes can be found in ",(0,i.kt)("a",{parentName:"p",href:"https://poem.argo.grnet.gr/ui/public_probes/"},"POEM"),"."),(0,i.kt)("p",null,"Some other conditions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Each probe ",(0,i.kt)("strong",{parentName:"p"},"must")," provide the following arguments:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"-h help (--help)\n-t timeout (--timeout)\n-H hostname (--hostname)\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The following arguments can also be used if applicable:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"-p port (--port)\n-u url (--url)\n-v verbose (--verbose)\n-w warning threshold (--warning)\n-c critical threshold (--critical)\n-u username (--username)\n-p password (--password)\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Maximum output size for test/plugin output is 16KB. Above that limit the output will be truncated."))),(0,i.kt)("h3",{id:"actual-data"},"Actual Data"),(0,i.kt)("p",null,"Actual data is additional information about service behaviour that can be used in combination with threshold mechanisms to generate new metrics. Probes can report actual data by following the ",(0,i.kt)("a",{parentName:"p",href:"https://nagios-plugins.org/doc/guidelines.html#AEN200"},"Nagios guidelines for performance data"),"."),(0,i.kt)("p",null,"Some other conditions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This is the expected format of actual data:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"'label'=value[UOM];[warn];[crit];[min];[max]\n")))),(0,i.kt)("h2",{id:"packaging"},"Packaging"),(0,i.kt)("p",null,"Probes must be provided in the form of RPM packages, where a single package may contain multiple probes. Please refer to the official EPEL documentation for packaging:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://fedoraproject.org/wiki/EPEL/GuidelinesAndPolicies"},"EPEL Guidelines And Policies"),".")),(0,i.kt)("p",null,"Some considerations about naming:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Package should ",(0,i.kt)("strong",{parentName:"li"},"ensure a unique namespace by using tenant, project (e.g. egi, eudat, argo) or product team (e.g. cream, htcondor) name"),"."),(0,i.kt)("li",{parentName:"ul"},"Package name should use ",(0,i.kt)("strong",{parentName:"li"},'"argo-probe-<project|organisation|team>-<service_name>" form')," where ",(0,i.kt)("inlineCode",{parentName:"li"},"<service_name>"),' is the name of the service probes are testing (e.g. argo-probe-grnet-agora). For more generic probes (not project specific) name "argo-probe-<service_type>" is also acceptable (e.g. argo-probe-webdav).')),(0,i.kt)("p",null,"Some considerations about structure:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Probes should be stored in directory:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/usr/libexec/argo/probes/")," (For more generic probes (not project specific) directory used by EPEL nagios probes (",(0,i.kt)("inlineCode",{parentName:"li"},"/usr/lib64/nagios/plugins/"),") is also acceptable.)"))),(0,i.kt)("li",{parentName:"ul"},"If probes create temporary files, package should create directory:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/var/spool/argo/probes/<probe_namespace>/")," with ownership nagios:nagios and permissions 750."))),(0,i.kt)("li",{parentName:"ul"},"If probes package contains configuration files, they should be stored in directory:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/etc/argo/probes/<probe_namespace>/"),".")))),(0,i.kt)("p",null,"Some considerations about dependencies management:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Each probe is responsible for handling its dependencies."),(0,i.kt)("li",{parentName:"ul"},"The environment needed to execute each probe must be defined by the probe.")),(0,i.kt)("h2",{id:"integration-testing-and-deployment"},"Integration, Testing and Deployment"),(0,i.kt)("p",null,"Each ",(0,i.kt)("inlineCode",{parentName:"p"},"<tenant|project|product team>")," develops and tests its own probes in their development environments. Pre-requirements for the integration and testing of probes are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Each ",(0,i.kt)("inlineCode",{parentName:"li"},"<tenant|project|product team>")," publishes probe(s) on an accessible:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Git repository with a valid RPM spec file;"),(0,i.kt)("li",{parentName:"ul"},"Yum repository with RPM packages."))),(0,i.kt)("li",{parentName:"ul"},"Each probe provides an accessible web page with the relevant documentation.")),(0,i.kt)("p",null,"Integration of new probes starts with adding above information into ",(0,i.kt)("a",{parentName:"p",href:"http://argoeu.github.io/poem/v1/"},"POEM"),"."),(0,i.kt)("h3",{id:"testing"},"Testing"),(0,i.kt)("p",null,"Testing consists of the following steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the probe is provided in Git repository ARGO will clone it and attempt to build the package."),(0,i.kt)("li",{parentName:"ul"},"ARGO will deploy the RPM package, test and validate the new probe.")),(0,i.kt)("h3",{id:"deployment"},"Deployment"),(0,i.kt)("p",null,"Deployment consists of the following steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ARGO in cooperation with the Service owner defines metric templates performed by the new probe in POEM."),(0,i.kt)("li",{parentName:"ul"},"ARGO in cooperation with the Service owner adds mappings between service flavours and metrics in POEM."),(0,i.kt)("li",{parentName:"ul"},"ARGO in cooperation with the Service owner follows project\u2019s procedures for deployment to production.")))}c.isMDXComponent=!0}}]);