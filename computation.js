function submitCode() { }
function nextCode() { }
//////////////////////////////////////////////////////////////////////////////////////////////////

// function QuestionGenerator() { }
class ValueGenerator {
    value;
    datatypes = {
        // datatypes // values
            boolean: [true, false],
            number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            string: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
            object: [{}, { a: 'apple' }, { b: [] }, { c: 12 }, { d: {} }, { e: 3 }, { 0: true }, {9:''}],
            array: [[], [1], [32], ['a', 'z'], ['13', 12], ['a', 'b', 'c'], [{}], [false, true]],
            function: [function () { }, function () { console.log(datatypes) }],
            undefined: [undefined, null],
            symbol: []
    };
    generate(datatype) { 
        let d = Object.keys(datatypes)[datatype || Math.floor(Math.random() * Object.keys(datatypes).length)];
        let v = datatypes[d][Math.floor(datatypes[d].length * Math.random())];
        this.value = v;
        return v;
    }
}

class ExpressionGenerator {
    expression = "";
    sameDataType() { }
    diffDataType() { }
}



//////////////////////////////////////////////////////////////////////////////////////////////////
function SameDatatypesAnswerWithOutput() { }
function SameDatatypesAnswerWithExpression() { }
function DifferentDatatypeAnswerWithOutput() { }
function DifferentDatatypesAnswerWithExpression() { }