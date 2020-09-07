const toggle = document.getElementById("theme-switcher");

if (
  !localStorage.getItem("theme") &&
  window.matchMedia("(prefers-color-scheme: dark)")
) {
  localStorage.setItem("theme", "dark");
}

if (localStorage.getItem("theme") === "dark") {
  toggle.checked = true;
}
document.body.classList.add(
  `theme--${localStorage.getItem("theme") === "dark" ? "dark" : "light"}`
);

function darkTheme(dark) {
  localStorage.setItem("theme", dark ? "dark" : "light");
  document.body.classList.add("theme--" + (dark ? "dark" : "light"));
  document.body.classList.add("theme-transition");
  setTimeout(function () {
    document.body.classList.remove("theme-transition");
  }, 500);
}

toggle.addEventListener("change", function (evt) {
  document.body.classList.remove("theme--dark");
  document.body.classList.remove("theme--light");
  darkTheme(evt.target.checked === true);
});
