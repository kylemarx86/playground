$(document).ready(function(){
    applyClickHandlers();
});

function applyClickHandlers(){
    // console.log('click ready');
    $('.tech').click(toggleSelected($(this)));
}

function toggleSelected(tech){
    // $(this.)
    // console.log('clicked');
    // console.log('this: ',tech);
    $('.tech').click(function(){
        console.log('clicked');
        // $('.tech').length;
        console.log('count tech elements', $('.tech').length);
        var $elt_num = $(this).parent().parent().parent().find(this).index();
        console.log('parent: ', $(this).parent());
        console.log('parent of parent: ', $(this).parent().parent());
        // console.log('elt num: ', $elt_num);
        $('.tech').removeClass('selected');
        $(this).toggleClass('selected');
    });
}