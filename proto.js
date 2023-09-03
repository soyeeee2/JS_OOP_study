const superObj = {superVal: 'super'};
const subObj = {subVal: 'sub'};
// subObj.__proto__ = superObj;
Object.create(superObj);

console.log('subObj.subVal => ', subObj.subVal )
console.log('subObj.subVal => ', subObj.superVal )

// subObj.superVal = 'sub'
console.log(superObj.superVal )

const kim = {
    name: 'kim'
}

console.log(kim.name)

