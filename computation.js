let ComputationQuestions = {};
////////////////////////////////////////////////////////////////////////////////////////////////
function submitCode(id, func) {
    // let code = document.getElementById(`code-input${id}`).value; 
    let answer = eval(`(${ComputationQuestions[id].question})`);
    document.getElementById(`answer${id}`).innerText = `A: ${answer}`;
}
function nextCode(id) { 
    ComputationQuestions[id].generator();
    document.getElementById(`question${id}`).innerText = `Q: ${ComputationQuestions[id].question}`;
    document.getElementById(`answer${id}`).innerText = `A: `;
    document.getElementById(`code-input${id}`).innerText = ``;
}
//////////////////////////////////////////////////////////////////////////////////////////////////
// function QuestionGenerator() { }
//////////////////////////////////////////////////////////////////////////////////////////////////

function SameDataTypeWithBooleanAND(){
    let datatype = new ValueGenerator().getDataType("boolean");
    
    let question = new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype,"&&");
    SameDataTypeWithBooleanAND.question = question;
    document.getElementById('question0').innerText = `Q: ${question}`;
    document.getElementById('answer0').innerText = `A: `;
    document.getElementById('code-input0').innerText = ``;
}
function SameDataTypeWithBooleanOR(){
    let datatype = new ValueGenerator().getDataType("boolean");
    
    let question = new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype,"||");
    SameDataTypeWithBooleanOR.question = question;
    document.getElementById('question1').innerText = `Q: ${question}`;
    document.getElementById('answer1').innerText = `A: `;
    document.getElementById('code-input1').innerText = ``;
}
function SameDataTypeWithBooleanXOR(){
    let datatype = new ValueGenerator().getDataType("boolean");
    
    let question = new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype,"^");
    SameDataTypeWithBooleanXOR.question = question;
    document.getElementById('question2').innerText = `Q: ${question}`;
    document.getElementById('answer2').innerText = `A: `;
    document.getElementById('code-input2').innerText = ``;
}

