(this["webpackJsonpqmgsolutions.v2"]=this["webpackJsonpqmgsolutions.v2"]||[]).push([[0],{18:function(e,t,s){},31:function(e,t,s){},46:function(e,t,s){},48:function(e,t,s){},49:function(e,t,s){},50:function(e,t,s){},51:function(e,t,s){},52:function(e,t,s){},53:function(e,t,s){},54:function(e,t,s){},55:function(e,t,s){},56:function(e,t,s){},57:function(e,t,s){},63:function(e,t,s){"use strict";s.r(t);var a=s(1),i=s.n(a),n=s(20),c=s.n(n),l=(s(31),s(23)),o=s(2),r=s(21),d=s(22),m=s(26),b=s(25),j=s(12),p=(s(46),s(0)),u=function(e){Object(m.a)(s,e);var t=Object(b.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"componentDidMount",value:function(){document.getElementsByClassName("carousel-item")[0].className+=" active",this.showSlides(this.slideIndex=0)}},{key:"plusSlides",value:function(e){"next"===e.target.className?this.showSlides(this.slideIndex+=1):this.showSlides(this.slideIndex-=1)}},{key:"currentSlide",value:function(e){this.showSlides(this.slideIndex=parseInt(e.target.id))}},{key:"showSlides",value:function(e){var t,s=document.getElementsByClassName("carousel-item"),a=document.getElementsByClassName("dot");for(e>s.length&&(this.slideIndex=1),e<1&&(this.slideIndex=s.length),t=0;t<s.length;t++)s[t].style.display="none";for(t=0;t<a.length;t++)a[t].className=a[t].className.replace(" active","");try{void 0!==s&&(s[this.slideIndex-1].style.display="block"),void 0!==a&&(a[this.slideIndex-1].className+=" active")}catch(i){console.log(i.message)}}},{key:"render",value:function(){return Object(p.jsx)("section",{className:"About-Us",children:Object(p.jsx)("div",{className:"container-xxl text-white bg-dark",children:Object(p.jsxs)("div",{id:"carouselSlides",className:"carousel slide","data-bs-ride":"carousel",children:[Object(p.jsx)("div",{className:"carousel-inner",children:this.props.slides.map((function(e){return Object(p.jsx)("div",{className:"carousel-item",children:Object(p.jsxs)("div",{className:"info",children:[Object(p.jsx)("h3",{className:"title text-center font-asap-bold uppercase",children:Object(j.a)(e.title)}),Object(p.jsx)("div",{className:"content font-patua-one",children:Object(j.a)(e.description)})]})},e.key)}))}),Object(p.jsx)("a",{className:"prev",href:"#null ",onClick:this.plusSlides.bind(this),children:"\u276e"}),Object(p.jsx)("a",{className:"next",href:"#null",onClick:this.plusSlides.bind(this),children:"\u276f"})]})})})}}]),s}(i.a.Component),h=(s(48),function(e){return Object(p.jsx)("div",{className:"frame",children:Object(p.jsx)("div",{className:"frame-image",children:Object(p.jsx)("img",{src:e.image,alt:e.alt})})})}),x=(s(49),function(e){return Object(p.jsx)("section",{className:"major-banner-section",children:Object(p.jsx)("div",{className:"major-banner container-xxl px-0",style:{backgroundImage:"url(".concat(e.image,")")},children:Object(p.jsxs)("div",{className:"banner content w-100 p-3",children:[Object(p.jsx)("h3",{className:"text text-white mb-3 font-concert-one uppercase",children:e.overlaytext}),Object(p.jsx)("div",{className:"action font-patua-one bold",children:Object(p.jsx)("a",{href:e.overlayaction,className:"btn btn-success",children:e.overlaybtn})})]})})})}),g=(s(50),s(51),s(52),void 0),f=function(e){var t=function(){var e=document.getElementById("sideBar");console.log("clicked"),-1===e.className.indexOf("w3-show")?e.className+=" w3-show":e.className=e.className.replace(" w3-show","")};return Object(p.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark",children:Object(p.jsxs)("div",{className:"container-xxl",children:[Object(p.jsx)("div",{id:"sideBar",className:"w3-bar-block w3-white w3-hide w3-hide-large w3-large container-xxl",children:Object(p.jsxs)("div",{className:"w3-sidebar w3-bar-block w3-card w3-animate-left w3-center",children:[Object(p.jsxs)("a",{className:"w3-bar-item w3-button w3-padding-large font-patua-one",href:"#none",onClick:t.bind(g),children:["Close",Object(p.jsx)("i",{className:"material-icons align-middle",children:"close"})]}),e.menu.map((function(e){return Object(p.jsx)("a",{href:e.href,className:"w3-bar-item w3-button w3-padding-large font-patua-one",children:e.item},e.key)}))]})}),Object(p.jsx)("a",{className:"navbar-brand",href:"#top",children:Object(p.jsxs)("div",{className:"d-flex align-items-center",children:[Object(p.jsx)("img",{src:"logo192.png",alt:"QMG Solutions",className:"d-inline-block align-text-top"}),Object(p.jsxs)("div",{className:"logo-name ms-2",children:[Object(p.jsx)("div",{className:"title font-asap-bold",children:e.title}),Object(p.jsx)("div",{className:"subtitle oswald",children:e.subtitle})]})]})}),Object(p.jsx)("button",{className:"navbar-toggler",type:"button",onClick:t.bind(g),children:Object(p.jsx)("span",{className:"material-icons",children:"menu"})}),Object(p.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(p.jsx)("ul",{className:"navbar-nav ms-auto",children:e.menu.map((function(e){return Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)("a",{className:"nav-link font-raleway-medium",href:e.href,"aria-current":"page",children:e.item})},"nav-".concat(e.key))}))})})]})})},y=(s(18),s(53),{menu:[{item:"Home",href:"#inicio",key:"0"},{item:"QMG Solutions",href:"#qmg-solutions",key:"1"},{item:"Services",href:"#services",key:"2"},{item:"Project Portfolio",href:"#project-portfolio",key:"3"},{item:"Contact-Us",href:"#contact-us",key:"4"}],banner:{image:"banner.png",overlaytext:"Procurement of goods and services across all fields of interior installations and project managment.",overlaybutton:"Main products",overlayaction:"#"},slides:[{title:"who we are",description:"We are a Procurement Specialist Team with over 30 years of combined experience in procurement for <strong>commercial, leisure, construction and mining industries.</strong>",key:"0"},{title:"about us",description:"Through our extensive sourcing capabilities and established supplier base, we offer simplified and competitive solutions to extensive project requirements from any location including <strong>Mozambique, South Africa, Europe and Asia</strong>.",key:"1"}],serviceKeys:[{title:"mission",image:"mission.png",description:"QMG Solutions is dedicated to delivering effective, timely and quality goods and services at the best price with the ultimate purpose of creating value to our customers and contributing to the competiveness."},{title:"vision",image:"vision.png",description:"Our vision at QMG Solutions is to set a standard of excellence in procurement of goods and services and to be recognized partner for cost and effective sources globally."},{title:"values",image:"values.png",description:"Honesty Integrity Sustainability."}],history:{image:"project_managment.png",description:"QMG Solutions core business is procurement of goods altough, we offer services for Specialised Projects and Installations. The QMG Solution's team expertise stretches across all fields of interior installations and project management thereof. In addition to retail, commercial and residential scopes, we specialise in fit out of hotels."},portofolioTypes:[{type:"all",key:"0"},{type:"project experience",key:"1"},{type:"retail",key:"2"},{type:"clients",key:"3"}],portofolio:[{name:"radisson towers mozambique",image:"radisson.jpg",budget:"R35 million",type:"project experience"},{name:"signature lux sandton",image:"signature_hotels.png",budget:"R4 million",type:"project experience"},{name:"signature lux cape town 1",image:"signature_hotels.png",budget:"R7 million",type:"project experience"},{name:"signature lux cape town 2 Heerengraght",image:"signature_hotels.png",budget:"R8 million",type:"project experience"},{name:"micro laboratory of adcock ingram",image:"adock_ingram.jpg",budget:"R8 million",type:"project experience"},{name:"holiday inn sandton",image:"holydayin.jpg",budget:"R15 million",type:"project experience"},{name:"city lodge foreways",image:"city_lodge.jpg",budget:"R8 million",type:"project experience"},{name:"city lodge menlyn",image:"city_lodge.jpg",budget:"R9.5 million",type:"project experience"},{name:"city lodge port elizabeth",image:"city_lodge.jpg",budget:"R6.5 million",type:"project experience"},{name:"elle store mall of africa",image:"company.png",budget:"R1.4 million",type:"retail"},{name:"nina passadina store mall of africa",image:"company.png",budget:"R850.000",type:"retail"},{name:"the arrow store mall of africa",image:"company.png",budget:"R2.4 million",type:"retail"},{name:"gala investments, lda",image:"company.png",budget:"MZN 2.5 million",type:"clients"},{name:"market solutions, lda",image:"company.png",budget:"MZN 4.0 million",type:"clients"},{name:"molims, lda",image:"company.png",budget:"MZN 2.0 million",type:"clients"}],services:[{name:"procurement",image:"procurement.jpg"},{name:"procurement management",image:"procurement_managment.webp"},{name:"project management",image:"project_managment.png"},{name:"design co-ordination",image:"design_co_ordinator.jpg"},{name:"installation",image:"installation.jpg"},{name:"quality assurance",image:"quality_assurance.jpg"},{name:"shopfitting design and manufacturing",image:"shopfitting_and_design.jpg"}],contact:[{type:"address",title:"our address",info:"Av. Eduardo Mondlane N 282, Bairro Cimento, Cidade de Pemba"},{type:"number",title:"call us",info:"(+258) 84 335 5065"},{type:"email",title:"email us",info:"sales1@qmg.co.mz"}]}),v=(s(54),function(e){return Object(p.jsxs)("div",{className:"head-title text-center pt-5",children:[Object(p.jsx)("h3",{className:e.headerFont,children:e.title}),Object(p.jsx)("div",{className:"subtitle ".concat(e.subtitleFont),children:e.subtitle}),Object(p.jsx)("div",{className:"separator"})]})}),O=(s(55),function(e){return Object(p.jsx)("div",{className:"image-box shadow",style:{backgroundImage:"url(".concat(e.image,")")},children:Object(p.jsxs)("div",{className:"title",children:[Object(p.jsx)("div",{className:"title-content p-2",children:Object(p.jsx)("h6",{className:e.font,children:e.title})}),Object(p.jsx)("div",{className:"cut p-2"})]})})}),N=(s(56),function(e){return Object(p.jsx)("ul",{id:"filters",className:"breadcrumb align-items-center justify-content-center",children:e.list.map((function(t){return Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#filters",className:e.linkFont,children:t.type})},t.key)}))})}),w=(s(57),function(e){return Object(p.jsx)("div",{className:"single-contact-info",children:Object(p.jsxs)("div",{className:"single_text_info",children:[Object(p.jsx)("h1",{className:e.titleFont,children:e.title}),Object(p.jsx)("h4",{className:e.infoFont,children:e.info})]})})}),k=function(e){return Object(p.jsxs)("div",{className:"mb-3",children:[Object(p.jsx)("label",{htmlFor:e.id,className:"form-label ".concat(e.labelFont),children:e.label}),"textarea"===e.type?Object(p.jsx)("textarea",{id:e.id,name:e.id,rows:e.rows,className:"form-control ".concat(e.inputFont)}):Object(p.jsx)("input",{id:e.id,name:e.id,placeholder:e.label,type:e.type?e.type:"text",className:"form-control ".concat(e.inputFont)})]})},S=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(f,{title:"QMG",subtitle:"Solutions",menu:y.menu}),Object(p.jsx)(x,{image:y.banner.image,overlaytext:y.banner.overlaytext,overlayaction:y.banner.overlayaction,overlaybtn:y.banner.overlaybutton}),Object(p.jsx)(u,{slides:y.slides}),Object(p.jsx)("section",{className:"card-section",children:Object(p.jsx)("div",{className:"container-xxl my-3",children:Object(p.jsx)("div",{className:"row",children:y.serviceKeys.map((function(e){return Object(p.jsx)("div",{className:"col-md-4 col-12 p-2",children:Object(p.jsxs)("div",{className:"card align-items-center justify-content-center h-100",children:[Object(p.jsx)(h,{image:e.image,alt:e.description}),Object(p.jsxs)("div",{className:"card-body",style:{letterSpacing:"0.085em"},children:[Object(p.jsx)("h4",{className:"card-title font-asap-bold uppercase text-center",children:e.title}),Object(p.jsx)("p",{className:"card-text font-raleway-semibold text-center",children:e.description})]})]})},e.key)}))})})}),Object(p.jsx)("hr",{}),Object(p.jsx)("section",{className:"history",children:Object(p.jsx)("div",{className:"container-xxl",children:Object(p.jsx)("div",{className:"card shadow mb-3",children:Object(p.jsxs)("div",{className:"row g-0",children:[Object(p.jsx)("div",{className:"col-md-4 pe-md-0 py-3 ps-3 pe-3",children:Object(p.jsx)("img",{src:y.history.image,className:"img-fluid rounded-start w-100",alt:y.history.description})}),Object(p.jsx)("div",{className:"col-md-8",children:Object(p.jsxs)("div",{className:"card-body",style:{letterSpacing:"0.1em"},children:[Object(p.jsx)("h3",{className:"card-title title-left-bar font-asap-bold uppercase",style:{color:"#20344D"},children:"our history"}),Object(p.jsx)("p",{className:"card-text font-raleway-medium",children:y.history.description})]})})]})})})}),Object(p.jsx)("section",{className:"main-services",children:Object(p.jsxs)("div",{className:"container-xxl",children:[Object(p.jsx)(v,{title:"Main Services",headerFont:"font-asap-bold lsp-08"}),Object(p.jsx)("div",{className:"row",children:y.services.map((function(e){return Object(p.jsx)("div",{className:"col-md-4 col-12 mb-3",children:Object(p.jsx)(O,{image:e.image,title:e.name,font:"font-zilla-slab txt-b lsp-06 uppercase"})})}))})]})}),Object(p.jsx)("section",{className:"portofolio",children:Object(p.jsxs)("div",{className:"container-xxl",children:[Object(p.jsx)(v,{title:"Portfolio",subtitle:"Altough QMG Solutions is a recently established company in Mozambique, its team comes with extensive list of projects successfuly completed locally and abroad.",headerFont:"font-asap-bold lsp-08",subtitleFont:"font-raleway-semibold lsp-06"}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)(N,{list:y.portofolioTypes,linkFont:"font-zilla-slab txt-b lsp-06"}),y.portofolio.map((function(e){return Object(p.jsx)("div",{className:"col-md-3 col-12 mb-3",children:Object(p.jsxs)("div",{className:"mb-3 shadow h-100 card-like",children:[Object(p.jsx)("h5",{className:"card-title text-center text-white card-header my-blue uppercase font-zilla-slab txt-b lsp-06 ",children:e.name}),Object(p.jsxs)("div",{className:"img",children:[Object(p.jsx)("img",{src:e.image,className:"card-img-top p-4",alt:"".concat(e.name," ").concat(e.budget)})," "]}),Object(p.jsx)("p",{className:"card-text text-center color-my-blue py-3 font-raleway-bold txt-b lsp-06",children:e.budget})]})})}))]})]})}),Object(p.jsx)("section",{className:"keep-in-touch",children:Object(p.jsxs)("div",{className:"container-xxl",children:[Object(p.jsx)(v,{title:"Keep in touch",headerFont:"font-asap-bold lsp-08"}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"contact-info-content col-12 col-md-6 mb-3",children:Object(p.jsx)("div",{className:"bg-white border border-secondary p-5 h-100",children:y.contact.map((function(e){return Object(p.jsx)(w,{title:e.title,titleFont:"font-asap-bold lsp-06",infoFont:"font-patua-one txt-sz-18",info:e.info},e.type)}))})}),Object(p.jsx)("div",{className:"contact-info-content col-12 col-md-6 mb-3",children:Object(p.jsx)("div",{className:"bg-white border border-secondary p-5 h-100",children:Object(p.jsxs)("form",{action:"",children:[Object(p.jsx)(k,{id:"first_name",label:"First Name",inputFont:"font-asap-medium txt-sb lsp-06",labelFont:"font-zilla-slab txt-b lsp-06"}),Object(p.jsx)(k,{id:"email",label:"Email",inputFont:"font-asap-medium txt-sb lsp-06",labelFont:"font-zilla-slab txt-b lsp-06"}),Object(p.jsx)(k,{id:"subjet",label:"Subject",inputFont:"font-asap-medium txt-sb lsp-06",labelFont:"font-zilla-slab txt-b lsp-06"}),Object(p.jsx)(k,{id:"Message",type:"textarea",label:"Message",inputFont:"font-asap-medium txt-sb lsp-06",labelFont:"font-zilla-slab txt-b lsp-06",rows:"5"}),Object(p.jsx)("div",{className:"submit font-patua-one txt-b",children:Object(p.jsx)("button",{className:"btn btn-dark",children:"Submit"})})]})})})]})]})}),Object(p.jsx)("section",{children:Object(p.jsx)("div",{className:"container-xxl",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col p-3 my-blue color-white font-patua-one",children:["Desenvolvido por ",Object(p.jsx)("span",{className:"uppercase",children:"Tedic"})," \xa92021"]})})})})]})};var F=function(){return Object(p.jsxs)(l.a,{children:[Object(p.jsxs)(o.c,{children:[Object(p.jsx)(o.a,{path:"/",exact:!0,component:S}),"s"]}),Object(p.jsx)("script",{src:"./res/js/bootstrap.min.js"})]})},M=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,64)).then((function(t){var s=t.getCLS,a=t.getFID,i=t.getFCP,n=t.getLCP,c=t.getTTFB;s(e),a(e),i(e),n(e),c(e)}))};c.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(F,{})}),document.getElementById("root")),M()}},[[63,1,2]]]);
//# sourceMappingURL=main.38b60d2d.chunk.js.map