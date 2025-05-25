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

  // Auto-update footer year
  const year = new Date().getFullYear();
  document.querySelectorAll("footer p").forEach(el => {
    el.innerHTML = `© ${year} Jazz's Blog | Made with ❤️`;
  });
});

// Optional: Dynamically update announcement message
function updateAnnouncement(message) {
  document.getElementById("announcement-text").innerText = message;
}

// Example usage:
// updateAnnouncement("No blog post today – exams ongoing 📝");
