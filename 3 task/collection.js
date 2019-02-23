var _0x794d=["\x41","\x48","\x49","\x43","\x44","\x45","\x46","\x47\x65\x74\x44\x61\x74\x61","\x66\x75\x6E\x63\x74\x69\x6F\x6E","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x70\x61\x72\x73\x65"];
var Study= new (function(){var _0xeee8x2=[{id:1,name:_0x794d[0],type:1},{id:2,name:null,type:2},{id:7,name:_0x794d[0],type:3},{id:8,type:1},{id:9,name:_0x794d[1],type:1},{id:10,name:_0x794d[2],type:2},{id:3,name:_0x794d[3],type:1},{id:4,name:_0x794d[4],type:2},{id:11,name:_0x794d[5],type:1},{id:6,name:_0x794d[6],type:1}];
this[_0x794d[7]]= function(_0xeee8x3){if( typeof _0xeee8x3=== _0x794d[8]){setTimeout(function(){var _0xeee8x4=JSON[_0x794d[10]](JSON[_0x794d[9]](_0xeee8x2));_0xeee8x3(_0xeee8x4)},100)}}})()

Study.GetData(function (data){
    console.log("Отобразить данные");
    showData(data);
    console.log("Сортировка по возрастанию айди");
    console.log(sortAscendingId(data));
    console.log("Сортировка по типу и айди");
    console.log(sortByTypeAndId(data));
    console.log(" Выбрать только элементы с type = 2.");
    getElement(data);
    console.log("Выбрать только элементы, у которых заполено имя.");
    filledName(data);
    console.log(" Добавить новый элемент + сортировка");
    addId(data);
    console.log(" Удаление");
    deleteElements(data);
});
//Отобразить данные
function showData(data) {
    for (i=0;i<data.length;i++) {
        console.log("ID:" + "{" + data[i].id + "} |" + "Имя:" + "{" + data[i].name + "} |" + "Тип:" + "{" + data[i].type + "}");
        }
}
//Сортировка по возрастанию
function sortAscendingId(data) {
    showData(data.sort(function(a, b){
        if (a.id < b.id)
            return -1;
        if (a.id > b.id)
            return 1;
        return 0;
    }))
}
// 2. Отсортировать все элементы по свойству type по возрастанию и свойству id по убыванию.
function sortByTypeAndId(data) {
        data.sort(function (a, b) {
            if (a.type == b.type) {
                return a.id - b.id;
            }
            else {
                return a.type - b.type;
            }
        });
        showData(data);
}
// Выбрать только элементы с type = 2.
function getElement(data) {
    newdata =[];
    var j = 0;
    for (i=0;i<data.length;i++) {
        if (data[i].type == 2) {
              newdata[j] = data[i];
            j++;
        }
    }
    showData(newdata);
}
function filledName(data) {
    newdata =[];
    var j = 0;
    for (i=0;i<data.length;i++) {
        if(data[i].name != null){
            newdata[j] = data[i];
            j++;
        }
    }
    showData(newdata);
}
//Добавить в коллекцию элемент с недостающим идентификатором. Отсортировать коллекцию в порядке убывания идентификаторов.
function addId(data) {
    data[data.length] = {id: 5, name: "F", type: 1};
    showData(data.sort(function(a, b){
        if (a.id < b.id)
            return 1
        if (a.id > b.id)
            return -1
        return 0
    }))
}
//Вырезать из коллекции элементы с третьего по пятый.
function deleteElements(data) {
    data.splice(2, 3);
    showData(data);
}

