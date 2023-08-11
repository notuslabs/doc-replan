---

title: Criando um Instrumento
description: Aprendendo a criar um instrumento dentro do strapi
sidebar_position: 1

---

Como o processo é o mesmo para criar qualquer conteúdo, siga o tutorial de [Criando um Conteúdo](/docs/usuario/strapi/iniciando-gerenciamento#criando-conteúdo).

## Campos

Para criar um instrumento é bem simples, existem campos obrigatórios(marcado com "*") e opcionais, entre eles estão:

1. [__banner__](#banner)*
2. [__slug__](#slug)*
3. [__titulo__](#titulo)*
4. [__descricao__](#descricao)*
5. [__conteudo__](#conteudo)*
6. [__mapa_destaque__](#mapa_destaque)
7. [__outros_mapas__](#outros_mapas)
8. [__tags__](#tags)
9. [__areas_tematicas__](#areas_tematicas)
10. [__eventos__](#eventos)
11. [__documentos__](#documentos)
12. [__legislacoes__](#legislacoes)
13. [__noticias__](#noticias)
14. [__entidades__](#entidades)
15. [__projetos__](#projetos)

### banner*

Essa imagem será utilizada na listagem de instrumentos para uma fácil visualização para o usuário que estiver pesquisando por algum instrumento.

### slug*

Caso você não esteja familiarizado com _slugs_, essa palavra pode ser um pouco estranha, mas o slug serve como um identificador para a página que seja conciso e mais legível por uma pessoa.

Para gerar um slug a partir de um texto, você pode usar [esse site](https://slugify.online/) no qual converte textos para formatação de slug.

![Alt](images/generating-slug.png)

### titulo*

Título para o instrumento, aparecerá no começo da página sobre o fundo da cor da área temática escolhida para o instrumento.

### descricao*

Descrição para o instrumento, aparecerá no começo da página sobre o fundo da cor da área temática escolhida para o instrumento.

### conteudo*

Conteúdo a ser renderizado na página.

### mapa_destaque

Mapa que aparecerá em destaque na página do instrumento.

### outros_mapas

Outros mapas que irão aparecer na página.

### tags

As tags são textos pequenos que relacionam com alguma característica do instrumento, útil para futuras filtragens de pesquisas dos usuários.

### areas_tematicas

A partir de qual área temática o instrumento se relacionar, ele entrará na divisão correspondente dentro do menu de navegação.

### eventos

Eventos no qual o instrumento foi citado ou está citando, será útil para possíveis filtros futuros e recomendar eventos para os usuários.

### documentos

Documentos que foram mencionados no instrumento, será útil para possíveis filtros futuros e possibilitar o usuário baixá-los.

### legislacoes

Legislações mencionadas no instrumento será útil para possíveis filtros futuros .

### noticias

Notícias no qual o instrumento foi citado ou está citando, será útil para possíveis filtros futuros.

### Entidades

Entidades que participaram ou participam do instrumento.

### Projetos

Projetos que o instrumento citou ou está citando, será útil para possíveis filtros futuros.
