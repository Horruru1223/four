$(document).ready(function() {

  $(".closer").click(function(){
    $('.modal_main').addClass("none");
   });

   $(".click_t_u_l_two").click(function(){
     $('.modal_main').removeClass("none");
    });

    $(".text_under_logo").click(function(){
      $('.click_t_u_l').toggleClass("none");
     });
});
