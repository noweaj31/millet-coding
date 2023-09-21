"use strict";

const accordionItems = document.querySelectorAll(".accordion-area");

accordionItems.forEach((item) => {
  const accordionButton = item.querySelector(".gnb-accordion-btn");
  const accordionContent = item.querySelector(".gnb-btn-contents");

  accordionButton.addEventListener("click", () => {
    const expanded = accordionButton.getAttribute("aria-expanded") === "true";

    accordionButton.setAttribute("aria-expanded", !expanded);

    if (expanded) {
      accordionContent.setAttribute("hidden", "true");
    } else {
      accordionContent.removeAttribute("hidden");
    }
  });
});
