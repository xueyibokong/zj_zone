/**
 * 去掉字符两端的空白字符
 * @return {string}
 */
String.prototype.trim=function(){     
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");    
};
/**
 * 去掉字符左边的空白字符
 * @return {string}
 */
String.prototype.lTrim=function(){
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/, "");
};
/**
 * 去掉字符右边的空白字符
 * @return {string}
 */
String.prototype.rTrim=function(){     
    return this.replace(/[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");   
};
/**
 * 中文字符长度
 * @return {int} 字符串长度
 */
String.prototype.chineseLength=function(){     
    return this.replace(/[^\x00-\xff]/g,"__").length;   
};
//console.log(('测试').chineseLength());//4
/**
 * 获取地址的某个参数值
 * location.href.getParam('action')
 * @param {string}
 * @return {string|undefined}
 */
String.prototype.getParam=function(param){      
    var query = this.indexOf('?')>-1?this.split('?')[1].split('#')[0].split('&'):this;
    for(var i=0;i<query.length;i++){
        var kv = query[i].split('=');
        if(kv[0] == param){
            return kv[1];
        }
    }
    return undefined;   
};
//console.log(location.href.getParam('action'));
/**
 * 设置地址的某个参数值，已有参数则改变参数值
 * location.href.setParam('action','submit')
 * @param param {string} 参数名
 * @param value {string} 参数值
 * @return {string|undefined}
 */
String.prototype.setParam=function(param,value){
	var domain = (this.indexOf('?')>-1?this.split('?')[0]:this.split('#')[0])+'?';
	var hash = this.indexOf('#')>-1?'#'+this.split('#')[1]:'';
	var query = '&'+((this.indexOf('?')>-1)?this.split('?')[1].split('#')[0]:'');
	var params = '';
    if(query=='&'){
    	params = param+'='+value ;
    }else{
	    var p = new RegExp("(&"+param+")=[^&]*");
	    if(p.test(query)){
	        params = query.replace(p,"$1="+value).substring(1);
	    }else{
	    	params = query.substring(1)+'&'+param+'='+value;
	    }
    }
    return domain+params+hash; 
};
//console.log(location.href.setParam('action','submit'));
/**
 *	全角转半角
 *	全角空格为12288，半角空格为32
 * 	其他字符半角(33-126)与全角(65281-65374)的对应关系是：均相差65248
 * 	document.write((65281).toString(16)+"----"+(65374).toString(16)+"----"+(12288).toString(16));
 */
String.prototype.dbc2sbc = function(){        
     return this.replace(/[\uff01-\uff5e]/g,        
         function(a){        
             return String.fromCharCode(a.charCodeAt(0)-65248);        
         }).replace(/\u3000/g," ");        
};
//console.log("ＡＢＣ　１２３，我们都是好朋友".dbc2sbc());
/**
 *	字符转数组
 *	全角空格为12288，半角空格为32
 * 	其他字符半角(33-126)与全角(65281-65374)的对应关系是：均相差65248
 * 	document.write((65281).toString(16)+"----"+(65374).toString(16)+"----"+(12288).toString(16));
 *	@return {array}
 */
String.prototype.toArray = function(){        
		if(!s1) s1='&';
		if(!s2) s2='=';
		var getarr = str.split(s1);
		var arr=[];
		for(var i=0;i<getarr.length;i++){
			var kv=getarr[i].split(s2);
			var k = kv[0];
			var v = kv[1];
			arr[k]=v;
		}
		return arr;     
};
//console.log("ＡＢＣ　１２３，我们都是好朋友".dbc2sbc());


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


var JsonUti = {
    //定义换行符
    n: "\n",
    //定义制表符
    t: "\t",
    //转换String
    convertToString: function(obj) {
        return JsonUti.__writeObj(obj, 1);
    },
    //写对象
    __writeObj: function(obj    //对象
            , level             //层次（基数为1）
            , isInArray) {       //此对象是否在一个集合内
        //如果为空，直接输出null
        if (obj == null) {
            return "null";
        }
        //为普通类型，直接输出值
        if (obj.constructor == Number || obj.constructor == Date || obj.constructor == String || obj.constructor == Boolean) {
            var v = obj.toString();
            var tab = isInArray ? JsonUti.__repeatStr(JsonUti.t, level - 1) : "";
            if (obj.constructor == String || obj.constructor == Date) {
                //时间格式化只是单纯输出字符串，而不是Date对象
                return tab + ("\"" + v + "\"");
            }
            else if (obj.constructor == Boolean) {
                return tab + v.toLowerCase();
            }
            else {
                return tab + (v);
            }
        }

        //写Json对象，缓存字符串
        var currentObjStrings = [];
        //遍历属性
        for (var name in obj) {
            var temp = [];
            //格式化Tab
            var paddingTab = JsonUti.__repeatStr(JsonUti.t, level);
            temp.push(paddingTab);
            //写出属性名
            temp.push(name + " : ");

            var val = obj[name];
            if (val == null) {
                temp.push("null");
            }
            else {
                var c = val.constructor;

                if (c == Array) { //如果为集合，循环内部对象
                    temp.push(JsonUti.n + paddingTab + "[" + JsonUti.n);
                    var levelUp = level + 2;    //层级+2

                    var tempArrValue = [];      //集合元素相关字符串缓存片段
                    for (var i = 0; i < val.length; i++) {
                        //递归写对象                         
                        tempArrValue.push(JsonUti.__writeObj(val[i], levelUp, true));
                    }

                    temp.push(tempArrValue.join("," + JsonUti.n));
                    temp.push(JsonUti.n + paddingTab + "]");
                }
                else if (c == Function) {
                    temp.push("[Function]");
                }
                else {
                    //递归写对象
                    temp.push(JsonUti.__writeObj(val, level + 1));
                }
            }
            //加入当前对象“属性”字符串
            currentObjStrings.push(temp.join(""));
        }
        return (level > 1 && !isInArray ? JsonUti.n : "")                       //如果Json对象是内部，就要换行格式化
            + JsonUti.__repeatStr(JsonUti.t, level - 1) + "{" + JsonUti.n     //加层次Tab格式化
            + currentObjStrings.join("," + JsonUti.n)                       //串联所有属性值
            + JsonUti.n + JsonUti.__repeatStr(JsonUti.t, level - 1) + "}";   //封闭对象
    },
    __isArray: function(obj) {
        if (obj) {
            return obj.constructor == Array;
        }
        return false;
    },
    __repeatStr: function(str, times) {
        var newStr = [];
        if (times > 0) {
            for (var i = 0; i < times; i++) {
                newStr.push(str);
            }
        }
        return newStr.join("");
    }
};



(function(){
	
	

	
	


//	
//// 方法六
//function toThousands(num) {
//  return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
//}

	/*
	 * 作用：打印字符串
	 * 用法： echo('echo');
	 */
	window.echo = function(str){
		document.writeln(str);
	}
	window.print = function(str){
		document.write('<pre>'+str+'</pre>');
	}
	var search = window.location.search;
	var request = search.substring(1).split('#')[0];
	window.location.request=request;

	window.str2arr = function (str,s1,s2){
		if(!s1) s1='&';
		if(!s2) s2='=';
		var getarr = str.split(s1);
		var arr=[];
		for(var i=0;i<getarr.length;i++){
			var kv=getarr[i].split(s2);
			var k = kv[0];
			var v = kv[1];
			arr[k]=v;
		}
		return arr;
	};
	
	/*
	 * 作用：获取地址栏的get参数
	 * 用法：console.log($_GET['name']);
	 * 说明：无该参数返回undefined
	 */
	window.location.get = window.$_GET = str2arr(request);
	/*
	 * fun:param
	 * param:
	 * 		json 将要转为参数字符串的对象
 	 *		key URL参数字符串的前缀
 	 *		encode true/false 是否进行URL编码,默认为true
	 */
	window.param = function (json,key,encode){
		var s = _param(json,key,encode);
		return s.substr(1);
	};
	window._param = function (json,key,encode){
		if(json==null) return '';
		var str = '';
		var t = typeof (json);
		if (t == 'string' || t == 'number' || t == 'boolean') {
			str += '&' + key + '=' + ((encode==null||encode) ? encodeURIComponent(json) : json);
		} else {
			for (var i in json) {
				var k = key == null ? i : key + (json instanceof Array ? '[' + i + ']' : '.' + i);
				str += _param(json[i], k, encode);
			}
		}
		return str;
	};
})();


