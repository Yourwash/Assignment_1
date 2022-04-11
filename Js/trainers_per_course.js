$(document).ready(function () {

    var fname_not_valid = false
    var lname_not_valid = false
    var cb_not_valid = false
    course_not_selected === true
    cbArray =[];

    $("#first-name").focusout(function () {
        checkFirstName();

    });

    $("#last-name").focusout(function () {
        checkLastName();

    });

    $("#select-course").click(function () {
        checkCheckBox();

    });

    $("#add-student").click(function () {
    
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

    function checkCheckBox() {
     
        for (i=1; i<=coursesArray.lenth; i++){
            cbArray = push().$(`#course-${i}`).val();
        }
        if (cbArray.lenth===0){
            cb_not_valid = true;
            alert("You must select a course.");
        }else{
            cb_not_valid = false;
            alert("Course has been selected.")
        }


    }

    $("#add-trainer").submit(function () {
        checkFirstName();
        checkLastName();

        if (fname_not_valid === false && lname_not_valid === false) {
            alert("Student Has been added.");
            return true; //proceed with submit
        }
        else {
            alert("Please Fill the Form Correctly");
            return false;

        }
    });


    $("#select-course").submit(function () {
        checkCheckBox();

        if (cb_not_valid === true) {
            alert("Course has been selected.");
            return true; //proceed with submit
        }
        else {
            alert("Please Fill the Form Correctly");
            return false;

        }
    });

});