$(document).ready(function () {

    var fname_not_valid = false
    var lname_not_valid = false
    var dob_not_valid = false
    var fees_not_valid = false

    $("#first-name").focusout(function () {
        checkFirstName();

    });

    $("#last-name").focusout(function () {
        checkLastName();

    });

    $("#date-of-birth").focusout(function () {
        checkDateofBirth();

    });

    $("#tuition-fees").focusout(function () {
        checkTuitionFees();

    });

    function checkFirstName() {

        var pattern = /^[a-zA-Z]*$/;
        var firstName = $("#first-name").val();
        if (pattern.test(firstName) && firstName !== "") {
            $("#first-name").removeClass().addClass("form-control is-valid");
            fname_not_valid = false;
        } else {
            $("#first-name").removeClass().addClass("form-control is-invalid");
            fname_not_valid = true;
        }

    }

    function checkLastName() {

        var pattern = /^[a-zA-Z]*$/;
        var lastName = $("#last-name").val();
        if (pattern.test(lastName) && lastName !== "") {
            $("#last-name").removeClass().addClass("form-control is-valid");
            lname_not_valid = false;
        } else {
            $("#last-name").removeClass().addClass("form-control is-invalid");
            lname_not_valid = true;
        }

    }

    function checkDateofBirth() {

        var dateArr = $("#date-of-birth").val().split('-');
        var yearofbirth = parseInt(dateArr[0]);
        console.log(dateArr);
        console.log(yearofbirth);
        if (yearofbirth < 2004 && $("#date-of-birth").val() !== "") {
            $("#date-of-birth").removeClass().addClass("form-control is-valid");
            dob_not_valid = false;
        } else {
            $("#date-of-birth").removeClass().addClass("form-control is-invalid");
            dob_not_valid = true;
        }

    }

    function checkTuitionFees() {

        var tuitionfees = $("#tuition-fees").val();
        if (tuitionfees === "") {
            $("#tuition-fees").removeClass().addClass("form-control is-valid");
            fees_not_valid = false;
        } else {
            $("#tuition-fees").removeClass().addClass("form-control is-invalid");
            fees_not_valid = true;
        }

    }

    $("#registration").submit(function () {
        checkFirstName();
        checkLastName();
        checkDateofBirth();
        checkTuitionFees();

        if (fname_not_valid === false && lname_not_valid === false && dob_not_valid === false && fees_not_valid === false) {
            alert("Registration Successfully");
            return true; //proceed with submit
        }
        else {
            alert("Please Fill the Form Correctly");
            return false;

        }
    });

});