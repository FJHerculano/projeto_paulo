define({ "api": [
  {
    "type": "GET",
    "url": "/status",
    "title": "Status da API",
    "version": "1.0.0",
    "description": "<p>Verifica a disponibilidade da API</p>",
    "group": "Recursos_Abertos",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Resultado da disponibilidade do servidor.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    'status': 'Serviço disponível WS1'\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "app/controllers/v1/OperatorController.php",
    "groupTitle": "Recursos_Abertos",
    "name": "GetStatus"
  },
  {
    "type": "POST",
    "url": "/pay/{operator}",
    "title": "executa o pagamento via cartão de credito",
    "description": "<p>Envia a solicitação para pagamento via cartão de credito a operadora de cartão</p>",
    "group": "e_recursos_autenticados",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "operator",
            "description": "<p>Parâmetro da url que corresponde a operadora de cartão desejado. Deve ser uma das opções a seguir: op-01, op-02 ou op-03.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "numero_cartao",
            "description": "<p>Numero do cartão de credito</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nome_cliente",
            "description": "<p>Nome do titular do cartão de crédito.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bandeira",
            "description": "<p>Nome da bandeira segundo opções a seguir: mister (cod.: 1111), vista (cod.:2222) ou daciolo (cod.: 3333).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cod_seguranca",
            "description": "<p>Código de três dígitos.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "valor_em_centavos",
            "description": "<p>Valor em centavos da compra.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "parcelas",
            "description": "<p>Quantidade de parcelas para o pagamento.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cod_loja",
            "description": "<p>Código único da loja e-commerce. Será usado para que a operadora de cartão verifique se a loja é sua cliente. Deve ser uma das opções a seguir: loja-01, loja-02 ou loja-03.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Exemplo Corpo da Requisição: [#parameter-examples-Recursos_Autenticados-PostPayOperator-1_0_0-0]:",
          "content": "\n{\n\"numero_cartao\": \"1111.2222.3333.4444\",\n\"nome_cliente\": \"USUARIO DA SILVA\",\n\"bandeira\": \"mister\",\n\"cod_seguranca\": 111,\n\"valor_em_centavos\": 500,\n\"parcelas\": 12,\n\"cod_loja\": \"loja-xx\"\n}",
          "type": "JSON"
        },
        {
          "title": "Exemplo-Resposta-Sucesso:",
          "content": "{\n    \"resposta\": \"sucesso\",\n    \"nome_cliente\": \"USUARIO DE SOUSA\",\n    \"valor_em_centavos\": 500,\n    \"parcelas\": 12\n}",
          "type": "JSON"
        }
      ],
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "resposta",
            "description": "<p>Resultado da transação.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "nome_cliente",
            "description": "<p>Nome do titular do cartão de crédito.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "valor_em_centavos",
            "description": "<p>Valor em centavos da compra.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "parcelas",
            "description": "<p>Quantidade de parcelas em que o pagamento foi feito.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "Resultado",
            "description": "<p>da transação.</p>"
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "Detalhes",
            "description": "<p>do erro.</p>"
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "Operadora",
            "description": "<p>que foi buscado.</p>"
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "Loja",
            "description": "<p>de onde partiu a compra.</p>"
          },
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "Bandeira",
            "description": "<p>requisitada.</p>"
          },
          {
            "group": "401",
            "type": "Integer",
            "optional": false,
            "field": "Quantidade",
            "description": "<p>de parcelas solicitadas.</p>"
          },
          {
            "group": "401",
            "type": "Integer",
            "optional": false,
            "field": "Limite",
            "description": "<p>de parcelas da bandeira.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Resposta-Erro-Operadora-Inexistente:",
          "content": "{\n\"resposta\": \"falha\",\n\"detalhes\": \"Operadora não existe\",\n\"operadora\": \"op-xx\"\n}",
          "type": "JSON"
        },
        {
          "title": "Resposta-Erro-Loja-Negada:",
          "content": "{\n\"resposta\": \"falha\",\n\"detalhes\": \"Loja não autorizada\",\n\"operadora\": \"op-xx\",\n\"cod-loja\": \"loja-xx\"\n}",
          "type": "JSON"
        },
        {
          "title": "Resposta-Erro-Bandeira-Negada:",
          "content": "{\n\"resposta\": \"falha\",\n\"detalhes\": \"Bandeira não autorizada\",\n\"operadora\": \"op-xx\",\n\"bandeira\": \"mister\"\n}",
          "type": "JSON"
        },
        {
          "title": "Resposta-Erro-Parcelas-Não-Aceitas:",
          "content": "{\n\"resposta\": \"falha\",\n\"detalhes\": \"Limite de parcelas ultrapassado\",\n\"bandeira\": \"mister\"\n\"parcelas_solicitadas\": 00,\n\"limite_parcelas\": 00\n}",
          "type": "JSON"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controllers/v1/OperatorController.php",
    "groupTitle": "e_recursos_autenticados",
    "name": "PostPayOperator"
  }
] });
