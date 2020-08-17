// Array.from
// Array.isArray
// Array.prototype
let attrs = `
length

pop
push
shift
unshift

slice
splice
fill
copyWithin
reverse
sort
forEach
every
some
filter
map
includes
find
indexOf
findIndex
lastIndexOf
concat
join
toLocaleString
toString
reduce
reduceRight
flat
flatMap
entries
values
keys`.split("\n");


let ParamsArray = {
    value: {

    },
    valueN: {
        description: 'accepts one to many values',
        datatype: 'any'
    },
    target:     {},
    start:      {},
    begin:      {}, // diff from start is it's capable of negative numbers
    end:        {},
    callback:   {},
    element:    {},
    elementN:   {},
    index:      {},
    array:      {},
    thisArg:    {},
    depth:      {},
    searchElement:{},
    fromIndex:  {},
    seperator:  {},
    accumulator: {},
    currentValue: {},
    initialValue:   {},
    compareFunction: {},
    deleteCount: {},
    itemN:  {},
    locales: {},
    options: {},
};

let x = {
    length: {
        description: ``,
        generate: function(){},
        nL: 0,
        nH: 10,
        datatypes: [],
        params: {}
    }
}