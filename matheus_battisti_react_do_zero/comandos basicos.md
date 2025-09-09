# Criando Projeto React com Vite: Explicação Completa

Este guia explica passo a passo como iniciar um projeto React moderno usando o **Vite**, incluindo as escolhas de frameworks e variantes.

---

## 🚀 O que é o Vite?

O **Vite** é uma ferramenta moderna de build e desenvolvimento de projetos front-end, que substitui ferramentas mais antigas como o Create React App (CRA) e Webpack.

### O Vite serve para:
- Rodar o projeto em modo de desenvolvimento com **live reload**.
- Fazer o **build** para produção com arquivos otimizados.
- Configurar projetos com frameworks como **React**, **Vue**, **Svelte**, **Angular**, entre outros.

> Em resumo: o Vite é quem **cria, organiza e prepara** seu projeto para rodar no navegador de forma rápida e moderna.

---

## 🛠️ Como criar um projeto React com Vite

No terminal, você pode iniciar um novo projeto com o comando:

```bash
npx create-vite fundamentos
```

**Explicando o comando:**
- `npx` → executa um pacote temporário sem instalar globalmente.
- `create-vite` → script que gera a estrutura inicial do projeto.
- `fundamentos` → nome da pasta do projeto.

Depois disso, ele vai mostrar o prompt para você escolher o **framework**.

---

## 📦 Opções de Frameworks (etapa 1)

Ao executar `create-vite`, você verá opções como:

- **Vanilla** → HTML, CSS e JS puros (sem framework)
- **Vue** → Framework progressivo (concorrente do React)
- **React** → O que você quer usar para este projeto
- **Preact** → Uma versão mais leve do React
- **Lit** → Biblioteca para Web Components
- **Svelte** → Framework moderno e performático
- **Solid** → Muito reativo, parecido com React
- **Qwik** → Carregamento instantâneo (super rápido)
- **Angular** → Framework completo da Google
- **Marko** → Focado em renderização no servidor (SSR)
- **Others** → Outras opções personalizadas

👉 Como estamos focando em React, basta selecionar **React** e continuar.

---

## 🔄 Variants do Vite para React (etapa 2)

Após escolher React, o Vite pede que você selecione uma **variant**.  
Cada variant define o tipo de projeto React que será criado.

### 1. TypeScript
- Projeto com **tipagem estática** (mais seguro).
- Muito usado em projetos profissionais.
- Detecta erros em tempo de desenvolvimento.

### 2. TypeScript + SWC
- Usa o compilador **SWC** (Speedy Web Compiler) feito em Rust.
- Compila o código TypeScript mais rápido.

### 3. JavaScript
- Projeto em JavaScript puro.
- Simples e direto, ideal para iniciantes.

### 4. JavaScript + SWC
- Projeto em JS com uso do compilador SWC para performance.

### 5. React Router v7
- Cria o projeto com **React Router** já instalado.
- Ideal para apps com múltiplas páginas.

### 6. TanStack Router
- Alternativa moderna ao React Router.
- Mais enxuto, reativo e performático.

### 7. RedwoodSDK
- Integra o projeto com o **RedwoodJS**, um framework full-stack para React.
- Recomendado para projetos avançados.

---

## 🧠 Qual variant escolher?

| Perfil | Recomendação |
|-------|--------------|
| Iniciante | JavaScript |
| Quer desempenho | JavaScript + SWC |
| Projeto profissional | TypeScript |
| Já sabe que vai usar rotas | React Router v7 |
| Quer testar o novo | TanStack Router |
| Projeto full-stack | RedwoodSDK |

---

## ▶️ Comandos após criar o projeto

Após escolher o framework e variant, siga os comandos:

```bash
cd fundamentos
npm install
npm run dev
```

O projeto estará disponível em `http://localhost:5173` (ou outra porta).

---

✨ **Resumo final:**
- O Vite facilita a criação de projetos modernos.
- Você pode escolher entre diversas configurações dependendo do seu nível e necessidade.
- Ideal para quem quer sair do Create React App e adotar algo mais rápido e flexível.
