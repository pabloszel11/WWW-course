var Vehicle = function(currentPositionX, currentPositionY, fuelConsumption, tankStatus)
{
	if(this.constructor === Vehicle)
		throw new Error("Can't create an object of an abstract class!");
	this.currentPositionX = currentPositionX;
	this.currentPositionY = currentPositionY;
	this.fuelConsumption = fuelConsumption;
	this.tankStatus = tankStatus;
	/*console.log(this.currentPositionX);
	console.log(this.currentPositionY);
	console.log(this.fuelConsumption);
	console.log(this.tankStatus);*/
}
Vehicle.prototype.move = function(x,y)
{
	if(this.constructor === Vehicle)
		throw new Error("Abstract method");
	previousX = this.currentPositionX;
	previousY = this.currentPositionY;
	this.currentPositionX = this.currentPositionX + x; 
	this.currentPositionY = this.currentPositionY + y; 
	var distance = Math.sqrt(Math.pow(this.currentPositionX,2) - Math.pow(previousX,2) + Math.pow(this.currentPositionY,2) - Math.pow(previousY,2));
	this.tankStatus = this.tankStatus - distance * this.fuelConsumption;
	if(this.tankStatus < 0)
		this.tankStatus = 0;
	console.log("Vehicle moved to " + "(" + this.currentPositionX + "," + this.currentPositionY + ")");
}
Vehicle.prototype.loadFuel = function()
{
	throw new Error("Abstract method");
}

//GETTERS
Vehicle.prototype.getX = function()
{
	if(this.constructor === Vehicle)
		throw new Error("Abstract method");
	return this.currentPositionX;
}
Vehicle.prototype.getY = function()
{
	if(this.constructor === Vehicle)
		throw new Error("Abstract method");
	return this.currentPositionY;
}
Vehicle.prototype.getFuelConsumption = function()
{
	if(this.constructor === Vehicle)
		throw new Error("Abstract method");
	return this.fuelConsumption;
}
Vehicle.prototype.getTankStatus = function()
{
	if(this.constructor === Vehicle)
		throw new Error("Abstract method");
	return this.tankStatus;
}

//SETTERS
Vehicle.prototype.setX = function(x)
{
	if(this.constructor === Vehicle)
		throw new Error("Abstract method");
	this.currentPositionX = x;
}
Vehicle.prototype.setY = function(y)
{
	if(this.constructor === Vehicle)
		throw new Error("Abstract method");
	this.currentPositionY = y;
}
Vehicle.prototype.setFuelConsumption = function(newFC)
{
	if(this.constructor === Vehicle)
		throw new Error("Abstract method");
	this.fuelConsumption = newFC;
}
Vehicle.prototype.setTankStatus = function(newTS)
{
	if(this.constructor === Vehicle)
		throw new Error("Abstract method");
	this.currentPositionX = newTS;
}
var Car = function(currentPositionX, currentPositionY, fuelConsumption, tankStatus)
{
	Vehicle.apply(this, currentPositionX, currentPositionY, fuelConsumption, tankStatus);
}
Car.prototype =	Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
Car.prototype.loadFuel = function(fuelAmount)
{
	this.tankStatus = this.tankStatus + fuelAmount;
	if(this.tankStatus > 60)
		this.tankStatus = 60;
	console.log(this.tankStatus);
}


var Truck = function(currentPositionX, currentPositionY, fuelConsumption, tankStatus)
{
	Vehicle.apply(this, currentPositionX, currentPositionY, fuelConsumption, tankStatus);
}
Truck.prototype = Object.create(Vehicle.prototype);
Truck.prototype.constructor = Truck;
Truck.prototype.loadFuel = function(fuelAmount)
{
	this.tankStatus = this.tankStatus + fuelAmount;
	if(this.tankStatus > 120)
		this.tankStatus = 120;
	console.log(this.tankStatus);
}

//var delorean = new Vehicle([0,1,2,3]);
var ford = 	new Car([0,1,10,60]);
var catterpillar = new Truck([10,6,12,120]);
console.log(ford.getX());
ford.setX(25);
console.log(ford.getX());
ford.move(4,5);
catterpillar.move(12,55);
ford.loadFuel(12);
catterpillar.loadFuel(25);


