$(document).ready(function(){
    enableClickHandlers();
});

function enableClickHandlers(){
    $('.tab').click(function(){
        // remove the class active from other tabs in descendents of the parent
        $(this).parent().find('.active').removeClass('active');
        // toggle the class active on this
        $(this).toggleClass('active');
    })
}