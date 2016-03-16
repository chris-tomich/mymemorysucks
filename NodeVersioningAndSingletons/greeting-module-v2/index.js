var nameToGreet;

exports.GreetingsModule = {
    setName: function (name) {
        nameToGreet = name;
    },
    getGreeting: function () {
        return "Hello " + nameToGreet + " from the v0.1.2 module.";
    }
};