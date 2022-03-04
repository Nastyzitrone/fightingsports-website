<?php
error_reporting(E_ALL);
require_once('../models/FightingSportModel.php');
// require model
class MainFilterController {

    private $model = null; 

    public function __construct(){
        $this->model = new FightingSportModel();
    }
    
    public function getFilteredData($postData){
        $resultData = $this->model->getAllFightingSports();
        return json_encode($resultData); 
    }

    public function getFilterMetaData(){
        
        $resultData['appearencesPerCountry'] = $this->model->getAppaerencesPerCountry();
        return json_encode($resultData['appearencesPerCountry']); 
    }
}