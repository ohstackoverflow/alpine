import{d as x,I as v,a0 as C,b as n,c,F as p,Z as w,f as o,g as l,w as m,e as i,t as r,M as f,n as I,a1 as N,E as B,a2 as D,k as L}from"./entry.cf7d0b5a.js";import{f as E}from"./date.824a539b.js";const V=["data-content-id"],z={key:0,class:"image"},A={key:0},F={class:"content"},S={class:"description"},$=x({__name:"ArticlesListItem",props:{article:{type:Object,required:!0,validator:t=>!!(t!=null&&t._path&&t.title)},featured:{type:Boolean,default:!1}},setup(t){const _=t,h=v(()=>{var a,s;return(a=C())!=null&&a.isEnabled()?(s=_.article)==null?void 0:s._id:void 0});return(a,s)=>{var u;const y=N,d=B;return t.article._path&&t.article.title?(n(),c("article",{key:0,class:I({featured:t.featured}),"data-content-id":f(h)},[t.article.cover?(n(),c("div",z,[(u=t.article)!=null&&u.badges?(n(),c("div",A,[(n(!0),c(p,null,w(t.article.badges,(e,k)=>(n(),c("span",{key:k,style:D({backgroundColor:(e==null?void 0:e.bg)||"rgba(0, 0, 0, 0.3)",color:(e==null?void 0:e.color)||"white"})},r(typeof e=="string"?e:e.content),5))),128))])):o("",!0),l(d,{to:t.article._path},{default:m(()=>[l(y,{src:t.article.cover,alt:t.article.title,width:"16",height:"9"},null,8,["src","alt"])]),_:1},8,["to"])])):o("",!0),i("div",F,[l(d,{to:t.article._path,class:"headline"},{default:m(()=>[i("h1",null,r(t.article.title),1)]),_:1},8,["to"]),i("p",S,r(t.article.description),1),i("time",null,r(("formatDate"in a?a.formatDate:f(E))(t.article.date)),1)])],10,V)):o("",!0)}}});const q=L($,[["__scopeId","data-v-e41815b2"]]);export{q as default};
