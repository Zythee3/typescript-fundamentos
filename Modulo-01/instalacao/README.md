# 🚀 Fundamentos do TypeScript - Instalação e Configuração

Este repositório contém as anotações e passos iniciais para a configuração de um ambiente de desenvolvimento TypeScript.

## 📋 Passos Realizados

### 1. Inicialização do Projeto
Primeiro, criamos o arquivo `package.json` para gerenciar as dependências do projeto:
```bash
npm init -y
```

### 2. Instalação do TypeScript
Instalamos o TypeScript como uma dependência de desenvolvimento:
```bash
npm i -D typescript
```

### 3. Instalação do ts-node-dev
Para facilitar o desenvolvimento, instalamos o `ts-node-dev`, que reinicia o servidor automaticamente sempre que alteramos um arquivo `.ts`:
```bash
npm i -D ts-node-dev
```

### 4. Inicialização do Configuração do TypeScript
Criamos o arquivo `tsconfig.json`, que contém todas as configurações do compilador TypeScript:
```bash
npx tsc --init
```

---

## 🛠️ Como Executar o Projeto

Existem duas formas principais de executar o código TypeScript:

### Modo de Compilação (Produção/Manual)
1. Converte o arquivo `.ts` em `.js`:
   ```bash
   npx tsc app.ts
   ```
2. Executa o arquivo gerado com Node:
   ```bash
   node app.js
   ```

### Modo de Desenvolvimento (Fast Feedback)
Utilizando o script configurado no `package.json`:
```bash
npm run dev
```
> **Nota:** Este comando executa `ts-node-dev app.ts`, que compila e executa o código em memória sem gerar arquivos `.js` intermediários no disco, além de observar mudanças no arquivo.

---

## 📝 Exemplo de Código (`app.ts`)
O código de teste inicial realiza uma soma simples com tipagem estática:

```typescript
const soma = (a: number, b: number) => {
    console.log(a + b)
}

soma(2, 5) // Resultado: 7
```

---
*Anotações criadas para auxiliar no aprendizado dos fundamentos de TypeScript.*
