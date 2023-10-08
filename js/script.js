"use strict";

let a = 3;
while (a < 9){
    a += 1;
    console.log("Premier log");
    console.log(a);
    if (a==8){
        break;
    }
    if (a==7){
        continue;
    }
    console.log("Deuxième log");
    console.log(a);
}