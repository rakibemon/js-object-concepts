// console.log(this)
const avro={
    id:102,
    name:'Avro',
    money:5000,
    giveTreat:function(expense){
        this.money = this.money - expense;
        console.log(this)
        return this.money;
    },
};
function add(){
    console.log(this)
}