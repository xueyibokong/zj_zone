定义方式：

方式一	var reg = new RegExp("abc","g") 

方式二	var reg = /abc/g ;

参数说明：

new RegExp(pattern[,flags])

flags的5种类型

/i (忽略大小写)
/g (全文查找出现的所有匹配字符)
/m (多行查找)
/gi(全文查找、忽略大小写)
/ig(全文查找、忽略大小写)



谈起正则首先了解js正则的几个函数exec、test、match、search、replace、split



方法：RegExpObject.exec(string)
作用：方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。
返回：array|null

<script type="text/javascript">
//是否包含abc
var reg = new RegExp('abc','gi');
var str = 'abc456ABC0abc456Abc';
var result;
var count=0;
while((result=reg.exec(str))!= null){
	count++;
	console.group('匹配第：'+count+'组');
//  console.log(result);
	console.log('string：'+result.input);
	console.log('匹配：'+result[0]);
	console.log('光标从第：'+result['index']+'位开始');
	console.log('光标移到：'+reg.lastIndex+'位结束');
	console.groupEnd();
}
</script>



方法：RegExpObject.test(string)
作用：用于检测一个字符串是否匹配某个模式
返回：boolean

<script type="text/javascript">
//是否数字开头
var reg = new RegExp('^[0-9]','g');
var str = 'a0123456';
var str = '0123456';
var result = reg.test(str);
console.log(result);//只要有1段匹配就返回true
</script>



方法：
stringObject.match(searchvalue)
stringObject.match(regexp)
作用：方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。
返回：array|null

<script type="text/javascript">
//提取数字
var str="1 plus 2 equal 34 56";
var rs = str.match(/\d+/g);
console.log(rs);//["1", "2", "34", "56"]
console.log(rs[0]);//1,2,34,56
//提取数字
var str="abcd";
console.log(str.match(/\d+/g));//null
</script>



方法：stringObject.search(regexp)
方法：用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串。
返回：number -1|>=0

<script type="text/javascript">
//查找roc的位置 
var str="i am roc! roc";
console.log(str.search(/roc/));//5
console.log(str.search(/Roc/));//-1
console.log(str.search(/Roc/i));//5
</script>



方法：stringObject.replace(regexp/substr,replacement)
方法：replace() 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。
返回：

<script type="text/javascript">
//替换cat为dog
var str="i am cat! cat";
document.write(str.replace(/cat/g, "dog"));

//把 "Doe, John" 转换为 "John Doe" 的形式：
name = "Doe, John";
name.replace(/(\w+)\s*, \s*(\w+)/, "$2 $1");
console.log(name);

//双引号 改 单引号
name = '"a", "b"';
console.log(name.replace(/"([^"]*)"/g, "'$1'"));
document.write(name.replace(/"([^"]*)"/g, "'$1'"));

//把首字母变为大写
name = 'aaa bbb ccc';
uw=name.replace(/\b\w+\b/g, function(word){
  return word.substring(0,1).toUpperCase()+word.substring(1);}
);
console.log(uw);//Aaa Bbb Ccc
</script>





方法：stringObject.replace(regexp/substr,replacement)
方法：replace() 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。
返回：