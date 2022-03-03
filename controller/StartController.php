<?php

    if(isset($_POST['action']) && !empty($_POST['action'])) {
        if(isset($_POST['fname'])) {
            
            echo json_encode(array("blablabla"=>"Hallo WElt", "test" => $_POST['fname']));
        } else {
            echo json_encode(array("blablabla"=>"Hallo WElt"));
        }
        
    }
?>
