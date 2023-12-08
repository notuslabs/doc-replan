---

title: Curto
description: Como criar uma coleção nova no nosso site que tenha todas as funcionalidades disponíveis atualmente.
sidebar_position: 2

---

## Passo 1 - Criar a coleção no Strapi e atualizar conteúdos relacionados

_**OBS: Para editar as coleções ou adicionar novas, você precisa estar executando o Strapi localmente, não é possível fazer isso pelo site em que está hospedado.**_

### Diretrizes

#### Nome da coleção

No formulário de criação de uma nova coleção, existem 3 campos

1. Mostrar nome
2. ID da API(Singular)
3. ID da API(plural)

Caso o singular da palavra não exista em inglês, você pode inventar um nome, como por exemplo, a coleção de "Notícias" tem o nome de "New" no singular. Assim nós conseguimos manter o padrão.

#### Nome dos campos internos

Campos internos são escritos em português, sem acentos e separados com "\_"

### Adicionando a coleção como opção dentro de "categoria" nos Links

Dentro do campo "categoria" na coleção de "Links" adicione a nova categoria.

## Passo 2 - Adicionar a coleção na lista do MeiliSearch

No Strapi, pela sidebar, clique no ícone de Lupa, procure pela coleção nova e selecione a caixinha correspondente.

## Passo 3 - Adicionar dentro do MeiliSearch as configurações necessárias para filtros e ordenação funcionarem

:::warning

Para os filtros funcionarem, você **precisa adicionar nas configurações quais filtros podem ser utilizados**. Sem isso, a requisição irá dar **`ERRO`** porque o campo não é um atributo filtrável.

:::

Dentro repositório do Strapi, dentro do arquivo `config/plugins.js`, adicione uma nova chave dentro de `meilisearch.config` com o id da coleção, ex:

```js
// sem os parênteses
(nome-da-coleção): {
  transformEntry({ entry }) {
    entry.publishedAt = dateToTimeStamp(entry.publishedAt);
    entry.category = ("nome-da-coleção"); // sem os parênteses

    return entry;
  },
  indexName: "general-search",
  entriesQuery: {
    locale: "all",
  },
  settings: {
    filterableAttributes: [
      "tags",
      "areas_tematicas",
      "autoria",
      "gestao",
      "coordenacao",
      "category",
    ],
    sortableAttributes: ["titulo", "descricao", "publishedAt"],
  },
},
```

## Passo 4 - Adicionar a nova opção nas constantes no front

Para tudo funcionar você precisa editar dois pontos centrais da nossa aplicação.

1. A variável `availableCategories`, dentro de **"src/lib/utils/index.ts"**, adicionando a nova categoria em ingles no singular.
2. a tipagem `Category`, dentro de **"src/lib/shared/iconsByCategory.ts"**, adicionando o nome que a coleção nova fica nas relações com outros conteúdos.

Após editar esses dois pontos, vários erros irão aparecer pois várias páginas usam essas constantes, então você precisa ir em cada um desses erros e resolvê-los, que deve ser algo bem simples de fazer.

_**OBS: Para encontrar onde está dando erro, basta executar `npm run check:watch`, que irá executar a checagem de tipagem do TypeScript em modo "watch"**_

### Adicionando a tradução para a categoria

Dentro da pasta **"src/lib/translations/locales"**, adicione em cada uma das três linguagens que temos disponíveis("pt-BR.json", "es.json", "en.json"), dentro da chave `"category"`, o nome da coleção em inglês no singular, e dentro dela, adicionar duas chaves, uma `"plural"` e outra `"singular"`.

## Passo 5 - Adicionar a página no front

Copie a pasta de alguma coleção já existente como base. Agora basta renomear a pasta de `programas` para `nome-da-colecao`.

### Pegando os dados - Back-End

Dentro do `+page.ts`, você precisa mudar algumas coisas, como:
1. A rota de api do fetch, caso ela ainda não exista, você deve criá-la
2. O schema para validação, caso ele não exista, você também deve criá-lo

#### Criando a rota de API

Copie uma rota já existente, como a do arquivo **"src/routes/[...lang=locale]/api/programs/+server.ts"**. Nesse novo arquivo, você precisa trocar:
1. As variáveis para o nome relacionado a coleção criada.
2. A função responsável por pegar os dados usando a lib do Strapi

#### Criando a função para pegar os dados

Dentro de **"src/lib/server/queries"**, copie uma das queries já criadas anteriormente e edite o que precisar, como o nome das variáveis, a coleção que irá ser buscada e caso precise, o "populate".

Agora que você criou essa função, você deve voltar para o arquivo usado anteriormente, e trocar a função que está sendo usada para pegar os dados, para a que você acabou de criar.

#### Criando o Schema de validação com o Zod para a página

Dentro da pasta **"src/lib/strapi/base/index.ts"** crie um novo item como "NomeDaColecaoModel" com os dados primitivos(sem relações) da coleção, para você extender depois caso precise.

