## Estrutura do Projeto

Este projeto utiliza Firebase Functions e Firestore para criar e gerenciar registros com ID incremental. A arquitetura foi desenvolvida para ser escalável e seguir princípios de design modular. Utilizando arquivos separados para cada função e constantes. Mantendo a responsabilidade única e facilitando a manutenção e escalabilidade do projeto.

```bash
superfrete-challange/
├── functions/
│   ├── src/
│   │   ├── index.ts
│   │   ├── constants.ts
│   │   ├── addItemHandler.ts
│   │   └── setIncrementHandler.ts
│   ├── tsconfig.json
│   └── package.json
├── firestore.indexes.json
├── firebase.json
└── firestore.rules
└── readme.md
```

## Design de Arquitetura
Principais Componentes
- **index.ts**: Arquivo principal que exporta as funções do Firebase.
- **addItemHandler**: Função HTTP que adiciona um novo registro ao Firestore.
- **setIncrementHandler.ts**: Trigger que define o increment_id ao criar um novo registro no Firestore.
- **constants.ts**: Constantes utilizadas no projeto.

## Princípios de Design
- Responsabilidade Única: Cada módulo/função tem uma única responsabilidade, facilitando manutenção e testes.
- Modularidade: Código dividido em módulos pequenos e reutilizáveis.
- Testabilidade: Testes unitários escritos para cada função, garantindo que cada parte do código funcione corretamente.

## Instalação local
Para rodar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:
```bash
git clone URL_DO_REPOSITORIO
```

2. Instale as dependências:
```bash
cd functions
npm install
```

3. Inicie o Firebase
```bash
firebase login
firebase init
```

4. Emular o projeto localmente
```bash
firebase emulators:start
```

## Testes

### Adicionando um novo registro
substiua `name` pelo nome do item que deseja adicionar.
substitua `http://localhost:5001/superfrete-challange/us-central1/addItem` pela URL gerada pelo Firebase Functions.
```bash
curl -X POST -H "Content-Type: application/json" -d '{"name": "Teste"}' http://localhost:5001/superfrete-challange/us-central1/addItem
```
## Screenshots
<img width="1074" alt="Pasted Graphic" src="https://github.com/joelsantosjunior/superfrete-challange/assets/8531514/0a380b4d-8ebf-4a75-a119-b02051a89d12">
<img width="1019" alt="Pasted Graphic 1" src="https://github.com/joelsantosjunior/superfrete-challange/assets/8531514/5f6d5fbc-908c-4583-87c0-a2266b08cbfd">


