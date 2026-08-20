# Formulário de Contato — HTML5

Atividade prática utilizando tags de formulário do HTML5 e seus recursos nativos de validação, com base em um modelo de página de contato.

## 📄 Sobre a atividade

O objetivo é reproduzir uma página de contato utilizando as tags de formulário do HTML5, aplicando validações nativas do navegador (sem uso de JavaScript) para os seguintes campos:

| Campo     | Regra aplicada                                                         |
|-----------|--------------------------------------------------------------------------|
| Nome      | Campo obrigatório (`required`)                                          |
| Email     | Campo obrigatório e com validação de formato de e-mail (`type="email"`) |
| Telefone  | Validado por expressão regular no padrão `99999-9999`                   |

## 🗂️ Arquivos

- `contato.html` — versão base do formulário, fiel ao layout original de referência.
- `contato_y2k.html` — versão estilizada com identidade visual Y2K/sticker, inspirada em uma referência de landing page (paleta rosa/lima/periwinkle, tipografia display, selo circular, tags e adesivos).

## 🔧 Recursos de HTML5 utilizados

- `type="email"` — valida automaticamente se o texto digitado tem formato de e-mail.
- `required` — impede o envio do formulário se o campo estiver vazio.
- `type="tel"` + `pattern="\d{5}-\d{4}"` — exige que o telefone siga o padrão `99999-9999` (5 dígitos, hífen, 4 dígitos).
- `placeholder` — texto de exemplo exibido dentro do campo antes do preenchimento.
- `title` — mensagem exibida pelo navegador quando o campo de telefone não passa na validação da expressão regular.
- `<select>` — campo de seleção para o assunto do contato.
- `<input type="radio">` — opção de escolha única (Sim/Não) para receber cópia do e-mail.
- `<textarea>` — campo de mensagem em várias linhas.

## ▶️ Como testar

1. Abra o arquivo `.html` desejado diretamente no navegador (duplo clique ou arraste para a janela do navegador).
2. Tente enviar o formulário vazio → os campos **Nome** e **Email** vão bloquear o envio.
3. Digite um e-mail sem `@` → o navegador aponta o erro de formato.
4. Digite um telefone fora do padrão (ex: `11987654321`) → o navegador aponta o erro de formato esperado (`99999-9999`).
5. Corrija os campos e envie novamente para ver a validação passar.

## 🛠️ Tecnologias

- HTML5 (tags de formulário e validação nativa)
- CSS3 (estilização, sem frameworks)
- Fonte Google Fonts (*Alfa Slab One* + *Space Grotesk*) — apenas na versão Y2K, requer conexão com a internet para carregar.

## ✍️ Autoria

Atividade desenvolvida por Sabrina — curso de Análise e Desenvolvimento de Sistemas (FATEC Ipiranga).
