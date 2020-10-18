
$(document).ready(function(){
// ///////////////////////
//conut
$('.counter').counterUp({
  delay: 10,
  time: 1000
});

  // ///////////////////
  //scroll to top
 var mybutton = $("#mybtn");
  $(window).scroll(function(){
    // if($(this).scrollTop() >=600){
    //   mybutton.show();
    // }else{
    //   mybutton.hide();
    // }
  
  $(window).scrollTop() >= 600 ? mybutton.show() : mybutton.hide();
  })

  mybutton.click(function(){
    $('html,body').animate({
    scrollTop:0
    },1000)
  })


  $('.gallery-item').isotope({
    // options
    itemSelector: '.item',
    layoutMode: 'fitRows'
  });
  


  $('.portfolio-item ul li').on('click',function(){
   $(this).addClass('active').siblings().removeClass('active');
   var selector = $(this) .attr('data-filter');
   $('.gallery-item').isotope({
     filter:selector

  });
  return false;
  })

  $('.owl-carousel').owlCarousel({
    autoplay: true,
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})

//  ////////////////////////////////////////
//validate email and password
$('#email').keyup(function(){
  if(validatemail()){
      $('#email').css('border','2px solid green')
  }else{
      $('#email').css('border','2px solid red')
      $('.validate-email').html("<p class='text-danger'>Please enter a valid email</p>")
  }
});
$('#name').keyup(function(){
  if(validatename()){
      $('#name').css("border","2px solid green")
   
  }else{
      $('.validate-name').html("<p class='text-danger'> Please enter at least 4 chars</p>");
      $('#name').css("border","2px solid red")
  }
})
});
function validatename() {
var name = $('#name').val();
if(name.length > 4){
return true;
}else{
 return false;
}
}
function validatemail() {
var email = $('#email').val();
var reg =  /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
if(reg.test(email)){
return true;
}else{
return false;
}
}







