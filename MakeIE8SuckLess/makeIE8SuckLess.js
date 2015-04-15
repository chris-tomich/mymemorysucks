/**
 * Copyright (c) 2015 Chris Tomich
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 **/

var makeIE8SuckLess = {
    // Place any code in the initialise function that will fix up globally scoped objects like "window" or "document"
    initialise: function() {
        if (document.getElementsByClassName === undefined || document.getElementsByClassName === null) {
            if (document.addEventListener === undefined || document.addEventListener === null) {
                // Looks like it's IE8 or lower
                this.IsIE8 = true;
            }
        }

        // This will fix the missing "getElementsByClassName" issue for IE8 but will leave conforming browsers untouched
        if (document.getElementsByClassName === undefined || document.getElementsByClassName === null) {
            document.getElementsByClassName = function(className) {
                var allElements = document.getElementsByTagName("*");
                var matchingElements = new Array();

                // Iterate through every element on the page and find elements that have the maching class name provided
                for (var i = 0; i < allElements.length; i++) {
                    var element = allElements[i];
                    var elementClassDeclarations = element.getAttribute("class");
                    if (elementClassDeclarations !== undefined && elementClassDeclarations !== null) {
                        var regEx = new RegExp("^" + className + "|\s" + className + "\s|" + className + "$", "i");

                        if (elementClassDeclarations.search(regEx) != -1) {
                            matchingElements.push(element);
                        }
                    }
                }

                return matchingElements;
            }
        }
    },
    byFixingMyMouseEvent: function(event) {
        // This will fix the missing event for IE8 but leaves conforming browsers untouched
        event = (event === undefined || event === null) ? window.event : event;

        // This will fix the missing pageX and missing pageY for IE8 but leaves conforming browsers untouched
        if (event.pageX === undefined || event.pageX === null) {
            event.pageX = event.clientX + document.documentElement.scrollLeft;
        }

        if (event.pageY === undefined || event.pageY === null) {
            event.pageY = event.clientY + document.documentElement.scrollTop;
        }

        // This will stop bubbling of the event
        if (event.stopPropagation === undefined || event.stopPropagation === null) {
            event.stopPropagation = function() {
                this.cancelBubble = true;
            }
        }

        // This will stop bubbling of the event using the same way as setting this.cancelBubble = true would work
        // TODO: Need to consider whether I should put this in or whether it's dangerous to do this as it's not
        // TODO: actually doing the same thing - this would normally stop ALL event listeners from firing
        // TODO: The reason I would want to do it is just stop code from throwing errors if stopImmediatePropagation
        // TODO: has been used
        //if (event.stopImmediatePropagation === undefined || event.stopImmediatePropagation === null) {
        //    event.stopImmediatePropagation = function() {
        //        this.cancelBubble = true;
        //    }
        //}

        // This will stop the default action from occurring if the event can be cancelled
        // N.B. A word of warning, sometimes the preventDefault needs to be run on different actions in IE8 than IE9 and
        // above - an example of this is with blocking text selection on mousedown - you need to use it on mouse move
        // N.B. Another word of warning, for some things like cancelling text selection, when you leave the element the
        // returnValue may reset to true in IE8
        if (event.preventDefault === undefined || event.preventDefault === null) {
            event.preventDefault = function() {
                this.returnValue = false;
            }
        }

        // This will fix the missing target property for IE8 by assigning srcElement to target
        if (event.target === undefined || event.target === null) {
            event.target = event.srcElement;
        }

        return event;
    },
    byFixingMyElement: function(element) {
        // This converts the addEventListener into attachEvent for IE8
        if (element.addEventListener === undefined || element.addEventListener === null) {
            if (element.attachEvent !== undefined && element.attachEvent !== null) {
                element.addEventListener = function(eventName, fn) {
                    // For most of the events, if you just add "on" as a prefix you get the IE8 version of the event
                    element.attachEvent("on" + eventName, fn);
                }
            }
        }

        // This converts the removeEventListener into detachEvent for IE8
        if (element.removeEventListener === undefined || element.removeEventListener === null) {
            if (element.detachEvent !== undefined && element.detachEvent !== null) {
                element.removeEventListener = function(eventName, fn) {
                    // For most of the events, if you just add "on" as a prefix you get the IE8 version of the event
                    element.detachEvent("on" + eventName, fn);
                }
            }
        }

        return element;
    }
}