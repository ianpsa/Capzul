import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Qual a proposta desse documento?',
    Svg: require('@site/static/img/4.svg').default,
    description: (
      <>
        Nessa documentação demonstraremos todo o percurso feito pela nossa equipe para chegar na melhor solução de segurança para a Capzul.
      </>
    ),
  },
  {
    title: 'Importância',
    Svg: require('@site/static/img/2.svg').default,
    description: (
      <>
      A participação no CTF permitiu testar o Capzul Protect em cenários reais de ataque. Enfrentamos desafios que exigiram compreensão das metodologias criptográficas. Essa experiência validou a robustez do Capzul Protect e a necessidade de uma documentação clara para os usuários.
      </>
    ),
  },
  {
    title: 'A solução Capzul',
    Svg: require('@site/static/img/3.svg').default,
    description: (
      <>
        A partir desta experiência, foi possível desenvolver uma documentação detalhada e precisa para esclarecer e orientar sobre suas funcionalidades e métodos avançados que utilizamos para tentar encontrar vulnerabilidades na solução Capzul.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
