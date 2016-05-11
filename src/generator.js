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
    var count = 0, last = 0, current = 1;

    while(max > count++) {
        yield current;
        var tmp = current;
        current += last;
        last = tmp;
    }
}

var o = fab(10), ret, result = [];

while(!(ret = o.next()).done) {
    result.push(ret.value);
}

console.log(result); // [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

console.info([...fab(10)]);

for(let current of fab(10)) {
    console.info(current);
}
