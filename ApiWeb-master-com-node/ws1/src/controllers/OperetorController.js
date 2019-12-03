"use strict"

const Opereter = require('../config/constants.json')
const ws2 = require('../config/services/ws2')


module.exports = {
  async testOperetor(req, res) {
    try {
      const {
        operador   ,
        brand      ,
        store      ,
        codBrand   ,
        codSecurity,
        value      ,
        parcela      ,
      } = req.body
      console.log('sinal de vida 1')

      if (!Opereter.hasOwnProperty(operador)) {
        return res.status(401).json({
          resposta  : "falha",
          detalhes  : "Operadora não existe",
          operadora : operador
        })
      } else if (!Opereter[operador].bandeirasAutorizadas.hasOwnProperty(brand)) {
        return res.status(401).json({
          resposta  : "falha",
          detalhes  : "Bandeira não autorizada",
          operadora : operador,
          bandeira  : brand
        })
      } else if (!Opereter[operador].lojasAutorizadas.hasOwnProperty(store)) {
        return res.status(401).json({
          resposta  : "falha",
          detalhes  : "Loja não autorizada",
          operadora : operador,
          codLoja   : store
        })
      }

      const response = await ws2.post('/ws-brands/v1/pay', {
        codBrand   ,
        brand      ,
        codSecurity,
        value      ,
        parcela      ,
        operador   ,
        store      ,
      })

      
      return res.status(200).json(response.data)

    } catch (error) {
      return res.status(400).json({ message: `this is the error ${error}` })
    }
  },

  async status(req, res) {
    try {
      return res.status(200).json({
        status: 'Oia parece que deu certo WS1'
      })
    } catch (error) {
      return res.status(400).json({ message: `this is the error ${error}` })
    }
  }
}

