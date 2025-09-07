import { initPasswordToggle } from "./password-toggle.js";
import {
  getEmailError,
  showEmailError,
  getPwError,
  showPasswordError,
} from "./Validation.js";
import { USER_DATA, authenticate } from "./auth.js";
import { closeErrorModal, openErrorModal } from "./modal.js";

const pwdInput = document.getElementById("password");
const toggleBtn = document.querySelector(".toggle-password");
const toggleIcon = document.querySelector(".toggle-password-icon");
const emailInput = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const passWordError = document.querySelector("#password-error");
const loginBtn = document.querySelector(".login-btn");
const form = document.querySelector(".container-form");

initPasswordToggle({ pwdInput, toggleBtn, toggleIcon });

//email blur처리
emailInput.addEventListener("blur", () => {
  const errorMessage = getEmailError(emailInput.value);
  showEmailError(errorMessage, {
    emailInputElement: emailInput,
    emailErrorElement: emailError,
  });
});

//Pwd blur처리
pwdInput.addEventListener("blur", () => {
  const errorMessage = getPwError(pwdInput.value);
  showPasswordError(errorMessage, {
    passwordInputElement: pwdInput,
    passwordErrorElement: passWordError,
  });
});

emailInput.addEventListener("input", updateLoginButtonState); //input에 입력되면 실행
pwdInput.addEventListener("input", updateLoginButtonState);

function updateLoginButtonState() {
  const emailMsg = getEmailError(emailInput.value);
  const pwdMsg = getPwError(pwdInput.value);

  if (
    emailMsg ||
    pwdMsg ||
    !emailInput.value.trim() ||
    !pwdInput.value.trim()
  ) {
    loginBtn.disabled = true;
  } else {
    loginBtn.disabled = false;
  }
}

//form
form.addEventListener("submit", (e) => {
  e.preventDefault(); //초기화

  const emailMsg = getEmailError(emailInput.value);
  const pwdMsg = getPwError(pwdInput.value);

  if (emailMsg || pwdMsg) {
    return;
  }

  //authenticate
  const result = authenticate({
    email: emailInput.value.trim(),
    password: pwdInput.value,
  });

  // 인증 실패 시 모달로 안내
  if (!result.ok) {
    if (result.reason === "email_not_found") {
      openErrorModal("존재하지 않는 이메일입니다.");
    } else if (result.reason === "password_mismatch") {
      openErrorModal("비밀번호가 일치하지 않습니다.");
    }
    return;
  }

  location.href = "../items/items.html";
});

updateLoginButtonState();
