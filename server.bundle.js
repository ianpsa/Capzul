/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 9858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* binding */ metadata),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8453);


const frontMatter = {
	id: 'relatorio-teste-penetracao',
	title: 'Relatório de Teste de Penetração'
};
const contentTitle = 'Relatório de Teste de Penetração';
const metadata = {
  "type": "mdx",
  "permalink": "/relatorio",
  "source": "@site/src/pages/relatorio.md",
  "title": "Relatório de Teste de Penetração",
  "description": "1.0 Resumo Executivo",
  "frontMatter": {
    "id": "relatorio-teste-penetracao",
    "title": "Relatório de Teste de Penetração"
  },
  "unlisted": false
};
const assets = {

};



const toc = [{
  "value": "1.0 Resumo Executivo",
  "id": "10-resumo-executivo",
  "level": 2
}, {
  "value": "2.0 Metodologia",
  "id": "20-metodologia",
  "level": 2
}, {
  "value": "2.1 Coleta de Informações",
  "id": "21-coleta-de-informações",
  "level": 3
}, {
  "value": "2.2 Enumeração de Serviços",
  "id": "22-enumeração-de-serviços",
  "level": 3
}, {
  "value": "2.3 Penetração",
  "id": "23-penetração",
  "level": 3
}, {
  "value": "2.4 Manutenção de Acesso",
  "id": "24-manutenção-de-acesso",
  "level": 3
}, {
  "value": "2.5 Limpeza",
  "id": "25-limpeza",
  "level": 3
}, {
  "value": "3.0 Detalhamento das Vulnerabilidades",
  "id": "30-detalhamento-das-vulnerabilidades",
  "level": 2
}, {
  "value": "Vulnerabilidade 1: Falha na Exploração da Porta 5678",
  "id": "vulnerabilidade-1-falha-na-exploração-da-porta-5678",
  "level": 3
}, {
  "value": "Vulnerabilidade 2: XSS Armazenado no Header",
  "id": "vulnerabilidade-2-xss-armazenado-no-header",
  "level": 3
}, {
  "value": "Vulnerabilidade 3: Possíveis Vulnerabilidades",
  "id": "vulnerabilidade-3-possíveis-vulnerabilidades",
  "level": 3
}, {
  "value": "Informações Sensíveis na Internet",
  "id": "informações-sensíveis-na-internet",
  "level": 3
}, {
  "value": "4.0 Recomendação",
  "id": "40-recomendação",
  "level": 2
}, {
  "value": "5.0 Conclusão",
  "id": "50-conclusão",
  "level": 2
}, {
  "value": "Análise Adicional com Base no Capzul Tech Paper 2018",
  "id": "análise-adicional-com-base-no-capzul-tech-paper-2018",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
      id: "relatório-de-teste-de-penetração",
      children: "Relatório de Teste de Penetração"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "10-resumo-executivo",
      children: "1.0 Resumo Executivo"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Durante o teste de penetração realizado, identificamos várias portas abertas e tentamos explorar potenciais vulnerabilidades. O objetivo principal era avaliar a segurança dos sistemas-alvo e identificar pontos fracos que poderiam ser explorados por um atacante."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "20-metodologia",
      children: "2.0 Metodologia"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "21-coleta-de-informações",
      children: "2.1 Coleta de Informações"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Utilizamos o Nmap para realizar a varredura inicial e identificamos as portas 5678, 80 e 22 abertas. Ao investigar mais detalhadamente, verificamos que o servidor era um proxy. A porta 80 estava rodando o Nginx na versão mais recente, que até o momento não possui vulnerabilidades conhecidas exploráveis por scripts zeroday."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "IP do Proxy:"
      }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "http://52.20.204.145",
        children: "http://52.20.204.145"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.br, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "IP Normal:"
      }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "http://34.196.222.5",
        children: "http://34.196.222.5"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "22-enumeração-de-serviços",
      children: "2.2 Enumeração de Serviços"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Realizamos tentativas de exploração nas portas identificadas:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Porta 80"
        }), ": Confirmamos que o Nginx estava na versão mais recente e, portanto, sem vulnerabilidades conhecidas."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Porta 5678"
        }), ": Tentamos explorar a vulnerabilidade CVE-2018-12613 (phpMyAdmin) usando o Metasploit Framework, mas a tentativa foi infrutífera, indicando que a porta não era vulnerável a este exploit."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Porta 22"
        }), ": Porta de SSH, nenhuma tentativa de brute force foi realizada durante este teste inicial."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "23-penetração",
      children: "2.3 Penetração"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Exploit CVE-2018-12613 - phpMyAdmin"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.br, {}), "\n", "Tentamos explorar a vulnerabilidade CVE-2018-12613 na porta 5678 através do Metasploit Framework, mas o resultado foi negativo, indicando que não há vulnerabilidades conhecidas nessa porta no contexto do servidor específico."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "XSS (Cross-Site Scripting)"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.br, {}), "\n", "Identificamos uma vulnerabilidade de XSS armazenada no cabeçalho do website, mas não havia locais para input de dados que permitissem a injeção de scripts maliciosos. Portanto, essa vulnerabilidade não pôde ser explorada."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Escaneamento com Nikto"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.br, {}), "\n", "Utilizamos a ferramenta Nikto para escanear o website em busca de vulnerabilidades adicionais, mas não foram encontradas vulnerabilidades exploráveis."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Servidor IIS 10.0"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.br, {}), "\n", "Verificamos que o servidor estava rodando IIS 10.0 da Microsoft. Fizemos verificações detalhadas, mas não identificamos nenhuma vulnerabilidade conhecida ou explorável."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "24-manutenção-de-acesso",
      children: "2.4 Manutenção de Acesso"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Não foi possível manter o acesso devido à ausência de vulnerabilidades exploráveis nas portas e serviços identificados."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "25-limpeza",
      children: "2.5 Limpeza"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Não houve necessidade de limpeza, pois nenhuma exploração bem-sucedida foi realizada."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "30-detalhamento-das-vulnerabilidades",
      children: "3.0 Detalhamento das Vulnerabilidades"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "vulnerabilidade-1-falha-na-exploração-da-porta-5678",
      children: "Vulnerabilidade 1: Falha na Exploração da Porta 5678"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Sistema Vulnerável"
        }), ": Não identificado"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Explicação"
        }), ": Tentativa de exploração da vulnerabilidade CVE-2018-12613 no phpMyAdmin via porta 5678 sem sucesso."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Recomendação"
        }), ": Monitorar continuamente a segurança das portas abertas e aplicar patches de segurança conforme disponíveis."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "vulnerabilidade-2-xss-armazenado-no-header",
      children: "Vulnerabilidade 2: XSS Armazenado no Header"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Sistema Vulnerável"
        }), ": Website principal"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Explicação"
        }), ": Vulnerabilidade de XSS armazenado identificada, mas sem possibilidade de exploração devido à ausência de campos de input."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Recomendação"
        }), ": Continuar monitorando e aplicando práticas de codificação segura para evitar possíveis vetores de ataque."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "vulnerabilidade-3-possíveis-vulnerabilidades",
      children: "Vulnerabilidade 3: Possíveis Vulnerabilidades"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Embora nenhuma vulnerabilidade tenha sido explorada com sucesso durante este teste, é importante considerar as seguintes possíveis vulnerabilidades e áreas de risco:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Vulnerabilidades de Configuração do Servidor"
        }), ": Mesmo com versões atualizadas, a configuração inadequada pode introduzir riscos."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Ataques de Força Bruta no SSH (Porta 22)"
        }), ": Embora não tenhamos realizado brute force, é uma prática comum e deve ser mitigada com autenticação multifator e políticas de senha robustas."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Exploração de Zero-Days no Nginx"
        }), ": Continuar monitorando por novas vulnerabilidades e aplicar patches prontamente."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Misconfigurações no IIS"
        }), ": Apesar de não termos encontrado vulnerabilidades conhecidas, a configuração inadequada pode levar a problemas de segurança. Realizar auditorias de configuração regularmente é essencial."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "informações-sensíveis-na-internet",
      children: "Informações Sensíveis na Internet"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Além das vulnerabilidades técnicas, observamos que algumas informações sensíveis de funcionários da Capzul estão disponíveis livremente na internet. Um atacante poderia utilizar essas informações para realizar engenharia social, persuadir o provedor do servidor e potencialmente vazar dados sensíveis ou comprometer o serviço da Capzul."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "40-recomendação",
      children: "4.0 Recomendação"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Recomendamos a aplicação contínua de patches e a revisão das configurações de segurança para mitigar possíveis vulnerabilidades. Além disso, a implementação de práticas seguras de codificação e a realização de testes de penetração periódicos são essenciais para manter a segurança dos sistemas. A proteção contra engenharia social também deve ser reforçada através de treinamento e conscientização dos funcionários."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "50-conclusão",
      children: "5.0 Conclusão"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Os testes de penetração realizados revelaram que, embora existam algumas portas abertas e vulnerabilidades identificadas, nenhuma delas pôde ser explorada com sucesso durante o teste. A implementação das recomendações fornecidas é essencial para proteger os sistemas e evitar compromissos futuros. Manter um programa contínuo de segurança e monitoramento ajudará a identificar e corrigir novas vulnerabilidades."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "análise-adicional-com-base-no-capzul-tech-paper-2018",
      children: "Análise Adicional com Base no Capzul Tech Paper 2018"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "O relatório de teste de penetração revelou que, embora não tenha sido possível explorar vulnerabilidades nas portas e serviços identificados, as informações no Capzul Tech Paper 2018 destacam algumas considerações importantes:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Segurança de Criptografia"
          }), ": O documento da Capzul descreve uma nova metodologia para implementar criptografia existente que evita ou torna exponencialmente mais difíceis os ataques tradicionais. Embora nosso teste não tenha encontrado vulnerabilidades exploráveis no servidor, é importante considerar a aplicação de metodologias como a Capzul para fortalecer ainda mais a segurança."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Chaves Criptográficas"
          }), ": A Capzul implementa várias chaves criptográficas, tanto simétricas quanto assimétricas, e troca frequente de chaves. Esta abordagem poderia ser benéfica para proteger comunicações sensíveis e evitar comprometimentos em caso de quebra de uma chave específica."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Sincronização Automática e Certificação"
          }), ": A metodologia Capzul inclui sincronização automática entre dispositivos e certificação de chaves, o que poderia ser implementado para garantir que as chaves utilizadas estejam sempre atualizadas e certificadas, mitigando riscos de ataques baseados em chaves comprometidas."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Proteções Contra Engenharia Reversa"
          }), ": A Capzul também enfatiza proteções contra engenharia reversa, um aspecto crucial para garantir que os métodos de criptografia não sejam comprometidos por análise de software. Esta proteção adicional poderia ser considerada no contexto de segurança dos sistemas atuais da Capzul."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Em conclusão, embora o teste de penetração não tenha identificado vulnerabilidades exploráveis diretamente, a adoção de metodologias avançadas de criptografia como as descritas pela Capzul poderia oferecer um nível adicional de segurança, protegendo dados contra uma ampla gama de ameaças. Implementar estas práticas avançadas pode ajudar a Capzul a manter um ambiente seguro e robusto para suas operações."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ }),

/***/ 1512:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* binding */ metadata),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8453);


const frontMatter = {
	sidebar_position: 1
};
const contentTitle = 'CrypSec - Pentesting';
const metadata = {
  "id": "intro",
  "title": "CrypSec - Pentesting",
  "description": "Vamos descobrir os resultados do teste de penetração realizado nos sistemas da Capzul.",
  "source": "@site/docs/intro.md",
  "sourceDirName": ".",
  "slug": "/intro",
  "permalink": "/docs/intro",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",
  "tags": [],
  "version": "current",
  "sidebarPosition": 1,
  "frontMatter": {
    "sidebar_position": 1
  },
  "sidebar": "tutorialSidebar"
};
const assets = {

};



const toc = [{
  "value": "Introdução",
  "id": "introdução",
  "level": 2
}, {
  "value": "O que você encontrará",
  "id": "o-que-você-encontrará",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
      id: "crypsec---pentesting",
      children: "CrypSec - Pentesting"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Vamos descobrir os resultados do teste de penetração realizado nos sistemas da Capzul."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "introdução",
      children: "Introdução"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Este documento apresenta um ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "relatório detalhado do teste de penetração"
      }), " realizado nos servidores da Capzul. O objetivo principal deste teste foi avaliar a segurança dos sistemas-alvo, identificar possíveis vulnerabilidades e fornecer recomendações para mitigar riscos identificados."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "o-que-você-encontrará",
      children: "O que você encontrará"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Descrição da ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "metodologia utilizada"
        }), " no teste."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Resultados da ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "varredura de portas e enumeração de serviços"
        }), "."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Explorações tentadas"
        }), " e seus resultados."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Recomendações"
        }), " para melhoria da segurança dos sistemas."]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ }),

/***/ 2782:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
var _path, _path2, _path3;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

const Svg2 = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 1024,
    height: 1024,
    viewBox: "0 0 768 768",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M384 768c211.8 0 384-172.2 384-384S595.8 0 384 0 0 172.2 0 384s172.2 384 384 384m0-744c198.602 0 360 161.398 360 360S582.602 744 384 744 24 582.602 24 384 185.398 24 384 24m0 0"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M384 702c175.2 0 318-142.8 318-318S559.2 66 384 66 66 208.8 66 384s142.8 318 318 318m0-612c162.602 0 294 131.398 294 294S546.602 678 384 678 90 546.602 90 384 221.398 90 384 90m0 0"
  })), _path3 || (_path3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M218.398 561.602c3 0 6-1.204 8.403-3.602 4.8-4.8 4.8-12 0-16.8-86.403-86.4-86.403-227.4 0-313.802 4.8-4.796 4.8-12 0-16.796-4.801-4.801-12-4.801-16.801 0-96 96-96 252 0 348 2.398 1.796 5.398 3 8.398 3M541.2 558c2.402 2.398 5.402 3.602 8.402 3.602s6-1.204 8.398-3.602c96-96 96-252 0-348-4.8-4.8-12-4.8-16.8 0-4.802 4.8-4.802 12 0 16.8 86.402 86.4 86.402 227.4 0 313.802-4.802 4.796-4.802 12.597 0 17.398M383.398 582C411 582 432 561.602 432 534s-20.398-48-48-48c-27 0-48 21-48 48s21 48 47.398 48m.602-72c14.398 0 24 10.2 24 24s-9.602 24-24 24h-.602C369.602 558 360 547.8 360 534s10.2-24 24-24M367.2 462h34.198c13.204 0 23.403-10.2 24-23.398l7.204-228c0-6.602-2.403-12.602-6.602-17.403q-8.097-7.2-18-7.199h-48c-6.602 0-12.602 2.398-17.398 7.2C337.8 198 336 204 336 210.601l7.2 228C343.2 451.8 354 462 367.2 462M408 210l-7.2 228h-34.198L360 210Zm0 0"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Svg2);

/***/ }),

/***/ 1215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
var _path, _path2;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

const Svg3 = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 1024,
    height: 1024,
    viewBox: "0 0 768 768",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M75.293 331.293c0-8.316-6.742-15.059-15.059-15.059H15.06C6.742 316.234 0 322.977 0 331.293s6.742 15.059 15.059 15.059h45.175c8.317 0 15.059-6.743 15.059-15.059M53.996 230.293c-5.879-5.879-15.414-5.879-21.297 0-5.879 5.879-5.879 15.414 0 21.297l31.946 31.945c5.886 5.883 15.414 5.88 21.296 0 5.883-5.879 5.883-15.414 0-21.297ZM64.645 379.055 32.703 411c-5.883 5.879-5.883 15.414 0 21.297s15.414 5.879 21.297 0l31.945-31.945c5.88-5.88 5.88-15.414 0-21.297-5.886-5.88-15.418-5.88-21.3 0M752.941 316.234h-45.175c-8.317 0-15.059 6.743-15.059 15.059s6.742 15.059 15.059 15.059h45.175c8.317 0 15.059-6.743 15.059-15.059s-6.742-15.059-15.059-15.059M682.059 283.535c5.882 5.88 15.414 5.88 21.296 0l31.946-31.945c5.879-5.883 5.879-15.418 0-21.297-5.883-5.879-15.414-5.879-21.297 0l-31.945 31.941c-5.883 5.883-5.883 15.418 0 21.301M703.355 379.055c-5.882-5.88-15.414-5.88-21.3 0-5.88 5.879-5.88 15.414 0 21.297L714 432.297c5.887 5.883 15.414 5.879 21.297 0s5.883-15.414 0-21.297ZM677.648 150.59C677.648 67.55 610.094 0 527.058 0c-73.007 0-134.035 52.227-147.714 121.277-51.473-4.742-102.88 11.16-143.082 44.723-79.543 66.402-93.414 181.621-33.899 264.41 41.032 57.063 64.465 122.426 68.172 189.777-17.258 6.36-29.594 22.965-29.594 42.403 0 24.91 20.266 45.176 45.176 45.176h1.516C294.629 742.09 325.05 768 361.41 768c36.363 0 66.785-25.91 73.781-60.234h1.516c24.91 0 45.176-20.266 45.176-45.176 0-19.27-12.13-35.746-29.145-42.23 4.89-69.2 28.282-134.782 68.035-190.395 27.16-38.016 39.778-85.246 35.579-131.66 69.062-13.668 121.296-74.703 121.296-147.715M361.41 737.883c-19.629 0-36.379-12.59-42.594-30.117h85.192c-6.215 17.527-22.965 30.117-42.598 30.117m75.297-60.235h-150.59c-8.305 0-15.058-6.757-15.058-15.058 0-8.305 6.753-15.059 15.058-15.059 167.875 0 149.473.012 150.875.012 8.168.156 14.774 6.84 14.774 15.047 0 8.3-6.758 15.058-15.059 15.058M361.41 436.707c-16.605 0-30.117-13.512-30.117-30.117 0-16.61 13.512-30.121 30.117-30.121 16.61 0 30.121 13.511 30.121 30.12 0 16.606-13.511 30.118-30.12 30.118m134.863-24.254C453.43 472.38 428.16 542.965 422.746 617.41H376.47V464.918c25.953-6.703 45.18-30.313 45.18-58.328 0-33.215-27.024-60.238-60.239-60.238-33.21 0-60.234 27.023-60.234 60.238 0 28.015 19.226 51.625 45.176 58.328V617.41h-45.805c-4.215-72.703-29.55-143.144-73.73-204.582-50.25-69.898-38.743-167.371 28.745-223.707 33.993-28.379 77.434-41.848 120.918-37.867.36 82.5 67.395 149.543 149.891 149.914 3.527 39.238-7.144 79.156-30.098 111.285M527.06 271.06c-66.426 0-120.47-54.043-120.47-120.47 0-66.429 54.044-120.472 120.47-120.472 66.43 0 120.472 54.043 120.472 120.473 0 66.426-54.043 120.469-120.472 120.469m0 0"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m572.883 100.41-68.414 68.41-23.23-23.234c-5.884-5.879-15.419-5.879-21.301 0-5.88 5.879-5.88 15.414 0 21.297l33.882 33.883c5.887 5.882 15.414 5.879 21.297 0l79.059-79.059c5.883-5.879 5.883-15.414 0-21.297-5.88-5.879-15.414-5.879-21.293 0m0 0"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Svg3);

/***/ }),

/***/ 5328:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
var _defs, _g, _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

const Svg4 = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 1024,
    height: 1024,
    viewBox: "0 0 768 768",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, _defs || (_defs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M10 2h748.273v764H10Zm0 0"
  })))), _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M728.727 412.363h-13.098v-95.82q0-1.453-.14-2.898a31 31 0 0 0-.427-2.868 29 29 0 0 0-.707-2.812 28 28 0 0 0-.976-2.73 29 29 0 0 0-2.73-5.106 29 29 0 0 0-1.727-2.328 29 29 0 0 0-1.945-2.149 30 30 0 0 0-2.149-1.949 30 30 0 0 0-2.328-1.726 30 30 0 0 0-2.488-1.489 29.486 29.486 0 0 0-13.93-3.488h-26.293V172.762q.028-2.42-.863-4.676a12.1 12.1 0 0 0-2.586-3.988L501.617 6.53a12.3 12.3 0 0 0-4.18-3.101 12.4 12.4 0 0 0-5.078-1.137H112.99a12.4 12.4 0 0 0-4.712.937q-1.12.469-2.129 1.141c-.671.45-1.293.957-1.863 1.531a12 12 0 0 0-1.531 1.864q-.673 1.008-1.14 2.129a12 12 0 0 0-.7 2.308 12.4 12.4 0 0 0-.234 2.402v272.59H73.988q-1.452 0-2.894.14a31 31 0 0 0-2.871.427 30 30 0 0 0-2.813.707 29.5 29.5 0 0 0-10.164 5.433 29 29 0 0 0-2.148 1.946 29.394 29.394 0 0 0-5.168 6.965 29.486 29.486 0 0 0-2.215 5.352 30 30 0 0 0-.707 2.812 30 30 0 0 0-.422 2.867q-.146 1.441-.145 2.894v135.508h-4.726q-1.453 0-2.895.14a31 31 0 0 0-2.87.426 30 30 0 0 0-2.813.708 29.5 29.5 0 0 0-10.164 5.433 29 29 0 0 0-2.149 1.945 29.394 29.394 0 0 0-5.168 6.965 29.486 29.486 0 0 0-2.215 5.352 30 30 0 0 0-.707 2.812c-.187.95-.328 1.903-.421 2.868a29 29 0 0 0-.145 2.894v1.676l34.078 253.289a29.7 29.7 0 0 0 .746 5.61q.322 1.377.774 2.722.45 1.346 1.03 2.64c.388.864.813 1.704 1.282 2.528.465.82.969 1.621 1.512 2.394a31 31 0 0 0 1.738 2.239 30.2 30.2 0 0 0 4.078 3.926 29.364 29.364 0 0 0 4.75 3.074q1.255.656 2.574 1.183a29 29 0 0 0 2.676.934q1.36.4 2.75.672a29.6 29.6 0 0 0 5.633.535h612.492q1.413.004 2.824-.133a28 28 0 0 0 2.797-.402 28 28 0 0 0 2.746-.668 29 29 0 0 0 5.243-2.106 29.67 29.67 0 0 0 4.746-3.062 30.16 30.16 0 0 0 4.074-3.91 31 31 0 0 0 1.738-2.23 29.7 29.7 0 0 0 4.614-10.255q.321-1.376.515-2.777.192-1.406.25-2.816l42.445-293.372q.077-.884 0-1.773a28 28 0 0 0-.16-2.879 29 29 0 0 0-.441-2.855 29.197 29.197 0 0 0-1.703-5.508 29 29 0 0 0-1.246-2.606 29 29 0 0 0-1.496-2.468q-.808-1.2-1.73-2.313a29.6 29.6 0 0 0-4.09-4.066 29 29 0 0 0-2.325-1.711 29 29 0 0 0-5.094-2.707 29 29 0 0 0-2.718-.969 29.42 29.42 0 0 0-8.543-1.262m-659.86 39.883V316.543c.004-.309.043-.613.106-.918q.1-.45.277-.879.183-.421.441-.808.264-.383.586-.711a4.85 4.85 0 0 1 1.524-1.028 4.5 4.5 0 0 1 .879-.277q.45-.1.914-.106h26.691v140.43Zm360.66-34.074-20.98 34.074H125.3V26.914h355.043v145.848q.04 1.17.293 2.312.258 1.138.726 2.211a12 12 0 0 0 1.125 2.04q.662.962 1.492 1.788.83.821 1.801 1.477a12.33 12.33 0 0 0 6.578 2.09h142.61v227.683H440.457a12.3 12.3 0 0 0-3.113.375q-1.53.392-2.914 1.153a12.4 12.4 0 0 0-2.532 1.851 12.5 12.5 0 0 0-1.98 2.43Zm230.262-5.809V311.816h26.688q.461.007.918.106.45.094.878.277.423.183.809.442a4.8 4.8 0 0 1 1.297 1.296q.259.387.441.81.183.426.278.878.099.457.105.918v95.82Zm0 0"
  }))), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M203.695 133.371h192.64q1.214.001 2.403-.238 1.19-.234 2.309-.7a12.2 12.2 0 0 0 3.992-2.667 12.493 12.493 0 0 0 2.672-3.992c.309-.75.539-1.52.7-2.313a12.4 12.4 0 0 0 0-4.8 12.5 12.5 0 0 0-.7-2.31 12.4 12.4 0 0 0-4.535-5.527 12.2 12.2 0 0 0-2.13-1.136 12 12 0 0 0-2.308-.7 12 12 0 0 0-2.402-.238h-192.64q-1.214-.001-2.403.238-1.19.235-2.309.7a12.2 12.2 0 0 0-2.129 1.136q-1.005.675-1.867 1.531a12.3 12.3 0 0 0-1.527 1.868q-.677 1.006-1.14 2.129a12.4 12.4 0 0 0-.937 4.71 12.4 12.4 0 0 0 .936 4.711c.309.747.692 1.454 1.14 2.125q.671 1.01 1.528 1.868.861.856 1.867 1.53 1.009.675 2.13 1.138 1.118.464 2.308.699 1.19.239 2.402.238M271.848 353.371h-68.153a12.4 12.4 0 0 0-4.71.938 12.5 12.5 0 0 0-3.997 2.668 12.3 12.3 0 0 0-1.527 1.867 12.26 12.26 0 0 0-2.078 6.84 12.4 12.4 0 0 0 .937 4.71c.309.747.692 1.458 1.14 2.13q.671 1.006 1.528 1.863.861.856 1.867 1.531 1.009.674 2.13 1.137 1.118.463 2.308.703 1.19.234 2.402.234h68.153q1.212 0 2.402-.234 1.19-.24 2.309-.703a12.2 12.2 0 0 0 2.128-1.137q1.007-.675 1.868-1.531a12.3 12.3 0 0 0 2.668-3.992q.464-1.12.699-2.31a12.4 12.4 0 0 0 .238-2.401 12.4 12.4 0 0 0-.937-4.711 12.5 12.5 0 0 0-1.137-2.13q-.675-1.006-1.531-1.866a12.5 12.5 0 0 0-3.996-2.668 12.4 12.4 0 0 0-4.71-.937M422.238 353.371h-91.691a12.4 12.4 0 0 0-4.711.938 12.5 12.5 0 0 0-3.996 2.668 12.5 12.5 0 0 0-1.531 1.867 12.2 12.2 0 0 0-1.137 2.129 12 12 0 0 0-.7 2.308q-.239 1.19-.238 2.403 0 1.212.239 2.402.235 1.189.699 2.309a12.2 12.2 0 0 0 2.668 3.992q.86.856 1.867 1.531 1.009.674 2.129 1.137t2.309.703q1.189.234 2.402.234h91.691q1.214 0 2.403-.234 1.19-.24 2.308-.703a12.2 12.2 0 0 0 3.992-2.668 12.24 12.24 0 0 0 2.668-3.992 12.2 12.2 0 0 0 .938-4.711q0-1.214-.235-2.403a12.2 12.2 0 0 0-.703-2.308 12.287 12.287 0 0 0-8.969-7.363 12.4 12.4 0 0 0-2.402-.239M203.695 188.715h217.852q1.213 0 2.402-.235a12.2 12.2 0 0 0 2.309-.703 12.287 12.287 0 0 0 7.363-8.969q.239-1.188.238-2.402.001-1.213-.238-2.402a12 12 0 0 0-.7-2.309 12.2 12.2 0 0 0-2.667-3.992 12.382 12.382 0 0 0-3.996-2.672 12.5 12.5 0 0 0-2.309-.699 12.4 12.4 0 0 0-2.402-.234H203.695q-1.213 0-2.402.234c-.793.16-1.563.39-2.309.7q-1.12.466-2.129 1.14a12.29 12.29 0 0 0-5.234 7.832 12.4 12.4 0 0 0-.238 2.402 12.4 12.4 0 0 0 .937 4.711c.309.746.692 1.457 1.14 2.13q.671 1.007 1.528 1.862a12.3 12.3 0 0 0 3.996 2.668 12.2 12.2 0 0 0 4.711.938M502.207 291.727H203.695q-1.213 0-2.402.234c-.793.16-1.563.39-2.309.7q-1.12.466-2.129 1.14a12.29 12.29 0 0 0-5.234 7.832 12.4 12.4 0 0 0-.238 2.402 12.4 12.4 0 0 0 .937 4.711c.309.746.692 1.457 1.14 2.129q.671 1.008 1.528 1.863a12.3 12.3 0 0 0 3.996 2.668 12.2 12.2 0 0 0 4.711.938h298.512q1.214 0 2.402-.235a12.2 12.2 0 0 0 2.309-.703 12 12 0 0 0 2.129-1.136 12.298 12.298 0 0 0 4.535-5.523q.464-1.12.7-2.31.239-1.188.238-2.402 0-1.213-.239-2.402a12 12 0 0 0-.699-2.309 12.2 12.2 0 0 0-2.668-3.992 12.382 12.382 0 0 0-3.996-2.672 12.5 12.5 0 0 0-2.309-.7 12.4 12.4 0 0 0-2.402-.233M567.703 228.602H203.301q-1.214-.005-2.403.23c-.796.16-1.566.39-2.312.7q-1.125.462-2.133 1.136a12.33 12.33 0 0 0-5.48 10.242q-.001 1.213.238 2.403a12.24 12.24 0 0 0 3.375 6.308 12.3 12.3 0 0 0 4 2.668q1.118.463 2.312.695 1.19.24 2.403.235h364.402q1.214 0 2.402-.235a12.2 12.2 0 0 0 2.31-.703 12.2 12.2 0 0 0 3.991-2.668 12.24 12.24 0 0 0 2.668-3.992 12.2 12.2 0 0 0 .938-4.71q0-1.214-.235-2.403a12.2 12.2 0 0 0-.703-2.309 12.2 12.2 0 0 0-2.668-3.992 12 12 0 0 0-1.863-1.531 12.198 12.198 0 0 0-4.437-1.84 12.4 12.4 0 0 0-2.403-.234m0 0"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Svg4);

/***/ }),

/***/ 1596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ routes)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/interopRequireWildcard.js

function _getRequireWildcardCache(e) {
  if ("function" != typeof WeakMap) return null;
  var r = new WeakMap(),
    t = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(e) {
    return e ? t : r;
  })(e);
}
function _interopRequireWildcard(e, r) {
  if (!r && e && e.__esModule) return e;
  if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
    "default": e
  };
  var t = _getRequireWildcardCache(r);
  if (t && t.has(e)) return t.get(e);
  var n = {
      __proto__: null
    },
    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
    var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
    i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
  }
  return n["default"] = e, t && t.set(e, n), n;
}

// EXTERNAL MODULE: ./node_modules/react-loadable/lib/index.js
var lib = __webpack_require__(3259);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
;// CONCATENATED MODULE: ./.docusaurus/routesChunkNames.json
const routesChunkNames_namespaceObject = /*#__PURE__*/JSON.parse('{"/relatorio-d15":{"__comp":"1f391b9e","__context":{"plugin":"a7456010"},"content":"a26fe03e"},"/docs-f07":{"__comp":"5e95c892","__context":{"plugin":"aba21aa0"}},"/docs-5b6":{"__comp":"a7bd4aaa","__props":"7c110bd0"},"/docs-7fc":{"__comp":"a94703ab"},"/docs/intro-61d":{"__comp":"17896441","content":"0e384e19"},"/-2e1":{"__comp":"c4f5d8e4","__context":{"plugin":"a7456010"},"config":"5e9f5e1a"}}');
;// CONCATENATED MODULE: ./.docusaurus/registry.js
/* harmony default export */ const registry = ({"0e384e19":[()=>Promise.resolve().then(()=>_interopRequireWildcard(__webpack_require__(1512))),"@site/docs/intro.md",/*require.resolve*/(1512)],"17896441":[()=>Promise.resolve().then(()=>_interopRequireWildcard(__webpack_require__(7415))),"@theme/DocItem",/*require.resolve*/(7415)],"1f391b9e":[()=>Promise.resolve().then(()=>_interopRequireWildcard(__webpack_require__(4250))),"@theme/MDXPage",/*require.resolve*/(4250)],"5e95c892":[()=>Promise.resolve().then(()=>_interopRequireWildcard(__webpack_require__(7121))),"@theme/DocsRoot",/*require.resolve*/(7121)],"5e9f5e1a":[()=>Promise.resolve().then(()=>_interopRequireWildcard(__webpack_require__(4784))),"@generated/docusaurus.config",/*require.resolve*/(4784)],"7c110bd0":[()=>Promise.resolve().then(()=>_interopRequireWildcard(__webpack_require__(2614))),"@generated/docusaurus-plugin-content-docs/default/p/docs-b5f.json",/*require.resolve*/(2614)],"a26fe03e":[()=>Promise.resolve().then(()=>_interopRequireWildcard(__webpack_require__(9858))),"@site/src/pages/relatorio.md",/*require.resolve*/(9858)],"a7456010":[()=>Promise.resolve().then(()=>_interopRequireWildcard(__webpack_require__(8552))),"@generated/docusaurus-plugin-content-pages/default/__plugin.json",/*require.resolve*/(8552)],"a7bd4aaa":[()=>Promise.resolve().then(()=>_interopRequireWildcard(__webpack_require__(4532))),"@theme/DocVersionRoot",/*require.resolve*/(4532)],"a94703ab":[()=>Promise.resolve().then(()=>_interopRequireWildcard(__webpack_require__(7151))),"@theme/DocRoot",/*require.resolve*/(7151)],"aba21aa0":[()=>Promise.resolve().then(()=>_interopRequireWildcard(__webpack_require__(7093))),"@generated/docusaurus-plugin-content-docs/default/__plugin.json",/*require.resolve*/(7093)],"c4f5d8e4":[()=>Promise.resolve().then(()=>_interopRequireWildcard(__webpack_require__(2259))),"@site/src/pages/index.js",/*require.resolve*/(2259)]});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/theme-fallback/Loading/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ // Should we translate theme-fallback?
/* eslint-disable @docusaurus/no-untranslated-text */function Loading({error,retry,pastDelay}){if(error){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{textAlign:'center',color:'#fff',backgroundColor:'#fa383e',borderColor:'#fa383e',borderStyle:'solid',borderRadius:'0.25rem',borderWidth:'1px',boxSizing:'border-box',display:'block',padding:'1rem',flex:'0 0 50%',marginLeft:'25%',marginRight:'25%',marginTop:'5rem',maxWidth:'50%',width:'100%'},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:String(error)}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)("button",{type:"button",onClick:retry,children:"Retry"})})]});}if(pastDelay){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'},children:/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{id:"loader",style:{width:128,height:110,position:'absolute',top:'calc(100vh - 64%)'},viewBox:"0 0 45 45",xmlns:"http://www.w3.org/2000/svg",stroke:"#61dafb",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("g",{fill:"none",fillRule:"evenodd",transform:"translate(1 1)",strokeWidth:"2",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("circle",{cx:"22",cy:"22",r:"6",strokeOpacity:"0",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("animate",{attributeName:"r",begin:"1.5s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),/*#__PURE__*/(0,jsx_runtime.jsx)("animate",{attributeName:"stroke-opacity",begin:"1.5s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),/*#__PURE__*/(0,jsx_runtime.jsx)("animate",{attributeName:"stroke-width",begin:"1.5s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("circle",{cx:"22",cy:"22",r:"6",strokeOpacity:"0",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("animate",{attributeName:"r",begin:"3s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),/*#__PURE__*/(0,jsx_runtime.jsx)("animate",{attributeName:"stroke-opacity",begin:"3s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),/*#__PURE__*/(0,jsx_runtime.jsx)("animate",{attributeName:"stroke-width",begin:"3s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("circle",{cx:"22",cy:"22",r:"8",children:/*#__PURE__*/(0,jsx_runtime.jsx)("animate",{attributeName:"r",begin:"0s",dur:"1.5s",values:"6;1;2;3;4;5;6",calcMode:"linear",repeatCount:"indefinite"})})]})})});}return null;}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/flat.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const isTree=x=>typeof x==='object'&&!!x&&Object.keys(x).length>0;/**
 * Takes a tree, and flattens it into a map of keyPath -> value.
 *
 * ```js
 * flat({ a: { b: 1 } }) === { "a.b": 1 };
 * flat({ a: [1, 2] }) === { "a.0": 1, "a.1": 2 };
 * ```
 */function flat(target){const delimiter='.';const output={};function dfs(object,prefix){Object.entries(object).forEach(([key,value])=>{const newKey=prefix?`${prefix}${delimiter}${key}`:key;if(isTree(value)){dfs(value,newKey);}else{output[newKey]=value;}});}dfs(target);return output;}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/routeContext.js
var client_routeContext = __webpack_require__(3102);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/exports/ComponentCreator.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function ComponentCreator(path,hash){// 404 page
if(path==='*'){return lib_default()({loading:Loading,loader:()=>Promise.resolve().then(()=>_interopRequireWildcard(__webpack_require__(2237))),modules:['@theme/NotFound'],webpack:()=>[/*require.resolve*/(2237)],render(loaded,props){const NotFound=loaded.default;return/*#__PURE__*/(0,jsx_runtime.jsx)(client_routeContext/* RouteContextProvider */.W// Do we want a better name than native-default?
,{value:{plugin:{name:'native',id:'default'}},children:/*#__PURE__*/(0,jsx_runtime.jsx)(NotFound,{...props})});}});}const chunkNames=routesChunkNames_namespaceObject[`${path}-${hash}`];// eslint-disable-next-line @typescript-eslint/no-explicit-any
const loader={};const modules=[];const optsWebpack=[];// A map from prop names to chunk names.
// e.g. Suppose the plugin added this as route:
//   { __comp: "...", prop: { foo: "..." }, items: ["...", "..."] }
// It will become:
//   { __comp: "...", "prop.foo": "...", "items.0": "...", "items.1": ... }
// Loadable.Map will _map_ over `loader` and load each key.
const flatChunkNames=flat(chunkNames);Object.entries(flatChunkNames).forEach(([keyPath,chunkName])=>{const chunkRegistry=registry[chunkName];if(chunkRegistry){// eslint-disable-next-line prefer-destructuring
loader[keyPath]=chunkRegistry[0];modules.push(chunkRegistry[1]);optsWebpack.push(chunkRegistry[2]);}});return lib_default().Map({loading:Loading,loader,modules,webpack:()=>optsWebpack,render(loaded,props){// `loaded` will be a map from key path (as returned from the flattened
// chunk names) to the modules loaded from the loaders. We now have to
// restore the chunk names' previous shape from this flat record.
// We do so by taking advantage of the existing `chunkNames` and replacing
// each chunk name with its loaded module, so we don't create another
// object from scratch.
const loadedModules=JSON.parse(JSON.stringify(chunkNames));Object.entries(loaded).forEach(([keyPath,loadedModule])=>{// JSON modules are also loaded as `{ default: ... }` (`import()`
// semantics) but we just want to pass the actual value to props.
const chunk=loadedModule.default;// One loaded chunk can only be one of two things: a module (props) or a
// component. Modules are always JSON, so `default` always exists. This
// could only happen with a user-defined component.
if(!chunk){throw new Error(`The page component at ${path} doesn't have a default export. This makes it impossible to render anything. Consider default-exporting a React component.`);}// A module can be a primitive, for example, if the user stored a string
// as a prop. However, there seems to be a bug with swc-loader's CJS
// logic, in that it would load a JSON module with content "foo" as
// `{ default: "foo", 0: "f", 1: "o", 2: "o" }`. Just to be safe, we
// first make sure that the chunk is non-primitive.
if(typeof chunk==='object'||typeof chunk==='function'){Object.keys(loadedModule).filter(k=>k!=='default').forEach(nonDefaultKey=>{chunk[nonDefaultKey]=loadedModule[nonDefaultKey];});}// We now have this chunk prepared. Go down the key path and replace the
// chunk name with the actual chunk.
let val=loadedModules;const keyPaths=keyPath.split('.');keyPaths.slice(0,-1).forEach(k=>{val=val[k];});val[keyPaths[keyPaths.length-1]]=chunk;});/* eslint-disable no-underscore-dangle */const Component=loadedModules.__comp;delete loadedModules.__comp;const routeContext=loadedModules.__context;delete loadedModules.__context;const routeProps=loadedModules.__props;delete loadedModules.__props;/* eslint-enable no-underscore-dangle */ // Is there any way to put this RouteContextProvider upper in the tree?
return/*#__PURE__*/(0,jsx_runtime.jsx)(client_routeContext/* RouteContextProvider */.W,{value:routeContext,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Component,{...loadedModules,...routeProps,...props})});}});}
;// CONCATENATED MODULE: ./.docusaurus/routes.js
/* harmony default export */ const routes = ([{path:'/relatorio',component:ComponentCreator('/relatorio','d15'),exact:true},{path:'/docs',component:ComponentCreator('/docs','f07'),routes:[{path:'/docs',component:ComponentCreator('/docs','5b6'),routes:[{path:'/docs',component:ComponentCreator('/docs','7fc'),routes:[{path:'/docs/intro',component:ComponentCreator('/docs/intro','61d'),exact:true,sidebar:"tutorialSidebar"}]}]}]},{path:'/',component:ComponentCreator('/','2e1'),exact:true},{path:'*',component:ComponentCreator('*')}]);

/***/ }),

/***/ 5643:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $3: () => (/* binding */ createStatefulBrokenLinks),
/* harmony export */   B6: () => (/* binding */ useBrokenLinksContext),
/* harmony export */   k5: () => (/* binding */ BrokenLinksProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const createStatefulBrokenLinks=()=>{// Set to dedup, as it's not useful to collect multiple times the same value
const allAnchors=new Set();const allLinks=new Set();return{collectAnchor:anchor=>{typeof anchor!=='undefined'&&allAnchors.add(anchor);},collectLink:link=>{typeof link!=='undefined'&&allLinks.add(link);},getCollectedAnchors:()=>[...allAnchors],getCollectedLinks:()=>[...allLinks]};};const Context=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({collectAnchor:()=>{// No-op for client
},collectLink:()=>{// No-op for client
}});const useBrokenLinksContext=()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);function BrokenLinksProvider({children,brokenLinks}){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Context.Provider,{value:brokenLinks,children:children});}

/***/ }),

/***/ 6125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ Context),
/* harmony export */   x: () => (/* binding */ BrowserContextProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Encapsulate the logic to avoid React hydration problems
// See https://www.joshwcomeau.com/react/the-perils-of-rehydration/
// On first client-side render, we need to render exactly as the server rendered
// isBrowser is set to true only after a successful hydration
// Note, isBrowser is not part of useDocusaurusContext() for perf reasons
// Using useDocusaurusContext() (much more common need) should not trigger
// re-rendering after a successful hydration
const Context=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(false);function BrowserContextProvider({children}){const[isBrowser,setIsBrowser]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{setIsBrowser(true);},[]);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Context.Provider,{value:isBrowser,children:children});}

/***/ }),

/***/ 6988:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  o: () => (/* binding */ Context),
  l: () => (/* binding */ DocusaurusContextProvider)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./.docusaurus/docusaurus.config.mjs
var docusaurus_config = __webpack_require__(4784);
;// CONCATENATED MODULE: ./.docusaurus/globalData.json
const globalData_namespaceObject = /*#__PURE__*/JSON.parse('{"docusaurus-plugin-content-docs":{"default":{"path":"/docs","versions":[{"name":"current","label":"Next","isLast":true,"path":"/docs","mainDocId":"intro","docs":[{"id":"intro","path":"/docs/intro","sidebar":"tutorialSidebar"}],"draftIds":[],"sidebars":{"tutorialSidebar":{"link":{"path":"/docs/intro","label":"intro"}}}}],"breadcrumbs":true}}}');
;// CONCATENATED MODULE: ./.docusaurus/i18n.json
const i18n_namespaceObject = /*#__PURE__*/JSON.parse('{"defaultLocale":"en","locales":["en"],"path":"i18n","currentLocale":"en","localeConfigs":{"en":{"label":"English","direction":"ltr","htmlLang":"en","calendar":"gregory","path":"en"}}}');
// EXTERNAL MODULE: ./.docusaurus/codeTranslations.json
var codeTranslations = __webpack_require__(2654);
;// CONCATENATED MODULE: ./.docusaurus/site-metadata.json
const site_metadata_namespaceObject = /*#__PURE__*/JSON.parse('{"docusaurusVersion":"3.3.2","siteVersion":"0.0.0","pluginVersions":{"docusaurus-plugin-content-docs":{"type":"package","name":"@docusaurus/plugin-content-docs","version":"3.3.2"},"docusaurus-plugin-content-blog":{"type":"package","name":"@docusaurus/plugin-content-blog","version":"3.3.2"},"docusaurus-plugin-content-pages":{"type":"package","name":"@docusaurus/plugin-content-pages","version":"3.3.2"},"docusaurus-plugin-sitemap":{"type":"package","name":"@docusaurus/plugin-sitemap","version":"3.3.2"},"docusaurus-theme-classic":{"type":"package","name":"@docusaurus/theme-classic","version":"3.3.2"}}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/docusaurusContext.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Static value on purpose: don't make it dynamic!
// Using context is still useful for testability reasons.
const contextValue={siteConfig: docusaurus_config["default"],siteMetadata: site_metadata_namespaceObject,globalData: globalData_namespaceObject,i18n: i18n_namespaceObject,codeTranslations: codeTranslations};const Context=/*#__PURE__*/react.createContext(contextValue);function DocusaurusContextProvider({children}){return/*#__PURE__*/(0,jsx_runtime.jsx)(Context.Provider,{value:contextValue,children:children});}

/***/ }),

/***/ 7489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ErrorBoundary)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/ExecutionEnvironment.js
var ExecutionEnvironment = __webpack_require__(8193);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(5260);
// EXTERNAL MODULE: ./node_modules/@docusaurus/utils-common/lib/index.js
var lib = __webpack_require__(440);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 53 modules
var Layout = __webpack_require__(7356);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/routeContext.js
var routeContext = __webpack_require__(3102);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/theme-fallback/Error/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ // Should we translate theme-fallback?
/* eslint-disable @docusaurus/no-untranslated-text */function ErrorDisplay({error,tryAgain}){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'flex-start',minHeight:'100vh',width:'100%',maxWidth:'80ch',fontSize:'20px',margin:'0 auto',padding:'1rem'},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h1",{style:{fontSize:'3rem'},children:"This page crashed"}),/*#__PURE__*/(0,jsx_runtime.jsx)("button",{type:"button",onClick:tryAgain,style:{margin:'1rem 0',fontSize:'2rem',cursor:'pointer',borderRadius:20,padding:'1rem'},children:"Try again"}),/*#__PURE__*/(0,jsx_runtime.jsx)(ErrorBoundaryError,{error:error})]});}function ErrorBoundaryError({error}){const causalChain=(0,lib.getErrorCausalChain)(error);const fullMessage=causalChain.map(e=>e.message).join('\n\nCause:\n');return/*#__PURE__*/(0,jsx_runtime.jsx)("p",{style:{whiteSpace:'pre-wrap'},children:fullMessage});}// A bit hacky: we need to add an artificial RouteContextProvider here
// The goal is to be able to render the error inside the theme layout
// Without this, our theme classic would crash due to lack of route context
// See also https://github.com/facebook/docusaurus/pull/9852
function ErrorRouteContextProvider({children}){return/*#__PURE__*/(0,jsx_runtime.jsx)(routeContext/* RouteContextProvider */.W,{value:{plugin:{name:'docusaurus-core-error-boundary',id:'default'}},children:children});}function Error({error,tryAgain}){// We wrap the error in its own error boundary because the layout can actually
// throw too... Only the ErrorDisplay component is simple enough to be
// considered safe to never throw
return/*#__PURE__*/(0,jsx_runtime.jsx)(ErrorRouteContextProvider,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(ErrorBoundary// Note: we display the original error here, not the error that we
// captured in this extra error boundary
,{fallback:()=>/*#__PURE__*/(0,jsx_runtime.jsx)(ErrorDisplay,{error:error,tryAgain:tryAgain}),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Head/* default */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("title",{children:"Page Error"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Layout/* default */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(ErrorDisplay,{error:error,tryAgain:tryAgain})})]})});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/exports/ErrorBoundary.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// eslint-disable-next-line react/function-component-definition
const DefaultFallback=params=>/*#__PURE__*/(0,jsx_runtime.jsx)(Error,{...params});class ErrorBoundary extends react.Component{constructor(props){super(props);this.state={error:null};}componentDidCatch(error){// Catch errors in any components below and re-render with error message
if(ExecutionEnvironment/* default */.A.canUseDOM){this.setState({error});}}render(){const{children}=this.props;const{error}=this.state;if(error){const fallbackParams={error,tryAgain:()=>this.setState({error:null})};const fallback=this.props.fallback??DefaultFallback;return fallback(fallbackParams);}// See https://github.com/facebook/docusaurus/issues/6337#issuecomment-1012913647
return children??null;}}

/***/ }),

/***/ 8193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const canUseDOM=typeof window!=='undefined'&&'document'in window&&'createElement'in window.document;const ExecutionEnvironment={canUseDOM,// window.attachEvent is IE-specific; it's very likely Docusaurus won't work
// on IE anyway.
canUseEventListeners:canUseDOM&&('addEventListener'in window||'attachEvent'in window),canUseIntersectionObserver:canUseDOM&&'IntersectionObserver'in window,canUseViewport:canUseDOM&&'screen'in window};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExecutionEnvironment);

/***/ }),

/***/ 5260:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Head)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(545);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Head(props){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_helmet_async__WEBPACK_IMPORTED_MODULE_1__/* .Helmet */ .mg,{...props});}

/***/ }),

/***/ 725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ exports_Link)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(6347);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js + 1 modules
var inheritsLoose = __webpack_require__(2892);
// EXTERNAL MODULE: ./node_modules/history/esm/history.js + 1 modules
var esm_history = __webpack_require__(1513);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(8168);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(8587);
// EXTERNAL MODULE: ./node_modules/tiny-invariant/dist/esm/tiny-invariant.js
var tiny_invariant = __webpack_require__(1561);
;// CONCATENATED MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js











/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter = /*#__PURE__*/function (_React$Component) {
  (0,inheritsLoose/* default */.A)(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = (0,esm_history/* createBrowserHistory */.zR)(_this.props);
    return _this;
  }

  var _proto = BrowserRouter.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react.createElement(react_router/* Router */.Ix, {
      history: this.history,
      children: this.props.children
    });
  };

  return BrowserRouter;
}(react.Component);

if (false) {}

/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter = /*#__PURE__*/function (_React$Component) {
  (0,inheritsLoose/* default */.A)(HashRouter, _React$Component);

  function HashRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = (0,esm_history/* createHashHistory */.TM)(_this.props);
    return _this;
  }

  var _proto = HashRouter.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react.createElement(react_router/* Router */.Ix, {
      history: this.history,
      children: this.props.children
    });
  };

  return HashRouter;
}(react.Component);

if (false) {}

var resolveToLocation = function resolveToLocation(to, currentLocation) {
  return typeof to === "function" ? to(currentLocation) : to;
};
var normalizeToLocation = function normalizeToLocation(to, currentLocation) {
  return typeof to === "string" ? (0,esm_history/* createLocation */.yJ)(to, null, null, currentLocation) : to;
};

var forwardRefShim = function forwardRefShim(C) {
  return C;
};

var forwardRef = react.forwardRef;

if (typeof forwardRef === "undefined") {
  forwardRef = forwardRefShim;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var LinkAnchor = forwardRef(function (_ref, forwardedRef) {
  var innerRef = _ref.innerRef,
      navigate = _ref.navigate,
      _onClick = _ref.onClick,
      rest = (0,objectWithoutPropertiesLoose/* default */.A)(_ref, ["innerRef", "navigate", "onClick"]);

  var target = rest.target;

  var props = (0,esm_extends/* default */.A)({}, rest, {
    onClick: function onClick(event) {
      try {
        if (_onClick) _onClick(event);
      } catch (ex) {
        event.preventDefault();
        throw ex;
      }

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && ( // ignore everything but left clicks
      !target || target === "_self") && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();
          navigate();
        }
    }
  }); // React 15 compat


  if (forwardRefShim !== forwardRef) {
    props.ref = forwardedRef || innerRef;
  } else {
    props.ref = innerRef;
  }
  /* eslint-disable-next-line jsx-a11y/anchor-has-content */


  return /*#__PURE__*/react.createElement("a", props);
});

if (false) {}
/**
 * The public API for rendering a history-aware <a>.
 */


var Link = forwardRef(function (_ref2, forwardedRef) {
  var _ref2$component = _ref2.component,
      component = _ref2$component === void 0 ? LinkAnchor : _ref2$component,
      replace = _ref2.replace,
      to = _ref2.to,
      innerRef = _ref2.innerRef,
      rest = (0,objectWithoutPropertiesLoose/* default */.A)(_ref2, ["component", "replace", "to", "innerRef"]);

  return /*#__PURE__*/react.createElement(react_router/* __RouterContext */.XZ.Consumer, null, function (context) {
    !context ?  false ? 0 : (0,tiny_invariant/* default */.A)(false) : void 0;
    var history = context.history;
    var location = normalizeToLocation(resolveToLocation(to, context.location), context.location);
    var href = location ? history.createHref(location) : "";

    var props = (0,esm_extends/* default */.A)({}, rest, {
      href: href,
      navigate: function navigate() {
        var location = resolveToLocation(to, context.location);
        var isDuplicateNavigation = (0,esm_history/* createPath */.AO)(context.location) === (0,esm_history/* createPath */.AO)(normalizeToLocation(location));
        var method = replace || isDuplicateNavigation ? history.replace : history.push;
        method(location);
      }
    }); // React 15 compat


    if (forwardRefShim !== forwardRef) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return /*#__PURE__*/react.createElement(component, props);
  });
});

if (false) { var refType, toType; }

var forwardRefShim$1 = function forwardRefShim(C) {
  return C;
};

var forwardRef$1 = react.forwardRef;

if (typeof forwardRef$1 === "undefined") {
  forwardRef$1 = forwardRefShim$1;
}

function joinClassnames() {
  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
    classnames[_key] = arguments[_key];
  }

  return classnames.filter(function (i) {
    return i;
  }).join(" ");
}
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */


var NavLink = forwardRef$1(function (_ref, forwardedRef) {
  var _ref$ariaCurrent = _ref["aria-current"],
      ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent,
      _ref$activeClassName = _ref.activeClassName,
      activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName,
      activeStyle = _ref.activeStyle,
      classNameProp = _ref.className,
      exact = _ref.exact,
      isActiveProp = _ref.isActive,
      locationProp = _ref.location,
      sensitive = _ref.sensitive,
      strict = _ref.strict,
      styleProp = _ref.style,
      to = _ref.to,
      innerRef = _ref.innerRef,
      rest = (0,objectWithoutPropertiesLoose/* default */.A)(_ref, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);

  return /*#__PURE__*/react.createElement(react_router/* __RouterContext */.XZ.Consumer, null, function (context) {
    !context ?  false ? 0 : (0,tiny_invariant/* default */.A)(false) : void 0;
    var currentLocation = locationProp || context.location;
    var toLocation = normalizeToLocation(resolveToLocation(to, currentLocation), currentLocation);
    var path = toLocation.pathname; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202

    var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    var match = escapedPath ? (0,react_router/* matchPath */.B6)(currentLocation.pathname, {
      path: escapedPath,
      exact: exact,
      sensitive: sensitive,
      strict: strict
    }) : null;
    var isActive = !!(isActiveProp ? isActiveProp(match, currentLocation) : match);
    var className = typeof classNameProp === "function" ? classNameProp(isActive) : classNameProp;
    var style = typeof styleProp === "function" ? styleProp(isActive) : styleProp;

    if (isActive) {
      className = joinClassnames(className, activeClassName);
      style = (0,esm_extends/* default */.A)({}, style, activeStyle);
    }

    var props = (0,esm_extends/* default */.A)({
      "aria-current": isActive && ariaCurrent || null,
      className: className,
      style: style,
      to: toLocation
    }, rest); // React 15 compat


    if (forwardRefShim$1 !== forwardRef$1) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return /*#__PURE__*/react.createElement(Link, props);
  });
});

if (false) { var ariaCurrentType; }


//# sourceMappingURL=react-router-dom.js.map

// EXTERNAL MODULE: ./node_modules/@docusaurus/utils-common/lib/index.js
var lib = __webpack_require__(440);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(4586);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/isInternalUrl.js
var isInternalUrl = __webpack_require__(6654);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/ExecutionEnvironment.js
var ExecutionEnvironment = __webpack_require__(8193);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBrokenLinks.js
var useBrokenLinks = __webpack_require__(2521);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(6025);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// TODO all this wouldn't be necessary if we used ReactRouter basename feature
// We don't automatically add base urls to all links,
// only the "safe" ones, starting with / (like /docs/introduction)
// this is because useBaseUrl() actually transforms relative links
// like "introduction" to "/baseUrl/introduction" => bad behavior to fix
const shouldAddBaseUrlAutomatically=to=>to.startsWith('/');function Link_Link({isNavLink,to,href,activeClassName,isActive,'data-noBrokenLinkCheck':noBrokenLinkCheck,autoAddBaseUrl=true,...props},forwardedRef){const{siteConfig:{trailingSlash,baseUrl}}=(0,useDocusaurusContext/* default */.A)();const{withBaseUrl}=(0,useBaseUrl/* useBaseUrlUtils */.h)();const brokenLinks=(0,useBrokenLinks/* default */.A)();const innerRef=(0,react.useRef)(null);(0,react.useImperativeHandle)(forwardedRef,()=>innerRef.current);// IMPORTANT: using to or href should not change anything
// For example, MDX links will ALWAYS give us the href props
// Using one prop or the other should not be used to distinguish
// internal links (/docs/myDoc) from external links (https://github.com)
const targetLinkUnprefixed=to||href;function maybeAddBaseUrl(str){return autoAddBaseUrl&&shouldAddBaseUrlAutomatically(str)?withBaseUrl(str):str;}const isInternal=(0,isInternalUrl/* default */.A)(targetLinkUnprefixed);// pathname:// is a special "protocol" we use to tell Docusaurus link
// that a link is not "internal" and that we shouldn't use history.push()
// this is not ideal but a good enough escape hatch for now
// see https://github.com/facebook/docusaurus/issues/3309
// note: we want baseUrl to be appended (see issue for details)
// TODO read routes and automatically detect internal/external links?
const targetLinkWithoutPathnameProtocol=targetLinkUnprefixed?.replace('pathname://','');// TODO we should use ReactRouter basename feature instead!
// Automatically apply base url in links that start with /
let targetLink=typeof targetLinkWithoutPathnameProtocol!=='undefined'?maybeAddBaseUrl(targetLinkWithoutPathnameProtocol):undefined;if(targetLink&&isInternal){targetLink=(0,lib.applyTrailingSlash)(targetLink,{trailingSlash,baseUrl});}const preloaded=(0,react.useRef)(false);const LinkComponent=isNavLink?NavLink:Link;const IOSupported=ExecutionEnvironment/* default */.A.canUseIntersectionObserver;const ioRef=(0,react.useRef)();const handleRef=el=>{innerRef.current=el;if(IOSupported&&el&&isInternal){// If IO supported and element reference found, set up Observer.
ioRef.current=new window.IntersectionObserver(entries=>{entries.forEach(entry=>{if(el===entry.target){// If element is in viewport, stop observing and run callback.
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
if(entry.isIntersecting||entry.intersectionRatio>0){ioRef.current.unobserve(el);ioRef.current.disconnect();if(targetLink!=null){window.docusaurus.prefetch(targetLink);}}}});});// Add element to the observer.
ioRef.current.observe(el);}};const onInteractionEnter=()=>{if(!preloaded.current&&targetLink!=null){window.docusaurus.preload(targetLink);preloaded.current=true;}};(0,react.useEffect)(()=>{// If IO is not supported. We prefetch by default (only once).
if(!IOSupported&&isInternal){if(targetLink!=null){window.docusaurus.prefetch(targetLink);}}// When unmounting, stop intersection observer from watching.
return()=>{if(IOSupported&&ioRef.current){ioRef.current.disconnect();}};},[ioRef,targetLink,IOSupported,isInternal]);// It is simple local anchor link targeting current page?
const isAnchorLink=targetLink?.startsWith('#')??false;// See also RR logic:
// https://github.com/remix-run/react-router/blob/v5/packages/react-router-dom/modules/Link.js#L47
const hasInternalTarget=!props.target||props.target==='_self';// Should we use a regular <a> tag instead of React-Router Link component?
const isRegularHtmlLink=!targetLink||!isInternal||!hasInternalTarget||isAnchorLink;if(!noBrokenLinkCheck&&(isAnchorLink||!isRegularHtmlLink)){brokenLinks.collectLink(targetLink);}if(props.id){brokenLinks.collectAnchor(props.id);}return isRegularHtmlLink?/*#__PURE__*/ // eslint-disable-next-line jsx-a11y/anchor-has-content, @docusaurus/no-html-links
(0,jsx_runtime.jsx)("a",{ref:innerRef,href:targetLink,...(targetLinkUnprefixed&&!isInternal&&{target:'_blank',rel:'noopener noreferrer'}),...props}):/*#__PURE__*/(0,jsx_runtime.jsx)(LinkComponent,{...props,onMouseEnter:onInteractionEnter,onTouchStart:onInteractionEnter,innerRef:handleRef,to:targetLink// Avoid "React does not recognize the `activeClassName` prop on a DOM
// element"
,...(isNavLink&&{isActive,activeClassName})});}/* harmony default export */ const exports_Link = (/*#__PURE__*/react.forwardRef(Link_Link));

/***/ }),

/***/ 418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>null);

/***/ }),

/***/ 1312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Translate),
  T: () => (/* binding */ translate)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Interpolate.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function interpolate(text,values){// eslint-disable-next-line prefer-named-capture-group
const segments=text.split(/(\{\w+\})/).map((seg,index)=>{// Odd indices (1, 3, 5...) of the segments are (potentially) interpolatable
if(index%2===1){const value=values?.[seg.slice(1,-1)];if(value!==undefined){return value;}// No match: add warning? There's no way to "escape" interpolation though
}return seg;});if(segments.some(seg=>/*#__PURE__*/(0,react.isValidElement)(seg))){return segments.map((seg,index)=>/*#__PURE__*/(0,react.isValidElement)(seg)?/*#__PURE__*/react.cloneElement(seg,{key:index}):seg).filter(seg=>seg!=='');}return segments.join('');}function Interpolate({children,values}){if(typeof children!=='string'){throw new Error(`The Docusaurus <Interpolate> component only accept simple string values. Received: ${/*#__PURE__*/isValidElement(children)?'React element':typeof children}`);}return/*#__PURE__*/_jsx(_Fragment,{children:interpolate(children,values)});}
// EXTERNAL MODULE: ./.docusaurus/codeTranslations.json
var codeTranslations = __webpack_require__(2654);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Can't read it from context, due to exposing imperative API
function getLocalizedMessage({id,message}){if(typeof id==='undefined'&&typeof message==='undefined'){throw new Error('Docusaurus translation declarations must have at least a translation id or a default translation message');}return codeTranslations[id??message]??message??id;}// Imperative translation API is useful for some edge-cases:
// - translating page titles (meta)
// - translating string props (input placeholders, image alt, aria labels...)
function translate({message,id},values){const localizedMessage=getLocalizedMessage({message,id});return interpolate(localizedMessage,values);}// Maybe we'll want to improve this component with additional features
// Like toggling a translation mode that adds a little translation button near
// the text?
function Translate({children,id,values}){if(children&&typeof children!=='string'){console.warn('Illegal <Translate> children',children);throw new Error('The Docusaurus <Translate> component only accept simple string values');}const localizedMessage=getLocalizedMessage({message:children,id});return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:interpolate(localizedMessage,values)});}

/***/ }),

/***/ 7065:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ DEFAULT_PLUGIN_ID)
/* harmony export */ });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ // Constants used on the client-side: duplicated from server-side code
const DEFAULT_PLUGIN_ID='default';

/***/ }),

/***/ 6654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ isInternalUrl),
/* harmony export */   z: () => (/* binding */ hasProtocol)
/* harmony export */ });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function hasProtocol(url){return /^(?:\w*:|\/\/)/.test(url);}function isInternalUrl(url){return typeof url!=='undefined'&&!hasProtocol(url);}

/***/ }),

/***/ 6025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useBaseUrl),
/* harmony export */   h: () => (/* binding */ useBaseUrlUtils)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4586);
/* harmony import */ var _isInternalUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6654);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function addBaseUrl(siteUrl,baseUrl,url,{forcePrependBaseUrl=false,absolute=false}={}){// It never makes sense to add base url to a local anchor url, or one with a
// protocol
if(!url||url.startsWith('#')||(0,_isInternalUrl__WEBPACK_IMPORTED_MODULE_2__/* .hasProtocol */ .z)(url)){return url;}if(forcePrependBaseUrl){return baseUrl+url.replace(/^\//,'');}// /baseUrl -> /baseUrl/
// https://github.com/facebook/docusaurus/issues/6315
if(url===baseUrl.replace(/\/$/,'')){return baseUrl;}// We should avoid adding the baseurl twice if it's already there
const shouldAddBaseUrl=!url.startsWith(baseUrl);const basePath=shouldAddBaseUrl?baseUrl+url.replace(/^\//,''):url;return absolute?siteUrl+basePath:basePath;}function useBaseUrlUtils(){const{siteConfig:{baseUrl,url:siteUrl}}=(0,_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)();const withBaseUrl=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((url,options)=>addBaseUrl(siteUrl,baseUrl,url,options),[siteUrl,baseUrl]);return{withBaseUrl};}function useBaseUrl(url,options={}){const{withBaseUrl}=useBaseUrlUtils();return withBaseUrl(url,options);}

/***/ }),

/***/ 2521:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useBrokenLinks)
/* harmony export */ });
/* harmony import */ var _BrokenLinksContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5643);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useBrokenLinks(){return (0,_BrokenLinksContext__WEBPACK_IMPORTED_MODULE_0__/* .useBrokenLinksContext */ .B6)();}

/***/ }),

/***/ 4586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useDocusaurusContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurusContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6988);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useDocusaurusContext(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_docusaurusContext__WEBPACK_IMPORTED_MODULE_1__/* .Context */ .o);}

/***/ }),

/***/ 2303:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useIsBrowser)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _browserContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6125);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useIsBrowser(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_browserContext__WEBPACK_IMPORTED_MODULE_1__/* .Context */ .o);}

/***/ }),

/***/ 205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8193);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * This hook is like `useLayoutEffect`, but without the SSR warning.
 * It seems hacky but it's used in many React libs (Redux, Formik...).
 * Also mentioned here: https://github.com/facebook/react/issues/16956
 *
 * It is useful when you need to update a ref as soon as possible after a React
 * render (before `useEffect`).
 *
 * TODO should become unnecessary in React v19?
 * https://github.com/facebook/react/pull/26395
 * This was added in core with Docusaurus v3 but kept undocumented on purpose
 */const useIsomorphicLayoutEffect=_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.canUseDOM?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect;/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useIsomorphicLayoutEffect);

/***/ }),

/***/ 3102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ RouteContextProvider),
/* harmony export */   o: () => (/* binding */ Context)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const Context=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);function mergeContexts({parent,value}){if(!parent){if(!value){throw new Error('Unexpected: no Docusaurus route context found');}else if(!('plugin'in value)){throw new Error('Unexpected: Docusaurus topmost route context has no `plugin` attribute');}return value;}// TODO deep merge this
const data={...parent.data,...value?.data};return{// Nested routes are not supposed to override plugin attribute
plugin:parent.plugin,data};}function RouteContextProvider({children,value}){const parent=react__WEBPACK_IMPORTED_MODULE_0__.useContext(Context);const mergedValue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>mergeContexts({parent,value}),[parent,value]);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Context.Provider,{value:mergedValue,children:children});}

/***/ }),

/***/ 6533:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ serverEntry)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(6347);
// EXTERNAL MODULE: ./node_modules/react-helmet-async/lib/index.module.js
var index_module = __webpack_require__(545);
// EXTERNAL MODULE: ./node_modules/react-loadable/lib/index.js
var lib = __webpack_require__(3259);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
// EXTERNAL MODULE: ./node_modules/react-dom/server.node.js
var server_node = __webpack_require__(4362);
// EXTERNAL MODULE: external "stream"
var external_stream_ = __webpack_require__(2203);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/renderToHtml.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */async function renderToHtml(app){// Inspired from
// https://react.dev/reference/react-dom/server/renderToPipeableStream#waiting-for-all-content-to-load-for-crawlers-and-static-generation
// https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby/cache-dir/static-entry.js
const writableStream=new WritableAsPromise();const{pipe}=(0,server_node/* renderToPipeableStream */.eU)(app,{onError(error){writableStream.destroy(error);},onAllReady(){pipe(writableStream);}});return writableStream.getPromise();}// WritableAsPromise inspired by https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby/cache-dir/server-utils/writable-as-promise.js
/* eslint-disable no-underscore-dangle */class WritableAsPromise extends external_stream_.Writable{_output;_deferred;constructor(){super();this._output=``;this._deferred={promise:null,resolve:()=>null,reject:()=>null};this._deferred.promise=new Promise((resolve,reject)=>{this._deferred.resolve=resolve;this._deferred.reject=reject;});}_write(chunk,_enc,next){this._output+=chunk.toString();next();}_destroy(error,next){if(error instanceof Error){this._deferred.reject(error);}else{next();}}end(){this._deferred.resolve(this._output);return this.destroy();}getPromise(){return this._deferred.promise;}}
// EXTERNAL MODULE: ./.docusaurus/routes.js + 7 modules
var routes = __webpack_require__(1596);
// EXTERNAL MODULE: ./node_modules/react-router-config/esm/react-router-config.js
var react_router_config = __webpack_require__(2831);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/preload.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Helper function to make sure all async components for that particular route
 * is preloaded before rendering. This is especially useful to avoid loading
 * screens.
 *
 * @param pathname the route pathname, example: /docs/installation
 * @returns Promise object represents whether pathname has been preloaded
 */function preload(pathname){const matches=Array.from(new Set([pathname,decodeURI(pathname)])).map(p=>(0,react_router_config/* matchRoutes */.u)(routes/* default */.A,p)).flat();return Promise.all(matches.map(match=>match.route.component.preload?.()));}
;// CONCATENATED MODULE: ./.docusaurus/client-modules.js
/* harmony default export */ const client_modules = ([__webpack_require__(4835),__webpack_require__(6134),__webpack_require__(6294),__webpack_require__(5364)]);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/theme-fallback/Root/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Wrapper at the very top of the app, that is applied constantly
// and does not depend on current route (unlike the layout)
//
// Gives the opportunity to add stateful providers on top of the app
// and these providers won't reset state when we navigate
//
// See https://github.com/facebook/docusaurus/issues/3919
function Root({children}){return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:children});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(5260);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(4586);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(6025);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(6342);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js + 2 modules
var metadataUtils = __webpack_require__(1003);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useAlternatePageUtils.js
var useAlternatePageUtils = __webpack_require__(2131);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useKeyboardNavigation.js + 1 modules
var useKeyboardNavigation = __webpack_require__(1386);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/searchUtils.js
var searchUtils = __webpack_require__(2967);
// EXTERNAL MODULE: ./node_modules/@docusaurus/utils-common/lib/index.js
var utils_common_lib = __webpack_require__(440);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/SearchMetadata/index.js
var SearchMetadata = __webpack_require__(1463);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/SiteMetadata/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// TODO move to SiteMetadataDefaults or theme-common ?
// Useful for i18n/SEO
// See https://developers.google.com/search/docs/advanced/crawling/localized-versions
// See https://github.com/facebook/docusaurus/issues/3317
function AlternateLangHeaders(){const{i18n:{currentLocale,defaultLocale,localeConfigs}}=(0,useDocusaurusContext/* default */.A)();const alternatePageUtils=(0,useAlternatePageUtils/* useAlternatePageUtils */.o)();const currentHtmlLang=localeConfigs[currentLocale].htmlLang;// HTML lang is a BCP 47 tag, but the Open Graph protocol requires
// using underscores instead of dashes.
// See https://ogp.me/#optional
// See https://en.wikipedia.org/wiki/IETF_language_tag)
const bcp47ToOpenGraphLocale=code=>code.replace('-','_');// Note: it is fine to use both "x-default" and "en" to target the same url
// See https://www.searchviu.com/en/multiple-hreflang-tags-one-url/
return/*#__PURE__*/(0,jsx_runtime.jsxs)(Head/* default */.A,{children:[Object.entries(localeConfigs).map(([locale,{htmlLang}])=>/*#__PURE__*/(0,jsx_runtime.jsx)("link",{rel:"alternate",href:alternatePageUtils.createUrl({locale,fullyQualified:true}),hrefLang:htmlLang},locale)),/*#__PURE__*/(0,jsx_runtime.jsx)("link",{rel:"alternate",href:alternatePageUtils.createUrl({locale:defaultLocale,fullyQualified:true}),hrefLang:"x-default"}),/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{property:"og:locale",content:bcp47ToOpenGraphLocale(currentHtmlLang)}),Object.values(localeConfigs).filter(config=>currentHtmlLang!==config.htmlLang).map(config=>/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{property:"og:locale:alternate",content:bcp47ToOpenGraphLocale(config.htmlLang)},`meta-og-${config.htmlLang}`))]});}// Default canonical url inferred from current page location pathname
function useDefaultCanonicalUrl(){const{siteConfig:{url:siteUrl,baseUrl,trailingSlash}}=(0,useDocusaurusContext/* default */.A)();// TODO using useLocation().pathname is not a super idea
// See https://github.com/facebook/docusaurus/issues/9170
const{pathname}=(0,react_router/* useLocation */.zy)();const canonicalPathname=(0,utils_common_lib.applyTrailingSlash)((0,useBaseUrl/* default */.A)(pathname),{trailingSlash,baseUrl});return siteUrl+canonicalPathname;}// TODO move to SiteMetadataDefaults or theme-common ?
function CanonicalUrlHeaders({permalink}){const{siteConfig:{url:siteUrl}}=(0,useDocusaurusContext/* default */.A)();const defaultCanonicalUrl=useDefaultCanonicalUrl();const canonicalUrl=permalink?`${siteUrl}${permalink}`:defaultCanonicalUrl;return/*#__PURE__*/(0,jsx_runtime.jsxs)(Head/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{property:"og:url",content:canonicalUrl}),/*#__PURE__*/(0,jsx_runtime.jsx)("link",{rel:"canonical",href:canonicalUrl})]});}function SiteMetadata(){const{i18n:{currentLocale}}=(0,useDocusaurusContext/* default */.A)();// TODO maybe move these 2 themeConfig to siteConfig?
// These seems useful for other themes as well
const{metadata,image:defaultImage}=(0,useThemeConfig/* useThemeConfig */.p)();return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Head/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),/*#__PURE__*/(0,jsx_runtime.jsx)("body",{className:useKeyboardNavigation/* keyboardFocusedClassName */.w})]}),defaultImage&&/*#__PURE__*/(0,jsx_runtime.jsx)(metadataUtils/* PageMetadata */.be,{image:defaultImage}),/*#__PURE__*/(0,jsx_runtime.jsx)(CanonicalUrlHeaders,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(AlternateLangHeaders,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(SearchMetadata/* default */.A,{tag:searchUtils/* DEFAULT_SEARCH_TAG */.Cy,locale:currentLocale}),/*#__PURE__*/(0,jsx_runtime.jsx)(Head/* default */.A,{children:metadata.map((metadatum,i)=>/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{...metadatum},i))})]});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/normalizeLocation.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Memoize previously normalized pathnames.
const pathnames=new Map();function normalizeLocation(location){if(pathnames.has(location.pathname)){return{...location,pathname:pathnames.get(location.pathname)};}// If the location was registered with an `.html` extension, we don't strip it
// away, or it will render to a 404 page.
const matchedRoutes=(0,react_router_config/* matchRoutes */.u)(routes/* default */.A,location.pathname);if(matchedRoutes.some(({route})=>route.exact===true)){pathnames.set(location.pathname,location.pathname);return location;}const pathname=location.pathname.trim().replace(/(?:\/index)?\.html$/,'')||'/';pathnames.set(location.pathname,pathname);return{...location,pathname};}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/browserContext.js
var browserContext = __webpack_require__(6125);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/docusaurusContext.js + 3 modules
var docusaurusContext = __webpack_require__(6988);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsomorphicLayoutEffect.js
var useIsomorphicLayoutEffect = __webpack_require__(205);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/ClientLifecyclesDispatcher.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function dispatchLifecycleAction(lifecycleAction,...args){const callbacks=client_modules.map(clientModule=>{const lifecycleFunction=clientModule.default?.[lifecycleAction]??clientModule[lifecycleAction];return lifecycleFunction?.(...args);});return()=>callbacks.forEach(cb=>cb?.());}function scrollAfterNavigation({location,previousLocation}){if(!previousLocation){return;// no-op: use native browser feature
}const samePathname=location.pathname===previousLocation.pathname;const sameHash=location.hash===previousLocation.hash;const sameSearch=location.search===previousLocation.search;// Query-string changes: do not scroll to top/hash
if(samePathname&&sameHash&&!sameSearch){return;}const{hash}=location;if(!hash){window.scrollTo(0,0);}else{const id=decodeURIComponent(hash.substring(1));const element=document.getElementById(id);element?.scrollIntoView();}}function ClientLifecyclesDispatcher({children,location,previousLocation}){(0,useIsomorphicLayoutEffect/* default */.A)(()=>{if(previousLocation!==location){scrollAfterNavigation({location,previousLocation});dispatchLifecycleAction('onRouteDidUpdate',{previousLocation,location});}},[previousLocation,location]);return children;}/* harmony default export */ const client_ClientLifecyclesDispatcher = (ClientLifecyclesDispatcher);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/ExecutionEnvironment.js
var ExecutionEnvironment = __webpack_require__(8193);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/PendingNavigation.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */class PendingNavigation extends react.Component{previousLocation;routeUpdateCleanupCb;constructor(props){super(props);// previousLocation doesn't affect rendering, hence not stored in state.
this.previousLocation=null;this.routeUpdateCleanupCb=ExecutionEnvironment/* default */.A.canUseDOM?dispatchLifecycleAction('onRouteUpdate',{previousLocation:null,location:this.props.location}):()=>{};this.state={nextRouteHasLoaded:true};}// Intercept location update and still show current route until next route
// is done loading.
shouldComponentUpdate(nextProps,nextState){if(nextProps.location===this.props.location){// `nextRouteHasLoaded` is false means there's a pending route transition.
// Don't update until it's done.
return nextState.nextRouteHasLoaded;}// props.location being different means the router is trying to navigate to
// a new route. We will preload the new route.
const nextLocation=nextProps.location;// Save the location first.
this.previousLocation=this.props.location;this.setState({nextRouteHasLoaded:false});this.routeUpdateCleanupCb=dispatchLifecycleAction('onRouteUpdate',{previousLocation:this.previousLocation,location:nextLocation});// Load data while the old screen remains. Force preload instead of using
// `window.docusaurus`, because we want to avoid loading screen even when
// user is on saveData
preload(nextLocation.pathname).then(()=>{this.routeUpdateCleanupCb();this.setState({nextRouteHasLoaded:true});}).catch(e=>{console.warn(e);// If chunk loading failed, it could be because the path to a chunk
// no longer exists due to a new deployment. Force refresh the page
// instead of just not navigating.
window.location.reload();});return false;}render(){const{children,location}=this.props;// Use a controlled <Route> to trick all descendants into rendering the old
// location.
return/*#__PURE__*/(0,jsx_runtime.jsx)(client_ClientLifecyclesDispatcher,{previousLocation:this.previousLocation,location:location,children:/*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Route */.qh,{location:location,render:()=>children})});}}/* harmony default export */ const client_PendingNavigation = (PendingNavigation);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/BaseUrlIssueBanner/styles.module.css
var styles_module = __webpack_require__(9832);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/BaseUrlIssueBanner/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Double-security: critical CSS will hide the banner if CSS can load!
// __ prefix allows search crawlers (Algolia/DocSearch) to ignore anchors
// https://github.com/facebook/docusaurus/issues/8883#issuecomment-1516328368
const BannerContainerId='__docusaurus-base-url-issue-banner-container';const BannerId='__docusaurus-base-url-issue-banner';const SuggestionContainerId='__docusaurus-base-url-issue-banner-suggestion-container';// It is important to not use React to render this banner
// otherwise Google would index it, even if it's hidden with some critical CSS!
// See https://github.com/facebook/docusaurus/issues/4028
// - We can't SSR (or it would be indexed)
// - We can't CSR (as it means the baseurl is correct)
function createInlineHtmlBanner(baseUrl){return`
<div id="${BannerId}" style="border: thick solid red; background-color: rgb(255, 230, 179); margin: 20px; padding: 20px; font-size: 20px;">
   <p style="font-weight: bold; font-size: 30px;">Your Docusaurus site did not load properly.</p>
   <p>A very common reason is a wrong site <a href="https://docusaurus.io/docs/docusaurus.config.js/#baseUrl" style="font-weight: bold;">baseUrl configuration</a>.</p>
   <p>Current configured baseUrl = <span style="font-weight: bold; color: red;">${baseUrl}</span> ${baseUrl==='/'?' (default value)':''}</p>
   <p>We suggest trying baseUrl = <span id="${SuggestionContainerId}" style="font-weight: bold; color: green;"></span></p>
</div>
`;}// Needs to work for older browsers!
function createInlineScript(baseUrl){/* language=js */return`
document.addEventListener('DOMContentLoaded', function maybeInsertBanner() {
  var shouldInsert = typeof window['docusaurus'] === 'undefined';
  shouldInsert && insertBanner();
});

function insertBanner() {
  var bannerContainer = document.createElement('div');
  bannerContainer.id = '${BannerContainerId}';
  var bannerHtml = ${JSON.stringify(createInlineHtmlBanner(baseUrl))// See https://redux.js.org/recipes/server-rendering/#security-considerations
.replace(/</g,'\\\u003c')};
  bannerContainer.innerHTML = bannerHtml;
  document.body.prepend(bannerContainer);
  var suggestionContainer = document.getElementById('${SuggestionContainerId}');
  var actualHomePagePath = window.location.pathname;
  var suggestedBaseUrl = actualHomePagePath.substr(-1) === '/'
        ? actualHomePagePath
        : actualHomePagePath + '/';
  suggestionContainer.innerHTML = suggestedBaseUrl;
}
`;}function BaseUrlIssueBanner(){const{siteConfig:{baseUrl}}=(0,useDocusaurusContext/* default */.A)();return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:!ExecutionEnvironment/* default */.A.canUseDOM&&/*#__PURE__*/ // Safe to use `ExecutionEnvironment`, because `Head` is purely
// side-effect and doesn't affect hydration
(0,jsx_runtime.jsx)(Head/* default */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("script",{children:createInlineScript(baseUrl)})})});}/**
 * We want to help the users with a bad baseUrl configuration (very common
 * error). Help message is inlined, and hidden if JS or CSS is able to load.
 *
 * This component only inserts the base URL banner for the homepage, to avoid
 * polluting every statically rendered page.
 *
 * Note: it might create false positives (ie network failures): not a big deal
 *
 * @see https://github.com/facebook/docusaurus/pull/3621
 */function MaybeBaseUrlIssueBanner(){const{siteConfig:{baseUrl,baseUrlIssueBanner}}=(0,useDocusaurusContext/* default */.A)();const{pathname}=(0,react_router/* useLocation */.zy)();const isHomePage=pathname===baseUrl;const enabled=baseUrlIssueBanner&&isHomePage;return enabled?/*#__PURE__*/(0,jsx_runtime.jsx)(BaseUrlIssueBanner,{}):null;}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/SiteMetadataDefaults.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function SiteMetadataDefaults(){const{siteConfig:{favicon,title,noIndex},i18n:{currentLocale,localeConfigs}}=(0,useDocusaurusContext/* default */.A)();const faviconUrl=(0,useBaseUrl/* default */.A)(favicon);const{htmlLang,direction:htmlDir}=localeConfigs[currentLocale];return/*#__PURE__*/(0,jsx_runtime.jsxs)(Head/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("html",{lang:htmlLang,dir:htmlDir}),/*#__PURE__*/(0,jsx_runtime.jsx)("title",{children:title}),/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{property:"og:title",content:title}),/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),noIndex&&/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{name:"robots",content:"noindex, nofollow"}),favicon&&/*#__PURE__*/(0,jsx_runtime.jsx)("link",{rel:"icon",href:faviconUrl})]});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/ErrorBoundary.js + 1 modules
var ErrorBoundary = __webpack_require__(7489);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(2303);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/hasHydratedDataAttribute.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// See https://github.com/facebook/docusaurus/pull/9256
// Docusaurus adds a <html data-has-hydrated="true"> after hydration
function HasHydratedDataAttribute(){const isBrowser=(0,useIsBrowser/* default */.A)();return/*#__PURE__*/(0,jsx_runtime.jsx)(Head/* default */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("html",{"data-has-hydrated":isBrowser})});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/App.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// TODO, quick fix for CSS insertion order
// eslint-disable-next-line import/order
const routesElement=(0,react_router_config/* renderRoutes */.v)(routes/* default */.A);function AppNavigation(){const location=(0,react_router/* useLocation */.zy)();const normalizedLocation=normalizeLocation(location);return/*#__PURE__*/(0,jsx_runtime.jsx)(client_PendingNavigation,{location:normalizedLocation,children:routesElement});}function App(){return/*#__PURE__*/(0,jsx_runtime.jsx)(ErrorBoundary/* default */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(docusaurusContext/* DocusaurusContextProvider */.l,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(browserContext/* BrowserContextProvider */.x,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Root,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(SiteMetadataDefaults,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(SiteMetadata,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(MaybeBaseUrlIssueBanner,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(AppNavigation,{})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(HasHydratedDataAttribute,{})]})})});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/BrokenLinksContext.js
var BrokenLinksContext = __webpack_require__(5643);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/serverEntry.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const render=async({pathname})=>{await preload(pathname);const modules=new Set();const routerContext={};const helmetContext={};const statefulBrokenLinks=(0,BrokenLinksContext/* createStatefulBrokenLinks */.$3)();const app=/*#__PURE__*/ // @ts-expect-error: we are migrating away from react-loadable anyways
(0,jsx_runtime.jsx)((lib_default()).Capture,{report:moduleName=>modules.add(moduleName),children:/*#__PURE__*/(0,jsx_runtime.jsx)(index_module/* HelmetProvider */.vd,{context:helmetContext,children:/*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* StaticRouter */.kO,{location:pathname,context:routerContext,children:/*#__PURE__*/(0,jsx_runtime.jsx)(BrokenLinksContext/* BrokenLinksProvider */.k5,{brokenLinks:statefulBrokenLinks,children:/*#__PURE__*/(0,jsx_runtime.jsx)(App,{})})})})});const html=await renderToHtml(app);const collectedData={helmet:helmetContext.helmet,anchors:statefulBrokenLinks.getCollectedAnchors(),links:statefulBrokenLinks.getCollectedLinks(),modules:Array.from(modules)};return{html,collectedData};};/* harmony default export */ const serverEntry = (render);

/***/ }),

/***/ 4070:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  zK: () => (/* binding */ useActiveDocContext),
  vT: () => (/* binding */ useActivePlugin),
  Gy: () => (/* binding */ useAllDocsData),
  HW: () => (/* binding */ useDocVersionSuggestions),
  ht: () => (/* binding */ useDocsData),
  r7: () => (/* binding */ useLatestVersion),
  jh: () => (/* binding */ useVersions)
});

// UNUSED EXPORTS: useActivePluginAndVersion, useActiveVersion

// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(6347);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(4586);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/constants.js
var constants = __webpack_require__(7065);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useGlobalData.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useGlobalData(){const{globalData}=(0,useDocusaurusContext/* default */.A)();return globalData;}function useAllPluginInstancesData(pluginName,options={}){const globalData=useGlobalData();const pluginGlobalData=globalData[pluginName];if(!pluginGlobalData&&options.failfast){throw new Error(`Docusaurus plugin global data not found for "${pluginName}" plugin.`);}return pluginGlobalData;}function usePluginData(pluginName,pluginId=constants/* DEFAULT_PLUGIN_ID */.W,options={}){const pluginGlobalData=useAllPluginInstancesData(pluginName);const pluginInstanceGlobalData=pluginGlobalData?.[pluginId];if(!pluginInstanceGlobalData&&options.failfast){throw new Error(`Docusaurus plugin global data not found for "${pluginName}" plugin with id "${pluginId}".`);}return pluginInstanceGlobalData;}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/docsClientUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// This code is not part of the api surface, not in ./theme on purpose
// get the data of the plugin that is currently "active"
// ie the docs of that plugin are currently browsed
// it is useful to support multiple docs plugin instances
function getActivePlugin(allPluginData,pathname,options={}){const activeEntry=Object.entries(allPluginData)// Route sorting: '/android/foo' should match '/android' instead of '/'
.sort((a,b)=>b[1].path.localeCompare(a[1].path)).find(([,pluginData])=>!!(0,react_router/* matchPath */.B6)(pathname,{path:pluginData.path,exact:false,strict:false}));const activePlugin=activeEntry?{pluginId:activeEntry[0],pluginData:activeEntry[1]}:undefined;if(!activePlugin&&options.failfast){throw new Error(`Can't find active docs plugin for "${pathname}" pathname, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: ${Object.values(allPluginData).map(plugin=>plugin.path).join(', ')}`);}return activePlugin;}const getLatestVersion=data=>data.versions.find(version=>version.isLast);function docsClientUtils_getActiveVersion(data,pathname){const lastVersion=getLatestVersion(data);// Last version is a route like /docs/*,
// we need to match it last or it would match /docs/version-1.0/* as well
const orderedVersionsMetadata=[...data.versions.filter(version=>version!==lastVersion),lastVersion];return orderedVersionsMetadata.find(version=>!!(0,react_router/* matchPath */.B6)(pathname,{path:version.path,exact:false,strict:false}));}function getActiveDocContext(data,pathname){const activeVersion=docsClientUtils_getActiveVersion(data,pathname);const activeDoc=activeVersion?.docs.find(doc=>!!(0,react_router/* matchPath */.B6)(pathname,{path:doc.path,exact:true,strict:false}));function getAlternateVersionDocs(docId){const result={};data.versions.forEach(version=>{version.docs.forEach(doc=>{if(doc.id===docId){result[version.name]=doc;}});});return result;}const alternateVersionDocs=activeDoc?getAlternateVersionDocs(activeDoc.id):{};return{activeVersion,activeDoc,alternateDocVersions:alternateVersionDocs};}function getDocVersionSuggestions(data,pathname){const latestVersion=getLatestVersion(data);const activeDocContext=getActiveDocContext(data,pathname);const latestDocSuggestion=activeDocContext.alternateDocVersions[latestVersion.name];return{latestDocSuggestion,latestVersionSuggestion:latestVersion};}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Important to use a constant object to avoid React useEffect executions etc.
// see https://github.com/facebook/docusaurus/issues/5089
const StableEmptyObject={};// In blog-only mode, docs hooks are still used by the theme. We need a fail-
// safe fallback when the docs plugin is not in use
const useAllDocsData=()=>useAllPluginInstancesData('docusaurus-plugin-content-docs')??StableEmptyObject;const useDocsData=pluginId=>{try{return usePluginData('docusaurus-plugin-content-docs',pluginId,{failfast:true});}catch(error){throw new Error(`You are using a feature of the Docusaurus docs plugin, but this plugin does not seem to be enabled${pluginId==='Default'?'':` (pluginId=${pluginId}`}`,{cause:error});}};// TODO this feature should be provided by docusaurus core
function useActivePlugin(options={}){const data=useAllDocsData();const{pathname}=(0,react_router/* useLocation */.zy)();return getActivePlugin(data,pathname,options);}function useActivePluginAndVersion(options={}){const activePlugin=useActivePlugin(options);const{pathname}=useLocation();if(!activePlugin){return undefined;}const activeVersion=getActiveVersion(activePlugin.pluginData,pathname);return{activePlugin,activeVersion};}/** Versions are returned ordered (most recent first). */function useVersions(pluginId){const data=useDocsData(pluginId);return data.versions;}function useLatestVersion(pluginId){const data=useDocsData(pluginId);return getLatestVersion(data);}/**
 * Returns `undefined` on doc-unrelated pages, because there's no version
 * currently considered as active.
 */function useActiveVersion(pluginId){const data=useDocsData(pluginId);const{pathname}=useLocation();return getActiveVersion(data,pathname);}function useActiveDocContext(pluginId){const data=useDocsData(pluginId);const{pathname}=(0,react_router/* useLocation */.zy)();return getActiveDocContext(data,pathname);}/**
 * Useful to say "hey, you are not on the latest docs version, please switch"
 */function useDocVersionSuggestions(pluginId){const data=useDocsData(pluginId);const{pathname}=(0,react_router/* useLocation */.zy)();return getDocVersionSuggestions(data,pathname);}

/***/ }),

/***/ 6294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5947);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */nprogress__WEBPACK_IMPORTED_MODULE_0___default().configure({showSpinner:false});const delay=200;const clientModule={onRouteUpdate({location,previousLocation}){if(previousLocation&&location.pathname!==previousLocation.pathname){const progressBarTimeout=window.setTimeout(()=>{nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();},delay);return()=>window.clearTimeout(progressBarTimeout);}return undefined;},onRouteDidUpdate(){nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();}};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientModule);

/***/ }),

/***/ 6134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/prism-react-renderer/dist/index.mjs
var dist = __webpack_require__(1765);
// EXTERNAL MODULE: ./.docusaurus/docusaurus.config.mjs
var docusaurus_config = __webpack_require__(4784);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/prism-include-languages.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function prismIncludeLanguages(PrismObject){const{themeConfig:{prism}}=docusaurus_config["default"];const{additionalLanguages}=prism;// Prism components work on the Prism instance on the window, while prism-
// react-renderer uses its own Prism instance. We temporarily mount the
// instance onto window, import components to enhance it, then remove it to
// avoid polluting global namespace.
// You can mutate PrismObject: registering plugins, deleting languages... As
// long as you don't re-assign it
globalThis.Prism=PrismObject;additionalLanguages.forEach(lang=>{if(lang==='php'){// eslint-disable-next-line global-require
__webpack_require__(9700);}// eslint-disable-next-line global-require, import/no-dynamic-require
__webpack_require__(8692)(`./prism-${lang}`);});delete globalThis.Prism;}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/prism-include-languages.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */prismIncludeLanguages(dist/* Prism */.My);

/***/ }),

/***/ 9364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Admonition)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/admonitionUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Workaround because it's difficult in MDX v1 to provide a MDX title as props
// See https://github.com/facebook/docusaurus/pull/7152#issuecomment-1145779682
function extractMDXAdmonitionTitle(children){const items=react.Children.toArray(children);const mdxAdmonitionTitleWrapper=items.find(item=>/*#__PURE__*/react.isValidElement(item)&&item.type==='mdxAdmonitionTitle');const rest=items.filter(item=>item!==mdxAdmonitionTitleWrapper);const mdxAdmonitionTitle=mdxAdmonitionTitleWrapper?.props.children;return{mdxAdmonitionTitle,rest:rest.length>0?/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:rest}):null};}function processAdmonitionProps(props){const{mdxAdmonitionTitle,rest}=extractMDXAdmonitionTitle(props.children);const title=props.title??mdxAdmonitionTitle;return{...props,// Do not return "title: undefined" prop
// this might create unwanted props overrides when merging props
// For example: {...default,...props}
...(title&&{title}),children:rest};}
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(4164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(1312);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(7559);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Layout/styles.module.css
var styles_module = __webpack_require__(6175);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Layout/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function AdmonitionContainer({type,className,children}){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.common.admonition,ThemeClassNames/* ThemeClassNames */.G.common.admonitionType(type),(styles_module_default()).admonition,className),children:children});}function AdmonitionHeading({icon,title}){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(styles_module_default()).admonitionHeading,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:(styles_module_default()).admonitionIcon,children:icon}),title]});}function AdmonitionContent({children}){return children?/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(styles_module_default()).admonitionContent,children:children}):null;}function AdmonitionLayout(props){const{type,icon,title,children,className}=props;return/*#__PURE__*/(0,jsx_runtime.jsxs)(AdmonitionContainer,{type:type,className:className,children:[title||icon?/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionHeading,{title:title,icon:icon}):null,/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionContent,{children:children})]});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Icon/Note.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function AdmonitionIconNote(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 14 16",...props,children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Type/Note.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const infimaClassName='alert alert--secondary';const defaultProps={icon:/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionIconNote,{}),title:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function AdmonitionTypeNote(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionLayout,{...defaultProps,...props,className:(0,clsx/* default */.A)(infimaClassName,props.className),children:props.children});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Icon/Tip.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function AdmonitionIconTip(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 12 16",...props,children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Type/Tip.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const Tip_infimaClassName='alert alert--success';const Tip_defaultProps={icon:/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionIconTip,{}),title:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function AdmonitionTypeTip(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionLayout,{...Tip_defaultProps,...props,className:(0,clsx/* default */.A)(Tip_infimaClassName,props.className),children:props.children});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Icon/Info.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function AdmonitionIconInfo(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 14 16",...props,children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Type/Info.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const Info_infimaClassName='alert alert--info';const Info_defaultProps={icon:/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionIconInfo,{}),title:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function AdmonitionTypeInfo(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionLayout,{...Info_defaultProps,...props,className:(0,clsx/* default */.A)(Info_infimaClassName,props.className),children:props.children});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Icon/Warning.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function AdmonitionIconCaution(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 16 16",...props,children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Type/Warning.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const Warning_infimaClassName='alert alert--warning';const Warning_defaultProps={icon:/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionIconCaution,{}),title:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function AdmonitionTypeWarning(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionLayout,{...Warning_defaultProps,...props,className:(0,clsx/* default */.A)(Warning_infimaClassName,props.className),children:props.children});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Icon/Danger.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function AdmonitionIconDanger(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 12 16",...props,children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Type/Danger.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const Danger_infimaClassName='alert alert--danger';const Danger_defaultProps={icon:/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionIconDanger,{}),title:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};function AdmonitionTypeDanger(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionLayout,{...Danger_defaultProps,...props,className:(0,clsx/* default */.A)(Danger_infimaClassName,props.className),children:props.children});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Type/Caution.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const Caution_infimaClassName='alert alert--warning';const Caution_defaultProps={icon:/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionIconCaution,{}),title:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};// TODO remove before v4: Caution replaced by Warning
// see https://github.com/facebook/docusaurus/issues/7558
function AdmonitionTypeCaution(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionLayout,{...Caution_defaultProps,...props,className:(0,clsx/* default */.A)(Caution_infimaClassName,props.className),children:props.children});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Types.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const admonitionTypes={note:AdmonitionTypeNote,tip:AdmonitionTypeTip,info:AdmonitionTypeInfo,warning:AdmonitionTypeWarning,danger:AdmonitionTypeDanger};// Undocumented legacy admonition type aliases
// Provide hardcoded/untranslated retrocompatible label
// See also https://github.com/facebook/docusaurus/issues/7767
const admonitionAliases={secondary:props=>/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionTypeNote,{title:"secondary",...props}),important:props=>/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionTypeInfo,{title:"important",...props}),success:props=>/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionTypeTip,{title:"success",...props}),caution:AdmonitionTypeCaution};/* harmony default export */ const Types = ({...admonitionTypes,...admonitionAliases});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function getAdmonitionTypeComponent(type){const component=Types[type];if(component){return component;}console.warn(`No admonition component found for admonition type "${type}". Using Info as fallback.`);return Types.info;}function Admonition(unprocessedProps){const props=processAdmonitionProps(unprocessedProps);const AdmonitionTypeComponent=getAdmonitionTypeComponent(props.type);return/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionTypeComponent,{...props});}

/***/ }),

/***/ 7415:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DocItem)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js + 2 modules
var metadataUtils = __webpack_require__(1003);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/reactUtils.js
var reactUtils = __webpack_require__(9532);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/doc.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const Context=/*#__PURE__*/react.createContext(null);/**
 * Note: we don't use `PropDoc` as context value on purpose. Metadata is
 * currently stored inside the MDX component, but we may want to change that in
 * the future. This layer is a good opportunity to decouple storage from
 * consuming API, potentially allowing us to provide metadata as both props and
 * route context without duplicating the chunks in the future.
 */function useContextValue(content){return (0,react.useMemo)(()=>({metadata:content.metadata,frontMatter:content.frontMatter,assets:content.assets,contentTitle:content.contentTitle,toc:content.toc}),[content]);}/**
 * This is a very thin layer around the `content` received from the MDX loader.
 * It provides metadata about the doc to the children tree.
 */function DocProvider({children,content}){const contextValue=useContextValue(content);return/*#__PURE__*/(0,jsx_runtime.jsx)(Context.Provider,{value:contextValue,children:children});}/**
 * Returns the data of the currently browsed doc. Gives access to the doc's MDX
 * Component, front matter, metadata, TOC, etc. When swizzling a low-level
 * component (e.g. the "Edit this page" link) and you need some extra metadata,
 * you don't have to drill the props all the way through the component tree:
 * simply use this hook instead.
 */function useDoc(){const doc=(0,react.useContext)(Context);if(doc===null){throw new reactUtils/* ReactContextError */.dV('DocProvider');}return doc;}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/Metadata/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocItemMetadata(){const{metadata,frontMatter,assets}=useDoc();return/*#__PURE__*/(0,jsx_runtime.jsx)(metadataUtils/* PageMetadata */.be,{title:metadata.title,description:metadata.description,keywords:frontMatter.keywords,image:assets.image??frontMatter.image});}
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(4164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useWindowSize.js
var useWindowSize = __webpack_require__(4581);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(1312);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(725);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/PaginatorNavLink/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function PaginatorNavLink(props){const{permalink,title,subLabel,isNext}=props;return/*#__PURE__*/(0,jsx_runtime.jsxs)(Link/* default */.A,{className:(0,clsx/* default */.A)('pagination-nav__link',isNext?'pagination-nav__link--next':'pagination-nav__link--prev'),to:permalink,children:[subLabel&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"pagination-nav__sublabel",children:subLabel}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"pagination-nav__label",children:title})]});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPaginator/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocPaginator(props){const{previous,next}=props;return/*#__PURE__*/(0,jsx_runtime.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,Translate/* translate */.T)({id:'theme.docs.paginator.navAriaLabel',message:'Docs pages',description:'The ARIA label for the docs pagination'}),children:[previous&&/*#__PURE__*/(0,jsx_runtime.jsx)(PaginatorNavLink,{...previous,subLabel:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),next&&/*#__PURE__*/(0,jsx_runtime.jsx)(PaginatorNavLink,{...next,subLabel:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:true})]});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/Paginator/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * This extra component is needed, because <DocPaginator> should remain generic.
 * DocPaginator is used in non-docs contexts too: generated-index pages...
 */function DocItemPaginator(){const{metadata}=useDoc();return/*#__PURE__*/(0,jsx_runtime.jsx)(DocPaginator,{previous:metadata.previous,next:metadata.next});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(4586);
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/index.js + 2 modules
var client = __webpack_require__(4070);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(7559);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/docsPreferredVersion.js
var docsPreferredVersion = __webpack_require__(5597);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/docsVersion.js
var docsVersion = __webpack_require__(2252);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocVersionBanner/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function UnreleasedVersionLabel({siteTitle,versionMetadata}){return/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle,versionLabel:/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:versionMetadata.label})},children:'This is unreleased documentation for {siteTitle} {versionLabel} version.'});}function UnmaintainedVersionLabel({siteTitle,versionMetadata}){return/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle,versionLabel:/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:versionMetadata.label})},children:'This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.'});}const BannerLabelComponents={unreleased:UnreleasedVersionLabel,unmaintained:UnmaintainedVersionLabel};function BannerLabel(props){const BannerLabelComponent=BannerLabelComponents[props.versionMetadata.banner];return/*#__PURE__*/(0,jsx_runtime.jsx)(BannerLabelComponent,{...props});}function LatestVersionSuggestionLabel({versionLabel,to,onClick}){return/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel,latestVersionLink:/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{to:to,onClick:onClick,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:'For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).'});}function DocVersionBannerEnabled({className,versionMetadata}){const{siteConfig:{title:siteTitle}}=(0,useDocusaurusContext/* default */.A)();const{pluginId}=(0,client/* useActivePlugin */.vT)({failfast:true});const getVersionMainDoc=version=>version.docs.find(doc=>doc.id===version.mainDocId);const{savePreferredVersionName}=(0,docsPreferredVersion/* useDocsPreferredVersion */.g1)(pluginId);const{latestDocSuggestion,latestVersionSuggestion}=(0,client/* useDocVersionSuggestions */.HW)(pluginId);// Try to link to same doc in latest version (not always possible), falling
// back to main doc of latest version
const latestVersionSuggestedDoc=latestDocSuggestion??getVersionMainDoc(latestVersionSuggestion);return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)(className,ThemeClassNames/* ThemeClassNames */.G.docs.docVersionBanner,'alert alert--warning margin-bottom--md'),role:"alert",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(BannerLabel,{siteTitle:siteTitle,versionMetadata:versionMetadata})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"margin-top--md",children:/*#__PURE__*/(0,jsx_runtime.jsx)(LatestVersionSuggestionLabel,{versionLabel:latestVersionSuggestion.label,to:latestVersionSuggestedDoc.path,onClick:()=>savePreferredVersionName(latestVersionSuggestion.name)})})]});}function DocVersionBanner({className}){const versionMetadata=(0,docsVersion/* useDocsVersion */.r)();if(versionMetadata.banner){return/*#__PURE__*/(0,jsx_runtime.jsx)(DocVersionBannerEnabled,{className:className,versionMetadata:versionMetadata});}return null;}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocVersionBadge/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocVersionBadge({className}){const versionMetadata=(0,docsVersion/* useDocsVersion */.r)();if(versionMetadata.badge){return/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:(0,clsx/* default */.A)(className,ThemeClassNames/* ThemeClassNames */.G.docs.docVersionBadge,'badge badge--secondary'),children:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:versionMetadata.label},children:'Version: {versionLabel}'})});}return null;}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tag/styles.module.css
var styles_module = __webpack_require__(448);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tag/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Tag({permalink,label,count}){return/*#__PURE__*/(0,jsx_runtime.jsxs)(Link/* default */.A,{href:permalink,className:(0,clsx/* default */.A)((styles_module_default()).tag,count?(styles_module_default()).tagWithCount:(styles_module_default()).tagRegular),children:[label,count&&/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:count})]});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TagsListInline/styles.module.css
var TagsListInline_styles_module = __webpack_require__(4088);
var TagsListInline_styles_module_default = /*#__PURE__*/__webpack_require__.n(TagsListInline_styles_module);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TagsListInline/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TagsListInline({tags}){return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{className:(0,clsx/* default */.A)((TagsListInline_styles_module_default()).tags,'padding--none','margin-left--sm'),children:tags.map(({label,permalink:tagPermalink})=>/*#__PURE__*/(0,jsx_runtime.jsx)("li",{className:(TagsListInline_styles_module_default()).tag,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Tag,{label:label,permalink:tagPermalink})},tagPermalink))})]});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/EditMetaRow/index.js + 4 modules
var EditMetaRow = __webpack_require__(7547);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/Footer/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocItemFooter(){const{metadata}=useDoc();const{editUrl,lastUpdatedAt,lastUpdatedBy,tags}=metadata;const canDisplayTagsRow=tags.length>0;const canDisplayEditMetaRow=!!(editUrl||lastUpdatedAt||lastUpdatedBy);const canDisplayFooter=canDisplayTagsRow||canDisplayEditMetaRow;if(!canDisplayFooter){return null;}return/*#__PURE__*/(0,jsx_runtime.jsxs)("footer",{className:(0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.docs.docFooter,'docusaurus-mt-lg'),children:[canDisplayTagsRow&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)('row margin-top--sm',ThemeClassNames/* ThemeClassNames */.G.docs.docFooterTagsRow),children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"col",children:/*#__PURE__*/(0,jsx_runtime.jsx)(TagsListInline,{tags:tags})})}),canDisplayEditMetaRow&&/*#__PURE__*/(0,jsx_runtime.jsx)(EditMetaRow/* default */.A,{className:(0,clsx/* default */.A)('margin-top--sm',ThemeClassNames/* ThemeClassNames */.G.docs.docFooterEditMetaRow),editUrl:editUrl,lastUpdatedAt:lastUpdatedAt,lastUpdatedBy:lastUpdatedBy})]});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Collapsible/index.js
var Collapsible = __webpack_require__(1422);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCItems/index.js + 3 modules
var TOCItems = __webpack_require__(5195);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCCollapsible/CollapseButton/styles.module.css
var CollapseButton_styles_module = __webpack_require__(9136);
var CollapseButton_styles_module_default = /*#__PURE__*/__webpack_require__.n(CollapseButton_styles_module);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCCollapsible/CollapseButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TOCCollapsibleCollapseButton({collapsed,...props}){return/*#__PURE__*/(0,jsx_runtime.jsx)("button",{type:"button",...props,className:(0,clsx/* default */.A)('clean-btn',(CollapseButton_styles_module_default()).tocCollapsibleButton,!collapsed&&(CollapseButton_styles_module_default()).tocCollapsibleButtonExpanded,props.className),children:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCCollapsible/styles.module.css
var TOCCollapsible_styles_module = __webpack_require__(2586);
var TOCCollapsible_styles_module_default = /*#__PURE__*/__webpack_require__.n(TOCCollapsible_styles_module);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCCollapsible/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TOCCollapsible({toc,className,minHeadingLevel,maxHeadingLevel}){const{collapsed,toggleCollapsed}=(0,Collapsible/* useCollapsible */.u)({initialState:true});return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)((TOCCollapsible_styles_module_default()).tocCollapsible,!collapsed&&(TOCCollapsible_styles_module_default()).tocCollapsibleExpanded,className),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TOCCollapsibleCollapseButton,{collapsed:collapsed,onClick:toggleCollapsed}),/*#__PURE__*/(0,jsx_runtime.jsx)(Collapsible/* Collapsible */.N,{lazy:true,className:(TOCCollapsible_styles_module_default()).tocCollapsibleContent,collapsed:collapsed,children:/*#__PURE__*/(0,jsx_runtime.jsx)(TOCItems/* default */.A,{toc:toc,minHeadingLevel:minHeadingLevel,maxHeadingLevel:maxHeadingLevel})})]});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/TOC/Mobile/styles.module.css
var Mobile_styles_module = __webpack_require__(4061);
var Mobile_styles_module_default = /*#__PURE__*/__webpack_require__.n(Mobile_styles_module);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/TOC/Mobile/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocItemTOCMobile(){const{toc,frontMatter}=useDoc();return/*#__PURE__*/(0,jsx_runtime.jsx)(TOCCollapsible,{toc:toc,minHeadingLevel:frontMatter.toc_min_heading_level,maxHeadingLevel:frontMatter.toc_max_heading_level,className:(0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.docs.docTocMobile,(Mobile_styles_module_default()).tocMobile)});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOC/index.js
var TOC = __webpack_require__(32);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/TOC/Desktop/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocItemTOCDesktop(){const{toc,frontMatter}=useDoc();return/*#__PURE__*/(0,jsx_runtime.jsx)(TOC/* default */.A,{toc:toc,minHeadingLevel:frontMatter.toc_min_heading_level,maxHeadingLevel:frontMatter.toc_max_heading_level,className:ThemeClassNames/* ThemeClassNames */.G.docs.docTocDesktop});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js
var Heading = __webpack_require__(4608);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXContent/index.js + 27 modules
var MDXContent = __webpack_require__(5034);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/Content/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 Title can be declared inside md content or declared through
 front matter and added manually. To make both cases consistent,
 the added title is added under the same div.markdown block
 See https://github.com/facebook/docusaurus/pull/4882#issuecomment-853021120

 We render a "synthetic title" if:
 - user doesn't ask to hide it with front matter
 - the markdown content does not already contain a top-level h1 heading
*/function useSyntheticTitle(){const{metadata,frontMatter,contentTitle}=useDoc();const shouldRender=!frontMatter.hide_title&&typeof contentTitle==='undefined';if(!shouldRender){return null;}return metadata.title;}function DocItemContent({children}){const syntheticTitle=useSyntheticTitle();return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.docs.docMarkdown,'markdown'),children:[syntheticTitle&&/*#__PURE__*/(0,jsx_runtime.jsx)("header",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* default */.A,{as:"h1",children:syntheticTitle})}),/*#__PURE__*/(0,jsx_runtime.jsx)(MDXContent/* default */.A,{children:children})]});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/docsUtils.js + 1 modules
var docsUtils = __webpack_require__(1754);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/routesUtils.js
var routesUtils = __webpack_require__(9169);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(6025);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Home/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconHome(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 24 24",...props,children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/Items/Home/styles.module.css
var Home_styles_module = __webpack_require__(3801);
var Home_styles_module_default = /*#__PURE__*/__webpack_require__.n(Home_styles_module);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/Items/Home/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function HomeBreadcrumbItem(){const homeHref=(0,useBaseUrl/* default */.A)('/');return/*#__PURE__*/(0,jsx_runtime.jsx)("li",{className:"breadcrumbs__item",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{"aria-label":(0,Translate/* translate */.T)({id:'theme.docs.breadcrumbs.home',message:'Home page',description:'The ARIA label for the home page in the breadcrumbs'}),className:"breadcrumbs__link",href:homeHref,children:/*#__PURE__*/(0,jsx_runtime.jsx)(IconHome,{className:(Home_styles_module_default()).breadcrumbHomeIcon})})});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/styles.module.css
var DocBreadcrumbs_styles_module = __webpack_require__(3928);
var DocBreadcrumbs_styles_module_default = /*#__PURE__*/__webpack_require__.n(DocBreadcrumbs_styles_module);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// TODO move to design system folder
function BreadcrumbsItemLink({children,href,isLast}){const className='breadcrumbs__link';if(isLast){return/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:className,itemProp:"name",children:children});}return href?/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{className:className,href:href,itemProp:"item",children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{itemProp:"name",children:children})}):/*#__PURE__*/ // TODO Google search console doesn't like breadcrumb items without href.
// The schema doesn't seem to require `id` for each `item`, although Google
// insist to infer one, even if it's invalid. Removing `itemProp="item
// name"` for now, since I don't know how to properly fix it.
// See https://github.com/facebook/docusaurus/issues/7241
(0,jsx_runtime.jsx)("span",{className:className,children:children});}// TODO move to design system folder
function BreadcrumbsItem({children,active,index,addMicrodata}){return/*#__PURE__*/(0,jsx_runtime.jsxs)("li",{...(addMicrodata&&{itemScope:true,itemProp:'itemListElement',itemType:'https://schema.org/ListItem'}),className:(0,clsx/* default */.A)('breadcrumbs__item',{'breadcrumbs__item--active':active}),children:[children,/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{itemProp:"position",content:String(index+1)})]});}function DocBreadcrumbs(){const breadcrumbs=(0,docsUtils/* useSidebarBreadcrumbs */.OF)();const homePageRoute=(0,routesUtils/* useHomePageRoute */.Dt)();if(!breadcrumbs){return null;}return/*#__PURE__*/(0,jsx_runtime.jsx)("nav",{className:(0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.docs.docBreadcrumbs,(DocBreadcrumbs_styles_module_default()).breadcrumbsContainer),"aria-label":(0,Translate/* translate */.T)({id:'theme.docs.breadcrumbs.navAriaLabel',message:'Breadcrumbs',description:'The ARIA label for the breadcrumbs'}),children:/*#__PURE__*/(0,jsx_runtime.jsxs)("ul",{className:"breadcrumbs",itemScope:true,itemType:"https://schema.org/BreadcrumbList",children:[homePageRoute&&/*#__PURE__*/(0,jsx_runtime.jsx)(HomeBreadcrumbItem,{}),breadcrumbs.map((item,idx)=>{const isLast=idx===breadcrumbs.length-1;const href=item.type==='category'&&item.linkUnlisted?undefined:item.href;return/*#__PURE__*/(0,jsx_runtime.jsx)(BreadcrumbsItem,{active:isLast,index:idx,addMicrodata:!!href,children:/*#__PURE__*/(0,jsx_runtime.jsx)(BreadcrumbsItemLink,{href:href,isLast:isLast,children:item.label})},idx);})]})});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Unlisted/index.js + 1 modules
var Unlisted = __webpack_require__(996);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/Layout/styles.module.css
var Layout_styles_module = __webpack_require__(6024);
var Layout_styles_module_default = /*#__PURE__*/__webpack_require__.n(Layout_styles_module);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/Layout/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Decide if the toc should be rendered, on mobile or desktop viewports
 */function useDocTOC(){const{frontMatter,toc}=useDoc();const windowSize=(0,useWindowSize/* useWindowSize */.l)();const hidden=frontMatter.hide_table_of_contents;const canRender=!hidden&&toc.length>0;const mobile=canRender?/*#__PURE__*/(0,jsx_runtime.jsx)(DocItemTOCMobile,{}):undefined;const desktop=canRender&&(windowSize==='desktop'||windowSize==='ssr')?/*#__PURE__*/(0,jsx_runtime.jsx)(DocItemTOCDesktop,{}):undefined;return{hidden,mobile,desktop};}function DocItemLayout({children}){const docTOC=useDocTOC();const{metadata:{unlisted}}=useDoc();return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"row",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)('col',!docTOC.hidden&&(Layout_styles_module_default()).docItemCol),children:[unlisted&&/*#__PURE__*/(0,jsx_runtime.jsx)(Unlisted/* default */.A,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(DocVersionBanner,{}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(Layout_styles_module_default()).docItemContainer,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(DocBreadcrumbs,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(DocVersionBadge,{}),docTOC.mobile,/*#__PURE__*/(0,jsx_runtime.jsx)(DocItemContent,{children:children}),/*#__PURE__*/(0,jsx_runtime.jsx)(DocItemFooter,{})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(DocItemPaginator,{})]})]}),docTOC.desktop&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"col col--3",children:docTOC.desktop})]});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocItem(props){const docHtmlClassName=`docs-doc-id-${props.content.metadata.id}`;const MDXComponent=props.content;return/*#__PURE__*/(0,jsx_runtime.jsx)(DocProvider,{content:props.content,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(metadataUtils/* HtmlClassNameProvider */.e3,{className:docHtmlClassName,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(DocItemMetadata,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(DocItemLayout,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(MDXComponent,{})})]})});}

/***/ }),

/***/ 7151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DocRoot)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(4164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js + 2 modules
var metadataUtils = __webpack_require__(1003);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(7559);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/docsUtils.js + 1 modules
var docsUtils = __webpack_require__(1754);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/docsSidebar.js
var docsSidebar = __webpack_require__(6588);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(1312);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/scrollUtils.js
var scrollUtils = __webpack_require__(3104);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useLocationChange.js
var useLocationChange = __webpack_require__(5062);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useBackToTopButton.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//** Wires the logic for the back to top button. */function useBackToTopButton({threshold}){const[shown,setShown]=(0,react.useState)(false);const isFocusedAnchor=(0,react.useRef)(false);const{startScroll,cancelScroll}=(0,scrollUtils/* useSmoothScrollTo */.gk)();(0,scrollUtils/* useScrollPosition */.Mq)(({scrollY:scrollTop},lastPosition)=>{const lastScrollTop=lastPosition?.scrollY;// Component is just being mounted. Not really a scroll event from the user.
// Ignore it.
if(!lastScrollTop){return;}if(isFocusedAnchor.current){// This scroll position change is triggered by navigating to an anchor.
// Ignore it.
isFocusedAnchor.current=false;}else if(scrollTop>=lastScrollTop){// The user has scrolled down to "fight against" the animation. Cancel any
// animation under progress.
cancelScroll();setShown(false);}else if(scrollTop<threshold){// Scrolled to the minimum position; hide the button.
setShown(false);}else if(scrollTop+window.innerHeight<document.documentElement.scrollHeight){setShown(true);}});(0,useLocationChange/* useLocationChange */.$)(locationChangeEvent=>{if(locationChangeEvent.location.hash){isFocusedAnchor.current=true;setShown(false);}});return{shown,scrollToTop:()=>startScroll(0)};}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BackToTopButton/styles.module.css
var styles_module = __webpack_require__(1871);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BackToTopButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BackToTopButton(){const{shown,scrollToTop}=useBackToTopButton({threshold:300});return/*#__PURE__*/(0,jsx_runtime.jsx)("button",{"aria-label":(0,Translate/* translate */.T)({id:'theme.BackToTopButton.buttonAriaLabel',message:'Scroll back to top',description:'The ARIA label for the back to top button'}),className:(0,clsx/* default */.A)('clean-btn',ThemeClassNames/* ThemeClassNames */.G.common.backToTopButton,(styles_module_default()).backToTopButton,shown&&(styles_module_default()).backToTopButtonShow),type:"button",onClick:scrollToTop});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/accessibilityUtils.js
var accessibilityUtils = __webpack_require__(3109);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(6347);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useWindowSize.js
var useWindowSize = __webpack_require__(4581);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(6342);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Logo/index.js
var Logo = __webpack_require__(3465);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Arrow/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconArrow(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...props,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("g",{fill:"#7a7a7a",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Desktop/CollapseButton/styles.module.css
var CollapseButton_styles_module = __webpack_require__(5599);
var CollapseButton_styles_module_default = /*#__PURE__*/__webpack_require__.n(CollapseButton_styles_module);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Desktop/CollapseButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function CollapseButton({onClick}){return/*#__PURE__*/(0,jsx_runtime.jsx)("button",{type:"button",title:(0,Translate/* translate */.T)({id:'theme.docs.sidebar.collapseButtonTitle',message:'Collapse sidebar',description:'The title attribute for collapse button of doc sidebar'}),"aria-label":(0,Translate/* translate */.T)({id:'theme.docs.sidebar.collapseButtonAriaLabel',message:'Collapse sidebar',description:'The title attribute for collapse button of doc sidebar'}),className:(0,clsx/* default */.A)('button button--secondary button--outline',(CollapseButton_styles_module_default()).collapseSidebarButton),onClick:onClick,children:/*#__PURE__*/(0,jsx_runtime.jsx)(IconArrow,{className:(CollapseButton_styles_module_default()).collapseSidebarButtonIcon})});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/announcementBar.js
var announcementBar = __webpack_require__(5041);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/reactUtils.js
var reactUtils = __webpack_require__(9532);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/docSidebarItemsExpandedState.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const EmptyContext=Symbol('EmptyContext');const Context=/*#__PURE__*/react.createContext(EmptyContext);/**
 * Should be used to wrap one sidebar category level. This provider syncs the
 * expanded states of all sibling categories, and categories can choose to
 * collapse itself if another one is expanded.
 */function DocSidebarItemsExpandedStateProvider({children}){const[expandedItem,setExpandedItem]=(0,react.useState)(null);const contextValue=(0,react.useMemo)(()=>({expandedItem,setExpandedItem}),[expandedItem]);return/*#__PURE__*/(0,jsx_runtime.jsx)(Context.Provider,{value:contextValue,children:children});}function useDocSidebarItemsExpandedState(){const value=(0,react.useContext)(Context);if(value===EmptyContext){throw new reactUtils/* ReactContextError */.dV('DocSidebarItemsExpandedStateProvider');}return value;}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Collapsible/index.js
var Collapsible = __webpack_require__(1422);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/routesUtils.js
var routesUtils = __webpack_require__(9169);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(725);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(2303);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/Category/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// If we navigate to a category and it becomes active, it should automatically
// expand itself
function useAutoExpandActiveCategory({isActive,collapsed,updateCollapsed}){const wasActive=(0,reactUtils/* usePrevious */.ZC)(isActive);(0,react.useEffect)(()=>{const justBecameActive=isActive&&!wasActive;if(justBecameActive&&collapsed){updateCollapsed(false);}},[isActive,wasActive,collapsed,updateCollapsed]);}/**
 * When a collapsible category has no link, we still link it to its first child
 * during SSR as a temporary fallback. This allows to be able to navigate inside
 * the category even when JS fails to load, is delayed or simply disabled
 * React hydration becomes an optional progressive enhancement
 * see https://github.com/facebookincubator/infima/issues/36#issuecomment-772543188
 * see https://github.com/facebook/docusaurus/issues/3030
 */function useCategoryHrefWithSSRFallback(item){const isBrowser=(0,useIsBrowser/* default */.A)();return (0,react.useMemo)(()=>{if(item.href&&!item.linkUnlisted){return item.href;}// In these cases, it's not necessary to render a fallback
// We skip the "findFirstCategoryLink" computation
if(isBrowser||!item.collapsible){return undefined;}return (0,docsUtils/* findFirstSidebarItemLink */.Nr)(item);},[item,isBrowser]);}function Category_CollapseButton({collapsed,categoryLabel,onClick}){return/*#__PURE__*/(0,jsx_runtime.jsx)("button",{"aria-label":collapsed?(0,Translate/* translate */.T)({id:'theme.DocSidebarItem.expandCategoryAriaLabel',message:"Expand sidebar category '{label}'",description:'The ARIA label to expand the sidebar category'},{label:categoryLabel}):(0,Translate/* translate */.T)({id:'theme.DocSidebarItem.collapseCategoryAriaLabel',message:"Collapse sidebar category '{label}'",description:'The ARIA label to collapse the sidebar category'},{label:categoryLabel}),"aria-expanded":!collapsed,type:"button",className:"clean-btn menu__caret",onClick:onClick});}function DocSidebarItemCategory({item,onItemClick,activePath,level,index,...props}){const{items,label,collapsible,className,href}=item;const{docs:{sidebar:{autoCollapseCategories}}}=(0,useThemeConfig/* useThemeConfig */.p)();const hrefWithSSRFallback=useCategoryHrefWithSSRFallback(item);const isActive=(0,docsUtils/* isActiveSidebarItem */.w8)(item,activePath);const isCurrentPage=(0,routesUtils/* isSamePath */.ys)(href,activePath);const{collapsed,setCollapsed}=(0,Collapsible/* useCollapsible */.u)({// Active categories are always initialized as expanded. The default
// (`item.collapsed`) is only used for non-active categories.
initialState:()=>{if(!collapsible){return false;}return isActive?false:item.collapsed;}});const{expandedItem,setExpandedItem}=useDocSidebarItemsExpandedState();// Use this instead of `setCollapsed`, because it is also reactive
const updateCollapsed=(toCollapsed=!collapsed)=>{setExpandedItem(toCollapsed?null:index);setCollapsed(toCollapsed);};useAutoExpandActiveCategory({isActive,collapsed,updateCollapsed});(0,react.useEffect)(()=>{if(collapsible&&expandedItem!=null&&expandedItem!==index&&autoCollapseCategories){setCollapsed(true);}},[collapsible,expandedItem,index,setCollapsed,autoCollapseCategories]);return/*#__PURE__*/(0,jsx_runtime.jsxs)("li",{className:(0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarItemCategory,ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarItemCategoryLevel(level),'menu__list-item',{'menu__list-item--collapsed':collapsed},className),children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)('menu__list-item-collapsible',{'menu__list-item-collapsible--active':isCurrentPage}),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{className:(0,clsx/* default */.A)('menu__link',{'menu__link--sublist':collapsible,'menu__link--sublist-caret':!href&&collapsible,'menu__link--active':isActive}),onClick:collapsible?e=>{onItemClick?.(item);if(href){updateCollapsed(false);}else{e.preventDefault();updateCollapsed();}}:()=>{onItemClick?.(item);},"aria-current":isCurrentPage?'page':undefined,role:collapsible&&!href?'button':undefined,"aria-expanded":collapsible&&!href?!collapsed:undefined,href:collapsible?hrefWithSSRFallback??'#':hrefWithSSRFallback,...props,children:label}),href&&collapsible&&/*#__PURE__*/(0,jsx_runtime.jsx)(Category_CollapseButton,{collapsed:collapsed,categoryLabel:label,onClick:e=>{e.preventDefault();updateCollapsed();}})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Collapsible/* Collapsible */.N,{lazy:true,as:"ul",className:"menu__list",collapsed:collapsed,children:/*#__PURE__*/(0,jsx_runtime.jsx)(theme_DocSidebarItems,{items:items,tabIndex:collapsed?-1:0,onItemClick:onItemClick,activePath:activePath,level:level+1})})]});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/isInternalUrl.js
var isInternalUrl = __webpack_require__(6654);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/ExternalLink/index.js
var ExternalLink = __webpack_require__(5835);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/Link/styles.module.css
var Link_styles_module = __webpack_require__(1398);
var Link_styles_module_default = /*#__PURE__*/__webpack_require__.n(Link_styles_module);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/Link/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocSidebarItemLink({item,onItemClick,activePath,level,index,...props}){const{href,label,className,autoAddBaseUrl}=item;const isActive=(0,docsUtils/* isActiveSidebarItem */.w8)(item,activePath);const isInternalLink=(0,isInternalUrl/* default */.A)(href);return/*#__PURE__*/(0,jsx_runtime.jsx)("li",{className:(0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarItemLink,ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarItemLinkLevel(level),'menu__list-item',className),children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Link/* default */.A,{className:(0,clsx/* default */.A)('menu__link',!isInternalLink&&(Link_styles_module_default()).menuExternalLink,{'menu__link--active':isActive}),autoAddBaseUrl:autoAddBaseUrl,"aria-current":isActive?'page':undefined,to:href,...(isInternalLink&&{onClick:onItemClick?()=>onItemClick(item):undefined}),...props,children:[label,!isInternalLink&&/*#__PURE__*/(0,jsx_runtime.jsx)(ExternalLink/* default */.A,{})]})},label);}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/Html/styles.module.css
var Html_styles_module = __webpack_require__(2105);
var Html_styles_module_default = /*#__PURE__*/__webpack_require__.n(Html_styles_module);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/Html/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocSidebarItemHtml({item,level,index}){const{value,defaultStyle,className}=item;return/*#__PURE__*/(0,jsx_runtime.jsx)("li",{className:(0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarItemLink,ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarItemLinkLevel(level),defaultStyle&&[(Html_styles_module_default()).menuHtmlItem,'menu__list-item'],className),// eslint-disable-next-line react/no-danger
dangerouslySetInnerHTML:{__html:value}},index);}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocSidebarItem({item,...props}){switch(item.type){case'category':return/*#__PURE__*/(0,jsx_runtime.jsx)(DocSidebarItemCategory,{item:item,...props});case'html':return/*#__PURE__*/(0,jsx_runtime.jsx)(DocSidebarItemHtml,{item:item,...props});case'link':default:return/*#__PURE__*/(0,jsx_runtime.jsx)(DocSidebarItemLink,{item:item,...props});}}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItems/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocSidebarItems({items,...props}){const visibleItems=(0,docsUtils/* useVisibleSidebarItems */.Y)(items,props.activePath);return/*#__PURE__*/(0,jsx_runtime.jsx)(DocSidebarItemsExpandedStateProvider,{children:visibleItems.map((item,index)=>/*#__PURE__*/(0,jsx_runtime.jsx)(DocSidebarItem,{item:item,index:index,...props},index))});}// Optimize sidebar at each "level"
/* harmony default export */ const theme_DocSidebarItems = (/*#__PURE__*/(0,react.memo)(DocSidebarItems));
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Desktop/Content/styles.module.css
var Content_styles_module = __webpack_require__(1733);
var Content_styles_module_default = /*#__PURE__*/__webpack_require__.n(Content_styles_module);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Desktop/Content/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useShowAnnouncementBar(){const{isActive}=(0,announcementBar/* useAnnouncementBar */.Mj)();const[showAnnouncementBar,setShowAnnouncementBar]=(0,react.useState)(isActive);(0,scrollUtils/* useScrollPosition */.Mq)(({scrollY})=>{if(isActive){setShowAnnouncementBar(scrollY===0);}},[isActive]);return isActive&&showAnnouncementBar;}function DocSidebarDesktopContent({path,sidebar,className}){const showAnnouncementBar=useShowAnnouncementBar();return/*#__PURE__*/(0,jsx_runtime.jsx)("nav",{"aria-label":(0,Translate/* translate */.T)({id:'theme.docs.sidebar.navAriaLabel',message:'Docs sidebar',description:'The ARIA label for the sidebar navigation'}),className:(0,clsx/* default */.A)('menu thin-scrollbar',(Content_styles_module_default()).menu,showAnnouncementBar&&(Content_styles_module_default()).menuWithAnnouncementBar,className),children:/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{className:(0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarMenu,'menu__list'),children:/*#__PURE__*/(0,jsx_runtime.jsx)(theme_DocSidebarItems,{items:sidebar,activePath:path,level:1})})});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Desktop/styles.module.css
var Desktop_styles_module = __webpack_require__(6263);
var Desktop_styles_module_default = /*#__PURE__*/__webpack_require__.n(Desktop_styles_module);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Desktop/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocSidebarDesktop({path,sidebar,onCollapse,isHidden}){const{navbar:{hideOnScroll},docs:{sidebar:{hideable}}}=(0,useThemeConfig/* useThemeConfig */.p)();return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)((Desktop_styles_module_default()).sidebar,hideOnScroll&&(Desktop_styles_module_default()).sidebarWithHideableNavbar,isHidden&&(Desktop_styles_module_default()).sidebarHidden),children:[hideOnScroll&&/*#__PURE__*/(0,jsx_runtime.jsx)(Logo/* default */.A,{tabIndex:-1,className:(Desktop_styles_module_default()).sidebarLogo}),/*#__PURE__*/(0,jsx_runtime.jsx)(DocSidebarDesktopContent,{path:path,sidebar:sidebar}),hideable&&/*#__PURE__*/(0,jsx_runtime.jsx)(CollapseButton,{onClick:onCollapse})]});}/* harmony default export */ const Desktop = (/*#__PURE__*/react.memo(DocSidebarDesktop));
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/navbarSecondaryMenu/content.js
var content = __webpack_require__(5600);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/navbarMobileSidebar.js + 1 modules
var navbarMobileSidebar = __webpack_require__(9876);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Mobile/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// eslint-disable-next-line react/function-component-definition
const DocSidebarMobileSecondaryMenu=({sidebar,path})=>{const mobileSidebar=(0,navbarMobileSidebar/* useNavbarMobileSidebar */.M)();return/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{className:(0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarMenu,'menu__list'),children:/*#__PURE__*/(0,jsx_runtime.jsx)(theme_DocSidebarItems,{items:sidebar,activePath:path,onItemClick:item=>{// Mobile sidebar should only be closed if the category has a link
if(item.type==='category'&&item.href){mobileSidebar.toggle();}if(item.type==='link'){mobileSidebar.toggle();}},level:1})});};function DocSidebarMobile(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(content/* NavbarSecondaryMenuFiller */.GX,{component:DocSidebarMobileSecondaryMenu,props:props});}/* harmony default export */ const Mobile = (/*#__PURE__*/react.memo(DocSidebarMobile));
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocSidebar(props){const windowSize=(0,useWindowSize/* useWindowSize */.l)();// Desktop sidebar visible on hydration: need SSR rendering
const shouldRenderSidebarDesktop=windowSize==='desktop'||windowSize==='ssr';// Mobile sidebar not visible on hydration: can avoid SSR rendering
const shouldRenderSidebarMobile=windowSize==='mobile';return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[shouldRenderSidebarDesktop&&/*#__PURE__*/(0,jsx_runtime.jsx)(Desktop,{...props}),shouldRenderSidebarMobile&&/*#__PURE__*/(0,jsx_runtime.jsx)(Mobile,{...props})]});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocRoot/Layout/Sidebar/ExpandButton/styles.module.css
var ExpandButton_styles_module = __webpack_require__(8721);
var ExpandButton_styles_module_default = /*#__PURE__*/__webpack_require__.n(ExpandButton_styles_module);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocRoot/Layout/Sidebar/ExpandButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocRootLayoutSidebarExpandButton({toggleSidebar}){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(ExpandButton_styles_module_default()).expandButton,title:(0,Translate/* translate */.T)({id:'theme.docs.sidebar.expandButtonTitle',message:'Expand sidebar',description:'The ARIA label and title attribute for expand button of doc sidebar'}),"aria-label":(0,Translate/* translate */.T)({id:'theme.docs.sidebar.expandButtonAriaLabel',message:'Expand sidebar',description:'The ARIA label and title attribute for expand button of doc sidebar'}),tabIndex:0,role:"button",onKeyDown:toggleSidebar,onClick:toggleSidebar,children:/*#__PURE__*/(0,jsx_runtime.jsx)(IconArrow,{className:(ExpandButton_styles_module_default()).expandButtonIcon})});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocRoot/Layout/Sidebar/styles.module.css
var Sidebar_styles_module = __webpack_require__(5710);
var Sidebar_styles_module_default = /*#__PURE__*/__webpack_require__.n(Sidebar_styles_module);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocRoot/Layout/Sidebar/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Reset sidebar state when sidebar changes
// Use React key to unmount/remount the children
// See https://github.com/facebook/docusaurus/issues/3414
function ResetOnSidebarChange({children}){const sidebar=(0,docsSidebar/* useDocsSidebar */.t)();return/*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment,{children:children},sidebar?.name??'noSidebar');}function DocRootLayoutSidebar({sidebar,hiddenSidebarContainer,setHiddenSidebarContainer}){const{pathname}=(0,react_router/* useLocation */.zy)();const[hiddenSidebar,setHiddenSidebar]=(0,react.useState)(false);const toggleSidebar=(0,react.useCallback)(()=>{if(hiddenSidebar){setHiddenSidebar(false);}// onTransitionEnd won't fire when sidebar animation is disabled
// fixes https://github.com/facebook/docusaurus/issues/8918
if(!hiddenSidebar&&(0,accessibilityUtils/* prefersReducedMotion */.O)()){setHiddenSidebar(true);}setHiddenSidebarContainer(value=>!value);},[setHiddenSidebarContainer,hiddenSidebar]);return/*#__PURE__*/(0,jsx_runtime.jsx)("aside",{className:(0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarContainer,(Sidebar_styles_module_default()).docSidebarContainer,hiddenSidebarContainer&&(Sidebar_styles_module_default()).docSidebarContainerHidden),onTransitionEnd:e=>{if(!e.currentTarget.classList.contains((Sidebar_styles_module_default()).docSidebarContainer)){return;}if(hiddenSidebarContainer){setHiddenSidebar(true);}},children:/*#__PURE__*/(0,jsx_runtime.jsx)(ResetOnSidebarChange,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)((Sidebar_styles_module_default()).sidebarViewport,hiddenSidebar&&(Sidebar_styles_module_default()).sidebarViewportHidden),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(DocSidebar,{sidebar:sidebar,path:pathname,onCollapse:toggleSidebar,isHidden:hiddenSidebar}),hiddenSidebar&&/*#__PURE__*/(0,jsx_runtime.jsx)(DocRootLayoutSidebarExpandButton,{toggleSidebar:toggleSidebar})]})})});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocRoot/Layout/Main/styles.module.css
var Main_styles_module = __webpack_require__(3685);
var Main_styles_module_default = /*#__PURE__*/__webpack_require__.n(Main_styles_module);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocRoot/Layout/Main/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocRootLayoutMain({hiddenSidebarContainer,children}){const sidebar=(0,docsSidebar/* useDocsSidebar */.t)();return/*#__PURE__*/(0,jsx_runtime.jsx)("main",{className:(0,clsx/* default */.A)((Main_styles_module_default()).docMainContainer,(hiddenSidebarContainer||!sidebar)&&(Main_styles_module_default()).docMainContainerEnhanced),children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)('container padding-top--md padding-bottom--lg',(Main_styles_module_default()).docItemWrapper,hiddenSidebarContainer&&(Main_styles_module_default()).docItemWrapperEnhanced),children:children})});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocRoot/Layout/styles.module.css
var Layout_styles_module = __webpack_require__(2607);
var Layout_styles_module_default = /*#__PURE__*/__webpack_require__.n(Layout_styles_module);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocRoot/Layout/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocRootLayout({children}){const sidebar=(0,docsSidebar/* useDocsSidebar */.t)();const[hiddenSidebarContainer,setHiddenSidebarContainer]=(0,react.useState)(false);return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(Layout_styles_module_default()).docsWrapper,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(BackToTopButton,{}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(Layout_styles_module_default()).docRoot,children:[sidebar&&/*#__PURE__*/(0,jsx_runtime.jsx)(DocRootLayoutSidebar,{sidebar:sidebar.items,hiddenSidebarContainer:hiddenSidebarContainer,setHiddenSidebarContainer:setHiddenSidebarContainer}),/*#__PURE__*/(0,jsx_runtime.jsx)(DocRootLayoutMain,{hiddenSidebarContainer:hiddenSidebarContainer,children:children})]})]});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/NotFound/Content/index.js
var Content = __webpack_require__(3363);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocRoot/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocRoot(props){const currentDocRouteMetadata=(0,docsUtils/* useDocRootMetadata */.B5)(props);if(!currentDocRouteMetadata){// We only render the not found content to avoid a double layout
// see https://github.com/facebook/docusaurus/pull/7966#pullrequestreview-1077276692
return/*#__PURE__*/(0,jsx_runtime.jsx)(Content/* default */.A,{});}const{docElement,sidebarName,sidebarItems}=currentDocRouteMetadata;return/*#__PURE__*/(0,jsx_runtime.jsx)(metadataUtils/* HtmlClassNameProvider */.e3,{className:(0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.page.docsDocPage),children:/*#__PURE__*/(0,jsx_runtime.jsx)(docsSidebar/* DocsSidebarProvider */.V,{name:sidebarName,items:sidebarItems,children:/*#__PURE__*/(0,jsx_runtime.jsx)(DocRootLayout,{children:docElement})})});}

/***/ }),

/***/ 4532:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DocVersionRoot)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1003);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2967);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2252);
/* harmony import */ var _docusaurus_renderRoutes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2831);
/* harmony import */ var _theme_SearchMetadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1463);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocVersionRootMetadata(props){const{version}=props;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_theme_SearchMetadata__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{version:version.version,tag:(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_3__/* .docVersionSearchTag */ .tU)(version.pluginId,version.version)}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__/* .PageMetadata */ .be,{children:version.noIndex&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})]});}function DocVersionRootContent(props){const{version,route}=props;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__/* .HtmlClassNameProvider */ .e3,{className:version.className,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_5__/* .DocsVersionProvider */ .n,{version:version,children:(0,_docusaurus_renderRoutes__WEBPACK_IMPORTED_MODULE_6__/* .renderRoutes */ .v)(route.routes)})});}function DocVersionRoot(props){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DocVersionRootMetadata,{...props}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DocVersionRootContent,{...props})]});}

/***/ }),

/***/ 7121:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DocsRoot)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4164);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1003);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7559);
/* harmony import */ var _docusaurus_renderRoutes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2831);
/* harmony import */ var _theme_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7356);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocsRoot(props){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .HtmlClassNameProvider */ .e3,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__/* .ThemeClassNames */ .G.wrapper.docsPages),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_theme_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{children:(0,_docusaurus_renderRoutes__WEBPACK_IMPORTED_MODULE_6__/* .renderRoutes */ .v)(props.route.routes)})});}

/***/ }),

/***/ 7547:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ EditMetaRow)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(4164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(1312);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(7559);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(725);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Edit/styles.module.css
var styles_module = __webpack_require__(1930);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Edit/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconEdit({className,...restProps}){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,clsx/* default */.A)((styles_module_default()).iconEdit,className),"aria-hidden":"true",...restProps,children:/*#__PURE__*/(0,jsx_runtime.jsx)("g",{children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/EditThisPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function EditThisPage({editUrl}){return/*#__PURE__*/(0,jsx_runtime.jsxs)(Link/* default */.A,{to:editUrl,className:ThemeClassNames/* ThemeClassNames */.G.common.editThisPage,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(IconEdit,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(4586);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/IntlUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useCalendar(){const{i18n:{currentLocale,localeConfigs}}=(0,useDocusaurusContext/* default */.A)();return localeConfigs[currentLocale].calendar;}function useDateTimeFormat(options={}){const{i18n:{currentLocale}}=(0,useDocusaurusContext/* default */.A)();const calendar=useCalendar();return new Intl.DateTimeFormat(currentLocale,{calendar,...options});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/LastUpdated/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function LastUpdatedAtDate({lastUpdatedAt}){const atDate=new Date(lastUpdatedAt);const dateTimeFormat=useDateTimeFormat({day:'numeric',month:'short',year:'numeric',timeZone:'UTC'});const formattedLastUpdatedAt=dateTimeFormat.format(atDate);return/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:/*#__PURE__*/(0,jsx_runtime.jsx)("time",{dateTime:atDate.toISOString(),itemProp:"dateModified",children:formattedLastUpdatedAt})})},children:' on {date}'});}function LastUpdatedByUser({lastUpdatedBy}){return/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:lastUpdatedBy})},children:' by {user}'});}function LastUpdated({lastUpdatedAt,lastUpdatedBy}){return/*#__PURE__*/(0,jsx_runtime.jsxs)("span",{className:ThemeClassNames/* ThemeClassNames */.G.common.lastUpdated,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:lastUpdatedAt?/*#__PURE__*/(0,jsx_runtime.jsx)(LastUpdatedAtDate,{lastUpdatedAt:lastUpdatedAt}):'',byUser:lastUpdatedBy?/*#__PURE__*/(0,jsx_runtime.jsx)(LastUpdatedByUser,{lastUpdatedBy:lastUpdatedBy}):''},children:'Last updated{atDate}{byUser}'}), false&&/*#__PURE__*/0]});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/EditMetaRow/styles.module.css
var EditMetaRow_styles_module = __webpack_require__(901);
var EditMetaRow_styles_module_default = /*#__PURE__*/__webpack_require__.n(EditMetaRow_styles_module);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/EditMetaRow/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function EditMetaRow({className,editUrl,lastUpdatedAt,lastUpdatedBy}){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)('row',className),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"col",children:editUrl&&/*#__PURE__*/(0,jsx_runtime.jsx)(EditThisPage,{editUrl:editUrl})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)('col',(EditMetaRow_styles_module_default()).lastUpdated),children:(lastUpdatedAt||lastUpdatedBy)&&/*#__PURE__*/(0,jsx_runtime.jsx)(LastUpdated,{lastUpdatedAt:lastUpdatedAt,lastUpdatedBy:lastUpdatedBy})})]});}

/***/ }),

/***/ 4608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Heading)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4164);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1312);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6342);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(725);
/* harmony import */ var _docusaurus_useBrokenLinks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2521);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4738);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Heading({as:As,id,...props}){const brokenLinks=(0,_docusaurus_useBrokenLinks__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)();const{navbar:{hideOnScroll}}=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_6__/* .useThemeConfig */ .p)();// H1 headings do not need an id because they don't appear in the TOC.
if(As==='h1'||!id){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(As,{...props,id:undefined});}brokenLinks.collectAnchor(id);const anchorTitle=(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .T)({id:'theme.common.headingLinkTitle',message:'Direct link to {heading}',description:'Title for link to heading'},{heading:typeof props.children==='string'?props.children:id});return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(As,{...props,className:(0,clsx__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)('anchor',hideOnScroll?(_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().anchorWithHideOnScrollNavbar):(_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().anchorWithStickyNavbar),props.className),id:id,children:[props.children,/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{className:"hash-link",to:`#${id}`,"aria-label":anchorTitle,title:anchorTitle,children:"\u200B"})]});}

/***/ }),

/***/ 5835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ IconExternalLink)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1455);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconExternalLink({width=13.5,height=13.5}){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg",{width:width,height:height,"aria-hidden":"true",viewBox:"0 0 24 24",className:(_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default().iconExternalLink),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"})});}

/***/ }),

/***/ 7356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Layout)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(4164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/ErrorBoundary.js + 1 modules
var ErrorBoundary = __webpack_require__(7489);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js + 2 modules
var metadataUtils = __webpack_require__(1003);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(6347);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(1312);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useLocationChange.js
var useLocationChange = __webpack_require__(5062);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/skipToContentUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * The id of the element that should become focused on a page
 * that does not have a <main> html tag.
 * Focusing the Docusaurus Layout children is a reasonable fallback.
 *
 * __ prefix allows search crawlers (Algolia/DocSearch) to ignore anchors
 * https://github.com/facebook/docusaurus/issues/8883#issuecomment-1516328368
 */const SkipToContentFallbackId='__docusaurus_skipToContent_fallback';/**
 * Returns the skip to content element to focus when the link is clicked.
 */function getSkipToContentTarget(){return(// Try to focus the <main> in priority
// Note: this will only work if JS is enabled
// See https://github.com/facebook/docusaurus/issues/6411#issuecomment-1284136069
document.querySelector('main:first-of-type')??// Then try to focus the fallback element (usually the Layout children)
document.getElementById(SkipToContentFallbackId));}function programmaticFocus(el){el.setAttribute('tabindex','-1');el.focus();el.removeAttribute('tabindex');}/** This hook wires the logic for a skip-to-content link. */function useSkipToContent(){const containerRef=(0,react.useRef)(null);const{action}=(0,react_router/* useHistory */.W6)();const onClick=(0,react.useCallback)(e=>{e.preventDefault();const targetElement=getSkipToContentTarget();if(targetElement){programmaticFocus(targetElement);}},[]);// "Reset" focus when navigating.
// See https://github.com/facebook/docusaurus/pull/8204#issuecomment-1276547558
(0,useLocationChange/* useLocationChange */.$)(({location})=>{if(containerRef.current&&!location.hash&&action==='PUSH'){programmaticFocus(containerRef.current);}});return{containerRef,onClick};}const DefaultSkipToContentLabel=(0,Translate/* translate */.T)({id:'theme.common.skipToMainContent',description:'The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation',message:'Skip to main content'});function SkipToContentLink(props){const linkLabel=props.children??DefaultSkipToContentLabel;const{containerRef,onClick}=useSkipToContent();return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{ref:containerRef,role:"region","aria-label":DefaultSkipToContentLabel,children:/*#__PURE__*/(0,jsx_runtime.jsx)("a",{...props,// Note this is a fallback href in case JS is disabled
// It has limitations, see https://github.com/facebook/docusaurus/issues/6411#issuecomment-1284136069
href:`#${SkipToContentFallbackId}`,onClick:onClick,children:linkLabel})});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(7559);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useKeyboardNavigation.js + 1 modules
var useKeyboardNavigation = __webpack_require__(1386);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/SkipToContent/styles.module.css
var styles_module = __webpack_require__(5521);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/SkipToContent/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function SkipToContent(){return/*#__PURE__*/(0,jsx_runtime.jsx)(SkipToContentLink,{className:(styles_module_default()).skipToContent});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(6342);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/announcementBar.js
var contexts_announcementBar = __webpack_require__(5041);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Close/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconClose({width=21,height=21,color='currentColor',strokeWidth=1.2,className,...restProps}){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 15 15",width:width,height:height,...restProps,children:/*#__PURE__*/(0,jsx_runtime.jsx)("g",{stroke:color,strokeWidth:strokeWidth,children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M.75.75l13.5 13.5M14.25.75L.75 14.25"})})});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/AnnouncementBar/CloseButton/styles.module.css
var CloseButton_styles_module = __webpack_require__(7521);
var CloseButton_styles_module_default = /*#__PURE__*/__webpack_require__.n(CloseButton_styles_module);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/AnnouncementBar/CloseButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function AnnouncementBarCloseButton(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("button",{type:"button","aria-label":(0,Translate/* translate */.T)({id:'theme.AnnouncementBar.closeButtonAriaLabel',message:'Close',description:'The ARIA label for close button of announcement bar'}),...props,className:(0,clsx/* default */.A)('clean-btn close',(CloseButton_styles_module_default()).closeButton,props.className),children:/*#__PURE__*/(0,jsx_runtime.jsx)(IconClose,{width:14,height:14,strokeWidth:3.1})});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/AnnouncementBar/Content/styles.module.css
var Content_styles_module = __webpack_require__(9034);
var Content_styles_module_default = /*#__PURE__*/__webpack_require__.n(Content_styles_module);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/AnnouncementBar/Content/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function AnnouncementBarContent(props){const{announcementBar}=(0,useThemeConfig/* useThemeConfig */.p)();const{content}=announcementBar;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{...props,className:(0,clsx/* default */.A)((Content_styles_module_default()).content,props.className)// Developer provided the HTML, so assume it's safe.
// eslint-disable-next-line react/no-danger
,dangerouslySetInnerHTML:{__html:content}});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/AnnouncementBar/styles.module.css
var AnnouncementBar_styles_module = __webpack_require__(2804);
var AnnouncementBar_styles_module_default = /*#__PURE__*/__webpack_require__.n(AnnouncementBar_styles_module);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/AnnouncementBar/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function AnnouncementBar(){const{announcementBar}=(0,useThemeConfig/* useThemeConfig */.p)();const{isActive,close}=(0,contexts_announcementBar/* useAnnouncementBar */.Mj)();if(!isActive){return null;}const{backgroundColor,textColor,isCloseable}=announcementBar;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(AnnouncementBar_styles_module_default()).announcementBar,style:{backgroundColor,color:textColor},role:"banner",children:[isCloseable&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(AnnouncementBar_styles_module_default()).announcementBarPlaceholder}),/*#__PURE__*/(0,jsx_runtime.jsx)(AnnouncementBarContent,{className:(AnnouncementBar_styles_module_default()).announcementBarContent}),isCloseable&&/*#__PURE__*/(0,jsx_runtime.jsx)(AnnouncementBarCloseButton,{onClick:close,className:(AnnouncementBar_styles_module_default()).announcementBarClose})]});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/navbarMobileSidebar.js + 1 modules
var navbarMobileSidebar = __webpack_require__(9876);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/scrollUtils.js
var scrollUtils = __webpack_require__(3104);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useHideableNavbar.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Wires the imperative logic of a hideable navbar.
 * @param hideOnScroll If `false`, this hook is basically a no-op.
 */function useHideableNavbar(hideOnScroll){const[isNavbarVisible,setIsNavbarVisible]=(0,react.useState)(hideOnScroll);const isFocusedAnchor=(0,react.useRef)(false);const navbarHeight=(0,react.useRef)(0);const navbarRef=(0,react.useCallback)(node=>{if(node!==null){navbarHeight.current=node.getBoundingClientRect().height;}},[]);(0,scrollUtils/* useScrollPosition */.Mq)(({scrollY:scrollTop},lastPosition)=>{if(!hideOnScroll){return;}// Needed mostly for handling rubber band scrolling.
// See https://github.com/facebook/docusaurus/pull/5721
if(scrollTop<navbarHeight.current){setIsNavbarVisible(true);return;}if(isFocusedAnchor.current){isFocusedAnchor.current=false;return;}const lastScrollTop=lastPosition?.scrollY;const documentHeight=document.documentElement.scrollHeight-navbarHeight.current;const windowHeight=window.innerHeight;if(lastScrollTop&&scrollTop>=lastScrollTop){setIsNavbarVisible(false);}else if(scrollTop+windowHeight<documentHeight){setIsNavbarVisible(true);}});(0,useLocationChange/* useLocationChange */.$)(locationChangeEvent=>{if(!hideOnScroll){return;}// See https://github.com/facebook/docusaurus/pull/8059#issuecomment-1239639480
const currentHash=locationChangeEvent.location.hash;const currentHashAnchor=currentHash?document.getElementById(currentHash.substring(1)):undefined;if(currentHashAnchor){isFocusedAnchor.current=true;setIsNavbarVisible(false);return;}setIsNavbarVisible(true);});return{navbarRef,isNavbarVisible};}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useLockBodyScroll.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Side-effect that locks the document body's scroll throughout the lifetime of
 * the containing component. e.g. when the mobile sidebar is expanded.
 */function useLockBodyScroll(lock=true){(0,react.useEffect)(()=>{document.body.style.overflow=lock?'hidden':'visible';return()=>{document.body.style.overflow='visible';};},[lock]);}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/reactUtils.js
var reactUtils = __webpack_require__(9532);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/navbarSecondaryMenu/content.js
var navbarSecondaryMenu_content = __webpack_require__(5600);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/navbarSecondaryMenu/display.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const Context=/*#__PURE__*/react.createContext(null);function useContextValue(){const mobileSidebar=(0,navbarMobileSidebar/* useNavbarMobileSidebar */.M)();const content=(0,navbarSecondaryMenu_content/* useNavbarSecondaryMenuContent */.YL)();const[shown,setShown]=(0,react.useState)(false);const hasContent=content.component!==null;const previousHasContent=(0,reactUtils/* usePrevious */.ZC)(hasContent);// When content is become available for the first time (set in useEffect)
// we set this content to be shown!
(0,react.useEffect)(()=>{const contentBecameAvailable=hasContent&&!previousHasContent;if(contentBecameAvailable){setShown(true);}},[hasContent,previousHasContent]);// On sidebar close, secondary menu is set to be shown on next re-opening
// (if any secondary menu content available)
(0,react.useEffect)(()=>{if(!hasContent){setShown(false);return;}if(!mobileSidebar.shown){setShown(true);}},[mobileSidebar.shown,hasContent]);return (0,react.useMemo)(()=>[shown,setShown],[shown]);}/** @internal */function NavbarSecondaryMenuDisplayProvider({children}){const value=useContextValue();return/*#__PURE__*/(0,jsx_runtime.jsx)(Context.Provider,{value:value,children:children});}function renderElement(content){if(content.component){const Comp=content.component;return/*#__PURE__*/(0,jsx_runtime.jsx)(Comp,{...content.props});}return undefined;}/** Wires the logic for rendering the mobile navbar secondary menu. */function useNavbarSecondaryMenu(){const value=(0,react.useContext)(Context);if(!value){throw new reactUtils/* ReactContextError */.dV('NavbarSecondaryMenuDisplayProvider');}const[shown,setShown]=value;const hide=(0,react.useCallback)(()=>setShown(false),[setShown]);const content=(0,navbarSecondaryMenu_content/* useNavbarSecondaryMenuContent */.YL)();return (0,react.useMemo)(()=>({shown,hide,content:renderElement(content)}),[hide,content,shown]);}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Navbar/MobileSidebar/Layout/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function NavbarMobileSidebarLayout({header,primaryMenu,secondaryMenu}){const{shown:secondaryMenuShown}=useNavbarSecondaryMenu();return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"navbar-sidebar",children:[header,/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)('navbar-sidebar__items',{'navbar-sidebar__items--show-secondary':secondaryMenuShown}),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"navbar-sidebar__item menu",children:primaryMenu}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"navbar-sidebar__item menu",children:secondaryMenu})]})]});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/colorMode.js
var contexts_colorMode = __webpack_require__(5293);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(2303);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/LightMode/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconLightMode(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 24 24",width:24,height:24,...props,children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{fill:"currentColor",d:"M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"})});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/DarkMode/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconDarkMode(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 24 24",width:24,height:24,...props,children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{fill:"currentColor",d:"M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"})});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/ColorModeToggle/styles.module.css
var ColorModeToggle_styles_module = __webpack_require__(3384);
var ColorModeToggle_styles_module_default = /*#__PURE__*/__webpack_require__.n(ColorModeToggle_styles_module);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/ColorModeToggle/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function ColorModeToggle({className,buttonClassName,value,onChange}){const isBrowser=(0,useIsBrowser/* default */.A)();const title=(0,Translate/* translate */.T)({message:'Switch between dark and light mode (currently {mode})',id:'theme.colorToggle.ariaLabel',description:'The ARIA label for the navbar color mode toggle'},{mode:value==='dark'?(0,Translate/* translate */.T)({message:'dark mode',id:'theme.colorToggle.ariaLabel.mode.dark',description:'The name for the dark color mode'}):(0,Translate/* translate */.T)({message:'light mode',id:'theme.colorToggle.ariaLabel.mode.light',description:'The name for the light color mode'})});return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)((ColorModeToggle_styles_module_default()).toggle,className),children:/*#__PURE__*/(0,jsx_runtime.jsxs)("button",{className:(0,clsx/* default */.A)('clean-btn',(ColorModeToggle_styles_module_default()).toggleButton,!isBrowser&&(ColorModeToggle_styles_module_default()).toggleButtonDisabled,buttonClassName),type:"button",onClick:()=>onChange(value==='dark'?'light':'dark'),disabled:!isBrowser,title:title,"aria-label":title,"aria-live":"polite",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(IconLightMode,{className:(0,clsx/* default */.A)((ColorModeToggle_styles_module_default()).toggleIcon,(ColorModeToggle_styles_module_default()).lightToggleIcon)}),/*#__PURE__*/(0,jsx_runtime.jsx)(IconDarkMode,{className:(0,clsx/* default */.A)((ColorModeToggle_styles_module_default()).toggleIcon,(ColorModeToggle_styles_module_default()).darkToggleIcon)})]})});}/* harmony default export */ const theme_ColorModeToggle = (/*#__PURE__*/react.memo(ColorModeToggle));
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Navbar/ColorModeToggle/styles.module.css
var Navbar_ColorModeToggle_styles_module = __webpack_require__(3127);
var Navbar_ColorModeToggle_styles_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_ColorModeToggle_styles_module);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Navbar/ColorModeToggle/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function NavbarColorModeToggle({className}){const navbarStyle=(0,useThemeConfig/* useThemeConfig */.p)().navbar.style;const disabled=(0,useThemeConfig/* useThemeConfig */.p)().colorMode.disableSwitch;const{colorMode,setColorMode}=(0,contexts_colorMode/* useColorMode */.G)();if(disabled){return null;}return/*#__PURE__*/(0,jsx_runtime.jsx)(theme_ColorModeToggle,{className:className,buttonClassName:navbarStyle==='dark'?(Navbar_ColorModeToggle_styles_module_default()).darkNavbarColorModeToggle:undefined,value:colorMode,onChange:setColorMode});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Logo/index.js
var Logo = __webpack_require__(3465);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Navbar/Logo/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function NavbarLogo(){return/*#__PURE__*/(0,jsx_runtime.jsx)(Logo/* default */.A,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title text--truncate"});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Navbar/MobileSidebar/Header/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function CloseButton(){const mobileSidebar=(0,navbarMobileSidebar/* useNavbarMobileSidebar */.M)();return/*#__PURE__*/(0,jsx_runtime.jsx)("button",{type:"button","aria-label":(0,Translate/* translate */.T)({id:'theme.docs.sidebar.closeSidebarButtonAriaLabel',message:'Close navigation bar',description:'The ARIA label for close button of mobile sidebar'}),className:"clean-btn navbar-sidebar__close",onClick:()=>mobileSidebar.toggle(),children:/*#__PURE__*/(0,jsx_runtime.jsx)(IconClose,{color:"var(--ifm-color-emphasis-600)"})});}function NavbarMobileSidebarHeader(){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"navbar-sidebar__brand",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(NavbarLogo,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(NavbarColorModeToggle,{className:"margin-right--md"}),/*#__PURE__*/(0,jsx_runtime.jsx)(CloseButton,{})]});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(725);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(6025);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/isInternalUrl.js
var isInternalUrl = __webpack_require__(6654);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/regexpUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /**
 * Matches a string regex (as provided from the config) against a target in a
 * null-safe fashion, case insensitive and global.
 */function isRegexpStringMatch(regexAsString,valueToTest){if(typeof regexAsString==='undefined'||typeof valueToTest==='undefined'){return false;}return new RegExp(regexAsString,'gi').test(valueToTest);}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/ExternalLink/index.js
var ExternalLink = __webpack_require__(5835);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/NavbarItem/NavbarNavLink.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function NavbarNavLink({activeBasePath,activeBaseRegex,to,href,label,html,isDropdownLink,prependBaseUrlToHref,...props}){// TODO all this seems hacky
// {to: 'version'} should probably be forbidden, in favor of {to: '/version'}
const toUrl=(0,useBaseUrl/* default */.A)(to);const activeBaseUrl=(0,useBaseUrl/* default */.A)(activeBasePath);const normalizedHref=(0,useBaseUrl/* default */.A)(href,{forcePrependBaseUrl:true});const isExternalLink=label&&href&&!(0,isInternalUrl/* default */.A)(href);// Link content is set through html XOR label
const linkContentProps=html?{dangerouslySetInnerHTML:{__html:html}}:{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[label,isExternalLink&&/*#__PURE__*/(0,jsx_runtime.jsx)(ExternalLink/* default */.A,{...(isDropdownLink&&{width:12,height:12})})]})};if(href){return/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{href:prependBaseUrlToHref?normalizedHref:href,...props,...linkContentProps});}return/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{to:toUrl,isNavLink:true,...((activeBasePath||activeBaseRegex)&&{isActive:(_match,location)=>activeBaseRegex?isRegexpStringMatch(activeBaseRegex,location.pathname):location.pathname.startsWith(activeBaseUrl)}),...props,...linkContentProps});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/NavbarItem/DefaultNavbarItem.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DefaultNavbarItemDesktop({className,isDropdownItem=false,...props}){const element=/*#__PURE__*/(0,jsx_runtime.jsx)(NavbarNavLink,{className:(0,clsx/* default */.A)(isDropdownItem?'dropdown__link':'navbar__item navbar__link',className),isDropdownLink:isDropdownItem,...props});if(isDropdownItem){return/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:element});}return element;}function DefaultNavbarItemMobile({className,isDropdownItem,...props}){return/*#__PURE__*/(0,jsx_runtime.jsx)("li",{className:"menu__list-item",children:/*#__PURE__*/(0,jsx_runtime.jsx)(NavbarNavLink,{className:(0,clsx/* default */.A)('menu__link',className),...props})});}function DefaultNavbarItem({mobile=false,position,// Need to destructure position from props so that it doesn't get passed on.
...props}){const Comp=mobile?DefaultNavbarItemMobile:DefaultNavbarItemDesktop;return/*#__PURE__*/(0,jsx_runtime.jsx)(Comp,{...props,activeClassName:props.activeClassName??(mobile?'menu__link--active':'navbar__link--active')});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Collapsible/index.js
var Collapsible = __webpack_require__(1422);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/routesUtils.js
var routesUtils = __webpack_require__(9169);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(4586);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useLocalPathname.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Get the pathname of current route, without the optional site baseUrl.
 * - `/docs/myDoc` => `/docs/myDoc`
 * - `/baseUrl/docs/myDoc` => `/docs/myDoc`
 */function useLocalPathname(){const{siteConfig:{baseUrl}}=(0,useDocusaurusContext/* default */.A)();const{pathname}=(0,react_router/* useLocation */.zy)();return pathname.replace(baseUrl,'/');}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/NavbarItem/DropdownNavbarItem/styles.module.css
var DropdownNavbarItem_styles_module = __webpack_require__(6214);
var DropdownNavbarItem_styles_module_default = /*#__PURE__*/__webpack_require__.n(DropdownNavbarItem_styles_module);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/NavbarItem/DropdownNavbarItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function isItemActive(item,localPathname){if((0,routesUtils/* isSamePath */.ys)(item.to,localPathname)){return true;}if(isRegexpStringMatch(item.activeBaseRegex,localPathname)){return true;}if(item.activeBasePath&&localPathname.startsWith(item.activeBasePath)){return true;}return false;}function containsActiveItems(items,localPathname){return items.some(item=>isItemActive(item,localPathname));}function DropdownNavbarItemDesktop({items,position,className,onClick,...props}){const dropdownRef=(0,react.useRef)(null);const[showDropdown,setShowDropdown]=(0,react.useState)(false);(0,react.useEffect)(()=>{const handleClickOutside=event=>{if(!dropdownRef.current||dropdownRef.current.contains(event.target)){return;}setShowDropdown(false);};document.addEventListener('mousedown',handleClickOutside);document.addEventListener('touchstart',handleClickOutside);document.addEventListener('focusin',handleClickOutside);return()=>{document.removeEventListener('mousedown',handleClickOutside);document.removeEventListener('touchstart',handleClickOutside);document.removeEventListener('focusin',handleClickOutside);};},[dropdownRef]);return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{ref:dropdownRef,className:(0,clsx/* default */.A)('navbar__item','dropdown','dropdown--hoverable',{'dropdown--right':position==='right','dropdown--show':showDropdown}),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(NavbarNavLink,{"aria-haspopup":"true","aria-expanded":showDropdown,role:"button"// # hash permits to make the <a> tag focusable in case no link target
// See https://github.com/facebook/docusaurus/pull/6003
// There's probably a better solution though...
,href:props.to?undefined:'#',className:(0,clsx/* default */.A)('navbar__link',className),...props,onClick:props.to?undefined:e=>e.preventDefault(),onKeyDown:e=>{if(e.key==='Enter'){e.preventDefault();setShowDropdown(!showDropdown);}},children:props.children??props.label}),/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{className:"dropdown__menu",children:items.map((childItemProps,i)=>/*#__PURE__*/(0,react.createElement)(NavbarItem,{isDropdownItem:true,activeClassName:"dropdown__link--active",...childItemProps,key:i}))})]});}function DropdownNavbarItemMobile({items,className,position,// Need to destructure position from props so that it doesn't get passed on.
onClick,...props}){const localPathname=useLocalPathname();const containsActive=containsActiveItems(items,localPathname);const{collapsed,toggleCollapsed,setCollapsed}=(0,Collapsible/* useCollapsible */.u)({initialState:()=>!containsActive});// Expand/collapse if any item active after a navigation
(0,react.useEffect)(()=>{if(containsActive){setCollapsed(!containsActive);}},[localPathname,containsActive,setCollapsed]);return/*#__PURE__*/(0,jsx_runtime.jsxs)("li",{className:(0,clsx/* default */.A)('menu__list-item',{'menu__list-item--collapsed':collapsed}),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(NavbarNavLink,{role:"button",className:(0,clsx/* default */.A)((DropdownNavbarItem_styles_module_default()).dropdownNavbarItemMobile,'menu__link menu__link--sublist menu__link--sublist-caret',className),...props,onClick:e=>{e.preventDefault();toggleCollapsed();},children:props.children??props.label}),/*#__PURE__*/(0,jsx_runtime.jsx)(Collapsible/* Collapsible */.N,{lazy:true,as:"ul",className:"menu__list",collapsed:collapsed,children:items.map((childItemProps,i)=>/*#__PURE__*/(0,react.createElement)(NavbarItem,{mobile:true,isDropdownItem:true,onClick:onClick,activeClassName:"menu__link--active",...childItemProps,key:i}))})]});}function DropdownNavbarItem({mobile=false,...props}){const Comp=mobile?DropdownNavbarItemMobile:DropdownNavbarItemDesktop;return/*#__PURE__*/(0,jsx_runtime.jsx)(Comp,{...props});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useAlternatePageUtils.js
var useAlternatePageUtils = __webpack_require__(2131);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Language/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconLanguage({width=20,height=20,...props}){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 24 24",width:width,height:height,"aria-hidden":true,...props,children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{fill:"currentColor",d:"M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"})});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/NavbarItem/LocaleDropdownNavbarItem/styles.module.css
var LocaleDropdownNavbarItem_styles_module = __webpack_require__(8244);
var LocaleDropdownNavbarItem_styles_module_default = /*#__PURE__*/__webpack_require__.n(LocaleDropdownNavbarItem_styles_module);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/NavbarItem/LocaleDropdownNavbarItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function LocaleDropdownNavbarItem({mobile,dropdownItemsBefore,dropdownItemsAfter,queryString='',...props}){const{i18n:{currentLocale,locales,localeConfigs}}=(0,useDocusaurusContext/* default */.A)();const alternatePageUtils=(0,useAlternatePageUtils/* useAlternatePageUtils */.o)();const{search,hash}=(0,react_router/* useLocation */.zy)();const localeItems=locales.map(locale=>{const baseTo=`pathname://${alternatePageUtils.createUrl({locale,fullyQualified:false})}`;// preserve ?search#hash suffix on locale switches
const to=`${baseTo}${search}${hash}${queryString}`;return{label:localeConfigs[locale].label,lang:localeConfigs[locale].htmlLang,to,target:'_self',autoAddBaseUrl:false,className:// eslint-disable-next-line no-nested-ternary
locale===currentLocale?// Similar idea as DefaultNavbarItem: select the right Infima active
// class name. This cannot be substituted with isActive, because the
// target URLs contain `pathname://` and therefore are not NavLinks!
mobile?'menu__link--active':'dropdown__link--active':''};});const items=[...dropdownItemsBefore,...localeItems,...dropdownItemsAfter];// Mobile is handled a bit differently
const dropdownLabel=mobile?(0,Translate/* translate */.T)({message:'Languages',id:'theme.navbar.mobileLanguageDropdown.label',description:'The label for the mobile language switcher dropdown'}):localeConfigs[currentLocale].label;return/*#__PURE__*/(0,jsx_runtime.jsx)(DropdownNavbarItem,{...props,mobile:mobile,label:/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(IconLanguage,{className:(LocaleDropdownNavbarItem_styles_module_default()).iconLanguage}),dropdownLabel]}),items:items});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Noop.js
var Noop = __webpack_require__(418);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Navbar/Search/styles.module.css
var Search_styles_module = __webpack_require__(7921);
var Search_styles_module_default = /*#__PURE__*/__webpack_require__.n(Search_styles_module);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Navbar/Search/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function NavbarSearch({children,className}){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)(className,(Search_styles_module_default()).navbarSearchContainer),children:children});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/NavbarItem/SearchNavbarItem.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function SearchNavbarItem({mobile,className}){if(mobile){return null;}return/*#__PURE__*/(0,jsx_runtime.jsx)(NavbarSearch,{className:className,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Noop/* default */.A,{})});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/NavbarItem/HtmlNavbarItem.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function HtmlNavbarItem({value,className,mobile=false,isDropdownItem=false}){const Comp=isDropdownItem?'li':'div';return/*#__PURE__*/(0,jsx_runtime.jsx)(Comp,{className:(0,clsx/* default */.A)({navbar__item:!mobile&&!isDropdownItem,'menu__list-item':mobile},className),dangerouslySetInnerHTML:{__html:value}});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/index.js + 2 modules
var client = __webpack_require__(4070);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/docsUtils.js + 1 modules
var docsUtils = __webpack_require__(1754);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/NavbarItem/DocNavbarItem.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocNavbarItem({docId,label:staticLabel,docsPluginId,...props}){const{activeDoc}=(0,client/* useActiveDocContext */.zK)(docsPluginId);const doc=(0,docsUtils/* useLayoutDoc */.QB)(docId,docsPluginId);const pageActive=activeDoc?.path===doc?.path;// Draft and unlisted items are not displayed in the navbar.
if(doc===null||doc.unlisted&&!pageActive){return null;}return/*#__PURE__*/(0,jsx_runtime.jsx)(DefaultNavbarItem,{exact:true,...props,isActive:()=>pageActive||!!activeDoc?.sidebar&&activeDoc.sidebar===doc.sidebar,label:staticLabel??doc.id,to:doc.path});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/NavbarItem/DocSidebarNavbarItem.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocSidebarNavbarItem({sidebarId,label,docsPluginId,...props}){const{activeDoc}=(0,client/* useActiveDocContext */.zK)(docsPluginId);const sidebarLink=(0,docsUtils/* useLayoutDocsSidebar */.fW)(sidebarId,docsPluginId).link;if(!sidebarLink){throw new Error(`DocSidebarNavbarItem: Sidebar with ID "${sidebarId}" doesn't have anything to be linked to.`);}return/*#__PURE__*/(0,jsx_runtime.jsx)(DefaultNavbarItem,{exact:true,...props,isActive:()=>activeDoc?.sidebar===sidebarId,label:label??sidebarLink.label,to:sidebarLink.path});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/NavbarItem/DocsVersionNavbarItem.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const getVersionMainDoc=version=>version.docs.find(doc=>doc.id===version.mainDocId);function DocsVersionNavbarItem({label:staticLabel,to:staticTo,docsPluginId,...props}){const version=(0,docsUtils/* useDocsVersionCandidates */.Vd)(docsPluginId)[0];const label=staticLabel??version.label;const path=staticTo??getVersionMainDoc(version).path;return/*#__PURE__*/(0,jsx_runtime.jsx)(DefaultNavbarItem,{...props,label:label,to:path});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/docsPreferredVersion.js
var docsPreferredVersion = __webpack_require__(5597);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/NavbarItem/DocsVersionDropdownNavbarItem.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const DocsVersionDropdownNavbarItem_getVersionMainDoc=version=>version.docs.find(doc=>doc.id===version.mainDocId);function DocsVersionDropdownNavbarItem({mobile,docsPluginId,dropdownActiveClassDisabled,dropdownItemsBefore,dropdownItemsAfter,...props}){const{search,hash}=(0,react_router/* useLocation */.zy)();const activeDocContext=(0,client/* useActiveDocContext */.zK)(docsPluginId);const versions=(0,client/* useVersions */.jh)(docsPluginId);const{savePreferredVersionName}=(0,docsPreferredVersion/* useDocsPreferredVersion */.g1)(docsPluginId);const versionLinks=versions.map(version=>{// We try to link to the same doc, in another version
// When not possible, fallback to the "main doc" of the version
const versionDoc=activeDocContext.alternateDocVersions[version.name]??DocsVersionDropdownNavbarItem_getVersionMainDoc(version);return{label:version.label,// preserve ?search#hash suffix on version switches
to:`${versionDoc.path}${search}${hash}`,isActive:()=>version===activeDocContext.activeVersion,onClick:()=>savePreferredVersionName(version.name)};});const items=[...dropdownItemsBefore,...versionLinks,...dropdownItemsAfter];const dropdownVersion=(0,docsUtils/* useDocsVersionCandidates */.Vd)(docsPluginId)[0];// Mobile dropdown is handled a bit differently
const dropdownLabel=mobile&&items.length>1?(0,Translate/* translate */.T)({id:'theme.navbar.mobileVersionsDropdown.label',message:'Versions',description:'The label for the navbar versions dropdown on mobile view'}):dropdownVersion.label;const dropdownTo=mobile&&items.length>1?undefined:DocsVersionDropdownNavbarItem_getVersionMainDoc(dropdownVersion).path;// We don't want to render a version dropdown with 0 or 1 item. If we build
// the site with a single docs version (onlyIncludeVersions: ['1.0.0']),
// We'd rather render a button instead of a dropdown
if(items.length<=1){return/*#__PURE__*/(0,jsx_runtime.jsx)(DefaultNavbarItem,{...props,mobile:mobile,label:dropdownLabel,to:dropdownTo,isActive:dropdownActiveClassDisabled?()=>false:undefined});}return/*#__PURE__*/(0,jsx_runtime.jsx)(DropdownNavbarItem,{...props,mobile:mobile,label:dropdownLabel,to:dropdownTo,items:items,isActive:dropdownActiveClassDisabled?()=>false:undefined});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/NavbarItem/ComponentTypes.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const ComponentTypes={default:DefaultNavbarItem,localeDropdown:LocaleDropdownNavbarItem,search:SearchNavbarItem,dropdown:DropdownNavbarItem,html:HtmlNavbarItem,doc:DocNavbarItem,docSidebar:DocSidebarNavbarItem,docsVersion:DocsVersionNavbarItem,docsVersionDropdown:DocsVersionDropdownNavbarItem};/* harmony default export */ const NavbarItem_ComponentTypes = (ComponentTypes);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/NavbarItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function normalizeComponentType(type,props){// Backward compatibility: navbar item with no type set
// but containing dropdown items should use the type "dropdown"
if(!type||type==='default'){return'items'in props?'dropdown':'default';}return type;}function NavbarItem({type,...props}){const componentType=normalizeComponentType(type,props);const NavbarItemComponent=NavbarItem_ComponentTypes[componentType];if(!NavbarItemComponent){throw new Error(`No NavbarItem component found for type "${type}".`);}return/*#__PURE__*/(0,jsx_runtime.jsx)(NavbarItemComponent,{...props});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Navbar/MobileSidebar/PrimaryMenu/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useNavbarItems(){// TODO temporary casting until ThemeConfig type is improved
return (0,useThemeConfig/* useThemeConfig */.p)().navbar.items;}// The primary menu displays the navbar items
function NavbarMobilePrimaryMenu(){const mobileSidebar=(0,navbarMobileSidebar/* useNavbarMobileSidebar */.M)();// TODO how can the order be defined for mobile?
// Should we allow providing a different list of items?
const items=useNavbarItems();return/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{className:"menu__list",children:items.map((item,i)=>/*#__PURE__*/(0,react.createElement)(NavbarItem,{mobile:true,...item,onClick:()=>mobileSidebar.toggle(),key:i}))});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Navbar/MobileSidebar/SecondaryMenu/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function SecondaryMenuBackButton(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("button",{...props,type:"button",className:"clean-btn navbar-sidebar__back",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)",children:"\u2190 Back to main menu"})});}// The secondary menu slides from the right and shows contextual information
// such as the docs sidebar
function NavbarMobileSidebarSecondaryMenu(){const isPrimaryMenuEmpty=(0,useThemeConfig/* useThemeConfig */.p)().navbar.items.length===0;const secondaryMenu=useNavbarSecondaryMenu();return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[!isPrimaryMenuEmpty&&/*#__PURE__*/(0,jsx_runtime.jsx)(SecondaryMenuBackButton,{onClick:()=>secondaryMenu.hide()}),secondaryMenu.content]});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Navbar/MobileSidebar/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function NavbarMobileSidebar(){const mobileSidebar=(0,navbarMobileSidebar/* useNavbarMobileSidebar */.M)();useLockBodyScroll(mobileSidebar.shown);if(!mobileSidebar.shouldRender){return null;}return/*#__PURE__*/(0,jsx_runtime.jsx)(NavbarMobileSidebarLayout,{header:/*#__PURE__*/(0,jsx_runtime.jsx)(NavbarMobileSidebarHeader,{}),primaryMenu:/*#__PURE__*/(0,jsx_runtime.jsx)(NavbarMobilePrimaryMenu,{}),secondaryMenu:/*#__PURE__*/(0,jsx_runtime.jsx)(NavbarMobileSidebarSecondaryMenu,{})});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Navbar/Layout/styles.module.css
var Layout_styles_module = __webpack_require__(231);
var Layout_styles_module_default = /*#__PURE__*/__webpack_require__.n(Layout_styles_module);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Navbar/Layout/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function NavbarBackdrop(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{role:"presentation",...props,className:(0,clsx/* default */.A)('navbar-sidebar__backdrop',props.className)});}function NavbarLayout({children}){const{navbar:{hideOnScroll,style}}=(0,useThemeConfig/* useThemeConfig */.p)();const mobileSidebar=(0,navbarMobileSidebar/* useNavbarMobileSidebar */.M)();const{navbarRef,isNavbarVisible}=useHideableNavbar(hideOnScroll);return/*#__PURE__*/(0,jsx_runtime.jsxs)("nav",{ref:navbarRef,"aria-label":(0,Translate/* translate */.T)({id:'theme.NavBar.navAriaLabel',message:'Main',description:'The ARIA label for the main navigation'}),className:(0,clsx/* default */.A)('navbar','navbar--fixed-top',hideOnScroll&&[(Layout_styles_module_default()).navbarHideable,!isNavbarVisible&&(Layout_styles_module_default()).navbarHidden],{'navbar--dark':style==='dark','navbar--primary':style==='primary','navbar-sidebar--show':mobileSidebar.shown}),children:[children,/*#__PURE__*/(0,jsx_runtime.jsx)(NavbarBackdrop,{onClick:mobileSidebar.toggle}),/*#__PURE__*/(0,jsx_runtime.jsx)(NavbarMobileSidebar,{})]});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/utils-common/lib/index.js
var lib = __webpack_require__(440);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/errorBoundaryUtils.module.css
var errorBoundaryUtils_module = __webpack_require__(7983);
var errorBoundaryUtils_module_default = /*#__PURE__*/__webpack_require__.n(errorBoundaryUtils_module);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/errorBoundaryUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function ErrorBoundaryTryAgainButton(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("button",{type:"button",...props,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.ErrorPageContent.tryAgain",description:"The label of the button to try again rendering when the React error boundary captures an error",children:"Try again"})});}// A very simple reusable ErrorBoundary fallback component
function ErrorBoundaryErrorMessageFallback({error,tryAgain}){return/*#__PURE__*/_jsxs("div",{className:styles.errorBoundaryFallback,children:[/*#__PURE__*/_jsx("p",{children:error.message}),/*#__PURE__*/_jsx(ErrorBoundaryTryAgainButton,{onClick:tryAgain})]});}function ErrorBoundaryError({error}){const causalChain=(0,lib.getErrorCausalChain)(error);const fullMessage=causalChain.map(e=>e.message).join('\n\nCause:\n');return/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:(errorBoundaryUtils_module_default()).errorBoundaryError,children:fullMessage});}/**
 * This component is useful to wrap a low-level error into a more meaningful
 * error with extra context, using the ES error-cause feature.
 *
 * <ErrorCauseBoundary
 *   onError={(error) => new Error("extra context message",{cause: error})}
 * >
 *   <RiskyComponent>
 * </ErrorCauseBoundary>
 */class ErrorCauseBoundary extends react.Component{componentDidCatch(error,errorInfo){throw this.props.onError(error,errorInfo);}render(){return this.props.children;}}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/navbarUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const DefaultNavItemPosition='right';/**
 * Split links by left/right. If position is unspecified, fallback to right.
 */function splitNavbarItems(items){function isLeft(item){return(item.position??DefaultNavItemPosition)==='left';}const leftItems=items.filter(isLeft);const rightItems=items.filter(item=>!isLeft(item));return[leftItems,rightItems];}/**
 * Composes multiple navbar state providers that are mutually dependent and
 * hence can't be re-ordered.
 */function NavbarProvider({children}){return/*#__PURE__*/(0,jsx_runtime.jsx)(navbarSecondaryMenu_content/* NavbarSecondaryMenuContentProvider */.y_,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(navbarMobileSidebar/* NavbarMobileSidebarProvider */.e,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(NavbarSecondaryMenuDisplayProvider,{children:children})})});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Menu/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconMenu({width=30,height=30,className,...restProps}){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{className:className,width:width,height:height,viewBox:"0 0 30 30","aria-hidden":"true",...restProps,children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"})});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Navbar/MobileSidebar/Toggle/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MobileSidebarToggle(){const{toggle,shown}=(0,navbarMobileSidebar/* useNavbarMobileSidebar */.M)();return/*#__PURE__*/(0,jsx_runtime.jsx)("button",{onClick:toggle,"aria-label":(0,Translate/* translate */.T)({id:'theme.docs.sidebar.toggleSidebarButtonAriaLabel',message:'Toggle navigation bar',description:'The ARIA label for hamburger menu button of mobile navigation'}),"aria-expanded":shown,className:"navbar__toggle clean-btn",type:"button",children:/*#__PURE__*/(0,jsx_runtime.jsx)(IconMenu,{})});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Navbar/Content/styles.module.css
var Navbar_Content_styles_module = __webpack_require__(8484);
var Navbar_Content_styles_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_Content_styles_module);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Navbar/Content/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Content_useNavbarItems(){// TODO temporary casting until ThemeConfig type is improved
return (0,useThemeConfig/* useThemeConfig */.p)().navbar.items;}function NavbarItems({items}){return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:items.map((item,i)=>/*#__PURE__*/(0,jsx_runtime.jsx)(ErrorCauseBoundary,{onError:error=>new Error(`A theme navbar item failed to render.
Please double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:
${JSON.stringify(item,null,2)}`,{cause:error}),children:/*#__PURE__*/(0,jsx_runtime.jsx)(NavbarItem,{...item})},i))});}function NavbarContentLayout({left,right}){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"navbar__inner",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"navbar__items",children:left}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"navbar__items navbar__items--right",children:right})]});}function NavbarContent(){const mobileSidebar=(0,navbarMobileSidebar/* useNavbarMobileSidebar */.M)();const items=Content_useNavbarItems();const[leftItems,rightItems]=splitNavbarItems(items);const searchBarItem=items.find(item=>item.type==='search');return/*#__PURE__*/(0,jsx_runtime.jsx)(NavbarContentLayout,{left:/*#__PURE__*/ // TODO stop hardcoding items?
(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[!mobileSidebar.disabled&&/*#__PURE__*/(0,jsx_runtime.jsx)(MobileSidebarToggle,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(NavbarLogo,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(NavbarItems,{items:leftItems})]}),right:/*#__PURE__*/ // TODO stop hardcoding items?
// Ask the user to add the respective navbar items => more flexible
(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(NavbarItems,{items:rightItems}),/*#__PURE__*/(0,jsx_runtime.jsx)(NavbarColorModeToggle,{className:(Navbar_Content_styles_module_default()).colorModeToggle}),!searchBarItem&&/*#__PURE__*/(0,jsx_runtime.jsx)(NavbarSearch,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Noop/* default */.A,{})})]})});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Navbar/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Navbar(){return/*#__PURE__*/(0,jsx_runtime.jsx)(NavbarLayout,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(NavbarContent,{})});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/footerUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /**
 * A rough duck-typing about whether the `footer.links` is intended to be multi-
 * column.
 */function isMultiColumnFooterLinks(links){return'title'in links[0];}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Footer/LinkItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function FooterLinkItem({item}){const{to,href,label,prependBaseUrlToHref,...props}=item;const toUrl=(0,useBaseUrl/* default */.A)(to);const normalizedHref=(0,useBaseUrl/* default */.A)(href,{forcePrependBaseUrl:true});return/*#__PURE__*/(0,jsx_runtime.jsxs)(Link/* default */.A,{className:"footer__link-item",...(href?{href:prependBaseUrlToHref?normalizedHref:href}:{to:toUrl}),...props,children:[label,href&&!(0,isInternalUrl/* default */.A)(href)&&/*#__PURE__*/(0,jsx_runtime.jsx)(ExternalLink/* default */.A,{})]});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Footer/Links/MultiColumn/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function ColumnLinkItem({item}){return item.html?/*#__PURE__*/(0,jsx_runtime.jsx)("li",{className:"footer__item"// Developer provided the HTML, so assume it's safe.
// eslint-disable-next-line react/no-danger
,dangerouslySetInnerHTML:{__html:item.html}}):/*#__PURE__*/(0,jsx_runtime.jsx)("li",{className:"footer__item",children:/*#__PURE__*/(0,jsx_runtime.jsx)(FooterLinkItem,{item:item})},item.href??item.to);}function Column({column}){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"col footer__col",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"footer__title",children:column.title}),/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{className:"footer__items clean-list",children:column.items.map((item,i)=>/*#__PURE__*/(0,jsx_runtime.jsx)(ColumnLinkItem,{item:item},i))})]});}function FooterLinksMultiColumn({columns}){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"row footer__links",children:columns.map((column,i)=>/*#__PURE__*/(0,jsx_runtime.jsx)(Column,{column:column},i))});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Footer/Links/Simple/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Separator(){return/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"footer__link-separator",children:"\xB7"});}function SimpleLinkItem({item}){return item.html?/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"footer__link-item"// Developer provided the HTML, so assume it's safe.
// eslint-disable-next-line react/no-danger
,dangerouslySetInnerHTML:{__html:item.html}}):/*#__PURE__*/(0,jsx_runtime.jsx)(FooterLinkItem,{item:item});}function FooterLinksSimple({links}){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"footer__links text--center",children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"footer__links",children:links.map((item,i)=>/*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(SimpleLinkItem,{item:item}),links.length!==i+1&&/*#__PURE__*/(0,jsx_runtime.jsx)(Separator,{})]},i))})});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Footer/Links/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function FooterLinks({links}){return isMultiColumnFooterLinks(links)?/*#__PURE__*/(0,jsx_runtime.jsx)(FooterLinksMultiColumn,{columns:links}):/*#__PURE__*/(0,jsx_runtime.jsx)(FooterLinksSimple,{links:links});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/ThemedImage/index.js + 1 modules
var ThemedImage = __webpack_require__(2903);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Footer/Logo/styles.module.css
var Logo_styles_module = __webpack_require__(5309);
var Logo_styles_module_default = /*#__PURE__*/__webpack_require__.n(Logo_styles_module);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Footer/Logo/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function LogoImage({logo}){const{withBaseUrl}=(0,useBaseUrl/* useBaseUrlUtils */.h)();const sources={light:withBaseUrl(logo.src),dark:withBaseUrl(logo.srcDark??logo.src)};return/*#__PURE__*/(0,jsx_runtime.jsx)(ThemedImage/* default */.A,{className:(0,clsx/* default */.A)('footer__logo',logo.className),alt:logo.alt,sources:sources,width:logo.width,height:logo.height,style:logo.style});}function FooterLogo({logo}){return logo.href?/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{href:logo.href,className:(Logo_styles_module_default()).footerLogoLink,target:logo.target,children:/*#__PURE__*/(0,jsx_runtime.jsx)(LogoImage,{logo:logo})}):/*#__PURE__*/(0,jsx_runtime.jsx)(LogoImage,{logo:logo});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Footer/Copyright/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function FooterCopyright({copyright}){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"footer__copyright"// Developer provided the HTML, so assume it's safe.
// eslint-disable-next-line react/no-danger
,dangerouslySetInnerHTML:{__html:copyright}});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Footer/Layout/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function FooterLayout({style,links,logo,copyright}){return/*#__PURE__*/(0,jsx_runtime.jsx)("footer",{className:(0,clsx/* default */.A)('footer',{'footer--dark':style==='dark'}),children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"container container-fluid",children:[links,(logo||copyright)&&/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"footer__bottom text--center",children:[logo&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"margin-bottom--sm",children:logo}),copyright]})]})});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Footer/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Footer(){const{footer}=(0,useThemeConfig/* useThemeConfig */.p)();if(!footer){return null;}const{copyright,links,logo,style}=footer;return/*#__PURE__*/(0,jsx_runtime.jsx)(FooterLayout,{style:style,links:links&&links.length>0&&/*#__PURE__*/(0,jsx_runtime.jsx)(FooterLinks,{links:links}),logo:logo&&/*#__PURE__*/(0,jsx_runtime.jsx)(FooterLogo,{logo:logo}),copyright:copyright&&/*#__PURE__*/(0,jsx_runtime.jsx)(FooterCopyright,{copyright:copyright})});}/* harmony default export */ const theme_Footer = (/*#__PURE__*/react.memo(Footer));
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/Provider/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const Provider=(0,reactUtils/* composeProviders */.fM)([contexts_colorMode/* ColorModeProvider */.a,contexts_announcementBar/* AnnouncementBarProvider */.oq,scrollUtils/* ScrollControllerProvider */.Tv,docsPreferredVersion/* DocsPreferredVersionContextProvider */.VQ,metadataUtils/* PluginHtmlClassNameProvider */.Jx,NavbarProvider]);function LayoutProvider({children}){return/*#__PURE__*/(0,jsx_runtime.jsx)(Provider,{children:children});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js
var Heading = __webpack_require__(4608);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/ErrorPageContent.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function ErrorPageContent({error,tryAgain}){return/*#__PURE__*/(0,jsx_runtime.jsx)("main",{className:"container margin-vert--xl",children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"row",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"col col--6 col--offset-3",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* default */.A,{as:"h1",className:"hero__title",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.ErrorPageContent.title",description:"The title of the fallback page when the page crashed",children:"This page crashed."})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"margin-vert--lg",children:/*#__PURE__*/(0,jsx_runtime.jsx)(ErrorBoundaryTryAgainButton,{onClick:tryAgain,className:"button button--primary shadow--lw"})}),/*#__PURE__*/(0,jsx_runtime.jsx)("hr",{}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"margin-vert--md",children:/*#__PURE__*/(0,jsx_runtime.jsx)(ErrorBoundaryError,{error:error})})]})})});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/styles.module.css
var theme_Layout_styles_module = __webpack_require__(6218);
var theme_Layout_styles_module_default = /*#__PURE__*/__webpack_require__.n(theme_Layout_styles_module);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Layout(props){const{children,noFooter,wrapperClassName,// Not really layout-related, but kept for convenience/retro-compatibility
title,description}=props;(0,useKeyboardNavigation/* useKeyboardNavigation */.J)();return/*#__PURE__*/(0,jsx_runtime.jsxs)(LayoutProvider,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(metadataUtils/* PageMetadata */.be,{title:title,description:description}),/*#__PURE__*/(0,jsx_runtime.jsx)(SkipToContent,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(AnnouncementBar,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(Navbar,{}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{id:SkipToContentFallbackId,className:(0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.wrapper.main,(theme_Layout_styles_module_default()).mainWrapper,wrapperClassName),children:/*#__PURE__*/(0,jsx_runtime.jsx)(ErrorBoundary/* default */.A,{fallback:params=>/*#__PURE__*/(0,jsx_runtime.jsx)(ErrorPageContent,{...params}),children:children})}),!noFooter&&/*#__PURE__*/(0,jsx_runtime.jsx)(theme_Footer,{})]});}

/***/ }),

/***/ 3465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Logo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(725);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6025);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4586);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6342);
/* harmony import */ var _theme_ThemedImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2903);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function LogoThemedImage({logo,alt,imageClassName}){const sources={light:(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(logo.src),dark:(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(logo.srcDark||logo.src)};const themedImage=/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_theme_ThemedImage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,{className:logo.className,sources:sources,height:logo.height,width:logo.width,alt:alt,style:logo.style});// Is this extra div really necessary?
// introduced in https://github.com/facebook/docusaurus/pull/5666
return imageClassName?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:imageClassName,children:themedImage}):themedImage;}function Logo(props){const{siteConfig:{title}}=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)();const{navbar:{title:navbarTitle,logo}}=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_6__/* .useThemeConfig */ .p)();const{imageClassName,titleClassName,...propsRest}=props;const logoLink=(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(logo?.href||'/');// If visible title is shown, fallback alt text should be
// an empty string to mark the logo as decorative.
const fallbackAlt=navbarTitle?'':title;// Use logo alt text if provided (including empty string),
// and provide a sensible fallback otherwise.
const alt=logo?.alt??fallbackAlt;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{to:logoLink,...propsRest,...(logo?.target&&{target:logo.target}),children:[logo&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(LogoThemedImage,{logo:logo,alt:alt,imageClassName:imageClassName}),navbarTitle!=null&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("b",{className:titleClassName,children:navbarTitle})]});}

/***/ }),

/***/ 5034:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ MDXContent)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(5260);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(2303);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(4164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/colorMode.js
var contexts_colorMode = __webpack_require__(5293);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(6342);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/usePrismTheme.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Returns a color-mode-dependent Prism theme: whatever the user specified in
 * the config. Falls back to `palenight`.
 */function usePrismTheme(){const{prism}=(0,useThemeConfig/* useThemeConfig */.p)();const{colorMode}=(0,contexts_colorMode/* useColorMode */.G)();const lightModeTheme=prism.theme;const darkModeTheme=prism.darkTheme||lightModeTheme;const prismTheme=colorMode==='dark'?darkModeTheme:lightModeTheme;return prismTheme;}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(7559);
// EXTERNAL MODULE: ./node_modules/parse-numeric-range/index.js
var parse_numeric_range = __webpack_require__(8426);
var parse_numeric_range_default = /*#__PURE__*/__webpack_require__.n(parse_numeric_range);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/codeBlockUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const codeBlockTitleRegex=/title=(?<quote>["'])(?<title>.*?)\1/;const metastringLinesRangeRegex=/\{(?<range>[\d,-]+)\}/;// Supported types of highlight comments
const popularCommentPatterns={js:{start:'\\/\\/',end:''},jsBlock:{start:'\\/\\*',end:'\\*\\/'},jsx:{start:'\\{\\s*\\/\\*',end:'\\*\\/\\s*\\}'},bash:{start:'#',end:''},html:{start:'<!--',end:'-->'}};const commentPatterns={...popularCommentPatterns,// shallow copy is sufficient
// minor comment styles
lua:{start:'--',end:''},wasm:{start:'\\;\\;',end:''},tex:{start:'%',end:''},vb:{start:"['‘’]",end:''},vbnet:{start:"(?:_\\s*)?['‘’]",end:''},// Visual Studio 2019 or later
rem:{start:'[Rr][Ee][Mm]\\b',end:''},f90:{start:'!',end:''},// Free format only
ml:{start:'\\(\\*',end:'\\*\\)'},cobol:{start:'\\*>',end:''}// Free format only
};const popularCommentTypes=Object.keys(popularCommentPatterns);function getCommentPattern(languages,magicCommentDirectives){// To be more reliable, the opening and closing comment must match
const commentPattern=languages.map(lang=>{const{start,end}=commentPatterns[lang];return`(?:${start}\\s*(${magicCommentDirectives.flatMap(d=>[d.line,d.block?.start,d.block?.end].filter(Boolean)).join('|')})\\s*${end})`;}).join('|');// White space is allowed, but otherwise it should be on it's own line
return new RegExp(`^\\s*(?:${commentPattern})\\s*$`);}/**
 * Select comment styles based on language
 */function getAllMagicCommentDirectiveStyles(lang,magicCommentDirectives){switch(lang){case'js':case'javascript':case'ts':case'typescript':return getCommentPattern(['js','jsBlock'],magicCommentDirectives);case'jsx':case'tsx':return getCommentPattern(['js','jsBlock','jsx'],magicCommentDirectives);case'html':return getCommentPattern(['js','jsBlock','html'],magicCommentDirectives);case'python':case'py':case'bash':return getCommentPattern(['bash'],magicCommentDirectives);case'markdown':case'md':// Text uses HTML, front matter uses bash
return getCommentPattern(['html','jsx','bash'],magicCommentDirectives);case'tex':case'latex':case'matlab':return getCommentPattern(['tex'],magicCommentDirectives);case'lua':case'haskell':case'sql':return getCommentPattern(['lua'],magicCommentDirectives);case'wasm':return getCommentPattern(['wasm'],magicCommentDirectives);case'vb':case'vba':case'visual-basic':return getCommentPattern(['vb','rem'],magicCommentDirectives);case'vbnet':return getCommentPattern(['vbnet','rem'],magicCommentDirectives);case'batch':return getCommentPattern(['rem'],magicCommentDirectives);case'basic':// https://github.com/PrismJS/prism/blob/master/components/prism-basic.js#L3
return getCommentPattern(['rem','f90'],magicCommentDirectives);case'fsharp':return getCommentPattern(['js','ml'],magicCommentDirectives);case'ocaml':case'sml':return getCommentPattern(['ml'],magicCommentDirectives);case'fortran':return getCommentPattern(['f90'],magicCommentDirectives);case'cobol':return getCommentPattern(['cobol'],magicCommentDirectives);default:// All popular comment types
return getCommentPattern(popularCommentTypes,magicCommentDirectives);}}function parseCodeBlockTitle(metastring){return metastring?.match(codeBlockTitleRegex)?.groups.title??'';}function containsLineNumbers(metastring){return Boolean(metastring?.includes('showLineNumbers'));}/**
 * Gets the language name from the class name (set by MDX).
 * e.g. `"language-javascript"` => `"javascript"`.
 * Returns undefined if there is no language class name.
 */function parseLanguage(className){const languageClassName=className.split(' ').find(str=>str.startsWith('language-'));return languageClassName?.replace(/language-/,'');}/**
 * Parses the code content, strips away any magic comments, and returns the
 * clean content and the highlighted lines marked by the comments or metastring.
 *
 * If the metastring contains a range, the `content` will be returned as-is
 * without any parsing. The returned `lineClassNames` will be a map from that
 * number range to the first magic comment config entry (which _should_ be for
 * line highlight directives.)
 *
 * @param content The raw code with magic comments. Trailing newline will be
 * trimmed upfront.
 * @param options Options for parsing behavior.
 */function parseLines(content,options){let code=content.replace(/\n$/,'');const{language,magicComments,metastring}=options;// Highlighted lines specified in props: don't parse the content
if(metastring&&metastringLinesRangeRegex.test(metastring)){const linesRange=metastring.match(metastringLinesRangeRegex).groups.range;if(magicComments.length===0){throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${metastring}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);}const metastringRangeClassName=magicComments[0].className;const lines=parse_numeric_range_default()(linesRange).filter(n=>n>0).map(n=>[n-1,[metastringRangeClassName]]);return{lineClassNames:Object.fromEntries(lines),code};}if(language===undefined){return{lineClassNames:{},code};}const directiveRegex=getAllMagicCommentDirectiveStyles(language,magicComments);// Go through line by line
const lines=code.split('\n');const blocks=Object.fromEntries(magicComments.map(d=>[d.className,{start:0,range:''}]));const lineToClassName=Object.fromEntries(magicComments.filter(d=>d.line).map(({className,line})=>[line,className]));const blockStartToClassName=Object.fromEntries(magicComments.filter(d=>d.block).map(({className,block})=>[block.start,className]));const blockEndToClassName=Object.fromEntries(magicComments.filter(d=>d.block).map(({className,block})=>[block.end,className]));for(let lineNumber=0;lineNumber<lines.length;){const line=lines[lineNumber];const match=line.match(directiveRegex);if(!match){// Lines without directives are unchanged
lineNumber+=1;continue;}const directive=match.slice(1).find(item=>item!==undefined);if(lineToClassName[directive]){blocks[lineToClassName[directive]].range+=`${lineNumber},`;}else if(blockStartToClassName[directive]){blocks[blockStartToClassName[directive]].start=lineNumber;}else if(blockEndToClassName[directive]){blocks[blockEndToClassName[directive]].range+=`${blocks[blockEndToClassName[directive]].start}-${lineNumber-1},`;}lines.splice(lineNumber,1);}code=lines.join('\n');const lineClassNames={};Object.entries(blocks).forEach(([className,{range}])=>{parse_numeric_range_default()(range).forEach(l=>{lineClassNames[l]??=[];lineClassNames[l].push(className);});});return{lineClassNames,code};}function getPrismCssVariables(prismTheme){const mapping={color:'--prism-color',backgroundColor:'--prism-background-color'};const properties={};Object.entries(prismTheme.plain).forEach(([key,value])=>{const varName=mapping[key];if(varName&&typeof value==='string'){properties[varName]=value;}});return properties;}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Container/styles.module.css
var styles_module = __webpack_require__(1702);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Container/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function CodeBlockContainer({as:As,...props}){const prismTheme=usePrismTheme();const prismCssVariables=getPrismCssVariables(prismTheme);return/*#__PURE__*/(0,jsx_runtime.jsx)(As// Polymorphic components are hard to type, without `oneOf` generics
,{...props,style:prismCssVariables,className:(0,clsx/* default */.A)(props.className,(styles_module_default()).codeBlockContainer,ThemeClassNames/* ThemeClassNames */.G.common.codeBlock)});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Content/styles.module.css
var Content_styles_module = __webpack_require__(6128);
var Content_styles_module_default = /*#__PURE__*/__webpack_require__.n(Content_styles_module);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Content/Element.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// <pre> tags in markdown map to CodeBlocks. They may contain JSX children. When
// the children is not a simple string, we just return a styled block without
// actually highlighting.
function CodeBlockJSX({children,className}){return/*#__PURE__*/(0,jsx_runtime.jsx)(CodeBlockContainer,{as:"pre",tabIndex:0,className:(0,clsx/* default */.A)((Content_styles_module_default()).codeBlockStandalone,'thin-scrollbar',className),children:/*#__PURE__*/(0,jsx_runtime.jsx)("code",{className:(Content_styles_module_default()).codeBlockLines,children:children})});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/reactUtils.js
var reactUtils = __webpack_require__(9532);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useMutationObserver.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const DefaultOptions={attributes:true,characterData:true,childList:true,subtree:true};function useMutationObserver(target,callback,options=DefaultOptions){const stableCallback=(0,reactUtils/* useEvent */._q)(callback);// MutationObserver options are not nested much
// so this should be to memo options in 99%
// TODO handle options.attributeFilter array
const stableOptions=(0,reactUtils/* useShallowMemoObject */.Be)(options);(0,react.useEffect)(()=>{const observer=new MutationObserver(stableCallback);if(target){observer.observe(target,stableOptions);}return()=>observer.disconnect();},[target,stableCallback,stableOptions]);}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useCodeWordWrap.js
// Callback fires when the "hidden" attribute of a tabpanel changes
// See https://github.com/facebook/docusaurus/pull/7485
function useTabBecameVisibleCallback(codeBlockRef,callback){const[hiddenTabElement,setHiddenTabElement]=(0,react.useState)();const updateHiddenTabElement=(0,react.useCallback)(()=>{// No need to observe non-hidden tabs
// + we want to force a re-render when a tab becomes visible
setHiddenTabElement(codeBlockRef.current?.closest('[role=tabpanel][hidden]'));},[codeBlockRef,setHiddenTabElement]);(0,react.useEffect)(()=>{updateHiddenTabElement();},[updateHiddenTabElement]);useMutationObserver(hiddenTabElement,mutations=>{mutations.forEach(mutation=>{if(mutation.type==='attributes'&&mutation.attributeName==='hidden'){callback();updateHiddenTabElement();}});},{attributes:true,characterData:false,childList:false,subtree:false});}function useCodeWordWrap(){const[isEnabled,setIsEnabled]=(0,react.useState)(false);const[isCodeScrollable,setIsCodeScrollable]=(0,react.useState)(false);const codeBlockRef=(0,react.useRef)(null);const toggle=(0,react.useCallback)(()=>{const codeElement=codeBlockRef.current.querySelector('code');if(isEnabled){codeElement.removeAttribute('style');}else{codeElement.style.whiteSpace='pre-wrap';// When code wrap is enabled, we want to avoid a scrollbar in any case
// Ensure that very very long words/strings/tokens still wrap
codeElement.style.overflowWrap='anywhere';}setIsEnabled(value=>!value);},[codeBlockRef,isEnabled]);const updateCodeIsScrollable=(0,react.useCallback)(()=>{const{scrollWidth,clientWidth}=codeBlockRef.current;const isScrollable=scrollWidth>clientWidth||codeBlockRef.current.querySelector('code').hasAttribute('style');setIsCodeScrollable(isScrollable);},[codeBlockRef]);useTabBecameVisibleCallback(codeBlockRef,updateCodeIsScrollable);(0,react.useEffect)(()=>{updateCodeIsScrollable();},[isEnabled,updateCodeIsScrollable]);(0,react.useEffect)(()=>{window.addEventListener('resize',updateCodeIsScrollable,{passive:true});return()=>{window.removeEventListener('resize',updateCodeIsScrollable);};},[updateCodeIsScrollable]);return{codeBlockRef,isEnabled,isCodeScrollable,toggle};}
// EXTERNAL MODULE: ./node_modules/prism-react-renderer/dist/index.mjs
var dist = __webpack_require__(1765);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Line/styles.module.css
var Line_styles_module = __webpack_require__(3083);
var Line_styles_module_default = /*#__PURE__*/__webpack_require__.n(Line_styles_module);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Line/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function CodeBlockLine({line,classNames,showLineNumbers,getLineProps,getTokenProps}){if(line.length===1&&line[0].content==='\n'){line[0].content='';}const lineProps=getLineProps({line,className:(0,clsx/* default */.A)(classNames,showLineNumbers&&(Line_styles_module_default()).codeLine)});const lineTokens=line.map((token,key)=>/*#__PURE__*/(0,jsx_runtime.jsx)("span",{...getTokenProps({token})},key));return/*#__PURE__*/(0,jsx_runtime.jsxs)("span",{...lineProps,children:[showLineNumbers?/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:(Line_styles_module_default()).codeLineNumber}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:(Line_styles_module_default()).codeLineContent,children:lineTokens})]}):lineTokens,/*#__PURE__*/(0,jsx_runtime.jsx)("br",{})]});}
;// CONCATENATED MODULE: ./node_modules/copy-text-to-clipboard/index.js
function copyTextToClipboard(text, {target = document.body} = {}) {
	if (typeof text !== 'string') {
		throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof text}\`.`);
	}

	const element = document.createElement('textarea');
	const previouslyFocusedElement = document.activeElement;

	element.value = text;

	// Prevent keyboard from showing on mobile
	element.setAttribute('readonly', '');

	element.style.contain = 'strict';
	element.style.position = 'absolute';
	element.style.left = '-9999px';
	element.style.fontSize = '12pt'; // Prevent zooming on iOS

	const selection = document.getSelection();
	const originalRange = selection.rangeCount > 0 && selection.getRangeAt(0);

	target.append(element);
	element.select();

	// Explicit selection workaround for iOS
	element.selectionStart = 0;
	element.selectionEnd = text.length;

	let isSuccess = false;
	try {
		isSuccess = document.execCommand('copy');
	} catch {}

	element.remove();

	if (originalRange) {
		selection.removeAllRanges();
		selection.addRange(originalRange);
	}

	// Get the focus back on the previously focused element, if any
	if (previouslyFocusedElement) {
		previouslyFocusedElement.focus();
	}

	return isSuccess;
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(1312);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Copy/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconCopy(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 24 24",...props,children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Success/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconSuccess(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 24 24",...props,children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/CopyButton/styles.module.css
var CopyButton_styles_module = __webpack_require__(4142);
var CopyButton_styles_module_default = /*#__PURE__*/__webpack_require__.n(CopyButton_styles_module);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/CopyButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function CopyButton({code,className}){const[isCopied,setIsCopied]=(0,react.useState)(false);const copyTimeout=(0,react.useRef)(undefined);const handleCopyCode=(0,react.useCallback)(()=>{copyTextToClipboard(code);setIsCopied(true);copyTimeout.current=window.setTimeout(()=>{setIsCopied(false);},1000);},[code]);(0,react.useEffect)(()=>()=>window.clearTimeout(copyTimeout.current),[]);return/*#__PURE__*/(0,jsx_runtime.jsx)("button",{type:"button","aria-label":isCopied?(0,Translate/* translate */.T)({id:'theme.CodeBlock.copied',message:'Copied',description:'The copied button label on code blocks'}):(0,Translate/* translate */.T)({id:'theme.CodeBlock.copyButtonAriaLabel',message:'Copy code to clipboard',description:'The ARIA label for copy code blocks button'}),title:(0,Translate/* translate */.T)({id:'theme.CodeBlock.copy',message:'Copy',description:'The copy button label on code blocks'}),className:(0,clsx/* default */.A)('clean-btn',className,(CopyButton_styles_module_default()).copyButton,isCopied&&(CopyButton_styles_module_default()).copyButtonCopied),onClick:handleCopyCode,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("span",{className:(CopyButton_styles_module_default()).copyButtonIcons,"aria-hidden":"true",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(IconCopy,{className:(CopyButton_styles_module_default()).copyButtonIcon}),/*#__PURE__*/(0,jsx_runtime.jsx)(IconSuccess,{className:(CopyButton_styles_module_default()).copyButtonSuccessIcon})]})});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/WordWrap/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconWordWrap(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 24 24",...props,children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/WordWrapButton/styles.module.css
var WordWrapButton_styles_module = __webpack_require__(9501);
var WordWrapButton_styles_module_default = /*#__PURE__*/__webpack_require__.n(WordWrapButton_styles_module);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/WordWrapButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function WordWrapButton({className,onClick,isEnabled}){const title=(0,Translate/* translate */.T)({id:'theme.CodeBlock.wordWrapToggle',message:'Toggle word wrap',description:'The title attribute for toggle word wrapping button of code block lines'});return/*#__PURE__*/(0,jsx_runtime.jsx)("button",{type:"button",onClick:onClick,className:(0,clsx/* default */.A)('clean-btn',className,isEnabled&&(WordWrapButton_styles_module_default()).wordWrapButtonEnabled),"aria-label":title,title:title,children:/*#__PURE__*/(0,jsx_runtime.jsx)(IconWordWrap,{className:(WordWrapButton_styles_module_default()).wordWrapButtonIcon,"aria-hidden":"true"})});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Content/String.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Prism languages are always lowercase
// We want to fail-safe and allow both "php" and "PHP"
// See https://github.com/facebook/docusaurus/issues/9012
function normalizeLanguage(language){return language?.toLowerCase();}function CodeBlockString({children,className:blockClassName='',metastring,title:titleProp,showLineNumbers:showLineNumbersProp,language:languageProp}){const{prism:{defaultLanguage,magicComments}}=(0,useThemeConfig/* useThemeConfig */.p)();const language=normalizeLanguage(languageProp??parseLanguage(blockClassName)??defaultLanguage);const prismTheme=usePrismTheme();const wordWrap=useCodeWordWrap();// We still parse the metastring in case we want to support more syntax in the
// future. Note that MDX doesn't strip quotes when parsing metastring:
// "title=\"xyz\"" => title: "\"xyz\""
const title=parseCodeBlockTitle(metastring)||titleProp;const{lineClassNames,code}=parseLines(children,{metastring,language,magicComments});const showLineNumbers=showLineNumbersProp??containsLineNumbers(metastring);return/*#__PURE__*/(0,jsx_runtime.jsxs)(CodeBlockContainer,{as:"div",className:(0,clsx/* default */.A)(blockClassName,language&&!blockClassName.includes(`language-${language}`)&&`language-${language}`),children:[title&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(Content_styles_module_default()).codeBlockTitle,children:title}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(Content_styles_module_default()).codeBlockContent,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Highlight */.f4,{theme:prismTheme,code:code,language:language??'text',children:({className,style,tokens,getLineProps,getTokenProps})=>/*#__PURE__*/(0,jsx_runtime.jsx)("pre",{/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */tabIndex:0,ref:wordWrap.codeBlockRef,className:(0,clsx/* default */.A)(className,(Content_styles_module_default()).codeBlock,'thin-scrollbar'),style:style,children:/*#__PURE__*/(0,jsx_runtime.jsx)("code",{className:(0,clsx/* default */.A)((Content_styles_module_default()).codeBlockLines,showLineNumbers&&(Content_styles_module_default()).codeBlockLinesWithNumbering),children:tokens.map((line,i)=>/*#__PURE__*/(0,jsx_runtime.jsx)(CodeBlockLine,{line:line,getLineProps:getLineProps,getTokenProps:getTokenProps,classNames:lineClassNames[i],showLineNumbers:showLineNumbers},i))})})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(Content_styles_module_default()).buttonGroup,children:[(wordWrap.isEnabled||wordWrap.isCodeScrollable)&&/*#__PURE__*/(0,jsx_runtime.jsx)(WordWrapButton,{className:(Content_styles_module_default()).codeButton,onClick:()=>wordWrap.toggle(),isEnabled:wordWrap.isEnabled}),/*#__PURE__*/(0,jsx_runtime.jsx)(CopyButton,{className:(Content_styles_module_default()).codeButton,code:code})]})]})]});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Best attempt to make the children a plain string so it is copyable. If there
 * are react elements, we will not be able to copy the content, and it will
 * return `children` as-is; otherwise, it concatenates the string children
 * together.
 */function maybeStringifyChildren(children){if(react.Children.toArray(children).some(el=>/*#__PURE__*/(0,react.isValidElement)(el))){return children;}// The children is now guaranteed to be one/more plain strings
return Array.isArray(children)?children.join(''):children;}function CodeBlock({children:rawChildren,...props}){// The Prism theme on SSR is always the default theme but the site theme can
// be in a different mode. React hydration doesn't update DOM styles that come
// from SSR. Hence force a re-render after mounting to apply the current
// relevant styles.
const isBrowser=(0,useIsBrowser/* default */.A)();const children=maybeStringifyChildren(rawChildren);const CodeBlockComp=typeof children==='string'?CodeBlockString:CodeBlockJSX;return/*#__PURE__*/(0,jsx_runtime.jsx)(CodeBlockComp,{...props,children:children},String(isBrowser));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeInline/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Simple component used to render inline code blocks
// its purpose is to be swizzled and customized
// MDX 1 used to have a inlineCode comp, see https://mdxjs.com/migrating/v2/
function CodeInline(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("code",{...props});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Code.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function shouldBeInline(props){return(// empty code blocks have no props.children,
// see https://github.com/facebook/docusaurus/pull/9704
typeof props.children!=='undefined'&&react.Children.toArray(props.children).every(el=>typeof el==='string'&&!el.includes('\n')));}function MDXCode(props){return shouldBeInline(props)?/*#__PURE__*/(0,jsx_runtime.jsx)(CodeInline,{...props}):/*#__PURE__*/(0,jsx_runtime.jsx)(CodeBlock,{...props});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(725);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/A.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MDXA(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{...props});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Pre.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MDXPre(props){// With MDX 2, this element is only used for fenced code blocks
// It always receives a MDXComponents/Code as children
return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:props.children});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBrokenLinks.js
var useBrokenLinks = __webpack_require__(2521);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Collapsible/index.js
var Collapsible = __webpack_require__(1422);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Details/styles.module.css
var Details_styles_module = __webpack_require__(6062);
var Details_styles_module_default = /*#__PURE__*/__webpack_require__.n(Details_styles_module);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Details/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function isInSummary(node){if(!node){return false;}return node.tagName==='SUMMARY'||isInSummary(node.parentElement);}function hasParent(node,parent){if(!node){return false;}return node===parent||hasParent(node.parentElement,parent);}/**
 * A mostly un-styled `<details>` element with smooth collapsing. Provides some
 * very lightweight styles, but you should bring your UI.
 */function Details({summary,children,...props}){(0,useBrokenLinks/* default */.A)().collectAnchor(props.id);const isBrowser=(0,useIsBrowser/* default */.A)();const detailsRef=(0,react.useRef)(null);const{collapsed,setCollapsed}=(0,Collapsible/* useCollapsible */.u)({initialState:!props.open});// Use a separate state for the actual details prop, because it must be set
// only after animation completes, otherwise close animations won't work
const[open,setOpen]=(0,react.useState)(props.open);const summaryElement=/*#__PURE__*/react.isValidElement(summary)?summary:/*#__PURE__*/(0,jsx_runtime.jsx)("summary",{children:summary??'Details'});return/*#__PURE__*/ (// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
(0,jsx_runtime.jsxs)("details",{...props,ref:detailsRef,open:open,"data-collapsed":collapsed,className:(0,clsx/* default */.A)((Details_styles_module_default()).details,isBrowser&&(Details_styles_module_default()).isBrowser,props.className),onMouseDown:e=>{const target=e.target;// Prevent a double-click to highlight summary text
if(isInSummary(target)&&e.detail>1){e.preventDefault();}},onClick:e=>{e.stopPropagation();// For isolation of multiple nested details/summary
const target=e.target;const shouldToggle=isInSummary(target)&&hasParent(target,detailsRef.current);if(!shouldToggle){return;}e.preventDefault();if(collapsed){setCollapsed(false);setOpen(true);}else{setCollapsed(true);// Don't do this, it breaks close animation!
// setOpen(false);
}},children:[summaryElement,/*#__PURE__*/(0,jsx_runtime.jsx)(Collapsible/* Collapsible */.N,{lazy:false// Content might matter for SEO in this case
,collapsed:collapsed,disableSSRStyle:true// Allows component to work fine even with JS disabled!
,onCollapseTransitionEnd:newCollapsed=>{setCollapsed(newCollapsed);setOpen(!newCollapsed);},children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(Details_styles_module_default()).collapsibleContent,children:children})})]}));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Details/styles.module.css
var theme_Details_styles_module = __webpack_require__(3406);
var theme_Details_styles_module_default = /*#__PURE__*/__webpack_require__.n(theme_Details_styles_module);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Details/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Should we have a custom details/summary comp in Infima instead of reusing
// alert classes?
const InfimaClasses='alert alert--info';function Details_Details({...props}){return/*#__PURE__*/(0,jsx_runtime.jsx)(Details,{...props,className:(0,clsx/* default */.A)(InfimaClasses,(theme_Details_styles_module_default()).details,props.className)});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Details.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MDXDetails(props){const items=react.Children.toArray(props.children);// Split summary item from the rest to pass it as a separate prop to the
// Details theme component
const summary=items.find(item=>/*#__PURE__*/react.isValidElement(item)&&item.type==='summary');const children=/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:items.filter(item=>item!==summary)});return/*#__PURE__*/(0,jsx_runtime.jsx)(Details_Details,{...props,summary:summary,children:children});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js
var Heading = __webpack_require__(4608);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Heading.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MDXHeading(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* default */.A,{...props});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Ul/styles.module.css
var Ul_styles_module = __webpack_require__(7691);
var Ul_styles_module_default = /*#__PURE__*/__webpack_require__.n(Ul_styles_module);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Ul/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function transformUlClassName(className){// Fix https://github.com/facebook/docusaurus/issues/9098
if(typeof className==='undefined'){return undefined;}return (0,clsx/* default */.A)(className,// This class is set globally by GitHub/MDX. We keep the global class, and
// add another class to get a task list without the default ul styling
// See https://github.com/syntax-tree/mdast-util-to-hast/issues/28
className?.includes('contains-task-list')&&(Ul_styles_module_default()).containsTaskList);}function MDXUl(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{...props,className:transformUlClassName(props.className)});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Li.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MDXLi(props){// MDX Footnotes have ids such as <li id="user-content-fn-1-953011">
(0,useBrokenLinks/* default */.A)().collectAnchor(props.id);return/*#__PURE__*/(0,jsx_runtime.jsx)("li",{...props});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Img/styles.module.css
var Img_styles_module = __webpack_require__(8081);
var Img_styles_module_default = /*#__PURE__*/__webpack_require__.n(Img_styles_module);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Img/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function transformImgClassName(className){return (0,clsx/* default */.A)(className,(Img_styles_module_default()).img);}function MDXImg(props){return/*#__PURE__*/ (// eslint-disable-next-line jsx-a11y/alt-text
(0,jsx_runtime.jsx)("img",{decoding:"async",loading:"lazy",...props,className:transformImgClassName(props.className)}));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/index.js + 14 modules
var Admonition = __webpack_require__(9364);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Noop.js
var Noop = __webpack_require__(418);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const MDXComponents={Head: Head/* default */.A,details:MDXDetails,// For MD mode support, see https://github.com/facebook/docusaurus/issues/9092#issuecomment-1602902274
Details:MDXDetails,code:MDXCode,a:MDXA,pre:MDXPre,ul:MDXUl,li:MDXLi,img:MDXImg,h1:props=>/*#__PURE__*/(0,jsx_runtime.jsx)(MDXHeading,{as:"h1",...props}),h2:props=>/*#__PURE__*/(0,jsx_runtime.jsx)(MDXHeading,{as:"h2",...props}),h3:props=>/*#__PURE__*/(0,jsx_runtime.jsx)(MDXHeading,{as:"h3",...props}),h4:props=>/*#__PURE__*/(0,jsx_runtime.jsx)(MDXHeading,{as:"h4",...props}),h5:props=>/*#__PURE__*/(0,jsx_runtime.jsx)(MDXHeading,{as:"h5",...props}),h6:props=>/*#__PURE__*/(0,jsx_runtime.jsx)(MDXHeading,{as:"h6",...props}),admonition:Admonition/* default */.A,mermaid:Noop/* default */.A};/* harmony default export */ const theme_MDXComponents = (MDXComponents);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXContent/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MDXContent({children}){return/*#__PURE__*/(0,jsx_runtime.jsx)(lib/* MDXProvider */.x,{components:theme_MDXComponents,children:children});}

/***/ }),

/***/ 4250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MDXPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4164);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1003);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7559);
/* harmony import */ var _theme_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7356);
/* harmony import */ var _theme_MDXContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5034);
/* harmony import */ var _theme_TOC__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32);
/* harmony import */ var _theme_Unlisted__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(996);
/* harmony import */ var _theme_EditMetaRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7547);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1696);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MDXPage(props){const{content:MDXPageContent}=props;const{metadata:{title,editUrl,description,frontMatter,unlisted,lastUpdatedBy,lastUpdatedAt},assets}=MDXPageContent;const{keywords,wrapperClassName,hide_table_of_contents:hideTableOfContents}=frontMatter;const image=assets.image??frontMatter.image;const canDisplayEditMetaRow=!!(editUrl||lastUpdatedAt||lastUpdatedBy);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_8__/* .HtmlClassNameProvider */ .e3,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(wrapperClassName??_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_10__/* .ThemeClassNames */ .G.wrapper.mdxPages,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_10__/* .ThemeClassNames */ .G.page.mdxPage),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_theme_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_8__/* .PageMetadata */ .be,{title:title,description:description,keywords:keywords,image:image}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("main",{className:"container container--fluid margin-vert--lg",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)('row',(_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().mdxPageWrapper)),children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)('col',!hideTableOfContents&&'col--8'),children:[unlisted&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_theme_Unlisted__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,{}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("article",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_theme_MDXContent__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(MDXPageContent,{})})}),canDisplayEditMetaRow&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_theme_EditMetaRow__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)('margin-top--sm',_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_10__/* .ThemeClassNames */ .G.pages.pageFooterEditMetaRow),editUrl:editUrl,lastUpdatedAt:lastUpdatedAt,lastUpdatedBy:lastUpdatedBy})]}),!hideTableOfContents&&MDXPageContent.toc.length>0&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:"col col--2",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_theme_TOC__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{toc:MDXPageContent.toc,minHeadingLevel:frontMatter.toc_min_heading_level,maxHeadingLevel:frontMatter.toc_max_heading_level})})]})})]})});}

/***/ }),

/***/ 3363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ NotFoundContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4164);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1312);
/* harmony import */ var _theme_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4608);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function NotFoundContent({className}){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("main",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)('container margin-vert--xl',className),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"row",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"col col--6 col--offset-3",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_theme_Heading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{as:"h1",className:"hero__title",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})});}

/***/ }),

/***/ 2237:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Index)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1312);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1003);
/* harmony import */ var _theme_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7356);
/* harmony import */ var _theme_NotFound_Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3363);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Index(){const title=(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .T)({id:'theme.NotFound.title',message:'Page Not Found'});return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__/* .PageMetadata */ .be,{title:title}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_theme_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_theme_NotFound_Content__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{})})]});}

/***/ }),

/***/ 1463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ SearchMetadata)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5260);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Note: we bias toward using Algolia metadata on purpose
// Not doing so leads to confusion in the community,
// as it requires to first crawl the site with the Algolia plugin enabled first
// - https://github.com/facebook/docusaurus/issues/6693
// - https://github.com/facebook/docusaurus/issues/4555
function SearchMetadata({locale,version,tag}){// Seems safe to consider here the locale is the language, as the existing
// docsearch:language filter is afaik a regular string-based filter
const language=locale;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{children:[locale&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("meta",{name:"docusaurus_locale",content:locale}),version&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("meta",{name:"docusaurus_version",content:version}),tag&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("meta",{name:"docusaurus_tag",content:tag}),language&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("meta",{name:"docsearch:language",content:language}),version&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("meta",{name:"docsearch:version",content:version}),tag&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("meta",{name:"docsearch:docusaurus_tag",content:tag})]});}

/***/ }),

/***/ 5195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ TOCItems)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(6342);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/tocUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function treeifyTOC(flatTOC){const headings=flatTOC.map(heading=>({...heading,parentIndex:-1,children:[]}));// Keep track of which previous index would be the current heading's direct
// parent. Each entry <i> is the last index of the `headings` array at heading
// level <i>. We will modify these indices as we iterate through all headings.
// e.g. if an ### H3 was last seen at index 2, then prevIndexForLevel[3] === 2
// indices 0 and 1 will remain unused.
const prevIndexForLevel=Array(7).fill(-1);headings.forEach((curr,currIndex)=>{// Take the last seen index for each ancestor level. the highest index will
// be the direct ancestor of the current heading.
const ancestorLevelIndexes=prevIndexForLevel.slice(2,curr.level);curr.parentIndex=Math.max(...ancestorLevelIndexes);// Mark that curr.level was last seen at the current index.
prevIndexForLevel[curr.level]=currIndex;});const rootNodes=[];// For a given parentIndex, add each Node into that parent's `children` array
headings.forEach(heading=>{const{parentIndex,...rest}=heading;if(parentIndex>=0){headings[parentIndex].children.push(rest);}else{rootNodes.push(rest);}});return rootNodes;}/**
 * Takes a flat TOC list (from the MDX loader) and treeifies it into what the
 * TOC components expect. Memoized for performance.
 */function useTreeifiedTOC(toc){return useMemo(()=>treeifyTOC(toc),[toc]);}function filterTOC({toc,minHeadingLevel,maxHeadingLevel}){function isValid(item){return item.level>=minHeadingLevel&&item.level<=maxHeadingLevel;}return toc.flatMap(item=>{const filteredChildren=filterTOC({toc:item.children,minHeadingLevel,maxHeadingLevel});if(isValid(item)){return[{...item,children:filteredChildren}];}return filteredChildren;});}/**
 * Takes a flat TOC list (from the MDX loader) and treeifies it into what the
 * TOC components expect, applying the `minHeadingLevel` and `maxHeadingLevel`.
 * Memoized for performance.
 *
 * **Important**: this is not the same as `useTreeifiedTOC(toc.filter(...))`,
 * because we have to filter the TOC after it has been treeified. This is mostly
 * to ensure that weird TOC structures preserve their semantics. For example, an
 * h3-h2-h4 sequence should not be treeified as an "h3 > h4" hierarchy with
 * min=3, max=4, but should rather be "[h3, h4]" (since the h2 heading has split
 * the two headings and they are not parent-children)
 */function useFilteredAndTreeifiedTOC({toc,minHeadingLevel,maxHeadingLevel}){return (0,react.useMemo)(()=>filterTOC({toc:treeifyTOC(toc),minHeadingLevel,maxHeadingLevel}),[toc,minHeadingLevel,maxHeadingLevel]);}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useTOCHighlight.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// TODO make the hardcoded theme-classic classnames configurable (or add them
// to ThemeClassNames?)
/**
 * If the anchor has no height and is just a "marker" in the DOM; we'll use the
 * parent (normally the link text) rect boundaries instead
 */function getVisibleBoundingClientRect(element){const rect=element.getBoundingClientRect();const hasNoHeight=rect.top===rect.bottom;if(hasNoHeight){return getVisibleBoundingClientRect(element.parentNode);}return rect;}/**
 * Considering we divide viewport into 2 zones of each 50vh, this returns true
 * if an element is in the first zone (i.e., appear in viewport, near the top)
 */function isInViewportTopHalf(boundingRect){return boundingRect.top>0&&boundingRect.bottom<window.innerHeight/2;}function getAnchors({minHeadingLevel,maxHeadingLevel}){const selectors=[];for(let i=minHeadingLevel;i<=maxHeadingLevel;i+=1){selectors.push(`h${i}.anchor`);}return Array.from(document.querySelectorAll(selectors.join()));}function getActiveAnchor(anchors,{anchorTopOffset}){// Naming is hard: The "nextVisibleAnchor" is the first anchor that appear
// under the viewport top boundary. It does not mean this anchor is visible
// yet, but if user continues scrolling down, it will be the first to become
// visible
const nextVisibleAnchor=anchors.find(anchor=>{const boundingRect=getVisibleBoundingClientRect(anchor);return boundingRect.top>=anchorTopOffset;});if(nextVisibleAnchor){const boundingRect=getVisibleBoundingClientRect(nextVisibleAnchor);// If anchor is in the top half of the viewport: it is the one we consider
// "active" (unless it's too close to the top and and soon to be scrolled
// outside viewport)
if(isInViewportTopHalf(boundingRect)){return nextVisibleAnchor;}// If anchor is in the bottom half of the viewport, or under the viewport,
// we consider the active anchor is the previous one. This is because the
// main text appearing in the user screen mostly belong to the previous
// anchor. Returns null for the first anchor, see
// https://github.com/facebook/docusaurus/issues/5318
return anchors[anchors.indexOf(nextVisibleAnchor)-1]??null;}// No anchor under viewport top (i.e. we are at the bottom of the page),
// highlight the last anchor found
return anchors[anchors.length-1]??null;}function getLinkAnchorValue(link){return decodeURIComponent(link.href.substring(link.href.indexOf('#')+1));}function getLinks(linkClassName){return Array.from(document.getElementsByClassName(linkClassName));}function getNavbarHeight(){// Not ideal to obtain actual height this way
// Using TS ! (not ?) because otherwise a bad selector would be un-noticed
return document.querySelector('.navbar').clientHeight;}function useAnchorTopOffsetRef(){const anchorTopOffsetRef=(0,react.useRef)(0);const{navbar:{hideOnScroll}}=(0,useThemeConfig/* useThemeConfig */.p)();(0,react.useEffect)(()=>{anchorTopOffsetRef.current=hideOnScroll?0:getNavbarHeight();},[hideOnScroll]);return anchorTopOffsetRef;}/**
 * Side-effect that applies the active class name to the TOC heading that the
 * user is currently viewing. Disabled when `config` is undefined.
 */function useTOCHighlight(config){const lastActiveLinkRef=(0,react.useRef)(undefined);const anchorTopOffsetRef=useAnchorTopOffsetRef();(0,react.useEffect)(()=>{if(!config){// No-op, highlighting is disabled
return()=>{};}const{linkClassName,linkActiveClassName,minHeadingLevel,maxHeadingLevel}=config;function updateLinkActiveClass(link,active){if(active){if(lastActiveLinkRef.current&&lastActiveLinkRef.current!==link){lastActiveLinkRef.current.classList.remove(linkActiveClassName);}link.classList.add(linkActiveClassName);lastActiveLinkRef.current=link;// link.scrollIntoView({block: 'nearest'});
}else{link.classList.remove(linkActiveClassName);}}function updateActiveLink(){const links=getLinks(linkClassName);const anchors=getAnchors({minHeadingLevel,maxHeadingLevel});const activeAnchor=getActiveAnchor(anchors,{anchorTopOffset:anchorTopOffsetRef.current});const activeLink=links.find(link=>activeAnchor&&activeAnchor.id===getLinkAnchorValue(link));links.forEach(link=>{updateLinkActiveClass(link,link===activeLink);});}document.addEventListener('scroll',updateActiveLink);document.addEventListener('resize',updateActiveLink);updateActiveLink();return()=>{document.removeEventListener('scroll',updateActiveLink);document.removeEventListener('resize',updateActiveLink);};},[config,anchorTopOffsetRef]);}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(725);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCItems/Tree.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Recursive component rendering the toc tree
function TOCItemTree({toc,className,linkClassName,isChild}){if(!toc.length){return null;}return/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{className:isChild?undefined:className,children:toc.map(heading=>/*#__PURE__*/(0,jsx_runtime.jsxs)("li",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{to:`#${heading.id}`,className:linkClassName??undefined// Developer provided the HTML, so assume it's safe.
,dangerouslySetInnerHTML:{__html:heading.value}}),/*#__PURE__*/(0,jsx_runtime.jsx)(TOCItemTree,{isChild:true,toc:heading.children,className:className,linkClassName:linkClassName})]},heading.id))});}// Memo only the tree root is enough
/* harmony default export */ const Tree = (/*#__PURE__*/react.memo(TOCItemTree));
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCItems/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TOCItems({toc,className='table-of-contents table-of-contents__left-border',linkClassName='table-of-contents__link',linkActiveClassName=undefined,minHeadingLevel:minHeadingLevelOption,maxHeadingLevel:maxHeadingLevelOption,...props}){const themeConfig=(0,useThemeConfig/* useThemeConfig */.p)();const minHeadingLevel=minHeadingLevelOption??themeConfig.tableOfContents.minHeadingLevel;const maxHeadingLevel=maxHeadingLevelOption??themeConfig.tableOfContents.maxHeadingLevel;const tocTree=useFilteredAndTreeifiedTOC({toc,minHeadingLevel,maxHeadingLevel});const tocHighlightConfig=(0,react.useMemo)(()=>{if(linkClassName&&linkActiveClassName){return{linkClassName,linkActiveClassName,minHeadingLevel,maxHeadingLevel};}return undefined;},[linkClassName,linkActiveClassName,minHeadingLevel,maxHeadingLevel]);useTOCHighlight(tocHighlightConfig);return/*#__PURE__*/(0,jsx_runtime.jsx)(Tree,{toc:tocTree,className:className,linkClassName:linkClassName,...props});}

/***/ }),

/***/ 32:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ TOC)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4164);
/* harmony import */ var _theme_TOCItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5195);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5490);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Using a custom className
// This prevents TOCInline/TOCCollapsible getting highlighted by mistake
const LINK_CLASS_NAME='table-of-contents__link toc-highlight';const LINK_ACTIVE_CLASS_NAME='table-of-contents__link--active';function TOC({className,...props}){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)((_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().tableOfContents),'thin-scrollbar',className),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_theme_TOCItems__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{...props,linkClassName:LINK_CLASS_NAME,linkActiveClassName:LINK_ACTIVE_CLASS_NAME})});}

/***/ }),

/***/ 2903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ThemedImage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(4164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(2303);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/colorMode.js
var contexts_colorMode = __webpack_require__(5293);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/components/ThemedComponent/styles.module.css
var styles_module = __webpack_require__(6878);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/components/ThemedComponent/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const AllThemes=(/* unused pure expression or super */ null && (['light','dark']));/**
 * Generic component to render anything themed in light/dark
 * Note: it's preferable to use CSS for theming because this component
 * will need to render all the variants during SSR to avoid a theme flash.
 *
 * Use this only when CSS customizations are not convenient or impossible.
 * For example, rendering themed images or SVGs...
 *
 * @param className applied to all the variants
 * @param children function to render a theme variant
 * @constructor
 */function ThemedComponent({className,children}){const isBrowser=(0,useIsBrowser/* default */.A)();const{colorMode}=(0,contexts_colorMode/* useColorMode */.G)();function getThemesToRender(){if(isBrowser){return colorMode==='dark'?['dark']:['light'];}// We need to render both components on the server / hydration to avoid:
// - a flash of wrong theme before hydration
// - React hydration mismatches
// See https://github.com/facebook/docusaurus/pull/3730
return['light','dark'];}return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:getThemesToRender().map(theme=>{const themedElement=children({theme,className:(0,clsx/* default */.A)(className,(styles_module_default()).themedComponent,(styles_module_default())[`themedComponent--${theme}`])});return/*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment,{children:themedElement},theme);})});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/ThemedImage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function ThemedImage(props){const{sources,className:parentClassName,alt,...propsRest}=props;return/*#__PURE__*/(0,jsx_runtime.jsx)(ThemedComponent,{className:parentClassName,children:({theme,className})=>/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:sources[theme],alt:alt,className:className,...propsRest})});}

/***/ }),

/***/ 996:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Unlisted)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(4164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(1312);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(5260);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/unlistedUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function UnlistedBannerTitle(){return/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"});}function UnlistedBannerMessage(){return/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."});}function UnlistedMetadata(){return/*#__PURE__*/(0,jsx_runtime.jsx)(Head/* default */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{name:"robots",content:"noindex, nofollow"})});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(7559);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/index.js + 14 modules
var Admonition = __webpack_require__(9364);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Unlisted/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function UnlistedBanner({className}){return/*#__PURE__*/(0,jsx_runtime.jsx)(Admonition/* default */.A,{type:"caution",title:/*#__PURE__*/(0,jsx_runtime.jsx)(UnlistedBannerTitle,{}),className:(0,clsx/* default */.A)(className,ThemeClassNames/* ThemeClassNames */.G.common.unlistedBanner),children:/*#__PURE__*/(0,jsx_runtime.jsx)(UnlistedBannerMessage,{})});}function Unlisted(props){return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(UnlistedMetadata,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(UnlistedBanner,{...props})]});}

/***/ }),

/***/ 1422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ Collapsible),
/* harmony export */   u: () => (/* binding */ useCollapsible)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8193);
/* harmony import */ var _docusaurus_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(205);
/* harmony import */ var _utils_accessibilityUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3109);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const DefaultAnimationEasing='ease-in-out';/**
 * This hook is a very thin wrapper around a `useState`.
 */function useCollapsible({initialState}){const[collapsed,setCollapsed]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState??false);const toggleCollapsed=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{setCollapsed(expanded=>!expanded);},[]);return{collapsed,setCollapsed,toggleCollapsed};}const CollapsedStyles={display:'none',overflow:'hidden',height:'0px'};const ExpandedStyles={display:'block',overflow:'visible',height:'auto'};function applyCollapsedStyle(el,collapsed){const collapsedStyles=collapsed?CollapsedStyles:ExpandedStyles;el.style.display=collapsedStyles.display;el.style.overflow=collapsedStyles.overflow;el.style.height=collapsedStyles.height;}/*
Lex111: Dynamic transition duration is used in Material design, this technique
is good for a large number of items.
https://material.io/archive/guidelines/motion/duration-easing.html#duration-easing-dynamic-durations
https://github.com/mui-org/material-ui/blob/e724d98eba018e55e1a684236a2037e24bcf050c/packages/material-ui/src/styles/createTransitions.js#L40-L43
 */function getAutoHeightDuration(height){if((0,_utils_accessibilityUtils__WEBPACK_IMPORTED_MODULE_4__/* .prefersReducedMotion */ .O)()){// Not using 0 because it prevents onTransitionEnd to fire and bubble up :/
// See https://github.com/facebook/docusaurus/pull/8906
return 1;}const constant=height/36;return Math.round((4+15*constant**0.25+constant/5)*10);}function useCollapseAnimation({collapsibleRef,collapsed,animation}){const mounted=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{const el=collapsibleRef.current;function getTransitionStyles(){const height=el.scrollHeight;const duration=animation?.duration??getAutoHeightDuration(height);const easing=animation?.easing??DefaultAnimationEasing;return{transition:`height ${duration}ms ${easing}`,height:`${height}px`};}function applyTransitionStyles(){const transitionStyles=getTransitionStyles();el.style.transition=transitionStyles.transition;el.style.height=transitionStyles.height;}// On mount, we just apply styles, no animated transition
if(!mounted.current){applyCollapsedStyle(el,collapsed);mounted.current=true;return undefined;}el.style.willChange='height';function startAnimation(){const animationFrame=requestAnimationFrame(()=>{// When collapsing
if(collapsed){applyTransitionStyles();requestAnimationFrame(()=>{el.style.height=CollapsedStyles.height;el.style.overflow=CollapsedStyles.overflow;});}// When expanding
else{el.style.display='block';requestAnimationFrame(()=>{applyTransitionStyles();});}});return()=>cancelAnimationFrame(animationFrame);}return startAnimation();},[collapsibleRef,collapsed,animation]);}/**
 * Prevent hydration layout shift before animations are handled imperatively
 * with JS
 */function getSSRStyle(collapsed){if(_docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.canUseDOM){return undefined;}return collapsed?CollapsedStyles:ExpandedStyles;}function CollapsibleBase({as:As='div',collapsed,children,animation,onCollapseTransitionEnd,className,disableSSRStyle}){const collapsibleRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);useCollapseAnimation({collapsibleRef,collapsed,animation});return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(As// @ts-expect-error: the "too complicated type" is produced from
// "CollapsibleElementType" being a huge union
,{ref:collapsibleRef// Refs are contravariant, which is not expressible in TS
,style:disableSSRStyle?undefined:getSSRStyle(collapsed),onTransitionEnd:e=>{if(e.propertyName!=='height'){return;}applyCollapsedStyle(collapsibleRef.current,collapsed);onCollapseTransitionEnd?.(collapsed);},className:className,children:children});}function CollapsibleLazy({collapsed,...props}){const[mounted,setMounted]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!collapsed);// Updated in effect so that first expansion transition can work
const[lazyCollapsed,setLazyCollapsed]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(collapsed);(0,_docusaurus_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(()=>{if(!collapsed){setMounted(true);}},[collapsed]);(0,_docusaurus_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(()=>{if(mounted){setLazyCollapsed(collapsed);}},[mounted,collapsed]);return mounted?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(CollapsibleBase,{...props,collapsed:lazyCollapsed}):null;}/**
 * A headless component providing smooth and uniform collapsing behavior. The
 * component will be invisible (zero height) when collapsed. Doesn't provide
 * interactivity by itself: collapse state is toggled through props.
 */function Collapsible({lazy,...props}){const Comp=lazy?CollapsibleLazy:CollapsibleBase;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Comp,{...props});}

/***/ }),

/***/ 5041:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mj: () => (/* binding */ useAnnouncementBar),
/* harmony export */   oq: () => (/* binding */ AnnouncementBarProvider)
/* harmony export */ });
/* unused harmony export AnnouncementBarDismissStorageKey */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2303);
/* harmony import */ var _utils_storageUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9466);
/* harmony import */ var _utils_reactUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9532);
/* harmony import */ var _utils_useThemeConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6342);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const AnnouncementBarDismissStorageKey='docusaurus.announcement.dismiss';const AnnouncementBarIdStorageKey='docusaurus.announcement.id';const AnnouncementBarDismissStorage=(0,_utils_storageUtils__WEBPACK_IMPORTED_MODULE_3__/* .createStorageSlot */ .Wf)(AnnouncementBarDismissStorageKey);const IdStorage=(0,_utils_storageUtils__WEBPACK_IMPORTED_MODULE_3__/* .createStorageSlot */ .Wf)(AnnouncementBarIdStorageKey);const isDismissedInStorage=()=>AnnouncementBarDismissStorage.get()==='true';const setDismissedInStorage=bool=>AnnouncementBarDismissStorage.set(String(bool));const Context=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);function useContextValue(){const{announcementBar}=(0,_utils_useThemeConfig__WEBPACK_IMPORTED_MODULE_4__/* .useThemeConfig */ .p)();const isBrowser=(0,_docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)();const[isClosed,setClosed]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>isBrowser?// On client navigation: init with local storage value
isDismissedInStorage():// On server/hydration: always visible to prevent layout shifts (will be hidden with css if needed)
false);// Update state after hydration
(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{setClosed(isDismissedInStorage());},[]);const handleClose=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{setDismissedInStorage(true);setClosed(true);},[]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(!announcementBar){return;}const{id}=announcementBar;let viewedId=IdStorage.get();// Retrocompatibility due to spelling mistake of default id
// see https://github.com/facebook/docusaurus/issues/3338
// cSpell:ignore annoucement
if(viewedId==='annoucement-bar'){viewedId='announcement-bar';}const isNewAnnouncement=id!==viewedId;IdStorage.set(id);if(isNewAnnouncement){setDismissedInStorage(false);}if(isNewAnnouncement||!isDismissedInStorage()){setClosed(false);}},[announcementBar]);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({isActive:!!announcementBar&&!isClosed,close:handleClose}),[announcementBar,isClosed,handleClose]);}function AnnouncementBarProvider({children}){const value=useContextValue();return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Context.Provider,{value:value,children:children});}function useAnnouncementBar(){const api=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);if(!api){throw new _utils_reactUtils__WEBPACK_IMPORTED_MODULE_5__/* .ReactContextError */ .dV('AnnouncementBarProvider');}return api;}

/***/ }),

/***/ 5293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ useColorMode),
/* harmony export */   a: () => (/* binding */ ColorModeProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8193);
/* harmony import */ var _utils_reactUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9532);
/* harmony import */ var _utils_storageUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9466);
/* harmony import */ var _utils_useThemeConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6342);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const Context=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);const ColorModeStorageKey='theme';const ColorModeStorage=(0,_utils_storageUtils__WEBPACK_IMPORTED_MODULE_3__/* .createStorageSlot */ .Wf)(ColorModeStorageKey);const ColorModes={light:'light',dark:'dark'};// Ensure to always return a valid colorMode even if input is invalid
const coerceToColorMode=colorMode=>colorMode===ColorModes.dark?ColorModes.dark:ColorModes.light;const getInitialColorMode=defaultMode=>_docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.canUseDOM?coerceToColorMode(document.documentElement.getAttribute('data-theme')):coerceToColorMode(defaultMode);const storeColorMode=newColorMode=>{ColorModeStorage.set(coerceToColorMode(newColorMode));};function useContextValue(){const{colorMode:{defaultMode,disableSwitch,respectPrefersColorScheme}}=(0,_utils_useThemeConfig__WEBPACK_IMPORTED_MODULE_4__/* .useThemeConfig */ .p)();const[colorMode,setColorModeState]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getInitialColorMode(defaultMode));(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{// A site is deployed without disableSwitch
// => User visits the site and has a persisted value
// => Site later enabled disableSwitch
// => Clear the previously stored value to apply the site's setting
if(disableSwitch){ColorModeStorage.del();}},[disableSwitch]);const setColorMode=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((newColorMode,options={})=>{const{persist=true}=options;if(newColorMode){setColorModeState(newColorMode);if(persist){storeColorMode(newColorMode);}}else{if(respectPrefersColorScheme){setColorModeState(window.matchMedia('(prefers-color-scheme: dark)').matches?ColorModes.dark:ColorModes.light);}else{setColorModeState(defaultMode);}ColorModeStorage.del();}},[respectPrefersColorScheme,defaultMode]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{document.documentElement.setAttribute('data-theme',coerceToColorMode(colorMode));},[colorMode]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(disableSwitch){return undefined;}const onChange=e=>{if(e.key!==ColorModeStorageKey){return;}const storedColorMode=ColorModeStorage.get();if(storedColorMode!==null){setColorMode(coerceToColorMode(storedColorMode));}};window.addEventListener('storage',onChange);return()=>window.removeEventListener('storage',onChange);},[disableSwitch,setColorMode]);// PCS is coerced to light mode when printing, which causes the color mode to
// be reset to dark when exiting print mode, disregarding user settings. When
// the listener fires only because of a print/screen switch, we don't change
// color mode. See https://github.com/facebook/docusaurus/pull/6490
const previousMediaIsPrint=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(disableSwitch&&!respectPrefersColorScheme){return undefined;}const mql=window.matchMedia('(prefers-color-scheme: dark)');const onChange=()=>{if(window.matchMedia('print').matches||previousMediaIsPrint.current){previousMediaIsPrint.current=window.matchMedia('print').matches;return;}setColorMode(null);};mql.addListener(onChange);return()=>mql.removeListener(onChange);},[setColorMode,disableSwitch,respectPrefersColorScheme]);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({colorMode,setColorMode,get isDarkTheme(){if(false){}return colorMode===ColorModes.dark;},setLightTheme(){if(false){}setColorMode(ColorModes.light);},setDarkTheme(){if(false){}setColorMode(ColorModes.dark);}}),[colorMode,setColorMode]);}function ColorModeProvider({children}){const value=useContextValue();return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Context.Provider,{value:value,children:children});}function useColorMode(){const context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);if(context==null){throw new _utils_reactUtils__WEBPACK_IMPORTED_MODULE_5__/* .ReactContextError */ .dV('ColorModeProvider','Please see https://docusaurus.io/docs/api/themes/configuration#use-color-mode.');}return context;}

/***/ }),

/***/ 5597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VQ: () => (/* binding */ DocsPreferredVersionContextProvider),
/* harmony export */   g1: () => (/* binding */ useDocsPreferredVersion)
/* harmony export */ });
/* unused harmony export useDocsPreferredVersionByPluginId */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4070);
/* harmony import */ var _docusaurus_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7065);
/* harmony import */ var _utils_useThemeConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6342);
/* harmony import */ var _utils_docsUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1754);
/* harmony import */ var _utils_reactUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9532);
/* harmony import */ var _utils_storageUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9466);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const storageKey=pluginId=>`docs-preferred-version-${pluginId}`;const DocsPreferredVersionStorage={save:(pluginId,persistence,versionName)=>{(0,_utils_storageUtils__WEBPACK_IMPORTED_MODULE_2__/* .createStorageSlot */ .Wf)(storageKey(pluginId),{persistence}).set(versionName);},read:(pluginId,persistence)=>(0,_utils_storageUtils__WEBPACK_IMPORTED_MODULE_2__/* .createStorageSlot */ .Wf)(storageKey(pluginId),{persistence}).get(),clear:(pluginId,persistence)=>{(0,_utils_storageUtils__WEBPACK_IMPORTED_MODULE_2__/* .createStorageSlot */ .Wf)(storageKey(pluginId),{persistence}).del();}};/**
 * Initial state is always null as we can't read local storage from node SSR
 */const getInitialState=pluginIds=>Object.fromEntries(pluginIds.map(id=>[id,{preferredVersionName:null}]));/**
 * Read storage for all docs plugins, assigning each doc plugin a preferred
 * version (if found)
 */function readStorageState({pluginIds,versionPersistence,allDocsData}){/**
     * The storage value we read might be stale, and belong to a version that does
     * not exist in the site anymore. In such case, we remove the storage value to
     * avoid downstream errors.
     */function restorePluginState(pluginId){const preferredVersionNameUnsafe=DocsPreferredVersionStorage.read(pluginId,versionPersistence);const pluginData=allDocsData[pluginId];const versionExists=pluginData.versions.some(version=>version.name===preferredVersionNameUnsafe);if(versionExists){return{preferredVersionName:preferredVersionNameUnsafe};}DocsPreferredVersionStorage.clear(pluginId,versionPersistence);return{preferredVersionName:null};}return Object.fromEntries(pluginIds.map(id=>[id,restorePluginState(id)]));}function useVersionPersistence(){return (0,_utils_useThemeConfig__WEBPACK_IMPORTED_MODULE_3__/* .useThemeConfig */ .p)().docs.versionPersistence;}const Context=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);function useContextValue(){const allDocsData=(0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_4__/* .useAllDocsData */ .Gy)();const versionPersistence=useVersionPersistence();const pluginIds=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>Object.keys(allDocsData),[allDocsData]);// Initial state is empty, as we can't read browser storage in node/SSR
const[state,setState]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>getInitialState(pluginIds));// On mount, we set the state read from browser storage
(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{setState(readStorageState({allDocsData,versionPersistence,pluginIds}));},[allDocsData,versionPersistence,pluginIds]);// The API that we expose to consumer hooks (memo for constant object)
const api=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{function savePreferredVersion(pluginId,versionName){DocsPreferredVersionStorage.save(pluginId,versionPersistence,versionName);setState(s=>({...s,[pluginId]:{preferredVersionName:versionName}}));}return{savePreferredVersion};},[versionPersistence]);return[state,api];}function DocsPreferredVersionContextProviderUnsafe({children}){const value=useContextValue();return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Context.Provider,{value:value,children:children});}/**
 * This is a maybe-layer. If the docs plugin is not enabled, this provider is a
 * simple pass-through.
 */function DocsPreferredVersionContextProvider({children}){if(_utils_docsUtils__WEBPACK_IMPORTED_MODULE_5__/* .isDocsPluginEnabled */ .C5){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DocsPreferredVersionContextProviderUnsafe,{children:children});}return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:children});}function useDocsPreferredVersionContext(){const value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);if(!value){throw new _utils_reactUtils__WEBPACK_IMPORTED_MODULE_6__/* .ReactContextError */ .dV('DocsPreferredVersionContextProvider');}return value;}/**
 * Returns a read-write interface to a plugin's preferred version. The
 * "preferred version" is defined as the last version that the user visited.
 * For example, if a user is using v3, even when v4 is later published, the user
 * would still be browsing v3 docs when she opens the website next time. Note,
 * the `preferredVersion` attribute will always be `null` before mount.
 */function useDocsPreferredVersion(pluginId=_docusaurus_constants__WEBPACK_IMPORTED_MODULE_7__/* .DEFAULT_PLUGIN_ID */ .W){const docsData=(0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_4__/* .useDocsData */ .ht)(pluginId);const[state,api]=useDocsPreferredVersionContext();const{preferredVersionName}=state[pluginId];const preferredVersion=docsData.versions.find(version=>version.name===preferredVersionName)??null;const savePreferredVersionName=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(versionName=>{api.savePreferredVersion(pluginId,versionName);},[api,pluginId]);return{preferredVersion,savePreferredVersionName};}function useDocsPreferredVersionByPluginId(){const allDocsData=useAllDocsData();const[state]=useDocsPreferredVersionContext();function getPluginIdPreferredVersion(pluginId){const docsData=allDocsData[pluginId];const{preferredVersionName}=state[pluginId];return docsData.versions.find(version=>version.name===preferredVersionName)??null;}const pluginIds=Object.keys(allDocsData);return Object.fromEntries(pluginIds.map(id=>[id,getPluginIdPreferredVersion(id)]));}

/***/ }),

/***/ 6588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ DocsSidebarProvider),
/* harmony export */   t: () => (/* binding */ useDocsSidebar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _utils_reactUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9532);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Using a Symbol because null is a valid context value (a doc with no sidebar)
// Inspired by https://github.com/jamiebuilds/unstated-next/blob/master/src/unstated-next.tsx
const EmptyContext=Symbol('EmptyContext');const Context=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(EmptyContext);/**
 * Provide the current sidebar to your children.
 */function DocsSidebarProvider({children,name,items}){const stableValue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>name&&items?{name,items}:null,[name,items]);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Context.Provider,{value:stableValue,children:children});}/**
 * Gets the sidebar that's currently displayed, or `null` if there isn't one
 */function useDocsSidebar(){const value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);if(value===EmptyContext){throw new _utils_reactUtils__WEBPACK_IMPORTED_MODULE_2__/* .ReactContextError */ .dV('DocsSidebarProvider');}return value;}

/***/ }),

/***/ 2252:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ DocsVersionProvider),
/* harmony export */   r: () => (/* binding */ useDocsVersion)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _utils_reactUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9532);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const Context=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);/**
 * Provide the current version's metadata to your children.
 */function DocsVersionProvider({children,version}){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Context.Provider,{value:version,children:children});}/**
 * Gets the version metadata of the current doc page.
 */function useDocsVersion(){const version=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);if(version===null){throw new _utils_reactUtils__WEBPACK_IMPORTED_MODULE_2__/* .ReactContextError */ .dV('DocsVersionProvider');}return version;}

/***/ }),

/***/ 9876:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  e: () => (/* binding */ NavbarMobileSidebarProvider),
  M: () => (/* binding */ useNavbarMobileSidebar)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/navbarSecondaryMenu/content.js
var content = __webpack_require__(5600);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useWindowSize.js
var useWindowSize = __webpack_require__(4581);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(6347);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/reactUtils.js
var reactUtils = __webpack_require__(9532);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/historyUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Permits to register a handler that will be called on history actions (pop,
 * push, replace). If the handler returns `false`, the navigation transition
 * will be blocked/cancelled.
 */function useHistoryActionHandler(handler){const history=(0,react_router/* useHistory */.W6)();const stableHandler=(0,reactUtils/* useEvent */._q)(handler);(0,react.useEffect)(// See https://github.com/remix-run/history/blob/main/docs/blocking-transitions.md
()=>history.block((location,action)=>stableHandler(location,action)),[history,stableHandler]);}/**
 * Permits to register a handler that will be called on history pop navigation
 * (backward/forward). If the handler returns `false`, the backward/forward
 * transition will be blocked. Unfortunately there's no good way to detect the
 * "direction" (backward/forward) of the POP event.
 */function useHistoryPopHandler(handler){useHistoryActionHandler((location,action)=>{if(action==='POP'){// Maybe block navigation if handler returns false
return handler(location,action);}// Don't block other navigation actions
return undefined;});}/**
 * Permits to efficiently subscribe to a slice of the history
 * See https://thisweekinreact.com/articles/useSyncExternalStore-the-underrated-react-api
 * @param selector
 */function useHistorySelector(selector){const history=useHistory();return useSyncExternalStore(history.listen,()=>selector(history),()=>selector(history));}/**
 * Permits to efficiently subscribe to a specific querystring value
 * @param key
 */function useQueryStringValue(key){return useHistorySelector(history=>{if(key===null){return null;}return new URLSearchParams(history.location.search).get(key);});}function useQueryStringUpdater(key){const history=useHistory();return useCallback((newValue,options)=>{const searchParams=new URLSearchParams(history.location.search);if(newValue){searchParams.set(key,newValue);}else{searchParams.delete(key);}const updateHistory=options?.push?history.push:history.replace;updateHistory({search:searchParams.toString()});},[key,history]);}function useQueryString(key){const value=useQueryStringValue(key)??'';const update=useQueryStringUpdater(key);return[value,update];}function useQueryStringListValues(key){// Unfortunately we can't just use searchParams.getAll(key) in the selector
// It would create a new array every time and lead to an infinite loop...
// The selector has to return a primitive/string value to avoid that...
const arrayJsonString=useHistorySelector(history=>{const values=new URLSearchParams(history.location.search).getAll(key);return JSON.stringify(values);});return useMemo(()=>JSON.parse(arrayJsonString),[arrayJsonString]);}function useQueryStringListUpdater(key){const history=useHistory();const setValues=useCallback((update,options)=>{const searchParams=new URLSearchParams(history.location.search);const newValues=Array.isArray(update)?update:update(searchParams.getAll(key));searchParams.delete(key);newValues.forEach(v=>searchParams.append(key,v));const updateHistory=options?.push?history.push:history.replace;updateHistory({search:searchParams.toString()});},[history,key]);return setValues;}function useQueryStringList(key){const values=useQueryStringListValues(key);const setValues=useQueryStringListUpdater(key);return[values,setValues];}function useClearQueryString(){const history=useHistory();return useCallback(()=>{history.replace({search:undefined});},[history]);}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(6342);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/navbarMobileSidebar.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const Context=/*#__PURE__*/react.createContext(undefined);function useIsNavbarMobileSidebarDisabled(){const secondaryMenuContent=(0,content/* useNavbarSecondaryMenuContent */.YL)();const{items}=(0,useThemeConfig/* useThemeConfig */.p)().navbar;return items.length===0&&!secondaryMenuContent.component;}function useContextValue(){const disabled=useIsNavbarMobileSidebarDisabled();const windowSize=(0,useWindowSize/* useWindowSize */.l)();const shouldRender=!disabled&&windowSize==='mobile';const[shown,setShown]=(0,react.useState)(false);// Close mobile sidebar on navigation pop
// Most likely firing when using the Android back button (but not only)
useHistoryPopHandler(()=>{if(shown){setShown(false);// Prevent pop navigation; seems desirable enough
// See https://github.com/facebook/docusaurus/pull/5462#issuecomment-911699846
return false;}return undefined;});const toggle=(0,react.useCallback)(()=>{setShown(s=>!s);},[]);(0,react.useEffect)(()=>{if(windowSize==='desktop'){setShown(false);}},[windowSize]);return (0,react.useMemo)(()=>({disabled,shouldRender,toggle,shown}),[disabled,shouldRender,toggle,shown]);}function NavbarMobileSidebarProvider({children}){const value=useContextValue();return/*#__PURE__*/(0,jsx_runtime.jsx)(Context.Provider,{value:value,children:children});}function useNavbarMobileSidebar(){const context=react.useContext(Context);if(context===undefined){throw new reactUtils/* ReactContextError */.dV('NavbarMobileSidebarProvider');}return context;}

/***/ }),

/***/ 5600:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GX: () => (/* binding */ NavbarSecondaryMenuFiller),
/* harmony export */   YL: () => (/* binding */ useNavbarSecondaryMenuContent),
/* harmony export */   y_: () => (/* binding */ NavbarSecondaryMenuContentProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _utils_reactUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9532);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const Context=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);/** @internal */function NavbarSecondaryMenuContentProvider({children}){const value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({component:null,props:null});return/*#__PURE__*/ (// @ts-expect-error: this context is hard to type
(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Context.Provider,{value:value,children:children}));}/** @internal */function useNavbarSecondaryMenuContent(){const value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);if(!value){throw new _utils_reactUtils__WEBPACK_IMPORTED_MODULE_2__/* .ReactContextError */ .dV('NavbarSecondaryMenuContentProvider');}return value[0];}/**
 * This component renders nothing by itself, but it fills the placeholder in the
 * generic secondary menu layout. This reduces coupling between the main layout
 * and the specific page.
 *
 * This kind of feature is often called portal/teleport/gateway/outlet...
 * Various unmaintained React libs exist. Most up-to-date one:
 * https://github.com/gregberge/react-teleporter
 * Not sure any of those is safe regarding concurrent mode.
 */function NavbarSecondaryMenuFiller({component,props}){const context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);if(!context){throw new _utils_reactUtils__WEBPACK_IMPORTED_MODULE_2__/* .ReactContextError */ .dV('NavbarSecondaryMenuContentProvider');}const[,setContent]=context;// To avoid useless context re-renders, props are memoized shallowly
const memoizedProps=(0,_utils_reactUtils__WEBPACK_IMPORTED_MODULE_2__/* .useShallowMemoObject */ .Be)(props);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{// @ts-expect-error: this context is hard to type
setContent({component,props:memoizedProps});},[setContent,component,memoizedProps]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>()=>setContent({component:null,props:null}),[setContent]);return null;}

/***/ }),

/***/ 1386:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  w: () => (/* binding */ keyboardFocusedClassName),
  J: () => (/* binding */ useKeyboardNavigation)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/styles.css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useKeyboardNavigation.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const keyboardFocusedClassName='navigation-with-keyboard';/**
 * Side-effect that adds the `keyboardFocusedClassName` to the body element when
 * the keyboard has been pressed, or removes it when the mouse is clicked.
 *
 * The presence of this class name signals that the user may be using keyboard
 * for navigation, and the theme **must** add focus outline when this class name
 * is present. (And optionally not if it's absent, for design purposes)
 *
 * Inspired by https://hackernoon.com/removing-that-ugly-focus-ring-and-keeping-it-too-6c8727fefcd2
 */function useKeyboardNavigation(){(0,react.useEffect)(()=>{function handleOutlineStyles(e){if(e.type==='keydown'&&e.key==='Tab'){document.body.classList.add(keyboardFocusedClassName);}if(e.type==='mousedown'){document.body.classList.remove(keyboardFocusedClassName);}}document.addEventListener('keydown',handleOutlineStyles);document.addEventListener('mousedown',handleOutlineStyles);return()=>{document.body.classList.remove(keyboardFocusedClassName);document.removeEventListener('keydown',handleOutlineStyles);document.removeEventListener('mousedown',handleOutlineStyles);};},[]);}

/***/ }),

/***/ 4581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ useWindowSize)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8193);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const windowSizes={desktop:'desktop',mobile:'mobile',ssr:'ssr'};// Note: this value is also hardcoded in Infima
// Both JS and CSS must have the same value
// Updating this JS value alone is not enough
// See https://github.com/facebook/docusaurus/issues/9603
const DesktopBreakpoint=996;function getWindowSize(desktopBreakpoint){if(!_docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.canUseDOM){throw new Error('getWindowSize() should only be called after React hydration');}return window.innerWidth>desktopBreakpoint?windowSizes.desktop:windowSizes.mobile;}/**
 * Gets the current window size as an enum value. We don't want it to return the
 * actual width value, so that it only re-renders once a breakpoint is crossed.
 *
 * It may return `"ssr"`, which is very important to handle hydration FOUC or
 * layout shifts. You have to handle it explicitly upfront. On the server, you
 * may need to render BOTH the mobile/desktop elements (and hide one of them
 * with mediaquery). We don't return `undefined` on purpose, to make it more
 * explicit.
 */function useWindowSize({desktopBreakpoint=DesktopBreakpoint}={}){const[windowSize,setWindowSize]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>// super important to return a constant value to avoid hydration mismatch
// see https://github.com/facebook/docusaurus/issues/9379
'ssr');(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{function updateWindowSize(){setWindowSize(getWindowSize(desktopBreakpoint));}updateWindowSize();window.addEventListener('resize',updateWindowSize);return()=>{window.removeEventListener('resize',updateWindowSize);};},[desktopBreakpoint]);return windowSize;}

/***/ }),

/***/ 7559:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ ThemeClassNames)
/* harmony export */ });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ // Please do not modify the classnames! This is a breaking change, and annoying
// for users!
/**
 * These class names are used to style page layouts in Docusaurus, meant to be
 * targeted by user-provided custom CSS selectors.
 */const ThemeClassNames={page:{blogListPage:'blog-list-page',blogPostPage:'blog-post-page',blogTagsListPage:'blog-tags-list-page',blogTagPostListPage:'blog-tags-post-list-page',docsDocPage:'docs-doc-page',docsTagsListPage:'docs-tags-list-page',docsTagDocListPage:'docs-tags-doc-list-page',mdxPage:'mdx-page'},wrapper:{main:'main-wrapper',// TODO these wrapper class names are now quite useless
// TODO do breaking change later in 3.0
// we already add plugin name/id class on <html>: that's enough
blogPages:'blog-wrapper',docsPages:'docs-wrapper',mdxPages:'mdx-wrapper'},common:{editThisPage:'theme-edit-this-page',lastUpdated:'theme-last-updated',backToTopButton:'theme-back-to-top-button',codeBlock:'theme-code-block',admonition:'theme-admonition',unlistedBanner:'theme-unlisted-banner',admonitionType:type=>`theme-admonition-${type}`},layout:{// TODO add other stable classNames here
},/**
     * Follows the naming convention "theme-{blog,doc,version,page}?-<suffix>"
     */docs:{docVersionBanner:'theme-doc-version-banner',docVersionBadge:'theme-doc-version-badge',docBreadcrumbs:'theme-doc-breadcrumbs',docMarkdown:'theme-doc-markdown',docTocMobile:'theme-doc-toc-mobile',docTocDesktop:'theme-doc-toc-desktop',docFooter:'theme-doc-footer',docFooterTagsRow:'theme-doc-footer-tags-row',docFooterEditMetaRow:'theme-doc-footer-edit-meta-row',docSidebarContainer:'theme-doc-sidebar-container',docSidebarMenu:'theme-doc-sidebar-menu',docSidebarItemCategory:'theme-doc-sidebar-item-category',docSidebarItemLink:'theme-doc-sidebar-item-link',docSidebarItemCategoryLevel:level=>`theme-doc-sidebar-item-category-level-${level}`,docSidebarItemLinkLevel:level=>`theme-doc-sidebar-item-link-level-${level}`// TODO add other stable classNames here
},blog:{// TODO add other stable classNames here
blogFooterTagsRow:'theme-blog-footer-tags-row',blogFooterEditMetaRow:'theme-blog-footer-edit-meta-row'},pages:{pageFooterEditMetaRow:'theme-pages-footer-edit-meta-row'}};

/***/ }),

/***/ 3109:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ prefersReducedMotion)
/* harmony export */ });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function prefersReducedMotion(){return window.matchMedia('(prefers-reduced-motion: reduce)').matches;}

/***/ }),

/***/ 1754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Nr: () => (/* binding */ findFirstSidebarItemLink),
  w8: () => (/* binding */ isActiveSidebarItem),
  C5: () => (/* binding */ isDocsPluginEnabled),
  B5: () => (/* binding */ useDocRootMetadata),
  Vd: () => (/* binding */ useDocsVersionCandidates),
  QB: () => (/* binding */ useLayoutDoc),
  fW: () => (/* binding */ useLayoutDocsSidebar),
  OF: () => (/* binding */ useSidebarBreadcrumbs),
  Y: () => (/* binding */ useVisibleSidebarItems)
});

// UNUSED EXPORTS: filterDocCardListItems, findFirstSidebarItemCategoryLink, findSidebarCategory, isVisibleSidebarItem, useCurrentSidebarCategory, useDocById

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(6347);
// EXTERNAL MODULE: ./node_modules/react-router-config/esm/react-router-config.js
var react_router_config = __webpack_require__(2831);
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/index.js + 2 modules
var client = __webpack_require__(4070);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/docsPreferredVersion.js
var docsPreferredVersion = __webpack_require__(5597);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/docsVersion.js
var docsVersion = __webpack_require__(2252);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/docsSidebar.js
var docsSidebar = __webpack_require__(6588);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/jsUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ // A replacement of lodash in client code
/**
 * Gets the duplicate values in an array.
 * @param arr The array.
 * @param comparator Compares two values and returns `true` if they are equal
 * (duplicated).
 * @returns Value of the elements `v` that have a preceding element `u` where
 * `comparator(u, v) === true`. Values within the returned array are not
 * guaranteed to be unique.
 */function duplicates(arr,comparator=(a,b)=>a===b){return arr.filter((v,vIndex)=>arr.findIndex(u=>comparator(u,v))!==vIndex);}/**
 * Remove duplicate array items (similar to `_.uniq`)
 * @param arr The array.
 * @returns An array with duplicate elements removed by reference comparison.
 */function uniq(arr){// Note: had problems with [...new Set()]: https://github.com/facebook/docusaurus/issues/4972#issuecomment-863895061
return Array.from(new Set(arr));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/routesUtils.js
var routesUtils = __webpack_require__(9169);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/docsUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// TODO not ideal, see also "useDocs"
const isDocsPluginEnabled=!!client/* useAllDocsData */.Gy;function useDocById(id){const version=useDocsVersion();if(!id){return undefined;}const doc=version.docs[id];if(!doc){throw new Error(`no version doc found by id=${id}`);}return doc;}/**
 * Pure function, similar to `Array#find`, but works on the sidebar tree.
 */function findSidebarCategory(sidebar,predicate){for(const item of sidebar){if(item.type==='category'){if(predicate(item)){return item;}const subItem=findSidebarCategory(item.items,predicate);if(subItem){return subItem;}}}return undefined;}/**
 * Best effort to assign a link to a sidebar category. If the category doesn't
 * have a link itself, we link to the first sub item with a link.
 */function findFirstSidebarItemCategoryLink(item){if(item.href&&!item.linkUnlisted){return item.href;}for(const subItem of item.items){const link=findFirstSidebarItemLink(subItem);if(link){return link;}}return undefined;}/**
 * Best effort to assign a link to a sidebar item.
 */function findFirstSidebarItemLink(item){if(item.type==='link'&&!item.unlisted){return item.href;}if(item.type==='category'){return findFirstSidebarItemCategoryLink(item);}// Other items types, like "html"
return undefined;}/**
 * Gets the category associated with the current location. Should only be used
 * on category index pages.
 */function useCurrentSidebarCategory(){const{pathname}=useLocation();const sidebar=useDocsSidebar();if(!sidebar){throw new Error('Unexpected: cant find current sidebar in context');}const categoryBreadcrumbs=getSidebarBreadcrumbs({sidebarItems:sidebar.items,pathname,onlyCategories:true});const deepestCategory=categoryBreadcrumbs.slice(-1)[0];if(!deepestCategory){throw new Error(`${pathname} is not associated with a category. useCurrentSidebarCategory() should only be used on category index pages.`);}return deepestCategory;}const isActive=(testedPath,activePath)=>typeof testedPath!=='undefined'&&(0,routesUtils/* isSamePath */.ys)(testedPath,activePath);const containsActiveSidebarItem=(items,activePath)=>items.some(subItem=>isActiveSidebarItem(subItem,activePath));/**
 * Checks if a sidebar item should be active, based on the active path.
 */function isActiveSidebarItem(item,activePath){if(item.type==='link'){return isActive(item.href,activePath);}if(item.type==='category'){return isActive(item.href,activePath)||containsActiveSidebarItem(item.items,activePath);}return false;}function isVisibleSidebarItem(item,activePath){switch(item.type){case'category':return isActiveSidebarItem(item,activePath)||item.items.some(subItem=>isVisibleSidebarItem(subItem,activePath));case'link':// An unlisted item remains visible if it is active
return!item.unlisted||isActiveSidebarItem(item,activePath);default:return true;}}function useVisibleSidebarItems(items,activePath){return (0,react.useMemo)(()=>items.filter(item=>isVisibleSidebarItem(item,activePath)),[items,activePath]);}/**
 * Get the sidebar the breadcrumbs for a given pathname
 * Ordered from top to bottom
 */function getSidebarBreadcrumbs({sidebarItems,pathname,onlyCategories=false}){const breadcrumbs=[];function extract(items){for(const item of items){if(item.type==='category'&&((0,routesUtils/* isSamePath */.ys)(item.href,pathname)||extract(item.items))||item.type==='link'&&(0,routesUtils/* isSamePath */.ys)(item.href,pathname)){const filtered=onlyCategories&&item.type!=='category';if(!filtered){breadcrumbs.unshift(item);}return true;}}return false;}extract(sidebarItems);return breadcrumbs;}/**
 * Gets the breadcrumbs of the current doc page, based on its sidebar location.
 * Returns `null` if there's no sidebar or breadcrumbs are disabled.
 */function useSidebarBreadcrumbs(){const sidebar=(0,docsSidebar/* useDocsSidebar */.t)();const{pathname}=(0,react_router/* useLocation */.zy)();const breadcrumbsOption=(0,client/* useActivePlugin */.vT)()?.pluginData.breadcrumbs;if(breadcrumbsOption===false||!sidebar){return null;}return getSidebarBreadcrumbs({sidebarItems:sidebar.items,pathname});}/**
 * "Version candidates" are mostly useful for the layout components, which must
 * be able to work on all pages. For example, if a user has `{ type: "doc",
 * docId: "intro" }` as a navbar item, which version does that refer to? We
 * believe that it could refer to at most three version candidates:
 *
 * 1. The **active version**, the one that the user is currently browsing. See
 * {@link useActiveDocContext}.
 * 2. The **preferred version**, the one that the user last visited. See
 * {@link useDocsPreferredVersion}.
 * 3. The **latest version**, the "default". See {@link useLatestVersion}.
 *
 * @param docsPluginId The plugin ID to get versions from.
 * @returns An array of 1~3 versions with priorities defined above, guaranteed
 * to be unique and non-sparse. Will be memoized, hence stable for deps array.
 */function useDocsVersionCandidates(docsPluginId){const{activeVersion}=(0,client/* useActiveDocContext */.zK)(docsPluginId);const{preferredVersion}=(0,docsPreferredVersion/* useDocsPreferredVersion */.g1)(docsPluginId);const latestVersion=(0,client/* useLatestVersion */.r7)(docsPluginId);return (0,react.useMemo)(()=>uniq([activeVersion,preferredVersion,latestVersion].filter(Boolean)),[activeVersion,preferredVersion,latestVersion]);}/**
 * The layout components, like navbar items, must be able to work on all pages,
 * even on non-doc ones where there's no version context, so a sidebar ID could
 * be ambiguous. This hook would always return a sidebar to be linked to. See
 * also {@link useDocsVersionCandidates} for how this selection is done.
 *
 * @throws This hook throws if a sidebar with said ID is not found.
 */function useLayoutDocsSidebar(sidebarId,docsPluginId){const versions=useDocsVersionCandidates(docsPluginId);return (0,react.useMemo)(()=>{const allSidebars=versions.flatMap(version=>version.sidebars?Object.entries(version.sidebars):[]);const sidebarEntry=allSidebars.find(sidebar=>sidebar[0]===sidebarId);if(!sidebarEntry){throw new Error(`Can't find any sidebar with id "${sidebarId}" in version${versions.length>1?'s':''} ${versions.map(version=>version.name).join(', ')}".
Available sidebar ids are:
- ${allSidebars.map(entry=>entry[0]).join('\n- ')}`);}return sidebarEntry[1];},[sidebarId,versions]);}/**
 * The layout components, like navbar items, must be able to work on all pages,
 * even on non-doc ones where there's no version context, so a doc ID could be
 * ambiguous. This hook would always return a doc to be linked to. See also
 * {@link useDocsVersionCandidates} for how this selection is done.
 *
 * @throws This hook throws if a doc with said ID is not found.
 */function useLayoutDoc(docId,docsPluginId){const versions=useDocsVersionCandidates(docsPluginId);return (0,react.useMemo)(()=>{const allDocs=versions.flatMap(version=>version.docs);const doc=allDocs.find(versionDoc=>versionDoc.id===docId);if(!doc){const isDraft=versions.flatMap(version=>version.draftIds).includes(docId);// Drafts should be silently filtered instead of throwing
if(isDraft){return null;}throw new Error(`Couldn't find any doc with id "${docId}" in version${versions.length>1?'s':''} "${versions.map(version=>version.name).join(', ')}".
Available doc ids are:
- ${uniq(allDocs.map(versionDoc=>versionDoc.id)).join('\n- ')}`);}return doc;},[docId,versions]);}// TODO later read version/route directly from context
/**
 * The docs plugin creates nested routes, with the top-level route providing the
 * version metadata, and the subroutes creating individual doc pages. This hook
 * will match the current location against all known sub-routes.
 *
 * @param props The props received by `@theme/DocRoot`
 * @returns The data of the relevant document at the current location, or `null`
 * if no document associated with the current location can be found.
 */function useDocRootMetadata({route}){const location=(0,react_router/* useLocation */.zy)();const versionMetadata=(0,docsVersion/* useDocsVersion */.r)();const docRoutes=route.routes;const currentDocRoute=docRoutes.find(docRoute=>(0,react_router/* matchPath */.B6)(location.pathname,docRoute));if(!currentDocRoute){return null;}// For now, the sidebarName is added as route config: not ideal!
const sidebarName=currentDocRoute.sidebar;const sidebarItems=sidebarName?versionMetadata.docsSidebars[sidebarName]:undefined;const docElement=(0,react_router_config/* renderRoutes */.v)(docRoutes);return{docElement,sidebarName,sidebarItems};}/**
 * Filter items we don't want to display on the doc card list view
 * @param items
 */function filterDocCardListItems(items){return items.filter(item=>{const canHaveLink=item.type==='category'||item.type==='link';if(canHaveLink){return!!findFirstSidebarItemLink(item);}return true;});}

/***/ }),

/***/ 1003:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  e3: () => (/* binding */ HtmlClassNameProvider),
  be: () => (/* binding */ PageMetadata),
  Jx: () => (/* binding */ PluginHtmlClassNameProvider)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(4164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(5260);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/routeContext.js
var routeContext = __webpack_require__(3102);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useRouteContext.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useRouteContext(){const context=react.useContext(routeContext/* Context */.o);if(!context){throw new Error('Unexpected: no Docusaurus route context found');}return context;}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(6025);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(4586);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/generalUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Formats the page's title based on relevant site config and other contexts.
 */function useTitleFormatter(title){const{siteConfig}=(0,useDocusaurusContext/* default */.A)();const{title:siteTitle,titleDelimiter}=siteConfig;return title?.trim().length?`${title.trim()} ${titleDelimiter} ${siteTitle}`:siteTitle;}
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Helper component to manipulate page metadata and override site defaults.
 * Works in the same way as Helmet.
 */function PageMetadata({title,description,keywords,image,children}){const pageTitle=useTitleFormatter(title);const{withBaseUrl}=(0,useBaseUrl/* useBaseUrlUtils */.h)();const pageImage=image?withBaseUrl(image,{absolute:true}):undefined;return/*#__PURE__*/(0,jsx_runtime.jsxs)(Head/* default */.A,{children:[title&&/*#__PURE__*/(0,jsx_runtime.jsx)("title",{children:pageTitle}),title&&/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{property:"og:title",content:pageTitle}),description&&/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{name:"description",content:description}),description&&/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{property:"og:description",content:description}),keywords&&/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{name:"keywords",content:// https://github.com/microsoft/TypeScript/issues/17002
Array.isArray(keywords)?keywords.join(','):keywords}),pageImage&&/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{property:"og:image",content:pageImage}),pageImage&&/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{name:"twitter:image",content:pageImage}),children]});}const HtmlClassNameContext=/*#__PURE__*/react.createContext(undefined);/**
 * Every layer of this provider will append a class name to the HTML element.
 * There's no consumer for this hook: it's side-effect-only. This wrapper is
 * necessary because Helmet does not "merge" classes.
 * @see https://github.com/staylor/react-helmet-async/issues/161
 */function HtmlClassNameProvider({className:classNameProp,children}){const classNameContext=react.useContext(HtmlClassNameContext);const className=(0,clsx/* default */.A)(classNameContext,classNameProp);return/*#__PURE__*/(0,jsx_runtime.jsxs)(HtmlClassNameContext.Provider,{value:className,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Head/* default */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("html",{className:className})}),children]});}function pluginNameToClassName(pluginName){return`plugin-${pluginName.replace(/docusaurus-(?:plugin|theme)-(?:content-)?/gi,'')}`;}/**
 * A very thin wrapper around `HtmlClassNameProvider` that adds the plugin ID +
 * name to the HTML class name.
 */function PluginHtmlClassNameProvider({children}){const routeContext=useRouteContext();const nameClass=pluginNameToClassName(routeContext.plugin.name);const idClass=`plugin-id-${routeContext.plugin.id}`;return/*#__PURE__*/(0,jsx_runtime.jsx)(HtmlClassNameProvider,{className:(0,clsx/* default */.A)(nameClass,idClass),children:children});}

/***/ }),

/***/ 9532:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Be: () => (/* binding */ useShallowMemoObject),
/* harmony export */   ZC: () => (/* binding */ usePrevious),
/* harmony export */   _q: () => (/* binding */ useEvent),
/* harmony export */   dV: () => (/* binding */ ReactContextError),
/* harmony export */   fM: () => (/* binding */ composeProviders)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(205);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Temporary userland implementation until an official hook is implemented
 * See RFC: https://github.com/reactjs/rfcs/pull/220
 *
 * Permits to transform an unstable callback (like an arrow function provided as
 * props) to a "stable" callback that is safe to use in a `useEffect` dependency
 * array. Useful to avoid React stale closure problems + avoid useless effect
 * re-executions.
 *
 * This generally works but has some potential drawbacks, such as
 * https://github.com/facebook/react/issues/16956#issuecomment-536636418
 */function useEvent(callback){const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(callback);(0,_docusaurus_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(()=>{ref.current=callback;},[callback]);// @ts-expect-error: TS is right that this callback may be a supertype of T,
// but good enough for our use
return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((...args)=>ref.current(...args),[]);}/**
 * Gets `value` from the last render.
 */function usePrevious(value){const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();(0,_docusaurus_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(()=>{ref.current=value;});return ref.current;}/**
 * This error is thrown when a context is consumed outside its provider. Allows
 * reusing a generic error message format and reduces bundle size. The hook's
 * name will be extracted from its stack, so only the provider's name is needed.
 */class ReactContextError extends Error{constructor(providerName,additionalInfo){super();this.name='ReactContextError';this.message=`Hook ${this.stack?.split('\n')[1]?.match(/at (?:\w+\.)?(?<name>\w+)/)?.groups.name??''} is called outside the <${providerName}>. ${additionalInfo??''}`;}}/**
 * Shallow-memoize an object. This means the returned object will be the same as
 * the previous render if the property keys and values did not change. This
 * works for simple cases: when property values are primitives or stable
 * objects.
 *
 * @param obj
 */function useShallowMemoObject(obj){const deps=Object.entries(obj);// Sort by keys to make it order-insensitive
deps.sort((a,b)=>a[0].localeCompare(b[0]));// eslint-disable-next-line react-hooks/exhaustive-deps
return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>obj,deps.flat());}/**
 * Creates a single React provider from an array of existing providers
 * assuming providers only take "children" as props.
 *
 * Prevents the annoying React element nesting
 * Example here: https://getfrontend.tips/compose-multiple-react-providers/
 *
 * The order matters:
 * - The first provider is at the top of the tree.
 * - The last provider is the most nested one
 *
 * @param providers array of providers to compose
 */function composeProviders(providers){// Creates a single React component: it's cheaper to compose JSX elements
return({children})=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:providers.reduceRight((element,CurrentProvider)=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CurrentProvider,{children:element}),children)});}

/***/ }),

/***/ 9169:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dt: () => (/* binding */ useHomePageRoute),
/* harmony export */   ys: () => (/* binding */ isSamePath)
/* harmony export */ });
/* unused harmony export findHomePageRoute */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _generated_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1596);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4586);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Compare the 2 paths, case insensitive and ignoring trailing slash
 */function isSamePath(path1,path2){const normalize=pathname=>(!pathname||pathname.endsWith('/')?pathname:`${pathname}/`)?.toLowerCase();return normalize(path1)===normalize(path2);}/**
 * Note that sites don't always have a homepage in practice, so we can't assume
 * that linking to '/' is always safe.
 * @see https://github.com/facebook/docusaurus/pull/6517#issuecomment-1048709116
 */function findHomePageRoute({baseUrl,routes:initialRoutes}){function isHomePageRoute(route){return route.path===baseUrl&&route.exact===true;}function isHomeParentRoute(route){return route.path===baseUrl&&!route.exact;}function doFindHomePageRoute(routes){if(routes.length===0){return undefined;}const homePage=routes.find(isHomePageRoute);if(homePage){return homePage;}const indexSubRoutes=routes.filter(isHomeParentRoute).flatMap(route=>route.routes??[]);return doFindHomePageRoute(indexSubRoutes);}return doFindHomePageRoute(initialRoutes);}/**
 * Fetches the route that points to "/". Use this instead of the naive "/",
 * because the homepage may not exist.
 */function useHomePageRoute(){const{baseUrl}=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)().siteConfig;return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>findHomePageRoute({routes:_generated_routes__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,baseUrl}),[baseUrl]);}

/***/ }),

/***/ 3104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mq: () => (/* binding */ useScrollPosition),
/* harmony export */   Tv: () => (/* binding */ ScrollControllerProvider),
/* harmony export */   gk: () => (/* binding */ useSmoothScrollTo)
/* harmony export */ });
/* unused harmony exports useScrollController, useScrollPositionBlocker */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8193);
/* harmony import */ var _docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2303);
/* harmony import */ var _docusaurus_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(205);
/* harmony import */ var _reactUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9532);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useScrollControllerContextValue(){const scrollEventsEnabledRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({scrollEventsEnabledRef,enableScrollEvents:()=>{scrollEventsEnabledRef.current=true;},disableScrollEvents:()=>{scrollEventsEnabledRef.current=false;}}),[]);}const ScrollMonitorContext=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);function ScrollControllerProvider({children}){const value=useScrollControllerContextValue();return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ScrollMonitorContext.Provider,{value:value,children:children});}/**
 * We need a way to update the scroll position while ignoring scroll events
 * so as not to toggle Navbar/BackToTop visibility.
 *
 * This API permits to temporarily disable/ignore scroll events. Motivated by
 * https://github.com/facebook/docusaurus/pull/5618
 */function useScrollController(){const context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ScrollMonitorContext);if(context==null){throw new _reactUtils__WEBPACK_IMPORTED_MODULE_5__/* .ReactContextError */ .dV('ScrollControllerProvider');}return context;}const getScrollPosition=()=>_docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null;/**
 * This hook fires an effect when the scroll position changes. The effect will
 * be provided with the before/after scroll positions. Note that the effect may
 * not be always run: if scrolling is disabled through `useScrollController`, it
 * will be a no-op.
 *
 * @see {@link useScrollController}
 */function useScrollPosition(effect,deps=[]){const{scrollEventsEnabledRef}=useScrollController();const lastPositionRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(getScrollPosition());const dynamicEffect=(0,_reactUtils__WEBPACK_IMPORTED_MODULE_5__/* .useEvent */ ._q)(effect);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{const handleScroll=()=>{if(!scrollEventsEnabledRef.current){return;}const currentPosition=getScrollPosition();dynamicEffect(currentPosition,lastPositionRef.current);lastPositionRef.current=currentPosition;};const opts={passive:true};handleScroll();window.addEventListener('scroll',handleScroll,opts);return()=>window.removeEventListener('scroll',handleScroll,opts);// eslint-disable-next-line react-hooks/exhaustive-deps
},[dynamicEffect,scrollEventsEnabledRef,...deps]);}function useScrollPositionSaver(){const lastElementRef=useRef({elem:null,top:0});const save=useCallback(elem=>{lastElementRef.current={elem,top:elem.getBoundingClientRect().top};},[]);const restore=useCallback(()=>{const{current:{elem,top}}=lastElementRef;if(!elem){return{restored:false};}const newTop=elem.getBoundingClientRect().top;const heightDiff=newTop-top;if(heightDiff){window.scrollBy({left:0,top:heightDiff});}lastElementRef.current={elem:null,top:0};return{restored:heightDiff!==0};},[]);return useMemo(()=>({save,restore}),[restore,save]);}/**
 * This hook permits to "block" the scroll position of a DOM element.
 * The idea is that we should be able to update DOM content above this element
 * but the screen position of this element should not change.
 *
 * Feature motivated by the Tabs groups: clicking on a tab may affect tabs of
 * the same group upper in the tree, yet to avoid a bad UX, the clicked tab must
 * remain under the user mouse.
 *
 * @see https://github.com/facebook/docusaurus/pull/5618
 */function useScrollPositionBlocker(){const scrollController=useScrollController();const scrollPositionSaver=useScrollPositionSaver();const nextLayoutEffectCallbackRef=useRef(undefined);const blockElementScrollPositionUntilNextRender=useCallback(el=>{scrollPositionSaver.save(el);scrollController.disableScrollEvents();nextLayoutEffectCallbackRef.current=()=>{const{restored}=scrollPositionSaver.restore();nextLayoutEffectCallbackRef.current=undefined;// Restoring the former scroll position will trigger a scroll event. We
// need to wait for next scroll event to happen before enabling the
// scrollController events again.
if(restored){const handleScrollRestoreEvent=()=>{scrollController.enableScrollEvents();window.removeEventListener('scroll',handleScrollRestoreEvent);};window.addEventListener('scroll',handleScrollRestoreEvent);}else{scrollController.enableScrollEvents();}};},[scrollController,scrollPositionSaver]);useIsomorphicLayoutEffect(()=>{// Queuing permits to restore scroll position after all useLayoutEffect
// have run, and yet preserve the sync nature of the scroll restoration
// See https://github.com/facebook/docusaurus/issues/8625
queueMicrotask(()=>nextLayoutEffectCallbackRef.current?.());});return{blockElementScrollPositionUntilNextRender};}function smoothScrollNative(top){window.scrollTo({top,behavior:'smooth'});return()=>{// Nothing to cancel, it's natively cancelled if user tries to scroll down
};}function smoothScrollPolyfill(top){let raf=null;const isUpScroll=document.documentElement.scrollTop>top;function rafRecursion(){const currentScroll=document.documentElement.scrollTop;if(isUpScroll&&currentScroll>top||!isUpScroll&&currentScroll<top){raf=requestAnimationFrame(rafRecursion);window.scrollTo(0,Math.floor((currentScroll-top)*0.85)+top);}}rafRecursion();// Break the recursion. Prevents the user from "fighting" against that
// recursion producing a weird UX
return()=>raf&&cancelAnimationFrame(raf);}/**
 * A "smart polyfill" of `window.scrollTo({ top, behavior: "smooth" })`.
 * This currently always uses a polyfilled implementation unless
 * `scroll-behavior: smooth` has been set in CSS, because native support
 * detection for scroll behavior seems unreliable.
 *
 * This hook does not do anything by itself: it returns a start and a stop
 * handle. You can execute either handle at any time.
 */function useSmoothScrollTo(){const cancelRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);const isBrowser=(0,_docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)();// Not all have support for smooth scrolling (particularly Safari mobile iOS)
// TODO proper detection is currently unreliable!
// see https://github.com/wessberg/scroll-behavior-polyfill/issues/16
// For now, we only use native scroll behavior if smooth is already set,
// because otherwise the polyfill produces a weird UX when both CSS and JS try
// to scroll a page, and they cancel each other.
const supportsNativeSmoothScrolling=isBrowser&&getComputedStyle(document.documentElement).scrollBehavior==='smooth';return{startScroll:top=>{cancelRef.current=supportsNativeSmoothScrolling?smoothScrollNative(top):smoothScrollPolyfill(top);},cancelScroll:()=>cancelRef.current?.()};}

/***/ }),

/***/ 2967:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cy: () => (/* binding */ DEFAULT_SEARCH_TAG),
/* harmony export */   tU: () => (/* binding */ docVersionSearchTag)
/* harmony export */ });
/* unused harmony export useContextualSearchFilters */
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4586);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const DEFAULT_SEARCH_TAG='default';/** The search tag to append as each doc's metadata. */function docVersionSearchTag(pluginId,versionName){return`docs-${pluginId}-${versionName}`;}/**
 * Gets the relevant context information for contextual search.
 *
 * The value is generic and not coupled to Algolia/DocSearch, since we may want
 * to support multiple search engines, or allowing users to use their own search
 * engine solution.
 */function useContextualSearchFilters(){const{i18n}=useDocusaurusContext();const allDocsData=useAllDocsData();const activePluginAndVersion=useActivePluginAndVersion();const docsPreferredVersionByPluginId=useDocsPreferredVersionByPluginId();// This can't use more specialized hooks because we are mapping over all
// plugin instances.
function getDocPluginTags(pluginId){const activeVersion=activePluginAndVersion?.activePlugin.pluginId===pluginId?activePluginAndVersion.activeVersion:undefined;const preferredVersion=docsPreferredVersionByPluginId[pluginId];const latestVersion=allDocsData[pluginId].versions.find(v=>v.isLast);const version=activeVersion??preferredVersion??latestVersion;return docVersionSearchTag(pluginId,version.name);}const tags=[DEFAULT_SEARCH_TAG,...Object.keys(allDocsData).map(getDocPluginTags)];return{locale:i18n.currentLocale,tags};}

/***/ }),

/***/ 9466:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Wf: () => (/* binding */ createStorageSlot)
/* harmony export */ });
/* unused harmony exports useStorageSlot, listStorageKeys */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const StorageTypes=(/* unused pure expression or super */ null && (['localStorage','sessionStorage','none']));const DefaultStorageType='localStorage';// window.addEventListener('storage') only works for different windows...
// so for current window we have to dispatch the event manually
// Now we can listen for both cross-window / current-window storage changes!
// see https://stackoverflow.com/a/71177640/82609
// see https://stackoverflow.com/questions/26974084/listen-for-changes-with-localstorage-on-the-same-window
function dispatchChangeEvent({key,oldValue,newValue,storage}){// If we set multiple times the same storage value, events should not be fired
// The native events behave this way, so our manual event dispatch should
// rather behave exactly the same. Not doing so might create infinite loops.
// See https://github.com/facebook/docusaurus/issues/8594
if(oldValue===newValue){return;}const event=document.createEvent('StorageEvent');event.initStorageEvent('storage',false,false,key,oldValue,newValue,window.location.href,storage);window.dispatchEvent(event);}/**
 * Will return `null` if browser storage is unavailable (like running Docusaurus
 * in an iframe). This should NOT be called in SSR.
 *
 * @see https://github.com/facebook/docusaurus/pull/4501
 */function getBrowserStorage(storageType=DefaultStorageType){if(typeof window==='undefined'){throw new Error('Browser storage is not available on Node.js/Docusaurus SSR process.');}if(storageType==='none'){return null;}try{return window[storageType];}catch(err){logOnceBrowserStorageNotAvailableWarning(err);return null;}}let hasLoggedBrowserStorageNotAvailableWarning=false;/**
 * Poor man's memoization to avoid logging multiple times the same warning.
 * Sometimes, `localStorage`/`sessionStorage` is unavailable due to browser
 * policies.
 */function logOnceBrowserStorageNotAvailableWarning(error){if(!hasLoggedBrowserStorageNotAvailableWarning){console.warn(`Docusaurus browser storage is not available.
Possible reasons: running Docusaurus in an iframe, in an incognito browser session, or using too strict browser privacy settings.`,error);hasLoggedBrowserStorageNotAvailableWarning=true;}}const NoopStorageSlot={get:()=>null,set:()=>{},del:()=>{},listen:()=>()=>{}};// Fail-fast, as storage APIs should not be used during the SSR process
function createServerStorageSlot(key){function throwError(){throw new Error(`Illegal storage API usage for storage key "${key}".
Docusaurus storage APIs are not supposed to be called on the server-rendering process.
Please only call storage APIs in effects and event handlers.`);}return{get:throwError,set:throwError,del:throwError,listen:throwError};}/**
 * Creates an interface to work on a particular key in the storage model.
 * Note that this function only initializes the interface, but doesn't allocate
 * anything by itself (i.e. no side-effects).
 *
 * The API is fail-safe, since usage of browser storage should be considered
 * unreliable. Local storage might simply be unavailable (iframe + browser
 * security) or operations might fail individually. Please assume that using
 * this API can be a no-op. See also https://github.com/facebook/docusaurus/issues/6036
 */function createStorageSlot(key,options){if(typeof window==='undefined'){return createServerStorageSlot(key);}const storage=getBrowserStorage(options?.persistence);if(storage===null){return NoopStorageSlot;}return{get:()=>{try{return storage.getItem(key);}catch(err){console.error(`Docusaurus storage error, can't get key=${key}`,err);return null;}},set:newValue=>{try{const oldValue=storage.getItem(key);storage.setItem(key,newValue);dispatchChangeEvent({key,oldValue,newValue,storage});}catch(err){console.error(`Docusaurus storage error, can't set ${key}=${newValue}`,err);}},del:()=>{try{const oldValue=storage.getItem(key);storage.removeItem(key);dispatchChangeEvent({key,oldValue,newValue:null,storage});}catch(err){console.error(`Docusaurus storage error, can't delete key=${key}`,err);}},listen:onChange=>{try{const listener=event=>{if(event.storageArea===storage&&event.key===key){onChange(event);}};window.addEventListener('storage',listener);return()=>window.removeEventListener('storage',listener);}catch(err){console.error(`Docusaurus storage error, can't listen for changes of key=${key}`,err);return()=>{};}}};}function useStorageSlot(key,options){// Not ideal but good enough: assumes storage slot config is constant
const storageSlot=useRef(()=>{if(key===null){return NoopStorageSlot;}return createStorageSlot(key,options);}).current();const listen=useCallback(onChange=>{// Do not try to add a listener during SSR
if(typeof window==='undefined'){return()=>{};}return storageSlot.listen(onChange);},[storageSlot]);const currentValue=useSyncExternalStore(listen,()=>{// TODO this check should be useless after React 18
if(typeof window==='undefined'){return null;}return storageSlot.get();},()=>null);return[currentValue,storageSlot];}/**
 * Returns a list of all the keys currently stored in browser storage,
 * or an empty list if browser storage can't be accessed.
 */function listStorageKeys(storageType=DefaultStorageType){const browserStorage=getBrowserStorage(storageType);if(!browserStorage){return[];}const keys=[];for(let i=0;i<browserStorage.length;i+=1){const key=browserStorage.key(i);if(key!==null){keys.push(key);}}return keys;}

/***/ }),

/***/ 2131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ useAlternatePageUtils)
/* harmony export */ });
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4586);
/* harmony import */ var _docusaurus_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6347);
/* harmony import */ var _docusaurus_utils_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(440);
/* harmony import */ var _docusaurus_utils_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_docusaurus_utils_common__WEBPACK_IMPORTED_MODULE_2__);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Permits to obtain the url of the current page in another locale, useful to
 * generate hreflang meta headers etc...
 *
 * @see https://developers.google.com/search/docs/advanced/crawling/localized-versions
 */function useAlternatePageUtils(){const{siteConfig:{baseUrl,url,trailingSlash},i18n:{defaultLocale,currentLocale}}=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)();// TODO using useLocation().pathname is not a super idea
// See https://github.com/facebook/docusaurus/issues/9170
const{pathname}=(0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_1__/* .useLocation */ .zy)();const canonicalPathname=(0,_docusaurus_utils_common__WEBPACK_IMPORTED_MODULE_2__.applyTrailingSlash)(pathname,{trailingSlash,baseUrl});const baseUrlUnlocalized=currentLocale===defaultLocale?baseUrl:baseUrl.replace(`/${currentLocale}/`,'/');const pathnameSuffix=canonicalPathname.replace(baseUrl,'');function getLocalizedBaseUrl(locale){return locale===defaultLocale?`${baseUrlUnlocalized}`:`${baseUrlUnlocalized}${locale}/`;}// TODO support correct alternate url when localized site is deployed on
// another domain
function createUrl({locale,fullyQualified}){return`${fullyQualified?url:''}${getLocalizedBaseUrl(locale)}${pathnameSuffix}`;}return{createUrl};}

/***/ }),

/***/ 5062:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ useLocationChange)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6347);
/* harmony import */ var _reactUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9532);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Fires an effect when the location changes (which includes hash, query, etc.).
 * Importantly, doesn't fire when there's no previous location: see
 * https://github.com/facebook/docusaurus/pull/6696
 */function useLocationChange(onLocationChange){const location=(0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_1__/* .useLocation */ .zy)();const previousLocation=(0,_reactUtils__WEBPACK_IMPORTED_MODULE_2__/* .usePrevious */ .ZC)(location);const onLocationChangeDynamic=(0,_reactUtils__WEBPACK_IMPORTED_MODULE_2__/* .useEvent */ ._q)(onLocationChange);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(!previousLocation){return;}if(location!==previousLocation){onLocationChangeDynamic({location,previousLocation});}},[onLocationChangeDynamic,location,previousLocation]);}

/***/ }),

/***/ 6342:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ useThemeConfig)
/* harmony export */ });
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4586);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * A convenient/more semantic way to get theme config from context.
 */function useThemeConfig(){return (0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)().siteConfig.themeConfig;}

/***/ }),

/***/ 2983:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(exports, "__esModule", ({value:true}));exports.removeTrailingSlash=exports.addLeadingSlash=exports.addTrailingSlash=void 0;const stringUtils_1=__webpack_require__(2566);function addTrailingSlash(str){return str.endsWith('/')?str:`${str}/`;}exports.addTrailingSlash=addTrailingSlash;// Trailing slash handling depends in some site configuration options
function applyTrailingSlash(path,options){const{trailingSlash,baseUrl}=options;if(path.startsWith('#')){// Never apply trailing slash to an anchor link
return path;}function handleTrailingSlash(str,trailing){return trailing?addTrailingSlash(str):removeTrailingSlash(str);}// undefined = legacy retrocompatible behavior
if(typeof trailingSlash==='undefined'){return path;}// The trailing slash should be handled before the ?search#hash !
const[pathname]=path.split(/[#?]/);// Never transform '/' to ''
// Never remove the baseUrl trailing slash!
// If baseUrl = /myBase/, we want to emit /myBase/index.html and not
// /myBase.html! See https://github.com/facebook/docusaurus/issues/5077
const shouldNotApply=pathname==='/'||pathname===baseUrl;const newPathname=shouldNotApply?pathname:handleTrailingSlash(pathname,trailingSlash);return path.replace(pathname,newPathname);}exports["default"]=applyTrailingSlash;/** Appends a leading slash to `str`, if one doesn't exist. */function addLeadingSlash(str){return(0,stringUtils_1.addPrefix)(str,'/');}exports.addLeadingSlash=addLeadingSlash;/** Removes the trailing slash from `str`. */function removeTrailingSlash(str){return(0,stringUtils_1.removeSuffix)(str,'/');}exports.removeTrailingSlash=removeTrailingSlash;

/***/ }),

/***/ 253:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports.getErrorCausalChain=void 0;function getErrorCausalChain(error){if(error.cause){return[error,...getErrorCausalChain(error.cause)];}return[error];}exports.getErrorCausalChain=getErrorCausalChain;

/***/ }),

/***/ 440:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{"default":mod};};Object.defineProperty(exports, "__esModule", ({value:true}));exports.getErrorCausalChain=exports.removePrefix=exports.addSuffix=exports.removeSuffix=exports.addPrefix=exports.removeTrailingSlash=exports.addLeadingSlash=exports.addTrailingSlash=exports.applyTrailingSlash=exports.blogPostContainerID=void 0;// __ prefix allows search crawlers (Algolia/DocSearch) to ignore anchors
// https://github.com/facebook/docusaurus/issues/8883#issuecomment-1516328368
exports.blogPostContainerID='__blog-post-container';var applyTrailingSlash_1=__webpack_require__(2983);Object.defineProperty(exports, "applyTrailingSlash", ({enumerable:true,get:function(){return __importDefault(applyTrailingSlash_1).default;}}));Object.defineProperty(exports, "addTrailingSlash", ({enumerable:true,get:function(){return applyTrailingSlash_1.addTrailingSlash;}}));Object.defineProperty(exports, "addLeadingSlash", ({enumerable:true,get:function(){return applyTrailingSlash_1.addLeadingSlash;}}));Object.defineProperty(exports, "removeTrailingSlash", ({enumerable:true,get:function(){return applyTrailingSlash_1.removeTrailingSlash;}}));var stringUtils_1=__webpack_require__(2566);Object.defineProperty(exports, "addPrefix", ({enumerable:true,get:function(){return stringUtils_1.addPrefix;}}));Object.defineProperty(exports, "removeSuffix", ({enumerable:true,get:function(){return stringUtils_1.removeSuffix;}}));Object.defineProperty(exports, "addSuffix", ({enumerable:true,get:function(){return stringUtils_1.addSuffix;}}));Object.defineProperty(exports, "removePrefix", ({enumerable:true,get:function(){return stringUtils_1.removePrefix;}}));var errorUtils_1=__webpack_require__(253);Object.defineProperty(exports, "getErrorCausalChain", ({enumerable:true,get:function(){return errorUtils_1.getErrorCausalChain;}}));

/***/ }),

/***/ 2566:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(exports, "__esModule", ({value:true}));exports.removePrefix=exports.addSuffix=exports.removeSuffix=exports.addPrefix=void 0;/** Adds a given string prefix to `str`. */function addPrefix(str,prefix){return str.startsWith(prefix)?str:`${prefix}${str}`;}exports.addPrefix=addPrefix;/** Removes a given string suffix from `str`. */function removeSuffix(str,suffix){if(suffix===''){// str.slice(0, 0) is ""
return str;}return str.endsWith(suffix)?str.slice(0,-suffix.length):str;}exports.removeSuffix=removeSuffix;/** Adds a given string suffix to `str`. */function addSuffix(str,suffix){return str.endsWith(suffix)?str:`${str}${suffix}`;}exports.addSuffix=addSuffix;/** Removes a given string prefix from `str`. */function removePrefix(str,prefix){return str.startsWith(prefix)?str.slice(prefix.length):str;}exports.removePrefix=removePrefix;

/***/ }),

/***/ 2259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(4164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(725);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(4586);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 53 modules
var Layout = __webpack_require__(7356);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js
var Heading = __webpack_require__(4608);
// EXTERNAL MODULE: ./src/components/HomepageFeatures/styles.module.css
var styles_module = __webpack_require__(3552);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// CONCATENATED MODULE: ./src/components/HomepageFeatures/index.js
const FeatureList=[{title:'Qual a proposta desse documento?',Svg:(__webpack_require__(5328)/* ["default"] */ .A),description:/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"Nessa documenta\xE7\xE3o demonstraremos todo o percurso feito pela nossa equipe para chegar na melhor solu\xE7\xE3o de seguran\xE7a para a Capzul."})},{title:'Importância',Svg:(__webpack_require__(2782)/* ["default"] */ .A),description:/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"A participa\xE7\xE3o no CTF permitiu testar o Capzul Protect em cen\xE1rios reais de ataque. Enfrentamos desafios que exigiram compreens\xE3o das metodologias criptogr\xE1ficas. Essa experi\xEAncia validou a robustez do Capzul Protect e a necessidade de uma documenta\xE7\xE3o clara para os usu\xE1rios."})},{title:'A solução Capzul',Svg:(__webpack_require__(1215)/* ["default"] */ .A),description:/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"A partir desta experi\xEAncia, foi poss\xEDvel desenvolver uma documenta\xE7\xE3o detalhada e precisa para esclarecer e orientar sobre suas funcionalidades e m\xE9todos avan\xE7ados que utilizamos para tentar encontrar vulnerabilidades na solu\xE7\xE3o Capzul."})}];function Feature({Svg,title,description}){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)('col col--4'),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"text--center",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Svg,{className:(styles_module_default()).featureSvg,role:"img"})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"text--center padding-horiz--md",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* default */.A,{as:"h3",children:title}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:description})]})]});}function HomepageFeatures(){return/*#__PURE__*/(0,jsx_runtime.jsx)("section",{className:(styles_module_default()).features,children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"container",children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"row",children:FeatureList.map((props,idx)=>/*#__PURE__*/(0,jsx_runtime.jsx)(Feature,{...props},idx))})})});}
// EXTERNAL MODULE: ./src/pages/index.module.css
var index_module = __webpack_require__(6830);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
;// CONCATENATED MODULE: ./src/pages/index.js
function HomepageHeader(){const{siteConfig}=(0,useDocusaurusContext/* default */.A)();return/*#__PURE__*/(0,jsx_runtime.jsx)("header",{className:(0,clsx/* default */.A)('hero hero--primary',(index_module_default()).heroBanner),children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"container",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* default */.A,{as:"h1",className:"hero__title",children:siteConfig.title}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"hero__subtitle",children:siteConfig.tagline}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(index_module_default()).buttons})]})});}function Home(){const{siteConfig}=(0,useDocusaurusContext/* default */.A)();return/*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.A,{title:`Olá de ${siteConfig.title}`,description:"Descri\xE7\xE3o ficara dispon\xEDvel nos metadados em <head />",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(HomepageHeader,{}),/*#__PURE__*/(0,jsx_runtime.jsx)("main",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(HomepageFeatures,{})})]});}

/***/ }),

/***/ 9832:
/***/ ((module) => {

// Exports
module.exports = {

};


/***/ }),

/***/ 6175:
/***/ ((module) => {

// Exports
module.exports = {
	"admonition": `admonition_xJq3`,
	"admonitionHeading": `admonitionHeading_Gvgb`,
	"admonitionIcon": `admonitionIcon_Rf37`,
	"admonitionContent": `admonitionContent_BuS1`
};


/***/ }),

/***/ 7521:
/***/ ((module) => {

// Exports
module.exports = {
	"closeButton": `closeButton_CVFx`
};


/***/ }),

/***/ 9034:
/***/ ((module) => {

// Exports
module.exports = {
	"content": `content_knG7`
};


/***/ }),

/***/ 2804:
/***/ ((module) => {

// Exports
module.exports = {
	"announcementBar": `announcementBar_mb4j`,
	"announcementBarPlaceholder": `announcementBarPlaceholder_vyr4`,
	"announcementBarClose": `announcementBarClose_gvF7`,
	"announcementBarContent": `announcementBarContent_xLdY`
};


/***/ }),

/***/ 1871:
/***/ ((module) => {

// Exports
module.exports = {
	"backToTopButton": `backToTopButton_sjWU`,
	"backToTopButtonShow": `backToTopButtonShow_xfvO`
};


/***/ }),

/***/ 1702:
/***/ ((module) => {

// Exports
module.exports = {
	"codeBlockContainer": `codeBlockContainer_Ckt0`
};


/***/ }),

/***/ 6128:
/***/ ((module) => {

// Exports
module.exports = {
	"codeBlockContent": `codeBlockContent_biex`,
	"codeBlockTitle": `codeBlockTitle_Ktv7`,
	"codeBlock": `codeBlock_bY9V`,
	"codeBlockStandalone": `codeBlockStandalone_MEMb`,
	"codeBlockLines": `codeBlockLines_e6Vv`,
	"codeBlockLinesWithNumbering": `codeBlockLinesWithNumbering_o6Pm`,
	"buttonGroup": `buttonGroup__atx`
};


/***/ }),

/***/ 4142:
/***/ ((module) => {

// Exports
module.exports = {
	"copyButtonCopied": `copyButtonCopied_obH4`,
	"copyButtonIcons": `copyButtonIcons_eSgA`,
	"copyButtonIcon": `copyButtonIcon_y97N`,
	"copyButtonSuccessIcon": `copyButtonSuccessIcon_LjdS`
};


/***/ }),

/***/ 3083:
/***/ ((module) => {

// Exports
module.exports = {
	"codeLine": `codeLine_lJS_`,
	"codeLineNumber": `codeLineNumber_Tfdd`,
	"codeLineContent": `codeLineContent_feaV`
};


/***/ }),

/***/ 9501:
/***/ ((module) => {

// Exports
module.exports = {
	"wordWrapButtonIcon": `wordWrapButtonIcon_Bwma`,
	"wordWrapButtonEnabled": `wordWrapButtonEnabled_EoeP`
};


/***/ }),

/***/ 3384:
/***/ ((module) => {

// Exports
module.exports = {
	"toggle": `toggle_vylO`,
	"toggleButton": `toggleButton_gllP`,
	"darkToggleIcon": `darkToggleIcon_wfgR`,
	"lightToggleIcon": `lightToggleIcon_pyhR`,
	"toggleButtonDisabled": `toggleButtonDisabled_aARS`
};


/***/ }),

/***/ 3406:
/***/ ((module) => {

// Exports
module.exports = {
	"details": `details_b_Ee`
};


/***/ }),

/***/ 3801:
/***/ ((module) => {

// Exports
module.exports = {
	"breadcrumbHomeIcon": `breadcrumbHomeIcon_YNFT`
};


/***/ }),

/***/ 3928:
/***/ ((module) => {

// Exports
module.exports = {
	"breadcrumbsContainer": `breadcrumbsContainer_Z_bl`
};


/***/ }),

/***/ 6024:
/***/ ((module) => {

// Exports
module.exports = {
	"docItemContainer": `docItemContainer_Djhp`,
	"docItemCol": `docItemCol_VOVn`
};


/***/ }),

/***/ 4061:
/***/ ((module) => {

// Exports
module.exports = {
	"tocMobile": `tocMobile_ITEo`
};


/***/ }),

/***/ 3685:
/***/ ((module) => {

// Exports
module.exports = {
	"docMainContainer": `docMainContainer_TBSr`,
	"docMainContainerEnhanced": `docMainContainerEnhanced_lQrH`,
	"docItemWrapperEnhanced": `docItemWrapperEnhanced_JWYK`
};


/***/ }),

/***/ 8721:
/***/ ((module) => {

// Exports
module.exports = {
	"expandButton": `expandButton_TmdG`,
	"expandButtonIcon": `expandButtonIcon_i1dp`
};


/***/ }),

/***/ 5710:
/***/ ((module) => {

// Exports
module.exports = {
	"docSidebarContainer": `docSidebarContainer_YfHR`,
	"docSidebarContainerHidden": `docSidebarContainerHidden_DPk8`,
	"sidebarViewport": `sidebarViewport_aRkj`
};


/***/ }),

/***/ 2607:
/***/ ((module) => {

// Exports
module.exports = {
	"docRoot": `docRoot_UBD9`,
	"docsWrapper": `docsWrapper_hBAB`
};


/***/ }),

/***/ 2105:
/***/ ((module) => {

// Exports
module.exports = {
	"menuHtmlItem": `menuHtmlItem_M9Kj`
};


/***/ }),

/***/ 1398:
/***/ ((module) => {

// Exports
module.exports = {
	"menuExternalLink": `menuExternalLink_NmtK`
};


/***/ }),

/***/ 5599:
/***/ ((module) => {

// Exports
module.exports = {
	"collapseSidebarButton": `collapseSidebarButton_PEFL`,
	"collapseSidebarButtonIcon": `collapseSidebarButtonIcon_kv0_`
};


/***/ }),

/***/ 1733:
/***/ ((module) => {

// Exports
module.exports = {
	"menu": `menu_SIkG`,
	"menuWithAnnouncementBar": `menuWithAnnouncementBar_GW3s`
};


/***/ }),

/***/ 6263:
/***/ ((module) => {

// Exports
module.exports = {
	"sidebar": `sidebar_njMd`,
	"sidebarWithHideableNavbar": `sidebarWithHideableNavbar_wUlq`,
	"sidebarHidden": `sidebarHidden_VK0M`,
	"sidebarLogo": `sidebarLogo_isFc`
};


/***/ }),

/***/ 901:
/***/ ((module) => {

// Exports
module.exports = {
	"lastUpdated": `lastUpdated_JAkA`
};


/***/ }),

/***/ 5309:
/***/ ((module) => {

// Exports
module.exports = {
	"footerLogoLink": `footerLogoLink_BH7S`
};


/***/ }),

/***/ 4738:
/***/ ((module) => {

// Exports
module.exports = {
	"anchorWithStickyNavbar": `anchorWithStickyNavbar_LWe7`,
	"anchorWithHideOnScrollNavbar": `anchorWithHideOnScrollNavbar_WYt5`
};


/***/ }),

/***/ 1930:
/***/ ((module) => {

// Exports
module.exports = {
	"iconEdit": `iconEdit_Z9Sw`
};


/***/ }),

/***/ 1455:
/***/ ((module) => {

// Exports
module.exports = {
	"iconExternalLink": `iconExternalLink_nPIU`
};


/***/ }),

/***/ 6218:
/***/ ((module) => {

// Exports
module.exports = {
	"mainWrapper": `mainWrapper_z2l0`
};


/***/ }),

/***/ 8081:
/***/ ((module) => {

// Exports
module.exports = {
	"img": `img_ev3q`
};


/***/ }),

/***/ 7691:
/***/ ((module) => {

// Exports
module.exports = {
	"containsTaskList": `containsTaskList_mC6p`
};


/***/ }),

/***/ 1696:
/***/ ((module) => {

// Exports
module.exports = {
	"mdxPageWrapper": `mdxPageWrapper_j9I6`
};


/***/ }),

/***/ 6214:
/***/ ((module) => {

// Exports
module.exports = {
	"dropdownNavbarItemMobile": `dropdownNavbarItemMobile_S0Fm`
};


/***/ }),

/***/ 8244:
/***/ ((module) => {

// Exports
module.exports = {
	"iconLanguage": `iconLanguage_nlXk`
};


/***/ }),

/***/ 3127:
/***/ ((module) => {

// Exports
module.exports = {
	"darkNavbarColorModeToggle": `darkNavbarColorModeToggle_X3D1`
};


/***/ }),

/***/ 8484:
/***/ ((module) => {

// Exports
module.exports = {
	"colorModeToggle": `colorModeToggle_DEke`
};


/***/ }),

/***/ 231:
/***/ ((module) => {

// Exports
module.exports = {
	"navbarHideable": `navbarHideable_m1mJ`,
	"navbarHidden": `navbarHidden_jGov`
};


/***/ }),

/***/ 7921:
/***/ ((module) => {

// Exports
module.exports = {
	"navbarSearchContainer": `navbarSearchContainer_Bca1`
};


/***/ }),

/***/ 5521:
/***/ ((module) => {

// Exports
module.exports = {
	"skipToContent": `skipToContent_fXgn`
};


/***/ }),

/***/ 9136:
/***/ ((module) => {

// Exports
module.exports = {
	"tocCollapsibleButton": `tocCollapsibleButton_TO0P`,
	"tocCollapsibleButtonExpanded": `tocCollapsibleButtonExpanded_MG3E`
};


/***/ }),

/***/ 2586:
/***/ ((module) => {

// Exports
module.exports = {
	"tocCollapsible": `tocCollapsible_ETCw`,
	"tocCollapsibleContent": `tocCollapsibleContent_vkbj`,
	"tocCollapsibleExpanded": `tocCollapsibleExpanded_sAul`
};


/***/ }),

/***/ 5490:
/***/ ((module) => {

// Exports
module.exports = {
	"tableOfContents": `tableOfContents_bqdL`,
	"docItemContainer": `docItemContainer_F8PC`
};


/***/ }),

/***/ 448:
/***/ ((module) => {

// Exports
module.exports = {
	"tag": `tag_zVej`,
	"tagRegular": `tagRegular_sFm0`,
	"tagWithCount": `tagWithCount_h2kH`
};


/***/ }),

/***/ 4088:
/***/ ((module) => {

// Exports
module.exports = {
	"tags": `tags_jXut`,
	"tag": `tag_QGVx`
};


/***/ }),

/***/ 6062:
/***/ ((module) => {

// Exports
module.exports = {
	"details": `details_lb9f`,
	"isBrowser": `isBrowser_bmU9`,
	"collapsibleContent": `collapsibleContent_i85q`
};


/***/ }),

/***/ 6878:
/***/ ((module) => {

// Exports
module.exports = {
	"themedComponent": `themedComponent_mlkZ`,
	"themedComponent--light": `themedComponent--light_NVdE`,
	"themedComponent--dark": `themedComponent--dark_xIcU`
};


/***/ }),

/***/ 7983:
/***/ ((module) => {

// Exports
module.exports = {
	"errorBoundaryError": `errorBoundaryError_a6uf`,
	"errorBoundaryFallback": `errorBoundaryFallback_VBag`
};


/***/ }),

/***/ 3552:
/***/ ((module) => {

// Exports
module.exports = {
	"features": `features_t9lD`,
	"featureSvg": `featureSvg_GfXr`
};


/***/ }),

/***/ 6830:
/***/ ((module) => {

// Exports
module.exports = {
	"heroBanner": `heroBanner_qdFl`,
	"buttons": `buttons_AeoN`
};


/***/ }),

/***/ 1513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  zR: () => (/* binding */ createBrowserHistory),
  TM: () => (/* binding */ createHashHistory),
  yJ: () => (/* binding */ createLocation),
  sC: () => (/* binding */ createMemoryHistory),
  AO: () => (/* binding */ createPath)
});

// UNUSED EXPORTS: locationsAreEqual, parsePath

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(8168);
;// CONCATENATED MODULE: ./node_modules/resolve-pathname/esm/resolve-pathname.js
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to, from) {
  if (from === undefined) from = '';

  var toParts = (to && to.split('/')) || [];
  var fromParts = (from && from.split('/')) || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) fromParts.unshift('..');

  if (
    mustEndAbs &&
    fromParts[0] !== '' &&
    (!fromParts[0] || !isAbsolute(fromParts[0]))
  )
    fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ const resolve_pathname = (resolvePathname);

// EXTERNAL MODULE: ./node_modules/tiny-invariant/dist/esm/tiny-invariant.js
var tiny_invariant = __webpack_require__(1561);
;// CONCATENATED MODULE: ./node_modules/history/esm/history.js






function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
}
function hasBasename(path, prefix) {
  return path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 && '/?#'.indexOf(path.charAt(prefix.length)) !== -1;
}
function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}
function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
  return path;
}

function createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = (0,esm_extends/* default */.A)({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = resolve_pathname(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}
function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && valueEqual(a.state, b.state);
}

function createTransitionManager() {
  var prompt = null;

  function setPrompt(nextPrompt) {
     false ? 0 : void 0;
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
           false ? 0 : void 0;
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }

  var listeners = [];

  function appendListener(fn) {
    var isActive = true;

    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message)); // eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  false ? 0 : (0,tiny_invariant/* default */.A)(false) : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props,
      _props$forceRefresh = _props.forceRefresh,
      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
     false ? 0 : void 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path, state, key);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    (0,esm_extends/* default */.A)(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }

  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }

  var forceNextPop = false;

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  function createHref(location) {
    return basename + createPath(location);
  }

  function push(path, state) {
     false ? 0 : void 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         false ? 0 : void 0;
        window.location.href = href;
      }
    });
  }

  function replace(path, state) {
     false ? 0 : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         false ? 0 : void 0;
        window.location.replace(href);
      }
    });
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

var HashChangeEvent$1 = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

function stripHash(url) {
  var hashIndex = url.indexOf('#');
  return hashIndex === -1 ? url : url.slice(0, hashIndex);
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
}

function pushHashPath(path) {
  window.location.hash = path;
}

function replaceHashPath(path) {
  window.location.replace(stripHash(window.location.href) + '#' + path);
}

function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  false ? 0 : (0,tiny_invariant/* default */.A)(false) : void 0;
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props = props,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$hashType = _props.hashType,
      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  function getDOMLocation() {
    var path = decodePath(getHashPath());
     false ? 0 : void 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    (0,esm_extends/* default */.A)(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  var forceNextPop = false;
  var ignorePath = null;

  function locationsAreEqual$$1(a, b) {
    return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash;
  }

  function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual$$1(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  }

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  } // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)]; // Public interface

  function createHref(location) {
    var baseTag = document.querySelector('base');
    var href = '';

    if (baseTag && baseTag.getAttribute('href')) {
      href = stripHash(window.location.href);
    }

    return href + '#' + encodePath(basename + createPath(location));
  }

  function push(path, state) {
     false ? 0 : void 0;
    var action = 'PUSH';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
         false ? 0 : void 0;
        setState();
      }
    });
  }

  function replace(path, state) {
     false ? 0 : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
     false ? 0 : void 0;
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}
/**
 * Creates a history object that stores locations in memory.
 */


function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      getUserConfirmation = _props.getUserConfirmation,
      _props$initialEntries = _props.initialEntries,
      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
      _props$initialIndex = _props.initialIndex,
      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();

  function setState(nextState) {
    (0,esm_extends/* default */.A)(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = createPath;

  function push(path, state) {
     false ? 0 : void 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }

  function replace(path, state) {
     false ? 0 : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    return transitionManager.setPrompt(prompt);
  }

  function listen(listener) {
    return transitionManager.appendListener(listener);
  }

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
}




/***/ }),

/***/ 4146:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var reactIs = __webpack_require__(4363);

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ 7927:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var NODE_ENV = "production";

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ 4634:
/***/ ((module) => {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ 4835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 5364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 5947:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */

;(function(root, factory) {

  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

})(this, function() {
  var NProgress = {};

  NProgress.version = '0.2.0';

  var Settings = NProgress.settings = {
    minimum: 0.08,
    easing: 'ease',
    positionUsing: '',
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    showSpinner: true,
    barSelector: '[role="bar"]',
    spinnerSelector: '[role="spinner"]',
    parent: 'body',
    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  };

  /**
   * Updates configuration.
   *
   *     NProgress.configure({
   *       minimum: 0.1
   *     });
   */
  NProgress.configure = function(options) {
    var key, value;
    for (key in options) {
      value = options[key];
      if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
    }

    return this;
  };

  /**
   * Last number.
   */

  NProgress.status = null;

  /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     NProgress.set(0.4);
   *     NProgress.set(1.0);
   */

  NProgress.set = function(n) {
    var started = NProgress.isStarted();

    n = clamp(n, Settings.minimum, 1);
    NProgress.status = (n === 1 ? null : n);

    var progress = NProgress.render(!started),
        bar      = progress.querySelector(Settings.barSelector),
        speed    = Settings.speed,
        ease     = Settings.easing;

    progress.offsetWidth; /* Repaint */

    queue(function(next) {
      // Set positionUsing if it hasn't already been set
      if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();

      // Add transition
      css(bar, barPositionCSS(n, speed, ease));

      if (n === 1) {
        // Fade out
        css(progress, { 
          transition: 'none', 
          opacity: 1 
        });
        progress.offsetWidth; /* Repaint */

        setTimeout(function() {
          css(progress, { 
            transition: 'all ' + speed + 'ms linear', 
            opacity: 0 
          });
          setTimeout(function() {
            NProgress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(next, speed);
      }
    });

    return this;
  };

  NProgress.isStarted = function() {
    return typeof NProgress.status === 'number';
  };

  /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     NProgress.start();
   *
   */
  NProgress.start = function() {
    if (!NProgress.status) NProgress.set(0);

    var work = function() {
      setTimeout(function() {
        if (!NProgress.status) return;
        NProgress.trickle();
        work();
      }, Settings.trickleSpeed);
    };

    if (Settings.trickle) work();

    return this;
  };

  /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `done()` makes some placebo effect of some realistic motion.
   *
   *     NProgress.done();
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     NProgress.done(true);
   */

  NProgress.done = function(force) {
    if (!force && !NProgress.status) return this;

    return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
  };

  /**
   * Increments by a random amount.
   */

  NProgress.inc = function(amount) {
    var n = NProgress.status;

    if (!n) {
      return NProgress.start();
    } else {
      if (typeof amount !== 'number') {
        amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
      }

      n = clamp(n + amount, 0, 0.994);
      return NProgress.set(n);
    }
  };

  NProgress.trickle = function() {
    return NProgress.inc(Math.random() * Settings.trickleRate);
  };

  /**
   * Waits for all supplied jQuery promises and
   * increases the progress as the promises resolve.
   *
   * @param $promise jQUery Promise
   */
  (function() {
    var initial = 0, current = 0;

    NProgress.promise = function($promise) {
      if (!$promise || $promise.state() === "resolved") {
        return this;
      }

      if (current === 0) {
        NProgress.start();
      }

      initial++;
      current++;

      $promise.always(function() {
        current--;
        if (current === 0) {
            initial = 0;
            NProgress.done();
        } else {
            NProgress.set((initial - current) / initial);
        }
      });

      return this;
    };

  })();

  /**
   * (Internal) renders the progress bar markup based on the `template`
   * setting.
   */

  NProgress.render = function(fromStart) {
    if (NProgress.isRendered()) return document.getElementById('nprogress');

    addClass(document.documentElement, 'nprogress-busy');
    
    var progress = document.createElement('div');
    progress.id = 'nprogress';
    progress.innerHTML = Settings.template;

    var bar      = progress.querySelector(Settings.barSelector),
        perc     = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
        parent   = document.querySelector(Settings.parent),
        spinner;
    
    css(bar, {
      transition: 'all 0 linear',
      transform: 'translate3d(' + perc + '%,0,0)'
    });

    if (!Settings.showSpinner) {
      spinner = progress.querySelector(Settings.spinnerSelector);
      spinner && removeElement(spinner);
    }

    if (parent != document.body) {
      addClass(parent, 'nprogress-custom-parent');
    }

    parent.appendChild(progress);
    return progress;
  };

  /**
   * Removes the element. Opposite of render().
   */

  NProgress.remove = function() {
    removeClass(document.documentElement, 'nprogress-busy');
    removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent');
    var progress = document.getElementById('nprogress');
    progress && removeElement(progress);
  };

  /**
   * Checks if the progress bar is rendered.
   */

  NProgress.isRendered = function() {
    return !!document.getElementById('nprogress');
  };

  /**
   * Determine which positioning CSS rule to use.
   */

  NProgress.getPositioningCSS = function() {
    // Sniff on document.body.style
    var bodyStyle = document.body.style;

    // Sniff prefixes
    var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
                       ('MozTransform' in bodyStyle) ? 'Moz' :
                       ('msTransform' in bodyStyle) ? 'ms' :
                       ('OTransform' in bodyStyle) ? 'O' : '';

    if (vendorPrefix + 'Perspective' in bodyStyle) {
      // Modern browsers with 3D support, e.g. Webkit, IE10
      return 'translate3d';
    } else if (vendorPrefix + 'Transform' in bodyStyle) {
      // Browsers without 3D support, e.g. IE9
      return 'translate';
    } else {
      // Browsers without translate() support, e.g. IE7-8
      return 'margin';
    }
  };

  /**
   * Helpers
   */

  function clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  /**
   * (Internal) converts a percentage (`0..1`) to a bar translateX
   * percentage (`-100%..0%`).
   */

  function toBarPerc(n) {
    return (-1 + n) * 100;
  }


  /**
   * (Internal) returns the correct CSS for changing the bar's
   * position given an n percentage, and speed and ease from Settings
   */

  function barPositionCSS(n, speed, ease) {
    var barCSS;

    if (Settings.positionUsing === 'translate3d') {
      barCSS = { transform: 'translate3d('+toBarPerc(n)+'%,0,0)' };
    } else if (Settings.positionUsing === 'translate') {
      barCSS = { transform: 'translate('+toBarPerc(n)+'%,0)' };
    } else {
      barCSS = { 'margin-left': toBarPerc(n)+'%' };
    }

    barCSS.transition = 'all '+speed+'ms '+ease;

    return barCSS;
  }

  /**
   * (Internal) Queues a function to be executed.
   */

  var queue = (function() {
    var pending = [];
    
    function next() {
      var fn = pending.shift();
      if (fn) {
        fn(next);
      }
    }

    return function(fn) {
      pending.push(fn);
      if (pending.length == 1) next();
    };
  })();

  /**
   * (Internal) Applies css properties to an element, similar to the jQuery 
   * css method.
   *
   * While this helper does assist with vendor prefixed property names, it 
   * does not perform any manipulation of values prior to setting styles.
   */

  var css = (function() {
    var cssPrefixes = [ 'Webkit', 'O', 'Moz', 'ms' ],
        cssProps    = {};

    function camelCase(string) {
      return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
        return letter.toUpperCase();
      });
    }

    function getVendorProp(name) {
      var style = document.body.style;
      if (name in style) return name;

      var i = cssPrefixes.length,
          capName = name.charAt(0).toUpperCase() + name.slice(1),
          vendorName;
      while (i--) {
        vendorName = cssPrefixes[i] + capName;
        if (vendorName in style) return vendorName;
      }

      return name;
    }

    function getStyleProp(name) {
      name = camelCase(name);
      return cssProps[name] || (cssProps[name] = getVendorProp(name));
    }

    function applyCss(element, prop, value) {
      prop = getStyleProp(prop);
      element.style[prop] = value;
    }

    return function(element, properties) {
      var args = arguments,
          prop, 
          value;

      if (args.length == 2) {
        for (prop in properties) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
        }
      } else {
        applyCss(element, args[1], args[2]);
      }
    }
  })();

  /**
   * (Internal) Determines if an element or space separated list of class names contains a class name.
   */

  function hasClass(element, name) {
    var list = typeof element == 'string' ? element : classList(element);
    return list.indexOf(' ' + name + ' ') >= 0;
  }

  /**
   * (Internal) Adds a class to an element.
   */

  function addClass(element, name) {
    var oldList = classList(element),
        newList = oldList + name;

    if (hasClass(oldList, name)) return; 

    // Trim the opening space.
    element.className = newList.substring(1);
  }

  /**
   * (Internal) Removes a class from an element.
   */

  function removeClass(element, name) {
    var oldList = classList(element),
        newList;

    if (!hasClass(element, name)) return;

    // Replace the class name.
    newList = oldList.replace(' ' + name + ' ', ' ');

    // Trim the opening and closing spaces.
    element.className = newList.substring(1, newList.length - 1);
  }

  /**
   * (Internal) Gets a space separated list of the class names on the element. 
   * The list is wrapped with a single space on each end to facilitate finding 
   * matches within the list.
   */

  function classList(element) {
    return (' ' + (element.className || '') + ' ').replace(/\s+/gi, ' ');
  }

  /**
   * (Internal) Removes an element from the DOM.
   */

  function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
  }

  return NProgress;
});



/***/ }),

/***/ 8426:
/***/ ((module, exports) => {

/**
 * @param {string} string    The string to parse
 * @returns {Array<number>}  Returns an energetic array.
 */
function parsePart(string) {
  let res = [];
  let m;

  for (let str of string.split(",").map((str) => str.trim())) {
    // just a number
    if (/^-?\d+$/.test(str)) {
      res.push(parseInt(str, 10));
    } else if (
      (m = str.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/))
    ) {
      // 1-5 or 1..5 (equivalent) or 1...5 (doesn't include 5)
      let [_, lhs, sep, rhs] = m;

      if (lhs && rhs) {
        lhs = parseInt(lhs);
        rhs = parseInt(rhs);
        const incr = lhs < rhs ? 1 : -1;

        // Make it inclusive by moving the right 'stop-point' away by one.
        if (sep === "-" || sep === ".." || sep === "\u2025") rhs += incr;

        for (let i = lhs; i !== rhs; i += incr) res.push(i);
      }
    }
  }

  return res;
}

exports["default"] = parsePart;
module.exports = parsePart;


/***/ }),

/***/ 5302:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isarray = __webpack_require__(4634)

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options), options)
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens, options) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options))
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}


/***/ }),

/***/ 6969:
/***/ ((module) => {

var components = {"core":{"meta":{"path":"components/prism-core.js","option":"mandatory"},"core":"Core"},"themes":{"meta":{"path":"themes/{id}.css","link":"index.html?theme={id}","exclusive":true},"prism":{"title":"Default","option":"default"},"prism-dark":"Dark","prism-funky":"Funky","prism-okaidia":{"title":"Okaidia","owner":"ocodia"},"prism-twilight":{"title":"Twilight","owner":"remybach"},"prism-coy":{"title":"Coy","owner":"tshedor"},"prism-solarizedlight":{"title":"Solarized Light","owner":"hectormatos2011 "},"prism-tomorrow":{"title":"Tomorrow Night","owner":"Rosey"}},"languages":{"meta":{"path":"components/prism-{id}","noCSS":true,"examplesPath":"examples/prism-{id}","addCheckAll":true},"markup":{"title":"Markup","alias":["html","xml","svg","mathml","ssml","atom","rss"],"aliasTitles":{"html":"HTML","xml":"XML","svg":"SVG","mathml":"MathML","ssml":"SSML","atom":"Atom","rss":"RSS"},"option":"default"},"css":{"title":"CSS","option":"default","modify":"markup"},"clike":{"title":"C-like","option":"default"},"javascript":{"title":"JavaScript","require":"clike","modify":"markup","optional":"regex","alias":"js","option":"default"},"abap":{"title":"ABAP","owner":"dellagustin"},"abnf":{"title":"ABNF","owner":"RunDevelopment"},"actionscript":{"title":"ActionScript","require":"javascript","modify":"markup","owner":"Golmote"},"ada":{"title":"Ada","owner":"Lucretia"},"agda":{"title":"Agda","owner":"xy-ren"},"al":{"title":"AL","owner":"RunDevelopment"},"antlr4":{"title":"ANTLR4","alias":"g4","owner":"RunDevelopment"},"apacheconf":{"title":"Apache Configuration","owner":"GuiTeK"},"apex":{"title":"Apex","require":["clike","sql"],"owner":"RunDevelopment"},"apl":{"title":"APL","owner":"ngn"},"applescript":{"title":"AppleScript","owner":"Golmote"},"aql":{"title":"AQL","owner":"RunDevelopment"},"arduino":{"title":"Arduino","require":"cpp","alias":"ino","owner":"dkern"},"arff":{"title":"ARFF","owner":"Golmote"},"armasm":{"title":"ARM Assembly","alias":"arm-asm","owner":"RunDevelopment"},"arturo":{"title":"Arturo","alias":"art","optional":["bash","css","javascript","markup","markdown","sql"],"owner":"drkameleon"},"asciidoc":{"alias":"adoc","title":"AsciiDoc","owner":"Golmote"},"aspnet":{"title":"ASP.NET (C#)","require":["markup","csharp"],"owner":"nauzilus"},"asm6502":{"title":"6502 Assembly","owner":"kzurawel"},"asmatmel":{"title":"Atmel AVR Assembly","owner":"cerkit"},"autohotkey":{"title":"AutoHotkey","owner":"aviaryan"},"autoit":{"title":"AutoIt","owner":"Golmote"},"avisynth":{"title":"AviSynth","alias":"avs","owner":"Zinfidel"},"avro-idl":{"title":"Avro IDL","alias":"avdl","owner":"RunDevelopment"},"awk":{"title":"AWK","alias":"gawk","aliasTitles":{"gawk":"GAWK"},"owner":"RunDevelopment"},"bash":{"title":"Bash","alias":["sh","shell"],"aliasTitles":{"sh":"Shell","shell":"Shell"},"owner":"zeitgeist87"},"basic":{"title":"BASIC","owner":"Golmote"},"batch":{"title":"Batch","owner":"Golmote"},"bbcode":{"title":"BBcode","alias":"shortcode","aliasTitles":{"shortcode":"Shortcode"},"owner":"RunDevelopment"},"bbj":{"title":"BBj","owner":"hyyan"},"bicep":{"title":"Bicep","owner":"johnnyreilly"},"birb":{"title":"Birb","require":"clike","owner":"Calamity210"},"bison":{"title":"Bison","require":"c","owner":"Golmote"},"bnf":{"title":"BNF","alias":"rbnf","aliasTitles":{"rbnf":"RBNF"},"owner":"RunDevelopment"},"bqn":{"title":"BQN","owner":"yewscion"},"brainfuck":{"title":"Brainfuck","owner":"Golmote"},"brightscript":{"title":"BrightScript","owner":"RunDevelopment"},"bro":{"title":"Bro","owner":"wayward710"},"bsl":{"title":"BSL (1C:Enterprise)","alias":"oscript","aliasTitles":{"oscript":"OneScript"},"owner":"Diversus23"},"c":{"title":"C","require":"clike","owner":"zeitgeist87"},"csharp":{"title":"C#","require":"clike","alias":["cs","dotnet"],"owner":"mvalipour"},"cpp":{"title":"C++","require":"c","owner":"zeitgeist87"},"cfscript":{"title":"CFScript","require":"clike","alias":"cfc","owner":"mjclemente"},"chaiscript":{"title":"ChaiScript","require":["clike","cpp"],"owner":"RunDevelopment"},"cil":{"title":"CIL","owner":"sbrl"},"cilkc":{"title":"Cilk/C","require":"c","alias":"cilk-c","owner":"OpenCilk"},"cilkcpp":{"title":"Cilk/C++","require":"cpp","alias":["cilk-cpp","cilk"],"owner":"OpenCilk"},"clojure":{"title":"Clojure","owner":"troglotit"},"cmake":{"title":"CMake","owner":"mjrogozinski"},"cobol":{"title":"COBOL","owner":"RunDevelopment"},"coffeescript":{"title":"CoffeeScript","require":"javascript","alias":"coffee","owner":"R-osey"},"concurnas":{"title":"Concurnas","alias":"conc","owner":"jasontatton"},"csp":{"title":"Content-Security-Policy","owner":"ScottHelme"},"cooklang":{"title":"Cooklang","owner":"ahue"},"coq":{"title":"Coq","owner":"RunDevelopment"},"crystal":{"title":"Crystal","require":"ruby","owner":"MakeNowJust"},"css-extras":{"title":"CSS Extras","require":"css","modify":"css","owner":"milesj"},"csv":{"title":"CSV","owner":"RunDevelopment"},"cue":{"title":"CUE","owner":"RunDevelopment"},"cypher":{"title":"Cypher","owner":"RunDevelopment"},"d":{"title":"D","require":"clike","owner":"Golmote"},"dart":{"title":"Dart","require":"clike","owner":"Golmote"},"dataweave":{"title":"DataWeave","owner":"machaval"},"dax":{"title":"DAX","owner":"peterbud"},"dhall":{"title":"Dhall","owner":"RunDevelopment"},"diff":{"title":"Diff","owner":"uranusjr"},"django":{"title":"Django/Jinja2","require":"markup-templating","alias":"jinja2","owner":"romanvm"},"dns-zone-file":{"title":"DNS zone file","owner":"RunDevelopment","alias":"dns-zone"},"docker":{"title":"Docker","alias":"dockerfile","owner":"JustinBeckwith"},"dot":{"title":"DOT (Graphviz)","alias":"gv","optional":"markup","owner":"RunDevelopment"},"ebnf":{"title":"EBNF","owner":"RunDevelopment"},"editorconfig":{"title":"EditorConfig","owner":"osipxd"},"eiffel":{"title":"Eiffel","owner":"Conaclos"},"ejs":{"title":"EJS","require":["javascript","markup-templating"],"owner":"RunDevelopment","alias":"eta","aliasTitles":{"eta":"Eta"}},"elixir":{"title":"Elixir","owner":"Golmote"},"elm":{"title":"Elm","owner":"zwilias"},"etlua":{"title":"Embedded Lua templating","require":["lua","markup-templating"],"owner":"RunDevelopment"},"erb":{"title":"ERB","require":["ruby","markup-templating"],"owner":"Golmote"},"erlang":{"title":"Erlang","owner":"Golmote"},"excel-formula":{"title":"Excel Formula","alias":["xlsx","xls"],"owner":"RunDevelopment"},"fsharp":{"title":"F#","require":"clike","owner":"simonreynolds7"},"factor":{"title":"Factor","owner":"catb0t"},"false":{"title":"False","owner":"edukisto"},"firestore-security-rules":{"title":"Firestore security rules","require":"clike","owner":"RunDevelopment"},"flow":{"title":"Flow","require":"javascript","owner":"Golmote"},"fortran":{"title":"Fortran","owner":"Golmote"},"ftl":{"title":"FreeMarker Template Language","require":"markup-templating","owner":"RunDevelopment"},"gml":{"title":"GameMaker Language","alias":"gamemakerlanguage","require":"clike","owner":"LiarOnce"},"gap":{"title":"GAP (CAS)","owner":"RunDevelopment"},"gcode":{"title":"G-code","owner":"RunDevelopment"},"gdscript":{"title":"GDScript","owner":"RunDevelopment"},"gedcom":{"title":"GEDCOM","owner":"Golmote"},"gettext":{"title":"gettext","alias":"po","owner":"RunDevelopment"},"gherkin":{"title":"Gherkin","owner":"hason"},"git":{"title":"Git","owner":"lgiraudel"},"glsl":{"title":"GLSL","require":"c","owner":"Golmote"},"gn":{"title":"GN","alias":"gni","owner":"RunDevelopment"},"linker-script":{"title":"GNU Linker Script","alias":"ld","owner":"RunDevelopment"},"go":{"title":"Go","require":"clike","owner":"arnehormann"},"go-module":{"title":"Go module","alias":"go-mod","owner":"RunDevelopment"},"gradle":{"title":"Gradle","require":"clike","owner":"zeabdelkhalek-badido18"},"graphql":{"title":"GraphQL","optional":"markdown","owner":"Golmote"},"groovy":{"title":"Groovy","require":"clike","owner":"robfletcher"},"haml":{"title":"Haml","require":"ruby","optional":["css","css-extras","coffeescript","erb","javascript","less","markdown","scss","textile"],"owner":"Golmote"},"handlebars":{"title":"Handlebars","require":"markup-templating","alias":["hbs","mustache"],"aliasTitles":{"mustache":"Mustache"},"owner":"Golmote"},"haskell":{"title":"Haskell","alias":"hs","owner":"bholst"},"haxe":{"title":"Haxe","require":"clike","optional":"regex","owner":"Golmote"},"hcl":{"title":"HCL","owner":"outsideris"},"hlsl":{"title":"HLSL","require":"c","owner":"RunDevelopment"},"hoon":{"title":"Hoon","owner":"matildepark"},"http":{"title":"HTTP","optional":["csp","css","hpkp","hsts","javascript","json","markup","uri"],"owner":"danielgtaylor"},"hpkp":{"title":"HTTP Public-Key-Pins","owner":"ScottHelme"},"hsts":{"title":"HTTP Strict-Transport-Security","owner":"ScottHelme"},"ichigojam":{"title":"IchigoJam","owner":"BlueCocoa"},"icon":{"title":"Icon","owner":"Golmote"},"icu-message-format":{"title":"ICU Message Format","owner":"RunDevelopment"},"idris":{"title":"Idris","alias":"idr","owner":"KeenS","require":"haskell"},"ignore":{"title":".ignore","owner":"osipxd","alias":["gitignore","hgignore","npmignore"],"aliasTitles":{"gitignore":".gitignore","hgignore":".hgignore","npmignore":".npmignore"}},"inform7":{"title":"Inform 7","owner":"Golmote"},"ini":{"title":"Ini","owner":"aviaryan"},"io":{"title":"Io","owner":"AlesTsurko"},"j":{"title":"J","owner":"Golmote"},"java":{"title":"Java","require":"clike","owner":"sherblot"},"javadoc":{"title":"JavaDoc","require":["markup","java","javadoclike"],"modify":"java","optional":"scala","owner":"RunDevelopment"},"javadoclike":{"title":"JavaDoc-like","modify":["java","javascript","php"],"owner":"RunDevelopment"},"javastacktrace":{"title":"Java stack trace","owner":"RunDevelopment"},"jexl":{"title":"Jexl","owner":"czosel"},"jolie":{"title":"Jolie","require":"clike","owner":"thesave"},"jq":{"title":"JQ","owner":"RunDevelopment"},"jsdoc":{"title":"JSDoc","require":["javascript","javadoclike","typescript"],"modify":"javascript","optional":["actionscript","coffeescript"],"owner":"RunDevelopment"},"js-extras":{"title":"JS Extras","require":"javascript","modify":"javascript","optional":["actionscript","coffeescript","flow","n4js","typescript"],"owner":"RunDevelopment"},"json":{"title":"JSON","alias":"webmanifest","aliasTitles":{"webmanifest":"Web App Manifest"},"owner":"CupOfTea696"},"json5":{"title":"JSON5","require":"json","owner":"RunDevelopment"},"jsonp":{"title":"JSONP","require":"json","owner":"RunDevelopment"},"jsstacktrace":{"title":"JS stack trace","owner":"sbrl"},"js-templates":{"title":"JS Templates","require":"javascript","modify":"javascript","optional":["css","css-extras","graphql","markdown","markup","sql"],"owner":"RunDevelopment"},"julia":{"title":"Julia","owner":"cdagnino"},"keepalived":{"title":"Keepalived Configure","owner":"dev-itsheng"},"keyman":{"title":"Keyman","owner":"mcdurdin"},"kotlin":{"title":"Kotlin","alias":["kt","kts"],"aliasTitles":{"kts":"Kotlin Script"},"require":"clike","owner":"Golmote"},"kumir":{"title":"KuMir (КуМир)","alias":"kum","owner":"edukisto"},"kusto":{"title":"Kusto","owner":"RunDevelopment"},"latex":{"title":"LaTeX","alias":["tex","context"],"aliasTitles":{"tex":"TeX","context":"ConTeXt"},"owner":"japborst"},"latte":{"title":"Latte","require":["clike","markup-templating","php"],"owner":"nette"},"less":{"title":"Less","require":"css","optional":"css-extras","owner":"Golmote"},"lilypond":{"title":"LilyPond","require":"scheme","alias":"ly","owner":"RunDevelopment"},"liquid":{"title":"Liquid","require":"markup-templating","owner":"cinhtau"},"lisp":{"title":"Lisp","alias":["emacs","elisp","emacs-lisp"],"owner":"JuanCaicedo"},"livescript":{"title":"LiveScript","owner":"Golmote"},"llvm":{"title":"LLVM IR","owner":"porglezomp"},"log":{"title":"Log file","optional":"javastacktrace","owner":"RunDevelopment"},"lolcode":{"title":"LOLCODE","owner":"Golmote"},"lua":{"title":"Lua","owner":"Golmote"},"magma":{"title":"Magma (CAS)","owner":"RunDevelopment"},"makefile":{"title":"Makefile","owner":"Golmote"},"markdown":{"title":"Markdown","require":"markup","optional":"yaml","alias":"md","owner":"Golmote"},"markup-templating":{"title":"Markup templating","require":"markup","owner":"Golmote"},"mata":{"title":"Mata","owner":"RunDevelopment"},"matlab":{"title":"MATLAB","owner":"Golmote"},"maxscript":{"title":"MAXScript","owner":"RunDevelopment"},"mel":{"title":"MEL","owner":"Golmote"},"mermaid":{"title":"Mermaid","owner":"RunDevelopment"},"metafont":{"title":"METAFONT","owner":"LaeriExNihilo"},"mizar":{"title":"Mizar","owner":"Golmote"},"mongodb":{"title":"MongoDB","owner":"airs0urce","require":"javascript"},"monkey":{"title":"Monkey","owner":"Golmote"},"moonscript":{"title":"MoonScript","alias":"moon","owner":"RunDevelopment"},"n1ql":{"title":"N1QL","owner":"TMWilds"},"n4js":{"title":"N4JS","require":"javascript","optional":"jsdoc","alias":"n4jsd","owner":"bsmith-n4"},"nand2tetris-hdl":{"title":"Nand To Tetris HDL","owner":"stephanmax"},"naniscript":{"title":"Naninovel Script","owner":"Elringus","alias":"nani"},"nasm":{"title":"NASM","owner":"rbmj"},"neon":{"title":"NEON","owner":"nette"},"nevod":{"title":"Nevod","owner":"nezaboodka"},"nginx":{"title":"nginx","owner":"volado"},"nim":{"title":"Nim","owner":"Golmote"},"nix":{"title":"Nix","owner":"Golmote"},"nsis":{"title":"NSIS","owner":"idleberg"},"objectivec":{"title":"Objective-C","require":"c","alias":"objc","owner":"uranusjr"},"ocaml":{"title":"OCaml","owner":"Golmote"},"odin":{"title":"Odin","owner":"edukisto"},"opencl":{"title":"OpenCL","require":"c","modify":["c","cpp"],"owner":"Milania1"},"openqasm":{"title":"OpenQasm","alias":"qasm","owner":"RunDevelopment"},"oz":{"title":"Oz","owner":"Golmote"},"parigp":{"title":"PARI/GP","owner":"Golmote"},"parser":{"title":"Parser","require":"markup","owner":"Golmote"},"pascal":{"title":"Pascal","alias":"objectpascal","aliasTitles":{"objectpascal":"Object Pascal"},"owner":"Golmote"},"pascaligo":{"title":"Pascaligo","owner":"DefinitelyNotAGoat"},"psl":{"title":"PATROL Scripting Language","owner":"bertysentry"},"pcaxis":{"title":"PC-Axis","alias":"px","owner":"RunDevelopment"},"peoplecode":{"title":"PeopleCode","alias":"pcode","owner":"RunDevelopment"},"perl":{"title":"Perl","owner":"Golmote"},"php":{"title":"PHP","require":"markup-templating","owner":"milesj"},"phpdoc":{"title":"PHPDoc","require":["php","javadoclike"],"modify":"php","owner":"RunDevelopment"},"php-extras":{"title":"PHP Extras","require":"php","modify":"php","owner":"milesj"},"plant-uml":{"title":"PlantUML","alias":"plantuml","owner":"RunDevelopment"},"plsql":{"title":"PL/SQL","require":"sql","owner":"Golmote"},"powerquery":{"title":"PowerQuery","alias":["pq","mscript"],"owner":"peterbud"},"powershell":{"title":"PowerShell","owner":"nauzilus"},"processing":{"title":"Processing","require":"clike","owner":"Golmote"},"prolog":{"title":"Prolog","owner":"Golmote"},"promql":{"title":"PromQL","owner":"arendjr"},"properties":{"title":".properties","owner":"Golmote"},"protobuf":{"title":"Protocol Buffers","require":"clike","owner":"just-boris"},"pug":{"title":"Pug","require":["markup","javascript"],"optional":["coffeescript","ejs","handlebars","less","livescript","markdown","scss","stylus","twig"],"owner":"Golmote"},"puppet":{"title":"Puppet","owner":"Golmote"},"pure":{"title":"Pure","optional":["c","cpp","fortran"],"owner":"Golmote"},"purebasic":{"title":"PureBasic","require":"clike","alias":"pbfasm","owner":"HeX0R101"},"purescript":{"title":"PureScript","require":"haskell","alias":"purs","owner":"sriharshachilakapati"},"python":{"title":"Python","alias":"py","owner":"multipetros"},"qsharp":{"title":"Q#","require":"clike","alias":"qs","owner":"fedonman"},"q":{"title":"Q (kdb+ database)","owner":"Golmote"},"qml":{"title":"QML","require":"javascript","owner":"RunDevelopment"},"qore":{"title":"Qore","require":"clike","owner":"temnroegg"},"r":{"title":"R","owner":"Golmote"},"racket":{"title":"Racket","require":"scheme","alias":"rkt","owner":"RunDevelopment"},"cshtml":{"title":"Razor C#","alias":"razor","require":["markup","csharp"],"optional":["css","css-extras","javascript","js-extras"],"owner":"RunDevelopment"},"jsx":{"title":"React JSX","require":["markup","javascript"],"optional":["jsdoc","js-extras","js-templates"],"owner":"vkbansal"},"tsx":{"title":"React TSX","require":["jsx","typescript"]},"reason":{"title":"Reason","require":"clike","owner":"Golmote"},"regex":{"title":"Regex","owner":"RunDevelopment"},"rego":{"title":"Rego","owner":"JordanSh"},"renpy":{"title":"Ren'py","alias":"rpy","owner":"HyuchiaDiego"},"rescript":{"title":"ReScript","alias":"res","owner":"vmarcosp"},"rest":{"title":"reST (reStructuredText)","owner":"Golmote"},"rip":{"title":"Rip","owner":"ravinggenius"},"roboconf":{"title":"Roboconf","owner":"Golmote"},"robotframework":{"title":"Robot Framework","alias":"robot","owner":"RunDevelopment"},"ruby":{"title":"Ruby","require":"clike","alias":"rb","owner":"samflores"},"rust":{"title":"Rust","owner":"Golmote"},"sas":{"title":"SAS","optional":["groovy","lua","sql"],"owner":"Golmote"},"sass":{"title":"Sass (Sass)","require":"css","optional":"css-extras","owner":"Golmote"},"scss":{"title":"Sass (SCSS)","require":"css","optional":"css-extras","owner":"MoOx"},"scala":{"title":"Scala","require":"java","owner":"jozic"},"scheme":{"title":"Scheme","owner":"bacchus123"},"shell-session":{"title":"Shell session","require":"bash","alias":["sh-session","shellsession"],"owner":"RunDevelopment"},"smali":{"title":"Smali","owner":"RunDevelopment"},"smalltalk":{"title":"Smalltalk","owner":"Golmote"},"smarty":{"title":"Smarty","require":"markup-templating","optional":"php","owner":"Golmote"},"sml":{"title":"SML","alias":"smlnj","aliasTitles":{"smlnj":"SML/NJ"},"owner":"RunDevelopment"},"solidity":{"title":"Solidity (Ethereum)","alias":"sol","require":"clike","owner":"glachaud"},"solution-file":{"title":"Solution file","alias":"sln","owner":"RunDevelopment"},"soy":{"title":"Soy (Closure Template)","require":"markup-templating","owner":"Golmote"},"sparql":{"title":"SPARQL","require":"turtle","owner":"Triply-Dev","alias":"rq"},"splunk-spl":{"title":"Splunk SPL","owner":"RunDevelopment"},"sqf":{"title":"SQF: Status Quo Function (Arma 3)","require":"clike","owner":"RunDevelopment"},"sql":{"title":"SQL","owner":"multipetros"},"squirrel":{"title":"Squirrel","require":"clike","owner":"RunDevelopment"},"stan":{"title":"Stan","owner":"RunDevelopment"},"stata":{"title":"Stata Ado","require":["mata","java","python"],"owner":"RunDevelopment"},"iecst":{"title":"Structured Text (IEC 61131-3)","owner":"serhioromano"},"stylus":{"title":"Stylus","owner":"vkbansal"},"supercollider":{"title":"SuperCollider","alias":"sclang","owner":"RunDevelopment"},"swift":{"title":"Swift","owner":"chrischares"},"systemd":{"title":"Systemd configuration file","owner":"RunDevelopment"},"t4-templating":{"title":"T4 templating","owner":"RunDevelopment"},"t4-cs":{"title":"T4 Text Templates (C#)","require":["t4-templating","csharp"],"alias":"t4","owner":"RunDevelopment"},"t4-vb":{"title":"T4 Text Templates (VB)","require":["t4-templating","vbnet"],"owner":"RunDevelopment"},"tap":{"title":"TAP","owner":"isaacs","require":"yaml"},"tcl":{"title":"Tcl","owner":"PeterChaplin"},"tt2":{"title":"Template Toolkit 2","require":["clike","markup-templating"],"owner":"gflohr"},"textile":{"title":"Textile","require":"markup","optional":"css","owner":"Golmote"},"toml":{"title":"TOML","owner":"RunDevelopment"},"tremor":{"title":"Tremor","alias":["trickle","troy"],"owner":"darach","aliasTitles":{"trickle":"trickle","troy":"troy"}},"turtle":{"title":"Turtle","alias":"trig","aliasTitles":{"trig":"TriG"},"owner":"jakubklimek"},"twig":{"title":"Twig","require":"markup-templating","owner":"brandonkelly"},"typescript":{"title":"TypeScript","require":"javascript","optional":"js-templates","alias":"ts","owner":"vkbansal"},"typoscript":{"title":"TypoScript","alias":"tsconfig","aliasTitles":{"tsconfig":"TSConfig"},"owner":"dkern"},"unrealscript":{"title":"UnrealScript","alias":["uscript","uc"],"owner":"RunDevelopment"},"uorazor":{"title":"UO Razor Script","owner":"jaseowns"},"uri":{"title":"URI","alias":"url","aliasTitles":{"url":"URL"},"owner":"RunDevelopment"},"v":{"title":"V","require":"clike","owner":"taggon"},"vala":{"title":"Vala","require":"clike","optional":"regex","owner":"TemplarVolk"},"vbnet":{"title":"VB.Net","require":"basic","owner":"Bigsby"},"velocity":{"title":"Velocity","require":"markup","owner":"Golmote"},"verilog":{"title":"Verilog","owner":"a-rey"},"vhdl":{"title":"VHDL","owner":"a-rey"},"vim":{"title":"vim","owner":"westonganger"},"visual-basic":{"title":"Visual Basic","alias":["vb","vba"],"aliasTitles":{"vba":"VBA"},"owner":"Golmote"},"warpscript":{"title":"WarpScript","owner":"RunDevelopment"},"wasm":{"title":"WebAssembly","owner":"Golmote"},"web-idl":{"title":"Web IDL","alias":"webidl","owner":"RunDevelopment"},"wgsl":{"title":"WGSL","owner":"Dr4gonthree"},"wiki":{"title":"Wiki markup","require":"markup","owner":"Golmote"},"wolfram":{"title":"Wolfram language","alias":["mathematica","nb","wl"],"aliasTitles":{"mathematica":"Mathematica","nb":"Mathematica Notebook"},"owner":"msollami"},"wren":{"title":"Wren","owner":"clsource"},"xeora":{"title":"Xeora","require":"markup","alias":"xeoracube","aliasTitles":{"xeoracube":"XeoraCube"},"owner":"freakmaxi"},"xml-doc":{"title":"XML doc (.net)","require":"markup","modify":["csharp","fsharp","vbnet"],"owner":"RunDevelopment"},"xojo":{"title":"Xojo (REALbasic)","owner":"Golmote"},"xquery":{"title":"XQuery","require":"markup","owner":"Golmote"},"yaml":{"title":"YAML","alias":"yml","owner":"hason"},"yang":{"title":"YANG","owner":"RunDevelopment"},"zig":{"title":"Zig","owner":"RunDevelopment"}},"plugins":{"meta":{"path":"plugins/{id}/prism-{id}","link":"plugins/{id}/"},"line-highlight":{"title":"Line Highlight","description":"Highlights specific lines and/or line ranges."},"line-numbers":{"title":"Line Numbers","description":"Line number at the beginning of code lines.","owner":"kuba-kubula"},"show-invisibles":{"title":"Show Invisibles","description":"Show hidden characters such as tabs and line breaks.","optional":["autolinker","data-uri-highlight"]},"autolinker":{"title":"Autolinker","description":"Converts URLs and emails in code to clickable links. Parses Markdown links in comments."},"wpd":{"title":"WebPlatform Docs","description":"Makes tokens link to <a href=\"https://webplatform.github.io/docs/\">WebPlatform.org documentation</a>. The links open in a new tab."},"custom-class":{"title":"Custom Class","description":"This plugin allows you to prefix Prism's default classes (<code>.comment</code> can become <code>.namespace--comment</code>) or replace them with your defined ones (like <code>.editor__comment</code>). You can even add new classes.","owner":"dvkndn","noCSS":true},"file-highlight":{"title":"File Highlight","description":"Fetch external files and highlight them with Prism. Used on the Prism website itself.","noCSS":true},"show-language":{"title":"Show Language","description":"Display the highlighted language in code blocks (inline code does not show the label).","owner":"nauzilus","noCSS":true,"require":"toolbar"},"jsonp-highlight":{"title":"JSONP Highlight","description":"Fetch content with JSONP and highlight some interesting content (e.g. GitHub/Gists or Bitbucket API).","noCSS":true,"owner":"nauzilus"},"highlight-keywords":{"title":"Highlight Keywords","description":"Adds special CSS classes for each keyword for fine-grained highlighting.","owner":"vkbansal","noCSS":true},"remove-initial-line-feed":{"title":"Remove initial line feed","description":"Removes the initial line feed in code blocks.","owner":"Golmote","noCSS":true},"inline-color":{"title":"Inline color","description":"Adds a small inline preview for colors in style sheets.","require":"css-extras","owner":"RunDevelopment"},"previewers":{"title":"Previewers","description":"Previewers for angles, colors, gradients, easing and time.","require":"css-extras","owner":"Golmote"},"autoloader":{"title":"Autoloader","description":"Automatically loads the needed languages to highlight the code blocks.","owner":"Golmote","noCSS":true},"keep-markup":{"title":"Keep Markup","description":"Prevents custom markup from being dropped out during highlighting.","owner":"Golmote","optional":"normalize-whitespace","noCSS":true},"command-line":{"title":"Command Line","description":"Display a command line with a prompt and, optionally, the output/response from the commands.","owner":"chriswells0"},"unescaped-markup":{"title":"Unescaped Markup","description":"Write markup without having to escape anything."},"normalize-whitespace":{"title":"Normalize Whitespace","description":"Supports multiple operations to normalize whitespace in code blocks.","owner":"zeitgeist87","optional":"unescaped-markup","noCSS":true},"data-uri-highlight":{"title":"Data-URI Highlight","description":"Highlights data-URI contents.","owner":"Golmote","noCSS":true},"toolbar":{"title":"Toolbar","description":"Attach a toolbar for plugins to easily register buttons on the top of a code block.","owner":"mAAdhaTTah"},"copy-to-clipboard":{"title":"Copy to Clipboard Button","description":"Add a button that copies the code block to the clipboard when clicked.","owner":"mAAdhaTTah","require":"toolbar","noCSS":true},"download-button":{"title":"Download Button","description":"A button in the toolbar of a code block adding a convenient way to download a code file.","owner":"Golmote","require":"toolbar","noCSS":true},"match-braces":{"title":"Match braces","description":"Highlights matching braces.","owner":"RunDevelopment"},"diff-highlight":{"title":"Diff Highlight","description":"Highlights the code inside diff blocks.","owner":"RunDevelopment","require":"diff"},"filter-highlight-all":{"title":"Filter highlightAll","description":"Filters the elements the <code>highlightAll</code> and <code>highlightAllUnder</code> methods actually highlight.","owner":"RunDevelopment","noCSS":true},"treeview":{"title":"Treeview","description":"A language with special styles to highlight file system tree structures.","owner":"Golmote"}}};
if ( true && module.exports) { module.exports = components; }

/***/ }),

/***/ 8722:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const components = __webpack_require__(6969);
const getLoader = __webpack_require__(8380);


/**
 * The set of all languages which have been loaded using the below function.
 *
 * @type {Set<string>}
 */
const loadedLanguages = new Set();

/**
 * Loads the given languages and adds them to the current Prism instance.
 *
 * If no languages are provided, __all__ Prism languages will be loaded.
 *
 * @param {string|string[]} [languages]
 * @returns {void}
 */
function loadLanguages(languages) {
	if (languages === undefined) {
		languages = Object.keys(components.languages).filter(l => l != 'meta');
	} else if (!Array.isArray(languages)) {
		languages = [languages];
	}

	// the user might have loaded languages via some other way or used `prism.js` which already includes some
	// we don't need to validate the ids because `getLoader` will ignore invalid ones
	const loaded = [...loadedLanguages, ...Object.keys(Prism.languages)];

	getLoader(components, languages, loaded).load(lang => {
		if (!(lang in components.languages)) {
			if (!loadLanguages.silent) {
				console.warn('Language does not exist: ' + lang);
			}
			return;
		}

		const pathToLanguage = './prism-' + lang;

		// remove from require cache and from Prism
		delete __webpack_require__.c[/*require.resolve*/(__webpack_require__(3157).resolve(pathToLanguage))];
		delete Prism.languages[lang];

		__webpack_require__(3157)(pathToLanguage);

		loadedLanguages.add(lang);
	});
}

/**
 * Set this to `true` to prevent all warning messages `loadLanguages` logs.
 */
loadLanguages.silent = false;

module.exports = loadLanguages;


/***/ }),

/***/ 9700:
/***/ (() => {

(function (Prism) {

	/**
	 * Returns the placeholder for the given language id and index.
	 *
	 * @param {string} language
	 * @param {string|number} index
	 * @returns {string}
	 */
	function getPlaceholder(language, index) {
		return '___' + language.toUpperCase() + index + '___';
	}

	Object.defineProperties(Prism.languages['markup-templating'] = {}, {
		buildPlaceholders: {
			/**
			 * Tokenize all inline templating expressions matching `placeholderPattern`.
			 *
			 * If `replaceFilter` is provided, only matches of `placeholderPattern` for which `replaceFilter` returns
			 * `true` will be replaced.
			 *
			 * @param {object} env The environment of the `before-tokenize` hook.
			 * @param {string} language The language id.
			 * @param {RegExp} placeholderPattern The matches of this pattern will be replaced by placeholders.
			 * @param {(match: string) => boolean} [replaceFilter]
			 */
			value: function (env, language, placeholderPattern, replaceFilter) {
				if (env.language !== language) {
					return;
				}

				var tokenStack = env.tokenStack = [];

				env.code = env.code.replace(placeholderPattern, function (match) {
					if (typeof replaceFilter === 'function' && !replaceFilter(match)) {
						return match;
					}
					var i = tokenStack.length;
					var placeholder;

					// Check for existing strings
					while (env.code.indexOf(placeholder = getPlaceholder(language, i)) !== -1) {
						++i;
					}

					// Create a sparse array
					tokenStack[i] = match;

					return placeholder;
				});

				// Switch the grammar to markup
				env.grammar = Prism.languages.markup;
			}
		},
		tokenizePlaceholders: {
			/**
			 * Replace placeholders with proper tokens after tokenizing.
			 *
			 * @param {object} env The environment of the `after-tokenize` hook.
			 * @param {string} language The language id.
			 */
			value: function (env, language) {
				if (env.language !== language || !env.tokenStack) {
					return;
				}

				// Switch the grammar back
				env.grammar = Prism.languages[language];

				var j = 0;
				var keys = Object.keys(env.tokenStack);

				function walkTokens(tokens) {
					for (var i = 0; i < tokens.length; i++) {
						// all placeholders are replaced already
						if (j >= keys.length) {
							break;
						}

						var token = tokens[i];
						if (typeof token === 'string' || (token.content && typeof token.content === 'string')) {
							var k = keys[j];
							var t = env.tokenStack[k];
							var s = typeof token === 'string' ? token : token.content;
							var placeholder = getPlaceholder(language, k);

							var index = s.indexOf(placeholder);
							if (index > -1) {
								++j;

								var before = s.substring(0, index);
								var middle = new Prism.Token(language, Prism.tokenize(t, env.grammar), 'language-' + language, t);
								var after = s.substring(index + placeholder.length);

								var replacement = [];
								if (before) {
									replacement.push.apply(replacement, walkTokens([before]));
								}
								replacement.push(middle);
								if (after) {
									replacement.push.apply(replacement, walkTokens([after]));
								}

								if (typeof token === 'string') {
									tokens.splice.apply(tokens, [i, 1].concat(replacement));
								} else {
									token.content = replacement;
								}
							}
						} else if (token.content /* && typeof token.content !== 'string' */) {
							walkTokens(token.content);
						}
					}

					return tokens;
				}

				walkTokens(env.tokens);
			}
		}
	});

}(Prism));


/***/ }),

/***/ 8692:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./": 8722
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 8692;

/***/ }),

/***/ 3157:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./": 8722
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 3157;

/***/ }),

/***/ 8380:
/***/ ((module) => {

"use strict";


/**
 * @typedef {Object<string, ComponentCategory>} Components
 * @typedef {Object<string, ComponentEntry | string>} ComponentCategory
 *
 * @typedef ComponentEntry
 * @property {string} [title] The title of the component.
 * @property {string} [owner] The GitHub user name of the owner.
 * @property {boolean} [noCSS=false] Whether the component doesn't have style sheets which should also be loaded.
 * @property {string | string[]} [alias] An optional list of aliases for the id of the component.
 * @property {Object<string, string>} [aliasTitles] An optional map from an alias to its title.
 *
 * Aliases which are not in this map will the get title of the component.
 * @property {string | string[]} [optional]
 * @property {string | string[]} [require]
 * @property {string | string[]} [modify]
 */

var getLoader = (function () {

	/**
	 * A function which does absolutely nothing.
	 *
	 * @type {any}
	 */
	var noop = function () { };

	/**
	 * Invokes the given callback for all elements of the given value.
	 *
	 * If the given value is an array, the callback will be invokes for all elements. If the given value is `null` or
	 * `undefined`, the callback will not be invoked. In all other cases, the callback will be invoked with the given
	 * value as parameter.
	 *
	 * @param {null | undefined | T | T[]} value
	 * @param {(value: T, index: number) => void} callbackFn
	 * @returns {void}
	 * @template T
	 */
	function forEach(value, callbackFn) {
		if (Array.isArray(value)) {
			value.forEach(callbackFn);
		} else if (value != null) {
			callbackFn(value, 0);
		}
	}

	/**
	 * Returns a new set for the given string array.
	 *
	 * @param {string[]} array
	 * @returns {StringSet}
	 *
	 * @typedef {Object<string, true>} StringSet
	 */
	function toSet(array) {
		/** @type {StringSet} */
		var set = {};
		for (var i = 0, l = array.length; i < l; i++) {
			set[array[i]] = true;
		}
		return set;
	}

	/**
	 * Creates a map of every components id to its entry.
	 *
	 * @param {Components} components
	 * @returns {EntryMap}
	 *
	 * @typedef {{ readonly [id: string]: Readonly<ComponentEntry> | undefined }} EntryMap
	 */
	function createEntryMap(components) {
		/** @type {Object<string, Readonly<ComponentEntry>>} */
		var map = {};

		for (var categoryName in components) {
			var category = components[categoryName];
			for (var id in category) {
				if (id != 'meta') {
					/** @type {ComponentEntry | string} */
					var entry = category[id];
					map[id] = typeof entry == 'string' ? { title: entry } : entry;
				}
			}
		}

		return map;
	}

	/**
	 * Creates a full dependencies map which includes all types of dependencies and their transitive dependencies.
	 *
	 * @param {EntryMap} entryMap
	 * @returns {DependencyResolver}
	 *
	 * @typedef {(id: string) => StringSet} DependencyResolver
	 */
	function createDependencyResolver(entryMap) {
		/** @type {Object<string, StringSet>} */
		var map = {};
		var _stackArray = [];

		/**
		 * Adds the dependencies of the given component to the dependency map.
		 *
		 * @param {string} id
		 * @param {string[]} stack
		 */
		function addToMap(id, stack) {
			if (id in map) {
				return;
			}

			stack.push(id);

			// check for circular dependencies
			var firstIndex = stack.indexOf(id);
			if (firstIndex < stack.length - 1) {
				throw new Error('Circular dependency: ' + stack.slice(firstIndex).join(' -> '));
			}

			/** @type {StringSet} */
			var dependencies = {};

			var entry = entryMap[id];
			if (entry) {
				/**
				 * This will add the direct dependency and all of its transitive dependencies to the set of
				 * dependencies of `entry`.
				 *
				 * @param {string} depId
				 * @returns {void}
				 */
				function handleDirectDependency(depId) {
					if (!(depId in entryMap)) {
						throw new Error(id + ' depends on an unknown component ' + depId);
					}
					if (depId in dependencies) {
						// if the given dependency is already in the set of deps, then so are its transitive deps
						return;
					}

					addToMap(depId, stack);
					dependencies[depId] = true;
					for (var transitiveDepId in map[depId]) {
						dependencies[transitiveDepId] = true;
					}
				}

				forEach(entry.require, handleDirectDependency);
				forEach(entry.optional, handleDirectDependency);
				forEach(entry.modify, handleDirectDependency);
			}

			map[id] = dependencies;

			stack.pop();
		}

		return function (id) {
			var deps = map[id];
			if (!deps) {
				addToMap(id, _stackArray);
				deps = map[id];
			}
			return deps;
		};
	}

	/**
	 * Returns a function which resolves the aliases of its given id of alias.
	 *
	 * @param {EntryMap} entryMap
	 * @returns {(idOrAlias: string) => string}
	 */
	function createAliasResolver(entryMap) {
		/** @type {Object<string, string> | undefined} */
		var map;

		return function (idOrAlias) {
			if (idOrAlias in entryMap) {
				return idOrAlias;
			} else {
				// only create the alias map if necessary
				if (!map) {
					map = {};

					for (var id in entryMap) {
						var entry = entryMap[id];
						forEach(entry && entry.alias, function (alias) {
							if (alias in map) {
								throw new Error(alias + ' cannot be alias for both ' + id + ' and ' + map[alias]);
							}
							if (alias in entryMap) {
								throw new Error(alias + ' cannot be alias of ' + id + ' because it is a component.');
							}
							map[alias] = id;
						});
					}
				}
				return map[idOrAlias] || idOrAlias;
			}
		};
	}

	/**
	 * @typedef LoadChainer
	 * @property {(before: T, after: () => T) => T} series
	 * @property {(values: T[]) => T} parallel
	 * @template T
	 */

	/**
	 * Creates an implicit DAG from the given components and dependencies and call the given `loadComponent` for each
	 * component in topological order.
	 *
	 * @param {DependencyResolver} dependencyResolver
	 * @param {StringSet} ids
	 * @param {(id: string) => T} loadComponent
	 * @param {LoadChainer<T>} [chainer]
	 * @returns {T}
	 * @template T
	 */
	function loadComponentsInOrder(dependencyResolver, ids, loadComponent, chainer) {
		var series = chainer ? chainer.series : undefined;
		var parallel = chainer ? chainer.parallel : noop;

		/** @type {Object<string, T>} */
		var cache = {};

		/**
		 * A set of ids of nodes which are not depended upon by any other node in the graph.
		 *
		 * @type {StringSet}
		 */
		var ends = {};

		/**
		 * Loads the given component and its dependencies or returns the cached value.
		 *
		 * @param {string} id
		 * @returns {T}
		 */
		function handleId(id) {
			if (id in cache) {
				return cache[id];
			}

			// assume that it's an end
			// if it isn't, it will be removed later
			ends[id] = true;

			// all dependencies of the component in the given ids
			var dependsOn = [];
			for (var depId in dependencyResolver(id)) {
				if (depId in ids) {
					dependsOn.push(depId);
				}
			}

			/**
			 * The value to be returned.
			 *
			 * @type {T}
			 */
			var value;

			if (dependsOn.length === 0) {
				value = loadComponent(id);
			} else {
				var depsValue = parallel(dependsOn.map(function (depId) {
					var value = handleId(depId);
					// none of the dependencies can be ends
					delete ends[depId];
					return value;
				}));
				if (series) {
					// the chainer will be responsibly for calling the function calling loadComponent
					value = series(depsValue, function () { return loadComponent(id); });
				} else {
					// we don't have a chainer, so we call loadComponent ourselves
					loadComponent(id);
				}
			}

			// cache and return
			return cache[id] = value;
		}

		for (var id in ids) {
			handleId(id);
		}

		/** @type {T[]} */
		var endValues = [];
		for (var endId in ends) {
			endValues.push(cache[endId]);
		}
		return parallel(endValues);
	}

	/**
	 * Returns whether the given object has any keys.
	 *
	 * @param {object} obj
	 */
	function hasKeys(obj) {
		for (var key in obj) {
			return true;
		}
		return false;
	}

	/**
	 * Returns an object which provides methods to get the ids of the components which have to be loaded (`getIds`) and
	 * a way to efficiently load them in synchronously and asynchronous contexts (`load`).
	 *
	 * The set of ids to be loaded is a superset of `load`. If some of these ids are in `loaded`, the corresponding
	 * components will have to reloaded.
	 *
	 * The ids in `load` and `loaded` may be in any order and can contain duplicates.
	 *
	 * @param {Components} components
	 * @param {string[]} load
	 * @param {string[]} [loaded=[]] A list of already loaded components.
	 *
	 * If a component is in this list, then all of its requirements will also be assumed to be in the list.
	 * @returns {Loader}
	 *
	 * @typedef Loader
	 * @property {() => string[]} getIds A function to get all ids of the components to load.
	 *
	 * The returned ids will be duplicate-free, alias-free and in load order.
	 * @property {LoadFunction} load A functional interface to load components.
	 *
	 * @typedef {<T> (loadComponent: (id: string) => T, chainer?: LoadChainer<T>) => T} LoadFunction
	 * A functional interface to load components.
	 *
	 * The `loadComponent` function will be called for every component in the order in which they have to be loaded.
	 *
	 * The `chainer` is useful for asynchronous loading and its `series` and `parallel` functions can be thought of as
	 * `Promise#then` and `Promise.all`.
	 *
	 * @example
	 * load(id => { loadComponent(id); }); // returns undefined
	 *
	 * await load(
	 *     id => loadComponentAsync(id), // returns a Promise for each id
	 *     {
	 *         series: async (before, after) => {
	 *             await before;
	 *             await after();
	 *         },
	 *         parallel: async (values) => {
	 *             await Promise.all(values);
	 *         }
	 *     }
	 * );
	 */
	function getLoader(components, load, loaded) {
		var entryMap = createEntryMap(components);
		var resolveAlias = createAliasResolver(entryMap);

		load = load.map(resolveAlias);
		loaded = (loaded || []).map(resolveAlias);

		var loadSet = toSet(load);
		var loadedSet = toSet(loaded);

		// add requirements

		load.forEach(addRequirements);
		function addRequirements(id) {
			var entry = entryMap[id];
			forEach(entry && entry.require, function (reqId) {
				if (!(reqId in loadedSet)) {
					loadSet[reqId] = true;
					addRequirements(reqId);
				}
			});
		}

		// add components to reload

		// A component x in `loaded` has to be reloaded if
		//  1) a component in `load` modifies x.
		//  2) x depends on a component in `load`.
		// The above two condition have to be applied until nothing changes anymore.

		var dependencyResolver = createDependencyResolver(entryMap);

		/** @type {StringSet} */
		var loadAdditions = loadSet;
		/** @type {StringSet} */
		var newIds;
		while (hasKeys(loadAdditions)) {
			newIds = {};

			// condition 1)
			for (var loadId in loadAdditions) {
				var entry = entryMap[loadId];
				forEach(entry && entry.modify, function (modId) {
					if (modId in loadedSet) {
						newIds[modId] = true;
					}
				});
			}

			// condition 2)
			for (var loadedId in loadedSet) {
				if (!(loadedId in loadSet)) {
					for (var depId in dependencyResolver(loadedId)) {
						if (depId in loadSet) {
							newIds[loadedId] = true;
							break;
						}
					}
				}
			}

			loadAdditions = newIds;
			for (var newId in loadAdditions) {
				loadSet[newId] = true;
			}
		}

		/** @type {Loader} */
		var loader = {
			getIds: function () {
				var ids = [];
				loader.load(function (id) {
					ids.push(id);
				});
				return ids;
			},
			load: function (loadComponent, chainer) {
				return loadComponentsInOrder(dependencyResolver, loadSet, loadComponent, chainer);
			}
		};

		return loader;
	}

	return getLoader;

}());

if (true) {
	module.exports = getLoader;
}


/***/ }),

/***/ 2694:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(6925);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 5556:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(2694)();
}


/***/ }),

/***/ 6925:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 6711:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-dom-server-legacy.node.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ea=__webpack_require__(6540),fa=__webpack_require__(2203),n=Object.prototype.hasOwnProperty,ha=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ia={},ja={};
function ka(a){if(n.call(ja,a))return!0;if(n.call(ia,a))return!1;if(ha.test(a))return ja[a]=!0;ia[a]=!0;return!1}function q(a,b,c,d,f,e,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=f;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=e;this.removeEmptyString=g}var r={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){r[a]=new q(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];r[b]=new q(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){r[a]=new q(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){r[a]=new q(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){r[a]=new q(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a){r[a]=new q(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){r[a]=new q(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){r[a]=new q(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){r[a]=new q(a,5,!1,a.toLowerCase(),null,!1,!1)});var la=/[\-:]([a-z])/g;function ma(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(la,
ma);r[b]=new q(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(la,ma);r[b]=new q(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(la,ma);r[b]=new q(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){r[a]=new q(a,1,!1,a.toLowerCase(),null,!1,!1)});
r.xlinkHref=new q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){r[a]=new q(a,1,!1,a.toLowerCase(),null,!0,!0)});
var t={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,
fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},na=["Webkit","ms","Moz","O"];Object.keys(t).forEach(function(a){na.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);t[b]=t[a]})});var oa=/["'&<>]/;
function u(a){if("boolean"===typeof a||"number"===typeof a)return""+a;a=""+a;var b=oa.exec(a);if(b){var c="",d,f=0;for(d=b.index;d<a.length;d++){switch(a.charCodeAt(d)){case 34:b="&quot;";break;case 38:b="&amp;";break;case 39:b="&#x27;";break;case 60:b="&lt;";break;case 62:b="&gt;";break;default:continue}f!==d&&(c+=a.substring(f,d));f=d+1;c+=b}a=f!==d?c+a.substring(f,d):c}return a}var pa=/([A-Z])/g,qa=/^ms-/,ra=Array.isArray;function v(a,b){return{insertionMode:a,selectedValue:b}}
function sa(a,b,c){switch(b){case "select":return v(1,null!=c.value?c.value:c.defaultValue);case "svg":return v(2,null);case "math":return v(3,null);case "foreignObject":return v(1,null);case "table":return v(4,null);case "thead":case "tbody":case "tfoot":return v(5,null);case "colgroup":return v(7,null);case "tr":return v(6,null)}return 4<=a.insertionMode||0===a.insertionMode?v(1,null):a}var ta=new Map;
function ua(a,b,c){if("object"!==typeof c)throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");b=!0;for(var d in c)if(n.call(c,d)){var f=c[d];if(null!=f&&"boolean"!==typeof f&&""!==f){if(0===d.indexOf("--")){var e=u(d);f=u((""+f).trim())}else{e=d;var g=ta.get(e);void 0!==g?e=g:(g=u(e.replace(pa,"-$1").toLowerCase().replace(qa,"-ms-")),ta.set(e,g),e=g);f="number"===typeof f?0===f||n.call(t,
d)?""+f:f+"px":u((""+f).trim())}b?(b=!1,a.push(' style="',e,":",f)):a.push(";",e,":",f)}}b||a.push('"')}
function w(a,b,c,d){switch(c){case "style":ua(a,b,d);return;case "defaultValue":case "defaultChecked":case "innerHTML":case "suppressContentEditableWarning":case "suppressHydrationWarning":return}if(!(2<c.length)||"o"!==c[0]&&"O"!==c[0]||"n"!==c[1]&&"N"!==c[1])if(b=r.hasOwnProperty(c)?r[c]:null,null!==b){switch(typeof d){case "function":case "symbol":return;case "boolean":if(!b.acceptsBooleans)return}c=b.attributeName;switch(b.type){case 3:d&&a.push(" ",c,'=""');break;case 4:!0===d?a.push(" ",c,'=""'):
!1!==d&&a.push(" ",c,'="',u(d),'"');break;case 5:isNaN(d)||a.push(" ",c,'="',u(d),'"');break;case 6:!isNaN(d)&&1<=d&&a.push(" ",c,'="',u(d),'"');break;default:b.sanitizeURL&&(d=""+d),a.push(" ",c,'="',u(d),'"')}}else if(ka(c)){switch(typeof d){case "function":case "symbol":return;case "boolean":if(b=c.toLowerCase().slice(0,5),"data-"!==b&&"aria-"!==b)return}a.push(" ",c,'="',u(d),'"')}}
function x(a,b,c){if(null!=b){if(null!=c)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");if("object"!==typeof b||!("__html"in b))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");b=b.__html;null!==b&&void 0!==b&&a.push(""+b)}}function va(a){var b="";ea.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}
function wa(a,b,c,d){a.push(z(c));var f=c=null,e;for(e in b)if(n.call(b,e)){var g=b[e];if(null!=g)switch(e){case "children":c=g;break;case "dangerouslySetInnerHTML":f=g;break;default:w(a,d,e,g)}}a.push(">");x(a,f,c);return"string"===typeof c?(a.push(u(c)),null):c}var xa=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,ya=new Map;function z(a){var b=ya.get(a);if(void 0===b){if(!xa.test(a))throw Error("Invalid tag: "+a);b="<"+a;ya.set(a,b)}return b}
function za(a,b,c,d,f){switch(b){case "select":a.push(z("select"));var e=null,g=null;for(l in c)if(n.call(c,l)){var h=c[l];if(null!=h)switch(l){case "children":e=h;break;case "dangerouslySetInnerHTML":g=h;break;case "defaultValue":case "value":break;default:w(a,d,l,h)}}a.push(">");x(a,g,e);return e;case "option":g=f.selectedValue;a.push(z("option"));var k=h=null,m=null;var l=null;for(e in c)if(n.call(c,e)){var p=c[e];if(null!=p)switch(e){case "children":h=p;break;case "selected":m=p;break;case "dangerouslySetInnerHTML":l=
p;break;case "value":k=p;default:w(a,d,e,p)}}if(null!=g)if(c=null!==k?""+k:va(h),ra(g))for(d=0;d<g.length;d++){if(""+g[d]===c){a.push(' selected=""');break}}else""+g===c&&a.push(' selected=""');else m&&a.push(' selected=""');a.push(">");x(a,l,h);return h;case "textarea":a.push(z("textarea"));l=g=e=null;for(h in c)if(n.call(c,h)&&(k=c[h],null!=k))switch(h){case "children":l=k;break;case "value":e=k;break;case "defaultValue":g=k;break;case "dangerouslySetInnerHTML":throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
default:w(a,d,h,k)}null===e&&null!==g&&(e=g);a.push(">");if(null!=l){if(null!=e)throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");if(ra(l)&&1<l.length)throw Error("<textarea> can only have at most one child.");e=""+l}"string"===typeof e&&"\n"===e[0]&&a.push("\n");null!==e&&a.push(u(""+e));return null;case "input":a.push(z("input"));k=l=h=e=null;for(g in c)if(n.call(c,g)&&(m=c[g],null!=m))switch(g){case "children":case "dangerouslySetInnerHTML":throw Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
case "defaultChecked":k=m;break;case "defaultValue":h=m;break;case "checked":l=m;break;case "value":e=m;break;default:w(a,d,g,m)}null!==l?w(a,d,"checked",l):null!==k&&w(a,d,"checked",k);null!==e?w(a,d,"value",e):null!==h&&w(a,d,"value",h);a.push("/>");return null;case "menuitem":a.push(z("menuitem"));for(var B in c)if(n.call(c,B)&&(e=c[B],null!=e))switch(B){case "children":case "dangerouslySetInnerHTML":throw Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");default:w(a,d,B,
e)}a.push(">");return null;case "title":a.push(z("title"));e=null;for(p in c)if(n.call(c,p)&&(g=c[p],null!=g))switch(p){case "children":e=g;break;case "dangerouslySetInnerHTML":throw Error("`dangerouslySetInnerHTML` does not make sense on <title>.");default:w(a,d,p,g)}a.push(">");return e;case "listing":case "pre":a.push(z(b));g=e=null;for(k in c)if(n.call(c,k)&&(h=c[k],null!=h))switch(k){case "children":e=h;break;case "dangerouslySetInnerHTML":g=h;break;default:w(a,d,k,h)}a.push(">");if(null!=g){if(null!=
e)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");if("object"!==typeof g||!("__html"in g))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");c=g.__html;null!==c&&void 0!==c&&("string"===typeof c&&0<c.length&&"\n"===c[0]?a.push("\n",c):a.push(""+c))}"string"===typeof e&&"\n"===e[0]&&a.push("\n");return e;case "area":case "base":case "br":case "col":case "embed":case "hr":case "img":case "keygen":case "link":case "meta":case "param":case "source":case "track":case "wbr":a.push(z(b));
for(var C in c)if(n.call(c,C)&&(e=c[C],null!=e))switch(C){case "children":case "dangerouslySetInnerHTML":throw Error(b+" is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");default:w(a,d,C,e)}a.push("/>");return null;case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return wa(a,c,b,d);case "html":return 0===f.insertionMode&&a.push("<!DOCTYPE html>"),
wa(a,c,b,d);default:if(-1===b.indexOf("-")&&"string"!==typeof c.is)return wa(a,c,b,d);a.push(z(b));g=e=null;for(m in c)if(n.call(c,m)&&(h=c[m],null!=h))switch(m){case "children":e=h;break;case "dangerouslySetInnerHTML":g=h;break;case "style":ua(a,d,h);break;case "suppressContentEditableWarning":case "suppressHydrationWarning":break;default:ka(m)&&"function"!==typeof h&&"symbol"!==typeof h&&a.push(" ",m,'="',u(h),'"')}a.push(">");x(a,g,e);return e}}
function Aa(a,b,c){a.push('\x3c!--$?--\x3e<template id="');if(null===c)throw Error("An ID must have been assigned before we can complete the boundary.");a.push(c);return a.push('"></template>')}
function Ba(a,b,c,d){switch(c.insertionMode){case 0:case 1:return a.push('<div hidden id="'),a.push(b.segmentPrefix),b=d.toString(16),a.push(b),a.push('">');case 2:return a.push('<svg aria-hidden="true" style="display:none" id="'),a.push(b.segmentPrefix),b=d.toString(16),a.push(b),a.push('">');case 3:return a.push('<math aria-hidden="true" style="display:none" id="'),a.push(b.segmentPrefix),b=d.toString(16),a.push(b),a.push('">');case 4:return a.push('<table hidden id="'),a.push(b.segmentPrefix),
b=d.toString(16),a.push(b),a.push('">');case 5:return a.push('<table hidden><tbody id="'),a.push(b.segmentPrefix),b=d.toString(16),a.push(b),a.push('">');case 6:return a.push('<table hidden><tr id="'),a.push(b.segmentPrefix),b=d.toString(16),a.push(b),a.push('">');case 7:return a.push('<table hidden><colgroup id="'),a.push(b.segmentPrefix),b=d.toString(16),a.push(b),a.push('">');default:throw Error("Unknown insertion mode. This is a bug in React.");}}
function Ca(a,b){switch(b.insertionMode){case 0:case 1:return a.push("</div>");case 2:return a.push("</svg>");case 3:return a.push("</math>");case 4:return a.push("</table>");case 5:return a.push("</tbody></table>");case 6:return a.push("</tr></table>");case 7:return a.push("</colgroup></table>");default:throw Error("Unknown insertion mode. This is a bug in React.");}}var Da=/[<\u2028\u2029]/g;
function Ea(a){return JSON.stringify(a).replace(Da,function(a){switch(a){case "<":return"\\u003c";case "\u2028":return"\\u2028";case "\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");}})}
function Fa(a,b){b=void 0===b?"":b;return{bootstrapChunks:[],startInlineScript:"<script>",placeholderPrefix:b+"P:",segmentPrefix:b+"S:",boundaryPrefix:b+"B:",idPrefix:b,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1,generateStaticMarkup:a}}function Ga(){return{insertionMode:1,selectedValue:null}}function Ha(a,b,c,d){if(c.generateStaticMarkup)return a.push(u(b)),!1;""===b?a=d:(d&&a.push("\x3c!-- --\x3e"),a.push(u(b)),a=!0);return a}
var A=Object.assign,Ia=Symbol.for("react.element"),Ja=Symbol.for("react.portal"),Ka=Symbol.for("react.fragment"),La=Symbol.for("react.strict_mode"),Ma=Symbol.for("react.profiler"),Na=Symbol.for("react.provider"),Oa=Symbol.for("react.context"),Pa=Symbol.for("react.forward_ref"),Qa=Symbol.for("react.suspense"),Ra=Symbol.for("react.suspense_list"),Sa=Symbol.for("react.memo"),Ta=Symbol.for("react.lazy"),Ua=Symbol.for("react.scope"),Va=Symbol.for("react.debug_trace_mode"),Wa=Symbol.for("react.legacy_hidden"),
Xa=Symbol.for("react.default_value"),Ya=Symbol.iterator;
function Za(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case Ka:return"Fragment";case Ja:return"Portal";case Ma:return"Profiler";case La:return"StrictMode";case Qa:return"Suspense";case Ra:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Oa:return(a.displayName||"Context")+".Consumer";case Na:return(a._context.displayName||"Context")+".Provider";case Pa:var b=a.render;a=a.displayName;a||(a=b.displayName||
b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case Sa:return b=a.displayName||null,null!==b?b:Za(a.type)||"Memo";case Ta:b=a._payload;a=a._init;try{return Za(a(b))}catch(c){}}return null}var $a={};function ab(a,b){a=a.contextTypes;if(!a)return $a;var c={},d;for(d in a)c[d]=b[d];return c}var D=null;
function E(a,b){if(a!==b){a.context._currentValue2=a.parentValue;a=a.parent;var c=b.parent;if(null===a){if(null!==c)throw Error("The stacks must reach the root at the same time. This is a bug in React.");}else{if(null===c)throw Error("The stacks must reach the root at the same time. This is a bug in React.");E(a,c)}b.context._currentValue2=b.value}}function bb(a){a.context._currentValue2=a.parentValue;a=a.parent;null!==a&&bb(a)}
function cb(a){var b=a.parent;null!==b&&cb(b);a.context._currentValue2=a.value}function db(a,b){a.context._currentValue2=a.parentValue;a=a.parent;if(null===a)throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");a.depth===b.depth?E(a,b):db(a,b)}
function eb(a,b){var c=b.parent;if(null===c)throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");a.depth===c.depth?E(a,c):eb(a,c);b.context._currentValue2=b.value}function F(a){var b=D;b!==a&&(null===b?cb(a):null===a?bb(b):b.depth===a.depth?E(b,a):b.depth>a.depth?db(b,a):eb(b,a),D=a)}
var fb={isMounted:function(){return!1},enqueueSetState:function(a,b){a=a._reactInternals;null!==a.queue&&a.queue.push(b)},enqueueReplaceState:function(a,b){a=a._reactInternals;a.replace=!0;a.queue=[b]},enqueueForceUpdate:function(){}};
function gb(a,b,c,d){var f=void 0!==a.state?a.state:null;a.updater=fb;a.props=c;a.state=f;var e={queue:[],replace:!1};a._reactInternals=e;var g=b.contextType;a.context="object"===typeof g&&null!==g?g._currentValue2:d;g=b.getDerivedStateFromProps;"function"===typeof g&&(g=g(c,f),f=null===g||void 0===g?f:A({},f,g),a.state=f);if("function"!==typeof b.getDerivedStateFromProps&&"function"!==typeof a.getSnapshotBeforeUpdate&&("function"===typeof a.UNSAFE_componentWillMount||"function"===typeof a.componentWillMount))if(b=
a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),b!==a.state&&fb.enqueueReplaceState(a,a.state,null),null!==e.queue&&0<e.queue.length)if(b=e.queue,g=e.replace,e.queue=null,e.replace=!1,g&&1===b.length)a.state=b[0];else{e=g?b[0]:a.state;f=!0;for(g=g?1:0;g<b.length;g++){var h=b[g];h="function"===typeof h?h.call(a,e,c,d):h;null!=h&&(f?(f=!1,e=A({},e,h)):A(e,h))}a.state=e}else e.queue=null}
var hb={id:1,overflow:""};function ib(a,b,c){var d=a.id;a=a.overflow;var f=32-G(d)-1;d&=~(1<<f);c+=1;var e=32-G(b)+f;if(30<e){var g=f-f%5;e=(d&(1<<g)-1).toString(32);d>>=g;f-=g;return{id:1<<32-G(b)+f|c<<f|d,overflow:e+a}}return{id:1<<e|c<<f|d,overflow:a}}var G=Math.clz32?Math.clz32:jb,kb=Math.log,lb=Math.LN2;function jb(a){a>>>=0;return 0===a?32:31-(kb(a)/lb|0)|0}function mb(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}
var nb="function"===typeof Object.is?Object.is:mb,H=null,ob=null,I=null,J=null,K=!1,L=!1,M=0,N=null,O=0;
function P(){if(null===H)throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");return H}
function rb(){if(0<O)throw Error("Rendered more hooks than during the previous render");return{memoizedState:null,queue:null,next:null}}function sb(){null===J?null===I?(K=!1,I=J=rb()):(K=!0,J=I):null===J.next?(K=!1,J=J.next=rb()):(K=!0,J=J.next);return J}function tb(){ob=H=null;L=!1;I=null;O=0;J=N=null}function ub(a,b){return"function"===typeof b?b(a):b}
function vb(a,b,c){H=P();J=sb();if(K){var d=J.queue;b=d.dispatch;if(null!==N&&(c=N.get(d),void 0!==c)){N.delete(d);d=J.memoizedState;do d=a(d,c.action),c=c.next;while(null!==c);J.memoizedState=d;return[d,b]}return[J.memoizedState,b]}a=a===ub?"function"===typeof b?b():b:void 0!==c?c(b):b;J.memoizedState=a;a=J.queue={last:null,dispatch:null};a=a.dispatch=wb.bind(null,H,a);return[J.memoizedState,a]}
function xb(a,b){H=P();J=sb();b=void 0===b?null:b;if(null!==J){var c=J.memoizedState;if(null!==c&&null!==b){var d=c[1];a:if(null===d)d=!1;else{for(var f=0;f<d.length&&f<b.length;f++)if(!nb(b[f],d[f])){d=!1;break a}d=!0}if(d)return c[0]}}a=a();J.memoizedState=[a,b];return a}
function wb(a,b,c){if(25<=O)throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");if(a===H)if(L=!0,a={action:c,next:null},null===N&&(N=new Map),c=N.get(b),void 0===c)N.set(b,a);else{for(b=c;null!==b.next;)b=b.next;b.next=a}}function yb(){throw Error("startTransition cannot be called during server rendering.");}function Q(){}
var zb={readContext:function(a){return a._currentValue2},useContext:function(a){P();return a._currentValue2},useMemo:xb,useReducer:vb,useRef:function(a){H=P();J=sb();var b=J.memoizedState;return null===b?(a={current:a},J.memoizedState=a):b},useState:function(a){return vb(ub,a)},useInsertionEffect:Q,useLayoutEffect:function(){},useCallback:function(a,b){return xb(function(){return a},b)},useImperativeHandle:Q,useEffect:Q,useDebugValue:Q,useDeferredValue:function(a){P();return a},useTransition:function(){P();
return[!1,yb]},useId:function(){var a=ob.treeContext;var b=a.overflow;a=a.id;a=(a&~(1<<32-G(a)-1)).toString(32)+b;var c=R;if(null===c)throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");b=M++;a=":"+c.idPrefix+"R"+a;0<b&&(a+="H"+b.toString(32));return a+":"},useMutableSource:function(a,b){P();return b(a._source)},useSyncExternalStore:function(a,b,c){if(void 0===c)throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
return c()}},R=null,Ab=ea.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function Bb(a){console.error(a);return null}function S(){}
function Cb(a,b,c,d,f,e,g,h,k){var m=[],l=new Set;b={destination:null,responseState:b,progressiveChunkSize:void 0===d?12800:d,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:l,pingedTasks:m,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:void 0===f?Bb:f,onAllReady:void 0===e?S:e,onShellReady:void 0===g?S:g,onShellError:void 0===h?S:h,onFatalError:void 0===k?S:k};c=T(b,0,null,c,!1,!1);c.parentFlushed=
!0;a=Db(b,a,null,c,l,$a,null,hb);m.push(a);return b}function Db(a,b,c,d,f,e,g,h){a.allPendingTasks++;null===c?a.pendingRootTasks++:c.pendingTasks++;var k={node:b,ping:function(){var b=a.pingedTasks;b.push(k);1===b.length&&Eb(a)},blockedBoundary:c,blockedSegment:d,abortSet:f,legacyContext:e,context:g,treeContext:h};f.add(k);return k}function T(a,b,c,d,f,e){return{status:0,id:-1,index:b,parentFlushed:!1,chunks:[],children:[],formatContext:d,boundary:c,lastPushedText:f,textEmbedded:e}}
function U(a,b){a=a.onError(b);if(null!=a&&"string"!==typeof a)throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof a+'" instead');return a}function V(a,b){var c=a.onShellError;c(b);c=a.onFatalError;c(b);null!==a.destination?(a.status=2,a.destination.destroy(b)):(a.status=1,a.fatalError=b)}
function Fb(a,b,c,d,f){H={};ob=b;M=0;for(a=c(d,f);L;)L=!1,M=0,O+=1,J=null,a=c(d,f);tb();return a}function Gb(a,b,c,d){var f=c.render(),e=d.childContextTypes;if(null!==e&&void 0!==e){var g=b.legacyContext;if("function"!==typeof c.getChildContext)d=g;else{c=c.getChildContext();for(var h in c)if(!(h in e))throw Error((Za(d)||"Unknown")+'.getChildContext(): key "'+h+'" is not defined in childContextTypes.');d=A({},g,c)}b.legacyContext=d;W(a,b,f);b.legacyContext=g}else W(a,b,f)}
function Hb(a,b){if(a&&a.defaultProps){b=A({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}
function Ib(a,b,c,d,f){if("function"===typeof c)if(c.prototype&&c.prototype.isReactComponent){f=ab(c,b.legacyContext);var e=c.contextType;e=new c(d,"object"===typeof e&&null!==e?e._currentValue2:f);gb(e,c,d,f);Gb(a,b,e,c)}else{e=ab(c,b.legacyContext);f=Fb(a,b,c,d,e);var g=0!==M;if("object"===typeof f&&null!==f&&"function"===typeof f.render&&void 0===f.$$typeof)gb(f,c,d,e),Gb(a,b,f,c);else if(g){d=b.treeContext;b.treeContext=ib(d,1,0);try{W(a,b,f)}finally{b.treeContext=d}}else W(a,b,f)}else if("string"===
typeof c){f=b.blockedSegment;e=za(f.chunks,c,d,a.responseState,f.formatContext);f.lastPushedText=!1;g=f.formatContext;f.formatContext=sa(g,c,d);Jb(a,b,e);f.formatContext=g;switch(c){case "area":case "base":case "br":case "col":case "embed":case "hr":case "img":case "input":case "keygen":case "link":case "meta":case "param":case "source":case "track":case "wbr":break;default:f.chunks.push("</",c,">")}f.lastPushedText=!1}else{switch(c){case Wa:case Va:case La:case Ma:case Ka:W(a,b,d.children);return;
case Ra:W(a,b,d.children);return;case Ua:throw Error("ReactDOMServer does not yet support scope components.");case Qa:a:{c=b.blockedBoundary;f=b.blockedSegment;e=d.fallback;d=d.children;g=new Set;var h={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:g,errorDigest:null},k=T(a,f.chunks.length,h,f.formatContext,!1,!1);f.children.push(k);f.lastPushedText=!1;var m=T(a,0,null,f.formatContext,!1,!1);m.parentFlushed=!0;
b.blockedBoundary=h;b.blockedSegment=m;try{if(Jb(a,b,d),a.responseState.generateStaticMarkup||m.lastPushedText&&m.textEmbedded&&m.chunks.push("\x3c!-- --\x3e"),m.status=1,X(h,m),0===h.pendingTasks)break a}catch(l){m.status=4,h.forceClientRender=!0,h.errorDigest=U(a,l)}finally{b.blockedBoundary=c,b.blockedSegment=f}b=Db(a,e,c,k,g,b.legacyContext,b.context,b.treeContext);a.pingedTasks.push(b)}return}if("object"===typeof c&&null!==c)switch(c.$$typeof){case Pa:d=Fb(a,b,c.render,d,f);if(0!==M){c=b.treeContext;
b.treeContext=ib(c,1,0);try{W(a,b,d)}finally{b.treeContext=c}}else W(a,b,d);return;case Sa:c=c.type;d=Hb(c,d);Ib(a,b,c,d,f);return;case Na:f=d.children;c=c._context;d=d.value;e=c._currentValue2;c._currentValue2=d;g=D;D=d={parent:g,depth:null===g?0:g.depth+1,context:c,parentValue:e,value:d};b.context=d;W(a,b,f);a=D;if(null===a)throw Error("Tried to pop a Context at the root of the app. This is a bug in React.");d=a.parentValue;a.context._currentValue2=d===Xa?a.context._defaultValue:d;a=D=a.parent;
b.context=a;return;case Oa:d=d.children;d=d(c._currentValue2);W(a,b,d);return;case Ta:f=c._init;c=f(c._payload);d=Hb(c,d);Ib(a,b,c,d,void 0);return}throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: "+((null==c?c:typeof c)+"."));}}
function W(a,b,c){b.node=c;if("object"===typeof c&&null!==c){switch(c.$$typeof){case Ia:Ib(a,b,c.type,c.props,c.ref);return;case Ja:throw Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");case Ta:var d=c._init;c=d(c._payload);W(a,b,c);return}if(ra(c)){Kb(a,b,c);return}null===c||"object"!==typeof c?d=null:(d=Ya&&c[Ya]||c["@@iterator"],d="function"===typeof d?d:null);if(d&&(d=d.call(c))){c=d.next();if(!c.done){var f=
[];do f.push(c.value),c=d.next();while(!c.done);Kb(a,b,f)}return}a=Object.prototype.toString.call(c);throw Error("Objects are not valid as a React child (found: "+("[object Object]"===a?"object with keys {"+Object.keys(c).join(", ")+"}":a)+"). If you meant to render a collection of children, use an array instead.");}"string"===typeof c?(d=b.blockedSegment,d.lastPushedText=Ha(b.blockedSegment.chunks,c,a.responseState,d.lastPushedText)):"number"===typeof c&&(d=b.blockedSegment,d.lastPushedText=Ha(b.blockedSegment.chunks,
""+c,a.responseState,d.lastPushedText))}function Kb(a,b,c){for(var d=c.length,f=0;f<d;f++){var e=b.treeContext;b.treeContext=ib(e,d,f);try{Jb(a,b,c[f])}finally{b.treeContext=e}}}
function Jb(a,b,c){var d=b.blockedSegment.formatContext,f=b.legacyContext,e=b.context;try{return W(a,b,c)}catch(k){if(tb(),"object"===typeof k&&null!==k&&"function"===typeof k.then){c=k;var g=b.blockedSegment,h=T(a,g.chunks.length,null,g.formatContext,g.lastPushedText,!0);g.children.push(h);g.lastPushedText=!1;a=Db(a,b.node,b.blockedBoundary,h,b.abortSet,b.legacyContext,b.context,b.treeContext).ping;c.then(a,a);b.blockedSegment.formatContext=d;b.legacyContext=f;b.context=e;F(e)}else throw b.blockedSegment.formatContext=
d,b.legacyContext=f,b.context=e,F(e),k;}}function Lb(a){var b=a.blockedBoundary;a=a.blockedSegment;a.status=3;Mb(this,b,a)}
function Nb(a,b,c){var d=a.blockedBoundary;a.blockedSegment.status=3;null===d?(b.allPendingTasks--,2!==b.status&&(b.status=2,null!==b.destination&&b.destination.push(null))):(d.pendingTasks--,d.forceClientRender||(d.forceClientRender=!0,d.errorDigest=b.onError(void 0===c?Error("The render was aborted by the server without a reason."):c),d.parentFlushed&&b.clientRenderedBoundaries.push(d)),d.fallbackAbortableTasks.forEach(function(a){return Nb(a,b,c)}),d.fallbackAbortableTasks.clear(),b.allPendingTasks--,
0===b.allPendingTasks&&(a=b.onAllReady,a()))}function X(a,b){if(0===b.chunks.length&&1===b.children.length&&null===b.children[0].boundary){var c=b.children[0];c.id=b.id;c.parentFlushed=!0;1===c.status&&X(a,c)}else a.completedSegments.push(b)}
function Mb(a,b,c){if(null===b){if(c.parentFlushed){if(null!==a.completedRootSegment)throw Error("There can only be one root segment. This is a bug in React.");a.completedRootSegment=c}a.pendingRootTasks--;0===a.pendingRootTasks&&(a.onShellError=S,b=a.onShellReady,b())}else b.pendingTasks--,b.forceClientRender||(0===b.pendingTasks?(c.parentFlushed&&1===c.status&&X(b,c),b.parentFlushed&&a.completedBoundaries.push(b),b.fallbackAbortableTasks.forEach(Lb,a),b.fallbackAbortableTasks.clear()):c.parentFlushed&&
1===c.status&&(X(b,c),1===b.completedSegments.length&&b.parentFlushed&&a.partialBoundaries.push(b)));a.allPendingTasks--;0===a.allPendingTasks&&(a=a.onAllReady,a())}
function Eb(a){if(2!==a.status){var b=D,c=Ab.current;Ab.current=zb;var d=R;R=a.responseState;try{var f=a.pingedTasks,e;for(e=0;e<f.length;e++){var g=f[e];var h=a,k=g.blockedSegment;if(0===k.status){F(g.context);try{W(h,g,g.node),h.responseState.generateStaticMarkup||k.lastPushedText&&k.textEmbedded&&k.chunks.push("\x3c!-- --\x3e"),g.abortSet.delete(g),k.status=1,Mb(h,g.blockedBoundary,k)}catch(y){if(tb(),"object"===typeof y&&null!==y&&"function"===typeof y.then){var m=g.ping;y.then(m,m)}else{g.abortSet.delete(g);
k.status=4;var l=g.blockedBoundary,p=y,B=U(h,p);null===l?V(h,p):(l.pendingTasks--,l.forceClientRender||(l.forceClientRender=!0,l.errorDigest=B,l.parentFlushed&&h.clientRenderedBoundaries.push(l)));h.allPendingTasks--;if(0===h.allPendingTasks){var C=h.onAllReady;C()}}}finally{}}}f.splice(0,e);null!==a.destination&&Ob(a,a.destination)}catch(y){U(a,y),V(a,y)}finally{R=d,Ab.current=c,c===zb&&F(b)}}}
function Y(a,b,c){c.parentFlushed=!0;switch(c.status){case 0:var d=c.id=a.nextSegmentId++;c.lastPushedText=!1;c.textEmbedded=!1;a=a.responseState;b.push('<template id="');b.push(a.placeholderPrefix);a=d.toString(16);b.push(a);return b.push('"></template>');case 1:c.status=2;var f=!0;d=c.chunks;var e=0;c=c.children;for(var g=0;g<c.length;g++){for(f=c[g];e<f.index;e++)b.push(d[e]);f=Z(a,b,f)}for(;e<d.length-1;e++)b.push(d[e]);e<d.length&&(f=b.push(d[e]));return f;default:throw Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
}}
function Z(a,b,c){var d=c.boundary;if(null===d)return Y(a,b,c);d.parentFlushed=!0;if(d.forceClientRender)return a.responseState.generateStaticMarkup||(d=d.errorDigest,b.push("\x3c!--$!--\x3e"),b.push("<template"),d&&(b.push(' data-dgst="'),d=u(d),b.push(d),b.push('"')),b.push("></template>")),Y(a,b,c),a=a.responseState.generateStaticMarkup?!0:b.push("\x3c!--/$--\x3e"),a;if(0<d.pendingTasks){d.rootSegmentID=a.nextSegmentId++;0<d.completedSegments.length&&a.partialBoundaries.push(d);var f=a.responseState;var e=
f.nextSuspenseID++;f=f.boundaryPrefix+e.toString(16);d=d.id=f;Aa(b,a.responseState,d);Y(a,b,c);return b.push("\x3c!--/$--\x3e")}if(d.byteSize>a.progressiveChunkSize)return d.rootSegmentID=a.nextSegmentId++,a.completedBoundaries.push(d),Aa(b,a.responseState,d.id),Y(a,b,c),b.push("\x3c!--/$--\x3e");a.responseState.generateStaticMarkup||b.push("\x3c!--$--\x3e");c=d.completedSegments;if(1!==c.length)throw Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
Z(a,b,c[0]);a=a.responseState.generateStaticMarkup?!0:b.push("\x3c!--/$--\x3e");return a}function Pb(a,b,c){Ba(b,a.responseState,c.formatContext,c.id);Z(a,b,c);return Ca(b,c.formatContext)}
function Qb(a,b,c){for(var d=c.completedSegments,f=0;f<d.length;f++)Rb(a,b,c,d[f]);d.length=0;a=a.responseState;d=c.id;c=c.rootSegmentID;b.push(a.startInlineScript);a.sentCompleteBoundaryFunction?b.push('$RC("'):(a.sentCompleteBoundaryFunction=!0,b.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'));if(null===
d)throw Error("An ID must have been assigned before we can complete the boundary.");c=c.toString(16);b.push(d);b.push('","');b.push(a.segmentPrefix);b.push(c);return b.push('")\x3c/script>')}
function Rb(a,b,c,d){if(2===d.status)return!0;var f=d.id;if(-1===f){if(-1===(d.id=c.rootSegmentID))throw Error("A root segment ID must have been assigned by now. This is a bug in React.");return Pb(a,b,d)}Pb(a,b,d);a=a.responseState;b.push(a.startInlineScript);a.sentCompleteSegmentFunction?b.push('$RS("'):(a.sentCompleteSegmentFunction=!0,b.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'));
b.push(a.segmentPrefix);f=f.toString(16);b.push(f);b.push('","');b.push(a.placeholderPrefix);b.push(f);return b.push('")\x3c/script>')}
function Ob(a,b){try{var c=a.completedRootSegment;if(null!==c&&0===a.pendingRootTasks){Z(a,b,c);a.completedRootSegment=null;var d=a.responseState.bootstrapChunks;for(c=0;c<d.length-1;c++)b.push(d[c]);c<d.length&&b.push(d[c])}var f=a.clientRenderedBoundaries,e;for(e=0;e<f.length;e++){var g=f[e];d=b;var h=a.responseState,k=g.id,m=g.errorDigest,l=g.errorMessage,p=g.errorComponentStack;d.push(h.startInlineScript);h.sentClientRenderFunction?d.push('$RX("'):(h.sentClientRenderFunction=!0,d.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'));
if(null===k)throw Error("An ID must have been assigned before we can complete the boundary.");d.push(k);d.push('"');if(m||l||p){d.push(",");var B=Ea(m||"");d.push(B)}if(l||p){d.push(",");var C=Ea(l||"");d.push(C)}if(p){d.push(",");var y=Ea(p);d.push(y)}if(!d.push(")\x3c/script>")){a.destination=null;e++;f.splice(0,e);return}}f.splice(0,e);var aa=a.completedBoundaries;for(e=0;e<aa.length;e++)if(!Qb(a,b,aa[e])){a.destination=null;e++;aa.splice(0,e);return}aa.splice(0,e);var ba=a.partialBoundaries;for(e=
0;e<ba.length;e++){var pb=ba[e];a:{f=a;g=b;var ca=pb.completedSegments;for(h=0;h<ca.length;h++)if(!Rb(f,g,pb,ca[h])){h++;ca.splice(0,h);var qb=!1;break a}ca.splice(0,h);qb=!0}if(!qb){a.destination=null;e++;ba.splice(0,e);return}}ba.splice(0,e);var da=a.completedBoundaries;for(e=0;e<da.length;e++)if(!Qb(a,b,da[e])){a.destination=null;e++;da.splice(0,e);return}da.splice(0,e)}finally{0===a.allPendingTasks&&0===a.pingedTasks.length&&0===a.clientRenderedBoundaries.length&&0===a.completedBoundaries.length&&
b.push(null)}}function Sb(a,b){if(1===a.status)a.status=2,b.destroy(a.fatalError);else if(2!==a.status&&null===a.destination){a.destination=b;try{Ob(a,b)}catch(c){U(a,c),V(a,c)}}}function Tb(a,b){try{var c=a.abortableTasks;c.forEach(function(c){return Nb(c,a,b)});c.clear();null!==a.destination&&Ob(a,a.destination)}catch(d){U(a,d),V(a,d)}}function Ub(){}
function Vb(a,b,c,d){var f=!1,e=null,g="",h=!1;a=Cb(a,Fa(c,b?b.identifierPrefix:void 0),Ga(),Infinity,Ub,void 0,function(){h=!0},void 0,void 0);Eb(a);Tb(a,d);Sb(a,{push:function(a){null!==a&&(g+=a);return!0},destroy:function(a){f=!0;e=a}});if(f)throw e;if(!h)throw Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");return g}
function Wb(a,b){a.prototype=Object.create(b.prototype);a.prototype.constructor=a;a.__proto__=b}var Xb=function(a){function b(){var b=a.call(this,{})||this;b.request=null;b.startedFlowing=!1;return b}Wb(b,a);var c=b.prototype;c._destroy=function(a,b){Tb(this.request);b(a)};c._read=function(){this.startedFlowing&&Sb(this.request,this)};return b}(fa.Readable);function Yb(){}
function Zb(a,b){var c=new Xb,d=Cb(a,Fa(!1,b?b.identifierPrefix:void 0),Ga(),Infinity,Yb,function(){c.startedFlowing=!0;Sb(d,c)},void 0,void 0);c.request=d;Eb(d);return c}exports.renderToNodeStream=function(a,b){return Zb(a,b)};exports.renderToStaticMarkup=function(a,b){return Vb(a,b,!0,'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToPipeableStream" which supports Suspense on the server')};
exports.renderToStaticNodeStream=function(a,b){return Zb(a,b)};exports.renderToString=function(a,b){return Vb(a,b,!1,'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToPipeableStream" which supports Suspense on the server')};
exports.version="18.3.1";


/***/ }),

/***/ 6513:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-dom-server.node.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa=__webpack_require__(9023),ba=__webpack_require__(6540),k=null,l=0,q=!0;
function r(a,b){if("string"===typeof b){if(0!==b.length)if(2048<3*b.length)0<l&&(t(a,k.subarray(0,l)),k=new Uint8Array(2048),l=0),t(a,u.encode(b));else{var c=k;0<l&&(c=k.subarray(l));c=u.encodeInto(b,c);var d=c.read;l+=c.written;d<b.length&&(t(a,k),k=new Uint8Array(2048),l=u.encodeInto(b.slice(d),k).written);2048===l&&(t(a,k),k=new Uint8Array(2048),l=0)}}else 0!==b.byteLength&&(2048<b.byteLength?(0<l&&(t(a,k.subarray(0,l)),k=new Uint8Array(2048),l=0),t(a,b)):(c=k.length-l,c<b.byteLength&&(0===c?t(a,
k):(k.set(b.subarray(0,c),l),l+=c,t(a,k),b=b.subarray(c)),k=new Uint8Array(2048),l=0),k.set(b,l),l+=b.byteLength,2048===l&&(t(a,k),k=new Uint8Array(2048),l=0)))}function t(a,b){a=a.write(b);q=q&&a}function w(a,b){r(a,b);return q}function ca(a){k&&0<l&&a.write(k.subarray(0,l));k=null;l=0;q=!0}var u=new aa.TextEncoder;function x(a){return u.encode(a)}
var y=Object.prototype.hasOwnProperty,da=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ea={},fa={};
function ha(a){if(y.call(fa,a))return!0;if(y.call(ea,a))return!1;if(da.test(a))return fa[a]=!0;ea[a]=!0;return!1}function z(a,b,c,d,f,e,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=f;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=e;this.removeEmptyString=g}var A={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){A[a]=new z(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];A[b]=new z(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){A[a]=new z(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){A[a]=new z(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){A[a]=new z(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a){A[a]=new z(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){A[a]=new z(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){A[a]=new z(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){A[a]=new z(a,5,!1,a.toLowerCase(),null,!1,!1)});var ia=/[\-:]([a-z])/g;function ja(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(ia,
ja);A[b]=new z(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(ia,ja);A[b]=new z(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(ia,ja);A[b]=new z(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){A[a]=new z(a,1,!1,a.toLowerCase(),null,!1,!1)});
A.xlinkHref=new z("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){A[a]=new z(a,1,!1,a.toLowerCase(),null,!0,!0)});
var B={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,
fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ka=["Webkit","ms","Moz","O"];Object.keys(B).forEach(function(a){ka.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);B[b]=B[a]})});var la=/["'&<>]/;
function F(a){if("boolean"===typeof a||"number"===typeof a)return""+a;a=""+a;var b=la.exec(a);if(b){var c="",d,f=0;for(d=b.index;d<a.length;d++){switch(a.charCodeAt(d)){case 34:b="&quot;";break;case 38:b="&amp;";break;case 39:b="&#x27;";break;case 60:b="&lt;";break;case 62:b="&gt;";break;default:continue}f!==d&&(c+=a.substring(f,d));f=d+1;c+=b}a=f!==d?c+a.substring(f,d):c}return a}
var ma=/([A-Z])/g,pa=/^ms-/,qa=Array.isArray,ra=x("<script>"),sa=x("\x3c/script>"),ta=x('<script src="'),ua=x('<script type="module" src="'),va=x('" async="">\x3c/script>'),wa=/(<\/|<)(s)(cript)/gi;function xa(a,b,c,d){return""+b+("s"===c?"\\u0073":"\\u0053")+d}function G(a,b){return{insertionMode:a,selectedValue:b}}
function ya(a,b,c){switch(b){case "select":return G(1,null!=c.value?c.value:c.defaultValue);case "svg":return G(2,null);case "math":return G(3,null);case "foreignObject":return G(1,null);case "table":return G(4,null);case "thead":case "tbody":case "tfoot":return G(5,null);case "colgroup":return G(7,null);case "tr":return G(6,null)}return 4<=a.insertionMode||0===a.insertionMode?G(1,null):a}var za=x("\x3c!-- --\x3e");function Aa(a,b,c,d){if(""===b)return d;d&&a.push(za);a.push(F(b));return!0}
var Ba=new Map,Ca=x(' style="'),Da=x(":"),Ea=x(";");
function Fa(a,b,c){if("object"!==typeof c)throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");b=!0;for(var d in c)if(y.call(c,d)){var f=c[d];if(null!=f&&"boolean"!==typeof f&&""!==f){if(0===d.indexOf("--")){var e=F(d);f=F((""+f).trim())}else{e=d;var g=Ba.get(e);void 0!==g?e=g:(g=x(F(e.replace(ma,"-$1").toLowerCase().replace(pa,"-ms-"))),Ba.set(e,g),e=g);f="number"===typeof f?0===f||y.call(B,
d)?""+f:f+"px":F((""+f).trim())}b?(b=!1,a.push(Ca,e,Da,f)):a.push(Ea,e,Da,f)}}b||a.push(H)}var I=x(" "),J=x('="'),H=x('"'),Ga=x('=""');
function K(a,b,c,d){switch(c){case "style":Fa(a,b,d);return;case "defaultValue":case "defaultChecked":case "innerHTML":case "suppressContentEditableWarning":case "suppressHydrationWarning":return}if(!(2<c.length)||"o"!==c[0]&&"O"!==c[0]||"n"!==c[1]&&"N"!==c[1])if(b=A.hasOwnProperty(c)?A[c]:null,null!==b){switch(typeof d){case "function":case "symbol":return;case "boolean":if(!b.acceptsBooleans)return}c=b.attributeName;switch(b.type){case 3:d&&a.push(I,c,Ga);break;case 4:!0===d?a.push(I,c,Ga):!1!==
d&&a.push(I,c,J,F(d),H);break;case 5:isNaN(d)||a.push(I,c,J,F(d),H);break;case 6:!isNaN(d)&&1<=d&&a.push(I,c,J,F(d),H);break;default:b.sanitizeURL&&(d=""+d),a.push(I,c,J,F(d),H)}}else if(ha(c)){switch(typeof d){case "function":case "symbol":return;case "boolean":if(b=c.toLowerCase().slice(0,5),"data-"!==b&&"aria-"!==b)return}a.push(I,c,J,F(d),H)}}var L=x(">"),Ha=x("/>");
function M(a,b,c){if(null!=b){if(null!=c)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");if("object"!==typeof b||!("__html"in b))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");b=b.__html;null!==b&&void 0!==b&&a.push(""+b)}}function Ia(a){var b="";ba.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}var Ja=x(' selected=""');
function Ka(a,b,c,d){a.push(N(c));var f=c=null,e;for(e in b)if(y.call(b,e)){var g=b[e];if(null!=g)switch(e){case "children":c=g;break;case "dangerouslySetInnerHTML":f=g;break;default:K(a,d,e,g)}}a.push(L);M(a,f,c);return"string"===typeof c?(a.push(F(c)),null):c}var La=x("\n"),Ma=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,Na=new Map;function N(a){var b=Na.get(a);if(void 0===b){if(!Ma.test(a))throw Error("Invalid tag: "+a);b=x("<"+a);Na.set(a,b)}return b}var Oa=x("<!DOCTYPE html>");
function Pa(a,b,c,d,f){switch(b){case "select":a.push(N("select"));var e=null,g=null;for(p in c)if(y.call(c,p)){var h=c[p];if(null!=h)switch(p){case "children":e=h;break;case "dangerouslySetInnerHTML":g=h;break;case "defaultValue":case "value":break;default:K(a,d,p,h)}}a.push(L);M(a,g,e);return e;case "option":g=f.selectedValue;a.push(N("option"));var m=h=null,n=null;var p=null;for(e in c)if(y.call(c,e)){var v=c[e];if(null!=v)switch(e){case "children":h=v;break;case "selected":n=v;break;case "dangerouslySetInnerHTML":p=
v;break;case "value":m=v;default:K(a,d,e,v)}}if(null!=g)if(c=null!==m?""+m:Ia(h),qa(g))for(d=0;d<g.length;d++){if(""+g[d]===c){a.push(Ja);break}}else""+g===c&&a.push(Ja);else n&&a.push(Ja);a.push(L);M(a,p,h);return h;case "textarea":a.push(N("textarea"));p=g=e=null;for(h in c)if(y.call(c,h)&&(m=c[h],null!=m))switch(h){case "children":p=m;break;case "value":e=m;break;case "defaultValue":g=m;break;case "dangerouslySetInnerHTML":throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
default:K(a,d,h,m)}null===e&&null!==g&&(e=g);a.push(L);if(null!=p){if(null!=e)throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");if(qa(p)&&1<p.length)throw Error("<textarea> can only have at most one child.");e=""+p}"string"===typeof e&&"\n"===e[0]&&a.push(La);null!==e&&a.push(F(""+e));return null;case "input":a.push(N("input"));m=p=h=e=null;for(g in c)if(y.call(c,g)&&(n=c[g],null!=n))switch(g){case "children":case "dangerouslySetInnerHTML":throw Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
case "defaultChecked":m=n;break;case "defaultValue":h=n;break;case "checked":p=n;break;case "value":e=n;break;default:K(a,d,g,n)}null!==p?K(a,d,"checked",p):null!==m&&K(a,d,"checked",m);null!==e?K(a,d,"value",e):null!==h&&K(a,d,"value",h);a.push(Ha);return null;case "menuitem":a.push(N("menuitem"));for(var C in c)if(y.call(c,C)&&(e=c[C],null!=e))switch(C){case "children":case "dangerouslySetInnerHTML":throw Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");default:K(a,d,C,e)}a.push(L);
return null;case "title":a.push(N("title"));e=null;for(v in c)if(y.call(c,v)&&(g=c[v],null!=g))switch(v){case "children":e=g;break;case "dangerouslySetInnerHTML":throw Error("`dangerouslySetInnerHTML` does not make sense on <title>.");default:K(a,d,v,g)}a.push(L);return e;case "listing":case "pre":a.push(N(b));g=e=null;for(m in c)if(y.call(c,m)&&(h=c[m],null!=h))switch(m){case "children":e=h;break;case "dangerouslySetInnerHTML":g=h;break;default:K(a,d,m,h)}a.push(L);if(null!=g){if(null!=e)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
if("object"!==typeof g||!("__html"in g))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");c=g.__html;null!==c&&void 0!==c&&("string"===typeof c&&0<c.length&&"\n"===c[0]?a.push(La,c):a.push(""+c))}"string"===typeof e&&"\n"===e[0]&&a.push(La);return e;case "area":case "base":case "br":case "col":case "embed":case "hr":case "img":case "keygen":case "link":case "meta":case "param":case "source":case "track":case "wbr":a.push(N(b));
for(var D in c)if(y.call(c,D)&&(e=c[D],null!=e))switch(D){case "children":case "dangerouslySetInnerHTML":throw Error(b+" is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");default:K(a,d,D,e)}a.push(Ha);return null;case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return Ka(a,c,b,d);case "html":return 0===f.insertionMode&&a.push(Oa),Ka(a,c,
b,d);default:if(-1===b.indexOf("-")&&"string"!==typeof c.is)return Ka(a,c,b,d);a.push(N(b));g=e=null;for(n in c)if(y.call(c,n)&&(h=c[n],null!=h))switch(n){case "children":e=h;break;case "dangerouslySetInnerHTML":g=h;break;case "style":Fa(a,d,h);break;case "suppressContentEditableWarning":case "suppressHydrationWarning":break;default:ha(n)&&"function"!==typeof h&&"symbol"!==typeof h&&a.push(I,n,J,F(h),H)}a.push(L);M(a,g,e);return e}}
var Qa=x("</"),Ra=x(">"),Sa=x('<template id="'),Ta=x('"></template>'),Ua=x("\x3c!--$--\x3e"),Va=x('\x3c!--$?--\x3e<template id="'),Wa=x('"></template>'),Xa=x("\x3c!--$!--\x3e"),Ya=x("\x3c!--/$--\x3e"),Za=x("<template"),$a=x('"'),ab=x(' data-dgst="');x(' data-msg="');x(' data-stck="');var bb=x("></template>");function cb(a,b,c){r(a,Va);if(null===c)throw Error("An ID must have been assigned before we can complete the boundary.");r(a,c);return w(a,Wa)}
var db=x('<div hidden id="'),eb=x('">'),fb=x("</div>"),gb=x('<svg aria-hidden="true" style="display:none" id="'),hb=x('">'),ib=x("</svg>"),jb=x('<math aria-hidden="true" style="display:none" id="'),kb=x('">'),lb=x("</math>"),mb=x('<table hidden id="'),nb=x('">'),ob=x("</table>"),pb=x('<table hidden><tbody id="'),qb=x('">'),rb=x("</tbody></table>"),sb=x('<table hidden><tr id="'),tb=x('">'),ub=x("</tr></table>"),vb=x('<table hidden><colgroup id="'),wb=x('">'),xb=x("</colgroup></table>");
function yb(a,b,c,d){switch(c.insertionMode){case 0:case 1:return r(a,db),r(a,b.segmentPrefix),r(a,d.toString(16)),w(a,eb);case 2:return r(a,gb),r(a,b.segmentPrefix),r(a,d.toString(16)),w(a,hb);case 3:return r(a,jb),r(a,b.segmentPrefix),r(a,d.toString(16)),w(a,kb);case 4:return r(a,mb),r(a,b.segmentPrefix),r(a,d.toString(16)),w(a,nb);case 5:return r(a,pb),r(a,b.segmentPrefix),r(a,d.toString(16)),w(a,qb);case 6:return r(a,sb),r(a,b.segmentPrefix),r(a,d.toString(16)),w(a,tb);case 7:return r(a,vb),r(a,
b.segmentPrefix),r(a,d.toString(16)),w(a,wb);default:throw Error("Unknown insertion mode. This is a bug in React.");}}function zb(a,b){switch(b.insertionMode){case 0:case 1:return w(a,fb);case 2:return w(a,ib);case 3:return w(a,lb);case 4:return w(a,ob);case 5:return w(a,rb);case 6:return w(a,ub);case 7:return w(a,xb);default:throw Error("Unknown insertion mode. This is a bug in React.");}}
var Ab=x('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'),Bb=x('$RS("'),Cb=x('","'),Db=x('")\x3c/script>'),Fb=x('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'),
Gb=x('$RC("'),Hb=x('","'),Ib=x('")\x3c/script>'),Jb=x('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'),Kb=x('$RX("'),Lb=x('"'),Mb=x(")\x3c/script>"),Nb=x(","),Ob=/[<\u2028\u2029]/g;
function Pb(a){return JSON.stringify(a).replace(Ob,function(a){switch(a){case "<":return"\\u003c";case "\u2028":return"\\u2028";case "\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");}})}
var O=Object.assign,Qb=Symbol.for("react.element"),Rb=Symbol.for("react.portal"),Sb=Symbol.for("react.fragment"),Tb=Symbol.for("react.strict_mode"),Ub=Symbol.for("react.profiler"),Vb=Symbol.for("react.provider"),Wb=Symbol.for("react.context"),Xb=Symbol.for("react.forward_ref"),Yb=Symbol.for("react.suspense"),Zb=Symbol.for("react.suspense_list"),$b=Symbol.for("react.memo"),ac=Symbol.for("react.lazy"),bc=Symbol.for("react.scope"),cc=Symbol.for("react.debug_trace_mode"),dc=Symbol.for("react.legacy_hidden"),
ec=Symbol.for("react.default_value"),fc=Symbol.iterator;
function gc(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case Sb:return"Fragment";case Rb:return"Portal";case Ub:return"Profiler";case Tb:return"StrictMode";case Yb:return"Suspense";case Zb:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Wb:return(a.displayName||"Context")+".Consumer";case Vb:return(a._context.displayName||"Context")+".Provider";case Xb:var b=a.render;a=a.displayName;a||(a=b.displayName||
b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case $b:return b=a.displayName||null,null!==b?b:gc(a.type)||"Memo";case ac:b=a._payload;a=a._init;try{return gc(a(b))}catch(c){}}return null}var hc={};function ic(a,b){a=a.contextTypes;if(!a)return hc;var c={},d;for(d in a)c[d]=b[d];return c}var P=null;
function Q(a,b){if(a!==b){a.context._currentValue=a.parentValue;a=a.parent;var c=b.parent;if(null===a){if(null!==c)throw Error("The stacks must reach the root at the same time. This is a bug in React.");}else{if(null===c)throw Error("The stacks must reach the root at the same time. This is a bug in React.");Q(a,c)}b.context._currentValue=b.value}}function jc(a){a.context._currentValue=a.parentValue;a=a.parent;null!==a&&jc(a)}
function kc(a){var b=a.parent;null!==b&&kc(b);a.context._currentValue=a.value}function lc(a,b){a.context._currentValue=a.parentValue;a=a.parent;if(null===a)throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");a.depth===b.depth?Q(a,b):lc(a,b)}
function mc(a,b){var c=b.parent;if(null===c)throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");a.depth===c.depth?Q(a,c):mc(a,c);b.context._currentValue=b.value}function nc(a){var b=P;b!==a&&(null===b?kc(a):null===a?jc(b):b.depth===a.depth?Q(b,a):b.depth>a.depth?lc(b,a):mc(b,a),P=a)}
var oc={isMounted:function(){return!1},enqueueSetState:function(a,b){a=a._reactInternals;null!==a.queue&&a.queue.push(b)},enqueueReplaceState:function(a,b){a=a._reactInternals;a.replace=!0;a.queue=[b]},enqueueForceUpdate:function(){}};
function pc(a,b,c,d){var f=void 0!==a.state?a.state:null;a.updater=oc;a.props=c;a.state=f;var e={queue:[],replace:!1};a._reactInternals=e;var g=b.contextType;a.context="object"===typeof g&&null!==g?g._currentValue:d;g=b.getDerivedStateFromProps;"function"===typeof g&&(g=g(c,f),f=null===g||void 0===g?f:O({},f,g),a.state=f);if("function"!==typeof b.getDerivedStateFromProps&&"function"!==typeof a.getSnapshotBeforeUpdate&&("function"===typeof a.UNSAFE_componentWillMount||"function"===typeof a.componentWillMount))if(b=
a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),b!==a.state&&oc.enqueueReplaceState(a,a.state,null),null!==e.queue&&0<e.queue.length)if(b=e.queue,g=e.replace,e.queue=null,e.replace=!1,g&&1===b.length)a.state=b[0];else{e=g?b[0]:a.state;f=!0;for(g=g?1:0;g<b.length;g++){var h=b[g];h="function"===typeof h?h.call(a,e,c,d):h;null!=h&&(f?(f=!1,e=O({},e,h)):O(e,h))}a.state=e}else e.queue=null}
var qc={id:1,overflow:""};function rc(a,b,c){var d=a.id;a=a.overflow;var f=32-sc(d)-1;d&=~(1<<f);c+=1;var e=32-sc(b)+f;if(30<e){var g=f-f%5;e=(d&(1<<g)-1).toString(32);d>>=g;f-=g;return{id:1<<32-sc(b)+f|c<<f|d,overflow:e+a}}return{id:1<<e|c<<f|d,overflow:a}}var sc=Math.clz32?Math.clz32:tc,uc=Math.log,vc=Math.LN2;function tc(a){a>>>=0;return 0===a?32:31-(uc(a)/vc|0)|0}function wc(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}
var xc="function"===typeof Object.is?Object.is:wc,R=null,yc=null,zc=null,S=null,T=!1,Ac=!1,U=0,V=null,Bc=0;
function W(){if(null===R)throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");return R}
function Cc(){if(0<Bc)throw Error("Rendered more hooks than during the previous render");return{memoizedState:null,queue:null,next:null}}function Dc(){null===S?null===zc?(T=!1,zc=S=Cc()):(T=!0,S=zc):null===S.next?(T=!1,S=S.next=Cc()):(T=!0,S=S.next);return S}function Ec(){yc=R=null;Ac=!1;zc=null;Bc=0;S=V=null}function Fc(a,b){return"function"===typeof b?b(a):b}
function Gc(a,b,c){R=W();S=Dc();if(T){var d=S.queue;b=d.dispatch;if(null!==V&&(c=V.get(d),void 0!==c)){V.delete(d);d=S.memoizedState;do d=a(d,c.action),c=c.next;while(null!==c);S.memoizedState=d;return[d,b]}return[S.memoizedState,b]}a=a===Fc?"function"===typeof b?b():b:void 0!==c?c(b):b;S.memoizedState=a;a=S.queue={last:null,dispatch:null};a=a.dispatch=Hc.bind(null,R,a);return[S.memoizedState,a]}
function Ic(a,b){R=W();S=Dc();b=void 0===b?null:b;if(null!==S){var c=S.memoizedState;if(null!==c&&null!==b){var d=c[1];a:if(null===d)d=!1;else{for(var f=0;f<d.length&&f<b.length;f++)if(!xc(b[f],d[f])){d=!1;break a}d=!0}if(d)return c[0]}}a=a();S.memoizedState=[a,b];return a}
function Hc(a,b,c){if(25<=Bc)throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");if(a===R)if(Ac=!0,a={action:c,next:null},null===V&&(V=new Map),c=V.get(b),void 0===c)V.set(b,a);else{for(b=c;null!==b.next;)b=b.next;b.next=a}}function Jc(){throw Error("startTransition cannot be called during server rendering.");}function Kc(){}
var Mc={readContext:function(a){return a._currentValue},useContext:function(a){W();return a._currentValue},useMemo:Ic,useReducer:Gc,useRef:function(a){R=W();S=Dc();var b=S.memoizedState;return null===b?(a={current:a},S.memoizedState=a):b},useState:function(a){return Gc(Fc,a)},useInsertionEffect:Kc,useLayoutEffect:function(){},useCallback:function(a,b){return Ic(function(){return a},b)},useImperativeHandle:Kc,useEffect:Kc,useDebugValue:Kc,useDeferredValue:function(a){W();return a},useTransition:function(){W();
return[!1,Jc]},useId:function(){var a=yc.treeContext;var b=a.overflow;a=a.id;a=(a&~(1<<32-sc(a)-1)).toString(32)+b;var c=Lc;if(null===c)throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");b=U++;a=":"+c.idPrefix+"R"+a;0<b&&(a+="H"+b.toString(32));return a+":"},useMutableSource:function(a,b){W();return b(a._source)},useSyncExternalStore:function(a,b,c){if(void 0===c)throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
return c()}},Lc=null,Nc=ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function Oc(a){console.error(a);return null}function X(){}function Pc(a,b){var c=a.pingedTasks;c.push(b);1===c.length&&setImmediate(function(){return Qc(a)})}
function Rc(a,b,c,d,f,e,g,h){a.allPendingTasks++;null===c?a.pendingRootTasks++:c.pendingTasks++;var m={node:b,ping:function(){return Pc(a,m)},blockedBoundary:c,blockedSegment:d,abortSet:f,legacyContext:e,context:g,treeContext:h};f.add(m);return m}function Sc(a,b,c,d,f,e){return{status:0,id:-1,index:b,parentFlushed:!1,chunks:[],children:[],formatContext:d,boundary:c,lastPushedText:f,textEmbedded:e}}
function Y(a,b){a=a.onError(b);if(null!=a&&"string"!==typeof a)throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof a+'" instead');return a}function Tc(a,b){var c=a.onShellError;c(b);c=a.onFatalError;c(b);null!==a.destination?(a.status=2,a.destination.destroy(b)):(a.status=1,a.fatalError=b)}
function Uc(a,b,c,d,f){R={};yc=b;U=0;for(a=c(d,f);Ac;)Ac=!1,U=0,Bc+=1,S=null,a=c(d,f);Ec();return a}function Vc(a,b,c,d){var f=c.render(),e=d.childContextTypes;if(null!==e&&void 0!==e){var g=b.legacyContext;if("function"!==typeof c.getChildContext)d=g;else{c=c.getChildContext();for(var h in c)if(!(h in e))throw Error((gc(d)||"Unknown")+'.getChildContext(): key "'+h+'" is not defined in childContextTypes.');d=O({},g,c)}b.legacyContext=d;Z(a,b,f);b.legacyContext=g}else Z(a,b,f)}
function Wc(a,b){if(a&&a.defaultProps){b=O({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}
function Xc(a,b,c,d,f){if("function"===typeof c)if(c.prototype&&c.prototype.isReactComponent){f=ic(c,b.legacyContext);var e=c.contextType;e=new c(d,"object"===typeof e&&null!==e?e._currentValue:f);pc(e,c,d,f);Vc(a,b,e,c)}else{e=ic(c,b.legacyContext);f=Uc(a,b,c,d,e);var g=0!==U;if("object"===typeof f&&null!==f&&"function"===typeof f.render&&void 0===f.$$typeof)pc(f,c,d,e),Vc(a,b,f,c);else if(g){d=b.treeContext;b.treeContext=rc(d,1,0);try{Z(a,b,f)}finally{b.treeContext=d}}else Z(a,b,f)}else if("string"===
typeof c){f=b.blockedSegment;e=Pa(f.chunks,c,d,a.responseState,f.formatContext);f.lastPushedText=!1;g=f.formatContext;f.formatContext=ya(g,c,d);Yc(a,b,e);f.formatContext=g;switch(c){case "area":case "base":case "br":case "col":case "embed":case "hr":case "img":case "input":case "keygen":case "link":case "meta":case "param":case "source":case "track":case "wbr":break;default:f.chunks.push(Qa,c,Ra)}f.lastPushedText=!1}else{switch(c){case dc:case cc:case Tb:case Ub:case Sb:Z(a,b,d.children);return;case Zb:Z(a,
b,d.children);return;case bc:throw Error("ReactDOMServer does not yet support scope components.");case Yb:a:{c=b.blockedBoundary;f=b.blockedSegment;e=d.fallback;d=d.children;g=new Set;var h={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:g,errorDigest:null},m=Sc(a,f.chunks.length,h,f.formatContext,!1,!1);f.children.push(m);f.lastPushedText=!1;var n=Sc(a,0,null,f.formatContext,!1,!1);n.parentFlushed=!0;b.blockedBoundary=
h;b.blockedSegment=n;try{if(Yc(a,b,d),n.lastPushedText&&n.textEmbedded&&n.chunks.push(za),n.status=1,Zc(h,n),0===h.pendingTasks)break a}catch(p){n.status=4,h.forceClientRender=!0,h.errorDigest=Y(a,p)}finally{b.blockedBoundary=c,b.blockedSegment=f}b=Rc(a,e,c,m,g,b.legacyContext,b.context,b.treeContext);a.pingedTasks.push(b)}return}if("object"===typeof c&&null!==c)switch(c.$$typeof){case Xb:d=Uc(a,b,c.render,d,f);if(0!==U){c=b.treeContext;b.treeContext=rc(c,1,0);try{Z(a,b,d)}finally{b.treeContext=c}}else Z(a,
b,d);return;case $b:c=c.type;d=Wc(c,d);Xc(a,b,c,d,f);return;case Vb:f=d.children;c=c._context;d=d.value;e=c._currentValue;c._currentValue=d;g=P;P=d={parent:g,depth:null===g?0:g.depth+1,context:c,parentValue:e,value:d};b.context=d;Z(a,b,f);a=P;if(null===a)throw Error("Tried to pop a Context at the root of the app. This is a bug in React.");d=a.parentValue;a.context._currentValue=d===ec?a.context._defaultValue:d;a=P=a.parent;b.context=a;return;case Wb:d=d.children;d=d(c._currentValue);Z(a,b,d);return;
case ac:f=c._init;c=f(c._payload);d=Wc(c,d);Xc(a,b,c,d,void 0);return}throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: "+((null==c?c:typeof c)+"."));}}
function Z(a,b,c){b.node=c;if("object"===typeof c&&null!==c){switch(c.$$typeof){case Qb:Xc(a,b,c.type,c.props,c.ref);return;case Rb:throw Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");case ac:var d=c._init;c=d(c._payload);Z(a,b,c);return}if(qa(c)){$c(a,b,c);return}null===c||"object"!==typeof c?d=null:(d=fc&&c[fc]||c["@@iterator"],d="function"===typeof d?d:null);if(d&&(d=d.call(c))){c=d.next();if(!c.done){var f=
[];do f.push(c.value),c=d.next();while(!c.done);$c(a,b,f)}return}a=Object.prototype.toString.call(c);throw Error("Objects are not valid as a React child (found: "+("[object Object]"===a?"object with keys {"+Object.keys(c).join(", ")+"}":a)+"). If you meant to render a collection of children, use an array instead.");}"string"===typeof c?(d=b.blockedSegment,d.lastPushedText=Aa(b.blockedSegment.chunks,c,a.responseState,d.lastPushedText)):"number"===typeof c&&(d=b.blockedSegment,d.lastPushedText=Aa(b.blockedSegment.chunks,
""+c,a.responseState,d.lastPushedText))}function $c(a,b,c){for(var d=c.length,f=0;f<d;f++){var e=b.treeContext;b.treeContext=rc(e,d,f);try{Yc(a,b,c[f])}finally{b.treeContext=e}}}
function Yc(a,b,c){var d=b.blockedSegment.formatContext,f=b.legacyContext,e=b.context;try{return Z(a,b,c)}catch(m){if(Ec(),"object"===typeof m&&null!==m&&"function"===typeof m.then){c=m;var g=b.blockedSegment,h=Sc(a,g.chunks.length,null,g.formatContext,g.lastPushedText,!0);g.children.push(h);g.lastPushedText=!1;a=Rc(a,b.node,b.blockedBoundary,h,b.abortSet,b.legacyContext,b.context,b.treeContext).ping;c.then(a,a);b.blockedSegment.formatContext=d;b.legacyContext=f;b.context=e;nc(e)}else throw b.blockedSegment.formatContext=
d,b.legacyContext=f,b.context=e,nc(e),m;}}function ad(a){var b=a.blockedBoundary;a=a.blockedSegment;a.status=3;bd(this,b,a)}
function cd(a,b,c){var d=a.blockedBoundary;a.blockedSegment.status=3;null===d?(b.allPendingTasks--,2!==b.status&&(b.status=2,null!==b.destination&&b.destination.end())):(d.pendingTasks--,d.forceClientRender||(d.forceClientRender=!0,d.errorDigest=b.onError(void 0===c?Error("The render was aborted by the server without a reason."):c),d.parentFlushed&&b.clientRenderedBoundaries.push(d)),d.fallbackAbortableTasks.forEach(function(a){return cd(a,b,c)}),d.fallbackAbortableTasks.clear(),b.allPendingTasks--,
0===b.allPendingTasks&&(a=b.onAllReady,a()))}function Zc(a,b){if(0===b.chunks.length&&1===b.children.length&&null===b.children[0].boundary){var c=b.children[0];c.id=b.id;c.parentFlushed=!0;1===c.status&&Zc(a,c)}else a.completedSegments.push(b)}
function bd(a,b,c){if(null===b){if(c.parentFlushed){if(null!==a.completedRootSegment)throw Error("There can only be one root segment. This is a bug in React.");a.completedRootSegment=c}a.pendingRootTasks--;0===a.pendingRootTasks&&(a.onShellError=X,b=a.onShellReady,b())}else b.pendingTasks--,b.forceClientRender||(0===b.pendingTasks?(c.parentFlushed&&1===c.status&&Zc(b,c),b.parentFlushed&&a.completedBoundaries.push(b),b.fallbackAbortableTasks.forEach(ad,a),b.fallbackAbortableTasks.clear()):c.parentFlushed&&
1===c.status&&(Zc(b,c),1===b.completedSegments.length&&b.parentFlushed&&a.partialBoundaries.push(b)));a.allPendingTasks--;0===a.allPendingTasks&&(a=a.onAllReady,a())}
function Qc(a){if(2!==a.status){var b=P,c=Nc.current;Nc.current=Mc;var d=Lc;Lc=a.responseState;try{var f=a.pingedTasks,e;for(e=0;e<f.length;e++){var g=f[e];var h=a,m=g.blockedSegment;if(0===m.status){nc(g.context);try{Z(h,g,g.node),m.lastPushedText&&m.textEmbedded&&m.chunks.push(za),g.abortSet.delete(g),m.status=1,bd(h,g.blockedBoundary,m)}catch(E){if(Ec(),"object"===typeof E&&null!==E&&"function"===typeof E.then){var n=g.ping;E.then(n,n)}else{g.abortSet.delete(g);m.status=4;var p=g.blockedBoundary,
v=E,C=Y(h,v);null===p?Tc(h,v):(p.pendingTasks--,p.forceClientRender||(p.forceClientRender=!0,p.errorDigest=C,p.parentFlushed&&h.clientRenderedBoundaries.push(p)));h.allPendingTasks--;if(0===h.allPendingTasks){var D=h.onAllReady;D()}}}finally{}}}f.splice(0,e);null!==a.destination&&dd(a,a.destination)}catch(E){Y(a,E),Tc(a,E)}finally{Lc=d,Nc.current=c,c===Mc&&nc(b)}}}
function ed(a,b,c){c.parentFlushed=!0;switch(c.status){case 0:var d=c.id=a.nextSegmentId++;c.lastPushedText=!1;c.textEmbedded=!1;a=a.responseState;r(b,Sa);r(b,a.placeholderPrefix);a=d.toString(16);r(b,a);return w(b,Ta);case 1:c.status=2;var f=!0;d=c.chunks;var e=0;c=c.children;for(var g=0;g<c.length;g++){for(f=c[g];e<f.index;e++)r(b,d[e]);f=fd(a,b,f)}for(;e<d.length-1;e++)r(b,d[e]);e<d.length&&(f=w(b,d[e]));return f;default:throw Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
}}
function fd(a,b,c){var d=c.boundary;if(null===d)return ed(a,b,c);d.parentFlushed=!0;if(d.forceClientRender)d=d.errorDigest,w(b,Xa),r(b,Za),d&&(r(b,ab),r(b,F(d)),r(b,$a)),w(b,bb),ed(a,b,c);else if(0<d.pendingTasks){d.rootSegmentID=a.nextSegmentId++;0<d.completedSegments.length&&a.partialBoundaries.push(d);var f=a.responseState;var e=f.nextSuspenseID++;f=x(f.boundaryPrefix+e.toString(16));d=d.id=f;cb(b,a.responseState,d);ed(a,b,c)}else if(d.byteSize>a.progressiveChunkSize)d.rootSegmentID=a.nextSegmentId++,a.completedBoundaries.push(d),
cb(b,a.responseState,d.id),ed(a,b,c);else{w(b,Ua);c=d.completedSegments;if(1!==c.length)throw Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");fd(a,b,c[0])}return w(b,Ya)}function gd(a,b,c){yb(b,a.responseState,c.formatContext,c.id);fd(a,b,c);return zb(b,c.formatContext)}
function hd(a,b,c){for(var d=c.completedSegments,f=0;f<d.length;f++)id(a,b,c,d[f]);d.length=0;a=a.responseState;d=c.id;c=c.rootSegmentID;r(b,a.startInlineScript);a.sentCompleteBoundaryFunction?r(b,Gb):(a.sentCompleteBoundaryFunction=!0,r(b,Fb));if(null===d)throw Error("An ID must have been assigned before we can complete the boundary.");c=c.toString(16);r(b,d);r(b,Hb);r(b,a.segmentPrefix);r(b,c);return w(b,Ib)}
function id(a,b,c,d){if(2===d.status)return!0;var f=d.id;if(-1===f){if(-1===(d.id=c.rootSegmentID))throw Error("A root segment ID must have been assigned by now. This is a bug in React.");return gd(a,b,d)}gd(a,b,d);a=a.responseState;r(b,a.startInlineScript);a.sentCompleteSegmentFunction?r(b,Bb):(a.sentCompleteSegmentFunction=!0,r(b,Ab));r(b,a.segmentPrefix);f=f.toString(16);r(b,f);r(b,Cb);r(b,a.placeholderPrefix);r(b,f);return w(b,Db)}
function dd(a,b){k=new Uint8Array(2048);l=0;q=!0;try{var c=a.completedRootSegment;if(null!==c&&0===a.pendingRootTasks){fd(a,b,c);a.completedRootSegment=null;var d=a.responseState.bootstrapChunks;for(c=0;c<d.length-1;c++)r(b,d[c]);c<d.length&&w(b,d[c])}var f=a.clientRenderedBoundaries,e;for(e=0;e<f.length;e++){var g=f[e];d=b;var h=a.responseState,m=g.id,n=g.errorDigest,p=g.errorMessage,v=g.errorComponentStack;r(d,h.startInlineScript);h.sentClientRenderFunction?r(d,Kb):(h.sentClientRenderFunction=!0,
r(d,Jb));if(null===m)throw Error("An ID must have been assigned before we can complete the boundary.");r(d,m);r(d,Lb);if(n||p||v)r(d,Nb),r(d,Pb(n||""));if(p||v)r(d,Nb),r(d,Pb(p||""));v&&(r(d,Nb),r(d,Pb(v)));if(!w(d,Mb)){a.destination=null;e++;f.splice(0,e);return}}f.splice(0,e);var C=a.completedBoundaries;for(e=0;e<C.length;e++)if(!hd(a,b,C[e])){a.destination=null;e++;C.splice(0,e);return}C.splice(0,e);ca(b);k=new Uint8Array(2048);l=0;q=!0;var D=a.partialBoundaries;for(e=0;e<D.length;e++){var E=D[e];
a:{f=a;g=b;var na=E.completedSegments;for(h=0;h<na.length;h++)if(!id(f,g,E,na[h])){h++;na.splice(0,h);var Eb=!1;break a}na.splice(0,h);Eb=!0}if(!Eb){a.destination=null;e++;D.splice(0,e);return}}D.splice(0,e);var oa=a.completedBoundaries;for(e=0;e<oa.length;e++)if(!hd(a,b,oa[e])){a.destination=null;e++;oa.splice(0,e);return}oa.splice(0,e)}finally{ca(b),"function"===typeof b.flush&&b.flush(),0===a.allPendingTasks&&0===a.pingedTasks.length&&0===a.clientRenderedBoundaries.length&&0===a.completedBoundaries.length&&
b.end()}}function jd(a){setImmediate(function(){return Qc(a)})}function kd(a,b){if(1===a.status)a.status=2,b.destroy(a.fatalError);else if(2!==a.status&&null===a.destination){a.destination=b;try{dd(a,b)}catch(c){Y(a,c),Tc(a,c)}}}function ld(a,b){try{var c=a.abortableTasks;c.forEach(function(c){return cd(c,a,b)});c.clear();null!==a.destination&&dd(a,a.destination)}catch(d){Y(a,d),Tc(a,d)}}function md(a,b){return function(){return kd(b,a)}}function nd(a,b){return function(){return ld(a,b)}}
function od(a,b){var c=b?b.identifierPrefix:void 0,d=b?b.nonce:void 0,f=b?b.bootstrapScriptContent:void 0,e=b?b.bootstrapScripts:void 0;var g=b?b.bootstrapModules:void 0;c=void 0===c?"":c;d=void 0===d?ra:x('<script nonce="'+F(d)+'">');var h=[];void 0!==f&&h.push(d,(""+f).replace(wa,xa),sa);if(void 0!==e)for(f=0;f<e.length;f++)h.push(ta,F(e[f]),va);if(void 0!==g)for(e=0;e<g.length;e++)h.push(ua,F(g[e]),va);g={bootstrapChunks:h,startInlineScript:d,placeholderPrefix:x(c+"P:"),segmentPrefix:x(c+"S:"),
boundaryPrefix:c+"B:",idPrefix:c,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1};e=b?b.namespaceURI:void 0;e=G("http://www.w3.org/2000/svg"===e?2:"http://www.w3.org/1998/Math/MathML"===e?3:0,null);f=b?b.progressiveChunkSize:void 0;d=b?b.onError:void 0;h=b?b.onAllReady:void 0;var m=b?b.onShellReady:void 0,n=b?b.onShellError:void 0;b=[];c=new Set;g={destination:null,responseState:g,progressiveChunkSize:void 0===f?12800:f,status:0,fatalError:null,
nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:c,pingedTasks:b,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:void 0===d?Oc:d,onAllReady:void 0===h?X:h,onShellReady:void 0===m?X:m,onShellError:void 0===n?X:n,onFatalError:X};e=Sc(g,0,null,e,!1,!1);e.parentFlushed=!0;a=Rc(g,a,null,e,c,hc,null,qc);b.push(a);return g}
exports.renderToPipeableStream=function(a,b){var c=od(a,b),d=!1;jd(c);return{pipe:function(a){if(d)throw Error("React currently only supports piping to one writable stream.");d=!0;kd(c,a);a.on("drain",md(a,c));a.on("error",nd(c,Error("The destination stream errored while writing data.")));a.on("close",nd(c,Error("The destination stream closed early.")));return a},abort:function(a){ld(c,a)}}};exports.version="18.3.1";


/***/ }),

/***/ 4362:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


var l, s;
if (true) {
  l = __webpack_require__(6711);
  s = __webpack_require__(6513);
} else {}

__webpack_unused_export__ = l.version;
__webpack_unused_export__ = l.renderToString;
__webpack_unused_export__ = l.renderToStaticMarkup;
__webpack_unused_export__ = l.renderToNodeStream;
__webpack_unused_export__ = l.renderToStaticNodeStream;
exports.eU = s.renderToPipeableStream;


/***/ }),

/***/ 115:
/***/ ((module) => {

/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */

var hasElementType = typeof Element !== 'undefined';
var hasMap = typeof Map === 'function';
var hasSet = typeof Set === 'function';
var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;

// Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

function equal(a, b) {
  // START: fast-deep-equal es6/index.js 3.1.3
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    // START: Modifications:
    // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
    //    to co-exist with es5.
    // 2. Replace `for of` with es5 compliant iteration using `for`.
    //    Basically, take:
    //
    //    ```js
    //    for (i of a.entries())
    //      if (!b.has(i[0])) return false;
    //    ```
    //
    //    ... and convert to:
    //
    //    ```js
    //    it = a.entries();
    //    while (!(i = it.next()).done)
    //      if (!b.has(i.value[0])) return false;
    //    ```
    //
    //    **Note**: `i` access switches to `i.value`.
    var it;
    if (hasMap && (a instanceof Map) && (b instanceof Map)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!equal(i.value[1], b.get(i.value[0]))) return false;
      return true;
    }

    if (hasSet && (a instanceof Set) && (b instanceof Set)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      return true;
    }
    // END: Modifications

    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (a[i] !== b[i]) return false;
      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    // START: Modifications:
    // Apply guards for `Object.create(null)` handling. See:
    // - https://github.com/FormidableLabs/react-fast-compare/issues/64
    // - https://github.com/epoberezkin/fast-deep-equal/issues/49
    if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf === 'function' && typeof b.valueOf === 'function') return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString && typeof a.toString === 'function' && typeof b.toString === 'function') return a.toString() === b.toString();
    // END: Modifications

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    // END: fast-deep-equal

    // START: react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element) return false;

    // custom handling for React/Preact
    for (i = length; i-- !== 0;) {
      if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner
        // Preact-specific: avoid traversing Preact elements' __v and __o
        //    __v = $_original / $_vnode
        //    __o = $_owner
        // These properties contain circular references and are not needed when
        // comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of elements

        continue;
      }

      // all other properties should be traversed as usual
      if (!equal(a[keys[i]], b[keys[i]])) return false;
    }
    // END: react-fast-compare

    // START: fast-deep-equal
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

module.exports = function isEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (((error.message || '').match(/stack|recursion/i))) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('react-fast-compare cannot handle circular refs');
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};


/***/ }),

/***/ 545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mg: () => (/* binding */ W),
/* harmony export */   vd: () => (/* binding */ q)
/* harmony export */ });
/* unused harmony export HelmetData */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(115);
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_fast_compare__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7927);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2833);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_3__);
function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a.apply(this,arguments)}function s(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,c(t,e)}function c(t,e){return c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},c(t,e)}function u(t,e){if(null==t)return{};var r,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)e.indexOf(r=o[n])>=0||(i[r]=t[r]);return i}var l={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title",FRAGMENT:"Symbol(react.fragment)"},p={rel:["amphtml","canonical","alternate"]},f={type:["application/ld+json"]},d={charset:"",name:["robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]},h=Object.keys(l).map(function(t){return l[t]}),m={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},y=Object.keys(m).reduce(function(t,e){return t[m[e]]=e,t},{}),T=function(t,e){for(var r=t.length-1;r>=0;r-=1){var n=t[r];if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}return null},g=function(t){var e=T(t,l.TITLE),r=T(t,"titleTemplate");if(Array.isArray(e)&&(e=e.join("")),r&&e)return r.replace(/%s/g,function(){return e});var n=T(t,"defaultTitle");return e||n||void 0},b=function(t){return T(t,"onChangeClientState")||function(){}},v=function(t,e){return e.filter(function(e){return void 0!==e[t]}).map(function(e){return e[t]}).reduce(function(t,e){return a({},t,e)},{})},A=function(t,e){return e.filter(function(t){return void 0!==t[l.BASE]}).map(function(t){return t[l.BASE]}).reverse().reduce(function(e,r){if(!e.length)for(var n=Object.keys(r),i=0;i<n.length;i+=1){var o=n[i].toLowerCase();if(-1!==t.indexOf(o)&&r[o])return e.concat(r)}return e},[])},C=function(t,e,r){var n={};return r.filter(function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&console&&"function"==typeof console.warn&&console.warn("Helmet: "+t+' should be of type "Array". Instead found type "'+typeof e[t]+'"'),!1)}).map(function(e){return e[t]}).reverse().reduce(function(t,r){var i={};r.filter(function(t){for(var r,o=Object.keys(t),a=0;a<o.length;a+=1){var s=o[a],c=s.toLowerCase();-1===e.indexOf(c)||"rel"===r&&"canonical"===t[r].toLowerCase()||"rel"===c&&"stylesheet"===t[c].toLowerCase()||(r=c),-1===e.indexOf(s)||"innerHTML"!==s&&"cssText"!==s&&"itemprop"!==s||(r=s)}if(!r||!t[r])return!1;var u=t[r].toLowerCase();return n[r]||(n[r]={}),i[r]||(i[r]={}),!n[r][u]&&(i[r][u]=!0,!0)}).reverse().forEach(function(e){return t.push(e)});for(var o=Object.keys(i),s=0;s<o.length;s+=1){var c=o[s],u=a({},n[c],i[c]);n[c]=u}return t},[]).reverse()},O=function(t,e){if(Array.isArray(t)&&t.length)for(var r=0;r<t.length;r+=1)if(t[r][e])return!0;return!1},S=function(t){return Array.isArray(t)?t.join(""):t},E=function(t,e){return Array.isArray(t)?t.reduce(function(t,r){return function(t,e){for(var r=Object.keys(t),n=0;n<r.length;n+=1)if(e[r[n]]&&e[r[n]].includes(t[r[n]]))return!0;return!1}(r,e)?t.priority.push(r):t.default.push(r),t},{priority:[],default:[]}):{default:t}},I=function(t,e){var r;return a({},t,((r={})[e]=void 0,r))},P=[l.NOSCRIPT,l.SCRIPT,l.STYLE],w=function(t,e){return void 0===e&&(e=!0),!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},x=function(t){return Object.keys(t).reduce(function(e,r){var n=void 0!==t[r]?r+'="'+t[r]+'"':""+r;return e?e+" "+n:n},"")},L=function(t,e){return void 0===e&&(e={}),Object.keys(t).reduce(function(e,r){return e[m[r]||r]=t[r],e},e)},j=function(e,r){return r.map(function(r,n){var i,o=((i={key:n})["data-rh"]=!0,i);return Object.keys(r).forEach(function(t){var e=m[t]||t;"innerHTML"===e||"cssText"===e?o.dangerouslySetInnerHTML={__html:r.innerHTML||r.cssText}:o[e]=r[t]}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(e,o)})},M=function(e,r,n){switch(e){case l.TITLE:return{toComponent:function(){return n=r.titleAttributes,(i={key:e=r.title})["data-rh"]=!0,o=L(n,i),[react__WEBPACK_IMPORTED_MODULE_0__.createElement(l.TITLE,o,e)];var e,n,i,o},toString:function(){return function(t,e,r,n){var i=x(r),o=S(e);return i?"<"+t+' data-rh="true" '+i+">"+w(o,n)+"</"+t+">":"<"+t+' data-rh="true">'+w(o,n)+"</"+t+">"}(e,r.title,r.titleAttributes,n)}};case"bodyAttributes":case"htmlAttributes":return{toComponent:function(){return L(r)},toString:function(){return x(r)}};default:return{toComponent:function(){return j(e,r)},toString:function(){return function(t,e,r){return e.reduce(function(e,n){var i=Object.keys(n).filter(function(t){return!("innerHTML"===t||"cssText"===t)}).reduce(function(t,e){var i=void 0===n[e]?e:e+'="'+w(n[e],r)+'"';return t?t+" "+i:i},""),o=n.innerHTML||n.cssText||"",a=-1===P.indexOf(t);return e+"<"+t+' data-rh="true" '+i+(a?"/>":">"+o+"</"+t+">")},"")}(e,r,n)}}}},k=function(t){var e=t.baseTag,r=t.bodyAttributes,n=t.encode,i=t.htmlAttributes,o=t.noscriptTags,a=t.styleTags,s=t.title,c=void 0===s?"":s,u=t.titleAttributes,h=t.linkTags,m=t.metaTags,y=t.scriptTags,T={toComponent:function(){},toString:function(){return""}};if(t.prioritizeSeoTags){var g=function(t){var e=t.linkTags,r=t.scriptTags,n=t.encode,i=E(t.metaTags,d),o=E(e,p),a=E(r,f);return{priorityMethods:{toComponent:function(){return[].concat(j(l.META,i.priority),j(l.LINK,o.priority),j(l.SCRIPT,a.priority))},toString:function(){return M(l.META,i.priority,n)+" "+M(l.LINK,o.priority,n)+" "+M(l.SCRIPT,a.priority,n)}},metaTags:i.default,linkTags:o.default,scriptTags:a.default}}(t);T=g.priorityMethods,h=g.linkTags,m=g.metaTags,y=g.scriptTags}return{priority:T,base:M(l.BASE,e,n),bodyAttributes:M("bodyAttributes",r,n),htmlAttributes:M("htmlAttributes",i,n),link:M(l.LINK,h,n),meta:M(l.META,m,n),noscript:M(l.NOSCRIPT,o,n),script:M(l.SCRIPT,y,n),style:M(l.STYLE,a,n),title:M(l.TITLE,{title:c,titleAttributes:u},n)}},H=[],N=function(t,e){var r=this;void 0===e&&(e="undefined"!=typeof document),this.instances=[],this.value={setHelmet:function(t){r.context.helmet=t},helmetInstances:{get:function(){return r.canUseDOM?H:r.instances},add:function(t){(r.canUseDOM?H:r.instances).push(t)},remove:function(t){var e=(r.canUseDOM?H:r.instances).indexOf(t);(r.canUseDOM?H:r.instances).splice(e,1)}}},this.context=t,this.canUseDOM=e,e||(t.helmet=k({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))},R=react__WEBPACK_IMPORTED_MODULE_0__.createContext({}),D=prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({setHelmet:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),helmetInstances:prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({get:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),add:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),remove:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)})}),U="undefined"!=typeof document,q=/*#__PURE__*/function(e){function r(t){var n;return(n=e.call(this,t)||this).helmetData=new N(n.props.context,r.canUseDOM),n}return s(r,e),r.prototype.render=function(){/*#__PURE__*/return react__WEBPACK_IMPORTED_MODULE_0__.createElement(R.Provider,{value:this.helmetData.value},this.props.children)},r}(react__WEBPACK_IMPORTED_MODULE_0__.Component);q.canUseDOM=U,q.propTypes={context:prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({helmet:prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape()}),children:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().node).isRequired},q.defaultProps={context:{}},q.displayName="HelmetProvider";var Y=function(t,e){var r,n=document.head||document.querySelector(l.HEAD),i=n.querySelectorAll(t+"[data-rh]"),o=[].slice.call(i),a=[];return e&&e.length&&e.forEach(function(e){var n=document.createElement(t);for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&("innerHTML"===i?n.innerHTML=e.innerHTML:"cssText"===i?n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText)):n.setAttribute(i,void 0===e[i]?"":e[i]));n.setAttribute("data-rh","true"),o.some(function(t,e){return r=e,n.isEqualNode(t)})?o.splice(r,1):a.push(n)}),o.forEach(function(t){return t.parentNode.removeChild(t)}),a.forEach(function(t){return n.appendChild(t)}),{oldTags:o,newTags:a}},B=function(t,e){var r=document.getElementsByTagName(t)[0];if(r){for(var n=r.getAttribute("data-rh"),i=n?n.split(","):[],o=[].concat(i),a=Object.keys(e),s=0;s<a.length;s+=1){var c=a[s],u=e[c]||"";r.getAttribute(c)!==u&&r.setAttribute(c,u),-1===i.indexOf(c)&&i.push(c);var l=o.indexOf(c);-1!==l&&o.splice(l,1)}for(var p=o.length-1;p>=0;p-=1)r.removeAttribute(o[p]);i.length===o.length?r.removeAttribute("data-rh"):r.getAttribute("data-rh")!==a.join(",")&&r.setAttribute("data-rh",a.join(","))}},K=function(t,e){var r=t.baseTag,n=t.htmlAttributes,i=t.linkTags,o=t.metaTags,a=t.noscriptTags,s=t.onChangeClientState,c=t.scriptTags,u=t.styleTags,p=t.title,f=t.titleAttributes;B(l.BODY,t.bodyAttributes),B(l.HTML,n),function(t,e){void 0!==t&&document.title!==t&&(document.title=S(t)),B(l.TITLE,e)}(p,f);var d={baseTag:Y(l.BASE,r),linkTags:Y(l.LINK,i),metaTags:Y(l.META,o),noscriptTags:Y(l.NOSCRIPT,a),scriptTags:Y(l.SCRIPT,c),styleTags:Y(l.STYLE,u)},h={},m={};Object.keys(d).forEach(function(t){var e=d[t],r=e.newTags,n=e.oldTags;r.length&&(h[t]=r),n.length&&(m[t]=d[t].oldTags)}),e&&e(),s(t,h,m)},_=null,z=/*#__PURE__*/function(t){function e(){for(var e,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))||this).rendered=!1,e}s(e,t);var r=e.prototype;return r.shouldComponentUpdate=function(t){return!shallowequal__WEBPACK_IMPORTED_MODULE_3___default()(t,this.props)},r.componentDidUpdate=function(){this.emitChange()},r.componentWillUnmount=function(){this.props.context.helmetInstances.remove(this),this.emitChange()},r.emitChange=function(){var t,e,r=this.props.context,n=r.setHelmet,i=null,o=(t=r.helmetInstances.get().map(function(t){var e=a({},t.props);return delete e.context,e}),{baseTag:A(["href"],t),bodyAttributes:v("bodyAttributes",t),defer:T(t,"defer"),encode:T(t,"encodeSpecialCharacters"),htmlAttributes:v("htmlAttributes",t),linkTags:C(l.LINK,["rel","href"],t),metaTags:C(l.META,["name","charset","http-equiv","property","itemprop"],t),noscriptTags:C(l.NOSCRIPT,["innerHTML"],t),onChangeClientState:b(t),scriptTags:C(l.SCRIPT,["src","innerHTML"],t),styleTags:C(l.STYLE,["cssText"],t),title:g(t),titleAttributes:v("titleAttributes",t),prioritizeSeoTags:O(t,"prioritizeSeoTags")});q.canUseDOM?(e=o,_&&cancelAnimationFrame(_),e.defer?_=requestAnimationFrame(function(){K(e,function(){_=null})}):(K(e),_=null)):k&&(i=k(o)),n(i)},r.init=function(){this.rendered||(this.rendered=!0,this.props.context.helmetInstances.add(this),this.emitChange())},r.render=function(){return this.init(),null},e}(react__WEBPACK_IMPORTED_MODULE_0__.Component);z.propTypes={context:D.isRequired},z.displayName="HelmetDispatcher";var F=["children"],G=["children"],W=/*#__PURE__*/function(e){function r(){return e.apply(this,arguments)||this}s(r,e);var o=r.prototype;return o.shouldComponentUpdate=function(t){return!react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default()(I(this.props,"helmetData"),I(t,"helmetData"))},o.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case l.SCRIPT:case l.NOSCRIPT:return{innerHTML:e};case l.STYLE:return{cssText:e};default:throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")}},o.flattenArrayTypeChildren=function(t){var e,r=t.child,n=t.arrayTypeChildren;return a({},n,((e={})[r.type]=[].concat(n[r.type]||[],[a({},t.newChildProps,this.mapNestedChildrenToProps(r,t.nestedChildren))]),e))},o.mapObjectTypeChildren=function(t){var e,r,n=t.child,i=t.newProps,o=t.newChildProps,s=t.nestedChildren;switch(n.type){case l.TITLE:return a({},i,((e={})[n.type]=s,e.titleAttributes=a({},o),e));case l.BODY:return a({},i,{bodyAttributes:a({},o)});case l.HTML:return a({},i,{htmlAttributes:a({},o)});default:return a({},i,((r={})[n.type]=a({},o),r))}},o.mapArrayTypeChildrenToProps=function(t,e){var r=a({},e);return Object.keys(t).forEach(function(e){var n;r=a({},r,((n={})[e]=t[e],n))}),r},o.warnOnInvalidChildren=function(t,e){return invariant__WEBPACK_IMPORTED_MODULE_2___default()(h.some(function(e){return t.type===e}),"function"==typeof t.type?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":"Only elements types "+h.join(", ")+" are allowed. Helmet does not support rendering <"+t.type+"> elements. Refer to our API for more information."),invariant__WEBPACK_IMPORTED_MODULE_2___default()(!e||"string"==typeof e||Array.isArray(e)&&!e.some(function(t){return"string"!=typeof t}),"Helmet expects a string as a child of <"+t.type+">. Did you forget to wrap your children in braces? ( <"+t.type+">{``}</"+t.type+"> ) Refer to our API for more information."),!0},o.mapChildrenToProps=function(e,r){var n=this,i={};return react__WEBPACK_IMPORTED_MODULE_0__.Children.forEach(e,function(t){if(t&&t.props){var e=t.props,o=e.children,a=u(e,F),s=Object.keys(a).reduce(function(t,e){return t[y[e]||e]=a[e],t},{}),c=t.type;switch("symbol"==typeof c?c=c.toString():n.warnOnInvalidChildren(t,o),c){case l.FRAGMENT:r=n.mapChildrenToProps(o,r);break;case l.LINK:case l.META:case l.NOSCRIPT:case l.SCRIPT:case l.STYLE:i=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:i,newChildProps:s,nestedChildren:o});break;default:r=n.mapObjectTypeChildren({child:t,newProps:r,newChildProps:s,nestedChildren:o})}}}),this.mapArrayTypeChildrenToProps(i,r)},o.render=function(){var e=this.props,r=e.children,n=u(e,G),i=a({},n),o=n.helmetData;return r&&(i=this.mapChildrenToProps(r,i)),!o||o instanceof N||(o=new N(o.context,o.instances)),o?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(z,a({},i,{context:o.value,helmetData:void 0})):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(R.Consumer,null,function(e){/*#__PURE__*/return react__WEBPACK_IMPORTED_MODULE_0__.createElement(z,a({},i,{context:e}))})},r}(react__WEBPACK_IMPORTED_MODULE_0__.Component);W.propTypes={base:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),bodyAttributes:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_4___default().node)),(prop_types__WEBPACK_IMPORTED_MODULE_4___default().node)]),defaultTitle:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),defer:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),encodeSpecialCharacters:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),htmlAttributes:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),link:prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)),meta:prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)),noscript:prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)),onChangeClientState:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),script:prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)),style:prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)),title:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),titleAttributes:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),titleTemplate:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),prioritizeSeoTags:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),helmetData:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)},W.defaultProps={defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1},W.displayName="Helmet";
//# sourceMappingURL=index.module.js.map


/***/ }),

/***/ 2799:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;
exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isAsyncMode=function(a){return A(a)||z(a)===l};exports.isConcurrentMode=A;exports.isContextConsumer=function(a){return z(a)===k};exports.isContextProvider=function(a){return z(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return z(a)===n};exports.isFragment=function(a){return z(a)===e};exports.isLazy=function(a){return z(a)===t};
exports.isMemo=function(a){return z(a)===r};exports.isPortal=function(a){return z(a)===d};exports.isProfiler=function(a){return z(a)===g};exports.isStrictMode=function(a){return z(a)===f};exports.isSuspense=function(a){return z(a)===p};
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};exports.typeOf=z;


/***/ }),

/***/ 4363:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(2799);
} else {}


/***/ }),

/***/ 3259:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = __webpack_require__(6540);

var ALL_INITIALIZERS = [];
var READY_INITIALIZERS = [];

function isWebpackReady(getModuleIds) {
  if (false) {}

  return getModuleIds().every(function (moduleId) {
    return typeof moduleId !== "undefined" && typeof __webpack_require__.m[moduleId] !== "undefined";
  });
}

var LoadableCaptureContext = React.createContext(null);

function load(loader) {
  var promise = loader();
  var state = {
    loading: true,
    loaded: null,
    error: null
  };
  state.promise = promise.then(function (loaded) {
    state.loading = false;
    state.loaded = loaded;
    return loaded;
  }).catch(function (err) {
    state.loading = false;
    state.error = err;
    throw err;
  });
  return state;
}

function loadMap(obj) {
  var state = {
    loading: false,
    loaded: {},
    error: null
  };
  var promises = [];

  try {
    Object.keys(obj).forEach(function (key) {
      var result = load(obj[key]);

      if (!result.loading) {
        state.loaded[key] = result.loaded;
        state.error = result.error;
      } else {
        state.loading = true;
      }

      promises.push(result.promise);
      result.promise.then(function (res) {
        state.loaded[key] = res;
      }).catch(function (err) {
        state.error = err;
      });
    });
  } catch (err) {
    state.error = err;
  }

  state.promise = Promise.all(promises).then(function (res) {
    state.loading = false;
    return res;
  }).catch(function (err) {
    state.loading = false;
    throw err;
  });
  return state;
}

function resolve(obj) {
  return obj && obj.__esModule ? obj.default : obj;
}

function render(loaded, props) {
  return React.createElement(resolve(loaded), props);
}

function createLoadableComponent(loadFn, options) {
  var _class, _temp;

  if (!options.loading) {
    throw new Error("react-loadable requires a `loading` component");
  }

  var opts = _extends({
    loader: null,
    loading: null,
    delay: 200,
    timeout: null,
    render: render,
    webpack: null,
    modules: null
  }, options);

  var res = null;

  function init() {
    if (!res) {
      res = loadFn(opts.loader);
    }

    return res.promise;
  }

  ALL_INITIALIZERS.push(init);

  if (typeof opts.webpack === "function") {
    READY_INITIALIZERS.push(function () {
      if (isWebpackReady(opts.webpack)) {
        return init();
      }
    });
  }

  return _temp = _class =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(LoadableComponent, _React$Component);

    function LoadableComponent(props) {
      var _this;

      _this = _React$Component.call(this, props) || this;

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "retry", function () {
        _this.setState({
          error: null,
          loading: true,
          timedOut: false
        });

        res = loadFn(opts.loader);

        _this._loadModule();
      });

      init();
      _this.state = {
        error: res.error,
        pastDelay: false,
        timedOut: false,
        loading: res.loading,
        loaded: res.loaded
      };
      return _this;
    }

    LoadableComponent.preload = function preload() {
      return init();
    };

    var _proto = LoadableComponent.prototype;

    _proto.UNSAFE_componentWillMount = function UNSAFE_componentWillMount() {
      this._loadModule();
    };

    _proto.componentDidMount = function componentDidMount() {
      this._mounted = true;
    };

    _proto._loadModule = function _loadModule() {
      var _this2 = this;

      if (this.context && Array.isArray(opts.modules)) {
        opts.modules.forEach(function (moduleName) {
          _this2.context.report(moduleName);
        });
      }

      if (!res.loading) {
        return;
      }

      var setStateWithMountCheck = function setStateWithMountCheck(newState) {
        if (!_this2._mounted) {
          return;
        }

        _this2.setState(newState);
      };

      if (typeof opts.delay === 'number') {
        if (opts.delay === 0) {
          this.setState({
            pastDelay: true
          });
        } else {
          this._delay = setTimeout(function () {
            setStateWithMountCheck({
              pastDelay: true
            });
          }, opts.delay);
        }
      }

      if (typeof opts.timeout === "number") {
        this._timeout = setTimeout(function () {
          setStateWithMountCheck({
            timedOut: true
          });
        }, opts.timeout);
      }

      var update = function update() {
        setStateWithMountCheck({
          error: res.error,
          loaded: res.loaded,
          loading: res.loading
        });

        _this2._clearTimeouts();
      };

      res.promise.then(function () {
        update();
        return null;
      }).catch(function (err) {
        update();
        return null;
      });
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this._mounted = false;

      this._clearTimeouts();
    };

    _proto._clearTimeouts = function _clearTimeouts() {
      clearTimeout(this._delay);
      clearTimeout(this._timeout);
    };

    _proto.render = function render() {
      if (this.state.loading || this.state.error) {
        return React.createElement(opts.loading, {
          isLoading: this.state.loading,
          pastDelay: this.state.pastDelay,
          timedOut: this.state.timedOut,
          error: this.state.error,
          retry: this.retry
        });
      } else if (this.state.loaded) {
        return opts.render(this.state.loaded, this.props);
      } else {
        return null;
      }
    };

    return LoadableComponent;
  }(React.Component), _defineProperty(_class, "contextType", LoadableCaptureContext), _temp;
}

function Loadable(opts) {
  return createLoadableComponent(load, opts);
}

function LoadableMap(opts) {
  if (typeof opts.render !== "function") {
    throw new Error("LoadableMap requires a `render(loaded, props)` function");
  }

  return createLoadableComponent(loadMap, opts);
}

Loadable.Map = LoadableMap;

var Capture =
/*#__PURE__*/
function (_React$Component2) {
  _inheritsLoose(Capture, _React$Component2);

  function Capture() {
    return _React$Component2.apply(this, arguments) || this;
  }

  var _proto2 = Capture.prototype;

  _proto2.render = function render() {
    return React.createElement(LoadableCaptureContext.Provider, {
      value: {
        report: this.props.report
      }
    }, React.Children.only(this.props.children));
  };

  return Capture;
}(React.Component);

Loadable.Capture = Capture;

function flushInitializers(initializers) {
  var promises = [];

  while (initializers.length) {
    var init = initializers.pop();
    promises.push(init());
  }

  return Promise.all(promises).then(function () {
    if (initializers.length) {
      return flushInitializers(initializers);
    }
  });
}

Loadable.preloadAll = function () {
  return new Promise(function (resolve, reject) {
    flushInitializers(ALL_INITIALIZERS).then(resolve, reject);
  });
};

Loadable.preloadReady = function () {
  return new Promise(function (resolve, reject) {
    // We always will resolve, errors should be handled within loading UIs.
    flushInitializers(READY_INITIALIZERS).then(resolve, resolve);
  });
};

module.exports = Loadable;

/***/ }),

/***/ 2831:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ matchRoutes),
/* harmony export */   v: () => (/* binding */ renderRoutes)
/* harmony export */ });
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6347);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8168);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);




function matchRoutes(routes, pathname,
/*not public API*/
branch) {
  if (branch === void 0) {
    branch = [];
  }

  routes.some(function (route) {
    var match = route.path ? (0,react_router__WEBPACK_IMPORTED_MODULE_1__/* .matchPath */ .B6)(pathname, route) : branch.length ? branch[branch.length - 1].match // use parent match
    : react_router__WEBPACK_IMPORTED_MODULE_1__/* .Router */ .Ix.computeRootMatch(pathname); // use default "root" match

    if (match) {
      branch.push({
        route: route,
        match: match
      });

      if (route.routes) {
        matchRoutes(route.routes, pathname, branch);
      }
    }

    return match;
  });
  return branch;
}

function renderRoutes(routes, extraProps, switchProps) {
  if (extraProps === void 0) {
    extraProps = {};
  }

  if (switchProps === void 0) {
    switchProps = {};
  }

  return routes ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__/* .Switch */ .dO, switchProps, routes.map(function (route, i) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__/* .Route */ .qh, {
      key: route.key || i,
      path: route.path,
      exact: route.exact,
      strict: route.strict,
      render: function render(props) {
        return route.render ? route.render((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({}, props, {}, extraProps, {
          route: route
        })) : react__WEBPACK_IMPORTED_MODULE_0__.createElement(route.component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({}, props, extraProps, {
          route: route
        }));
      }
    });
  })) : null;
}


//# sourceMappingURL=react-router-config.js.map


/***/ }),

/***/ 6347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B6: () => (/* binding */ matchPath),
/* harmony export */   Ix: () => (/* binding */ Router),
/* harmony export */   W6: () => (/* binding */ useHistory),
/* harmony export */   XZ: () => (/* binding */ context),
/* harmony export */   dO: () => (/* binding */ Switch),
/* harmony export */   kO: () => (/* binding */ StaticRouter),
/* harmony export */   qh: () => (/* binding */ Route),
/* harmony export */   zy: () => (/* binding */ useLocation)
/* harmony export */ });
/* unused harmony exports MemoryRouter, Prompt, Redirect, __HistoryContext, generatePath, useParams, useRouteMatch, withRouter */
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2892);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1513);
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1561);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8168);
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5302);
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path_to_regexp__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4363);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8587);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4146);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3__);












var MAX_SIGNED_31_BIT_INT = 1073741823;
var commonjsGlobal = typeof globalThis !== "undefined" // 'global proper'
? // eslint-disable-next-line no-undef
globalThis : typeof window !== "undefined" ? window // Browser
: typeof global !== "undefined" ? global // node.js
: {};

function getUniqueId() {
  var key = "__global_unique_id__";
  return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;
} // Inlined Object.is polyfill.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is


function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    // eslint-disable-next-line no-self-compare
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = "__create-react-context-" + getUniqueId() + "__";

  var Provider = /*#__PURE__*/function (_React$Component) {
    (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(Provider, _React$Component);

    function Provider() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.emitter = createEventEmitter(_this.props.value);
      return _this;
    }

    var _proto = Provider.prototype;

    _proto.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0; // No change
        } else {
          changedBits = typeof calculateChangedBits === "function" ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;

          if (false) {}

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    _proto.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(react__WEBPACK_IMPORTED_MODULE_0__.Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object).isRequired, _Provider$childContex);

  var Consumer = /*#__PURE__*/function (_React$Component2) {
    (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(Consumer, _React$Component2);

    function Consumer() {
      var _this2;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      _this2 = _React$Component2.call.apply(_React$Component2, [this].concat(args)) || this;
      _this2.observedBits = void 0;
      _this2.state = {
        value: _this2.getValue()
      };

      _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;

        if ((observedBits & changedBits) !== 0) {
          _this2.setState({
            value: _this2.getValue()
          });
        }
      };

      return _this2;
    }

    var _proto2 = Consumer.prototype;

    _proto2.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    _proto2.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }

      var observedBits = this.props.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    _proto2.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    _proto2.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    _proto2.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(react__WEBPACK_IMPORTED_MODULE_0__.Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object), _Consumer$contextType);
  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

// MIT License
var createContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext || createReactContext;

// TODO: Replace with React.createContext once we can assume React 16+

var createNamedContext = function createNamedContext(name) {
  var context = createContext();
  context.displayName = name;
  return context;
};

var historyContext = /*#__PURE__*/createNamedContext("Router-History");

var context = /*#__PURE__*/createNamedContext("Router");

/**
 * The public API for putting history on context.
 */

var Router = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(Router, _React$Component);

  Router.computeRootMatch = function computeRootMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };

  function Router(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      location: props.history.location
    }; // This is a bit of a hack. We have to start listening for location
    // changes here in the constructor in case there are any <Redirect>s
    // on the initial render. If there are, they will replace/push when
    // they mount and since cDM fires in children before parents, we may
    // get a new location before the <Router> is mounted.

    _this._isMounted = false;
    _this._pendingLocation = null;

    if (!props.staticContext) {
      _this.unlisten = props.history.listen(function (location) {
        _this._pendingLocation = location;
      });
    }

    return _this;
  }

  var _proto = Router.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this._isMounted = true;

    if (this.unlisten) {
      // Any pre-mount location changes have been captured at
      // this point, so unregister the listener.
      this.unlisten();
    }

    if (!this.props.staticContext) {
      this.unlisten = this.props.history.listen(function (location) {
        if (_this2._isMounted) {
          _this2.setState({
            location: location
          });
        }
      });
    }

    if (this._pendingLocation) {
      this.setState({
        location: this._pendingLocation
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.unlisten) {
      this.unlisten();
      this._isMounted = false;
      this._pendingLocation = null;
    }
  };

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(context.Provider, {
      value: {
        history: this.props.history,
        location: this.state.location,
        match: Router.computeRootMatch(this.state.location.pathname),
        staticContext: this.props.staticContext
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(historyContext.Provider, {
      children: this.props.children || null,
      value: this.props.history
    }));
  };

  return Router;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

if (false) {}

/**
 * The public API for a <Router> that stores location in memory.
 */

var MemoryRouter = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = (0,history__WEBPACK_IMPORTED_MODULE_6__/* .createMemoryHistory */ .sC)(_this.props);
    return _this;
  }

  var _proto = MemoryRouter.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return MemoryRouter;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

if (false) {}

var Lifecycle = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(Lifecycle, _React$Component);

  function Lifecycle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Lifecycle.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.onMount) this.props.onMount.call(this, this);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.onUpdate) this.props.onUpdate.call(this, this, prevProps);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.props.onUnmount) this.props.onUnmount.call(this, this);
  };

  _proto.render = function render() {
    return null;
  };

  return Lifecycle;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/**
 * The public API for prompting the user before navigating away from a screen.
 */

function Prompt(_ref) {
  var message = _ref.message,
      _ref$when = _ref.when,
      when = _ref$when === void 0 ? true : _ref$when;
  return /*#__PURE__*/React.createElement(context.Consumer, null, function (context) {
    !context ?  false ? 0 : invariant(false) : void 0;
    if (!when || context.staticContext) return null;
    var method = context.history.block;
    return /*#__PURE__*/React.createElement(Lifecycle, {
      onMount: function onMount(self) {
        self.release = method(message);
      },
      onUpdate: function onUpdate(self, prevProps) {
        if (prevProps.message !== message) {
          self.release();
          self.release = method(message);
        }
      },
      onUnmount: function onUnmount(self) {
        self.release();
      },
      message: message
    });
  });
}

if (false) { var messageType; }

var cache = {};
var cacheLimit = 10000;
var cacheCount = 0;

function compilePath(path) {
  if (cache[path]) return cache[path];
  var generator = pathToRegexp.compile(path);

  if (cacheCount < cacheLimit) {
    cache[path] = generator;
    cacheCount++;
  }

  return generator;
}
/**
 * Public API for generating a URL pathname from a path and parameters.
 */


function generatePath(path, params) {
  if (path === void 0) {
    path = "/";
  }

  if (params === void 0) {
    params = {};
  }

  return path === "/" ? path : compilePath(path)(params, {
    pretty: true
  });
}

/**
 * The public API for navigating programmatically with a component.
 */

function Redirect(_ref) {
  var computedMatch = _ref.computedMatch,
      to = _ref.to,
      _ref$push = _ref.push,
      push = _ref$push === void 0 ? false : _ref$push;
  return /*#__PURE__*/React.createElement(context.Consumer, null, function (context) {
    !context ?  false ? 0 : invariant(false) : void 0;
    var history = context.history,
        staticContext = context.staticContext;
    var method = push ? history.push : history.replace;
    var location = createLocation(computedMatch ? typeof to === "string" ? generatePath(to, computedMatch.params) : _extends({}, to, {
      pathname: generatePath(to.pathname, computedMatch.params)
    }) : to); // When rendering in a static context,
    // set the new location immediately.

    if (staticContext) {
      method(location);
      return null;
    }

    return /*#__PURE__*/React.createElement(Lifecycle, {
      onMount: function onMount() {
        method(location);
      },
      onUpdate: function onUpdate(self, prevProps) {
        var prevLocation = createLocation(prevProps.to);

        if (!locationsAreEqual(prevLocation, _extends({}, location, {
          key: prevLocation.key
        }))) {
          method(location);
        }
      },
      to: to
    });
  });
}

if (false) {}

var cache$1 = {};
var cacheLimit$1 = 10000;
var cacheCount$1 = 0;

function compilePath$1(path, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var pathCache = cache$1[cacheKey] || (cache$1[cacheKey] = {});
  if (pathCache[path]) return pathCache[path];
  var keys = [];
  var regexp = path_to_regexp__WEBPACK_IMPORTED_MODULE_1___default()(path, keys, options);
  var result = {
    regexp: regexp,
    keys: keys
  };

  if (cacheCount$1 < cacheLimit$1) {
    pathCache[path] = result;
    cacheCount$1++;
  }

  return result;
}
/**
 * Public API for matching a URL pathname to a path.
 */


function matchPath(pathname, options) {
  if (options === void 0) {
    options = {};
  }

  if (typeof options === "string" || Array.isArray(options)) {
    options = {
      path: options
    };
  }

  var _options = options,
      path = _options.path,
      _options$exact = _options.exact,
      exact = _options$exact === void 0 ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === void 0 ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === void 0 ? false : _options$sensitive;
  var paths = [].concat(path);
  return paths.reduce(function (matched, path) {
    if (!path && path !== "") return null;
    if (matched) return matched;

    var _compilePath = compilePath$1(path, {
      end: exact,
      strict: strict,
      sensitive: sensitive
    }),
        regexp = _compilePath.regexp,
        keys = _compilePath.keys;

    var match = regexp.exec(pathname);
    if (!match) return null;
    var url = match[0],
        values = match.slice(1);
    var isExact = pathname === url;
    if (exact && !isExact) return null;
    return {
      path: path,
      // the path used to match
      url: path === "/" && url === "" ? "/" : url,
      // the matched portion of the URL
      isExact: isExact,
      // whether or not we matched exactly
      params: keys.reduce(function (memo, key, index) {
        memo[key.name] = values[index];
        return memo;
      }, {})
    };
  }, null);
}

function isEmptyChildren(children) {
  return react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children) === 0;
}

function evalChildrenDev(children, props, path) {
  var value = children(props);
   false ? 0 : void 0;
  return value || null;
}
/**
 * The public API for matching a single path and rendering.
 */


var Route = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(Route, _React$Component);

  function Route() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Route.prototype;

  _proto.render = function render() {
    var _this = this;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(context.Consumer, null, function (context$1) {
      !context$1 ?  false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(false) : void 0;
      var location = _this.props.location || context$1.location;
      var match = _this.props.computedMatch ? _this.props.computedMatch // <Switch> already computed the match for us
      : _this.props.path ? matchPath(location.pathname, _this.props) : context$1.match;

      var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)({}, context$1, {
        location: location,
        match: match
      });

      var _this$props = _this.props,
          children = _this$props.children,
          component = _this$props.component,
          render = _this$props.render; // Preact uses an empty array as children by
      // default, so use null if that's the case.

      if (Array.isArray(children) && isEmptyChildren(children)) {
        children = null;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(context.Provider, {
        value: props
      }, props.match ? children ? typeof children === "function" ?  false ? 0 : children(props) : children : component ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(component, props) : render ? render(props) : null : typeof children === "function" ?  false ? 0 : children(props) : null);
    });
  };

  return Route;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

if (false) {}

function addLeadingSlash(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
}

function addBasename(basename, location) {
  if (!basename) return location;
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)({}, location, {
    pathname: addLeadingSlash(basename) + location.pathname
  });
}

function stripBasename(basename, location) {
  if (!basename) return location;
  var base = addLeadingSlash(basename);
  if (location.pathname.indexOf(base) !== 0) return location;
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)({}, location, {
    pathname: location.pathname.substr(base.length)
  });
}

function createURL(location) {
  return typeof location === "string" ? location : (0,history__WEBPACK_IMPORTED_MODULE_6__/* .createPath */ .AO)(location);
}

function staticHandler(methodName) {
  return function () {
      false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(false) ;
  };
}

function noop() {}
/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */


var StaticRouter = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(StaticRouter, _React$Component);

  function StaticRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handlePush = function (location) {
      return _this.navigateTo(location, "PUSH");
    };

    _this.handleReplace = function (location) {
      return _this.navigateTo(location, "REPLACE");
    };

    _this.handleListen = function () {
      return noop;
    };

    _this.handleBlock = function () {
      return noop;
    };

    return _this;
  }

  var _proto = StaticRouter.prototype;

  _proto.navigateTo = function navigateTo(location, action) {
    var _this$props = this.props,
        _this$props$basename = _this$props.basename,
        basename = _this$props$basename === void 0 ? "" : _this$props$basename,
        _this$props$context = _this$props.context,
        context = _this$props$context === void 0 ? {} : _this$props$context;
    context.action = action;
    context.location = addBasename(basename, (0,history__WEBPACK_IMPORTED_MODULE_6__/* .createLocation */ .yJ)(location));
    context.url = createURL(context.location);
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        _this$props2$basename = _this$props2.basename,
        basename = _this$props2$basename === void 0 ? "" : _this$props2$basename,
        _this$props2$context = _this$props2.context,
        context = _this$props2$context === void 0 ? {} : _this$props2$context,
        _this$props2$location = _this$props2.location,
        location = _this$props2$location === void 0 ? "/" : _this$props2$location,
        rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(_this$props2, ["basename", "context", "location"]);

    var history = {
      createHref: function createHref(path) {
        return addLeadingSlash(basename + createURL(path));
      },
      action: "POP",
      location: stripBasename(basename, (0,history__WEBPACK_IMPORTED_MODULE_6__/* .createLocation */ .yJ)(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler("go"),
      goBack: staticHandler("goBack"),
      goForward: staticHandler("goForward"),
      listen: this.handleListen,
      block: this.handleBlock
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Router, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)({}, rest, {
      history: history,
      staticContext: context
    }));
  };

  return StaticRouter;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

if (false) {}

/**
 * The public API for rendering the first <Route> that matches.
 */

var Switch = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(Switch, _React$Component);

  function Switch() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Switch.prototype;

  _proto.render = function render() {
    var _this = this;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(context.Consumer, null, function (context) {
      !context ?  false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(false) : void 0;
      var location = _this.props.location || context.location;
      var element, match; // We use React.Children.forEach instead of React.Children.toArray().find()
      // here because toArray adds keys to all child elements and we do not want
      // to trigger an unmount/remount for two <Route>s that render the same
      // component at different URLs.

      react__WEBPACK_IMPORTED_MODULE_0__.Children.forEach(_this.props.children, function (child) {
        if (match == null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child)) {
          element = child;
          var path = child.props.path || child.props.from;
          match = path ? matchPath(location.pathname, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)({}, child.props, {
            path: path
          })) : context.match;
        }
      });
      return match ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(element, {
        location: location,
        computedMatch: match
      }) : null;
    });
  };

  return Switch;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

if (false) {}

/**
 * A public higher-order component to access the imperative API
 */

function withRouter(Component) {
  var displayName = "withRouter(" + (Component.displayName || Component.name) + ")";

  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = _objectWithoutPropertiesLoose(props, ["wrappedComponentRef"]);

    return /*#__PURE__*/React.createElement(context.Consumer, null, function (context) {
      !context ?  false ? 0 : invariant(false) : void 0;
      return /*#__PURE__*/React.createElement(Component, _extends({}, remainingProps, context, {
        ref: wrappedComponentRef
      }));
    });
  };

  C.displayName = displayName;
  C.WrappedComponent = Component;

  if (false) {}

  return hoistStatics(C, Component);
}

var useContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext;
function useHistory() {
  if (false) {}

  return useContext(historyContext);
}
function useLocation() {
  if (false) {}

  return useContext(context).location;
}
function useParams() {
  if (false) {}

  var match = useContext(context).match;
  return match ? match.params : {};
}
function useRouteMatch(path) {
  if (false) {}

  var location = useLocation();
  var match = useContext(context).match;
  return path ? matchPath(location.pathname, path) : match;
}

if (false) { var secondaryBuildName, initialBuildName, buildNames, key, global$1; }


//# sourceMappingURL=react-router.js.map


/***/ }),

/***/ 1020:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(6540),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 5287:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return"function"===typeof a?a:null}
var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}E.prototype.isReactComponent={};
E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}var H=G.prototype=new F;
H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return{$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
function N(a,b){return{$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c)}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b});-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result.default;throw a._result;}
var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};function X(){throw Error("act(...) is not supported in production builds of React.");}
exports.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments)},e)},count:function(a){var b=0;S(a,function(){b++});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};exports.Component=E;exports.Fragment=p;exports.Profiler=r;exports.PureComponent=G;exports.StrictMode=q;exports.Suspense=w;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;exports.act=X;
exports.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g}return{$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};exports.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};
exports.forwardRef=function(a){return{$$typeof:v,render:a}};exports.isValidElement=O;exports.lazy=function(a){return{$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};exports.memo=function(a,b){return{$$typeof:x,type:a,compare:void 0===b?null:b}};exports.startTransition=function(a){var b=V.transition;V.transition={};try{a()}finally{V.transition=b}};exports.unstable_act=X;exports.useCallback=function(a,b){return U.current.useCallback(a,b)};exports.useContext=function(a){return U.current.useContext(a)};
exports.useDebugValue=function(){};exports.useDeferredValue=function(a){return U.current.useDeferredValue(a)};exports.useEffect=function(a,b){return U.current.useEffect(a,b)};exports.useId=function(){return U.current.useId()};exports.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};exports.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};exports.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};
exports.useMemo=function(a,b){return U.current.useMemo(a,b)};exports.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};exports.useRef=function(a){return U.current.useRef(a)};exports.useState=function(a){return U.current.useState(a)};exports.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};exports.useTransition=function(){return U.current.useTransition()};exports.version="18.3.1";


/***/ }),

/***/ 6540:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(5287);
} else {}


/***/ }),

/***/ 4848:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(1020);
} else {}


/***/ }),

/***/ 2833:
/***/ ((module) => {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ 2203:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 9023:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 4784:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * AUTOGENERATED - DON'T EDIT
 * Your edits in this file will be overwritten in the next build!
 * Modify the docusaurus.config.js file at your site's root instead.
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  "title": "CrypSec - Documentation",
  "tagline": "A detailed security analysis from the CrypSec team",
  "favicon": "img/favicon.ico",
  "url": "https://ianpsa.github.io",
  "baseUrl": "/",
  "organizationName": "facebook",
  "projectName": "Capzul",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "path": "i18n",
    "localeConfigs": {}
  },
  "presets": [
    [
      "classic",
      {
        "docs": {
          "sidebarPath": "./sidebars.js",
          "editUrl": "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"
        },
        "theme": {
          "customCss": "C:\\Users\\Inteli\\Documents\\GitHub\\Docs - Capzul\\Capzul\\src\\css\\custom.css"
        }
      }
    ]
  ],
  "themeConfig": {
    "navbar": {
      "title": "CrypSec - Documentation",
      "logo": {
        "alt": "CrypSec Logo",
        "src": "img/logo.svg"
      },
      "items": [
        {
          "type": "doc",
          "docId": "intro",
          "position": "left"
        },
        {
          "to": "/relatorio",
          "label": "Relatório",
          "position": "left"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Nossos membros",
          "items": [
            {
              "label": "Ian Pereira",
              "href": "https://www.linkedin.com/in/ian-pereira-simao/"
            },
            {
              "label": "Danilo Martins",
              "href": "https://www.linkedin.com/in/danilo-martins-merlo-381b76228/"
            },
            {
              "label": "Ana Beggiato",
              "href": "https://www.linkedin.com/in/ana-beggiato/"
            },
            {
              "label": "Fernanda Correia",
              "href": "https://www.linkedin.com/in/fernanda-correia04/"
            }
          ]
        }
      ],
      "copyright": "Copyright © documentação feita por CrypSec"
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": [],
      "magicComments": [
        {
          "className": "theme-code-block-highlighted-line",
          "line": "highlight-next-line",
          "block": {
            "start": "highlight-start",
            "end": "highlight-end"
          }
        }
      ]
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false
    },
    "docs": {
      "versionPersistence": "localStorage",
      "sidebar": {
        "hideable": false,
        "autoCollapseCategories": false
      }
    },
    "metadata": [],
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "stylesheets": [
    "src/css/custom.css"
  ],
  "baseUrlIssueBanner": true,
  "onBrokenAnchors": "warn",
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "customFields": {},
  "plugins": [],
  "themes": [],
  "scripts": [],
  "headTags": [],
  "clientModules": [],
  "titleDelimiter": "|",
  "noIndex": false,
  "markdown": {
    "format": "mdx",
    "mermaid": false,
    "mdx1Compat": {
      "comments": true,
      "admonitions": true,
      "headingIds": true
    },
    "anchors": {
      "maintainCase": false
    }
  }
});


/***/ }),

/***/ 8168:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}


/***/ }),

/***/ 2892:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ _inheritsLoose)
});

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js

function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
}


/***/ }),

/***/ 8587:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.indexOf(n) >= 0) continue;
    t[n] = r[n];
  }
  return t;
}


/***/ }),

/***/ 8453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/**
 * @typedef {import('mdx/types.js').MDXComponents} MDXComponents
 * @typedef {import('react').Component<{}, {}, unknown>} Component
 * @typedef {import('react').ReactNode} ReactNode
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {JSX.Element}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ }),

/***/ 4164:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export clsx */
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);

/***/ }),

/***/ 1765:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   My: () => (/* binding */ Prism),
/* harmony export */   f4: () => (/* binding */ Highlight2)
/* harmony export */ });
/* unused harmony exports normalizeTokens, themes, useTokenize */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4164);
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../../node_modules/.pnpm/prismjs@1.29.0_patch_hash=vrxx3pzkik6jpmgpayxfjunetu/node_modules/prismjs/prism.js
var require_prism = __commonJS({
  "../../node_modules/.pnpm/prismjs@1.29.0_patch_hash=vrxx3pzkik6jpmgpayxfjunetu/node_modules/prismjs/prism.js"(exports, module) {
    var Prism2 = function() {
      var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
      var uniqueId = 0;
      var plainTextGrammar = {};
      var _ = {
        /**
         * A namespace for utility methods.
         *
         * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
         * change or disappear at any time.
         *
         * @namespace
         * @memberof Prism
         */
        util: {
          encode: function encode(tokens) {
            if (tokens instanceof Token) {
              return new Token(tokens.type, encode(tokens.content), tokens.alias);
            } else if (Array.isArray(tokens)) {
              return tokens.map(encode);
            } else {
              return tokens.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
            }
          },
          /**
           * Returns the name of the type of the given value.
           *
           * @param {any} o
           * @returns {string}
           * @example
           * type(null)      === 'Null'
           * type(undefined) === 'Undefined'
           * type(123)       === 'Number'
           * type('foo')     === 'String'
           * type(true)      === 'Boolean'
           * type([1, 2])    === 'Array'
           * type({})        === 'Object'
           * type(String)    === 'Function'
           * type(/abc+/)    === 'RegExp'
           */
          type: function(o) {
            return Object.prototype.toString.call(o).slice(8, -1);
          },
          /**
           * Returns a unique number for the given object. Later calls will still return the same number.
           *
           * @param {Object} obj
           * @returns {number}
           */
          objId: function(obj) {
            if (!obj["__id"]) {
              Object.defineProperty(obj, "__id", { value: ++uniqueId });
            }
            return obj["__id"];
          },
          /**
           * Creates a deep clone of the given object.
           *
           * The main intended use of this function is to clone language definitions.
           *
           * @param {T} o
           * @param {Record<number, any>} [visited]
           * @returns {T}
           * @template T
           */
          clone: function deepClone(o, visited) {
            visited = visited || {};
            var clone;
            var id;
            switch (_.util.type(o)) {
              case "Object":
                id = _.util.objId(o);
                if (visited[id]) {
                  return visited[id];
                }
                clone = /** @type {Record<string, any>} */
                {};
                visited[id] = clone;
                for (var key in o) {
                  if (o.hasOwnProperty(key)) {
                    clone[key] = deepClone(o[key], visited);
                  }
                }
                return (
                  /** @type {any} */
                  clone
                );
              case "Array":
                id = _.util.objId(o);
                if (visited[id]) {
                  return visited[id];
                }
                clone = [];
                visited[id] = clone;
                /** @type {Array} */
                /** @type {any} */
                o.forEach(function(v, i) {
                  clone[i] = deepClone(v, visited);
                });
                return (
                  /** @type {any} */
                  clone
                );
              default:
                return o;
            }
          },
          /**
           * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
           *
           * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
           *
           * @param {Element} element
           * @returns {string}
           */
          getLanguage: function(element) {
            while (element) {
              var m = lang.exec(element.className);
              if (m) {
                return m[1].toLowerCase();
              }
              element = element.parentElement;
            }
            return "none";
          },
          /**
           * Sets the Prism `language-xxxx` class of the given element.
           *
           * @param {Element} element
           * @param {string} language
           * @returns {void}
           */
          setLanguage: function(element, language) {
            element.className = element.className.replace(RegExp(lang, "gi"), "");
            element.classList.add("language-" + language);
          },
          /**
           * Returns whether a given class is active for `element`.
           *
           * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
           * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
           * given class is just the given class with a `no-` prefix.
           *
           * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
           * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
           * ancestors have the given class or the negated version of it, then the default activation will be returned.
           *
           * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
           * version of it, the class is considered active.
           *
           * @param {Element} element
           * @param {string} className
           * @param {boolean} [defaultActivation=false]
           * @returns {boolean}
           */
          isActive: function(element, className, defaultActivation) {
            var no = "no-" + className;
            while (element) {
              var classList = element.classList;
              if (classList.contains(className)) {
                return true;
              }
              if (classList.contains(no)) {
                return false;
              }
              element = element.parentElement;
            }
            return !!defaultActivation;
          }
        },
        /**
         * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
         *
         * @namespace
         * @memberof Prism
         * @public
         */
        languages: {
          /**
           * The grammar for plain, unformatted text.
           */
          plain: plainTextGrammar,
          plaintext: plainTextGrammar,
          text: plainTextGrammar,
          txt: plainTextGrammar,
          /**
           * Creates a deep copy of the language with the given id and appends the given tokens.
           *
           * If a token in `redef` also appears in the copied language, then the existing token in the copied language
           * will be overwritten at its original position.
           *
           * ## Best practices
           *
           * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
           * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
           * understand the language definition because, normally, the order of tokens matters in Prism grammars.
           *
           * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
           * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
           *
           * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
           * @param {Grammar} redef The new tokens to append.
           * @returns {Grammar} The new language created.
           * @public
           * @example
           * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
           *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
           *     // at its original position
           *     'comment': { ... },
           *     // CSS doesn't have a 'color' token, so this token will be appended
           *     'color': /\b(?:red|green|blue)\b/
           * });
           */
          extend: function(id, redef) {
            var lang2 = _.util.clone(_.languages[id]);
            for (var key in redef) {
              lang2[key] = redef[key];
            }
            return lang2;
          },
          /**
           * Inserts tokens _before_ another token in a language definition or any other grammar.
           *
           * ## Usage
           *
           * This helper method makes it easy to modify existing languages. For example, the CSS language definition
           * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
           * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
           * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
           * this:
           *
           * ```js
           * Prism.languages.markup.style = {
           *     // token
           * };
           * ```
           *
           * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
           * before existing tokens. For the CSS example above, you would use it like this:
           *
           * ```js
           * Prism.languages.insertBefore('markup', 'cdata', {
           *     'style': {
           *         // token
           *     }
           * });
           * ```
           *
           * ## Special cases
           *
           * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
           * will be ignored.
           *
           * This behavior can be used to insert tokens after `before`:
           *
           * ```js
           * Prism.languages.insertBefore('markup', 'comment', {
           *     'comment': Prism.languages.markup.comment,
           *     // tokens after 'comment'
           * });
           * ```
           *
           * ## Limitations
           *
           * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
           * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
           * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
           * deleting properties which is necessary to insert at arbitrary positions.
           *
           * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
           * Instead, it will create a new object and replace all references to the target object with the new one. This
           * can be done without temporarily deleting properties, so the iteration order is well-defined.
           *
           * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
           * you hold the target object in a variable, then the value of the variable will not change.
           *
           * ```js
           * var oldMarkup = Prism.languages.markup;
           * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
           *
           * assert(oldMarkup !== Prism.languages.markup);
           * assert(newMarkup === Prism.languages.markup);
           * ```
           *
           * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
           * object to be modified.
           * @param {string} before The key to insert before.
           * @param {Grammar} insert An object containing the key-value pairs to be inserted.
           * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
           * object to be modified.
           *
           * Defaults to `Prism.languages`.
           * @returns {Grammar} The new grammar object.
           * @public
           */
          insertBefore: function(inside, before, insert, root) {
            root = root || /** @type {any} */
            _.languages;
            var grammar = root[inside];
            var ret = {};
            for (var token in grammar) {
              if (grammar.hasOwnProperty(token)) {
                if (token == before) {
                  for (var newToken in insert) {
                    if (insert.hasOwnProperty(newToken)) {
                      ret[newToken] = insert[newToken];
                    }
                  }
                }
                if (!insert.hasOwnProperty(token)) {
                  ret[token] = grammar[token];
                }
              }
            }
            var old = root[inside];
            root[inside] = ret;
            _.languages.DFS(_.languages, function(key, value) {
              if (value === old && key != inside) {
                this[key] = ret;
              }
            });
            return ret;
          },
          // Traverse a language definition with Depth First Search
          DFS: function DFS(o, callback, type, visited) {
            visited = visited || {};
            var objId = _.util.objId;
            for (var i in o) {
              if (o.hasOwnProperty(i)) {
                callback.call(o, i, o[i], type || i);
                var property = o[i];
                var propertyType = _.util.type(property);
                if (propertyType === "Object" && !visited[objId(property)]) {
                  visited[objId(property)] = true;
                  DFS(property, callback, null, visited);
                } else if (propertyType === "Array" && !visited[objId(property)]) {
                  visited[objId(property)] = true;
                  DFS(property, callback, i, visited);
                }
              }
            }
          }
        },
        plugins: {},
        /**
         * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
         * and the language definitions to use, and returns a string with the HTML produced.
         *
         * The following hooks will be run:
         * 1. `before-tokenize`
         * 2. `after-tokenize`
         * 3. `wrap`: On each {@link Token}.
         *
         * @param {string} text A string with the code to be highlighted.
         * @param {Grammar} grammar An object containing the tokens to use.
         *
         * Usually a language definition like `Prism.languages.markup`.
         * @param {string} language The name of the language definition passed to `grammar`.
         * @returns {string} The highlighted HTML.
         * @memberof Prism
         * @public
         * @example
         * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
         */
        highlight: function(text, grammar, language) {
          var env = {
            code: text,
            grammar,
            language
          };
          _.hooks.run("before-tokenize", env);
          if (!env.grammar) {
            throw new Error('The language "' + env.language + '" has no grammar.');
          }
          env.tokens = _.tokenize(env.code, env.grammar);
          _.hooks.run("after-tokenize", env);
          return Token.stringify(_.util.encode(env.tokens), env.language);
        },
        /**
         * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
         * and the language definitions to use, and returns an array with the tokenized code.
         *
         * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
         *
         * This method could be useful in other contexts as well, as a very crude parser.
         *
         * @param {string} text A string with the code to be highlighted.
         * @param {Grammar} grammar An object containing the tokens to use.
         *
         * Usually a language definition like `Prism.languages.markup`.
         * @returns {TokenStream} An array of strings and tokens, a token stream.
         * @memberof Prism
         * @public
         * @example
         * let code = `var foo = 0;`;
         * let tokens = Prism.tokenize(code, Prism.languages.javascript);
         * tokens.forEach(token => {
         *     if (token instanceof Prism.Token && token.type === 'number') {
         *         console.log(`Found numeric literal: ${token.content}`);
         *     }
         * });
         */
        tokenize: function(text, grammar) {
          var rest = grammar.rest;
          if (rest) {
            for (var token in rest) {
              grammar[token] = rest[token];
            }
            delete grammar.rest;
          }
          var tokenList = new LinkedList();
          addAfter(tokenList, tokenList.head, text);
          matchGrammar(text, tokenList, grammar, tokenList.head, 0);
          return toArray(tokenList);
        },
        /**
         * @namespace
         * @memberof Prism
         * @public
         */
        hooks: {
          all: {},
          /**
           * Adds the given callback to the list of callbacks for the given hook.
           *
           * The callback will be invoked when the hook it is registered for is run.
           * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
           *
           * One callback function can be registered to multiple hooks and the same hook multiple times.
           *
           * @param {string} name The name of the hook.
           * @param {HookCallback} callback The callback function which is given environment variables.
           * @public
           */
          add: function(name, callback) {
            var hooks2 = _.hooks.all;
            hooks2[name] = hooks2[name] || [];
            hooks2[name].push(callback);
          },
          /**
           * Runs a hook invoking all registered callbacks with the given environment variables.
           *
           * Callbacks will be invoked synchronously and in the order in which they were registered.
           *
           * @param {string} name The name of the hook.
           * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
           * @public
           */
          run: function(name, env) {
            var callbacks = _.hooks.all[name];
            if (!callbacks || !callbacks.length) {
              return;
            }
            for (var i = 0, callback; callback = callbacks[i++]; ) {
              callback(env);
            }
          }
        },
        Token
      };
      function Token(type, content, alias, matchedStr) {
        this.type = type;
        this.content = content;
        this.alias = alias;
        this.length = (matchedStr || "").length | 0;
      }
      Token.stringify = function stringify(o, language) {
        if (typeof o == "string") {
          return o;
        }
        if (Array.isArray(o)) {
          var s = "";
          o.forEach(function(e) {
            s += stringify(e, language);
          });
          return s;
        }
        var env = {
          type: o.type,
          content: stringify(o.content, language),
          tag: "span",
          classes: ["token", o.type],
          attributes: {},
          language
        };
        var aliases = o.alias;
        if (aliases) {
          if (Array.isArray(aliases)) {
            Array.prototype.push.apply(env.classes, aliases);
          } else {
            env.classes.push(aliases);
          }
        }
        _.hooks.run("wrap", env);
        var attributes = "";
        for (var name in env.attributes) {
          attributes += " " + name + '="' + (env.attributes[name] || "").replace(/"/g, "&quot;") + '"';
        }
        return "<" + env.tag + ' class="' + env.classes.join(" ") + '"' + attributes + ">" + env.content + "</" + env.tag + ">";
      };
      function matchPattern(pattern, pos, text, lookbehind) {
        pattern.lastIndex = pos;
        var match = pattern.exec(text);
        if (match && lookbehind && match[1]) {
          var lookbehindLength = match[1].length;
          match.index += lookbehindLength;
          match[0] = match[0].slice(lookbehindLength);
        }
        return match;
      }
      function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
        for (var token in grammar) {
          if (!grammar.hasOwnProperty(token) || !grammar[token]) {
            continue;
          }
          var patterns = grammar[token];
          patterns = Array.isArray(patterns) ? patterns : [patterns];
          for (var j = 0; j < patterns.length; ++j) {
            if (rematch && rematch.cause == token + "," + j) {
              return;
            }
            var patternObj = patterns[j];
            var inside = patternObj.inside;
            var lookbehind = !!patternObj.lookbehind;
            var greedy = !!patternObj.greedy;
            var alias = patternObj.alias;
            if (greedy && !patternObj.pattern.global) {
              var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
              patternObj.pattern = RegExp(patternObj.pattern.source, flags + "g");
            }
            var pattern = patternObj.pattern || patternObj;
            for (var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next) {
              if (rematch && pos >= rematch.reach) {
                break;
              }
              var str = currentNode.value;
              if (tokenList.length > text.length) {
                return;
              }
              if (str instanceof Token) {
                continue;
              }
              var removeCount = 1;
              var match;
              if (greedy) {
                match = matchPattern(pattern, pos, text, lookbehind);
                if (!match || match.index >= text.length) {
                  break;
                }
                var from = match.index;
                var to = match.index + match[0].length;
                var p = pos;
                p += currentNode.value.length;
                while (from >= p) {
                  currentNode = currentNode.next;
                  p += currentNode.value.length;
                }
                p -= currentNode.value.length;
                pos = p;
                if (currentNode.value instanceof Token) {
                  continue;
                }
                for (var k = currentNode; k !== tokenList.tail && (p < to || typeof k.value === "string"); k = k.next) {
                  removeCount++;
                  p += k.value.length;
                }
                removeCount--;
                str = text.slice(pos, p);
                match.index -= pos;
              } else {
                match = matchPattern(pattern, 0, str, lookbehind);
                if (!match) {
                  continue;
                }
              }
              var from = match.index;
              var matchStr = match[0];
              var before = str.slice(0, from);
              var after = str.slice(from + matchStr.length);
              var reach = pos + str.length;
              if (rematch && reach > rematch.reach) {
                rematch.reach = reach;
              }
              var removeFrom = currentNode.prev;
              if (before) {
                removeFrom = addAfter(tokenList, removeFrom, before);
                pos += before.length;
              }
              removeRange(tokenList, removeFrom, removeCount);
              var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
              currentNode = addAfter(tokenList, removeFrom, wrapped);
              if (after) {
                addAfter(tokenList, currentNode, after);
              }
              if (removeCount > 1) {
                var nestedRematch = {
                  cause: token + "," + j,
                  reach
                };
                matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);
                if (rematch && nestedRematch.reach > rematch.reach) {
                  rematch.reach = nestedRematch.reach;
                }
              }
            }
          }
        }
      }
      function LinkedList() {
        var head = { value: null, prev: null, next: null };
        var tail = { value: null, prev: head, next: null };
        head.next = tail;
        this.head = head;
        this.tail = tail;
        this.length = 0;
      }
      function addAfter(list, node, value) {
        var next = node.next;
        var newNode = { value, prev: node, next };
        node.next = newNode;
        next.prev = newNode;
        list.length++;
        return newNode;
      }
      function removeRange(list, node, count) {
        var next = node.next;
        for (var i = 0; i < count && next !== list.tail; i++) {
          next = next.next;
        }
        node.next = next;
        next.prev = node;
        list.length -= i;
      }
      function toArray(list) {
        var array = [];
        var node = list.head.next;
        while (node !== list.tail) {
          array.push(node.value);
          node = node.next;
        }
        return array;
      }
      return _;
    }();
    module.exports = Prism2;
    Prism2.default = Prism2;
  }
});

// src/prism-langs.ts
var Prism = __toESM(require_prism());
Prism.languages.markup = { comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: true }, prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: true }, doctype: { pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i, greedy: true, inside: { "internal-subset": { pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/, lookbehind: true, greedy: true, inside: null }, string: { pattern: /"[^"]*"|'[^']*'/, greedy: true }, punctuation: /^<!|>$|[[\]]/, "doctype-tag": /^DOCTYPE/i, name: /[^\s<>'"]+/ } }, cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: true }, tag: { pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/, greedy: true, inside: { tag: { pattern: /^<\/?[^\s>\/]+/, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, "special-attr": [], "attr-value": { pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/, inside: { punctuation: [{ pattern: /^=/, alias: "attr-equals" }, { pattern: /^(\s*)["']|["']$/, lookbehind: true }] } }, punctuation: /\/?>/, "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: [{ pattern: /&[\da-z]{1,8};/i, alias: "named-entity" }, /&#x?[\da-f]{1,8};/i] }, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup, Prism.hooks.add("wrap", function(e) {
  "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"));
}), Object.defineProperty(Prism.languages.markup.tag, "addInlined", { value: function(e, n) {
  var t = {}, t = (t["language-" + n] = { pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i, lookbehind: true, inside: Prism.languages[n] }, t.cdata = /^<!\[CDATA\[|\]\]>$/i, { "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: t } }), n = (t["language-" + n] = { pattern: /[\s\S]+/, inside: Prism.languages[n] }, {});
  n[e] = { pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
    return e;
  }), "i"), lookbehind: true, greedy: true, inside: t }, Prism.languages.insertBefore("markup", "cdata", n);
} }), Object.defineProperty(Prism.languages.markup.tag, "addAttribute", { value: function(e, n) {
  Prism.languages.markup.tag.inside["special-attr"].push({ pattern: RegExp(/(^|["'\s])/.source + "(?:" + e + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"), lookbehind: true, inside: { "attr-name": /^[^\s=]+/, "attr-value": { pattern: /=[\s\S]+/, inside: { value: { pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/, lookbehind: true, alias: [n, "language-" + n], inside: Prism.languages[n] }, punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] } } } });
} }), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.ssml = Prism.languages.xml, Prism.languages.atom = Prism.languages.xml, Prism.languages.rss = Prism.languages.xml, function(e) {
  var n = { pattern: /\\[\\(){}[\]^$+*?|.]/, alias: "escape" }, t = /\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/, a = "(?:[^\\\\-]|" + t.source + ")", a = RegExp(a + "-" + a), r = { pattern: /(<|')[^<>']+(?=[>']$)/, lookbehind: true, alias: "variable" };
  e.languages.regex = { "char-class": { pattern: /((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/, lookbehind: true, inside: { "char-class-negation": { pattern: /(^\[)\^/, lookbehind: true, alias: "operator" }, "char-class-punctuation": { pattern: /^\[|\]$/, alias: "punctuation" }, range: { pattern: a, inside: { escape: t, "range-punctuation": { pattern: /-/, alias: "operator" } } }, "special-escape": n, "char-set": { pattern: /\\[wsd]|\\p\{[^{}]+\}/i, alias: "class-name" }, escape: t } }, "special-escape": n, "char-set": { pattern: /\.|\\[wsd]|\\p\{[^{}]+\}/i, alias: "class-name" }, backreference: [{ pattern: /\\(?![123][0-7]{2})[1-9]/, alias: "keyword" }, { pattern: /\\k<[^<>']+>/, alias: "keyword", inside: { "group-name": r } }], anchor: { pattern: /[$^]|\\[ABbGZz]/, alias: "function" }, escape: t, group: [{ pattern: /\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/, alias: "punctuation", inside: { "group-name": r } }, { pattern: /\)/, alias: "punctuation" }], quantifier: { pattern: /(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/, alias: "number" }, alternation: { pattern: /\|/, alias: "keyword" } };
}(Prism), Prism.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: true, greedy: true }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: true, greedy: true }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: true }, "class-name": { pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i, lookbehind: true, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/, boolean: /\b(?:false|true)\b/, function: /\b\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/, punctuation: /[{}[\];(),.:]/ }, Prism.languages.javascript = Prism.languages.extend("clike", { "class-name": [Prism.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/, lookbehind: true }], keyword: [{ pattern: /((?:^|\})\s*)catch\b/, lookbehind: true }, { pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: true }], function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, number: { pattern: RegExp(/(^|[^\w$])/.source + "(?:" + /NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source + ")" + /(?![\w$])/.source), lookbehind: true }, operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/ }), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript", "keyword", { regex: { pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source), lookbehind: true, greedy: true, inside: { "regex-source": { pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/, lookbehind: true, alias: "language-regex", inside: Prism.languages.regex }, "regex-delimiter": /^\/|\/$/, "regex-flags": /^[a-z]+$/ } }, "function-variable": { pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/, lookbehind: true, inside: Prism.languages.javascript }, { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i, lookbehind: true, inside: Prism.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/, lookbehind: true, inside: Prism.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/, lookbehind: true, inside: Prism.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ }), Prism.languages.insertBefore("javascript", "string", { hashbang: { pattern: /^#!.*/, greedy: true, alias: "comment" }, "template-string": { pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/, greedy: true, inside: { "template-punctuation": { pattern: /^`|`$/, alias: "string" }, interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/, lookbehind: true, inside: { "interpolation-punctuation": { pattern: /^\$\{|\}$/, alias: "punctuation" }, rest: Prism.languages.javascript } }, string: /[\s\S]+/ } }, "string-property": { pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m, lookbehind: true, greedy: true, alias: "property" } }), Prism.languages.insertBefore("javascript", "operator", { "literal-property": { pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m, lookbehind: true, alias: "property" } }), Prism.languages.markup && (Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")), Prism.languages.js = Prism.languages.javascript, Prism.languages.actionscript = Prism.languages.extend("javascript", { keyword: /\b(?:as|break|case|catch|class|const|default|delete|do|dynamic|each|else|extends|final|finally|for|function|get|if|implements|import|in|include|instanceof|interface|internal|is|namespace|native|new|null|override|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|use|var|void|while|with)\b/, operator: /\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/ }), Prism.languages.actionscript["class-name"].alias = "function", delete Prism.languages.actionscript.parameter, delete Prism.languages.actionscript["literal-property"], Prism.languages.markup && Prism.languages.insertBefore("actionscript", "string", { xml: { pattern: /(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/, lookbehind: true, inside: Prism.languages.markup } }), function(e) {
  var n = /#(?!\{).+/, t = { pattern: /#\{[^}]+\}/, alias: "variable" };
  e.languages.coffeescript = e.languages.extend("javascript", { comment: n, string: [{ pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: true }, { pattern: /"(?:\\[\s\S]|[^\\"])*"/, greedy: true, inside: { interpolation: t } }], keyword: /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/, "class-member": { pattern: /@(?!\d)\w+/, alias: "variable" } }), e.languages.insertBefore("coffeescript", "comment", { "multiline-comment": { pattern: /###[\s\S]+?###/, alias: "comment" }, "block-regex": { pattern: /\/{3}[\s\S]*?\/{3}/, alias: "regex", inside: { comment: n, interpolation: t } } }), e.languages.insertBefore("coffeescript", "string", { "inline-javascript": { pattern: /`(?:\\[\s\S]|[^\\`])*`/, inside: { delimiter: { pattern: /^`|`$/, alias: "punctuation" }, script: { pattern: /[\s\S]+/, alias: "language-javascript", inside: e.languages.javascript } } }, "multiline-string": [{ pattern: /'''[\s\S]*?'''/, greedy: true, alias: "string" }, { pattern: /"""[\s\S]*?"""/, greedy: true, alias: "string", inside: { interpolation: t } }] }), e.languages.insertBefore("coffeescript", "keyword", { property: /(?!\d)\w+(?=\s*:(?!:))/ }), delete e.languages.coffeescript["template-string"], e.languages.coffee = e.languages.coffeescript;
}(Prism), function(l) {
  var e = l.languages.javadoclike = { parameter: { pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m, lookbehind: true }, keyword: { pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m, lookbehind: true }, punctuation: /[{}]/ };
  Object.defineProperty(e, "addSupport", { value: function(e2, o) {
    (e2 = "string" == typeof e2 ? [e2] : e2).forEach(function(e3) {
      var n = function(e4) {
        e4.inside || (e4.inside = {}), e4.inside.rest = o;
      }, t = "doc-comment";
      if (a = l.languages[e3]) {
        var a, r = a[t];
        if ((r = r ? r : (a = l.languages.insertBefore(e3, "comment", { "doc-comment": { pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/, lookbehind: true, alias: "comment" } }))[t]) instanceof RegExp && (r = a[t] = { pattern: r }), Array.isArray(r))
          for (var s = 0, i = r.length; s < i; s++)
            r[s] instanceof RegExp && (r[s] = { pattern: r[s] }), n(r[s]);
        else
          n(r);
      }
    });
  } }), e.addSupport(["java", "javascript", "php"], e);
}(Prism), function(e) {
  var n = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/, n = (e.languages.css = { comment: /\/\*[\s\S]*?\*\//, atrule: { pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + n.source + ")*?" + /(?:;|(?=\s*\{))/.source), inside: { rule: /^@[\w-]+/, "selector-function-argument": { pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/, lookbehind: true, alias: "selector" }, keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: true } } }, url: { pattern: RegExp("\\burl\\((?:" + n.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"), greedy: true, inside: { function: /^url/i, punctuation: /^\(|\)$/, string: { pattern: RegExp("^" + n.source + "$"), alias: "url" } } }, selector: { pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + n.source + ")*(?=\\s*\\{)"), lookbehind: true }, string: { pattern: n, greedy: true }, property: { pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i, lookbehind: true }, important: /!important\b/i, function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: true }, punctuation: /[(){};:,]/ }, e.languages.css.atrule.inside.rest = e.languages.css, e.languages.markup);
  n && (n.tag.addInlined("style", "css"), n.tag.addAttribute("style", "css"));
}(Prism), function(e) {
  var n = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, n = (e.languages.css.selector = { pattern: e.languages.css.selector.pattern, lookbehind: true, inside: n = { "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/, "pseudo-class": /:[-\w]+/, class: /\.[-\w]+/, id: /#[-\w]+/, attribute: { pattern: RegExp(`\\[(?:[^[\\]"']|` + n.source + ")*\\]"), greedy: true, inside: { punctuation: /^\[|\]$/, "case-sensitivity": { pattern: /(\s)[si]$/i, lookbehind: true, alias: "keyword" }, namespace: { pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/, lookbehind: true, inside: { punctuation: /\|$/ } }, "attr-name": { pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/, lookbehind: true }, "attr-value": [n, { pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/, lookbehind: true }], operator: /[|~*^$]?=/ } }, "n-th": [{ pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/, lookbehind: true, inside: { number: /[\dn]+/, operator: /[+-]/ } }, { pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i, lookbehind: true }], combinator: />|\+|~|\|\|/, punctuation: /[(),]/ } }, e.languages.css.atrule.inside["selector-function-argument"].inside = n, e.languages.insertBefore("css", "property", { variable: { pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i, lookbehind: true } }), { pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/, lookbehind: true }), t = { pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/, lookbehind: true };
  e.languages.insertBefore("css", "function", { operator: { pattern: /(\s)[+\-*\/](?=\s)/, lookbehind: true }, hexcode: { pattern: /\B#[\da-f]{3,8}\b/i, alias: "color" }, color: [{ pattern: /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i, lookbehind: true }, { pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i, inside: { unit: n, number: t, function: /[\w-]+(?=\()/, punctuation: /[(),]/ } }], entity: /\\[\da-f]{1,8}/i, unit: n, number: t });
}(Prism), function(e) {
  var n = /[*&][^\s[\]{},]+/, t = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/, a = "(?:" + t.source + "(?:[ 	]+" + n.source + ")?|" + n.source + "(?:[ 	]+" + t.source + ")?)", r = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function() {
    return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
  }), s = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
  function i(e2, n2) {
    n2 = (n2 || "").replace(/m/g, "") + "m";
    var t2 = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function() {
      return a;
    }).replace(/<<value>>/g, function() {
      return e2;
    });
    return RegExp(t2, n2);
  }
  e.languages.yaml = { scalar: { pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function() {
    return a;
  })), lookbehind: true, alias: "string" }, comment: /#.*/, key: { pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function() {
    return a;
  }).replace(/<<key>>/g, function() {
    return "(?:" + r + "|" + s + ")";
  })), lookbehind: true, greedy: true, alias: "atrule" }, directive: { pattern: /(^[ \t]*)%.+/m, lookbehind: true, alias: "important" }, datetime: { pattern: i(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source), lookbehind: true, alias: "number" }, boolean: { pattern: i(/false|true/.source, "i"), lookbehind: true, alias: "important" }, null: { pattern: i(/null|~/.source, "i"), lookbehind: true, alias: "important" }, string: { pattern: i(s), lookbehind: true, greedy: true }, number: { pattern: i(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, "i"), lookbehind: true }, tag: t, important: n, punctuation: /---|[:[\]{}\-,|>?]|\.\.\./ }, e.languages.yml = e.languages.yaml;
}(Prism), function(o) {
  var n = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
  function e(e2) {
    return e2 = e2.replace(/<inner>/g, function() {
      return n;
    }), RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + e2 + ")");
  }
  var t = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source, a = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function() {
    return t;
  }), r = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source, l = (o.languages.markdown = o.languages.extend("markup", {}), o.languages.insertBefore("markdown", "prolog", { "front-matter-block": { pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/, lookbehind: true, greedy: true, inside: { punctuation: /^---|---$/, "front-matter": { pattern: /\S+(?:\s+\S+)*/, alias: ["yaml", "language-yaml"], inside: o.languages.yaml } } }, blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: "punctuation" }, table: { pattern: RegExp("^" + a + r + "(?:" + a + ")*", "m"), inside: { "table-data-rows": { pattern: RegExp("^(" + a + r + ")(?:" + a + ")*$"), lookbehind: true, inside: { "table-data": { pattern: RegExp(t), inside: o.languages.markdown }, punctuation: /\|/ } }, "table-line": { pattern: RegExp("^(" + a + ")" + r + "$"), lookbehind: true, inside: { punctuation: /\||:?-{3,}:?/ } }, "table-header-row": { pattern: RegExp("^" + a + "$"), inside: { "table-header": { pattern: RegExp(t), alias: "important", inside: o.languages.markdown }, punctuation: /\|/ } } } }, code: [{ pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/, lookbehind: true, alias: "keyword" }, { pattern: /^```[\s\S]*?^```$/m, greedy: true, inside: { "code-block": { pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m, lookbehind: true }, "code-language": { pattern: /^(```).+/, lookbehind: true }, punctuation: /```/ } }], title: [{ pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m, alias: "important", inside: { punctuation: /==+$|--+$/ } }, { pattern: /(^\s*)#.+/m, lookbehind: true, alias: "important", inside: { punctuation: /^#+|#+$/ } }], hr: { pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m, lookbehind: true, alias: "punctuation" }, list: { pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m, lookbehind: true, alias: "punctuation" }, "url-reference": { pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/, inside: { variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: true }, string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/, punctuation: /^[\[\]!:]|[<>]/ }, alias: "url" }, bold: { pattern: e(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source), lookbehind: true, greedy: true, inside: { content: { pattern: /(^..)[\s\S]+(?=..$)/, lookbehind: true, inside: {} }, punctuation: /\*\*|__/ } }, italic: { pattern: e(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source), lookbehind: true, greedy: true, inside: { content: { pattern: /(^.)[\s\S]+(?=.$)/, lookbehind: true, inside: {} }, punctuation: /[*_]/ } }, strike: { pattern: e(/(~~?)(?:(?!~)<inner>)+\2/.source), lookbehind: true, greedy: true, inside: { content: { pattern: /(^~~?)[\s\S]+(?=\1$)/, lookbehind: true, inside: {} }, punctuation: /~~?/ } }, "code-snippet": { pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/, lookbehind: true, greedy: true, alias: ["code", "keyword"] }, url: { pattern: e(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source), lookbehind: true, greedy: true, inside: { operator: /^!/, content: { pattern: /(^\[)[^\]]+(?=\])/, lookbehind: true, inside: {} }, variable: { pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/, lookbehind: true }, url: { pattern: /(^\]\()[^\s)]+/, lookbehind: true }, string: { pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/, lookbehind: true } } } }), ["url", "bold", "italic", "strike"].forEach(function(n2) {
    ["url", "bold", "italic", "strike", "code-snippet"].forEach(function(e2) {
      n2 !== e2 && (o.languages.markdown[n2].inside.content.inside[e2] = o.languages.markdown[e2]);
    });
  }), o.hooks.add("after-tokenize", function(e2) {
    "markdown" !== e2.language && "md" !== e2.language || !function e3(n2) {
      if (n2 && "string" != typeof n2)
        for (var t2 = 0, a2 = n2.length; t2 < a2; t2++) {
          var r2, s = n2[t2];
          "code" !== s.type ? e3(s.content) : (r2 = s.content[1], s = s.content[3], r2 && s && "code-language" === r2.type && "code-block" === s.type && "string" == typeof r2.content && (r2 = r2.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp"), r2 = "language-" + (r2 = (/[a-z][\w-]*/i.exec(r2) || [""])[0].toLowerCase()), s.alias ? "string" == typeof s.alias ? s.alias = [s.alias, r2] : s.alias.push(r2) : s.alias = [r2]));
        }
    }(e2.tokens);
  }), o.hooks.add("wrap", function(e2) {
    if ("code-block" === e2.type) {
      for (var n2 = "", t2 = 0, a2 = e2.classes.length; t2 < a2; t2++) {
        var r2 = e2.classes[t2], r2 = /language-(.+)/.exec(r2);
        if (r2) {
          n2 = r2[1];
          break;
        }
      }
      var s, i = o.languages[n2];
      i ? e2.content = o.highlight(function(e3) {
        e3 = e3.replace(l, "");
        return e3 = e3.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(e4, n3) {
          var t3;
          return "#" === (n3 = n3.toLowerCase())[0] ? (t3 = "x" === n3[1] ? parseInt(n3.slice(2), 16) : Number(n3.slice(1)), c(t3)) : u[n3] || e4;
        });
      }(e2.content), i, n2) : n2 && "none" !== n2 && o.plugins.autoloader && (s = "md-" + (/* @__PURE__ */ new Date()).valueOf() + "-" + Math.floor(1e16 * Math.random()), e2.attributes.id = s, o.plugins.autoloader.loadLanguages(n2, function() {
        var e3 = document.getElementById(s);
        e3 && (e3.innerHTML = o.highlight(e3.textContent, o.languages[n2], n2));
      }));
    }
  }), RegExp(o.languages.markup.tag.pattern.source, "gi")), u = { amp: "&", lt: "<", gt: ">", quot: '"' }, c = String.fromCodePoint || String.fromCharCode;
  o.languages.md = o.languages.markdown;
}(Prism), Prism.languages.graphql = { comment: /#.*/, description: { pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i, greedy: true, alias: "string", inside: { "language-markdown": { pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/, lookbehind: true, inside: Prism.languages.markdown } } }, string: { pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/, greedy: true }, number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i, boolean: /\b(?:false|true)\b/, variable: /\$[a-z_]\w*/i, directive: { pattern: /@[a-z_]\w*/i, alias: "function" }, "attr-name": { pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i, greedy: true }, "atom-input": { pattern: /\b[A-Z]\w*Input\b/, alias: "class-name" }, scalar: /\b(?:Boolean|Float|ID|Int|String)\b/, constant: /\b[A-Z][A-Z_\d]*\b/, "class-name": { pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/, lookbehind: true }, fragment: { pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/, lookbehind: true, alias: "function" }, "definition-mutation": { pattern: /(\bmutation\s+)[a-zA-Z_]\w*/, lookbehind: true, alias: "function" }, "definition-query": { pattern: /(\bquery\s+)[a-zA-Z_]\w*/, lookbehind: true, alias: "function" }, keyword: /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/, operator: /[!=|&]|\.{3}/, "property-query": /\w+(?=\s*\()/, object: /\w+(?=\s*\{)/, punctuation: /[!(){}\[\]:=,]/, property: /\w+/ }, Prism.hooks.add("after-tokenize", function(e) {
  if ("graphql" === e.language)
    for (var i = e.tokens.filter(function(e2) {
      return "string" != typeof e2 && "comment" !== e2.type && "scalar" !== e2.type;
    }), o = 0; o < i.length; ) {
      var n = i[o++];
      if ("keyword" === n.type && "mutation" === n.content) {
        var t = [];
        if (p(["definition-mutation", "punctuation"]) && "(" === c(1).content) {
          o += 2;
          var a = d(/^\($/, /^\)$/);
          if (-1 === a)
            continue;
          for (; o < a; o++) {
            var r = c(0);
            "variable" === r.type && (g(r, "variable-input"), t.push(r.content));
          }
          o = a + 1;
        }
        if (p(["punctuation", "property-query"]) && "{" === c(0).content && (o++, g(c(0), "property-mutation"), 0 < t.length)) {
          var s = d(/^\{$/, /^\}$/);
          if (-1 !== s)
            for (var l = o; l < s; l++) {
              var u = i[l];
              "variable" === u.type && 0 <= t.indexOf(u.content) && g(u, "variable-input");
            }
        }
      }
    }
  function c(e2) {
    return i[o + e2];
  }
  function p(e2, n2) {
    n2 = n2 || 0;
    for (var t2 = 0; t2 < e2.length; t2++) {
      var a2 = c(t2 + n2);
      if (!a2 || a2.type !== e2[t2])
        return;
    }
    return 1;
  }
  function d(e2, n2) {
    for (var t2 = 1, a2 = o; a2 < i.length; a2++) {
      var r2 = i[a2], s2 = r2.content;
      if ("punctuation" === r2.type && "string" == typeof s2) {
        if (e2.test(s2))
          t2++;
        else if (n2.test(s2) && 0 === --t2)
          return a2;
      }
    }
    return -1;
  }
  function g(e2, n2) {
    var t2 = e2.alias;
    t2 ? Array.isArray(t2) || (e2.alias = t2 = [t2]) : e2.alias = t2 = [], t2.push(n2);
  }
}), Prism.languages.sql = { comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/, lookbehind: true }, variable: [{ pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, greedy: true }, /@[\w.$]+/], string: { pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/, greedy: true, lookbehind: true }, identifier: { pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/, greedy: true, lookbehind: true, inside: { punctuation: /^`|`$/ } }, function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i, keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i, boolean: /\b(?:FALSE|NULL|TRUE)\b/i, number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i, operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i, punctuation: /[;[\]()`,.]/ }, function(b) {
  var e = b.languages.javascript["template-string"], t = e.pattern.source, m = e.inside.interpolation, f = m.inside["interpolation-punctuation"], s = m.pattern.source;
  function n(e2, n2) {
    if (b.languages[e2])
      return { pattern: RegExp("((?:" + n2 + ")\\s*)" + t), lookbehind: true, greedy: true, inside: { "template-punctuation": { pattern: /^`|`$/, alias: "string" }, "embedded-code": { pattern: /[\s\S]+/, alias: e2 } } };
  }
  function h(e2, n2, t2) {
    e2 = { code: e2, grammar: n2, language: t2 };
    return b.hooks.run("before-tokenize", e2), e2.tokens = b.tokenize(e2.code, e2.grammar), b.hooks.run("after-tokenize", e2), e2.tokens;
  }
  function l(a2, e2, r) {
    var n2 = b.tokenize(a2, { interpolation: { pattern: RegExp(s), lookbehind: true } }), p = 0, d = {}, n2 = h(n2.map(function(e3) {
      if ("string" == typeof e3)
        return e3;
      for (var n3, t2, e3 = e3.content; -1 !== a2.indexOf((t2 = p++, n3 = "___" + r.toUpperCase() + "_" + t2 + "___")); )
        ;
      return d[n3] = e3, n3;
    }).join(""), e2, r), g = Object.keys(d);
    return p = 0, function e3(n3) {
      for (var t2 = 0; t2 < n3.length; t2++) {
        if (p >= g.length)
          return;
        var a3, r2, s2, i, o, l2, u2, c = n3[t2];
        "string" == typeof c || "string" == typeof c.content ? (a3 = g[p], -1 !== (u2 = (l2 = "string" == typeof c ? c : c.content).indexOf(a3)) && (++p, r2 = l2.substring(0, u2), o = d[a3], s2 = void 0, (i = {})["interpolation-punctuation"] = f, 3 === (i = b.tokenize(o, i)).length && ((s2 = [1, 1]).push.apply(s2, h(i[1], b.languages.javascript, "javascript")), i.splice.apply(i, s2)), s2 = new b.Token("interpolation", i, m.alias, o), i = l2.substring(u2 + a3.length), o = [], r2 && o.push(r2), o.push(s2), i && (e3(l2 = [i]), o.push.apply(o, l2)), "string" == typeof c ? (n3.splice.apply(n3, [t2, 1].concat(o)), t2 += o.length - 1) : c.content = o)) : (u2 = c.content, Array.isArray(u2) ? e3(u2) : e3([u2]));
      }
    }(n2), new b.Token(r, n2, "language-" + r, a2);
  }
  b.languages.javascript["template-string"] = [n("css", /\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source), n("html", /\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source), n("svg", /\bsvg/.source), n("markdown", /\b(?:markdown|md)/.source), n("graphql", /\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source), n("sql", /\bsql/.source), e].filter(Boolean);
  var a = { javascript: true, js: true, typescript: true, ts: true, jsx: true, tsx: true };
  function u(e2) {
    return "string" == typeof e2 ? e2 : Array.isArray(e2) ? e2.map(u).join("") : u(e2.content);
  }
  b.hooks.add("after-tokenize", function(e2) {
    e2.language in a && !function e3(n2) {
      for (var t2 = 0, a2 = n2.length; t2 < a2; t2++) {
        var r, s2, i, o = n2[t2];
        "string" != typeof o && (r = o.content, Array.isArray(r) ? "template-string" === o.type ? (o = r[1], 3 === r.length && "string" != typeof o && "embedded-code" === o.type && (s2 = u(o), o = o.alias, o = Array.isArray(o) ? o[0] : o, i = b.languages[o]) && (r[1] = l(s2, i, o))) : e3(r) : "string" != typeof r && e3([r]));
      }
    }(e2.tokens);
  });
}(Prism), function(e) {
  e.languages.typescript = e.languages.extend("javascript", { "class-name": { pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/, lookbehind: true, greedy: true, inside: null }, builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/ }), e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/), delete e.languages.typescript.parameter, delete e.languages.typescript["literal-property"];
  var n = e.languages.extend("typescript", {});
  delete n["class-name"], e.languages.typescript["class-name"].inside = n, e.languages.insertBefore("typescript", "function", { decorator: { pattern: /@[$\w\xA0-\uFFFF]+/, inside: { at: { pattern: /^@/, alias: "operator" }, function: /^[\s\S]+/ } }, "generic-function": { pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/, greedy: true, inside: { function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/, generic: { pattern: /<[\s\S]+/, alias: "class-name", inside: n } } } }), e.languages.ts = e.languages.typescript;
}(Prism), function(e) {
  var n = e.languages.javascript, t = /\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})+\}/.source, a = "(@(?:arg|argument|param|property)\\s+(?:" + t + "\\s+)?)";
  e.languages.jsdoc = e.languages.extend("javadoclike", { parameter: { pattern: RegExp(a + /(?:(?!\s)[$\w\xA0-\uFFFF.])+(?=\s|$)/.source), lookbehind: true, inside: { punctuation: /\./ } } }), e.languages.insertBefore("jsdoc", "keyword", { "optional-parameter": { pattern: RegExp(a + /\[(?:(?!\s)[$\w\xA0-\uFFFF.])+(?:=[^[\]]+)?\](?=\s|$)/.source), lookbehind: true, inside: { parameter: { pattern: /(^\[)[$\w\xA0-\uFFFF\.]+/, lookbehind: true, inside: { punctuation: /\./ } }, code: { pattern: /(=)[\s\S]*(?=\]$)/, lookbehind: true, inside: n, alias: "language-javascript" }, punctuation: /[=[\]]/ } }, "class-name": [{ pattern: RegExp(/(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\s+(?:<TYPE>\s+)?)[A-Z]\w*(?:\.[A-Z]\w*)*/.source.replace(/<TYPE>/g, function() {
    return t;
  })), lookbehind: true, inside: { punctuation: /\./ } }, { pattern: RegExp("(@[a-z]+\\s+)" + t), lookbehind: true, inside: { string: n.string, number: n.number, boolean: n.boolean, keyword: e.languages.typescript.keyword, operator: /=>|\.\.\.|[&|?:*]/, punctuation: /[.,;=<>{}()[\]]/ } }], example: { pattern: /(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/, lookbehind: true, inside: { code: { pattern: /^([\t ]*(?:\*\s*)?)\S.*$/m, lookbehind: true, inside: n, alias: "language-javascript" } } } }), e.languages.javadoclike.addSupport("javascript", e.languages.jsdoc);
}(Prism), function(e) {
  e.languages.flow = e.languages.extend("javascript", {}), e.languages.insertBefore("flow", "keyword", { type: [{ pattern: /\b(?:[Bb]oolean|Function|[Nn]umber|[Ss]tring|[Ss]ymbol|any|mixed|null|void)\b/, alias: "class-name" }] }), e.languages.flow["function-variable"].pattern = /(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/i, delete e.languages.flow.parameter, e.languages.insertBefore("flow", "operator", { "flow-punctuation": { pattern: /\{\||\|\}/, alias: "punctuation" } }), Array.isArray(e.languages.flow.keyword) || (e.languages.flow.keyword = [e.languages.flow.keyword]), e.languages.flow.keyword.unshift({ pattern: /(^|[^$]\b)(?:Class|declare|opaque|type)\b(?!\$)/, lookbehind: true }, { pattern: /(^|[^$]\B)\$(?:Diff|Enum|Exact|Keys|ObjMap|PropertyType|Record|Shape|Subtype|Supertype|await)\b(?!\$)/, lookbehind: true });
}(Prism), Prism.languages.n4js = Prism.languages.extend("javascript", { keyword: /\b(?:Array|any|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/ }), Prism.languages.insertBefore("n4js", "constant", { annotation: { pattern: /@+\w+/, alias: "operator" } }), Prism.languages.n4jsd = Prism.languages.n4js, function(e) {
  function n(e2, n2) {
    return RegExp(e2.replace(/<ID>/g, function() {
      return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source;
    }), n2);
  }
  e.languages.insertBefore("javascript", "function-variable", { "method-variable": { pattern: RegExp("(\\.\\s*)" + e.languages.javascript["function-variable"].pattern.source), lookbehind: true, alias: ["function-variable", "method", "function", "property-access"] } }), e.languages.insertBefore("javascript", "function", { method: { pattern: RegExp("(\\.\\s*)" + e.languages.javascript.function.source), lookbehind: true, alias: ["function", "property-access"] } }), e.languages.insertBefore("javascript", "constant", { "known-class-name": [{ pattern: /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/, alias: "class-name" }, { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: "class-name" }] }), e.languages.insertBefore("javascript", "keyword", { imports: { pattern: n(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source), lookbehind: true, inside: e.languages.javascript }, exports: { pattern: n(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source), lookbehind: true, inside: e.languages.javascript } }), e.languages.javascript.keyword.unshift({ pattern: /\b(?:as|default|export|from|import)\b/, alias: "module" }, { pattern: /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/, alias: "control-flow" }, { pattern: /\bnull\b/, alias: ["null", "nil"] }, { pattern: /\bundefined\b/, alias: "nil" }), e.languages.insertBefore("javascript", "operator", { spread: { pattern: /\.{3}/, alias: "operator" }, arrow: { pattern: /=>/, alias: "operator" } }), e.languages.insertBefore("javascript", "punctuation", { "property-access": { pattern: n(/(\.\s*)#?<ID>/.source), lookbehind: true }, "maybe-class-name": { pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/, lookbehind: true }, dom: { pattern: /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/, alias: "variable" }, console: { pattern: /\bconsole(?=\s*\.)/, alias: "class-name" } });
  for (var t = ["function", "function-variable", "method", "method-variable", "property-access"], a = 0; a < t.length; a++) {
    var r = t[a], s = e.languages.javascript[r], r = (s = "RegExp" === e.util.type(s) ? e.languages.javascript[r] = { pattern: s } : s).inside || {};
    (s.inside = r)["maybe-class-name"] = /^[A-Z][\s\S]*/;
  }
}(Prism), function(s) {
  var e = s.util.clone(s.languages.javascript), t = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source, a = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source, r = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
  function n(e2, n2) {
    return e2 = e2.replace(/<S>/g, function() {
      return t;
    }).replace(/<BRACES>/g, function() {
      return a;
    }).replace(/<SPREAD>/g, function() {
      return r;
    }), RegExp(e2, n2);
  }
  r = n(r).source, s.languages.jsx = s.languages.extend("markup", e), s.languages.jsx.tag.pattern = n(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source), s.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/, s.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/, s.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, s.languages.jsx.tag.inside.comment = e.comment, s.languages.insertBefore("inside", "attr-name", { spread: { pattern: n(/<SPREAD>/.source), inside: s.languages.jsx } }, s.languages.jsx.tag), s.languages.insertBefore("inside", "special-attr", { script: { pattern: n(/=<BRACES>/.source), alias: "language-javascript", inside: { "script-punctuation": { pattern: /^=(?=\{)/, alias: "punctuation" }, rest: s.languages.jsx } } }, s.languages.jsx.tag);
  function i(e2) {
    for (var n2 = [], t2 = 0; t2 < e2.length; t2++) {
      var a2 = e2[t2], r2 = false;
      "string" != typeof a2 && ("tag" === a2.type && a2.content[0] && "tag" === a2.content[0].type ? "</" === a2.content[0].content[0].content ? 0 < n2.length && n2[n2.length - 1].tagName === o(a2.content[0].content[1]) && n2.pop() : "/>" !== a2.content[a2.content.length - 1].content && n2.push({ tagName: o(a2.content[0].content[1]), openedBraces: 0 }) : 0 < n2.length && "punctuation" === a2.type && "{" === a2.content ? n2[n2.length - 1].openedBraces++ : 0 < n2.length && 0 < n2[n2.length - 1].openedBraces && "punctuation" === a2.type && "}" === a2.content ? n2[n2.length - 1].openedBraces-- : r2 = true), (r2 || "string" == typeof a2) && 0 < n2.length && 0 === n2[n2.length - 1].openedBraces && (r2 = o(a2), t2 < e2.length - 1 && ("string" == typeof e2[t2 + 1] || "plain-text" === e2[t2 + 1].type) && (r2 += o(e2[t2 + 1]), e2.splice(t2 + 1, 1)), 0 < t2 && ("string" == typeof e2[t2 - 1] || "plain-text" === e2[t2 - 1].type) && (r2 = o(e2[t2 - 1]) + r2, e2.splice(t2 - 1, 1), t2--), e2[t2] = new s.Token("plain-text", r2, null, r2)), a2.content && "string" != typeof a2.content && i(a2.content);
    }
  }
  var o = function(e2) {
    return e2 ? "string" == typeof e2 ? e2 : "string" == typeof e2.content ? e2.content : e2.content.map(o).join("") : "";
  };
  s.hooks.add("after-tokenize", function(e2) {
    "jsx" !== e2.language && "tsx" !== e2.language || i(e2.tokens);
  });
}(Prism), function(e) {
  var n = e.util.clone(e.languages.typescript), n = (e.languages.tsx = e.languages.extend("jsx", n), delete e.languages.tsx.parameter, delete e.languages.tsx["literal-property"], e.languages.tsx.tag);
  n.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + "(?:" + n.pattern.source + ")", n.pattern.flags), n.lookbehind = true;
}(Prism), Prism.languages.swift = { comment: { pattern: /(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/, lookbehind: true, greedy: true }, "string-literal": [{ pattern: RegExp(/(^|[^"#])/.source + "(?:" + /"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source + "|" + /"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source + ")" + /(?!["#])/.source), lookbehind: true, greedy: true, inside: { interpolation: { pattern: /(\\\()(?:[^()]|\([^()]*\))*(?=\))/, lookbehind: true, inside: null }, "interpolation-punctuation": { pattern: /^\)|\\\($/, alias: "punctuation" }, punctuation: /\\(?=[\r\n])/, string: /[\s\S]+/ } }, { pattern: RegExp(/(^|[^"#])(#+)/.source + "(?:" + /"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source + "|" + /"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source + ")\\2"), lookbehind: true, greedy: true, inside: { interpolation: { pattern: /(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/, lookbehind: true, inside: null }, "interpolation-punctuation": { pattern: /^\)|\\#+\($/, alias: "punctuation" }, string: /[\s\S]+/ } }], directive: { pattern: RegExp(/#/.source + "(?:" + /(?:elseif|if)\b/.source + "(?:[ 	]*" + /(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/.source + ")+|" + /(?:else|endif)\b/.source + ")"), alias: "property", inside: { "directive-name": /^#\w+/, boolean: /\b(?:false|true)\b/, number: /\b\d+(?:\.\d+)*\b/, operator: /!|&&|\|\||[<>]=?/, punctuation: /[(),]/ } }, literal: { pattern: /#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/, alias: "constant" }, "other-directive": { pattern: /#\w+\b/, alias: "property" }, attribute: { pattern: /@\w+/, alias: "atrule" }, "function-definition": { pattern: /(\bfunc\s+)\w+/, lookbehind: true, alias: "function" }, label: { pattern: /\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/, lookbehind: true, alias: "important" }, keyword: /\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/, boolean: /\b(?:false|true)\b/, nil: { pattern: /\bnil\b/, alias: "constant" }, "short-argument": /\$\d+\b/, omit: { pattern: /\b_\b/, alias: "keyword" }, number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i, "class-name": /\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/, function: /\b[a-z_]\w*(?=\s*\()/i, constant: /\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/, operator: /[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/, punctuation: /[{}[\]();,.:\\]/ }, Prism.languages.swift["string-literal"].forEach(function(e) {
  e.inside.interpolation.inside = Prism.languages.swift;
}), function(e) {
  e.languages.kotlin = e.languages.extend("clike", { keyword: { pattern: /(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/, lookbehind: true }, function: [{ pattern: /(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/, greedy: true }, { pattern: /(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/, lookbehind: true, greedy: true }], number: /\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/, operator: /\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/ }), delete e.languages.kotlin["class-name"];
  var n = { "interpolation-punctuation": { pattern: /^\$\{?|\}$/, alias: "punctuation" }, expression: { pattern: /[\s\S]+/, inside: e.languages.kotlin } };
  e.languages.insertBefore("kotlin", "string", { "string-literal": [{ pattern: /"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/, alias: "multiline", inside: { interpolation: { pattern: /\$(?:[a-z_]\w*|\{[^{}]*\})/i, inside: n }, string: /[\s\S]+/ } }, { pattern: /"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/, alias: "singleline", inside: { interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i, lookbehind: true, inside: n }, string: /[\s\S]+/ } }], char: { pattern: /'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/, greedy: true } }), delete e.languages.kotlin.string, e.languages.insertBefore("kotlin", "keyword", { annotation: { pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/, alias: "builtin" } }), e.languages.insertBefore("kotlin", "function", { label: { pattern: /\b\w+@|@\w+\b/, alias: "symbol" } }), e.languages.kt = e.languages.kotlin, e.languages.kts = e.languages.kotlin;
}(Prism), Prism.languages.c = Prism.languages.extend("clike", { comment: { pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: true }, string: { pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, greedy: true }, "class-name": { pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/, lookbehind: true }, keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/, function: /\b[a-z_]\w*(?=\s*\()/i, number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i, operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/ }), Prism.languages.insertBefore("c", "string", { char: { pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/, greedy: true } }), Prism.languages.insertBefore("c", "string", { macro: { pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im, lookbehind: true, greedy: true, alias: "property", inside: { string: [{ pattern: /^(#\s*include\s*)<[^>]+>/, lookbehind: true }, Prism.languages.c.string], char: Prism.languages.c.char, comment: Prism.languages.c.comment, "macro-name": [{ pattern: /(^#\s*define\s+)\w+\b(?!\()/i, lookbehind: true }, { pattern: /(^#\s*define\s+)\w+\b(?=\()/i, lookbehind: true, alias: "function" }], directive: { pattern: /^(#\s*)[a-z]+/, lookbehind: true, alias: "keyword" }, "directive-hash": /^#/, punctuation: /##|\\(?=[\r\n])/, expression: { pattern: /\S[\s\S]*/, inside: Prism.languages.c } } } }), Prism.languages.insertBefore("c", "function", { constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/ }), delete Prism.languages.c.boolean, Prism.languages.objectivec = Prism.languages.extend("c", { string: { pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, greedy: true }, keyword: /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/, operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/ }), delete Prism.languages.objectivec["class-name"], Prism.languages.objc = Prism.languages.objectivec, Prism.languages.reason = Prism.languages.extend("clike", { string: { pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/, greedy: true }, "class-name": /\b[A-Z]\w*/, keyword: /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/, operator: /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/ }), Prism.languages.insertBefore("reason", "class-name", { char: { pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/, greedy: true }, constructor: /\b[A-Z]\w*\b(?!\s*\.)/, label: { pattern: /\b[a-z]\w*(?=::)/, alias: "symbol" } }), delete Prism.languages.reason.function, function(e) {
  for (var n = /\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source, t = 0; t < 2; t++)
    n = n.replace(/<self>/g, function() {
      return n;
    });
  n = n.replace(/<self>/g, function() {
    return /[^\s\S]/.source;
  }), e.languages.rust = { comment: [{ pattern: RegExp(/(^|[^\\])/.source + n), lookbehind: true, greedy: true }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: true, greedy: true }], string: { pattern: /b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/, greedy: true }, char: { pattern: /b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/, greedy: true }, attribute: { pattern: /#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/, greedy: true, alias: "attr-name", inside: { string: null } }, "closure-params": { pattern: /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/, lookbehind: true, greedy: true, inside: { "closure-punctuation": { pattern: /^\||\|$/, alias: "punctuation" }, rest: null } }, "lifetime-annotation": { pattern: /'\w+/, alias: "symbol" }, "fragment-specifier": { pattern: /(\$\w+:)[a-z]+/, lookbehind: true, alias: "punctuation" }, variable: /\$\w+/, "function-definition": { pattern: /(\bfn\s+)\w+/, lookbehind: true, alias: "function" }, "type-definition": { pattern: /(\b(?:enum|struct|trait|type|union)\s+)\w+/, lookbehind: true, alias: "class-name" }, "module-declaration": [{ pattern: /(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/, lookbehind: true, alias: "namespace" }, { pattern: /(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/, lookbehind: true, alias: "namespace", inside: { punctuation: /::/ } }], keyword: [/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/, /\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/], function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/, macro: { pattern: /\b\w+!/, alias: "property" }, constant: /\b[A-Z_][A-Z_\d]+\b/, "class-name": /\b[A-Z]\w*\b/, namespace: { pattern: /(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/, inside: { punctuation: /::/ } }, number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/, boolean: /\b(?:false|true)\b/, punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/, operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/ }, e.languages.rust["closure-params"].inside.rest = e.languages.rust, e.languages.rust.attribute.inside.string = e.languages.rust.string;
}(Prism), Prism.languages.go = Prism.languages.extend("clike", { string: { pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/, lookbehind: true, greedy: true }, keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/, boolean: /\b(?:_|false|iota|nil|true)\b/, number: [/\b0(?:b[01_]+|o[0-7_]+)i?\b/i, /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i, /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i], operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./, builtin: /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/ }), Prism.languages.insertBefore("go", "string", { char: { pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/, greedy: true } }), delete Prism.languages.go["class-name"], function(e) {
  var n = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/, t = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function() {
    return n.source;
  });
  e.languages.cpp = e.languages.extend("c", { "class-name": [{ pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function() {
    return n.source;
  })), lookbehind: true }, /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/, /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i, /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/], keyword: n, number: { pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i, greedy: true }, operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/, boolean: /\b(?:false|true)\b/ }), e.languages.insertBefore("cpp", "string", { module: { pattern: RegExp(/(\b(?:import|module)\s+)/.source + "(?:" + /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source + "|" + /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, function() {
    return t;
  }) + ")"), lookbehind: true, greedy: true, inside: { string: /^[<"][\s\S]+/, operator: /:/, punctuation: /\./ } }, "raw-string": { pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/, alias: "string", greedy: true } }), e.languages.insertBefore("cpp", "keyword", { "generic-function": { pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i, inside: { function: /^\w+/, generic: { pattern: /<[\s\S]+/, alias: "class-name", inside: e.languages.cpp } } } }), e.languages.insertBefore("cpp", "operator", { "double-colon": { pattern: /::/, alias: "punctuation" } }), e.languages.insertBefore("cpp", "class-name", { "base-clause": { pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/, lookbehind: true, greedy: true, inside: e.languages.extend("cpp", {}) } }), e.languages.insertBefore("inside", "double-colon", { "class-name": /\b[a-z_]\w*\b(?!\s*::)/i }, e.languages.cpp["base-clause"]);
}(Prism), Prism.languages.python = { comment: { pattern: /(^|[^\\])#.*/, lookbehind: true, greedy: true }, "string-interpolation": { pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i, greedy: true, inside: { interpolation: { pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/, lookbehind: true, inside: { "format-spec": { pattern: /(:)[^:(){}]+(?=\}$)/, lookbehind: true }, "conversion-option": { pattern: /![sra](?=[:}]$)/, alias: "punctuation" }, rest: null } }, string: /[\s\S]+/ } }, "triple-quoted-string": { pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i, greedy: true, alias: "string" }, string: { pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i, greedy: true }, function: { pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g, lookbehind: true }, "class-name": { pattern: /(\bclass\s+)\w+/i, lookbehind: true }, decorator: { pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m, lookbehind: true, alias: ["annotation", "punctuation"], inside: { punctuation: /\./ } }, keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/, builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/, boolean: /\b(?:False|None|True)\b/, number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i, operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/, punctuation: /[{}[\];(),.:]/ }, Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python, Prism.languages.py = Prism.languages.python;

// src/themes/index.ts
var themes_exports = {};
__export(themes_exports, {
  dracula: () => dracula_default,
  duotoneDark: () => duotoneDark_default,
  duotoneLight: () => duotoneLight_default,
  github: () => github_default,
  jettwaveDark: () => jettwaveDark_default,
  jettwaveLight: () => jettwaveLight_default,
  nightOwl: () => nightOwl_default,
  nightOwlLight: () => nightOwlLight_default,
  oceanicNext: () => oceanicNext_default,
  okaidia: () => okaidia_default,
  oneDark: () => oneDark_default,
  oneLight: () => oneLight_default,
  palenight: () => palenight_default,
  shadesOfPurple: () => shadesOfPurple_default,
  synthwave84: () => synthwave84_default,
  ultramin: () => ultramin_default,
  vsDark: () => vsDark_default,
  vsLight: () => vsLight_default
});

// src/themes/dracula.ts
var theme = {
  plain: {
    color: "#F8F8F2",
    backgroundColor: "#282A36"
  },
  styles: [
    {
      types: ["prolog", "constant", "builtin"],
      style: {
        color: "rgb(189, 147, 249)"
      }
    },
    {
      types: ["inserted", "function"],
      style: {
        color: "rgb(80, 250, 123)"
      }
    },
    {
      types: ["deleted"],
      style: {
        color: "rgb(255, 85, 85)"
      }
    },
    {
      types: ["changed"],
      style: {
        color: "rgb(255, 184, 108)"
      }
    },
    {
      types: ["punctuation", "symbol"],
      style: {
        color: "rgb(248, 248, 242)"
      }
    },
    {
      types: ["string", "char", "tag", "selector"],
      style: {
        color: "rgb(255, 121, 198)"
      }
    },
    {
      types: ["keyword", "variable"],
      style: {
        color: "rgb(189, 147, 249)",
        fontStyle: "italic"
      }
    },
    {
      types: ["comment"],
      style: {
        color: "rgb(98, 114, 164)"
      }
    },
    {
      types: ["attr-name"],
      style: {
        color: "rgb(241, 250, 140)"
      }
    }
  ]
};
var dracula_default = theme;

// src/themes/duotoneDark.ts
var theme2 = {
  plain: {
    backgroundColor: "#2a2734",
    color: "#9a86fd"
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
      style: {
        color: "#6c6783"
      }
    },
    {
      types: ["namespace"],
      style: {
        opacity: 0.7
      }
    },
    {
      types: ["tag", "operator", "number"],
      style: {
        color: "#e09142"
      }
    },
    {
      types: ["property", "function"],
      style: {
        color: "#9a86fd"
      }
    },
    {
      types: ["tag-id", "selector", "atrule-id"],
      style: {
        color: "#eeebff"
      }
    },
    {
      types: ["attr-name"],
      style: {
        color: "#c4b9fe"
      }
    },
    {
      types: [
        "boolean",
        "string",
        "entity",
        "url",
        "attr-value",
        "keyword",
        "control",
        "directive",
        "unit",
        "statement",
        "regex",
        "atrule",
        "placeholder",
        "variable"
      ],
      style: {
        color: "#ffcc99"
      }
    },
    {
      types: ["deleted"],
      style: {
        textDecorationLine: "line-through"
      }
    },
    {
      types: ["inserted"],
      style: {
        textDecorationLine: "underline"
      }
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic"
      }
    },
    {
      types: ["important", "bold"],
      style: {
        fontWeight: "bold"
      }
    },
    {
      types: ["important"],
      style: {
        color: "#c4b9fe"
      }
    }
  ]
};
var duotoneDark_default = theme2;

// src/themes/duotoneLight.ts
var theme3 = {
  plain: {
    backgroundColor: "#faf8f5",
    color: "#728fcb"
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
      style: {
        color: "#b6ad9a"
      }
    },
    {
      types: ["namespace"],
      style: {
        opacity: 0.7
      }
    },
    {
      types: ["tag", "operator", "number"],
      style: {
        color: "#063289"
      }
    },
    {
      types: ["property", "function"],
      style: {
        color: "#b29762"
      }
    },
    {
      types: ["tag-id", "selector", "atrule-id"],
      style: {
        color: "#2d2006"
      }
    },
    {
      types: ["attr-name"],
      style: {
        color: "#896724"
      }
    },
    {
      types: [
        "boolean",
        "string",
        "entity",
        "url",
        "attr-value",
        "keyword",
        "control",
        "directive",
        "unit",
        "statement",
        "regex",
        "atrule"
      ],
      style: {
        color: "#728fcb"
      }
    },
    {
      types: ["placeholder", "variable"],
      style: {
        color: "#93abdc"
      }
    },
    {
      types: ["deleted"],
      style: {
        textDecorationLine: "line-through"
      }
    },
    {
      types: ["inserted"],
      style: {
        textDecorationLine: "underline"
      }
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic"
      }
    },
    {
      types: ["important", "bold"],
      style: {
        fontWeight: "bold"
      }
    },
    {
      types: ["important"],
      style: {
        color: "#896724"
      }
    }
  ]
};
var duotoneLight_default = theme3;

// src/themes/github.ts
var theme4 = {
  plain: {
    color: "#393A34",
    backgroundColor: "#f6f8fa"
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: {
        color: "#999988",
        fontStyle: "italic"
      }
    },
    {
      types: ["namespace"],
      style: {
        opacity: 0.7
      }
    },
    {
      types: ["string", "attr-value"],
      style: {
        color: "#e3116c"
      }
    },
    {
      types: ["punctuation", "operator"],
      style: {
        color: "#393A34"
      }
    },
    {
      types: [
        "entity",
        "url",
        "symbol",
        "number",
        "boolean",
        "variable",
        "constant",
        "property",
        "regex",
        "inserted"
      ],
      style: {
        color: "#36acaa"
      }
    },
    {
      types: ["atrule", "keyword", "attr-name", "selector"],
      style: {
        color: "#00a4db"
      }
    },
    {
      types: ["function", "deleted", "tag"],
      style: {
        color: "#d73a49"
      }
    },
    {
      types: ["function-variable"],
      style: {
        color: "#6f42c1"
      }
    },
    {
      types: ["tag", "selector", "keyword"],
      style: {
        color: "#00009f"
      }
    }
  ]
};
var github_default = theme4;

// src/themes/nightOwl.ts
var theme5 = {
  plain: {
    color: "#d6deeb",
    backgroundColor: "#011627"
  },
  styles: [
    {
      types: ["changed"],
      style: {
        color: "rgb(162, 191, 252)",
        fontStyle: "italic"
      }
    },
    {
      types: ["deleted"],
      style: {
        color: "rgba(239, 83, 80, 0.56)",
        fontStyle: "italic"
      }
    },
    {
      types: ["inserted", "attr-name"],
      style: {
        color: "rgb(173, 219, 103)",
        fontStyle: "italic"
      }
    },
    {
      types: ["comment"],
      style: {
        color: "rgb(99, 119, 119)",
        fontStyle: "italic"
      }
    },
    {
      types: ["string", "url"],
      style: {
        color: "rgb(173, 219, 103)"
      }
    },
    {
      types: ["variable"],
      style: {
        color: "rgb(214, 222, 235)"
      }
    },
    {
      types: ["number"],
      style: {
        color: "rgb(247, 140, 108)"
      }
    },
    {
      types: ["builtin", "char", "constant", "function"],
      style: {
        color: "rgb(130, 170, 255)"
      }
    },
    {
      // This was manually added after the auto-generation
      // so that punctuations are not italicised
      types: ["punctuation"],
      style: {
        color: "rgb(199, 146, 234)"
      }
    },
    {
      types: ["selector", "doctype"],
      style: {
        color: "rgb(199, 146, 234)",
        fontStyle: "italic"
      }
    },
    {
      types: ["class-name"],
      style: {
        color: "rgb(255, 203, 139)"
      }
    },
    {
      types: ["tag", "operator", "keyword"],
      style: {
        color: "rgb(127, 219, 202)"
      }
    },
    {
      types: ["boolean"],
      style: {
        color: "rgb(255, 88, 116)"
      }
    },
    {
      types: ["property"],
      style: {
        color: "rgb(128, 203, 196)"
      }
    },
    {
      types: ["namespace"],
      style: {
        color: "rgb(178, 204, 214)"
      }
    }
  ]
};
var nightOwl_default = theme5;

// src/themes/nightOwlLight.ts
var theme6 = {
  plain: {
    color: "#403f53",
    backgroundColor: "#FBFBFB"
  },
  styles: [
    {
      types: ["changed"],
      style: {
        color: "rgb(162, 191, 252)",
        fontStyle: "italic"
      }
    },
    {
      types: ["deleted"],
      style: {
        color: "rgba(239, 83, 80, 0.56)",
        fontStyle: "italic"
      }
    },
    {
      types: ["inserted", "attr-name"],
      style: {
        color: "rgb(72, 118, 214)",
        fontStyle: "italic"
      }
    },
    {
      types: ["comment"],
      style: {
        color: "rgb(152, 159, 177)",
        fontStyle: "italic"
      }
    },
    {
      types: ["string", "builtin", "char", "constant", "url"],
      style: {
        color: "rgb(72, 118, 214)"
      }
    },
    {
      types: ["variable"],
      style: {
        color: "rgb(201, 103, 101)"
      }
    },
    {
      types: ["number"],
      style: {
        color: "rgb(170, 9, 130)"
      }
    },
    {
      // This was manually added after the auto-generation
      // so that punctuations are not italicised
      types: ["punctuation"],
      style: {
        color: "rgb(153, 76, 195)"
      }
    },
    {
      types: ["function", "selector", "doctype"],
      style: {
        color: "rgb(153, 76, 195)",
        fontStyle: "italic"
      }
    },
    {
      types: ["class-name"],
      style: {
        color: "rgb(17, 17, 17)"
      }
    },
    {
      types: ["tag"],
      style: {
        color: "rgb(153, 76, 195)"
      }
    },
    {
      types: ["operator", "property", "keyword", "namespace"],
      style: {
        color: "rgb(12, 150, 155)"
      }
    },
    {
      types: ["boolean"],
      style: {
        color: "rgb(188, 84, 84)"
      }
    }
  ]
};
var nightOwlLight_default = theme6;

// src/themes/oceanicNext.ts
var colors = {
  char: "#D8DEE9",
  comment: "#999999",
  keyword: "#c5a5c5",
  primitive: "#5a9bcf",
  string: "#8dc891",
  variable: "#d7deea",
  boolean: "#ff8b50",
  punctuation: "#5FB3B3",
  tag: "#fc929e",
  function: "#79b6f2",
  className: "#FAC863",
  method: "#6699CC",
  operator: "#fc929e"
};
var theme7 = {
  plain: {
    backgroundColor: "#282c34",
    color: "#ffffff"
  },
  styles: [
    {
      types: ["attr-name"],
      style: {
        color: colors.keyword
      }
    },
    {
      types: ["attr-value"],
      style: {
        color: colors.string
      }
    },
    {
      types: [
        "comment",
        "block-comment",
        "prolog",
        "doctype",
        "cdata",
        "shebang"
      ],
      style: {
        color: colors.comment
      }
    },
    {
      types: [
        "property",
        "number",
        "function-name",
        "constant",
        "symbol",
        "deleted"
      ],
      style: {
        color: colors.primitive
      }
    },
    {
      types: ["boolean"],
      style: {
        color: colors.boolean
      }
    },
    {
      types: ["tag"],
      style: {
        color: colors.tag
      }
    },
    {
      types: ["string"],
      style: {
        color: colors.string
      }
    },
    {
      types: ["punctuation"],
      style: {
        color: colors.string
      }
    },
    {
      types: ["selector", "char", "builtin", "inserted"],
      style: {
        color: colors.char
      }
    },
    {
      types: ["function"],
      style: {
        color: colors.function
      }
    },
    {
      types: ["operator", "entity", "url", "variable"],
      style: {
        color: colors.variable
      }
    },
    {
      types: ["keyword"],
      style: {
        color: colors.keyword
      }
    },
    {
      types: ["atrule", "class-name"],
      style: {
        color: colors.className
      }
    },
    {
      types: ["important"],
      style: {
        fontWeight: "400"
      }
    },
    {
      types: ["bold"],
      style: {
        fontWeight: "bold"
      }
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic"
      }
    },
    {
      types: ["namespace"],
      style: {
        opacity: 0.7
      }
    }
  ]
};
var oceanicNext_default = theme7;

// src/themes/okaidia.ts
var theme8 = {
  plain: {
    color: "#f8f8f2",
    backgroundColor: "#272822"
  },
  styles: [
    {
      types: ["changed"],
      style: {
        color: "rgb(162, 191, 252)",
        fontStyle: "italic"
      }
    },
    {
      types: ["deleted"],
      style: {
        color: "#f92672",
        fontStyle: "italic"
      }
    },
    {
      types: ["inserted"],
      style: {
        color: "rgb(173, 219, 103)",
        fontStyle: "italic"
      }
    },
    {
      types: ["comment"],
      style: {
        color: "#8292a2",
        fontStyle: "italic"
      }
    },
    {
      types: ["string", "url"],
      style: {
        color: "#a6e22e"
      }
    },
    {
      types: ["variable"],
      style: {
        color: "#f8f8f2"
      }
    },
    {
      types: ["number"],
      style: {
        color: "#ae81ff"
      }
    },
    {
      types: ["builtin", "char", "constant", "function", "class-name"],
      style: {
        color: "#e6db74"
      }
    },
    {
      types: ["punctuation"],
      style: {
        color: "#f8f8f2"
      }
    },
    {
      types: ["selector", "doctype"],
      style: {
        color: "#a6e22e",
        fontStyle: "italic"
      }
    },
    {
      types: ["tag", "operator", "keyword"],
      style: {
        color: "#66d9ef"
      }
    },
    {
      types: ["boolean"],
      style: {
        color: "#ae81ff"
      }
    },
    {
      types: ["namespace"],
      style: {
        color: "rgb(178, 204, 214)",
        opacity: 0.7
      }
    },
    {
      types: ["tag", "property"],
      style: {
        color: "#f92672"
      }
    },
    {
      types: ["attr-name"],
      style: {
        color: "#a6e22e !important"
      }
    },
    {
      types: ["doctype"],
      style: {
        color: "#8292a2"
      }
    },
    {
      types: ["rule"],
      style: {
        color: "#e6db74"
      }
    }
  ]
};
var okaidia_default = theme8;

// src/themes/palenight.ts
var theme9 = {
  plain: {
    color: "#bfc7d5",
    backgroundColor: "#292d3e"
  },
  styles: [
    {
      types: ["comment"],
      style: {
        color: "rgb(105, 112, 152)",
        fontStyle: "italic"
      }
    },
    {
      types: ["string", "inserted"],
      style: {
        color: "rgb(195, 232, 141)"
      }
    },
    {
      types: ["number"],
      style: {
        color: "rgb(247, 140, 108)"
      }
    },
    {
      types: ["builtin", "char", "constant", "function"],
      style: {
        color: "rgb(130, 170, 255)"
      }
    },
    {
      types: ["punctuation", "selector"],
      style: {
        color: "rgb(199, 146, 234)"
      }
    },
    {
      types: ["variable"],
      style: {
        color: "rgb(191, 199, 213)"
      }
    },
    {
      types: ["class-name", "attr-name"],
      style: {
        color: "rgb(255, 203, 107)"
      }
    },
    {
      types: ["tag", "deleted"],
      style: {
        color: "rgb(255, 85, 114)"
      }
    },
    {
      types: ["operator"],
      style: {
        color: "rgb(137, 221, 255)"
      }
    },
    {
      types: ["boolean"],
      style: {
        color: "rgb(255, 88, 116)"
      }
    },
    {
      types: ["keyword"],
      style: {
        fontStyle: "italic"
      }
    },
    {
      types: ["doctype"],
      style: {
        color: "rgb(199, 146, 234)",
        fontStyle: "italic"
      }
    },
    {
      types: ["namespace"],
      style: {
        color: "rgb(178, 204, 214)"
      }
    },
    {
      types: ["url"],
      style: {
        color: "rgb(221, 221, 221)"
      }
    }
  ]
};
var palenight_default = theme9;

// src/themes/shadesOfPurple.ts
var theme10 = {
  plain: {
    color: "#9EFEFF",
    backgroundColor: "#2D2A55"
  },
  styles: [
    {
      types: ["changed"],
      style: {
        color: "rgb(255, 238, 128)"
      }
    },
    {
      types: ["deleted"],
      style: {
        color: "rgba(239, 83, 80, 0.56)"
      }
    },
    {
      types: ["inserted"],
      style: {
        color: "rgb(173, 219, 103)"
      }
    },
    {
      types: ["comment"],
      style: {
        color: "rgb(179, 98, 255)",
        fontStyle: "italic"
      }
    },
    {
      types: ["punctuation"],
      style: {
        color: "rgb(255, 255, 255)"
      }
    },
    {
      types: ["constant"],
      style: {
        color: "rgb(255, 98, 140)"
      }
    },
    {
      types: ["string", "url"],
      style: {
        color: "rgb(165, 255, 144)"
      }
    },
    {
      types: ["variable"],
      style: {
        color: "rgb(255, 238, 128)"
      }
    },
    {
      types: ["number", "boolean"],
      style: {
        color: "rgb(255, 98, 140)"
      }
    },
    {
      types: ["attr-name"],
      style: {
        color: "rgb(255, 180, 84)"
      }
    },
    {
      types: [
        "keyword",
        "operator",
        "property",
        "namespace",
        "tag",
        "selector",
        "doctype"
      ],
      style: {
        color: "rgb(255, 157, 0)"
      }
    },
    {
      types: ["builtin", "char", "constant", "function", "class-name"],
      style: {
        color: "rgb(250, 208, 0)"
      }
    }
  ]
};
var shadesOfPurple_default = theme10;

// src/themes/synthwave84.ts
var theme11 = {
  plain: {
    backgroundColor: "linear-gradient(to bottom, #2a2139 75%, #34294f)",
    backgroundImage: "#34294f",
    color: "#f92aad",
    textShadow: "0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"
  },
  styles: [
    {
      types: ["comment", "block-comment", "prolog", "doctype", "cdata"],
      style: {
        color: "#495495",
        fontStyle: "italic"
      }
    },
    {
      types: ["punctuation"],
      style: {
        color: "#ccc"
      }
    },
    {
      types: [
        "tag",
        "attr-name",
        "namespace",
        "number",
        "unit",
        "hexcode",
        "deleted"
      ],
      style: {
        color: "#e2777a"
      }
    },
    {
      types: ["property", "selector"],
      style: {
        color: "#72f1b8",
        textShadow: "0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475"
      }
    },
    {
      types: ["function-name"],
      style: {
        color: "#6196cc"
      }
    },
    {
      types: ["boolean", "selector-id", "function"],
      style: {
        color: "#fdfdfd",
        textShadow: "0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975"
      }
    },
    {
      types: ["class-name", "maybe-class-name", "builtin"],
      style: {
        color: "#fff5f6",
        textShadow: "0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75, 0 0 25px #fc1f2c75"
      }
    },
    {
      types: ["constant", "symbol"],
      style: {
        color: "#f92aad",
        textShadow: "0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"
      }
    },
    {
      types: ["important", "atrule", "keyword", "selector-class"],
      style: {
        color: "#f4eee4",
        textShadow: "0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575"
      }
    },
    {
      types: ["string", "char", "attr-value", "regex", "variable"],
      style: {
        color: "#f87c32"
      }
    },
    {
      types: ["parameter"],
      style: {
        fontStyle: "italic"
      }
    },
    {
      types: ["entity", "url"],
      style: {
        color: "#67cdcc"
      }
    },
    {
      types: ["operator"],
      style: {
        color: "ffffffee"
      }
    },
    {
      types: ["important", "bold"],
      style: {
        fontWeight: "bold"
      }
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic"
      }
    },
    {
      types: ["entity"],
      style: {
        cursor: "help"
      }
    },
    {
      types: ["inserted"],
      style: {
        color: "green"
      }
    }
  ]
};
var synthwave84_default = theme11;

// src/themes/ultramin.ts
var theme12 = {
  plain: {
    color: "#282a2e",
    backgroundColor: "#ffffff"
  },
  styles: [
    {
      types: ["comment"],
      style: {
        color: "rgb(197, 200, 198)"
      }
    },
    {
      types: ["string", "number", "builtin", "variable"],
      style: {
        color: "rgb(150, 152, 150)"
      }
    },
    {
      types: ["class-name", "function", "tag", "attr-name"],
      style: {
        color: "rgb(40, 42, 46)"
      }
    }
  ]
};
var ultramin_default = theme12;

// src/themes/vsDark.ts
var theme13 = {
  plain: {
    color: "#9CDCFE",
    backgroundColor: "#1E1E1E"
  },
  styles: [
    {
      types: ["prolog"],
      style: {
        color: "rgb(0, 0, 128)"
      }
    },
    {
      types: ["comment"],
      style: {
        color: "rgb(106, 153, 85)"
      }
    },
    {
      types: ["builtin", "changed", "keyword", "interpolation-punctuation"],
      style: {
        color: "rgb(86, 156, 214)"
      }
    },
    {
      types: ["number", "inserted"],
      style: {
        color: "rgb(181, 206, 168)"
      }
    },
    {
      types: ["constant"],
      style: {
        color: "rgb(100, 102, 149)"
      }
    },
    {
      types: ["attr-name", "variable"],
      style: {
        color: "rgb(156, 220, 254)"
      }
    },
    {
      types: ["deleted", "string", "attr-value", "template-punctuation"],
      style: {
        color: "rgb(206, 145, 120)"
      }
    },
    {
      types: ["selector"],
      style: {
        color: "rgb(215, 186, 125)"
      }
    },
    {
      // Fix tag color
      types: ["tag"],
      style: {
        color: "rgb(78, 201, 176)"
      }
    },
    {
      // Fix tag color for HTML
      types: ["tag"],
      languages: ["markup"],
      style: {
        color: "rgb(86, 156, 214)"
      }
    },
    {
      types: ["punctuation", "operator"],
      style: {
        color: "rgb(212, 212, 212)"
      }
    },
    {
      // Fix punctuation color for HTML
      types: ["punctuation"],
      languages: ["markup"],
      style: {
        color: "#808080"
      }
    },
    {
      types: ["function"],
      style: {
        color: "rgb(220, 220, 170)"
      }
    },
    {
      types: ["class-name"],
      style: {
        color: "rgb(78, 201, 176)"
      }
    },
    {
      types: ["char"],
      style: {
        color: "rgb(209, 105, 105)"
      }
    }
  ]
};
var vsDark_default = theme13;

// src/themes/vsLight.ts
var theme14 = {
  plain: {
    color: "#000000",
    backgroundColor: "#ffffff"
  },
  styles: [
    {
      types: ["comment"],
      style: {
        color: "rgb(0, 128, 0)"
      }
    },
    {
      types: ["builtin"],
      style: {
        color: "rgb(0, 112, 193)"
      }
    },
    {
      types: ["number", "variable", "inserted"],
      style: {
        color: "rgb(9, 134, 88)"
      }
    },
    {
      types: ["operator"],
      style: {
        color: "rgb(0, 0, 0)"
      }
    },
    {
      types: ["constant", "char"],
      style: {
        color: "rgb(129, 31, 63)"
      }
    },
    {
      types: ["tag"],
      style: {
        color: "rgb(128, 0, 0)"
      }
    },
    {
      types: ["attr-name"],
      style: {
        color: "rgb(255, 0, 0)"
      }
    },
    {
      types: ["deleted", "string"],
      style: {
        color: "rgb(163, 21, 21)"
      }
    },
    {
      types: ["changed", "punctuation"],
      style: {
        color: "rgb(4, 81, 165)"
      }
    },
    {
      types: ["function", "keyword"],
      style: {
        color: "rgb(0, 0, 255)"
      }
    },
    {
      types: ["class-name"],
      style: {
        color: "rgb(38, 127, 153)"
      }
    }
  ]
};
var vsLight_default = theme14;

// src/themes/jettwaveDark.ts
var theme15 = {
  plain: {
    color: "#f8fafc",
    backgroundColor: "#011627"
  },
  styles: [
    {
      types: ["prolog"],
      style: {
        color: "#000080"
      }
    },
    {
      types: ["comment"],
      style: {
        color: "#6A9955"
      }
    },
    {
      types: ["builtin", "changed", "keyword", "interpolation-punctuation"],
      style: {
        color: "#569CD6"
      }
    },
    {
      types: ["number", "inserted"],
      style: {
        color: "#B5CEA8"
      }
    },
    {
      types: ["constant"],
      style: {
        color: "#f8fafc"
      }
    },
    {
      types: ["attr-name", "variable"],
      style: {
        color: "#9CDCFE"
      }
    },
    {
      types: ["deleted", "string", "attr-value", "template-punctuation"],
      style: {
        color: "#cbd5e1"
      }
    },
    {
      types: ["selector"],
      style: {
        color: "#D7BA7D"
      }
    },
    {
      types: ["tag"],
      style: {
        color: "#0ea5e9"
      }
    },
    {
      types: ["tag"],
      languages: ["markup"],
      style: {
        color: "#0ea5e9"
      }
    },
    {
      types: ["punctuation", "operator"],
      style: {
        color: "#D4D4D4"
      }
    },
    {
      types: ["punctuation"],
      languages: ["markup"],
      style: {
        color: "#808080"
      }
    },
    {
      types: ["function"],
      style: {
        color: "#7dd3fc"
      }
    },
    {
      types: ["class-name"],
      style: {
        color: "#0ea5e9"
      }
    },
    {
      types: ["char"],
      style: {
        color: "#D16969"
      }
    }
  ]
};
var jettwaveDark_default = theme15;

// src/themes/jettwaveLight.ts
var theme16 = {
  plain: {
    color: "#0f172a",
    backgroundColor: "#f1f5f9"
  },
  styles: [
    {
      types: ["prolog"],
      style: {
        color: "#000080"
      }
    },
    {
      types: ["comment"],
      style: {
        color: "#6A9955"
      }
    },
    {
      types: ["builtin", "changed", "keyword", "interpolation-punctuation"],
      style: {
        color: "#0c4a6e"
      }
    },
    {
      types: ["number", "inserted"],
      style: {
        color: "#B5CEA8"
      }
    },
    {
      types: ["constant"],
      style: {
        color: "#0f172a"
      }
    },
    {
      types: ["attr-name", "variable"],
      style: {
        color: "#0c4a6e"
      }
    },
    {
      types: ["deleted", "string", "attr-value", "template-punctuation"],
      style: {
        color: "#64748b"
      }
    },
    {
      types: ["selector"],
      style: {
        color: "#D7BA7D"
      }
    },
    {
      types: ["tag"],
      style: {
        color: "#0ea5e9"
      }
    },
    {
      types: ["tag"],
      languages: ["markup"],
      style: {
        color: "#0ea5e9"
      }
    },
    {
      types: ["punctuation", "operator"],
      style: {
        color: "#475569"
      }
    },
    {
      types: ["punctuation"],
      languages: ["markup"],
      style: {
        color: "#808080"
      }
    },
    {
      types: ["function"],
      style: {
        color: "#0e7490"
      }
    },
    {
      types: ["class-name"],
      style: {
        color: "#0ea5e9"
      }
    },
    {
      types: ["char"],
      style: {
        color: "#D16969"
      }
    }
  ]
};
var jettwaveLight_default = theme16;

// src/themes/oneDark.ts
var theme17 = {
  plain: {
    backgroundColor: "hsl(220, 13%, 18%)",
    color: "hsl(220, 14%, 71%)",
    textShadow: "0 1px rgba(0, 0, 0, 0.3)"
  },
  styles: [
    {
      types: ["comment", "prolog", "cdata"],
      style: {
        color: "hsl(220, 10%, 40%)"
      }
    },
    {
      types: ["doctype", "punctuation", "entity"],
      style: {
        color: "hsl(220, 14%, 71%)"
      }
    },
    {
      types: [
        "attr-name",
        "class-name",
        "maybe-class-name",
        "boolean",
        "constant",
        "number",
        "atrule"
      ],
      style: { color: "hsl(29, 54%, 61%)" }
    },
    {
      types: ["keyword"],
      style: { color: "hsl(286, 60%, 67%)" }
    },
    {
      types: ["property", "tag", "symbol", "deleted", "important"],
      style: {
        color: "hsl(355, 65%, 65%)"
      }
    },
    {
      types: [
        "selector",
        "string",
        "char",
        "builtin",
        "inserted",
        "regex",
        "attr-value"
      ],
      style: {
        color: "hsl(95, 38%, 62%)"
      }
    },
    {
      types: ["variable", "operator", "function"],
      style: {
        color: "hsl(207, 82%, 66%)"
      }
    },
    {
      types: ["url"],
      style: {
        color: "hsl(187, 47%, 55%)"
      }
    },
    {
      types: ["deleted"],
      style: {
        textDecorationLine: "line-through"
      }
    },
    {
      types: ["inserted"],
      style: {
        textDecorationLine: "underline"
      }
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic"
      }
    },
    {
      types: ["important", "bold"],
      style: {
        fontWeight: "bold"
      }
    },
    {
      types: ["important"],
      style: {
        color: "hsl(220, 14%, 71%)"
      }
    }
  ]
};
var oneDark_default = theme17;

// src/themes/oneLight.ts
var theme18 = {
  plain: {
    backgroundColor: "hsl(230, 1%, 98%)",
    color: "hsl(230, 8%, 24%)"
  },
  styles: [
    {
      types: ["comment", "prolog", "cdata"],
      style: {
        color: "hsl(230, 4%, 64%)"
      }
    },
    {
      types: ["doctype", "punctuation", "entity"],
      style: {
        color: "hsl(230, 8%, 24%)"
      }
    },
    {
      types: [
        "attr-name",
        "class-name",
        "boolean",
        "constant",
        "number",
        "atrule"
      ],
      style: {
        color: "hsl(35, 99%, 36%)"
      }
    },
    {
      types: ["keyword"],
      style: {
        color: "hsl(301, 63%, 40%)"
      }
    },
    {
      types: ["property", "tag", "symbol", "deleted", "important"],
      style: {
        color: "hsl(5, 74%, 59%)"
      }
    },
    {
      types: [
        "selector",
        "string",
        "char",
        "builtin",
        "inserted",
        "regex",
        "attr-value",
        "punctuation"
      ],
      style: {
        color: "hsl(119, 34%, 47%)"
      }
    },
    {
      types: ["variable", "operator", "function"],
      style: {
        color: "hsl(221, 87%, 60%)"
      }
    },
    {
      types: ["url"],
      style: {
        color: "hsl(198, 99%, 37%)"
      }
    },
    {
      types: ["deleted"],
      style: {
        textDecorationLine: "line-through"
      }
    },
    {
      types: ["inserted"],
      style: {
        textDecorationLine: "underline"
      }
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic"
      }
    },
    {
      types: ["important", "bold"],
      style: {
        fontWeight: "bold"
      }
    },
    {
      types: ["important"],
      style: {
        color: "hsl(230, 8%, 24%)"
      }
    }
  ]
};
var oneLight_default = theme18;

// src/index.ts


// src/components/useThemeDictionary.ts


// src/utils/themeToDict.ts
var themeToDict = (theme19, language) => {
  const { plain } = theme19;
  const themeDict = theme19.styles.reduce((acc, themeEntry) => {
    const { languages: languages2, style } = themeEntry;
    if (languages2 && !languages2.includes(language)) {
      return acc;
    }
    themeEntry.types.forEach((type) => {
      const accStyle = __spreadValues(__spreadValues({}, acc[type]), style);
      acc[type] = accStyle;
    });
    return acc;
  }, {});
  themeDict.root = plain;
  themeDict.plain = __spreadProps(__spreadValues({}, plain), { backgroundColor: void 0 });
  return themeDict;
};
var themeToDict_default = themeToDict;

// src/components/useThemeDictionary.ts
var useThemeDictionary = (language, theme19) => {
  const [themeDictionary, setThemeDictionary] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(
    themeToDict_default(theme19, language)
  );
  const previousTheme = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const previousLanguage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (theme19 !== previousTheme.current || language !== previousLanguage.current) {
      previousTheme.current = theme19;
      previousLanguage.current = language;
      setThemeDictionary(themeToDict_default(theme19, language));
    }
  }, [language, theme19]);
  return themeDictionary;
};

// src/components/useGetLineProps.ts


var useGetLineProps = (themeDictionary) => (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
  (_a) => {
    var _b = _a, { className, style, line } = _b, rest = __objRest(_b, ["className", "style", "line"]);
    const output = __spreadProps(__spreadValues({}, rest), {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)("token-line", className)
    });
    if (typeof themeDictionary === "object" && "plain" in themeDictionary)
      output.style = themeDictionary.plain;
    if (typeof style === "object")
      output.style = __spreadValues(__spreadValues({}, output.style || {}), style);
    return output;
  },
  [themeDictionary]
);

// src/components/useGetTokenProps.ts


var useGetTokenProps = (themeDictionary) => {
  const styleForToken = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
    ({ types, empty }) => {
      if (themeDictionary == null)
        return void 0;
      else if (types.length === 1 && types[0] === "plain") {
        return empty != null ? { display: "inline-block" } : void 0;
      } else if (types.length === 1 && empty != null) {
        return themeDictionary[types[0]];
      }
      return Object.assign(
        empty != null ? { display: "inline-block" } : {},
        ...types.map((type) => themeDictionary[type])
      );
    },
    [themeDictionary]
  );
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
    (_a) => {
      var _b = _a, { token, className, style } = _b, rest = __objRest(_b, ["token", "className", "style"]);
      const output = __spreadProps(__spreadValues({}, rest), {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)("token", ...token.types, className),
        children: token.content,
        style: styleForToken(token)
      });
      if (style != null) {
        output.style = __spreadValues(__spreadValues({}, output.style || {}), style);
      }
      return output;
    },
    [styleForToken]
  );
};

// src/utils/normalizeTokens.ts
var newlineRe = /\r\n|\r|\n/;
var normalizeEmptyLines = (line) => {
  if (line.length === 0) {
    line.push({
      types: ["plain"],
      content: "\n",
      empty: true
    });
  } else if (line.length === 1 && line[0].content === "") {
    line[0].content = "\n";
    line[0].empty = true;
  }
};
var appendTypes = (types, add) => {
  const typesSize = types.length;
  if (typesSize > 0 && types[typesSize - 1] === add) {
    return types;
  }
  return types.concat(add);
};
var normalizeTokens = (tokens) => {
  const typeArrStack = [[]];
  const tokenArrStack = [tokens];
  const tokenArrIndexStack = [0];
  const tokenArrSizeStack = [tokens.length];
  let i = 0;
  let stackIndex = 0;
  let currentLine = [];
  const acc = [currentLine];
  while (stackIndex > -1) {
    while ((i = tokenArrIndexStack[stackIndex]++) < tokenArrSizeStack[stackIndex]) {
      let content;
      let types = typeArrStack[stackIndex];
      const tokenArr = tokenArrStack[stackIndex];
      const token = tokenArr[i];
      if (typeof token === "string") {
        types = stackIndex > 0 ? types : ["plain"];
        content = token;
      } else {
        types = appendTypes(types, token.type);
        if (token.alias) {
          types = appendTypes(types, token.alias);
        }
        content = token.content;
      }
      if (typeof content !== "string") {
        stackIndex++;
        typeArrStack.push(types);
        tokenArrStack.push(content);
        tokenArrIndexStack.push(0);
        tokenArrSizeStack.push(content.length);
        continue;
      }
      const splitByNewlines = content.split(newlineRe);
      const newlineCount = splitByNewlines.length;
      currentLine.push({
        types,
        content: splitByNewlines[0]
      });
      for (let i2 = 1; i2 < newlineCount; i2++) {
        normalizeEmptyLines(currentLine);
        acc.push(currentLine = []);
        currentLine.push({
          types,
          content: splitByNewlines[i2]
        });
      }
    }
    stackIndex--;
    typeArrStack.pop();
    tokenArrStack.pop();
    tokenArrIndexStack.pop();
    tokenArrSizeStack.pop();
  }
  normalizeEmptyLines(currentLine);
  return acc;
};
var normalizeTokens_default = normalizeTokens;

// src/components/useTokenize.ts

var useTokenize = ({ prism, code, grammar, language }) => {
  const prismRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(prism);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (grammar == null)
      return normalizeTokens_default([code]);
    const prismConfig = {
      code,
      grammar,
      language,
      tokens: []
    };
    prismRef.current.hooks.run("before-tokenize", prismConfig);
    prismConfig.tokens = prismRef.current.tokenize(code, grammar);
    prismRef.current.hooks.run("after-tokenize", prismConfig);
    return normalizeTokens_default(prismConfig.tokens);
  }, [code, grammar, language]);
};

// src/components/highlight.ts
var Highlight = ({
  children,
  language: _language,
  code,
  theme: theme19,
  prism
}) => {
  const language = _language.toLowerCase();
  const themeDictionary = useThemeDictionary(language, theme19);
  const getLineProps = useGetLineProps(themeDictionary);
  const getTokenProps = useGetTokenProps(themeDictionary);
  const grammar = prism.languages[language];
  const tokens = useTokenize({ prism, language, code, grammar });
  return children({
    tokens,
    className: `prism-code language-${language}`,
    style: themeDictionary != null ? themeDictionary.root : {},
    getLineProps,
    getTokenProps
  });
};

// src/index.ts
var Highlight2 = (props) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Highlight, __spreadProps(__spreadValues({}, props), {
  prism: props.prism || Prism,
  theme: props.theme || vsDark_default,
  code: props.code,
  language: props.language
}));

/*! Bundled license information:

prismjs/prism.js:
  (**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   *)
*/
//# sourceMappingURL=index.mjs.map

/***/ }),

/***/ 1561:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ invariant)
/* harmony export */ });
var isProduction = "production" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction) {
        throw new Error(prefix);
    }
    var provided = typeof message === 'function' ? message() : message;
    var value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
    throw new Error(value);
}




/***/ }),

/***/ 2654:
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ 7093:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"docusaurus-plugin-content-docs","id":"default"}');

/***/ }),

/***/ 2614:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"version":{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"CrypSec - Pentesting","href":"/docs/intro","docId":"intro","unlisted":false}]},"docs":{"intro":{"id":"intro","title":"CrypSec - Pentesting","description":"Vamos descobrir os resultados do teste de penetração realizado nos sistemas da Capzul.","sidebar":"tutorialSidebar"}}}}');

/***/ }),

/***/ 8552:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"docusaurus-plugin-content-pages","id":"default"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module factories are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__(6533);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;