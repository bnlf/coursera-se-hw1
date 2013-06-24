/*
* @Author: Bruno Faria
* Descript: Homework1 Part1 - Coursera Startup Engineering @ 2013
* 			Write to file using node.js	
*/

var fs = require('fs');
var outfile = "hello.txt";
var out = "A startup is a business built to grow rapidly.\n";

// writes @out to @outfile
fs.writeFileSync(outfile, out);  
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);
