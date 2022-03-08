<?php
require_once('../environment.php');
/**
 * 
 * This class provides service that is used in Model-Classes to connect to DB.
 */
class DBConnectionService {
	
    private $dbCredentials = array();

    /**
     * Constructor
     * Load database credentials from environmetn variables
     */
	public function __construct( ){
        
		$this->dbCredentials['host'] = $_ENV['DB_HOST']; 
        $this->dbCredentials['username'] = $_ENV['DB_USER']; 
        $this->dbCredentials['password'] =  $_ENV['DB_PASSWORD']; 
        $this->dbCredentials['database'] = $_ENV['DB_DATABASE']; 
        $this->dbCredentials['charset'] = $_ENV['DB_CHARSET']; 
	}
	
    /**
     * Returns a PDO (Representation of Database-Connection)
     */
	public function establishConnection(){
        $host = $this->dbCredentials['host'];
        $username = $this->dbCredentials['username'];
        $password = $this->dbCredentials['password'];
        $database = $this->dbCredentials['database'];
        $charset = $this->dbCredentials['charset'];
        
        $dsn = "mysql:host=$host;dbname=$database;charset=$charset";

        $options = [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION, // Throw Exceptions
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC       // Results as associativ Array
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
    
    /**
     * Returns database credentials as array
     */
    private function getDatabaseCredentials(){
        return $this->dbCredentials;
    }
  
}
?>