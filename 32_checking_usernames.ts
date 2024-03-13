let current_usernames: string[] = ['Shahab-u-Deen','Alamdeen','Mumtaz Hussain','Zaheer Babar','Tariq bin Ziyad'];

let new_usernames: string[] = ['ShaHab-u-DEEN','Mehmood Ghaznavi','Altamash','ZaHeer Babar','Tanveer Hussain'];

new_usernames.forEach(newusername =>{
    let lowerCase: string = newusername.toLowerCase();

if(current_usernames.map(c_username => c_username.toLowerCase()).includes(lowerCase)){
    console.log(`This user name ${newusername} is not available.Please write a diffrent name.`);
}else{
    console.log(`The user name ${newusername} is available.`);
}      
    
})
