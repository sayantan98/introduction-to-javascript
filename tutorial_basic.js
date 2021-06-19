//single line comment
/* 1st line
2nd line 
multiline comment */

// 1. Variable Daclaration
var ourName;

// 2. Mathematical Operation
var myVar = 5+10;
myVar = 5-10;
myVar = 5*10;
myVar = 5/10;
myVar = 5%10;

// 3. Increment/Decrement Operator
myVar++;
myVar--;

// 4. Augmented Operator
a+=b;
a-=b;
a*=b;
a/=b;

// 5. String and it's manipulation
var nam = "Sayantan";
var n = nam.length;
var nam = "Sayantan said,\"I'm the best\""; // have to re-initialize, as strings are immutable in javascript
var nam = "Sayantan said,'I'm the best'"; //Alternative method

// Special: Date Object
var d = new Date();
var d = new Date(2018, 11, 24, 10, 33, 30, 0); //creates a new date object with a specified date and time (year, month, day, hour, minute, second, and millisecond)
//some get methods regarding date objects
d.getDate();
d.getMinutes();
//some set methods regarding date objects
d.setFullYear(2020,11,3);
d.setMonth(11);

// 6. Array
var sandwich =["peanut butter", "jelly", "bread"];

// 6.1 : Nested Array
var nested_arr_ex =[["peanut butter", "jelly", "bread"],[1,2,3]];

// 6.2 : Multi-Dimensional Array
var multid_arr_ex =[
    ["peanut butter", "jelly", "bread"],
    [1,2,3],
    [["bro",1],2,3]
];

// 6.3 : Array sorting (String)
var fruits= ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); // shall return ["Apple", "Banana", "Mango", "Orange"]
fruits.reverse(); // reverse order sorting

// 6.4 : Array sorting (Number)
var num_sorting = [2,54,3,20,544,83];
num_sorting.sort(function(a,b){return a-b});
num_sorting.sort(function(a,b){return b-a}); //reverse order sorting

// 7. Conditions
var hour = new Date().getHours(); //That's how date object is initialized (with hours)
var greeting;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

// 8. Switch
switch(new Date().getDay()){
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    default:
        day = "A day" ;
}

// 9. Function
function myFunc(p1,p2){
    return p1*p2;
}
for(var i = 0; i < cars.length; i++) { // For-loop
  text += cars[i] + "<br>";
}

// 10. For--in & For--of loop
var person = {fname: "John", lname: "Doe", age: 25};
var text = "";
var x;
for(x in person) {    // for----in goes through the key of the object
  text += person[x];
}
for(x of person) {    // for----of goes through the values of the object
  text += x + "<br>";
}

// 11. While loop
while (i < 10) {
  text += "The number is " + i;
  i++;
}

// 12. Objects
var car_obj = {type:"Fiat", model: "500", color: "white"};



