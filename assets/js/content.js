// Uso de IA: ChatGPT foi utilizado como apoio na no setUp do Swipper presente nas funções de fetch. 
// O codigo foi revisado e refinado manualmente.

function updateWhatsAppLinks(numeroDeTelefone) {
  const href = numeroDeTelefone.startsWith("55") ? `https://wa.me/${numeroDeTelefone.replaceAll(/\s/g, '')}` : `https://wa.me/55${numeroDeTelefone.replaceAll(/\s/g, '')}`;

  document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
    link.setAttribute("href", href);
  });
}

function refreshAOS() {
  if (typeof AOS !== "undefined") {
    AOS.refresh();
  }
}

async function fetchHero() {
  const response = await fetch("./content/hero.json");
  const hero = await response.json();

  document.querySelector("#hero-title").textContent = hero.titulo;
  document.querySelector("#hero-description").textContent = hero.descricao;
  document.querySelector("#hero-image").src = hero.imagem;
  document.querySelector("#hero-image").alt = hero.titulo;
}

async function fetchContatos() {
  const response = await fetch("./content/contatos.json");
  const contatos = await response.json();

  document.querySelector("#contact-whatsapp-number").textContent = contatos.numero;
  document.querySelector("#contact-email").textContent = contatos.email;
  document.querySelector("#contact-phone").textContent = contatos.telefone;
  document.querySelector("#contact-hours").textContent = contatos.horario;

  updateWhatsAppLinks(contatos.numero);
}

async function fetchResultados() {
  const response = await fetch("./content/resultados.json");
  const data = await response.json();
  const items = data.resultados || [];
  const wrapper = document.querySelector(".results-swiper .swiper-wrapper");

  wrapper.innerHTML = items
    .map(
      (item, index) => `
        <div class="swiper-slide" data-aos="zoom-in-up" data-aos-delay="${index * 50}">
          <article class="card border-0 rounded-4 overflow-hidden h-100 shadow-sm">
            <img
              class="img-fluid w-100"
              src="${item.imagem}"
              alt="${item.alt || "Resultado da limpeza"}"
              loading="lazy"
              decoding="async"
            />
          </article>
        </div>
      `,
    )
    .join("");

  refreshAOS();

  new Swiper(".results-swiper", {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 1,
    pagination: {
      el: ".results-swiper .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".results-swiper .swiper-button-next",
      prevEl: ".results-swiper .swiper-button-prev",
    },
    breakpoints: {
      992: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
    },
  });
}

async function fetchDepoimentos() {
  const response = await fetch("./content/depoimentos.json");
  const data = await response.json();
  const depoimentos = data.depoimentos || [];
  const wrapper = document.querySelector(".testimonials-swiper .swiper-wrapper");

  wrapper.innerHTML = depoimentos
    .map(
      (depoimento, index) => `
        <div class="swiper-slide" data-aos="fade-up" data-aos-delay="${index * 50}">
          <article class="card h-100 border border-1 rounded-4">
            <div class="card-body d-flex flex-column py-5 p-4">
              <p class="card-text text-body-secondary text-white-50 mb-4">
                "${depoimento.texto}"
              </p>
              <div class="d-flex align-items-center gap-3 mt-auto">
                <img
                  class="testimonial-avatar text-brand-dark rounded-circle"
                  src="${depoimento.imagem}"
                  alt="Foto de ${depoimento.nome}"
                  loading="lazy"
                  decoding="async"
                />
                <span class="fw-semibold text-brand-dark">${depoimento.nome}</span>
              </div>
            </div>
          </article>
        </div>
      `,
    )
    .join("");

  refreshAOS();

  new Swiper(".testimonials-swiper", {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 1,
    pagination: {
      el: ".testimonials-swiper .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".testimonials-swiper .swiper-button-next",
      prevEl: ".testimonials-swiper .swiper-button-prev",
    },
    breakpoints: {
      992: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });
}

async function fetchFAQ() {
  const response = await fetch("./content/faq.json");
  const data = await response.json();
  const items = data.faq || [];
  const container = document.querySelector("#faqAccordion");

  container.innerHTML = items
    .map((item, i) => `
      <article class="mb-3" data-aos="fade-up" data-aos-delay="${i * 60}">
        <button
          class="gap-1 border rounded-4 d-flex align-items-center justify-content-between w-100 pb-3 pt-3 bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqCollapse${i}"
          aria-expanded="false"
          aria-controls="faqCollapse${i}"
        >
          <h3 class="mt-2 ms-sm-4 ms-2 text-brand-dark fw-bold fs-6">
            ${item.pergunta}
          </h3>
          <i
            class="bi bi-plus-lg me-sm-3 p-1 rounded-5 bg-brand-light text-brand"
            aria-hidden="true"
            style="width: 30px; height: 30px"
          ></i>
        </button>
        <div class="collapse" id="faqCollapse${i}">
          <p class="card card-body border-0 text-muted">${item.resposta}</p>
        </div>
      </article>
    `)
    .join("");

  refreshAOS();
}


fetchHero();
fetchContatos();
fetchResultados();
fetchDepoimentos();
fetchFAQ();
