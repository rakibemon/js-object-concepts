const avro={
    id:102,
    name:'Avro',
    money:5000,
    giveTreat:function(expense,tips){
        this.money = this.money - (expense + tips);
        console.log(this)
        return this.money;
    },
};
// avro.giveTreat(900,100);
const rakib = {
    id:110,
    name:'Rakib',
    money:15000,
    lalasar:'Ludu'
};

const rakibTreat = avro.giveTreat.bind(rakib);
console.log(rakibTreat(500,500));