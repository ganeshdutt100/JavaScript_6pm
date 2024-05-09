document.writeln("Class 13");

document.writeln('<br>' );

let arr = ["a", "b", "c", "d", "e"];
document.writeln(" Normal array :  ");

for(x of arr){
    document.writeln(`${x}` );
}


document.writeln('<br>' );

let arr2 = new Array();
arr2[0]="Aman"
arr2[1]="Yash"
arr2[2]="Shivang"
// arr2[0]="Ganesh"
document.writeln(arr2);


document.writeln('<br>' );
let arr3 = new Array("Aman", "Yash", "Shivang");
document.writeln(arr3);

document.writeln('<br>' );


// methods

let arrM = ["Aman", "Yash", "Shivang", "Rahul","Deepak","Deepika" , "Nikhil"]

// let arrNum= [1,2,8,5,7,9,6,4]
let arrNum= [1,23,43,54,2,4,3,-1,5,6]

// arrM.copyWithin(3,0,4)
// arrM.fill("JavaScript",3,4)
// arrM.pop()
// arrM.push("Java","JavaScript")
// arrM.reverse()
// arrM.shift()
// arrM.unshift("Aman")
// arrM.sort()
arrNum.sort()
document.writeln(arrNum);
// document.writeln(arrM);





