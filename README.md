<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Project

## Descrição do Projeto
<p align="center"> O projeto envolveu a construção de um sistema completo de CRUD (Create, Read, Update, Delete) para o gerenciamento de usuários. Este sistema foi projetado para fornecer uma interface intuitiva e responsiva, onde administradores podem adicionar, visualizar, editar e excluir usuários, com validações rigorosas tanto no frontend quanto no backend.</p>

## Arquitetura e Tecnologias Utilizadas:

### Backend:

<p align="center">
Laravel: O framework principal foi utilizado para lidar com a lógica do servidor e a manipulação de dados, além de garantir uma separação clara de responsabilidades com o padrão MVC.</br>
Modelos: Os modelos foram utilizados para representar as entidades do banco de dados e para manipular a lógica de negócios associada a cada operação CRUD.</br>
Controllers: Controladores foram criados para tratar as requisições HTTP, organizar as operações CRUD, e interagir diretamente com as views e os modelos.</br>
Validações: As validações de entrada de dados foram implementadas tanto no frontend quanto no backend, assegurando que os dados enviados fossem validados corretamente antes de serem persistidos no banco de dados.</br>
Autenticação e Autorização: Foi implementado um sistema de autenticação para garantir que apenas usuários autorizados pudessem acessar as funções administrativas do sistema.</br>
</p>

### Frontend:

<p align="center">
Blade/HTML com JavaScript: No frontend, foram implementadas views com Blade (ou HTML simples, conforme o framework utilizado) para renderizar as páginas e JavaScript para adicionar interatividade, como manipulação dinâmica de tabelas e modais.</br>
DataTables: Para a exibição dos dados dos usuários, foi utilizado o plugin DataTables para criar uma tabela dinâmica com paginação, ordenação e busca de usuários em tempo real.</br>
Bootstrap 5: O layout foi desenvolvido com Bootstrap 5, garantindo uma interface responsiva e amigável. Modais foram usados para criar formulários de inserção e edição, proporcionando uma experiência fluida ao usuário.</br>
</p>

### Banco de Dados:

<p align="center">
MySQL: O sistema foi integrado a um banco de dados relacional para armazenar as informações dos usuários, utilizando consultas otimizadas para a manipulação dos dados.</br>
Migrações e Seeds: Foram utilizadas migrações para versionamento da estrutura do banco de dados, facilitando a manutenção e evolução do projeto. Além disso, foram criados seeds para gerar dados de teste durante o desenvolvimento.</br>
</p>

### Validações e Segurança:

<p align="center">
As validações no backend foram desenvolvidas utilizando as regras nativas do framework, garantindo que dados como e-mail, nome e data fossem inseridos corretamente.</br>
O sistema foi projetado com atenção especial à segurança, implementando proteção contra CSRF, SQL Injection, e controle de acesso para garantir que apenas usuários autenticados pudessem acessar e manipular os dados.</br>
</p>

## Destaques do Projeto:
<p align="center">
Responsividade: Todo o sistema foi projetado com foco na responsividade, utilizando CSS e componentes do Bootstrap, para garantir uma ótima experiência do usuário em diferentes dispositivos, incluindo desktops, tablets e smartphones.</br>
Validação Avançada: Foram implementadas mensagens de validação customizadas para facilitar o uso do sistema, informando os erros de entrada de forma clara e objetiva.</br>
Experiência do Usuário (UX): Através de modais com uso de SweetAlert2, foi possível criar uma experiência de edição e exclusão de usuários mais interativa e menos intrusiva.</br>
Desempenho e Escalabilidade: Seguindo boas práticas de desenvolvimento, o sistema foi construído de forma a suportar facilmente a adição de novas funcionalidades e escalabilidade do banco de dados.</br>
</p>

## Conclusão
O projeto resultou em um sistema completo, seguro, e eficiente para o gerenciamento de usuários, com uma interface moderna e funcionalidades robustas que permitem uma gestão fácil e rápida de dados.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
