"use strict";(self.webpackChunkargo_monitoring=self.webpackChunkargo_monitoring||[]).push([[514],{8704:function(e,t,n){n.r(t),n.d(t,{default:function(){return ee}});var a=n(7294),r=n(3905),o=n(2263),i=n(6291),l=n(261),c=n(6010),s=n(3018),d=n(3783),m=n(7898),u=n(5537),p=n(7462),b=function(e){return a.createElement("svg",(0,p.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},f=n(4973),v=n(3366),h=n(6742),E=n(3919),C=n(8617),_="menuLinkText_1J2g",g=["items"],k=["item"],Z=["item","onItemClick","activePath"],S=["item","onItemClick","activePath"],N=function e(t,n){return"link"===t.type?(0,s.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},I=(0,a.memo)((function(e){var t=e.items,n=(0,v.Z)(e,g);return a.createElement(a.Fragment,null,t.map((function(e,t){return a.createElement(T,(0,p.Z)({key:t,item:e},n))})))}));function T(e){var t=e.item,n=(0,v.Z)(e,k);switch(t.type){case"category":return 0===t.items.length?null:a.createElement(M,(0,p.Z)({item:t},n));case"link":default:return a.createElement(x,(0,p.Z)({item:t},n))}}function M(e){var t,n=e.item,r=e.onItemClick,o=e.activePath,i=(0,v.Z)(e,Z),l=n.items,d=n.label,m=n.collapsible,u=N(n,o),b=(0,s.uR)({initialState:function(){return!!m&&(!u&&n.collapsed)}}),f=b.collapsed,h=b.setCollapsed,E=b.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,r=e.setCollapsed,o=(0,s.D9)(t);(0,a.useEffect)((function(){t&&!o&&n&&r(!1)}),[t,o,n])}({isActive:u,collapsed:f,setCollapsed:h}),a.createElement("li",{className:(0,c.Z)("menu__list-item",{"menu__list-item--collapsed":f})},a.createElement("a",(0,p.Z)({className:(0,c.Z)("menu__link",(t={"menu__link--sublist":m,"menu__link--active":m&&u},t[_]=!m,t)),onClick:m?function(e){e.preventDefault(),E()}:void 0,href:m?"#":void 0},i),d),a.createElement(s.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:f},a.createElement(I,{items:l,tabIndex:f?-1:0,onItemClick:r,activePath:o})))}function x(e){var t=e.item,n=e.onItemClick,r=e.activePath,o=(0,v.Z)(e,S),i=t.href,l=t.label,s=N(t,r);return a.createElement("li",{className:"menu__list-item",key:l},a.createElement(h.Z,(0,p.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":s}),to:i},(0,E.Z)(i)&&{isNavLink:!0,exact:!0,onClick:n},o),(0,E.Z)(i)?l:a.createElement("span",null,l,a.createElement(C.Z,null))))}var y="sidebar_15mo",A="sidebarWithHideableNavbar_267A",w="sidebarHidden_2kNb",B="sidebarLogo_3h0W",L="menu_Bmed",P="menuWithAnnouncementBar_2WvA",H="collapseSidebarButton_1CGd",D="collapseSidebarButtonIcon_3E-R";function R(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,f.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,f.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",H),onClick:t},a.createElement(b,{className:D}))}function W(e){var t,n,r=e.path,o=e.sidebar,i=e.onCollapse,l=e.isHidden,d=function(){var e=(0,s.nT)().isClosed,t=(0,a.useState)(!e),n=t[0],r=t[1];return(0,m.Z)((function(t){var n=t.scrollY;e||r(0===n)})),n}(),p=(0,s.LU)(),b=p.navbar.hideOnScroll,f=p.hideableSidebar,v=(0,s.nT)().isClosed;return a.createElement("div",{className:(0,c.Z)(y,(t={},t[A]=b,t[w]=l,t))},b&&a.createElement(u.Z,{tabIndex:-1,className:B}),a.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",L,(n={},n[P]=!v&&d,n))},a.createElement("ul",{className:"menu__list"},a.createElement(I,{items:o,activePath:r}))),f&&a.createElement(R,{onClick:i}))}var F=function(e){var t=e.toggleSidebar,n=e.sidebar,r=e.path;return a.createElement("ul",{className:"menu__list"},a.createElement(I,{items:n,activePath:r,onItemClick:function(){return t()}}))};function z(e){return a.createElement(s.Cv,{component:F,props:e})}var Y=a.memo(W),J=a.memo(z);function K(e){var t=(0,d.Z)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(Y,e),r&&a.createElement(J,e))}var q=n(8909),G=n(4608),O="backToTopButton_35hR",Q="backToTopButtonShow_18ls";function U(){var e=(0,a.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var X=function(){var e,t=U(),n=t.smoothScrollTop,r=t.cancelScrollToTop,o=(0,a.useState)(!1),i=o[0],l=o[1];return(0,m.Z)((function(e,t){var n=e.scrollY;if(t){var a=n<t.scrollY;if(a||r(),n<300)l(!1);else if(a){var o=document.documentElement.scrollHeight;n+window.innerHeight<o&&l(!0)}else l(!1)}}),[]),a.createElement("button",{className:(0,c.Z)("clean-btn",O,(e={},e[Q]=i,e)),type:"button",title:"Scroll to top",onClick:function(){return n()}},a.createElement("svg",{viewBox:"0 0 24 24",width:"28"},a.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",fill:"currentColor"})))},j=n(5977),V={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docSidebarContainer:"docSidebarContainer_3Kbt",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"};function $(e){var t,n,i,d=e.currentDocRoute,m=e.versionMetadata,u=e.children,p=(0,o.Z)().isClient,v=m.pluginId,h=m.version,E=d.sidebar,C=E?m.docsSidebars[E]:void 0,_=(0,a.useState)(!1),g=_[0],k=_[1],Z=(0,a.useState)(!1),S=Z[0],N=Z[1],I=(0,a.useCallback)((function(){S&&N(!1),k(!g)}),[S]);return a.createElement(l.Z,{key:p,wrapperClassName:s.kM.wrapper.docPages,pageClassName:s.kM.page.docPage,searchMetadatas:{version:h,tag:(0,s.os)(v,h)}},a.createElement("div",{className:V.docPage},a.createElement(X,null),C&&a.createElement("aside",{className:(0,c.Z)(V.docSidebarContainer,(t={},t[V.docSidebarContainerHidden]=g,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(V.docSidebarContainer)&&g&&N(!0)}},a.createElement(K,{key:E,sidebar:C,path:d.path,onCollapse:I,isHidden:S}),S&&a.createElement("div",{className:V.collapsedDocSidebar,title:(0,f.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,f.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:I,onClick:I},a.createElement(b,{className:V.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,c.Z)(V.docMainContainer,(n={},n[V.docMainContainerEnhanced]=g||!C,n))},a.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",V.docItemWrapper,(i={},i[V.docItemWrapperEnhanced]=g,i))},a.createElement(r.Zo,{components:q.Z},u)))))}var ee=function(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,o=t.find((function(e){return(0,j.LX)(r.pathname,e)}));return o?a.createElement($,{currentDocRoute:o,versionMetadata:n},(0,i.Z)(t,{versionMetadata:n})):a.createElement(G.default,e)}}}]);