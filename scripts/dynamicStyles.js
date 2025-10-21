export const mainInpAnim = (mainInp, detailsInp, addBtn) => {
  // Make the add button visible once the main input is focused
  mainInp.addEventListener("focus", () => {
    mainInp.parentElement.classList.add("expanded-main-inp-container");
    detailsInp.parentElement.style.height = "20px";
    addBtn.style.height = "20px";
  });

  // Make the add button vanish (collapse the main input container) when user clicks out of the main input container
  document.body.addEventListener("click", (e) => {
    if (
      e.target != mainInp.parentElement &&
      !e.target.closest("#main-inp-container")
    ) {
      addBtn.style.height = "0";
      detailsInp.parentElement.style.height = "0";
      mainInp.parentElement.classList.remove("expanded-main-inp-container");
    }
  });
};
