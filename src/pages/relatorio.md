---
id: relatorio-teste-penetracao
title: Relatório de Teste de Penetração
---

# Relatório de Teste de Penetração

## 1.0 Resumo Executivo
Durante o teste de penetração realizado, identificamos várias portas abertas e tentamos explorar potenciais vulnerabilidades. O objetivo principal era avaliar a segurança dos sistemas-alvo e identificar pontos fracos que poderiam ser explorados por um atacante.

## 2.0 Metodologia

### 2.1 Coleta de Informações
Utilizamos o Nmap para realizar a varredura inicial e identificamos as portas 5678, 80 e 22 abertas. Ao investigar mais detalhadamente, verificamos que o servidor era um proxy. A porta 80 estava rodando o Nginx na versão mais recente, que até o momento não possui vulnerabilidades conhecidas exploráveis por scripts zeroday.

**IP do Proxy:** [http://52.20.204.145](http://52.20.204.145)  
**IP Normal:** [http://34.196.222.5](http://34.196.222.5)

### 2.2 Enumeração de Serviços
Realizamos tentativas de exploração nas portas identificadas:
- **Porta 80**: Confirmamos que o Nginx estava na versão mais recente e, portanto, sem vulnerabilidades conhecidas.
- **Porta 5678**: Tentamos explorar a vulnerabilidade CVE-2018-12613 (phpMyAdmin) usando o Metasploit Framework, mas a tentativa foi infrutífera, indicando que a porta não era vulnerável a este exploit.
- **Porta 22**: Porta de SSH, nenhuma tentativa de brute force foi realizada durante este teste inicial.

### 2.3 Penetração
1. **Exploit CVE-2018-12613 - phpMyAdmin**  
   Tentamos explorar a vulnerabilidade CVE-2018-12613 na porta 5678 através do Metasploit Framework, mas o resultado foi negativo, indicando que não há vulnerabilidades conhecidas nessa porta no contexto do servidor específico.

2. **XSS (Cross-Site Scripting)**  
   Identificamos uma vulnerabilidade de XSS armazenada no cabeçalho do website, mas não havia locais para input de dados que permitissem a injeção de scripts maliciosos. Portanto, essa vulnerabilidade não pôde ser explorada.

3. **Escaneamento com Nikto**  
   Utilizamos a ferramenta Nikto para escanear o website em busca de vulnerabilidades adicionais, mas não foram encontradas vulnerabilidades exploráveis.

4. **Servidor IIS 10.0**  
   Verificamos que o servidor estava rodando IIS 10.0 da Microsoft. Fizemos verificações detalhadas, mas não identificamos nenhuma vulnerabilidade conhecida ou explorável.

### 2.4 Manutenção de Acesso
Não foi possível manter o acesso devido à ausência de vulnerabilidades exploráveis nas portas e serviços identificados.

### 2.5 Limpeza
Não houve necessidade de limpeza, pois nenhuma exploração bem-sucedida foi realizada.

## 3.0 Detalhamento das Vulnerabilidades

### Vulnerabilidade 1: Falha na Exploração da Porta 5678
- **Sistema Vulnerável**: Não identificado
- **Explicação**: Tentativa de exploração da vulnerabilidade CVE-2018-12613 no phpMyAdmin via porta 5678 sem sucesso.
- **Recomendação**: Monitorar continuamente a segurança das portas abertas e aplicar patches de segurança conforme disponíveis.

### Vulnerabilidade 2: XSS Armazenado no Header
- **Sistema Vulnerável**: Website principal
- **Explicação**: Vulnerabilidade de XSS armazenado identificada, mas sem possibilidade de exploração devido à ausência de campos de input.
- **Recomendação**: Continuar monitorando e aplicando práticas de codificação segura para evitar possíveis vetores de ataque.

### Vulnerabilidade 3: Possíveis Vulnerabilidades
Embora nenhuma vulnerabilidade tenha sido explorada com sucesso durante este teste, é importante considerar as seguintes possíveis vulnerabilidades e áreas de risco:
- **Vulnerabilidades de Configuração do Servidor**: Mesmo com versões atualizadas, a configuração inadequada pode introduzir riscos.
- **Ataques de Força Bruta no SSH (Porta 22)**: Embora não tenhamos realizado brute force, é uma prática comum e deve ser mitigada com autenticação multifator e políticas de senha robustas.
- **Exploração de Zero-Days no Nginx**: Continuar monitorando por novas vulnerabilidades e aplicar patches prontamente.
- **Misconfigurações no IIS**: Apesar de não termos encontrado vulnerabilidades conhecidas, a configuração inadequada pode levar a problemas de segurança. Realizar auditorias de configuração regularmente é essencial.

### Informações Sensíveis na Internet
Além das vulnerabilidades técnicas, observamos que algumas informações sensíveis de funcionários da Capzul estão disponíveis livremente na internet. Um atacante poderia utilizar essas informações para realizar engenharia social, persuadir o provedor do servidor e potencialmente vazar dados sensíveis ou comprometer o serviço da Capzul.

## 4.0 Recomendação
Recomendamos a aplicação contínua de patches e a revisão das configurações de segurança para mitigar possíveis vulnerabilidades. Além disso, a implementação de práticas seguras de codificação e a realização de testes de penetração periódicos são essenciais para manter a segurança dos sistemas. A proteção contra engenharia social também deve ser reforçada através de treinamento e conscientização dos funcionários.

## 5.0 Conclusão
Os testes de penetração realizados revelaram que, embora existam algumas portas abertas e vulnerabilidades identificadas, nenhuma delas pôde ser explorada com sucesso durante o teste. A implementação das recomendações fornecidas é essencial para proteger os sistemas e evitar compromissos futuros. Manter um programa contínuo de segurança e monitoramento ajudará a identificar e corrigir novas vulnerabilidades.

## Análise Adicional com Base no Capzul Tech Paper 2018
O relatório de teste de penetração revelou que, embora não tenha sido possível explorar vulnerabilidades nas portas e serviços identificados, as informações no Capzul Tech Paper 2018 destacam algumas considerações importantes:

1. **Segurança de Criptografia**: O documento da Capzul descreve uma nova metodologia para implementar criptografia existente que evita ou torna exponencialmente mais difíceis os ataques tradicionais. Embora nosso teste não tenha encontrado vulnerabilidades exploráveis no servidor, é importante considerar a aplicação de metodologias como a Capzul para fortalecer ainda mais a segurança.

2. **Chaves Criptográficas**: A Capzul implementa várias chaves criptográficas, tanto simétricas quanto assimétricas, e troca frequente de chaves. Esta abordagem poderia ser benéfica para proteger comunicações sensíveis e evitar comprometimentos em caso de quebra de uma chave específica.

3. **Sincronização Automática e Certificação**: A metodologia Capzul inclui sincronização automática entre dispositivos e certificação de chaves, o que poderia ser implementado para garantir que as chaves utilizadas estejam sempre atualizadas e certificadas, mitigando riscos de ataques baseados em chaves comprometidas.

4. **Proteções Contra Engenharia Reversa**: A Capzul também enfatiza proteções contra engenharia reversa, um aspecto crucial para garantir que os métodos de criptografia não sejam comprometidos por análise de software. Esta proteção adicional poderia ser considerada no contexto de segurança dos sistemas atuais da Capzul.

Em conclusão, embora o teste de penetração não tenha identificado vulnerabilidades exploráveis diretamente, a adoção de metodologias avançadas de criptografia como as descritas pela Capzul poderia oferecer um nível adicional de segurança, protegendo dados contra uma ampla gama de ameaças. Implementar estas práticas avançadas pode ajudar a Capzul a manter um ambiente seguro e robusto para suas operações.