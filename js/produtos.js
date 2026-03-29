/**
 * Catálogo oseucro — categorias: toucas, bandanas, bags, pareos, colares.
 * Imagens provisórias (URLs); trocar por assets/img quando disponível.
 */
(function (global) {
  const CATEGORIAS = [
    { id: "toucas", label: "Toucas" },
    { id: "bandanas", label: "Bandanas" },
    { id: "bags", label: "Bags" },
    { id: "pareos", label: "Pareôs" },
    { id: "colares", label: "Colares" },
  ];

  const PRODUTOS = [
    {
      id: "touca-bordo",
      categoria: "toucas",
      nome: "Touca Bordô",
      imagem:
        "assets/img/touca-01.png",
      fio: "Algodão premium 8/6",
      variantes: [{ cor: "Bordô", tamanho: "Único (adulto)", preco: 60.0 }],
      destaque: true,
    },
    {
      id: "Touca verde",
      categoria: "toucas",
      nome: "Bucket Hat Mosaic",
      imagem:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDt-ZKuqRljwOUkP7gQLlRnd7m8FXPfL3chEhFMN5l_I8ZXj6XcNvjGnaDjn1K0maRHN7ioJTu_amdZrA82vF_E0ObWhjohxzznUszESZUmMVcG7ulC5ps5RxqYHM32sEMMUU-IdzUAW2rkMLpOV5ynjbNaI-8LM2S5asw2gpM8dfjtdzNJRLKh3YSuo-3L-CfJ8Fas57eKkPswkpl9itn-CfSCda6D_D7dZvWvyXW0pHUVbamuNqTEZSu-tgqcjZ0WfBLUoUKbT5BE",
      fio: "Algodão multicolor",
      variantes: [{ cor: "Mosaic verde", tamanho: "Único", preco: 60.0 }],
    },
    {
      id: "bandana-floral-baby",
      categoria: "bandanas",
      nome: "Bandana Floral Baby",
      imagem:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAQXwqjcvusY68sXOanus76yQN6N0JAHm-YY_-DeJqiZ26ruggMce80ql0qE7q6ILn04ydTJ8jOSJjKcfPAJ-pGGo87GxQNgQ1oSvYGC0leDntLNt-fA9x5pDZDPgXsq1UjmO5sXA6laMGeyZHSuut90umTTN0jeVpTIUeAv6-ptbZ56y-VqnLDNlJNfdJYMkBKo_dW96vK66hSQl3Ok2gz2SIO1rhAXf1BoXAw-TGN8QIwF13PTfrn1UiD996O4j5dDAYkYr93mu9U",
      fio: "Algodão orgânico",
      variantes: [{ cor: "Off-white", tamanho: "6–12 meses", preco: 60.0 }],
    },
    {
      id: "bandana-classica",
      categoria: "bandanas",
      nome: "Bandana Clássica",
      imagem:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAfyfWYjfTBq9-A-h50ZxQyTkyBVLF4m1gFG2yWQJ4wHsX09krCZrN4GVq7T695-meLodiH157fALc3UGQCj5LrJYHmMcpwhSadYJmp-Sk-ypmUttnkFRV2htwb3v1CeDcjyBuv6ncxytMFO5zft8-Gi2E8w1TgQKBofJ2XhUEGUCWGa8zTAuJqvtJJov2Ewi46syZpXgkrFBJ8meaiFsrohD8G3iZVDcbXHhkCeWXRODDPsTFia7QcMtPMo9r7ayXRDCfBoNhj-qDB",
      fio: "Linha macia antialérgica",
      variantes: [{ cor: "Creme", tamanho: "Único", preco: 60.0 }],
    },
    {
      id: "Pocket Bag Laranja",
      categoria: "bags",
      nome: "Pocket Bag Azul",
      imagem:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDkWln4iOKX3uP8vT-nHRCXlBSWXpUJ7BTAQ8kHfhlFJgVfAaP93FWAjTK9q7xYGIQyURpRqeUJv7ZsM94ZEVt8-W0Y6TFyvzbqMYzYqk9o7EqMnCGeV3fK6Qr_1_j8wcSCgOYP1WTswxrpmFlLdXlJszI5yDsKGf-UQPSozzndzA1u_1bKuTpJ965JobVlab-damnIO36mRK5WH10Uhsd7CX7_0yyG-tATCgtTuSXeO1evhTdYulogzEpr8aKL_PolicUA01bFwx5w",
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
      fio: "Fio de malha",
      variantes: [{ cor: "Verde sage", tamanho: "P", preco: 60.0 }],
    },
    {
      id: "banner-01",
      categoria: "bandanas",
      nome: "Bandana Susurros da Terra",
      imagem:
        "assets/img/banner-01.png",
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
      fio: "Linha leve algodão",
      variantes: [{ cor: "Azul mar", tamanho: "150×150 cm", preco: 190.0 }],
    },
    {
      id: "colar-coelho",
      categoria: "colares",
      nome: "Colar Pingente Coelho",
      imagem:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB-FAeTz0wc7C8rTfTn8cYlJnISCi805Xy6qe1jrfsTUapwc5SrjMRGFhWJE2O-1h62T9Z5s0c6GrGAa7OHfRkrOxvGI8Xbxl2E_Kjt2QOzgP2FBh76AvCplL_iQHF9q9AdsYuAhre5pYOMhB04jzzBn60aE1f4WeHPH-h2RFos-BgrQ84KHEM2eNHwZpELfAgIpwGXDkYW8nXzkR9576jTr607P9OoLWwcPVMI0cSmgQL7oa2F5RBuRd4cib6R1nvECYUgMf-RzmSJ",
      fio: "Algodão mercerizado",
      variantes: [{ cor: "Bege", tamanho: "Pingente 4 cm", preco: 40.0 }],
    },
    {
      id: "colar-ursinho",
      categoria: "colares",
      nome: "Colar Ursinho Carinho",
      imagem:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDej0ND3Z41PtrKskdyOvgSb-2XiCggv2DYKhsUO9ORV_C5LOIt4O0nTesGe0oab9sfQxhp0Z0IIV3-8yNXw5wEyUOiBGgEvHlmFgGIbKMyjd79UsZHLsDCvOyCMLJCTYGEikyoGMAnS-WfslF3hoVGtbhoh8CKaOG6rYeH4VQzs6HC12sY41v6rxfXgoWbjG5jYgWR2ACLma7Pw971iIaGjTm0ysNCBf3gBiqapd6A1DIjfpa7jYg6z9fUyOQKjUSpOzdQSQkwqjZ7",
      fio: "Algodão mercerizado",
      variantes: [{ cor: "Marrom médio", tamanho: "Pingente 5 cm", preco: 40.0 }],
    },
    {
      id: "Colar",
      categoria: "colares",
      nome: "Colar Coelho Algodão",
      imagem:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCBld-4HoRZgQ7oh7ouKguKxAihT3P_oj69WpWmPomPUPab5AOV80r8BdNsTAAkZs6xjWKQ_a9R67ipOANxD66MyuV3DMbsBfJGozOsa6MJDlR3KA86Mp0SuIDCOQgQGBQwTVNBHyXFvK9QQZXEOTyIrN_Ejjyyx83c1-vLILmigFy0v439i-4TcdfXT2LgfS6QjK6UrOkkb2Fpt8gxPe7Qj6YIn2Munoz9ntydO9hf8_8DNA9jHKRhEtlCTmjgtY8JWRJZHo56itL7",
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
