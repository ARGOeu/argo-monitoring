"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9948],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=s,g=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4459:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(7462),s=(n(7294),n(3905));const o={sidebar_position:8,title:"Process events/alerts directly from the source(AMS)"},a=void 0,i={unversionedId:"guides/AMS-consume-publish-events",id:"guides/AMS-consume-publish-events",title:"Process events/alerts directly from the source(AMS)",description:"All the events that compromise the produced alerts of the monitored",source:"@site/docs/guides/AMS-consume-publish-events.md",sourceDirName:"guides",slug:"/guides/AMS-consume-publish-events",permalink:"/argo-monitoring/docs/guides/AMS-consume-publish-events",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"Process events/alerts directly from the source(AMS)"},sidebar:"tutorialSidebar",previous:{title:"Get Monitoring Status Data based on the Resource-ID",permalink:"/argo-monitoring/docs/guides/EOSC-getStatusData"},next:{title:"Introduction",permalink:"/argo-monitoring/docs/intro"}},c={},l=[{value:"Initialising a connection",id:"initialising-a-connection",level:3},{value:"Consume Events from a Subscription",id:"consume-events-from-a-subscription",level:3},{value:"Publishing Events to a Topic",id:"publishing-events-to-a-topic",level:3}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"All the events that compromise the produced alerts of the monitored\nservices travel through ",(0,s.kt)("a",{parentName:"p",href:"https://argoeu.github.io/guides/messaging/"},"The Argo Messaging Service."),"\nThrough its supplementary tool, the ",(0,s.kt)("a",{parentName:"p",href:"https://argoeu.github.io/ams-library/"},"argo-ams-library"),"\na client can access the source directly and inspect the events, process them and even create its own\ndownward syncs.Although its recommended to use the library to interact with the\nmessaging service, you can also use plain HTTP requests."),(0,s.kt)("h3",{id:"initialising-a-connection"},"Initialising a connection"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'    # set up the ams client\n    ams_host = "{0}:{1}".format("example.com", str(443))\n    ams = ArgoMessagingService(endpoint=ams_host, project="test", token="secr3t")\n')),(0,s.kt)("h3",{id:"consume-events-from-a-subscription"},"Consume Events from a Subscription"),(0,s.kt)("p",null,"Topics are collections in the messaging service, that group events logically.\nTHe clients indicate which message goes to which topic.In order to consume events\nfrom a topic an assigned subscription to the desired topic is required.\nA topic can habe multiple subscriptions and the events will be replicated across\nall the attached subscriptions, meaning that no race data conditions may ever happen."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'\n    while True:\n        try:\n            # consume alerts\n            consumed_messages = ams.pull_sub(sub="test-sub", return_immediately=True, verify=True)\n            \n            if len(consumed_messages) == 0:\n                continue\n            \n            payload = consumed_messages[0][1].get_data()\n            ack_id = consumed_messages[0][0]\n\n            # if we can\'t parse the message body we should ack the message and move to the next\n            try:\n                payload = json.loads(payload)\n                LOGGER.info("Examining new message {0} . . .".format(ack_id))\n                \n                # here we can implement any filtering functionality\n                # after we ave successfully parsed the message payload\n                if !has_desired_payload(payload):\n                    continue\n                \n            except Exception as e:\n            \n                # in case we cannot parse the payload, we should ACK the message\n                # in order for the consumtion mechanism to bring us the next one\n                LOGGER.error("Cannot parse payload for message {0}.{1}.Skipping . . .".format(ack_id, str(e)))\n                try:\n                    ams.ack_sub(sub=args.sub, ids=[ack_id], verify=True)\n                    continue\n                except AmsException as e:\n                    LOGGER.error("Could not skip message {0}.{1}".format(ack_id, str(e)))\n                    continue\n\n')),(0,s.kt)("h3",{id:"publishing-events-to-a-topic"},"Publishing Events to a Topic"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'            \n            # after we filtered messages with the appropriate payload\n            # we can reformat our message and send it to another topic\n            # for example to archive some specific info about the event\n            formatted_message = format_message(payload)\n            try:\n                ams.publish(topic="test-topic", msg=[AmsMessage(data=formatted_message)], verify=True)\n            except AmsException as e:\n                LOGGER.error("Could not publish to topic.{0}".format(str(e)))\n                continue\n\n            # ack the original event in order for the consumption\n            # mechanism to bring the next event\n            try:\n                ams.ack_sub(sub=args.sub, ids=[ack_id], verify=true)\n            except AmsException as e:\n                LOGGER.error("Could not ack original event {0}.{1}".format(ack_id, str(e)))\n        except AmsException as e:\n            LOGGER.error("Cannot pull from subscription.{0}".format(str(e)))\n\n')))}p.isMDXComponent=!0}}]);