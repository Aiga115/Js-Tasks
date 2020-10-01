function month_name(date){

    var monthlist =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
   console.log(monthlist[date.getMonth()]);
}

month_name(new Date("10/11/2009")); 