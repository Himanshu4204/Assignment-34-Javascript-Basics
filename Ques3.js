/*3. Figure out the result of the following expressions first without using console.log().
After you decide the result confirm it by using console.log() */

/* 4 > 3 && 10 < 12True Because 4 is greater than 3 and 12 is greater than 10 */
console.log(4 > 3 && 10 < 12);

// b. 4 > 3 && 10 > 12 False because 4 is greater than 3 but 10 is smaller than 12
console.log(4 > 3 && 10 > 12);

// 4 > 3 || 10 < 12 True Beause all conditions are true
console.log(4 > 3 || 10 < 12);

/*it will be evaluated in two parts. First, 4 > 3 which evaluates to true, and second, 10 > 12 which evaluates to false. Since we are using the OR operator, the result will be true because at least one of the conditions is true. */
console.log(4 > 3 || 10 > 12);

/* !(4 > 3) False because Since 4 is indeed greater than 3, the comparison 4 > 3 will evaluate to true. Then, the NOT operator will negate this result, making it false. */
console.log(!(4 > 3));

/* !(4 < 3) True because since 3 is smaller than 4 the comparison 4<3 will evaluate to false Then the NOT Operator will negate this result making it True.*/
console.log(!(4 < 3));

/* !(false)  True because The negation of false using the NOT operator will result in the boolean value true. This is because the NOT operator reverses the boolean value of its operand.*/
console.log(!false);

//!(4 > 3 && 10 < 12)  False because the comparison result is true and not operator change it into false.
console.log(!(4 > 3 && 10 < 12));

// !(4 > 3 && 10 > 12) True because the comparison result is false and not operator change it into true.
console.log(!(4 > 3 && 10 > 12));

// !(4 === '4') The comparison operator === checks for both value and type equality. Since the value 4 is a number and the value '4' is a string, the comparison will evaluate to false.Then, the NOT operator will negate this result, making it true.
console.log(!(4 === "4"));
