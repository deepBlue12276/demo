import{_ as C,u as X,r as i,o as u,c as v,b as k,F,a as r,l as S,w as f,v as m,g as Y,j as P,q as b,A as g,p as B,k as I}from"./index-1caf0ade.js";import{_ as L,i as A,a as R}from"./Frame 1321315304 (1)-e9277010.js";import{A as T,p as V}from"./popMenu-5cbe4a81.js";import{G as d}from"./Guide-6fe59ce7.js";/* empty css                                                               */import"./Group 1321315262 (1)-e8926fba.js";const j="/demo/assets/Group 1321315253 (3)-c54c756b.png",q="/demo/assets/Frame 1321315265 (6)-fe2ac1c3.png",D="/demo/assets/Frame 1321315265 (7)-da621622.png";const E=x=>(B("data-v-ec243d22"),x=x(),I(),x),H={class:"main-view"},z={class:"aside"},J=E(()=>k("img",{src:j,alt:""},null,-1)),K=[J],O={key:1,src:L,alt:"",class:"popup"},Q={__name:"index1",setup(x){const M=X(),s=i([!0,!1,!1,!1,!1,!1,!1]),n=i(!1);i(!1);const w=i([!1,!1,!1]),N=i(!1),a=t=>{w.value=[!1,!1],t>=0&&(w.value[t]=!0)};function c(t){s.value[t]=!1,s.value[t+1]=!0}function p(t){s.value[t]=!1,s.value[t-1]=!0}function o(){s.value=s.value.map(()=>!1)}i([{type:"text",value:"您可选择对以下模型进行配置。"},{type:"img",value:A}]),i([{userMsg:"模型配置",aiMsgList:[{type:"text",value:"您可选择对以下模型进行配置。"},{type:"img",value:R}]},{userMsg:"漏斗模型",aiMsgList:[{type:"text",value:"已为您定位到漏斗模型配置功能菜单"}]}]),i(),i();const h=i(),y=t=>{b(()=>{h.value.scrollTop=t})},_=t=>{g(t,[{minX:1008,maxX:1080,minY:270,maxY:305,fn:()=>{n.value=!0,a(0)}}])},G=t=>{g(t,[{minX:776,maxX:845,minY:895,maxY:928,fn:()=>{a(1)}},{minX:700,maxX:770,minY:895,maxY:928,fn:()=>{n.value=!1}}])},$=t=>{g(t,[{minX:739,maxX:807,minY:231,maxY:265,fn:()=>{n.value=!1}}])};return(t,e)=>(u(),v(F,null,[k("div",H,[n.value?(u(),v("div",{key:1,ref_key:"fullScreen",ref:h,class:"full-screen"},[w.value[0]?(u(),v("img",{key:0,src:q,alt:"",onClick:G,onMousemove:G},null,32)):S("",!0),w.value[1]?(u(),v("img",{key:1,src:D,alt:"",onClick:$,onMousemove:$},null,32)):S("",!0)],512)):(u(),v(F,{key:0},[k("div",z,[r(T)]),k("div",{class:"right",onClick:_,onMousemove:_},K,32)],64))]),f(r(d,{title:"场景编排配置示例",content:"场景编排场景，为您提供场景的配置化操作。",direction:"left","arrow-style":{top:"calc(50% - 6px)"},style:{top:"37%",left:"26%"},"is-show-prev":!1,"is-show-finish":!1,onPrevStep:e[0]||(e[0]=l=>p(0)),onSkipGuide:o,onFinishGuide:o,onNextStep:e[1]||(e[1]=l=>c(0))},null,512),[[m,s.value[0]]]),f(r(d,{title:"分析模型配置",content:"场景编排场景，可根据不同运营策略及目的进行新增创建。",direction:"right","arrow-style":{top:"calc(50% - 6px)"},style:{top:"36.5%",left:"67%"},"is-show-prev":!0,"is-show-finish":!1,onPrevStep:e[2]||(e[2]=l=>p(1)),onSkipGuide:o,onFinishGuide:o,onNextStep:e[3]||(e[3]=l=>{c(1),n.value=!0,a(0)})},null,512),[[m,s.value[1]]]),f(r(d,{title:"分析模型配置",content:"通过打通与触点管控平台、业务库、广告投放等平台的数据流，实现能够在定义业务场景的情况下，关联投放运营打法的触点位、供模型调用的素材编码、商品编码、广告编码等数据。",direction:"bottom","arrow-style":{top:"calc(50% - 6px)"},style:{top:"5%",left:"15%"},"is-show-prev":!0,"is-show-finish":!1,onPrevStep:e[4]||(e[4]=l=>{p(2),n.value=!1,a(-1)}),onSkipGuide:o,onFinishGuide:o,onNextStep:e[5]||(e[5]=l=>{c(2),y(9999)})},null,512),[[m,s.value[2]]]),f(r(d,{title:"分析模型配置",content:"提交后，即可进行下一步模型调度与匹配。",direction:"bottom","arrow-style":{top:"calc(50% - 6px)"},style:{top:"65%",left:"41%"},"is-show-prev":!0,"is-show-finish":!1,onPrevStep:e[6]||(e[6]=l=>{p(3),y(0)}),onSkipGuide:o,onFinishGuide:o,onNextStep:e[7]||(e[7]=l=>{c(3),a(1)})},null,512),[[m,s.value[3]]]),f(r(d,{title:"数据洞察",content:"您可以点击返回在列表中查询配置场景的状态!",direction:"top","arrow-style":{top:"calc(50% - 6px)"},style:{top:"45%",left:"40%"},"is-show-prev":!0,"is-show-finish":!1,onPrevStep:e[8]||(e[8]=l=>{p(4),a(0),y(9999)}),onSkipGuide:o,onFinishGuide:o,onNextStep:e[9]||(e[9]=l=>{c(4),n.value=!1,a(-1)})},null,512),[[m,s.value[4]]]),f(r(d,{title:"继续引导",content:"您可点击下一步体验模型调度场景。",direction:"left","arrow-style":{top:"calc(50% - 6px)"},style:{top:"37%",left:"26%"},"is-show-prev":!0,"is-show-finish":!1,onPrevStep:e[10]||(e[10]=l=>{p(5),n.value=!0,a(1)}),onNextStep:e[11]||(e[11]=l=>Y(M).push("/client2")),onSkipGuide:o,onFinishGuide:o},null,512),[[m,s.value[5]]]),n.value?(u(),P(V,{key:0})):S("",!0),N.value?(u(),v("img",O)):S("",!0)],64))}},oe=C(Q,[["__scopeId","data-v-ec243d22"]]);export{oe as default};
