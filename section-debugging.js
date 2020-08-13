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
new BugGenerator0().bugs.forEach(function(e){
    key = e;
    DebuggingQuestions[cnt] = {
        question: null,
        answer: null,
        generator: (function(cnt){ return function(){
            // let BG = new BugGenerator0().buggyValue().wrapFunction();
            // let question = BG.buggyExpression;
            // let answer = BG.expression;
        }})(cnt)
    };
    document.getElementById('section-debugging-questions').innerHTML += `
    <div>
        <h3>Debugging Missing ${key}: Non Variable Expressions</h3>
        <div id="result${cnt}">R: </div>
        <button id="submitcode${cnt}" onclick="submitCode_debug(${cnt})">Submit Code</button>
        <button id="next${cnt}" onclick="nextCode_debug(${cnt})">Next Question</button>
        <div>
            <textarea style="width:100%;" name="" id="code-input${cnt++}" cols="30" rows="10"></textarea>
        </div>
    </div>`;

});
