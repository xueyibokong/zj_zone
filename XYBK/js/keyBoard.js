(function(jQuery){
	var $ = jQuery;
	//需要随机的数值
	var numList = [1,2,3,4,5,6,7,8,9,0];
//随机取出基础字符串【basisStr】中的9个不同的字符串【moleculeStr】
	var basisStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	var basisArr = basisStr.split("");
	window.moleculeStr = "";											//截取到的拼接字符串【需要上送到后台】
	var tenmporary = "";											//当前截取到的字符串
	
	for (var m = 0; m < 10; m++) {
		tenmporary = basisArr[Math.floor(Math.random()*basisArr.length)];
		basisArr.splice(basisArr.indexOf(tenmporary),1);
		moleculeStr += tenmporary;
	}
	console.log(moleculeStr+"-----"+moleculeStr.length);
	//设置一个全局对象用来初始化焦点对象 
	var emptyElement = $("<div keyboard='keyboard'></div>");
		emptyElement.get(0).isfocus = false;
		emptyElement.get(0).focusCallback = function(){};
		emptyElement.get(0).blurCallback = function(){};
		emptyElement.get(0).keyValueChange = function(input,thevalue){};
		emptyElement.get(0).sendCallback = function(){};
		emptyElement.get(0).inputValue = "";
	var _that = emptyElement;
	//用来存储每一次按键下后输入框中的值】
	var keyValue = [];
	/*
	 * 创建键盘DOM对象；
	 * */
	var keyBoardDom = $(
		'<div class="key-box">'
			+'<div>'
				+'<div class="number-btn chang-number-btn">1</div>'
				+'<div class="number-btn chang-number-btn">2</div>'
				+'<div class="number-btn chang-number-btn">3</div>'
				+'<div class="number-btn chang-number-btn">4</div>'
				+'<div class="number-btn chang-number-btn">5</div>'
				+'<div class="number-btn chang-number-btn">6</div>'
				+'<div class="number-btn chang-number-btn">7</div>'
				+'<div class="number-btn chang-number-btn">8</div>'
				+'<div class="number-btn chang-number-btn">9</div>'
				+'<div class="number-btn point">.</div>'
				+'<div class="number-btn chang-number-btn">0</div>'
				+'<div class="end-btn">Trs</div>'
			+'</div>'
			+'<div>'
				+'<div class="tool-btn delete-btn"><</div>'
				+'<div class="tool-btn end-btn">Done</div>'
			+'</div>'
		+'</div>'
	);
	
	keyBoardDom.appendTo("html");
	setTimeout(function(){
		keyBoardDom.css("bottom","-"+keyBoardDom.height()+"px");
	},0);
	/* 对象 keyBoard 上挂载的事件
	 *
	 * */
	//创建键盘对象；
	var keyBoard = {
		show : function(){
			keyBoardDom.css("bottom","0px");
			$("html").css("padding-bottom",keyBoardDom.height()+"px");
		},
		hide : function(){
			keyBoardDom.css("bottom","-"+keyBoardDom.height()+"px");
			$("html").css("padding-bottom","0px");
		}
	};
	$.keyBoard = keyBoard;
	/*	************************
	 *	键盘DOM事件添加
	 *  用在pc端存在一个bug就是当点击键盘后再移动鼠标事件对象就会发生改变因此会出现取值不准确问题【移动端不存在】
	 *  
	 *  因为键盘是用在移动端的所以这里的click事件是为了更好的在pc端调试所以此bug可以忽略
	 *  
	 * ***********************/
	keyBoardDom.on("click",function(e){
		if(_that._isNumberInput()){
			//数值输入框
			if($(e.target).hasClass("end-btn")){
				//收起键盘前都要执行一次失去焦点事件
				if($(e.target).hasClass("end-btn") && $(e.target).hasClass("tool-btn")){
					_that.get(0).sendCallback(_that.handleValue());
				}
				_that.get(0).blurCallback();
				_that.keyBoardBlur();
			}else {
				if($(e.target).hasClass("delete-btn")){
					if(keyValue.length == 0){
						return false; 
					}
					keyValue.pop();								//获取按键值
					keyValue = keyValue.join("");				//存值数组转字符串
					// _that.text(keyValue);						//键盘显示值
					_that.handleValue(keyValue);					//每次输入都去重新为当前对象重新赋值
					keyValue = keyValue.split("");				//重新转化成数组
				}else{
					if(keyValue.length >= _that.attr("maxlength")){
						return false;
					}
					keyValue.push($(e.target).data("num"));		//获取按键值
					keyValue = keyValue.join("");				//存值数组转字符串
					// _that.text(keyValue);						//键盘显示值
					_that.handleValue(keyValue);					//每次输入都去重新为当前对象重新赋值
					keyValue = keyValue.split("");				//重新转化成数组
				};
				_that.get(0).keyValueChange($(e.target).data("num"),keyValue.join(""));
			};
		}else if(_that._isPasswordInput()){
			//密码输入框
			if($(e.target).hasClass("end-btn")){
				//收起键盘前都要执行一次失去焦点事件
				if($(e.target).hasClass("end-btn") && $(e.target).hasClass("tool-btn")){
					_that.get(0).sendCallback(_that.handleValue());
				}
				_that.get(0).blurCallback();
				_that.keyBoardBlur();
			}else {
				if($(e.target).hasClass("delete-btn")){
					if(keyValue.length == 0){
						return false; 
					}
					keyValue.pop();														//获取按键值
					keyValue = keyValue.join("");										//存值数组转字符串
					_that.text(_that.text().substr(0,_that.text().length-1));			//键盘显示值
					_that.get(0).inputValue = keyValue;									//每次输入都去重新为当前对象重新赋值
					keyValue = keyValue.split("");										//重新转化成数组
				}else{
					if(keyValue.length >= _that.attr("maxlength")){
						return false;
					}
					keyValue.push($(e.target).data("num"));								//获取按键值
					keyValue = keyValue.join("");										//存值数组转字符串
					_that.text(_that.text() + "*");										//键盘显示值
					_that.get(0).inputValue = keyValue									//每次输入都去重新为当前对象重新赋值
					keyValue = keyValue.split("");										//重新转化成数组
				};
				_that.get(0).keyValueChange($(e.target).data("num"),keyValue.join(""));
			};
		};
		return false;
	}).on("touchstart",function(e){
		if($(e.target).hasClass("end-btn") && $(e.target).hasClass("tool-btn")){
			$(e.target).css({
				"color" : "#fff",
				"background" : "#67B1F1"
			});
		}else{
			$(e.target).css({
				"color" : "#fff",
				"background" : "#ccc"
			});
		}
	}).on("touchend",function(e){
		if($(e.target).hasClass("end-btn") && $(e.target).hasClass("tool-btn")){
			$(e.target).css({
				"color" : "#67B1F1",
				"background" : "none"
			});
		}else{
			$(e.target).css({
				"color" : "#777",
				"background" : "none"
			});
		}
	});
	/*
	 * 数组随机、键盘随机布局【密码类型输入框】
	 * */
	function _changeNum(){
		numList.sort(function(){return Math.random()>0.5?-1:1;}); //数组随机排序
		$('.chang-number-btn').each(function(index,obj){
			$(obj).text(numList[index]);
			$(obj).data("num",moleculeStr.split("")[numList[index]]);
		});
		$(".number-btn.point").text("");							//密码类型键盘小数点输入为空
		$(".number-btn.point").data("num","");					//密码类型键盘小数点输入为空

		$(".tool-btn.delete-btn").data("num","delete");
		$(".end-btn").data("num","trs");
		$(".tool-btn.end-btn").data("num","done");
	};
	/*
	 * 数组还原、键盘还原布局【number类型输入框】
	 * */
	function _restNum(){
		numList = [1,2,3,4,5,6,7,8,9,0]; 						//数组还原排序
		$('.chang-number-btn').each(function(index,obj){
			$(obj).text(numList[index]);
			$(obj).data("num",numList[index]);
		});
		$(".number-btn.point").text(".");
		$(".number-btn.point").data("num",".");
		$(".tool-btn.delete-btn").data("num","delete");
		$(".end-btn").data("num","trs");
		$(".tool-btn.end-btn").data("num","done");
	};
	/*
	 * @ name 						json合并
	 * @ param obj1，obj2			接收两个个json参数
	 * 
	 * 	 函数返回obj1，是obj2中覆盖obj1中的相同的键值并把obj2新键值追加到obj1中
	 * 
	 * */
	function _extend (obj1,obj2){
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
	};
	/* 对象(div[keyboard="keyboard"]) 上挂载的事件
	 * jQuery元素对象插件拓展
	 * */
	$.fn.extend({
		keyBoardFocus : function(callback){
			//获取焦点
			if(!$(this)._isKeyboardInput()){
				alert("keyBoardFocus is not a function!");
				return;
			};
			if(arguments.length == 0){
				//焦点对象获得焦点并使_that（之前的焦点元素）失去焦点
				_that.get(0).blurCallback();
				_that.keyBoardBlur();						
				$(this).get(0).isfocus = true;
				_that = $(this);
				//取出当前获得焦点个元素的值并存入keyValue中
				keyValue = $(this).get(0).inputValue.split("");
				//呼出键盘
				$.keyBoard.show();
				//将元素移动到视窗中
				$(this).get(0).scrollIntoView();
				//随机键盘顺序
				if($(this)._isPasswordInput()){
					_changeNum();
				}else if($(this)._isNumberInput()){
					_restNum();
				};
				//添加获取焦点属性
				$(this).attr("cursor","oninput");
			}else if(arguments.length > 0){
				//回调函数执行
				$(this).get(0).focusCallback = callback;
			};
			
		},
		keyBoardBlur : function(callback){
			//失去焦点
			if(!$(this)._isKeyboardInput()){
				alert("'keyBoardBlur' is not a function!");
				return;
			};
			if(arguments.length == 0){
				//焦点对象失去焦点
				_that = emptyElement;
				$(this).get(0).isfocus = false;
				//重置全局存值变量keyValue
				keyValue = [];
				//收起键盘
				$.keyBoard.hide();
				//移除焦点属性
				$(this).removeAttr("cursor");
			}else if(arguments.length > 0){
				//回调函数执行
				$(this).get(0).blurCallback = callback;
			};
		},
		keyValueChange : function(callback){
			//value值改变
			if(!$(this)._isKeyboardInput()){
				alert("'keyValueChange' is not a function!");
				return;
			};
			if(arguments.length < 1){
				console.log("'keyValueChange' must accept a parameter!");
				return;
			};
			//回调函数执行
			$(this).get(0).keyValueChange = callback;
		},
		handleValue : function(thevalue){
			//为输入框设置value
			if(!$(this)._isKeyboardInput()){
				alert("'setInputValue' is not a function!");
				return;
			};
			if(arguments.length > 0){
				if(!$(this)._isPasswordInput()){
					//如果输入框不是密码框才能够为输入框设置初始值
					$(this).text(thevalue);
					$(this).get(0).inputValue = thevalue;
				};
			}else if(arguments.length == 0){
				return $(this).get(0).inputValue;
			}
		},
		send : function(callback){
			if(arguments.length < 1){
				console.log("'send' must accept a parameter!");
				return;
			}
			$(this).get(0).sendCallback = callback;
		},
		_isPasswordInput : function(){
			//判断输入框为password框
			return ($(this).attr("keyboard-type") == "password");
		},
		_isNumberInput : function(){
			//判断输入框为number框
			return ($(this).attr("keyboard-type") == "number");
		},
		_isKeyboardInput : function(){
			//判断输入框为keyboard输入框
			return ($(this).attr("keyboard") == "keyboard");
		}
	});
	/* ***************************************
	 * keyBoard_ready(function(){		入口函数在页面加载完毕执行
	 * 		对输入框操作的函数
	 * })  						 	 
	 * 对象(div[keyboard="keyboard"]) 上挂载的事件
	 * jQuery元素对象插件拓展
	 * 
	 * 为了兼容由于ios safari 对body的click事件不主动响应引起的事件委派问题;
	 * 如果需要要实现脚本动态添加<div keyboard='keyboard'></div>；
	 * 进行如下操作:
	 * 1 >> 利用插件提供的创建方法   window.newInput({},"body")；
	 * eg : var input2 = window.newInput({},"body");
	 * ****************************************/
	function keyBoard_ready (readyCallback){
		/*	**************
		 *   window.newInput 				插件提供的动态创建<div keyboard='keyboard'></div>元素
		 * 									方法返回所创建的jQuery对象
		 * 	 @param
		 * 	 1>> attrObj :{     				元素所需要的属性
		 * 					 keyboardType   :    "number",
		 * 					 placeholder    :    "请输入手机号",
		 * 					 maxlength 	    :	 "12"
		 *                }
		 *	 2>> appendParent				元素索要插入的容器【接收容器的css选择器】
		 * 									不传默认为body
		 * 
		 * 
		 * 	 eg : var input2 = window.newInput({},"body");
		 * ***************/
		window.newInput = function(attrObj,appendParent){
			appendParent = appendParent || "body";
			attrObj = _extend({
				 keyboardType   :    "password",
				 placeholder    :    "",
				 maxlength 	    :	 "",
				 thevalue		:	 ""	
			},attrObj);
			var 	inputDiv = $('<div keyboard="keyboard" keyboard-type="'+attrObj.keyboardType+'" placeholder="'+attrObj.placeholder+'" maxlength="'+attrObj.maxlength+'" thevalue="'+attrObj.thevalue+'" ></div>');
			if(attrObj.keyboardType == "password"){
				inputDiv = $('<div keyboard="keyboard" keyboard-type="'+attrObj.keyboardType+'" placeholder="'+attrObj.placeholder+'" maxlength="'+attrObj.maxlength+'" ></div>');
			}
			inputDiv.appendTo(appendParent);
			_allInputAddEvent ();
			return inputDiv;
		};
		
		/*	*******
		 *  为页面中所有<div keyboard='keyboard'></div>元素添加此插件支持方法
		 *	作用主要用于为动态创建的<div keyboard='keyboard'></div>元素添加此插件支持方法
		 *  ******/
		function _allInputAddEvent (){
			$('[keyboard="keyboard"]').each(function(index,obj){
				//初始化当前对象的原生对象上的新增回调函数方法；
				var thevalue = ($(obj).attr("keyboard-type") == "password")?"":$(obj).attr("thevalue");
				obj.inputValue = obj.inputValue || thevalue || "";
				obj.isfocus = obj.isfocus || false;
				obj.focusCallback = obj.focusCallback || function(){};
				obj.blurCallback = obj.blurCallback || function(){};
				obj.keyValueChange = obj.keyValueChange || function(input,thevalue){};
				obj.sendCallback = obj.sendCallback || function(thedata){};
				if(!($(obj).attr("keyboard-type") == "password")){
					$(obj).text(obj.inputValue);
				}
			});
			$('[keyboard="keyboard"]').on("click",function(e){
				if($(this).get(0).isfocus == false){
					$(this).keyBoardFocus();
					_that.get(0).focusCallback();
				};
				return false;
			});
		};
		_allInputAddEvent ();
		/*	*********
		 *  输入框失去焦点操作
		 *	
		 * **********/
		$(document).on("click",function(e){
			if(_that.get(0).isfocus == true){
				e.preventDefault() || e.stopPropagation();
				_that.get(0).blurCallback();
				_that.keyBoardBlur();
				return false;
			};
		});
		//入口回调函数
		readyCallback = readyCallback || function (){};
		readyCallback();
	};//>>> 入口函数end 
	window.keyBoard_ready = keyBoard_ready;
	keyBoard_ready();
})(jQuery)