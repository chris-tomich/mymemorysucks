/// whereAmI() is a function that tells us where I currently am.
function whereAmI() {
    return this.myLocation;
}

/// Bedroom is a class that has a method called findOutWhereIAm() which tells you where I am in the context of the Bedroom.
/// This method is a 'pointer' to the whereAmI() function.
function Bedroom() {
    this.myLocation = "I'm in the bedroom";

    this.findOutWhereIAm = whereAmI;
}

/// Bathroom is a class that has a method called findOutWhereIAm() which tells you where I am in the context of the Bathroom.
/// This method is a 'pointer' to the whereAmI() function.
function Bathroom() {
    this.myLocation = "I'm in the bathroom";

    this.findOutWhereIAm = whereAmI;
}

/// Garage is a class that has a method called findOutWhereIAm() which attempts to tell you where I am in the context of the Garage.
/// The findOutWhereIAm() function attempts to use the whereAmI() function by calling to it.
function Garage() {
    this.myLocation = "I'm in the garage";

    this.findOutWhereIAm = function () {
        return whereAmI();
    };
}

/// Garden is a class that just lists a location.
function Garden() {
    this.myLocation = "I'm in the garden";
}

/// The output if you just called whereAmI() by itself.
console.log("The output if you just called whereAmI() by itself.");
console.log(whereAmI());

/// The output if you are 'in the bedroom'.
console.log("The output if you are 'in the bedroom'.");
var bedroom = new Bedroom();
console.log(bedroom.findOutWhereIAm());

/// The output if you are 'in the bathroom'.
console.log("The output if you are 'in the bathroom'.");
var bathroom = new Bathroom();
console.log(bathroom.findOutWhereIAm());

/// The output if you are 'in the Garage'.
console.log("The output if you are 'in the Garage'.");
var garage = new Garage();
console.log(garage.findOutWhereIAm());

/// The output if you want to know that you're 'in the garden'.
console.log("The output if you want to know that you're 'in the garden'.");
var garden = new Garden();
console.log(whereAmI.call(garden));