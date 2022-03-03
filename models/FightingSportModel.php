<?php
require_once('BaseModel.php');
require_once('../services/DBConnectionService.php');

class FightingSportModel extends BaseModel {


    public function __construct()
    {
        parent::__construct();
    }

    public function getAllFightingSports() {
        $pdo = $this->getPDO();
        $stmt = $pdo->query('SELECT bezeichnung FROM kampfsportarten');
        $result = null;      // TODO wirte ResultService
        $counter = 0;
        while ($row = $stmt->fetch())
        {
            $result[$counter] =  $row['bezeichnung'];
            $counter++;
        }

        return $result;
    }

   
}
