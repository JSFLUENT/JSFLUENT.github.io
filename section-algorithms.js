let QuestionsAlgorithms = {};
/////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
function submitCode_algs(id) {
    // let code = document.getElementById(`code-input${id}`).innerText.trim();
    
    document.getElementById(`answer${id}`).innerText = `A: ${QuestionsAlgorithms[id].answer}`;
}
function nextCode_algs(id) { 
    QuestionsAlgorithms[id].generator();
    let html = ``;
    let set = QuestionsAlgorithms[id].ioSet;
    let setKeys = Object.keys(set[0]);

    setKeys.forEach(function (e) { 
        html += `<th>${e}</th>`;
    });
    document.getElementById(`section-algorithms-table-head-${id}`).innerHTML = html;
    html = ``;

    // document.getElementById(`code-input${id}`).innerText = ``;
}
/////////////////////////////////////////////////////////////////////////////////

for (var i = 1; i <= 3; i++) {

    QuestionsAlgorithms[cnt] = {
        algorithm: null,
        variables: {},
        ioSet: {},
        generator: (function (cnt) { 
            return function () {

                let AG = new AlgorithmGenerator().genExpression(i).generate(i).wrapFunction();
               
                QuestionsAlgorithms[cnt].algorithm = AG.wrappedExpression;
                QuestionsAlgorithms[cnt].variables = AG.variables;
                for (let k = 0; k <= 10; k++) {
                    let z = AG.variables;
                    QuestionsAlgorithms[cnt].ioSet[k] = {};
                    for (let v = 0; v < z.length; v++) {
                        QuestionsAlgorithms[cnt].ioSet[k][z[v]] = k;
                    }
                    QuestionsAlgorithms[cnt].ioSet[k]["output"] = eval(`xz = (function(${AG.variables}){ return ${QuestionsAlgorithms[cnt].algorithm} })(${Object.values(QuestionsAlgorithms[cnt].ioSet[k])})`)();
                }
            }
        }(cnt))
    };

    document.getElementById('section-algorithms-questions').innerHTML += `
    <div>
       <h3>${i} variable operator functions</h3>
       <button onclick="submitCode_algs(${cnt})">Submit Code</button>
       <button onclick="nextCode_algs(${cnt})">Next Question</button>
       <div>
           <textarea style="width:100%;" name="" id="code-input${cnt}" cols="30" rows="10"></textarea>
       </div>
       <table>
       <thead id="section-algorithms-table-head-${cnt}">
           <th>input</th>
           <th>output:needed</th>
           <th>output:actual</th>
       </thead>
       <tbody id="section-algorithm-table-body-${cnt++}">
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
    </div>
    `;
}