// создал массив таблицы умножения
var tableArr = [];
for (var i = 0; i <= 10; i++) {
    tableArr[i] = [];
    for (let j = 0; j <= 10; j++) {
        if (i === 0) tableArr[i][j] = j;
        else if (j === 0) tableArr[i][j] = i;
        else tableArr[i][j] = i * j;
    }
}

// Создание и заполнение таблицы
for (let i = 0; i < tableArr.length; i++) {
    let tr = document.createElement("tr");
    for (let j = 0; j < tableArr[i].length; j++) {
        var td = document.createElement("td");
        td.textContent = tableArr[i][j];
        if (i === 0 || j === 0) td.style.fontWeight = 700;
            tr.append(td);
    }
    table.append(tr);
}

table.onmouseover = table.onmouseout = handler;

function handler(event) {
    if (event.type === 'mouseover') {
        paintCell(event.target.cellIndex, event.target.parentElement.rowIndex, '#bbb');
        event.target.style.background = '#888'
    }
    if (event.type === 'mouseout') {
        event.target.style.background = ''
        unPaintCell(event.target.cellIndex, event.target.parentElement.rowIndex);
    }

    function paintCell(x, y, cellColor) {
        for (let i = 0; i <= 10; i++) document.getElementById('table').rows[y].cells[i].style.backgroundColor = cellColor;
        for (let j = 0; j <= 10; j++) document.getElementById('table').rows[j].cells[x].style.backgroundColor = cellColor;
    }

    function unPaintCell(x, y) {
        for (let i = 0; i <= 10; i++) document.getElementById('table').rows[y].cells[i].style.removeProperty("background-color");
        for (let j = 0; j <= 10; j++) document.getElementById('table').rows[j].cells[x].style.removeProperty("background-color");
    }
}
