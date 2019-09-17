# Projeto Morpheus
  Projeto feito em nodejs & reactjs com o fundamento de ler e inserir dados apartir de um aquivo ".txt"

## Instalação
  **Nessa instalação estou levando em conta que você já tenha o nodejs e o reactjs
  instalados em seu computador.**

  Depois de clonar o projeto, em sua maquina entre na pasta backend/src e
  rode o comando ``` npm install ```
  para instalar os pacotes necessários o funcionamento do backend;

  Após, entre na pasta frontend/gui/src via terminal e rode comando ``` npm install ```
  para a instalação do pacotes necessários para o funcionamento do frontend

  Para rodar o projeto no seu localhost, via terminal acesse a pasta backend/src e rode o comando ``` nodemon start ``` (estamos usando o nodemon para cuidar das atualizações no codigo)
  após, em outra aba no terminal entre na pasta frontend/gui rode o comando ``` npm start ```

  Pronto a aplicação já está rodando, o backend no seu [localhost](http://localhost:3300/names) onde aparecerá a lista de nomes que estao no arquivo "nomes.txt"
  e o frontend está disponível em [localhost](http://localhost:3000/) onde você terá a interface de adicionar novo nome e a litagem dos que ja existem.

### OBS
  Para deixar o projeto mais completo ainda será necessário desenvolver algumas features,
  entre elas:
  - re-render-list: Onde a lista será atualizada de acordo com a inserção de dados, não sendo mais
    necessário a atualização da página para atuliar a lista.
  - fade-out-message: Onde a mensagem de suceeso ou falha da inserção ira aparecer somente por um instante
    para fins de notificação do usuário
