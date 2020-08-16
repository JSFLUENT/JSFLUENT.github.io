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
let datatypes = {
    "boolean":"sameDataTypeSameOperators",
    "number":"sameDataTypeSameOperators",
    "": "diffDataTypeSameOperators"
}
let keys = Object.keys(ops.double);
for (let i = 0; i < keys.length; i++) {
    for (let d in datatypes) {
        let key = keys[i];
        ComputationQuestions[cnt] = {
            question: null,
            answer: null,
            generator: (function(cnt,meth){return function(){
                let datatype = new ValueGenerator().getDataType(d);
                if (meth === "sameDataTypeSameOperators") {
                    ComputationQuestions[cnt].question =  new ExpressionGenerator()[meth](2+ Math.floor(Math.random() * 3 ),datatype,key);
                } else {
                    ComputationQuestions[cnt].question =  new ExpressionGenerator()[meth](2+ Math.floor(Math.random() * 3 ),key);
                }
            }})(cnt, datatypes[d])
        };
        document.getElementById("section-computation-questions").innerHTML += `
        <h5>${d || "Any Data Type"}: ${key} ${ops.double[key]}</h5>
        <div id="question${cnt}" style="width:100%">Q: </div>
        <br>
        <div id="answer${cnt}" style="width:100%">A: </div>
        <br>
        <div id="code-input${cnt}" contenteditable="true" style="width:100%; border: 1px blue solid;"></div>
        <button id="" onclick="submitCode(${cnt})">Submit Code</button>
        <button id="" onclick="nextCode(${cnt++})">Next Question</button>
        <br><br>`;
    }
}