$(document).ready(function () {

    var tvalue1_not_valid = false
    var tvalue2_not_valid = false
    var tvalue3_not_valid = false
    var sd_not_valid = false
    var ed_not_valid = false

    $("#title").focusout(function () {
        checkTextValue1();

    });

    $("#stream").focusout(function () {
        checkTextValue2();

    });

    $("#type").focusout(function () {
        checkTextValue3();

    });

    $("#start-date").focusout(function () {
        checkStartDate();

    });

    $("#end-date").focusout(function () {
        checkEndDate();

    });

    function checkTextValue1() {

        var pattern = /^[a-zA-Z]*$/;
        var TextValue1 = $("#title").val();
        if (pattern.test(TextValue1) && TextValue1 !== "") {
            $("#title").removeClass().addClass("form-control is-valid");
            tvalue1_not_valid = false;
        } else {
            $("#title").removeClass().addClass("form-control is-invalid");
            tvalue1_not_valid = true;
        }

    }

    function checkTextValue2() {

        var pattern = /^[a-zA-Z]*$/;
        var TextValue2 = $("#stream").val();
        if (pattern.test(TextValue2) && TextValue2 !== "") {
            $("#stream").removeClass().addClass("form-control is-valid");
            tvalue2_not_valid = false;
        } else {
            $("#stream").removeClass().addClass("form-control is-invalid");
            tvalue2_not_valid = true;
        }

    }

    function checkTextValue3() {

        var pattern = /^[a-zA-Z]*$/;
        var TextValue3 = $("#type").val();
        if (pattern.test(TextValue3) && TextValue3 !== "") {
            $("#type").removeClass().addClass("form-control is-valid");
            tvalue3_not_valid = false;
        } else {
            $("#type").removeClass().addClass("form-control is-invalid");
            tvalue3_not_valid = true;
        }

    }

    function checkStartDate() {

        var StartDateArr = $("#start-date").val().split('-');
        var StartDate0 = parseInt(StartDateArr[0]);
        var StartDate1 = parseInt(StartDateArr[1]);
        var StartDate2 = parseInt(StartDateArr[2]);
        if (StartDate0 >= 2022 && $("#start-date").val() !== "") {
            $("#start-date").removeClass().addClass("form-control is-valid");
            sd_not_valid = false;
        } else {
            $("#start-date").removeClass().addClass("form-control is-invalid");
            sd_not_valid = true;
        }
    }


    function checkEndDate() {

        var StartDateArr = $("#start-date").val().split('-');
        var StartDate0 = parseInt(StartDateArr[0]);
        var StartDate1 = parseInt(StartDateArr[1]);
        var StartDate2 = parseInt(StartDateArr[2]);

        var EndDateArr = $("#end-date").val().split('-');
        var EndDate0 = parseInt(EndDateArr[0]);
        var EndDate1 = parseInt(EndDateArr[1]);
        var EndDate2 = parseInt(EndDateArr[2]);

        if (EndDate0 >= StartDate0 && $("#end-date").val() !== "") {
            if (EndDate1 >= StartDate1) {
                if (EndDate1 === StartDate1) {
                    if (EndDate2 >= StartDate2) {
                        $("#end-date").removeClass().addClass("form-control is-valid");
                        ed_not_valid = false;
                    } else {
                        $("#end-date").removeClass().addClass("form-control is-invalid");
                        ed_not_valid = true;
                    }
                } else {
                    $("#end-date").removeClass().addClass("form-control is-valid");
                    ed_not_valid = false;
                }
            } else {
                $("#end-date").removeClass().addClass("form-control is-invalid");
                ed_not_valid = true;
            }
        } else {
            $("#end-date").removeClass().addClass("form-control is-invalid");
            ed_not_valid = true;
        }
    }

    $("#registration").submit(function () {
        checkTextValue1();
        checkTextValue2();
        checkTextValue3();
        checkStartDate();
        checkEndDate();


        if (tvalue1_not_valid === false && tvalue2_not_valid === false && tvalue3_not_valid === false && sd_not_valid === false && ed_not_valid === false) {
            alert("Registration Successfully");
            return true; //proceed with submit
        }
        else {
            alert("Please Fill the Form Correctly");
            return false;

        }
    });

});