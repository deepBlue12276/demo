import{_,u as ee,r as y,o as te,c as se,b as S,y as Y,a as v,w as u,v as r,g as h,F as ie,p as le,k as oe}from"./index-c9cfd66f.js";import{_ as ne,i as ue,a as re,b as ae,c as ve,d as pe}from"./Frame (5)-87431ae9.js";import{_ as fe,f as A,g as T,h as B,j as V,i as ge,a as j,b as q,c as de,d as z,e as me,k as ye,l as he,m as Se,n as we,o as ke,p as ce}from"./Frame 3695 (7)-df1e0a2d.js";import{$ as H}from"./jquery-9f88e88f.js";import{G as m}from"./Guide-617a5ffb.js";import{A as xe}from"./AiChatList2-ecf8034b.js";import{i as $e,a as Ge}from"./Frame 1321315311-4a363fc1.js";import"./left-arrow-6f6966ca.js";import"./Frame 427320860-3d5958e4.js";import"./Box Wrapper-5add57c3.js";import"./Group 1321315262-1c50344e.js";const D=P=>(le("data-v-8c6d5d23"),P=P(),oe(),P),Me={class:"main-view"},Fe={class:"mark"},Ne={class:"mark"},Pe=D(()=>S("img",{src:ke,alt:""},null,-1)),Re=[Pe],He={class:"mark"},Le=D(()=>S("img",{src:ce,alt:""},null,-1)),Ce=[Le],We={__name:"index4",setup(P){const c=ee(),o=y([!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]),L=y([!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]),p=s=>{L.value=[!1,!1,!1],s>=0&&(L.value[s]=!0)},G=y([{userMsg:"创建活动",aiMsgList:[{type:"img",value:ue},{type:"img",value:re},{type:"img",value:ae},{type:"img",value:ve},{type:"img",value:pe}]}]),w=y([{userMsg:"创建宽带业务专项攻坚活动",aiMsgList:[{type:"img",value:ye},{type:"img",value:he},{type:"img",value:Se},{type:"img",value:we}]},{userMsg:"为我生成活动1的营销策划案",aiMsgList:[]}]);y([{type:"img",value:q},{type:"img",value:z},{type:"img",value:j},{type:"img",value:$e},{type:"img",value:Ge}]);const f=y(!1),a=s=>{o.value[s]=!1,o.value[s+1]=!0},g=s=>{o.value[s]=!1,o.value[s-1]=!0},l=()=>{o.value=o.value.map(()=>!1)},W=y(),R=s=>{W.value.scrollTo(s)},E=y(),k=s=>{E.value.scrollTo(s)},F=y(),J=s=>{const e=F.value.width,t=F.value.height,n=s.clientX/e,i=s.clientY/t;console.log(n,i),n>.26&&n<1&&i>.601&&i<.71&&(console.log("营销日历场景"),c.push({path:"/activity1"})),n>.26&&n<1&&i>.735&&i<.85&&(console.log("活动自动化配置场景"),c.push({path:"/activity3"})),n>.26&&n<1&&i>.86&&i<.99&&(console.log("文生图场景"),c.push({path:"/activity6"})),n>.26&&n<1&&i>1&&i<1.13&&(console.log("活动策划案"),c.push({path:"/activity8"}))},K=s=>{const e=F.value.width,t=F.value.height,n=s.clientX/e,i=s.clientY/t;console.log(n,i),n>.26&&n<1&&i>.601&&i<.71||n>.26&&n<1&&i>.735&&i<.85||n>.26&&n<1&&i>.875&&i<.99||n>.26&&n<1&&i>1.018&&i<1.13||n>1.1&&n<1.163&&i>.676&&i<.78?s.target.style.cursor="pointer":s.target.style.cursor=""},O=s=>{const{e,index:t}=s,n=H(`.image_${t}`)[0].offsetWidth,i=H(`.image_${t}`)[0].offsetHeight,d=e.clientX/n,N=e.clientY/i;console.log(d,N),d>1.62&&d<1.74||d>.78&&d<.9&&N>19.7&&N<21||d>.78&&d<.9?e.target.style.cursor="pointer":e.target.style.cursor=""},Q=s=>{const{e,index:t}=s,n=H(`.image_${t}`)[0].offsetWidth,i=H(`.image_${t}`)[0].offsetHeight,d=e.clientX/n,N=e.clientY/i;console.log(d,N),t===0&&G.value.push({userMsg:"创建宽带业务专项攻坚活动",aiMsgList:[{type:"img",value:A},{type:"img",value:T},{type:"img",value:B},{type:"img",value:V}]}),t===1&&(a(3),f.value=!0,p(0))},C=y(),U=y(),x=y(!1),$=y(!1),M=y(!1);y(!1),y();const Z=y(),I=s=>{const{type:e}=s,t=document.body.clientWidth,n=document.body.clientHeight,i=s.offsetX/t*1680,d=s.offsetY/n*938;console.log("x--",i),console.log("y--",d),i>534&&i<575&&d>15&&d<40||i>393&&i<538?(s.target.style.cursor="pointer",e==="click"&&(x.value=!1)):s.target.style.cursor=""},b=s=>{const{type:e}=s,t=document.body.clientWidth,n=document.body.clientHeight,i=s.offsetX/t*1680,d=s.offsetY/n*938;console.log("x--",i),console.log("y--",d),i>534&&i<575&&d>15&&d<37||i>393&&i<538?(s.target.style.cursor="pointer",e==="click"&&($.value=!1)):s.target.style.cursor=""},X=s=>{const{type:e}=s,t=document.body.clientWidth,n=document.body.clientHeight,i=s.offsetX/t*1680,d=s.offsetY/n*938;console.log("x--",i),console.log("y--",d),i>534&&i<575&&d>15&&d<37||i>356&&i<475?(s.target.style.cursor="pointer",e==="click"&&(M.value=!1)):s.target.style.cursor=""};return(s,e)=>(te(),se(ie,null,[S("div",Me,[S("div",{class:Y(["aside",{highlight:o.value[0]}])},[S("img",{ref_key:"asideRef",ref:F,src:ne,alt:"",onClick:e[0]||(e[0]=t=>J(t)),onMousemove:e[1]||(e[1]=t=>K(t))},null,544)],2),S("div",{ref_key:"rightRef",ref:U,class:Y(["right",{highlight:o.value[1]||o.value[2]||o.value[3]}]),onScroll:e[2]||(e[2]=t=>s.handleScroll(t))},[v(xe,{ref_key:"aiRight",ref:W,class:"activity3","msg-list":G.value,"is-hidden-menu":f.value,onImgClick:Q,onHandleMousemove:O},null,8,["msg-list","is-hidden-menu"])],34)]),u(v(m,{title:"继续引导",content:"您可以点击查看更多进行更多场景体验。",direction:"left","arrow-style":{top:"calc(50% - 6px)"},style:{top:"52%",left:"25%"},"is-show-prev":!0,"is-show-finish":!1,onPrevStep:e[3]||(e[3]=t=>{g(0),h(c).push({path:"/activity3",query:{from:"activity4"}})}),onSkipGuide:l,onFinishGuide:l,onNextStep:e[4]||(e[4]=t=>h(c).push({path:"/activity6"}))},null,512),[[r,o.value[0]]]),u(v(m,{title:"自然语言对话确认配置信息样例",content:"大模型调用营销日历工具，为您生成营销机会建议。",direction:"right",style:{top:"33%",left:"4%"},"is-show-prev":!0,"is-show-finish":!1,onPrevStep:e[5]||(e[5]=t=>g(1)),onSkipGuide:l,onFinishGuide:l,onNextStep:e[6]||(e[6]=t=>{a(1),G.value.length<=1?G.value.push({userMsg:"创建宽带业务专项攻坚活动"}):R(9999)})},null,512),[[r,o.value[1]]]),u(v(m,{title:"自然语言对话确认配置信息样例",content:"您可在对话框内，直接发起创建活动的任务，大模型基于语音理解，匹配任务类型，并调用相关营销工具。",direction:"right",style:{top:"33%",left:"4%"},"is-show-prev":!0,"is-show-finish":!1,onPrevStep:e[7]||(e[7]=t=>{g(2),R(20)}),onSkipGuide:l,onFinishGuide:l,onNextStep:e[8]||(e[8]=t=>{a(2),G.value.length<=2?G.value.push({aiMsgList:[{type:"img",value:h(A)},{type:"img",value:h(T)},{type:"img",value:h(B)},{type:"img",value:h(V)}]}):R(9999)})},null,512),[[r,o.value[2]]]),u(v(m,{title:"自然语言对话确认配置信息样例",content:"基于策划模板，历史活动策划案学习，大规模生成活动策划建议，您可跟随建议进行选择，也可以发起新一轮对话提出要求。",direction:"right",style:{top:"33%",left:"4%"},"is-show-prev":!0,"is-show-finish":!1,onPrevStep:e[9]||(e[9]=t=>{g(3),R(100)}),onSkipGuide:l,onFinishGuide:l,onNextStep:e[10]||(e[10]=t=>{a(3),f.value=!0,p(0)})},null,512),[[r,o.value[3]]]),u(v(m,{title:"自然语言对话确认配置信息样例",content:"通过自然语言对话，AI与运营管理人员确认关键配置项参数信息，调用画布引擎工具，将确认好的参数项做写入，减少人工手动操作配置的繁琐工作。",direction:"left","arrow-style":{top:"calc(50% - 6px)"},style:{top:"33%",left:"43%"},"is-show-prev":!0,"is-show-finish":!1,onPrevStep:e[11]||(e[11]=t=>{g(4),f.value=!1}),onSkipGuide:l,onFinishGuide:l,onNextStep:e[12]||(e[12]=t=>{a(4),f.value=!0,p(1)})},null,512),[[r,o.value[4]]]),u(v(m,{title:"画布引擎",content:"关键信息与运营人员二次确认后才可写入，您也可以在右侧的画布引擎里面，对具体的配置项做修改。",direction:"right","arrow-style":{top:"calc(50% - 6px)"},style:{top:"33%",left:"21%"},"is-show-prev":!0,"is-show-finish":!1,onPrevStep:e[13]||(e[13]=t=>{g(5),p(0)}),onSkipGuide:l,onFinishGuide:l,onNextStep:e[14]||(e[14]=t=>{a(5),f.value=!0,p(1),w.value.length<=2?w.value.push({aiMsgList:[{type:"img",value:h(ge)},{type:"img",value:h(j)}]}):k(999)})},null,512),[[r,o.value[5]]]),u(v(m,{title:"自然语言对话确认配置信息样例",content:"对于核心资源类配置项如卡券资源，AI必须经过二次确认才可明确配置信息。",direction:"left","arrow-style":{top:"calc(50% - 6px)"},style:{top:"37%",left:"43%"},"is-show-prev":!0,"is-show-finish":!1,onPrevStep:e[15]||(e[15]=t=>{g(6),k(210)}),onSkipGuide:l,onFinishGuide:l,onNextStep:e[16]||(e[16]=t=>{a(6),f.value=!0,p(1),w.value.length<=3?w.value.push({userMsg:"不可以，请将资源数量调整为2000份"}):k(9999)})},null,512),[[r,o.value[6]]]),u(v(m,{title:"自然语音对话确认配置信息样例",content:"运营管理人员可通过对话，对配置信息做调整。",direction:"left","arrow-style":{top:"calc(50% - 6px)"},style:{top:"37%",left:"43%"},"is-show-prev":!0,"is-show-finish":!1,onPrevStep:e[17]||(e[17]=t=>{g(7),k(500)}),onSkipGuide:l,onFinishGuide:l,onNextStep:e[18]||(e[18]=t=>{a(7),f.value=!0,p(1),w.value.length<=4?w.value.push({aiMsgList:[{type:"img",value:h(q)},{type:"img",value:h(de)}]}):k(9999)})},null,512),[[r,o.value[7]]]),u(v(m,{title:"自然语言对话确认配置信息样例",content:"修改调整的配置参数也需要经过确认后，才可进行初步写入。",direction:"left","arrow-style":{top:"calc(50% - 6px)"},style:{top:"37%",left:"43%"},"is-show-prev":!0,"is-show-finish":!1,onPrevStep:e[19]||(e[19]=t=>{g(8),k(590)}),onSkipGuide:l,onFinishGuide:l,onNextStep:e[20]||(e[20]=t=>{a(8),f.value=!0,p(1),w.value.length<=5?w.value.push({userMsg:"可以，不做修改"}):k(9999)})},null,512),[[r,o.value[8]]]),u(v(m,{title:"自然语言对话确认配置信息样例",content:"画布引擎的数据展示，与对话中明确好的信息内容同步。",direction:"left","arrow-style":{top:"calc(50% - 6px)"},style:{top:"37%",left:"43%"},"is-show-prev":!0,"is-show-finish":!1,onPrevStep:e[21]||(e[21]=t=>{g(9),k(880)}),onSkipGuide:l,onFinishGuide:l,onNextStep:e[22]||(e[22]=t=>{a(9),f.value=!0,p(1),w.value.length<=6?w.value.push({aiMsgList:[{type:"img",value:h(z)},{type:"img",value:h(me)}]}):k(9999)})},null,512),[[r,o.value[9]]]),u(v(m,{title:"自然语言对话确认配置信息样例",content:"画布引擎的数据展示，与对话中明确好的信息内容同步。",direction:"left","arrow-style":{top:"calc(50% - 6px)"},style:{top:"45%",left:"43%"},"is-show-prev":!0,"is-show-finish":!1,onPrevStep:e[23]||(e[23]=t=>{g(10),k(970)}),onSkipGuide:l,onFinishGuide:l,onNextStep:e[24]||(e[24]=t=>{a(10),f.value=!0,p(2),w.value.length<=7?w.value.push({userMsg:"可以，不做修改"}):k(9999)})},null,512),[[r,o.value[10]]]),u(v(m,{title:"自然语言对话确认配置信息样例",content:"所有配置信息都明确后，画布引擎的界面会展示具体的配置信息内容。",direction:"left","arrow-style":{top:"calc(50% - 6px)"},style:{top:"53%",left:"42%"},"is-show-prev":!0,"is-show-finish":!1,onPrevStep:e[25]||(e[25]=t=>{g(11),k(1230)}),onSkipGuide:l,onFinishGuide:l,onNextStep:e[26]||(e[26]=t=>{a(11),f.value=!0,p(2)})},null,512),[[r,o.value[11]]]),u(v(m,{title:"画布引擎",content:"关键信息都是与运营人员二次确认后才可写入，保障了核心数据的安全性，您也可在右侧的画布引擎里面，去对具体的配置项做修改。",direction:"right","arrow-style":{top:"calc(50% - 6px)"},style:{top:"33%",left:"21%"},"is-show-prev":!0,"is-show-finish":!1,onPrevStep:e[27]||(e[27]=t=>g(12)),onSkipGuide:l,onFinishGuide:l,onNextStep:e[28]||(e[28]=t=>{a(12),f.value=!0,p(2)})},null,512),[[r,o.value[12]]]),u(v(m,{title:"画布引擎",content:"点击查看设置即可对当前配置项的相关信息做编辑修改。",direction:"right","arrow-style":{top:"calc(50% - 6px)"},style:{top:"19%",left:"52%"},"is-show-prev":!0,"is-show-finish":!1,onPrevStep:e[29]||(e[29]=t=>g(13)),onSkipGuide:l,onFinishGuide:l,onNextStep:e[30]||(e[30]=t=>{a(13),f.value=!0,p(2),x.value=!0})},null,512),[[r,o.value[13]]]),u(v(m,{title:"画布引擎",content:"点击查看设置即可对当前配置项的相关信息做编辑修改。",direction:"right","arrow-style":{top:"calc(50% - 6px)"},style:{top:"32%",left:"52%"},"is-show-prev":!0,"is-show-finish":!1,onPrevStep:e[31]||(e[31]=t=>{g(15),x.value=!0,o.value[14]=!0}),onSkipGuide:l,onFinishGuide:l,onNextStep:e[32]||(e[32]=t=>{a(15),f.value=!0,p(2),$.value=!0})},null,512),[[r,o.value[15]]]),u(v(m,{title:"画布引擎",content:"点击查看设置即可对当前配置项的相关信息做编辑修改。",direction:"right","arrow-style":{top:"calc(50% - 6px)"},style:{top:"47%",left:"52%"},"is-show-prev":!0,"is-show-finish":!1,onPrevStep:e[33]||(e[33]=t=>{g(17),$.value=!0,o.value[16]=!0}),onSkipGuide:l,onFinishGuide:l,onNextStep:e[34]||(e[34]=t=>{a(17),f.value=!0,p(2),M.value=!0})},null,512),[[r,o.value[17]]]),u(v(m,{title:"画布引擎",content:"所有信息确认完成后，您可提交活动信息进入审批流程。",direction:"right","arrow-style":{top:"calc(50% - 6px)"},style:{top:"35%",left:"22%"},"is-show-prev":!0,"is-show-finish":!1,onPrevStep:e[35]||(e[35]=t=>g(19)),onSkipGuide:l,onFinishGuide:l,onNextStep:e[36]||(e[36]=t=>{a(19),f.value=!1,p(2)})},null,512),[[r,o.value[19]]]),u(v(m,{title:"继续引导",content:"您可以点击查看更多进行更多场景体验。",direction:"left","arrow-style":{top:"calc(50% - 6px)"},style:{top:"52%",left:"25%"},"is-show-prev":!0,"is-show-finish":!1,onPrevStep:e[37]||(e[37]=t=>{g(20),p(2),s.isShow=!0,f.value=!0}),onSkipGuide:l,onFinishGuide:l,onNextStep:e[38]||(e[38]=t=>h(c).push({path:"/activity6"}))},null,512),[[r,o.value[20]]]),u(S("div",Fe,[S("div",{ref_key:"markRef",ref:C,class:"mark-img"},[S("img",{ref_key:"markRef1",ref:Z,src:fe,alt:"",onClick:e[39]||(e[39]=t=>I(t)),onMousemove:e[40]||(e[40]=t=>I(t))},null,544)],512),u(v(m,{title:"画布引擎",content:"您可以对基本信息做调整",direction:"right","arrow-style":{top:"calc(50% - 6px)"},style:{top:"36%",left:"10%"},"is-show-prev":!0,"is-show-finish":!1,onPrevStep:e[41]||(e[41]=t=>{g(14),x.value=!1}),onSkipGuide:l,onFinishGuide:e[42]||(e[42]=t=>{a(14),x.value=!1}),onNextStep:e[43]||(e[43]=t=>{f.value=!0,x.value=!1,a(14)})},null,512),[[r,o.value[14]]])],512),[[r,x.value]]),u(S("div",Ne,[S("div",{ref_key:"markRef",ref:C,class:"mark-img2",onClick:e[44]||(e[44]=t=>b(t)),onMousemove:e[45]||(e[45]=t=>b(t))},Re,544),u(v(m,{title:"画布引擎",content:"您可以对营销资源重新关联并调整。",direction:"right","arrow-style":{top:"calc(50% - 6px)"},style:{top:"36%",left:"10%"},"is-show-prev":!0,"is-show-finish":!1,onPrevStep:e[46]||(e[46]=t=>{g(16),$.value=!1}),onSkipGuide:l,onFinishGuide:e[47]||(e[47]=t=>{$.value=!1,L.value[2]&&(a(13),p(2))}),onNextStep:e[48]||(e[48]=t=>{a(16),f.value=!0,p(2),p(2),$.value=!1})},null,512),[[r,o.value[16]]])],512),[[r,$.value]]),u(S("div",He,[S("div",{ref_key:"markRef",ref:C,class:"mark-img3",onClick:e[49]||(e[49]=t=>X(t)),onMousemove:e[50]||(e[50]=t=>X(t))},Ce,544),u(v(m,{title:"画布引擎",content:"您可对参与规则做调整。",direction:"right","arrow-style":{top:"calc(50% - 6px)"},style:{top:"36%",left:"10%"},"is-show-prev":!0,"is-show-finish":!1,onPrevStep:e[51]||(e[51]=t=>{g(18),M.value=!1}),onSkipGuide:l,onFinishGuide:e[52]||(e[52]=t=>{a(18),M.value=!1}),onNextStep:e[53]||(e[53]=t=>{a(18),f.value=!0,p(2),M.value=!1})},null,512),[[r,o.value[18]]])],512),[[r,M.value]])],64))}},De=_(We,[["__scopeId","data-v-8c6d5d23"]]);export{De as default};
