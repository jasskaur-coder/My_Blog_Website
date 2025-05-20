// Scroll to Top Button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

scrollToTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Animate header on load
window.addEventListener("DOMContentLoaded", () => {
  document.querySelector("header").classList.add("animate-header");
});

// Auto-update year in footer
const year = new Date().getFullYear();
document.querySelectorAll("footer p").forEach(el => {
  el.innerHTML = `© ${year} Jazz's Blog | Made with ❤️`;
});
