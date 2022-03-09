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
        $result = null;   
        // TODO write ResultService and use prepared Statements   
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

    /**
     * Returns the fightingsport table meta data
     */
    public function getFightingSportsMeta() {
        $pdo = $this->getPDO();
        $q = $pdo->prepare("DESCRIBE kampfsportarten");
        $q->execute();
        $table_fields = $q->fetchAll(PDO::FETCH_COLUMN);

        return $table_fields;
    }

    /**
     * Returns all countries and the amount of fighting sports 
     */
    public function getAppaerencesPerCountry() {
        $pdo = $this->getPDO();
        $q = $pdo->prepare("SELECT COUNT(BEZEICHNUNG) 'AMOUNT',HERKUNFTSLAND FROM KAMPFSPORTARTEN GROUP BY HERKUNFTSLAND");
        $q->execute();
        $table_fields = $q->fetchAll();

        return $table_fields;
    }

   
}
