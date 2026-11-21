# Métodos HTTP

Os **métodos HTTP** (também chamados de verbos HTTP) indicam a ação exata que um cliente (como um navegador ou aplicativo) deseja realizar em um recurso do servidor. Na prática, eles definem a intenção da requisição na web e são a base da comunicação em APIs REST.

## Principais métodos (operações CRUD)

Estes são os cinco métodos mais usados no desenvolvimento web para criar, ler, atualizar e apagar dados:

* **GET:** Solicita a representação de um recurso e retorna os dados sem alterar nada no servidor. É usado ao carregar páginas, imagens ou buscar listas e registros.
* **POST:** Envia dados ao servidor para serem processados, geralmente criando um novo recurso ou alterando o estado do sistema (como enviar um formulário de cadastro ou fazer login).
* **PUT:** Substitui completamente um recurso existente pelos novos dados enviados na requisição. Se o recurso não existir, alguns sistemas podem criá-lo.
* **PATCH:** Aplica modificações parciais a um recurso existente. Diferente do PUT, você envia apenas os campos que deseja alterar (por exemplo, atualizar só o e-mail de um usuário).
* **DELETE:** Remove um recurso específico do servidor.

## Métodos auxiliares e de rede

Estes métodos têm funções específicas de diagnóstico, metadados e conexão:

* **HEAD:** Funciona exatamente como o GET, mas retorna apenas os cabeçalhos da resposta, sem o corpo de dados. Serve para checar metadados (como o tamanho de um arquivo ou se um link está ativo) sem baixar o conteúdo inteiro.
* **OPTIONS:** Consulta quais métodos e opções de comunicação o servidor permite para determinado recurso. É muito utilizado por navegadores em verificações de segurança (CORS).
* **CONNECT:** Estabelece um túnel de comunicação bidirecional com o servidor, usado principalmente para tráfego criptografado (SSL/TLS) através de servidores proxy.
* **TRACE:** Realiza um teste de retorno (*loop-back*) que ecoa a requisição recebida de volta ao cliente, ajudando a depurar se proxies intermediários alteraram os dados no caminho.

## Resumo comparativo

| Método | Ação principal | Possui corpo na requisição? | Seguro (não altera dados)? | Idempotente (repetir dá o mesmo resultado)? |
| :--- | :--- | :--- | :--- | :--- |
| **GET** | Ler dados | Não | Sim | Sim |
| **HEAD** | Ler cabeçalhos | Não | Sim | Sim |
| **POST** | Criar / processar | Sim | Não | Não |
| **PUT** | Substituir tudo | Sim | Não | Sim |
| **PATCH** | Atualizar parte | Sim | Não | Geralmente não |
| **DELETE** | Remover | Opcional | Não | Sim |
