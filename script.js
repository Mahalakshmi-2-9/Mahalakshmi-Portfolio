document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.getElementById("nav-links");

  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});
function toggleDetails(event) {
  event.preventDefault();
  const btn = event.target;
  const details = btn.nextElementSibling;

  if (details.style.display === "none" || details.style.display === "") {
    details.style.display = "block";
    btn.textContent = "Hide Details ↑";
  } else {
    details.style.display = "none";
    btn.textContent = "More Details →";
  }
}


