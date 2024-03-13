let arrayOfNumbers: number[] = [1,2,3,4,5,6,7,8,9];

for(let num of arrayOfNumbers){

    let ordinalNumber: string;

    if(num ===1){
        ordinalNumber = 'st'; 
    }
    else if(num === 2){
        ordinalNumber = 'nd';
    }
    else if(num === 3){
        ordinalNumber = 'rd';
    }
    else {
        ordinalNumber = 'th';
     }
       console.log(`${num}${ordinalNumber}`);
    
    }