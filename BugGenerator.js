class BugGenerator0 {
    expression      = "";
    buggyExpression = "3 * 5";
    wrappedExpression = "function exe() {return 3  * 5;}";

    list = {
        "values": {
            ref:    ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
            found:  []
        },
        "operators": {
            ref:    Object.keys(ops.double),
            found:  []
        },
        "syntax": {
            ref:    ["(", ")", "{", "}", "[", "]", "'", '"', "`", ",", "?", ":", ";", "var", "let", "const", "for", "while", "if", "else if", "else","function"],
            found:  []
        },
        "characters": {
            ref:    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVQXYZ".split(""),
            found:  []
        },
        "special characters": {
            ref:    "`~!@#$%^&*()_+-=[]{};:'\'\\/?.,><".split(""),
            found:  []
        }
    }

    bugs = Object.keys(this.list);
    n;

    i;
    index;

    genExpression(n){
        this.expression = new ExpressionGenerator().sameDataTypeDiffOperators(n || 4, "number");
        this.buggyExpression = this.expression;
        return this;
    }
    wrapFunction(){
        if (!this.expression)       throw new Error();
        if (!this.buggyExpression)  throw new Error();
        this.wrappedExpression = `function exe() {return ${this.buggyExpression};}`
        return this;
    }
    genBug(bug,n){
        this.bug = bug;
        this.n = n;
        if (!this.expression)                            throw new Error();
        if (!this.buggyExpression)                       throw new Error();
        if (!this.bugs.includes(this.bug))               throw new Error();
        if (!(typeof this.n === "number" && this.n > 0)) throw new Error();
        this.identifyElements();
        this.convertExpressionToArray();
        this.buggifyCode();
        this.convertExpressionToString();
        return this;
    }
    genAnyBug(){

    }
    identifyElements(){
        this.bugs.forEach(function(bugE){
            this.list[bugE].ref.forEach(function(e){
                this.index = this.wrappedExpression.indexOf(e)
                if (this.index !== -1) {
                    this.list[bugE].found.push([this.index, e.length]);
                }
            }.bind(this));
        }.bind(this));
        return this;
    }
    randomizeIndexSelection(){
        this.index = Math.floor(Math.random() * this.list[this.bug].found.length);
        return this;
    }
    buggifyCode(){
        let f;
        let offset = 0; // unused for now
        for (let i = 0; i < this.n; i++) {
            this.randomizeIndexSelection();
            f = this.list[this.bug].found[this.index];
            this.wrappedExpression[f[0]] = " ";
        }
        return this;
    }
    convertExpressionToArray(){
        this.wrappedExpression = this.wrappedExpression.split("");
        return this;
    }
    convertExpressionToString(){
        this.wrappedExpression = this.wrappedExpression.join("");
        return this;
    }
    // anyError() {
    //     // small latter to Captial latter, 
    //     // missing parenthesis, 
    //     // miss bracket, 
    //     // missing number, 
    //     // number to string, 
    //     // missing operator, 
    //     // missing colone, 
    //     // missing semi colone, 
    //     // using different quetation mark
        
    //     var foundError = [];
    //     for (var i = 0; i < wrappedExpression.length; i++){

    //     }
        
    // }
    // buggyValue(){
    //     if (!this.expression) throw new Error();

    //     // arr of values
    //     // arr of found values
    //     // loop once through str to identfiy known values
    //     // randomly change any vqlues index position
    //     // "5 + 3 % 2"

    //     var arrValue = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    //     var foundValues = [];
    //     for (var i = 0; i < this.buggyExpression.length; i++) {
    //         if (arrValue.includes(this.buggyExpression[i])) foundValues.push(i);        
    //     }
    //     var index = Math.floor(Math.random() * foundValues.length);
    //     this.buggyExpression = this.buggyExpression.split("");

    //     this.buggyExpression[foundValues[index]] = " ";

    //     this.buggyExpression = this.buggyExpression.join("");

    //     return this;
    // }
    // buggyOperator(){
    //     if (!this.expression) throw new Error();

    //     var arrOps = [
    //         "<",">",">=","<=","|","||","/","%","+","=","-","*","**","&","&&","^","!"
    //     ];
    //     var foundValues = [];
    //     for (var i = 0; i < this.buggyExpression.length; i++) {
    //         if (arrOps.includes(this.buggyExpression[i])) foundValues.push(i);        
    //     }
    //     var index = Math.floor(Math.random() * foundValues.length);
    //     this.buggyExpression = this.buggyExpression.split("");

    //     this.buggyExpression[foundValues[index]] = " ";

    //     this.buggyExpression = this.buggyExpression.join("");

    //     return this;
    // }
    // buggySyntax(){
    //     if (!this.expression) throw new Error();
    //     var arrSyntax = ["(", ")", "{", "}", "[", "]", "'", '"', "`", ",", "?", ":", ";", "var", "let", "const", "for", "while", "if", "else if", "else"];
    //     var foundSyntax = [];
    //     for (var i = 0; i < this.buggyExpression.length; i++){
    //         if (arrSyntax.includes(this.buggyExpression[i])) foundSyntax.push(i);
    //     }

    //     var index = Math.floor(Math.random() * foundSyntax.length);
    //     this.buggyExpression[foundSyntax[index]] = " ";

    //     this.buggyExpression = this.buggyExpression.join("");

    //     return this;
    // }
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