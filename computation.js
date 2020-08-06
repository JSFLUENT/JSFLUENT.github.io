function submitCode(id, func) { 
    
}
function nextCode(id, func) { 
    func();
}
//////////////////////////////////////////////////////////////////////////////////////////////////
// function QuestionGenerator() { }
//////////////////////////////////////////////////////////////////////////////////////////////////

function SameDataTypeWithBooleanAND(){
    let datatype = new ValueGenerator().getDataType("boolean");
    
    let question = eval(answer = new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype,"&&"));
    SameDatatypesAnswerWithExpression.question = question;
    document.getElementById('').innerText = `Q: ${question}`;
    document.getElementById('').innerText = `A: `;
    document.getElementById('').innerText = ``;
}
function SameDataTypeWithBooleanOR(){
    let datatype = new ValueGenerator().getDataType("boolean");
    
    let question = eval(answer = new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype,"||"));
    SameDatatypesAnswerWithExpression.question = question;
    document.getElementById('').innerText = `Q: ${question}`;
    document.getElementById('').innerText = `A: `;
    document.getElementById('').innerText = ``;
}
function SameDataTypeWithBooleanXOR(){
    let datatype = new ValueGenerator().getDataType("boolean");
    
    let question = eval(answer = new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype,"^"));
    SameDatatypesAnswerWithExpression.question = question;
    document.getElementById('').innerText = `Q: ${question}`;
    document.getElementById('').innerText = `A: `;
    document.getElementById('').innerText = ``;
}

