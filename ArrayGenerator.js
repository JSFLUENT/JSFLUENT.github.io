class ArrayGenerator {
    array = [];
    n;
    datatype;
    generate(n, datatype){

        this.n          = n;
        this.datatype   = datatype;

        for (let i = 0; i < n; i++) this.array.push(Math.round(100*Math.random()));

        return this;
    }
}