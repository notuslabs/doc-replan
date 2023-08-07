import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import type { ClientModule } from "@docusaurus/types";

const module: ClientModule = {
  onRouteDidUpdate: () => {
    if (!ExecutionEnvironment.canUseDOM) return undefined;

    import("meilisearch-docsearch").then(async ({ docsearch }) => {
      await import("meilisearch-docsearch/css");

      const elm = document.querySelector(".docsearch");

      if (elm) {
        elm.innerHTML = "";

        docsearch({
          host: "https://meilisearch-production-abff.up.railway.app/",
          apiKey:
            "abe347e8ceb161fc8fb6e91b3e4a818cd05f9ce0cfcda334a1c4476850b7e7c5",
          indexUid: "docs-prefeitura",
          container: ".docsearch",
          environment: window,
        });
      }
    });

    return undefined;
  },
};

export default module;
