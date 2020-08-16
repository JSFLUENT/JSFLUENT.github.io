let QuestionsLoops = {};
//////////////////////////////////////////////////////////////////////
function submitCode_loops(id){
    document.getElementById(`code-input${id}`)  .value = `${QuestionsLoops[id].code}`;
    document.getElementById(`initial`)          .value = `${QuestionsLoops[id].initial}`;
    document.getElementById(`limit`)            .value = `${QuestionsLoops[id].limit}`;
    document.getElementById(`incOp`)            .value = `${QuestionsLoops[id].incOp}`;
    document.getElementById(`incVal`)           .value = `${QuestionsLoops[id].incVal}`;
}
function nextCode_loops(id){
    QuestionsLoops[id].generator();
    let html = ``;
    let set = QuestionsLoops[id].ioSet;
    let o;
    for (let k in set) {
        o = set[k];
        html += `<tr>`;
        html += `<td>${k}</td>`;
        html += `<td>${o}</td>`;
        html += `</tr>`;
    }
    document.getElementById(`section-loops-table-body-${id}`).innerHTML = html;
    document.getElementById(`code-input${id}`).value = ``;
}
//////////////////////////////////////////////////////////////////////
Object.keys(new LoopGenerator().incs).forEach(function(e){
    
    QuestionsLoops[cnt] = {
        code: null,
        initial: null,
        limit: null,
        incOp: null,
        incVal: null,
        ioSet: {},
        generator: (function(cnt){return function(){
            let q = new LoopGenerator()
            let outputs = [];
            q.codeBlock = `outputs.push(i)`;
            q.generate(e);
            QuestionsLoops[cnt]["code"]     = q["code"];
            QuestionsLoops[cnt]["initial"]  = q["initial"];
            QuestionsLoops[cnt]["limit"]    = q["limit"];
            QuestionsLoops[cnt]["incOp"]    = q["incOp"];
            QuestionsLoops[cnt]["incVal"]   = q["incVal"];
            eval(q.code);
            outputs.forEach((e,i)=>{
                QuestionsLoops[cnt].ioSet[i] = e;
            })        
        }})(cnt)
    };

    document.getElementById("section-loops-questions").innerHTML += `
    <div>
        <h4>Looping With Assignment Operator: ${e}</h4>
        <input id="initial${cnt}" placeholder="initial" style="width:100%;">
        <input id="limit${cnt}"   placeholder="limit"   style="width:100%;">
        <input id="incOp${cnt}"   placeholder="inc op"  style="width:100%;">
        <input id="incVal${cnt}"  placeholder="inc val" style="width:100%;">
        <input id="code-input${cnt}"    placeholder="code"    style="width:100%;">
        <button onclick="submitCode_loops(${cnt})">Submit Code</button>
        <button onclick="nextCode_loops(${cnt})">Next Code</button>
    </div>
    <table>
        <thead>
            <th>iteration</th>
            <th>output:needed</th>
        </thead>
        <tbody id="section-loops-table-body-${cnt++}"></tbody>
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
    generator: (function(cnt){return function(){
        let q = new LoopGenerator()
        let outputs = [];
        q.codeBlock = `outputs.push(i)`;
        q.generate();
        QuestionsLoops[cnt]["code"]     = q["code"];
        QuestionsLoops[cnt]["initial"]  = q["initial"];
        QuestionsLoops[cnt]["limit"]    = q["limit"];
        QuestionsLoops[cnt]["incOp"]    = q["incOp"];
        QuestionsLoops[cnt]["incVal"]   = q["incVal"];
        eval(q.code);
        outputs.forEach((e,i)=>{
            QuestionsLoops[cnt].ioSet[i] = e;
        })        
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


