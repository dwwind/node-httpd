/**
* nodejs http server
* http://www.hongtao3.com
*
* Copyright 2011, duwei
*
* @author duwei<duv123@gmail.com>
*
*/
var config=exports;
var path=require('path');
var serverRoot=path.dirname(path.dirname(__dirname));
config.compileDir=serverRoot+"/compile";
config.autoCompileCheck=true;//是否自动检查编译文件是否最新
config.session_name='nsp';
config.session_savePath=serverRoot+"/session";
config.session_gc_maxlifetime=30;//session GC 时间 秒

var defaultHost={};
defaultHost.port=8080;
defaultHost.serverName=null;
defaultHost.documentRoot=serverRoot+"/webRoot";
defaultHost.indexes=true;              //是否列出目录
defaultHost.charset='utf-8';           //默认文件编码   
defaultHost.directoryIndex=['index.html','index.htm'];
defaultHost.aclFunction=function(){
	if(this.basename=='.htaccess'){
		this.res.statusCode=403;
		return false;
	}
};

config.defaultHost=defaultHost;
config.serverRoot=serverRoot;