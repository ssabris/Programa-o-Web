# Loja de Ferragens — Componente Cesta

## O que tinha que ser feito

Montar a tela do componente **cesta** seguindo o mesmo modelo da **vitrine**, usando:

- uma **lista JSON fixa** no componente (sem banco e sem serviço);
- as diretivas do Angular **`*ngFor`** (repetir cada item) e **`*ngIf`** (mostrar ou esconder partes da tela);
- as classes de **grid do Bootstrap** (`row` e `col-*`) para montar a tabela ("gridview").

Antes, o componente só mostrava `cesta works!` e o model `ItemCesta` estava vazio.

## Arquivos alterados

| Arquivo | O que mudou |
|---|---|
| `src/app/model/item-cesta.ts` | Foram criados os campos do item da cesta |
| `src/app/cesta/cesta.ts` | Foram adicionados o `CommonModule`, a lista fixa e o total |
| `src/app/cesta/cesta.html` | A tela foi montada com `*ngFor`, `*ngIf` e grid do Bootstrap |
| `src/app/app.routes.ts` | Correção da rota `pedido`, que apontava para o model e não para o componente |

Não foi preciso mexer em `index.html`, porque o Bootstrap já estava lá. Também não foi preciso mexer em `app.html`, porque o link "Cesta" já existia. A rota `/cesta` também já existia.

## Como foi executado

### 1. Model `ItemCesta`

O model segue o mesmo estilo do `Produto`, com cada campo já inicializado:

```ts
export class ItemCesta {
    codigo:number=0;
    nome:string="";
    quantidade:number=0;
    valor:number=0;
}
```

### 2. Componente `cesta.ts`

- O componente importa o **`CommonModule`**. Sem ele, `*ngFor` e `*ngIf` **não funcionam** em componentes standalone. A vitrine faz a mesma coisa.
- A variável `itens: ItemCesta[]` recebe 3 produtos copiados da vitrine. O valor é o preço promocional quando existe.
- A variável `total` tem o valor fixo `326.50`, calculado assim: 2 × 29,00 + 18,50 + 250,00.

### 3. Tela `cesta.html`

**Cesta vazia (`*ngIf`).** Se a lista não tiver itens, aparece um alerta amarelo, igual ao da vitrine:

```html
<div class="alert alert-warning" *ngIf="itens.length<=0">...</div>
```

**Cesta com itens (`*ngIf`).** Todo o resto da tela fica dentro de `<div *ngIf="itens.length>0">`.

**Cabeçalho da grade.** É uma `row` com fundo escuro (`bg-dark text-white`). A classe `d-none d-md-flex` esconde o cabeçalho no celular e o mostra a partir de telas médias.

**Linhas da grade (`*ngFor`).** O `*ngFor` repete uma `row` para cada item da lista:

```html
<div class="row border-bottom p-2" *ngFor="let obj of itens">
```

Cada linha tem 5 colunas: foto, nome, quantidade, valor e subtotal. O subtotal é calculado direto no HTML com `{{obj.quantidade * obj.valor}}`.

**Rodapé.** Mostra o total e os botões "continuar comprando" (vai para a vitrine) e "fechar pedido" (vai para a rota pedido).

### 4. Como o grid responde ao tamanho da tela

O Bootstrap divide cada linha em **12 colunas**.

| Coluna | Celular | Tela média ou maior (`md`) |
|---|---|---|
| Foto | `col-12` (linha inteira) | `col-md-2` |
| Produto | `col-12` (linha inteira) | `col-md-4` |
| Quantidade | `col-4` | `col-md-2` |
| Valor | `col-4` | `col-md-2` |
| Subtotal | `col-4` | `col-md-2` |

No celular, a foto e o nome ocupam uma linha cada, e os três números dividem a linha seguinte (4 + 4 + 4 = 12). Em telas maiores, tudo fica numa linha só (2 + 4 + 2 + 2 + 2 = 12).

### 5. Correção da rota `pedido`

Em `app.routes.ts` o import estava errado:

```ts
import { Pedido } from './model/pedido';   // antes: o model (classe vazia)
import { Pedido } from './pedido/pedido';  // depois: o componente
```

## Como testar

```bash
npm start
```

Acesse `http://localhost:4200/cesta`.

Para ver a mensagem de cesta vazia, deixe a lista vazia em `cesta.ts` (`itens: ItemCesta[] = [];`).

## Observações

- O total está **fixo** para manter o exemplo simples. Se a lista mudar, o valor tem que ser atualizado à mão.
- Em `public/` só existem `1.jpg` e `2.jpg`, então o produto 8 fica sem foto.
- Os valores aparecem como `18.5`. Para formatar como moeda, dá para usar o pipe do Angular: `{{obj.valor | currency:'BRL'}}`.
