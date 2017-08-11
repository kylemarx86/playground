$(document).ready(function(){
//    console.log('ready');
   $('.send').click(function(){
    //    console.log('sent');
       send_mail();
   })
});


function send_mail(){
    // $('.note').toggleClass('moved');
    $('.top_container, .top').toggleClass('closed');

    $('.top_container, .top').toggleClass('folded');
    $('.bottom_container, .bottom').toggleClass('folded');
    $('.note').toggleClass('moved');
}
