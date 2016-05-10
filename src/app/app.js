import {getGrades} from './grades.js';

getGrades().filter(person => person.grade >= 100)
    //.forEach(person => console.info(person.name));
    .forEach(({name}) => console.info(name));
