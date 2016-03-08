$(document).ready( function () {
    $('li a').each(function() {
        (new Image).src = this.href;
    });


    //preload the images
    $.fn.preload = function() {
        this.each(function(){
           // alert("the image has been loaded");
            $('<img/>')[0].src = $(this).attr("href");

        });
    };

// Usage:

    $("#image_list").preload();


    // on click change the pointer of the image html element to the image attributed to the clicked element
    $("a").click(function(evt) {
        evt.stopPropagation();
        evt.preventDefault();

        $("img").attr("src", $(this).attr("href"));
        $("#caption").text($(this).attr("title"));

        //$(this).

    });
});