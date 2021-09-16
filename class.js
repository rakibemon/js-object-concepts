class Rectangle {
    width;
    height;
    constructor(width,height){
        this.width=width;
        this.height=height;
    }
};
Rectangle.prototype.area=function(){
    return (this.height* this.width);
};
class Square extends Rectangle{
constructor(oneLength){
    super(oneLength,oneLength)
}
};
const rec = new Rectangle(3, 4);
const sqr = new Square(3);
    
    console.log(rec.area());
    console.log(sqr.area());