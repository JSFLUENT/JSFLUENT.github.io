function submitCode(id, func) { 
    
}
function nextCode(id, func) { 
    
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
        SameDatatypesAnswerWithOutput.question = new ExpressionGenerator().generate(2+ Math.floor(Math.random() * 3 ),datatype);
        document.getElementById('question1').innerText = `Q: ${question}`;
        document.getElementById('answer1').innerText = `A: `;
        document.getElementById('code-input1').innerText = ``;
}
function SameDatatypesAnswerWithExpression() { 
    let datatype = new ValueGenerator().getDataType();
    let answer;
    SameDatatypesAnswerWithExpression.question = eval(answer = new ExpressionGenerator().generate(2+ Math.floor(Math.random() * 3 ),datatype));
    document.getElementById('question2').innerText = `Q: ${question}`;
    document.getElementById('answer2').innerText = `A: ${answer}`;
    document.getElementById('code-input2').innerText = ``;
}
function DifferentDatatypesAnswerWithOutput() { 
    // let datatype = new ValueGenerator().getDataType();
    DifferentDatatypeAnswerWithOutput.question = new ExpressionGenerator().generate(2+ Math.floor(Math.random() * 3));
    document.getElementById('question3').innerText = `Q: ${question}`;
    document.getElementById('answer3').innerText = `A: `;
    document.getElementById('code-input3').innerText = ``;
}
function DifferentDatatypesAnswerWithExpression() { 
    let answer;
    DifferentDatatypeAnswerWithOutput.question = eval(answer = new ExpressionGenerator().generate(2+ Math.floor(Math.random() * 3 )));
    document.getElementById('question4').innerText = `Q: ${question}`;
    document.getElementById('answer4').innerText = `A: `;
    document.getElementById('code-input4').innerText = ``;
}