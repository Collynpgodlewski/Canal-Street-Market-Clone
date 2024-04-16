$(document).ready(function(){

    $(".panel").click(function() {
        $('.panel').removeClass("active"); 
        $(this).toggleClass("active");   
    });
    
    $(".panel.active").click(function() {  	$(this).removeClass("active"); 
});

})
$(document).ready(function( $ ) {
    $( ".home" ).first().addClass( "active" );

    $('.dish').hover(
        function(){
            var src =  $(this).find('img').toggleClass("hovered");
            // console.log(src)
            var winWidth = ($('.dishes').width()) - 300;
            var winHeight = ($('.dishes')[0].offsetHeight) - 200;
            
            randomTop = getRandomNumber(0, winHeight);
            randomLeft = getRandomNumber(0, winWidth);

            $(this).find('img').css({"top": randomTop +"px", "left": randomLeft +"px", transition : 'opacity 1s ease-in-out'});

            function getRandomNumber(min, max) {
    
                return Math.random() * (max - min);
                  
              }
        }
    )
});

