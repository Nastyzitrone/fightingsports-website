<?php

    if(isset($_POST['action']) && !empty($_POST['action'])) {
        if($_POST['action'] == 'filter') {
            require_once('../controller/MainFilterController.php');
            $controller = new MainFilterController();
            echo $controller->showData($_POST);

            //echo json_encode(array("blablabla"=>"Hallo WElt", "test" => $_POST['fname']));
        } else {
            echo json_encode(array("blablabla"=>"Hallo WElt"));
        }
        
    }
?>