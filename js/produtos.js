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
        "assets/img/touca-laranja.png",
      imagens: ["assets/img/touca-laranja.png", "assets/img/touca-laranja2.png"],
      fio: "Algodão premium 8/6",
      variantes: [{ cor: "Laranja", tamanho: "Único (adulto)", preco: 60.0 }],
      destaque: true,
    },
    {
      id: "touca-verde",
      categoria: "toucas",
      nome: "Touca Verde Claro",
      imagem:
        "assets/img/touca-verde.png",
      imagens: ["assets/img/touca-verde.png","assets/img/touca-verde2.png"],
      fio: "Algodão premium 8/6",
      variantes: [{ cor: "verde claro", tamanho: "Único (adulto)", preco: 60.0 }],
    },
    {
      id: "touca-verde-01",
      categoria: "toucas",
      nome: "Touca Verde",
      imagem:
        "assets/img/touca-verde1.png",
      imagens: ["assets/img/touca-verde-01.png", "assets/img/touca-verde-02.png"],
      fio: "Algodão premium 8/6",
      variantes: [{ cor: "Azul", tamanho: "Único (adulto)", preco: 60.0 }],
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
      variantes: [{ cor: "Azul", tamanho: "Único (adulto)", preco: 60.0 }],
      destaque: true,
    },
    {
      id: "bandana-floral-baby",
      categoria: "bandanas",
      nome: "Bandana Floral Baby",
      imagem:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAQXwqjcvusY68sXOanus76yQN6N0JAHm-YY_-DeJqiZ26ruggMce80ql0qE7q6ILn04ydTJ8jOSJjKcfPAJ-pGGo87GxQNgQ1oSvYGC0leDntLNt-fA9x5pDZDPgXsq1UjmO5sXA6laMGeyZHSuut90umTTN0jeVpTIUeAv6-ptbZ56y-VqnLDNlJNfdJYMkBKo_dW96vK66hSQl3Ok2gz2SIO1rhAXf1BoXAw-TGN8QIwF13PTfrn1UiD996O4j5dDAYkYr93mu9U",
      imagens: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAQXwqjcvusY68sXOanus76yQN6N0JAHm-YY_-DeJqiZ26ruggMce80ql0qE7q6ILn04ydTJ8jOSJjKcfPAJ-pGGo87GxQNgQ1oSvYGC0leDntLNt-fA9x5pDZDPgXsq1UjmO5sXA6laMGeyZHSuut90umTTN0jeVpTIUeAv6-ptbZ56y-VqnLDNlJNfdJYMkBKo_dW96vK66hSQl3Ok2gz2SIO1rhAXf1BoXAw-TGN8QIwF13PTfrn1UiD996O4j5dDAYkYr93mu9U",
        "assets/img/banner-01.png",
      ],
      fio: "Algodão orgânico",
      variantes: [{ cor: "Off-white", tamanho: "6–12 meses", preco: 60.0 }],
    },
    {
      id: "bandana-classica",
      categoria: "bandanas",
      nome: "Bandana Clássica",
      imagem:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAfyfWYjfTBq9-A-h50ZxQyTkyBVLF4m1gFG2yWQJ4wHsX09krCZrN4GVq7T695-meLodiH157fALc3UGQCj5LrJYHmMcpwhSadYJmp-Sk-ypmUttnkFRV2htwb3v1CeDcjyBuv6ncxytMFO5zft8-Gi2E8w1TgQKBofJ2XhUEGUCWGa8zTAuJqvtJJov2Ewi46syZpXgkrFBJ8meaiFsrohD8G3iZVDcbXHhkCeWXRODDPsTFia7QcMtPMo9r7ayXRDCfBoNhj-qDB",
      imagens: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAfyfWYjfTBq9-A-h50ZxQyTkyBVLF4m1gFG2yWQJ4wHsX09krCZrN4GVq7T695-meLodiH157fALc3UGQCj5LrJYHmMcpwhSadYJmp-Sk-ypmUttnkFRV2htwb3v1CeDcjyBuv6ncxytMFO5zft8-Gi2E8w1TgQKBofJ2XhUEGUCWGa8zTAuJqvtJJov2Ewi46syZpXgkrFBJ8meaiFsrohD8G3iZVDcbXHhkCeWXRODDPsTFia7QcMtPMo9r7ayXRDCfBoNhj-qDB",
        "assets/img/banner-01.png",
      ],
      fio: "Linha macia antialérgica",
      variantes: [{ cor: "Creme", tamanho: "Único", preco: 60.0 }],
    },
    {
      id: "Pocket Bag Laranja",
      categoria: "bags",
      nome: "Pocket Bag Azul",
      imagem:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDkWln4iOKX3uP8vT-nHRCXlBSWXpUJ7BTAQ8kHfhlFJgVfAaP93FWAjTK9q7xYGIQyURpRqeUJv7ZsM94ZEVt8-W0Y6TFyvzbqMYzYqk9o7EqMnCGeV3fK6Qr_1_j8wcSCgOYP1WTswxrpmFlLdXlJszI5yDsKGf-UQPSozzndzA1u_1bKuTpJ965JobVlab-damnIO36mRK5WH10Uhsd7CX7_0yyG-tATCgtTuSXeO1evhTdYulogzEpr8aKL_PolicUA01bFwx5w",
      imagens: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDkWln4iOKX3uP8vT-nHRCXlBSWXpUJ7BTAQ8kHfhlFJgVfAaP93FWAjTK9q7xYGIQyURpRqeUJv7ZsM94ZEVt8-W0Y6TFyvzbqMYzYqk9o7EqMnCGeV3fK6Qr_1_j8wcSCgOYP1WTswxrpmFlLdXlJszI5yDsKGf-UQPSozzndzA1u_1bKuTpJ965JobVlab-damnIO36mRK5WH10Uhsd7CX7_0yyG-tATCgtTuSXeO1evhTdYulogzEpr8aKL_PolicUA01bFwx5w",
        "assets/img/banner-02.png",
      ],
      fio: "Fio de malha premium",
      variantes: [{ cor: "Azul", tamanho: "Ùnico", preco: 60.0 }],
      destaque: true,
    },
    {
      id: "bag-tricot-p",
      categoria: "bags",
      nome: "Bag Tricot P",
      imagem:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDkWln4iOKX3uP8vT-nHRCXlBSWXpUJ7BTAQ8kHfhlFJgVfAaP93FWAjTK9q7xYGIQyURpRqeUJv7ZsM94ZEVt8-W0Y6TFyvzbqMYzYqk9o7EqMnCGeV3fK6Qr_1_j8wcSCgOYP1WTswxrpmFlLdXlJszI5yDsKGf-UQPSozzndzA1u_1bKuTpJ965JobVlab-damnIO36mRK5WH10Uhsd7CX7_0yyG-tATCgtTuSXeO1evhTdYulogzEpr8aKL_PolicUA01bFwx5w",
      imagens: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDkWln4iOKX3uP8vT-nHRCXlBSWXpUJ7BTAQ8kHfhlFJgVfAaP93FWAjTK9q7xYGIQyURpRqeUJv7ZsM94ZEVt8-W0Y6TFyvzbqMYzYqk9o7EqMnCGeV3fK6Qr_1_j8wcSCgOYP1WTswxrpmFlLdXlJszI5yDsKGf-UQPSozzndzA1u_1bKuTpJ965JobVlab-damnIO36mRK5WH10Uhsd7CX7_0yyG-tATCgtTuSXeO1evhTdYulogzEpr8aKL_PolicUA01bFwx5w",
        "assets/img/banner-02.png",
      ],
      fio: "Fio de malha",
      variantes: [{ cor: "Verde sage", tamanho: "P", preco: 60.0 }],
    },
    {
      id: "bolsa-franja-natural",
      categoria: "bolsas",
      nome: "Bolsa Franja Natural",
      imagem: "assets/img/banner-01.png",
      imagens: ["assets/img/banner-01.png", "assets/img/banner-02.png"],
      fio: "Fio de algodão cru",
      variantes: [{ cor: "Areia", tamanho: "Média", preco: 95.0 }],
      destaque: true,
    },
    {
      id: "bolsa-transversal-terracota",
      categoria: "bolsas",
      nome: "Bolsa Transversal Terracota",
      imagem: "assets/img/banner-02.png",
      imagens: ["assets/img/banner-02.png", "assets/img/banner-01.png"],
      fio: "Fio náutico premium",
      variantes: [{ cor: "Terracota", tamanho: "Único", preco: 110.0 }],
    },
    {
      id: "cropped-azul",
      categoria: "cropped",
      nome: "Cropped Azul",
      imagem: "assets/img/cropped-azul.png",
      imagens: ["assets/img/cropped-azul.png", "assets/img/modelo-manequim.png"],
      fio: "Algodão mercerizado",
      variantes: [{ cor: "Mostarda", tamanho: "M", preco: 89.0 }],
      destaque: true,
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
      categoria: "colares",
      nome: "Colar Verde",
      imagem:"assets/img/colar01.jpeg",
      imagens: ["assets/img/colar01.jpeg", "assets/img/colar02.jpeg"],
      fio: "Algodão mercerizado",
      variantes: [{ cor: "verde", tamanho: "Unico", preco: 40.0 }],
    },
    {
      id: "colar-ursinho",
      categoria: "colares",
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
      categoria: "colares",
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
