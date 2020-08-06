class ValueGenerator {
    value;
    datatypes = {
        // datatypes // values
            boolean: ['true', 'false'],
            number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            string: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
            object: ['{}', "{ a: 'apple' }", '{ b: [] }', '{ c: 12 }', '{ d: {} }', '{ e: 3 }', '{ 0: true }', "{9:''}"],
            array: ['[]', '[1]', '[32]', "['a', 'z']", "['13', 12]", "['a', 'b', 'c']", "[{}]", "[false, true]"],
            function: ['function () { }', 'function () { console.log(datatypes) }'],
            undefined: ['undefined', 'null'],
            symbol: []
    };
    getDataType(datatype) { 
        return datatype || Object.keys(this.datatypes)[Math.floor(Math.random() * Object.keys(this.datatypes).length)];
    }
    generate(datatype) { 
        let d = this.getDataType(datatype);
        let v = this.datatypes[d][Math.floor(this.datatypes[d].length * Math.random())];
        this.value = v;
        return v;
    }
}