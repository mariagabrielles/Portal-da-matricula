const modal = document.getElementById("modal");
const gradeSelect = document.getElementById("gradeSelect");
const formTitle = document.getElementById("formTitle");
const success = document.getElementById("success");

function openEnrollment() {
  formTitle.textContent = "Inicie a matrícula";
  modal.classList.remove("hidden");
  success.classList.add("hidden");
}

function selectGrade(grade) {
  formTitle.textContent = "Matrícula — " + grade;
  gradeSelect.value = grade;
  modal.classList.remove("hidden");
  success.classList.add("hidden");
}

function closeEnrollment() {
  modal.classList.add("hidden");
}

function submitEnrollment(event) {
  event.preventDefault();
  success.classList.remove("hidden");
  event.target.reset();
  gradeSelect.value = "";
}

modal.addEventListener("click", (event) => {
  if (event.target === modal) closeEnrollment();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeEnrollment();
});
