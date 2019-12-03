<?php

namespace Controllers\V1;

use App\Dao\MySql\Banco_Loja\ClienteDao;
use App\Dao\MySql\Banco_Loja\LojaDao;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;  

final class OperatorController {

    /**
     * @api {GET} /status Status da API
     * 
     * @apiVersion 1.0.0
     * 
     * @apiDescription Verifica a disponibili dade da API
     * 
     * @apiGroup Recursos Abertos
     * 
     * @apiSuccess (200) {String} status Resultado da disponibilidade do servidor.
     * 
     * @apiSuccessExample {JSON} Success-Response:
     *  {
     *      'status': 'Serviço disponível WS1'
     *  }
     */
        

    public static function getStatus(Request $req, Response $res, array $args) {
        $dados = [
            "status" => "Serviço disponível WS1"
        ];
		
        return $res->withStatus(200)->withJson($dados);
     }

     public static function insert(Request $req, Response $res, array $args){

     }
        
     public static function getCliente(Request $req, Response $res, array $args) {
        $clienteDao = new ClientesDao();
        $clientes = $clienteDao->getALLCliente();

            $res = $res->withJson($clientes);
        return $res;
    }

    /**
     * @api {POST} /pay/{operator} executa o pagamento via cartão de credito
     * 
     * @apiDescription Envia a solicitação para pagamento via cartão de credito a operadora de cartão
     * 
     * @apiGroup e recursos autenticados 
     * 
     * @apiParam {String} operator Parâmetro da url que corresponde a operadora de cartão desejado. Deve ser uma das opções a seguir: op-01, op-02 ou op-03.
     * @apiParam {String} numero_cartao Numero do cartão de credito
     * @apiParam {String} nome_cliente Nome do titular do cartão de crédito.
     * @apiParam {String} bandeira Nome da bandeira segundo opções a seguir: mister (cod.: 1111), vista (cod.:2222) ou daciolo (cod.: 3333).
     * @apiParam {Number} cod_seguranca Código de três dígitos.
     * @apiParam {Number} valor_em_centavos Valor em centavos da compra.
     * @apiParam {Number} parcelas Quantidade de parcelas para o pagamento.
     * @apiParam {String} cod_loja Código único da loja e-commerce. Será usado para que a operadora de cartão verifique se a loja é sua cliente. Deve ser uma das opções a seguir: loja-01, loja-02 ou loja-03.
     * 
     * 
     * @apiSuccessExample {JSON} Exemplo Corpo da Requisição:
     * 
     * {
     * "numero_cartao": "1111.2222.3333.4444",
     * "nome_cliente": "USUARIO DA SILVA",
     * "bandeira": "mister",
     * "cod_seguranca": 111,
     * "valor_em_centavos": 500,
     * "parcelas": 12,
     * "cod_loja": "loja-xx"
     * }
     * 
     * 
     * 
     * @apiSuccess (200) {String} resposta Resultado da transação.
     * @apiSuccess (200) {String} nome_cliente Nome do titular do cartão de crédito.
     * @apiSuccess (200) {Number} valor_em_centavos Valor em centavos da compra.
     * @apiSuccess (200) {Number} parcelas Quantidade de parcelas em que o pagamento foi feito.
     * 
     *  @apiSuccessExample {JSON} Exemplo-Resposta-Sucesso:
     *  {
     *      "resposta": "sucesso",
     *      "nome_cliente": "USUARIO DE SOUSA",
     *      "valor_em_centavos": 500,
     *      "parcelas": 12
     *  }
     * 
     * @apiError (401) {String} Resultado da transação.
     * @apiError (401) {String} Detalhes do erro.
     * @apiError (401) {String} Operadora que foi buscado.
     * @apiError (401) {String} Loja de onde partiu a compra.
     * @apiError (401) {String} Bandeira requisitada.
     * @apiError (401) {Integer} Quantidade de parcelas solicitadas.
     * @apiError (401) {Integer} Limite de parcelas da bandeira.
     * 
     * @apiErrorExample {JSON} Resposta-Erro-Operadora-Inexistente:
     * {
     * "resposta": "falha",
     * "detalhes": "Operadora não existe",
     * "operadora": "op-xx"
     * }
     * @apiErrorExample {JSON} Resposta-Erro-Loja-Negada:
     * {
     * "resposta": "falha",
     * "detalhes": "Loja não autorizada",
     * "operadora": "op-xx",
     * "cod-loja": "loja-xx"
     * }
     * @apiErrorExample {JSON} Resposta-Erro-Bandeira-Negada:
     * {
     * "resposta": "falha",
     * "detalhes": "Bandeira não autorizada",
     * "operadora": "op-xx",
     * "bandeira": "mister"
     * }
     * @apiErrorExample {JSON} Resposta-Erro-Parcelas-Não-Aceitas:
     * {
     * "resposta": "falha",
     * "detalhes": "Limite de parcelas ultrapassado",
     * "bandeira": "mister"
     * "parcelas_solicitadas": 00,
     * "limite_parcelas": 00
     * }
     * 
     * */
    public static function postPay(Request $req, Response $res, array $args){
        $json = $req->getParseBody();

        $rules = unserialize(RULES);  
        $ruleValue = null; 
        $reponse = null;    
        $allowerStore = null;
        $allowerBrand = null;
   
    }
} 