$(".cases-image-1").hide();
$(".cases-image-2").hide();

$(document).ready(function () {
    $('.case-study-1').on('mouseover', function () {
        $(".cases-image-1").show();
        $(".cases-image-placeholder").addClass("fixed-image");
    }).on('mouseout', function () {
        $(".cases-image-1").hide();
        $(".cases-image-placeholder").removeClass("fixed-image");
    });

    $('.case-study-2').on('mouseover', function () {
        $(".cases-image-2").show();
        $(".cases-image-placeholder").addClass("fixed-image");
    }).on('mouseout', function () {
        $(".cases-image-2").hide();
        $(".cases-image-placeholder").removeClass("fixed-image");
    });
});