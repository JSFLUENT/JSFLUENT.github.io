


let tbody;
for (let m in ops) {
    tbody = "";
    for (let k in ops[m]) {
        tbody+=`
        <tr>
            <td>${k}</td>
            <td>${ops[m][k]}</td>
        </tr>`;
    }

    document.getElementById('section-reference-tables').innerHTML += `
    <table>
        <h3>${m} operators</h3>
        <thead>
            <th>operator</th>
            <th>name</th>
        </thead>
        <tbody>
            ${tbody}
        </tbody>
    </table>
    <br>
    <br>
    `;
}