import{_ as $,u as b,r as n,o as i,c as r,b as _,F as C,a as m,l as f,w as c,v as d,j as N,q as P,A as S}from"./index-1caf0ade.js";import{_ as R,i as L,a as B}from"./Frame 1321315304 (1)-e9277010.js";import{G as x}from"./Guide-6fe59ce7.js";import{A,p as T}from"./popMenu-5cbe4a81.js";/* empty css                                                               */import"./Group 1321315262 (1)-e8926fba.js";const V="/demo/assets/Group 1321315254 (1)-bbcb49db.png",j="/demo/assets/Group 1321315254 (2)-82b3553a.png",q="/demo/assets/Group 1321315254 (3)-f65826ad.png",D="/demo/assets/Frame 1321315265 (11)-0aa67f5d.png",E="/demo/assets/Frame 1321315265 (12)-6247a214.png";const H={class:"main-view"},I={class:"aside"},z={class:"right"},J={key:1,src:R,alt:"",class:"popup"},K={__name:"index3",setup(O){b();const s=n([!0,!1,!1,!1,!1,!1,!1]),a=n(!1),g=n([!0,!1,!1]);n(!1);const y=n([!1,!1,!1]),F=n(!1),p=e=>{y.value=[!1,!1],e>=0&&(y.value[e]=!0)},u=e=>{g.value=[!1,!1,!1],e>=0&&(g.value[e]=!0)};function k(e){s.value[e]=!1,s.value[e+1]=!0}function v(e){s.value[e]=!1,s.value[e-1]=!0}function o(){s.value=s.value.map(()=>!1)}n([{type:"text",value:"您可选择对以下模型进行配置。"},{type:"img",value:L}]),n([{userMsg:"模型配置",aiMsgList:[{type:"text",value:"您可选择对以下模型进行配置。"},{type:"img",value:B}]},{userMsg:"漏斗模型",aiMsgList:[{type:"text",value:"已为您定位到漏斗模型配置功能菜单"}]}]),n(),n();const X=n(),h=e=>{P(()=>{X.value.scrollTop=e})},Y=e=>{S(e,[{minX:1008,maxX:1080,minY:228,maxY:260,fn:()=>{a.value=!0,p(0)}},{minX:23,maxX:86,minY:38,maxY:72,fn:()=>{u(0)}},{minX:98,maxX:248,minY:38,maxY:72,fn:()=>{u(1)}},{minX:261,maxX:407,minY:38,maxY:72,fn:()=>{u(2)}}])},w=e=>{S(e,[{minX:23,maxX:86,minY:38,maxY:72,fn:()=>{u(0)}},{minX:98,maxX:248,minY:38,maxY:72,fn:()=>{u(1)}},{minX:261,maxX:407,minY:38,maxY:72,fn:()=>{u(2)}}])},G=e=>{S(e,[{minX:773,maxX:849,minY:2265,maxY:2296,fn:()=>{p(1)}},{minX:701,maxX:773,minY:2265,maxY:2296,fn:()=>{a.value=!1,u(0)}}])},M=e=>{S(e,[{minX:737,maxX:809,minY:229,maxY:265,fn:()=>{a.value=!1,u(0)}}])};return(e,t)=>(i(),r(C,null,[_("div",H,[a.value?(i(),r("div",{key:1,ref_key:"fullScreen",ref:X,class:"full-screen"},[y.value[0]?(i(),r("img",{key:0,src:D,alt:"",onClick:G,onMousemove:G},null,32)):f("",!0),y.value[1]?(i(),r("img",{key:1,src:E,alt:"",onClick:M,onMousemove:M},null,32)):f("",!0)],512)):(i(),r(C,{key:0},[_("div",I,[m(A)]),_("div",z,[g.value[0]?(i(),r("img",{key:0,src:V,alt:"",onClick:Y,onMousemove:Y},null,32)):f("",!0),g.value[1]?(i(),r("img",{key:1,src:j,alt:"",onClick:w,onMousemove:w},null,32)):f("",!0),g.value[2]?(i(),r("img",{key:2,src:q,alt:"",onClick:w,onMousemove:w},null,32)):f("",!0)])],64))]),c(m(x,{title:"动态客群迭代管理",content:"客户运营助手，为您提供三位一体的数字化识客，让您的目标客群日益精准。",direction:"left","arrow-style":{top:"calc(50% - 6px)"},style:{top:"57%",left:"26%"},"is-show-prev":!1,"is-show-finish":!1,onPrevStep:t[0]||(t[0]=l=>v(0)),onSkipGuide:o,onFinishGuide:o,onNextStep:t[1]||(t[1]=l=>k(0))},null,512),[[d,s.value[0]]]),c(m(x,{title:"动态客群迭代管理",content:"您可点击新增配置客群规则及定义。",direction:"right","arrow-style":{top:"calc(50% - 6px)"},style:{top:"33%",left:"67%"},"is-show-prev":!0,"is-show-finish":!1,onPrevStep:t[2]||(t[2]=l=>v(1)),onSkipGuide:o,onFinishGuide:o,onNextStep:t[3]||(t[3]=l=>{k(1),a.value=!0,p(0)})},null,512),[[d,s.value[1]]]),c(m(x,{title:"动态客群迭代管理",content:"基于RFM模型，对接客户画像标签，以及灵活的行为数据规则，实现目标客群的动态迭代。",direction:"bottom","arrow-style":{top:"calc(50% - 6px)"},style:{top:"5%",left:"15%"},"is-show-prev":!0,"is-show-finish":!1,onPrevStep:t[4]||(t[4]=l=>{v(2),a.value=!1,p(-1),u(0)}),onSkipGuide:o,onFinishGuide:o,onNextStep:t[5]||(t[5]=l=>{k(2),h(9999)})},null,512),[[d,s.value[2]]]),c(m(x,{title:"动态客群迭代管理",content:"提交成功后，即可在具体的模型调度中关联目标客群。",direction:"bottom","arrow-style":{top:"calc(50% - 6px)"},style:{top:"65%",left:"41%"},"is-show-prev":!0,"is-show-finish":!1,onPrevStep:t[6]||(t[6]=l=>{v(3),h(0)}),onSkipGuide:o,onFinishGuide:o,onNextStep:t[7]||(t[7]=l=>{k(3),p(1)})},null,512),[[d,s.value[3]]]),c(m(x,{title:"动态客群迭代管理",content:"您可以点击返回在列表中查询配置场景的状态!",direction:"top","arrow-style":{top:"calc(50% - 6px)"},style:{top:"45%",left:"40%"},"is-show-prev":!0,"is-show-finish":!1,onPrevStep:t[8]||(t[8]=l=>{v(4),p(0),h(9999)}),onSkipGuide:o,onFinishGuide:o,onNextStep:t[9]||(t[9]=l=>{k(4),a.value=!1,p(-1)})},null,512),[[d,s.value[4]]]),c(m(x,{title:"继续引导",content:"您可以点击查看更多进行预览!",direction:"left","arrow-style":{top:"calc(50% - 6px)"},style:{top:"57%",left:"26%"},"is-show-prev":!0,"is-show-finish":!0,onPrevStep:t[10]||(t[10]=l=>{v(5),a.value=!0,p(1)}),onSkipGuide:o,onFinishGuide:o},null,512),[[d,s.value[5]]]),a.value?(i(),N(T,{key:0})):f("",!0),F.value?(i(),r("img",J)):f("",!0)],64))}},se=$(K,[["__scopeId","data-v-5edac1cb"]]);export{se as default};
