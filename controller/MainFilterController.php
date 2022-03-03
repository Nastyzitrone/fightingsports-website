<?php

// require model
class MainFilterController {

    public function __construct(){

    }
    
    public function showData($postData){
        $postData['test'] = 'Hallo Welt';
        return "here rin controller".json_encode($postData);
    }
}