(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{z0lq:function(o,e,t){"use strict";t.r(e),t.d(e,"ion_popover",(function(){return f}));var i=t("mrSG"),r=t("Yw5A"),n=t("FA9k"),p=(t("Uxh4"),t("mpam")),a=t("3APN"),s=(t("tpS5"),t("8x4w")),c=t("3N3h"),l=t("tFde"),d=function(o,e){var t="top",i="left",r=o.querySelector(".popover-content"),n=r.getBoundingClientRect(),a=n.width,s=n.height,c=o.ownerDocument.defaultView.innerWidth,l=o.ownerDocument.defaultView.innerHeight,d=e&&e.target&&e.target.getBoundingClientRect(),v=null!=d&&"top"in d?d.top:l/2-s/2,b=null!=d&&"left"in d?d.left:c/2,m=d&&d.width||0,f=d&&d.height||0,u=o.querySelector(".popover-arrow"),x=u.getBoundingClientRect(),g=x.width,w=x.height;null==d&&(u.style.display="none");var y={top:v+f,left:b+m/2-g/2},j={top:v+f+(w-1),left:b+m/2-a/2},k=!1,O=!1;j.left<h+25?(k=!0,j.left=h):a+h+j.left+25>c&&(O=!0,j.left=c-a-h,i="right"),v+f+s>l&&v-s>0?(y.top=v-(w+1),j.top=v-s-(w-1),o.className=o.className+" popover-bottom",t="bottom"):v+f+s>l&&(r.style.bottom=h+"%"),u.style.top=y.top+"px",u.style.left=y.left+"px",r.style.top=j.top+"px",r.style.left=j.left+"px",k&&(r.style.left="calc("+j.left+"px + var(--ion-safe-area-left, 0px))"),O&&(r.style.left="calc("+j.left+"px - var(--ion-safe-area-right, 0px))"),r.style.transformOrigin=t+" "+i;var D=Object(p.a)(),P=Object(p.a)(),E=Object(p.a)();return P.addElement(o.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),E.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),D.addElement(o).easing("ease").duration(100).addAnimation([P,E])},h=5,v=function(o){var e=Object(p.a)(),t=Object(p.a)(),i=Object(p.a)();return t.addElement(o.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),e.addElement(o).easing("ease").duration(500).addAnimation([t,i])},b=function(o,e){var t=o.ownerDocument,i="rtl"===t.dir,r="top",n=i?"right":"left",a=o.querySelector(".popover-content"),s=a.getBoundingClientRect(),c=s.width,l=s.height,d=t.defaultView.innerWidth,h=t.defaultView.innerHeight,v=e&&e.target&&e.target.getBoundingClientRect(),b=null!=v&&"bottom"in v?v.bottom:h/2-l/2,m=v&&v.height||0,f={top:b,left:null!=v&&"left"in v?i?v.left-c+v.width:v.left:d/2-c/2};f.left<12?(f.left=12,n="left"):c+12+f.left>d&&(f.left=d-c-12,n="right"),b+m+l>h&&b-l>0?(f.top=b-l-m,o.className=o.className+" popover-bottom",r="bottom"):b+m+l>h&&(a.style.bottom="12px");var u=Object(p.a)(),x=Object(p.a)(),g=Object(p.a)(),w=Object(p.a)(),y=Object(p.a)();return x.addElement(o.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),g.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),w.addElement(a).beforeStyles({top:f.top+"px",left:f.left+"px","transform-origin":r+" "+n}).fromTo("transform","scale(0.001)","scale(1)"),y.addElement(o.querySelector(".popover-viewport")).fromTo("opacity",.01,1),u.addElement(o).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).addAnimation([x,g,w,y])},m=function(o){var e=Object(p.a)(),t=Object(p.a)(),i=Object(p.a)();return t.addElement(o.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),e.addElement(o).easing("ease").duration(500).addAnimation([t,i])},f=function(){function o(o){var e=this;Object(r.l)(this,o),this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onDismiss=function(o){o.stopPropagation(),o.preventDefault(),e.dismiss()},this.onBackdropTap=function(){e.dismiss(void 0,s.a)},this.onLifecycle=function(o){var t=e.usersElement,i=u[o.type];if(t&&i){var r=new CustomEvent(i,{bubbles:!1,cancelable:!1,detail:o.detail});t.dispatchEvent(r)}},Object(s.e)(this.el),this.didPresent=Object(r.e)(this,"ionPopoverDidPresent",7),this.willPresent=Object(r.e)(this,"ionPopoverWillPresent",7),this.willDismiss=Object(r.e)(this,"ionPopoverWillDismiss",7),this.didDismiss=Object(r.e)(this,"ionPopoverDidDismiss",7)}return o.prototype.present=function(){return Object(i.b)(this,void 0,void 0,(function(){var o,e,t;return Object(i.e)(this,(function(i){switch(i.label){case 0:if(this.presented)return[2];if(!(o=this.el.querySelector(".popover-content")))throw new Error("container is undefined");return e=Object.assign(Object.assign({},this.componentProps),{popover:this.el}),t=this,[4,Object(l.a)(this.delegate,o,this.component,["popover-viewport",this.el["s-sc"]],e)];case 1:return t.usersElement=i.sent(),[4,Object(a.f)(this.usersElement)];case 2:return i.sent(),[2,Object(s.f)(this,"popoverEnter",d,b,this.event)]}}))}))},o.prototype.dismiss=function(o,e){return Object(i.b)(this,void 0,void 0,(function(){var t;return Object(i.e)(this,(function(i){switch(i.label){case 0:return[4,Object(s.g)(this,o,e,"popoverLeave",v,m,this.event)];case 1:return(t=i.sent())?[4,Object(l.b)(this.delegate,this.usersElement)]:[3,3];case 2:i.sent(),i.label=3;case 3:return[2,t]}}))}))},o.prototype.onDidDismiss=function(){return Object(s.h)(this.el,"ionPopoverDidDismiss")},o.prototype.onWillDismiss=function(){return Object(s.h)(this.el,"ionPopoverWillDismiss")},o.prototype.render=function(){var o,e=Object(n.b)(this),t=this.onLifecycle;return Object(r.j)(r.b,{"aria-modal":"true","no-router":!0,tabindex:"-1",style:{zIndex:""+(2e4+this.overlayIndex)},class:Object.assign(Object.assign({},Object(c.b)(this.cssClass)),(o={},o[e]=!0,o["popover-translucent"]=this.translucent,o)),onIonPopoverDidPresent:t,onIonPopoverWillPresent:t,onIonPopoverWillDismiss:t,onIonPopoverDidDismiss:t,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap},Object(r.j)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),Object(r.j)("div",{class:"popover-wrapper"},Object(r.j)("div",{class:"popover-arrow"}),Object(r.j)("div",{class:"popover-content"})))},Object.defineProperty(o.prototype,"el",{get:function(){return Object(r.g)(this)},enumerable:!1,configurable:!0}),o}(),u={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"};f.style={ios:'.sc-ion-popover-ios-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios::after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl].sc-ion-popover-ios .popover-arrow.sc-ion-popover-ios::after,[dir=rtl].sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after,[dir=rtl] .sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{top:-6px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios,.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}',md:".sc-ion-popover-md-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-md-h{display:none}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-md-h{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content.sc-ion-popover-md{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl].sc-ion-popover-md .popover-content.sc-ion-popover-md,[dir=rtl].sc-ion-popover-md-h .popover-content.sc-ion-popover-md,[dir=rtl] .sc-ion-popover-md-h .popover-content.sc-ion-popover-md{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport.sc-ion-popover-md{-webkit-transition-delay:100ms;transition-delay:100ms}"}}}]);