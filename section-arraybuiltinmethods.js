// Array.from
// Array.isArray
// Array.prototype
// length
const ParamsArray = {
    value: {
        datatype: 'any',
        description: 'any datatype input'
    },
    valueN: {
        datatype: 'any',
        description: 'accepts one to many values'
    },
    target:     {
        datatype: 'any',
        description: `Zero based index at which to copy the sequence to. If negative, target will be counted from the end.
        If target is at or greater than arr.length, nothing will be copied. If target is positioned after start, the copied sequence will be trimmed to fit arr.length.`
    },
    start:      {
        datatype: 'number',
        description: `Zero based index at which to start copying elements from. If negative, start will be counted from the end.
        If start is omitted, copyWithin will copy from the start (defaults to 0).`
    },
    begin:      {
        datatype: `number`,
        description: ``
    },
    end:      {
        datatype: `number`,
        description: `Zero based index at which to end copying elements from. copyWithin copies up to but not including end. If negative, end will be counted from the end.
        If end is omitted, copyWithin will copy until the end (default to arr.length).`
    }, // diff from start is it's capable of negative numbers
    callback:   {
        datatype:`function`,
        description:`Function to test for each element, taking three arguments:`,
        params: ["element","index","array"]
    },
    element:    {
        datatype:`any`,
        description:`The current element being processed in the array.`
    },
    elementN:   {
        datatype: `any`,
        description: `The elements to add to the end of the array.`
    },
    index:      {
        datatype:'number',
        description:`The index of the current element being processed in the array`
    },
    array:      {
        datatype:`array`,
        description:`current array being iterated through`
    },
    thisArg:    {
        datatype: "object",
        description: `Optional. Value to use as this when executing callback.`
    },
    depth:      {
        datatype: 'number',
        description: `The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.`
    },
    searchElement:{
        datatype: "any",
        description: "The element to search for." 
    },
    fromIndex:  {
        datatype: "number",
        description: "starting index number"
    },
    seperator:  {
        datatype: "string",
        description: `Specifies a string to separate each pair of adjacent elements of the array. The separator is converted to a string if necessary. If omitted, the array elements are separated with a comma (","). If separator is an empty string, all elements are joined without any characters in between them.`
    },
    accumulator: {
        datatype: "number",
        description: ""
    },
    reducer: {
        datatype: "function",
        description: "",
        params: ["accumulator","currentValue","currentIndex","array"]
    },
    currentValue: {
        datatype: "any",
        description: "the current element selected",
    },
    initialValue:   {
        datatype: "number",
        description: "the starting point"
    },
    compareFunction: {
        datatype: "function",
        description: "Specifies a function that defines the sort order. If omitted, the array is sorted according to each character's Unicode code point value, according to the string conversion of each element.",
        params: ["a","b"]
    },
    deleteCount: {
        datatype: "number",
        description: `An integer indicating the number of old array elements to remove.
        If deleteCount is omitted, or if its value is larger than array.length - start (that is, if it is greater than the number of elements left in the array, starting at start), then all of the elements from start through the end of the array will be deleted.
        If deleteCount is 0 or negative, no elements are removed. In this case, you should specify at least one new element (see below).`
    },
    itemN:  {
        datatype: "any",
        description: `The elements to add to the array, beginning at the start index. If you don't specify any elements, splice() will only remove elements from the array.`
    },
    locales: {
        datatype: "string",
        description: `A string with a BCP 47 language tag, or an array of such strings. For the general form and interpretation of the locales argument, see the Intl page`
    },
    options: {
        datatype: "object",
        description: `An object with configuration properties, for numbers see Number.prototype.toLocaleString(), and for dates see Date.prototype.toLocaleString().
        Return value`
    }
};

