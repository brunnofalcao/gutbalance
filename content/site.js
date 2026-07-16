// =====================================================
// FONTE ÚNICA DE DADOS DO SITE (edite aqui)
// Gut Balance · Prana Nutrition®
// =====================================================

export const SITE = {
  dominio: 'https://www.gutbalance.com.br',
  marca: 'Prana Nutrition®',
  produto: 'Gut Balance',
  slogan: 'Sua saúde começa no intestino.',
  faixaTopo: 'Frete grátis acima de R$150 · Envio para todo o Brasil',

  checkout: 'https://www.prananutrition.com.br/produtos/prana-gut-balance-240g-sabor-tangerina/',
  loja: 'https://www.prananutrition.com.br',
  lojaIntestinal: 'https://www.prananutrition.com.br/suplementos/saude-intestinal-e-digestiva/',
  lojaImunidade: 'https://www.prananutrition.com.br/suplementos/suplementos-imunidade/',
  blog: 'https://www.prananutrition.com.br/blog/',
  blogGut: 'https://www.prananutrition.com.br/blog/posts/gutbalance-a188c28fea82/',
  quemSomos: 'https://www.prananutrition.com.br/quem-somos/',
  fiber: 'https://www.prananutrition.com.br/produtos/prana-fiber-suplemento-de-fibras-em-po-300g/',

  instagram: 'https://instagram.com/prananutritionbr',
  whatsapp: 'https://wa.me/5511920185434',
  youtube: 'https://www.youtube.com/@bebaprana',
  facebook: 'https://www.facebook.com/bebaprana',

  // Preço: apenas valor de referência. O promocional vive na loja, nunca desatualiza aqui.
  preco: {
    referencia: 'R$247,20',
    valorNumerico: '247.20',
    chamadaPromo: 'Acompanhe o valor promocional na loja oficial',
  },

  // Ficha do produto
  ficha: {
    categoria: 'Suplemento alimentar em pó',
    sabor: 'Tangerina',
    conteudo: '240g · rende até 30 doses',
    dose: '8g (1 dosador) em 200ml de água',
    restricoes: 'Não contém glúten · Não contém lactose',
    alergicos: 'Pode conter traços de leite, ovo e soja',
    codigo: 'PN106',
  },

  // Valores por dose (8g): PREENCHER com os números do rótulo.
  // O dossiê recebido não trouxe a tabela numérica; deixei editável para não inventar valores.
  nutricional: null,

  legal: 'Suplemento alimentar. Não contém glúten. Não contém lactose (RDC nº 727/2022 e Lei 10.674/2003). Este produto não é medicamento e não deve ser utilizado para prevenir, tratar ou curar doenças. Não exceder a recomendação diária de consumo. Mantenha fora do alcance de crianças. © 2026 Prana Nutrition®. Todos os direitos reservados.',
};

// =====================================================
// MÍDIAS (imagens locais em /public/img)
// Troque por URLs do Cloudinary quando quiser.
// =====================================================
export const MEDIA = {
  logoHeader: 'https://res.cloudinary.com/dlzrfhwin/image/upload/f_auto,q_auto,h_132/v1784234247/prana_tagline_01-cinza_s3hlh0.png',
  logoFooter: 'https://res.cloudinary.com/dlzrfhwin/image/upload/f_auto,q_auto,h_150/v1784234139/prana_tagline_01-branca_dm6xon.png',

  packshot: '/img/packshot.jpg',      // pote Gut Balance (fundo creme)
  preparo: '/img/preparo.jpg',        // dose sendo servida no copo

  // Loops de ambiente (.mov entregue como .mp4 pelo Cloudinary)
  loop1: 'https://res.cloudinary.com/dlzrfhwin/video/upload/f_auto,q_auto/v1777564146/PRANA_GIF_15_knagfm.mp4',
  loop2: 'https://res.cloudinary.com/dlzrfhwin/video/upload/f_auto,q_auto/v1784238877/PRANA_GIF_10_vjicsb.mp4',
  loop3: 'https://res.cloudinary.com/dlzrfhwin/video/upload/f_auto,q_auto/v1784238889/PRANA_GIF_2_mh1lqd.mp4',

  // Filme principal + poster (primeiro frame do vídeo)
  filme: 'https://res.cloudinary.com/dlzrfhwin/video/upload/f_auto,q_auto/v1784238931/PRANA_GUT_BALANCE_V2_lto30l.mp4',
  filmePoster: 'https://res.cloudinary.com/dlzrfhwin/video/upload/so_0/v1784238931/PRANA_GUT_BALANCE_V2_lto30l.jpg',

  // Fotos lifestyle
  foto1: 'https://res.cloudinary.com/dlzrfhwin/image/upload/f_auto,q_auto/v1777564138/4K7A5478_lf08bw.jpg',
  foto2: 'https://res.cloudinary.com/dlzrfhwin/image/upload/f_auto,q_auto/v1777564139/4K7A5293_mcailn.jpg',

  lifestyle: '/img/preparo.jpg',
};
