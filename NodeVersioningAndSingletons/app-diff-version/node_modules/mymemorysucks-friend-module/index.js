var GreetingsModule = require("mymemorysucks-greeting-module").GreetingsModule;

exports.Friend = function () {
    this.introduceYourself = function () {
        var introduction = "Friend says: " + GreetingsModule.getGreeting() + " I am the friend module.";

        return introduction;
    };
};