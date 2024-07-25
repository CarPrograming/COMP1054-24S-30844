
$(window).on("scroll", function(){
    if($(this).scrollTop() > 95){
        $("header").addClass("MovingHeader");
    }else{
        $("header").removeClass("MovingHeader");
    }
});



