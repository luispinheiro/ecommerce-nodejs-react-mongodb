## Sistema Ecommerce utilizando as tecnologias NodeJS, react e mongodb

![Badge](https://img.shields.io/badge/Blog-Lespit-%237159c1?style=for-the-badge&logo=ghost)

O termo e-commerce é a comercialização de produtos e serviços pela internet, onde as transações são realizadas via dispositivos eletrônicos, como computadores e smartphones.

Esse tipo de comércio pode contar com diversos canais de vendas. O mais conhecido é a loja virtual. Porém, também temos outros, como marketplaces, vendas nas redes sociais e até vendas por e-mail marketing.

Embora seja uma ferramenta popular nos dias de hoje, muitas pessoas, blogs e até a imprensa ainda não sabem a definição correta e tratam o termo e-commerce como sinônimo de loja virtual. Isso já se provou ser um grande equívoco, tendo em vista que uma coisa não é a mesma que a outra.

É válido frisar que a expressão e-commerce se diferencia do termo “loja virtual”, uma vez que o segundo conceito se refere ao website em que os clientes adquirem os produtos, ou seja, é um dos canais do e-commerce. No entanto, existem outros, como citado anteriormente.

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
     <li>
       <a href="#planning">Planning</a>
    </li>
     <li>
        <a href="#modelagem-das-classes-de-dominio">Modelagem das classes de dominio</a>        </li>
    <li>
      <a href="#instalalling-visual-studio-build-tools">Installing Visual Studio Build Tools</a>
    </li>
    <li>
      <a href="#installation-of-dependencies">Installation of dependencies</a>
    </li>
    <li>
      <a href="#api-user">API-User</a>
    </li>
    <li>
      <a href="#user-test">User test</a>
    </li>
    <li>
      <a href="#contact">Contact</a>
    </li>
  </ol>
</details>


## About The Project
Obviamente, nenhum modelo atenderá a todos os projetos, pois suas necessidades podem ser diferentes. Portanto, estarei adicionando mais em um futuro próximo. Você também pode sugerir alterações bifurcando este repositório e criando uma solicitação pull ou abrindo um problema. Obrigado a todas as pessoas que contribuíram para expandir este modelo!

## Getting Started
  Instalação do NodeJS 
  https://nodejs.org/en/ 

Instalação do Mongodb   
 https://www.mongodb.com/try/download/community 

 ![image](https://user-images.githubusercontent.com/3227100/113346746-a1e49400-930a-11eb-84c5-cee33ba3b795.png)

 ![image](https://user-images.githubusercontent.com/3227100/113346785-af018300-930a-11eb-90f2-c9758e2eb6aa.png)

Acessar a pasta 

> C:\Program Files\MongoDB\Server\4.4\bin 

 ![image](https://user-images.githubusercontent.com/3227100/113346893-d0fb0580-930a-11eb-98e5-7e1da71e0dcb.png)

 criar variáveis de ambiente

 ![image](https://user-images.githubusercontent.com/3227100/113348979-b7a78880-930d-11eb-9a1d-859a4d7ac5f8.png)

 Testar o banco de dados

 ![image](https://user-images.githubusercontent.com/3227100/113347105-10c1ed00-930b-11eb-8ee1-c56c97d93daf.png)

## Planning

### Casos de uso do sistema:

### Administrador
Ter acesso a todos os pedidos feitos dentro da loja
Conseguir alterar o status de pedidos e avisar os clientes dessa alteração pelo e-mail
Conseguir colocar o código de rastreamento do pedido do cliente
Conseguir cancelar o pedido do cliente e avisar os clientes dessa alteração pelo e-mail
Ter acesso a todos os clientes que já pediram na loja
Pesquisar por nome ou telefone na listagem de clientes
Conseguir alterar os dados ou remover um cliente da loja
Ter acesso a todos os pedidos feitos por um cliente especifico
Ter acesso a uma lista com todos os produtos que estão disponíveis e indisponíveis
também
Conseguir alterar os dados de um produto – disponibilidade, preço, detalhes e variações
Conseguir adicionar fotos para um produto especifico
Conseguir excluir produtos do sistema
Ter acesso a uma lista com todas as categorias que estão disponíveis e indisponíveis
também
Conseguir alterar os dados de uma categoria, deixar indisponível e excluir a categoria
Ter acesso a uma lista com as variações de um determinado produto
Conseguir deixar indisponível determinada variação
Conseguir enviar fotos exclusivas para uma variação
Conseguir alterar os dados da variação – colocar desconto, alterar preço base
Ter acesso a uma lista com todas as avaliações de um determinado produto
Conseguir excluir as avaliações
Conseguir alterar os próprios dados de usuário
Curso de Ecommerce com NodeJS e React
Conseguir fazer login como administrador no site
Conseguir recuperar a senha do seu cadastro direto pelo e-mail
Conseguir alterar os dados relacionados a loja
Alterar dados de telefone, alterar e-mail e endereço

### Cliente
Consegue deixar avaliações em produtos
Fechar um pedido completo com meio de pagamento
Realizar o pagamento diretamente pela loja
Utilizando cartão de credito ou boleto
Ver todos os pedidos que fez no seu nome
Ver os detalhes de um pedido feito – pagamento, entrega, dados da loja
Conseguir cancelar o seu pedido
Alterar seus dados pessoais e de entrega online

### Visitante
Ver todas as categorias disponíveis no site
Ver todos os produtos de uma determinada categoria
Ver todos os detalhes de um determinado produto
Ver cada variação disponível para determinado produto
Ver avaliações deixadas para produto selecionado
Ver valores e descontos para cada produto na listagem
Conseguir pesquisar um produto pelo nome, descrição ou categoria
Ver uma lista com vários produtos sortidos
Conseguir alterar a ordem dos produtos – ordem alfabética, ordem de preço, ordem
aleatória
Conseguir calcular o valor de entrega de determinado produto e do carrinho completo
Conseguir também se cadastrar no sistema – fazer login, se cadastrar
Ver as paginas institucionais da loja
    
## Modelagem das classes de dominio

![image](https://user-images.githubusercontent.com/3227100/113349807-fa1d9500-930e-11eb-8410-1d635ee3c7f9.png)

    
## Instalacao do Visual Studio Build Tools

Com a instalação do comando abaixo conseguimos instalar todos os pacotes, Iniciar o PowerShell como administrador e executar 

```
npm install --global --production windows-build-tools 
```

![image](https://user-images.githubusercontent.com/3227100/113348241-bd509e80-930c-11eb-9167-926bf823643b.png)
    

### Criando arquivos de configuração

![image](https://user-images.githubusercontent.com/3227100/113352790-220ef780-9313-11eb-8a93-b8a2d913b9ad.png)
 

### Criando a configuração base de rotas

![image](https://user-images.githubusercontent.com/3227100/113356464-a57f1780-9318-11eb-91b1-dee0dfc7f164.png)


### Instalação do package.json 

```
npm init 
```

![image](https://user-images.githubusercontent.com/3227100/113348003-6d71d780-930c-11eb-8b71-e15b93464026.png)


## Installation of dependencies

```
npm install --save express@4.16.4 body-parser@1.18.3 compression@1.7.3 cors@2.8.5 crypto@1.0.1 ejs@2.6.1 express-jwt@5.3.1 faker@4.1.0 jsonwebtoken@8.4.0 moment@2.23 mongoose@5.4.0 mongoose-paginate@5.0.3 mongoose-unique-validator@2.0.2 morgan@1.9.1 multer@1.4.1 node-pagseguro@0.1.9 nodemailer@4.7.0 request@2.88.0 xml2js@0.4.19 
```

![image](https://user-images.githubusercontent.com/3227100/113348757-66979480-930d-11eb-90be-bfc2a7e9600b.png)


## API-User
Criando Views para recuperar senha:
 
![image](https://user-images.githubusercontent.com/3227100/113344834-fd615280-9307-11eb-9aac-61728b15345e.png)
  

## User test
Testando os métodos de requisição:
 ![image](https://user-images.githubusercontent.com/3227100/122697546-ed2c8580-d21b-11eb-88c6-2b1160caee2a.png)
 
 Gerando o Token através do login:
 ![image](https://user-images.githubusercontent.com/3227100/122706362-2c63d200-d22e-11eb-9409-45acf68882fb.png)

<!-- CONTACT -->
## Contact

Your Name - [@your_Facebook](https://www.facebook.com/profile.php?id=100000984298993) - lepinheiro100@terra.com.br

Project Link: [https://github.com/luispinheiro](https://github.com/luispinheiro)

