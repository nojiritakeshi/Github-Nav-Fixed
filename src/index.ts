let set_position = 0;
window.addEventListener("scroll", () => {
  const header: HTMLDivElement | null = document.querySelector(
    "#repository-container-header"
  );
  const pullReqTab: HTMLDivElement | null = document.querySelector(
    '[aria-label="Pull request tabs"]'
  );
  if (!header) return;
  if (window.scrollY > 166 && set_position > window.scrollY) {
    header.classList.remove("position-relative");
    header.style.position = "fixed";
    header.style.top = "0";
    header.style.zIndex = "10";
    header.style.width = "100%";
  } else {
    header.classList.add("position-relative");
    header.style.position = "";
    header.style.top = "";
    header.style.zIndex = "";
    header.style.width = "";
  }
  set_position = window.scrollY;
});
