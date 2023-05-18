$(document).ready(function() {
    $(".andheri-dishes").show();
    $(".Bandhra-dishes").hide();
    $(".borivali-dishes").hide();
    $(".kandivali-dishes").hide();
});

$(document).ready(function() {
    $(".andheri").click(function() {
        $(".Bandhra-dishes").hide();
        $(".borivali-dishes").hide();
        $(".kandivali-dishes").hide();
        $(".andheri-dishes").show(1000);
    });
});


$(document).ready(function() {
    $(".bandhra").click(function() {
        $(".andheri-dishes").hide();
        $(".borivali-dishes").hide();
        $(".kandivali-dishes").hide();
        $(".Bandhra-dishes").show(1000);
    });
});

$(document).ready(function() {
    $(".borivali").click(function() {
        $(".andheri-dishes").hide();
        $(".Bandhra-dishes").hide();
        $(".kandivali-dishes").hide();
        $(".borivali-dishes").show(1000);
    });
});

$(document).ready(function() {
    $(".kandivali").click(function() {
        $(".andheri-dishes").hide();
        $(".borivali-dishes").hide();
        $(".Bandhra-dishes").hide();
        $(".kandivali-dishes").show(1000);
    });
});


$(document).ready(function() {
    $(".login-form").hide();
    $(".signup-form").show();
});

$(document).ready(function() {
    $(".login-text").click(function() {
        $(".signup-form").hide();
        $(".login-form").show();
    });
});

