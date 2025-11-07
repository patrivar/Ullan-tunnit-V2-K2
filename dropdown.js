let drop = document.querySelector(".dropbtn");

drop.addEventListener("click", dropdownToggle);

function dropdownToggle() {
  document.getElementById("drop").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    const dropdown = document.getElementById("drop");
    if (dropdown.classList.contains("show")) {
      dropdown.classList.remove("show");
    }
  }
};
