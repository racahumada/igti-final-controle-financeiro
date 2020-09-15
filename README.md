[![Contributors][contributors-shield]][contributors-url] [![Forks][forks-shield]][forks-url] [![Stargazers][stars-shield]][stars-url] [![Issues][issues-shield]][issues-url] [![MIT License][license-shield]][license-url] [![LinkedIn][linkedin-shield]][linkedin-url]
<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">Desafio Final - Controle Financeiro Pessoal</h3>

  <p align="center">
    <br />
    <a href="https://github.com/racahumada/igti-final-controle-financeiro"><strong>Explore os Códigos</strong></a>
    <br />
    <br />
    <!-- <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a> | -->
    <a href="https://github.com/racahumada/igti-final-controle-financeiro/issues">Reportar Bug</a> |
    <a href="https://github.com/racahumada/igti-final-controle-financeiro/issues">Solicitar Feature</a>
  </p>
</p>

<!-- Índice -->

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
  - [Desenvolvido com](#desenvolvido-com)
- [Começando](#Começando)
  <!--- [Prerequisites](#prerequisites)-->
  - [Instalação](#instalação)
- [Modo de Uso](#modo-de-uso)
- [Roteiro](#roteiro)
- [Contribuição](#contribuição)
- [Contato](#contato)
<!-- - [License](#license) -->
<!-- - [Acknowledgements](#acknowledgements) -->

<!-- SOBRE O PROJETO -->

## Sobre o Projeto
<p>
  Neste repositório você encontra a <strong>API (na raiz do repositório)</strong> e <strong>APP (na pasta "/cliente")</strong>. <br />
  Na <strong>API</strong> é feito o gerenciamento (CRUD) dos dados, de receitas e despesas, no MongoDB, dos dados financeiros vindos do <strong>APP</strong>. <br />
  No <strong>APP</strong> são disponibilizadas as telas visualizar as receitas e despesas, ele tem um filtro inicial por período de ano/mês <strong>atual</strong> (yyyy-mm), dentro desse período também é possível pesquisar pela descrição. Além de poder fazer a criação e edição dos dados e exclusão de informações.
</p>
<p align="center">
  <img src="./images/tela-1-%5Bvazia%5D.jpg" alt="Tela Inicial" />
</p>



### Linguagens, Frameworks e Bibliotecas

#### API
- Javascript
- [NodeJs](https://nodejs.org/en/)
- [Express](http://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [MongoDB](https://www.mongodb.com/)

#### APP
- [ReactJS](https://pt-br.reactjs.org/)
- [Materialize](https://materializecss.com/)
- [Axios](https://github.com/axios/axios)

<!-- GETTING STARTED -->
## Começando

To get a local copy up and running follow these simple steps.
<!-- 
### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
```sh
npm install npm@latest -g
```
-->
### Instalação

1. Clonar o repositório
```sh
git clone https://github.com/racahumada/igti-React-Juros-Compostos
```
2. Instalar Pacotes
```sh
yarn install
```
3. Executar App
```sh
yarn start
```
Para rodar em modo de desenvolvimento.<br />
Abrir [http://localhost:3000](http://localhost:3000) para visualizar no navegador

<!-- MODO DE USO -->
## Modo de Uso
<p>
  Campos Disponíveis <br />
  <strong>Capital Inicial</strong> - Neste campo digite o valor a ser calculado;<br />
  <strong>Taxa de Juros Mensal</strong> - Neste campo a taxa de juros base;<br />
  <strong>Período (Mensal)</strong> - Neste campo digitar o período de investimento do valor
</p>
<p align="center">
  Exemplo 1 - Cálculo a juros negativo <br />
  <img src="./images/tela-2-%5Bjuros-negativo%5D.jpg" alt="Juros Negativo" />
</p>
<p align="center">
  Exemplo 2 - Cálculo a juros positivo <br />
  <img src="./images/tela-3-%5Bjuros-positivo%5D.jpg" alt="Juros Positivo" />
</p>
<p align="center">
  Exemplo 3 - Responsividade <br />
  <img src="./images/tela-4-%5Bresponsivo%5D.jpg" alt="Design Responsivo" />
</p>

<!-- _For more examples, please refer to the [Documentation](https://example.com)_ -->

<!-- ROTEIRO -->
## Roteiro

Consulte os [problemas abertos](https://github.com/racahumada/igti-React-Juros-Compostos/issues) para obter uma lista de recursos propostos (e problemas conhecidos).

<!-- CONTRIBUIÇÃO -->
## Contribuição

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
<!-- ## License

Distributed under the MIT License. See `LICENSE` for more information. -->

<!-- CONTATO -->
## Contato

Ricardo Castro - [LinkedIn Perfil](https://www.linkedin.com/in/ricardo-castro-ahumada/) - ricardocastro.ti@gmail.com

Project Link: [https://github.com/racahumada/igti-React-Juros-Compostos](https://github.com/racahumada/igti-React-Juros-Compostos)

<!-- ACKNOWLEDGEMENTS -->
<!-- ## Acknowledgements

* []()
* []()
* []()

--> 
[contributors-shield]: https://img.shields.io/github/contributors/racahumada/igti-React-Juros-Compostos.svg?style=flat-square
[contributors-url]: https://github.com/racahumada/igti-React-Juros-Compostos/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/racahumada/igti-React-Juros-Compostos.svg?style=flat-square
[forks-url]: https://github.com/racahumada/igti-React-Juros-Compostos/network/members
[stars-shield]: https://img.shields.io/github/stars/racahumada/igti-React-Juros-Compostos.svg?style=flat-square
[stars-url]: https://github.com/racahumada/igti-React-Juros-Compostos/stargazers
[issues-shield]: https://img.shields.io/github/issues/racahumada/igti-React-Juros-Compostos.svg?style=flat-square
[issues-url]: https://github.com/racahumada/igti-React-Juros-Compostos/issues
[license-shield]: https://img.shields.io/github/license/racahumada/igti-React-Juros-Compostos.svg?style=flat-square
[license-url]: https://github.com/racahumada/igti-React-Juros-Compostos/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/ricardo-castro-ahumada/
