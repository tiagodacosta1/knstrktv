$(document).ready(function(){

    $(".siteMenuListMobilePopUp").hide();

    $(".menu-icon").click(function(){
      $(".siteMenuListMobilePopUp").toggle();
      $(this).toggleClass('menu-icon-selected');
    });

    $(".menu-collapse").click(function(){
      $(".siteMenuListMobilePopUp").toggle();
      $(".menu-icon").toggleClass('menu-icon-selected');
    });

    $(".siteMenuListItemsMobilePortfolio").click(function(){
      $(".siteMenuListMobilePopUp").toggle();
    });

    $("#webPortfolio").click(function(){
      $(this).addClass('projectFilterSelected');
    });

  });