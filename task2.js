var date = new Date();
var day = date.getDay();
var hour = date.getHours();
var min = date.getMinutes();
var seconds = date.getSeconds();
var daylist = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];

var prepand = (hour >= 12)? " PM ":" AM ";
hour = (hour >= 12)? hour - 12: hour;
console.log("Today is: "+daylist[day]);
console.log("Current time is: "+hour+prepand+":"+min+":"+seconds)


