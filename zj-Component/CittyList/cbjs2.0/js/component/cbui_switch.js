console.log("def:component_switch"),define(["cbui_core","libex/bootstrap-switch","css!@/../../css/bootstrap-switch.css"],function(a){var b=a.Fn,c=a.Component;c.Switch=c.Base.extend({initialize:function(a){this._super(a);var c=this.model;c.mapping.value=b.getTypeVal("String",c.mapping.name,"value");var d=this,e={onText:this.$el.data("on-text"),offText:this.$el.data("off-text"),onSwitchChange:function(a,b){d.onSwitch(b,a)?c.setValue(b,{silent:!0}):setTimeout(function(){b=!b,c.setValue(b,{silent:!0}),d["switch"].bootstrapSwitch("state",b,!0)},200)}};this["switch"]=this.$el.bootstrapSwitch(e);var f=d["switch"].bootstrapSwitch("state");_.isUndefined(c.getValue())&&c.setValue(f,{silent:!0}),"absolute"!==this.$el.css("position")&&this.$el.css("position","absolute"),this.$el.closest(".bootstrap-switch").css("width",this.$el.width()+"px")},doRender:function(){return this["switch"].bootstrapSwitch("state",this.model.getValue()),!0},toggle:function(){this.setValue(!this.getValue())},onSwitch:function(a,b){return!0}})});