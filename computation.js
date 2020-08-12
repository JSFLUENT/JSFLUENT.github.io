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

// document.getElementById('section-computation-questions').innerHTML += `
// <h3>Operators Assessment</h3>



// <h5>Same Datatypes Answer with Output</h5>
// <div id="question45" style="width:100%">Q: </div>
// <br>
// <div id="answer45" style="width:100%">A:</div>
// <br>
// <div id="code-input45" contenteditable="true" style="width:100%; border: 1px blue solid;"></div>
// <button id="" onclick="submitCode(45,SameDatatypesAnswerWithOutput)">Submit Code</button>
// <button id="" onclick="nextCode(45,SameDatatypesAnswerWithOutput)">Next Question</button>
// <br><br>

// <h5>Same Datatypes Answer with Expression</h5>
// <div id="question46" style="width:100%">Q: 9</div>
// <br>
// <div id="answer46" style="width:100%">A: 1 + 8</div>
// <br>
// <div id="code-input46" contenteditable="true" style="width:100%; border: 1px blue solid;"></div>
// <button id="" onclick="submitCode(46,SameDatatypesAnswerWithExpression)">Submit Code</button>
// <button id="" onclick="nextCode(46,SameDatatypesAnswerWithExpression)">Next Question</button>
// <br><br>

// <h5>Different Datatypes Answer with Output</h5>
// <div id="question47" style="width:100%">Q: </div>
// <br>
// <div id="answer47" style="width:100%">A:</div>
// <br>
// <div id="code-input47" contenteditable="true" style="width:100%; border: 1px blue solid;"></div>
// <button id="" onclick="submitCode(47,DifferentDatatypesAnswerWithOutput)">Submit Code</button>
// <button id="" onclick="nextCode(47,DifferentDatatypesAnswerWithOutput)">Next Question</button>
// <br><br>

// <h5>Different Datatypes Answer with Expression</h5>
// <div id="question48" style="width:100%">Q: </div>
// <br>
// <div id="answer48" style="width:100%">A:</div>
// <br>
// <div id="code-input48" contenteditable="true" style="width:100%; border: 1px blue solid;"></div>
// <button id="" onclick="submitCode(48,DifferentDatatypesAnswerWithExpression)">Submit Code</button>
// <button id="" onclick="nextCode(48,DifferentDatatypesAnswerWithExpression)">Next Question</button>
// <br><br>`;

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