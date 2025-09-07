/* password visibility click */
export function initPasswordToggle({ pwdInput, toggleBtn, toggleIcon }) {
  if (!pwdInput || !toggleBtn || !toggleIcon) return;

  const onIcon = "./panda_logimg/btn_visibility_off_24px.svg";
  const offIcon = "./panda_logimg/btn_visibility_off_24px.svg";

  toggleBtn.addEventListener("click", () => {
    const showing = pwdInput.type === "text";

    pwdInput.type = showing ? "password" : "text";

    toggleIcon.src = showing ? offIcon : onIcon;

    toggleBtn.setAttribute(
      "aria-label",
      showing ? "비밀번호 표시" : "비밀번호 숨기기"
    );
  });
}
