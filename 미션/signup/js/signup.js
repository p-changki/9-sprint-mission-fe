// 비밀번호 표시/숨기기 토글 유틸
import { initPasswordToggle } from "../../login/js/password-toggle.js";
import {
  getEmailError,
  getNicknameError,
  getPwError,
  getPasswordConfirmError,
  showEmailError,
  showNicknameError,
  showPasswordError,
  showPasswordConfirmError,
} from "../../login/js/Validation.js";
// 오류 모달 제어(open/close)
import { openErrorModal, closeErrorModal } from "../../login/js/modal.js";

//  비밀번호 입력/토글 요소 참조
const passwordInput = document.querySelector("#password");
const pwdToggleBtn = document.querySelector(
  ".content-C .password-toggle-button"
);
const pwdToggleIcon = pwdToggleBtn?.querySelector("img");

//  비밀번호 확인 입력/토글 요소 참조
const passwordConfirmInput = document.querySelector("#password-confirm");
const confirmToggleBtn = document.querySelector(
  ".content-D .password-toggle-button"
);
const confirmToggleIcon = confirmToggleBtn?.querySelector("img");

// [Codex] 폼 및 각 입력/에러 표시 노드 참조
const form = document.querySelector(".signup-form");
const emailInput = document.querySelector("#email");
const nicknameInput = document.querySelector("#nickname");

const emailError = document.querySelector("#email-error");
const nicknameError = document.querySelector("#nickname-error");
const passwordError = document.querySelector("#password-error");
const passwordConfirmError = document.querySelector("#password-confirm-error");

const signupBtn = document.querySelector(".signup-blt"); // [Codex] 제출 버튼 (클래스 변경 시 주의)

// [Codex] 비밀번호 토글 초기화 (비밀번호)
initPasswordToggle({
  pwdInput: passwordInput,
  toggleBtn: pwdToggleBtn,
  toggleIcon: pwdToggleIcon,
  onIcon: "../signup/panda_logimg/btn_visibility_on_24px.svg",
  offIcon: "../signup/panda_logimg/btn_visibility_on_24px.svg",
});

// [Codex] 비밀번호 토글 초기화 (비밀번호 확인)
initPasswordToggle({
  pwdInput: passwordConfirmInput,
  toggleBtn: confirmToggleBtn,
  toggleIcon: confirmToggleIcon,
  onIcon: "../signup/panda_logimg/btn_visibility_on_24px.svg",
  offIcon: "../signup/panda_logimg/btn_visibility_on_24px.svg",
});

// [Codex] 버튼 활성화 조건 갱신: 에러 없음 && 값 모두 존재
function updateSignUpButtonState() {
  const e = getEmailError(emailInput.value);
  const n = getNicknameError(nicknameInput.value);
  const p = getPwError(passwordInput.value);
  const pc = getPasswordConfirmError(
    passwordInput.value,
    passwordConfirmInput.value
  );

  const hasError = !!(e || n || p || pc);
  const hasValues = !!(
    emailInput.value.trim() &&
    nicknameInput.value.trim() &&
    passwordInput.value &&
    passwordConfirmInput.value
  );

  signupBtn.disabled = hasError || !hasValues; // [Codex] 하나라도 에러/미입력 시 비활성화
}
updateSignUpButtonState(); // [Codex] 로드 시 초기 비활성화 상태 보장

// [Codex] blur 시 각 필드 유효성 검사 및 에러 메시지/스타일 반영
emailInput.addEventListener("blur", () => {
  const msg = getEmailError(emailInput.value);
  showEmailError(msg, {
    emailInputElement: emailInput,
    emailErrorElement: emailError,
  });
  updateSignUpButtonState();
});

nicknameInput.addEventListener("blur", () => {
  const msg = getNicknameError(nicknameInput.value);
  showNicknameError(msg, {
    nicknameInputElement: nicknameInput,
    nicknameErrorElement: nicknameError,
  });
  updateSignUpButtonState();
});

passwordInput.addEventListener("blur", () => {
  const msg = getPwError(passwordInput.value);
  showPasswordError(msg, {
    passwordInputElement: passwordInput,
    passwordErrorElement: passwordError,
  });
  updateSignUpButtonState();
});

passwordConfirmInput.addEventListener("blur", () => {
  const msg = getPasswordConfirmError(
    passwordInput.value,
    passwordConfirmInput.value
  );
  showPasswordConfirmError(msg, {
    passwordConfirmInputElement: passwordConfirmInput,
    passwordConfirmErrorElement: passwordConfirmError,
  });
  updateSignUpButtonState();
});

// [Codex] 입력 중에도 실시간으로 버튼 활성화 조건 갱신
[emailInput, nicknameInput, passwordInput, passwordConfirmInput].forEach((el) =>
  el.addEventListener("input", updateSignUpButtonState)
);

// [Codex] 기존 더미 사용자 목록 (중복 이메일 체크용)
import { USER_DATA } from "../../login/js/auth.js";

// [Codex] 제출 시 최종 검증 → 중복 체크 → 성공 시 이동
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // 최종 재계산 후 표시
  const eMsg = getEmailError(emailInput.value);
  const nMsg = getNicknameError(nicknameInput.value);
  const pMsg = getPwError(passwordInput.value);
  const pcMsg = getPasswordConfirmError(
    passwordInput.value,
    passwordConfirmInput.value
  );

  showEmailError(eMsg, {
    emailInputElement: emailInput,
    emailErrorElement: emailError,
  });
  showNicknameError(nMsg, {
    nicknameInputElement: nicknameInput,
    nicknameErrorElement: nicknameError,
  });
  showPasswordError(pMsg, {
    passwordInputElement: passwordInput,
    passwordErrorElement: passwordError,
  });
  showPasswordConfirmError(pcMsg, {
    passwordConfirmInputElement: passwordConfirmInput,
    passwordConfirmErrorElement: passwordConfirmError,
  });

  if (eMsg || nMsg || pMsg || pcMsg) return; // [Codex] 유효성 에러가 있으면 제출 중단

  // 이메일 중복 체크
  const exists = USER_DATA.some((u) => u.email === emailInput.value.trim());
  if (exists) {
    openErrorModal("사용 중인 이메일입니다."); // [Codex] 모달로 오류 안내
    return;
  }

  alert("가입이 완료되었습니다."); // [Codex] 성공 안내
  location.href = "../../미션/login/login.html"; // [Codex] 로그인 페이지로 이동
});
