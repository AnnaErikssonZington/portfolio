(this.webpackJsonpannaspage=this.webpackJsonpannaspage||[]).push([[0],{28:function(e,t,a){e.exports=a(47)},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(18),l=a.n(c),o=a(11),s=a.n(o),i=a(19),m=a(25),p=a(12),u=a.n(p),E=(a(35),a(36),function(e){var t=e.props.primary.title[0].text,a=e.props.primary.image_position,r=e.props.primary.image.url,c=e.props.primary.url.url,l=e.props.primary.technologies[0].text;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"gridContainer ".concat(a," ")},n.a.createElement("div",{className:"projectTextContainer"},n.a.createElement("h3",{className:"projectTitle"},t),n.a.createElement("div",{className:"technologies"},n.a.createElement("p",{className:"smallText"}," ",l)),n.a.createElement("a",{href:c,className:"projectLink"},c)),n.a.createElement("div",{className:"projectImageContainer"},n.a.createElement("img",{src:r,alt:t}))))}),f=(a(37),a(49)),d=a(50),v=function(e){var t=e.props.primary.footer_title[0].text,a=e.props.primary.footer_text[0].text;return n.a.createElement("div",{className:"footerContainer"},n.a.createElement("h2",{className:"footerTitle"},t),n.a.createElement("p",{className:"footerText"},a),n.a.createElement("div",{className:"logos"},n.a.createElement(f.a,{size:"30",className:"linkedInLogo"}),n.a.createElement(d.a,{size:"30"})))},b=(a(40),function(e){var t=e.props.primary.title[0].text,a=e.props.primary.text[0].text;return n.a.createElement("div",{className:"meWrapper"},n.a.createElement("h4",null,t),n.a.createElement("p",{className:"meInfo"},a))}),y=(a(41),a(20)),g=a(21),h=a(26),x=a(22),N=a(9),k=a(27),T=(a(42),a(8));function j(){return n.a.createElement("ul",{className:"navbar"},n.a.createElement("li",null,n.a.createElement(T.b,{to:"/",exact:!0,activeStyle:{color:"black"},className:"nav-link"},"Home")),n.a.createElement("li",null,n.a.createElement(T.b,{to:"/about",activeStyle:{color:"black"},className:"nav-link"},"About")))}var I=function(e){function t(e){var a;return Object(y.a)(this,t),(a=Object(h.a)(this,Object(x.a)(t).call(this,e))).state={selectedTab:""},a.updateTab=a.updateTab.bind(Object(N.a)(a)),a}return Object(k.a)(t,e),Object(g.a)(t,[{key:"updateTab",value:function(e){this.setState({selectedTab:e})}},{key:"render",value:function(){var e=this.state.selectedTab;return n.a.createElement("div",null,n.a.createElement(j,{selected:e,onUpdateItem:this.updateTab}))}}]),t}(n.a.Component),O=function(e){var t=e.props.primary.hero_title[0].text,a=e.props.primary.hero_image.url;return n.a.createElement("div",{className:"heroWrapper"},n.a.createElement(I,null),n.a.createElement("p",{className:"title"},t),n.a.createElement("div",{className:"heroImgContainer"},n.a.createElement("img",{src:a,alt:"Cervinia"})))},C=(a(45),function(e){var t=e.props.primary.title[0].text,a=e.props.primary.text[0].text,r=e.props.primary.image.url;return console.log(e),n.a.createElement("div",null,n.a.createElement("p",{className:"TextImageTitle"},t),n.a.createElement("div",{className:"TextImageContainer"},n.a.createElement("p",{className:"TextImageText"},a),n.a.createElement("div",{className:"TextImageImg"},n.a.createElement("img",{src:r,alt:"jag"}))))}),_=function(e,t){switch(e.slice_type){case"project":return n.a.createElement(E,{props:e,key:t});case"hero":return n.a.createElement(O,{props:e,key:t});case"text":return n.a.createElement(b,{props:e,key:t});case"footer":return n.a.createElement(v,{props:e,key:t});case"text_w_image":return n.a.createElement(C,{props:e,key:t});default:return n.a.createElement(n.a.Fragment,null)}},w=(a(46),function(e){return n.a.createElement("div",{className:"container"},e.props&&e.props.data.body.map((function(e,t){return _(e,t)})))}),F=function(e){return n.a.createElement("div",{className:"container"},e.props&&e.props.data.body.map((function(e){return _(e)})))},S=a(6),z=function(e){var t=e.props;return n.a.createElement(n.a.Fragment,null,n.a.createElement(T.a,null,t.data&&t.data.map((function(e){return function(e,t){switch(e){case"home":return n.a.createElement(S.a,{exact:!0,path:"/",render:function(e){return n.a.createElement(w,{props:t})},key:e});case"about":return n.a.createElement(S.a,{exact:!0,path:"/about",render:function(e){return n.a.createElement(F,{props:t})},key:e});default:return n.a.createElement(n.a.Fragment,null)}}(e.uid,e)}))))},J=function(){var e=Object(r.useState)({data:null}),t=Object(m.a)(e,2),a=t[0],c=t[1],l=u.a.client("https://annasportfolio.cdn.prismic.io/api/v2");return Object(r.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.query(p.Predicates.at("document.type","page"));case 3:t=e.sent,c({data:t.results}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),n.a.createElement(z,{props:a})};l.a.render(n.a.createElement(J,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.d8f5f561.chunk.js.map