$(function(){
setTimeout(function(){
    $('.start p').fadeIn(1600);
  },500);
  setTimeout(function(){
    $('.start').fadeOut(500);
},2500);
});
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