let cnt = 0;
let logOPS = {
    "&&": "AND",
    "||": "OR",
    "^" : "XOR"
};
let logKeys = Object.keys(logOPS);
for (let i = 0; i < logKeys.length; i++) {
    let key = logKeys[i];
    ComputationQuestions[cnt] = {
        question: null,
        answer: null,
        generator: (function(cnt){return function(){
            let datatype = new ValueGenerator().getDataType("boolean");
            ComputationQuestions[cnt].question = new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype,key);
        }})(cnt)
    };
    document.getElementById("section-computation-questions").innerHTML += `
    <h5>${logOPS[key]} OPERATOR: ${key} : Datatype Boolean</h5>
    <div id="question${cnt}" style="width:100%">Q: </div>
    <br>
    <div id="answer${cnt}" style="width:100%">A: </div>
    <br>
    <div id="code-input${cnt}" contenteditable="true" style="width:100%; border: 1px blue solid;"></div>
    <button id="submitcode${cnt}" onclick="submitCode(${cnt})">Submit Code</button>
    <button id="next${cnt}" onclick="nextCode(${cnt++})">Next Question</button>
    <br><br></br>`;
    ComputationQuestions[cnt] = {
        question: null,
        answer: null,
        generator: (function(cnt){return function(){
            let datatype = new ValueGenerator().getDataType("number");
            ComputationQuestions[cnt].question = new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype,key);
        }})(cnt)
    };
    document.getElementById("section-computation-questions").innerHTML += `
    <h5>${logOPS[key]} OPERATOR: ${key} : Datatype Number</h5>
    <div id="question${cnt}" style="width:100%">Q: </div>
    <br>
    <div id="answer${cnt}" style="width:100%">A: </div>
    <br>
    <div id="code-input${cnt}" contenteditable="true" style="width:100%; border: 1px blue solid;"></div>
    <button id="submitcode${cnt}" onclick="submitCode(${cnt})">Submit Code</button>
    <button id="next${cnt}" onclick="nextCode(${cnt++})">Next Question</button>
    <br><br></br>`;
}
let keys = Object.keys(ops.double);
for (let i = 0; i < keys.length; i++) {

    let key = keys[i];
    ComputationQuestions[cnt] = {
        question: null,
        answer: null,
        generator: (function(cnt){return function(){
            let datatype = new ValueGenerator().getDataType("number");
            ComputationQuestions[cnt].question =  new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype,key);
        }})(cnt)
    };
    document.getElementById("section-computation-questions").innerHTML += `
    <h5>Same DataType With Numbers: ${key} ${ops.double[key]}</h5>
    <div id="question${cnt}" style="width:100%">Q: </div>
    <br>
    <div id="answer${cnt}" style="width:100%">A: </div>
    <br>
    <div id="code-input${cnt}" contenteditable="true" style="width:100%; border: 1px blue solid;"></div>
    <button id="" onclick="submitCode(${cnt})">Submit Code</button>
    <button id="" onclick="nextCode(${cnt++})">Next Question</button>
    <br><br>`;

    ComputationQuestions[cnt] = {
        question: null,
        answer: null,
        generator: (function(cnt){return function(){
            // let datatype = new ValueGenerator().getDataType("number");
            ComputationQuestions[cnt].question =  new ExpressionGenerator().diffDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),key);
        }})(cnt)
    };

    document.getElementById("section-computation-questions").innerHTML += `
    <h5>Different Datatype: ${key} ${ops.double[key]}</h5>
    <div id="question${cnt}" style="width:100%">Q: </div>
    <br>
    <div id="answer${cnt}" style="width:100%">A: </div>
    <br>
    <div id="code-input${cnt}" contenteditable="true" style="width:100%; border: 1px blue solid;"></div>
    <button id="" onclick="submitCode(${cnt})">Submit Code</button>
    <button id="" onclick="nextCode(${cnt++})">Next Question</button>
    <br><br>`;

}

{/* <h3>Operators Assessment</h3>



<h5>Same Datatypes Answer with Output</h5>
<div id="question45" style="width:100%">Q: </div>
<br>
<div id="answer45" style="width:100%">A:</div>
<br>
<div id="code-input45" contenteditable="true" style="width:100%; border: 1px blue solid;"></div>
<button id="" onclick="submitCode(45,SameDatatypesAnswerWithOutput)">Submit Code</button>
<button id="" onclick="nextCode(45,SameDatatypesAnswerWithOutput)">Next Question</button>
<br><br>

<h5>Same Datatypes Answer with Expression</h5>
<div id="question46" style="width:100%">Q: 9</div>
<br>
<div id="answer46" style="width:100%">A: 1 + 8</div>
<br>
<div id="code-input46" contenteditable="true" style="width:100%; border: 1px blue solid;"></div>
<button id="" onclick="submitCode(46,SameDatatypesAnswerWithExpression)">Submit Code</button>
<button id="" onclick="nextCode(46,SameDatatypesAnswerWithExpression)">Next Question</button>
<br><br>

<h5>Different Datatypes Answer with Output</h5>
<div id="question47" style="width:100%">Q: </div>
<br>
<div id="answer47" style="width:100%">A:</div>
<br>
<div id="code-input47" contenteditable="true" style="width:100%; border: 1px blue solid;"></div>
<button id="" onclick="submitCode(47,DifferentDatatypesAnswerWithOutput)">Submit Code</button>
<button id="" onclick="nextCode(47,DifferentDatatypesAnswerWithOutput)">Next Question</button>
<br><br>

<h5>Different Datatypes Answer with Expression</h5>
<div id="question48" style="width:100%">Q: </div>
<br>
<div id="answer48" style="width:100%">A:</div>
<br>
<div id="code-input48" contenteditable="true" style="width:100%; border: 1px blue solid;"></div>
<button id="" onclick="submitCode(48,DifferentDatatypesAnswerWithExpression)">Submit Code</button>
<button id="" onclick="nextCode(48,DifferentDatatypesAnswerWithExpression)">Next Question</button>
<br><br> */}


