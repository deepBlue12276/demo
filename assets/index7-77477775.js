import{_ as He,d as Le,u as We,e as Ce,t as be,f as Xe,o as Ye,c as Ie,b as c,a as v,g as o,w as p,v as r,n as g,B as Ae,F as Be}from"./index-ff65927a.js";import{_ as De}from"./Group 1321315262-1c50344e.js";import{_ as Fe}from"./2024092615371-19c4cddb.js";import{$ as S}from"./jquery-d04de3b1.js";import{G as f}from"./Guide-1b51a315.js";import{A as Ve}from"./AiChatList2-94b90d27.js";import"./left-arrow-6f6966ca.js";import"./Frame 427320860-3d5958e4.js";import"./Box Wrapper-5add57c3.js";const qe="/demo/assets/2024092621111-995f5683.png",ze="/demo/assets/2024092619431-7d7d59bf.png",Ee="/demo/assets/2024092616353-56b41f71.png",Te="/demo/assets/2024092616354-750286ec.png",ie="/demo/assets/2024092616351-0f488606.png",oe="/demo/assets/2024092714011-c5b0e3cf.png",Ue="/demo/assets/2024092621131-31301728.png",je="/demo/assets/2024092621141-12628e2a.png";const Je={class:"activity7"},Ke={class:"left"},Oe={class:"right"},Qe={class:"img-con"},Ze={class:"img"},et={class:"detail-pop"},tt={__name:"index7",setup(st){const ue=Le(),h=We(),ne=Ce({detailPicRef:null,rightImgRef:null,showDetailPop:!1,msgList:[{userMsg:"为我生成图片素材",aiMsgList:[{type:"text",value:"您可选择对以下模型进行配置。"},{type:"img",value:Ee}]},{userMsg:"营销活动",aiMsgList:[{type:"text",value:"为您查询到近期已配置活动“存量用户千兆宽带升档活动”，是否需要针对该活动生成图片素材："},{type:"img",value:Te}]}],showAside:!1,showGuide:!1,showGuide2:!1,showGuide3:!1,showGuide4:!1,showGuide5:!1,showGuide6:!1,showGuide7:!1,showGuide8:!1,showGuide9:!1,showGuide10:!1,showGuide11:!1,imgRef:null,asideRef:null,clientWidth:0,clientHeight:0,top1:0,top2:0,top3:0,top4:0,top5:0,top6:0,top7:0,top8:0,top9:0,top10:0,top11:0,left1:0,left2:0,left3:0,left4:0,left5:0,left6:0,left7:0,left8:0,left9:0,right10:0,right10_1:0,left11:0}),{detailPicRef:w,rightImgRef:G,showDetailPop:M,msgList:d,showAside:I,showGuide:m,showGuide2:L,showGuide3:y,showGuide4:x,showGuide5:_,showGuide6:P,showGuide7:N,showGuide8:W,showGuide9:R,showGuide10:$,showGuide11:H,imgRef:lt,asideRef:k,clientWidth:u,clientHeight:A,top1:C,top2:b,top3:B,top4:D,top5:F,top6:V,top7:q,top8:z,top9:E,top10:T,top11:U,left1:X,left2:Y,left3:j,left4:J,left5:K,left6:O,left7:Q,left8:Z,left9:ee,right10:te,right10_1:se,left11:le}=be(ne),ae=t=>{const e=k.value.width,s=k.value.height,l=t.clientX/e,i=t.clientY/s;console.log(l,i),l>.26&&l<1&&i>.601&&i<.71&&(console.log("营销日历场景"),h.push({path:"/activity1"})),l>.26&&l<1&&i>.735&&i<.85&&(console.log("活动自动化配置场景"),h.push({path:"/activity3"})),l>.26&&l<1&&i>.86&&i<.99&&(console.log("文生图场景"),h.push({path:"/activity6"})),l>.26&&l<1&&i>1&&i<1.13&&(console.log("活动策划案"),h.push({path:"/activity8"}))},pe=t=>{const e=k.value.width,s=k.value.height,l=t.clientX/e,i=t.clientY/s;console.log(l,i),l>.069&&l<.84&&i>.601&&i<.71||l>.069&&l<.84&&i>.735&&i<.85||l>.069&&l<.84&&i>.875&&i<.99||l>.069&&l<.84&&i>1.018&&i<1.13||l>.924&&l<1&&i>.676&&i<.78?t.target.style.cursor="pointer":t.target.style.cursor=""},re=t=>{const e=G.value.width,s=G.value.height,l=t.clientX/e,i=t.clientY/s;console.log(l,i),l>1.625&&l<1.721&&i>.239&&i<.275&&($.value=!1,M.value=!0,H.value=!0)},ve=t=>{console.log("handleMousemove2");const e=G.value.width,s=G.value.height,l=t.clientX/e,i=t.clientY/s;console.log(l,i),l>1.625&&l<1.721&&i>.239&&i<.275?t.target.style.cursor="pointer":t.target.style.cursor=""},de=t=>{const e=w.value.width,s=w.value.height,l=t.clientX/e,i=t.clientY/s;console.log(l,i),l>1.698&&l<1.814&&i>3.072&&i<3.26&&(M.value=!1)},ge=t=>{const e=w.value.width,s=w.value.height,l=t.clientX/e,i=t.clientY/s;console.log(l,i),l>1.698&&l<1.814&&i>3.072&&i<3.26?t.target.style.cursor="pointer":t.target.style.cursor=""},fe=t=>{const{e,index:s}=t,l=S(`.image_${s}`)[0].offsetWidth,i=S(`.image_${s}`)[0].offsetHeight,n=e.clientX/l,a=e.clientY/i;console.log(n,a),n>.584&&n<.728&&a>9.921&&a<10.342&&s===1&&(console.log("点了是"),d.value.length<3&&(d.value.push({userMsg:"是",aiMsgList:[{type:"text",value:"请选择素材风格"},{type:"img",value:ie}]}),m.value=!1)),n>.574&&n<.92&&a>6.631&&a<6.912&&s==2&&(console.log("点了蓝色科技感风格"),d.value.length<4&&(d.value.push({userMsg:"蓝色科技感风格",aiMsgList:[{type:"text",value:"请输入或选择素材尺寸大小（单位px）"},{type:"img",value:oe}]}),y.value=!1)),n>.574&&n<.855&&a>6.649&&a<6.947&&s==3&&(console.log("营业厅海报尺寸"),d.value.length<5&&(d.value.push({userMsg:"营业厅海报尺寸",aiMsgList:[{type:"text",value:"请填写素材要求如：主题元素、业务类别、活动卖点、活动文案"}]}),x.value=!1))},ce=t=>{const{e,index:s}=t,l=S(`.image_${s}`)[0].offsetWidth,i=S(`.image_${s}`)[0].offsetHeight,n=e.clientX/l,a=e.clientY/i;console.log(n,a),n>.584&&n<.728&&a>9.921&&a<10.342&&s===1||n>.574&&n<.92&&a>6.631&&a<6.912&&s==2||n>.574&&n<.855&&a>6.649&&a<6.947&&s==3?e.target.style.cursor="pointer":e.target.style.cursor=""},he=()=>{m.value=!1},me=()=>{h.push({path:"/activity6"})},ye=()=>{d.value.push({userMsg:"是",aiMsgList:[{type:"text",value:"请选择素材风格"},{type:"img",value:ie}]}),m.value=!1},xe=()=>{d.value.push({userMsg:"蓝色科技感风格",aiMsgList:[{type:"text",value:"请输入或选择素材尺寸大小（单位px）"},{type:"img",value:oe}]}),y.value=!1},Se=()=>{d.value.push({userMsg:"营业厅海报尺寸",aiMsgList:[{type:"text",value:"请填写素材要求如：主题元素、业务类别、活动卖点、活动文案"}]}),x.value=!1},we=()=>{debugger;d.value.push({userMsg:"主题元素：千兆光纤;业务类别：家庭宽带;活动卖点：千兆宽带限时免费升档体验;活动文案:千兆宽带礼，畅享全千兆",aiMsgList:[]}),_.value=!1},Ge=()=>{P.value=!1,N.value=!0},$e=()=>{d.value.push({userMsg:"您可在右侧通过点选确认素材风格、尺寸、填写素材要求（主题元素、业务类别、活动卖点、活动文案）重新生成图片。",aiMsgList:[]}),N.value=!1,S(".right-img")[0].src=je},ke=()=>{W.value=!1,R.value=!0},Me=()=>{R.value=!1,$.value=!0},_e=()=>{$.value=!1,M.value=!0,H.value=!0},Pe=()=>{h.push({path:"/activity6",query:{guide:"4"}})},Ne=()=>{I.value=!0},Re=t=>{debugger;t===2?m.value=!0:t===3?y.value=!0:t===4?x.value=!0:t===5?(_.value=!0,S(".right-img")[0].src=Ue):t===6?P.value=!0:t===7&&(W.value=!0)};return Xe(()=>{var e;(((e=ue.query)==null?void 0:e.guide)||"1")==="4"&&(m.value=!1,L.value=!1,y.value=!1,x.value=!0),u.value=window.innerWidth,A.value=window.innerHeight,C.value=`${u.value*310/1e3}px`,X.value=`${u.value*400/1e3}px`,b.value=`${u.value*205/1e3}px`,Y.value=`${u.value*182/1e3}px`,B.value=`${u.value*310/1e3}px`,j.value=`${u.value*400/1e3}px`,D.value=`${u.value*310/1e3}px`,J.value=`${u.value*400/1e3}px`,F.value=`${u.value*330/1e3}px`,K.value=`${u.value*400/1e3}px`,V.value=`${u.value*325/1e3}px`,O.value=`${u.value*400/1e3}px`,q.value=`${u.value*205/1e3}px`,Q.value=`${u.value*210/1e3}px`,z.value=`${u.value*325/1e3}px`,Z.value=`${u.value*400/1e3}px`,E.value=`${u.value*205/1e3}px`,ee.value=`${u.value*210/1e3}px`,T.value=`${u.value*125/1e3}px`,te.value=`${u.value*57/1e3}px`,se.value=`${u.value*30/1e3}px`,U.value=`${u.value*240/1e3}px`,le.value=`${u.value*100/1e3}px`,console.log(u.value,"--111-"),window.addEventListener("resize",()=>{u.value=window.innerWidth,A.value=window.innerHeight,C.value=`${u.value*205/1e3}px`,X.value=`${u.value*182/1e3}px`})}),(t,e)=>(Ye(),Ie(Be,null,[c("div",Je,[c("div",Ke,[v(Ve,{"msg-list":o(d),"is-hidden-menu":!1,onImgClick:fe,onHandleMousemove:ce,onRenderFinish:Re},null,8,["msg-list"]),c("img",{class:"robot",src:De,alt:"",onClick:Ne})]),c("div",Oe,[c("div",Qe,[c("div",Ze,[c("img",{ref_key:"rightImgRef",ref:G,class:"right-img",src:qe,alt:"",onClick:e[0]||(e[0]=s=>re(s)),onMousemove:e[1]||(e[1]=s=>ve(s))},null,544)])])]),p(c("div",{class:"aside",onClick:e[2]||(e[2]=s=>ae(s)),onMousemove:e[3]||(e[3]=s=>pe(s))},[c("img",{ref_key:"asideRef",ref:k,src:Fe,alt:""},null,512)],544),[[r,o(I)]])]),p(v(f,{ref:"guide",class:"guide1",title:"便捷文生图素材工具",content:"在本场景中，通过做尽量多的预设项，提供用户选择推进对话，避免需求的发散，以便大模型更加聚焦。",direction:"left",style:g({top:o(C),left:o(X)}),"is-show-prev":!0,onSkipGuide:he,onNextStep:ye,onPrevStep:me},null,8,["style"]),[[r,o(m)]]),p(v(f,{ref:"guide",class:"guide2",title:"便捷文生图素材工具",content:"在本场景中，通过做尽量多的预设项，提供用户选择推进对话，避免需求的发散，以便大模型更加聚焦。",direction:"left",style:g({top:o(b),left:o(Y)}),onSkipGuide:t.skipGuide2,onNextStep:t.nextStep2,onPrevStep:t.prevStep2},null,8,["style","onSkipGuide","onNextStep","onPrevStep"]),[[r,o(L)]]),Ae("'"),p(v(f,{ref:"guide",title:"便捷文生图素材工具",content:"文生图场景中的预设项和提示工程包含了素材风格的选择。",direction:"left",style:g({top:o(B),left:o(j)}),onSkipGuide:e[4]||(e[4]=s=>y.value=!1),onNextStep:xe,onPrevStep:t.prevStep3},null,8,["style","onPrevStep"]),[[r,o(y)]]),p(v(f,{ref:"guide",title:"便捷文生图素材工具",content:"文生图场景中的预设项和提示工程包含了素材尺寸的选择。",direction:"left",style:g({top:o(D),left:o(J)}),onSkipGuide:e[5]||(e[5]=s=>x.value=!1),onNextStep:Se},null,8,["style"]),[[r,o(x)]]),p(v(f,{ref:"guide",title:"便捷文生图素材工具",content:"通过提示工程，将文生图核心要素信息反馈给用户填写，提高模型需求匹配的准确性。",direction:"left",style:g({top:o(F),left:o(K)}),"is-show-prev":!0,onSkipGuide:e[6]||(e[6]=s=>_.value=!1),onNextStep:we},null,8,["style"]),[[r,o(_)]]),p(v(f,{ref:"guide",title:"便捷文生图素材工具",content:"根据素材类型的不同，要求的核心信息也会不同。本样例中针对活动素材，主要要求包主题元素、业务类别、活动卖点、活动文案等信息",direction:"left",style:g({top:o(V),left:o(O)}),"is-show-prev":!0,onSkipGuide:e[7]||(e[7]=s=>P.value=!1),onNextStep:Ge,onPrevStep:t.prevStep6},null,8,["style","onPrevStep"]),[[r,o(P)]]),p(v(f,{ref:"guide",title:"便捷文生图素材工具",content:"当确认好素材关键信息，右侧的素材生成界面中会展示响应的设计稿。",direction:"right",style:g({top:o(q),left:o(Q)}),"is-show-prev":!0,onSkipGuide:e[8]||(e[8]=s=>N.value=!1),onNextStep:$e},null,8,["style"]),[[r,o(N)]]),p(v(f,{ref:"guide",title:"便捷文生图素材工具",content:"在本场景中，通过做尽量多的预设项，提供用户选择推进对话，避免需求的发散，以便大模型更加聚焦。",direction:"right",style:g({top:o(b),left:o(Y)}),"is-show-prev":!0,onSkipGuide:t.skipGuide2,onNextStep:t.nextStep2,onPrevStep:t.prevStep2},null,8,["style","onSkipGuide","onNextStep","onPrevStep"]),[[r,o(L)]]),p(v(f,{ref:"guide",title:"便捷文生图素材工具",content:"您也可以在右侧手动修改要求，重新生成图片。",direction:"left",style:g({top:o(z),left:o(Z)}),"is-show-prev":!0,onSkipGuide:t.skipGuide8,onNextStep:ke},null,8,["style","onSkipGuide"]),[[r,o(W)]]),p(v(f,{ref:"guide",title:"便捷文生图素材工具",content:"生成的图片素材，您可直接保存，也可下载到本地，便于UI修改。",direction:"right",style:g({top:o(E),left:o(ee)}),"is-show-prev":!0,onSkipGuide:e[9]||(e[9]=s=>R.value=!1),onNextStep:Me},null,8,["style"]),[[r,o(R)]]),p(v(f,{ref:"guide",title:"便捷文生图素材工具",content:"点击保存素材，系统会根据素材类型保存到响应的文件目录下。",direction:"top","arrow-style":{right:o(se)},style:g({top:o(T),right:o(te)}),"is-show-prev":!0,onSkipGuide:e[10]||(e[10]=s=>$.value=!1),onNextStep:_e},null,8,["arrow-style","style"]),[[r,o($)]]),p(v(f,{ref:"guide",title:"便捷文生图素材工具",content:"保存提示。",direction:"right",style:g({top:o(U),left:o(le)}),"is-show-prev":!0,onSkipGuide:e[11]||(e[11]=s=>H.value=!1),onNextStep:Pe,onPrevStep:t.prevStep11},null,8,["style","onPrevStep"]),[[r,o(H)]]),p(c("div",et,[c("img",{ref_key:"detailPicRef",ref:w,class:"detailPic",src:ze,alt:"",onClick:e[12]||(e[12]=s=>de(s)),onMousemove:e[13]||(e[13]=s=>ge(s))},null,544)],512),[[r,o(M)]])],64))}},gt=He(tt,[["__scopeId","data-v-ea100d37"]]);export{gt as default};
