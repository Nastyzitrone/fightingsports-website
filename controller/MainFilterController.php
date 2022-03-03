<?php
error_reporting(E_ALL);
require_once('../models/FightingSportModel.php');
// require model
class MainFilterController {

    private $model = null; 

    public function __construct(){
        $this->model = new FightingSportModel();
    }
    
    public function showData($postData){
        $resultData = $this->model->getAllFightingSports();
        return json_encode($resultData);
        
    }
}