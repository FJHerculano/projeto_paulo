<?php

namespace App\Dao\MySql\Banco_Loja;

class ClienteDao extends Conexao{
    
    
    public  function __construct(){
        parent::__construct();
    }

    public function getAllCliente():Array
        {
        $loja = $this->pdo
        ->query('SELECT 
        id,
        nome,
        telefone
        FROM Loja;')
        ->fetchAll(\PDO::FETCH_ASSOC);

        return $clientes;
    }

 }