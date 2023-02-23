$(function(){

// ------start sticky header------
$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
    $('.header').addClass("hide");
    }
    else{
    $('.header').removeClass("hide");
     }
});

var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop || $(this).scrollTop() < 1) {

       $('.header').removeClass('sticky');
       
   } else {

      $('.header').addClass('sticky');
   }
   lastScrollTop = st;
});
//-------end sticky header--------

//start mega menu
$('.menu__item--sub ').mouseenter(function() {   
     $(this).find('.mega-menu').addClass('active');
     $('.header').addClass('dropdown'); 
}
).mouseleave(function(){
    $(this).find('.mega-menu').removeClass('active');
    $('.header').removeClass('dropdown');
})
//end mega menu

//start mobile menu
$('.menu-btn').click(function(){
    $(this).toggleClass('active');
    $('.header__right').slideToggle();
    $('.header').toggleClass('active-mob');
   
})
//end mobile menu

});

//start mobile sub menu
if($(window).width() < 992) {
    $('.menu__item--sub .menu__link').on('click', function(event){
        event.preventDefault();
        $(this).parent().toggleClass('active');
        $(this).parent().find('.mega-menu').slideToggle();
    })

    $('.menu-btn').click(function(){
        $('.menu__item--sub').removeClass('active');
        $('.mega-menu').slideUp();

    })
}
//end mobile sub menu

//start tab
$('.tab').click(function(){
    $('.tabs').toggleClass('active');
})
$('.tab2').click(function(){
    $('.tabs').toggleClass('active');
})
$('.calculator__tab').click(function(){
    $('.calculator__tabs').toggleClass('active');
})
$('.footer-menu__title').click(function(){
    $(this).parent().find('.footer-menu__item-content').slideToggle();
    $(this).parent().toggleClass('active');

})
//end tab

//faq
$('.faq__item').click(function(){
    $(this).toggleClass('active');
    $(this).find('p').slideToggle();
})
//faq

$('.see-more').click(function(){
    $(this).parent().find('.found-account-wrapper').slideToggle();
    $(this).parent().find('.found-now').toggleClass('active');
    $(this).toggleClass('active');
})
