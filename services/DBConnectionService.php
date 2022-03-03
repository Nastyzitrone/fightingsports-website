<?php
require_once('../environment.php');
class DBConnectionService {
	
    private $dbCredentials = array();


	public function __construct( ){
        
		$this->dbCredentials['host'] = $_ENV['DB_HOST']; 
        $this->dbCredentials['username'] = $_ENV['DB_USER']; 
        $this->dbCredentials['password'] =  $_ENV['DB_PASSWORD']; 
        $this->dbCredentials['database'] = $_ENV['DB_DATABASE']; 
        $this->dbCredentials['charset'] = $_ENV['DB_CHARSET']; 
	}
	
	public function establishConnection(){
        $host = $this->dbCredentials['host'];
        $username = $this->dbCredentials['username'];
        $password = $this->dbCredentials['password'];
        $database = $this->dbCredentials['database'];
        $charset = $this->dbCredentials['charset'];
        
        $dsn = "mysql:host=$host;dbname=$database;charset=$charset";
        $options = [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ];
        try {
             $pdo = new PDO($dsn, $username, $password, $options);
        } catch (\PDOException $e) {
             throw new \PDOException($e->getMessage(), (int)$e->getCode());
        }
        
        return $pdo;
    }

    private function closeConnection(){

    }
    
    private function getDatabaseCredentials(){
        return $this->dbCredentials;
    }
  
}
?>