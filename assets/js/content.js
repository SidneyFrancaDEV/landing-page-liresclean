async function fetchDepoimentos() {
  const response = await fetch("./content/depoimentos.json");
  const data = await response.json();
  const depoimentos = data.depoimentos || [];

  const wrapper = document.querySelector(
    ".testimonials-swiper .swiper-wrapper",
  );

  wrapper.innerHTML = depoimentos
    .map(
      (depoimento) => `
        <div class="swiper-slide">
          <article class="card h-100 border border-1 rounded-4">
            <div class="card-body d-flex flex-column py-5 p-4">
              <p class="card-text text-body-secondary text-white-50 mb-4">
                "${depoimento.texto}"
              </p>
              <div class="d-flex align-items-center gap-3 mt-auto">
                <img
                  class="testimonial-avatar rounded-circle"
                  src="${depoimento.imagem}"
                  alt="Foto de ${depoimento.nome}"
                  loading="lazy"
                />
                <span class="fw-semibold text-brand-dark">${depoimento.nome}</span>
              </div>
            </div>
          </article>
        </div>
      `,
    )
    .join("");

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

async function fetchResultados() {
  const res = await fetch("./content/resultados.json");
  const data = await res.json();
  const items = data.resultados || [];
  const wrapper = document.querySelector(".results-swiper .swiper-wrapper");
  wrapper.innerHTML = items
    .map(
      (item) => `
    <div class="swiper-slide">
      <div class="card border border-1 rounded-4 overflow-hidden h-100">
        <div class="row g-0">
            <img class="img-fluid w-100" src="${item.imagem}" alt="${item.alt || ""}" loading="lazy" />
   
        </div>
      </div>
    </div>
  `,
    )
    .join("");

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
      992: { slidesPerView: 2, spaceBetween: 24 },
    },
  });
}

fetchResultados();
fetchDepoimentos();