// function SameDataTypeWithNumbersModulus(){
//     let datatype = new ValueGenerator().getDataType("number");
    
//     let question = new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype,"%");
//     SameDataTypeWithNumbersModulus.question = question;
//     document.getElementById('question3').innerText = `Q: ${question}`;
//     document.getElementById('answer3').innerText = `A: `;
//     document.getElementById('code-input3').innerText = ``;
// }
// function DifferentDatatypeModulus(){
//     // let datatype = new ValueGenerator().getDataType();
    
//     let question = new ExpressionGenerator().diffDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),"%");
//     DifferentDatatypeModulus.question = question;
//     document.getElementById('question4').innerText = `Q: ${question}`;
//     document.getElementById('answer4').innerText = `A: `;
//     document.getElementById('code-input4').innerText = ``;
// }
// function SameDataTypeWithNumbersXor(){
//     let datatype = new ValueGenerator().getDataType("number");
    
//     let question = new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype,"^");
//     SameDataTypeWithNumbersXor.question = question;
//     document.getElementById('question5').innerText = `Q: ${question}`;
//     document.getElementById('answer5').innerText = `A: `;
//     document.getElementById('code-input5').innerText = ``;
// }
// function DifferentDatatypeXor(){
//     // let datatype = new ValueGenerator().getDataType();s
    
//     let question = new ExpressionGenerator().diffDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),"^");
//     DifferentDatatypeXor.question = question;
//     document.getElementById('question6').innerText = `Q: ${question}`;
//     document.getElementById('answer6').innerText = `A: `;
//     document.getElementById('code-input6').innerText = ``;
// }
// function SameDataTypeWithNumbersAnd(){
//     let datatype = new ValueGenerator().getDataType("number");
    
//     let question = new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype,"&");
//     SameDataTypeWithNumbersAnd.question = question;
//     document.getElementById('question7').innerText = `Q: ${question}`;
//     document.getElementById('answer7').innerText = `A: `;
//     document.getElementById('code-input7').innerText = ``;
// }
// function DifferentDatatypeAnd(){
//     // let datatype = new ValueGenerator().getDataType();
    
//     let question = new ExpressionGenerator().diffDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),"&");
//     DifferentDatatypeAnd.question = question;
//     document.getElementById('question8').innerText = `Q: ${question}`;
//     document.getElementById('answer8').innerText = `A: `;
//     document.getElementById('code-input8').innerText = ``;
// }
// function SameDataTypeWithNumbersMultiply(){
//     let datatype = new ValueGenerator().getDataType("number");
    
//     let question = new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype,"*");
//     SameDataTypeWithNumbersMultiply.question = question;
//     document.getElementById('question9').innerText = `Q: ${question}`;
//     document.getElementById('answer9').innerText = `A: `;
//     document.getElementById('code-input9').innerText = ``;
// }
// function DifferentDatatypeMultiply(){
//     // let datatype = new ValueGenerator().getDataType();
    
//     let question = new ExpressionGenerator().diffDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),"*");
//     DifferentDatatypeMultiply.question = question;
//     document.getElementById('question10').innerText = `Q: ${question}`;
//     document.getElementById('answer10').innerText = `A: `;
//     document.getElementById('code-input10').innerText = ``;
// }
// function SameDataTypeWithNumbersSubstract(){
//     let datatype = new ValueGenerator().getDataType("number");
    
//     let question = new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype,"-");
//     SameDataTypeWithNumbersSubstract.question = question;
//     document.getElementById('question11').innerText = `Q: ${question}`;
//     document.getElementById('answer11').innerText = `A: `;
//     document.getElementById('code-input11').innerText = ``;
// }
// function DifferentDatatypeSubstract(){
//     // let datatype = new ValueGenerator().getDataType();
    
