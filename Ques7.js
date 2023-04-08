/*7. Create a human readable time format using the Date time object
a. YYYY-MM-DD HH:mm
b. DD-MM-YYYY HH:mm
c. DD/MM/YYYY HH:mm  */

let today=new Date()
let date=today.getFullYear()+'-'+today.getMonth()+'-'+today.getDay()+ ' '+ today.getHours()+":"+today.getMinutes();
let date2=today.getDay()+'-'+today.getMonth()+'-'+today.getFullYear()+ ' '+ today.getHours()+":"+today.getMinutes();
let date3=today.getDay()+'/'+today.getMonth()+'/'+today.getFullYear()+ ' '+ today.getHours()+":"+today.getMinutes();
console.log(date)
console.log(date2)
console.log(date3)
