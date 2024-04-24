let a = 30;
let b = 40;
let c = 20;

// if(a < 0 && b < 0 && c < 0){
//     console.log( " a , b , c  ,  - ");
    
// }
// else if(a < 0 || b < 0 || c > 0){
//     console.log( " a , b , c  ,  +");

// }
// else{
//     console.log( " a , b , c  ,  + ");

// }


let small,mid, large

if(a <= b && a <= c){
    small = a;
    if(b <= c){
        mid = b;
        large = c;
    }

    else{
        mid = c;
        large = b;
    }
}
if(b <= a && b <= c){
    small = b;
    if(a <= c){
        mid = a;
        large = c;
    }

    else{
        mid = c;
        large = a;
    }
}
else{
    small = c ; 
    if(a <= b){
        mid = a;
        large = b;
    }

    else{
        mid = b;
        large = a;
    }
}

let result  = small  +" , "+ mid  +" , "+ large;

document.writeln(result);

