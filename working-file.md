# DDD
'instructions' contain 'operators'
    valid operators are: add, divide, multiply and subtract

The last instruction should be "apply" and a number (e.g., "apply 3").
The calculator is then initialised with that number and the previous instructions are applied to that number.

# Tech debt
- ~~Calculator.js does far too much~~
    - ~~parsing the file into the right format should be elsewhere~~
    - ~~those branching 'if's are terrifying~~
- ~Tests should _probably_ use fixtures~
- ~Should test the index file~
- The 'index' file doesn't really make much sense - what's the entry point?
- Need to work out error handling - not sure what to do on silly stuff like cases like 'Infinity" and the like
