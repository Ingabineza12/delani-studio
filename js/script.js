
function output(){
    var a=document.getElementById("name").value;
    var b=document.getElementById("email").value;
    var c=document.getElementById("message").value;
    prompt("Hi " + a + ","+" we have received your message. Thank you for reaching out to us.");
    
    }
    
    
    
    $(document).ready(function(){
     $("#1, #one").click(function(){
         $(".hidden1").toggle();
         $("#one").toggle();
     });
    });
    
    $(document).ready(function(){
        $("#2, #two").click(function(){
            $(".hidden2").toggle();
            $("#two").toggle();
    
        });
    });
    $(document).ready(function(){
        $("#3, #three").click(function(){
            $(".hidden3").toggle();
            $("#three").toggle();
    
        });
    });



        $(document).ready(function(){
            $('#pro1').hide();

            $("#w1").hover(function(){
              $(this).animate({opacity: .8}, 100);
              $("#pro1").fadeIn();

            },
            function(){
              $(this).stop().animate({opacity:1},400);
              $('#pro1').fadeOut();  
            });
          });


          $(document).ready(function(){
            $('#pro2').hide();

            $("#w2").hover(function(){
              $(this).animate({opacity: .6}, 100);
              $("#pro2").fadeIn();

            },
            function(){
              $(this).stop().animate({opacity:1},400);
              $('#pro2').fadeOut();  
            });
          });


          $(document).ready(function(){
            $('#pro3').hide();

            $("#w3").hover(function(){
              $(this).animate({opacity: .6}, 100);
              $("#pro3").fadeIn();

            },
            function(){
              $(this).stop().animate({opacity:1},400);
              $('#pro3').fadeOut();  
            });
          });


          $(document).ready(function(){
            $('#pro4').hide();

            $("#w4").hover(function(){
              $(this).animate({opacity: .6}, 100);
              $("#pro4").fadeIn();

            },
            function(){
              $(this).stop().animate({opacity:1},400);
              $('#pro4').fadeOut();  
            });
          });


          $(document).ready(function(){
            $('#pro5').hide();

            $("#w5").hover(function(){
              $(this).animate({opacity: .6}, 100);
              $("#pro5").fadeIn();

            },
            function(){
              $(this).stop().animate({opacity:1},400);
              $('#pro5').fadeOut();  
            });
          });

          $(document).ready(function(){
            $('#pro6').hide();

            $("#w6").hover(function(){
              $(this).animate({opacity: .6}, 100);
              $("#pro6").fadeIn();

            },
            function(){
              $(this).stop().animate({opacity:1},400);
              $('#pro6').fadeOut();  
            });
          });

          $(document).ready(function(){
            $('#pro7').hide();

            $("#w7").hover(function(){
              $(this).animate({opacity: .8}, 100);
              $("#pro7").fadeIn();

            },
            function(){
              $(this).stop().animate({opacity:1},400);
              $('#pro7').fadeOut();  
            });
          });

          $(document).ready(function(){
            $('#pro8').hide();

            $("#w8").hover(function(){
              $(this).animate({opacity: .8}, 100);
              $("#pro8").fadeIn();

            },
            function(){
              $(this).stop().animate({opacity:1},400);
              $('#pro8').fadeOut();  
            });
          });

