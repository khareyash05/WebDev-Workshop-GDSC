// var and let are both used for variable declaration in javascript but the difference between them is that var is function scoped and let is block scoped.
// It can be said that a variable declared with var is defined throughout the program as compared to let.

// console.log(x);
// var x=5;
// console.log(x);


// console.log(y);
// let y=5;
// console.log(y);

// let b=2;
// function alpha(){
//     var a=5; 
//     a=10;b=6;
//     console.log(a);
//     console.log(b);
// }
// alpha();
// console.log(b);
// console.log(a);

for (var i = 0; i < 5; i++) {
	console.log("Inside the loop:", i);
}

console.log("Outside the loop:", i);

for (let j = 0; j < 5; j++) {
	console.log("Inside the loop:", j);
}
console.log("Outside the loop:", j);