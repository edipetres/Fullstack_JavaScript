

let names2 = names.filter(function (name) {
    return name.length <= 3;
});

let rows = names.map(function (name) {
    return "<td>" + name + "</td>"
});

let rowsStr = rows.join(" ");
console.log(rowsStr);

let table = `<table><tbody>  
${rowsStr}
</tbody></table>`

console.log(table);