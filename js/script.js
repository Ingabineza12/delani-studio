
function output(){
    var a=document.getElementById("name").value;
    var b=document.getElementById("email").value;
    var c=document.getElementById("message").value;
    prompt("Hi " + a + ","+" we have received your message. Thank you for reaching out to us.");
    
    }
    
    
    
    $(document).ready(function(){
     $("#1, #one").click(function(){
         $(".walrus-hidden1").toggle();
         $("#one").toggle();
     });
    });
    
    $(document).ready(function(){
        $("#2, #two").click(function(){
            $(".walrus-hidden2").toggle();
            $("#two").toggle();
    
        });
    });
    $(document).ready(function(){
        $("#3, #three").click(function(){
            $(".walrus-hidden3").toggle();
            $("#three").toggle();
    
        });
    });
    
    
        $('.word1').hide();
        $('#w1').animate({opacity:1});
    
        $('#img1').hover(function(){
            $(this).stop().animate({opacity:.4},200);
            $('.word1').fadeIn();
        },
        function(){
            $(this).stop().animate({opacity:1},500)
            $('.word1').fadeOut();      
        });
        // ------------------------------------------
    
        $('.word2').hide();
        $('#w2').animate({opacity:1});
    
        $('#img2').hover(function(){
            $(this).stop().animate({opacity:.4},200);
            $('.word2').fadeIn();
        },
        function(){
            $(this).stop().animate({opacity:1},500)
            $('.word2').fadeOut();      
        });
    // -----------------------------------------
    $('.word3').hide();
    $('#w3').animate({opacity:1});
    
    $('#img3').hover(function(){
        $(this).stop().animate({opacity:.4},200);
        $('.word3').fadeIn();
    },
    function(){
        $(this).stop().animate({opacity:1},500)
        $('.word3').fadeOut();      
    });
    //----------------------------------------- 
    $('.word4').hide();
    $('#w4').animate({opacity:1});
    
    $('#img4').hover(function(){
        $(this).stop().animate({opacity:.4},200);
        $('.word4').fadeIn();
    },
    function(){
        $(this).stop().animate({opacity:1},500)
        $('.word4').fadeOut();      
    });
    // -------------------------------------
    $('.word5').hide();
    $('#w5').animate({opacity:1});
    
    $('#img5').hover(function(){
        $(this).stop().animate({opacity:.4},200);
        $('.word5').fadeIn();
    },
    function(){
        $(this).stop().animate({opacity:1},500)
        $('.word5').fadeOut();      
    });
    // ------------------------------
    $('.word6').hide();
    $('#w6').animate({opacity:1});
    
    $('#img6').hover(function(){
        $(this).stop().animate({opacity:.4},200);
        $('.word6').fadeIn();
    },
    function(){
        $(this).stop().animate({opacity:1},500)
        $('.word6').fadeOut();      
    });
    // ---------------------------------
    $('.word7').hide();
    $('#w7').animate({opacity:1});
    
    $('#img7').hover(function(){
        $(this).stop().animate({opacity:.4},200);
        $('.word7').fadeIn();
    },
    function(){
        $(this).stop().animate({opacity:1},500)
        $('.word7').fadeOut();      
    });
    // ------------------------------
    $('.word8').hide();
    $('#w8').animate({opacity:1});
    
    $('#img8').hover(function(){
        $(this).stop().animate({opacity:.4},200);
        $('.word8').fadeIn();
    },
    function(){
        $(this).stop().animate({opacity:1},500)
        $('.word8').fadeOut();      
    });