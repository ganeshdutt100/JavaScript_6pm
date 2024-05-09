// let obj1 = {
//   a: 1,
//   b : 3 
// }

// console.log(Object.isExtensible(obj1));
// obj1.c = 12
// console.log(obj1);

// Object.seal(obj1)
// console.log(Object.isExtensible(obj1));
// obj1.c = 15;
// console.log(obj1);

// console.log(Object.isSealed(obj1));

let obj2 = {
    a:1,
    b:12,
    c:45
}
console.log(obj2);


let a = Object.values(obj2)
console.log(a);
