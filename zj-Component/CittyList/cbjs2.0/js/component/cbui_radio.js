console.log("def:component_radio"),define(["cbui_core","component/cbui_icheck"],function(a){var b=a.Component,c=a.Fn;b.Radio=b.ICheck.extend({initialize:function(a){_.defaults(this,{isValueGroup:!1}),a.radioClass=a.radioClass||this.$el.data("skin"),a.radioClass&&(a.radioClass="iradio_"+a.radioClass),this._super(a);var b=this.model;b.mapping.value=c.getTypeVal("String",b.mapping.name,"value")}})});