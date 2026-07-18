# Body Thin, site Next.js para bodythin.com.br

Microsite premium do Body Thin, construído em Next.js (App Router), pronto para o fluxo GitHub e Vercel. Build validado. Todas as 11 páginas são pré-renderizadas como HTML estático (o Google recebe HTML pronto) e a navegação entre páginas acontece sem recarregar a tela (sensação de aplicativo).

## Onde você edita (sem tocar em código)

Todo o conteúdo editável vive na pasta `content/`:

| Arquivo | O que tem |
|---|---|
| `content/site.js` | Preço, link de compra, faixa do topo, slogan, contatos e texto legal. Mudou o preço na loja? Edite aqui, em um único lugar, e o site inteiro atualiza. |
| `content/paginas.js` | O texto completo das 10 páginas de suporte: títulos, meta, corpo, perguntas frequentes e links. |

A home está em `app/page.js`. Os textos dela são legíveis e editáveis direto no arquivo, mas se preferir, me peça a alteração que eu entrego o trecho pronto.

## Estrutura do projeto

```
app/            páginas e rotas
  page.js       home (página principal do produto)
  [slug]/       gera as 10 páginas de suporte a partir de content/paginas.js
  layout.js     estrutura comum (fontes, header, footer)
  globals.css   o design system Brisa
  sitemap.js    sitemap.xml automático
  robots.js     robots.txt automático
components/     header, footer, barra fixa de compra, molduras de mídia
content/        TODO O CONTEÚDO EDITÁVEL (preço, textos)
public/         arquivos estáticos (suas fotos e vídeos entrarão aqui)
```

## Como publicar

### 1. GitHub
1. Crie um repositório novo (sugestão: `bodythin-site`).
2. "Add file" e depois "Upload files": arraste TODO o conteúdo desta pasta (incluindo as pastas `app`, `components`, `content`, `public` e os arquivos da raiz). Não suba `node_modules` nem `.next` (já estão ignorados pelo `.gitignore`).
3. Confirme o commit.

### 2. Vercel
1. "Add New" e depois "Project", importe o repositório.
2. O Vercel detecta Next.js sozinho. Não mude nada. Clique em "Deploy".
3. Em cerca de dois minutos o site está no ar.

### 3. Domínio
1. No projeto do Vercel: "Settings" e depois "Domains".
2. Adicione `www.bodythin.com.br` e `bodythin.com.br`.
3. Configure o DNS no Registro.br conforme a instrução que o Vercel mostrar. O HTTPS é automático.

### 4. Google
1. No Google Search Console, adicione a propriedade `bodythin.com.br`.
2. Envie o sitemap: `https://www.bodythin.com.br/sitemap.xml`.

A partir daqui, o fluxo é o que você já conhece: edita no GitHub, o Vercel reconstrói e publica sozinho em cerca de dois minutos.

## Fotos e vídeos
Os espaços de mídia estão marcados com molduras tracejadas (componente `MediaSlot`). Quando os arquivos chegarem:
1. Suba os arquivos na pasta `public/` (exemplo: `public/hero-loop.mp4`, `public/lifestyle.jpg`).
2. Me peça a troca que eu entrego o código pronto de cada substituição, usando `next/image` para as fotos (otimização automática) e vídeo com poster leve.

## Notas importantes
1. A página do Body Thin no Nuvemshop deve ter texto diferente da home deste site, para o Google não tratar como conteúdo duplicado.
2. Antes de publicar as páginas de ingrediente, vale a revisão da responsável técnica (Stefânia M. D. G. de Luna, CRF GO 6580).
3. O botão de compra aponta para o checkout do Nuvemshop. Se a URL do produto mudar na loja, atualize `checkout` em `content/site.js`.
