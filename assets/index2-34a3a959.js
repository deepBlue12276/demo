import{A as ce}from"./AiChat-f9a2465e.js";import{_ as he,u as ye,d as we,r as m,f as ke,o as S,c as x,b as g,F as W,y as b,a as p,l as I,w as v,v as f,g as H,p as Se,k as xe}from"./index-2e1c0b5b.js";import{_ as $e}from"./Group 1321315262-1c50344e.js";import{_ as Ge,a as Me,b as Re,c as Fe,i as z,d as E,e as J,f as K,g as O,h as Q,j as Ce,k as He,l as Ne,m as Pe,n as We,o as Le,p as Xe,q as Ye,r as be,s as Ie}from"./Frame 3695 (7)-8d1ec0ec.js";import{_ as U,i as Ae,a as qe,b as De}from"./Frame 3697-fdab8454.js";import{$ as N}from"./jquery-8aa990ad.js";import{G as c}from"./Guide-bc7aa433.js";import{A as Z}from"./AiChatList2-8ff36336.js";import{i as Be,a as Ve}from"./Frame 1321315311-4a363fc1.js";import"./Frame 427320860-3d5958e4.js";import"./Box Wrapper-5add57c3.js";/* empty css                                                               */import"./left-arrow-6f6966ca.js";const Te="/demo/assets/Group 1321315255-6da25576.png";const _=L=>(Se("data-v-47e3a394"),L=L(),xe(),L),je={class:"main-view"},ze={class:"aside"},Ee={key:0,src:Fe,class:"right-img",alt:""},Je={class:"asideRoot"},Ke={class:"aside"},Oe={class:"right"},Qe={class:"mark"},Ue={class:"mark-img"},Ze=_(()=>g("img",{src:be,alt:""},null,-1)),_e=[Ze],et={class:"mark"},tt=_(()=>g("img",{src:Ie,alt:""},null,-1)),st=[tt],it={__name:"index2",setup(L){const w=ye(),A=we(),r=m(!1),X=m(!0),ee=m(!1),o=m([!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]),R=m([!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]),a=i=>{R.value=[!1,!1,!1],i>=0&&(R.value[i]=!0)},te=m([{userMsg:"创建宽带业务专项攻坚活动",aiMsgList:[{type:"img",value:Ce},{type:"img",value:He},{type:"img",value:Ne},{type:"img",value:Pe}]}]),k=m([{userMsg:"创建宽带业务专项攻坚活动",aiMsgList:[{type:"img",value:We},{type:"img",value:Le},{type:"img",value:Xe},{type:"img",value:Ye}]},{userMsg:"为我生成活动1的营销策划案",aiMsgList:[{type:"img",value:z},{type:"img",value:E}]}]),se=m([{type:"img",value:Be},{type:"img",value:Ve},{type:"img",value:Ae},{type:"img",value:qe},{type:"img",value:De}]),ie=()=>{r.value=!0,a(0)},oe=i=>{const{e:t,index:l}=i,e=N(`.image_${l}`)[0].offsetWidth,s=N(`.image_${l}`)[0].offsetHeight,u=t.clientX/e,y=t.clientY/s;console.log(u,y),l===0&&k.value.push({userMsg:"为我生成活动1的营销策划案",aiMsgList:[{type:"img",value:z},{type:"img",value:E}]}),l===1&&u>.45&&u<.85&&k.value.push({userMsg:"不可以，请将资源数量调整为2000份",aiMsgList:[{type:"img",value:J},{type:"img",value:K}]}),l===2&&u>.9&&u<1.26&&k.value.push({userMsg:"可以，不做修改",aiMsgList:[{type:"img",value:O},{type:"img",value:Q}]}),l===3&&u>.9&&u<1.26&&k.value.push({userMsg:"可以，不做修改"})},le=m(),d=i=>{if(o.value[i]=!1,i===0){r.value=!0;return}i!==3&&i!==5&&i!==7&&(o.value[i+1]=!0)},h=i=>{o.value[i]=!1,o.value[i-1]=!0},n=()=>{o.value=o.value.map(()=>!1),ee.value=!0},F=m(),ne=i=>{const t=F.value.width,l=F.value.height,e=i.clientX/t,s=i.clientY/l;console.log(e,s),e>.26&&e<1&&s>.601&&s<.71&&(console.log("营销日历场景"),w.push({path:"/activity1"})),e>.26&&e<1&&s>.735&&s<.85&&(console.log("活动自动化配置场景"),w.push({path:"/activity3"})),e>.26&&e<1&&s>.86&&s<.99&&(console.log("文生图场景"),w.push({path:"/activity6"})),e>.26&&e<1&&s>1&&s<1.13&&(console.log("活动策划案"),w.push({path:"/activity8"}))},ue=i=>{const t=F.value.width,l=F.value.height,e=i.clientX/t,s=i.clientY/l;console.log(e,s),e>.26&&e<1&&s>.601&&s<.71||e>.26&&e<1&&s>.735&&s<.85||e>.26&&e<1&&s>.875&&s<.99||e>.26&&e<1&&s>1.018&&s<1.13||e>1.1&&e<1.163&&s>.676&&s<.78?i.target.style.cursor="pointer":i.target.style.cursor=""},q=m(),C=m(),$=m(!1),G=m(!1),M=m(!1),D=i=>{const t=C.value.width,l=C.value.height,e=i.clientX/t,s=i.clientY/l;console.log(e,s),e>1.39&&e<1.45&&s>.3&&s<.33&&($.value=!0,o.value[11]=!0),e>1.39&&e<1.45&&s>.46&&s<.48&&(G.value=!0,o.value[13]=!0),e>1.39&&e<1.45&&s>.65&&s<.68&&(M.value=!0,o.value[15]=!0),e>1.54&&e<1.75&&s>.2&&s<.24&&(d(16),r.value=!1,a(2),X.value=!1)},B=i=>{const t=C.value.width,l=C.value.height,e=i.clientX/t,s=i.clientY/l;console.log(e,s),e>1.4&&e<1.45&&s>.3&&s<.34||e>1.4&&e<1.45&&s>.46&&s<.49||e>1.4&&e<1.45&&s>.65&&s<.68||e>1.54&&e<1.75&&s>.2&&s<.24?i.target.style.cursor="pointer":i.target.style.cursor=""},ae=m(),V=i=>{const{type:t}=i,l=document.body.clientWidth,e=document.body.clientHeight,s=i.offsetX/l*1680,u=i.offsetY/e*938;console.log("x--",s),console.log("y--",u),s>534&&s<575&&u>15&&u<40||s>393&&s<538?(i.target.style.cursor="pointer",t==="click"&&($.value=!1)):i.target.style.cursor=""},T=i=>{const{type:t}=i,l=document.body.clientWidth,e=document.body.clientHeight,s=i.offsetX/l*1680,u=i.offsetY/e*938;console.log("x--",s),console.log("y--",u),s>534&&s<575&&u>15&&u<37||s>393&&s<538?(i.target.style.cursor="pointer",t==="click"&&(G.value=!1)):i.target.style.cursor=""},j=i=>{const{type:t}=i,l=document.body.clientWidth,e=document.body.clientHeight,s=i.offsetX/l*1680,u=i.offsetY/e*938;console.log("x--",s),console.log("y--",u),s>534&&s<575&&u>15&&u<37||s>356&&s<475?(i.target.style.cursor="pointer",t==="click"&&(M.value=!1)):i.target.style.cursor=""},re=i=>{console.log("flag",i),i===1&&(o.value[0]=!0)},ve=i=>{console.log("flag",i),i===2&&(o.value[1]=!0,a(1)),i===3&&(o.value[4]=!0,a(1)),i===4&&(o.value[6]=!0,a(1)),i===5&&(o.value[8]=!0,a(2))},Y=m(!1),fe=()=>{Y.value=!0},pe=i=>{const{e:t,index:l}=i,e=N(`.image_${l}`)[0].offsetWidth,s=N(`.image_${l}`)[0].offsetHeight,u=t.clientX/e,y=t.clientY/s;console.log(u,y),u>.77&&u<.9&&y>20&&y<22||u>.77&&u<.9&&y>25&&y<28?t.target.style.cursor="pointer":t.target.style.cursor=""},ge=i=>{const{e:t,index:l}=i,e=N(`.image_${l}`)[0].offsetWidth,s=N(`.image_${l}`)[0].offsetHeight,u=t.clientX/e,y=t.clientY/s;console.log(u,y),u>.46&&u<.85&&y>11&&y<11.76||u>.87&&u<1.25&&y>11&&y<11.76?t.target.style.cursor="pointer":t.target.style.cursor=""},P=m(),de=i=>{const t=P.value.width,l=P.value.height,e=i.clientX/t,s=i.clientY/l;console.log(e,s),e>.08&&e<.83&&s>.59&&s<.7&&(console.log("营销日历场景"),w.push({path:"/activity1"})),e>.08&&e<.83&&s>.837&&s<.841&&(console.log("活动自动化配置场景"),w.push({path:"/activity3"})),e>.08&&e<.83&&s>.86&&s<.99&&(console.log("文生图场景"),w.push({path:"/activity6"})),e>.08&&e<.83&&s>1&&s<1.13&&(console.log("活动策划案"),w.push({path:"/activity8"})),e>.91&&e<.96&&s>.66&&s<.77&&(Y.value=!1)},me=i=>{console.log("handleMousemove");const t=P.value.width,l=P.value.height,e=i.clientX/t,s=i.clientY/l;console.log(e,s),e>.26&&e<1&&s>.601&&s<.71||e>.26&&e<1&&s>.735&&s<.85||e>.26&&e<1&&s>.875&&s<.99||e>.26&&e<1&&s>1.018&&s<1.13||e>1.1&&e<1.163&&s>.676&&s<.78||e>.91&&e<.96&&s>.66&&s<.77?i.target.style.cursor="pointer":i.target.style.cursor=""};return ke(()=>{var i,t;if((i=A.query)!=null&&i.index){const l=(t=A.query)==null?void 0:t.index;o.value[0]=!1,o.value[l]=!0,r.value=!0,a(2)}}),(i,t)=>{const l=ce;return S(),x(W,null,[g("div",je,[X.value?(S(),x(W,{key:0},[r.value?(S(),x(W,{key:1},[g("div",{class:b(["aside aside-2",{highlight:o.value[1]||o.value[3]||o.value[4]||o.value[5]||o.value[6]||o.value[7]||o.value[8]}])},[p(Z,{ref_key:"aiList",ref:le,"msg-list":k.value,"is-hidden-menu":r.value,onImgClick:oe,onHandleMousemove:ge,onRenderFinish:ve},null,8,["msg-list","is-hidden-menu"]),g("img",{class:"robot",src:$e,alt:"",onClick:fe})],2),g("div",{class:b(["right right-2",{highlight:o.value[2]||o.value[9]||o.value[10]}])},[R.value[0]?(S(),x("img",Ee)):I("",!0),R.value[1]?(S(),x("img",{key:1,ref_key:"rightRef",ref:C,src:Ge,class:"right-img",alt:"",onClick:t[2]||(t[2]=e=>D(e)),onMousemove:t[3]||(t[3]=e=>B(e))},null,544)):I("",!0),R.value[2]?(S(),x("img",{key:2,ref_key:"rightRef",ref:C,src:Me,class:"right-img",alt:"",onClick:t[4]||(t[4]=e=>D(e)),onMousemove:t[5]||(t[5]=e=>B(e))},null,544)):I("",!0)],2),v(g("div",Je,[g("img",{ref_key:"asideRoot",ref:P,src:U,alt:"",onClick:t[6]||(t[6]=e=>de(e)),onMousemove:t[7]||(t[7]=e=>me(e))},null,544)],512),[[f,Y.value]])],64)):(S(),x(W,{key:0},[g("div",ze,[g("img",{ref_key:"asideRef",ref:F,src:Te,alt:"",onClick:t[0]||(t[0]=e=>ne(e)),onMousemove:t[1]||(t[1]=e=>ue(e))},null,544)]),g("div",{ref:"aiList1",class:b(["right",{highlight:o.value[0]}])},[p(Z,{"msg-list":te.value,"is-hidden-menu":r.value,onImgClick:ie,onHandleMousemove:pe,onRenderFinish:re},null,8,["msg-list","is-hidden-menu"])],2)],64))],64)):(S(),x(W,{key:1},[g("div",Ke,[g("img",{ref_key:"asideRef",ref:F,src:U,alt:""},null,512)]),g("div",Oe,[p(l,{"user-msg":"营销日历","ai-msg-list":se.value,"is-hidden-menu":!1,onToDetail:i.toDetail},null,8,["ai-msg-list","onToDetail"])])],64))]),v(p(c,{title:"自然语言对话确认配置信息样例",content:"下面，您可体验大模型自动化的活动配置流程，一改过去人工查找配置菜单挨个做配置项配置的方式。",direction:"right","arrow-style":{top:"calc(50% - 6px)"},style:{top:"30%",left:"4%"},"is-show-prev":!0,"is-show-finish":!1,onPrevStep:t[8]||(t[8]=e=>{h(0),H(w).push({path:"/activity1",query:{index:1}})}),onSkipGuide:n,onFinishGuide:n,onNextStep:t[9]||(t[9]=e=>{d(0),a(0)})},null,512),[[f,o.value[0]]]),v(p(c,{title:"自然语言对话确认配置信息样例",content:"通过自然语言对话，AI与运营管理人员确认关键配置项参数信息，调用画布引擎工具，将确认好的参数项做写入，减少人工手动操作配置的繁琐工作。",direction:"left","arrow-style":{top:"calc(50% - 6px)"},style:{top:"33%",left:"43%"},"is-show-prev":!1,"is-show-finish":!1,onPrevStep:t[10]||(t[10]=e=>h(1)),onSkipGuide:n,onFinishGuide:n,onNextStep:t[11]||(t[11]=e=>{d(1),r.value=!0,a(1)})},null,512),[[f,o.value[1]]]),v(p(c,{title:"画布引擎",content:"关键信息与运营人员二次确认后才可写入，您也可以在右侧的画布引擎里面，对具体的配置项做修改。",direction:"right","arrow-style":{top:"calc(50% - 6px)"},style:{top:"33%",left:"21%"},"is-show-prev":!0,"is-show-finish":!1,onPrevStep:t[12]||(t[12]=e=>h(2)),onSkipGuide:n,onFinishGuide:n,onNextStep:t[13]||(t[13]=e=>{d(2),r.value=!0,a(1)})},null,512),[[f,o.value[2]]]),v(p(c,{title:"自然语言对话确认配置信息样例",content:"对于核心资源类配置项如卡券资源，AI必须经过二次确认才可明确配置信息。",direction:"left","arrow-style":{top:"calc(50% - 6px)"},style:{top:"37%",left:"43%"},"is-show-prev":!1,"is-show-finish":!1,onPrevStep:t[14]||(t[14]=e=>h(3)),onSkipGuide:n,onFinishGuide:n,onNextStep:t[15]||(t[15]=e=>{d(3),r.value=!0,a(1),k.value.push({userMsg:"不可以，请将资源数量调整为2000份",aiMsgList:[{type:"img",value:H(J)},{type:"img",value:H(K)}]})})},null,512),[[f,o.value[3]]]),v(p(c,{title:"自然语音对话确认配置信息样例",content:"运营管理人员可通过对话，对配置信息做调整。",direction:"left","arrow-style":{top:"calc(50% - 6px)"},style:{top:"37%",left:"43%"},"is-show-prev":!1,"is-show-finish":!1,onPrevStep:t[16]||(t[16]=e=>h(4)),onSkipGuide:n,onFinishGuide:n,onNextStep:t[17]||(t[17]=e=>{d(4),r.value=!0,a(1)})},null,512),[[f,o.value[4]]]),v(p(c,{title:"自然语言对话确认配置信息样例",content:"修改调整的配置参数也需要经过确认后，才可进行初步写入。",direction:"left","arrow-style":{top:"calc(50% - 6px)"},style:{top:"37%",left:"43%"},"is-show-prev":!1,"is-show-finish":!1,onPrevStep:t[18]||(t[18]=e=>h(5)),onSkipGuide:n,onFinishGuide:n,onNextStep:t[19]||(t[19]=e=>{d(5),r.value=!0,a(1),k.value.push({userMsg:"可以，不做修改",aiMsgList:[{type:"img",value:H(O)},{type:"img",value:H(Q)}]})})},null,512),[[f,o.value[5]]]),v(p(c,{title:"自然语言对话确认配置信息样例",content:"画布引擎的数据展示，与对话中明确好的信息内容同步。",direction:"left","arrow-style":{top:"calc(50% - 6px)"},style:{top:"37%",left:"43%"},"is-show-prev":!1,"is-show-finish":!1,onPrevStep:t[20]||(t[20]=e=>h(6)),onSkipGuide:n,onFinishGuide:n,onNextStep:t[21]||(t[21]=e=>{d(6),r.value=!0,a(1)})},null,512),[[f,o.value[6]]]),v(p(c,{title:"自然语言对话确认配置信息样例",content:"画布引擎的数据展示，与对话中明确好的信息内容同步。",direction:"left","arrow-style":{top:"calc(50% - 6px)"},style:{top:"45%",left:"43%"},"is-show-prev":!1,"is-show-finish":!1,onPrevStep:t[22]||(t[22]=e=>h(7)),onSkipGuide:n,onFinishGuide:n,onNextStep:t[23]||(t[23]=e=>{d(7),r.value=!0,a(2),k.value.push({userMsg:"可以，不做修改"})})},null,512),[[f,o.value[7]]]),v(p(c,{title:"自然语言对话确认配置信息样例",content:"所有配置信息都明确后，画布引擎的界面会展示具体的配置信息内容。",direction:"left","arrow-style":{top:"calc(50% - 6px)"},style:{top:"53%",left:"42%"},"is-show-prev":!1,"is-show-finish":!1,onPrevStep:t[24]||(t[24]=e=>h(8)),onSkipGuide:n,onFinishGuide:n,onNextStep:t[25]||(t[25]=e=>{d(8),r.value=!0,a(2)})},null,512),[[f,o.value[8]]]),v(p(c,{title:"画布引擎",content:"关键信息都是与运营人员二次确认后才可写入，保障了核心数据的安全性，您也可在右侧的画布引擎里面，去对具体的配置项做修改。",direction:"right","arrow-style":{top:"calc(50% - 6px)"},style:{top:"33%",left:"21%"},"is-show-prev":!1,"is-show-finish":!1,onPrevStep:t[26]||(t[26]=e=>h(9)),onSkipGuide:n,onFinishGuide:n,onNextStep:t[27]||(t[27]=e=>{d(9),r.value=!0,a(2)})},null,512),[[f,o.value[9]]]),v(p(c,{title:"画布引擎",content:"点击设置即可对当前配置项的相关信息做编辑修改。",direction:"right","arrow-style":{top:"calc(50% - 6px)"},style:{top:"18%",left:"52%"},"is-show-prev":!0,"is-show-finish":!0,onPrevStep:t[28]||(t[28]=e=>h(10)),onSkipGuide:n,onFinishGuide:n,onNextStep:t[29]||(t[29]=e=>{d(10),r.value=!0,a(2),$.value=!0})},null,512),[[f,o.value[10]]]),v(p(c,{title:"画布引擎",content:"点击查看设置即可对当前配置项的相关信息做编辑修改。",direction:"right","arrow-style":{top:"calc(50% - 6px)"},style:{top:"31%",left:"52%"},"is-show-prev":!0,"is-show-finish":!0,onPrevStep:t[30]||(t[30]=e=>h(12)),onSkipGuide:n,onFinishGuide:n,onNextStep:t[31]||(t[31]=e=>{d(12),r.value=!0,a(2),G.value=!0})},null,512),[[f,o.value[12]]]),v(p(c,{title:"画布引擎",content:"点击查看设置即可对当前配置项的相关信息做编辑修改。",direction:"right","arrow-style":{top:"calc(50% - 6px)"},style:{top:"47%",left:"52%"},"is-show-prev":!0,"is-show-finish":!0,onPrevStep:t[32]||(t[32]=e=>h(14)),onSkipGuide:n,onFinishGuide:n,onNextStep:t[33]||(t[33]=e=>{d(14),r.value=!0,a(2),M.value=!0})},null,512),[[f,o.value[14]]]),v(p(c,{title:"画布引擎",content:"所有信息确认完成后，您可提交活动信息进入审批流程。",direction:"right","arrow-style":{top:"calc(50% - 6px)"},style:{top:"35%",left:"22%"},"is-show-prev":!0,"is-show-finish":!1,onPrevStep:t[34]||(t[34]=e=>h(16)),onSkipGuide:n,onFinishGuide:n,onNextStep:t[35]||(t[35]=e=>{d(16),r.value=!1,a(2),X.value=!1})},null,512),[[f,o.value[16]]]),v(p(c,{title:"继续引导",content:"您可以点击查看更多进行更多场景体验。",direction:"right","arrow-style":{top:"calc(50% - 6px)"},style:{top:"35%",left:"22%"},"is-show-prev":!0,"is-show-finish":!1,onPrevStep:t[36]||(t[36]=e=>{o.value[17]=!1,a(2),X.value=!0,r.value=!0}),onSkipGuide:n,onFinishGuide:n,onNextStep:t[37]||(t[37]=e=>H(w).push({path:"/activity3"}))},null,512),[[f,o.value[17]]]),v(g("div",Qe,[g("div",Ue,[g("img",{ref_key:"markRef1",ref:ae,src:Re,alt:"",onClick:t[38]||(t[38]=e=>V(e)),onMousemove:t[39]||(t[39]=e=>V(e))},null,544)]),v(p(c,{title:"画布引擎",content:"您可以对基本信息做调整",direction:"right","arrow-style":{top:"calc(50% - 6px)"},style:{top:"36%",left:"10%"},"is-show-prev":!0,"is-show-finish":!0,onPrevStep:t[40]||(t[40]=e=>{h(11),$.value=!1}),onSkipGuide:n,onFinishGuide:t[41]||(t[41]=e=>{d(11),$.value=!1}),onNextStep:t[42]||(t[42]=e=>{r.value=!0,$.value=!1})},null,512),[[f,o.value[11]]])],512),[[f,$.value]]),v(g("div",{class:"mark",onClick:t[46]||(t[46]=e=>T(e)),onMousemove:t[47]||(t[47]=e=>T(e))},[g("div",{ref_key:"markRef",ref:q,class:"mark-img2"},_e,512),v(p(c,{title:"画布引擎",content:"您可以对营销资源重新关联并调整。",direction:"right","arrow-style":{top:"calc(50% - 6px)"},style:{top:"36%",left:"10%"},"is-show-prev":!0,"is-show-finish":!0,onPrevStep:t[43]||(t[43]=e=>{h(13),G.value=!1}),onSkipGuide:n,onFinishGuide:t[44]||(t[44]=e=>{G.value=!1,R.value[2]&&(d(13),a(2))}),onNextStep:t[45]||(t[45]=e=>{d(13),r.value=!0,a(2),G.value=!1})},null,512),[[f,o.value[13]]])],544),[[f,G.value]]),v(g("div",et,[g("div",{ref_key:"markRef",ref:q,class:"mark-img3",onClick:t[48]||(t[48]=e=>j(e)),onMousemove:t[49]||(t[49]=e=>j(e))},st,544),v(p(c,{title:"画布引擎",content:"您可对参与规则做调整。",direction:"right","arrow-style":{top:"calc(50% - 6px)"},style:{top:"36%",left:"10%"},"is-show-prev":!0,"is-show-finish":!1,onPrevStep:t[50]||(t[50]=e=>{h(15),M.value=!1}),onSkipGuide:n,onFinishGuide:t[51]||(t[51]=e=>{d(15),M.value=!1}),onNextStep:t[52]||(t[52]=e=>{d(15),r.value=!0,a(2),M.value=!1})},null,512),[[f,o.value[15]]])],512),[[f,M.value]])],64)}}},ht=he(it,[["__scopeId","data-v-47e3a394"]]);export{ht as default};
