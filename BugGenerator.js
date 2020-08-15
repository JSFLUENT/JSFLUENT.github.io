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
}