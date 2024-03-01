let personalNames = "Muneeb Ahmed" 

console.log(personalNames.toLowerCase());

console.log(personalNames.toUpperCase());

console.log(personalNames.replace(/\b\w/g, (char) => char.toUpperCase()));
