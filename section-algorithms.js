let QuestionsAlgorithms = {};
/////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
function submitCode_algs(id) {
    // let code = document.getElementById(`code-input${id}`).innerText.trim();
    
    document.getElementById(`answer${id}`).innerText = `A: ${DebuggingQuestions[id].answer}`;
}
function nextCode_algs(id) { 
    DebuggingQuestions[id].generator();
    document.getElementById(`answer${id}`).innerText = `A: `;
    document.getElementById(`output${id}`).innerText = `O: ${DebuggingQuestions[id].output}`;
    document.getElementById(`code-input${id}`).innerText = `${DebuggingQuestions[id].question}`;
}
/////////////////////////////////////////////////////////////////////////////////