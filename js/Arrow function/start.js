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