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

// Animate header on load + update footer year
window.addEventListener("DOMContentLoaded", () => {
  // Animate header
  document.querySelector("header").classList.add("animate-header");

  // Auto-update footer year
  const year = new Date().getFullYear();
  document.querySelectorAll("footer p").forEach(el => {
    el.innerHTML = `© ${year} Jazz's Blog | Made with ❤️`;
  });

  // Tag filtering logic
  const searchBar = document.getElementById("searchBar");
  if (searchBar) {
    searchBar.addEventListener("input", function () {
      const query = this.value.toLowerCase();
      const cards = document.querySelectorAll('.blog-card');
      cards.forEach(card => {
        const tags = card.getAttribute('data-tags')?.toLowerCase() || "";
        const title = card.querySelector('h2')?.innerText.toLowerCase() || "";
        if (title.includes(query) || tags.includes(query)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  }
});

// Tag filter buttons
function filterBlogs(tag) {
  const cards = document.querySelectorAll('.blog-card');
  cards.forEach(card => {
    const tags = card.getAttribute('data-tags')?.toLowerCase() || "";
    if (tag === 'all' || tags.includes(tag)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Optional: Dynamically update announcement message
function updateAnnouncement(message) {
  const ann = document.getElementById("announcement-text");
  if (ann) ann.innerText = message;
}

// Example usage:
// updateAnnouncement("No blog post today – exams ongoing 📝");
