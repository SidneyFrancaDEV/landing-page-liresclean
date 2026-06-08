# LiresClean

Landing page institucional desenvolvida para a **LiresClean**, com foco na divulgação de serviços de higienização de estofados, apresentação de resultados, prova social e conversão de contatos por WhatsApp.

> [!NOTA]
> Parte do conteudo do site, como textos e imagens, podem ainda ser conteudo "template" aguardando pocisionamento do parceiro para atualização.

## Sobre o projeto

Este projeto foi desenvolvido como trabalho final da disciplina de Programação Web do curso de Ciência da Computação do Senac SP e teve como objetivo entregar um produto digital completo para um pequeno negócio, indo além da construção de uma página estática.

A proposta envolveu o alinhamento com o parceiro sobre:

- identidade visual da marca
- escolha de cores e tipografia
- abordagem de comunicação
- objetivo comercial da página
- prototipagem integral antes do desenvolvimento

A estrutura do site foi pensada para destacar os benefícios do serviço, a prova visual de resultado, os depoimentos de clientes e os canais de contato.

O projeto também foi pensado para ser mantido integralmente pelo parceiro no futuro, portante foi utilizado um CMS para garantir a facil atualização de informações essenciais e demais itens relevantes.

## Identidade visual

O direcionamento visual do projeto buscou transmitir limpeza, confiança, cuidado e profissionalismo.

### Tipografia

- `Merriweather`: utilizada nos títulos e pontos de destaque.
- `Public Sans`: utilizada no corpo do conteúdo.

### Paleta de cores

- `#259EAB`: cor principal da marca, usada em destaques e elementos de identidade
- `#07353F`: tom escuro principal, aplicado em seções de contraste
- `#F7FBFC`: fundo claro da interface

## Funcionalidades

- seção principal com proposta de valor e chamada para orçamento
- botões de contato integrados ao WhatsApp
- carrossel de resultados com imagens de antes e depois
- carrossel de depoimentos
- FAQ com expansão por clique
- seção de contato com dados da empresa
- conteúdo carregado dinamicamente a partir de arquivos `JSON`
- estrutura preparada para edição via painel administrativo

## Tecnologias utilizadas

Buscamos aplicar uma stack simples e competente, que fosse principalmente facil de manipular.
Portanto não foram utilizados frameworks ou bibliotecas complexas.

- `HTML5`
- `CSS3`
- `JavaScript`
- `Bootstrap 5`: foi o principal motor de responsividade, estilização e componenetes prontos, usado extensivamente no projeto.
- `Bootstrap Icons`: biblioteca de ícones usada.
- `Swiper.js`: biblioteca usada para montar os carrosseis de resultados e depoimentos.
- `AOS`: biblioteca de animação aplicada nas entradas visuais ao rolar a página.
- `Decap CMS`: painel de gerenciamento de conteúdo usado para editar textos, imagens e blocos do site.
- `Netlify`: plataforma de deploy e hospedagem da aplicação.
- `Netlify Identity`: autenticação usada para liberar acesso ao painel administrativo.
- `Git`: git foi utilizado para versionamento e colaboração.

## Deploy e CMS

O projeto foi estruturado para funcionar com deploy na **Netlify**, aproveitando o Netlify Identity para autenticação no centro de admin e integração entre Git Gateway + DecapCMS para alterações cms direto no repositorio Git.

Portanto:

- o painel administrativo fica disponível em `admin/`
- o `Decap CMS` faz a edição dos conteúdos
- o `Netlify Identity` cuida da autenticação de usuários do painel
- o `git-gateway`, configurado em `admin/config.yml` e no Netlify, permite integrar as alterações do CMS ao repositório

Na prática, isso permite editar hero, contatos, depoimentos, FAQ e resultados por interface administrativa, sem necessidade de alterar o codigo manualmente.

## Estrutura do projeto

```text
landing-page-liresclean/
|-- index.html
|-- README.md
|-- admin/
|   |-- index.html
|   |-- config.yml
|-- assets/
|   |-- css/
|   |   |-- base.css
|   |-- js/
|   |   |-- base.js
|   |   |-- content.js
|   |-- images/
|       |-- favicon/
|       |-- uploads/
|-- content/
|   |-- hero.json
|   |-- contatos.json
|   |-- depoimentos.json
|   |-- faq.json
|   |-- resultados.json
```

## Conteúdo dinâmico

Os dados exibidos na página são carregados da pasta `content/`, o que facilita manutenção e atualização:

- `hero.json`: título, descrição e imagem principal
- `contatos.json`: WhatsApp, e-mail, telefone e horário
- `depoimentos.json`: depoimentos exibidos no carrossel
- `faq.json`: perguntas e respostas
- `resultados.json`: imagens da seção de antes e depois

## Como executar

O projeto pode ser aberto diretamente pelo arquivo `index.html`, mas o recomendado é executá-lo em um servidor local, já que parte do conteúdo é carregada via `fetch` a partir de arquivos `JSON`.

Uma opção simples é usar o `Live Server` no VS Code.

Se a intenção for testar também o painel administrativo localmente, além do servidor da aplicação é possível iniciar o CMS com:

```bash
npx decap-server
```

Nesse caso, o `Node.js` precisa estar instalado no computador.

## Responsividade

A interface foi construída numa abordagem "mobile-first" pois entendemos que a maior parte do acesso se dará via dispostivos moveis. Para responsivida foi utilizado o Bootstrap e CSS próprio.

## Uso de Inteligência Artificial
A maior parte do projeto foi estruturada com base em exemplos e e snippets de documentação, sendo a IA na maior parte utilizada para consulta e apoio.

Além disso, este `README` também foi refinado com apoio do ChatGPT.

## Integrantes

- Sidney França 
- Vinicius de Souza

## Link do projeto

`Link do projeto hospedado: https://liresclean.netlify.app/`
