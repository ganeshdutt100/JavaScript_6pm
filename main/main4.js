 let demo =  document.getElementById('demo')
 
function fun(name){
    // window.alert("hello world!");
//    let a =  window.confirm("hello world!");
//     if(a){
//    document.getElementById('demo').innerText = "ok"
  

//     }
//     else{
//         document.getElementById('demo').innerText = "Cancel"
        
//     }



// let num1 = prompt("enter your first number :  ");
// num1 = Number(num1)
// let num2 = prompt("enter your second number :  ");
// num2 = Number(num2)

// let result  = num1+num2;

// demo.innerHTML = result


//  demo.innerHTML = "shivang name " + name ;


}
// fun();

// setTimeout(fun , 3000 , "shivang" )



let a = setTimeout(()=>{
    demo.innerHTML = "hello shivang"
},2000)

// window.clearTimeout(a);






// fun();