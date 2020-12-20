// Normal way of using functions
function NormalFunc(param) {
    return param;
}
// arrow syntax of using functions
// order of strictness: const, let, var
const wet = () => "Hello World";
console.log(wet);
// check out my more complex nameless functions
let we = ( item = "Na we dey here") => item;
//let weOneLiner = (...args = [8]) => args[0];

console.log(we);

//console.log(weOneLiner);