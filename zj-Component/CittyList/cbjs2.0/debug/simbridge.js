console.log("def:debug_simbridge"),define(["cbui_core","component/cbui_popupwindow","component/cbui_softkeyboard"],function(a){var b,c,d,e,f,g,h,i,j;c=a.Model,b=a.Component,j=a.Template,d=a.Bridge,g=a.Fn,h=g.getLocalStorage();try{e=JSON.parse(h.getItem("fw_SimBridgeDefRetMap"))}catch(k){f=k}(_.isNull(e)||!_.isObject(e))&&(e={}),d.showSimBridgeWindow=function(a,d,h){var i;i=a.act,d=g.getTypeVal("Object",e[i],d),new b.PopupWindow({template:_.template('<div style="width: 100%max-height:100%bottom: 0position: absolutebackground: #fff"> <h1>request:</h1><textarea readonly data-name="request" data-component="Label" style="width: 100%height: 200pxoverflow-y: auto"></textarea> <h1>response:</h1><textarea data-name="data" data-component="Input" style="width: 100%height: 300px"></textarea> <input style="width: 100%" data-submit-button type="button" value="确定"> <div>',j.outerSettings),model:new c.Simple({request:JSON.stringify(a,null," "),data:JSON.stringify(d,null,"  ")}),onResult:function(a){var b;try{b=JSON.parse(a.data),h(b)}catch(c){f=c,alert("--->"+f.message)}}}).show()},window.alert=function(a,c){return new b.PopupWindow({template:_.template('<div style="width: 100%;max-height:100%;bottom: 0;position: absolute;background: #fff"> <h1>alert</h1><textarea readonly style="width: 100%;height: 200px;overflow-y: auto">'+a+'</textarea> <input style="width: 100%" data-submit-button type="button" value="确定"> <div>',j.outerSettings),onShow:function(){var a;a=this,this.onKeyDown=function(b){return 13===b.keyCode||27===b.keyCode?(a.close(),b.preventDefault()):void 0},$(document).on("keydown",this.onKeyDown)},onClose:function(){$(document).off("keydown",this.onKeyDown),g.safeCall(c)}}).show()},window.confirm=function(a,c){return new b.PopupWindow({template:_.template('<div style="width: 100%;bottom: 0;position: absolute;background: #fff"> <h1>alert</h1><textarea readonly style="width: 100%;height: 200px;overflow-y: auto">'+a+'</textarea> <input style="width: 50%" data-submit-button="yes" type="button" value="确定"> <input style="width: 50%" data-submit-button="no" type="button" value="取消"> <div>',j.outerSettings),onSubmit:function(a,b){return{result:"yes"===b}},onShow:function(){var a;a=this,this.onKeyDown=function(b){return 13===b.keyCode||27===b.keyCode?(a.close({result:13===b.keyCode}),b.preventDefault()):void 0},$(document).on("keydown",this.onKeyDown)},onClose:function(a){$(document).off("keydown",this.onKeyDown),g.safeCall(c,a?a.result:!1)}}).show()},d.getSessionState=function(a){setTimeout(function(){var b;return b=window.confirm("模拟已登录请点击确定\n模拟未登录请点击取消。"),a(b?0:1)},0)},d.login=function(a){setTimeout(function(){var b;return b=window.confirm("模拟用户登录..."),b?a():void 0},0)},i=new b.SoftKeyboard,d.showKeyboard=function(a){a.onKeyboardPopup(),i.show(a)},d.hideKeyboard=function(){i.hide()},g.on("bridge:showKeyboard",d.showKeyboard),g.on("bridge:hideKeyboard",d.hideKeyboard)});