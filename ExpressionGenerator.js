class ExpressionGenerator {
    expression = "";
    sameDataTypeSameOperators(n, datatype, _op) {
        if (typeof datatype !== "string") { 
            datatype = new ValueGenerator().getDataType(datatype);
        }
        this.expression += new ValueGenerator().generate(datatype);
        let op = _op || Object.keys(ops.double)[Math.floor(Object.keys(ops.double).length * Math.random())];
        for (let i = 1; i < n; i++) {
            this.expression += ' ' + op + ' ' + new ValueGenerator().generate(datatype);
        }
        return this.expression;
    }
    sameDataTypeDiffOperators(n,datatype) {
        if (typeof datatype !== "string") { 
            datatype = new ValueGenerator().getDataType(datatype);
        }
        this.expression += new ValueGenerator().generate(datatype);
        let op;
        for (let i = 1; i < n; i++) {
            op = Object.keys(ops.double)[Math.floor(Object.keys(ops.double).length * Math.random())];
            this.expression += ' ' + op + ' ' + new ValueGenerator().generate(datatype);
        }
        return this.expression;
    }
    diffDataTypeSameOperators(n,_op) { 
        this.expression += new ValueGenerator().generate();
        let op = _op || Object.keys(ops.double)[Math.floor(Object.keys(ops.double).length * Math.random())]
        for (let i = 1; i < n; i++) {
            this.expression += op + new ValueGenerator().generate()
        }
        return this.expression;
    }
    diffDataTypeDiffOperators(n) {
        this.expression += new ValueGenerator().generate();
        let op;
        for (let i = 1; i < n; i++) {
            op = Object.keys(ops.double)[Math.floor(Object.keys(ops.double).length * Math.random())]
            this.expression += op + new ValueGenerator().generate()
        }
        return this.expression;
    }
}