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
config.compileDir=path.dirname(__dirname)+"/compile";
config.autoCompileCheck=true;//是否自动检查编译文件是否最新

var defaultHost={};
defaultHost.port=8080;
defaultHost.serverName=null;
defaultHost.documentRoot=path.dirname(__dirname)+"/webRoot";
defaultHost.indexes=true;              //是否列出目录
defaultHost.charset='utf-8';           //默认文件编码   
defaultHost.directoryIndex=['index.html','index.htm'];
config.defaultHost=defaultHost;