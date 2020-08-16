/*export*/ const ops = Object.freeze({
    "double": Object.freeze({
        '&&': "AND",
        '||': "OR",
        '^': "xor",
        '&': "and",
        '|': "or",
        '+': "addition",
        '-': "substract",
        '*': "multiply",
        '/': "divide",
        '**': "power",
        '%': "modulus",
        '<': "less than",
        '>': "greater than",
        '<=': "less than equals",
        '>=': "greater than equals",
        '===': "absolutely equals",
        '==': "kinda equals",
        '!==': "absolutely not equal to",
        '!=': "kinda not equals",
        '>>': "bitwise downshift",
        '<<': "bitwise upshift",
    }),
    "single": Object.freeze({
        "typeof": "check datatype",
        "!": "NOT",
        "~": "not"
    }),
    "left-hand": Object.freeze({
        '=': "assign",
        '+=': "addition assign",
        '-=': "substraction assign",
        '*=': "multiply assign",
        '/=': "divide assign",
        '^=': "xor assign",
        '**=': "power assign",
        '%=': "modulous assign",
        '>>=': "bitwise downshift assign",
        '<<=': "bitwise upshift assign",
        '&=': "and assign"
    })
});