const form = document.querySelector("#main-form");

// OUTPUT FELTER
const nameOutput = document.querySelector(".fornavn_output");
const efternameOutput = document.querySelector(".eftername_output");
const emailOutput = document.querySelector(".e-mail_output");
const rangeOutput = document.querySelector(".skala_output");
const radioOutput = document.querySelector(".radio_output");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const data = new FormData(form);

  nameOutput.textContent = data.get("fornavn");
  efternameOutput.textContent = data.get("efternavn");
  emailOutput.textContent = data.get("email");
  rangeOutput.textContent = data.get("skala");
  radioOutput.textContent = data.get("radio");

  form.reset();
}
