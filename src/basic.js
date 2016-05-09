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

//const
'use strict';
const PI = 3.14;
if(PI) {
    //PI = 3.1415926;//Syntax Error
}
console.info(PI);


//template string
'use strict';
function print(firstName) {
    //console.info('Hello ' + firstName);
    console.info(`Hello ${firstName}`);
}
print('John');

//spread operator


//default parameter
'use strict';
function add(x = 0, y = 0) {
    return x + y;
}
add();

//object literal enhancement
'use strict';
var john = {
    walk() {
        console.info('Walk')
    }
};
john.walk();

//arrow function
'use strict';
var grades = [
    {name: 'John', grade: 98},
    {name: 'July', grade: 100}
];
grades.filter(person => person.grade >= 100)
    //.forEach(person => console.info(person.name));
    .forEach(({name}) => console.info(name));

//destructuring assignment