//     let question = new ExpressionGenerator().diffDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),"-");
//     DifferentDatatypeSubstract.question = question;
//     document.getElementById('question12').innerText = `Q: ${question}`;
//     document.getElementById('answer12').innerText = `A: `;
//     document.getElementById('code-input12').innerText = ``;
// }
// function SameDataTypeWithNumbersAddition(){
//     let datatype = new ValueGenerator().getDataType("number");
    
//     let question = new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype,"+");
//     SameDataTypeWithNumbersAddition.question = question;
//     document.getElementById('question13').innerText = `Q: ${question}`;
//     document.getElementById('answer13').innerText = `A: `;
//     document.getElementById('code-input13').innerText = ``;
// }
// function DifferentDatatypeAddition(){
//     // let datatype = new ValueGenerator().getDataType();
    
//     let question = new ExpressionGenerator().diffDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),"+");
//     DifferentDatatypeAddition.question = question;
//     document.getElementById('question14').innerText = `Q: ${question}`;
//     document.getElementById('answer14').innerText = `A: `;
//     document.getElementById('code-input14').innerText = ``;
// }
// function SameDataTypeWithNumbersDivide(){
//     let datatype = new ValueGenerator().getDataType("number");
    
//     let question = new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype,"+");
//     SameDataTypeWithNumbersDivide.question = question;
//     document.getElementById('question15').innerText = `Q: ${question}`;
//     document.getElementById('answer15').innerText = `A: `;
//     document.getElementById('code-input15').innerText = ``;
// }
// function DifferentDatatypeDivide(){
//     // let datatype = new ValueGenerator().getDataType();
    
//     let question = new ExpressionGenerator().diffDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),"/");
//     DifferentDatatypeDivide.question = question;
//     document.getElementById('question16').innerText = `Q: ${question}`;
//     document.getElementById('answer16').innerText = `A: `;
//     document.getElementById('code-input16').innerText = ``;
// }
// function SameDataTypeWithNumbersLessthan(){
//     let datatype = new ValueGenerator().getDataType("number");
    
//     let question = new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype,"<");
//     SameDataTypeWithNumbersLessthan.question = question;
//     document.getElementById('question17').innerText = `Q: ${question}`;
//     document.getElementById('answer17').innerText = `A: `;
//     document.getElementById('code-input17').innerText = ``;
// }
// function DifferentDatatypeLessthan(){
//     // let datatype = new ValueGenerator().getDataType();
    
//     let question = new ExpressionGenerator().diffDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),"<");
//     DifferentDatatypeLessthan.question = question;
//     document.getElementById('question18').innerText = `Q: ${question}`;
//     document.getElementById('answer18').innerText = `A: `;
//     document.getElementById('code-input18').innerText = ``;
// }
// function SameDataTypeWithNumbersGreaterthan(){
//     let datatype = new ValueGenerator().getDataType("number");
    
//     let question = new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype,">");
//     SameDataTypeWithNumbersGreaterthan.question = question;
//     document.getElementById('question19').innerText = `Q: ${question}`;
//     document.getElementById('answer19').innerText = `A: `;
//     document.getElementById('code-input19').innerText = ``;
// }
// function DifferentDatatypeGreaterthan(){
//     // let datatype = new ValueGenerator().getDataType();
    
//     let question = new ExpressionGenerator().diffDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),">");
//     DifferentDatatypeGreaterthan.question = question;
//     document.getElementById('question20').innerText = `Q: ${question}`;
//     document.getElementById('answer20').innerText = `A: `;
//     document.getElementById('code-input20').innerText = ``;
// }
// function SameDataTypeWithNumbersOr(){
//     let datatype = new ValueGenerator().getDataType("number");
    
