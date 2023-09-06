"use strict";(self.webpackChunkngrok_doc=self.webpackChunkngrok_doc||[]).push([[41546],{6470:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(59496),r=n(13352),a=n(7426);function s(e){let{name:t}=e;const n=(0,a.eZ)("ngrok-parse-integrations").find((e=>e.name===t)),s=[];let o=[];for(let a=0;a<n.docs.length;a++){const{contentTitle:e,excerpt:t,path:l,frontMatter:d}=n.docs[a];o.push(i.createElement(r.Z,{to:l,size:"sm",title:d?.title||e,description:d?.description||t})),(2==o.length||n.docs.length<2||a==n.docs.length-1)&&(s.push(i.createElement("div",{className:"ngrok--cards ngrok--cards-row"},o)),o=[])}return i.createElement(i.Fragment,null,s)}},13352:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(59496),r=n(45924),a=n(62515);function s(e){let{size:t,title:n}=e;switch(t){case"xs":case"sm":return i.createElement("h4",{className:"fw-600"},n);case"xl":return i.createElement("h2",{className:"fw-600"},n);default:return i.createElement("h3",{className:"fw-600"},n)}}function o(e){let{size:t,title:n,icon:r}=e;return r?i.createElement("div",{className:"ngrok--card-heading jc-space-between"},n&&i.createElement(s,{size:t,title:n}),r):n?i.createElement("div",{className:"ngrok--card-heading"},i.createElement(s,{size:t,title:n})):null}function l(e){let{to:t,note:n=!1,size:s="",title:l,img:d="",icon:c=!1,description:m=!1,descriptionLink:k=!1}=e;s=s.toLowerCase();let g=(0,r.W)("ngrok--card",{"ngrok--card-note":n,"ngrok--card-sm":"sm"==s,"ngrok--card-lg":"lg"==s,"ngrok--card-xl":"xl"==s});return i.createElement(a.Z,{to:t},i.createElement("div",{className:g},d&&i.createElement("img",{src:d}),i.createElement(o,{size:s,title:l,icon:c}),m&&i.createElement("p",null,m),k&&i.createElement("a",null,k)))}},48741:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=n(51163),r=(n(59496),n(49613)),a=n(6470);const s={name:"linkedin",title:"LinkedIn Integration Hub",sidebar_label:"LinkedIn",description:"Integrate with LinkedIn\n"},o=void 0,l={unversionedId:"integrations/linkedin/index",id:"integrations/linkedin/index",title:"LinkedIn Integration Hub",description:"Integrate with LinkedIn\n",source:"@site/docs/integrations/linkedin/index.mdx",sourceDirName:"integrations/linkedin",slug:"/integrations/linkedin/",permalink:"/docs/integrations/linkedin/",draft:!1,editUrl:"https://github.com/ngrok/ngrok-docs/edit/main/docs/integrations/linkedin/index.mdx",tags:[],version:"current",lastUpdatedBy:"Alan Shreve",lastUpdatedAt:1693163609,formattedLastUpdatedAt:"Aug 27, 2023",frontMatter:{name:"linkedin",title:"LinkedIn Integration Hub",sidebar_label:"LinkedIn",description:"Integrate with LinkedIn\n"},sidebar:"docs",previous:{title:"LaunchDarkly Webhooks",permalink:"/docs/integrations/launchdarkly/webhooks"},next:{title:"LinkedIn",permalink:"/docs/integrations/linkedin/oauth"}},d={},c=[],m={toc:c},k="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(k,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,s.description),(0,r.kt)(a.Z,{name:s.name,mdxType:"IntegrationPageList"}))}g.isMDXComponent=!0}}]);