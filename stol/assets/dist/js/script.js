

$(document).ready(function(){

    //mobile menu
    $(document).mouseup(function(e){
        $('.toggle-menu').on('click', function () {
            $('#mainMenu').toggleClass('show');
            $(this).toggleClass('active');
        });
        var menu = $('#mainMenu.show');
        if (!menu.is(e.target) && menu.has(e.target).length === 0) {
            menu.removeClass('show');
            $('.toggle-menu').removeClass('active');
        }
    });
    //end mobile menu

    //mobile fixed menu
    //Resize > 768px
    function ResizeFunc(m) {
        if (!m.matches) {
            var liheHeight = $('.header__wrapper-btn').offset().top;
            $(document).scroll(function() {
                var scroll = $(this).scrollTop();
                if (scroll > liheHeight) {
                    $('.header__wrapper-btn').addClass('fixed');
                    $('header+section').addClass('afterFixed');
                    $("#mainMenu").addClass('withFixed');
                } else {
                    $('.header__wrapper-btn').removeClass('fixed');
                    $('header+section').removeClass('afterFixed');
                    $("#mainMenu").removeClass('withFixed');
                }
            });
        }else{
            $('.header__wrapper-btn').removeClass('fixed');
            $('header+section').removeClass('afterFixed');
            $("#mainMenu").removeClass('withFixed');
            $(document).scroll(function() {
                $('.header__wrapper-btn').removeClass('fixed');
                $('header+section').removeClass('afterFixed');
                $("#mainMenu").removeClass('withFixed');
            })
        }
    }
    var m = window.matchMedia("(min-width: 768px)")
    ResizeFunc(m);
    m.addListener(ResizeFunc);
    //end mobile fixed menu

    //Scroll to id
    function handler(event) {
        var hash = event.target.hash;
        var headerHeight = $('header').height();
        if (hash) {
          event.preventDefault();
          if ($(hash).length) {
              if($('#mainMenu').hasClass('withFixed')){
                var offset = $(hash).offset().top - 60;
                $('html, body').stop().animate({scrollTop: offset},'slow');
                console.log('has');
              }else{
                // var offset = $(hash).offset().top - headerHeight;
                var offset = $(hash).offset().top - 80;
                $('html, body').stop().animate({scrollTop: offset},'slow');
                console.log('no');
              }
          }else{
          }
        }
    }
    $('#mainMenu a').on( "click", handler );
    
    $('#footerMenu a').on( "click", handler );
    $('#mainMenu a').on('click', function(){
        $('#mainMenu').toggleClass('show');
        $('.toggle-menu').toggleClass('active');
    });
      //End scroll to id

    //popups
    $('.open-requestCall').on("click",function(){
        $('.overlay-requestCall').addClass('active');
    });
    $('.overlay-requestCall .closeBtn, .overlay-requestCall .close').on("click",function(){
        $('.overlay-requestCall').removeClass('active');
    });

    $('.open-requestCall2').on("click",function(){
        $('.overlay-requestCall2').addClass('active');
    });
    $('.overlay-requestCall2 .closeBtn, .overlay-requestCall2 .close').on("click",function(){
        $('.overlay-requestCall2').removeClass('active');
    });

    $('.open-policy').on("click",function(){
        $('.overlay-policy').addClass('active');
    });
    $('.overlay-policy .closeBtn, .overlay-policy .close').on("click",function(){
        $('.overlay-policy').removeClass('active');
    });

    $('.open-thanksMsg').on("click",function(){
        $('.overlay-thanksMsg').addClass('active');
    });
    $('.overlay-thanksMsg .closeBtn, .overlay-thanksMsg .close').on("click",function(){
        $('.overlay-thanksMsg').removeClass('active');
    });

    $('.open-samplesPprices').on("click",function(){
        $('.overlay-samplesPprices').addClass('active');
    });
    $('.overlay-samplesPprices .closeBtn, .overlay-samplesPprices .close').on("click",function(){
        $('.overlay-samplesPprices').removeClass('active');
    });
    //end popups

    //проверка формы
    // $("form input, textarea").on("change input keyup paste", function() {
    //     $(this).parent().find(":invalid").length ? ($(this).parent().removeClass("valid"),
    //     $(this).parent().addClass("invalid")) : ($(this).parent().removeClass("invalid"),
    //     $(this).parent().addClass("valid"))
    // });
    // $("form input, textarea").on("invalid", function(event) {
    //     event.preventDefault();
    //     $(this).parent().addClass('invalid');
    //     var errorText = $(this).parent().find('.errorText').text();
    //     $(this).attr("placeholder", errorText);
    // });

    //input only number
    $('input[type=number]').on("click", function () {
        $(this).keydown(function(e){
            if((e.which >=48 && e.which <=57)  // number
            || (e.which >=96 && e.which <=105)  // num lock
            || e.which==8 // backspace
            || (e.which >=37 && e.which <=40) // arrows
             || e.which==46) // delete 
          {
            return true;
          } else {
              return false;            
          }		 
        });
    });
    //End 

    //mask input
    $('.inputPhone').mask('+7 (000) 000 00 00');



});



