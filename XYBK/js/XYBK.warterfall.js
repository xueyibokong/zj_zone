(function(window){
	/*
	 * 监听页面滚动方向scroll事件
	 */
	window.scrollDir = function (obj,up,down){
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
	 * @ name 				瀑布流布局
	 * @ param obj			接收一个json参数具体支持如下
	 * 
	 * 	 Element : 瀑布流容器,
	 * 	 
	 * 	 param   : {
	 *		type 			:  --PS:默认position布局,
	 * 				   			--瀑布流类型【"column"布局（优点：节省浏览器资源，缺点：纵向排列）；"psotion"布局（优点：布局完美支持，兼容性强，缺点：浪费浏览器资源）】
	 *		column  			:  瀑布列数,	 
	 * 		minColumn		:  最小列数,
	 * 		maxColumn		:  最大列数,
	 * 		width : 			:  瀑布流化的元素宽,
	 * 		space   			:  间距,
	 * 		padding			:  容器内边距
	 * 		
	 * 	 }
	 *
	 * 
	 * */
	 function waterFall (){
	 	var that = this;
		var args = arguments;
		//定义默认样式
		var ops = {
			type 		: "position",
			column 		: "3",
			minColumn 	: "1", 
			maxColumn 	: "5",
			columnWidth	: "120px",
			space 		: "10px",
			padding 		: "10px"
		};
		//此类对象上的方法
		that.hasElement = function(){
			/*- 判断构造函数是否传入了容器节点 -*/
			return (args[0] && args[0].nodeType == 1);
		};
		that.waterFallPos = function(posArgs){
			/*- 构造函数提供了定位瀑布流方法 -*/
			if(arguments.length == 0){
				posArgs = args[1];
			};
			posArgs = extend(ops,posArgs);
			wfBox.style.padding = posArgs.padding;
		};
		
		that.waterFallCol = function(posArgs){
			/*- 构造函数提供了column瀑布流方法 -*/
			if(arguments.length == 0){
				posArgs = args[1];
			};
			posArgs = extend(ops,posArgs);
			wfBox.setAttribute("class","column-wf")
			wfBox.style.cssText = '-webkit-column-width:'+posArgs.columnWidth+';-webkit-column-count:'+posArgs.column+';-webkit-column-gap:'+posArgs.space+';-moz-column-count: '+posArgs.column+';padding:'+posArgs.padding+';';
			console.log(posArgs);
		};
	
		that.scrollAdd = function(callback){
			/*- 构造函数提供了滚动添加更多 -*/
			var scrollFlag = 0;
			if(arguments.length == 0){
				return;
			}else{
				var it = this.opes;
				callback(function(data,fnback){
					wfBox.innerHTML = fnback();
					if(it.type == "column"){
						that.waterFallCol();
					}else{
						that.waterFallPos();
					}
				});
				//滚动事件添加
				addEvent(args[0],"mousewheel",function(e){
					if(e.direction == "up"){
						if(scrollFlag == 50){
							callback(function(data,fnback){
								wfBox.innerHTML += fnback();
								//定位布局需要重新计算定位值
								if(it.type == "position"){
									that.waterFallPos();
								}
								scrollFlag = 0;
							});
						};
						if((this.offsetHeight + this.scrollTop) == this.scrollHeight){
							scrollFlag++;
						}
						console.log(scrollFlag);
					}else{
						scrollFlag = 0;
					};
				});
				
				
			}
		};	
		//此构造函数逻辑
		if(!that.hasElement()){
			alert("请传入瀑布流所需容器，原生js获取到的dom对象");
		}else{
			var wfBox = document.createElement("div");
			args[0].appendChild(wfBox);
			args[0].style.cssText = "width:100%;height:100%;overflow:auto;";
			if(arguments.length == 1){
				//函数接收一个参数
				args[1] = ops;
				that.waterFallCol();
			}else if(arguments.length == 2){
				//函数接收两个参数
				args[1] = extend(ops,args[1]);
				switch(args[1].type){
					case "position" : that.waterFallPos(args[1])
					break;
					case "column" : that.waterFallCol(args[1])
					break;
				}
			};
		};
		//窗口改变时需要动态改变的值
		window.onresize = function(){
			
		};
		//此类对象上的属性
		that.opes = args[1];
	};
	
	window.waterFall = waterFall;
	window.extend = extend;
})(window)