// Arrow Functions — also called “fat arrow” functions, are relatively a new way of writing concise functions in JavaScript. They have been introduced by the ECMAScript 6 specifications and since then become the most popular ES6 feature.
// Arrow functions allow us to use the fat arrow => operator to quickly define JavaScript functions, with or without parameters. We are able to omit the curly braces and the function and return keywords when creating a new JavaScript function to write shorter function syntax. They are not only time savers but also produce clean and more readable functions.


function alpha(){
    let a = 5;
    let b=10;
    console.log(a+b);
}

function beta(){
    const number = 5
    let n1 = 0, n2 = 1, nextTerm;

    console.log('Fibonacci Series:');

    for (let i = 1; i <= number; i++) {
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
}

alpha() 
beta()

const alpha = () =>{
    let a = 5;
    let b=10;
    console.log(a+b);
}

const beta = () => {
    const number = 5
    let n1 = 0, n2 = 1, nextTerm;

    console.log('Fibonacci Series:');

    for (let i = 1; i <= number; i++) {
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
}
alpha()
beta()
