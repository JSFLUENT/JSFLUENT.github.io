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

const MethodsArray = {
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

let ParamsString    = {
    index: {
        datatype: "number",
        description: "An integer between 0 and 1-less-than the length of the string. If no index is provided, the default is 0, so the first character in the string is returned.",
    },
    beginIndex: {
        datatype: "number",
        description: "The zero-based index at which to begin extraction. If negative, it is treated as strLength + beginIndex where strLength is the length of the string (for example, if beginIndex is -3 it is treated as strLength - 3). If beginIndex is greater than or equal to the length of the string, slice() returns an empty string"
    },
    endIndex: {
        datatype: "number",
        description: "Optional. The zero-based index before which to end extraction. The character at this index will not be included. If endIndex is omitted, slice() extracts to the end of the string. If negative, it is treated as strLength + endIndex where strLength is the length of the string (for example, if endIndex is -3 it is treated as strLength - 3)."
    },
    indexStart: {
        datatype: "number",
        description: "The index of the first character to include in the returned substring."
    },
    indexEnd: {
        datatype: "number",
        description: "The index of the first character to exclude from the returned substring. Return value"
    },
    pos: {
        datatype: "number",
        description: "Position of an element in the String to return the code point value from."
    },
    stringN: {
        datatype: "string",
        description: "many string inputs allowed"
    },
    searchString: {
        datatype: "string",
        description: "The characters to be searched for at the end of this string."
    },
    length: {
        datatype: "number",
        description: "If provided it is used as the length of str. If omitted, the default value is the length of the string."
    },
    numN: {
        datatype:       "number",
        description:    "A sequence of numbers that are UTF-16 code units. The range is between 0 and 65535 (0xFFFF). Numbers greater than 0xFFFF are truncated. No validity checks are performed. Return value"
    },
    position: {
        datatype: "number",
        description: ""
    },
    searchValue: {
        datatype: "string",
        description: "A string representing the value to search for."
    },
    fromIndex: {
        datatype: "number",
        description: "An integer representing the index at which to start the search; the default value is 0. For fromIndex values lower than 0 or greater than str.length, the search starts at index 0 and str.length respectively."
    },
    compareString: {
        datatype: "string",
        description: "The string against which the referring string is compared"
    },
    locales: {
        datatype: "string",
        description: "Optional. A string with a BCP 47 language tag, or an array of such strings. For the general form and interpretation of the locales argument, see the Intl page. The following Unicode extension keys are allowed:"
    },
    options : {
        datatype: "string",
        description: "Optional. An object with some or all of the following properties:"
    },
    regexp: {
        datatype: "object",
        description: `A regular expression object. If a non-RegExp object obj is passed, it is implicitly converted to a RegExp by using new RegExp(obj). If you don't give any parameter and use the match() method directly, you will get an Array with an empty string:[""].`
    },
    form: {
        datatype: "string",
        description: `One of "NFC", "NFD", "NFKC", or "NFKD", specifying the Unicode Normalization Form. If omitted or undefined, "NFC" is used.
        NFC — Normalization Form Canonical Composition.
        NFD — Normalization Form Canonical Decomposition.
        NFKC — Normalization Form Compatibility Composition.
        NFKD — Normalization Form Compatibility Decomposition.`,
        opts: ["NFC","NFD","NFKC","NFKD"]
    },
    targetLength: {
        datatype: "string",
        description: `The length of the resulting string once the current string has been padded. If the value is lower than the current string's length, the current string will be returned as is.`
    },
    padString: {
        datatype: "string",
        description: `The string to pad the current string with. If this string is too long to stay within the target length, it will be truncated and the left-most part will be applied. The default value for this parameter is " " (U+0020).`
    },
    targetLength: {
        datatype: "number",
        description: "The length of the resulting string once the current string has been padded. If the value is less than the current string's length, the current string is returned as is."
    },
    count: {
        datatype: "number",
        description: `An integer between 0 and +∞: [0, +∞), indicating the number of times to repeat the string in the newly-created string that is to be returned.`
    },
    substr: {
        datatype: "string",
        description: "A String that is to be replaced by newSubStr. It is treated as a verbatim string and is not interpreted as a regular expression. Only the first occurrence will be replaced."
    },
    newSubStr: {
        datatype: "string",
        description: `The String that replaces the substring specified by the specified regexp or substr parameter. A number of special replacement patterns are supported; see the "Specifying a string as a parameter" section below.`
    },
    function: {
        datatype: "function",
        description: `A function to be invoked to create the new substring to be used to replace the matches to the given regexp or substr. The arguments supplied to this function are described in the "Specifying a function as a parameter" section below.`
    },
    seperator: {
        datatype: "string",
        description: `Specifies the string which denotes the points at which each split should occur. The separator is treated as a string or as a regular expression. If a plain-text separator contains more than one character, that entire string must be found to represent a split point. If separator is omitted or does not occur in str, the array returned contains one element consisting of the entire string. If separator is an empty string, str is converted to an array of characters.`
    },
    limit: {
        datatype: "number",
        description: `Integer specifying a limit on the number of splits to be found. When this parameter is provided, the split() method splits the string at each occurrence of the specified separator but stops when limit entries have been placed into the array. It may still contain fewer entries than limit if the end of the string is reached before the specified limit is reached. The left-over text is not returned in the new array.`
    }
};   

let MethodsString = {
    // length: { 
    //     description: "", 
    //     nL: 0, 
    //     nH: 10, 
    //     params: [] 
    // },
    // fromCharCode: {
    //     description: "The codePointAt() method returns a non-negative integer that is the Unicode code point value.", 
    //     nL: 0, 
    //     nH: 10, 
    //     params: ["numN"] 
    // },
    // fromCodePoint: {
    //     description: "The static String.fromCodePoint() method returns a string created by using the specified sequence of code points.", 
    //     nL: 0, 
    //     nH: 10, 
    //     params: ["numN"] 
    // },
    includes: { 
        description: "The includes() method determines whether one string may be found within another string, returning true or false as appropriate.",
        nL: 0, 
        nH: 10, 
        params: ["searchString","position"] 
    },
    match: { 
        description: "The match() method retrieves the matches when matching a string against a regular expression.", 
        nL: 0, 
        nH: 10, 
        params: ["regexp"] 
    },
    matchAll: { description: "", nL: 0, nH: 10, params: [] },
    search: { 
        description: "The search() method executes a search for a match between a regular expression and this String object.", 
        nL: 0, 
        nH: 10, 
        params: ["regexp"] 
    },
    valueOf: { 
        description: "The valueOf() method returns the primitive value of a String object.", 
        nL: 0, 
        nH: 10, 
        params: [] 
    },
    indexOf: { 
        description: "The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.", 
        nL: 0, 
        nH: 10, 
        params: ["searchValue", "fromIndex"]
    },
    lastIndexOf: { 
        description: "The lastIndexOf() method returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the value is not found.", 
        nL: 0, 
        nH: 10, 
        params: ["searchValue","fromIndex"] 
    },
    startsWith: { 
        description: "The startsWith() method determines whether a string begins with the characters of a specified string, returning true or false as appropriate.", 
        nL: 0, 
        nH: 10, 
        params: ["searchString","position"] 
    },
    endsWith: { 
        description: "The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.", 
        nL: 0, 
        nH: 10, 
        params: ["searchString", "length"] 
    },
    charAt: { 
        description: "The String object's charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.", 
        nL: 0, 
        nH: 10, 
        params: ["index"] 
    },
    charCodeAt: { 
        description: "The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.", 
        nL: 0, 
        nH: 10, 
        params: ["index"] 
    },
    codePointAt: { 
        description: "The codePointAt() method returns a non-negative integer that is the Unicode code point value.", 
        nL: 0, 
        nH: 10, 
        params: ["pos"] 
    },
    toLowerCase: { 
        description: "The toLowerCase() method returns the calling string value converted to lower case.", 
        nL: 0, 
        nH: 10, 
        params: []
    },
    toUpperCase: { 
        description: "The toUpperCase() method returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).", 
        nL: 0, 
        nH: 10, 
        params: [] 
    },
    toLocaleLowerCase: { 
        description: "The toLocaleLowerCase() method returns the calling string value converted to lower case, according to any locale-specific case mappings.", 
        nL: 0, 
        nH: 10, 
        params: ["locale"] 
    },
    toLocaleUpperCase: { 
        description: "The toLocaleUpperCase() method returns the calling string value converted to upper case, according to any locale-specific case mappings.", 
        nL: 0, 
        nH: 10, 
        params: ["locale"] 
    },
    substring: { 
        description: "The substring() method returns the part of the string between the start and end indexes, or to the end of the string.", 
        nL: 0, 
        nH: 10, 
        params: ["indexStart","indexEnd"] 
    },
    sup: { description: "", nL: 0, nH: 10, params: [] },
    repeat: { 
        description: "The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.", 
        nL: 0, 
        nH: 10, 
        params: ["count"] 
    },
    replace: { 
        description: "The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. If pattern is a string, only the first occurrence will be replaced.", 
        nL: 0, 
        nH: 10, 
        params: ["regexp|substr","newSubstr|function"]
    },
    slice: { 
        description: "The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.", 
        nL: 0, 
        nH: 10, 
        params: ["beginIndex","endIndex"] 
    },
    trim: { 
        description: "The trim() method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).", 
        nL: 0, 
        nH: 10, 
        params: [] 
    },
    trimEnd: { 
        description: "The trimEnd() method removes whitespace from the end of a string. trimRight() is an alias of this method.", 
        nL: 0, 
        nH: 10, 
        params: [] 
    },
    // trimLeft: { description: "", nL: 0, nH: 10, params: [] },
    // trimRight: { description: "", nL: 0, nH: 10, params: [] },
    trimStart: { 
        description: "The trimStart() method removes whitespace from the beginning of a string. trimLeft() is an alias of this method.", 
        nL: 0, 
        nH: 10, 
        params: [] 
    },
    concat: { 
        description: "", 
        nL: 0, 
        nH: 10, 
        params: ["stringN"] 
    },
    constructor: { description: "", nL: 0, nH: 10, params: [] },
    localeCompare: { 
        description: "The localeCompare() method returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order.", 
        nL: 0, 
        nH: 10, 
        params: ["compareString", "locales","options"] 
    },
    normalize: { 
        description: "The normalize() method returns the Unicode Normalization Form of a given string (if the value isn't a string, it will be converted to one first).", 
        nL: 0, 
        nH: 10, 
        params: ["form"] 
    },
    padEnd: { 
        description: `The padEnd() method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end (right) of the current string.`, 
        nL: 0, 
        nH: 10, 
        params: ["targetLength","padString"] 
    },
    padStart: { 
        description: "The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start (left) of the current string.", 
        nL: 0, 
        nH: 10, 
        params: ["targetLength","padString"] 
    },
    split: { 
        description: "", 
        nL: 0, 
        nH: 10, 
        params: ["seperator","limit"] 
    },
    toString: { 
        description: "The toString() method returns a string representing the specified object.", 
        nL: 0, 
        nH: 10, 
        params: [] 
    },
  };



let ParamsNumber    = {};
let MethodsNumber   = {};
let ParamsObject    = {};
let MethodsObject   = {};
let ParamsFunction  = {};
let MethodsFunction = {};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let BM = [
    ['Array'    ,ParamsArray    ,MethodsArray   ,ArrayGenerator],
    ['String'   ,ParamsString   ,MethodsString  ,StringGenerator],
    ['Number'   ,ParamsNumber   ,MethodsNumber  ,NumberGenerator],
    ['Object'   ,ParamsObject   ,MethodsObject  ,ObjectGenerator],
    ['Function' ,ParamsFunction ,MethodsFunction,FunctionGenerator]
];
BM.forEach(e =>{
    document.getElementById(`section-builtinmethods`).innerHTML += `
    <div>
        <div id="section-${e[0].toLowerCase()}builtinmethods-questions-paramsreference">
            <h3>Paramaters of ${e[0]} builtin Methods</h3>
        </div>
        <div id="section-${e[0].toLowerCase()}builtinmethods-questions-methods">
            <h3>Builtin Methods demo: ${e[0]}</h3>
        </div>
    </div>    
    `;
});
let paramName = "";
let pDataType = "";
let description = "";
let paramsObj;
let methodsObj;
let classObj;
let methodName = "";
let methodParams;
let param;
let questions  = "";
let temp;
for (let a = 0; a < BM.length; a++) {
    console.log('a',a);
    iterName    = BM[a][0]
    paramsObj   = BM[a][1];
    methodsObj  = BM[a][2];
    classObj    = BM[a][3];

    for (let e in paramsObj) {
        paramName = e;
        pDataType = paramsObj[e].datatype;
        description = paramsObj[e].description;
        document.getElementById(`section-${iterName.toLowerCase()}builtinmethods-questions-paramsreference`).innerHTML += `
        <div>
            <h4>Param: ${paramName}</h4>
            <p>Datatype: ${pDataType}</p>
            <p>Description: ${description}</p>
        </div>`
    }

    for (let e in methodsObj) {
        methodName = e; console.log(methodName);
        methodParams = methodsObj[e].params;
        description = methodsObj[e].description;
        questions = "";
        for (let z = 0; z < 3; z++) {
            // try param inputs empty and also pop params
            let populatedDataType = new classObj().generate(10)[iterName.toLowerCase()];
            questions += `<p>let ${iterName.toString()} = [${populatedDataType}]</p>`;
            if (0 === methodParams.length) {
                for (let i = 0; i < 10; i++) {
                    temp = populatedDataType[methodName]();
                    questions += `<p>${iterName.toString()}.${methodName}() // array now equals: [${populatedDataType}] // ${temp}</p>`;
                }
            }
            // else {

            //     'try no arguments and print the error messages'
            //     'then print with all args'
            //     'finally take away as many args until throws an error'

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
            questions += "<br>"
        }
        document.getElementById(`section-${iterName.toLowerCase()}builtinmethods-questions-methods`).innerHTML += `
            <div>
                <h4>Method: ${methodName}(${methodParams})</h4>
                <p>Description: ${description}</p>
                ${questions}
            </div>
        `;
    }
}