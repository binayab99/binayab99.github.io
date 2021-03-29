const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

// Select tab content item
function selectItem(e) {
  removeBorder();
  removeShow();
  this.classList.add("tab-border"); // Add border to current tab
  const tabContentItem = document.querySelector(`#${this.id}-content`); // Grab content item from DOM
  tabContentItem.classList.add("show"); // Add show class
}

// Removes border from all tabs
function removeBorder() {
  tabItems.forEach((item) => item.classList.remove("tab-border"));
}

function removeShow() {
  tabContentItems.forEach((item) => item.classList.remove("show"));
}
// Listen for tab click
tabItems.forEach((item) => item.addEventListener("click", selectItem));
