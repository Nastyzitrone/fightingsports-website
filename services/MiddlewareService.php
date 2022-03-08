<?php
/**
 * This Code is used to connect frontend action with the right controller to call
 * Note: this code replaces, partly, php class autoloading and routing
 */
require_once('DBConnectionService.php');
require_once('../controller/MainFilterController.php');

// check for any post action
if(isset($_POST['action']) && !empty($_POST['action'])) {

    // distinguish between specific actions and call controller functions
    if($_POST['action'] == 'filter') {

        $controller = new MainFilterController(); 

        echo $controller->getFilteredData($_POST); 
    } elseif($_POST['action'] == 'onload') {

        $controller = new MainFilterController();

        echo $controller->getFilterMetaData($_POST); 
    } else {
        
        echo json_encode(array("blablabla"=>"Hallo WElt"));
    }
    
}
?>