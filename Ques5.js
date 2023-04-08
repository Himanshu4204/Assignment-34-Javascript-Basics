/*5. Write a code which can give grades to students according to theirs scores:
a. 80-100, A
b. 70-79, B
c. 60-69, C
d. 50-59, D
e. 0-49, F
*/
let marks = 15;
if (marks >= 80) {
  console.log("Your Grade is A");
}
if (marks > 70 && marks <= 79) {
  console.log("Your Grade is B");
}
if (marks > 60 && marks <= 69) {
  console.log("Your Grade is C");
}
if (marks > 50 && marks <= 59) {
  console.log("Your Grade is D");
}
if (marks >= 0 && marks <= 49) {
  console.log("Your Grade is F");
}
