
function initPage(action){
	/*****************************************************************************
     * 全局变量
     *****************************************************************************/
    		var cityListData = {};
	/*****************************************************************************
     * Cbjs初始化
     *****************************************************************************/
		var Browser 		= this.CBUI.Browser;
	    var Model 		= this.CBUI.Model;
	    var Component 	= this.CBUI.Component;
	    var Fn 			= this.CBUI.Fn;
    /*****************************************************************************
     * 数据地址配置
     *****************************************************************************/
		if($("[data-debug]").attr("data-debug")=="@simdata"){
			// 城市列表
			var cityList = "cityList.do?act=cityList";
		}else{
			// 城市列表
			var cityList = config.rest_url;
		}
    /*****************************************************************************
     *	数据预处理（针对于全部的数据模型/也可以针对单一模型）
     *****************************************************************************/
		Fn.setPreProcess(function(status,data){
			MSG.closeAlert();
			if(data.result == "0"){								//	成功状态
				return true;
			}else if(data.result == undefined){					//	请求链路不同
				$.popupAltA(config.OUT_TIME,'确定');
				return false;
			}else{												//	其他错误
				$.popupAltA(data.errmsg,'确定');
				return true;
			}
		});
	/***************************************************************************
	 * 数据模型
	 **************************************************************************/
		Fn.setModels({
			"index" : new Model.CBJSON(null, {
				url : cityList,
				filter : function(data) {
					/**
					 * 列表动态渲染方法调用
					 * 
					 * */
					//通过首字母正序排列【动态取到的数据】；
					cityListData = data.data.resultlist.zjListSort({"fieldType":"chinese","field":"ENGCODE"});
					//去重后获取的数据
					var newOpsListData = newOpsList(cityListData,"ENGCODE");
					//调用列表渲染函数;
					newListDom (newOpsListData,"ENGCODE","CITYNAME","BRANCHURL",".zj-ops-list");
					/**
					 * 搜索条方法
					 * 
					 * */
					//【dom】组件容器
					var bigBox = $(".zj-ops-list-box");
					//【dom】搜索框父元素
					var searchBox = $(".zj-ops-search");
					//【dom】搜索框输入框
					var searchInput = $(".zj-ops-input");
					//【dom】搜索框icon
					var searchIcon = $(".zj-search-icon");
					//【dom】取消搜索按钮
					var searchCancel = $(".zj-search-cancel");
					//【dom】数据列表容器
					var opsList = $(".zj-ops-list");
					//【dom】搜索结果容器
					var searchResulit = $(".zj-search-resulit");
					//【dom】右侧索引条容器
					var targetBox = $(".zj-target-box");
					//【dom】获取透视模态窗
					var tostMsg = $(".zj-tost-box");
					
					//【event】搜索框点击事件挂载
					searchBox.on("click focusin",function(){
						$(this).css({
							"width":"87%"
						});
						searchCancel.css({
							"right":"15px"
						});
						searchInput.css({
							"padding-left":"33px"
						});
						searchIcon.css({
							"left":"50px"
						});
						opsList.css("-webkit-filter","blur(4px)");
						searchResulit.show();
						return false;
					});
					
					//【event】取消按钮的点击事件挂载
					searchCancel.on("click",function(){
						$(this).css({
							"right":"-12%"
						});
						searchBox.css({
							"width":"100%"
						});
						searchInput.blur().val("").css({
							"padding-left":"46%"
						});
						searchIcon.css({
							"left":"48%"
						});
						opsList.show();
						targetBox.show();
						searchResulit.empty().hide();
						opsList.css("-webkit-filter","blur(0px)");
						return false;
					});
					//【event】opsList选项点击事件挂载
					opsList.parent().on('click','li',function(e){
						console.log(e.target.getAttribute("data-href"));
						if(e.target.getAttribute("data-href") == null || e.target.getAttribute("data-href") == 'null' || e.target.getAttribute("data-href") == ""){
							return false;
						}else{
							location.href = e.target.getAttribute("data-href");
							return false;
						}
					});
					//【event】输入框搜索匹配事件
					searchInput.on("input propertychange",function(){
						var val = $(this).val();
						if(val != ""){
							opsList.hide();
							targetBox.hide();
							paramList (cityListData,val,'ENGCODE','CITYNAME','BRANCHURL','.zj-search-resulit');
						}else{
							opsList.show();
							targetBox.show();
							searchResulit.empty();
						}
						return false;
					});
					//【event】右侧索引事件
					var setTime;
					targetBox.on("click","a",function(e){
						searchCancel.click();
						$(".zj-ops-piece>li:nth-of-type(1)").css({
							"-webkit-animation" : "none",
							"animation" : "none"
						});
						$($(this).attr("href")).css({
							"-webkit-animation" : ".7s shan linear",
							"animation" : ".7s shan linear"
						});
						tostMsg.innerVal = $(this).text();
						tostMsg.fadeIn(0,function(){
							$(this).text(tostMsg.innerVal);
							clearTimeout(setTime);
							setTime = setTimeout(function(){
								tostMsg.fadeOut(500,function(){
									$(this).hide();
								});
							},2000);
						});
					});
					//【event】搜索结果容器为空点击搜索框失去焦点
					searchResulit.click(function(){
						if($(this).html() == ""){
							searchCancel.click();
						}
					});
				}
			})
		});	
    /****************************************************************************
     * PAGE组件定义及控制器
     ***************************************************************************/
		Component.index = Component.Page.extend({
			onSubmit:function(data,id){
				
			},
			afterRender:function(){
				this._super();
			}
		});
	/****************************************************************************
     * 页面初始化
     ***************************************************************************/
	    var option = {
	    		refresh : {
	        			id:"index",
	        			param : {
	        				
	        			}
	        		}
	    }
		Browser.history_goto("index",option);				//渲染首页	
		MSG.transparent();
    /****************************************************************************
     * 页面所需函数
     ***************************************************************************/
		/**
		 * 列表动态渲染方法
		 * @newOpsList() 	方法名称
		 * @ dataList  		需要重新组合的数组
		 * @ field     		去重所需字段
		 * 
		 * eg : 
		 *  o = [{"city" : "北京","aa" : "汉庭4酒店","v" : "b"},{"city" : "上海","aa" : "汉庭2酒店","v" : "a"},{"city" : "北京","aa" : "汉庭3酒店","v" : "c"},{"city" : "上海","aa" : "汉庭8酒店","v" : "d"}]
		 *  console.log(newOpsList(o,"city"));
		 * 	newOpsList(o,"city") == [{city:"北京",[{"city" : "北京","aa" : "汉庭4酒店","v" : "b"},{"city" : "北京","aa" : "汉庭3酒店","v" : "c"}]},{city:"上海"[{"city" : "上海","aa" : "汉庭2酒店","v" : "a"},{"city" : "上海","aa" : "汉庭8酒店","v" : "d"}]}]
		 * 
		 * 
		 * */
		function newOpsList (dataList,field){
			//去重的到数组arr
			var arr = [];
			var str = "";
			for(var i = 0; i < dataList.length; i++){
				if(dataList[i][field].substr(0,1) != str){
					arr.push(dataList[i][field].substr(0,1));
				}
				str = dataList[i][field].substr(0,1);
			}
			//数组重组得到数组resultList
			var resultList = [];
			for (var j = 0; j < arr.length; j++) {
				var innerArr = {};
					innerArr.list = [];
				for (var h = 0; h < dataList.length; h++) {
					if(dataList[h][field].substr(0,1) == arr[j]){
						innerArr[field] = dataList[h][field].substr(0,1);
						innerArr.list.push(dataList[h]);
					}
				}
				resultList.push(innerArr);
			}
			// console.log(resultList);
			return resultList;
		};
		
					
		
		/**
		 * name : 
		 * @ newListDom      函数是为了创建分类列表UI【基于jQuery】
		 * param ：
		 * @ opsList 		函数所需要的数组数据格式为函数newOpsList重新组合而成
		 * @ field			列表分类所根据字段；
		 * @ field2			列表	显示所需字段；
		 * @ field3			列表	缓存所需字段；
		 * @ parentDom		列表容器【接收css选择器】
		 * */
		function newListDom (opsList,field,field2,field3,parentDom){
			for (var i = 0; i < opsList.length; i++) {
				var UL = $('<ul class="zj-ops-piece"><li id="'+opsList[i][field].toLowerCase()+'">'+opsList[i][field].toUpperCase()+'</li></ul>');
					for (var j = 0; j < opsList[i].list.length; j++) {
						$('<li data-href="'+opsList[i].list[j][field3]+'">'+opsList[i].list[j][field2]+'</li>').appendTo(UL);
					}
				UL.appendTo(parentDom);
				$('a[href="#'+opsList[i][field].toLowerCase()+'"]').css("color","#333");
			};
		};
		/**
		 * name : 
		 * @ paramList      函数是为了返回匹配到的分类列表UI【基于jQuery】
		 * param ：
		 * @ data 			函数所需要的数组；
		 * @ theVal			匹配参照值；
		 * @ field			搜索匹配所根据字段；
		 * @ field2			搜索匹配所根据字段【这里为列表显示字段】；
		 * @ field3			存储数据所需字段；
		 * @ parentDom		列表容器【接收css选择器】；
		 * */
		function paramList (data,theVal,field,field2,field3,parentDom){
			var arr = [];
			var emptyFlag = true;
			var UL = $("<ul></ul>")
			theVal = theVal.substr(0,1);
			for(var i = 0; i < data.length; i++){
				if(theVal.toLowerCase() == data[i][field].substr(0,1) || theVal.toUpperCase() == data[i][field].substr(0,1) || theVal == data[i][field].substr(0,1) || theVal == data[i][field2].substr(0,1)){
					console.log("is not empty");
					emptyFlag = false;
					$('<li data-href="'+data[i][field3]+'">'+data[i][field2]+'</li>').appendTo(UL);
				}
			}
			if(emptyFlag){
				$(parentDom).html($('<ul><li style="color:#ccc;">未找到匹配的结果...</li></ul>'));
			}else{
				$(parentDom).html(UL);
			}
		};
	
};//cbjs End..


