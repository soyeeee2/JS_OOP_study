const ellie = {
	name: 'ellie',
	age: 100
}

function printValue(obj, key) {
	//console.log(obj.key) //런타임에서 동적으로 key를 가져오지 못함
	console.log(obj[key]) //실시간으로 받아와야할때 사용
}
printValue(ellie, "name") //key는 문자열로 전달