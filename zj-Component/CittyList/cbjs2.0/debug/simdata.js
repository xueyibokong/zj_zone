console.log("def:debug_simdata"),define(["cbui_api","cbui_request"],function(a,b){var c,d,e,f,g;return d=!1,c=200,e=a._,f=b.prototype.fetch,b.prototype.fetch=function(){var a,b,h,i;return console.log("%csimdata: [%s] %s %o","color:#ff00ff",this.request.requestId,this.request.url,this.request),i=this.request.url,e.startsWith(i,"client:///")?f.call(this):(h=this,a=this.id,b=this.request.data,this.timeout=this.request.timeout,this.timeout>0&&(this.timerId=setTimeout(function(){return h.completeTask()},this.timeout)),g(i,b,function(b,e,g){return 0>g?f.call(h):((!g||d)&&(g=c),setTimeout(function(){var c;return c={responseId:a,result:b,data:e},h.complete(c)},g))}))},g=function(b,c,d){var f,g,h,i,j,k,l;return g=b.indexOf(":"),h=b.indexOf("/"),i=b.indexOf("?"),0>i&&(i=b.length),0>h&&(h=g+1),l=b.substring(0,g),j=b.substring(g+1,h),f=b.substring(h,i),k=b.substring(i+1,b.length),"server"!==l&&"client"!==l&&(l="server"),b="../../simdata/"+l+"/"+j+f,requirejs([b],function(b){var f,g,h,i,j,l,m,n;if(b=b[k],b){for(n=b[0].result,f=b[0].data,g=b[0].delay,h=!1,m="find mock data success",i=0,l=b.length;l>i;i++)if(j=b[i],e.isEqual(c,j.param)){f=j.result,f=j.data,g=a.getTypeVal("Finite",j.delay,g),h=!0;break}h||(b[0].isDefault!==!1?m="use default mock data":(f=b[b.length-1].data,g=a.getTypeVal("Finite",b[b.length-1].delay,g),n=a.getTypeVal("Finite",b[b.length-1].result,1),m="use notfound mock data"))}return e.isUndefined(n)&&(n=0),console.log("%crequest param: %o","color:#ff00ff",c),e.isObject(f)&&(f=JSON.parse(JSON.stringify(f))),console.log("%c"+m+":%o","color:#ff00ff",f),d(n,f,g)})}});