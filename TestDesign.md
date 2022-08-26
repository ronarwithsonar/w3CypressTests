# 1.1

- all functions with integer numbers, both + and -
- all functions with stringed numbers
- all functions with string non-number characters
- divide by zero
- all functions with fraction/decimals
- Recursive usage -> ((((14 - 4) × (50 + 3)) × 0) ÷ Math.sqrt(12345))

# 1.2

### Happy Path
- `canRentCar(21, 1002, true)`  - pass

### Negative Path - testing failures on each input variable 
- `canRentCar(15, 1002, true)`  - fail on age
- `canRentCar(999, 1001, true)` - fail on age
- `canRentCar(21, -1000, true)` - fail on balance
- `canRentCar(21, 1002, false)` - fail on driving license check

### Limit/Boundary tests
- `canRentCar(16, 1002, true)`  - should fail as 16 is below age limit
- `canRentCar(17, 1002, true)`  - should pass as 17 is above age limit
- `canRentCar(99, 1002, true)`  - should pass as 99 is below age limit
- `canRentCar(100, 1001, true)` - should fail as 100 is above age limit
- `canRentCar(21, 1000, true)`  - should pass as 1000 is minimum
- `canRentCar(21, 999, true)`   - should fail as 999 is below minimum

### Edge Cases

If the function was taking parameters from a user, ensure that the inputs are sanitised (** not sure if a string can be passed in to this function in TypeScript **)
- `canRentCar(21, "1002'); EXEC sp_MSforeachtable @command1 = \"DROP TABLE ?\"", true)`

Or the user could try to cause a failure
- `canRentCar((15 / 0), (1002 / 0), false)`

Java implementation will throw an ArithmeticException. JavaScript will return Infinity

-----

Again, not sure if strings are acceptable if input is declared as number/boolean in TypeScript
`canRentCar("21", "1002", "true")`

-----

How does the function handle decimals?
`canRentCar(21, 1002.92, true)`  - pass
`canRentCar(21.34, 1002, true)`  - pass