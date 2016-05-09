//Block scope
//let
'use strict';
var x = 10;
if(x) {
    let x = 4;
    //var x = 4;
    console.info(x);
}
console.info(x);