"use strict";
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

const handleTabClick = (e) => {
  const selectedTab = e.target.getAttribute("data-tab");
  const selectedContent = document.getElementById(`${selectedTab}-content`);

  tabs.forEach((tab) => {
    tab.classList.remove("is_active");
  });

  tabContents.forEach((content) => {
    content.classList.remove("is_active");
  });

  e.target.classList.add("is_active");

  selectedContent.classList.add("is_active");
};

tabs.forEach((tab) => {
  tab.addEventListener("click", handleTabClick);
});
