---

title: Evento
description: Especificações de um Evento
sidebar_position: 5

---

## Introdução

A seção __Eventos__ no portal da Rede de Planejamento da Cidade de Florianópolis se refere a um espaço destinado a divulgar informações sobre eventos relacionados ao planejamento urbano, desenvolvimento da cidade e temas afins. Essas páginas servem como um canal para informar a comunidade sobre conferências, workshops, seminários, palestras e outros eventos relevantes que tenham impacto no desenvolvimento urbano, sustentabilidade, mobilidade, infraestrutura e outros aspectos relacionados.

As páginas de eventos tem como objetivo principal:

Informação: Fornecer detalhes sobre datas, horários, locais e descrições dos eventos, permitindo que os interessados obtenham informações claras e precisas.

Engajamento: Incentivar a participação da comunidade, profissionais do setor, estudantes e partes interessadas em discussões e debates sobre tópicos relevantes para a cidade.

Educação: Oferecer oportunidades de aprendizado, permitindo que os participantes adquiram conhecimentos e insights de especialistas e profissionais do setor.

Networking: Criar um espaço para interações sociais e networking entre os participantes, promovendo o compartilhamento de ideias e experiências.

Colaboração: Facilitar a colaboração entre diferentes setores da sociedade, incluindo governo, empresas, organizações da sociedade civil e academia.

A seção de eventos pode conter informações sobre uma variedade de eventos, incluindo:

Conferências e congressos sobre temas urbanísticos e de planejamento.
Workshops e cursos de capacitação para profissionais e estudantes.
Palestras de especialistas em urbanismo, arquitetura e desenvolvimento sustentável.
Seminários para discutir desafios e soluções específicas da cidade.
Eventos de lançamento de projetos ou iniciativas urbanas.
Audiências públicas para ouvir a opinião da comunidade sobre questões urbanas.

Além de fornecer informações detalhadas sobre os eventos, a página de eventos pode incluir um formulário de registro ou inscrição, detalhes de contato para mais informações e até mesmo recursos relacionados, como materiais de apresentações e resumos dos eventos anteriores. Isso ajuda a criar um ambiente interativo e informativo para a comunidade interessada em planejamento urbano na cidade de Florianópolis.

Como o processo é o mesmo para criar qualquer conteúdo, siga o tutorial de [Criando um Conteúdo](/docs/guias/gestao-de-conteudo/criando.md).

## Campos

:::tip Nota

A ordem dos campos pode não ser exatamente a encontrada aqui.

:::

Para criar um evento é bem simples, existem campos obrigatórios(marcado com "*") e opcionais, entre eles estão:

1. [__titulo__](#titulo)*
2. [__slug__](#slug)*
3. [__areas_tematicas__](#areas_tematicas)
4. [__descricao__](#descricao)*
5. [__tags__](#tags)
6. [__banner__](#banner)*
7. [__endereco__](#endereco)*
8. [__hora__](#hora)
9. [__local_nome__](#local_nome)*
10. [__local_mapa__](#local_mapa)
11. [__entrada__](#entrada)
12. [__conteudo__](#conteudo)*
13. [__programas__](#programas)
14. [__projetos__](#projetos)
15. [__planos__](#planos)
16. [__noticias__](#noticias)
17. [__eventos_relacionados__](#eventos_relacionados)
18. [__incentivos__](#incentivos)
19. [__instrumentos__](#instrumentos)
20. [__data_inicio__](#data_inicio)*
21. [__modalidade__](#modalidade)*
22. [__data_fim__](#data_fim)
23. [__botao1_label__](#botao1_label)
24. [__botao1_link__](#botao1_link)
25. [__botao2_label__](#botao2_label)
26. [__botao2_link__](#botao2_link)
27. [__botao3_label__](#botao3_label)
28. [__botao3_link__](#botao3_link)
29. [__coordenacao__](#coordenacao)
30. [__redes__](#redes)
31. [__paisagens_e_patrimonios__](#paisagens_e_patrimonios)
32. [__gestao_territorial__](#gestao_territorial)
33. [__visivel_megamenu__](#visivel_megamenu)*
34. [__links__](#links)

### titulo*

Título para o evento, aparecerá no começo da página sobre o fundo da cor da área temática escolhida para o evento.

### slug*

Caso você não esteja familiarizado com _slugs_, essa palavra pode ser um pouco estranha, mas o slug serve como um identificador para a página que seja conciso e mais legível por uma pessoa.

Para gerar um slug a partir de um texto, você pode usar [esse site](https://slugify.online/) no qual converte textos para formatação de slug.

![Alt](images/generating-slug.png)

### tags

As tags são textos pequenos que relacionam com alguma característica do evento, útil para futuras filtragens de pesquisas dos usuários.

### banner*

Uma imagem usada como banner para representar esse evento.

### descricao*

Descrição para o evento, aparecerá no começo da página sobre o fundo da cor da área temática escolhida para o evento.

### conteudo*

Conteúdo a ser renderizado na página.

### endereco*

Endereço completo do local que irá ocorrer o evento, exemplo:

_"Av. Pref. Osmar Cunha, no 77 9o andar Centro, Florianópolis - SC 88015-100"_

### local_nome*

Um nome para o local, diferente do endereço, ele deve ser um texto que seja simples para o usuário entender onde será o evento, exemplo:

_"Prefeitura de Florianópolis"_

### hora

Horário que o evento vai ocorrer, exemplo:

_"08:00-12:00, 13:00-19:00"_

### entrada

Método de entrada, exemplo:

_"Agendar horário"_

### local_mapa

Esse campo requer um iframe do Google Maps para mostrar um pequeno mapa com a localização do evento no menu lateral. Para aprender como adicionar o embed do Google Maps, [siga este tutorial.](/docs/guias/gestao-de-conteudo/google-maps-embed.md)

### areas_tematicas

A partir de qual área temática o evento se relacionar, ele entrará na divisão correspondente dentro do menu de navegação.

### programas

Programas relacionados a este evento.

### projetos

Projetos relacionados a este evento.

### planos

Planos relacionados a este evento.

### noticias

Notícias relacionadas ao evento.

### eventos_relacionados

Outros eventos relacionados a este evento.

### incentivos

Incentivos relacionados a este evento.

### instrumentos

Instrumentos relacionados a este evento.

### data_inicio*

A data de início do evento.

### modalidade*

A modalidade do evento, ou seja, se é presencial, híbrido ou remoto.

### data_fim

A data de término do evento.

:::tip Nota

Os campos a seguir são campos disponibilizados para a criação de botões para links externos, tendo cada um seu respectivo nome (label) e link.

É importante que caso sejam usados, ambos o campo de label e link devem ser preenchidos para cada botão.

:::

### botao_label

O nome do botão para um link externo.

### botao_link

O link externo para o botão nomeado.

### coordenacao

A coordenação responsável pelo evento.

### redes

Redes relacionados ao evento.

### paisagens_e_patrimonios

Paisagens e patrimônios relacionados ao evento.

### gestao_territorial

Gestões territoriais relacionadas ao evento.

### visivel_megamenu*

Um campo para escolher se este conteúdo aparece ou não no [Megamenu](../interfaces/megamenu.md), o padrão é falso.

### links

Links relacionados ao evento.
