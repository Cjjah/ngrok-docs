"use strict";(self.webpackChunkngrok_doc=self.webpackChunkngrok_doc||[]).push([[99225],{6470:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(59496),a=n(13352),i=n(7426);function s(e){let{name:t}=e;const n=(0,i.eZ)("ngrok-parse-integrations").find((e=>e.name===t)),s=[];let o=[];for(let i=0;i<n.docs.length;i++){const{contentTitle:e,excerpt:t,path:c,frontMatter:l}=n.docs[i];o.push(r.createElement(a.Z,{to:c,size:"sm",title:l?.title||e,description:l?.description||t})),(2==o.length||n.docs.length<2||i==n.docs.length-1)&&(s.push(r.createElement("div",{className:"ngrok--cards ngrok--cards-row"},o)),o=[])}return r.createElement(r.Fragment,null,s)}},13352:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(59496),a=n(45924),i=n(62515);function s(e){let{size:t,title:n}=e;switch(t){case"xs":case"sm":return r.createElement("h4",{className:"fw-600"},n);case"xl":return r.createElement("h2",{className:"fw-600"},n);default:return r.createElement("h3",{className:"fw-600"},n)}}function o(e){let{size:t,title:n,icon:a}=e;return a?r.createElement("div",{className:"ngrok--card-heading jc-space-between"},n&&r.createElement(s,{size:t,title:n}),a):n?r.createElement("div",{className:"ngrok--card-heading"},r.createElement(s,{size:t,title:n})):null}function c(e){let{to:t,note:n=!1,size:s="",title:c,img:l="",icon:d=!1,description:u=!1,descriptionLink:m=!1}=e;s=s.toLowerCase();let g=(0,a.W)("ngrok--card",{"ngrok--card-note":n,"ngrok--card-sm":"sm"==s,"ngrok--card-lg":"lg"==s,"ngrok--card-xl":"xl"==s});return r.createElement(i.Z,{to:t},r.createElement("div",{className:g},l&&r.createElement("img",{src:l}),r.createElement(o,{size:s,title:c,icon:d}),u&&r.createElement("p",null,u),m&&r.createElement("a",null,m)))}},83272:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(51163),a=(n(59496),n(49613)),i=n(6470);const s={name:"square",title:"Square Integration Hub",sidebar_label:"Square",description:"Connect a third-party POS system to a Square Terminal, send customer data to\na CRM, and create email notifications for business critical events. No\nfirewalls, dynamic DNS, port forwarding, or VPNs required.\n",excerpt:"Securely integrate your applications with Square using ngrok.\n"},o=void 0,c={unversionedId:"integrations/square/index",id:"integrations/square/index",title:"Square Integration Hub",description:"Connect a third-party POS system to a Square Terminal, send customer data to\na CRM, and create email notifications for business critical events. No\nfirewalls, dynamic DNS, port forwarding, or VPNs required.\n",source:"@site/docs/integrations/square/index.mdx",sourceDirName:"integrations/square",slug:"/integrations/square/",permalink:"/docs/integrations/square/",draft:!1,editUrl:"https://github.com/ngrok/ngrok-docs/edit/main/docs/integrations/square/index.mdx",tags:[],version:"current",lastUpdatedBy:"Russ Savage",lastUpdatedAt:1691862991,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{name:"square",title:"Square Integration Hub",sidebar_label:"Square",description:"Connect a third-party POS system to a Square Terminal, send customer data to\na CRM, and create email notifications for business critical events. No\nfirewalls, dynamic DNS, port forwarding, or VPNs required.\n",excerpt:"Securely integrate your applications with Square using ngrok.\n"},sidebar:"docs",previous:{title:"Sonatype Nexus Webhooks",permalink:"/docs/integrations/sonatype-nexus/webhooks"},next:{title:"Square Webhooks",permalink:"/docs/integrations/square/webhooks"}},l={},d=[],u={toc:d},m="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,s.description),(0,a.kt)(i.Z,{name:s.name,mdxType:"IntegrationPageList"}))}g.isMDXComponent=!0}}]);