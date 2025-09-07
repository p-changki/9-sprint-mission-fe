/* password visibility click */
export function initPasswordToggle({
  pwdInput,
  toggleBtn,
  toggleIcon,
  onIcon,
  offIcon,
}) {
  if (!pwdInput || !toggleBtn || !toggleIcon) return;

  // 페이지에서 넘기면 그걸 쓰고, 안 넘기면 기본값 사용
  const ON = onIcon ?? "./panda_logimg/btn_visibility_on_24px.svg";
  const OFF = offIcon ?? "./panda_logimg/btn_visibility_off_24px.svg";

  // 초기 상태: 비밀번호 숨김(OFF 아이콘)
  toggleIcon.src = OFF;
  toggleBtn.setAttribute("aria-label", "비밀번호 표시");

  toggleBtn.addEventListener("click", () => {
    const showing = pwdInput.type === "text";

    pwdInput.type = showing ? "password" : "text";
    toggleIcon.src = showing ? OFF : ON;

    toggleBtn.setAttribute(
      "aria-label",
      showing ? "비밀번호 표시" : "비밀번호 숨기기"
    );
  });
}
