console.log("def:component_popupwindow"),define(["cbui_core"],function(a){var b=a.Fn,c=a.Component,d=a.Browser,e=b.$,f=function(a){a.preventDefault()};c.PopupWindow=c.Form.extend({initialize:function(a){this._super(a),this.onSubmit=b.getTypeVal("Function",a.onSubmit,this.onSubmit),this.onResult=b.getTypeVal("Function",a.onResult,this.onResult),this.onCancel=b.getTypeVal("Function",a.onCancel,this.onCancel),this.onShow=b.getTypeVal("Function",a.onShow,this.onShow),this.onClose=b.getTypeVal("Function",a.onClose,this.onClose);var c=this;this.$el.addClass("modal"),this.$el.on("hidden.bs.modal",function(){c._onClose(c._result),c.$el.remove(),e(".fw-page-current").off("touchmove",f)}),this.bindEvent("click [data-close-button]",function(){c.close()}),b.bindFunctions(this,"_onBack")},show:function(){e(".fw-page-current").on("touchmove",null,f),d.bindGoBack(this._onBack),delete this._result,this.render(),d.showMask(null,null),e("body").append(),this.$el.modal(),setTimeout(function(){d.hideMask()},300),_.isFunction(this.onShow)&&this.onShow()},close:function(a){this.setResult(a),this.$el.modal("hide")},setResult:function(a){this._result=a},doSubmit:function(a){this.close(a)},_onClose:function(a){_.isUndefined(a)||_.isNull(a)?_.isFunction(this.onCancel)&&this.onCancel():_.isFunction(this.onResult)&&this.onResult(a),_.isFunction(this.onClose)&&this.onClose(a),d.unbindGoBack(this._onBack)},_onBack:function(){this.close(null)}})});