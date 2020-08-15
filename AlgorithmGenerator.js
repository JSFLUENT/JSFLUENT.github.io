class AlgorithmGenerator {
    expression;
    wrappedExpression;
    ////////////////////////////////////
    // values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    numberPattern = /\d+/g;
    elements;
    selectvariables = `abcdefg`;
    variables = [];
    ////////////////////////////////////
    n;
    m;
    d;
    ////////////////////////////////////
    genExpression(values = 1,datatype="number"){
        this.n = values;
        this.d = datatype;
        this.expression = new ExpressionGenerator().sameDataTypeDiffOperators(this.n,this.d);
        return this;
    }
    generate(variables = 1){
      if (!this.expression) throw new Error();
      this.m = variables;  
      this.identifyValueElements();
      this.replaceValuesWithVariables();
      return this;
    }
    wrapFunction(){
        if (!this.expression) throw new Error();
        this.wrappedExpression = `function exe(){ return ${this.expression} }`;
        return this;
    }
    //////////////////////////////////
    identifyValueElements(){
        this.elements = this.expression.match( this.numberPattern );
        return this;
    }
    replaceValuesWithVariables(){
        if (this.m > this.n) throw new Error();
        let io;
        let index;
        let replacement;
        for (let i = 0; i < this.m; i++) {
            index = Math.floor(Math.random() * this.elements.length);
            io = this.expression.indexOf( this.elements[index] );
            replacement = this.selectvariables[Math.floor(Math.random() * this.selectvariables.length)];
            this.expression = this.expression.replace(this.elements[index], replacement);            
            if (!this.variables.includes(replacement)) this.variables.push(replacement);
            this.elements.splice(index, index+1);
        }
        return this;
    }
}