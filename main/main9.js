// let personPrototype = {
//     greet: function() {
//     console.log("Hello!");
//     }
//     };

    
//     let person = Object.create(personPrototype);
//     person.name = "John";
//     person.age = 30;
//     person.job = "Developer";
//    for (let prop in person) {
//    document.writeln(prop + ": " + person[prop]);
//    }
   


// freeze()----------------

let obj1 ={
    age :  29
}
console.log(Object.isFrozen(obj1));


let freeze = Object.freeze(obj1);

console.log(Object.isFrozen(obj1));


console.log(Object.is([],[]));



obj1.age =  56;


document.writeln(obj1.age);
