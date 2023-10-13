const navMenu = document.querySelector(".menu");
const usernameArray = ["maxblagun", "amyrobson", "ramsesmiron", "juliusomo"];
const defaultNavElements = `
    <input type="checkbox" class="menu-open" name="menu-open" id="menu-open" />
    <label class="menu-open-button" for="menu-open">
        <span class="lines line-1"></span>
        <span class="lines line-2"></span>
    </label>
`;
const menu = document.querySelector(".menu-contents");

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
    `;

  avatar.addEventListener("click", () => {
    // Remove the clicked username from the array
    const index = usernameArray.indexOf(name);
    if (index > -1) {
      usernameArray.splice(index, 1);
    }

    // Add the clicked username to the beginning of the array
    usernameArray.unshift(name);

    // Empty all avatar elements in navMenu
    navMenu.innerHTML = defaultNavElements;

    // Re-create the avatars in the updated order
    usernameArray.forEach((username) => {
      navMenu.appendChild(createMenuAvatarElement(username));
    });
  });

  return avatar;
}

window.addEventListener("load", () => {
  navMenu.innerHTML = defaultNavElements;

  usernameArray.forEach((username) => {
    navMenu.appendChild(createMenuAvatarElement(username));
  });
});
