console.log("Conditional test Equality with string:", "Apple" === "Apple");

console.log("Conditional test Inequality:", ("Apple" as string) != "Banana");

console.log("Conditional test Lower case:", "APPLE".toLowerCase() === "apple");

console.log('Numerical test in equality:', 10 == 10) ;

console.log('Numerical test in Inequality:', 10 as number != 8) ;

console.log('Test in Greater then:', 10 > 6);
console.log('Test in less then:', 10 < 20);

console.log('Test Greater then or Equal:', 20 >= 20);
console.log('Test Less then or Equal:', 19 <= 20);

console.log('Test And And operator:', 1===1 && 400 > 350 ); // i predict true
console.log('Test OR operator:', 1 != 1 || 100 > 90 );     // i predict true

const itTeachersName: string[] = ['Ameen Alam', 'Ahmed Raza','Syed Hamza','Sir Jawad'];
console.log('test name in Array:', itTeachersName.includes('Ahmed Raza'));
console.log('test name not in a Array:',!itTeachersName.includes('Muneeb')); //fist i found 'false' because 'Muneeb'
//-is not Available in Array then i used exclementry sign(!) in veriable so i found "true"
