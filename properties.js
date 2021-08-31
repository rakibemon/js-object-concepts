const bottle={
    color:'Yellow',
    hold:'Water',
    price:50,
    isCleaned:true,
};
/* // getting all property or keys name
const keysOfBollteObject = Object.keys(bottle);
console.log(keysOfBollteObject);
// getting all values
const valuesOfBollteObject = Object.values(bottle);
console.log(valuesOfBollteObject); */
const pairs = Object.entries(bottle);
// console.log(pairs);
// Object.seal(bottle);
bottle.price=100;
delete bottle.isCleaned;
// console.log(bottle);
const stu={
    name:{
        first:'Rakib',
        last:{
            middle:'Istiak',
            last:'Emon'
        },

    },
    age:43
}
console.log(Object.keys(stu.age))