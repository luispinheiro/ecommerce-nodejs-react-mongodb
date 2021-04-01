# ecommerce-nodejs-react-mongodb
Sistema Ecommerce utilizando as tecnologias NodeJS, react e mongodb

Instalação das ferramentas:
  Instalação do NodeJS 
    https://nodejs.org/en/ 

Instalação do Mongodb 
  https://www.mongodb.com/try/download/community 

  ![image](https://user-images.githubusercontent.com/3227100/113346746-a1e49400-930a-11eb-84c5-cee33ba3b795.png)
  ![image](https://user-images.githubusercontent.com/3227100/113346785-af018300-930a-11eb-90f2-c9758e2eb6aa.png)

  Acessar a pasta C:\Program Files\MongoDB\Server\4.4\bin 
  ![image](https://user-images.githubusercontent.com/3227100/113346893-d0fb0580-930a-11eb-98e5-7e1da71e0dcb.png)

  criar variáveis de ambiente
  ![image](https://user-images.githubusercontent.com/3227100/113346965-e6702f80-930a-11eb-9415-8c510f6f12ac.png)
  
  Testar o banco de dados
  ![image](https://user-images.githubusercontent.com/3227100/113347105-10c1ed00-930b-11eb-8ee1-c56c97d93daf.png)

  Instalação do Visual Studio Build Tools para instalar todos os pacotes, Iniciar o PowerShell como administrador e executar 

  npm install --global --production windows-build-tools 
  
  ![image](https://user-images.githubusercontent.com/3227100/113347391-7dd58280-930b-11eb-84e2-92e0a140745f.png)

  
Planejamento
  Casos de uso do sistema:
    Administrador
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
    
    Cliente
    Consegue deixar avaliações em produtos
    Fechar um pedido completo com meio de pagamento
    Realizar o pagamento diretamente pela loja
    Utilizando cartão de credito ou boleto
    Ver todos os pedidos que fez no seu nome
    Ver os detalhes de um pedido feito – pagamento, entrega, dados da loja
    Conseguir cancelar o seu pedido
    Alterar seus dados pessoais e de entrega online
    
    Visitante
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

API - Usuário
  Criando Views para recuperar senha:
    ![image](https://user-images.githubusercontent.com/3227100/113344834-fd615280-9307-11eb-9aac-61728b15345e.png)