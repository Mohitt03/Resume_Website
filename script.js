// Fade-in animation for sections on scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-visible");
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach(sec => sec.classList.add("fade-hidden"));
sections.forEach(sec => observer.observe(sec));


const cursor = document.querySelector(".cursor-glow");

function isMobile() {
  return window.innerWidth <= 768;
}

document.addEventListener("mousemove", (e) => {
  if (!isMobile()) {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  }
});

// Click glow animation desktop
document.addEventListener("mousedown", () => {
  if (!isMobile()) {
    cursor.classList.add("cursor-click-animate");
    setTimeout(() => cursor.classList.remove("cursor-click-animate"), 400);
  }
});

// Mobile burst glow on tap
document.addEventListener("click", (e) => {
  if (isMobile()) {
    const glow = document.createElement("div");
    glow.classList.add("click-glow");
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
    document.body.appendChild(glow);

    setTimeout(() => glow.remove(), 500);
  }
});

const projectContainer = document.getElementById("project-list");

projects.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("sq", "bg-black");

    card.innerHTML = `
        <div class="project-inner-container">
            <a href="project.html?id=${p.id}" target="_blank">
                <img class="project1" src="${p.image}" alt="${p.title}">
            </a>
        </div>
    `;

    projectContainer.appendChild(card);
});
