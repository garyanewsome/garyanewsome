(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{kprA:function(e,a,t){"use strict";t.r(a),t.d(a,"pageQuery",(function(){return k}));var l=t("q1tI"),n=t.n(l),o=t("Wbzz"),r=t("9eSz"),i=t.n(r),s=t("rY4l"),m=t("85Sb"),c=t("7oih"),d=t("EYWl"),u=t("sxv6"),f=t.n(u),g={isVisible:!1,node:null,image:null};a.default=function(e){var a=e.data,t=e.location,l=n.a.useState(g),r=l[0],u=l[1],k=a.site.siteMetadata.title,p=a.allMarkdownRemark.edges,v=a.allFile.edges;return n.a.createElement(c.a,{location:t,title:k},n.a.createElement(d.a,{title:"Releases"}),n.a.createElement(m.a,{location:t,theme:"dark"}),n.a.createElement(s.a,{location:t,showName:!0,theme:"dark",color:"#0f001a"}),n.a.createElement("div",{className:f.a.container},p.map((function(e){var a,t=e.node,l=t.frontmatter.title||t.fields.slug,r=null===(a=v.find((function(e){return e.node.name===t.frontmatter.coverImg})))||void 0===a?void 0:a.node;return n.a.createElement(o.Link,{className:f.a.block,to:"/music/releases"+t.fields.slug,key:t.fields.slug},n.a.createElement(i.a,{className:f.a.img,fluid:r.childImageSharp.fluid,alt:"Album Art"}),n.a.createElement("div",{className:f.a.content},n.a.createElement("h3",{className:f.a.title},l),n.a.createElement("p",{className:f.a.date},t.frontmatter.releaseDate," - ",t.frontmatter.albumType)))}))),r.isVisible&&n.a.createElement("div",{className:f.a.modalContainer},n.a.createElement(Modal,{node:r.node,image:r.image,handleClose:function(){u(g)}})))};var k="740013883"},sxv6:function(e,a,t){e.exports={container:"releases-module--container--14Q5Y",block:"releases-module--block--2C6Xi",content:"releases-module--content--3dQWV",img:"releases-module--img--2t_8X",date:"releases-module--date--820uW",preview:"releases-module--preview--J4J1M",link:"releases-module--link--2SIHP",modalContainer:"releases-module--modalContainer--1gn1i"}}}]);
//# sourceMappingURL=component---src-pages-music-releases-js-6d4e90597835cc49693e.js.map