import {getGrades} from './grades.js';

getGrades().filter(person => person.grade >= 100)
    //.forEach(person => console.info(person.name));
    .forEach(({name}) => console.info(name));

import FOOFN, {bar, baz as BAZ} from './grades.js';
FOOFN();
bar();
BAZ();
