const students = [
    {id:10, name: 'Tusher Das'},
    {id:11, name: 'Horik'},
    {id:12, name: 'Nobin'},
    {id:13, name: 'Amely'}
];
// const names = [];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i].name;
//     names.push(element);
// }
// console.log(names);
const names = students.map(s=>s.name);
// const ids = students.map(s=> s.id);
// const ids = students.filter(s=> s.id>11)
const ids = students.find(s=> s.id>11)
console.log(names);
console.log(ids);