(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"10Zl":function(e,t,a){e.exports={template:"header-module--template--b2p1E",container:"header-module--container--18lpt",header:"header-module--header--2Q3RK"}},"1bPA":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("q1tI"),r=a.n(n),i=function(e){return"light"===e?"#1ED760":"#FFFFFF"},l=function(e){var t=e.theme,a=e.size;return r.a.createElement("svg",{width:a+"px",height:a+"px",viewBox:"0 0 168 168",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M83.743 0C37.494 0 0 37.493 0 83.742C0 129.993 37.494 167.483 83.743 167.483C129.997 167.483 167.487 129.993 167.487 83.742C167.487 37.496 129.997 0.00399998 83.742 0.00399998L83.743 0ZM122.147 120.78C120.647 123.24 117.427 124.02 114.967 122.51C95.305 110.5 70.553 107.78 41.403 114.44C38.594 115.08 35.794 113.32 35.154 110.51C34.511 107.7 36.264 104.9 39.08 104.26C70.98 96.969 98.343 100.11 120.417 113.6C122.877 115.11 123.657 118.32 122.147 120.78ZM132.397 97.975C130.507 101.05 126.487 102.02 123.417 100.13C100.907 86.291 66.594 82.284 39.969 90.366C36.516 91.409 32.869 89.463 31.821 86.016C30.781 82.563 32.728 78.923 36.175 77.873C66.588 68.645 104.397 73.115 130.247 89C133.317 90.89 134.287 94.91 132.397 97.976V97.975ZM133.277 74.231C106.287 58.2 61.757 56.726 35.988 64.547C31.85 65.802 27.474 63.466 26.22 59.328C24.966 55.188 27.3 50.815 31.441 49.557C61.022 40.577 110.197 42.312 141.271 60.759C145.001 62.968 146.221 67.775 144.011 71.492C141.811 75.214 136.991 76.441 133.281 74.231H133.277Z",fill:i(t)}))}},"85Sb":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("Wbzz"),l=a("EVTs"),o=a.n(l),s=a("Pfoa"),d=a("WGHs"),c=a("z1Ed"),u=a("1bPA"),m=a("mW7F");t.a=function(e){var t=e.location,a=e.theme,n=r.a.useState(!1),l=n[0],f=n[1],C=r.a.useRef(null),g=function(){f(!l),l?(C.current.classList.remove(o.a.in),C.current.classList.add(o.a.out)):(C.current.classList.remove(o.a.out),C.current.classList.add(o.a.in))};return r.a.createElement("div",{role:"navigation"},r.a.createElement("div",{className:o.a.trigger,onClick:function(){return g()},role:"navigation"},r.a.createElement("div",null,r.a.createElement("div",{className:[o.a.navIcon,"dark"===a?o.a.navIconDark:o.a.navIconLight,l?o.a.open:null].join(" "),onClick:function(){return g()}},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)))),r.a.createElement("div",{ref:C,className:o.a.navContainer},r.a.createElement("nav",{className:o.a.nav},r.a.createElement("div",{className:o.a.container},"/"!==t.pathname&&r.a.createElement(i.Link,{to:"/",className:o.a.link},"Home"),r.a.createElement(i.Link,{to:"/development",className:o.a.link},"Development"),r.a.createElement(i.Link,{to:"/development/writings",className:[o.a.link,o.a.subLink].join(" ")},"Writings"),r.a.createElement(i.Link,{to:"/music",className:o.a.link},"Music"),r.a.createElement(i.Link,{to:"/music/releases",className:[o.a.link,o.a.subLink].join(" ")},"Releases"),r.a.createElement("div",{className:o.a.socialRow},r.a.createElement("a",{href:"https://www.github.com/garyanewsome",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(m.a,{theme:"site",size:40})),r.a.createElement("a",{href:"https://www.github.com/garyanewsome",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(u.a,{theme:"site",size:40})),r.a.createElement("a",{href:"https://twitter.com/garyanewsome",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(c.a,{theme:"site",size:40})),r.a.createElement("a",{href:"https://www.github.com/garyanewsome",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(d.a,{theme:"site",size:40})),r.a.createElement("a",{href:"https://www.linkedin.com/in/garyanewsome",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(s.a,{theme:"site",size:40})))))))}},"9eSz":function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0,t.default=void 0;var r,i=n(a("PJYZ")),l=n(a("VbXa")),o=n(a("8OQS")),s=n(a("pVnL")),d=n(a("q1tI")),c=n(a("17x9")),u=function(e){var t=(0,s.default)({},e),a=t.resolutions,n=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=b([].concat(t.fluid))),t.fixed&&(t.fixed=b([].concat(t.fixed))),t},m=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},f=function(e){var t=e.fluid,a=e.fixed,n=C(t||a||[]);return n&&n.src},C=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(m);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),a=f(t);return g[a]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,E=v&&window.IntersectionObserver,w=new WeakMap;function L(e){return e.map((function(e){var t=e.src,a=e.srcSet,n=e.srcSetWebp,r=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},n&&d.default.createElement("source",{type:"image/webp",media:r,srcSet:n,sizes:i}),a&&d.default.createElement("source",{media:r,srcSet:a,sizes:i}))}))}function b(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function y(e){return e.map((function(e){var t=e.src,a=e.media,n=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:n})}))}function S(e){return e.map((function(e){var t=e.src,a=e.media,n=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:n})}))}function k(e,t){var a=e.srcSet,n=e.srcSetWebp,r=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?n:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var M=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),w.set(e,t)),function(){a.unobserve(e),w.delete(e)}},V=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?k(e,!0):"")+k(e)})).join("")+"<img "+d+l+o+a+n+t+i+r+s+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},x=d.default.forwardRef((function(e,t){var a=e.src,n=e.imageVariants,r=e.generateSources,i=e.spreadProps,l=e.ariaHidden,o=d.default.createElement(I,(0,s.default)({ref:t,src:a},i,{ariaHidden:l}));return n.length>1?d.default.createElement("picture",null,r(n),o):o})),I=d.default.forwardRef((function(e,t){var a=e.sizes,n=e.srcSet,r=e.src,i=e.style,l=e.onLoad,c=e.onError,u=e.loading,m=e.draggable,f=e.ariaHidden,C=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,s.default)({"aria-hidden":f,sizes:a,srcSet:n,src:r},C,{onLoad:l,onError:c,ref:t,loading:u,draggable:m,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));I.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var H=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!p&&E&&!a.isCritical&&!a.seenBefore;var n=a.isCritical||v&&(p||!a.useIOSupport);return a.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=M(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=f(t))&&(g[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,n=e.className,r=e.style,i=void 0===r?{}:r,l=e.imgStyle,o=void 0===l?{}:l,c=e.placeholderStyle,m=void 0===c?{}:c,f=e.placeholderClassName,g=e.fluid,h=e.fixed,p=e.backgroundColor,v=e.durationFadeIn,E=e.Tag,w=e.itemProp,b=e.loading,k=e.draggable,M=g||h;if(!M)return null;var H=!1===this.state.fadeIn||this.state.imgLoaded,F=!0===this.state.fadeIn&&!this.state.imgCached,N=(0,s.default)({opacity:H?1:0,transition:F?"opacity "+v+"ms":"none"},o),Z="boolean"==typeof p?"lightgray":p,z={transitionDelay:v+"ms"},R=(0,s.default)({opacity:this.state.imgLoaded?0:1},F&&z,o,m),O={title:t,alt:this.state.isVisible?"":a,style:R,className:f,itemProp:w},W=this.state.isHydrated?C(M):M[0];if(g)return d.default.createElement(E,{className:(n||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:W.maxWidth?W.maxWidth+"px":null,maxHeight:W.maxHeight?W.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(W.srcSet)},d.default.createElement(E,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/W.aspectRatio+"%"}}),Z&&d.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:Z,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},F&&z)}),W.base64&&d.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:O,imageVariants:M,generateSources:S}),W.tracedSVG&&d.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:O,imageVariants:M,generateSources:y}),this.state.isVisible&&d.default.createElement("picture",null,L(M),d.default.createElement(I,{alt:a,title:t,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:b,draggable:k})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:V((0,s.default)({alt:a,title:t,loading:b},W,{imageVariants:M}))}}));if(h){var T=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},i);return"inherit"===i.display&&delete T.display,d.default.createElement(E,{className:(n||"")+" gatsby-image-wrapper",style:T,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},Z&&d.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:Z,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},F&&z)}),W.base64&&d.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:O,imageVariants:M,generateSources:S}),W.tracedSVG&&d.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:O,imageVariants:M,generateSources:y}),this.state.isVisible&&d.default.createElement("picture",null,L(M),d.default.createElement(I,{alt:a,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:b,draggable:k})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:V((0,s.default)({alt:a,title:t,loading:b},W,{imageVariants:M}))}}))}return null},t}(d.default.Component);H.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var F=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),N=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function Z(e){return function(t,a,n){var r;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+n+"`, but their values are both `undefined`.");c.default.checkPropTypes(((r={})[a]=e,r),t,"prop",n)}}H.propTypes={resolutions:F,sizes:N,fixed:Z(c.default.oneOfType([F,c.default.arrayOf(F)])),fluid:Z(c.default.oneOfType([N,c.default.arrayOf(N)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var z=H;t.default=z},EVTs:function(e,t,a){e.exports={in:"nav-module--in--2SoIz",slideIn:"nav-module--slideIn--1-MXC",out:"nav-module--out--1socY",slideOut:"nav-module--slideOut--10fWM",trigger:"nav-module--trigger--3fdaf",navContainer:"nav-module--navContainer--3wCa9",nav:"nav-module--nav--8s4wo",fade:"nav-module--fade--1C-Z6",container:"nav-module--container--3-n87",link:"nav-module--link--YCE9X",subLink:"nav-module--subLink--FAurA",socialRow:"nav-module--socialRow--1T7pQ",navIcon:"nav-module--navIcon--UjZdH",navIconLight:"nav-module--navIconLight--2LOA8",navIconDark:"nav-module--navIconDark--B8tKy",open:"nav-module--open--26Tpy"}},Pfoa:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("q1tI"),r=a.n(n),i=function(e){return"light"===e?"#006087":"#FFFFFF"},l=function(e){return"light"===e?"#fdfdfd":"dark"===e?"#006087":"#0f001a"},o=function(e){var t=e.theme,a=e.size;return r.a.createElement("svg",{width:a+"px",height:a+"px",viewBox:"0 0 130 130",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M119.984 0H9.56332C4.28675 0 0 4.18238 0 9.33928V120.225C0 125.386 4.28675 129.575 9.56332 129.575H119.984C125.27 129.575 129.576 125.386 129.576 120.225V9.33928C129.576 4.18238 125.27 0 119.984 0Z",fill:i(t)}),r.a.createElement("path",{d:"M28.8241 17.839C34.9699 17.839 39.9621 22.8321 39.9621 28.9788C39.9621 35.13 34.9699 40.125 28.8241 40.125C22.6657 40.125 17.6797 35.13 17.6797 28.9788C17.6797 22.8321 22.6657 17.839 28.8241 17.839ZM19.2112 48.5779H38.4297V110.415H19.2112V48.5779Z",fill:l(t)}),r.a.createElement("path",{d:"M50.4838 48.5779H68.9203V57.0264H69.1758C71.7403 52.1655 78.0103 47.0392 87.3595 47.0392C106.821 47.0392 110.414 59.8464 110.414 76.4959V110.415H91.2089V80.3435C91.2089 73.1692 91.0766 63.946 81.2218 63.946C71.2202 63.946 69.6887 71.7583 69.6887 79.8243V110.415H50.4838V48.5779Z",fill:l(t)}))}},WGHs:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("q1tI"),r=a.n(n),i=function(e){return"light"===e?"#161614":"#FFFFFF"},l=function(e){var t=e.theme,a=e.size;return r.a.createElement("svg",{width:a+"px",height:.976*a+"px",viewBox:"0 0 256 250",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",preserveAspectRatio:"xMidYMid"},r.a.createElement("g",null,r.a.createElement("path",{d:"M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z",fill:i(t)})))}},ad7A:function(e,t,a){e.exports={modal:"modal-module--modal--293nd",title:"modal-module--title--2CN3c",container:"modal-module--container--1b3QW",content:"modal-module--content--4-ybI",innerTitle:"modal-module--innerTitle--1GuJ1",image:"modal-module--image--2z3ms",img:"modal-module--img--238Hg",footer:"modal-module--footer--m0X6x",footerButton:"modal-module--footerButton--31jBx"}},kprA:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return v}));var n=a("q1tI"),r=a.n(n),i=a("Wbzz"),l=a("9eSz"),o=a.n(l),s=a("rY4l"),d=a("85Sb"),c=a("7oih"),u=a("EYWl"),m=a("ad7A"),f=a.n(m),C=function(e){var t,a=e.node,n=e.image,l=e.handleClose,s=r.a.useState(!1),d=s[0],c=s[1],u=r.a.useRef(null);return r.a.useEffect((function(){if(u.current){var e=function(){var e=u.current.getBoundingClientRect();e.height>e.width?c(!0):c(!1)};return e(),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}}),[u,c]),console.log(a),r.a.createElement("div",{ref:u,className:f.a.modal,style:d?{height:"80%"}:{}},r.a.createElement("h1",{className:f.a.title,style:d?{fontSize:"1.5rem"}:{}},a.frontmatter.title),r.a.createElement("div",{className:f.a.container,style:{flexDirection:d?"column":"row"}},r.a.createElement("div",{className:f.a.image,style:d?{width:"100%",height:"50%"}:{}},r.a.createElement(o.a,{className:f.a.img,fluid:n.childImageSharp.fluid,imgStyle:{objectFit:"contain"},alt:"Album Art"})),r.a.createElement("div",{className:f.a.content,style:d?{width:"100%",height:"50%"}:{}},r.a.createElement("p",{className:f.a.innerTitle},a.frontmatter.title),r.a.createElement("p",{className:f.a.date},a.frontmatter.releaseDate," - ",a.frontmatter.albumType),r.a.createElement("ol",null,null===(t=a.frontmatter.tracks)||void 0===t?void 0:t.map((function(e,t){return r.a.createElement("li",{key:t},e)}))),r.a.createElement("div",{className:f.a.linkContainer},r.a.createElement("div",null,"Available on"," ",r.a.createElement(i.Link,{className:f.a.musicLink,to:"https://open.spotify.com/artist/5tWnRXHI8g2I0adOEzNh7X?si=ikiZqJVGQDW_n1UVQvEUtA",target:"_blank"},"Spotify")),r.a.createElement("div",{className:f.a.contact},"Or find it on my"," ",r.a.createElement(i.Link,{className:f.a.musicLink,to:"https://soundcloud.com/garyanewsome",target:"_blank"},"Soundcloud"))))),r.a.createElement("div",{className:f.a.footer},r.a.createElement("button",{className:f.a.footerButton,onClick:function(){return l()}},"CLOSE")))},g=a("sxv6"),h=a.n(g),p={isVisible:!1,node:null,image:null},v=(t.default=function(e){var t=e.data,a=e.location,n=r.a.useState(p),i=n[0],l=n[1],m=t.site.siteMetadata.title,f=t.allMarkdownRemark.edges,g=t.allFile.edges;return r.a.createElement(c.a,{location:a,title:m},r.a.createElement(u.a,{title:"Releases"}),r.a.createElement(d.a,{location:a,theme:"dark"}),r.a.createElement(s.a,{location:a,showName:!0,theme:"dark",color:"#0f001a"}),r.a.createElement("div",{className:h.a.container},f.map((function(e){var t,a=e.node,n=a.frontmatter.title||a.fields.slug,i=null===(t=g.find((function(e){return e.node.name===a.frontmatter.coverImg})))||void 0===t?void 0:t.node;return r.a.createElement("div",{className:h.a.block,key:a.fields.slug,onClick:function(){return console.log("click")||l({isVisible:!0,node:a,image:i})}},r.a.createElement(o.a,{className:h.a.img,fluid:i.childImageSharp.fluid,alt:"Album Art"}),r.a.createElement("div",{className:h.a.content},r.a.createElement("h3",{className:h.a.title},n),r.a.createElement("p",{className:h.a.date},a.frontmatter.releaseDate," - ",a.frontmatter.albumType)))}))),i.isVisible&&r.a.createElement("div",{className:h.a.modalContainer},r.a.createElement(C,{node:i.node,image:i.image,handleClose:function(){l(p)}})))},"740013883")},mW7F:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("q1tI"),r=a.n(n),i=function(e,t){return"light"===e&&t?"#F79810":"light"!==e||t?"#FFFFFF":"#F8310E"},l=function(e){var t=e.theme,a=e.size;return r.a.createElement("svg",{width:1.7475*a+"px",height:a+"px",viewBox:"0 0 360 206",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M4 93.5C3.2 93.5 2.7 94.1 2.6 94.9L0 114.9L2.6 134.6C2.7 135.4 3.3 136 4 136C4.7 136 5.3 135.4 5.4 134.6L8.5 114.9L5.4 94.9C5.3 94.1 4.7 93.5 4 93.5ZM18.8 82.6C18.7 81.7 18.1 81.1 17.3 81.1C16.5 81.1 15.9 81.7 15.8 82.6L12.3 114.9L15.8 146.5C15.9 147.3 16.5 148 17.3 148C18.1 148 18.7 147.4 18.8 146.5L22.8 114.9L18.8 82.6ZM74.5 52.7C73 52.7 71.8 53.9 71.8 55.4L69 114.9L71.8 153.3C71.9 154.8 73.1 156 74.5 156C75.9 156 77.1 154.8 77.2 153.3L80.4 114.9L77.2 55.4C77.2 53.9 76 52.7 74.5 52.7ZM45.7 73.4C44.6 73.4 43.7 74.3 43.6 75.5L40.4 114.9L43.6 153C43.7 154.2 44.6 155.1 45.7 155.1C46.8 155.1 47.7 154.2 47.8 153L51.4 114.9L47.8 75.5C47.7 74.3 46.8 73.4 45.7 73.4ZM103.9 156.1C105.7 156.1 107.2 154.6 107.2 152.8L110 115L107.2 35.8C107.1 33.9 105.7 32.5 103.9 32.5C102.1 32.5 100.6 34 100.6 35.8L98.1 115L100.6 152.8C100.6 154.6 102.1 156.1 103.9 156.1ZM163.9 156.2C166.4 156.2 168.4 154.2 168.5 151.7L170.4 115L168.5 23.5C168.5 21 166.4 19 163.9 19C161.4 19 159.4 21 159.3 23.6L157.6 115C157.6 115.1 159.3 151.8 159.3 151.8C159.4 154.2 161.4 156.2 163.9 156.2ZM133.7 156.1C135.9 156.1 137.6 154.4 137.7 152.2L140 115L137.7 35.2C137.6 33 135.9 31.3 133.7 31.3C131.5 31.3 129.8 33 129.7 35.2L127.6 115L129.7 152.2C129.8 154.4 131.5 156.1 133.7 156.1ZM60.1 155.7C61.4 155.7 62.4 154.7 62.5 153.3L65.9 114.9L62.5 78.3C62.4 76.9 61.4 75.9 60.1 75.9C58.8 75.9 57.8 76.9 57.7 78.3L54.7 114.9L57.7 153.3C57.7 154.7 58.8 155.7 60.1 155.7ZM31.4 153.6C32.3 153.6 33.1 152.9 33.2 151.8L37 114.8L33.2 76.4C33.1 75.4 32.3 74.6 31.4 74.6C30.5 74.6 29.7 75.3 29.6 76.4L26.2 114.8L29.6 151.8C29.7 152.9 30.5 153.6 31.4 153.6ZM148.7 33.9C146.4 33.9 144.5 35.8 144.4 38.1L142.5 115L144.4 152C144.4 154.4 146.3 156.2 148.7 156.2C151 156.2 152.9 154.3 153 152L155.1 115L153 38.1C152.9 35.7 151.1 33.9 148.7 33.9ZM89.2 156.1C90.8 156.1 92.2 154.8 92.2 153.1L95.2 114.9L92.2 41.8C92.1 40.1 90.8 38.8 89.2 38.8C87.6 38.8 86.2 40.1 86.2 41.8L83.6 114.9L86.2 153.1C86.2 154.8 87.5 156.1 89.2 156.1ZM122.4 152.5L125 114.9L122.4 33C122.3 31 120.7 29.4 118.8 29.4C116.8 29.4 115.2 31 115.2 33L112.9 114.9L115.2 152.5C115.3 154.5 116.9 156.1 118.8 156.1C120.7 156.1 122.3 154.5 122.4 152.5ZM315.6 67.8C309.5 67.8 303.7 69 298.5 71.2C295 31.3 261.5 0 220.7 0C210.7 0 201 2 192.4 5.3C189.1 6.6 188.2 7.9 188.1 10.5V151C188.1 153.7 190.2 156 192.9 156.2C193 156.2 314.9 156.3 315.6 156.3C340.1 156.3 359.9 136.5 359.9 112C359.9 87.6 340.1 67.8 315.6 67.8ZM179 10.4C176.3 10.4 174.2 12.6 174.1 15.3L172.1 115.1L174.1 151.3C174.1 153.9 176.3 156.1 179 156.1C181.7 156.1 183.8 153.9 183.9 151.2L186.1 115L183.9 15.2C183.9 12.6 181.7 10.4 179 10.4ZM35.7 184.5C30.5 183.3 29 182.6 29 180.5C29 179 30.2 177.5 33.7 177.5C36.7 177.5 39.1 178.7 41.2 180.9L46 176.3C42.9 173 39.1 171.1 34 171.1C27.5 171.1 22.2 174.8 22.2 180.8C22.2 187.3 26.5 189.2 32.5 190.7C38.7 192.1 39.9 193.1 39.9 195.2C39.9 197.7 38.1 198.8 34.1 198.8C30.9 198.8 28 197.7 25.6 195L20.8 199.3C23.3 203 28.1 205.3 33.6 205.3C42.6 205.3 46.6 201.1 46.6 194.8C46.7 187.5 40.9 185.7 35.7 184.5ZM66.1 171.1C57.1 171.1 51.8 178.1 51.8 188.1C51.8 198.2 57.1 205.1 66.1 205.1C75.1 205.1 80.5 198.1 80.5 188.1C80.4 178.1 75.1 171.1 66.1 171.1ZM66.1 198.7C60.8 198.7 58.5 194.1 58.5 188.2C58.5 182.3 60.7 177.7 66.1 177.7C71.4 177.7 73.7 182.3 73.7 188.2C73.6 194.1 71.4 198.7 66.1 198.7ZM107.1 190.2C107.1 195.5 104.5 198.7 100.3 198.7C96.1 198.7 93.6 195.3 93.6 190.1V171.6H86.9V190.2C86.9 199.8 92.3 205.2 100.3 205.2C108.7 205.2 113.7 199.7 113.7 190.1V171.6H107.1V190.2ZM142.2 185.6C142.2 187.4 142.3 191.6 142.3 192.8C141.9 191.9 140.8 190.3 140 189.1L128.3 171.6H122V204.6H128.5V190.1C128.5 188.3 128.4 184.1 128.4 182.9C128.8 183.7 129.9 185.4 130.7 186.6L142.8 204.6H148.7V171.6H142.2V185.6ZM167.6 171.6H157.3V204.6H167.2C175.7 204.6 184.1 199.7 184.1 188.1C184 176.1 177 171.6 167.6 171.6ZM167.1 198.3H163.8V178.1H167.3C174.3 178.1 177.2 181.4 177.2 188.2C177.2 194.2 174 198.3 167.1 198.3ZM204.4 177.7C207.4 177.7 209.3 179 210.4 181.3L216.5 178.5C214.4 174.2 210.6 171.2 204.4 171.2C195.8 171.2 189.7 178.2 189.7 188.2C189.7 198.6 195.5 205.2 204.1 205.2C210.1 205.2 214.1 202.4 216.3 197.7L210.7 194.4C209 197.3 207.2 198.6 204.2 198.6C199.2 198.6 196.4 194.1 196.4 188.1C196.6 182 199.5 177.7 204.4 177.7ZM228.9 171.6H222.3V204.6H242.2V198.1H228.9V171.6ZM259.6 171.1C250.6 171.1 245.2 178.1 245.2 188.1C245.2 198.2 250.5 205.1 259.6 205.1C268.6 205.1 273.9 198.1 273.9 188.1C273.9 178.1 268.6 171.1 259.6 171.1ZM259.6 198.7C254.3 198.7 252 194.1 252 188.2C252 182.3 254.2 177.7 259.6 177.7C264.9 177.7 267.1 182.3 267.1 188.2C267.1 194.1 264.9 198.7 259.6 198.7ZM300.6 190.2C300.6 195.5 298 198.7 293.8 198.7C289.6 198.7 287 195.3 287 190.1V171.6H280.4V190.2C280.4 199.8 285.8 205.2 293.8 205.2C302.2 205.2 307.2 199.7 307.2 190.1V171.6H300.6V190.2ZM325.8 171.6H315.5V204.6H325.4C333.9 204.6 342.3 199.7 342.3 188.1C342.2 176.1 335.3 171.6 325.8 171.6ZM325.3 198.3H322V178.1H325.5C332.5 178.1 335.4 181.4 335.4 188.2C335.4 194.2 332.3 198.3 325.3 198.3Z",fill:"url(#paint0_linear)"}),r.a.createElement("defs",null,r.a.createElement("linearGradient",{id:"paint0_linear",x1:"179.9",y1:"-0.0088",x2:"179.9",y2:"205.209",gradientUnits:"userSpaceOnUse"},r.a.createElement("stop",{stopColor:i(t,!0)}),r.a.createElement("stop",{offset:"1",stopColor:i(t,!1)}))))}},rY4l:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("Wbzz"),l=a("10Zl"),o=a.n(l);t.a=function(e){e.location;var t=e.showName,a=void 0===t||t,n=e.theme,l=void 0===n?"light":n,s=e.color,d=void 0===s?"transparent":s;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:o.a.container,style:{backgroundColor:"light"===l?"#fdfdfd":d}},r.a.createElement("div",{className:o.a.header},r.a.createElement("div",null,a&&r.a.createElement(i.Link,{to:"/",style:{color:"light"===l?"#4d1584":"#FFFFFF"}},r.a.createElement("h1",null,"Gary A. Newsome"))))))}},sxv6:function(e,t,a){e.exports={container:"releases-module--container--14Q5Y",block:"releases-module--block--2C6Xi",content:"releases-module--content--3dQWV",img:"releases-module--img--2t_8X",date:"releases-module--date--820uW",preview:"releases-module--preview--J4J1M",link:"releases-module--link--2SIHP",modalContainer:"releases-module--modalContainer--1gn1i"}},z1Ed:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("q1tI"),r=a.n(n),i=function(e){return"light"===e?"#3DDBFF":"#FFFFFF"},l=function(e){var t=e.theme,a=e.size;return r.a.createElement("svg",{width:a+"px",height:.816*a+"px",viewBox:"0 0 250 204",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M78.5 203.2C172.8 203.2 224.4 125 224.4 57.3C224.4 55.1 224.4 52.9 224.3 50.7C234.3 43.5 243 34.4 249.9 24.1C240.7 28.2 230.8 30.9 220.4 32.2C231 25.9 239.1 15.8 243 3.8C233.1 9.7 222.1 13.9 210.4 16.2C201 6.2 187.7 0 173 0C144.7 0 121.7 23 121.7 51.3C121.7 55.3 122.2 59.2 123 63C80.4 60.9 42.6 40.4 17.3 9.4C12.9 17 10.4 25.8 10.4 35.2C10.4 53 19.5 68.7 33.2 77.9C24.8 77.6 16.9 75.3 10 71.5C10 71.7 10 71.9 10 72.2C10 97 27.7 117.8 51.1 122.5C46.8 123.7 42.3 124.3 37.6 124.3C34.3 124.3 31.1 124 28 123.4C34.5 143.8 53.5 158.6 75.9 159C58.3 172.8 36.2 181 12.2 181C8.1 181 4 180.8 0 180.3C22.6 194.7 49.6 203.2 78.5 203.2Z",fill:i(t)}))}}}]);
//# sourceMappingURL=component---src-pages-music-releases-js-001abc7ad2e593124d92.js.map