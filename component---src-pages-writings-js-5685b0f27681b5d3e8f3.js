(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return m});var a=n(7),r=n.n(a),i=n(0),o=n.n(i),u=n(145),c=n(155),s=n.n(c),l=n(152),d=n(150),p=n(147),f=(n(156),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data;console.log(e);var t=e.site.siteMetadata.title,n=e.site.siteMetadata.description,a=e.allMarkdownRemark.edges;return o.a.createElement(d.a,{location:this.props.location,title:t},o.a.createElement(s.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:n}],title:t+" | Writings"}),o.a.createElement(l.a,null),a.map(function(e){var t=e.node,n=t.frontmatter.title||t.fields.slug;return o.a.createElement("div",{key:t.fields.slug},o.a.createElement("h3",{style:{marginBottom:Object(p.a)(.25)}},o.a.createElement(u.Link,{style:{boxShadow:"none"},to:t.fields.slug},n)),o.a.createElement("small",null,t.frontmatter.date),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))}))},t}(o.a.Component));t.default=f;var m="2584137191"},145:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(144),c=n.n(u);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var s=n(146),l=n.n(s);n.d(t,"PageRenderer",function(){return l.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},146:function(e,t,n){var a;e.exports=(a=n(149))&&a.default||a},147:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return s});var a=n(153),r=n.n(a),i=n(154),o=n.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var u=new r.a(o.a);var c=u.rhythm,s=u.scale},148:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(0),o=n.n(i),u=n(145),c=(n(147),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",{className:"header"},o.a.createElement(u.Link,{to:"/"},o.a.createElement("h1",null,"Gary A. Newsome")),o.a.createElement(u.Link,{to:"./writings"},"Writings"))},t}(o.a.Component));t.a=c},149:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(51),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},150:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(0),o=n.n(i),u=(n(145),n(151),n(148)),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=(e.location,e.title,e.children);return o.a.createElement("div",null,o.a.createElement(u.a,null),t)},t}(o.a.Component);t.a=c},151:function(e,t,n){},152:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(0),o=n.n(i),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",{className:"social-media-links"},"SOCIAL MEDIA LINKS")},t}(o.a.Component);t.a=u},156:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-writings-js-5685b0f27681b5d3e8f3.js.map