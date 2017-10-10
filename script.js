function createTable(){

    //ввод параметров таблицы
    var col = prompt('Сколько создать столбцов? (1 - 25)', 7);
    var line = prompt('Сколько создать строк? (1 - 25)', 7);
    if (col < 1 || col > 25) col = 7;
    if (line < 1 || line > 25) line = 7;

    //создание таблицы
    var tableContainer = document.getElementById('tableContainer');
    var table = document.createElement('table');

    for (var i = 0; i < line; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < col; j++) {
            var td = document.createElement('td');
            td.classList.add('whiteSquare');
            tr.appendChild(td)
        }
        table.appendChild(tr);
    }

    table.setAttribute('id', 'bwTable');
    table.setAttribute('onmousedown', 'repaint(event.target)');
    tableContainer.appendChild(table);

    //создание кнопки изменения ячеек
    var repaintButton = document.createElement('input');
    repaintButton.setAttribute('onclick', 'allRepaint()');
    repaintButton.setAttribute('type', 'button');
    repaintButton.setAttribute('value', 'Поменять цвета');
    tableContainer.appendChild(repaintButton);
}

function repaint(square){  
    square.classList.toggle('blackSquare');
    square.classList.toggle('whiteSquare');
}

function allRepaint(){
    var bwTable = document.getElementById('bwTable');
    bwTable.classList.toggle('repaint');
}

createTable();