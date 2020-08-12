class LoopGenerator {
    code="";
    initial;
    limit;
    gt;
    limiter;
    codeBlock = `console.log(i)`
    incOp;
    incVal;
    incs = {   
        '+=': {initial:0,limit:100, incVal:10,gt:true},  
        '-=': {initial:0,limit:100, incVal:10,gt:false},
        '*=': {initial:0,limit:1000,incVal:10,gt:true},  
        '/=': {initial:0,limit:1000,incVal:10,gt:false},  
        // '^=': {initial:0,limit:100,gt:true},
        // '%=': {initial:0,limit:100,gt:true},  
        '**=':{initial:0,limit:1000,incVal:3,gt:true}, 
        // '>>=':{initial:0,limit:100,gt:true},
        // '<<=':{initial:0,limit:100,gt:true}, 
        // '&=': {initial:0,limit:100,gt:true}
    }
    ////////////////////////////////////////////////////////////
    generate(op){
        if (op in this.incs) {
            let temp = this.incs[op];
            this.incs = {};
            this.incs[op] = temp;
        }
        this.incrementOpSelector();
        this.limitSelector();
        this.incrementValueSelector();
        this.initialSelector();
        this.swapLimits();
        this.codeSyntaxPlacement();
        return this;
    }
    ////////////////////////////////////////////////////////////
    incrementOpSelector(){
        let incs = Object.keys(this.incs);
        this.incOp = incs[Math.floor(Math.random()*incs.length)];
        this.initial = this.incs[this.incOp].initial;
        this.limit   = this.incs[this.incOp].limit;
        this.incVal  = this.incs[this.incOp].incVal;
        this.gt      = this.incs[this.incOp].gt;
    }
    limitSelector(){
        this.limit = Math.round(Math.random() * this.limit);
    }
    incrementValueSelector(){
        this.incVal = Math.ceil(Math.random() * this.incVal);
    }
    initialSelector(){
        this.initial = Math.ceil(Math.random() * this.limit);
    }
    swapLimits(){
        if (!this.gt) {
            let temp = this.limit;
            this.limit = this.initial;
            this.initial = temp;
        }
    }
    codeSyntaxPlacement(){
        this.limiter = this.gt?(`i < ${this.limit}`):(`i > ${this.limit}`);
        this.incrementor = `i ${this.incOp} ${this.incVal}`;
        this.code = `for (let i = ${this.initial}; ${this.limiter}; ${this.incrementor}) {
            ${this.codeBlock};
        }`;
    }
}