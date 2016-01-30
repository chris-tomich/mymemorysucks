chai.use(function (chai) {
    var Assertion = chai.Assertion;

    function compareArrays(assertionContext, expectedArray, valueArray) {
        assertionContext.assert(
            valueArray.length === expectedArray.length,
            "expected #{this} to have an array #{exp}, but instead got an array with value #{act}",
            "expected #{this} to not have an array #{exp}",
            expectedArray,
            valueArray
        );

        for (var propertyIndex = 0; propertyIndex < expectedArray.length; propertyIndex++) {
            var valueArrayItem = valueArray[propertyIndex];
            var expectedArrayItem = expectedArray[propertyIndex];

            if (Object.prototype.toString.call(valueArrayItem) === "[object Array]") {
                compareArrays(assertionContext, expectedArrayItem, valueArrayItem);
            }
            else if (Object.prototype.toString.call(valueArrayItem) === "[object Object]") {
                compareObjects(assertionContext, expectedArrayItem, valueArrayItem);
            }
            else {
                assertionContext.assert(
                    valueArrayItem === expectedArrayItem,
                    "expected #{this} to have an array item #{exp}, but instead got an array item with value #{act}",
                    "expected #{this} to not have an array item with value #{exp}",
                    valueArrayItem,
                    expectedArrayItem
                )
            }
        }
    }

    function compareObjects(assertionContext, expected, value) {
        for (var expectedPropertyName in expected) {
            if (expected.hasOwnProperty(expectedPropertyName)) {
                var expectedProperty = expected[expectedPropertyName];

                var valueHasProperty = value.hasOwnProperty(expectedPropertyName);

                assertionContext.assert(
                    valueHasProperty,
                    "expected #{this} to have a property named #{exp}",
                    "expected #{this} to not have a property named #{exp}",
                    expectedPropertyName
                );

                if (valueHasProperty) {
                    var valueProperty = value[expectedPropertyName];

                    if (Object.prototype.toString.call(valueProperty) === "[object Array]") {
                        compareArrays(assertionContext, expectedProperty, valueProperty);
                    }
                    else if (Object.prototype.toString.call(valueProperty) === "[object Object]") {
                        compareObjects(assertionContext, expectedProperty, valueProperty);
                    }
                    else {
                        assertionContext.assert(
                            valueProperty === expectedProperty,
                            "expected #{this} to have a property with value #{exp}, but instead got a property with value #{act}",
                            "expected #{this} to not have a property with the value #{exp}",
                            expectedProperty,
                            valueProperty
                        )
                    }
                }
            }
        }
    }

    Assertion.addMethod("equalPropertiesOn", function (expected) {
        var value = this._obj;

        compareObjects(this, expected, value);
    });
});