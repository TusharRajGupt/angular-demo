const g = n => n + 1;
const f = n => n * 2;

const h = x => f(g(x));
h(100); //=> 202


const add = a => b => c=> a + b + c;
add(1)(2)(3); //6