(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{"5Hvm":function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{}var o=u("pMnS"),i=u("MKJQ"),s=u("sZkV"),r=u("SVse"),b=u("mrSG"),a=u("92Lm"),c=u("flj8"),h=u("ej43"),p=u("9B/o");u("zBdl");class d{constructor(l,n,u,t,e){this.inApp=l,this.route=n,this.helper=u,this.api=t,this.accountservice=e,this.EventAttend={eID:"",eUID:"",notGoing:""},this.initialMapLoad=!0,this.catsix={initialSlide:0,slidesPerView:3,spaceBetween:5,loop:!1,centeredSlides:!1},this.eventId=this.route.snapshot.paramMap.get("id"),this.getLoginData()}ngAfterViewInit(){}ngOnInit(){}getLoginData(){this.accountservice.watchStorage().subscribe(l=>{l?(this.userData=l,this.getEventDetails(this.eventId,this.userData.userData.ID)):this.getEventDetails(this.eventId,"id")})}getEventDetails(l,n){this.helper.showLoading("loading"),this.api.getData(`wp-json/get_event_details/v1/data/${l}/${n}`).subscribe(l=>{console.log(l),this.eventResp=l,this.helper.dismissLoading()})}openLink(l){l?this.inApp.create(l,"_system"):this.helper.showAlert("URL not avaiable","Error")}attendEvent(l,n){if(console.log(n),this.userData){let u;this.EventAttend.eID=l,this.EventAttend.eUID=this.userData.userData.data.ID;let t=[];Array.isArray(n)||(t.push(Object.values(n)),u=t[0].indexOf(this.userData.userData.data.ID)),this.EventAttend.notGoing=-1==u?"":"yes",this.api.postData("wp-json/listing_event_attend/v1",this.EventAttend).subscribe(l=>b.a(this,void 0,void 0,(function*(){this.eventResp=yield l.events,this.getEventDetails(this.eventId,this.userData?this.userData.userData.ID:"id")})))}else this.helper.showAlert("Kindly Login","Error")}}var g=u("iInd"),f=t.pb({encapsulation:0,styles:[["h4[_ngcontent-%COMP%]{font-size:16px;color:#434a5e;text-transform:none;line-height:32px}ion-button[_ngcontent-%COMP%]{text-transform:none}ion-card[_ngcontent-%COMP%]{width:100%;box-shadow:none}.loc-map[_ngcontent-%COMP%]{height:120px;width:100%;border-radius:10px}ion-button.btn-going-status[_ngcontent-%COMP%]{--background:#40B9FF;--box-shadow:0 3px 9px 0px #40B9FF59;color:#fff;min-height:44px;font-size:13px;--border-radius:6px;margin:0 13px 0 12px}ion-button.btn-social-link[_ngcontent-%COMP%]{--background:#F88623;--box-shadow:0 3px 9px 0px #F886235E;color:#fff;min-height:44px;font-size:13px;--border-radius:6px;margin:20px 13px 0 12px}ion-avatar[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:50px;height:50px;margin-left:auto;margin-right:auto}"]],data:{}});function v(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,0,"img",[["style","width: 100%;border-top-right-radius: 10px;\n    border-top-left-radius: 10px;"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,n.component.eventResp.event_img_url)}))}function y(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,0,"img",[["src","../../../assets/placeholder.png"],["style","border-top-right-radius: 10px;\n    border-top-left-radius: 10px;"]],null,null,null,null,null))],null,null)}function x(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,10,"ion-slide",[["style","box-shadow: 0 5px 50px 0px #8F89C624;"]],null,null,null,i.Sb,i.Q)),t.qb(1,49152,null,0,s.ob,[t.h,t.k,t.y],null,null),(l()(),t.rb(2,0,null,0,8,"ion-card",[],null,null,null,i.lb,i.g)),t.qb(3,49152,null,0,s.n,[t.h,t.k,t.y],null,null),(l()(),t.rb(4,0,null,0,3,"ion-avatar",[["style","display: block;margin-left: auto;margin-right: auto;"]],null,null,null,i.db,i.b)),t.qb(5,49152,null,0,s.g,[t.h,t.k,t.y],null,null),(l()(),t.rb(6,0,null,0,1,"ion-img",[],null,null,null,i.wb,i.u)),t.qb(7,49152,null,0,s.E,[t.h,t.k,t.y],{src:[0,"src"]},null),(l()(),t.rb(8,0,null,0,2,"ion-card-subtitle",[["style","color: #7481A5;font-weight: 400;font-size: 13px;"]],null,null,null,i.kb,i.j)),t.qb(9,49152,null,0,s.q,[t.h,t.k,t.y],null,null),(l()(),t.Jb(10,0,[""," "]))],(function(l,n){l(n,7,0,n.context.$implicit.attendeeImg)}),(function(l,n){l(n,10,0,n.context.$implicit.name)}))}function k(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,123,"ion-content",[],null,null,null,i.ob,i.m)),t.qb(1,49152,null,0,s.v,[t.h,t.k,t.y],null,null),(l()(),t.rb(2,0,null,0,99,"div",[["class","ion-margin"],["style","border-radius: 10px;box-shadow: 0 5px 9px 10px #8f89c624;"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,v)),t.qb(4,16384,null,0,r.k,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,y)),t.qb(6,16384,null,0,r.k,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(7,0,null,null,94,"div",[],null,null,null,null,null)),(l()(),t.rb(8,0,null,null,30,"ion-grid",[["style","--ion-grid-padding: 0px !important;"]],null,null,null,i.tb,i.r)),t.qb(9,49152,null,0,s.B,[t.h,t.k,t.y],null,null),(l()(),t.rb(10,0,null,0,28,"ion-row",[["style","padding-left: 8px;"]],null,null,null,i.Mb,i.K)),t.qb(11,49152,null,0,s.hb,[t.h,t.k,t.y],null,null),(l()(),t.rb(12,0,null,0,13,"ion-col",[["size","2.5"]],null,null,null,i.nb,i.l)),t.qb(13,49152,null,0,s.u,[t.h,t.k,t.y],{size:[0,"size"]},null),(l()(),t.rb(14,0,null,0,11,"ion-grid",[["style","border: 1px solid #7481A5;\n          --ion-grid-padding: 5px;\n          text-align: center;\n          border-radius: 10px;"]],null,null,null,i.tb,i.r)),t.qb(15,49152,null,0,s.B,[t.h,t.k,t.y],null,null),(l()(),t.rb(16,0,null,0,4,"ion-row",[["class","ion-text-center"],["style","font-size: 23px; font-weight:600;color: #675DDD;"]],null,null,null,i.Mb,i.K)),t.qb(17,49152,null,0,s.hb,[t.h,t.k,t.y],null,null),(l()(),t.rb(18,0,null,0,2,"ion-col",[["class","ion-no-padding"],["size","12"]],null,null,null,i.nb,i.l)),t.qb(19,49152,null,0,s.u,[t.h,t.k,t.y],{size:[0,"size"]},null),(l()(),t.Jb(20,0,["",""])),(l()(),t.rb(21,0,null,0,4,"ion-row",[["class","ion-text-center"],["style","color: #7481A5;font-size: 14px;font-weight: 600;"]],null,null,null,i.Mb,i.K)),t.qb(22,49152,null,0,s.hb,[t.h,t.k,t.y],null,null),(l()(),t.rb(23,0,null,0,2,"ion-col",[["class","ion-no-padding"],["size","12"]],null,null,null,i.nb,i.l)),t.qb(24,49152,null,0,s.u,[t.h,t.k,t.y],{size:[0,"size"]},null),(l()(),t.Jb(25,0,[""," "])),(l()(),t.rb(26,0,null,0,12,"ion-col",[["size","9.5"]],null,null,null,i.nb,i.l)),t.qb(27,49152,null,0,s.u,[t.h,t.k,t.y],{size:[0,"size"]},null),(l()(),t.rb(28,0,null,0,10,"ion-grid",[],null,null,null,i.tb,i.r)),t.qb(29,49152,null,0,s.B,[t.h,t.k,t.y],null,null),(l()(),t.rb(30,0,null,0,2,"ion-row",[["style","font-size: 17px;\n            color: #434A5E;\n            font-weight: 500;"]],null,null,null,i.Mb,i.K)),t.qb(31,49152,null,0,s.hb,[t.h,t.k,t.y],null,null),(l()(),t.Jb(-1,0,[" Join Us "])),(l()(),t.rb(33,0,null,0,2,"ion-row",[["style","font-size: 14px;\n            color: #7481A5;\n            font-weight: 400;"]],null,null,null,i.Mb,i.K)),t.qb(34,49152,null,0,s.hb,[t.h,t.k,t.y],null,null),(l()(),t.Jb(35,0,["",""])),(l()(),t.rb(36,0,null,0,2,"ion-row",[["style","font-size: 13px;\n            color: #B4BBCE;\n            font-weight: 400;"]],null,null,null,i.Mb,i.K)),t.qb(37,49152,null,0,s.hb,[t.h,t.k,t.y],null,null),(l()(),t.Jb(38,0,["Hosted by : ",""])),(l()(),t.rb(39,0,null,null,15,"ion-grid",[],null,null,null,i.tb,i.r)),t.qb(40,49152,null,0,s.B,[t.h,t.k,t.y],null,null),(l()(),t.rb(41,0,null,0,13,"ion-row",[["style","  color: #7481A5;font-size: 13px;"]],null,null,null,i.Mb,i.K)),t.qb(42,49152,null,0,s.hb,[t.h,t.k,t.y],null,null),(l()(),t.rb(43,0,null,0,2,"ion-col",[["style","text-align: center;"]],null,null,null,i.nb,i.l)),t.qb(44,49152,null,0,s.u,[t.h,t.k,t.y],null,null),(l()(),t.Jb(-1,0,["Share:"])),(l()(),t.rb(46,0,null,0,2,"ion-col",[["style","text-align: start;"]],null,null,null,i.nb,i.l)),t.qb(47,49152,null,0,s.u,[t.h,t.k,t.y],null,null),(l()(),t.rb(48,0,null,0,0,"img",[["src","../../../assets/twiconEvnt.svg"]],null,null,null,null,null)),(l()(),t.rb(49,0,null,0,2,"ion-col",[["style","text-align: start;"]],null,null,null,i.nb,i.l)),t.qb(50,49152,null,0,s.u,[t.h,t.k,t.y],null,null),(l()(),t.rb(51,0,null,0,0,"img",[["src","../../../assets/fbicnEvntDet.svg"]],null,null,null,null,null)),(l()(),t.rb(52,0,null,0,2,"ion-col",[["style","text-align: start;"]],null,null,null,i.nb,i.l)),t.qb(53,49152,null,0,s.u,[t.h,t.k,t.y],null,null),(l()(),t.rb(54,0,null,0,0,"img",[["src","../../../assets/lnkedEvntDet.svg"]],null,null,null,null,null)),(l()(),t.rb(55,0,null,null,0,"div",[["class","loc-map"],["id","map1"]],null,null,null,null,null)),(l()(),t.rb(56,0,null,null,15,"ion-grid",[],null,null,null,i.tb,i.r)),t.qb(57,49152,null,0,s.B,[t.h,t.k,t.y],null,null),(l()(),t.rb(58,0,null,0,7,"ion-row",[],null,null,null,i.Mb,i.K)),t.qb(59,49152,null,0,s.hb,[t.h,t.k,t.y],null,null),(l()(),t.rb(60,0,null,0,2,"ion-col",[["offset","1"],["size","1"]],null,null,null,i.nb,i.l)),t.qb(61,49152,null,0,s.u,[t.h,t.k,t.y],{offset:[0,"offset"],size:[1,"size"]},null),(l()(),t.rb(62,0,null,0,0,"img",[["src","../../../assets/locEvnt.svg"]],null,null,null,null,null)),(l()(),t.rb(63,0,null,0,2,"ion-col",[["size","10"],["style","color:#7481A5; font-size:13px"]],null,null,null,i.nb,i.l)),t.qb(64,49152,null,0,s.u,[t.h,t.k,t.y],{size:[0,"size"]},null),(l()(),t.Jb(65,0,["",""])),(l()(),t.rb(66,0,null,0,5,"ion-row",[],null,null,null,i.Mb,i.K)),t.qb(67,49152,null,0,s.hb,[t.h,t.k,t.y],null,null),(l()(),t.rb(68,0,null,0,3,"ion-col",[["offset","2"]],null,null,null,i.nb,i.l)),t.qb(69,49152,null,0,s.u,[t.h,t.k,t.y],{offset:[0,"offset"]},null),(l()(),t.rb(70,0,null,0,1,"a",[["style","color: #675DDD; font-size: 13px;font-weight: 500;border-bottom: 1px solid;"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Get Direction"])),(l()(),t.rb(72,0,null,null,14,"ion-grid",[],null,null,null,i.tb,i.r)),t.qb(73,49152,null,0,s.B,[t.h,t.k,t.y],null,null),(l()(),t.rb(74,0,null,0,7,"ion-row",[],null,null,null,i.Mb,i.K)),t.qb(75,49152,null,0,s.hb,[t.h,t.k,t.y],null,null),(l()(),t.rb(76,0,null,0,2,"ion-col",[["offset","1"],["size","1"]],null,null,null,i.nb,i.l)),t.qb(77,49152,null,0,s.u,[t.h,t.k,t.y],{offset:[0,"offset"],size:[1,"size"]},null),(l()(),t.rb(78,0,null,0,0,"img",[["src","../../../assets/timeEvnt.svg"]],null,null,null,null,null)),(l()(),t.rb(79,0,null,0,2,"ion-col",[["size","10"],["style","color:#434A5E; font-size: 13px;font-weight: 500;"]],null,null,null,i.nb,i.l)),t.qb(80,49152,null,0,s.u,[t.h,t.k,t.y],{size:[0,"size"]},null),(l()(),t.Jb(81,0,[" ","-",""])),(l()(),t.rb(82,0,null,0,4,"ion-row",[],null,null,null,i.Mb,i.K)),t.qb(83,49152,null,0,s.hb,[t.h,t.k,t.y],null,null),(l()(),t.rb(84,0,null,0,2,"ion-col",[["offset","2"],["style","color:#7481A5; font-size: 13px"]],null,null,null,i.nb,i.l)),t.qb(85,49152,null,0,s.u,[t.h,t.k,t.y],{offset:[0,"offset"]},null),(l()(),t.Jb(86,0,["",""])),(l()(),t.rb(87,0,null,null,14,"ion-grid",[],null,null,null,i.tb,i.r)),t.qb(88,49152,null,0,s.B,[t.h,t.k,t.y],null,null),(l()(),t.rb(89,0,null,0,7,"ion-row",[],null,null,null,i.Mb,i.K)),t.qb(90,49152,null,0,s.hb,[t.h,t.k,t.y],null,null),(l()(),t.rb(91,0,null,0,2,"ion-col",[["offset","1"],["size","1"]],null,null,null,i.nb,i.l)),t.qb(92,49152,null,0,s.u,[t.h,t.k,t.y],{offset:[0,"offset"],size:[1,"size"]},null),(l()(),t.rb(93,0,null,0,0,"img",[["src","../../../assets/timeEvnt.svg"]],null,null,null,null,null)),(l()(),t.rb(94,0,null,0,2,"ion-col",[["size","10"],["style","color:#434A5E; font-size: 13px;font-weight: 500;"]],null,null,null,i.nb,i.l)),t.qb(95,49152,null,0,s.u,[t.h,t.k,t.y],{size:[0,"size"]},null),(l()(),t.Jb(96,0,[" ","-",""])),(l()(),t.rb(97,0,null,0,4,"ion-row",[],null,null,null,i.Mb,i.K)),t.qb(98,49152,null,0,s.hb,[t.h,t.k,t.y],null,null),(l()(),t.rb(99,0,null,0,2,"ion-col",[["offset","2"],["style","color:#7481A5; font-size: 13px"]],null,null,null,i.nb,i.l)),t.qb(100,49152,null,0,s.u,[t.h,t.k,t.y],{offset:[0,"offset"]},null),(l()(),t.Jb(101,0,["",""])),(l()(),t.rb(102,0,null,0,21,"div",[],null,null,null,null,null)),(l()(),t.rb(103,0,null,null,2,"div",[["class","ion-margin"],["style","margin-top:25px"]],null,null,null,null,null)),(l()(),t.rb(104,0,null,null,1,"p",[["style","color: #7481A5; font-size: 13px; line-height: 18px;"]],null,null,null,null,null)),(l()(),t.Jb(105,null,["",""])),(l()(),t.rb(106,0,null,null,2,"div",[["class","ion-margin"]],null,null,null,null,null)),(l()(),t.rb(107,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),t.Jb(108,null,["Attendees(",")"])),(l()(),t.rb(109,0,null,null,4,"div",[["class","ion-margin"]],null,null,null,null,null)),(l()(),t.rb(110,0,null,null,3,"ion-slides",[],null,null,null,i.Tb,i.R)),t.qb(111,49152,null,0,s.pb,[t.h,t.k,t.y],{options:[0,"options"]},null),(l()(),t.gb(16777216,null,0,1,null,x)),t.qb(113,278528,null,0,r.j,[t.N,t.K,t.r],{ngForOf:[0,"ngForOf"]},null),(l()(),t.rb(114,0,null,null,2,"div",[["class","ion-margin"]],null,null,null,null,null)),(l()(),t.rb(115,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),t.Jb(116,null,["Are you going ? "," Going"])),(l()(),t.rb(117,0,null,null,6,"div",[["class","ion-margin"],["style","margin-top: 40px;"]],null,null,null,null,null)),(l()(),t.rb(118,0,null,null,2,"ion-button",[["class","btn-going-status"],["expand","block"]],null,[[null,"click"]],(function(l,n,u){var t=!0,e=l.component;return"click"===n&&(t=!1!==e.attendEvent(e.eventId,e.eventResp.event_atten_array)&&t),t}),i.gb,i.e)),t.qb(119,49152,null,0,s.l,[t.h,t.k,t.y],{expand:[0,"expand"]},null),(l()(),t.Jb(120,0,[" "," "])),(l()(),t.rb(121,0,null,null,2,"ion-button",[["class","btn-social-link"],["expand","block"]],null,[[null,"click"]],(function(l,n,u){var t=!0,e=l.component;return"click"===n&&(t=!1!==e.openLink(e.eventResp.event_tcket_url)&&t),t}),i.gb,i.e)),t.qb(122,49152,null,0,s.l,[t.h,t.k,t.y],{expand:[0,"expand"]},null),(l()(),t.Jb(123,0,[" Get Tickets From "," "]))],(function(l,n){var u=n.component;l(n,4,0,u.eventResp.event_img_url),l(n,6,0,!u.eventResp.event_img_url),l(n,13,0,"2.5"),l(n,19,0,"12"),l(n,24,0,"12"),l(n,27,0,"9.5"),l(n,61,0,"1","1"),l(n,64,0,"10"),l(n,69,0,"2"),l(n,77,0,"1","1"),l(n,80,0,"10"),l(n,85,0,"2"),l(n,92,0,"1","1"),l(n,95,0,"10"),l(n,100,0,"2"),l(n,111,0,u.catsix),l(n,113,0,u.eventResp.event_attendees),l(n,119,0,"block"),l(n,122,0,"block")}),(function(l,n){var u=n.component;l(n,20,0,u.eventResp.event_month_day),l(n,25,0,u.eventResp.event_mnth),l(n,35,0,u.eventResp.title),l(n,38,0,u.eventResp.hosted_by),l(n,65,0,u.eventResp.event_loc),l(n,81,0,u.eventResp.event_start_time,u.eventResp.evnt_start_day),l(n,86,0,u.eventResp.event_start_date),l(n,96,0,u.eventResp.evnt_end_time,u.eventResp.evnt_end_day),l(n,101,0,u.eventResp.event_end_date),l(n,105,0,u.eventResp.event_desc),l(n,108,0,u.eventResp.total_attendees),l(n,116,0,u.eventResp.total_attendees),l(n,120,0,u.eventResp.evnt_going_status),l(n,123,0,u.eventResp.ticekt_src)}))}function m(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,8,"ion-header",[["class","ion-no-shadow ion-no-border"]],null,null,null,i.ub,i.s)),t.qb(1,49152,null,0,s.C,[t.h,t.k,t.y],null,null),(l()(),t.rb(2,0,null,0,6,"ion-toolbar",[["class","ion-padding-end ion-padding-top"],["style","border: 0px; --background: #fff; --border-style: none"]],null,null,null,i.dc,i.bb)),t.qb(3,49152,null,0,s.Ab,[t.h,t.k,t.y],null,null),(l()(),t.rb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,i.hb,i.f)),t.qb(5,49152,null,0,s.m,[t.h,t.k,t.y],null,null),(l()(),t.rb(6,0,null,0,2,"ion-back-button",[["defaultHref","/home"],["icon","arrow-back-outline"],["style","--color: #000;"],["text",""]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Db(l,8).onClick(u)&&e),e}),i.eb,i.c)),t.qb(7,49152,null,0,s.h,[t.h,t.k,t.y],{defaultHref:[0,"defaultHref"],icon:[1,"icon"],text:[2,"text"]},null),t.qb(8,16384,null,0,s.i,[[2,s.gb],s.Hb,s.e],{defaultHref:[0,"defaultHref"]},null),(l()(),t.gb(16777216,null,null,1,null,k)),t.qb(10,16384,null,0,r.k,[t.N,t.K],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,7,0,"/home","arrow-back-outline",""),l(n,8,0,"/home"),l(n,10,0,u.eventResp)}),null)}function q(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,1,"app-event-detail",[],null,null,null,m,f)),t.qb(1,4308992,null,0,d,[p.a,g.a,a.a,h.a,c.a],null,null)],(function(l,n){l(n,1,0)}),null)}var w=t.nb("app-event-detail",d,q,{},{},[]),z=u("s7LF");class _{}u.d(n,"EventDetailPageModuleNgFactory",(function(){return D}));var D=t.ob(e,[],(function(l){return t.Ab([t.Bb(512,t.j,t.Z,[[8,[o.a,w]],[3,t.j],t.w]),t.Bb(4608,r.m,r.l,[t.t,[2,r.z]]),t.Bb(4608,z.w,z.w,[]),t.Bb(4608,s.c,s.c,[t.y,t.g]),t.Bb(4608,s.Gb,s.Gb,[s.c,t.j,t.q]),t.Bb(4608,s.Kb,s.Kb,[s.c,t.j,t.q]),t.Bb(1073742336,r.c,r.c,[]),t.Bb(1073742336,z.v,z.v,[]),t.Bb(1073742336,z.j,z.j,[]),t.Bb(1073742336,s.Cb,s.Cb,[]),t.Bb(1073742336,g.p,g.p,[[2,g.u],[2,g.n]]),t.Bb(1073742336,_,_,[]),t.Bb(1073742336,e,e,[]),t.Bb(1024,g.l,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);