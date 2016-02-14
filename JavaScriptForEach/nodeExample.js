/**
 *    Copyright (C) 2016 Christopher Tomich
 * 
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 * 
 *        http://www.apache.org/licenses/LICENSE-2.0
 * 
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 * 
 *    This code can be obtained from https://github.com/chris-tomich
 */

var addForEach = require("./_forEach");

console.log("Beginning of Array Example.");
/**
 * Beginning of Array Example.
 */

var myPetNames = ["Spot", "Ninja", "Goldy"];

/**
 * "addForEach()" will return the object that was passed to it meaning we can use _forEach straight away like so.
 */
console.log("I own the following pets -");

addForEach(myPetNames)._forEach(function (petName, index) {
    console.log("  " + index + ". " + petName);
});

/**
 * You only need to call "addForEach()" once on an object. This means we can now call _forEach like so. 
 */
console.log("I own the following pets -");

myPetNames._forEach(function (petName, index) {
    console.log("  " + index + ". " + petName);
})

/**
 * End of Array Example.
 */
console.log("End of Array Example.");

console.log("Beginning of Object Example.");
/**
 * Begin Object Example.
 */

var myPets = {
    "Spot": {
        "species": "Dog",
        "age": 2,
        "breed": "Dalmatian"
    },
    "Ninja": {
        "species": "Cat",
        "age": 5,
        "breed": "Russian Blue"
    },
    "Goldy": {
        "species": "Fish",
        "age": 20,
        "breed": "Goldfish"
    }
};

/**
 * When iterating over an object, the property value, the property name, and the index of the property will be returned.
 */
console.log("Let me introduce you to my pets -");

addForEach(myPets)._forEach(function (pet, petName, index) {
    console.log("  " + index + ". " + petName + " is a " + pet.breed + " who is " + pet.age + " years old.");
});

/**
 * End of Object Example.
 */
console.log("End of Object Example.");