<?php
    if(isset($_POST['action']) && !empty($_POST['action'])) {
        if($_POST['action'] == 'filter') {
            require_once('../controller/MainFilterController.php');
            require_once('DBConnectionService.php');
            $controller = new MainFilterController();
            $dbService = new DBConnectionService();
            try {
                
                echo $controller->showData($_POST); 
            }
            catch (\Error $e) {
                http_response_code(500);
                echo $e->getMessage();
            }
            
            //echo $controller->showData($_POST);

            //echo json_encode(array("blablabla"=>"Hallo WElt", "test" => $_POST['fname']));
        } else {
            echo json_encode(array("blablabla"=>"Hallo WElt"));
        }
        
    }
?>