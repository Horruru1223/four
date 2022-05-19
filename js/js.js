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

     let current = 0;
        $(document).ready(function(){
          $(".slide1").click(function(){
            if (current == 0){
            $(".bg2r, .bg3r").css("display","none");
            $(".bg1r").css("display","block");
            current++;
            }
            else if (current == 1){
            $(".bg1r, .bg3r").css("display","none");
            $(".bg2r").css("display", "block");
            current++;
            }
            else if(current == 2){
            $(".bg1r, .bg2r").css("display","none");
            $(".bg3r").css("display", "block");
            current++;
            }
            // else if(current == 3){
            // $(".msg1, .msg2, .msg3, .msg4, .msg6").css("display","none");
            // $(".msg5").css("display", "block");
            // current++;
            // }
            // else if(current == 4){
            // $(".msg1, .msg2, .msg3 .msg4, .msg5").css("display","none");
            // $(".msg6").css("display", "block");
            // current++;
            // }
            // else if (current => 5){
            // $(".msg1").css("display","block");
            // $(".msg2, .msg3, .msg4, .msg5, .msg6").css("display","none");
            // current = 0;
            // }
          });
        });

        $(".slide2").click(function(){
            if (current <= 0){
            $(".bg6r").css("display","block");
            $(".bg2r, .bg4r, .bg3r, .bg5r, .bg1r").css("display","none");
            current = 5;
            }
            else if (current == 4){
            $(".bg1r, .bg2r, .bg3r, .bg5r, .bg6r").css("display","none");
            $(".bg4r").css("display","block");
            current--;
            }
            else if (current == 3){
            $(".bg1r, .bg2r, .bg5r, .bg4r, .bg6r").css("display", "none");
            $(".bg3r").css("display", "block");
            current--;
            }
            else if (current == 2){
            $(".bg1r, .bg3rr, .bg4r, .bg5r, .bg6r").css("display","none");
            $(".bg2r").css("display", "block");
            current--;
            }
            else if (current == 1){
            $(".bg2r, .bg3r, .bg4r, .bg5r, .bg6r").css("display", "none");
            $(".bg1r").css("display", "block");
            current--;
            }
            else if (current == 5){
            $(".bg3r, .bg2r, .bg4r, .bg1r, .bg6r").css("display","none");
            $(".bg5r").css("display", "block");
            current--;
            }
          });

});
