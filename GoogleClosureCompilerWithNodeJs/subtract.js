goog.provide("subtract");

/**
 *
 * @param {string} item1
 * @param {string=} item2
 * @param {number=} item3
 * @returns {number}
 */
Calculator.prototype.subtract = function (item1, item2, item3) {
    var total = this.base - item1;

    if (item2) {
        total = total - item2;
    }

    if (item3) {
        total = total - item3;
    }

    return total;
};