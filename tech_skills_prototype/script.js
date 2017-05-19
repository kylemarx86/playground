// var curr_rot = null;
// var last_rot = null;
var rot_arr;    //keeps track of the rotations of each elt as they spin around in circular path

$(document).ready(function(){
    // curr_rot = 0;
    // last_rot = 0;
    rot_arr = [];
    initializeLocations();
    applyClickHandlers();
});

function initializeLocations(){
    var item_count = $('.circle-container .tech').length;
    // console.log(item_count);
    for(var i = 0; i < item_count; i++){
        $(`.circle-container .tech:nth-of-type(${i+1})`).attr('loc', i);
        rot_arr[i] = 360 / item_count * i;
    }
}

function applyClickHandlers(){
    $('.tech').click(toggleSelected($(this)));
}

function toggleSelected(tech){
    $('.tech').click(function(){
        
        console.log('clicked');
        
        
        //determine new rotation based on the location index not the element index
        // var $elt_index = $(this).parent().find(this).index();
        // console.log('elt index: ', $elt_index);
        var loc_index = $(this).attr('loc');
        console.log('loc index: ', loc_index);

        var elt_count = $('.circle-container li.tech').length;

        // console.log($('.circular-container '));

        // determine which way to spin (cw or ccw) and by how much by first determining which is the closer path.
            // this can be done by seeing if the clicked element is under or over the halfway mark of the number of elements


        // var new_rot = $elt_index <= elt_count / 2 ? -1 * $elt_index * 360 / elt_count : (elt_count - $elt_index) * 360 / elt_count;
        var new_rot = loc_index <= elt_count / 2 ? -1 * loc_index * 360 / elt_count : (elt_count - loc_index) * 360 / elt_count;
        console.log(`new rot: ${new_rot}`);

        // whether or not to spin cw or ccw is determined by the shortest path to the end. 
            // this can be determined by a portion of the transformation matrix in the css.
            // if this value is greater than or equal to zero the clicked element is located on the lower half of the circle and should be rotated ccw,
            // else the clicked element and all others should be rotated cw.
        // var clicked_matrix_part = Math.round(parseFloat($(this).css('transform').split(', ')[5]));
        // console.log('css: ', clicked_matrix_part);

        // var dir_coefficient;
        // if(clicked_matrix_part >= 0){
        //     console.log('rotate ccw');
        //     dir_coefficient = -1;
        // } else {
        //     console.log('rotate cw');
        //     dir_coefficient = 1;
        // }

       
        $('.tech').removeClass('selected');

        for(var i = 0; i < elt_count; i++){

            // var end_rot = 360 / elt_count * (i - $elt_index);            //working
            // var end_rot = 360 / elt_count * (i - $elt_index) + new_rot;
            // var end_rot = 360 / elt_count * i + new_rot + last_rot;
            rot_arr[i] += new_rot;

            
            //important
            // console.log('i: ', i, 'rot: ', end_rot);
            
            var $elt = $(`.circle-container > .tech:nth-of-type(${i+1})`);
            var $attr = $elt.attr('loc');
            // var new_loc = ( $elt.attr('loc') - $elt_index + elt_count ) % elt_count;
            var new_loc = ( $elt.attr('loc') - loc_index + elt_count ) % elt_count;


            $elt.attr('loc', new_loc).css({
                // 'transform': `rotateZ(${end_rot}deg) translate(12.5em) rotateZ(${-1*end_rot}deg)`,
                'transform': `rotateZ(${rot_arr[i]}deg) translate(12.5em) rotateZ(${-1*rot_arr[i]}deg)`,
                // 'transition-duration': '0.5s'
            });
        }
        console.log('rot_arr', rot_arr);
        
        $(this).toggleClass('selected');
    });
}