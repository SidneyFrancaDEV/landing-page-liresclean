// Uso de IA: ChatGPT foi utilizado como apoio na configuracao inicial do AOS
document.addEventListener("DOMContentLoaded", () => {
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 650,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }
});

if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", function (user) {
    if (!user) {
      window.netlifyIdentity.on("login", function () {
        document.location.href = "/admin/";
      });
    }
  });
}