//     let question = new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype,"|");
//     SameDataTypeWithNumbersOr.question = question;
//     document.getElementById('question21').innerText = `Q: ${question}`;
//     document.getElementById('answer21').innerText = `A: `;
//     document.getElementById('code-input21').innerText = ``;
// }
// function DifferentDatatypeOr(){
//     // let datatype = new ValueGenerator().getDataType();
    
//     let question = new ExpressionGenerator().diffDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),"|");
//     DifferentDatatypeOr.question = question;
//     document.getElementById('question22').innerText = `Q: ${question}`;
//     document.getElementById('answer22').innerText = `A: `;
//     document.getElementById('code-input22').innerText = ``;
// }
// function SameDataTypeWithNumbersKindaequals(){
//     let datatype = new ValueGenerator().getDataType("number");
    
//     let question = new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype,"==");
//     SameDataTypeWithNumbersKindaequals.question = question;
//     document.getElementById('question23').innerText = `Q: ${question}`;
//     document.getElementById('answer23').innerText = `A: `;
//     document.getElementById('code-input23').innerText = ``;
// }
// function DifferentDatatypeKindaequals(){
//     // let datatype = new ValueGenerator().getDataType();
    
//     let question = new ExpressionGenerator().diffDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),"==");
//     DifferentDatatypeKindaequals.question = question;
//     document.getElementById('question24').innerText = `Q: ${question}`;
//     document.getElementById('answer24').innerText = `A: `;
//     document.getElementById('code-input24').innerText = ``;
// }
// function SameDataTypeWithNumbersAbsolutelyequals(){
//     let datatype = new ValueGenerator().getDataType("number");
    
//     let question = new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype,"===");
//     SameDataTypeWithNumbersAbsolutelyequals.question = question;
//     document.getElementById('question25').innerText = `Q: ${question}`;
//     document.getElementById('answer25').innerText = `A: `;
//     document.getElementById('code-input25').innerText = ``;
// }
// function DifferentDatatypeAbsolutelyequals(){
//     // let datatype = new ValueGenerator().getDataType();
    
//     let question = new ExpressionGenerator().diffDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),"===");
//     DifferentDatatypeAbsolutelyequals.question = question;
//     document.getElementById('question26').innerText = `Q: ${question}`;
//     document.getElementById('answer26').innerText = `A: `;
//     document.getElementById('code-input26').innerText = ``;
// }
// function SameDataTypeWithNumbersKindanotequals(){
//     let datatype = new ValueGenerator().getDataType("number");
    
//     let question = new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype,"!=");
//     SameDataTypeWithNumbersKindanotequals.question = question;
//     document.getElementById('question27').innerText = `Q: ${question}`;
//     document.getElementById('answer27').innerText = `A: `;
//     document.getElementById('code-input27').innerText = ``;
// }
// function DifferentDatatypeKindanotequals(){
//     // let datatype = new ValueGenerator().getDataType();
    
//     let question = new ExpressionGenerator().diffDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),"!=");
//     DifferentDatatypeKindanotequals.question = question;
//     document.getElementById('question28').innerText = `Q: ${question}`;
//     document.getElementById('answer28').innerText = `A: `;
//     document.getElementById('code-input28').innerText = ``;
// }
// function SameDataTypeWithNumbersAbsolutelynotequalto(){
//     let datatype = new ValueGenerator().getDataType("number");
    
//     let question = new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype,"!==");
//     SameDataTypeWithNumbersAbsolutelynotequalto.question = question;
//     document.getElementById('question29').innerText = `Q: ${question}`;
//     document.getElementById('answer29').innerText = `A: `;
//     document.getElementById('code-input29').innerText = ``;
// }
// function DifferentDatatypeAbsolutelynotequalto(){
//     // let datatype = new ValueGenerator().getDataType();
    
