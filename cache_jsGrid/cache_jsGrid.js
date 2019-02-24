//установка
function setCookie(name, value, expires, path, domain, secure) {
    var curCookie = name + "=" + escape(value) +
        ((expires) ? "; expires=" + expires.toGMTString() : "") +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "")

    document.cookie = curCookie
}
//получение куки
function getCookie(name) {
    var prefix = name + "="
    var cookieStartIndex = document.cookie.indexOf(prefix)
    if (cookieStartIndex == -1)
        return null
    var cookieEndIndex = document.cookie.indexOf(";", cookieStartIndex + prefix.length)
    if (cookieEndIndex == -1)
        cookieEndIndex = document.cookie.length
    return unescape(document.cookie.substring(cookieStartIndex + prefix.length, cookieEndIndex))
}

//заполнение грида
function fill() {
    var idOne = getCookie("idOne");
    var nameOne = getCookie("nameOne");
    var typeOne = getCookie("typeOne");
    var isCookie = getCookie("isCookie");
    var dataOfGrid;
    if (isCookie == null) {
        Study.GetData(function (data) {
            dataOfGrid = data;
            for (var i = 0; i < dataOfGrid.length; i++) {
                setCookie("data[" + i + "].id", dataOfGrid[i].id);
                setCookie("data[" + i + "].name", dataOfGrid[i].name);
                setCookie("data[" + i + "].type ", dataOfGrid[i].type);
            }
            setCookie("isCookie", dataOfGrid.length);
            $("#jsGrid").jsGrid({
                width: "100%",
                height: "400px",

                inserting: true,
                editing: true,
                sorting: true,
                paging: true,

                data: dataOfGrid,

                fields: [

                    { name: "id", type: "number", width: 150 },
                    { name: "name", type: "text", width: 150 },
                    { name: "type", type: "number", width: 150 }

                ]
            });
        });



    }
    else {
        dataOfGrid = [];
        for (var i = 0; i < getCookie("isCookie") ; i++) {
            var dataTemp = { id: getCookie("data[" + i + "].id"), name: getCookie("data[" + i + "].name"), type: getCookie("data[" + i + "].type") };
            dataOfGrid.push(dataTemp);
        }

        $("#jsGrid").jsGrid({
            width: "100%",
            height: "400px",

            inserting: true,
            editing: true,
            sorting: true,
            paging: true,

            data: dataOfGrid,

            fields: [

                { name: "id", type: "number", width: 150 },
                { name: "name", type: "text", width: 150 },
                { name: "type", type: "number", width: 150 }

            ]
        });
    }


}
