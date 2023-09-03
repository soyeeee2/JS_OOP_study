function Person(name, f, s){
    this.name = name
    this.first = f
    this.second = s
    this.sum = function(){
        return this.first + this.second
    }
}

const kim = new Person('kim', 1, 2);
const lee = new Person('lee', 3, 3);
console.log(kim.sum()) 
console.log(lee.sum())
