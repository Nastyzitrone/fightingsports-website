<?php
require_once('DBConnectionService.php');
require_once('../controller/MainFilterController.php');
    if(isset($_POST['action']) && !empty($_POST['action'])) {
        if($_POST['action'] == 'filter') {
            
            
            $controller = new MainFilterController();
            $dbService = new DBConnectionService();
            try {
                
                echo $controller->getFilteredData($_POST); 
            }
            catch (\Error $e) {
                http_response_code(500);
                echo $e->getMessage();
            }
            
            //echo $controller->showData($_POST);

            //echo json_encode(array("blablabla"=>"Hallo WElt", "test" => $_POST['fname']));
        } elseif($_POST['action'] == 'onload') {
            $controller = new MainFilterController();
            $dbService = new DBConnectionService();
            try {
                
                echo $controller->getFilterMetaData($_POST); 
            }
            catch (\Error $e) {
                http_response_code(500);
                echo $e->getMessage();
            }
        } else {
            echo json_encode(array("blablabla"=>"Hallo WElt"));
        }
        
    }
?>