function DebuggingNonVariableExpressionsMissingValues(){
    let BG = new BugGenerator0().buggyValue().wrapFunction();
    let question = BG.buggyExpression;
    let answer = BG.expression;
    document.getElementById("code-input53").innerText = question;
    DebuggingNonVariableExpressionsMissingValues.question = question;
    DebuggingNonVariableExpressionsMissingValues.answer = answer;
}
function DebuggingNonVariableExpressionsMissingOperators(){
    let BG = new BugGenerator0().buggyOperator().wrapFunction();
    let question = BG.buggyExpression;
    let answer = BG.expression;
    document.getElementById("code-input54").innerText = question;
    DebuggingNonVariableExpressionsMissingOperators.question = question;
    DebuggingNonVariableExpressionsMissingOperators.answer = answer;
}
function DebuggingNonVariableExpressionsSyntaxErrors(){
    let BG = new BugGenerator0().wrapFunction().buggySyntax();
    let question = BG.buggyExpression;
    let answer = BG.expression;
    document.getElementById("code-input55").innerText = question;
    DebuggingNonVariableExpressionsSyntaxErrors.question = question;
    DebuggingNonVariableExpressionsSyntaxErrors.answer = answer;
}
function DebuggingNonVariableExpressionsAnyError(){
    let BG = new BugGenerator1().anyError();
    let question = BG.buggyExpression;
    let answer = BG.expression;
    document.getElementById("code-input56").innerText = question;
    DebuggingNonVariableExpressionsAnyError.question = question;
    DebuggingNonVariableExpressionsAnyError.answer = answer;
}

function DebuggingVariablesExpressionMissingValues(){}
function DebuggingVariablesExpressionMissingOperators(){}
function DebuggingVariablesExpressionSyntaxErrors(){}
function DebuggingVariablesExpressionAnyError(){}
////////////////////////////////////////////////////////////////////

class BugGenerator0 {
    expression      = "";
    buggyExpression = "3 * 5";
    wrappedExpression = "function exe() {return 3  * 5;}";
    genExpression(){
        this.expression = new ExpressionGenerator().sameDataTypeDiffOperators(4, "number");
        this.buggyExpression = this.expression;
        return this;
    }
    wrapFunction(){
        if (!this.expression) throw new Error();
       this.wrappedExpression = `function exe() {return ${this.buggyExpression};}`
        return this;
    }
    anyError() {
        // small latter to Captial latter, 
        // missing parenthesis, 
        // miss bracket, 
        // missing number, 
        // number to string, 
        // missing operator, 
        // missing colone, 
        // missing semi colone, 
        // using different quetation mark
        
        var foundError = [];
        for (var i = 0; i < wrappedExpression.length; i++){

        }
        
    }
    buggyValue(){
        if (!this.expression) throw new Error();

        // arr of values
        // arr of found values
        // loop once through str to identfiy known values
        // randomly change any vqlues index position
        // "5 + 3 % 2"

        var arrValue = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        var foundValues = [];
        for (var i = 0; i < this.buggyExpression.length; i++) {
            if (arrValue.includes(this.buggyExpression[i])) foundValues.push(i);        
        }
        var index = Math.floor(Math.random() * foundValues.length);
        this.buggyExpression = this.buggyExpression.split("");

        this.buggyExpression[foundValues[index]] = " ";

        this.buggyExpression = this.buggyExpression.join("");

        return this;
    }
    buggyOperator(){
        if (!this.expression) throw new Error();

        var arrOps = [
            "<",">",">=","<=","|","||","/","%","+","=","-","*","**","&","&&","^","!"
        ];
        var foundValues = [];
        for (var i = 0; i < this.buggyExpression.length; i++) {
            if (arrOps.includes(this.buggyExpression[i])) foundValues.push(i);        
        }
        var index = Math.floor(Math.random() * foundValues.length);
        this.buggyExpression = this.buggyExpression.split("");

        this.buggyExpression[foundValues[index]] = " ";

        this.buggyExpression = this.buggyExpression.join("");

        return this;
    }
    buggySyntax(){
        if (!this.expression) throw new Error();
        var arrSyntax = ["(", ")", "{", "}", "[", "]", "'", '"', "`", ",", "?", ":", ";", "var", "let", "const", "for", "while", "if", "else if", "else"];
        var foundSyntax = [];
        for (var i = 0; i < this.buggyExpression.length; i++){
            if (arrSyntax.includes(this.buggyExpression[i])) foundSyntax.push(i);
        }

        var index = Math.floor(Math.random() * foundSyntax.length);
        this.buggyExpression[foundSyntax[index]] = " ";

        this.buggyExpression = this.buggyExpression.join("");

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