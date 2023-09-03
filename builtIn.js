var Mymath = {
    PI_: Math.PI,
    random: function(){
        return Math.random();
    },
    floor: function(val){
        return Math.floor(val);
    }
}

console.log(Mymath.PI_);
console.log(Mymath.random());
console.log(Mymath.floor(3.8));