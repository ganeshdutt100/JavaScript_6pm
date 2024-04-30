let object = {
    name:"arjun" ,
     age : 22
    }

    // document.writeln(object.name , " ", object.age);
    

    for(let x in object) {
        document.writeln(x + "  : " +object[x] +  '<br>' );
        
    }



    // function Person(name, age, job) {
    //     this.name = name;
    //     this.age = age;
    //     this.job = job;
    //     }
    //     let person = new Person("John", 30, "Developer");
    //    for(a in person){
    //    document.writeln(a + " :  " + person[a] + '<br>' )
    //    }


//     class Person {
//  constructor(name, age, job) {
//  this.name = name;
//  this.age = age;
//  this.job = job;
//  }
//  }
//  let person = new Person("John", 30, "Developer");
//  for (let prop in person) {
//  document.writeln(prop + ": " + person[prop]);
//  }

// function createPerson(name, age, job) {
//     return {
//     name: name,
//     age: age,
//     job: job
//     };
//     }
//     let person = createPerson("Yash", 19, "Developer");
//     for(let x in person){
//     document.writeln(x + ": " + person [x] + '<br>' );
//     }


const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };

const result = Object.assign(target, source);
console.log(result); // { a: 1, b: 3, c: 4 }
console.log(target); // { a: 1, b: 3, c: 4 }
console.log(source); // { a: 1, b: 3, c: 4 }
