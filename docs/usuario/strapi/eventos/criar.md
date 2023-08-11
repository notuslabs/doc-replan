---

title: Criando um Evento
description: Aprendendo a criar um evento dentro do strapi
sidebar_position: 1

---

Como o processo é o mesmo para criar qualquer conteúdo, siga o tutorial de [Criando um Conteúdo](/docs/usuario/strapi/iniciando-gerenciamento#criando-conteúdo).

## Campos

Para criar um evento é bem simples, existem campos obrigatórios(marcado com "*") e opcionais, entre eles estão:


1. [__slug__](#slug)*
2. [__titulo__](#titulo)*
3. [__descricao__](#descricao)*
4. [__conteudo__](#conteudo)*
5. [__endereco__](#endereco)*
6. [__local_nome__](#local_nome)*
7. [__hora__](#hora)
8. [__entrada__](#entrada)
9. [__link_inscricao__](#link_inscricao)*
10. [__local_mapa__](#local_mapa)
11. [__tags__](#tags)
12. [__areas_tematicas__](#areas_tematicas)
13. [__programas__](#programas)
14. [__projetos__](#projetos)
15. [__planos__](#planos)
16. [__eventos_relacionados__](#eventos_relacionados)
17. [__incentivos__](#incentivos)
18. [__instrumentos__](#instrumentos)

### slug*

Caso você não esteja familiarizado com _slugs_, essa palavra pode ser um pouco estranha, mas o slug serve como um identificador para a página que seja conciso e mais legível por uma pessoa.

Para gerar um slug a partir de um texto, você pode usar [esse site](https://slugify.online/) no qual converte textos para formatação de slug.

![Alt](images/generating-slug.png)

### tags

As tags são textos pequenos que relacionam com alguma característica do evento, útil para futuras filtragens de pesquisas dos usuários.

### titulo*

Título para o evento, aparecerá no começo da página sobre o fundo da cor da área temática escolhida para o evento.

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

### link_inscricao*

Link para o usuário se inscrever no evento.

### local_mapa

Esse campo requer um iframe do google maps para mostrar um pequeno mapa com a localização do evento no menu lateral.

#### Como pegar o iframe

Para pegar o iframe é bem simples, primeiro, vá para o [google maps](https://maps.google.com) e pesquise o local que voce deseja mostrar no mapa. Após estar no local, no menu lateral, clique em partilhar.

![Alt text](images/maps.png)

Após clicar em partilhar, um modal irá aparecer na tela, dentro dele, clique em `"Incorporar um mapa"`

![Alt text](images/maps-1.png)

Após clicar em `"Incorporar um mapa"`, uma nova aba irá aparecer com um botão escrito `"Copiar HTML"`, que é exatamente o conteúdo que você precisa colocar no campo _`local_mapa`_, depois cole no campo sem nenhuma alteração.

![Alt text](images/maps-2.png)

### areas_tematicas

A partir de qual área temática o evento se relacionar, ele entrará na divisão correspondente dentro do menu de navegação.

### programas

Programas que foram citados dentro do conteúdo do evento, interessante para pesquisas e procuras rápidas pelos usuários interessados.

### projetos

Projetos que foram citados dentro do conteúdo do evento, interessante para pesquisas e procuras rápidas pelos usuários interessados.

### planos

Planos que foram citados dentro do conteúdo do evento, interessante para pesquisas e procuras rápidas pelos usuários interessados.

### eventos_relacionados

Outros eventos que foram citados dentro do conteúdo do evento, interessante para pesquisas e procuras rápidas pelos usuários interessados.

### incentivos

Incentivos que foram citados dentro do conteúdo do evento, interessante para pesquisas e procuras rápidas pelos usuários interessados.

### instrumentos

Instrumentos que foram citados dentro do conteúdo do evento, interessante para pesquisas e procuras rápidas pelos usuários interessados.
