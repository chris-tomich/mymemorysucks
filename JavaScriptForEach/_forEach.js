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

/**
 * This will do a check on an object and if it doesn't have a _forEach function on it, it will add one.
 * @param objectToExtend This is the object or array to extend.
 * @param {boolean|undefined=} addToPrototype If this is set to true, means the extension should be added to the
 * prototype of the object. The default is false which will add it to the object itself.
 * @param {boolean|undefined=} replaceExistingForEach If this is set to true, then we'll just replace the existing forEach
 * on the object. This is pretty dangerous so is false by default.
 * @return {Object} The object that is to be extended.
 */
function addForEach(objectToExtend, addToPrototype, replaceExistingForEach) {
    /**
     * This will loop over all properties in an object.
     * @param {function(Object,string,number)} fn The callback function that will receive the property, the
     * property name, the index, and the originating object.
     */
    function forEachForObject(fn) {
        if (!fn) {
            return;
        }

        var indexCounter = 0;

        for (var propertyName in this) {
            if (this.hasOwnProperty(propertyName) && typeof this[propertyName] !== "function") {
                var property = this[propertyName];
                fn(property, propertyName, indexCounter);
                indexCounter++;
            }
        }
    }

    /**
     * This will loop over all properties in an array.
     * @param {function(Object,number)} fn The callback function that will receive the item, the index, and the
     * originating array.
     */
    function forEachForArray(fn) {
        if (!fn) {
            return;
        }

        for (var itemIndex = 0; itemIndex < this.length; itemIndex++) {
            var item = this[itemIndex];

            fn(item, itemIndex);
        }
    }

    var typeOfObject = Object.prototype.toString.call(objectToExtend);
    var appropriateForEachFunction = forEachForObject;

    if (typeOfObject === "[object Array]") {
        appropriateForEachFunction = forEachForArray;
    }

    /**
     * If replaceExistingForEach is true, then we add the forEach function.
     * If replaceExistingForEach is false AND objectToExtend.forEach is undefined/null, then we add the forEach function.
     */
    if (replaceExistingForEach || (!replaceExistingForEach && !objectToExtend._forEach)) {
        if (addToPrototype) {
            objectToExtend.prototype._forEach = appropriateForEachFunction;
        }
        else {
            objectToExtend._forEach = appropriateForEachFunction;
        }
    }

    return objectToExtend;
}

/**
 * The following line is only required for Node.JS if you wish to use in the browser, remove this comment and the following line.
 */
module.exports = addForEach;