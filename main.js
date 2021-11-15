let nowSectionId = 1;
let navbarAnchor = document.querySelectorAll("div.navbar-container ul li a");

// deal with the change of navbar when clicking
navbarAnchor.forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    if (e.target.id != nowSectionId) {
      e.target.classList.add("active");
      nowSectionId = e.target.id;
      removeActive(nowSectionId);
    }
  });
});

// deal with the change of navbar when scrolling
window.addEventListener("scroll", (e) => {
  let inViewportList = [];
  document.querySelectorAll("section").forEach((sec) => {
    if (
      (sec.id !== "navbar") &
      (sec.id !== "profile") &
      (sec.id !== "footer")
    ) {
      inViewportList.push(isInViewport(sec));
    }
  });
  let setActive = inViewportList.findIndex((el) => el === true);
  document
    .querySelectorAll("div.navbar-container ul li a")
    .forEach((anchor) => {
      if (anchor.id == setActive + 1) {
        anchor.classList.add("active");
      }
    });
  nowSectionId = setActive + 1;
  removeActive(nowSectionId);
});

function removeActive(nowSectionId) {
  document
    .querySelectorAll("div.navbar-container ul li a")
    .forEach((otherAnchor) => {
      if (otherAnchor.id != nowSectionId) {
        otherAnchor.classList.remove("active");
      }
    });
}

function isInViewport(sec) {
  let rect = sec.getBoundingClientRect();
  if (rect.bottom - 60 > 0) {
    return true;
  }
  return false;
}
