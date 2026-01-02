const toggle = document.getElementById("dark-toggle");

if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
}
