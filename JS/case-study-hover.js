$(".cases-image-1").hide();
$(".cases-image-2").hide();
$(".cases-image-3").hide();
$(".cases-image-4").hide();

$(document).ready(function () {
    $('.case-study-1').on('mouseover', function () {
        $(".cases-image-1").show();
    }).on('mouseout', function () {
        $(".cases-image-1").hide();
    });

    $('.case-study-2').on('mouseover', function () {
        $(".cases-image-2").show();
    }).on('mouseout', function () {
        $(".cases-image-2").hide();
    });

    $('.case-study-3').on('mouseover', function () {
        $(".cases-image-3").show();
    }).on('mouseout', function () {
        $(".cases-image-3").hide();
    });

    $('.case-study-4').on('mouseover', function () {
        $(".cases-image-4").show();
    }).on('mouseout', function () {
        $(".cases-image-4").hide();
    });
});