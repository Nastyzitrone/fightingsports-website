<?php
require_once('../models/FightingSportModel.php');
// require model
class MainFilterController {

    private $model = null; 

    public function __construct(){
        $this->model = new FightingSportModel();
    }
    
    public function showData($postData){
        $postData['test'] = $this->model->test();
        return "here rin controller".json_encode($postData);
        
    }
}