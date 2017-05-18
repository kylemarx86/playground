var curr_rot = null;

$(document).ready(function(){
    curr_rot = 0;
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

        // whether or not to spin cw or ccw is determined by the shortest path to the end. 
            // this can be determined by a portion of the transformation matrix in the css.
            // if this value is greater than or equal to zero the clicked element is located on the lower half of the circle and should be rotated ccw,
            // else the clicked element and all others should be rotated cw.
        var clicked_matrix_part = Math.round(parseFloat($(this).css('transform').split(', ')[5]));


        console.log('css: ', clicked_matrix_part);

        if(clicked_matrix_part >= 0){
            console.log('rotate ccw');
        } else {
            console.log('rotate cw');
        }

       
        $('.tech').removeClass('selected');

        var elt_count = $('.circle-container li.tech').length;
  

        for(var i = 0; i <= elt_count; i++){
            if(clicked_matrix_part >= 0){
                console.log('rotate ccw');
            } else {
                console.log('rotate cw');
            }
            var end_rot = 360 / elt_count * (i - $elt_index) + 360;
            // var end_rot = 360 / elt_count * (i - $elt_index);
            
            // end_rot = end_rot < 0 ? (end_rot + 360) % 360 : end_rot;
            console.log('i: ', i, 'rot: ', end_rot);
            $(`.circle-container > *:nth-of-type(${i+1})`).css({
                'transform': `rotate(${end_rot}deg) translate(12.5em) rotate(-${end_rot}deg)`,
                // 'transition-duration': '0.5s'
            });
        }
        
        $(this).toggleClass('selected');


        // console.log('css: ', $(this).attr('transform'));
        // console.log('parent: ', $(this).parent());

        // var apparent_rot;
        // curr_rot =  curr_rot || 0;
        // apparent_rot = curr_rot % 360;
        // if(apparent_rot < 0){
        //     apparent_rot += 360;
        // }
        // if(apparent_rot < 180){

        // }

        // console.log('rot: ', rot);
        // var $curr_selected = $('.selected').parent().index();
        // console.log('curr_selected: ', $curr_selected);
        
        
        // apparent_rot = 360 / elt_count * ($curr_selected - $elt_index) + 360;
        // console.log('app_rot: ', apparent_rot);




    });
}