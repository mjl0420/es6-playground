//generator
'use strict';
function* director() {
    yield 'Three';
    yield 'Two';
    yield 'One';
    yield 'Action';
}
var action = director();
console.info(action.next());
console.info(action.next());
console.info(action.next());
console.info(action.next());
console.info(action.next());


function* fab(max) {
    var last = 0, current = 1;

    while(max >= current) {
        yield current;
        var tmp = current;
        current += last;
        last = tmp;
    }
}

var o = fab(50), ret, result = [];

while(!(ret = o.next()).done) {
    result.push(ret.value);
}

console.log(result); // [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

console.info([...fab(50)]);

for(let current of fab(50)) {
    console.info(current);
}


var Fab = {
    [Symbol.iterator]() {
        var n1 = 1,
            n2 = 1;
        return {
            next() {
                var current = n2;
                n2 = n1;
                n1 = n1 + current;
                return {value: current, done: false};
            }
        }
    }
};
for (var v of Fab) {
    //数列是无限的，需要借助break跳出循环
    console.log( v );
    if (v > 50) {
        break;
    }
}
