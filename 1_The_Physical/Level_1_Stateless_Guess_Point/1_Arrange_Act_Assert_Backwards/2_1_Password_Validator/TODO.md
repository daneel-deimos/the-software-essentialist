# Password Validator

## Problem statement

Write a function (or a stateless class) for validating passwords. Passwords must meet the following criteria:

1. Between 5 and 15 characters long
2. Contains at least one digit
3. Contains at least one upper case letter
4. Return an object containing a boolean result and an errors key
5. error key that — when provided with an invalid password — contains an error message or type for all errors in occurrence
6. There can be multiple errors at a single time

## Responsibilties / Examples

1. the function returns an object
2. the return object has a result as a boolean value
3. Between 5 and 15 characters - result = true
4. Less than 5 - result = false
5. More than 15 - result = false
6. String contain 1 digit - result = true
7. String contains more than 1 digit - result = true
8. String contains no digits - result = false
9. String contain 1 upper case letter - result = true
10. String contains more than 1 upper case letter - result = true
11. String contains no upper case letters - result = false
12. 

## Grading Checklist

- [ ] I have implemented the minimum requirements listed in the project description
- [ ] I have Programmed By Wishful Thinking, designing the response API before it was actually created 
- [ ] I have Worked Backwards, starting at the Assert, then going to the Act and the Arrange
- [ ] I have tests that validate the following statements 

1. "maxwell1_c" returns a false-y response because of a lack of uppercase characters
2. "maxwellTheBe" returns a false-y response because of a lack of digits
3. "thePhysical1234567" returns a false-y response because of exceeding the 15 character length

- [ ] Once I have made the aforementioned tests pass, I have refactored my test specifications to use it.each() to perform parameterization if there is sufficient duplication (see Tip #3 here)
- [ ] There is no duplication in my test code or my production code