const ArrayMethods = {
    "pop": {
        "description": "The pop() method removes the last element from an array and returns that element. This method changes the length of the array.",
        "nL": 0,
        "nH": 10,
        "params": []
    },
    "push": {
        "description": "The push() method adds one or more elements to the end of an array and returns the new length of the array.",
        "nL": 0,
        "nH": 10,
        "params": ["elementN"]
    },
    "shift": {
        "description": "The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.",
        "nL": 0,
        "nH": 10,
        "params": []
    },
    "unshift": {
        "description": "The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.",
        "nL": 0,
        "nH": 10,
        "params": ["elementN"]
    },
    "slice": {
        "description": "The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.",
        "nL": 0,
        "nH": 10,
        "params": ["begin", "end"]
    },
    "splice": {
        "description": "The splice() method changes the contents of an array by removing existing elements and/or adding new elements.",
        "nL": 0,
        "nH": 10,
        "params": ["start", "deleteCount", "itemN"]
    },
    "fill": {
        "description": "The every() method tests whether all elements in the array pass the test implemented by the provided function.",
        "nL": 0,
        "nH": 10,
        "params": ["callback", "thisArg"]
    },
    "copyWithin": {
        "description": "The copyWithin() method shallow copies part of an array to another location in the same array and returns it, without modifying its size.",
        "nL": 0,
        "nH": 10,
        "params": ["target", "start", "end"]
    },
    "reverse": {
        "description": "The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.",
        "nL": 0,
        "nH": 10,
        "params": []
    },
    "sort": {
        "description": "The sort() method sorts the elements of an array in place and returns the array. The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.\n        The time and space complexity of the sort cannot be guaranteed as it is implementation dependent.",
        "nL": 0,
        "nH": 10,
        "params": ["compareFunction"]
    },
    "forEach": {
        "description": "The forEach() method executes a provided function once for each array element.",
        "nL": 0,
        "nH": 10,
        "params": ["callback", "thisArg"]
    },
    "every": {
        "description": "The every() method tests whether all elements in the array pass the test implemented by the provided function.",
        "nL": 0,
        "nH": 10,
        "params": ["callback", "thisArg"]
    },
    "some": {
        "description": "The some() method tests whether at least one element in the array passes the test implemented by the provided function.",
        "nL": 0,
        "nH": 10,
        "params": ["callback", "thisArg"]
    },
    "filter": {
        "description": "The filter() method creates a new array with all elements that pass the test implemented by the provided function.",
        "nL": 0,
        "nH": 10,
        "params": ["callback", "thisArg"]
    },
    "map": {
        "description": "The map() method creates a new array with the results of calling a provided function on every element in the calling array.",
        "nL": 0,
        "nH": 10,
        "params": ["callback", "thisArg"]
    },
    "includes": {
        "description": "The includes() method determines whether an array includes a certain element, returning true or false as appropriate.",
        "nL": 0,
        "nH": 10,
        "params": ["searchElement", "fromIndex"]
    },
    "find": {
        "description": "The find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.",
        "nL": 0,
        "nH": 10,
        "params": ["callback", "thisArg"]
    },
    "indexOf": {
        "description": "The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.",
        "nL": 0,
        "nH": 10,
        "params": ["searchElement", "fromIndex"]
    },
    "findIndex": {
        "description": "The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating no element passed the test.",
        "nL": 0,
        "nH": 10,
        "params": ["callback", "thisArg"]
    },
    "lastIndexOf": {
        "description": "The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex",
        "nL": 0,
        "nH": 10,
        "params": ["searchElement", "fromIndex"]
    },
    "concat": {
        "description": "The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.",
        "nL": 0,
        "nH": 10,
        "params": ["valueN"]
    },
    "join": {
        "description": "The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.",
        "nL": 0,
        "nH": 10,
        "params": ["seperator"]
    },
    "toLocaleString": {
        "description": "The toLocaleString() method returns a string representing the elements of the array. The elements are converted to Strings using their toLocaleString methods and these Strings are separated by a locale-specific String (such as a comma “,”).",
        "nL": 0,
        "nH": 10,
        "params": ["locales", "options"]
    },
    "toString": {
        "description": "The toString() method returns a string representing the specified array and its elements.",
        "nL": 0,
        "nH": 10,
        "params": []
    },
    "reduce": {
        "description": "The reduce() method executes a reducer function (that you provide) on each member of the array resulting in a single output value.",
        "nL": 0,
        "nH": 10,
        "params": ["reducer", "initialValue"]
    },
    "reduceRight": {
        "description": "The reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.",
        "nL": 0,
        "nH": 10,
        "params": ["reducer", "initialValue"]
    },
    "flat": {
        "description": "The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.",
        "nL": 0,
        "nH": 10,
        "params": ["depth"]
    },
    "flatMap": {
        "description": "The flatMap() method first maps each element using a mapping function, then flattens the result into a new array. It is identical to a map followed by a flat of depth 1, but flatMap is often quite useful, as merging both into one method is slightly more efficient.",
        "nL": 0,
        "nH": 10,
        "params": ["callback", "thisArg"]
    },
    "entries": {
        "description": "The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.",
        "nL": 0,
        "nH": 10,
        "params": []
    },
    "values": {
        "description": "The values() method returns a new Array Iterator object that contains the values for each index in the array.",
        "nL": 0,
        "nH": 10,
        "params": []
    },
    "keys": {
        "description": "The keys() method returns a new Array Iterator object that contains the keys for each index in the array.",
        "nL": 0,
        "nH": 10,
        "params": []
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById("section-arraybuiltinmethods-questions").innerHTML += `
    <div id="section-arraybuiltinmethods-questions-paramsreference">
        <h3>Paramaters of Array builtin Methods</h3>
    </div>
    <div id="section-arraybuiltinmethods-questions-methods"></div>
`;
let paramName = "";
let pDataType = "";
let pDescription = "";
for (let e in ParamsArray) {
    paramName = e;
    pDataType = ParamsArray[e].datatype;
    pDescription = ParamsArray[e].description;
    document.getElementById("section-arraybuiltinmethods-questions-paramsreference").innerHTML += `
    <div>
        <h4>Param: ${paramName}</h4>
        <p>Datatype: ${pDataType}</p>
        <p>Description: ${pDescription}</p>
    </div>`
}
let methodName = "";
let params     = "";
let param      = "";
let questions  = "";
let temp;
for (let e in ArrayMethods) {
    methodName = e;
    params = ArrayMethods[e].params;
    pDescription = ArrayMethods[e].description;
    questions = "";
    // try param inputs empty and also pop params
    let populatedArray = new ArrayGenerator().generate(10).array;
    if (0 === params.length) {
        for (let i = 0; i < 10; i++) {
            temp = populatedArray[methodName]();
            questions += `<p>array.${methodName}() // outputs: [${populatedArray}] // ${temp}</p>`;
        }
    }
    // else {
    //     switch (param) {
    //         case "any": ;
    //         case "number": ;
    //         case "function": ;
    //         case "array": ;
    //         case "object": ;
    //         case "string": ;
    //         default: throw new Error();
    //     }
    // }

    document.getElementById("section-arraybuiltinmethods-questions-methods").innerHTML += `
        <div>
            <h4>Method: ${methodName}(${params})</h4>
            <p>Description: ${pDescription}</p>
            ${questions}
        </div>
    `;
}