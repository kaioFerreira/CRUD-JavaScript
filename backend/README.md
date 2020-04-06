# Um modelo de projeto NodeJS
Repositório voltado para ensinar e disponibilizar um projeto NodeJS pronto para iniciar o desenvolvimento!


## Preparando o Ambiente
Para iniar o desenvolvimento em NodeJS é nescessario tem o pacote node em sua maquina.

Ele pode ser encontrado em [NodeJS](https://nodejs.org/en/), que é basicamente o motor do navegador desacoplado para ser executado fora do navegador.

- Para ter mais controle sobre o Node o instale utilizando um gerenciador de pacote, isso facilita futuras atualizações ou alterações até mesmo a remoção do node de sua maquina.

Oque iremos utilizar sera o Chocolatey.

Para instala-lo basta acessar o tutorial de instalação clicando [aqui](https://chocolatey.org/install).

Já com o chocolatey instalado basta digitar *choco install nodejs-lts* ou *cinst nodejs-lts*.

*O '-lts' é para que a versão instalada seja a LTS a versão mais instavel do Node.*

- O Node possui um gerenciador de pacotes proprio que é o **npm** que é utilizado para a instalação de pacotes dentro da nossa aplicação.

Pronto!!!
Agora com o ambiente configurado basta baixar esse repositorio e desenvolver a sua aplicação.

## Pacotes Instalados
- Express, nodemon e Cors.

### Observações
Esse projeto já popssui o nodemon instalado.

- O Nodemon é um utilitário que monitora qualquer alteração na sua fonte e reinicia automaticamente o servidor. Perfeito para o desenvolvimento. Instale-o usando o "npm install nodemon -D".

- Todo paccote instalado usando o '-D' é um pacote classificado como *devDependencies* e não sera utilizado quando fizer o deploy para produção.

- E para facilitar o seu uso, abra o _package.json_ e insira dentro da chave *scripts* **"start": "nodemon index.js"**

"scripts": {<br/>
     "start": "nodemon index.js"<br/>
 }
  
Após isso basta dentro da raiz do projeto executar o comando *npm start* ou *yarn start* caso utilize o yarn como gerenciador de pacotes.

E o seu servidor a cada alteração no projeto salva ele reiniciara e já estara com as atualizações funcionando.
