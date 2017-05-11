var page_arr = ['.first', '.second', '.third'];
var curr_page = null;
var new_page = null;

$(document).ready(function(){
    curr_page = 0;
    apply_button_handlers();
});

function apply_button_handlers(){
    $('.arcade_btn.red').click(get_prev);
    $('.arcade_btn.blue').click(get_next);
}

function button_disable_and_reenable(){
  $('#prev').off();
  $('#next').off();
  setTimeout(function(){
    $('#prev').click(get_prev);
    $('#next').click(get_next);
  }, 1000);
}
function get_prev(){
  button_disable_and_reenable();
  new_page = (curr_page + page_arr.length - 1) % page_arr.length;
  update_page(new_page);
}
function get_next(){
  button_disable_and_reenable();
  new_page = (curr_page + 1) % page_arr.length;
  update_page(new_page);
}
function update_page(new_page){
  $(page_arr[curr_page]).toggleClass('shrunk grown');
  $(page_arr[new_page]).toggleClass('shrunk grown');
  toggle_hidden(curr_page, new_page);
  curr_page = new_page;
  new_page = null;
}

function toggle_hidden(curr_page, new_page){
    setTimeout(function(){
        // console.log('curr_page:', curr_page);
        // console.log('new_page:', new_page);
        $(page_arr[curr_page]).toggleClass('hidden');
        $(page_arr[new_page]).toggleClass('hidden');
    }, 480);
}