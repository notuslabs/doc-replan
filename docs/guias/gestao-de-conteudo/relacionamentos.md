---
title: Relacionamentos
description: Entendendo mais sobre relacionamentos na gestão de conteúdo
sidebar_position: 7
---

Relacionamentos nos permitem juntar coleções, podendo adicionar relações de
conteúdos como "noticias relacionadas", "programas relacionados" e etc...

Sempre que você ver algum campo dentro do CMS no qual você tenha que selecionar
um item de outra coleção, isso é um relacionamento.

Os relacionamentos são bidirecionais em sua maioria, por exemplo:

Temos a coleção de "Programas". Dentro dessa coleção, temos o campo
"areas_tematicas" que se relaciona com a coleção de Áreas Temáticas. Caso
adicionemos esse "Programa" para uma área temática, o campo "programas" dentro
de "areas_tematicas" será populado com o novo programa. Esse é um exemplo de
campo com uma relação bidirecional, sendo assim, você pode adicionar tanto
"programas" dentro da coleção de "Áreas Temáticas" quanto "areas_tematicas"
dentro da coleção de "Programas" que o resultado será o mesmo.

## Exemplos de relacionamentos

Para entender um pouco melhor, segue alguns exemplos de relacionamentos
disponíveis atualmente, o conceito se seguirá igual para todas as coleções.

### Programas

Dentro da coleção de Programas, possuímos diversos relacionamentos, entre eles
estão:

1. areas_tematicas - Campo que dita qual área temática o programa pertence.
2. tags - Útil para organizar diversos conteúdos que tenham semelhanças.
3. mapa_destaque - O Mapa em destaque da página de programa é uma relação. Os
   mapas são criados separadamente e depois são relacionados com a coleção no
   qual ele será utilizado.
4. ...

### Eventos

Dentro da coleção de Eventos, possúimos diversos relacionametos também, entre
eles estão:

1. tags - Mesma relação mostrada anteriormente.
2. coordenação - Relacionamento com a coleção de entidades, mostrando quem
   coordena o evento.
3. incentivos - Mostrando quais incentivos estão relacionados com esse evento.
4. ...
