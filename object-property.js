const student = [
    {id: 12, name: "nani"},
    {id: 13, name: "nana"},
    {id: 14, name: "mama"},
    {id: 15, name: "mami"},
    {id: 16, name: "khalu"}
]
const output = [];

// for (let i = 0; i < student.length; i++) {
//     const element = student[i];
//     const sName = element.name;
//     output.push(sName);
// }
// console.log(output);

const names = student.map (s => s.name);
const ids = student.map (s => s.id);

const bigger = student.filter (s => s.id > 13);
const bigger2 = student.filter (s => s.name.length > 4);

const smallOne = student.find (s => s.id < 13);
console.log(bigger2);