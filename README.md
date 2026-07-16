# Gut Balance · Microsite (Prana Nutrition®)

Microsite de produto único em **Next.js 15 (App Router) + React 19**, focado em SEO, AEO e GEO.
Home científica + **25 páginas internas** de conteúdo (ingredientes, conceitos de saúde intestinal e páginas de produto), fortemente interligadas.

## Como publicar (mesmo fluxo do Body Thin)
1. Extraia este ZIP.
2. Suba o conteúdo da pasta `gutbalance-next/` para um repositório no GitHub.
3. Conecte o repositório à **Vercel** (framework detectado automaticamente: Next.js).
4. A Vercel builda e publica em ~2 min. A cada push, rebuild automático.
5. Configure o domínio **gutbalance.com.br** na Vercel e registre no Google Search Console.

Não é preciso terminal: é só GitHub → Vercel.

## Onde editar (fonte única de dados)
Tudo que muda com frequência está em **`content/site.js`**:
- `SITE.dominio` — hoje `https://www.gutbalance.com.br` (troque se o domínio for outro).
- `SITE.checkout` — link real do produto na loja (já configurado).
- `SITE.preco.referencia` — valor de referência exibido (hoje R$247,20). O preço promocional vive na loja, então nunca desatualiza aqui.
- `MEDIA` — imagens. Hoje usam arquivos locais em `/public/img/` (`packshot.jpg`, `preparo.jpg`). Pode trocar por URLs do Cloudinary quando quiser.

Os 25 artigos ficam em **`content/paginas.js`** (texto, FAQ, links, schema por página).

## PENDENTE opcional: tabela nutricional numérica
O dossiê recebido não trouxe a tabela com os valores por dose (mg de cada ativo).
O campo `SITE.nutricional` está como `null` (editável). Se quiser exibir os valores por porção (8g),
me envie os números do rótulo ou uma foto legível do painel nutricional que eu insiro.
Hoje o site apresenta a **lista de ingredientes verbatim** e manda consultar o rótulo para as quantidades.

## Conformidade (importante)
O conteúdo separa **ciência do ingrediente** (educativa) das **alegações do produto**.
As alegações de imunidade referem-se apenas a **Vitaminas C e D e Zinco** (reconhecidas pela ANVISA).
Aminoácidos, beta-glucana e goma acácia entram como informação científica, sem promessa terapêutica.
O site **não** alega tratar intestino permeável, SII ou doenças, nem "detox". Suplemento alimentar, não medicamento.

## Regras de estilo aplicadas
- Sem travessão "—" em nenhum texto (validado).
- Marca sempre como "Prana Nutrition®".
- Tema roxo Gut Balance #6B5C96 + acento tangerina #E88A3C.
