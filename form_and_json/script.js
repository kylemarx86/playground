$(document).ready(function(){
    applyClickHandlers();
});

function applyClickHandlers(){
    $('button').click(function(){
        sendForm();
    })
}

function sendForm(){
    
    //start here
    $.ajax({
        dataType: 'json',
        url: 'json_file.php',
        method: 'post',
        success: function(response){
            console.log(response);
            if(response.success){
                $('.new_elt').text(response.message);
            }else{
                // $('.new_elt').css('color', 'red').text(response.message);
                $('.new_elt').text(response.message);
            }
        },
        error: function(response){

        }
    });
}