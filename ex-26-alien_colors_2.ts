let alienColor : string = "green";
if(alienColor==="green"){
    console.log("Player just earned 5 points for shoting the alien. !");//true condition then not run else
}
else{
    console.log("Player just earned 10 points for shoting the alien. !");
}

alienColor = "white";
if(alienColor==="green"){
    console.log("Player just earned 5 points for shoting the alien. !");//false condition then Run else
}
else{
    console.log("Player just earned 10 points for shoting the alien. !");
}