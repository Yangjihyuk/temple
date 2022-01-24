AOS.init();


// main-visual //
$(window).scroll(function(){
  if($(window).scrollTop()){
    $("#navbar").addClass("black");
  }
  else{
    $("#navbar").removeClass("black");
  }
})

$('.card1').click(function(){
  $('.main-visual .container').addClass('background-img-01');
  $('.container').removeClass('background-img-02');
  $('.container').removeClass('background-img-03');
  $('.container').removeClass('background-img-04');
});
$('.card2').click(function(){
  $('.main-visual .container').addClass('background-img-02');
  $('.container').removeClass('background-img-01',);
  $('.container').removeClass('background-img-03');
  $('.container').removeClass('background-img-04');
});
$('.card3').click(function(){
  $('.main-visual .container').addClass('background-img-03');
  $('.container').removeClass('background-img-01');
  $('.container').removeClass('background-img-02');
  $('.container').removeClass('background-img-04');
});
$('.card4').click(function(){
  $('.main-visual .container').addClass('background-img-04');
  $('.container').removeClass('background-img-01');
  $('.container').removeClass('background-img-02');
  $('.container').removeClass('background-img-03');
});

// nav //
const menuBtn=document.querySelector('.xi-bars');
const navLink=document.querySelector('.menu-navi');

menuBtn.addEventListener('click',()=>{
navLink.classList.toggle('menu-btn-link');
})
// section01 //

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode:false,
    focusOnSelect:true
  });
// section03 //
$('.box01').mouseover(function(){
  $('.bg01').css('transform','scale(1.1)')
});
$('.box02').mouseover(function(){
  $('.bg02').css('transform','scale(1.1)')
});

$('.box03').mouseover(function(){
  $('.bg03').css('transform','scale(1.1)')
});

$('.box04').mouseover(function(){
  $('.bg04').css('transform','scale(1.1)')
});
$('.box05').mouseover(function(){
  $('.bg05').css('transform','scale(1.1)')
});
$('.box06').mouseover(function(){
  $('.bg06').css('transform','scale(1.1)')
});
$('.box07').mouseover(function(){
  $('.bg07').css('transform','scale(1.1)')
});

$('.img-box').mouseleave(function(){
  $('.sec-03-img').css('transform','scale(1)')
});
// section04 //

  $('.sec04-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:2000,
  });
  




 
