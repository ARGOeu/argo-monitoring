"use strict";(self.webpackChunkargo_monitoring=self.webpackChunkargo_monitoring||[]).push([[313],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return p}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(t),p=i,f=m["".concat(c,".").concat(p)]||m[p]||d[p]||o;return t?r.createElement(f,a(a({ref:n},l),{},{components:t})):r.createElement(f,a({ref:n},l))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8664:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return m}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],s={sidebar_position:2,title:"Downtimes"},c=void 0,u={unversionedId:"InformationFeeds/downtimes",id:"InformationFeeds/downtimes",isDocsHomePage:!1,title:"Downtimes",description:"The term downtime is used to refer to periods when a service is unavailable. Downtime can be caused by failure in hardware (physical equipment), (logic controlling equipment), interconnecting equipment (such as cables, facilities, routers,...), transmission (wireless, microwave, satellite), and/or capacity (system limits).",source:"@site/docs/InformationFeeds/downtimes.md",sourceDirName:"InformationFeeds",slug:"/InformationFeeds/downtimes",permalink:"/argo-monitoring/docs/InformationFeeds/downtimes",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Downtimes"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/argo-monitoring/docs/intro"},next:{title:"Topology",permalink:"/argo-monitoring/docs/InformationFeeds/topology"}},l=[{value:"How downtimes are used in the computations",id:"how-downtimes-are-used-in-the-computations",children:[]},{value:"How can i define the Downtime",id:"how-can-i-define-the-downtime",children:[]}],d={toc:l};function m(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The term downtime is used to refer to periods when a service is unavailable. Downtime can be caused by failure in hardware (physical equipment), (logic controlling equipment), interconnecting equipment (such as cables, facilities, routers,...), transmission (wireless, microwave, satellite), and/or capacity (system limits).\nApart from a downtime due to an unplanned event there is also downtime as a planned event due to a routing maintenance. "),(0,o.kt)("p",null,"Scheduling downtime is an effective way to prevent unnecessary or unwanted notifications from being received during a period of expected service interruption."),(0,o.kt)("p",null,"ARGO Monitoring Service takes into consideration the scheduled downtime to calculate the Reliability of a service or a group of services. At the same time the service doesnt send  unnecessary notifications during\nperiods of expected service interruption."),(0,o.kt)("h2",{id:"how-downtimes-are-used-in-the-computations"},"How downtimes are used in the computations"),(0,o.kt)("h2",{id:"how-can-i-define-the-downtime"},"How can i define the Downtime"))}m.isMDXComponent=!0}}]);