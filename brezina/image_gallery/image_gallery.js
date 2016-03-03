$(document).ready( function () {
    /*$.each("#image_list", function () {
       $("a").load("href", "title");
    });
    */

    //preload the images
    $.fn.preload = function() {
        this.each(function(){
            $("<img/>")[0].src = this;
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