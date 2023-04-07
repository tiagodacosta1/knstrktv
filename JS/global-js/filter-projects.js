$(document).ready(function(){

    $("#filterByAll").hide();

    $("#filterByUX").click(function(){
      $(this).addClass('projectFilterSelected');
      $('#filterByUI').removeClass('projectFilterSelected');
      $('#filterByGD').removeClass('projectFilterSelected');
      $('#filterByDV').removeClass('projectFilterSelected');
      $('#filterByAll').removeClass('projectFilterSelected');
      $("#filterByAll").show();
      $(".filteredByGD").hide();
      $(".filteredByDV").hide();
      $(".filteredByUI").hide();
      $(".filteredByUX").show();
      $('#portfolio-thumbnail-grid').css( "grid-template-rows", "1fr");
    });

    $("#filterByUI").click(function(){
      $(this).addClass('projectFilterSelected');
      $('#filterByUX').removeClass('projectFilterSelected');
      $('#filterByGD').removeClass('projectFilterSelected');
      $('#filterByDV').removeClass('projectFilterSelected');
      $('#filterByAll').removeClass('projectFilterSelected');
      $("#filterByAll").show();
      $(".filteredByUX").hide();
      $(".filteredByGD").hide();
      $(".filteredByDV").hide();
      $(".filteredByUI").show();
      $('#portfolio-thumbnail-grid').css( "grid-template-rows", "1fr");
    });

    $("#filterByDV").click(function(){
      $(this).addClass('projectFilterSelected');
      $('#filterByUI').removeClass('projectFilterSelected');
      $('#filterByGD').removeClass('projectFilterSelected');
      $('#filterByUX').removeClass('projectFilterSelected');
      $('#filterByAll').removeClass('projectFilterSelected');
      $("#filterByAll").show();
      $(".filteredByUX").hide();
      $(".filteredByGD").hide();
      $(".filteredByUI").hide();
      $(".filteredByDV").show();
      $('#portfolio-thumbnail-grid').css( "grid-template-rows", "1fr");
    });

    $("#filterByGD").click(function(){
      $(this).addClass('projectFilterSelected');
      $('#filterByUI').removeClass('projectFilterSelected');
      $('#filterByUX').removeClass('projectFilterSelected');
      $('#filterByDV').removeClass('projectFilterSelected');
      $('#filterByAll').removeClass('projectFilterSelected');
      $("#filterByAll").show();
      $(".filteredByUX").hide();
      $(".filteredByUI").hide();
      $(".filteredByDV").hide();
      $(".filteredByGD").show();
      $('#portfolio-thumbnail-grid').css( "grid-template-rows", "1fr");
    });

    $("#filterByAll").click(function(){
      $(this).addClass('projectFilterSelected');
      $('#filterByUI').removeClass('projectFilterSelected');
      $('#filterByGD').removeClass('projectFilterSelected');
      $('#filterByDV').removeClass('projectFilterSelected');
      $('#filterByUX').removeClass('projectFilterSelected');
      $(".filteredByUX").show();
      $(".filteredByUI").show();
      $(".filteredByDV").show();
      $(".filteredByGD").show();
    });
  });