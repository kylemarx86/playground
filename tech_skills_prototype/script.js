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
        // console.log('count tech elements', $('.tech').length);
        var $elt_index = $(this).parent().find(this).index();
        console.log('elt num: ', $elt_index);
        $('.tech').removeClass('selected');
        $(this).toggleClass('selected');
    });
}