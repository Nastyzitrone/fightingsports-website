<?php

class DBConnectionService {
	
    private $dbCredentials = array();
	private $servername = '';
	private $username = '';
	private $password = '';
	private $database = '';

	public function __construct($servername, $username, $password, $database){
		$this->dbCredentials['servername'] = $servername; 
        $this->dbCredentials['username'] = $username; 
        $this->dbCredentials['password'] = $password; 
        $this->dbCredentials['database'] = $database; 
		
		$this->establishConnection();
	}
	
	private function establishConnection(){

    }

    private function closeConnection(){

    }
    
    private function getDatabaseCredentials(){
        return $this->dbCredentials;
    }
  
}
?>