//     let question = new ExpressionGenerator().diffDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),"!==");
//     DifferentDatatypeAbsolutelynotequalto.question = question;
//     document.getElementById('question30').innerText = `Q: ${question}`;
//     document.getElementById('answer30').innerText = `A: `;
//     document.getElementById('code-input30').innerText = ``;
// }
// function SameDataTypeWithNumbersBitwisedownshift(){
//     let datatype = new ValueGenerator().getDataType("number");
    
//     let question = new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype,">>");
//     SameDataTypeWithNumbersBitwisedownshift.question = question;
//     document.getElementById('question31').innerText = `Q: ${question}`;
//     document.getElementById('answer31').innerText = `A: `;
//     document.getElementById('code-input31').innerText = ``;
// }
// function DifferentDatatypeBitwisedownshift(){
//     // let datatype = new ValueGenerator().getDataType();
    
//     let question = new ExpressionGenerator().diffDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),">>");
//     DifferentDatatypeBitwisedownshift.question = question;
//     document.getElementById('question32').innerText = `Q: ${question}`;
//     document.getElementById('answer32').innerText = `A: `;
//     document.getElementById('code-input32').innerText = ``;
// }
// function SameDataTypeWithNumbersBitwiseupshift(){
//     let datatype = new ValueGenerator().getDataType("number");
    
//     let question = new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype,"<<");
//     SameDataTypeWithNumbersBitwiseupshift.question = question;
//     document.getElementById('question33').innerText = `Q: ${question}`;
//     document.getElementById('answer33').innerText = `A: `;
//     document.getElementById('code-input33').innerText = ``;
// }
// function DifferentDatatypeBitwiseupshift(){
//     // let datatype = new ValueGenerator().getDataType();
    
//     let question = new ExpressionGenerator().diffDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),"<<");
//     DifferentDatatypeBitwiseupshift.question = question;
//     document.getElementById('question34').innerText = `Q: ${question}`;
//     document.getElementById('answer34').innerText = `A: `;
//     document.getElementById('code-input34').innerText = ``;
// }
// function SameDataTypeWithNumbersOR(){
//     let datatype = new ValueGenerator().getDataType("number");
    
//     let question = new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype,"|");
//     SameDataTypeWithNumbersOR.question = question;
//     document.getElementById('question35').innerText = `Q: ${question}`;
//     document.getElementById('answer35').innerText = `A: `;
//     document.getElementById('code-input35').innerText = ``;
// }
// function DifferentDatatypeOR(){
//     // let datatype = new ValueGenerator().getDataType();
    
//     let question = new ExpressionGenerator().diffDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),"||");
//     DifferentDatatypeOR.question = question;
//     document.getElementById('question36').innerText = `Q: ${question}`;
//     document.getElementById('answer36').innerText = `A: `;
//     document.getElementById('code-input36').innerText = ``;
// }
// function SameDataTypeWithNumberAND(){
//     let datatype = new ValueGenerator().getDataType("number");
    
//     let question = new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype,"&&");
//     SameDataTypeWithNumberAND.question = question;
//     document.getElementById('question37').innerText = `Q: ${question}`;
//     document.getElementById('answer37').innerText = `A: `;
//     document.getElementById('code-input37').innerText = ``;
// }
// function DifferentDatatypeAND(){
//     // let datatype = new ValueGenerator().getDataType();
    
//     let question = new ExpressionGenerator().diffDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),"&&");
//     DifferentDatatypeAND.question = question;
//     document.getElementById('question38').innerText = `Q: ${question}`;
//     document.getElementById('answer38').innerText = `A: `;
//     document.getElementById('code-input38').innerText = ``;
// }
// function SameDataTypeWithNumbersPower(){
//     let datatype = new ValueGenerator().getDataType("number");
    
//     let question = new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype,"**");
//     SameDataTypeWithNumbersPower.question = question;
//     document.getElementById('question39').innerText = `Q: ${question}`;
//     document.getElementById('answer39').innerText = `A: `;
//     document.getElementById('code-input39').innerText = ``;
// }
// function DifferentDatatypePower(){
//     // let datatype = new ValueGenerator().getDataType();
    
