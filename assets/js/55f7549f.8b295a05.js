"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5282],{6795:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>d,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var i=t(4848),s=t(8453);const r={sidebar_position:1,title:"Operations Profile"},d=void 0,l={id:"profiles/operations-profile",title:"Operations Profile",description:"Combining timelines",source:"@site/docs/profiles/operations-profile.md",sourceDirName:"profiles",slug:"/profiles/operations-profile",permalink:"/argo-monitoring/docs/profiles/operations-profile",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Operations Profile"},sidebar:"tutorialSidebar",previous:{title:"Profiles",permalink:"/argo-monitoring/docs/category/profiles"},next:{title:"Aggregation Profile",permalink:"/argo-monitoring/docs/profiles/aggregation-profile"}},o={},a=[{value:"Combining timelines",id:"combining-timelines",level:2},{value:"The use of operation profiles",id:"the-use-of-operation-profiles",level:2},{value:"Default operation profile",id:"default-operation-profile",level:2},{value:"Technical part",id:"technical-part",level:2}];function h(n){const e={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"combining-timelines",children:"Combining timelines"}),"\n",(0,i.jsx)(e.p,{children:"In many cases we need to provide results for top level items that are being monitored. For example if a database service is offered that relies on 2 different hosts, then we need to present a timeline with the status of the service offering itself during the day. To do that we need to combine appropriately the status timelines observed for the  hosts. There many ways to combine them but the usual cases are the following:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Service is deployed in a high availability fashion among hosts, so we need one of them to be ok for the general service offering to be working. In this case we say that the timelines are combined in an \u201cOR\u201d fashion. E.g. if host1 = OK, host2= CRITICAL the database service will be OK (see figure 1)"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Service is deployed in a distributed fashion among hosts, so all of them are needed to be in a working state so as the service to be considered in working state. In this case we say that the timelines are combined in an \u201cAND\u201d fashion. E.g. if host1 = OK, host2 = CRITICAL the service offered will be CRITICAL (see figure 2)"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["Figure 1: Service deployed in a high availability fashion\n",(0,i.jsx)(e.img,{src:t(4299).A+"",width:"1160",height:"660"})]}),"\n",(0,i.jsxs)(e.p,{children:["Figure 2: Service deployed in a distributed fashion\n",(0,i.jsx)(e.img,{src:t(9644).A+"",width:"1160",height:"660"})]}),"\n",(0,i.jsx)(e.h2,{id:"the-use-of-operation-profiles",children:"The use of operation profiles"}),"\n",(0,i.jsx)(e.p,{children:"Operations profiles are used in ARGO platform to declare ways in which the status timelines can be combined. Each operation profile is actually a configuration file in json format that consists of the following parts:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u0391 section to declare and enumerate all available statuses produced by monitoring checks. ARGO is agnostic on the names and number of statuses that can be produced by monitoring checks and they can be declared here. The default profile includes the usual array of statuses used in most monitoring systems (such as nagios) and that includes the following: OK, WARNING, CRITICAL, UNKNOWN, MISSING and DOWNTIME"}),"\n",(0,i.jsx)(e.li,{children:"A section to define some default states. For example here we can define that OK state means a working state etc."}),"\n",(0,i.jsx)(e.li,{children:"A section to declare all the available ways (operations) that these statuses can be combined to produce a top result. Here we have a list of operation names mapped to truth tables that contain all the available combinations of statuses and the produced results (see table 1, table 2)"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"Table 1 - the operations profile for AND operations is given in the following tabular:"}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"AND"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"OK"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"WARNING"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"UNKNOWN"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"MISSING"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"CRITICAL"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"DOWNTIME"})})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.strong,{children:"OK"})}),(0,i.jsx)(e.td,{children:"OK"}),(0,i.jsx)(e.td,{children:"WARNING"}),(0,i.jsx)(e.td,{children:"UNKNOWN"}),(0,i.jsx)(e.td,{children:"MISSING"}),(0,i.jsx)(e.td,{children:"CRITICAL"}),(0,i.jsx)(e.td,{children:"DOWNTIME"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.strong,{children:"WARNING"})}),(0,i.jsx)(e.td,{children:"WARNING"}),(0,i.jsx)(e.td,{children:"WARNING"}),(0,i.jsx)(e.td,{children:"UNKNOWN"}),(0,i.jsx)(e.td,{children:"MISSING"}),(0,i.jsx)(e.td,{children:"CRITICAL"}),(0,i.jsx)(e.td,{children:"DOWNTIME"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.strong,{children:"UNKNOWN"})}),(0,i.jsx)(e.td,{children:"UNKNOWN"}),(0,i.jsx)(e.td,{children:"UNKNOWN"}),(0,i.jsx)(e.td,{children:"UNKNOWN"}),(0,i.jsx)(e.td,{children:"MISSING"}),(0,i.jsx)(e.td,{children:"CRITICAL"}),(0,i.jsx)(e.td,{children:"DOWNTIME"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.strong,{children:"MISSING"})}),(0,i.jsx)(e.td,{children:"MISSING"}),(0,i.jsx)(e.td,{children:"MISSING"}),(0,i.jsx)(e.td,{children:"MISSING"}),(0,i.jsx)(e.td,{children:"MISSING"}),(0,i.jsx)(e.td,{children:"CRITICAL"}),(0,i.jsx)(e.td,{children:"DOWNTIME"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.strong,{children:"CRITICAL"})}),(0,i.jsx)(e.td,{children:"CRITICAL"}),(0,i.jsx)(e.td,{children:"CRITICAL"}),(0,i.jsx)(e.td,{children:"CRITICAL"}),(0,i.jsx)(e.td,{children:"CRITICAL"}),(0,i.jsx)(e.td,{children:"CRITICAL"}),(0,i.jsx)(e.td,{children:"CRITICAL"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.strong,{children:"DOWNTIME"})}),(0,i.jsx)(e.td,{children:"DOWNTIME"}),(0,i.jsx)(e.td,{children:"DOWNTIME"}),(0,i.jsx)(e.td,{children:"DOWNTIME"}),(0,i.jsx)(e.td,{children:"DOWNTIME"}),(0,i.jsx)(e.td,{children:"CRITICAL"}),(0,i.jsx)(e.td,{children:"DOWNTIME"})]})]})]}),"\n",(0,i.jsx)(e.p,{children:"As can be seen the most prominent status in the case of the \u201cAND\u201d operation is the CRITICAL, while the least prominent is the \u201cOK\u201d status."}),"\n",(0,i.jsx)(e.p,{children:"Table 2 - the operations profile for \u201cOR\u201d operations is given in the following tabular:"}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"OR"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"OK"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"WARNING"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"UNKNOWN"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"MISSING"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"CRITICAL"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"DOWNTIME"})})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.strong,{children:"OK"})}),(0,i.jsx)(e.td,{children:"OK"}),(0,i.jsx)(e.td,{children:"OK"}),(0,i.jsx)(e.td,{children:"OK"}),(0,i.jsx)(e.td,{children:"OK"}),(0,i.jsx)(e.td,{children:"OK"}),(0,i.jsx)(e.td,{children:"OK"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.strong,{children:"WARNING"})}),(0,i.jsx)(e.td,{children:"OK"}),(0,i.jsx)(e.td,{children:"WARNING"}),(0,i.jsx)(e.td,{children:"WARNING"}),(0,i.jsx)(e.td,{children:"WARNING"}),(0,i.jsx)(e.td,{children:"WARNING"}),(0,i.jsx)(e.td,{children:"WARNING"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.strong,{children:"UNKNOWN"})}),(0,i.jsx)(e.td,{children:"OK"}),(0,i.jsx)(e.td,{children:"WARNING"}),(0,i.jsx)(e.td,{children:"UNKNOWN"}),(0,i.jsx)(e.td,{children:"UNKNOWN"}),(0,i.jsx)(e.td,{children:"CRITICAL"}),(0,i.jsx)(e.td,{children:"UNKNOWN"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.strong,{children:"MISSING"})}),(0,i.jsx)(e.td,{children:"OK"}),(0,i.jsx)(e.td,{children:"WARNING"}),(0,i.jsx)(e.td,{children:"UNKNOWN"}),(0,i.jsx)(e.td,{children:"MISSING"}),(0,i.jsx)(e.td,{children:"CRITICAL"}),(0,i.jsx)(e.td,{children:"DOWNTIME"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.strong,{children:"CRITICAL"})}),(0,i.jsx)(e.td,{children:"OK"}),(0,i.jsx)(e.td,{children:"WARNING"}),(0,i.jsx)(e.td,{children:"CRITICAL"}),(0,i.jsx)(e.td,{children:"CRITICAL"}),(0,i.jsx)(e.td,{children:"CRITICAL"}),(0,i.jsx)(e.td,{children:"CRITICAL"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.strong,{children:"DOWNTIME"})}),(0,i.jsx)(e.td,{children:"OK"}),(0,i.jsx)(e.td,{children:"WARNING"}),(0,i.jsx)(e.td,{children:"UNKNOWN"}),(0,i.jsx)(e.td,{children:"DOWNTIME"}),(0,i.jsx)(e.td,{children:"CRITICAL"}),(0,i.jsx)(e.td,{children:"DOWNTIME"})]})]})]}),"\n",(0,i.jsx)(e.p,{children:"In the case of \u201cOR\u201d the most prominent status result is the \u201cOK\u201d."}),"\n",(0,i.jsx)(e.h2,{id:"default-operation-profile",children:"Default operation profile"}),"\n",(0,i.jsx)(e.p,{children:"ARGO provides a default operation profile capable for being used in most monitoring requirements that includes 6 monitoring states: OK, WARNING, CRITICAL, UNKNOWN, MISSING, DOWNTIME and two available operations on combining them: OR and AND"}),"\n",(0,i.jsx)(e.p,{children:"Below is the default operation profile used in JSON Format:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",children:'{\n            "id": "profile_uuid",\n            "date": "2015-01-01",\n            "name": "profile_name",\n            "available_states": [\n                "OK",\n                "WARNING",\n                "UNKNOWN",\n                "MISSING",\n                "CRITICAL",\n                "DOWNTIME"\n            ],\n            "defaults": {\n                "down": "DOWNTIME",\n                "missing": "MISSING",\n                "unknown": "UNKNOWN"\n            },\n            "operations": [\n                {\n                    "name": "AND",\n                    "truth_table": [\n                        {\n                            "a": "OK",\n                            "b": "OK",\n                            "x": "OK"\n                        },\n                        {\n                            "a": "OK",\n                            "b": "WARNING",\n                            "x": "WARNING"\n                        },\n                        {\n                            "a": "OK",\n                            "b": "UNKNOWN",\n                            "x": "UNKNOWN"\n                        },\n                        {\n                            "a": "OK",\n                            "b": "MISSING",\n                            "x": "MISSING"\n                        },\n                        {\n                            "a": "OK",\n                            "b": "CRITICAL",\n                            "x": "CRITICAL"\n                        },\n                        {\n                            "a": "OK",\n                            "b": "DOWNTIME",\n                            "x": "DOWNTIME"\n                        },\n                        {\n                            "a": "WARNING",\n                            "b": "WARNING",\n                            "x": "WARNING"\n                        },\n                        {\n                            "a": "WARNING",\n                            "b": "UNKNOWN",\n                            "x": "UNKNOWN"\n                        },\n                        {\n                            "a": "WARNING",\n                            "b": "MISSING",\n                            "x": "MISSING"\n                        },\n                        {\n                            "a": "WARNING",\n                            "b": "CRITICAL",\n                            "x": "CRITICAL"\n                        },\n                        {\n                            "a": "WARNING",\n                            "b": "DOWNTIME",\n                            "x": "DOWNTIME"\n                        },\n                        {\n                            "a": "UNKNOWN",\n                            "b": "UNKNOWN",\n                            "x": "UNKNOWN"\n                        },\n                        {\n                            "a": "UNKNOWN",\n                            "b": "MISSING",\n                            "x": "MISSING"\n                        },\n                        {\n                            "a": "UNKNOWN",\n                            "b": "CRITICAL",\n                            "x": "CRITICAL"\n                        },\n                        {\n                            "a": "UNKNOWN",\n                            "b": "DOWNTIME",\n                            "x": "DOWNTIME"\n                        },\n                        {\n                            "a": "MISSING",\n                            "b": "MISSING",\n                            "x": "MISSING"\n                        },\n                        {\n                            "a": "MISSING",\n                            "b": "CRITICAL",\n                            "x": "CRITICAL"\n                        },\n                        {\n                            "a": "MISSING",\n                            "b": "DOWNTIME",\n                            "x": "DOWNTIME"\n                        },\n                        {\n                            "a": "CRITICAL",\n                            "b": "CRITICAL",\n                            "x": "CRITICAL"\n                        },\n                        {\n                            "a": "CRITICAL",\n                            "b": "DOWNTIME",\n                            "x": "CRITICAL"\n                        },\n                        {\n                            "a": "DOWNTIME",\n                            "b": "DOWNTIME",\n                            "x": "DOWNTIME"\n                        }\n                    ]\n                },\n                {\n                    "name": "OR",\n                    "truth_table": [\n                        {\n                            "a": "OK",\n                            "b": "OK",\n                            "x": "OK"\n                        },\n                        {\n                            "a": "OK",\n                            "b": "WARNING",\n                            "x": "OK"\n                        },\n                        {\n                            "a": "OK",\n                            "b": "UNKNOWN",\n                            "x": "OK"\n                        },\n                        {\n                            "a": "OK",\n                            "b": "MISSING",\n                            "x": "OK"\n                        },\n                        {\n                            "a": "OK",\n                            "b": "CRITICAL",\n                            "x": "OK"\n                        },\n                        {\n                            "a": "OK",\n                            "b": "DOWNTIME",\n                            "x": "OK"\n                        },\n                        {\n                            "a": "WARNING",\n                            "b": "WARNING",\n                            "x": "WARNING"\n                        },\n                        {\n                            "a": "WARNING",\n                            "b": "UNKNOWN",\n                            "x": "WARNING"\n                        },\n                        {\n                            "a": "WARNING",\n                            "b": "MISSING",\n                            "x": "WARNING"\n                        },\n                        {\n                            "a": "WARNING",\n                            "b": "CRITICAL",\n                            "x": "WARNING"\n                        },\n                        {\n                            "a": "WARNING",\n                            "b": "DOWNTIME",\n                            "x": "WARNING"\n                        },\n                        {\n                            "a": "UNKNOWN",\n                            "b": "UNKNOWN",\n                            "x": "UNKNOWN"\n                        },\n                        {\n                            "a": "UNKNOWN",\n                            "b": "MISSING",\n                            "x": "UNKNOWN"\n                        },\n                        {\n                            "a": "UNKNOWN",\n                            "b": "CRITICAL",\n                            "x": "CRITICAL"\n                        },\n                        {\n                            "a": "UNKNOWN",\n                            "b": "DOWNTIME",\n                            "x": "UNKNOWN"\n                        },\n                        {\n                            "a": "MISSING",\n                            "b": "MISSING",\n                            "x": "MISSING"\n                        },\n                        {\n                            "a": "MISSING",\n                            "b": "CRITICAL",\n                            "x": "CRITICAL"\n                        },\n                        {\n                            "a": "MISSING",\n                            "b": "DOWNTIME",\n                            "x": "DOWNTIME"\n                        },\n                        {\n                            "a": "CRITICAL",\n                            "b": "CRITICAL",\n                            "x": "CRITICAL"\n                        },\n                        {\n                            "a": "CRITICAL",\n                            "b": "DOWNTIME",\n                            "x": "CRITICAL"\n                        },\n                        {\n                            "a": "DOWNTIME",\n                            "b": "DOWNTIME",\n                            "x": "DOWNTIME"\n                        }\n                    ]\n                }\n            ]\n        }\n'})}),"\n",(0,i.jsx)(e.h2,{id:"technical-part",children:"Technical part"}),"\n",(0,i.jsx)(e.p,{children:"The connection of the Operations profiles with the other components of ARGO"}),"\n",(0,i.jsx)(e.p,{children:"They are:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"defined in POEM"}),"\n",(0,i.jsx)(e.li,{children:"stored in ARGO Web API"}),"\n",(0,i.jsx)(e.li,{children:"Used for the computations in the Analytics Engine"}),"\n"]})]})}function c(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},4299:(n,e,t)=>{t.d(e,{A:()=>i});const i=t.p+"assets/images/service_example_ha-95ed727837b153df20a36e5e000efd0e.jpg"},9644:(n,e,t)=>{t.d(e,{A:()=>i});const i=t.p+"assets/images/service_example_hb-854090cf0063671e78f4493db801adfa.jpg"},8453:(n,e,t)=>{t.d(e,{R:()=>d,x:()=>l});var i=t(6540);const s={},r=i.createContext(s);function d(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:d(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);