function getGrid(data) {
    $("#jsGrid").jsGrid({
        width: "100%",
        height: "400px",

        inserting: true,
        editing: true,
        sorting: true,
        paging: true,

        data: data,

        fields: [
            {name: "id", type: "number", width: 50},
            {name: "name", type: "text", width: 50},
            {name: "type", type: "number", width: 50}
        ]
    });
}