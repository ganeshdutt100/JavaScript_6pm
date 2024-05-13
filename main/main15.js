// document.writeln( " class 15");

let a =['aman','shivang','yash']
let output = a.entries()
document.writeln(...output);

// for(x of a.entries()){
//     document.writeln(x);
   
// }

console.log(...output);

// console.log(a);
//[ [0 ,'amam'] [1,'shivang'] [2,'yash'] ]


// Every methods
let num = [1,2,23,33,4,5,6,7,8,9,10,11];
// let num = [2,4,6,8,10];

let NumOutput = num.every((x) => x%2== 0 )

console.log(NumOutput);


// filter
let filterNum = num.filter(x => x%2!=0)
console.log(filterNum);

// find Index
let FindNumIndex = num.findIndex(x => x%3 == 0)
console.log(FindNumIndex);

// find
let FindNum = num.find(x => x%3 == 0)
console.log(FindNum);


// map
let MapNum = num.map(x => x * x)
console.log(MapNum);


// Reduce 

let ReduceNum = num.reduce((acc , crt)=> acc - crt)

console.log("ReduceNum : "+ ReduceNum);

// Reduce Right
let ReduceRightNum = num.reduceRight((acc , crt)=> acc - crt)
console.log("ReduceRightNum : "+ ReduceRightNum);


// let count = 0 ;
// for(let i = 0; i<num.length; i++){
//     count = num[i]+count
// }
// console.log( "Add array : "+count);



// Some 

let someNum = num.some((x)=> x %2 ==0 )
console.log(someNum);


// keys
let keyNum = num.keys();
console.log(...keyNum);

// values
let ValueNum = num.values();
console.log(...ValueNum);




