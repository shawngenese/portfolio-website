const name = document.querySelector("#full-name");
const email = document.querySelector("#email-address");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const form = document.querySelector(".form-card").addEventListener("submit", () => {
  setTimeout(() => {
    name.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
  }, 2000);
});