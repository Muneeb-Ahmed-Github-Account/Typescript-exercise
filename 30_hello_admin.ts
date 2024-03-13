const hello_admin : string[] = ['Admin','Shehroz','Shahzad','Amjad','Zakir'];

for(let i=0; i<hello_admin.length; i++){
    if(hello_admin[i]==='Admin'){
        console.log("Hello admin, would you like to see a status report?");
    }

else{
    console.log(`Hello ${hello_admin[i]}, Thankyou for loging in again `);
}

}
