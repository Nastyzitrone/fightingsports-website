<?php
require_once('../services/DBConnectionService.php');

abstract class BaseModel {

    protected $pdo = null;
    private $connectionService = null;

    public function __construct(){
        $this->connectionService = new DBConnectionService();       
    }

    protected function getPDO() {
        return $this->connectionService->establishConnection();
    }
}