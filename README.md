
# Sorteador de Números

Este projeto permite que o usuário sorteie uma quantidade definida de números aleatórios dentro de um intervalo de valores escolhido. O usuário pode especificar o número de sorteios e os valores mínimo e máximo para o intervalo. O sistema também oferece a opção de não permitir números repetidos nos sorteios.

## Funcionalidades

1. **Entrada de dados**:
   - O usuário pode definir a **quantidade de números** a serem sorteados.
   - O usuário pode escolher o **valor mínimo** e **valor máximo** do intervalo de números.

2. **Geração de números**:
   - O sistema sorteia a quantidade definida de números aleatórios dentro do intervalo especificado.
   - Se a opção "Não repetir números" estiver ativada, o sistema garante que os números sorteados sejam únicos dentro do intervalo.

3. **Exibição dos resultados**:
   - Os números sorteados são exibidos em uma interface estilizada com animação.
   - O usuário pode gerar novos números ou limpar os resultados para começar novamente.

4. **Validação de entradas**: O sistema valida as entradas do usuário para garantir que os valores inseridos sejam números positivos válidos.

## Estrutura do Projeto

O código é dividido em várias seções:

- **Eventos de formulário**: Manipulação dos eventos para enviar o formulário e gerar os números sorteados.
- **Funções utilitárias**: Funções para validar entradas, gerar números aleatórios, limpar os resultados e exibir animações.
- **Animações**: Animações de exibição progressiva dos números sorteados.

## Dependências

Este projeto não utiliza dependências externas, utilizando apenas JavaScript puro e manipulação de DOM.

## Como Usar

1. Defina a **quantidade de números** a serem sorteados.
2. Insira o **valor mínimo** e o **valor máximo** do intervalo de números.
3. Se desejar evitar a repetição de números, ative a opção "Não repetir números".
4. Clique no botão "Sortear" para gerar os números aleatórios.
5. Os números sorteados aparecerão com animação, e você pode gerar novos sorteios ou limpar os resultados clicando nos respectivos botões.

## Funções Importantes

- `validateField(value, fieldName)`: Valida os campos de entrada para garantir que os valores sejam números positivos.
- `drawNumbers()`: Sorteia a quantidade de números aleatórios dentro do intervalo definido.
- `generateNumber(initial, end)`: Gera um número aleatório dentro do intervalo escolhido.
- `showResult()`: Exibe os resultados sorteados na tela com animação.
- `hideResult()` e `hideDrawer()`: Ocultam os resultados ou o formulário de entrada.
- `startAnimation()`: Inicia a animação dos números sorteados.
