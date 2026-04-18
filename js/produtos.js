/**
 * Catálogo oseucro — categorias: toucas, bandanas, bags, pareos, colares.
 * Imagens provisórias (URLs); trocar por assets/img quando disponível.
 */
(function (global) {
  const CATEGORIAS = [
    { id: "toucas", label: "Toucas" },
    { id: "bandanas", label: "Bandanas" },
    { id: "bags", label: "Bags" },
    { id: "bolsas", label: "Bolsas" },
    { id: "cropped", label: "Cropped" },
    { id: "pareos", label: "Pareôs" },
    { id: "colares", label: "Colares" },
  ];

  const PRODUTOS = [
     {
      id: "touca-laranja",
      categoria: "toucas",
      nome: "Touca laranja",
      imagem:
        "assets/img/touca-laranja-0.png",
      imagens: ["assets/img/touca-laranja-1.png", "assets/img/touca-laranja-2.png"],
      fio: "Algodão premium 8/6",
      variantes: [{ cor: "Laranja", tamanho: "Único (adulto)", preco: 60.0 }],
      destaque: true,
    },
    {
      id: "touca-verde",
      categoria: "toucas",
      nome: "Touca Verde Claro",
      imagem:
        "assets/img/touca-verde-0.png",
      imagens: ["assets/img/touca-verde-1.png","assets/img/touca-verde-2.png"],
      fio: "Algodão premium 8/6",
      variantes: [{ cor: "Verde Claro", tamanho: "Único (adulto)", preco: 60.0 }],
    },
    {
      id: "touca-verde-01",
      categoria: "toucas",
      nome: "Touca Verde",
      imagem:
        "assets/img/touca-vverde-0.png",
      imagens: ["assets/img/touca-vverde-1.png", "assets/img/touca-vverde-2.png"],
      fio: "Algodão premium 8/6",
      variantes: [{ cor: "Verde", tamanho: "Único (adulto)", preco: 60.0 }],
      destaque: true,
    },
    {
      id: "touca-amarela-01",
      categoria: "toucas",
      nome: "Touca Amarela",
      imagem:
        "assets/img/touca-amarela-1.png",
      imagens: ["assets/img/touca-amarela-1.png", "assets/img/touca-amarela-2.png"],
      fio: "Algodão premium 8/6",
      variantes: [{ cor: "Amarela", tamanho: "Único (adulto)", preco: 60.0 }],
      destaque: true,
    },
    {
      id: "touca-azul",
      categoria: "toucas",
      nome: "Touca Azul",
      imagem:
        "assets/img/touca-azul-1.png",
      imagens: ["assets/img/touca-azul-1.png", "assets/img/touca-azul-2.png"],
      fio: "Algodão premium 8/6",
      variantes: [{ cor: "Azul", tamanho: "Único (adulto)", preco: 60.0 }],
      destaque: true,
    },
    {
      id: "colar-0",
      categoria: "colares",
      nome: "Colar Marrom",
      imagem:
        "assets/img/colar-0.png",
      imagens: ["assets/img/colar-0.png","assets/img/colar-01.jpeg"],
      fio: "Algodão orgânico",
      variantes: [{ cor: "Marrom", tamanho: "30cm (colar + alças)", preco: 45.0 }],
    },
    {
      id: "colar-1",
      categoria: "colares",
      nome: "Colar Brilho",
      imagem:
        "assets/img/colar-1.jpg",
      imagens: ["assets/img/colar-1.jpg", "assets/img/colar-12.jpeg"],
      fio: "Algodão orgânico",
      variantes: [{ cor: "Pink", tamanho: "30cm (colar + alças)", preco: 45.0 }],
    },
    {
      id: "colar-2",
      categoria: "colares",
      nome: "Colar Preto",
      imagem:
        "assets/img/colar-2.png",
      imagens: ["assets/img/colar-2.png", "assets/img/colar-22.jpeg"],
      fio: "Algodão orgânico",
      variantes: [{ cor: "Preto", tamanho: "30cm (colar + alças)", preco: 45.0 }],
    },
    {
      id: "colar-3",
      categoria: "colares",
      nome: "Colar Azul Mescla",
      imagem:
        "assets/img/colar-3.png",
      imagens: ["assets/img/colar-3.png", "assets/img/colar-31.jpeg"],
      fio: "Algodão orgânico",
      variantes: [{ cor: "Azul", tamanho: "30cm (colar + alças)", preco: 45.0 }],
    },
    {
      id: "colar-4",
      categoria: "colares",
      nome: "Colar Preto",
      imagem:
        "assets/img/colar-4.png",
      imagens: ["assets/img/colar-4.png"],
      fio: "Algodão orgânico",
      variantes: [{ cor: "Preto", tamanho: "30cm (colar + alças)", preco: 45.0 }],
    },
    {
      id: "colar-5",
      categoria: "colares",
      nome: "Colar Marrom",
      imagem:
        "assets/img/colar-5.png",
      imagens: ["assets/img/colar-51.png","assets/img/colar-51.jpeg"],
      fio: "Algodão orgânico",
      variantes: [{ cor: "Marrom", tamanho: "30cm (colar + alças)", preco: 45.0 }],
    },
    {
      id: "colar-6",
      categoria: "colares",
      nome: "Colar Verde Mescla",
      imagem:
        "assets/img/colar-6.png",
      imagens: ["assets/img/colar-6.png","assets/img/colar-61.jpeg"],
      fio: "Algodão orgânico",
      variantes: [{ cor: "Verde Mescla", tamanho: "30cm (colar + alças)", preco: 45.0 }],
    },
   {
      id: "colar-7",
      categoria: "colares",
      nome: "Colar Bege",
      imagem:
        "assets/img/colar-7.png",
      imagens: ["assets/img/colar-7.png","assets/img/colar-71.jpeg"],
      fio: "Algodão orgânico",
      variantes: [{ cor: "Bege", tamanho: "30cm (colar + alças)", preco: 45.0 }],
    },
    {
      id: "colar-8",
      categoria: "colares",
      nome: "Colar Bege",
      imagem:
        "assets/img/colar-8.png",
      imagens: ["assets/img/colar-8.png","assets/img/colar-81.jpeg"],
      fio: "Algodão orgânico",
      variantes: [{ cor: "Bege", tamanho: "30cm (colar + alças)", preco: 45.0 }],
    },
    {
      id: "colar-9",
      categoria: "colares",
      nome: "Colar Verde",
      imagem:
        "assets/img/colar-9.png",
      imagens: ["assets/img/colar-9.png","assets/img/colar-91.jpg"],
      fio: "Algodão orgânico",
      variantes: [{ cor: "Verde", tamanho: "30cm (colar + alças)", preco: 45.0 }],
    },
    {
      id: "cropped-lavanda",
      categoria: "cropped",
      nome: "Cropped Lavanda",
      imagem: "assets/img/touca-verde.png",
      imagens: ["assets/img/touca-verde.png", "assets/img/touca-verde2.png"],
      fio: "Algodão penteado",
      variantes: [{ cor: "Lavanda", tamanho: "P/M", preco: 92.0 }],
    },
    {
      id: "banner-01",
      categoria: "bandanas",
      nome: "Bandana Susurros da Terra",
      imagem:
        "assets/img/banner-01.png",
      imagens: ["assets/img/banner-01.png", "assets/img/banner-02.png"],
      fio: "Lã algodão natural",
      variantes: [{ cor: "Creme", tamanho: "90×150 cm", preco: 60.0 }],
      destaque: true,
    },
    {
      id: "pareo-brisa",
      categoria: "pareos",
      nome: "Pareô Brisa",
      imagem:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAaI-xV3V64b8_E8jz97k7cIrevx939V7sqEh280uZMTE5FyOqUyRPZ2wozq5GBZuZiPgp0NDMdtKTVwQOPzsxu9Qjki7uwEYYFy_Yl0wCBo1WTIK0U03NvZGFCjfftYK3Qn-FFdtSXhjn9pfaMRQbm13o4Ztry1qtWdlxnT3rArvEW8EmwfXG9AasyCnlsRyrvTT73pHUNCm1rdPr6DcQXMecvu7sviG4mQ9zwI1qbZCKwJpbSkDGzu8iY5YHmqZ1KmPWapRHwIBZ3",
      imagens: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAaI-xV3V64b8_E8jz97k7cIrevx939V7sqEh280uZMTE5FyOqUyRPZ2wozq5GBZuZiPgp0NDMdtKTVwQOPzsxu9Qjki7uwEYYFy_Yl0wCBo1WTIK0U03NvZGFCjfftYK3Qn-FFdtSXhjn9pfaMRQbm13o4Ztry1qtWdlxnT3rArvEW8EmwfXG9AasyCnlsRyrvTT73pHUNCm1rdPr6DcQXMecvu7sviG4mQ9zwI1qbZCKwJpbSkDGzu8iY5YHmqZ1KmPWapRHwIBZ3",
        "assets/img/banner-02.png",
      ],
      fio: "Linha leve algodão",
      variantes: [{ cor: "Azul mar", tamanho: "150×150 cm", preco: 190.0 }],
    },
    {
      id: "colar-verde",
      categoria: "bags",
      nome: "Colar Verde",
      imagem:"assets/img/colar01.jpeg",
      imagens: ["assets/img/colar01.jpeg", "assets/img/colar02.jpeg"],
      fio: "Algodão mercerizado",
      variantes: [{ cor: "verde", tamanho: "Unico", preco: 40.0 }],
    },
    {
      id: "colar-ursinho",
      categoria: "bags",
      nome: "Colar Ursinho Carinho",
      imagem:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDej0ND3Z41PtrKskdyOvgSb-2XiCggv2DYKhsUO9ORV_C5LOIt4O0nTesGe0oab9sfQxhp0Z0IIV3-8yNXw5wEyUOiBGgEvHlmFgGIbKMyjd79UsZHLsDCvOyCMLJCTYGEikyoGMAnS-WfslF3hoVGtbhoh8CKaOG6rYeH4VQzs6HC12sY41v6rxfXgoWbjG5jYgWR2ACLma7Pw971iIaGjTm0ysNCBf3gBiqapd6A1DIjfpa7jYg6z9fUyOQKjUSpOzdQSQkwqjZ7",
      imagens: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDej0ND3Z41PtrKskdyOvgSb-2XiCggv2DYKhsUO9ORV_C5LOIt4O0nTesGe0oab9sfQxhp0Z0IIV3-8yNXw5wEyUOiBGgEvHlmFgGIbKMyjd79UsZHLsDCvOyCMLJCTYGEikyoGMAnS-WfslF3hoVGtbhoh8CKaOG6rYeH4VQzs6HC12sY41v6rxfXgoWbjG5jYgWR2ACLma7Pw971iIaGjTm0ysNCBf3gBiqapd6A1DIjfpa7jYg6z9fUyOQKjUSpOzdQSQkwqjZ7",
        "assets/img/banner-02.png",
      ],
      fio: "Algodão mercerizado",
      variantes: [{ cor: "Marrom médio", tamanho: "Pingente 5 cm", preco: 40.0 }],
    },
    {
      id: "Colar",
      categoria: "bags",
      nome: "Colar Coelho Algodão",
      imagem:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCBld-4HoRZgQ7oh7ouKguKxAihT3P_oj69WpWmPomPUPab5AOV80r8BdNsTAAkZs6xjWKQ_a9R67ipOANxD66MyuV3DMbsBfJGozOsa6MJDlR3KA86Mp0SuIDCOQgQGBQwTVNBHyXFvK9QQZXEOTyIrN_Ejjyyx83c1-vLILmigFy0v439i-4TcdfXT2LgfS6QjK6UrOkkb2Fpt8gxPe7Qj6YIn2Munoz9ntydO9hf8_8DNA9jHKRhEtlCTmjgtY8JWRJZHo56itL7",
      imagens: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCBld-4HoRZgQ7oh7ouKguKxAihT3P_oj69WpWmPomPUPab5AOV80r8BdNsTAAkZs6xjWKQ_a9R67ipOANxD66MyuV3DMbsBfJGozOsa6MJDlR3KA86Mp0SuIDCOQgQGBQwTVNBHyXFvK9QQZXEOTyIrN_Ejjyyx83c1-vLILmigFy0v439i-4TcdfXT2LgfS6QjK6UrOkkb2Fpt8gxPe7Qj6YIn2Munoz9ntydO9hf8_8DNA9jHKRhEtlCTmjgtY8JWRJZHo56itL7",
        "assets/img/banner-02.png",
      ],
      fio: "Algodão 100%",
      variantes: [{ cor: "Marrom", tamanho: "Pingente 3,5 cm", preco: 40.0 }],
    },
  ];

  function menorPreco(produto) {
    const vals = produto.variantes.map((v) => v.preco);
    return Math.min.apply(null, vals);
  }

  function formatBRL(n) {
    return n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }

  function porId(id) {
    return PRODUTOS.find((p) => p.id === id) || null;
  }

  function porCategoria(catId) {
    if (!catId || catId === "todos") return PRODUTOS.slice();
    return PRODUTOS.filter((p) => p.categoria === catId);
  }

  global.OSEUCRO_CATALOGO = {
    CATEGORIAS,
    PRODUTOS,
    menorPreco,
    formatBRL,
    porId,
    porCategoria,
  };
})(typeof window !== "undefined" ? window : globalThis);
