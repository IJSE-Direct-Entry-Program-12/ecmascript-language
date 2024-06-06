function Car(frameNo, model){
    console.log("Car()");
    this.frameNo = frameNo;
    this.model = model;
}

Car.prototype.break = function(){
    console.log("Break");
}

Car.prototype.drive = function(){
    console.log("Drive");
}

Car.prototype.shiftGears = function(){
    console.log("Shift Gears");
}

function Prius(color, frameNo, model){
    Car.call(this, frameNo, model);
    console.log("Prius()")
    this.color = color;
    // this.frameNo = frameNo;
    // this.model = model;
}

Prius.prototype.__proto__ = Car.prototype;

Prius.prototype.enableEv = function(){
    console.log("Enable EV");
}

const p1 = new Prius("white", "123", "nph");
console.log(p1);
console.log(p1 instanceof Prius);
console.log(p1 instanceof Car);
console.log(p1 instanceof Object);