import{_ as te,d as se,u as le,e as oe,t as ie,f as ue,o as ae,c as ne,b as g,w as x,v as y,g as u,a as m,n as w,F as re}from"./index-ff65927a.js";import{G as S}from"./Guide2-a3ddd3df.js";import{$ as a}from"./jquery-d04de3b1.js";import"./left-arrow-6f6966ca.js";const de="/demo/assets/门店经营管理总览场景高亮-4a1db370.png",pe="/demo/assets/2024092717401-f7e96920.png";const ve={class:"index1"},ce={class:"aside"},fe={class:"right"},he={__name:"index1",setup(ge){const A=se(),n=le(),P=oe({guide:"1",showGuide:!0,showGuide2:!1,showGuide3:!1,showGuide4:!1,showGuide5:!1,imgRef:null,asideRef:null,clientWidth:0,clientHeight:0,top1:0,left1:0,top2:0,top3:0,top4:0,top5:0,right2:0,right3:0,left4:0,left5:0}),{guide:c,showGuide:d,showGuide2:p,showGuide3:v,showGuide4:r,showGuide5:_,imgRef:f,asideRef:h,clientWidth:s,clientHeight:q,top1:G,top5:k,left1:I,top2:z,top3:R,top4:b,right2:H,right3:W,left4:M,left5:N}=ie(P),X=l=>{const o=h.value.width,i=h.value.height,e=l.clientX/o,t=l.clientY/i;console.log(e,t),e>.26&&e<1&&t>.601&&t<.71&&(console.log("门店经营管理总览"),n.push({path:"/store1"}),d.value=!0),e>.26&&e<1&&t>.735&&t<.85&&(console.log("AI识人"),n.push({path:"/store2"})),e>.26&&e<1&&t>.875&&t<.99&&(console.log("AI识音"),n.push({path:"/store5"})),e>.26&&e<1&&t>1.018&&t<1.13&&(console.log("AI识物"),n.push({path:"/store9"})),e>1.1&&e<1.163&&t>.676&&t<.78&&(console.log("收缩"),showAside.value=!1)},Y=l=>{console.log("handleMousemove");const o=h.value.width,i=h.value.height,e=l.clientX/o,t=l.clientY/i;console.log(e,t),e>.26&&e<1&&t>.601&&t<.71||e>.26&&e<1&&t>.735&&t<.85||e>.26&&e<1&&t>.875&&t<.99||e>.26&&e<1&&t>1.018&&t<1.13||e>1.1&&e<1.163&&t>.676&&t<.78?l.target.style.cursor="pointer":l.target.style.cursor=""},B=l=>{const o=f.value.width,i=f.value.height,e=l.clientX/o,t=l.clientY/i;console.log(e,t),e>1.396&&e<1.412&&t>.347&&t<.357&&(console.log("点了详情"),n.push({path:"/store4",query:{from:"store1"}})),e>1.396&&e<1.412&&t>.654&&t<.667&&(console.log("点了详情"),n.push({path:"/store7",query:{from:"store1"}}))},C=l=>{console.log("handleMousemove2");const o=f.value.width,i=f.value.height,e=l.clientX/o,t=l.clientY/i;console.log(e,t),e>1.396&&e<1.412&&t>.347&&t<.357||e>1.396&&e<1.412&&t>.654&&t<.667?l.target.style.cursor="pointer":l.target.style.cursor=""},F=()=>{d.value=!1},E=()=>{d.value=!1,r.value=!0,a(".right")[0].style.zIndex=2,a(".aside")[0].style.zIndex=0},V=()=>{p.value=!1},D=()=>{n.push({path:"/store4",query:{from:"store1"}})},L=()=>{r.value=!0,p.value=!1,a(".aside")[0].style.zIndex=0},$=()=>{v.value=!1},j=()=>{n.push({path:"/store7",query:{from:"store1"}})},J=()=>{p.value=!0,v.value=!1,a(".guide2 .box")[0].style.zIndex=3},K=()=>{r.value=!1},O=()=>{r.value=!1,p.value=!0,a(".guide2 .box")[0].style.zIndex=3},Q=()=>{d.value=!0,r.value=!1,a(".right")[0].style.zIndex=0,a(".aside")[0].style.zIndex=2},T=()=>{_.value=!1},U=()=>{n.push({path:"store8",query:{from:"store1"}})},Z=()=>{n.push({path:"/store2"})},ee=()=>{v.value=!1};return ue(()=>{var l;a(".aside")[0].style.zIndex=2,c.value=((l=A.query)==null?void 0:l.guide)||"1",c.value==="3"?(v.value=!0,d.value=!1,p.value=!1,r.value=!1,a(".guide3 .box")[0].style.zIndex=3,a(".right")[0].style.zIndex=2):c.value==="2"?(v.value=!1,d.value=!1,p.value=!0,r.value=!1,a(".guide2 .box")[0].style.zIndex=3,a(".right")[0].style.zIndex=2):c.value==="5"&&(v.value=!1,d.value=!1,p.value=!1,r.value=!1,_.value=!0,a(".aside")[0].style.zIndex=2),s.value=window.innerWidth,q.value=window.innerHeight,G.value=s.value*215/1e3+"px",I.value=s.value*280/1e3+"px",H.value=s.value*85/1e3+"px",z.value=s.value*80/1e3+"px",W.value=s.value*85/1e3+"px",M.value=s.value*75/1e3+"px",R.value=s.value*210/1e3+"px",b.value=s.value*210/1e3+"px",k.value=s.value*215/1e3+"px",N.value=s.value*280/1e3+"px",console.log(s.value,"--111-"),window.addEventListener("resize",()=>{s.value=window.innerWidth,q.value=window.innerHeight,G.value=s.value*215/1e3+"px",I.value=s.value*280/1e3+"px",H.value=s.value*85/1e3+"px",z.value=s.value*80/1e3+"px",W.value=s.value*85/1e3+"px",M.value=s.value*75/1e3+"px",R.value=s.value*210/1e3+"px",b.value=s.value*210/1e3+"px",k.value=s.value*215/1e3+"px",N.value=s.value*280/1e3+"px"})}),(l,o)=>(ae(),ne(re,null,[g("div",ve,[g("div",ce,[g("img",{ref_key:"asideRef",ref:h,src:de,alt:"",onClick:o[0]||(o[0]=i=>X(i)),onMousemove:o[1]||(o[1]=i=>Y(i))},null,544)]),g("div",fe,[g("img",{ref_key:"imgRef",ref:f,src:pe,alt:"",onClick:o[2]||(o[2]=i=>B(i)),onMousemove:o[3]||(o[3]=i=>C(i))},null,544)])]),x(m(S,{ref_key:"guide",ref:c,class:"guide",title:"门店运营总览",content:"门店经营管理总览，为您展示您角色权限范围内的门店经营数据情况，您也可通过区域选择查看您管辖营业厅的经营情况。",direction:"left","arrow-style":{top:"calc(50% - 6px)"},style:w({top:u(G),left:u(I)}),"is-show-prev":!1,onSkipGuide:F,onNextStep:E},null,8,["style"]),[[y,u(d)]]),x(m(S,{ref:"guide2",class:"guide2",title:"门店运营总览",content:"在门店运营总览中，为您展示管理权限内门店任务情况，包括营销、服务、维系、走访等类型任务，您可点击详情体验该场景下功能。",direction:"right","arrow-style":{bottom:"25%"},style:w({top:u(z),right:u(H)}),"is-show-prev":!0,onSkipGuide:V,onNextStep:D,onPrevStep:L},null,8,["style"]),[[y,u(p)]]),x(m(S,{ref:"guide3",class:"guide3",title:"门店运营总览",content:"在门店运营总览中，为您展示管理权限内门店任务情况，包括营销、服务、维系、走访等类型任务，您可点击详情体验该场景下功能。",direction:"right","arrow-style":{bottom:"25%"},style:w({top:u(R),right:u(W)}),"is-show-prev":!0,onSkipGuide:$,onNextStep:j,onPrevStep:J,isShowPrev:!0,onFinishGuide:ee},null,8,["style"]),[[y,u(v)]]),x(m(S,{ref:"guide4",class:"guide4",title:"门店运营总览",content:"在门店运营总览中，为您展示管理权限内门店任务情况，包括营销、服务、维系、走访等类型任务，您可点击详情体验该场景下功能。",onSkipGuide:K,onNextStep:O,onPrevStep:Q,direction:"right",arrowStyle:{bottom:"25%"},style:w({top:u(b),left:u(M)}),isShowPrev:!0},null,8,["style"]),[[y,u(r)]]),x(m(S,{ref_key:"guide",ref:c,class:"guide5",title:"门店经营管理继续引导",content:"您可点击AI识人场景，体验门店客流监控情况，和门店精准营销推荐情况。",direction:"left","arrow-style":{top:"calc(50% - 6px)"},style:w({top:u(k),left:u(N)}),"is-show-prev":!0,onSkipGuide:T,onNextStep:Z,onPrevStep:U},null,8,["style"]),[[y,u(_)]])],64))}},Se=te(he,[["__scopeId","data-v-ffd74143"]]);export{Se as default};