//     let question = new ExpressionGenerator().diffDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),"**");
//     DifferentDatatypePower.question = question;
//     document.getElementById('question40').innerText = `Q: ${question}`;
//     document.getElementById('answer40').innerText = `A: `;
//     document.getElementById('code-input40').innerText = ``;
// }
// function SameDataTypeWithNumbersLessthanequals(){
//     let datatype = new ValueGenerator().getDataType("number");
    
//     let question = new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype,"**");
//     SameDataTypeWithNumbersLessthanequals.question = question;
//     document.getElementById('question41').innerText = `Q: ${question}`;
//     document.getElementById('answer41').innerText = `A: `;
//     document.getElementById('code-input41').innerText = ``;
// }
// function DifferentDatatypeLessthanequals(){
//     // let datatype = new ValueGenerator().getDataType();
    
//     let question = new ExpressionGenerator().diffDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),"<=");
//     DifferentDatatypeLessthanequals.question = question;
//     document.getElementById('question42').innerText = `Q: ${question}`;
//     document.getElementById('answer42').innerText = `A: `;
//     document.getElementById('code-input42').innerText = ``;
// }
// function SameDataTypeWithNumbersGreaterthanequals(){
//     let datatype = new ValueGenerator().getDataType("number");
    
//     let question = new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype,">=");
//     SameDataTypeWithNumbersGreaterthanequals.question = question;
//     document.getElementById('question43').innerText = `Q: ${question}`;
//     document.getElementById('answer43').innerText = `A: `;
//     document.getElementById('code-input43').innerText = ``;
// }
// function DifferentDatatypeGreaterthanequals(){
//     // let datatype = new ValueGenerator().getDataType();
//     let question = new ExpressionGenerator().diffDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),">=");
//     DifferentDatatypeGreaterthanequals.question = question;
//     document.getElementById('question44').innerText = `Q: ${question}`;
//     document.getElementById('answer44').innerText = `A: `;
//     document.getElementById('code-input44').innerText = ``;
// }






function SameDatatypesAnswerWithOutput() {
    let datatype = new ValueGenerator().getDataType();
    let question = new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype);
    SameDatatypesAnswerWithOutput.question = question;
    document.getElementById('question45').innerText = `Q: ${question}`;
    document.getElementById('answer45').innerText = `A: `;
    document.getElementById('code-input45').innerText = ``;
}
function SameDatatypesAnswerWithExpression() { 
    let datatype = new ValueGenerator().getDataType();
    let question = eval(new ExpressionGenerator().sameDataTypeDiffOperators(2+ Math.floor(Math.random() * 3 ),datatype));
    SameDatatypesAnswerWithExpression.question = question;
    document.getElementById('question46').innerText = `Q: ${question}`;
    document.getElementById('answer46').innerText = `A: `;
    document.getElementById('code-input46').innerText = ``;
}
function DifferentDatatypesAnswerWithOutput() { 
    // let datatype = new ValueGenerator().getDataType();
    let question = new ExpressionGenerator().diffDataTypeDiffOperators(2+ Math.floor(Math.random() * 3));
    DifferentDatatypesAnswerWithOutput.question = question;
    document.getElementById('question47').innerText = `Q: ${question}`;
    document.getElementById('answer47').innerText = `A: `;
    document.getElementById('code-input47').innerText = ``;
}
function DifferentDatatypesAnswerWithExpression() { 
    let question = eval(new ExpressionGenerator().diffDataTypeDiffOperators(2+ Math.floor(Math.random() * 3 )));
    DifferentDatatypesAnswerWithOutput.question = eval(question);
    document.getElementById('question48').innerText = `Q: ${question}`;
    document.getElementById('answer48').innerText = `A: `;
    document.getElementById('code-input48').innerText = ``;
}