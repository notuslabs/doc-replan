import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
  isLink: boolean;
  href?: string;
  altText?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Prefere Vídeos?",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Assista vídeos intuitivos que ensinam as melhores práticas para as
        principais funcionalidades da plataforma.
      </>
    ),
    isLink: true,
    href: "https://www.youtube.com/playlist?list=PL3ewgYuxhTGVcA_-cqGESyznribt-4JiB",
    altText: "Nosso canal com vídeo tutoriais",
  },
  {
    title: "Estamos aqui para ajudar",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Ficou com alguma dúvida ou têm alguma sugestão? Entre em contato
        conosco!
      </>
    ),
    isLink: false,
  },
];

function Feature({
  title,
  Svg,
  description,
  href,
  isLink,
  altText,
}: FeatureItem) {
  const content = (
    <>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </>
  );

  return isLink ? (
    <a
      className={clsx("col col--4 feature--container")}
      href={href}
      target="_blank"
      rel="nofollow external noreferrer noopener"
      aria-label={altText}
    >
      {content}
    </a>
  ) : (
    <div className={clsx("col col--4 feature--container")}>{content}</div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row featureList">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
