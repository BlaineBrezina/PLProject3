$(document).ready(function () {
    $("a").click(function () {
        $(this).prev(".hide").toggle();

        if($(this).prev(".hide").is(":visible")) {
            $(this).text("Show less");
        } else {
            $(this).text("Show more");
        }
    });
});