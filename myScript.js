$(".dropdown-content a").hover( function() { // Changes the .image-holder's img src to the src defined in .list a's data attribute.
    var value=$(this).attr('data-src');
    $(".image-holder img").attr("src", value);
});

$(".dropdown-content1 a").hover( function() { // Changes the .image-holder's img src to the src defined in .list a's data attribute.
    var value=$(this).attr('data-src');
    $(".image-holder1 img").attr("src", value);
});

$(".dropdown-content2 a").hover( function() { // Changes the .image-holder's img src to the src defined in .list a's data attribute.
    var value=$(this).attr('data-src');
    $(".image-holder2 img").attr("src", value);
});

