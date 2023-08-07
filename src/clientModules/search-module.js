
const { docsearch } = require("meilisearch-docsearch");
require("meilisearch-docsearch/css");

export function onRouteDidUpdate() {
  document.querySelector('.docsearch').innerHTML = ''
  docsearch({
    host: 'https://meilisearch-production-abff.up.railway.app/',
    apiKey: 'abe347e8ceb161fc8fb6e91b3e4a818cd05f9ce0cfcda334a1c4476850b7e7c5',
    indexUid: 'docs-prefeitura',
    container: '.docsearch',
  })
  return undefined;
}
