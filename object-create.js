// 1. using object literal
const student = {names:"EMON", age : 25};
// 2. Object Constructor
const person = new Object();
// 3. 
const human = Object.create(student)
// console.log(human.names);

class People{
    constructor(names,age){
        this.name=names;
        this.age=age;
    }
}
const peop = new People("Rakib",14);
// console.log(peop)

// With function

function Manus (id,designation){
    this.id=id;
    this.designation=designation
}
const emon = new Manus(101104,'Web Developer');
console.log(emon)