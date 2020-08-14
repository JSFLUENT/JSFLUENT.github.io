let DebuggingQuestions = {};
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
function submitCode_debug(id) {
    // let code = document.getElementById(`code-input${id}`).innerText.trim();
    
    document.getElementById(`answer${id}`).innerText = `A: ${DebuggingQuestions[id].answer}`;
}
function nextCode_debug(id) { 
    DebuggingQuestions[id].generator();
    document.getElementById(`answer${id}`).innerText = `A: `;
    document.getElementById(`output${id}`).innerText = `O: ${DebuggingQuestions[id].output}`;
    document.getElementById(`code-input${id}`).innerText = `${DebuggingQuestions[id].question}`;
}
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
new BugGenerator0().bugs.forEach(function(e){
    key = e;
    for (let i = 1; i < 4; i++) {
        DebuggingQuestions[cnt] = {
            output: null,
            question: null,
            answer: null,
            generator: (function(cnt){ return function(){
                let BG = new BugGenerator0().genExpression().wrapFunction()
                DebuggingQuestions[cnt].answer   = BG.wrappedExpression;
                let output = eval(`x = ${BG.wrappedExpression}`)();
                DebuggingQuestions[cnt].output   = `${output}`;
                BG = BG.genBug(e,i);
                DebuggingQuestions[cnt].question = BG.wrappedExpression;
            }})(cnt)
        };
        document.getElementById('section-debugging-questions').innerHTML += `
        <div>
            <h3>Debugging Missing ${i} ${key}</h3>
            <div id="answer${cnt}">A: </div>
            <div id="output${cnt}">O: </div>
            <button id="submitcode${cnt}" onclick="submitCode_debug(${cnt})">Submit Code</button>
            <button id="next${cnt}" onclick="nextCode_debug(${cnt})">Next Question</button>
            <div>
                <textarea style="width:100%;" name="" id="code-input${cnt++}" cols="30" rows="10"></textarea>
            </div>
        </div>`;
    }
});
