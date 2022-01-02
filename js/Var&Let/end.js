// var and let are both used for variable declaration in javascript but the difference between them is that var is function scoped and let is block scoped.
// It can be said that a variable declared with var is defined throughout the program as compared to let.

for (var i = 0; i < 5; i++) {
	console.log("Inside the loop:", i);
}

console.log("Outside the loop:", i);

for (let j = 0; j < 5; j++) {
	console.log("Inside the loop:", j);
}
console.log("Outside the loop:", j);

// Output
// for first loop(var)
// Inside the loop: 0
// Inside the loop: 1
// Inside the loop: 2
// Inside the loop: 3
// Inside the loop: 4
// Outside the loop: 5

// for second loop(let)
// Inside the loop: 0
// Inside the loop: 1
// Inside the loop: 2
// Inside the loop: 3
// Inside the loop: 4
// ReferenceError: j is not defined