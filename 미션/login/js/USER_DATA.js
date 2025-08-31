// // === 선택자 ===
// const form = document.querySelector(".container-form");
// const email = document.querySelector("#email");
// const password = document.querySelector("#password");
// const emailError = document.querySelector("#email-error");
// const passwordError = document.querySelector("#password-error");
// const loginBtn = document.querySelector(".login-btn");

// // === 규칙 ===
// const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// // === (선택 1인 경우) USER_DATA를 여기에 둡니다 ===
// const USER_DATA = [
//   { email: "codeit1@codeit.com", password: "codeit101!" },
//   { email: "codeit2@codeit.com", password: "codeit202!" },
//   { email: "codeit3@codeit.com", password: "codeit303!" },
//   { email: "codeit4@codeit.com", password: "codeit404!" },
//   { email: "codeit5@codeit.com", password: "codeit505!" },
//   { email: "codeit6@codeit.com", password: "codeit606!" },
// ];

// // 에러 메시지 생성 함수
// const getEmailError = (v) => {
//   const value = v.trim();
//   if (!value) return "이메일을 입력해주세요.";
//   if (!EMAIL_RE.test(value)) return "잘못된 이메일 형식입니다";
//   return "";
// };

// const getPasswordError = (v) => {
//   if (!v) return "비밀번호를 입력해주세요.";
//   if (v.length < 8) return "비밀번호를 8자 이상 입력해주세요.";
//   return "";
// };

// // 에러 표시/해제 유틸
// const showEmailError = (msg) => {
//   emailError.textContent = msg;
//   email.classList.toggle("invalid", !!msg);
// };

// const showPasswordError = (msg) => {
//   passwordError.textContent = msg;
//   password.classList.toggle("invalid", !!msg);
// };

// // 버튼 상태 갱신
// const updateButtonState = () => {
//   const eMsg = getEmailError(email.value);
//   const pMsg = getPasswordError(password.value);
//   const hasError = !!eMsg || !!pMsg;
//   const hasValues = !!email.value.trim() && !!password.value;
//   loginBtn.disabled = hasError || !hasValues;
// };

// // ---- 이벤트 바인딩 ----
// // blur: 에러 노출
// email.addEventListener("blur", () => {
//   showEmailError(getEmailError(email.value));
//   updateButtonState();
// });
// password.addEventListener("blur", () => {
//   showPasswordError(getPasswordError(password.value));
//   updateButtonState();
// });
// // input: 버튼 on/off만
// email.addEventListener("input", updateButtonState);
// password.addEventListener("input", updateButtonState);

// // 클릭: 최종 검사 + USER_DATA 매칭
// loginBtn.addEventListener("click", () => {
//   if (loginBtn.disabled) return;

//   const eMsg = getEmailError(email.value);
//   const pMsg = getPasswordError(password.value);
//   if (eMsg || pMsg) return; // 더블 체크

//   const emailValue = email.value.trim();
//   const pwValue = password.value.trim();

//   const user = USER_DATA.find((u) => u.email === emailValue);
//   if (!user || user.password !== pwValue) {
//     alert("비밀번호가 일치하지 않습니다.");
//     return;
//   }

//   // 성공 시 이동
//   // alert("로그인 성공!");
//   location.href = "../items/items.html"; // 프로젝트 경로에 맞게
// });

// // 초기 상태 반영
// updateButtonState();
