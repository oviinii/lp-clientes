(function () {
  "use strict";

  var header = document.getElementById("header");
  var nav = document.getElementById("nav");
  var navToggle = document.getElementById("navToggle");
  var yearEl = document.getElementById("year");
  var form = document.getElementById("contactForm");
  var formHelper = document.getElementById("formHelper");

  // Ano no rodapé
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Header sombra ao rolar
  function onScroll() {
    if (window.scrollY > 12) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
    updateActiveNav();
  }

  // Menu mobile
  navToggle.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    navToggle.classList.toggle("open", open);
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    navToggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  });

  // Fechar menu ao clicar em um link
  nav.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      nav.classList.remove("open");
      navToggle.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Compensar altura do header fixo nos âncoras
  function offsetAnchor() {
    if (window.location.hash.length > 1) {
      var el = document.querySelector(window.location.hash);
      if (el) {
        window.scrollTo({ top: el.offsetTop - 60, behavior: "smooth" });
      }
    }
  }
  window.addEventListener("hashchange", offsetAnchor);

  // Reveal ao entrar na viewport
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  // Nav ativo conforme seção visível
  var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id], main [id]"));
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav ul a"));
  function updateActiveNav() {
    var pos = window.scrollY + 120;
    var current = "";
    sections.forEach(function (s) {
      if (pos >= s.offsetTop) current = s.id;
    });
    navLinks.forEach(function (l) {
      l.classList.toggle("active", l.getAttribute("href") === "#" + current);
    });
  }

  // Formulário -> WhatsApp
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var nome = (form.nome.value || "").trim();
      var email = (form.email.value || "").trim();
      var telefone = (form.telefone.value || "").trim();
      var mensagem = (form.mensagem.value || "").trim();

      if (!nome || !email) {
        showHelper("Preencha pelo menos nome e e-mail para continuar.", true);
        return;
      }

      var text =
        "Olá! Sou " + nome + ".%0A" +
        "E-mail: " + email + (telefone ? " · Tel: " + telefone : "") + "%0A" +
        (mensagem ? "Mensagem: " + mensagem : "");

      var url = "https://wa.me/5519993485532?text=" + encodeURIComponent(text).replace(/%2520/g, "%20");
      showHelper("Abrindo o WhatsApp…", false);
      window.open(url, "_blank", "noopener");
    });
  }

  function showHelper(msg, isErr) {
    if (!formHelper) return;
    formHelper.textContent = msg;
    formHelper.style.color = isErr ? "#c0392b" : "var(--verde-escuro)";
    if (!isErr) setTimeout(function () { if (formHelper.textContent === msg) formHelper.textContent = ""; }, 4000);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  updateActiveNav();
})();
