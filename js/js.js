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
            else if(current => 2){
            $(".bg1r, .bg2r").css("display","none");
            $(".bg3r").css("display", "block");
            current = 0;
            }
            // else if(current == 3){
            // $(.msg1, .msg2, .msg3, .msg4, .msg6).css(display,none);
            // $(.msg5).css(display, block);
            // current++;
            // }
            // else if(current == 4){
            // $(.msg1, .msg2, .msg3 .msg4, .msg5).css(display,none);
            // $(.msg6).css(display, block);
            // current++;
            // }
            // else if (current => 5){
            // $(.msg1).css(display,block);
            // $(.msg2, .msg3, .msg4, .msg5, .msg6).css(display,none);
            // current = 0;
            // }
          });
        });

        // $(.slide2).click(function(){
        //     if (current <= 0){
        //     $(".bg6r").css("display","block");
        //     $(".bg2r, .bg4r, .bg3r, .bg5r, .bg1r").css("display","none");
        //     current = 5;
        //     }
        //     else if (current == 4){
        //     $(".bg1r, .bg2r, .bg3r, .bg5r, .bg6r").css("display","none");
        //     $(".bg4r").css("display","block");
        //     current--;
        //     }
        //     else if (current == 3){
        //     $(".bg1r, .bg2r, .bg5r, .bg4r, .bg6r").css("display", "none");
        //     $(".bg3r").css("display", "block");
        //     current--;
        //     }
        //     else if (current == 2){
        //     $(.bg1r, .bg3rr, .bg4r, .bg5r, .bg6r).css(display,none);
        //     $(.bg2r).css(display, block);
        //     current--;
        //     }
        //     else if (current == 1){
        //     $(.bg2r, .bg3r, .bg4r, .bg5r, .bg6r).css(display, none);
        //     $(.bg1r).css(display, block);
        //     current--;
        //     }
        //     else if (current == 5){
        //     $(.bg3r, .bg2r, .bg4r, .bg1r, .bg6r).css(display,none);
        //     $(.bg5r).css(display, block);
        //     current--;
        //     }
        //   });

          let current_2 = 0;
             $(document).ready(function(){
               $(".slide_b1").click(function(){
                 if (current_2 == 0){
                 $(".books_inter2, .books_inter3, .books_inter4, .books_inter5,.books_inter6,.books_inter7, .books_inter8, .books_inter9,.books_inter10,.books_inter11,.books_inter12, .books_inter13, .books_inter14,.books_inter15, .books_inter16,.books_inter17, .books_inter18, .books_inter19, .books_inter20,.books_inter21, .books_inter22, .books_inter23, .books_inter24, .books_inter25, .books_inter26, .books_inter27, .books_inter28, .books_inter29").css("display","none");
                 $(".books_inter1").css("display","block");
                 current_2++;
                 }
                 else if (current_2 == 1){
                 $(".books_inter1, .books_inter3, .books_inter4, .books_inter5,.books_inter6,.books_inter7,  .books_inter8,.books_inter9,.books_inter10,.books_inter11,.books_inter12, .books_inter13, .books_inter14,.books_inter15, .books_inter16,.books_inter17, .books_inter18, .books_inter19, .books_inter20,.books_inter21, .books_inter22, .books_inter23, .books_inter24, .books_inter25, .books_inter26, .books_inter27, .books_inter28, .books_inter29").css("display","none");
                 $(".books_inter2").css("display", "block");
                 current_2++;
                 }
                 else if(current_2 == 2){
                 $(".books_inter2, .books_inter3, .books_inter4, .books_inter5,.books_inter6,.books_inter7,  .books_inter8,.books_inter9,.books_inter10,.books_inter11,.books_inter12, .books_inter13, .books_inter14,.books_inter15, .books_inter16,.books_inter17, .books_inter18, .books_inter19, .books_inter20,.books_inter21, .books_inter22, .books_inter23, .books_inter24, .books_inter25, .books_inter26, .books_inter27, .books_inter28, .books_inter29").css("display","none");
                 $(".books_inter3").css("display", "block");
                 current_2++;
                 }
                  else if(current_2 == 3){
                  $(".books_inter2, .books_inter1, .books_inter3, .books_inter5,.books_inter6,.books_inter7, .books_inter8,.books_inter9,.books_inter10,.books_inter11,.books_inter12, .books_inter13, .books_inter14,.books_inter15, .books_inter16,.books_inter17, .books_inter18, .books_inter19, .books_inter20,.books_inter21, .books_inter22, .books_inter23, .books_inter24, .books_inter25, .books_inter26, .books_inter27, .books_inter28, .books_inter29").css("display","none");
                  $(".books_inter4").css("display", "block");
                  current_2++;
                  }
                  else if(current_2 == 4){
                  $(".books_inter2, .books_inter3, .books_inter4, .books_inter1,.books_inter6,.books_inter7, .books_inter8,.books_inter9,.books_inter10,.books_inter11,.books_inter12, .books_inter13, .books_inter14,.books_inter15, .books_inter16,.books_inter17, .books_inter18, .books_inter19, .books_inter20,.books_inter21, .books_inter22, .books_inter23, .books_inter24, .books_inter25, .books_inter26, .books_inter27, .books_inter28, .books_inter29").css("display","none");
                  $(".books_inter5").css("display", "block");
                  current_2++;
                  }
                  else if(current_2 == 5){
                  $(".books_inter2, .books_inter3, .books_inter4, .books_inter5,.books_inter1,.books_inter7, .books_inter8,.books_inter9,.books_inter10,.books_inter11,.books_inter12, .books_inter13, .books_inter14,.books_inter15, .books_inter16,.books_inter17, .books_inter18, .books_inter19, .books_inter20,.books_inter21, .books_inter22, .books_inter23, .books_inter24, .books_inter25, .books_inter26, .books_inter27, .books_inter28, .books_inter29").css("display","none");
                  $(".books_inter6").css("display", "block");
                  current_2++;
                  }
                  else if(current_2 == 6){
                  $(".books_inter2, .books_inter3, .books_inter4, .books_inter5,.books_inter6,.books_inter1, .books_inter8,.books_inter9,.books_inter10,.books_inter11,.books_inter12, .books_inter13, .books_inter14,.books_inter15, .books_inter16,.books_inter17, .books_inter18, .books_inter19, .books_inter20,.books_inter21, .books_inter22, .books_inter23, .books_inter24, .books_inter25, .books_inter26, .books_inter27, .books_inter28, .books_inter29").css("display","none");
                  $(".books_inter7").css("display", "block");
                  current_2++;
                  }
                  else if(current_2 == 7){
                  $(".books_inter2, .books_inter3, .books_inter4, .books_inter5,.books_inter6,.books_inter7, .books_inter1,.books_inter9,.books_inter10,.books_inter11,.books_inter12, .books_inter13, .books_inter14,.books_inter15, .books_inter16,.books_inter17, .books_inter18, .books_inter19, .books_inter20,.books_inter21, .books_inter22, .books_inter23, .books_inter24, .books_inter25, .books_inter26, .books_inter27, .books_inter28, .books_inter29").css("display","none");
                  $(".books_inter8").css("display", "block");
                  current_2++;
                  }
                  else if(current_2 == 8){
                  $(".books_inter2, .books_inter3, .books_inter4, .books_inter5,.books_inter6,.books_inter7, .books_inter8,.books_inter1,.books_inter10,.books_inter11,.books_inter12, .books_inter13, .books_inter14,.books_inter15, .books_inter16,.books_inter17, .books_inter18, .books_inter19, .books_inter20,.books_inter21, .books_inter22, .books_inter23, .books_inter24, .books_inter25, .books_inter26, .books_inter27, .books_inter28, .books_inter29").css("display","none");
                  $(".books_inter9").css("display", "block");
                  current_2++;
                  }
                  else if(current_2 == 9){
                  $(".books_inter2, .books_inter3, .books_inter4, .books_inter5,.books_inter6,.books_inter7, .books_inter8,.books_inter1,.books_inter9,.books_inter11,.books_inter12, .books_inter13, .books_inter14,.books_inter15, .books_inter16,.books_inter17, .books_inter18, .books_inter19, .books_inter20,.books_inter21, .books_inter22, .books_inter23, .books_inter24, .books_inter25, .books_inter26, .books_inter27, .books_inter28, .books_inter29").css("display","none");
                  $(".books_inter10").css("display", "block");
                  current_2++;
                  }
                  else if(current_2 == 10){
                  $(".books_inter2, .books_inter3, .books_inter4, .books_inter5,.books_inter6,.books_inter7, .books_inter8,.books_inter1,.books_inter10,.books_inter9,.books_inter12, .books_inter13, .books_inter14,.books_inter15, .books_inter16,.books_inter17, .books_inter18, .books_inter19, .books_inter20,.books_inter21, .books_inter22, .books_inter23, .books_inter24, .books_inter25, .books_inter26, .books_inter27, .books_inter28, .books_inter29").css("display","none");
                  $(".books_inter11").css("display", "block");
                  current_2++;
                  }
                  else if(current_2 == 11){
                  $(".books_inter2, .books_inter3, .books_inter4, .books_inter5,.books_inter6,.books_inter7, .books_inter8,.books_inter1,.books_inter10,.books_inter11,.books_inter9, .books_inter13, .books_inter14,.books_inter15, .books_inter16,.books_inter17, .books_inter18, .books_inter19, .books_inter20,.books_inter21, .books_inter22, .books_inter23, .books_inter24, .books_inter25, .books_inter26, .books_inter27, .books_inter28, .books_inter29").css("display","none");
                  $(".books_inter12").css("display", "block");
                  current_2++;
                  }
                  else if(current_2 == 12){
                  $(".books_inter2, .books_inter3, .books_inter4, .books_inter5,.books_inter6,.books_inter7, .books_inter8,.books_inter1,.books_inter10,.books_inter11,.books_inter12, .books_inter9, .books_inter14,.books_inter15, .books_inter16,.books_inter17, .books_inter18, .books_inter19, .books_inter20,.books_inter21, .books_inter22, .books_inter23, .books_inter24, .books_inter25, .books_inter26, .books_inter27, .books_inter28, .books_inter29").css("display","none");
                  $(".books_inter13").css("display", "block");
                  current_2++;
                  }
                  else if(current_2 == 13){
                  $(".books_inter2, .books_inter3, .books_inter4, .books_inter5,.books_inter6,.books_inter7, .books_inter8,.books_inter1,.books_inter10,.books_inter11,.books_inter12, .books_inter13, .books_inter9,.books_inter15, .books_inter16,.books_inter17, .books_inter18, .books_inter19, .books_inter20,.books_inter21, .books_inter22, .books_inter23, .books_inter24, .books_inter25, .books_inter26, .books_inter27, .books_inter28, .books_inter29").css("display","none");
                  $(".books_inter14").css( "display", "block");
                  current_2++;
                  }
                  else if(current_2 == 14){
                  $(".books_inter2, .books_inter3, .books_inter4, .books_inter5,.books_inter6,.books_inter7, .books_inter8,.books_inter1,.books_inter10,.books_inter11,.books_inter12, .books_inter13, .books_inter14,.books_inter9, .books_inter16,.books_inter17, .books_inter18, .books_inter19, .books_inter20,.books_inter21, .books_inter22, .books_inter23, .books_inter24, .books_inter25, .books_inter26, .books_inter27, .books_inter28, .books_inter29").css("display","none");
                  $(".books_inter15").css( "display", "block");
                  current_2++;
                  }
                  else if(current_2 == 15){
                  $(".books_inter2, .books_inter3, .books_inter4, .books_inter5,.books_inter6,.books_inter7, .books_inter8,.books_inter1,.books_inter10,.books_inter11,.books_inter12, .books_inter13, .books_inter14,.books_inter15, .books_inter9,.books_inter17, .books_inter18, .books_inter19, .books_inter20,.books_inter21, .books_inter22, .books_inter23, .books_inter24, .books_inter25, .books_inter26, .books_inter27, .books_inter28, .books_inter29").css("display","none");
                  $(".books_inter16").css( "display", "block");
                  current_2++;
                  }
                  else if(current_2 == 16){
                  $(".books_inter2, .books_inter3, .books_inter4, .books_inter5,.books_inter6,.books_inter7, .books_inter8,.books_inter1,.books_inter10,.books_inter11,.books_inter12, .books_inter13, .books_inter14,.books_inter15, .books_inter16,.books_inter9, .books_inter18, .books_inter19, .books_inter20,.books_inter21, .books_inter22, .books_inter23, .books_inter24, .books_inter25, .books_inter26, .books_inter27, .books_inter28, .books_inter29").css("display","none");
                  $(".books_inter17").css("display", "block");
                  current_2++;
                  }
                  else if(current_2 == 17){
                  $(".books_inter2, .books_inter3, .books_inter4, .books_inter5,.books_inter6,.books_inter7, .books_inter8,.books_inter1,.books_inter10,.books_inter11,.books_inter12, .books_inter13, .books_inter14,.books_inter15, .books_inter16,.books_inter17, .books_inter9, .books_inter19, .books_inter20,.books_inter21, .books_inter22, .books_inter23, .books_inter24, .books_inter25, .books_inter26, .books_inter27, .books_inter28, .books_inter29").css("display","none");
                  $(".books_inter18").css("display", "block");
                  current_2++;
                  }
                  else if(current_2 == 18){
                  $(".books_inter2, .books_inter3, .books_inter4, .books_inter5,.books_inter6,.books_inter7, .books_inter8,.books_inter1,.books_inter10,.books_inter11,.books_inter12, .books_inter13, .books_inter14,.books_inter15, .books_inter16,.books_inter17, .books_inter18, .books_inter9, .books_inter20,.books_inter21, .books_inter22, .books_inter23, .books_inter24, .books_inter25, .books_inter26, .books_inter27, .books_inter28, .books_inter29").css("display","none");
                  $(".books_inter19").css("display", "block");
                  current_2++;
                  }
                  else if(current_2 == 19){
                  $(".books_inter2, .books_inter3, .books_inter4, .books_inter5,.books_inter6,.books_inter7, .books_inter8,.books_inter1,.books_inter10,.books_inter11,.books_inter12, .books_inter13, .books_inter14,.books_inter15, .books_inter16,.books_inter17, .books_inter18, .books_inter19, .books_inter9,.books_inter21, .books_inter22, .books_inter23, .books_inter24, .books_inter25, .books_inter26, .books_inter27, .books_inter28, .books_inter29").css("display","none");
                  $(".books_inter20").css("display", "block");
                  current_2++;
                  }
                  else if(current_2 == 20){
                  $(".books_inter2, .books_inter3, .books_inter4, .books_inter5,.books_inter6,.books_inter7, .books_inter8,.books_inter1,.books_inter10,.books_inter11,.books_inter12, .books_inter13, .books_inter14,.books_inter15, .books_inter16,.books_inter17, .books_inter18, .books_inter19, .books_inter20,.books_inter9, .books_inter22, .books_inter23, .books_inter24, .books_inter25, .books_inter26, .books_inter27, .books_inter28, .books_inter29").css("display","none");
                  $(".books_inter21").css("display", "block");
                  current_2++;
                  }
                  else if(current_2 == 21){
                  $(".books_inter2, .books_inter3, .books_inter4, .books_inter5,.books_inter6,.books_inter7, .books_inter8,.books_inter1,.books_inter10,.books_inter11,.books_inter12, .books_inter13, .books_inter14,.books_inter15, .books_inter16,.books_inter17, .books_inter18, .books_inter19, .books_inter20,.books_inter21, .books_inter9, .books_inter23, .books_inter24, .books_inter25, .books_inter26, .books_inter27, .books_inter28, .books_inter29").css("display","none");
                  $(".books_inter22").css("display", "block");
                  current_2++;
                  }
                  else if(current_2 == 22){
                  $(".books_inter2, .books_inter3, .books_inter4, .books_inter5,.books_inter6,.books_inter7, .books_inter8,.books_inter1,.books_inter10,.books_inter11,.books_inter12, .books_inter13, .books_inter14,.books_inter15, .books_inter16,.books_inter17, .books_inter18, .books_inter19, .books_inter20,.books_inter21, .books_inter22, .books_inter9, .books_inter24, .books_inter25, .books_inter26, .books_inter27, .books_inter28, .books_inter29").css("display","none");
                  $(".books_inter23").css("display", "block");
                  current_2++;
                  }
                  else if(current_2 == 23){
                  $(".books_inter2, .books_inter3, .books_inter4, .books_inter5,.books_inter6,.books_inter7, .books_inter8,.books_inter1,.books_inter10,.books_inter11,.books_inter12, .books_inter13, .books_inter14,.books_inter15, .books_inter16,.books_inter17, .books_inter18, .books_inter19, .books_inter20,.books_inter21, .books_inter22, .books_inter23, .books_inter9, .books_inter25, .books_inter26, .books_inter27, .books_inter28, .books_inter29").css("display","none");
                  $(".books_inter24").css("display", "block");
                  current_2++;
                  }
                  else if(current_2 == 24){
                  $(".books_inter2, .books_inter3, .books_inter4, .books_inter5,.books_inter6,.books_inter7, .books_inter8,.books_inter1,.books_inter10,.books_inter11,.books_inter12, .books_inter13, .books_inter14,.books_inter15, .books_inter16,.books_inter17, .books_inter18, .books_inter19, .books_inter20,.books_inter21, .books_inter22, .books_inter23, .books_inter24, .books_inter9, .books_inter26, .books_inter27, .books_inter28, .books_inter29").css("display","none");
                  $(".books_inter25").css("display", "block");
                  current_2++;
                  }
                  else if(current_2 == 25){
                  $(".books_inter2, .books_inter3, .books_inter4, .books_inter5,.books_inter6,.books_inter7, .books_inter8,.books_inter1,.books_inter10,.books_inter11,.books_inter12, .books_inter13, .books_inter14,.books_inter15, .books_inter16,.books_inter17, .books_inter18, .books_inter19, .books_inter20,.books_inter21, .books_inter22, .books_inter23, .books_inter24, .books_inter25, .books_inter9, .books_inter27, .books_inter28, .books_inter29").css("display","none");
                  $(".books_inter26").css("display", "block");
                  current_2++;
                  }
                  else if(current_2 == 26){
                  $(".books_inter2, .books_inter3, .books_inter4, .books_inter5,.books_inter6,.books_inter7, .books_inter8,.books_inter1,.books_inter10,.books_inter11,.books_inter12, .books_inter13, .books_inter14,.books_inter15, .books_inter16,.books_inter17, .books_inter18, .books_inter19, .books_inter20,.books_inter21, .books_inter22, .books_inter23, .books_inter24, .books_inter25, .books_inter26, .books_inter9, .books_inter28, .books_inter29").css("display","none");
                  $(".books_inter27").css("display", "block");
                  current_2++;
                  }
                  else if(current_2 == 27){
                  $(".books_inter2, .books_inter3, .books_inter4, .books_inter5,.books_inter6,.books_inter7, .books_inter8,.books_inter1,.books_inter10,.books_inter11,.books_inter12, .books_inter13, .books_inter14,.books_inter15, .books_inter16,.books_inter17, .books_inter18, .books_inter19, .books_inter20,.books_inter21, .books_inter22, .books_inter23, .books_inter24, .books_inter25, .books_inter26, .books_inter27, .books_inter9, .books_inter29").css("display","none");
                  $(".books_inter28").css("display", "block");
                  current_2++;
                  }
                  else if(current_2 == 28){
                  $(".books_inter2, .books_inter3, .books_inter4, .books_inter5,.books_inter6,.books_inter7, .books_inter8,.books_inter1,.books_inter10,.books_inter11,.books_inter12, .books_inter13, .books_inter14,.books_inter15, .books_inter16,.books_inter17, .books_inter18, .books_inter19, .books_inter20,.books_inter21, .books_inter22, .books_inter23, .books_inter24, .books_inter25, .books_inter26, .books_inter27, .books_inter28, .books_inter9").css("display","none");
                  $(".books_inter29").css("display", "block");
                  current_2++;
                  }

                 else if (current_2 => 29){
                 $(".books_inter1").css("display","block");
                 $(".books_inter2, .books_inter3, .books_inter4, .books_inter5,.books_inter6,.books_inter7, .books_inter8,.books_inter9,.books_inter10,.books_inter11,.books_inter12, .books_inter13, .books_inter14,.books_inter15, .books_inter16,.books_inter17, .books_inter18, .books_inter19, .books_inter20,.books_inter21, .books_inter22, .books_inter23, .books_inter24, .books_inter25, .books_inter26, .books_inter27, .books_inter28, .books_inter29").css("display","none");
                 current_2 = 0;
                 }
               });
             });

             let current_3 = 0;
                $(document).ready(function(){
                  $(".slide_b1").click(function(){
                    if (current_3 == 0){
                    $(".books_ex2, .books_ex3, .books_ex4, .books_ex5,.books_ex6,.books_ex7, .books_ex8, .books_ex9,.books_ex10,.books_ex11,.books_ex12, .books_ex13, .books_ex14,.books_ex15, .books_ex16,.books_ex17, .books_ex18, .books_ex19, .books_ex20,.books_ex21, .books_ex22, .books_ex23, .books_ex24, .books_ex25, .books_ex26, .books_ex27, .books_ex28, .books_ex29").css("display","none");
                    $(".books_ex1").css("display","block");
                    current_3++;
                    }
                    else if (current_3 == 1){
                    $(".books_ex1, .books_ex3, .books_ex4, .books_ex5,.books_ex6,.books_ex7,  .books_ex8,.books_ex9,.books_ex10,.books_ex11,.books_ex12, .books_ex13, .books_ex14,.books_ex15, .books_ex16,.books_ex17, .books_ex18, .books_ex19, .books_ex20,.books_ex21, .books_ex22, .books_ex23, .books_ex24, .books_ex25, .books_ex26, .books_ex27, .books_ex28, .books_ex29").css("display","none");
                    $(".books_ex2").css("display", "block");
                    current_3++;
                    }
                    else if(current_3 == 2){
                    $(".books_ex2, .books_ex3, .books_ex4, .books_ex5,.books_ex6,.books_ex7,  .books_ex8,.books_ex9,.books_ex10,.books_ex11,.books_ex12, .books_ex13, .books_ex14,.books_ex15, .books_ex16,.books_ex17, .books_ex18, .books_ex19, .books_ex20,.books_ex21, .books_ex22, .books_ex23, .books_ex24, .books_ex25, .books_ex26, .books_ex27, .books_ex28, .books_ex29").css("display","none");
                    $(".books_ex3").css("display", "block");
                    current_3++;
                    }
                     else if(current_3 == 3){
                     $(".books_ex2, .books_ex1, .books_ex3, .books_ex5,.books_ex6,.books_ex7, .books_ex8,.books_ex9,.books_ex10,.books_ex11,.books_ex12, .books_ex13, .books_ex14,.books_ex15, .books_ex16,.books_ex17, .books_ex18, .books_ex19, .books_ex20,.books_ex21, .books_ex22, .books_ex23, .books_ex24, .books_ex25, .books_ex26, .books_ex27, .books_ex28, .books_ex29").css("display","none");
                     $(".books_ex4").css("display", "block");
                     current_3++;
                     }
                     else if(current_3 == 4){
                     $(".books_ex2, .books_ex3, .books_ex4, .books_ex1,.books_ex6,.books_ex7, .books_ex8,.books_ex9,.books_ex10,.books_ex11,.books_ex12, .books_ex13, .books_ex14,.books_ex15, .books_ex16,.books_ex17, .books_ex18, .books_ex19, .books_ex20,.books_ex21, .books_ex22, .books_ex23, .books_ex24, .books_ex25, .books_ex26, .books_ex27, .books_ex28, .books_ex29").css("display","none");
                     $(".books_ex5").css("display", "block");
                     current_3++;
                     }
                     else if(current_3 == 5){
                     $(".books_ex2, .books_ex3, .books_ex4, .books_ex5,.books_ex1,.books_ex7, .books_ex8,.books_ex9,.books_ex10,.books_ex11,.books_ex12, .books_ex13, .books_ex14,.books_ex15, .books_ex16,.books_ex17, .books_ex18, .books_ex19, .books_ex20,.books_ex21, .books_ex22, .books_ex23, .books_ex24, .books_ex25, .books_ex26, .books_ex27, .books_ex28, .books_ex29").css("display","none");
                     $(".books_ex6").css("display", "block");
                     current_3++;
                     }
                     else if(current_3 == 6){
                     $(".books_ex2, .books_ex3, .books_ex4, .books_ex5,.books_ex6,.books_ex1, .books_ex8,.books_ex9,.books_ex10,.books_ex11,.books_ex12, .books_ex13, .books_ex14,.books_ex15, .books_ex16,.books_ex17, .books_ex18, .books_ex19, .books_ex20,.books_ex21, .books_ex22, .books_ex23, .books_ex24, .books_ex25, .books_ex26, .books_ex27, .books_ex28, .books_ex29").css("display","none");
                     $(".books_ex7").css("display", "block");
                     current_3++;
                     }
                     else if(current_3 == 7){
                     $(".books_ex2, .books_ex3, .books_ex4, .books_ex5,.books_ex6,.books_ex7, .books_ex1,.books_ex9,.books_ex10,.books_ex11,.books_ex12, .books_ex13, .books_ex14,.books_ex15, .books_ex16,.books_ex17, .books_ex18, .books_ex19, .books_ex20,.books_ex21, .books_ex22, .books_ex23, .books_ex24, .books_ex25, .books_ex26, .books_ex27, .books_ex28, .books_ex29").css("display","none");
                     $(".books_ex8").css("display", "block");
                     current_3++;
                     }
                     else if(current_3 == 8){
                     $(".books_ex2, .books_ex3, .books_ex4, .books_ex5,.books_ex6,.books_ex7, .books_ex8,.books_ex1,.books_ex10,.books_ex11,.books_ex12, .books_ex13, .books_ex14,.books_ex15, .books_ex16,.books_ex17, .books_ex18, .books_ex19, .books_ex20,.books_ex21, .books_ex22, .books_ex23, .books_ex24, .books_ex25, .books_ex26, .books_ex27, .books_ex28, .books_ex29").css("display","none");
                     $(".books_ex9").css("display", "block");
                     current_3++;
                     }
                     else if(current_3 == 9){
                     $(".books_ex2, .books_ex3, .books_ex4, .books_ex5,.books_ex6,.books_ex7, .books_ex8,.books_ex1,.books_ex9,.books_ex11,.books_ex12, .books_ex13, .books_ex14,.books_ex15, .books_ex16,.books_ex17, .books_ex18, .books_ex19, .books_ex20,.books_ex21, .books_ex22, .books_ex23, .books_ex24, .books_ex25, .books_ex26, .books_ex27, .books_ex28, .books_ex29").css("display","none");
                     $(".books_ex10").css("display", "block");
                     current_3++;
                     }
                     else if(current_3 == 10){
                     $(".books_ex2, .books_ex3, .books_ex4, .books_ex5,.books_ex6,.books_ex7, .books_ex8,.books_ex1,.books_ex10,.books_ex9,.books_ex12, .books_ex13, .books_ex14,.books_ex15, .books_ex16,.books_ex17, .books_ex18, .books_ex19, .books_ex20,.books_ex21, .books_ex22, .books_ex23, .books_ex24, .books_ex25, .books_ex26, .books_ex27, .books_ex28, .books_ex29").css("display","none");
                     $(".books_ex11").css("display", "block");
                     current_3++;
                     }
                     else if(current_3 == 11){
                     $(".books_ex2, .books_ex3, .books_ex4, .books_ex5,.books_ex6,.books_ex7, .books_ex8,.books_ex1,.books_ex10,.books_ex11,.books_ex9, .books_ex13, .books_ex14,.books_ex15, .books_ex16,.books_ex17, .books_ex18, .books_ex19, .books_ex20,.books_ex21, .books_ex22, .books_ex23, .books_ex24, .books_ex25, .books_ex26, .books_ex27, .books_ex28, .books_ex29").css("display","none");
                     $(".books_ex12").css("display", "block");
                     current_3++;
                     }
                     else if(current_3 == 12){
                     $(".books_ex2, .books_ex3, .books_ex4, .books_ex5,.books_ex6,.books_ex7, .books_ex8,.books_ex1,.books_ex10,.books_ex11,.books_ex12, .books_ex9, .books_ex14,.books_ex15, .books_ex16,.books_ex17, .books_ex18, .books_ex19, .books_ex20,.books_ex21, .books_ex22, .books_ex23, .books_ex24, .books_ex25, .books_ex26, .books_ex27, .books_ex28, .books_ex29").css("display","none");
                     $(".books_ex13").css("display", "block");
                     current_3++;
                     }
                     else if(current_3 == 13){
                     $(".books_ex2, .books_ex3, .books_ex4, .books_ex5,.books_ex6,.books_ex7, .books_ex8,.books_ex1,.books_ex10,.books_ex11,.books_ex12, .books_ex13, .books_ex9,.books_ex15, .books_ex16,.books_ex17, .books_ex18, .books_ex19, .books_ex20,.books_ex21, .books_ex22, .books_ex23, .books_ex24, .books_ex25, .books_ex26, .books_ex27, .books_ex28, .books_ex29").css("display","none");
                     $(".books_ex14").css( "display", "block");
                     current_3++;
                     }
                     else if(current_3 == 14){
                     $(".books_ex2, .books_ex3, .books_ex4, .books_ex5,.books_ex6,.books_ex7, .books_ex8,.books_ex1,.books_ex10,.books_ex11,.books_ex12, .books_ex13, .books_ex14,.books_ex9, .books_ex16,.books_ex17, .books_ex18, .books_ex19, .books_ex20,.books_ex21, .books_ex22, .books_ex23, .books_ex24, .books_ex25, .books_ex26, .books_ex27, .books_ex28, .books_ex29").css("display","none");
                     $(".books_ex15").css( "display", "block");
                     current_3++;
                     }
                     else if(current_3 == 15){
                     $(".books_ex2, .books_ex3, .books_ex4, .books_ex5,.books_ex6,.books_ex7, .books_ex8,.books_ex1,.books_ex10,.books_ex11,.books_ex12, .books_ex13, .books_ex14,.books_ex15, .books_ex9,.books_ex17, .books_ex18, .books_ex19, .books_ex20,.books_ex21, .books_ex22, .books_ex23, .books_ex24, .books_ex25, .books_ex26, .books_ex27, .books_ex28, .books_ex29").css("display","none");
                     $(".books_ex16").css( "display", "block");
                     current_3++;
                     }
                     else if(current_3 == 16){
                     $(".books_ex2, .books_ex3, .books_ex4, .books_ex5,.books_ex6,.books_ex7, .books_ex8,.books_ex1,.books_ex10,.books_ex11,.books_ex12, .books_ex13, .books_ex14,.books_ex15, .books_ex16,.books_ex9, .books_ex18, .books_ex19, .books_ex20,.books_ex21, .books_ex22, .books_ex23, .books_ex24, .books_ex25, .books_ex26, .books_ex27, .books_ex28, .books_ex29").css("display","none");
                     $(".books_ex17").css("display", "block");
                     current_3++;
                     }
                     else if(current_3 => 17){
                     $(".books_ex2, .books_ex3, .books_ex4, .books_ex5,.books_ex6,.books_ex7, .books_ex8,.books_ex1,.books_ex10,.books_ex11,.books_ex12, .books_ex13, .books_ex14,.books_ex15, .books_ex16,.books_ex17, .books_ex9, .books_ex19, .books_ex20,.books_ex21, .books_ex22, .books_ex23, .books_ex24, .books_ex25, .books_ex26, .books_ex27, .books_ex28, .books_ex29").css("display","none");
                     $(".books_ex18").css("display", "block");
                     current_3 = 0;
                     }
                     
                  });
                });

});
