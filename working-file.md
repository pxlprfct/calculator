# DDD
'instructions' contain 'operators'
    add, divide, multiply and subtract

The last instruction should be "apply" and a number (e.g., "apply 3"). The calculator is then initialised with that number and the previous instructions are applied to that number.

# Tech debt
- calculator does far too much
    - parsing the file into the right format should be elsewhere
    - those branching 'if's are terrifying
- ~Tests should _probably_ use fixtures~
