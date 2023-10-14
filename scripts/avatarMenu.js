const navMenu = document.querySelector(".menu");
const usernameArray = ["maxblagun", "amyrobson", "ramsesmiron", "juliusomo"];
const defaultNavElements = ``;
const menu = document.querySelector(".menu-contents");
const avatarIcons = document.querySelector(".avatar-icons");

// Menu toggle
menu.style.display = "none";

function displayToggle() {
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}

navMenu.addEventListener("click", () => {
  displayToggle();
});

// Choose avatar
function createMenuAvatarElement(name) {
  const avatar = document.createElement("a");
  avatar.href = "#";
  avatar.classList.add("menu-item");
  avatar.id = name;
  avatar.innerHTML = `
        <picture>
            <source srcset="../images/avatars/image-${name}.webp" type="image/webp">
            <img class="user-avatar menu-avatar" src="../images/avatars/image-${name}.png" alt="User Avatar">
        </picture>
        <p>${name}</p>
    `;

  return avatar;
}

window.addEventListener("load", () => {
  avatarIcons.innerHTML = defaultNavElements;

  usernameArray.forEach((username) => {
    avatarIcons.appendChild(createMenuAvatarElement(username));
  });
});
