<?php
date_default_timezone_set('America/Los_Angeles');
?>
<!DOCTYPE html>
<html>
<head>
    <title></title>
</head>
<body>
<?php
//use the foreach loop to loop through the menu items
$menu = ['item1','item2','item3','item4'];
$menu_imp = [
        'item1'=>['url'=>'pages/item1.php'],
        'item2'=>['url'=>'pages/item2.php'],
        'item3'=>['url'=>'pages/item3.php'],
        'item4'=>['url'=>'pages/item4.php'],
];
print_r($_GET);
//create the menu with the new improved menu data
//if no GET superglobal or page parameter in GET is available, pick one by default
//if an invalid page is loaded, give a 404 response page
?>
<ul>
    <?php
    foreach($menu as $menu_item){
        ?>
        <li><a href="index.php?page=<?=$menu_item;?>"><?=$menu_item;?></a></li>

    <?php
    }

    //if the query string is empty  if(empty($Get_[page]))
    if(empty($_GET['page'])){
        //assign it random
        $url = $menu_imp['item1']['url'];
    }
    //else if the url doesn't exist in our array
    //if the second array at index of query string is empty (i.e. does not exist) throw 404
    else if(empty($menu_imp[$_GET['page']])){
        $url = 'pages/404.php';
    }
    //otherwise url is the query string   (otherwise include the query stringth elt of menu_imp
    else{
        $url = $menu_imp[$_GET['page']]['url'];
    }

    include($url);
?>
</ul>
</body>
</html>