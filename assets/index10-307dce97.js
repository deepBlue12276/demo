import{_ as z,u as C,f as L,t as E,g as F,o as T,c as X,b as f,a as x,d as h,w as Y,v as B,n as N,F as V,i as P}from"./index-207df48a.js";import{_ as q}from"./2024092517191-32beb565.js";import{G as j}from"./Guide2-6d3f0f1d.js";import{A as J}from"./AiChat2-ab2be2b7.js";import{$ as c}from"./jquery-c1df2b98.js";import"./left-arrow-6f6966ca.js";import"./Frame 427320860-3d5958e4.js";import"./Group 1321315262-1c50344e.js";/* empty css                                                                */const K="/demo/assets/2024092517281-2d6c45ca.png";const O={class:"index10"},Q={class:"aside"},U={__name:"index10",setup(Z){const a=C(),_=L({showInput:!1,showDetail:!1,rightRef:null,showRobot:!1,showGuide:!1,imgRef:null,asideRef:null,clientWidth:0,clientHeight:0,top1:0,left1:0,aiMsgList:[{type:"text",value:"已为您查询到xx营业厅物料投放信息，您可点击查看",index:1},{type:"img",value:K,index:2}]}),{showDetail:y,showInput:H,rightRef:d,showRobot:m,showGuide:g,imgRef:ee,asideRef:p,clientWidth:i,clientHeight:v,top1:r,left1:u,aiMsgList:w}=E(_),R=o=>{const s=p.value.width,l=p.value.height,t=o.clientX/s,e=o.clientY/l;console.log(t,e),t>.26&&t<1&&e>.601&&e<.71&&(console.log("门店经营管理总览"),a.push({path:"/store1"})),t>.26&&t<1&&e>.735&&e<.85&&(console.log("AI识人"),a.push({path:"/store2"})),t>.26&&t<1&&e>.875&&e<.99&&(console.log("AI识音"),a.push({path:"/store5"})),t>.26&&t<1&&e>1.018&&e<1.13&&(console.log("AI识物"),a.push({path:"/store9"}),g.value=!0)},W=o=>{console.log("handleMousemove");const s=p.value.width,l=p.value.height,t=o.clientX/s,e=o.clientY/l;console.log(t,e),t>.26&&t<1&&e>.601&&e<.71||t>.26&&t<1&&e>.735&&e<.85||t>.26&&t<1&&e>.875&&e<.99||t>.26&&t<1&&e>1.018&&e<1.13?o.target.style.cursor="pointer":o.target.style.cursor=""},I=()=>{i.value=window.innerWidth,v.value=window.innerHeight;const o=i.value*457/1920+"px";c(".aside")[0].style.width=o,c(".right")[0].style.width=`calc(100% - ${o})`,m.value=!1,r.value=i.value*345/1e3+"px",u.value=i.value*520/1e3+"px",console.log(i.value,"--111-"),window.addEventListener("resize",()=>{i.value=window.innerWidth,v.value=window.innerHeight,r.value=i.value*345/1e3+"px",u.value=i.value*520/1e3+"px"})},k=(o,s)=>{const l=c(`.image-${s}`)[0].offsetWidth,t=c(`.image-${s}`)[0].offsetHeight,e=o.clientX/l,n=o.clientY/t;console.log(e,n),e>.774&&e<.918&&n>5.648&&n<6.135&&(console.log("是"),a.push({path:"/store11"})),e>1.045&&e<1.23&&n>6.11&&n<6.58&&(console.log("否"),w.value=[])},S=(o,s)=>{console.log("handleMousemove2");const l=c(`.image-${s}`)[0].offsetWidth,t=c(`.image-${s}`)[0].offsetHeight,e=o.clientX/l,n=o.clientY/t;console.log(e,n),e>.774&&e<.918&&n>5.648&&n<6.135?o.target.style.cursor="pointer":o.target.style.cursor=""},b=()=>{g.value=!1},M=()=>{a.push({path:"/store9",query:{guide:2}})},A=()=>{a.push({path:"/store11"})},D=()=>{a.push({path:"/store4"})},$=()=>{g.value=!0,c(".right")[0].style.zIndex=2},G=()=>{const o=d.value.scrollTop,s=d.value.clientHeight,l=d.value.scrollHeight;if(console.log(l,"scrollHeight"),console.log(o+s,"scrollTop + clientHeight"),o+s>=l-5){console.log("到达底部");const t=d.value.clientHeight;r.value=t*270/374+"px",u.value=t*750/374+"px",console.log(i.value,"--111-"),window.addEventListener("resize",()=>{r.value=t*270/374+"px",u.value=t*750/374+"px"}),P(c(".store3 .msg-box-a .msg .btn")[0])&&(g.value=!0)}};return F(()=>{i.value=window.innerWidth,v.value=window.innerHeight,r.value=i.value*165/1e3+"px",u.value=i.value*75/1e3+"px",console.log(i.value,"--111-"),window.addEventListener("resize",()=>{i.value=window.innerWidth,v.value=window.innerHeight,r.value=i.value*165/1e3+"px",u.value=i.value*75/1e3+"px"})}),(o,s)=>(T(),X(V,null,[f("div",O,[f("div",Q,[f("img",{ref_key:"asideRef",ref:p,src:q,alt:"",onClick:s[0]||(s[0]=l=>R(l)),onMousemove:s[1]||(s[1]=l=>W(l))},null,544)]),f("div",{class:"right",onScroll:s[2]||(s[2]=l=>G()),ref_key:"rightRef",ref:d},[x(J,{"user-msg":"我想查看xx营业厅物料投放情况","ai-msg-list":h(w),"is-hidden-menu":!1,onToDetail:D,onRenderFinish:$,onHandleRobot:I,showRobot:h(m),showInput:h(H),showDetail:h(y),onHandleClick:k,onHandleMousemove:S,class:"store3"},null,8,["ai-msg-list","showRobot","showInput","showDetail"])],544)]),Y(x(j,{ref:"guide",title:"门店物料设备线上化巡检",content:"请跟我一起快捷查看营业厅内物料投放情况，借助AI能力，变革过去门店管理人员线下实地走访查看比对的低端耗时工作方式。",onSkipGuide:b,onNextStep:A,onPrevStep:M,direction:"right",style:N({top:h(r),left:h(u)}),isShowPrev:!0},null,8,["style"]),[[B,h(g)]])],64))}},ue=z(U,[["__scopeId","data-v-5a71677e"]]);export{ue as default};
