<?php
require_once('BaseModel.php');
require_once('../services/DBConnectionService.php');

class FightingSportModel extends BaseModel {

    private $connection = null;

    public function __construct()
    {
        
    }

    public function test() {
        return 'here Model';
    }
}