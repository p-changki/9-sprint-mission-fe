const modalTitle = document.getElementById("error-modal-title");
const modalCloseBtn = document.querySelector("[data-modal-close]");
const modalBackdropEl = document.querySelector("[data-modal-backdrop]");

// 열기
export function openErrorModal(message) {
  if (modalTitle) {
    modalTitle.textContent = message;
  }
  modalBackdropEl.hidden = false;
  modalCloseBtn.focus();
}

// 닫기
export function closeErrorModal() {
  modalBackdropEl.hidden = true; // 다시 숨기기
}

// 닫기 이벤트
if (modalBackdropEl && modalCloseBtn) {
  modalCloseBtn.addEventListener("click", closeErrorModal);

  modalBackdropEl.addEventListener("click", (e) => {
    if (e.target === modalBackdropEl) closeErrorModal();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modalBackdropEl.hidden) {
      closeErrorModal();
    }
  });
}
