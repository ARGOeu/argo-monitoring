"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[14],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=i,f=p["".concat(c,".").concat(h)]||p[h]||u[h]||o;return n?a.createElement(f,r(r({ref:t},d),{},{components:n})):a.createElement(f,r({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6128:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_position:4,title:"Technical and organisational measures (TOM)"},r=void 0,s={unversionedId:"policies/tom",id:"policies/tom",title:"Technical and organisational measures (TOM)",description:"According to Art. 32, EU General Data Protection Regulation (GDPR)",source:"@site/docs/policies/tom.md",sourceDirName:"policies",slug:"/policies/tom",permalink:"/argo-monitoring/docs/policies/tom",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Technical and organisational measures (TOM)"},sidebar:"tutorialSidebar",previous:{title:"Privacy Policy",permalink:"/argo-monitoring/docs/policies/Privacy"}},c={},l=[{value:"According to Art. 32, EU General Data Protection Regulation (GDPR)",id:"according-to-art-32-eu-general-data-protection-regulation-gdpr",level:3},{value:"1.  Confidentiality",id:"1--confidentiality",level:4},{value:"2. Integrity",id:"2-integrity",level:4},{value:"3.  Availability and Resilience",id:"3--availability-and-resilience",level:4},{value:"4.  Procedures for regular Review, Assessment and Evaluation",id:"4--procedures-for-regular-review-assessment-and-evaluation",level:4},{value:"5.  Organization and Data Protection",id:"5--organization-and-data-protection",level:4},{value:"6.  Certifications",id:"6--certifications",level:4}],d={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"according-to-art-32-eu-general-data-protection-regulation-gdpr"},"According to Art. 32, EU General Data Protection Regulation (GDPR)"),(0,i.kt)("p",null,"This document describes the technical and organisational measures established by National Infrastructures for Research and Technology S.A. (GRNET S.A.) to meet legal and contractual requirements when processing personal data, conducting a higher level of security and protection."),(0,i.kt)("p",null,"The definitions in Article 32 of the GDPR apply."),(0,i.kt)("h4",{id:"1--confidentiality"},"1.  Confidentiality"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Physical Access Control\nActions suitable for providing physical and environmental security of data centers, server room facilities, and working areas are adapted, while  precautions against environmental threats and power disruptions are also granted. Access is limited by job role and subject to authorised approval.  Technical and organisational measures that are taken into account involve security guard personnel, reception, doorbell systems, manual locking systems, and video surveillance of entrances.  Entrance to the building is only possible with keycards and keys provided to authorised employees or by visitors accompanied by employees, preventing unauthorised persons from accessing secured areas. Additionally, Information on security policy, work instructions for operational safety, and access control are provided."),(0,i.kt)("li",{parentName:"ol"},"Logical Access Control\nOperations sufficient for preventing data processing systems from being used by unauthorised persons are applied. Logical access controls are\ndesigned based on authority levels and job functions. Granting access is gained on a need-to-know and least privilege basis, where it is restricted\nto authorised employees responsible for the job. The use of unique IDs -identified through Active Directory- and passwords for all users is adapted,\nincluding a periodic review and revoking access when employment terminates or changes in job functions occur. Technical and organisational measures\nthat are taken into account involve; username and password protected systems, intrusion detection facilities, use of Virtual Private Networks (VPNs)\nfor remote access, firewalls, intrusion Detection System (IDS), user permission management, information security policy, work instruction of IT user\nregulations, operation security and access control."),(0,i.kt)("li",{parentName:"ol"},"Authorization Control\nActions to ensure that those authorized to use a data processing system can only access the data subject to their access authorization -based on\ntheir rule- and that personal data cannot be read, copied, modified, or removed without authorization during processing, use and after storage.\nTechnical operations incorporate physical deletion of data carriers, logging of accesses to applications, specifically when entering, changing, and\ndeleting data, SSH encrypted access, and certified SSL encryption. At the organisational level, a minimum number of administrators is applied,\nmanagement of user rights are controlled by administrators, work instruction communication security and handling of information and values are also\nclaimed."),(0,i.kt)("li",{parentName:"ol"},"Separation Control\nIt is ensured that personal data collected for different purposes can be processed separately. Multi-tenancy of relevant applications is performed,\nor systems are physically or logically separated. The development sheet is separated for each product, and the services have their own line of\nenvironments. All environments, documents and other data are shared for the members of that project/product, while operational, information and data\nprotection securities and policies are applied."),(0,i.kt)("li",{parentName:"ol"},"Pseudonymization\nOperations for pseudonymization or anonymization of personal data are implemented to the extent necessary. Internal instruction to pseudonymize or\nanonymize personal data as far as possible in the event of disclosure or even after the statutory deletion period has expired. Specific internal\nregulations on cryptography, while operational, information and data protection securities and policies are applied.")),(0,i.kt)("h4",{id:"2-integrity"},"2. Integrity"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Transfer Control\nMeasures are taken into account to ensure that personal data cannot be read, copied, altered or removed by unauthorized persons during electronic transmission or while being transported or stored on data media. As technical and organizational actions are the use of Virtual Private Networks (VPNs) and firewalls, the provision via encrypted connections and techniques such as SSH, SFTP, HTTPS and secure cloudstores, the logging ofaccesses and retrievals, while operational, information and data protection securities and policies are also applied.\n"),(0,i.kt)("li",{parentName:"ol"},"Input Control\nOperations that ensure that it is possible to check and establish retrospectively whether and by whom personal data has been entered into, modified or removed from data processing systems are implemented to the extent necessary. Input control is achieved through logging, which can take place at various levels (e.g., operating system, network, firewall, database, application). Traceability of data entry, modification and deletion through individual user names, assignment of rights to enter, change and delete data on the basis of an authorisation concept, while information security policy and work instruction of IT user regulations are engaged.")),(0,i.kt)("h4",{id:"3--availability-and-resilience"},"3.  Availability and Resilience"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Availability Control\nActions to ensure that personal data is protected against accidental destruction or loss have been implemented to the required extent. Measures comprise fire and smoke detection systems, fire extinguishers, air-conditioning, temperature and humidity monitoring and video surveillance in server rooms, UPS system and emergency diesel generators deployment, RAID system and hard disk mirroring for data backup, information security policy and work instruction operational security.\n"),(0,i.kt)("li",{parentName:"ol"},"Recoverability Control\nData backups of databases and operating system images are taken to the extent required and with the aim of preventing the loss of personal data in\nthe event of physical or technical incident. Backups are performed for network drives and servers in productive operation, where the process is being\nrecorded (logged). The backup concept is applied according to criticality and customer specifications. When applicable storage of backup media\nobtained in a safe place outside the server room. Information security policy and work instruction of IT user regulations are also engaged.")),(0,i.kt)("h4",{id:"4--procedures-for-regular-review-assessment-and-evaluation"},"4.  Procedures for regular Review, Assessment and Evaluation"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Data Protection Management\nTechnical and organizational measures that are taken into account are; central documentation of all data protection regulations with access for\nemployees, security certification according to ISO 27001. Updates and reviews of the effectiveness of the TOMs are carried out periodically. Data\nprotection checkpoints are consistently implemented, while data processing systems (IT systems) are checked regularly to the extent required and\nafter changes to ensure that they are functioning properly. A Data Protection Officer (DPO) group is appointed and notified of physical or technical\nincidents, and staff is trained and obliged to confidentiality and data secrecy. Data Protection Impact Assessment (DPIA) is carried out as required,\nwhereas processes regarding information obligations according to Art. 13 and 14 GDPR are established."),(0,i.kt)("li",{parentName:"ol"},"Incident Response Management\nTechnical and organizational actions have been established to the extent required for security breach response and data breach process. The use and\nthe regular updating of firewall, spam filters, virus scanning, Intrusion Detection System (IDS), and Intrusion Prevention System (IPS) for customer\nsystems on order, are served. The process for detecting and reporting security incidents and data breaches is being documented via ticket system,\nwith regard to reporting obligation to the supervisory authority. Formalized procedure for handling security incidents, including the involvement of\nDPO and ISO in security incidents and data breaches is available, while operational, information, data protection and IT user regulations, securities\nand policies are also applied. "),(0,i.kt)("li",{parentName:"ol"},'Data Protection by Design and by Default\nMeasures pursuant to Art 25 GDPR comply with the principles of data protection by design and by default. No more personal data is collected than is\nnecessary for the respective purpose. Data Protection Policy (includes principles "privacy by design and by default").'),(0,i.kt)("li",{parentName:"ol"},"Order Control (outsourcing, subcontractors, and order processing)\nActions to ensure that personal data processed on behalf of the client can only be processed in accordance with the client's instructions. Technical\nand organizational measures have been established to the required extent. Measures involve monitoring of remote access by external parties, in the\ncontext of remote support and work instruction supplier management and supplier evaluation. Moreover, a prior review of the security measures taken\nby the contractor and their documentation is applied. Selection of the contractor under due diligence aspects (especially with regard to data\nprotection and data security) is achieved. Conclusion of the necessary data processing agreement on commissioned processing or EU standard\ncontractual clauses and a framework agreement on contractual data processing within the group of companies, where written instructions to the\ncontractor and obligation of the contractor's employees to maintain data secrecy. Additionally, an agreement on effective control rights over the\ncontractor and regulations on the use of further subcontractors is maintained, ensuring also the destruction of data after termination of the\ncontract or in the case of longer collaboration, ongoing review of the contractor and its level of protection.")),(0,i.kt)("h4",{id:"5--organization-and-data-protection"},"5.  Organization and Data Protection"),(0,i.kt)("p",null,"The National Infrastructures for Research and Technology S.A. (GRNET S.A.), based on Its Quality and Information Security Policies has set itself the goal of providing products and services to be delivered at the highest possible level of information security in compliance with the law.  In this context GRNET S.A. has established, the roles of Information Security Officer (ISO), Data Protection Officer (DPO), Quality Officer (QO), and Legal Compliance Officer (LCO) as well as a Corporate Binding Rules (a set of internal guidelines and regulations) on information security and data protection, that are contractually binding for all employees, that defines secure information and data handling formed in secrecy and confidentiality.\nEmployees are continuously informed and trained in the area of data protection, while third parties who may come into contact with personal data in the course of their work for GRNET S.A. are obligated to comply with data protection and data secrecy by means of a so-called NDA (Non-Disclosure Agreement)\nbefore they begin their work.  Any subcontractors entrusted with further processing are only used after approval by the clients and after the conclusion of a Data Processing Agreement (DPA) in accordance with Art 28 GDPR, with which they are fully bound by all data protection obligations to which GRNET S.A. itself is subject.  Current high technical security standards at GRNET S.A. are periodically reviewed and confirmed for adequacy and effectiveness in the course of ongoing internal audits and annually by Independent, External, Accredited Certification Bodies."),(0,i.kt)("h4",{id:"6--certifications"},"6.  Certifications"),(0,i.kt)("p",null,"The Quality Management System (QMS) as well as the Information Security Management System (ISMS) of GRNET S.A. are both certified by Independent Accredited Certification Bodies according to ISO 9001 and ISO 27001."))}u.isMDXComponent=!0}}]);