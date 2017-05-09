$(document).ready(function(){
    // console.log('ready');
    apply_button_handlers();
});

function apply_button_handlers(){
    $('.arcade_btn.red').click(previous_color);
    $('.arcade_btn.blue').click(next_color);
}

function previous_color(){
    console.log('prev');
};
function next_color(){
    console.log('next');
};

