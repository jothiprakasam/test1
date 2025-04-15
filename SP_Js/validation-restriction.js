function CodeValidate(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    //Alpha:63 to 90
    //Number: 46 to 57
    //Enter :13
    //Tab:9
    //Back:8
    //End:35
    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || (charCode > 47 && charCode < 58) || (charCode == 45) || (charCode == 127) || (charCode == 32) || (charCode == 13) || (charCode == 8) || (charCode == 9) || (charCode == 46))
        return true;

    return false;

}
function Alphabets(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    //Alpha:63 to 90
    //Number: 46 to 57
    //Enter :13
    //Tab:9
    //Back:8
    //End:35
    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || (charCode > 43 && charCode < 48) || (charCode == 127) || (charCode == 95) || (charCode == 40) || (charCode == 41) || (charCode == 32) || (charCode == 13) || (charCode == 8) || (charCode == 9))
        return true;

    return false;

}
function AddressValidate(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode

    //Alpha:63 to 90
    //Number: 46 to 57
    //Enter :13
    // Tab:9
    //Back:8
    //End:35
    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || (charCode == 13) || (charCode == 9) || (charCode == 8) || (charCode == 32) || (charCode > 47 && charCode <= 58) || (charCode == 40) || (charCode == 41) || (charCode == 46) || (charCode == 47) || (charCode == 35) || (charCode == 44) || (charCode == 45) || (charCode == 43) || (charCode == 95) || (charCode == 64)) {
        return true;
    }

    else {
        return false;

    }

}

function NumericValidate(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode


    //Alpha:63 to 90
    //Number: 46 to 57
    //Enter :13
    // Tab:9
    //Back:8
    //End:35

    if ((charCode > 47 && charCode < 58) || (charCode == 13) || (charCode == 9) || (charCode == 8) || (charCode == 46)) {

        return true;
    }

    else {
        return false;

    }
}


function AmountValidate(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode


    //Alpha:63 to 90
    //Number: 46 to 57
    //Enter :13
    // Tab:9
    //Back:8
    //End:35

    if ((charCode > 47 && charCode < 58) || (charCode == 13) || (charCode == 9) || (charCode == 8) || (charCode == 46)) {

        return true;
    }

    else {
        return false;

    }
}

function NameValidate(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    //Alpha:63 to 90
    //Number: 46 to 57
    //Enter :13
    // Tab:9
    //Back:8
    //End:35
    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || (charCode == 13) || (charCode == 9) || (charCode == 8) || (charCode == 32) || (charCode == 45)) {
        return true;
    }

    else {
        return false;

    }

};

function MarksValidate(evt) {
    
    var charCode = (evt.which) ? evt.which : evt.keyCode



    //Alpha:63 to 90
    //Number: 46 to 57
    //Enter :13
    // Tab:9
    //Back:8
    //End:35

    if ((charCode > 47 && charCode < 58) || (charCode == 45) || (charCode == 46) || (charCode == 13) || (charCode == 9) || (charCode == 8)) {

        return true;
    }

    else {
        return false;

    }
}
function NumberValidate(evt) {
    //Number: 46 to 57
    //+:43
    //(:40
    //):41
    //-:45
    //space:32
    var charCode = (evt.which) ? evt.which : event.keyCode

    if ((charCode > 47 && charCode < 58) || (charCode == 8) || (charCode == 9)) {
        return true;
    }
    else {
        return false;
    }
};

function dateKeyPress() {
    var charCode = (evt.which) ? evt.which : evt.keyCode

    if ((charCode > 47 && charCode < 58) || (charCode == 13) || (charCode == 9) || (charCode == 8) || (charCode == 46) || (charCode == 47)) {

        return true;
    }

    else {
        return false;

    }
}


function validDate(strVal) {
    var arr = strVal.split('/');

    if (arr.length < 3) return false;
    else if (arr[0] < 1 || arr[0] > 31)
        return false;
    else if (arr[1] < 1 || arr[0] > 12)
        return false;
    else if (arr[2] < 1900 || arr[0] > 2099)
        return false;
    else
        return true;
}


// Mega Menu
$(document).ready(function() {
    "use strict";
    $(".panel a").click(function (e) {
        e.preventDefault();
        var style = $(this).attr("class");
        $(".jetmenu").removeAttr("class").addClass("jetmenu").addClass(style);
    });
    $().jetmenu();
    // other services 
    $('.togbtn').on('click', function (e) {
        //debugger;

        var parent = $('.contentbox ');
        if (parent.hasClass('cls')) {
            parent.slideDown({ duration: '500', easing: "easeInOutQuart" });
            parent.removeClass('cls');
            parent.addClass('open');
            $('.togbtn').css({ "background-position": "0px -60px" });

        }
        else {

            parent.removeClass('open');
            parent.addClass('cls');
            parent.slideUp({ duration: '500', easing: "easeInOutQuart" });
            $('.togbtn').css({ "background-position": "0px -1px" });
        }
        e.preventDefault();
    });


});
