# Calculator

![Node.js CI](https://github.com/pxlprfct/calculator/workflows/Node.js%20CI/badge.svg)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=pxlprfct_calculator&metric=alert_status)](https://sonarcloud.io/dashboard?id=pxlprfct_calculator)

> Write some code to calculate a result from a set of instructions.
> 
> Instructions comprise a keyword and a number that are separated by a space per line. Instructions are loaded from file and results are output to the screen. Any number of Instructions can be specified.
> 
> Instructions should be the add, divide, multiply and subtract operators, ignoring mathematical precedence. The last instruction should be "apply" and a number (e.g., "apply 3"). The calculator is then initialised with that number and the previous instructions are applied to that number.
>
> Please include unit tests and demonstrate good architectural principles.
> 
> This should take you no longer than 2 hours.

**Example 1**
```
[Input from file]
add 2
multiply 3
apply 3

[Output to screen]
15

[Explanation]
(3 + 2) * 3 = 15
```

**Example 2**
```
[Input from file]
multiply 9
apply 5

[Output to screen]
45

[Explanation]
5 * 9 = 45
```

Built using the [node-starter](https://github.com/pxlprfct/node-starter) template.

## Run commands

- `npm run start`: Starts the project
- `npm run test`: Runs the tests - once
- `npm run test:watch`: Continually watches and runs the tests on code changes
- `npm run lint`: Formats the source code using ESLint
