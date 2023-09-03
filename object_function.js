const kim = {name: 'kim', first:10, second:20}
const lee = {name: 'lee', first:10, second:20}
function sum(prefix) {
    return prefix + (this.first+this.second);
}

//sum();
sum.call(kim) //call(kim) = function sum()에서 this = kim

console.log(sum.call(kim, '=>')) //apply
console.log(sum.call(lee, ':'))
let kimSum = sum.bind(kim)