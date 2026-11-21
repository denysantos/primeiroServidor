# Comandos essenciais do Git

Execute os comandos dentro da pasta do projeto:

```bash
cd projetos/primeiroServidor
```

## Primeiro envio ao GitHub

Confira a branch e o endereço do repositório remoto:

```bash
git status
git remote -v
```

Se ainda não houver um remoto chamado `origin`, configure-o:

```bash
git remote add origin https://github.com/denysantos/primeiroServidor.git
```

Se `origin` existir, mas apontar para outro endereço, corrija-o:

```bash
git remote set-url origin https://github.com/denysantos/primeiroServidor.git
```

Se o Git pedir autenticação, entre na sua conta GitHub pelo VS Code ou use o
GitHub CLI (`gh auth login`, se instalado). O GitHub não aceita a senha da conta
para operações Git por HTTPS. Não coloque senhas ou tokens diretamente na URL
do remoto.

Adicione os arquivos, crie o primeiro commit e envie a branch `main`:

```bash
git add .
git status
git commit -m "Adiciona arquivos do projeto"
git push -u origin main
```

O comando `git status` permite conferir os arquivos antes de confirmar o commit.
Dependências em `node_modules/` e arquivos de build em `dist/` são ignorados pelo
`.gitignore`.

Se `node_modules/` já tiver sido adicionado ao índice antes da criação do
`.gitignore`, remova-o do Git sem apagar as dependências locais:

```bash
git rm -r --cached node_modules
```

Se o GitHub já tiver commits que ainda não existem localmente e o envio for
recusado, sincronize antes de tentar novamente:

```bash
git pull --rebase origin main
git push -u origin main
```

## Enviar alterações futuras

Depois de editar arquivos, revise as alterações e envie um novo commit:

```bash
git status
git add .
git status
git commit -m "Descreve as alterações"
git push
```

## Importar alterações do GitHub

Para atualizar uma cópia local já clonada:

```bash
git pull --rebase origin main
```

Para obter o projeto em uma pasta nova:

```bash
git clone https://github.com/denysantos/primeiroServidor.git
cd primeiroServidor
npm install
```

`git pull` traz as alterações do GitHub para a cópia local. `git push` envia os
commits locais ao GitHub. Não use `git push --force` para contornar uma rejeição
sem antes entender e resolver a divergência.
