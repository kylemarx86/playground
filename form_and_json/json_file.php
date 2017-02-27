<?php
$some_var = false;
$output = [];
if(!$some_var){
    $output['success'] = false;
    $output['message'] = 'message not sent';
}else{
    $output['success'] = true;
    $output['message'] = 'message sent';
}
print json_encode($output);
?>