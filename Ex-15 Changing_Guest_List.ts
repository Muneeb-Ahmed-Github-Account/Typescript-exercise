let guestList = ["Daniyal Nagori", "Ameen Alam", "Zia Khan"];
let dontCome = guestList[0] ;
console.log(dontCome, "is not coming in our dinner" );
guestList.splice( 0 , 1 , "Kamran Tessori");   //for remove daniyal nagori and add kamran tessori
guestList.forEach(guest => console.log(`Asalam o Aleikum\n\nMr. ${guest}\n\nWould you like to Dinner with me.\n\nThankyou. `));