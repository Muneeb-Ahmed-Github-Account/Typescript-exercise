let countriesVisit = ['Turkey','Palastine','Saudi Arab','Afghanistan','Syria'];

console.log('\nOriginal Array Non Alphabetical:', countriesVisit);

console.log('\n\nCopy and Alphabetical Array:',[...countriesVisit].sort());

console.log('\n\nOriginal Array Non Alphabetical:', countriesVisit);

console.log("\n\nCopy and Alphabetical Array with Reverse Condition:",[...countriesVisit].sort().reverse());

console.log("\nStill in Original List:", countriesVisit);

console.log("\n\nOriginal Order list with Reverse function:", countriesVisit.reverse());

console.log("\nAgain apply Reverse function:",countriesVisit.reverse() );

console.log("\n\nOriginal Array changed to Alphabetical Array:", countriesVisit.sort());

console.log("\nAlphabetical Array changed to reverse:", countriesVisit.reverse());