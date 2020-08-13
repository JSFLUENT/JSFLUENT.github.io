let ComputationQuestions = {};
////////////////////////////////////////////////////////////////////////////////////////////////
function submitCode(id) {
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