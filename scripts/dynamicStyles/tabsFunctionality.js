export default function () {
  const tabsContainers = Array.from(
    document.getElementsByClassName("tabs-container")
  );

  tabsContainers.forEach((tabsContainer) => {
    // selecting the correct tab initially:
    const tabNum = tabsContainer
      .querySelector(".tabs")
      .querySelector(".tab-active").dataset.tabnum;

    const tabsContent = tabsContainer.querySelector(".tabs-content");

    // hiding the non-active tab(s) contents
    Array.from(tabsContent.querySelectorAll("[data-tabnum]")).forEach((elem) =>
      elem.classList.add("hidden")
    );

    tabsContent
      .querySelector(`[data-tabnum="${tabNum}"]`)
      .classList.remove("hidden");

    // implementing the tab-change functionality
    tabsContainer.addEventListener("click", (e) => {
      const clickTarget = e.target;

      // if the user has clicked on a tab
      if (
        clickTarget.tagName == "LI" &&
        clickTarget.parentElement.classList.contains("tabs")
      ) {
        // removing the tab-active class from the currently active tab
        document.querySelector(".tab-active").classList.remove("tab-active");

        // setting the new active tab
        clickTarget.classList.add("tab-active");

        // changing the content according to the active tab
        const tabNum = clickTarget.dataset.tabnum;

        const tabsContent = tabsContainer.querySelector(".tabs-content");

        Array.from(tabsContent.querySelectorAll("[data-tabnum]")).forEach(
          (elem) => elem.classList.add("hidden")
        );

        tabsContent
          .querySelector(`[data-tabnum="${tabNum}"]`)
          .classList.remove("hidden");
      }
    });
  });
}
