console.log("def:debug_start_param"),define(["cbui_api","@/../../debug/titlebar_menu"],function(a,b){var c,d;return d=void 0,c=window.framework_ready,window.framework_ready=function(a){d=a,c.apply(this,arguments)},b.addMenu({id:"showStartParam",title:"P",callback:function(){return alert(JSON.stringify(d,null,"  "))}})});