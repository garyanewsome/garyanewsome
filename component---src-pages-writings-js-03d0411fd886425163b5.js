(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{131:function(M,e,N){"use strict";N.r(e),N.d(e,"pageQuery",function(){return c});var t=N(6),D=N.n(t),a=N(0),j=N.n(a),n=N(135),g=N(145),I=N.n(g),i=(N(160),N(137)),u=N(140),y=function(M){function e(){return M.apply(this,arguments)||this}return D()(e,M),e.prototype.render=function(){var M=this.props.data,e=M.site.siteMetadata.title,N=M.site.siteMetadata.description,t=M.allMarkdownRemark.edges;return j.a.createElement(i.a,{location:this.props.location,title:e},j.a.createElement(I.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:N}],title:e+" | Writings"}),j.a.createElement(u.a,{location:this.props.location}),j.a.createElement("div",{className:"writings-container"},t.map(function(M){var e=M.node,N=e.frontmatter.title||e.fields.slug;return j.a.createElement(n.Link,{className:"writings-block",to:e.fields.slug,key:e.fields.slug},j.a.createElement("div",{className:"writings"},j.a.createElement("h3",{className:"writings-title"},N),j.a.createElement("p",{className:"writings-date"},e.frontmatter.date),j.a.createElement("p",{className:"writings-preview",dangerouslySetInnerHTML:{__html:e.excerpt}})))})))},e}(j.a.Component);e.default=y;var c="2584137191"},135:function(M,e,N){"use strict";N.r(e),N.d(e,"graphql",function(){return r}),N.d(e,"StaticQueryContext",function(){return y}),N.d(e,"StaticQuery",function(){return c});var t=N(0),D=N.n(t),a=N(4),j=N.n(a),n=N(134),g=N.n(n);N.d(e,"Link",function(){return g.a}),N.d(e,"withPrefix",function(){return n.withPrefix}),N.d(e,"navigate",function(){return n.navigate}),N.d(e,"push",function(){return n.push}),N.d(e,"replace",function(){return n.replace}),N.d(e,"navigateTo",function(){return n.navigateTo});var I=N(136),i=N.n(I);N.d(e,"PageRenderer",function(){return i.a});var u=N(28);N.d(e,"parsePath",function(){return u.a});var y=D.a.createContext({}),c=function(M){return D.a.createElement(y.Consumer,null,function(e){return M.data||e[M.query]&&e[M.query].data?(M.render||M.children)(M.data?M.data.data:e[M.query].data):D.a.createElement("div",null,"Loading (StaticQuery)")})};function r(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}c.propTypes={data:j.a.object,query:j.a.string.isRequired,render:j.a.func,children:j.a.func}},136:function(M,e,N){var t;M.exports=(t=N(139))&&t.default||t},137:function(M,e,N){"use strict";var t=N(6),D=N.n(t),a=N(0),j=N.n(a),n=(N(138),function(M){function e(){return M.apply(this,arguments)||this}return D()(e,M),e.prototype.render=function(){var M=this.props.children;return j.a.createElement("div",{className:"layout"},M)},e}(j.a.Component));e.a=n},138:function(M,e,N){},139:function(M,e,N){"use strict";N.r(e);N(29);var t=N(0),D=N.n(t),a=N(4),j=N.n(a),n=N(46),g=N(2),I=function(M){var e=M.location,N=g.default.getResourcesForPathnameSync(e.pathname);return D.a.createElement(n.a,Object.assign({location:e,pageResources:N},N.json))};I.propTypes={location:j.a.shape({pathname:j.a.string.isRequired}).isRequired},e.default=I},140:function(M,e,N){"use strict";var t=N(6),D=N.n(t),a=N(0),j=N.n(a),n=N(135),g=N(141),I=N.n(g),i=N(142),u=N.n(i),y=N(143),c=N.n(y),r=function(M){function e(){return M.apply(this,arguments)||this}return D()(e,M),e.prototype.render=function(){return j.a.createElement("nav",{className:"mobile-nav"},"/"!==this.props.location.pathname&&j.a.createElement(n.Link,{to:"./",className:"mobile-nav-link"},"Home"),j.a.createElement(n.Link,{to:"./writings",className:"mobile-nav-link"},"Writings"),j.a.createElement("div",{className:"mobile-nav-social-row"},j.a.createElement("a",{href:"https://www.linkedin.com/in/garyanewsome",target:"_blank"},j.a.createElement("img",{className:"sm-icon",src:I.a,alt:"https://www.linkedin.com/in/garyanewsome"})),j.a.createElement("a",{href:"https://www.github.com/garyanewsome",target:"_blank"},j.a.createElement("img",{className:"sm-icon",src:u.a,alt:"GitHub.com/garyanewsome"})),j.a.createElement("a",{href:"https://twitter.com/garyanewsome",target:"_blank"},j.a.createElement("img",{className:"sm-icon",src:c.a,alt:"https://twitter.com/garyanewsome"}))))},e}(j.a.Component),A=(N(144),function(M){function e(){var e;return(e=M.call(this)||this).toggleShowMobileNav=function(){e.setState({showMobileNav:!e.state.showMobileNav})},e.state={showMobileNav:!1},e}return D()(e,M),e.prototype.render=function(){var M=this;return j.a.createElement(j.a.Fragment,null,this.state.showMobileNav&&j.a.createElement(r,{location:this.props.location}),j.a.createElement("div",{className:"header-container"},j.a.createElement("div",{className:"header"},j.a.createElement(n.Link,{to:"/",className:"header-brand"},j.a.createElement("h1",null,"Gary A. Newsome")),j.a.createElement("div",{className:"header-links"},j.a.createElement("div",{id:"header-nav-icon",className:this.state.showMobileNav?"open":"",onClick:function(){return M.toggleShowMobileNav()}},j.a.createElement("span",null),j.a.createElement("span",null),j.a.createElement("span",null),j.a.createElement("span",null))))))},e}(j.a.Component));e.a=A},141:function(M,e){M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMwIiBoZWlnaHQ9IjEzMCIgdmlld0JveD0iMCAwIDEzMCAxMzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMTkuOTg0IDBIOS41NjMzMkM0LjI4Njc1IDAgMCA0LjE4MjM4IDAgOS4zMzkyOFYxMjAuMjI1QzAgMTI1LjM4NiA0LjI4Njc1IDEyOS41NzUgOS41NjMzMiAxMjkuNTc1SDExOS45ODRDMTI1LjI3IDEyOS41NzUgMTI5LjU3NyAxMjUuMzg2IDEyOS41NzcgMTIwLjIyNVY5LjMzOTI4QzEyOS41NzcgNC4xODIzOCAxMjUuMjcgMCAxMTkuOTg0IDBaIiBmaWxsPSIjRkFGQUZBIi8+CjxwYXRoIGQ9Ik0yOC44MjQzIDE3LjgzOUMzNC45NzAxIDE3LjgzOSAzOS45NjI0IDIyLjgzMjEgMzkuOTYyNCAyOC45Nzg4QzM5Ljk2MjQgMzUuMTMgMzQuOTcwMSA0MC4xMjQ5IDI4LjgyNDMgNDAuMTI0OUMyMi42NjU5IDQwLjEyNDkgMTcuNjggMzUuMTMgMTcuNjggMjguOTc4OEMxNy42OCAyMi44MzIxIDIyLjY2NTkgMTcuODM5IDI4LjgyNDMgMTcuODM5Wk0xOS4yMTE1IDQ4LjU3NzlIMzguNDI5OVYxMTAuNDE1SDE5LjIxMTVWNDguNTc3OVoiIGZpbGw9IiMwRjAwMUEiLz4KPHBhdGggZD0iTTUwLjQ4NCA0OC41Nzc3SDY4LjkyMDVWNTcuMDI2Mkg2OS4xNzZDNzEuNzQwNSA1Mi4xNjUzIDc4LjAxMDUgNDcuMDM5IDg3LjM1OTcgNDcuMDM5QzEwNi44MjEgNDcuMDM5IDExMC40MTQgNTkuODQ2MiAxMTAuNDE0IDc2LjQ5NTZWMTEwLjQxNUg5MS4yMDkyVjgwLjM0MzNDOTEuMjA5MiA3My4xNjkgOTEuMDc2OSA2My45NDU4IDgxLjIyMiA2My45NDU4QzcxLjIyMDUgNjMuOTQ1OCA2OS42ODkgNzEuNzU4MSA2OS42ODkgNzkuODI0MVYxMTAuNDE1SDUwLjQ4NFY0OC41Nzc3WiIgZmlsbD0iIzBGMDAxQSIvPgo8L3N2Zz4K"},142:function(M,e){M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDI1NiAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMjguMDAxIDBDNTcuMzE3MyAwIDAgNTcuMzA2NyAwIDEyOC4wMDFDMCAxODQuNTU1IDM2LjY3NjIgMjMyLjUzNiA4Ny41MzQ5IDI0OS40NjFDOTMuOTMyIDI1MC42NDYgOTYuMjgwNiAyNDYuNjg0IDk2LjI4MDYgMjQzLjMwM0M5Ni4yODA2IDI0MC4yNTEgOTYuMTYxOSAyMzAuMTY4IDk2LjEwNjggMjE5LjQ3MkM2MC40OTY4IDIyNy4yMTUgNTIuOTgyNiAyMDQuMzcgNTIuOTgyNiAyMDQuMzdDNDcuMTYgMTg5LjU3NSAzOC43NzA0IDE4NS42NDEgMzguNzcwNCAxODUuNjQxQzI3LjE1NjkgMTc3LjY5NiAzOS42NDU4IDE3Ny44NTkgMzkuNjQ1OCAxNzcuODU5QzUyLjQ5OTMgMTc4Ljc2MiA1OS4yNjc0IDE5MS4wNSA1OS4yNjc0IDE5MS4wNUM3MC42ODM4IDIxMC42MTggODkuMjExNiAyMDQuOTYxIDk2LjUxNTkgMjAxLjY5Qzk3LjY2NDcgMTkzLjQxOCAxMDAuOTgyIDE4Ny43NzEgMTA0LjY0MyAxODQuNTc0Qzc2LjIxMTggMTgxLjMzOCA0Ni4zMjQ4IDE3MC4zNjIgNDYuMzI0OCAxMjEuMzE2QzQ2LjMyNDggMTA3LjM0MSA1MS4zMjUxIDk1LjkyMjQgNTkuNTEzMiA4Ni45NTg0QzU4LjE4NDIgODMuNzM0NCA1My44MDI5IDcwLjcxNTYgNjAuNzUzMiA1My4wODQ0QzYwLjc1MzIgNTMuMDg0NCA3MS41MDE5IDQ5LjY0NDIgOTUuOTYyNiA2Ni4yMDVDMTA2LjE3MyA2My4zNjg5IDExNy4xMjMgNjEuOTQ2NiAxMjguMDAxIDYxLjg5NzhDMTM4Ljg3OSA2MS45NDY2IDE0OS44MzggNjMuMzY4OSAxNjAuMDY3IDY2LjIwNUMxODQuNDk4IDQ5LjY0NDIgMTk1LjIzMiA1My4wODQ0IDE5NS4yMzIgNTMuMDg0NEMyMDIuMTk5IDcwLjcxNTYgMTk3LjgxNiA4My43MzQ0IDE5Ni40ODcgODYuOTU4NEMyMDQuNjk0IDk1LjkyMjQgMjA5LjY2IDEwNy4zNDEgMjA5LjY2IDEyMS4zMTZDMjA5LjY2IDE3MC40NzkgMTc5LjcxNiAxODEuMzA0IDE1MS4yMTMgMTg0LjQ3M0MxNTUuODA0IDE4OC40NDUgMTU5Ljg5NSAxOTYuMjM1IDE1OS44OTUgMjA4LjE3N0MxNTkuODk1IDIyNS4zMDMgMTU5Ljc0NyAyMzkuMDg3IDE1OS43NDcgMjQzLjMwM0MxNTkuNzQ3IDI0Ni43MSAxNjIuMDUxIDI1MC43MDEgMTY4LjUzOSAyNDkuNDQ0QzIxOS4zNyAyMzIuNSAyNTYgMTg0LjUzNiAyNTYgMTI4LjAwMUMyNTYgNTcuMzA2NyAxOTguNjkxIDAgMTI4LjAwMSAwWk00Ny45NDA2IDE4Mi4zNEM0Ny42NTg2IDE4Mi45NzYgNDYuNjU4MiAxODMuMTY3IDQ1Ljc0NjcgMTgyLjczQzQ0LjgxODMgMTgyLjMxMyA0NC4yOTY5IDE4MS40NDYgNDQuNTk3OSAxODAuODA4QzQ0Ljg3MzQgMTgwLjE1MyA0NS44NzYgMTc5Ljk3IDQ2LjgwMjMgMTgwLjQwOUM0Ny43MzI4IDE4MC44MjcgNDguMjYyNyAxODEuNzAyIDQ3Ljk0MDYgMTgyLjM0Wk01NC4yMzY4IDE4Ny45NThDNTMuNjI2MyAxODguNTI0IDUyLjQzMyAxODguMjYxIDUxLjYyMzMgMTg3LjM2N0M1MC43ODYgMTg2LjQ3NCA1MC42MjkyIDE4NS4yODEgNTEuMjQ4MSAxODQuNzA3QzUxLjg3NzYgMTg0LjE0MSA1My4wMzQ5IDE4NC40MDYgNTMuODc0MyAxODUuMjk4QzU0LjcxMTYgMTg2LjIwMSA1NC44NzQ4IDE4Ny4zODYgNTQuMjM2OCAxODcuOTU4Wk01OC41NTYyIDE5NS4xNDZDNTcuNzcyIDE5NS42OTEgNTYuNDg5NiAxOTUuMTggNTUuNjk2OCAxOTQuMDQyQzU0LjkxMjYgMTkyLjkwNCA1NC45MTI2IDE5MS41MzkgNTUuNzEzOCAxOTAuOTkyQzU2LjUwODcgMTkwLjQ0NSA1Ny43NzIgMTkwLjkzNyA1OC41NzUzIDE5Mi4wNjZDNTkuMzU3NSAxOTMuMjI0IDU5LjM1NzUgMTk0LjU4OSA1OC41NTYyIDE5NS4xNDZaTTY1Ljg2MTQgMjAzLjQ3MUM2NS4xNTk4IDIwNC4yNDUgNjMuNjY1NCAyMDQuMDM3IDYyLjU3MTcgMjAyLjk4MkM2MS40NTI1IDIwMS45NDkgNjEuMTQwOSAyMDAuNDg1IDYxLjg0NDYgMTk5LjcxMUM2Mi41NTQ3IDE5OC45MzUgNjQuMDU3NSAxOTkuMTUzIDY1LjE1OTggMjAwLjIwMUM2Ni4yNzA1IDIwMS4yMzEgNjYuNjA5NiAyMDIuNzA2IDY1Ljg2MTQgMjAzLjQ3MVpNNzUuMzAyNSAyMDYuMjgyQzc0Ljk5MyAyMDcuMjg0IDczLjU1MzggMjA3Ljc0IDcyLjEwNCAyMDcuMzE0QzcwLjY1NjMgMjA2Ljg3NSA2OS43MDg4IDIwNS43MDEgNzAuMDAxMyAyMDQuNjg4QzcwLjMwMjMgMjAzLjY3OSA3MS43NDc5IDIwMy4yMDQgNzMuMjA4MyAyMDMuNjZDNzQuNjUzOSAyMDQuMDk2IDc1LjYwMzUgMjA1LjI2MiA3NS4zMDI1IDIwNi4yODJaTTg2LjA0NjkgMjA3LjQ3NEM4Ni4wODMgMjA4LjUyOSA4NC44NTM2IDIwOS40MDUgODMuMzMxNyAyMDkuNDI0QzgxLjgwMTMgMjA5LjQ1OCA4MC41NjM0IDIwOC42MDMgODAuNTQ2NSAyMDcuNTY1QzgwLjU0NjUgMjA2LjQ5OSA4MS43NDgzIDIwNS42MzIgODMuMjc4NyAyMDUuNjA2Qzg0LjgwMDYgMjA1LjU3NyA4Ni4wNDY5IDIwNi40MjQgODYuMDQ2OSAyMDcuNDc0Wk05Ni42MDIxIDIwNy4wNjlDOTYuNzg0NCAyMDguMDk5IDk1LjcyNjcgMjA5LjE1NyA5NC4yMTU0IDIwOS40MzlDOTIuNzI5NiAyMDkuNzEgOTEuMzUzOSAyMDkuMDc0IDkxLjE2NTMgMjA4LjA1M0M5MC45ODA5IDIwNi45OTcgOTIuMDU3NiAyMDUuOTM5IDkzLjU0MTQgMjA1LjY2NkM5NS4wNTQ4IDIwNS40MDMgOTYuNDA5MyAyMDYuMDIyIDk2LjYwMjEgMjA3LjA2OVoiIGZpbGw9IiNGQUZBRkEiLz4KPC9zdmc+Cg=="},143:function(M,e){M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwIiBoZWlnaHQ9IjIwNCIgdmlld0JveD0iMCAwIDI1MCAyMDQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik03OC41IDIwMy4yQzE3Mi44IDIwMy4yIDIyNC40IDEyNSAyMjQuNCA1Ny4zQzIyNC40IDU1LjEgMjI0LjQgNTIuOSAyMjQuMyA1MC43QzIzNC4zIDQzLjUgMjQzIDM0LjQgMjQ5LjkgMjQuMUMyNDAuNyAyOC4yIDIzMC44IDMwLjkgMjIwLjQgMzIuMkMyMzEgMjUuOSAyMzkuMSAxNS44IDI0MyAzLjhDMjMzLjEgOS43IDIyMi4xIDEzLjkgMjEwLjQgMTYuMkMyMDEgNi4yIDE4Ny43IDAgMTczIDBDMTQ0LjcgMCAxMjEuNyAyMyAxMjEuNyA1MS4zQzEyMS43IDU1LjMgMTIyLjIgNTkuMiAxMjMgNjNDODAuNCA2MC45IDQyLjYgNDAuNCAxNy4zIDkuNEMxMi45IDE3IDEwLjQgMjUuOCAxMC40IDM1LjJDMTAuNCA1MyAxOS41IDY4LjcgMzMuMiA3Ny45QzI0LjggNzcuNiAxNi45IDc1LjMgMTAgNzEuNUMxMCA3MS43IDEwIDcxLjkgMTAgNzIuMkMxMCA5NyAyNy43IDExNy44IDUxLjEgMTIyLjVDNDYuOCAxMjMuNyA0Mi4zIDEyNC4zIDM3LjYgMTI0LjNDMzQuMyAxMjQuMyAzMS4xIDEyNCAyOCAxMjMuNEMzNC41IDE0My44IDUzLjUgMTU4LjYgNzUuOSAxNTlDNTguMyAxNzIuOCAzNi4yIDE4MSAxMi4yIDE4MUM4LjEgMTgxIDQgMTgwLjggMCAxODAuM0MyMi42IDE5NC43IDQ5LjYgMjAzLjIgNzguNSAyMDMuMloiIGZpbGw9IiNGQUZBRkEiLz4KPC9zdmc+Cg=="},144:function(M,e,N){},160:function(M,e,N){}}]);
//# sourceMappingURL=component---src-pages-writings-js-03d0411fd886425163b5.js.map