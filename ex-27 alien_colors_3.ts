let alienColors : string = "green";
//version 1
if(alienColors==="green"){
    console.log("Version 1: Player just earned 5 points.!");

}else if(alienColors==="yellow"){
    console.log("Player just earned 10 points");

}else if(alienColors==="red"){
    console.log("Player just earned 15 points");
}
else{
    console.log("Please select Right Color.!")
}

//version 2
 alienColors = "yellow";
if(alienColors==="green"){
    console.log("Player just earned 5 points");

}else if(alienColors==="yellow"){
    console.log("Version 2: Player just earned 10 points.!");

}else if(alienColors==="red"){
    console.log("Player just earned 15 points");
}else{
    console.log("Please select Right Color.!")
}

//version 3
alienColors = "red";
if(alienColors==="green"){
    console.log("Player just earned 5 points");

}else if(alienColors==="yellow"){
    console.log("Player just earned 10 points");

}else if(alienColors==="red"){
    console.log("Version 3: Player just earned 15 points.!");
}
else{
    console.log("Please select Right Color.!")
}