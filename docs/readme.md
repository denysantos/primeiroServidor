# Setup
## NPM
```
npm init -y
```
### Bibliotecas
```
npm i express typescript tsx
```

### Dependências
```
npm i -D @types/node @types/express
```

### Typescript
```
npx tsc --init
```

### package.json

```json
{
  "name": "primeiroservidor",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "tsx watch src/server.ts",
    "build": "tsc"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "module",
  "dependencies": {
    "express": "^5.3.0",
    "tsx": "^4.23.15",
    "typescript": "^7.0.2"
  },
  "devDependencies": {
    "@types/express": "^5.0.6",
    "@types/node": "^26.6.6"
  }
}

```

## contact.ts
- src/types/contact.ts
```ts
export type Contact = {
    id: number;
    name: string;
    email: string;
    phone?: string;
    createdAt: Date;
    updatedAt: Date;
};
```

- server/server.ts
```ts
import express from 'express';
import type { Contact } from './types/contact';

let contacts: Contact[] = [
  {
    id: 1,
    name: 'Ana Silva',
    email: 'ana.silva@example.com',
    phone: '(11) 99999-1001',
    createdAt: new Date('2026-01-10T10:00:00Z'),
    updatedAt: new Date('2026-01-10T10:00:00Z')
  },
  {
    id: 2,
    name: 'Bruno Costa',
    email: 'bruno.costa@example.com',
    phone: '(21) 98888-2002',
    createdAt: new Date('2026-02-11T10:00:00Z'),
    updatedAt: new Date('2026-02-11T10:00:00Z')
  },
  {
    id: 3,
    name: 'Carla Mendes',
    email: 'carla.mendes@example.com',
    phone: '(31) 97777-3003',
    createdAt: new Date('2026-03-12T10:00:00Z'),
    updatedAt: new Date('2026-03-12T10:00:00Z')
  },
  {
    id: 4,
    name: 'Diego Oliveira',
    email: 'diego.oliveira@example.com',
    phone: '(41) 96666-4004',
    createdAt: new Date('2026-04-13T10:00:00Z'),
    updatedAt: new Date('2026-04-13T10:00:00Z')
  },
  {
    id: 5,
    name: 'Eduarda Santos',
    email: 'eduarda.santos@example.com',
    phone: '(51) 95555-5005',
    createdAt: new Date('2026-05-14T10:00:00Z'),
    updatedAt: new Date('2026-05-14T10:00:00Z')
  }
];

const app = express();
const PORT = 3000;

app.get('/contacts', (req, res) => {
  res.status(200).json({ contacts});
});

app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong' });
});

/* app.post('/criar', (req, res) => {
  res.status(201).json({ message: 'Resource created successfully!' });
});

app.delete('/remover', (req, res) => {
  res.status(200).json({ message: 'Resource deleted successfully!' });
});
 */
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

## Arquivos do projeto

### Arquivos principais

- `src/server.ts`: configura o servidor Express, mantém uma lista de cinco contatos fictícios e inicia a aplicação na porta `3000`. Disponibiliza as rotas `GET /contacts` e `GET /ping`.
- `src/types/contact.ts`: define o tipo `Contact`, usado para garantir a estrutura dos contatos. Contém `id`, `name`, `email`, `phone` opcional, `createdAt` e `updatedAt`.
- `package.json`: contém as dependências e os scripts para desenvolvimento e compilação. As vírgulas entre os scripts foram corrigidas para formar um JSON válido.
- `tsconfig.json`: configura o compilador TypeScript e a geração dos arquivos JavaScript e de tipos.
- `docs/metodos-http.md`: explica os principais métodos HTTP, incluindo seus usos no CRUD e suas características de segurança e idempotência.

### Estrutura de arquivos

```text
primeiroServidor/
├── docs/
│   ├── metodos-http.md
│   ├── readme.md
│   └── image*.png
├── src/
│   ├── types/
│   │   └── contact.ts
│   └── server.ts
├── package.json
├── package-lock.json
└── tsconfig.json
```

### Arquivos novos e suas funções

- `src/types/contact.ts`: centraliza o formato dos dados de contato em um tipo TypeScript reutilizável.
- `contacts` em `src/server.ts`: array tipado com cinco contatos fictícios, usado pela rota `GET /contacts`.
- `GET /contacts`: retorna a lista de contatos no formato JSON.
- `GET /ping`: retorna `{ "message": "pong" }` e pode ser usado para verificar se o servidor está ativo.
- `docs/metodos-http.md`: material de referência sobre os verbos HTTP utilizados em APIs.
- `docs/image-1.png`, `docs/image-2.png`, `docs/image-3.png` e `docs/image.png`: imagens usadas como apoio visual na documentação do projeto.

### Arquivos gerados pela compilação

A partir de `src/server.ts`, o comando `npm run build` executa o `tsc` e gera automaticamente:

- `src/server.js`: código JavaScript compilado a partir do TypeScript.
- `src/server.js.map`: mapa de código-fonte que relaciona o JavaScript ao arquivo TypeScript original.
- `src/server.d.ts`: declaração de tipos gerada pelo TypeScript.
- `src/server.d.ts.map`: mapa das declarações de tipos para facilitar o relacionamento com o código-fonte.

Esses arquivos são gerados porque `tsconfig.json` possui as opções `sourceMap: true` e `declaration: true`.

O mesmo processo também gera os arquivos equivalentes a partir de `src/types/contact.ts`:

- `src/types/contact.js`: versão JavaScript do tipo de dados.
- `src/types/contact.js.map`: mapa de código-fonte do arquivo JavaScript.
- `src/types/contact.d.ts`: declaração JavaScript do módulo de tipos.
- `src/types/contact.d.ts.map`: mapa da declaração de tipos.

## Executar o projeto

Para iniciar o servidor em modo de desenvolvimento:

```bash
npm run dev
```

Para compilar o projeto:

```bash
npm run build
```

Depois de iniciar o servidor, acesse `http://localhost:3000/`.



