define({
	//5.1	账单列表查询_查询还款
	"login" : {
		url : "creditCard.do?act=getCreList",
		data : {
			"logName" : "jq",
			"psw" : "111111",
			resultList : [ {
				"accNo" : "6226780000011884",
				"colorNo" : "6226780000011884",
				"accName" : "中信银行淘宝联名卡金卡（V版）",
				"dbcurrFlag" : "单币卡",
				"billMon" : "201508",
				"insFlag" : "0",
				"point" : "40000",
				"currType1" : "001",
				"crtAmt1" : "50000",
				"crtBal1" : "10000",
				"rpAmt1" : "40000",
				"lowRpamt1" : "400",
				"currType2" : "",
				"crtAmt2" : "",
				"crtBal2" : "",
				"rpAmt2" : "",
				"actFlag" : "N",
				"lowRpamt2" : ""
			} ]
		}
	} ,
	
	//5.1	账单列表查询_查询还款
	"loginNew" :  {
		url : "../rest/creLogin/loginNew",
		data : {
			"accNo" : "6226780000011884",
			"colorNo" : "6226780000011884",
			"accName" : "中信银行淘宝联名卡金卡（V版）",
			"dbcurrFlag" : "单币卡",
			"billMon" : "201508",
			"insFlag" : "0",
			"point" : "40000",
			"currType1" : "001",
			"crtAmt1" : "50000",
			"crtBal1" : "10000",
			"rpAmt1" : "40000",
			"lowRpamt1" : "400",
			"currType2" : "",
			"crtAmt2" : "",
			"crtBal2" : "",
			"rpAmt2" : "",
			"actFlag" : "N",
			"lowRpamt2" : ""
		}
	} ,
	

});
