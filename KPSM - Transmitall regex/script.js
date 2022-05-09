$(document).ready(function(){
    applyClickHandlers();
});

function applyClickHandlers(){
    $('button').click(function(){
        ConvertText();
    })
}

function ConvertText(){
    console.log('running regex');
    var raw_text = $('.convert textarea').val();
    // $('#new_elt').text(raw_text);
    var parsed_text = ParseText(raw_text);
    // $('.new_elt').append(parsed_text);
    PrintText(parsed_text);
}

function ParseText(raw_text){
    // note these patterns only work when the text is shrunk on the page to the max.
    // NOTE: full page of text will have 20 items.

    // create return object with transmittals (array) and error (boolean). set error as false to begin with 

    full_matches = {
        errors: false,
        matches_arr: []
    };
    var num_matches = [];
    var text_matches = [];
    
    // parse for number and store in array
    var pattern = /<div role="gridcell" class="MatrixTable__row-cell" style="flex: 1 1 auto; width: 70px; overflow: hidden; min-width: 70px;"><div class="EllipsisText MatrixTable__row-cell-text">([0-9]+)/g;
    var item = null;
    while(item = pattern.exec(raw_text)){
        num_matches.push(item[1]);
    }

    //parse text and store in array
    pattern = /<div role="gridcell" class="MatrixTable__row-cell" style="flex: 1 1 auto; width: 400px; overflow: hidden; min-width: 200px;"><div class="EllipsisText MatrixTable__row-cell-text">([a-zA-Z \-\[\]0-9\,\(\)\_']+)/g;
    item = null;
    while(item = pattern.exec(raw_text)){
        text_matches.push(item[1]);
    }
    
    // ensure number of text pieces grabbed equals the number of objects which should be equal to 20
        // if not, throw error
    if(num_matches.length == text_matches.length && num_matches.length == 20){
        full_matches.errors = false
        for(var i = 0; i < num_matches.length; i++){
            // store the numbers and text within the objects
            var temp_obj = {
                item_num: num_matches[i],
                item_text: text_matches[i]
            };
            full_matches.matches_arr.push(temp_obj);
        }
        return full_matches;
    }else{
        full_matches.errors = true;
        return full_matches;
    }
}

function PrintText(matches_obj){
    $('.new_elt').empty();

    if(matches_obj.errors){
        $('.new_elt').append("errors exist");
        $('textarea').val("");
    }else{
        var $table = $('<table>');

        matches_obj.matches_arr.forEach(element => {
            var $table_row = $('<tr>');
            var $td_num = $('<td>').text(element.item_num);
            var $td_text = $('<td>').text(element.item_text);
            $table_row.append($td_num, $td_text);
            $table.append($table_row);

            // $line = $('<div>').append(element.item_num,'\t',element.item_text);
            // $('.new_elt').append($line);
        });

        $('.new_elt').append($table);
        $('textarea').val("");
    }
}