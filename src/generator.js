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