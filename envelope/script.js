$(document).ready(function(){
//    console.log('ready');
   $('.send').click(function(){
    //    console.log('sent');
       send_mail();
   })
});


function send_mail(){
    // $('.top').addClass('closed');
    $('.top').toggleClass('closed');
    // $('.inside, .outside').toggleClass('invisible');
    
    // $('.top .inside, .top .outside').toggleClass('invisible');
    
}
