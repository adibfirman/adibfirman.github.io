(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{140:function(e,t,n){"use strict";n.r(t);n(147);var a=n(8),r=n(0),i=n(148),o=n.n(i),s=n(155),c=n.n(s),l=n(156),d=n.n(l),u=n(157),f=n.n(u),p=n(158),b=n(4),m=n.n(b),y=n(159),h=n.n(y),g=n(143);function j(e){var t=e.description,n=e.lang,r=e.meta,i=e.keywords,o=e.title;return Object(a.a)(g.StaticQuery,{query:O,render:function(e){var s=t||e.site.siteMetadata.description;return Object(a.a)(h.a,{htmlAttributes:{lang:n},title:o,meta:[{name:"description",content:s},{property:"og:title",content:o},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:s}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)},Object(a.a)("link",{href:"https://fonts.googleapis.com/css?family=Coustard",rel:"stylesheet"}))},data:p})}j.defaultProps={lang:"en",meta:[],keywords:[]},j.propTypes={description:m.a.string,lang:m.a.string,meta:m.a.array,keywords:m.a.arrayOf(m.a.string),title:m.a.string.isRequired};var w=j,O="1025518380",v=n(168),x=n(51),k=n.n(x),q=n(145),R=n.n(q),S={wrapper:{name:"3q7uas",styles:"border:2px black solid;border-radius:5px;padding:2px 10px;display:flex;justify-content:center;align-items:center;"},btnLink:{name:"co62oz",styles:"color:unset;text-decoration:none;"}},T=function(e){var t=e.children,n=R()(e,["children"]);return Object(a.a)("div",{css:S.wrapper},Object(a.a)(g.Link,k()({},n,{css:S.btnLink}),t))},C={wrapper:{name:"liw6g7",styles:"display:flex;justify-content:space-between;align-items:center;padding:5vh 10vh;font-family:'Coustard',serif;font-size:15px;color:#212121;font-weight:bolder;letter-spacing:2.5px;"},header:{name:"1s6yx66",styles:"font-weight:600;color:unset;text-decoration:none;"}},E="588131193",G=function(){return Object(a.a)(g.StaticQuery,{query:E,render:function(e){var t=e.site;return Object(a.a)("div",{css:C.wrapper},Object(a.a)(g.Link,{css:C.header,to:"/"},t.siteMetadata.author),Object(a.a)(T,{to:"/blog"},"BLOG"))},data:v})},z=n(169),L=n.n(z),P=(new Date).getFullYear(),F={container:{name:"xov644",styles:"display:flex;justify-content:center;font-family:'Coustard',Tahoma,Geneva,Verdana,sans-serif;"}},A=function(){return Object(a.a)("div",{css:F.container},Object(a.a)("span",null,"© ",P," Made With ",Object(a.a)(L.a,{fontSize:"15"})," From Indonesia"))};n.d(t,"query",function(){return M});var I={contact:{name:"3jx3lg",styles:"display:flex;width:40vh;justify-content:space-between;align-items:center;"},contactContainer:{name:"wkpw2c",styles:"display:flex;flex-direction:column;justify-content:center;align-items:center;"},title:{name:"1lxzcny",styles:"font-family:'Coustard',Tahoma,Geneva,Verdana,sans-serif;font-size:50px;margin:0;text-align:center;"},desc:{name:"4jj4pa",styles:"font-family:'Coustard',Tahoma,Geneva,Verdana,sans-serif;text-align:center;"},body:{name:"1f9449o",styles:"display:flex;justify-content:center;align-items:center;flex-direction:column;min-height:80vh;"}},M="2556979675";t.default=function(e){var t=e.data.site.siteMetadata.name;return Object(a.a)(r.Fragment,null,Object(a.a)(w,{title:"Adib Firman — Frontend Web Developer"}),Object(a.a)(G,null),Object(a.a)("div",{css:I.body},Object(a.a)("h4",{css:I.title},"Hi, I'm ",t),Object(a.a)("label",{css:I.desc},"FRONTEND WEB DEVELOPER, BEGINNER WRITER, AND A PERSON LOVING A CAT"),Object(a.a)("div",{css:I.contactContainer},Object(a.a)("h5",null,"Get In Touch"),Object(a.a)("div",{css:I.contact},Object(a.a)("a",{href:"https://twitter.com/dibfirman",target:"_blank",rel:"noopener noreferrer"},Object(a.a)(d.a,{fontSize:"30"})),Object(a.a)("a",{href:"https://www.instagram.com/adibfirman/",target:"_blank",rel:"noopener noreferrer"},Object(a.a)(f.a,{fontSize:"30"})),Object(a.a)("a",{href:"https://github.com/adibfirman",target:"_blank",rel:"noopener noreferrer"},Object(a.a)(c.a,{fontSize:"30"})),Object(a.a)("a",{href:"https://www.linkedin.com/in/adibfirman/",target:"_blank",rel:"noopener noreferrer"},Object(a.a)(o.a,{fontSize:"30"}))))),Object(a.a)(A,null))}},143:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return b});var a=n(8),r=n(0),i=n.n(r),o=n(4),s=n.n(o),c=n(141),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var d=n(146),u=n.n(d);n.d(t,"PageRenderer",function(){return u.a});var f=n(48);n.d(t,"parsePath",function(){return f.a});var p=i.a.createContext({}),b=function(e){return Object(a.a)(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):Object(a.a)("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}b.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},146:function(e,t,n){var a;e.exports=(a=n(167))&&a.default||a},158:function(e){e.exports={data:{site:{siteMetadata:{title:"adibfirman",description:"Personal website by Adib Firman",author:"@adibfirman"}}}}},167:function(e,t,n){"use strict";n.r(t);n(55);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(70),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},168:function(e){e.exports={data:{site:{siteMetadata:{author:"@adibfirman"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-bd46bd418f405c286a8d.js.map