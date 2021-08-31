const first = {a:1,b:2}
const second = {b:2,a:1}
const third=first;
/* if(JSON.stringify(first)===JSON.stringify(second)){
    console.log("Same")
}
else{
    console.log("Different")
} */

function checkObject(obj1,obj2){
    if(Object.keys(obj1).length !== Object.keys(obj2).length){
        return false
    }
    for(const property in obj1){
        if(obj1[property]!==obj2[property]){ //checking values here not keys
            return false
        }

    }
    return true
}
const isEuqad = checkObject(first,second);
console.log(isEuqad)