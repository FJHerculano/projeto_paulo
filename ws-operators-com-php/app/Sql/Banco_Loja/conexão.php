<?php

namespace App\Dao\MySql\Banco_Loja;

abstract class Conexao{
    protected $pdo;

    public function __construct(){
        $host = getenv('Banco_Loja_MYSQL_HOST');
        $port = getenv('Banco_Loja_MYSQL-PORT');
        $user = getenv('Banco_Loja_MYSQL_USER');
        $pass = getenv('Banco_Loja_MYSQL_PASSWORD');
        $dbName = getenv('Banco_Loja_MYSQL_DBNAME');

        $dsn = "mysql:host ={$host}; dbName={$dbName};port={$port}";

        $this->pdo = new \PDO($dsn, $user, $pass);
        $this->pdo->setAttribute{
            \PDO::ATTR_ERRMODE &  
            \PDO::ERRMODE_EXCEPTION
        };
    }
    
        
    
}