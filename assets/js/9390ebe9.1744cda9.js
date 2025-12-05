"use strict";(self.webpackChunkdg_knowlege_base=self.webpackChunkdg_knowlege_base||[]).push([[8155],{9044:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>N,contentTitle:()=>k,default:()=>A,frontMatter:()=>w,metadata:()=>r,toc:()=>T});let r=JSON.parse('{"id":"api-guide","title":"API Guide","description":"API Reference","source":"@site/docs/Final_events_api_guide_full_latest.mdx","sourceDirName":".","slug":"/api-guide","permalink":"/datagol-knowlegde-base-v1/docs/api-guide","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1764953955000,"sidebarPosition":14,"frontMatter":{"id":"api-guide","title":"API Guide","sidebar_position":14},"sidebar":"tutorialSidebar","previous":{"title":"FAQs","permalink":"/datagol-knowlegde-base-v1/docs/datagol-faq"},"next":{"title":"Workbook Lineage","permalink":"/datagol-knowlegde-base-v1/docs/Data Lineage/workbook-lineage"}}');var a=s(74848),t=s(28453),i=s(96540),o=s(34164),d=s(75933),l=s(56347),c=s(13321),h=s(72742),p=s(54135),u=s(33645);function m(e){return i.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function x({value:e,tabValues:n}){return n.some(n=>n.value===e)}var j=s(12075);function g({className:e,block:n,selectedValue:s,selectValue:r,tabValues:t}){let i=[],{blockElementScrollPositionUntilNextRender:l}=(0,d.a_)(),c=e=>{let n=e.currentTarget,a=t[i.indexOf(n)].value;a!==s&&(l(n),r(a))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{let s=i.indexOf(e.currentTarget)+1;n=i[s]??i[0];break}case"ArrowLeft":{let s=i.indexOf(e.currentTarget)-1;n=i[s]??i[i.length-1]}}n?.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},e),children:t.map(({value:e,label:n,attributes:r})=>(0,a.jsx)("li",{role:"tab",tabIndex:s===e?0:-1,"aria-selected":s===e,ref:e=>{i.push(e)},onKeyDown:h,onClick:c,...r,className:(0,o.A)("tabs__item","tabItem_LNqP",r?.className,{"tabs__item--active":s===e}),children:n??e},e))})}function f({lazy:e,children:n,selectedValue:s}){let r=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){let e=r.find(e=>e.props.value===s);return e?(0,i.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:r.map((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==s}))})}function v(e){let n=function(e){let{defaultValue:n,queryString:s=!1,groupId:r}=e,a=function(e){let{values:n,children:s}=e;return(0,i.useMemo)(()=>{let e=n??m(s).map(({props:{value:e,label:n,attributes:s,default:r}})=>({value:e,label:n,attributes:s,default:r})),r=(0,p.XI)(e,(e,n)=>e.value===n.value);if(r.length>0)throw Error(`Docusaurus error: Duplicate values "${r.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`);return e},[n,s])}(e),[t,o]=(0,i.useState)(()=>(function({defaultValue:e,tabValues:n}){if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!x({value:e,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let s=n.find(e=>e.default)??n[0];if(!s)throw Error("Unexpected error: 0 tabValues");return s.value})({defaultValue:n,tabValues:a})),[d,j]=function({queryString:e=!1,groupId:n}){let s=(0,l.W6)(),r=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:e,groupId:n});return[(0,h.aZ)(r),(0,i.useCallback)(e=>{if(!r)return;let n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})},[r,s])]}({queryString:s,groupId:r}),[g,f]=function({groupId:e}){let n=e?`docusaurus.tab.${e}`:null,[s,r]=(0,u.Dv)(n);return[s,(0,i.useCallback)(e=>{n&&r.set(e)},[n,r])]}({groupId:r}),v=(()=>{let e=d??g;return x({value:e,tabValues:a})?e:null})();return(0,c.A)(()=>{v&&o(v)},[v]),{selectedValue:t,selectValue:(0,i.useCallback)(e=>{if(!x({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);o(e),j(e),f(e)},[j,f,a]),tabValues:a}}(e);return(0,a.jsxs)("div",{className:(0,o.A)("tabs-container","tabList__CuJ"),children:[(0,a.jsx)(g,{...n,...e}),(0,a.jsx)(f,{...n,...e})]})}function b(e){let n=(0,j.A)();return(0,a.jsx)(v,{...e,children:m(e.children)},String(n))}function y({children:e,hidden:n,className:s}){return(0,a.jsx)("div",{role:"tabpanel",className:(0,o.A)("tabItem_Ymn6",s),hidden:n,children:e})}let w={id:"api-guide",title:"API Guide",sidebar_position:14},k=void 0,N={},T=[{value:"\u{1F680} Base URL and configuration",id:"-base-url-and-configuration",level:2},{value:"\u{1F510} Authentication overview",id:"-authentication-overview",level:2},{value:"Authentication methods",id:"authentication-methods",level:3},{value:"\u{1F511} User authentication",id:"-user-authentication",level:2},{value:"Login endpoint",id:"login-endpoint",level:3},{value:"\u{1F3E2} Identity (IdP) APIs",id:"-identity-idp-apis",level:2},{value:"Create Service Account",id:"create-service-account",level:3},{value:"Reset Service Account Token",id:"reset-service-account-token",level:3},{value:"Delete Service Account",id:"delete-service-account",level:3},{value:"\u{1F4CA} Data (noCo) APIs",id:"-data-noco-apis",level:2},{value:"Get Table Schema",id:"get-table-schema",level:3},{value:"Get Table Data",id:"get-table-data",level:3},{value:"Execute SQL Query",id:"execute-sql-query",level:3},{value:"\u{1F504} Complete workflow",id:"-complete-workflow",level:2},{value:"\u{1F4CB} Common headers",id:"-common-headers",level:2},{value:"\u26A0\uFE0F Security and error handling",id:"\uFE0F-security-and-error-handling",level:2},{value:"\u{1F4BB} Code samples",id:"-code-samples",level:2}];function _(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"api-guide-header",children:[(0,a.jsxs)("div",{className:"api-badge",children:[(0,a.jsx)("span",{className:"badge badge--primary",children:"API Reference"}),(0,a.jsx)("span",{className:"badge badge--secondary",children:"v2.0"})]}),(0,a.jsxs)("div",{className:"api-intro",children:[(0,a.jsx)("p",{className:"api-description",children:(0,a.jsx)(n.p,{children:"Master the API with our comprehensive guide covering authentication, service account management, and data querying.\nIncludes production-ready code samples in multiple programming languages."})}),(0,a.jsxs)("div",{className:"language-support",children:[(0,a.jsx)("span",{className:"language-badge",children:"React"}),(0,a.jsx)("span",{className:"language-badge",children:"Python"}),(0,a.jsx)("span",{className:"language-badge",children:"JavaScript"}),(0,a.jsx)("span",{className:"language-badge",children:"Go"}),(0,a.jsx)("span",{className:"language-badge",children:"C++"})]})]})]}),"\n",(0,a.jsxs)(n.admonition,{title:"Quick start",type:"info",children:[(0,a.jsx)(n.p,{children:"This guide covers two main authentication flows:"}),(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"User Authentication"})," - JWT-based login for identity management"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Service Account Authentication"})," - Token-based access for data operations"]}),"\n"]})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"-base-url-and-configuration",children:"\u{1F680} Base URL and configuration"}),"\n",(0,a.jsxs)("div",{className:"base-url-container",children:[(0,a.jsxs)("div",{className:"base-url-badge",children:[(0,a.jsx)("strong",{children:"Base URL:"}),(0,a.jsx)("code",{className:"base-url",children:(0,a.jsx)(n.a,{href:"https://www.example.com",children:"https://www.example.com"})})]}),(0,a.jsx)("p",{className:"base-url-note",children:"All endpoints below are relative to this base URL."})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"-authentication-overview",children:"\u{1F510} Authentication overview"}),"\n",(0,a.jsxs)("div",{className:"auth-flow-diagram",children:[(0,a.jsxs)("div",{className:"auth-step",children:[(0,a.jsx)("div",{className:"step-number",children:"1"}),(0,a.jsxs)("div",{className:"step-content",children:[(0,a.jsx)("h4",{children:"User Login (JWT)"}),(0,a.jsx)("p",{children:"Authenticate with email/password to get JWT token"})]})]}),(0,a.jsx)("div",{className:"auth-arrow",children:"\u2192"}),(0,a.jsxs)("div",{className:"auth-step",children:[(0,a.jsx)("div",{className:"step-number",children:"2"}),(0,a.jsxs)("div",{className:"step-content",children:[(0,a.jsx)("h4",{children:"Service Account"}),(0,a.jsx)("p",{children:"Create or manage service account tokens"})]})]}),(0,a.jsx)("div",{className:"auth-arrow",children:"\u2192"}),(0,a.jsxs)("div",{className:"auth-step",children:[(0,a.jsx)("div",{className:"step-number",children:"3"}),(0,a.jsxs)("div",{className:"step-content",children:[(0,a.jsx)("h4",{children:"Data Access"}),(0,a.jsx)("p",{children:"Use service token to access data APIs"})]})]})]}),"\n",(0,a.jsx)(n.h3,{id:"authentication-methods",children:"Authentication methods"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Method"}),(0,a.jsx)(n.th,{children:"Header"}),(0,a.jsx)(n.th,{children:"Usage"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.strong,{children:"User Login"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Authorization: Bearer &lt;JWT&gt;"})}),(0,a.jsx)(n.td,{children:"Identity management endpoints"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.strong,{children:"Service Account"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"x-auth-token: &lt;token&gt;"})}),(0,a.jsx)(n.td,{children:"Data access endpoints"})]})]})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"-user-authentication",children:"\u{1F511} User authentication"}),"\n",(0,a.jsx)(n.h3,{id:"login-endpoint",children:"Login endpoint"}),"\n",(0,a.jsxs)("div",{className:"endpoint-card",children:[(0,a.jsxs)("div",{className:"endpoint-header",children:[(0,a.jsx)("span",{className:"method-badge method-post",children:"POST"}),(0,a.jsx)("code",{className:"endpoint-url",children:"/idp/api/v1/user/login"})]}),(0,a.jsxs)("div",{className:"endpoint-body",children:[(0,a.jsx)("h4",{children:"Request Body"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "email": "<your-email>",\n  "password": "<your-password>"\n}\n'})}),(0,a.jsx)("h4",{children:"Response"}),(0,a.jsxs)("div",{className:"response-info",children:[(0,a.jsxs)("p",{children:["\u2705 ",(0,a.jsx)("strong",{children:"Success:"})," Returns ",(0,a.jsx)("code",{children:"Authorization: Bearer <JWT>"})," header"]}),(0,a.jsxs)("p",{children:["\u{1F4DD} ",(0,a.jsx)("strong",{children:"Note:"}),' Extract only the token value (remove "Bearer " prefix)']})]})]})]}),"\n",(0,a.jsxs)(n.admonition,{title:"JWT usage",type:"tip",children:[(0,a.jsxs)(n.p,{children:["Use the JWT token for all ",(0,a.jsx)(n.strong,{children:"IdP (Identity Provider)"})," endpoints including:"]}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Creating service accounts"}),"\n",(0,a.jsx)(n.li,{children:"Resetting tokens"}),"\n",(0,a.jsx)(n.li,{children:"Deleting service accounts"}),"\n"]})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"-identity-idp-apis",children:"\u{1F3E2} Identity (IdP) APIs"}),"\n",(0,a.jsx)(n.admonition,{title:"Authentication Required",type:"warning",children:(0,a.jsxs)(n.p,{children:["All IdP endpoints require the JWT token from login: ",(0,a.jsx)(n.code,{children:"Authorization: Bearer &lt;JWT&gt;"})]})}),"\n",(0,a.jsx)(n.h3,{id:"create-service-account",children:"Create Service Account"}),"\n",(0,a.jsxs)("div",{className:"endpoint-card",children:[(0,a.jsxs)("div",{className:"endpoint-header",children:[(0,a.jsx)("span",{className:"method-badge method-post",children:"POST"}),(0,a.jsx)("code",{className:"endpoint-url",children:"/idp/api/v1/company/serviceAccount"})]}),(0,a.jsxs)("div",{className:"endpoint-body",children:[(0,a.jsx)("h4",{children:"Request Body"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "name": "<service-account-name>",\n  "description": "<optional-description>"\n}\n'})}),(0,a.jsx)("h4",{children:"Response Example"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "token": "<service-account-token>",\n  "expiryInSeconds": 31536000\n}\n'})}),(0,a.jsx)("div",{className:"important-note",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)("strong",{children:"\u{1F4BE} Save this token!"})," You'll use it as ",(0,a.jsx)("code",{children:"x-auth-token"})," for data APIs."]})})]})]}),"\n",(0,a.jsx)(n.h3,{id:"reset-service-account-token",children:"Reset Service Account Token"}),"\n",(0,a.jsxs)("div",{className:"endpoint-card",children:[(0,a.jsxs)("div",{className:"endpoint-header",children:[(0,a.jsx)("span",{className:"method-badge method-get",children:"GET"}),(0,a.jsxs)("code",{className:"endpoint-url",children:["/idp/api/v1/company/serviceAccount/",":id","/token/reset"]})]}),(0,a.jsxs)("div",{className:"endpoint-body",children:[(0,a.jsx)("h4",{children:"Query Parameters"}),(0,a.jsx)("ul",{children:(0,a.jsxs)("li",{children:[(0,a.jsx)("code",{children:"neverExpires"})," (optional): Set to ",(0,a.jsx)("code",{children:"true"})," for non-expiring tokens"]})}),(0,a.jsx)("h4",{children:"Response Examples"}),(0,a.jsxs)("div",{className:"response-example",children:[(0,a.jsx)("h5",{children:"With Expiry"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "token": "<new-token>",\n  "expiryInSeconds": 31536000,\n  "expiryDate": "2026-08-05T15:19:01.851+0000"\n}\n'})})]}),(0,a.jsxs)("div",{className:"response-example",children:[(0,a.jsx)("h5",{children:"Non-Expiring"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "token": "<new-token>",\n  "neverExpires": true\n}\n'})})]})]})]}),"\n",(0,a.jsx)(n.h3,{id:"delete-service-account",children:"Delete Service Account"}),"\n",(0,a.jsxs)("div",{className:"endpoint-card",children:[(0,a.jsxs)("div",{className:"endpoint-header",children:[(0,a.jsx)("span",{className:"method-badge method-delete",children:"DELETE"}),(0,a.jsxs)("code",{className:"endpoint-url",children:["/idp/api/v1/company/serviceAccount/",":id"]})]}),(0,a.jsx)("div",{className:"endpoint-body",children:(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{children:"Response:"})," 200 OK with empty body on success"]})})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"-data-noco-apis",children:"\u{1F4CA} Data (noCo) APIs"}),"\n",(0,a.jsx)(n.admonition,{title:"Authentication Required",type:"warning",children:(0,a.jsxs)(n.p,{children:["All noCo endpoints require the service account token: ",(0,a.jsx)(n.code,{children:"x-auth-token: &lt;service-account-token&gt;"})]})}),"\n",(0,a.jsx)(n.h3,{id:"get-table-schema",children:"Get Table Schema"}),"\n",(0,a.jsxs)("div",{className:"endpoint-card",children:[(0,a.jsxs)("div",{className:"endpoint-header",children:[(0,a.jsx)("span",{className:"method-badge method-get",children:"GET"}),(0,a.jsxs)("code",{className:"endpoint-url",children:["/noCo/api/v2/workspaces/",":workspaceId","/tables/",":tableId"]})]}),(0,a.jsx)("div",{className:"endpoint-body",children:(0,a.jsx)("p",{children:"Returns table metadata including columns and their properties. Use this to discover valid column names for queries."})})]}),"\n",(0,a.jsx)(n.h3,{id:"get-table-data",children:"Get Table Data"}),"\n",(0,a.jsxs)("div",{className:"endpoint-card",children:[(0,a.jsxs)("div",{className:"endpoint-header",children:[(0,a.jsx)("span",{className:"method-badge method-post",children:"POST"}),(0,a.jsxs)("code",{className:"endpoint-url",children:["/noCo/api/v2/workspaces/",":workspaceId","/tables/",":tableId","/data/external"]})]}),(0,a.jsxs)("div",{className:"endpoint-body",children:[(0,a.jsx)("h4",{children:"Request Body Examples"}),(0,a.jsxs)("div",{className:"request-example",children:[(0,a.jsx)("h5",{children:"Minimal Paging"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "requestPageDetails": {\n    "pageNumber": 1,\n    "pageSize": 101\n  }\n}\n'})})]}),(0,a.jsxs)("div",{className:"request-example",children:[(0,a.jsx)("h5",{children:"With Filter and Sort"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "requestPageDetails": { \n    "pageNumber": 1, \n    "pageSize": 101 \n  },\n  "whereClause": "name = \'krishna\'",\n  "sortOptions": [\n    { "columnName": "name", "direction": "ASC" },\n    { "columnName": "notes", "direction": "DESC" }\n  ]\n}\n'})})]}),(0,a.jsx)("div",{className:"important-note",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)("strong",{children:"\u26A0\uFE0F Important:"})," Column names in ",(0,a.jsx)("code",{children:"whereClause"})," and ",(0,a.jsx)("code",{children:"sortOptions"})," must exist.\nFetch them via ",(0,a.jsx)("strong",{children:"Get Table Schema"})," first."]})})]})]}),"\n",(0,a.jsx)(n.h3,{id:"execute-sql-query",children:"Execute SQL Query"}),"\n",(0,a.jsxs)("div",{className:"endpoint-card",children:[(0,a.jsxs)("div",{className:"endpoint-header",children:[(0,a.jsx)("span",{className:"method-badge method-post",children:"POST"}),(0,a.jsxs)("code",{className:"endpoint-url",children:["/noCo/api/v2/workspaces/",":workspaceId","/tables/",":tableId","/executeQuery"]})]}),(0,a.jsxs)("div",{className:"endpoint-body",children:[(0,a.jsx)("h4",{children:"Request Body"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{ \n  "value": "SELECT * FROM table_<suffix>" \n}\n'})}),(0,a.jsx)("h4",{children:"Response"}),(0,a.jsxs)("p",{children:["May return JSON with ",(0,a.jsx)("code",{children:"columns"})," and export ",(0,a.jsx)("code",{children:"fileName"})," (CSV), or empty body with 200 OK depending on query and server configuration."]})]})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"-complete-workflow",children:"\u{1F504} Complete workflow"}),"\n",(0,a.jsxs)("div",{className:"workflow-steps",children:[(0,a.jsxs)("div",{className:"workflow-step",children:[(0,a.jsx)("div",{className:"step-icon",children:"\u{1F510}"}),(0,a.jsxs)("div",{className:"step-content",children:[(0,a.jsx)("h4",{children:"Step 1: Login"}),(0,a.jsxs)("p",{children:[(0,a.jsx)("code",{children:"POST /idp/api/v1/user/login"})," \u2192 Extract JWT from ",(0,a.jsx)("code",{children:"Authorization"})," header"]})]})]}),(0,a.jsxs)("div",{className:"workflow-step",children:[(0,a.jsx)("div",{className:"step-icon",children:"\u{1F511}"}),(0,a.jsxs)("div",{className:"step-content",children:[(0,a.jsx)("h4",{children:"Step 2: Create Service Account"}),(0,a.jsx)("p",{children:"Use JWT to create or reset a service account token"})]})]}),(0,a.jsxs)("div",{className:"workflow-step",children:[(0,a.jsx)("div",{className:"step-icon",children:"\u{1F4CA}"}),(0,a.jsxs)("div",{className:"step-content",children:[(0,a.jsx)("h4",{children:"Step 3: Access Data"}),(0,a.jsxs)("p",{children:["Use service account token as ",(0,a.jsx)("code",{children:"x-auth-token"})," for noCo endpoints"]})]})]})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"-common-headers",children:"\u{1F4CB} Common headers"}),"\n",(0,a.jsx)("div",{className:"headers-table",children:(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Endpoint Type"}),(0,a.jsx)("th",{children:"Required Headers"}),(0,a.jsx)("th",{children:"Example"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("strong",{children:"All Requests"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"Content-Type: application/json"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"Content-Type: application/json"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("strong",{children:"IdP Endpoints"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"Authorization: Bearer <JWT>"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("strong",{children:"noCo Endpoints"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"x-auth-token: <service-token>"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"x-auth-token: sa_1234567890abcdef..."})})]})]})]})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"\uFE0F-security-and-error-handling",children:"\u26A0\uFE0F Security and error handling"}),"\n",(0,a.jsxs)("div",{className:"security-tips",children:[(0,a.jsxs)("div",{className:"tip-card tip-warning",children:[(0,a.jsx)("h4",{children:"\u{1F512} Token Security"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:"Treat all tokens as secrets - never commit to source control"}),(0,a.jsx)("li",{children:"Prefer tokens with expiry over non-expiring tokens"}),(0,a.jsx)("li",{children:"Rotate tokens regularly for enhanced security"})]})]}),(0,a.jsxs)("div",{className:"tip-card tip-info",children:[(0,a.jsx)("h4",{children:"\u{1F504} Error Handling"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:"Handle HTTP 401/403 by refreshing JWT or resetting service account token"}),(0,a.jsxs)("li",{children:["Use HTTPS only (all endpoints are ",(0,a.jsx)("code",{children:"https://"}),")"]}),(0,a.jsx)("li",{children:"Implement proper error logging and monitoring"})]})]})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"-code-samples",children:"\u{1F4BB} Code samples"}),"\n",(0,a.jsx)(n.admonition,{title:"Before Running",type:"info",children:(0,a.jsxs)(n.p,{children:["Replace placeholders like ",(0,a.jsx)("code",{children:"YOUR_JWT"}),", ",(0,a.jsx)("code",{children:"YOUR_SERVICE_TOKEN"}),", ",(0,a.jsx)("code",{children:"YOUR_WORKSPACE_ID"}),", and ",(0,a.jsx)("code",{children:"YOUR_TABLE_ID"})," with your actual values."]})}),"\n",(0,a.jsxs)(b,{children:[(0,a.jsx)(y,{value:"react",label:"React",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:'import React, { useEffect, useState } from "react";\n\nexport default function QueryTable() {\n  const [rows, setRows] = useState([]);\n  const [loading, setLoading] = useState(false);\n  const token = process.env.REACT_APP_SERVICE_TOKEN;\n  const workspaceId = "YOUR_WORKSPACE_ID";\n  const tableId = "YOUR_TABLE_ID";\n\n  useEffect(() => {\n    async function run() {\n      setLoading(true);\n      try {\n        const res = await fetch(\n          `https://www.example.com/noCo/api/v2/workspaces/${workspaceId}/tables/${tableId}/executeQuery`,\n          {\n            method: "POST",\n            headers: {\n              "Content-Type": "application/json",\n              "x-auth-token": token,\n            },\n            body: JSON.stringify({ value: "SELECT * FROM table_6ec53cc4" }),\n          }\n        );\n        const data = await res.json().catch(() => ({}));\n        setRows(data.rows || []);\n      } catch (e) {\n        console.error(e);\n      } finally {\n        setLoading(false);\n      }\n    }\n    run();\n  }, [token, workspaceId, tableId]);\n\n  if (loading) return <div>Loading\u2026</div>;\n  return (\n    <table>\n      <tbody>\n        {rows.map((r, i) => (\n          <tr key={i}>\n            {Object.values(r).map((v, j) => (\n              <td key={j}>{String(v)}</td>\n            ))}\n          </tr>\n        ))}\n      </tbody>\n    </table>\n  );\n}\n'})})}),(0,a.jsx)(y,{value:"python",label:"Python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import os\nimport requests\n\nBASE = "https://www.example.com"\n\n# 1) Login (JWT)\nlogin = requests.post(\n    f"{BASE}/idp/api/v1/user/login",\n    json={"email": os.environ["EMAIL"], "password": os.environ["PASSWORD"]},\n)\njwt = login.headers.get("Authorization", "").replace("Bearer ", "")\n\n# 2) Create service account token\nsvc = requests.post(\n    f"{BASE}/idp/api/v1/company/serviceAccount",\n    headers={"Authorization": f"Bearer {jwt}"},\n    json={"name": "sales", "description": ""},\n)\nservice_token = svc.json()["token"]\n\n# 3) Execute a query with service token\nworkspace_id = "YOUR_WORKSPACE_ID"\ntable_id = "YOUR_TABLE_ID"\nq = requests.post(\n    f"{BASE}/noCo/api/v2/workspaces/{workspace_id}/tables/{table_id}/executeQuery",\n    headers={"x-auth-token": service_token, "Content-Type": "application/json"},\n    json={"value": "SELECT * FROM table_6ec53cc4"},\n)\nprint(q.json())\n'})})}),(0,a.jsx)(y,{value:"javascript",label:"JavaScript",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'const BASE = "https://www.example.com";\n\nasync function login(email, password) {\n  const res = await fetch(`${BASE}/idp/api/v1/user/login`, {\n    method: "POST",\n    headers: { "Content-Type": "application/json" },\n    body: JSON.stringify({ email, password }),\n  });\n  const auth = res.headers.get("Authorization") || "";\n  return auth.replace("Bearer ", "");\n}\n\nasync function createServiceToken(jwt) {\n  const res = await fetch(`${BASE}/idp/api/v1/company/serviceAccount`, {\n    method: "POST",\n    headers: { Authorization: `Bearer ${jwt}`, "Content-Type": "application/json" },\n    body: JSON.stringify({ name: "sales", description: "" }),\n  });\n  const body = await res.json();\n  return body.token;\n}\n\nasync function executeQuery(serviceToken, workspaceId, tableId, sql) {\n  const res = await fetch(\n    `${BASE}/noCo/api/v2/workspaces/${workspaceId}/tables/${tableId}/executeQuery`,\n    {\n      method: "POST",\n      headers: { "x-auth-token": serviceToken, "Content-Type": "application/json" },\n      body: JSON.stringify({ value: sql }),\n    }\n  );\n  return res.json();\n}\n'})})}),(0,a.jsx)(y,{value:"go",label:"Go",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n  "bytes"\n  "encoding/json"\n  "fmt"\n  "io"\n  "net/http"\n  "strings"\n)\n\ntype TokenResp struct { Token string `json:"token"` }\n\nfunc main() {\n  base := "https://www.example.com"\n\n  loginBody := []byte(`{"email":"YOUR_EMAIL","password":"YOUR_PASSWORD"}`)\n  req, _ := http.NewRequest("POST", base+"/idp/api/v1/user/login", bytes.NewBuffer(loginBody))\n  req.Header.Set("Content-Type", "application/json")\n  resp, _ := http.DefaultClient.Do(req)\n  defer resp.Body.Close()\n  jwt := strings.TrimPrefix(resp.Header.Get("Authorization"), "Bearer ")\n\n  body := []byte(`{"name":"sales","description":""}`)\n  req2, _ := http.NewRequest("POST", base+"/idp/api/v1/company/serviceAccount", bytes.NewBuffer(body))\n  req2.Header.Set("Authorization", "Bearer "+jwt)\n  req2.Header.Set("Content-Type", "application/json")\n  resp2, _ := http.DefaultClient.Do(req2)\n  defer resp2.Body.Close()\n  var tr TokenResp\n  json.NewDecoder(resp2.Body).Decode(&tr)\n\n  workspaceId := "YOUR_WORKSPACE_ID"\n  tableId := "YOUR_TABLE_ID"\n  payload := map[string]string{"value": "SELECT * FROM table_6ec53cc4"}\n  buf, _ := json.Marshal(payload)\n  req3, _ := http.NewRequest("POST", fmt.Sprintf("%s/noCo/api/v2/workspaces/%s/tables/%s/executeQuery", base, workspaceId, tableId), bytes.NewBuffer(buf))\n  req3.Header.Set("x-auth-token", tr.Token)\n  req3.Header.Set("Content-Type", "application/json")\n  resp3, _ := http.DefaultClient.Do(req3)\n  defer resp3.Body.Close()\n  out, _ := io.ReadAll(resp3.Body)\n  fmt.Println(string(out))\n}\n'})})}),(0,a.jsx)(y,{value:"cpp",label:"C++",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:'#include <curl/curl.h>\n#include <iostream>\n#include <string>\n\nstatic size_t WriteCB(void* contents, size_t size, size_t nmemb, void* userp) {\n  ((std::string*)userp)->append((char*)contents, size*nmemb);\n  return size*nmemb;\n}\n\nint main() {\n  const std::string BASE = "https://www.example.com";\n  const std::string SERVICE_TOKEN = "YOUR_SERVICE_TOKEN";\n  const std::string WORKSPACE = "YOUR_WORKSPACE_ID";\n  const std::string TABLE = "YOUR_TABLE_ID";\n\n  CURL* curl = curl_easy_init();\n  if(!curl) return 1;\n\n  std::string url = BASE + "/noCo/api/v2/workspaces/" + WORKSPACE + "/tables/" + TABLE + "/executeQuery";\n  std::string payload = "{"value":"SELECT * FROM table_6ec53cc4"}";\n  struct curl_slist* headers = NULL;\n  headers = curl_slist_append(headers, "Content-Type: application/json");\n  headers = curl_slist_append(headers, ("x-auth-token: " + SERVICE_TOKEN).c_str());\n\n  curl_easy_setopt(curl, CURLOPT_URL, url.c_str());\n  curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);\n  curl_easy_setopt(curl, CURLOPT_POSTFIELDS, payload.c_str());\n\n  std::string response;\n  curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCB);\n  curl_easy_setopt(curl, CURLOPT_WRITEDATA, &response);\n\n  CURLcode res = curl_easy_perform(curl);\n  if(res != CURLE_OK) std::cerr << "curl error: " << curl_easy_strerror(res) << "\\n";\n  std::cout << response << std::endl;\n\n  curl_slist_free_all(headers);\n  curl_easy_cleanup(curl);\n  return 0;\n}\n'})})})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)("style",{children:`
.api-guide-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
}

.api-badge {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.api-description {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.language-support {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.language-badge {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.base-url-container {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1rem 0;
}

.base-url-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.base-url {
  background: #007bff;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-family: 'Monaco', 'Menlo', monospace;
}

.auth-flow-diagram {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.auth-step {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
}

.step-number {
  background: #007bff;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.auth-arrow {
  font-size: 1.5rem;
  color: #6c757d;
}

.endpoint-card {
  border: 1px solid #e9ecef;
  border-radius: 8px;
  margin: 1rem 0;
  overflow: hidden;
}

.endpoint-header {
  background: #f8f9fa;
  padding: 1rem;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.method-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-weight: bold;
  font-size: 0.8rem;
  text-transform: uppercase;
}

.method-post { background: #28a745; color: white; }
.method-get { background: #007bff; color: white; }
.method-delete { background: #dc3545; color: white; }

.endpoint-url {
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 0.9rem;
}

.endpoint-body {
  padding: 1rem;
}

.response-info {
  background: #e7f3ff;
  border-left: 4px solid #007bff;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 0 4px 4px 0;
}

.important-note {
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 4px;
  padding: 1rem;
  margin: 1rem 0;
}

.response-example, .request-example {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 4px;
  padding: 1rem;
  margin: 1rem 0;
}

.workflow-steps {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem 0;
}

.workflow-step {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.step-icon {
  font-size: 2rem;
}

.headers-table table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
}

.headers-table th,
.headers-table td {
  border: 1px solid #e9ecef;
  padding: 0.75rem;
  text-align: left;
}

.headers-table th {
  background: #f8f9fa;
  font-weight: bold;
}

.security-tips {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin: 2rem 0;
}

.tip-card {
  padding: 1rem;
  border-radius: 8px;
}

.tip-warning {
  background: #fff3cd;
  border: 1px solid #ffeaa7;
}

.tip-info {
  background: #e7f3ff;
  border: 1px solid #b3d9ff;
}

.next-steps {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin: 2rem 0;
}

.step-card {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 1rem;
}

.step-card ul {
  margin: 0.5rem 0;
  padding-left: 1.5rem;
}

@media (max-width: 768px) {
  .auth-flow-diagram {
    flex-direction: column;
    gap: 1rem;
  }
  
  .security-tips,
  .next-steps {
    grid-template-columns: 1fr;
  }
}
`})]})}function A(e={}){let{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(_,{...e})}):_(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var r=s(96540);let a={},t=r.createContext(a);function i(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);