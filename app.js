function toggleSection() {
  var skills = document.getElementById("skills");
  var projetos = document.getElementById("projetos");

  if (skills.classList.contains("hide")) {
    skills.classList.remove("hide");
    projetos.classList.add("hide");
  } else {
    skills.classList.add("hide");
    projetos.classList.remove("hide");
  }
}
