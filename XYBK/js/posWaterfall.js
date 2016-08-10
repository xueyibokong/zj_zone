/**
 * 替换字符串中的字段.
 * @param {String} str 模版字符串
 * @param {Object} o json data
 * @param {RegExp} [regexp] 匹配字符串的正则表达式
 * @return {string}
 */
String.prototype.templetSubstitute = function(json,RegExp){
	return this.replace(RegExp||/\\?\{([^{}]+)\}/g,function(match,name){
		return (json[name]===undefined) ? '' : json[name];
	});
};
//console.log("i am {name}".templetSubstitute({name:'Rock'}));


/*
 * @ name 						json合并
 * @ param obj1，obj2			接收两个个json参数
 * 
 * 	 函数返回obj1，是把obj2中覆盖obj1中的键值并把obj2新键值追加到obj1中
 * 
 * */
function extend (obj1,obj2){
	for(x in obj1){
		for(z in obj2){
			if(x == z){
				obj1[x] = obj2[z];
			}else {
				obj1[z] = obj2[z];
			}
		}
	}
	return obj1;
}
/*
 * 监听页面滚动方向scroll事件
 */
window.scrollDir = function (up,down,obj){
	var objc = obj || window;
	var up = up || function(){},down = down || function(){};
	var a = "";
	objc.onscroll = function(){
		if(a < this.scrollTop){
			up();
		}else{
			down();
		}
		a = this.scrollTop;
	}
}
/* mousewheel 事件
 * @ name 							【addEvent】事件添加 做了滚动事件兼容处理
 * @ param el, type, fn, capture		【el：dom对象，type：事件类型，fn事件执行函数，capture：是否冒泡】  		
 * 
 * */
window.addEvent = (function() {
    var _eventCompat = function(event) {
        var type = event.type;
        if (type == 'DOMMouseScroll' || type == 'mousewheel') {
            event.delta = (event.wheelDelta) ? event.wheelDelta : -(event.detail || 0) * 3;
        };
        if(event.delta < 0){
        		event.direction = "up";
        }else if(event.delta > 0){
        		event.direction = "down";
        }else if(Math.abs(event.delta) == 0 || Math.abs(event.delta) == 3){
        		event.direction = "none";
        };
        if (event.srcElement && !event.target) {
            event.target = event.srcElement;    
        };
        if (!event.preventDefault && event.returnValue !== undefined) {
            event.preventDefault = function() {
                event.returnValue = false;
            };
        };
        return event;
    };
    /* 事件添加兼容 */
    if (window.addEventListener) {
        return function(el, type, fn, capture) {
            if (type === "mousewheel" && document.mozHidden !== undefined) {
                type = "DOMMouseScroll";
            };
            el.addEventListener(type, function(event) {
                fn.call(this, _eventCompat(event));
            }, capture || false);
        };
    } else if (window.attachEvent) {
        return function(el, type, fn, capture) {
            el.attachEvent("on" + type, function(event) {
                event = event || window.event;
                fn.call(el, _eventCompat(event));    
            });
        };
    };
    return function() {};    
})();
/*-------------------------------分割线一下为瀑布流主函数，以上为支持函数----------------------------------*/
/* 
 * @ waterfall 瀑布流函数
 * 
 * @ param 
 *   @ option1 = {
 * 		vessel   : ".waterfall",    			瀑布流容器
		column   : "4",						瀑布列数
		space    : "15px",					列间隔
 *   };
 * 
 * 	@option2 = {
 * 		data     : 	data,					需要增加的数据
		elements :  "<div>"
					+	"<img style='width:100%;' src='{uurl}'>"
					+	"<span>{name}</span>"
					+"</div>"				元素块中的DOM
 * 	}
 * 
 * */
function waterfall (){
	var args = arguments;
	// 请求中开关【防止滚动造成多次的数据请求】
	var ajaxFlag = true;
	// 数据请求及追加element的回调函数【全局化是为了在主函数内部默认触发一次数据请求】
	var ajaxCallback = function(){};
	//初始化第一个参数
	var option1 = {
		vessel   : ".waterfall",
		column   : "4",
		space    : "15px",
	};
	//合并替换第一个参数自定义值
	args = extend(option1,args);
	var arr = [];//存放每一列的父元素，在新添加元素时需要判断向数组中元素高度最小值的那一列追加
	//【内部函数】重新整理
	_rearrangement = function(posArgs){		//  发音:/riə'rendʒmənt/
		//样式调整
		$(args.vessel).css({
			"padding-right"	: args.space
		});
		//以下循环初始化arr
		for (var i = 0; i < posArgs.column; i++){
			//创建column元素
			var columnDiv = $('<div class="column"></div>')
			columnDiv.css({
				"width" 			: 100/args.column + "%",
				"padding-left"	: args.space
			});
			columnDiv.attr("num",i)
			columnDiv.appendTo(args.vessel);
			arr.push(columnDiv);
		};
		console.log(arr)
	};
	_rearrangement(args);
	//【内部函数】获取高度最低列
	_getLowestColumn = function(){
		arr.sort(function(a,b){
			return a.height() - b.height();
		})
		console.log(arr);
	}
	
	
	
	//【外部函数】新增元素
	this.addContent = function(posArgs){
		console.log(posArgs.elements);
		for (var i = 0; i < posArgs.data.length; i++) {
			 
			$(posArgs.elements.templetSubstitute(posArgs.data[i])).appendTo(arr[0]);
			_getLowestColumn();
		}
		ajaxFlag = true;
	};
	//【外部函数】滚动判断
	this.scrollAdd = function(callback){
		callback();
		var thetimeout;
		window.addEvent($(args.vessel).get(0),"mousewheel",function(e){
			console.log($(args.vessel).scrollTop())
			if(ajaxFlag && e.direction == "up" && ($(args.vessel).scrollTop() + $(args.vessel).height() >= ($(args.vessel).get(0).scrollHeight) - 35)){
				callback();
				//这里利用计时器是防止数据请求失败后（ajaxFlag开关）未打开而导致页面滚动再也无法发送请求的；
				ajaxFlag = false;
				clearTimeout(thetimeout);
				thetimeout = setTimeout(function(){
					ajaxFlag = true;
				},2000);
			}
		});
	};
	
};