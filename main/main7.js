let Shivang = {
    name:'shiv' ,
     age :18 , 
     gender: 'male'
    }
    
    // document.writeln(Shivang.name , "  : ", Shivang.age , " : ", Shivang.gender);
    

    // for( x in Shivang){
    //     document.writeln(x + " : "+ Shivang[x]  + '<br>' );
        
    // }

    function Person(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
        }
        let person = new Person("John", 30, "Developer");
       for(a in person){
       document.writeln(a + " : "+ person[a])
       }