(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{SXWW:function(n,l,t){"use strict";t.r(l);var o=t("CcnG"),u=function(){return function(){}}(),e=t("pMnS"),i=t("MKJQ"),r=t("jy/b"),c=t("gTw3"),b=t("23JA"),a=t("92Lm"),s=function(){function n(n,l,t){this.geolocation=n,this.nativeGeocoder=l,this.helper=t,this.geoencoderOptions={useLocale:!0,maxResults:5}}return n.prototype.ngOnInit=function(){},n.prototype.getUserLocation=function(){var n=this;this.geolocation.getCurrentPosition().then((function(l){n.nativeGeocoder.reverseGeocode(l.coords.latitude,l.coords.longitude,n.geoencoderOptions).then((function(l){n.helper.showAlert(l[0].locality+", "+l[0].administrativeArea,"Current Location")})).catch((function(n){alert("Error getting location"+JSON.stringify(n))}))}))},n}(),p=o.pb({encapsulation:0,styles:[[""]],data:{}});function f(n){return o.Lb(0,[(n()(),o.rb(0,0,null,null,6,"ion-header",[],null,null,null,i.ub,i.s)),o.qb(1,49152,null,0,r.C,[o.h,o.k,o.y],null,null),(n()(),o.rb(2,0,null,0,4,"ion-toolbar",[],null,null,null,i.dc,i.bb)),o.qb(3,49152,null,0,r.Ab,[o.h,o.k,o.y],null,null),(n()(),o.rb(4,0,null,0,2,"ion-title",[],null,null,null,i.bc,i.Z)),o.qb(5,49152,null,0,r.yb,[o.h,o.k,o.y],null,null),(n()(),o.Jb(-1,0,["listing-current-location"])),(n()(),o.rb(7,0,null,null,6,"ion-content",[],null,null,null,i.ob,i.m)),o.qb(8,49152,null,0,r.v,[o.h,o.k,o.y],null,null),(n()(),o.rb(9,0,null,0,4,"ion-buttons",[],null,null,null,i.hb,i.f)),o.qb(10,49152,null,0,r.m,[o.h,o.k,o.y],null,null),(n()(),o.rb(11,0,null,0,2,"ion-button",[["color","secondary"],["expand","full"]],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.getUserLocation()&&o),o}),i.gb,i.e)),o.qb(12,49152,null,0,r.l,[o.h,o.k,o.y],{color:[0,"color"],expand:[1,"expand"]},null),(n()(),o.Jb(-1,0,["Get locations"]))],(function(n,l){n(l,12,0,"secondary","full")}),null)}function d(n){return o.Lb(0,[(n()(),o.rb(0,0,null,null,1,"app-listing-current-location",[],null,null,null,f,p)),o.qb(1,114688,null,0,s,[c.a,b.a,a.a],null,null)],(function(n,l){n(l,1,0)}),null)}var g=o.nb("app-listing-current-location",s,d,{},{},[]),h=t("Ip0R"),y=t("gIcY"),B=t("ZYCi"),v=function(){return function(){}}();t.d(l,"ListingCurrentLocationPageModuleNgFactory",(function(){return w}));var w=o.ob(u,[],(function(n){return o.Ab([o.Bb(512,o.j,o.Z,[[8,[e.a,g]],[3,o.j],o.w]),o.Bb(4608,h.m,h.l,[o.t,[2,h.z]]),o.Bb(4608,y.w,y.w,[]),o.Bb(4608,r.c,r.c,[o.y,o.g]),o.Bb(4608,r.Gb,r.Gb,[r.c,o.j,o.q]),o.Bb(4608,r.Kb,r.Kb,[r.c,o.j,o.q]),o.Bb(1073742336,h.c,h.c,[]),o.Bb(1073742336,y.v,y.v,[]),o.Bb(1073742336,y.j,y.j,[]),o.Bb(1073742336,r.Cb,r.Cb,[]),o.Bb(1073742336,B.p,B.p,[[2,B.u],[2,B.n]]),o.Bb(1073742336,v,v,[]),o.Bb(1073742336,u,u,[]),o.Bb(1024,B.l,(function(){return[[{path:"",component:s}]]}),[])])}))}}]);