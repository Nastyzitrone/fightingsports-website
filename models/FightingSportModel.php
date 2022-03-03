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
        $stmt = $pdo->query('SELECT * FROM kampfsportarten');
        $result = null;      // TODO write ResultService
        $counter = 0;
        $fightingSportsColNames = $this->getFightingSportsMeta();
        while ($row = $stmt->fetch())
        {

            foreach($fightingSportsColNames as $collumnName) {
                $result[$row['BEZEICHNUNG']][$collumnName] =  $row[$collumnName];
            }
            
           
            $counter++;
        }

        return $result;
    }

    public function getFightingSportsMeta() {
        $pdo = $this->getPDO();
        $q = $pdo->prepare("DESCRIBE kampfsportarten");
        $q->execute();
        $table_fields = $q->fetchAll(PDO::FETCH_COLUMN);

        return $table_fields;
    }

   
}
