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
const rakib = {
    id:110,
    name:'Rakib',
    money:15000,
    lalasar:'Ludu'
};
const emon = {
    id:120,
    name:'Emon',
    money:12000,
    lalasar:'Ludu'
};
//call
/* avro.giveTreat.call(rakib,400);
avro.giveTreat.call(rakib,600); */

//apply
avro.giveTreat.apply(rakib,[600]);