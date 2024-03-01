let guestList = ["Daniyal Naghori", "Ameen Alam", "Zia Khan"];

let notCome = guestList["0"];

console.log(notCome , "is not coming in our dinner");

guestList.splice( 0 , 1 , "Kamran Tessori");

console.log(" Good News! We arrange big table so we invite 3 more guests.");

guestList.unshift("Sir Imran");

guestList.push("Muneeb Ahmed");

guestList.splice( 2, 0, "Saad Hussain" );

console.log("Updated All Guest List");

guestList.forEach(oneguest => console.log(` Asalam-O-Aleikum\n\nMr. ${oneguest}\n\nWould you like to Dinner with me.\n\nThankyou!\n\n `));