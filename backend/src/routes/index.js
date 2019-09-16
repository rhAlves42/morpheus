const express = require('express')
const router = express.Router()
const fs = require('fs')

router.get('/names', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  const file = fs.readFileSync('nomes.txt', 'utf8')
  const names = file.split('\n')
  res.status(200).json(names)
})
router.post('/names', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  const file = fs.readFileSync('nomes.txt', 'utf8')
  let names = file.split('\n')
  let name = req.body.name
  if (name == '') {
    res.status(400).send({message: "Campo nome não pode estar vazio"})
  }
  names.concat(names)
  res.status(200).send({message: "Nome cadastrado com sucesso!"})
})
module.exports = router
