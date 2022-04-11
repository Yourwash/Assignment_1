$(document).ready(function () {

    var title_not_valid = false
    var d_not_valid = false
    var om_not_valid = false
    var tm_not_valid = false
    var dd_not_valid = false

    $("#title").focusout(function () {
        checkTextValue1();

    });

    $("#due-date").focusout(function () {
        checkDueDate();

    });

    $("#oral-mark").focusout(function () {
        checkOralMark();

    });

    $("#total-mark").focusout(function () {
        checkTotalMark();

    });

    $("#description").focusout(function () {
        checkTextValue2();

    });

    function checkTextValue1() {

        var pattern = /^[a-zA-Z]*$/;
        var TextValue1 = $("#title").val();
        if (pattern.test(TextValue1) && TextValue1 !== "") {
            $("#title").removeClass().addClass("form-control is-valid");
            title_not_valid = false;
        } else {
            $("#title").removeClass().addClass("form-control is-invalid");
            title_not_valid = true;
        }

    }

    function checkTextValue2() {

        var pattern = /^[a-zA-Z]*$/;
        var TextValue2 = $("#description").val();
        if (pattern.test(TextValue2) && TextValue2 !== "" && TextValue2.length <= 256) {
            $("#description").removeClass().addClass("form-control is-valid mb-4");
            d_not_valid = false;
        } else {
            $("#description").removeClass().addClass("form-control is-invalid");
            description_not_valid = true;
        }

    }

    function checkOralMark() {

        OralMark = $("#oral-mark").val();
        if (OralMark >= 0 && OralMark !== "" && Oralmark <= 100) {
            $("#oral-mark").removeClass().addClass("form-control is-valid");
            om_not_valid = false;
        } else {
            $("#oral-mark").removeClass().addClass("form-control is-invalid");
            om_not_valid = true;
        }

    }

    function checkTotalMark() {

        TotalMark = $("#total-mark").val();
        if (TotalMark >= 0 && TotalMark !== "" && Totalmark <= 100) {
            $("#total-mark").removeClass().addClass("form-control is-valid");
            tm_not_valid = false;
        } else {
            $("#total-mark").removeClass().addClass("form-control is-invalid");
            tm_not_valid = true;
        }

    }

    function checkDueDate() {

        var DateString = new Date();
        var CurentDate0 = DateString.getFullYear();
        var CurentDate1 = DateString.getMonth() + 1;
        var CurentDate2 = DateString.getDate();

        var DueDateArr = $("#due-date").val().split('-');
        var DueDate0 = parseInt(DueDateArr[0]);
        var DueDate1 = parseInt(DueDateArr[1]);
        var DueDate2 = parseInt(DueDateArr[2]);

        if (DueDate0 >= CurentDate0 && $("#due-date").val() !== "") {
            if (DueDate1 >= CurentDate1) {
                if (DueDate1 === CurentDate1) {
                    if (DueDate2 >= CurentDate2) {
                        $("#due-date").removeClass().addClass("form-control is-valid");
                        ed_not_valid = false;
                    } else {
                        $("#due-date").removeClass().addClass("form-control is-invalid");
                        ed_not_valid = true;
                    }
                } else {
                    $("#due-date").removeClass().addClass("form-control is-valid");
                    ed_not_valid = false;
                }
            } else {
                $("#due-date").removeClass().addClass("form-control is-invalid");
                ed_not_valid = true;
            }
        } else {
            $("#due-date").removeClass().addClass("form-control is-invalid");
            ed_not_valid = true;
        }
    }

    $("#registration").submit(function () {
        checkTextValue1();
        checkTextValue2();
        checkOralMark();
        checkStartDate();
        checkDueDate();


        if (title_not_valid === false && d_not_valid === false && tm_not_valid === false && om_not_valid === false && dd_not_valid === false) {
            alert("Registration Successfully");
            return true; //proceed with submit
        }
        else {
            alert("Please Fill the Form Correctly");
            return false;

        }
    });

});