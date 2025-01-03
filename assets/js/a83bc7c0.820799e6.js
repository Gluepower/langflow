"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[5628],{45449:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=n(74848),s=n(28453);const o={title:"Vector Store RAG",sidebar_position:4,slug:"/starter-projects-vector-store-rag"},i=void 0,a={id:"Starter-Projects/starter-projects-vector-store-rag",title:"Vector Store RAG",description:"Retrieval Augmented Generation, or RAG, is a pattern for training LLMs on your data and querying it.",source:"@site/docs/Starter-Projects/starter-projects-vector-store-rag.md",sourceDirName:"Starter-Projects",slug:"/starter-projects-vector-store-rag",permalink:"/starter-projects-vector-store-rag",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Vector Store RAG",sidebar_position:4,slug:"/starter-projects-vector-store-rag"},sidebar:"docs",previous:{title:"Basic Prompting",permalink:"/starter-projects-basic-prompting"},next:{title:"Simple agent",permalink:"/starter-projects-simple-agent"}},l={},c=[{value:"Prerequisites",id:"6aa2c6dff6894eccadc39d4903d79e66",level:2},{value:"Create the vector store RAG flow",id:"create-the-vector-store-rag-flow",level:2},{value:"Run the Vector Store RAG flow",id:"run-the-vector-store-rag-flow",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Retrieval Augmented Generation, or RAG, is a pattern for training LLMs on your data and querying it."}),"\n",(0,r.jsxs)(t.p,{children:["RAG is backed by a\xa0",(0,r.jsx)(t.strong,{children:"vector store"}),", a vector database which stores embeddings of the ingested data."]}),"\n",(0,r.jsxs)(t.p,{children:["This enables\xa0",(0,r.jsx)(t.strong,{children:"vector search"}),", a more powerful and context-aware search."]}),"\n",(0,r.jsxs)(t.p,{children:["We've chosen\xa0",(0,r.jsx)(t.a,{href:"https://astra.datastax.com/signup?utm_source=langflow-pre-release&utm_medium=referral&utm_campaign=langflow-announcement&utm_content=create-a-free-astra-db-account",children:"Astra DB"}),"\xa0as the vector database for this starter flow, but you can follow along with any of Langflow's vector database options."]}),"\n",(0,r.jsx)(t.h2,{id:"6aa2c6dff6894eccadc39d4903d79e66",children:"Prerequisites"}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://docs.langflow.org/get-started-installation",children:"Langflow installed and running"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://platform.openai.com/",children:"OpenAI API key"})}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://docs.datastax.com/en/astra-db-serverless/get-started/quickstart.html",children:"An Astra DB vector database created"}),"\xa0with:","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Application Token"}),"\n",(0,r.jsx)(t.li,{children:"API Endpoint"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"create-the-vector-store-rag-flow",children:"Create the vector store RAG flow"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["From the Langflow dashboard, click\xa0",(0,r.jsx)(t.strong,{children:"New Flow"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Select\xa0",(0,r.jsx)(t.strong,{children:"Vector Store RAG"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["The\xa0",(0,r.jsx)(t.strong,{children:"Vector Store RAG"}),"\xa0flowis created."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(85410).A+"",width:"2842",height:"1458"})}),"\n",(0,r.jsx)(t.p,{children:"The vector store RAG flow is built of two separate flows for ingestion and query."}),"\n",(0,r.jsxs)(t.p,{children:["The\xa0",(0,r.jsx)(t.strong,{children:"ingestion"}),"\xa0part (bottom of the screen) populates the vector store with data from a local file. It ingests data from a file (",(0,r.jsx)(t.strong,{children:"File"}),"), splits it into chunks (",(0,r.jsx)(t.strong,{children:"Split Text"}),"), indexes it in Astra DB (",(0,r.jsx)(t.strong,{children:"Astra DB"}),"), and computes embeddings for the chunks using an embedding model (",(0,r.jsx)(t.strong,{children:"OpenAI Embeddings"}),")."]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"Embeddings are numerical vectors that represent data meaningfully. They enable efficient similarity searches in vector stores by placing similar items close together in the vector space, enhancing search and recommendation tasks."})}),"\n",(0,r.jsx)(t.p,{children:"This part creates a searchable index to be queried for contextual similarity."}),"\n",(0,r.jsxs)(t.p,{children:["The\xa0",(0,r.jsx)(t.strong,{children:"query"}),"\xa0part (top of the screen) allows users to retrieve embedded vector store data. Components:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Chat Input"})," defines where to send the user input (coming from the Playground)."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"OpenAI Embeddings"}),"\xa0is the model used to generate embeddings from the user input."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Astra DB"})," retrieves the most relevant chunks from the Astra DB database (here, used for search, not ingestion)."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Parse Data"})," converts chunks coming from the ",(0,r.jsx)(t.strong,{children:"Astra DB"})," component into plain text to feed a prompt."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Prompt"})," takes in the user input and the retrieved chunks as text and builds a prompt for the model."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"OpenAI"})," takes in the prompt to generate a response."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Chat Output"}),"\xa0component displays the response in the Playground."]}),"\n"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["To create an environment variable for the\xa0",(0,r.jsx)(t.strong,{children:"OpenAI"}),"\xa0component, in the\xa0",(0,r.jsx)(t.strong,{children:"OpenAI API Key"}),"\xa0field, click the\xa0",(0,r.jsx)(t.strong,{children:"Globe"}),"\xa0button, and then click\xa0",(0,r.jsx)(t.strong,{children:"Add New Variable"}),".","\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["In the\xa0",(0,r.jsx)(t.strong,{children:"Variable Name"}),"\xa0field, enter\xa0",(0,r.jsx)(t.code,{children:"openai_api_key"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["In the\xa0",(0,r.jsx)(t.strong,{children:"Value"}),"\xa0field, paste your OpenAI API Key (",(0,r.jsx)(t.code,{children:"sk-..."}),")."]}),"\n",(0,r.jsxs)(t.li,{children:["Click\xa0",(0,r.jsx)(t.strong,{children:"Save Variable"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["To create environment variables for the\xa0",(0,r.jsx)(t.strong,{children:"Astra DB"}),"\xa0and\xa0",(0,r.jsx)(t.strong,{children:"Astra DB Search"}),"\xa0components:","\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["In the\xa0",(0,r.jsx)(t.strong,{children:"Token"}),"\xa0field, click the\xa0",(0,r.jsx)(t.strong,{children:"Globe"}),"\xa0button, and then click\xa0",(0,r.jsx)(t.strong,{children:"Add New Variable"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["In the\xa0",(0,r.jsx)(t.strong,{children:"Variable Name"}),"\xa0field, enter\xa0",(0,r.jsx)(t.code,{children:"astra_token"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["In the\xa0",(0,r.jsx)(t.strong,{children:"Value"}),"\xa0field, paste your Astra application token (",(0,r.jsx)(t.code,{children:"AstraCS:WSnyFUhRxsrg\u2026"}),")."]}),"\n",(0,r.jsxs)(t.li,{children:["Click\xa0",(0,r.jsx)(t.strong,{children:"Save Variable"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Repeat the above steps for the\xa0",(0,r.jsx)(t.strong,{children:"API Endpoint"}),"\xa0field, pasting your Astra API Endpoint instead (",(0,r.jsx)(t.code,{children:"https://ASTRA_DB_ID-ASTRA_DB_REGION.apps.astra.datastax.com"}),")."]}),"\n",(0,r.jsxs)(t.li,{children:["Add the global variable to both the\xa0",(0,r.jsx)(t.strong,{children:"Astra DB"}),"\xa0and\xa0",(0,r.jsx)(t.strong,{children:"Astra DB Search"}),"\xa0components."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"run-the-vector-store-rag-flow",children:"Run the Vector Store RAG flow"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Click the\xa0",(0,r.jsx)(t.strong,{children:"Playground"}),"\xa0button. Here you can chat with the AI that uses context from the database you created."]}),"\n",(0,r.jsx)(t.li,{children:'Type a message and press Enter. (Try something like "What topics do you know about?")'}),"\n",(0,r.jsx)(t.li,{children:"The bot will respond with a summary of the data you've embedded."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},85410:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/starter-flow-vector-rag-b7baccc099a7e08eca925d97ec24844b.png"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var r=n(96540);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);