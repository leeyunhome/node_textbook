// extend

function Vehicle(name, speed) {
  this.name = name;
  this.speed = speed;
}
Vehicle.prototype.drive = function () {
  console.log(this.name + " runs at " + this.speed);
};
var tico = new Vehicle("tico", 50);
tico.drive();

function Sedan(name, speed, maxSpeed) {
  Vehicle.apply(this, arguments);
  this.maxSpeed = maxSpeed;
}
Sedan.prototype = Object.create(Vehicle.prototype);
Sedan.prototype.constructor = Sedan;
Sedan.prototype.boost = function () {
  console.log(this.name + " boosts its speed at " + this.maxSpeed);
};
var sonata = new Sedan('sonata', 100, 200);
sonata.drive(); // 'sonata runs at 100'
sonata.boost(); // 'sonata boosts its speed at 200'

function Truck(name, speed, capacity)
{ 
    Vehicle.apply(this, arguments);
    this.capacity = capacity;
}
Truck.prototype = Object.create(Vehicle.prototype);
Truck.prototype.constructor = Truck;
Truck.prototype.load = function (weight) {
    if (weight > this.capacity)
    { 
        return console.error('아이고 무거워!');
    }
    return console.log('짐을 실었습니다!');
};
var boongboong = new Truck('boongboong', 40, 100);
boongboong.drive();
boongboong.load(120);