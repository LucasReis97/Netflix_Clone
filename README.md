# 🎬 Netflix Clone

## Visão Geral do Projeto

Este projeto é um clone da interface do usuário da Netflix, desenvolvido com o objetivo de aprimorar habilidades em desenvolvimento front-end moderno, utilizando as melhores práticas de componentização e gerenciamento de estado. O foco principal é replicar a experiência visual e interativa da plataforma de streaming, oferecendo uma base sólida para futuros desenvolvimentos e aprendizado contínuo.

## 📸 Preview




![image](https://user-images.githubusercontent.com/46829859/156392753-fa798cfd-4566-4cc6-b317-f808da7bd45c.png)
![image](https://user-images.githubusercontent.com/46829859/156392895-d3519bb5-4c05-44be-8a4f-dba88c6c3e8f.png)




## 🚀 Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias e ferramentas:

*   **React.js** com **TypeScript**: A base do desenvolvimento front-end, proporcionando uma estrutura robusta e tipagem estática para maior segurança e manutenibilidade do código.
*   **CSS/Sass**: Utilizado para estilização dos componentes, permitindo a criação de estilos modulares e reutilizáveis, além de facilitar a manutenção do design.
*   **ESLint**: Ferramenta de linting para padronização do código, garantindo a consistência e a qualidade do desenvolvimento, além de auxiliar na identificação de possíveis erros e anti-padrões.
*   **Integração com API de filmes/séries**: Capacidade de integração com APIs externas (como a The Movie Database - TMDB) para buscar e exibir dados de filmes e séries, tornando a aplicação dinâmica e interativa.

## ✨ Funcionalidades

As principais funcionalidades implementadas neste clone da Netflix incluem:

*   **Página inicial com design inspirado na Netflix**: Uma interface de usuário que replica o layout e a estética da página inicial da Netflix, proporcionando uma experiência familiar ao usuário.
*   **Carrosséis de filmes/séries por categoria**: Organização de conteúdo em carrosséis dinâmicos, permitindo a navegação por diferentes categorias de filmes e séries.
*   **Banner de destaque**: Um banner proeminente na parte superior da página, exibindo um título em destaque com informações relevantes.
*   **Modal para exibir detalhes de títulos**: Um componente modal que aparece ao clicar em um título, mostrando informações detalhadas sobre o filme ou série selecionado.
*   **Layout responsivo (desktop/tablet/mobile)**: A aplicação é totalmente responsiva, adaptando-se a diferentes tamanhos de tela e dispositivos, garantindo uma experiência de usuário consistente em qualquer plataforma.




## 📂 Estrutura do Projeto

A estrutura de pastas e arquivos do projeto é organizada de forma a facilitar a manutenção e a escalabilidade. Abaixo, uma visão geral dos diretórios e seus propósitos:

```
Netflix_Clone/
├── public/                  # Arquivos estáticos e o HTML principal
├── src/                     # Código fonte da aplicação
│   ├── assets/              # Imagens, ícones e outros recursos estáticos
│   ├── components/          # Componentes reutilizáveis da UI
│   ├── pages/               # Páginas principais da aplicação
│   ├── services/            # Lógica de integração com APIs externas
│   ├── styles/              # Estilos globais e variáveis CSS/Sass
│   ├── App.tsx              # Componente raiz da aplicação
│   ├── index.tsx            # Ponto de entrada da aplicação React
│   └── react-app-env.d.ts   # Definições de tipo para o ambiente React
├── .env-example             # Exemplo de arquivo de variáveis de ambiente
├── .eslintrc.js             # Configuração do ESLint
├── .gitignore               # Arquivos e pastas a serem ignorados pelo Git
├── package.json             # Metadados do projeto e dependências
├── tsconfig.json            # Configuração do TypeScript
├── yarn.lock                # Bloqueio de dependências do Yarn
└── README.md                # Este arquivo README
```




## ⚙️ Instalação

Para configurar e executar o projeto em sua máquina local, siga os passos abaixo:

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/LucasReis97/Netflix_Clone.git
    ```

2.  **Navegue até o diretório do projeto:**

    ```bash
    cd Netflix_Clone
    ```

3.  **Instale as dependências:**

    Utilize o Yarn para instalar todas as dependências do projeto. Se você não tiver o Yarn instalado, pode instalá-lo globalmente com `npm install -g yarn`.

    ```bash
    yarn install
    ```

4.  **Configure as variáveis de ambiente:**

    Crie um arquivo `.env` na raiz do projeto, baseado no `.env-example`, e adicione suas chaves de API (por exemplo, para a TMDB).

    ```
    REACT_APP_TMDB_API_KEY=sua_chave_de_api_aqui
    ```

5.  **Inicie o servidor de desenvolvimento:**

    ```bash
    yarn start
    ```

    O aplicativo será aberto automaticamente no seu navegador padrão em `http://localhost:3000`.

## 🚀 Uso

Após a instalação e inicialização do projeto, você pode interagir com a aplicação da seguinte forma:

*   **Navegação:** Explore os carrosséis de filmes e séries por categoria.
*   **Detalhes do Título:** Clique em um filme ou série para abrir um modal com informações detalhadas.
*   **Responsividade:** Redimensione a janela do navegador para testar o layout responsivo em diferentes tamanhos de tela.




## 🤝 Contribuição

Contribuições são sempre bem-vindas! Se você deseja contribuir com este projeto, por favor, siga estas diretrizes:

1.  **Fork** o repositório.
2.  Crie uma **branch** para sua feature (`git checkout -b feature/MinhaNovaFeature`).
3.  Faça suas **alterações** e **commit**-as (`git commit -m 'feat: Adiciona nova feature'`).
4.  Envie suas alterações para o **remote** (`git push origin feature/MinhaNovaFeature`).
5.  Abra um **Pull Request** detalhando suas mudanças.

Certifique-se de que seu código siga as boas práticas e que todos os testes (se houver) passem.

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.
