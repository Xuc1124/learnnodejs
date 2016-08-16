'use strict';
var fs = require('fs');
/*fs.readFile('sample.txt','utf-8',function (err,data) {
	if(err){
		console.log(err);
	}
	else{
		console.log(data);
	}
});*/
/*var data = 'Hello node.js';
fs.r=fs.writeFile('output.txt', data, function (err) {
	if (err) {
		console.log(err);
	} else {
		console.log('file write finished!');
	}
});*/

/*fs.stat('sample.txt', function(err,stat){
	if(err){
		console.log(err);
	} else {
		console.log('isFile:'+stat.isFile());
		console.log('isDirectory:'+stat.isDirectory());
		if(stat.isFile()){
			console.log('size:'+stat.size);
			console.log('birth time:'+stat.birthtime);
			console.log('modified time:'+stat.mtime);
		}
	}
});*/

/*var data = fs.statSync('./sample.txt');
console.log('isFile:'+data.isFile());
console.log('isDirectory:'+data.isDirectory());
if(data.isFile()){
	console.log('size:'+data.size);
	console.log('birth time:'+data.birthtime);
	console.log('modified time:'+data.mtime);
}*/

/*流*/
/*var rs = fs.createReadStream('sample.txt', 'utf-8'); 
rs.on('data',function(chunk){
	console.log('DATA:');
	console.log(chunk);
});

rs.on('end',function(){
	console.log('END');
});

rs.on('error',function(err){
	console.log('ERROE:'+err);
})*/

/*var ws = fs.createWriteStream('output.txt', 'utf-8');
ws.write('use stream to write text data...\n');
ws.write('END');
ws.end();

var ws2 = fs.createWriteStream('output2.txt', 'utf-8');
ws2.write(new Buffer('use stream to write binary data...\n'),'utf-8');
ws2.write(new Buffer('END'),'uft-8');
ws2.end();*/


/*var rs = fs.createReadStream('sample.txt');
var ws = fs.createWriteStream('copied.txt');
rs.pipe(ws);*/

var rs = fs.createReadStream('sample.txt','utf-8');
rs.on('data',function(chunk){
	console.log('DATA:');
	console.log(chunk);
});
rs.on('data',function(chunk){
	console.log('DATA1:');
	console.log(chunk);
})
