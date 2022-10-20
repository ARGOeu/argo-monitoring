"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1812],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(r),d=i,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9766:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_position:5,title:"Metrics Tags"},o=void 0,c={unversionedId:"profiles/metrics-tags",id:"profiles/metrics-tags",title:"Metrics Tags",description:"Description",source:"@site/docs/profiles/metrics-tags.md",sourceDirName:"profiles",slug:"/profiles/metrics-tags",permalink:"/argo-monitoring/docs/profiles/metrics-tags",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Metrics Tags"},sidebar:"tutorialSidebar",previous:{title:"Metrics Profile",permalink:"/argo-monitoring/docs/profiles/metrics-profile"},next:{title:"Reports",permalink:"/argo-monitoring/docs/category/reports"}},s={},l=[{value:"Description",id:"description",level:2},{value:"Example - Metric Tags",id:"example---metric-tags",level:3},{value:"Technical part",id:"technical-part",level:3}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"I would like to know the percentage of metrics that appear CRITICAL status (a.k.a failure) due to network problems. Is this possible? . This was a question we had to reply to, some time ago. ",(0,i.kt)("strong",{parentName:"p"},"And now yes it is possible.")," "),(0,i.kt)("p",null,"In order to support this functionality, some semantics (tags) are added to metrics to categorize them. A metric could be characterized by multiple tags. By this categorization it is easy to conclude into statistics about each metric category. "),(0,i.kt)("p",null,"An infrastructure may offer various services, of which functionality is checked periodically by metrics. Each metric can be characterized / grouped via different ways. We could say that they could be grouped : "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"by the functionality they check"),(0,i.kt)("li",{parentName:"ul"},"the reason for failure"),(0,i.kt)("li",{parentName:"ul"},"or any other characteristic")),(0,i.kt)("h3",{id:"example---metric-tags"},"Example - Metric Tags"),(0,i.kt)("p",null,"For example a metric can be a metric that has to deal with a network or with an authentication check. This means that we may characterize that the service or service component may fail due to network problems or due to authentication problems etc.\nAt the same time, this helps the monitoring service to characterize and organize the metrics in groups and provide insights and trends for the different levels of topology (Infrastructure / Groups / Services / Service components) . This helps us easily to conclude into statistics about each metric category. It is useful to acknowledge statistics of each metric category or each metric failure reason, or any other characteristic. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"http.download")," is a metric to check if download functionality operates well")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"http.upload")," is a metric to check if upload functionality operates well"),(0,i.kt)("p",{parentName:"li"},"The two metrics can fail due to network problems ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"CertValidity")," is a metric to check if the certification is valid, it is an authentication check and can fail due to  invalid certificate or connection problems"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"the metric tags profile for these metrics could be:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'    {\n           "name": "http.download",\n           "tags": [\n               "network"\n           ]\n       },\n       {\n           "name": "http.upload",\n           "tags": [\n               "network"\n           ]\n       },\n       {\n           "name": "CertValidity",\n           "tags": [\n                     "auth", "invalid","internal"\n\n           ]\n       }\n')),(0,i.kt)("p",null,"During the computations the tag information about each metric check is preserved and added to the results when needed. This information can be used for further computations applied on metric tags. "),(0,i.kt)("h3",{id:"technical-part"},"Technical part"),(0,i.kt)("p",null,"The connection of the Metric Tags profiles with the other components of ARGO "),(0,i.kt)("p",null,"They are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"defined in POEM "),(0,i.kt)("li",{parentName:"ul"},"stored in ARGO Web API "),(0,i.kt)("li",{parentName:"ul"},"Used for the computations in the Analytics Engine "),(0,i.kt)("li",{parentName:"ul"},"Presented in the ARGO Web UI.")))}u.isMDXComponent=!0}}]);