/*----------【以下为本页所需js函数】----这是一条华丽的分割线-----------------------------*/
	
	/*一维数组去重方法【方法采用原型继承】;
	 * 
	 */
	Array.prototype.zjUnique = function(){
	  var res = [this[0]];
	  for(var i = 1; i < this.length; i++){
	      var repeat = false;
		  for(var j = 0; j < res.length; j++){
			 if(this[i] == res[j]){
			   repeat = true;
			   break;
			 }
		   };
	       if(!repeat){
	         res.push(this[i]);
	       }
	   };
	   return res;
	};
	
	/* 数组排序方法【方法采用原型继承】;
	 * @obj       									参数对象
	 * @obj.type(不传/desc)  						顺序/倒序(默认顺序)
	 * @obj.field									排序根据的字段
	 * @obj.fieldType(不传/chinese)					排序根据的字段的类型(数值/英文/中文)
	 * 
	 * eg : obj.zjListSort({"fieldType":"chinese","field":"v","type":"desc"}
	 * resulit : 
	 * 
	 * */
	Array.prototype.zjListSort = function (obj){
		var that = this;
		if(obj.fieldType == "chinese"){
			that.sort(function(c,d){
				return c[obj.field].localeCompare(d[obj.field]);
			});
		}else{
			that.sort(function(a,b){
				if(obj.field == undefined){
					return a - b;
				}else{
					return a[obj.field] - b[obj.field];
				};
			});
		};
		if(obj.type == "desc"){
			that.reverse();
		}
		return that;
	};