(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"8y9V":function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),o=t("mrSG"),u=t("flj8"),i=t("92Lm"),r=t("fd0Q"),a=t("dBp3"),c=function(){function n(n,l,t,e,o){var u=this;this.renderer=n,this.accountService=l,this.helper=t,this.router=e,this.activatedRouter=o,this.locations=[],this.activatedRouter.queryParams.subscribe((function(n){u.router.getCurrentNavigation().extras.state&&(u.locations=u.router.getCurrentNavigation().extras.state.locations,console.log(u.locations))})),this.accountService.watchStorage().subscribe((function(n){u.userData=null!==n?n:null}))}return n.prototype.ngOnInit=function(){return o.b(this,void 0,void 0,(function(){return o.e(this,(function(n){return[2]}))}))},n.prototype.ngAfterViewInit=function(){var n=this;this.getGoogleMaps().then((function(l){var t,e=n.mapElement.nativeElement,o=new l.Map(e,{center:{lat:48.8513735,lng:2.3861292},zoom:3}),u=new google.maps.InfoWindow,i=[];i=n.locations;for(var r=0;r<i.length;r++){var a=new l.Marker({position:{lat:parseFloat(i[r].lat),lng:parseFloat(i[r].long)},map:o});l.event.addListenerOnce(o,"idle",(function(){n.renderer.addClass(e,"visible")})),l.event.addListener(a,"click",function(n,l){return console.log(i),function(){t='<div id="content"><div id="siteNotice"></div><h1 id="firstHeading" class="firstHeading">'+i[l].title.replace(/&#038;/gm," ")+'</h1><div id="bodyContent">'+i[l].address+'<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">https://en.wikipedia.org/w/index.php?title='+i[l].title.replace(/&#038;/gm," ")+"</a> </p></div></div>",u.setContent(t),u.open(o,n)}}(a,r))}})).catch((function(n){console.log(n)}))},n.prototype.getGoogleMaps=function(){var n=window,l=n.google;return l&&l.maps?Promise.resolve(l.maps):new Promise((function(l,t){var e=document.createElement("script");e.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDdaIE9VgfVuOtoKroPCL1tXQf2CpQ4VOs",e.async=!0,e.defer=!0,document.body.appendChild(e),e.onload=function(){var e=n.google;e&&e.maps?l(e.maps):t("Google maps SDK not available")}}))},n.prototype.replaceSign=function(n){return n.replace(/&#038;/gm," ")},n.prototype.getLoginData=function(){return o.b(this,void 0,void 0,(function(){var n=this;return o.e(this,(function(l){switch(l.label){case 0:return[4,this.accountService.watchStorage().subscribe((function(l){n.userData=l}))];case 1:return[2,l.sent()]}}))}))},n.prototype.gotoDash=function(){this.router.navigate(["/dashboard"])},n.prototype.openSrchBox=function(){this.helper.presentPopUp(a.a,"list-search-popup","")},n.prototype.loadLogin=function(){return o.b(this,void 0,void 0,(function(){return o.e(this,(function(n){switch(n.label){case 0:return[4,this.helper.presentPopUp(r.a,"","")];case 1:return n.sent(),[2]}}))}))},n}(),s=function(){return function(){}}(),p=t("pMnS"),b=t("MKJQ"),d=t("jy/b"),g=t("Ip0R"),f=t("ZYCi"),h=e.pb({encapsulation:0,styles:[["ul[_ngcontent-%COMP%]{list-style-type:none;margin:0;padding:0;overflow:hidden}li[_ngcontent-%COMP%]{float:left}li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:block;color:#fff;text-align:center;padding:16px;text-decoration:none}li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#111}li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:target{color:#666}.map[_ngcontent-%COMP%]{position:absolute;height:100%;width:100%;background-color:transparent;opacity:0;-webkit-transition:opacity 150ms ease-in;transition:opacity 150ms ease-in}.map.visible[_ngcontent-%COMP%]{opacity:1}"]],data:{}});function v(n){return e.Lb(0,[(n()(),e.rb(0,0,null,null,2,"span",[["slot","end"]],null,null,null,null,null)),(n()(),e.rb(1,0,null,null,0,"img",[["src","./../../../assets/srchBtn.svg"],["style","vertical-align: middle;margin-right: 15px;"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.openSrchBox()&&e),e}),null,null)),(n()(),e.rb(2,0,null,null,0,"img",[["src","../../../assets/userIcon.svg"],["style","vertical-align: middle;"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.loadLogin()&&e),e}),null,null))],null,null)}function m(n){return e.Lb(0,[(n()(),e.rb(0,0,null,null,2,"span",[["slot","end"]],null,null,null,null,null)),(n()(),e.rb(1,0,null,null,0,"img",[["src","../../../assets/srchBtn.svg"],["style","vertical-align: middle;margin-right: 15px;"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.openSrchBox()&&e),e}),null,null)),(n()(),e.rb(2,0,null,null,0,"img",[["src","../../../assets/homedshbrdBtn.svg"],["style","vertical-align: middle;"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.gotoDash()&&e),e}),null,null))],null,null)}function y(n){return e.Lb(0,[(n()(),e.rb(0,0,[[1,0],["map",1]],null,0,"div",[["class","map"]],null,null,null,null,null))],null,null)}function k(n){return e.Lb(0,[(n()(),e.rb(0,0,null,null,2,"div",[["class","ion-text-center ion-padding"],["style","margin-top: 50px;"]],null,null,null,null,null)),(n()(),e.rb(1,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),e.Jb(-1,null,[" There are no Locations to show "]))],null,null)}function w(n){return e.Lb(0,[e.Hb(671088640,1,{mapElement:0}),(n()(),e.rb(1,0,null,null,14,"ion-header",[["class","ion-no-border"],["mode","ios"]],null,null,null,b.ub,b.s)),e.qb(2,49152,null,0,d.C,[e.h,e.k,e.y],{mode:[0,"mode"]},null),(n()(),e.rb(3,0,null,0,12,"ion-toolbar",[["class","ion-padding-top ion-padding-start ion-padding-end"],["mode","ios"],["style","border: 0px; --background: #fff; --border-style: none"]],null,null,null,b.dc,b.bb)),e.qb(4,49152,null,0,d.Ab,[e.h,e.k,e.y],{mode:[0,"mode"]},null),(n()(),e.rb(5,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,b.hb,b.f)),e.qb(6,49152,null,0,d.m,[e.h,e.k,e.y],null,null),(n()(),e.rb(7,0,null,0,2,"ion-back-button",[["defaultHref","/archive"],["icon","arrow-back-outline"],["style","--color: #181B23;"],["text",""]],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==e.Db(n,9).onClick(t)&&o),o}),b.eb,b.c)),e.qb(8,49152,null,0,d.h,[e.h,e.k,e.y],{defaultHref:[0,"defaultHref"],icon:[1,"icon"],text:[2,"text"]},null),e.qb(9,16384,null,0,d.i,[[2,d.gb],d.Hb,d.e],{defaultHref:[0,"defaultHref"]},null),(n()(),e.rb(10,0,null,0,1,"ion-title",[],null,null,null,b.bc,b.Z)),e.qb(11,49152,null,0,d.yb,[e.h,e.k,e.y],null,null),(n()(),e.gb(16777216,null,0,1,null,v)),e.qb(13,16384,null,0,g.k,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,0,1,null,m)),e.qb(15,16384,null,0,g.k,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(n()(),e.rb(16,0,null,null,5,"ion-content",[],null,null,null,b.ob,b.m)),e.qb(17,49152,null,0,d.v,[e.h,e.k,e.y],null,null),(n()(),e.gb(16777216,null,0,1,null,y)),e.qb(19,16384,null,0,g.k,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,0,1,null,k)),e.qb(21,16384,null,0,g.k,[e.N,e.K],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,2,0,"ios"),n(l,4,0,"ios"),n(l,8,0,"/archive","arrow-back-outline",""),n(l,9,0,"/archive"),n(l,13,0,!t.userData),n(l,15,0,t.userData),n(l,19,0,t.locations.length>0),n(l,21,0,0==t.locations.length)}),null)}function C(n){return e.Lb(0,[(n()(),e.rb(0,0,null,null,1,"app-listinglocation",[],null,null,null,w,h)),e.qb(1,4308992,null,0,c,[e.C,u.a,i.a,f.n,f.a],null,null)],(function(n,l){n(l,1,0)}),null)}var B=e.nb("app-listinglocation",c,C,{},{},[]),x=t("gIcY"),M=t("7SfG"),P=t("j1ZV");t.d(l,"ListinglocationPageModuleNgFactory",(function(){return I}));var I=e.ob(s,[],(function(n){return e.Ab([e.Bb(512,e.j,e.Z,[[8,[p.a,B]],[3,e.j],e.w]),e.Bb(4608,g.m,g.l,[e.t,[2,g.z]]),e.Bb(4608,x.w,x.w,[]),e.Bb(4608,d.c,d.c,[e.y,e.g]),e.Bb(4608,d.Gb,d.Gb,[d.c,e.j,e.q]),e.Bb(4608,d.Kb,d.Kb,[d.c,e.j,e.q]),e.Bb(1073742336,g.c,g.c,[]),e.Bb(1073742336,x.v,x.v,[]),e.Bb(1073742336,x.j,x.j,[]),e.Bb(1073742336,d.Cb,d.Cb,[]),e.Bb(1073742336,f.p,f.p,[[2,f.u],[2,f.n]]),e.Bb(1073742336,M.b,M.b,[]),e.Bb(1073742336,P.a,P.a,[]),e.Bb(1073742336,s,s,[]),e.Bb(1024,f.l,(function(){return[[{path:"",component:c}]]}),[])])}))},j1ZV:function(n,l,t){"use strict";t.d(l,"a",(function(){return e}));var e=function(){return function(){}}()}}]);