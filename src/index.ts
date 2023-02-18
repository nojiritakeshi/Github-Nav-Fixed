let set_position = 0;
window.addEventListener("scroll", () => {
  const header: HTMLDivElement | null = document.querySelector(
    "#repository-container-header"
  );
  const octHeader: HTMLDivElement | null = document.querySelector(
    ".octotree-view-header"
  );
  if (!header) return;
  if (window.scrollY > 166 && set_position > window.scrollY) {
    header.classList.remove("position-relative");
    header.style.position = "fixed";
    header.style.top = "0";
    header.style.zIndex = "33";
    header.style.width = octHeader ? "86%" : "100%";
  } else {
    header.classList.add("position-relative");
    header.style.position = "";
    header.style.top = "";
    header.style.zIndex = "";
    header.style.width = "";
  }
  set_position = window.scrollY;
});
