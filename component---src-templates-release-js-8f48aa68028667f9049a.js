(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{EUU3:function(e,t,a){e.exports={container:"release-module--container--3LJ58",title:"release-module--title--1Vdur",date:"release-module--date--2Q-Rm",content:"release-module--content--3BYi9",img:"release-module--img--2piQm",linkContainer:"release-module--linkContainer--27Ap9",musicLink:"release-module--musicLink--ruSGY"}},iM1f:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return E}));var n=a("q1tI"),i=a.n(n),l=a("Wbzz"),r=a("9eSz"),o=a.n(r),c=a("EUU3"),m=a.n(c),s=a("85Sb"),u=a("rY4l"),d=a("7oih"),f=a("EYWl");t.default=function(e){var t,a=e.data,n=e.location,r=i.a.useState(!1),c=r[0],E=r[1],v=i.a.useRef(null);i.a.useEffect((function(){if(v.current){var e=function(){var e=v.current.getBoundingClientRect();console.log(window.innerWidth,window.innerHeight),console.log({rect:e}),e.height>e.width?E(!0):E(!1)};return e(),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}}),[v,E]);var k=a.markdownRemark,g=a.site.siteMetadata.title,h=null===(t=a.allFile.edges.find((function(e){return e.node.name===k.frontmatter.coverImg})))||void 0===t?void 0:t.node;return i.a.createElement(d.a,{location:n,title:g},i.a.createElement(f.a,{title:k.frontmatter.title}),i.a.createElement(s.a,{location:n,theme:"dark"}),i.a.createElement(u.a,{location:n,showName:!0,theme:"dark",color:"#0f001a"}),i.a.createElement("div",{ref:v,className:m.a.container},i.a.createElement("h1",{className:m.a.title},k.frontmatter.title),i.a.createElement("p",{className:m.a.date},k.frontmatter.date," - ",k.frontmatter.albumType),i.a.createElement("div",{className:m.a.content,style:c?{flexDirection:"column"}:{}},i.a.createElement(o.a,{className:m.a.img,fluid:h.childImageSharp.fluid,alt:"Album Art"}),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:k.html}})),i.a.createElement("div",{className:m.a.linkContainer},i.a.createElement("div",null,"Available on"," ",i.a.createElement(l.Link,{className:m.a.musicLink,to:"https://open.spotify.com/artist/5tWnRXHI8g2I0adOEzNh7X?si=ikiZqJVGQDW_n1UVQvEUtA",target:"_blank"},"Spotify")),i.a.createElement("div",null,"Or find it on my"," ",i.a.createElement(l.Link,{className:m.a.musicLink,to:"https://soundcloud.com/garyanewsome",target:"_blank"},"Soundcloud")),i.a.createElement("div",null,i.a.createElement(l.Link,{className:m.a.musicLink,to:"/music/releases"},"Return to Releases Page")))))};var E="3504307849"}}]);
//# sourceMappingURL=component---src-templates-release-js-8f48aa68028667f9049a.js.map