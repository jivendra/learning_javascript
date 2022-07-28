var car = {
    make: 'Tata',
    model: 'Nexon',
    year: 2021,
    drive: function(speed) { console.log("Moving forward at " + speed + " mph") }
}
console.log(car)
car.drive(20)
console.log(car.make)
car.color = 'White'
console.log(car)
delete car.color
console.log(car)

//object constuctor

function CarInfo(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    CarInfo.prototype.drive = function(speed) { console.log("Moving forward at " + speed + " mph"); };
}
var jivendraCar = new CarInfo('Maruti', 'WagonR', 2019)
var friendsCar = new CarInfo('Hyundai', 'Santro', 2017)
console.log(jivendraCar.make)
jivendraCar.drive(60)
friendsCar.drive(40)