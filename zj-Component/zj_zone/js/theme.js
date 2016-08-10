$(function(){
    var body = $(".outer-body");
    var bodyBox = $(".body-box");
    /*
    * 类型1
    */
    $(".body-tab-btn.btn-one").click(function(){
        if($(this).hasClass("body-tab-btn-down")){
            //do something[排版还原时所作操作]
            returnType1 ($(this));
        }else {
            //do something[排版打开时所作操作]
            //在类型1呼出（前）需先还原类型2
            returnType2 ($(".body-tab-btn.btn-two"));
            typeset1 ($(this));

        }
    });

    //排版一函数
    function typeset1 (that){
        bodyBox.addClass("arrange");
        that.addClass("body-tab-btn-down");

        body.css({"overflow-x":"auto"});
    }
    //排版1还原函数
    function returnType1 (that){
        bodyBox.removeClass("arrange");
        that.removeClass("body-tab-btn-down");

        body.css({"overflow-x":"hidden"});
    }
    /*
    * 类型2
    */
    $(".body-tab-btn.btn-two").click(function(){
        if($(this).hasClass("body-tab-btn-down")){
            //do something[排版还原时所作操作]
            returnType2 ($(this));
        }else {
            //do something[排版打开时所作操作]
            //在类型2呼出（前）需先还原类型1
            returnType1 ($(".body-tab-btn.btn-one"));
            typeset2 ($(this));

        }
    });
    //排版2函数
    function typeset2 (that){
        bodyBox.addClass("pile-on");
        that.addClass("body-tab-btn-down")

        body.css({"overflow-x":"auto"});
    }
    //排版2还原函数
    function returnType2 (that){
        bodyBox.removeClass("pile-on");
        that.removeClass("body-tab-btn-down")

        body.css({"overflow-x":"hidden"});
    }
    //排版3函数
    function typeset3 (){

        body.css({"overflow-x":"auto"});
    }
    //排版3还原函数
    function returnType3 (){

        body.css({"overflow-x":"hidden"});
    }




    //监听过度事件的兼容函数  transiion
    var transitionEvent = whichTransitionEvent();//监听
    function whichTransitionEvent(){
        var t;
        var el = document.createElement('fakeelement');
        var transitions = {
          'transition':'transitionend',
          'OTransition':'oTransitionEnd',
          'MozTransition':'transitionend',
          'WebkitTransition':'webkitTransitionEnd',
          'MsTransition':'msTransitionEnd'
        }

        for(t in transitions){
            if( el.style[t] !== undefined ){
                return transitions[t];
            }
        }
    }

    //监听动画事件的兼容函数  animation
    var animationEvent = whichAnimationEvent();//监听
    function whichAnimationEvent(){
        var a;
        var el = document.createElement('fakeelement');
        var animations = {
          'animation':'animationend',
          'OAnimation':'oAnimationend',
          'MozTransition':'mozAnimationEnd',
          'WebkitAnimation':'webkitAnimationEnd',
          'MsAnimation':'msAnimationEnd'
        }

        for(a in animations){
            if( el.style[a] !== undefined ){
                return animations[a];
            }
        }
    }

})
