---

title: Criando uma Notícia
description: Aprendendo a criar uma Notícia dentro do strapi
sidebar_position: 1

---

Como o processo é o mesmo para criar qualquer conteúdo, siga o tutorial de [Criando um Conteúdo](/docs/strapi/iniciando-gerenciamento#criando-conteúdo).

## Campos

Para criar uma notícia é bem simples, existem campos obrigatórios(marcado com "*") e opcionais, entre eles estão:

1. [__banner__](#banner)*
2. [__slug__](#slug)*
3. [__titulo__](#titulo)*
4. [__descricao__](#descricao)*
5. [__conteudo__](#conteudo)*
6. [__tags__](#tags)
7. [__areas_tematicas__](#areas_tematicas)
8. [__programas__](#programas)

### banner*

Essa imagem será utilizada na listagem de notícias para uma fácil visualização para o usuário que estiver pesquisando por alguma notícia e também na própria página da notícia.

### slug*

Caso você não esteja familiarizado com _slugs_, essa palavra pode ser um pouco estranha, mas o slug serve como um identificador para a página que seja conciso e mais legível por uma pessoa.

Para gerar um slug a partir de um texto, você pode usar [esse site](https://slugify.online/) no qual converte textos para formatação de slug.

![Alt](images/generating-slug.png)

### titulo*

Título para a notícia, aparecerá no começo da página sobre o fundo da cor da área temática escolhida para o notícia.

### descricao*

Descrição para o notícia, aparecerá no começo da página sobre o fundo da cor da área temática escolhida para o notícia.

### conteudo*

Conteúdo a ser renderizado na página.

### tags

As tags são textos pequenos que relacionam com alguma característica da notícia, útil para futuras filtragens de pesquisas dos usuários.

### areas_tematicas

A partir de qual área temática a notícia se relacionar, ele entrará na divisão correspondente dentro do menu de navegação.

### programas

Programas citados na notícia, útil para futuras filtragens de pesquisas dos usuários e um fluxo mais limpo para o usuário que está explorando a aplicação.
