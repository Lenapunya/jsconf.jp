(self.webpackChunkjsconfjp_2021=self.webpackChunkjsconfjp_2021||[]).push([[259],{9986:function(e,t,n){"use strict";n.d(t,{a:function(){return c}});var r=n(7294),o=n(9),i=n(5019),a=n(5444),l=o.default.div.withConfig({displayName:"Breadcrumb__Box",componentId:"sc-1ortt5-0"})(["display:flex;"]),s=o.default.span.withConfig({displayName:"Breadcrumb__Text",componentId:"sc-1ortt5-1"})(["margin-right:0.5em;font-size:1.4rem;font-weight:bold;text-transform:uppercase;font-family:",";text-transform:uppercase;"],(function(e){return e.theme.fonts.header}));function c(e){var t=e.path,n=(0,i.$)().t;return r.createElement(l,null,r.createElement(a.Link,{to:"/"},r.createElement(s,null,n("top"))),t.filter(Boolean).map((function(e){var t="string"==typeof e?{label:e,to:null}:e;return r.createElement(r.Fragment,{key:t.label},r.createElement(s,null,">"),t.to?r.createElement(a.Link,{to:t.to},r.createElement(s,null,t.label)):r.createElement(s,null,t.label))})))}},3205:function(e,t,n){"use strict";n.d(t,{$:function(){return i}});var r=n(7294),o=n(9).default.div.withConfig({displayName:"ResponsiveBox__Box",componentId:"sc-da0ckf-0"})(["width:100%;max-width:",";padding:2em 1em 5em;margin:0 auto;box-sizing:border-box;"],(function(e){return e.theme.innerWidth}));function i(e){var t=e.children;return r.createElement(o,null,t)}},129:function(e,t,n){"use strict";n.d(t,{X:function(){return f}});var r=n(7294),o=n(9),i=n(5019),a=n(5769),l=(0,o.default)(a.MS).withConfig({displayName:"Sponsor__Box",componentId:"sc-r4jidq-0"})(["display:flex;align-items:center;justify-content:center;border:1px solid ",";background-color:",";font-size:0;"],(function(e){return e.theme.colors.border}),(function(e){return e.theme.colors.base})),s=o.default.img.withConfig({displayName:"Sponsor__Img",componentId:"sc-r4jidq-1"})(["padding:20px;object-fit:contain;box-sizing:border-box;width:100%;&.premium{width:780px;height:200px;","{width:100%;max-width:780px;max-height:160px;}}&.sponsor{width:100%;max-width:440px;max-height:125px;}","{padding:10px;&.bronze{width:100%;max-width:273px;max-height:40px;}}"],(function(e){return e.theme.breakpoints.mobile}),(function(e){return e.theme.breakpoints.mobile}));function c(e){var t=e.logoUrl,n=e.url,o=e.grade,i=e.name,a=e.prText;return r.createElement(l,{href:n,target:"_blank"},r.createElement(s,{src:t,width:"100%",className:o,alt:i,title:a}))}var u=(0,o.css)(["grid-column-gap:60px;grid-row-gap:30px;","{grid-column-gap:20px;grid-row-gap:20px;}"],(function(e){return e.theme.breakpoints.mobile})),m=o.default.div.withConfig({displayName:"SponsorList__PlatinumBox",componentId:"sc-1m2ztbr-0"})(["display:grid;grid-template-columns:repeat(1,1fr);width:100%;max-width:780px;margin:0 auto;",""],u),p=o.default.div.withConfig({displayName:"SponsorList__SponsorBox",componentId:"sc-1m2ztbr-1"})(["display:grid;grid-template-columns:repeat(2,1fr);",""],u),d=o.default.h3.withConfig({displayName:"SponsorList__SubTitle",componentId:"sc-1m2ztbr-2"})(["font-family:",";text-align:center;font-size:3rem;"],(function(e){return e.theme.fonts.header}));function f(e){var t=e.sponsors,n=(0,i.$)().t,o=t.reduce((function(e,t){var n;return Object.assign({},e,((n={})[t.grade]=e[t.grade].concat([t]),n))}),{premium:[],sponsor:[]});return r.createElement(r.Fragment,null,r.createElement(d,null,n("sponsor.premium")),r.createElement(m,null,o.premium.map((function(e){return r.createElement(c,Object.assign({key:e.url},e))}))),r.createElement(d,null,n("sponsor.sponsor")),r.createElement(p,null,o.sponsor.map((function(e){return r.createElement(c,Object.assign({key:e.url},e))}))))}},1797:function(e,t,n){"use strict";n.d(t,{D:function(){return i}});var r=n(7294),o=n(9).default.h1.withConfig({displayName:"Title__Box",componentId:"sc-1o12tf7-0"})(["text-align:center;margin:40px 0 60px;font-size:4rem;text-transform:none;font-family:",";"],(function(e){return e.theme.fonts.header}));function i(e){var t=e.children;return r.createElement(o,null,t)}},7522:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(7294),o=n(5444),i=n(5019),a=n(7400),l=n(5167),s=n(1797),c=n(129),u=n(3205),m=n(9986);function p(){var e=(0,o.useStaticQuery)("422937091").allSponsorsYaml.edges.map((function(e){return e.node})),t=(0,i.$)().t;return r.createElement(a.A,null,r.createElement(l.H,{title:t("sponsors"),description:t("sponsors.description")}),r.createElement(u.$,null,r.createElement(m.a,{path:[t("sponsors")]}),r.createElement(s.D,null,t("sponsors")),r.createElement(c.X,{sponsors:e})))}}}]);
//# sourceMappingURL=component---src-pages-sponsors-tsx-1c9d98741bf179cb347a.js.map