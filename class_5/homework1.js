function charCount(myString) {
	//this.result = myString;
	//var result = {};
	//result[' '] = 7;
	//result[' '] = myString.match(/([\s]+)/g).length;
	//this.[' '] = 7;
	if ( myString.match(/a/g) != null  ) { this.a = myString.match(/a/g).length } else { this.a = 0 };
	if ( myString.match(/b/g) != null  ) { this.b = myString.match(/b/g).length } else { this.b = 0 };
	if ( myString.match(/c/g) != null  ) { this.c = myString.match(/c/g).length } else { this.c = 0 };
	if ( myString.match(/d/g) != null  ) { this.d = myString.match(/d/g).length } else { this.d = 0 };
	if ( myString.match(/e/g) != null  ) { this.e = myString.match(/e/g).length } else { this.e = 0 };
	if ( myString.match(/f/g) != null  ) { this.f = myString.match(/f/g).length } else { this.f = 0 };
	if ( myString.match(/g/g) != null  ) { this.g = myString.match(/g/g).length } else { this.g = 0 };
	if ( myString.match(/h/g) != null  ) { this.h = myString.match(/h/g).length } else { this.h = 0 };
	if ( myString.match(/i/g) != null  ) { this.i = myString.match(/i/g).length } else { this.i = 0 };
	if ( myString.match(/j/g) != null  ) { this.j = myString.match(/j/g).length } else { this.j = 0 };
	if ( myString.match(/k/g) != null  ) { this.k = myString.match(/k/g).length } else { this.k = 0 };
	if ( myString.match(/l/g) != null  ) { this.l = myString.match(/l/g).length } else { this.l = 0 };
	if ( myString.match(/m/g) != null  ) { this.m = myString.match(/m/g).length } else { this.m = 0 };
	if ( myString.match(/n/g) != null  ) { this.n = myString.match(/n/g).length } else { this.n = 0 };
	if ( myString.match(/o/g) != null  ) { this.o = myString.match(/o/g).length } else { this.o = 0 };
	if ( myString.match(/p/g) != null  ) { this.p = myString.match(/p/g).length } else { this.p = 0 };
	if ( myString.match(/q/g) != null  ) { this.q = myString.match(/q/g).length } else { this.q = 0 };
	if ( myString.match(/r/g) != null  ) { this.r = myString.match(/r/g).length } else { this.r = 0 };
	if ( myString.match(/s/g) != null  ) { this.s = myString.match(/s/g).length } else { this.s = 0 };
	if ( myString.match(/t/g) != null  ) { this.t = myString.match(/t/g).length } else { this.t = 0 };
	if ( myString.match(/u/g) != null  ) { this.u = myString.match(/u/g).length } else { this.u = 0 };
	if ( myString.match(/v/g) != null  ) { this.v = myString.match(/v/g).length } else { this.v = 0 };
	if ( myString.match(/w/g) != null  ) { this.w = myString.match(/w/g).length } else { this.w = 0 };
	if ( myString.match(/x/g) != null  ) { this.x = myString.match(/x/g).length } else { this.x = 0 };
	if ( myString.match(/y/g) != null  ) { this.y = myString.match(/y/g).length } else { this.y = 0 };
	if ( myString.match(/z/g) != null  ) { this.z = myString.match(/z/g).length } else { this.z = 0 };
	
}
		
		
//var object = {};
//object['1'] = 'value';
//console.log(object[1]);
		
let result = new charCount("Pack my box with five dozen liquor jugs.");
let aCount = result.a;
let spaceCount = result[' '];
console.log(aCount); // Should output 1
console.log(spaceCount); // Should output 7
