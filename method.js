const student={
    name:'Avro',
    money:5000,
    id:102,
    major:'Web Development',
    isRich:false,
    subjects:['Calculus','English','Math'],
    bestFriend:{
        name:'Rakib',
        major:'Mathematices'
    },
    takeExam: function(){
        console.log(this.name ,' is taking exam')
    },
    giveTreat:function(expense,tips){
        this.money = this.money - (expense + tips);
        return this.money;
    },
}
console.log(student.giveTreat(500,100))
console.log(student.giveTreat(500,0))