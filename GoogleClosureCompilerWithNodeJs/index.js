goog.provide("index");

goog.require("subtract");

/**
 * The calculator class.
 * @param base
 * @constructor
 */
function Calculator(base) {
    if (base || base === 0) {
        /**
         * @private
         */
        this.base = base;
    }

    /**
     *
     * @param {number} item1
     * @param {number=} item2
     * @param {number=} item3
     * @returns {string}
     */
    this.add = function (item1, item2, item3) {
        var total = this.base + item1;

        if (item2) {
            total = total + item2;
        }

        if (item3) {
            total = total + item3;
        }

        return total;
    };
}

var aCalculator = new Calculator(0);
console.log(aCalculator.add(1));
console.log(aCalculator.add(1, 2));
console.log(aCalculator.add(1, 2, 3));

console.log(aCalculator.subtract(aCalculator.add(1), aCalculator.add(1)));