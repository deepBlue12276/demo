import{_,u as r,r as p,o as h,c as u,a as d,b as l,H as m}from"./index-bc58108a.js";const f="/demo/assets/2024092614461-fb0a5ee0.jpg";const g={class:"home"},v={class:"main-con"},k={__name:"home",setup(x){const s=r(),a=p(null),i=c=>{const t=a.value.width,n=a.value.height,e=c.clientX/t,o=c.clientY/n;console.log(e,o),e>.254&&e<.344&&o>.257&&o<.45&&(console.log("门店运营"),s.push({path:"/store1"})),e>.347&&e<.434&&o>.472&&o<.678&&(console.log("数据运营"),s.push({path:"/data1"})),e>.561&&e<.655&&o>.468&&o<.647&&(console.log("活动运营"),s.push({path:"/activity1"})),e>.653&&e<.737&&o>.255&&o<.44&&(console.log("客户运营"),s.push({path:"/client1"}))};return(c,t)=>(h(),u("div",g,[d(m),l("div",v,[l("img",{ref_key:"imgRef",ref:a,src:f,alt:"",onClick:t[0]||(t[0]=n=>i(n))},null,512)])]))}},b=_(k,[["__scopeId","data-v-a229b499"]]);export{b as default};
