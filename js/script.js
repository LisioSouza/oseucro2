/**
 * Navegação, catálogo e página de detalhes — site estático (GitHub Pages).
 * Identificação de produto: ?id= (query string — partilhável e compatível com hosting estático).
 */
(function () {
  var WA = "5531984315417";

  function escapeHtml(s) {
    var d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  }

  function escapeAttr(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;");
  }

  function whatsappUrl(mensagem) {
    var texto =
      mensagem ||
      "Olá! Vim pelo site oseucro e gostaria de mais informações.";
    return "https://wa.me/" + WA + "?text=" + encodeURIComponent(texto);
  }

  function detalheUrl(id, opcoes) {
    opcoes = opcoes || {};
    var p = new URLSearchParams();
    p.set("id", id);
    if (opcoes.origem) p.set("origem", opcoes.origem);
    if (opcoes.categoria) p.set("categoria", opcoes.categoria);
    return "detalhes.html?" + p.toString();
  }

  function catalogoUrl(categoria) {
    if (!categoria || categoria === "todos") return "catalogo.html";
    return "catalogo.html?categoria=" + encodeURIComponent(categoria);
  }

  function voltarDetalhes(origem, categoria) {
    if (origem === "index") return "index.html";
    if (origem === "catalogo") {
      if (categoria && categoria !== "todos") return catalogoUrl(categoria);
      return "catalogo.html";
    }
    return "catalogo.html";
  }

  function initDetalhe() {
    var params = new URLSearchParams(window.location.search);
    var id = params.get("id");
    var origem = params.get("origem") || "catalogo";
    var categoria = params.get("categoria") || "";

    var errEl = document.getElementById("detalhe-erro");
    var okEl = document.getElementById("detalhe-conteudo");
    var cat = window.OSEUCRO_CATALOGO;

    function showErro() {
      if (errEl) errEl.hidden = false;
      if (okEl) okEl.hidden = true;
    }

    if (!cat || !id) {
      showErro();
      return;
    }

    var p = cat.porId(id);
    if (!p) {
      showErro();
      return;
    }

    if (errEl) errEl.hidden = true;

    var back = document.getElementById("detalhe-voltar");
    if (back) back.href = voltarDetalhes(origem, categoria);

    var img = document.getElementById("detalhe-imagem");
    if (img) {
      img.src = p.imagem;
      img.alt = p.nome;
    }

    var titulo = document.getElementById("detalhe-titulo");
    if (titulo) titulo.textContent = p.nome;

    var precos = p.variantes.map(function (v) {
      return v.preco;
    });
    var minP = Math.min.apply(null, precos);
    var maxP = Math.max.apply(null, precos);
    var precoEl = document.getElementById("detalhe-preco");
    if (precoEl) {
      if (minP === maxP) {
        precoEl.textContent = cat.formatBRL(minP);
      } else {
        precoEl.textContent = "A partir de " + cat.formatBRL(minP);
      }
    }

    // --- ALTERAÇÃO AQUI: Estilização da COR ---
    var cores = p.variantes
      .map(function (v) {
        return (v.cor || "").trim();
      })
      .filter(Boolean);
    var coresUnicas = Array.from(new Set(cores));

    var corEl = document.getElementById("detalhe-cor");
    if (corEl) {
      // Aplicando negrito e o azul da marca no elemento de cores
      corEl.classList.add("font-bold", "text-[#1e3a5f]");
      corEl.textContent = coresUnicas.join(", ");
    }

    // --- ALTERAÇÃO AQUI: Estilização do FIO ---
    var corEl = document.getElementById("detalhe-cor");
    if (corEl) {
      corEl.classList.remove("font-bold", "text-[#1e3a5f]"); // Remove o azul/negrito do conteúdo
      corEl.textContent = coresUnicas.join(", ");
    }

// Volta o conteúdo do Fio para o padrão
    var fioEl = document.getElementById("detalhe-fio");
    if (fioEl) {
      fioEl.classList.remove("font-bold", "text-[#1e3a5f]"); // Remove o azul/negrito do conteúdo
      fioEl.textContent = p.fio;
    }

    if (okEl) okEl.hidden = false;
  }

  function initCatalogo() {
    var cat = window.OSEUCRO_CATALOGO;
    if (!cat) return;

    var params = new URLSearchParams(window.location.search);
    var ativa = params.get("categoria") || "todos";

    document.querySelectorAll("[data-cat-link]").forEach(function (a) {
      var c = a.getAttribute("data-cat-link");
      var isActive =
        (c === "todos" && ativa === "todos") || c === ativa;
      if (isActive) {
        a.classList.add("bg-primary", "text-on-primary", "shadow-sm");
        a.classList.remove(
          "bg-surface-container-low",
          "text-on-surface-variant",
          "hover:bg-surface-container-high"
        );
      } else {
        a.classList.remove("bg-primary", "text-on-primary", "shadow-sm");
        a.classList.add(
          "bg-surface-container-low",
          "text-on-surface-variant",
          "hover:bg-surface-container-high"
        );
      }
    });

    var lista = cat.porCategoria(ativa === "todos" ? null : ativa);
    var grid = document.getElementById("catalogo-grid");
    if (!grid) return;

    grid.innerHTML = "";
    lista.forEach(function (p) {
      var minP = cat.menorPreco(p);
      var maxP = Math.max.apply(
        null,
        p.variantes.map(function (v) {
          return v.preco;
        })
      );
      var precoTxt =
        minP === maxP
          ? cat.formatBRL(minP)
          : "A partir de " + cat.formatBRL(minP);

      var art = document.createElement("article");
      art.className =
        "bg-surface-container-low rounded-xl overflow-hidden flex flex-col shadow-sm border border-outline-variant/10";
      art.innerHTML =
        '<div class="aspect-square overflow-hidden">' +
        '<a href="' +
        detalheUrl(p.id, {
          origem: "catalogo",
          categoria: ativa,
        }) +
        '" class="block h-full">' +
        '<img src="' +
        escapeAttr(p.imagem) +
        '" alt="' +
        escapeAttr(p.nome) +
        '" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy"/>' +
        "</a></div>" +
        '<div class="p-4 flex flex-col flex-1">' +
        '<h3 class="font-headline text-xl text-on-surface mb-1">' +
        escapeHtml(p.nome) +
        "</h3>" +
        '<p class="text-sm text-on-surface-variant mb-1">' +
        escapeHtml(p.fio) +
        "</p>" +
        '<p class="font-headline text-lg text-primary mb-4">' +
        escapeHtml(precoTxt) +
        "</p>" +
        '<a href="' +
        detalheUrl(p.id, {
          origem: "catalogo",
          categoria: ativa,
        }) +
        '" class="mt-auto w-full py-3 text-center rounded-full bg-surface-container-highest text-primary font-label font-bold text-sm hover:bg-primary-container transition-colors">Detalhes</a>' +
        "</div>";
      grid.appendChild(art);
    });

    var empty = document.getElementById("catalogo-vazio");
    if (empty) empty.hidden = lista.length > 0;
  }

  function bindWhatsAppIcons() {
    document.querySelectorAll("[data-whatsapp-icon]").forEach(function (el) {
      el.href = whatsappUrl();
      el.setAttribute("aria-label", "WhatsApp");
    });
  }

  function initIndexDrawer() {
    var btn = document.getElementById("menu-drawer-btn");
    var backdrop = document.getElementById("nav-drawer-backdrop");
    var panel = document.getElementById("nav-drawer-panel");
    var closeBtn = document.getElementById("nav-drawer-close");
    if (!btn || !backdrop || !panel) return;

    function open() {
      backdrop.classList.add("is-open");
      panel.classList.add("is-open");
      backdrop.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }

    function close() {
      backdrop.classList.remove("is-open");
      panel.classList.remove("is-open");
      backdrop.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }

    btn.addEventListener("click", open);
    backdrop.addEventListener("click", close);
    if (closeBtn) closeBtn.addEventListener("click", close);
    panel.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", close);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    bindWhatsAppIcons();
    initIndexDrawer();
    var path = window.location.pathname || "";
    if (path.indexOf("detalhes.html") !== -1) initDetalhe();
    if (path.indexOf("catalogo.html") !== -1) initCatalogo();
  });

  window.OSEUCRO_APP = {
    whatsappUrl: whatsappUrl,
    detalheUrl: detalheUrl,
    catalogoUrl: catalogoUrl,
    voltarDetalhes: voltarDetalhes,
  };
})();