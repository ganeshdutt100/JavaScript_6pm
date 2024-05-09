document.writeln("class 14");
let fruits = ['apple', 'banana', 'orange', 'kiwi'];
// Remove 2 elements starting from index 1 and insert 'grape', 'melon'
fruits.splice(0, 2, 'shivang', 'Aman','Yash','Ganesh','deepak');
// console.log(fruits);
for(x of fruits){
    document.writeln(x + '<br>' );
    
}

// document.writeln(fruits + '<br>' );
let fruits1 = ['apple', 'banana'];
 let fruits2 = ['orange', 'kiwi'];
 
//  let combinedFruits = fruits1 +" " + fruits2;
 let combinedFruits = fruits1.concat(fruits2);

console.log(combinedFruits);

document.writeln(combinedFruits + '<br>' );

 // Result: ['apple', 'banana', 'orange', 'kiwi'


 let arr1 = ['shivang','aman','yash','deepak','sun']
//  let arr1output = arr1.includes("shivang")
//  let arr1output = arr1.indexOf("shivang")
//  let arr1output = arr1.join(" , ")
//  let arr1output = arr1.slice(2,4)
 let arr1output = arr1.toString()
console.log(arr1output);

 