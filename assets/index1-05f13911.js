import{_ as h,u as _,r as x,o as p,c as g,b as n,y as d,a as l,w as m,v,g as w,j as k,l as G,F as S,A as y}from"./index-ff65927a.js";import{A as C,p as X}from"./popMenu-1a219181.js";import{G as c}from"./Guide-1b51a315.js";import"./Group 1321315262 (1)-3eaebc3c.js";import"./left-arrow-6f6966ca.js";const Y="/demo/assets/Group 1321315253-92727d09.png";const B={class:"main-view"},N={__name:"index1",setup(F){const a=_(),e=x([!0,!1]);function f(t){e.value[t]=!1,e.value[t+1]=!0}function r(t){e.value[t]=!1,e.value[t-1]=!0}function i(){e.value=e.value.map(()=>!1)}const u=t=>{y(t,[{minX:166,maxX:552,minY:474,maxY:587,fn:()=>{a.push("/data2")}},{minX:166,maxX:552,minY:200,maxY:315,fn:()=>{a.push("/data3")}},{minX:570,maxX:961,minY:119,maxY:313,fn:()=>{a.push("/data4")}}])};return(t,s)=>(p(),g(S,null,[n("div",B,[n("div",{class:d(["aside",{highlight:e.value[0]}])},[l(C)],2),n("div",{class:d(["right",{highlight:e.value[1]}])},[n("img",{src:Y,class:"",alt:"",onClick:u,onMousemove:u},null,32)],2)]),m(l(c,{title:"快捷问答场景样例",content:"数据运营助手，以ChatBI数据统计分析能力基础，结合业务数据可视化运营能力，为各类运营管理人员、一线角色提供数据决策参考。您可点击运营总览快捷提问体验相关可视化数据检索能力。",direction:"left","arrow-style":{top:"calc(50% - 6px)"},style:{top:"32%",left:"26%"},"is-show-prev":!1,"is-show-finish":!1,onPrevStep:s[0]||(s[0]=o=>r(0)),onSkipGuide:i,onFinishGuide:i,onNextStep:s[1]||(s[1]=o=>f(0))},null,512),[[v,e.value[0]]]),m(l(c,{title:"快捷问答场景样例",content:"基于用户提问习惯，为您生成快捷提问，便于您快速向我提出您关注的问题。",direction:"right","arrow-style":{top:"calc(50% - 6px)"},style:{top:"32%",left:"7%"},"is-show-prev":!0,"is-show-finish":!1,onPrevStep:s[2]||(s[2]=o=>r(1)),onSkipGuide:i,onFinishGuide:i,onNextStep:s[3]||(s[3]=o=>w(a).push("/data2"))},null,512),[[v,e.value[1]]]),t.isHiddenMenu?(p(),k(X,{key:0})):G("",!0)],64))}},P=h(N,[["__scopeId","data-v-d9c345e9"]]);export{P as default};
