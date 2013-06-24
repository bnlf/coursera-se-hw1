/*
* @Author: Bruno Faria
* Descript: Homework1 Part2 - Coursera Startup Engineering @ 2013
* 			Prime Numbers to file using node.js	
*/

var fs = require('fs');

// test if a number is prime
var isPrime = function(n) 
{
	var prime = 0;
	// base prime number
	if (n == 2) {
		prime = 1;
	}
	// for all the others
	for (var i=2; i < n; i++) {
		if (n % i == 0) {
			prime = 0;
			break;
		}
		else {
			prime = 1;
		}
	}
	return prime;
}

// outputs the first @max primes to primes.txt file
var hw = function (max) {
	var countPrimes = 0;
	var primeArray = [];
	var outfile = 'primes.txt';
	for (var i = 2; countPrimes < max; i++) {
		var prime = isPrime(i); 
		if(prime == 1) {
			primeArray.push(i);
			countPrimes++;
		}
	}
	// writes the array into file
	fs.writeFileSync(outfile, primeArray);  
	console.log("Script: " + __filename + "\nWrote: " + primeArray + "\nTo: " + outfile);
}

// gets first 100 prime numbers
hw(100);

