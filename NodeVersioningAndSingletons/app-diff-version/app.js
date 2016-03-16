var GreetingsModule = require("mymemorysucks-greeting-module").GreetingsModule;
var Friend = require("mymemorysucks-friend-module").Friend;

var myRobotFriend = new Friend();

GreetingsModule.setName("Chris");
console.log(myRobotFriend.introduceYourself());