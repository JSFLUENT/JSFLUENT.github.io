function submitCode(id, func) { 
    
}
function nextCode(id, func) { 
    func();
}
//////////////////////////////////////////////////////////////////////////////////////////////////
// function QuestionGenerator() { }
//////////////////////////////////////////////////////////////////////////////////////////////////
function LogicalOperatorsAssessment() { 
    // let question = 
        // document.getElementById('question0').innerText = `Q: ${question}`;
      
}
function SameDatatypesAnswerWithOutput() {
    let datatype = new ValueGenerator().getDataType();
    let question = new ExpressionGenerator().sameDataTypeDiffOperators(2+ Math.floor(Math.random() * 3 ),datatype);
    SameDatatypesAnswerWithOutput.question = question;
    document.getElementById('question1').innerText = `Q: ${question}`;
    document.getElementById('answer1').innerText = `A: `;
    document.getElementById('code-input1').innerText = ``;
}
function SameDatatypesAnswerWithExpression() { 
    let datatype = new ValueGenerator().getDataType();
    let answer;
    let question = eval(answer = new ExpressionGenerator().sameDataTypeDiffOperators(2+ Math.floor(Math.random() * 3 ),datatype));
    SameDatatypesAnswerWithExpression.question = question;
    document.getElementById('question2').innerText = `Q: ${question}`;
    document.getElementById('answer2').innerText = `A: `;
    document.getElementById('code-input2').innerText = ``;
}
function DifferentDatatypesAnswerWithOutput() { 
    // let datatype = new ValueGenerator().getDataType();
    let question = new ExpressionGenerator().diffDataTypeDiffOperators(2+ Math.floor(Math.random() * 3));
    DifferentDatatypesAnswerWithOutput.question = question;
    document.getElementById('question3').innerText = `Q: ${question}`;
    document.getElementById('answer3').innerText = `A: `;
    document.getElementById('code-input3').innerText = ``;
}
function DifferentDatatypesAnswerWithExpression() { 
    let answer;
    let question = new ExpressionGenerator().diffDataTypeDiffOperators(2+ Math.floor(Math.random() * 3 ));
    DifferentDatatypesAnswerWithOutput.question = eval(question);
    document.getElementById('question4').innerText = `Q: ${question}`;
    document.getElementById('answer4').innerText = `A: `;
    document.getElementById('code-input4').innerText = ``;
}