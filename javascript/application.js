jQuery(document).ready(function($){

  $('#github').mouseover(function(){
    $('#mousing').text("GitHub");
  });

  $('#github').mouseout(function(){
    $('#mousing').html("&nbsp;");
  });

  $('#twitter').mouseover(function(){
    $('#mousing').text("Twitter");
  });

  $('#twitter').mouseout(function(){
    $('#mousing').html("&nbsp;");
  });
});
