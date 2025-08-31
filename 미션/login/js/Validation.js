// === 선택자 ===
const form = document.querySelector(".container-form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const emailError = document.querySelector("#email-error");
const passwordError = document.querySelector("#password-error");
const loginBtn = document.querySelector(".login-btn");

// === 규칙 ===
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// 에러 메시지 생성 함수
const getEmailError = (v) => {
  const value = v.trim();
  if (!value) return "이메일을 입력해주세요.";
  if (!EMAIL_RE.test(value)) return "잘못된 이메일 형식입니다";
  return "";
};

const getPasswordError = (v) => {
  if (!v) return "비밀번호를 입력해주세요.";
  if (v.length < 8) return "비밀번호를 8자 이상 입력해주세요.";
  return "";
};

// 에러 표시/해제 유틸
const showEmailError = (msg) => {
  emailError.textContent = msg;
  email.classList.toggle("invalid", !!msg);
};

const showPasswordError = (msg) => {
  passwordError.textContent = msg;
  password.classList.toggle("invalid", !!msg);
};

// 버튼 상태 갱신: 에러가 없고 값이 있으면 활성화
const updateButtonState = () => {
  const eMsg = getEmailError(email.value);
  const pMsg = getPasswordError(password.value);
  const hasError = !!eMsg || !!pMsg;
  const hasValues = !!email.value.trim() && !!password.value;
  loginBtn.disabled = hasError || !hasValues;
};

// ---- 이벤트 바인딩 ----

// 1) blur 시: 에러 메시지 + 빨간 테두리 표시
email.addEventListener("blur", () => {
  showEmailError(getEmailError(email.value));
  updateButtonState();
});

password.addEventListener("blur", () => {
  showPasswordError(getPasswordError(password.value));
  updateButtonState();
});

// 2) input 시: 실시간으로 버튼 on/off만 (에러는 blur 때만 노출)
email.addEventListener("input", () => {
  updateButtonState();
});
password.addEventListener("input", () => {
  updateButtonState();
});

// 3) 활성화된 버튼 클릭 시 이동
loginBtn.addEventListener("click", () => {
  if (loginBtn.disabled) return; // 안전장치
  // 최종 방어: 한번 더 체크(선택)
  const eMsg = getEmailError(email.value);
  const pMsg = getPasswordError(password.value);
  if (eMsg || pMsg) return;

  // 요구사항: /items 로 이동
  location.href = "/items";
});

// 최초 상태 반영
updateButtonState();
