const bottle={
    color:'Yellow',
    hold:'Water',
    price:50,
    isCleaned:true,
};
/* for(const property in bottle){
    console.log(`${property}: ${bottle[property]}`);
} */
// getting all property or keys name
const keysOfBollteObject = Object.keys(bottle);
// console.log(keysOfBollteObject);
// for(const key of keysOfBollteObject){
//     console.log(key,bottle[key]);
//}
for(const [key,value] of Object.entries(bottle)){
    console.log(key,value)
}