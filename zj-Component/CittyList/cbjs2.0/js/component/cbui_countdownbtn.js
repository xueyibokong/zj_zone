console.log("def:component_countdown"),define(["cbui_core"],function(a){var b=a.Fn,c=a.Component,d=a.Template;c.CountdownBtn=c.Button.extend({initialize:function(a){this._super(a),this.time=b.getTypeVal("Finite",parseInt(this.$el.data("time")),60),this.countdownTemplate=d.obtainTemplate(this.$el.data("countdown-template"),"请稍候([%=data.countdown%])"),this.normalText=this.$el.val(),b.bindFunctions(this,"getCountdownText","_doCountdown");var c=this.model.countdown>0;c&&setTimeout(this._doCountdown,0)},_doCountdown:function(){if(this.model.countdown-->0){var a=this.model.countdown;this.$el.val(this.getCountdownText(a));var b=a>0;this.setEnable(!b),setTimeout(this._doCountdown,1e3)}},onClick:function(a){_.isFunction(this.onCountdown)&&this.onCountdown(a),this.model.countdown=this.time+1,setTimeout(this._doCountdown,0)},getCountdownText:function(a){var b;return b=a>0?this.countdownTemplate({countdown:this.model.countdown}):this.normalText,b},reset:function(){this.model.countdown=0}})});