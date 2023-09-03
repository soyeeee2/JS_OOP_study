var memberArray = ['egoing', 'soyee', 'nee'];
// console.log("memberArray :", memberArray[1]);

console.group();
var i = 0;
while(i < memberArray.length){
    // console.log(i, memberArray[i])
    i++;
}
console.groupEnd('array loop')

console.group()
var memberObj = {
    manager:'egoing',
    dev: 'soyee',
    designer: 'nee'
}

for (var name in memberObj) {
    // console.log(name, memberObj[name])
}
// console.groupEnd('obj loop')

