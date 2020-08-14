let QuestionsLoops = {};
//////////////////////////////////////////////////////////////////////

Object.keys(new LoopGenerator().incs).forEach(function(e){
    
    QuestionsLoops[cnt] = {
        code: null,
        initial: null,
        limit: null,
        incOp: null,
        incVal: null,
        generate: (function(cnt){return function(){
            let q = new LoopGenerator().generate(e);
            QuestionsLoops[cnt]["code"]     = q["code"];
            QuestionsLoops[cnt]["initial"]  = q["initial"];
            QuestionsLoops[cnt]["limit"]    = q["limit"];
            QuestionsLoops[cnt]["incOp"]    = q["incOp"];
            QuestionsLoops[cnt]["incVal"]   = q["incVal"];
        }})(cnt)
    };

    document.getElementById("section-loops-questions").innerHTML += `
    <div>
        <h4>Looping With Assignment Operator: ${e}</h4>
        <input id="initial${cnt}" placeholder="initial" style="width:100%;">
        <input id="limit${cnt}"   placeholder="limit"   style="width:100%;">
        <input id="incOp${cnt}"   placeholder="inc op"  style="width:100%;">
        <input id="incVal${cnt}"  placeholder="inc val" style="width:100%;">
        <input id="code${cnt}"    placeholder="code"    style="width:100%;">
        <button onclick="submitCode_loops(${cnt})">Submit Code</button>
        <button onclick="nextCode_loops(${cnt})">Next Code</button>
    </div>
    <table>
        <thead>
            <th>input</th>
            <th>output:needed</th>
            <th>output:actual</th>
        </thead>
        <tbody id="tbody${cnt++}">
            <tr>
                <td>0</td>
                <td>0</td>
                <td></td>
            </tr>
            <tr>
                <td>1</td>
                <td>2</td>
                <td></td>
            </tr>
            <tr>
                <td>2</td>
                <td>4</td>
                <td></td>
            </tr>
            <tr>
                <td>3</td>
                <td>6</td>
                <td></td>
            </tr>
        </tbody>
    </table>
    <br>
    <br>
    `;
});

QuestionsLoops[cnt] = {
    code: null,
    initial: null,
    limit: null,
    incOp: null,
    incVal: null,
    generate: (function(cnt){return function(){
        let q = new LoopGenerator().generate();
        QuestionsLoops[cnt]["code"]     = q["code"];
        QuestionsLoops[cnt]["initial"]  = q["initial"];
        QuestionsLoops[cnt]["limit"]    = q["limit"];
        QuestionsLoops[cnt]["incOp"]    = q["incOp"];
        QuestionsLoops[cnt]["incVal"]   = q["incVal"];
    }})(cnt)
};

document.getElementById("section-loops-questions").innerHTML += `
    <div>
        <h4>Looping With Assignment Operator: unknown</h4>
        <input id="initial${cnt}" placeholder="initial" style="width:100%;">
        <input id="limit${cnt}"   placeholder="limit"   style="width:100%;">
        <input id="incOp${cnt}"   placeholder="inc op"  style="width:100%;">
        <input id="incVal${cnt}"  placeholder="inc val" style="width:100%;">
        <input id="code${cnt}"    placeholder="code"    style="width:100%;">
        <button onclick="submitCode_loops(${cnt})">Submit Code</button>
        <button onclick="nextCode_loops(${cnt})">Next Code</button>
    </div>
    <table>
        <thead>
            <th>input</th>
            <th>output:needed</th>
            <th>output:actual</th>
        </thead>
        <tbody id="tbody${cnt++}">
            <tr>
                <td>0</td>
                <td>0</td>
                <td></td>
            </tr>
            <tr>
                <td>1</td>
                <td>2</td>
                <td></td>
            </tr>
            <tr>
                <td>2</td>
                <td>4</td>
                <td></td>
            </tr>
            <tr>
                <td>3</td>
                <td>6</td>
                <td></td>
            </tr>
        </tbody>
    </table>
    <br>
    <br>
    `;


