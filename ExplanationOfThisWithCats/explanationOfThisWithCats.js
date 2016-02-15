/**
 * This is a function that represents a "ball".
 */
function ball() {
    if (this.name) {
        console.log(this.name + " is playing with the ball!");
    }
    else {
        console.log("The ball just sits there.");
    }
}

/**
 * This is a function that represents a "ball of yarn".
 */
function yarn() {
    if (this.name) {
        console.log(this.name + " is playing with the ball of yarn!");
    }
    else {
        console.log("The ball of yarn just sits there.");
    }
}

/**
 * This is a Cat prototype.
 */
function Cat(name) {
    this.name = name;
    this.toy = function () {
        console.log(this.name + " doesn't have a toy to play with. :(");
    }
    this.play = function () {
        this.toy();
    }
}

/**
 * We haven't given the ball to any of our cats.
 */
ball();

/**
 * We haven't given the ball of yarn to any of our cats.
 */
yarn();

var amelia = new Cat("Amelia");
/**
 * We ask amelia to play.
 */
amelia.play();
/**
 * We give Amelia the 'ball'.
 */
amelia.toy = ball;
amelia.play();

var frank = new Cat("Frank");
/**
 * We give Frank the 'yarn'.
 */
frank.toy = yarn;
frank.play();

var josephine = new Cat("Josephine");
/**
 * Josephine is smarter and she can play with multiple toys.
 */
josephine.playWith = function (toy) {
    toy.call(this);
}
josephine.playWith(ball);
josephine.playWith(yarn);

var roger = new Cat("Roger");
/**
 * Amelia shares her toy with Roger.
 */
roger.toy = amelia.toy;
roger.play();

/**
 * Frank shares his toy with Roger.
 */
roger.toy = frank.toy;
roger.play();