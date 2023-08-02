---

title: Criando um Programa
description: Aprendendo a criar um programa dentro do strapi
sidebar_position: 1

---

Como o processo é o mesmo para criar qualquer conteúdo, siga o tutorial de [Criando um Conteúdo](/docs/strapi/iniciando-gerenciamento#criando-conteúdo).

## Campos

Para criar um programa é bem simples, existem campos obrigatórios(marcado com "*") e opcionais, entre eles estão:

1. [__banner__](#banner)*
2. [__slug__](#slug)*
3. [__areas_tematicas__](#areas_tematicas) 
4. [__tags__](#tags)
5. [__titulo__](#titulo)*
6. [__descricao__](#descricao)*
7. [__conteudo__](#conteudo)*
8. [__documentos__](#documentos)
9. [__eventos__ ](#eventos)
10. [__legislacoes__](#legislacoes)
11. [__noticias__](#noticias)
12. [__mapa_destaque__ ](#mapa_destaque)
13. [__outros_mapas__ ](#outros_mapas)

### banner*

Essa imagem será utilizada na listagem de programas para uma fácil visualização para o usuário que estiver pesquisando por algum programa.

### slug*

Caso você não esteja familiarizado com _slugs_, essa palavra pode ser um pouco estranha, mas o slug serve como um identificador para a página que seja conciso e mais legível por uma pessoa.

Para gerar um slug a partir de um texto, você pode usar [esse site](https://slugify.online/) no qual converte textos para formatação de slug.

![Alt](images/generating-slug.png)


### areas_tematicas

A partir de qual área temática o programa se relacionar, ele entrará na divisão correspondente dentro do menu de navegação. Caso ainda não tenha criado uma Área Temática, crie [por aqui](/docs/strapi/area-tematica/criar)

### tags

As tags são textos pequenos que relacionam com alguma característica do programa, útil para futuras filtragens de pesquisas dos usuários.

### titulo*

Título para o programa, aparecerá no começo da página sobre o fundo da cor da área temática escolhida para o programa.

### descricao*

Descrição para o programa, aparecerá no começo da página sobre o fundo da cor da área temática escolhida para o programa.

### conteudo*

Conteúdo a ser renderizado na página.

### documentos

Documentos que foram mencionados no programa, será útil para possíveis filtros futuros e possibilitar o usuário baixá-los.

### eventos

Eventos no qual o programa foi citado ou está citando, será útil para possíveis filtros futuros e recomendar eventos para os usuários.

### legislacoes

Legislações mencionadas no programa será útil para possíveis filtros futuros .

### noticias

Notícias no qual o programa foi citado ou está citando, será útil para possíveis filtros futuros e recomendar eventos para os usuários.

### mapa_destaque

Mapa que aparecerá em destaque na página do programa.

### outros_mapas

Outros mapas que irão aparecer na página.