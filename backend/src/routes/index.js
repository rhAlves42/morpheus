const express = require('express')
const router = express.Router()
const cors = require('cors')
const fs = require('fs')


function writeFile(name) {
  fs.appendFileSync('nomes.txt', name, 'utf8');
}

router.get('/names/', cors(), (req, res, next) => {
  const file = fs.readFileSync('nomes.txt', 'utf8')
  const names = file.split('\n')
  res.status(200).json(names)
})
router.post('/names/', cors(), (req, res, next) => {
  let nameRequest = req.body.nome.name
  if (nameRequest == '') {
    return res.status(400).send({
      message: "Campo não pode estar vazio"
    });
  }
  let name = nameRequest + '\n'
  try {
    writeFile(name)
    return res.status(200).send({message: "Dados cadastrados com sucesso!"});
  } catch (err) {
    return res.status(500).send({message: "Não foiu possivel inserir os dados!" + err});
  }
})
module.exports = router
