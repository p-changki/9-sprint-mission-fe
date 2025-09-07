// 이메일 형식, 비밀번호 형식
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/;
const PW_RE =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]|\\:;"'<>,.?/`~]).{8,}$/;

//email err validation
export function getEmailError(value) {
  const trimmed = value.trim();

  if (!trimmed) {
    return "이메일을 입력해주세요";
  } else if (!EMAIL_RE.test(trimmed)) {
    return "잘못된 이메일 형식입니다"; //trimmedvalue"" 이면
  }
  return "";
}

//PW err validation

export function getPwError(value) {
  const trimmed = value.trim();

  if (!trimmed) {
    return "비밀번호를 입력해주세요.";
  }
  if (trimmed.length < 8) {
    return "비밀번호를 8자 이상 입력해주세요.";
  }
  if (!PW_RE.test(trimmed)) {
    return "비밀번호는 영문, 숫자, 특수문자를 모두 포함해야 합니다.";
  }
  return "";
}

//email err msg
export function showEmailError(eMsg, { emailInputElement, emailErrorElement }) {
  emailErrorElement.textContent = eMsg;
  emailInputElement.classList.toggle("error-border", !!eMsg);
}

//Pw err msg
export function showPasswordError(
  eMsg,
  { passwordInputElement, passwordErrorElement }
) {
  passwordErrorElement.textContent = eMsg;
  passwordInputElement.classList.toggle("error-border", !!eMsg);
}
