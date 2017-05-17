$(document).ready(function(){
    applyClickHandlers();
});

function applyClickHandlers(){
    $('.tech').click(toggleSelected($(this)));
}

function toggleSelected(tech){
    $('.tech').click(function(){
        console.log('clicked');
        var $elt_index = $(this).parent().find(this).index();

        console.log('elt index: ', $elt_index);
        $('.tech').removeClass('selected');

        var elt_count = $('.circle-container li.tech').length;

        for(var i = 0; i <= elt_count; i++){
            var end_rot = 360 / elt_count * (i - $elt_index) + 360;
            console.log('i: ', i, 'rot: ', end_rot);
            $(`.circle-container > *:nth-of-type(${i+1})`).css({
                'transform': `rotate(${end_rot}deg)   translate(12.5em)  rotate(-${end_rot}deg)`,
                // 'transition-duration': '0.5s'
            });
        }
        
        $(this).toggleClass('selected');
    });
}