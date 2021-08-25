$(function(){
  $('a[href="#"]').click(function(e){
    e.preventDefault
    $("html").animate({scrollTop:0}, 500);
  });
});