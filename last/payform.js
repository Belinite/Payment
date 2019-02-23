//алерт на кнопку
function  confirm() {
    alert("Проверьте свои данные");
}
//переменная для хранения значения Физ или Юр лица(число 17 или 13)
var PayerType;
//функция получения значения селектора
function getValue(selected) {
    PayerType = selected.value;
    console.log(PayerType);
    if (typeof PayerType == "undefined") {
        document.Payment.tax.value = "Выберите лицо";

    }
    if(PayerType == 17) {
        document.Payment.tax.value = selected.value;
        //добавление селектора для юр лица
        addFace();
        //добавление чекбокса для юр лица
        addCheckbox();

    }
    else {
        document.Payment.tax.value = selected.value;
        //удаление селектора для юр лица
        removeFace();
        //удаление чекбокса для юр лица
        removeCheckbox();
    }
    //проверка имени
    checkName();
    //проверка инн
    validateInn();
    //получение результата
    getResult();

}
//добавление селектора для юр лица
function addFace() {
    $(function () {
        $('#selector').append(
            '<select class="btn btn-secondary dropdown-toggle" name="legal_form"> ' +
            '<option id="Select_Form">Выберите форму юр лица</option> ' +
            '<option name="OOO">ООО</option> <option name="OAO">ОАО</option> ' +
            '<option name="ZAO">ЗАО</option> <option name="IP">ИП</option> ' +
            '</select>');

    });

}
//удаление селектора для юр лица
function removeFace() {
    $(function () {
        $('#selector').empty()});
}
//Проверка имени на заполнение обязательногополя
function checkName() {
    $(function () {
        $('#invalid_name').empty()});
    if (document.Payment.Name.value != "") {

        document.Payment.Name.style.border="2px solid green";
        $(function () {
            $('#invalid_name').empty()});
    }
    else {
        document.Payment.Name.style.border="2px solid red";
        $(function () {
            $('#invalid_name').append(
                '<p>Это поле обязательно для заполнения!</p>');
        });
    }

}
//функция для проверки корректности ИНН
function validateInn() {
    $(function () {
        $('#invalid_inn').empty()});
    console.log(PayerType);
    var inn = document.Payment.INN.value;
    if (PayerType == 0 || typeof PayerType == "undefined" || PayerType == null || PayerType == "") {
        $(function () {
            $('#invalid_inn').append(
                '<p>Сначала выберите лицо!</p>');
        });
        document.Payment.INN.style.border = "2px solid red";
    }
    //Для физического лица
    if (PayerType == 13) {
        $(function () {
            $('#invalid_inn').empty()});
        var reg = new RegExp(/^\d{12}$/);
        if (reg.test(inn) == true) {
            document.Payment.INN.style.border = "2px solid green";
            $(function () {
                $('#invalid_inn').empty()});
        }
        else {
            document.Payment.INN.style.border = "2px solid red";
            $(function () {
                $('#invalid_inn').append(
                    '<p>Требуется ввести 12 цифр!</p>');
            });
        }
    }
    //Для юридического лица
    if (PayerType == 17) {
        $(function () {
            $('#invalid_inn').empty()});
        var reg = new RegExp(/^\d{10}$/);
        if (reg.test(inn) == true) {
            document.Payment.INN.style.border = "2px solid green";
            $(function () {
                $('#invalid_inn').empty()});
        }
        else {
            document.Payment.INN.style.border = "2px solid red";
            $(function () {
                $('#invalid_inn').append(
                    '<p>Требуется ввести 10 цифр!</p>');
            });
        }
    }

}
//Функция добавления чекбокса для юр лица
function addCheckbox() {
    $(function () {
        $('#checkbox').append(
        '<input type="checkbox" name="checkbox" onclick="blockInn();"><span>Упрощенное налогообложение</span>');
    });

}
//функция для очищения и блокирования ИНН, если checkbox.checked
function blockInn() {
    if(document.Payment.checkbox.checked) {
        document.Payment.INN.value = "";
        document.Payment.INN.style.border = "";
        document.Payment.INN.disabled = true;
        $(function () {
            $('#invalid_inn').empty()});
    }
    else {
        document.Payment.INN.disabled = false;
    }
}
//удаление чекбокса для юр лица
function removeCheckbox() {
    $(function () {
        $('#checkbox').empty()});
}
//Функция проверки корректности ввода номера телефона
function checkTelephone()
{
    $(function () {
        $('#invalid_telephone').empty()});
    var reg = new RegExp("^(\\+7)(\\(\\d{3}\\)|\\d{3})\\d{7}$")
    var telephone = document.Payment.telephone.value;
    if (reg.test(telephone) == true) {
        console.log(telephone);
        $(function () {
            $('#invalid_telephone').empty()});

    }
    else
    {
        $(function () {
            $('#invalid_telephone').append(
                '<p>Введите номер вида +7(___) ___ __ __!</p>');
        });

    }
}
//Функция получения суммы платежа, вычисления и отображения итога
function getResult() {
    $(function () {
        $('#invalid_sum').empty()});
    console.log(document.Payment.sum.value);
    var sum = document.Payment.sum.value;
    var reg = new RegExp("^([0-9]*[\.]?[0-9]+)$");
    if (reg.test(sum) == true) {
        console.log(Math.round(sum * 100) / 100);
        var result = Math.round(parseFloat(sum) * 100) / 100 * (1 + PayerType/100);
        document.Payment.result.value = result + "=" + Math.round(parseFloat(sum) * 100) / 100 + "*(1+" + PayerType + "/100)";
        document.Payment.sum.style.border = "2px solid  green";
    }
    else
    {
        document.Payment.result.value = "";
        $(function () {
            $('#invalid_sum').append(
                '<p>Требуется ввести целое, либо число с точкой!</p>');
        });
        document.Payment.sum.style.border = "2px solid red";
    }
}