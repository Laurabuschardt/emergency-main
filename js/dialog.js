/* nyhed 1 */
const btn_open = document.querySelector("#cta_open1");
const btn_close = document.querySelector("#close_btn");

btn_open.addEventListener("click", openModal);
btn_close.addEventListener("click", closeModal);

function openModal() {
  console.log("der er klikket");
  document.querySelector("#dialog1").classList.add("fadeIn");
  document.querySelector("#dialog1").classList.remove("rotateOut");
  document.querySelector("#dialog1").showModal();
  document.querySelector("#dialog1").classList.add("spinIn");

  document.querySelector("#dialog1").scrollTop = 0;
}

function closeModal() {
  document.querySelector("#dialog1").classList.remove("fadeIn");
  document.querySelector("#dialog1").classList.add("rotateOut");
  document.querySelector("#dialog1").classList.remove("spinIn");
}

document.querySelector("#dialog1").addEventListener(
  "animationend",
  () => {
    document.querySelector("#dialog1").close();
  },
  { once: true }
);

/* nyhed 2 */
let btn_open2 = document.querySelector("#cta_open2");
let btn_close2 = document.querySelector("#close_btn2");
let dialog2 = document.querySelector("#dialog2");

btn_open2.addEventListener("click", openModal2);
btn_close2.addEventListener("click", closeModal2);

function openModal2() {
  dialog2.classList.add("fadeIn");
  dialog2.classList.remove("rotateOut");
  dialog2.classList.add("spinIn");
  dialog2.showModal();

  dialog2.scrollTop = 0;
}

function closeModal2() {
  dialog2.classList.remove("fadeIn");
  dialog2.classList.add("rotateOut");
  dialog2.classList.remove("spinIn");

  dialog2.addEventListener("animationend", () => dialog2.close(), { once: true });
}

/* nyhed 3 */
let btn_open3 = document.querySelector("#cta_open3");
let btn_close3 = document.querySelector("#close_btn3");
let dialog3 = document.querySelector("#dialog3");

btn_open3.addEventListener("click", openModal3);
btn_close3.addEventListener("click", closeModal3);

function openModal3() {
  dialog3.classList.add("fadeIn");
  dialog3.classList.remove("rotateOut");
  dialog3.classList.add("spinIn");
  dialog3.showModal();

  dialog3.scrollTop = 0;
}

function closeModal3() {
  dialog3.classList.remove("fadeIn");
  dialog3.classList.add("rotateOut");
  dialog3.classList.remove("spinIn");

  dialog3.addEventListener("animationend", () => dialog3.close(), { once: true });
}
