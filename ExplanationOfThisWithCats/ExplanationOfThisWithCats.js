function ball() {
    if (this.name) {
        return this.name + " is playing with the ball!";
    }
    else {
        return "The ball just sits there.";
    }
}

function yarn() {
    if (this.name) {
        return this.name + " is playing with the yarn!";
    }
    else {
        return "The yarn just sits there.";
    }
}

function Cat(name) {
    this.name = name;
}

/**
 * We haven't given anyone the ball.
 */
console.log(ball());

var amelia = new Cat("Amelia");
/**
 * We give Amelia the 'ball'.
 */
amelia.playWithBall = ball;
console.log(amelia.playWithBall());

var frank = new Cat("Frank");
/**
 * We give Frank the 'ball'.
 */
frank.playWithBall = ball;
console.log(frank.playWithBall());

var josephine = new Cat("Josephine");
/**
 * Josephine is smarter and she can play with multiple toys.
 */
josephine.excitedToPlayWith = function (toy) {
    var action = toy.call(this);
    return action;
}
console.log(josephine.excitedToPlayWith(ball));
console.log(josephine.excitedToPlayWith(yarn));

var roger = new Cat("Roger");
/**
 * Roger doesn't play with the toy correctly.
 */
roger.triesToPlayWith = function (toy) {
    var action = "Roger wants to play with the toy! ";
    action = action + toy();
    return action;
}
console.log(roger.triesToPlayWith(ball));
console.log(roger.triesToPlayWith(yarn));