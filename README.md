```md
# SPA Root Config – Microfrontend Architecture (Webpack)

Este repositório contém o **Root Application** de uma arquitetura de **Microfrontends** baseada em **Single-SPA**, utilizando **Webpack** como bundler.

O projeto funciona como o **orquestrador central** da aplicação, sendo responsável por:
- Carregar microfrontends filhos dinamicamente
- Controlar rotas
- Definir import maps
- Inicializar a SPA sem recarregamento de página

> ⚠️ Este projeto **não renderiza UI**. Ele apenas orquestra os microfrontends.

---

## 🧠 O que é este projeto?

- **SPA (Single Page Application)**
- **Root Config do Single-SPA**
- **Arquitetura de Microfrontends**
- **Build com Webpack**
- **Carregamento via SystemJS**

Mesmo sem microfrontends filhos, este projeto já é uma SPA funcional.

---

## 🏗 Arquitetura

```

````

---

## 🧰 Tecnologias utilizadas

### Core
- **Single-SPA** — Orquestração de microfrontends
- **SystemJS** — Loader de módulos em runtime
- **Webpack** — Bundler do root-config

### Tooling
- **EJS** — Template HTML dinâmico
- **Husky** — Git hooks
- **ESLint + Prettier** — Padronização de código
- **Import Maps** — Resolução de dependências

---

## 🔄 Como o fluxo funciona

1. O browser carrega o `index.ejs`
2. SystemJS é inicializado
3. Import Maps resolvem os bundles
4. O root-config (`index.js`) é carregado
5. Microfrontends são montados conforme a rota

---

## 🚀 Scripts disponíveis

```bash
npm start        # inicia o servidor de desenvolvimento
npm run build    # gera o bundle de produção
npm run lint     # valida o código
npm run test     # executa testes (placeholder)
````

---

## 🛠 Como criar este projeto do zero (passo a passo)

Esta seção descreve **exatamente como este root-config foi criado**, partindo do zero, utilizando as ferramentas oficiais do ecossistema Single-SPA.

---

### 1️⃣ Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

* **Node.js** (versão LTS recomendada)
* **npm** (ou yarn)

Verifique no terminal:

```bash
node -v
npm -v
```

---

### 2️⃣ Criar o projeto usando o gerador oficial

O Single-SPA fornece um gerador oficial que cria toda a estrutura correta do projeto.

```bash
npx create-single-spa
```

Durante o processo interativo, selecione as seguintes opções:

```text
✔ Directory for new project: spa-root-config-webpack
✔ Select type to generate: root config
✔ Which framework do you want to use: none (root-config)
✔ Which bundler do you want to use: webpack
✔ Do you want to use TypeScript: no
✔ Organization name: spa
✔ Project name: root-config
✔ Use EJS as HTML template: yes
```

Essas escolhas criam um **Root Config puro**, sem framework de UI, focado apenas na orquestração.

---

### 3️⃣ Entrar no projeto e instalar dependências

```bash
cd spa-root-config-webpack
npm install
```

---

### 4️⃣ Executar o projeto localmente

```bash
npm start
```

A aplicação será iniciada normalmente em ambiente de desenvolvimento, mesmo sem microfrontends filhos registrados.

---

### 5️⃣ O que foi gerado automaticamente

Ao final do setup, o projeto já possui:

* Configuração completa do **Webpack**
* **SystemJS** configurado
* Template HTML com **Import Maps**
* Root-config funcional (`registerApplication`, `start`)
* Ambiente pronto para adicionar microfrontends filhos

---

## 📌 Importante

* Este projeto **não usa Module Federation**
* A comunicação entre microfrontends é feita via **Single-SPA**
* Cada microfrontend filho terá:

  * Build próprio
  * Repositório ou pasta isolada
  * Deploy independente

---

## 🎯 Próximos passos

* Criar microfrontends filhos (ex: React)
* Registrar apps no root-config
* Configurar rotas avançadas
* Implementar design system compartilhado
* Adicionar versionamento e estratégias de deploy

---

## 👨‍💻 Autor

**Wilhams Junior**
Frontend Engineer — React | Microfrontends | UX/UI

> Este projeto faz parte do meu portfólio técnico e demonstra uma arquitetura frontend escalável, moderna e alinhada com padrões de mercado.

```
