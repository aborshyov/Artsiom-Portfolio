const nav = document.querySelector(".nav");
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#nav-links");
const mobile = window.matchMedia("(max-width: 760px)");

if (nav && menuButton && navLinks) {
  nav.classList.add("is-enhanced");
  menuButton.hidden = false;
  const closeMenu = (restoreFocus = false) => {
    navLinks.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.querySelector("span").textContent = "Menu";
    if (restoreFocus) menuButton.focus();
  };
  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") !== "true";
    navLinks.classList.toggle("is-open", open);
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.querySelector("span").textContent = open ? "Close" : "Menu";
  });
  navLinks.addEventListener("click", (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link || !mobile.matches) return;
    closeMenu();
    const destination = document.querySelector(link.getAttribute("href"));
    if (destination) {
      destination.setAttribute("tabindex", "-1");
      destination.focus({ preventScroll: true });
      destination.addEventListener(
        "blur",
        () => destination.removeAttribute("tabindex"),
        { once: true },
      );
    }
  });
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      menuButton.getAttribute("aria-expanded") === "true"
    )
      closeMenu(true);
  });
  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target)) closeMenu();
  });
  mobile.addEventListener("change", () => {
    const hiddenLinkHasFocus =
      mobile.matches && navLinks.contains(document.activeElement);
    const hiddenToggleHasFocus =
      !mobile.matches && document.activeElement === menuButton;
    closeMenu(hiddenLinkHasFocus);
    if (hiddenToggleHasFocus) nav.querySelector(".brand").focus();
  });
}

const copyButton = document.querySelector(".copy-email");
const copyStatus = document.querySelector(".copy-status");
let copyReset;
if (copyButton && copyStatus && navigator.clipboard && window.isSecureContext) {
  copyButton.hidden = false;
  copyButton.addEventListener("click", async () => {
    clearTimeout(copyReset);
    copyStatus.textContent = "";
    try {
      await navigator.clipboard.writeText("borschev.artem@gmail.com");
      copyStatus.textContent = "Email address copied.";
    } catch {
      copyStatus.textContent =
        "Please select and copy the email address above.";
    }
    copyReset = setTimeout(() => {
      copyStatus.textContent = "";
    }, 6000);
  });
}