Agora, dentro da pasta **"src/lib/strapi"**, copie um dos arquivos de validação para usar como base, como o `ProgramSchema.ts`, altere o nome da variável, o schema base usado e as alterações de relações que forem necessárias.

#### Adicionando a coleção criada como relação para outras páginas

Esse processo é chato, porém necessário, agora vamos para cada uma das queries das páginas de conteúdo que ficam dentro de **"src/lib/server/queries"** e dentro do "populate" adicione o nome da coleção que você adicionou.

### Renderizando os dados - Front-End

Agora, dentro de **"src/routes/\[...lang=locale\]/nome-da-colecao/+page.svelte"**, você precisa editar primeiramente o nome da variável que guarda os dados da coleção que está sendo adicionada, ex:

```js
$: program = data.program
```

Para:

```js
// sem os parênteses
$: (nome-da-colecao) = data.(nome-da-colecao)
```

### Continuando

A página inteira está contida dentro do componente `PageTemplate`.

#### Adicionando os dados

Você pode editar dois parâmetros dentro do `PageTemplate`, o `pageBannerData` e o `pageData`.

Os parâmetros em sua maioria são outras coleções que podem estar relacionadas à página que você está criando.

Caso você precise adicionar algo específico pra essa coleção, adicione manualmente passando dentro do próprio `PageTemplate` usando os `slots` que já estão criados ou adicionando um novo caso não tenha um no local que você deseja adicionar.

#### Usando os slots

Para usar, é bem simples, exemplo:

```jsx
<PageTemplate
	{...props}
>
	<svelte:fragment slot="after-published-date"> {/* o "slot" aceita o nome de um slot que está dentro do componente*/}
		{/* Aqui vai o conteúdo que você deseja adicionar */}
	</svelte:fragment>
</PageTemplate>
```

## Passo 5 - Adicionar no MegaMenu

Dentro do arquivo **"src/lib/components/Navbar/SubNav.ts"** e na função `getSubNavItems`, no retorno você deve adicionar a nova coleção como um objeto que tenha
1. sectionTitle
2. items
3. route
4. icon
5. thematicArea
6. titleColor
7. variant

É importante adicionar os `items` sempre usando o `mergeLinksToSection` que permite que links sejam colocados em seções diferentes dentro do MegaMenu, sem isso, o link irá aparecer na seção de "Links"

## Passo 6 - Adicionar os itens na página de resultados de busca

### Adicionando as tipagens

No arquivo **"src/lib/types"** dentro da tipagem `MeiliSearchResult` em `{ hits: ... }`, adicione uma nova tipagem que você vai criar, chamando algo como `"MeiliSearch(nomeDaColeção)Model"`(sem os parênteses). Para nosso exemplo vamos copiar o de "programas" atualmente:

```ts
export interface MeiliSearchProgramModel {
  category: 'program'
  id: number
  slug: string
  titulo: string
  descricao: string
  conteudo: string
  publishedAt: string
  updatedAt: string
  banner: MeiliSearchBannerModel
  areas_tematicas: MeiliSearchThematicAreaModel[]
  documentos: MeiliSearchDocumentModel[]
  legislacoes: MeiliSearchLegislationModel[]
  mapa_destaque?: ExtendedMapReturn
  projetos: MeiliSearchProjectModel[]
  planos: MeiliSearchPlanModel[]
  eventos: MeiliSearchEventModel[]
  gestao: MeiliSearchEntityModel[]
  tags: MeiliSearchTagModel[]
  _formatted: MeiliSearchProgramModel
}
```

O que precisamos trocar aqui é o nome da interface, a chave `"category"` para ter o mesmo valor do `"category"` que você colocou lá em cima dentro de `plugins.js`[(Passo 3)](#passo-3---adicionar-dentro-do-meilisearch-as-configurações-necessárias-para-filtros-e-ordenação-funcionarem) nos arquivos do Strapi, e também, adicione todas as relações que existem para esse conteúdo.

### Adicionando o componente para aparecer nos resultados

Dentro de **"src/routes/\[...lang=locale\]/resultados-busca/SearchResultCard/Variants"**, copie dois arquivos de alguma das categorias como o `SearchCardProgram` e `SearchListProgram` e depois renomeie trocando o nome da coleção anterior para a nova.

Troque a tipagem da variável `result` para a nova tipagem criada dentro do arquivo que você adicionou a tipagem do retorno do MeiliSearch(feito em [Adicionando as Tipagens](#adicionando-as-tipagens)).

Depois de ter renomeado o card e trocado a tipagem da variável interna, basta adicionar um novo `{#else if result.category === "nome-da-categoria"}` dentro do arquivo **"src/routes/\[...lang=locale\]/resultados-busca/SearchResultCard/Switcher.svelte"** usando os dois novos componentes. Com isso, agora o card deve aparecer nos resultados.