function SameDataTypeWithNumbersModulus(){
    let datatype = new ValueGenerator().getDataType("number");
    
    let question = eval(answer = new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype,"%"));
    SameDatatypesAnswerWithNumbersModulus.question = question;
    document.getElementById('').innerText = `Q: ${question}`;
    document.getElementById('').innerText = `A: `;
    document.getElementById('').innerText = ``;
}
function DifferentDatatypeModulus(){
    // let datatype = new ValueGenerator().getDataType();
    
    let question = eval(answer = new ExpressionGenerator().diffDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),"%"));
    SameDatatypesAnswerWithExpression.question = question;
    document.getElementById('').innerText = `Q: ${question}`;
    document.getElementById('').innerText = `A: `;
    document.getElementById('').innerText = ``;
}
function SameDataTypeWithNumbersXor(){
    let datatype = new ValueGenerator().getDataType("number");
    
    let question = eval(answer = new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype,"%"));
    SameDatatypesAnswerWithExpression.question = question;
    document.getElementById('').innerText = `Q: ${question}`;
    document.getElementById('').innerText = `A: `;
    document.getElementById('').innerText = ``;
}
function DifferentDatatypeXor(){
    // let datatype = new ValueGenerator().getDataType();s
    
    let question = eval(answer = new ExpressionGenerator().diffDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),"^"));
    SameDatatypesAnswerWithExpression.question = question;
    document.getElementById('').innerText = `Q: ${question}`;
    document.getElementById('').innerText = `A: `;
    document.getElementById('').innerText = ``;
}
function SameDataTypeWithNumbersAnd(){
    let datatype = new ValueGenerator().getDataType("number");
    
    let question = eval(answer = new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype,"&&"));
    SameDatatypesAnswerWithExpression.question = question;
    document.getElementById('').innerText = `Q: ${question}`;
    document.getElementById('').innerText = `A: `;
    document.getElementById('').innerText = ``;
}
function DifferentDatatypeAnd(){
    // let datatype = new ValueGenerator().getDataType();
    
    let question = eval(answer = new ExpressionGenerator().diffDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),"&&"));
    SameDatatypesAnswerWithExpression.question = question;
    document.getElementById('').innerText = `Q: ${question}`;
    document.getElementById('').innerText = `A: `;
    document.getElementById('').innerText = ``;
}
function SameDataTypeWithNumbersMultiply(){
    let datatype = new ValueGenerator().getDataType("number");
    
    let question = eval(answer = new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype,"*"));
    SameDatatypesAnswerWithExpression.question = question;
    document.getElementById('').innerText = `Q: ${question}`;
    document.getElementById('').innerText = `A: `;
    document.getElementById('').innerText = ``;
}
function DifferentDatatypeMultiply(){
    // let datatype = new ValueGenerator().getDataType();
    
    let question = eval(answer = new ExpressionGenerator().diffDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),"*"));
    SameDatatypesAnswerWithExpression.question = question;
    document.getElementById('').innerText = `Q: ${question}`;
    document.getElementById('').innerText = `A: `;
    document.getElementById('').innerText = ``;
}
function SameDataTypeWithNumbersSubstract(){
    let datatype = new ValueGenerator().getDataType("number");
    
    let question = eval(answer = new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype,"-"));
    SameDatatypesAnswerWithExpression.question = question;
    document.getElementById('').innerText = `Q: ${question}`;
    document.getElementById('').innerText = `A: `;
    document.getElementById('').innerText = ``;
}
function DifferentDatatypeSubstract(){
    // let datatype = new ValueGenerator().getDataType();
    
    let question = eval(answer = new ExpressionGenerator().diffDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),"-"));
    SameDatatypesAnswerWithExpression.question = question;
    document.getElementById('').innerText = `Q: ${question}`;
    document.getElementById('').innerText = `A: `;
    document.getElementById('').innerText = ``;
}
function SameDataTypeWithNumbersAddition(){
    let datatype = new ValueGenerator().getDataType("number");
    
    let question = eval(answer = new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype,"+"));
    SameDatatypesAnswerWithExpression.question = question;
    document.getElementById('').innerText = `Q: ${question}`;
    document.getElementById('').innerText = `A: `;
    document.getElementById('').innerText = ``;
}
function DifferentDatatypeAddition(){
    // let datatype = new ValueGenerator().getDataType();
    
    let question = eval(answer = new ExpressionGenerator().diffDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),"+"));
    SameDatatypesAnswerWithExpression.question = question;
    document.getElementById('').innerText = `Q: ${question}`;
    document.getElementById('').innerText = `A: `;
    document.getElementById('').innerText = ``;
}
function SameDataTypeWithNumbersDivide(){
    let datatype = new ValueGenerator().getDataType("number");
    
    let question = eval(answer = new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype,"+"));
    SameDatatypesAnswerWithExpression.question = question;
    document.getElementById('').innerText = `Q: ${question}`;
    document.getElementById('').innerText = `A: `;
    document.getElementById('').innerText = ``;
}
function DifferentDatatypeDivide(){
    // let datatype = new ValueGenerator().getDataType();
    
    let question = eval(answer = new ExpressionGenerator().diffDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),"/"));
    SameDatatypesAnswerWithExpression.question = question;
    document.getElementById('').innerText = `Q: ${question}`;
    document.getElementById('').innerText = `A: `;
    document.getElementById('').innerText = ``;
}
function SameDataTypeWithNumbersLessthan(){
    let datatype = new ValueGenerator().getDataType("number");
    
    let question = eval(answer = new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype,"<"));
    SameDatatypesAnswerWithExpression.question = question;
    document.getElementById('').innerText = `Q: ${question}`;
    document.getElementById('').innerText = `A: `;
    document.getElementById('').innerText = ``;
}
function DifferentDatatypeLessthan(){
    // let datatype = new ValueGenerator().getDataType();
    
    let question = eval(answer = new ExpressionGenerator().diffDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),"<"));
    SameDatatypesAnswerWithExpression.question = question;
    document.getElementById('').innerText = `Q: ${question}`;
    document.getElementById('').innerText = `A: `;
    document.getElementById('').innerText = ``;
}
function SameDataTypeWithNumbersGreaterthan(){
    let datatype = new ValueGenerator().getDataType("number");
    
    let question = eval(answer = new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype,">"));
    SameDatatypesAnswerWithExpression.question = question;
    document.getElementById('').innerText = `Q: ${question}`;
    document.getElementById('').innerText = `A: `;
    document.getElementById('').innerText = ``;
}
function DifferentDatatypeGreaterthan(){
    // let datatype = new ValueGenerator().getDataType();
    
    let question = eval(answer = new ExpressionGenerator().diffDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),">"));
    SameDatatypesAnswerWithExpression.question = question;
    document.getElementById('').innerText = `Q: ${question}`;
    document.getElementById('').innerText = `A: `;
    document.getElementById('').innerText = ``;
}
function SameDataTypeWithNumbersOr(){
    let datatype = new ValueGenerator().getDataType("number");
    
    let question = eval(answer = new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype,"||"));
    SameDatatypesAnswerWithExpression.question = question;
    document.getElementById('').innerText = `Q: ${question}`;
    document.getElementById('').innerText = `A: `;
    document.getElementById('').innerText = ``;
}
function DifferentDatatypeOr(){
    // let datatype = new ValueGenerator().getDataType();
    
    let question = eval(answer = new ExpressionGenerator().diffDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),"||"));
    SameDatatypesAnswerWithExpression.question = question;
    document.getElementById('').innerText = `Q: ${question}`;
    document.getElementById('').innerText = `A: `;
    document.getElementById('').innerText = ``;
}
function SameDataTypeWithNumbersKindaequals(){
    let datatype = new ValueGenerator().getDataType("number");
    
    let question = eval(answer = new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype,"=="));
    SameDatatypesAnswerWithExpression.question = question;
    document.getElementById('').innerText = `Q: ${question}`;
    document.getElementById('').innerText = `A: `;
    document.getElementById('').innerText = ``;
}
function DifferentDatatypeKindaequals(){
    // let datatype = new ValueGenerator().getDataType();
    
    let question = eval(answer = new ExpressionGenerator().diffDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),"=="));
    SameDatatypesAnswerWithExpression.question = question;
    document.getElementById('').innerText = `Q: ${question}`;
    document.getElementById('').innerText = `A: `;
    document.getElementById('').innerText = ``;
}
function SameDataTypeWithNumbersAbsolutelyequals(){
    let datatype = new ValueGenerator().getDataType("number");
    
    let question = eval(answer = new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype,"==="));
    SameDatatypesAnswerWithExpression.question = question;
    document.getElementById('').innerText = `Q: ${question}`;
    document.getElementById('').innerText = `A: `;
    document.getElementById('').innerText = ``;
}
function DifferentDatatypeAbsolutelyequals(){
    // let datatype = new ValueGenerator().getDataType();
    
    let question = eval(answer = new ExpressionGenerator().diffDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),"==="));
    SameDatatypesAnswerWithExpression.question = question;
    document.getElementById('').innerText = `Q: ${question}`;
    document.getElementById('').innerText = `A: `;
    document.getElementById('').innerText = ``;
}
function SameDataTypeWithNumbersKindanotequals(){
    let datatype = new ValueGenerator().getDataType("number");
    
    let question = eval(answer = new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype,"!="));
    SameDatatypesAnswerWithExpression.question = question;
    document.getElementById('').innerText = `Q: ${question}`;
    document.getElementById('').innerText = `A: `;
    document.getElementById('').innerText = ``;
}
function DifferentDatatypeKindanotequals(){
    // let datatype = new ValueGenerator().getDataType();
    
    let question = eval(answer = new ExpressionGenerator().diffDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),"!="));
    SameDatatypesAnswerWithExpression.question = question;
    document.getElementById('').innerText = `Q: ${question}`;
    document.getElementById('').innerText = `A: `;
    document.getElementById('').innerText = ``;
}
function SameDataTypeWithNumbersAbsolutelynotequalto(){
    let datatype = new ValueGenerator().getDataType("number");
    
    let question = eval(answer = new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype,"!=="));
    SameDatatypesAnswerWithExpression.question = question;
    document.getElementById('').innerText = `Q: ${question}`;
    document.getElementById('').innerText = `A: `;
    document.getElementById('').innerText = ``;
}
function DifferentDatatypeAbsolutelynotequalto(){
    // let datatype = new ValueGenerator().getDataType();
    
    let question = eval(answer = new ExpressionGenerator().diffDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),"!=="));
    SameDatatypesAnswerWithExpression.question = question;
    document.getElementById('').innerText = `Q: ${question}`;
    document.getElementById('').innerText = `A: `;
    document.getElementById('').innerText = ``;
}
function SameDataTypeWithNumbersBitwisedownshift(){
    let datatype = new ValueGenerator().getDataType("number");
    
    let question = eval(answer = new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype,">>"));
    SameDatatypesAnswerWithExpression.question = question;
    document.getElementById('').innerText = `Q: ${question}`;
    document.getElementById('').innerText = `A: `;
    document.getElementById('').innerText = ``;
}
function DifferentDatatypeBitwisedownshift(){
    // let datatype = new ValueGenerator().getDataType();
    
    let question = eval(answer = new ExpressionGenerator().diffDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),">>"));
    SameDatatypesAnswerWithExpression.question = question;
    document.getElementById('').innerText = `Q: ${question}`;
    document.getElementById('').innerText = `A: `;
    document.getElementById('').innerText = ``;
}
function SameDataTypeWithNumbersBitwiseupshift(){
    let datatype = new ValueGenerator().getDataType("number");
    
    let question = eval(answer = new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype,">>"));
    SameDatatypesAnswerWithExpression.question = question;
    document.getElementById('').innerText = `Q: ${question}`;
    document.getElementById('').innerText = `A: `;
    document.getElementById('').innerText = ``;
}
function DifferentDatatypeBitwiseupshift(){
    // let datatype = new ValueGenerator().getDataType();
    
    let question = eval(answer = new ExpressionGenerator().diffDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),">>"));
    SameDatatypesAnswerWithExpression.question = question;
    document.getElementById('').innerText = `Q: ${question}`;
    document.getElementById('').innerText = `A: `;
    document.getElementById('').innerText = ``;
}
function SameDataTypeWithNumbersOR(){
    let datatype = new ValueGenerator().getDataType("number");
    
    let question = eval(answer = new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype,"|"));
    SameDatatypesAnswerWithExpression.question = question;
    document.getElementById('').innerText = `Q: ${question}`;
    document.getElementById('').innerText = `A: `;
    document.getElementById('').innerText = ``;
}
function DifferentDatatypeOR(){
    // let datatype = new ValueGenerator().getDataType();
    
    let question = eval(answer = new ExpressionGenerator().diffDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),"|"));
    SameDatatypesAnswerWithExpression.question = question;
    document.getElementById('').innerText = `Q: ${question}`;
    document.getElementById('').innerText = `A: `;
    document.getElementById('').innerText = ``;
}
function SameDataTypeWithNumberAND(){
    let datatype = new ValueGenerator().getDataType("number");
    
    let question = eval(answer = new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype,"&"));
    SameDatatypesAnswerWithExpression.question = question;
    document.getElementById('').innerText = `Q: ${question}`;
    document.getElementById('').innerText = `A: `;
    document.getElementById('').innerText = ``;
}
function DifferentDatatypeAND(){
    // let datatype = new ValueGenerator().getDataType();
    
    let question = eval(answer = new ExpressionGenerator().diffDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),"&"));
    SameDatatypesAnswerWithExpression.question = question;
    document.getElementById('').innerText = `Q: ${question}`;
    document.getElementById('').innerText = `A: `;
    document.getElementById('').innerText = ``;
}
function SameDataTypeWithNumbersPower(){
    let datatype = new ValueGenerator().getDataType("number");
    
    let question = eval(answer = new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype,"**"));
    SameDatatypesAnswerWithExpression.question = question;
    document.getElementById('').innerText = `Q: ${question}`;
    document.getElementById('').innerText = `A: `;
    document.getElementById('').innerText = ``;
}
function DifferentDatatypePower(){
    // let datatype = new ValueGenerator().getDataType();
    
    let question = eval(answer = new ExpressionGenerator().diffDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),"**"));
    SameDatatypesAnswerWithExpression.question = question;
    document.getElementById('').innerText = `Q: ${question}`;
    document.getElementById('').innerText = `A: `;
    document.getElementById('').innerText = ``;
}
function SameDataTypeWithNumbersLessthanequals(){
    let datatype = new ValueGenerator().getDataType("number");
    
    let question = eval(answer = new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype,"**"));
    SameDatatypesAnswerWithExpression.question = question;
    document.getElementById('').innerText = `Q: ${question}`;
    document.getElementById('').innerText = `A: `;
    document.getElementById('').innerText = ``;
}
function DifferentDatatypeLessthanequals(){
    // let datatype = new ValueGenerator().getDataType();
    
    let question = eval(answer = new ExpressionGenerator().diffDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),"<="));
    SameDatatypesAnswerWithExpression.question = question;
    document.getElementById('').innerText = `Q: ${question}`;
    document.getElementById('').innerText = `A: `;
    document.getElementById('').innerText = ``;
}
function SameDataTypeWithNumbersGreaterthanequals(){
    let datatype = new ValueGenerator().getDataType("number");
    
    let question = eval(answer = new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype,">="));
    SameDatatypesAnswerWithExpression.question = question;
    document.getElementById('').innerText = `Q: ${question}`;
    document.getElementById('').innerText = `A: `;
    document.getElementById('').innerText = ``;
}
function DifferentDatatypeGreaterthanequals(){
    // let datatype = new ValueGenerator().getDataType();

    let question = eval(answer = new ExpressionGenerator().diffDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),">="));
    SameDatatypesAnswerWithExpression.question = question;
    document.getElementById('').innerText = `Q: ${question}`;
    document.getElementById('').innerText = `A: `;
    document.getElementById('').innerText = ``;
}






