/**
 * Created by blainebrezina on 3/2/16.
 */
$(document).ready( function () {

    var personType = "";

    // makes checkboxes mutually exclusive
    $("div .checkbox").click(function () {
        var checkedState = $(this).prop("checked");
        $(this).parent("div").children(".checkbox:checked").each(function () {
            $(this).prop("checked", false);
        });
        $(this).prop("checked", checkedState);
        personType = $(this).prop("value");
        console.log(personType);
        if (personType == "Customer") {
            $("#ssNum").hide();
            $("#cusNum").toggle();
        } else /*if (personType = "Employee")*/ {
            $("#cusNum").hide();
            $("#ssNum").toggle();

        }
        //alert(personType);
    });



    //displays forms for customer num or ssn based on checked box

    // check if all form parts are filled before submit
    $("#submitButton").click(function(){
        var filled = true;
        var isNum = true;
        var isString = true;

        $("#general").children().each(function () {
            if ($(this).prop("value") == "") {
                filled = false;
            }
        });

        var fn = $("#first").prop("value");
        var ln = $("#last").prop("value");

        var matches1 = fn.match(/\d+/g);
        var matches2 = ln.match(/\d+/g);

        if ((matches1 != null) || (matches2 != null)) {
            isString = false;
        }

        // checks if number is an integer as well as if it is there
        if (personType == "Employee") {
            if ($("#ssn").prop("value") == "") {
                filled = false;
            } else if (!(Number($("#ssn").prop("value")) === parseInt($("#ssn").prop("value"), 10))) {
                isNum = false;
            }
        }

        else if (personType == "Customer") {
            if ($("#cn").prop("value") == "") {
                filled = false;
            }
        }

        else{
            filled = false;
        }

        if ((filled == true) && (isNum == true) && (isString == true)) {
            $("#submitted").show();
            var fn = $("#first").prop("value");
            var ln = $("#last").prop("value");
            var em = $("#email").prop("value");
            var sp = "";
            var perso = "";
            if (personType == "Customer"){
                sp = $("#cn").prop("value");
                perso = "Customer Number: ";
            }
            else{
                sp = $("#ssn").prop("value");
                perso = "Social Security Number: ";
            }
            console.log(sp);
            document.getElementById("person").textContent = personType;
            document.getElementById("ln").textContent = ln;
            document.getElementById("em").textContent = em;
            document.getElementById("sp").textContent = sp;
            document.getElementById("fn").textContent = fn;
            document.getElementById("perso").textContent = perso;

            $("#submitted").show();

        } else if (filled == false) {
            alert("Please Fill in All Required Fields")
        } else if (isNum == false) {
            alert("Please Make sure that Employee Social Security Number Entered is a Number ;)")
        } else if (isString == false) {
            alert("Please make sure that the person's first and last name do not contain numbers")
        }


    })

});