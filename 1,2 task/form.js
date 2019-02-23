function ValidateName() {
    var person_name = document.Registration.PersonName;
    var reg = new RegExp("[А-Я][а-я]+");
    if(reg.test(person_name.value) == true) {
        person_name.style.border = "2px solid green";
    }
    else
        person_name.style.border = "2px solid red";
}
function ValidateSurname() {
    var person_surname = document.Registration.Surname;
    var reg = new RegExp("[А-Я][а-я]+");
    if(reg.test(person_surname.value) == true) {
        person_surname.style.border = "2px solid green";
    }
    else
        person_surname.style.border = "2px solid red";
}

function ValidateDay() {
    var person_bday = document.Registration.Day;
    var reg_date = new RegExp("(0[1-9]|1[0-9]|2[0-9]|3[01])");
    if(reg_date.test(person_bday.value)==true )
    {
        person_bday.style.border="2px solid green";
    }
    if (person_bday.value != null) {
        if (reg_date.test(person_bday.value) == false) {
            person_bday.style.border = "2px solid red";
        }

    }

}
function ValidateMonth() {
    var person_bmonth = document.Registration.Month;
    var reg_month = new RegExp("0[1-9]|1[012]");
    if (reg_month.test(person_bmonth.value) == true) {
        person_bmonth.style.border = "2px solid green";
    }
    if (person_bmonth.value != null) {
        if (reg_month.test(person_bmonth.value) == false) {
            person_bmonth.style.border = "2px solid red";
        }

    }
}
function ValidateYear() {
    var person_byear = document.Registration.Year;
    var reg_year = new RegExp("[0-9]{4}");
    if(reg_year.test(person_byear.value)==true)
    {
        person_byear.style.border="2px solid green";
    }
    if (person_byear.value != null) {
        if (reg_year.test(person_byear.value) == false) {
            person_byear.style.border = "2px solid red";
        }

    }

}
