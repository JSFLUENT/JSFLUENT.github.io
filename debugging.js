function DebuggingMissingValues(){}
function DebuggingMissingOperators(){}
function DebuggingSyntaxErrors(){}
function DebuggingSyntaxAnyError(){}
////////////////////////////////////////////////////////////////////
class BugGenerator0 {
    expression      = "";
    buggyExpression = "";
    genExpression(){
        this.expression = new ExpressionGenerator().diffDataTypeDiffOperators();
        return this;
    }
    buggyValue(){
        if (!this.expression) throw new Error();
        return this;
    }
    buggyOperator(){
        if (!this.expression) throw new Error();
        return this;
    }
    buggySyntax(){
        if (!this.expression) throw new Error();
        return this;
    }
}
class BugGenerator1 { // generateAnyBug
    expression      = "";
    buggyExpression = "";
    genExpression(){
        this.expression = new ExpressionGenerator().diffDataTypeDiffOperators();
        this.buggyExpression = this.expression;
        return this;
    }
    anyError() {
        if (!this.expression) throw new Error();
        
        // removes anything that is not a space.
        // must count non spaces first
        // must count numbers
        // must count characters
        // must count special characters

        let nums = [0,1,2,3,4,5,6,7,8,9];
        let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVQXYZ".split("");
        let scars = "`~!@#$%^&*()_+-=[]{};:'\'\\/?.,><".split("");

        let numberList      = [];
        let characterList   = [];
        let specialChars    = [];

        let e;
        for (let i = 0; i < this.expression.length; i++) {
            e = this.expression[i];
            if      (nums.includes(e))  numberList.push(i);
            else if (chars.includes(e)) characterList.push(i);
            else if (scars.includes(e)) specialChars.push(i);
        }

        let n = Math.round(Math.random() * this.expression.length/5) || 1;
        let r;
        for (let i = 0; i !== n; i++) {
            r = Math.floor(Math.random() * 3);
            if      (r === 0) this.buggyExpression[numberList[Math.floor(Math.random() * numberList.length)]] = " ";
            else if (r === 1) this.buggyExpression[characterList[Math.floor(Math.random() * characterList.length)]] = " ";
            else              this.buggyExpression[specialChars[Math.floor(Math.random() * specialChars.length)]] = " ";
        }
        return this;
    }
}