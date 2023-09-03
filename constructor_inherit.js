function Person(name, f, s){
    this.name = name
    this.first = f
    this.second = s
}
Person.prototype.sum = function(){
    return this.first + this.second
}

function PersonPlus(name, f, s, t){
    Person.call(this, name, f, s)
    this.third = t
}
PersonPlus.prototype.avg = function(){
    return (this.first+this.second+this.third)
}