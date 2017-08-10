$(document).ready(function(){
  $('.fold-it').click(function(){
    console.log('fold it');
    // $('.piece:nth-of-type(1), .piece:nth-of-type(3)').toggleClass('folded');
    // $('.top_container, .top').toggleClass('folded');
    $('.bottom_container, .bottom').toggleClass('folded');
  });
});