(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{140:function(e,n,t){"use strict";t.r(n);var r=t(7),a=t.n(r),i=t(0),o=t.n(i),u=t(150),c=function(e){function n(){return e.apply(this,arguments)||this}return a()(n,e),n.prototype.render=function(){return o.a.createElement(u.a,{location:this.props.location},o.a.createElement("h1",null,"Not Found"),o.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},n}(o.a.Component);n.default=c},145:function(e,n,t){"use strict";t.r(n),t.d(n,"graphql",function(){return h}),t.d(n,"StaticQueryContext",function(){return p}),t.d(n,"StaticQuery",function(){return f});var r=t(0),a=t.n(r),i=t(4),o=t.n(i),u=t(144),c=t.n(u);t.d(n,"Link",function(){return c.a}),t.d(n,"withPrefix",function(){return u.withPrefix}),t.d(n,"navigate",function(){return u.navigate}),t.d(n,"push",function(){return u.push}),t.d(n,"replace",function(){return u.replace}),t.d(n,"navigateTo",function(){return u.navigateTo});var s=t(147),l=t.n(s);t.d(n,"PageRenderer",function(){return l.a});var d=t(32);t.d(n,"parsePath",function(){return d.a});var p=a.a.createContext({}),f=function(e){return a.a.createElement(p.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},146:function(e,n,t){"use strict";t.d(n,"a",function(){return c}),t.d(n,"b",function(){return s});var r=t(153),a=t.n(r),i=t(154),o=t.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var u=new a.a(o.a);var c=u.rhythm,s=u.scale},147:function(e,n,t){var r;e.exports=(r=t(149))&&r.default||r},148:function(e,n,t){"use strict";var r=t(7),a=t.n(r),i=t(0),o=t.n(i),u=t(145),c=(t(146),function(e){function n(){return e.apply(this,arguments)||this}return a()(n,e),n.prototype.render=function(){return o.a.createElement("div",{className:"header"},o.a.createElement(u.Link,{to:"/"},o.a.createElement("h1",null,"Gary A. Newsome")),o.a.createElement(u.Link,{to:"./writings"},"Writings"))},n}(o.a.Component));n.a=c},149:function(e,n,t){"use strict";t.r(n);t(33);var r=t(0),a=t.n(r),i=t(4),o=t.n(i),u=t(51),c=t(2),s=function(e){var n=e.location,t=c.default.getResourcesForPathnameSync(n.pathname);return a.a.createElement(u.a,Object.assign({location:n,pageResources:t},t.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},n.default=s},150:function(e,n,t){"use strict";var r=t(7),a=t.n(r),i=t(0),o=t.n(i),u=(t(145),t(146),t(151),t(148)),c=function(e){function n(){return e.apply(this,arguments)||this}return a()(n,e),n.prototype.render=function(){var e=this.props,n=(e.location,e.title,e.children);return o.a.createElement("div",null,o.a.createElement(u.a,null),n)},n}(o.a.Component);n.a=c},151:function(e,n,t){}}]);
//# sourceMappingURL=component---src-pages-404-js-98aca4041e6d8fbf2394.js.map