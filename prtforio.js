$(function (){
    $(window).scroll(function(){
        const wHeight=$(window).height();
        const WScroll=$(window).scrollTop();
        $(".fadein-box").each(function(){
            const bPosition=$(this).offset().top;
            if( WScroll > bPosition-wHeight+200){
                $(this).addClass("action");
            }
        })
    })
})