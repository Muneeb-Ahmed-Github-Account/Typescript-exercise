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

console.log("Unfortunatly, Sorry to say we can't arrange big table so we invite only two guests.\n\n");

while(guestList.length >2 ) {
let removeguest =guestList.pop();
console.log(`Sorry ${removeguest}, you can't participate our dinner." due to can't arrived big table.\n\n `);
}
 
console.log(guestList, "luckly you are still invited in our dinner.\n\n");

guestList.splice(0,2) ;
console.log("empty list:",guestList);
console.log('\nProgram kya baqi raha Sir Dinner ka program to War gaya');