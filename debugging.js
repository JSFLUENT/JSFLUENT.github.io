let DebuggingQuestions = {};
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
function submitCode_debug(id) {
    // let code = document.getElementById(`code-input${id}`).value; 
    // let answer = eval(`(${DebuggingQuestions[id].question})`);
    // document.getElementById(`answer${id}`).innerText = `A: ${answer}`;
}
function nextCode_debug(id) { 
    DebuggingQuestions[id].generator();
    // document.getElementById(`question${id}`).innerText = `Q: ${DebuggingQuestions[id].question}`;
    // document.getElementById(`answer${id}`).innerText = `A: `;
    // document.getElementById(`code-input${id}`).innerText = ``;
}
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
keys = [];
for (let i = 0; i < keys.length; i++) {
    key = keys[i];
    DebuggingQuestions[cnt] = {
        question: null,
        answer: null,
        generator: (function(cnt){ return function(){
            // let BG = new BugGenerator0().buggyValue().wrapFunction();
            // let question = BG.buggyExpression;
            // let answer = BG.expression;
        }})(cnt)
    };
    document.getElementById('section-debugging-questions') += `
    <div>
        <h3>Debugging ${key}: Non Variable Expressions</h3>
        <div id="result${cnt}">R: </div>
        <button id="submitcode${cnt}" onclick="submitCode_debug(${cnt})">Submit Code</button>
        <button id="next${cnt}" onclick="nextCode_debug(${cnt})">Next Question</button>
        <div>
            <textarea style="width:100%;" name="" id="code-input${cnt++}" cols="30" rows="10"></textarea>
        </div>
    </div>`;
    DebuggingQuestions[cnt] = {
        question: null,
        answer: null,
        generator: (function(cnt){ return function(){
            // let BG = new BugGenerator0().buggyValue().wrapFunction();
            // let question = BG.buggyExpression;
            // let answer = BG.expression;
        }})(cnt)
    };
    document.getElementById('section-debugging-questions') += `
    <div>
        <h3>Debugging ${key}: Variable Expressions</h3>
        <div id="result${cnt}">R: </div>
        <button id="submitcode${cnt}" onclick="submitCode_debug(${cnt})">Submit Code</button>
        <button id="next${cnt}" onclick="nextCode_debug(${cnt})">Next Question</button>
        <div>
            <textarea style="width:100%;" name="" id="code-input${cnt++}" cols="30" rows="10"></textarea>
        </div>
    </div>`;
}
////////////////////////////////////////////////////////////////////
function DebuggingNonVariableExpressionsMissingValues(){
    let BG = new BugGenerator0().buggyValue().wrapFunction();
    let question = BG.buggyExpression;
    let answer = BG.expression;
    document.getElementById("code-input53").innerText = question;
    DebuggingNonVariableExpressionsMissingValues.question = question;
    DebuggingNonVariableExpressionsMissingValues.answer = answer;
}
function DebuggingNonVariableExpressionsMissingOperators(){
    let BG = new BugGenerator0().buggyOperator().wrapFunction();
    let question = BG.buggyExpression;
    let answer = BG.expression;
    document.getElementById("code-input54").innerText = question;
    DebuggingNonVariableExpressionsMissingOperators.question = question;
    DebuggingNonVariableExpressionsMissingOperators.answer = answer;
}
function DebuggingNonVariableExpressionsSyntaxErrors(){
    let BG = new BugGenerator0().wrapFunction().buggySyntax();
    let question = BG.buggyExpression;
    let answer = BG.expression;
    document.getElementById("code-input55").innerText = question;
    DebuggingNonVariableExpressionsSyntaxErrors.question = question;
    DebuggingNonVariableExpressionsSyntaxErrors.answer = answer;
}
function DebuggingNonVariableExpressionsAnyError(){
    let BG = new BugGenerator1().anyError();
    let question = BG.buggyExpression;
    let answer = BG.expression;
    document.getElementById("code-input56").innerText = question;
    DebuggingNonVariableExpressionsAnyError.question = question;
    DebuggingNonVariableExpressionsAnyError.answer = answer;
}

function DebuggingVariablesExpressionMissingValues(){}
function DebuggingVariablesExpressionMissingOperators(){}
function DebuggingVariablesExpressionSyntaxErrors(){}
function DebuggingVariablesExpressionAnyError(){}
////////////////////////////////////////////////////////////////////