function SameDatatypesAnswerWithOutput() {
    let datatype = new ValueGenerator().getDataType();
    let question = new ExpressionGenerator().sameDataTypeSameOperators(2+ Math.floor(Math.random() * 3 ),datatype);
    SameDatatypesAnswerWithOutput.question = question;
    document.getElementById('').innerText = `Q: ${question}`;
    document.getElementById('').innerText = `A: `;
    document.getElementById('').innerText = ``;
}
function SameDatatypesAnswerWithExpression() { 
    let datatype = new ValueGenerator().getDataType();
    let answer;
    let question = eval(answer = new ExpressionGenerator().sameDataTypeDiffOperators(2+ Math.floor(Math.random() * 3 ),datatype));
    SameDatatypesAnswerWithExpression.question = question;
    document.getElementById('').innerText = `Q: ${question}`;
    document.getElementById('').innerText = `A: `;
    document.getElementById('').innerText = ``;
}
function DifferentDatatypesAnswerWithOutput() { 
    // let datatype = new ValueGenerator().getDataType();
    let question = new ExpressionGenerator().diffDataTypeDiffOperators(2+ Math.floor(Math.random() * 3));
    DifferentDatatypesAnswerWithOutput.question = question;
    document.getElementById('').innerText = `Q: ${question}`;
    document.getElementById('').innerText = `A: `;
    document.getElementById('').innerText = ``;
}
function DifferentDatatypesAnswerWithExpression() { 
    let answer;
    let question = new ExpressionGenerator().diffDataTypeDiffOperators(2+ Math.floor(Math.random() * 3 ));
    DifferentDatatypesAnswerWithOutput.question = eval(question);
    document.getElementById('').innerText = `Q: ${question}`;
    document.getElementById('').innerText = `A: `;
    document.getElementById('').innerText = ``;
}