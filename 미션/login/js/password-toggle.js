/* password img visibility click */
document.addEventListener("DOMContentLoaded", () => {
  const pwdInput = document.getElementById("password");
  const toggleBtn = document.querySelector(".toggle-password");
  const icon = toggleBtn?.querySelector("img");
  if (!pwdInput || !toggleBtn || !icon) return;

  const onIcon = "./panda_logimg/btn_visibility_on_24px.svg";
  const offIcon = "./panda_logimg/btn_visibility_off_24px.svg";

  toggleBtn.addEventListener("click", () => {
    const showing = pwdInput.type === "text";
    pwdInput.type = showing ? "password" : "text";
    icon.src = showing ? offIcon : onIcon;
    toggleBtn.setAttribute(
      "aria-label",
      showing ? "비밀번호 표시" : "비밀번호 숨기기"
    );
  });
});
