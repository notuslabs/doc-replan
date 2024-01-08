---

title: Alterando a homepage do Strapi
description: Um passo a passo sobre como alterar a homepage do Strapi.
sidebar_position: 1

---

## Introdução

Infelizmente o Strapi não oferece mais uma forma facilitada como uma interface para realizar alterações na página inicial. Isso nos leva a buscar formas menos ideais e neste caso, bem pouco prática.

### _Primeiro Passo_

Certifique-se que as dependências estão instaladas corretamente usando `yarn`.

### _Segundo Passo_

Explore a pasta `node_modules` e procure por `@strapi/admin/admin/src/pages/HomePage`. Os arquivos neste caminho são os quais iremos alterar para modificar a página inicial. 

Comece por mudanças pequenas, pois infelizmente utilizando este método não temos como ver as mudanças feitas em tempo real e, para gerar e aplicar as mudanças leva um tempo dependendo de seu computar (em média 3 minutos). Outro problema é que caso ocorra algum erro, você não será informado e a página inicial apenas ficará em branco.

### _Terceiro Passo_

Após feitas as mudanças, certifique-se que as salvou. 

Em seguida, iremos rodar a sequência de comandos abaixo (espere cada comando finalizar antes de rodar o próximo): 
`yarn generate-patches`
`yarn apply-patches`
`yarn build`
`yarn develop`

Terminado o `develop` podemos conferir se o que alteramos funcionou ou não, e se necessário repita o processo ad nauseam.

**_Caso tenha problemas, delete a pasta `@node_modules` e repita o processo a partir do primeiro passo._**

