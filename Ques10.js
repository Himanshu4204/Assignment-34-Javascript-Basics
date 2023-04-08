/*10. Write a program to find the area of the circle. Take radius of circle from user as input and print the result in below given format.
Expected output format – “Area of circle is A having the radius R”. Replace A with area & R with radius*/
let radius=parseFloat(prompt("Enter Radius of the circle:"))
const area=Math.PI*radius**2
console.log("Area of Circle is "+area+"having the radus R"+radius)

//this program is run using html code because it takes user input so it only runs in server