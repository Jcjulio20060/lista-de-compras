# Documentação da Lista de Compras

## Introdução
A **Lista de Compras** é uma aplicação simples que permite ao usuário adicionar, remover e marcar itens como comprados. O objetivo é ajudar na organização das compras do dia a dia de forma prática.

## Tecnologias Utilizadas
- **Frontend:** React Native
- **Armazenamento:** LocalStorage
- **Estilização:** Styled Components

## Funcionalidades Principais
- Adicionar itens à lista
- Remover itens da lista
- Marcar itens como "Comprado"
- Armazenamento local para manter os dados mesmo ao recarregar a página
- (Opcional) Sincronização com banco de dados remoto

## Estrutura do Projeto

### Frontend (React ou React Native)
```plaintext
lista-de-compras/
│-- src/
│   │-- components/
│   │   │-- ShoppingList.tsx
│   │   │-- AddItemForm.tsx
│   │-- utils/
│   │   │-- storage.ts
│   │-- app/
│   │   │-- App.tsx
│-- package.json
```

- `App.tsx`: Componente principal que gerencia o estado da lista
- `components/ShoppingList.tsx`: Renderiza a lista de compras
- `components/AddItemForm.tsx`: Formulário para adicionar novos itens
- `utils/storage.ts`: Funções para salvar e recuperar dados do LocalStorage/Firebase

### Itens da Lista
```http
GET /items       # Retorna todos os itens da lista
POST /items      # Adiciona um novo item
PUT /items/:id   # Atualiza um item existente (ex: marcar como comprado)
DELETE /items/:id # Remove um item
```

## Instalação e Configuração
```bash
# Clone o repositório
git clone https://github.com/seu-repositorio/lista-de-compras.git
cd lista-de-compras

# Instale as dependências do projeto
npm install  # ou yarn install

# Execute o projeto
npm start  # ou yarn start
```

## Conclusão
Essa **Lista de Compras** é um projeto simples, mas muito útil para prática de React e gerenciamento de estado. Com algumas melhorias, pode ser transformada em um app completo com autenticação e sincronização em nuvem.

