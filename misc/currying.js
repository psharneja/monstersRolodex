const multiply = (a,b) =>a*b;
multiply(3,4);

const curryMultiply = (a) => (b) => a*b;
console.log(curryMultiply(5)(3))