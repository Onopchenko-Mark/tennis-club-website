const team = [
  {
    name: "Joey",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets-prd.ignimgs.com%2F2020%2F09%2F15%2Famong-us-button-1600131255112.jpg&f=1&nofb=1&ipt=a7a6edf4c0a15f96f7f529eec23cdaca2ddbed0c4defba4dfcd559732adafcc5&ipo=images",
    email: "sample.email@utoronto.ca",
  },
  {
    name: "Mark",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets-prd.ignimgs.com%2F2020%2F09%2F15%2Famong-us-button-1600131255112.jpg&f=1&nofb=1&ipt=a7a6edf4c0a15f96f7f529eec23cdaca2ddbed0c4defba4dfcd559732adafcc5&ipo=images",
    email: "sample.email@utoronto.ca",
  },
  {
    name: "Malcolm",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets-prd.ignimgs.com%2F2020%2F09%2F15%2Famong-us-button-1600131255112.jpg&f=1&nofb=1&ipt=a7a6edf4c0a15f96f7f529eec23cdaca2ddbed0c4defba4dfcd559732adafcc5&ipo=images",
    email: "sample.email@utoronto.ca",
  },
  {
    name: "Hailey",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets-prd.ignimgs.com%2F2020%2F09%2F15%2Famong-us-button-1600131255112.jpg&f=1&nofb=1&ipt=a7a6edf4c0a15f96f7f529eec23cdaca2ddbed0c4defba4dfcd559732adafcc5&ipo=images",
    email: "sample.email@utoronto.ca",
  },
  {
    name: "Anna",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets-prd.ignimgs.com%2F2020%2F09%2F15%2Famong-us-button-1600131255112.jpg&f=1&nofb=1&ipt=a7a6edf4c0a15f96f7f529eec23cdaca2ddbed0c4defba4dfcd559732adafcc5&ipo=images",
    email: "sample.email@utoronto.ca",
  },
  {
    name: "Sam",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets-prd.ignimgs.com%2F2020%2F09%2F15%2Famong-us-button-1600131255112.jpg&f=1&nofb=1&ipt=a7a6edf4c0a15f96f7f529eec23cdaca2ddbed0c4defba4dfcd559732adafcc5&ipo=images",
    email: "sample.email@utoronto.ca",
  },
];

const teamTable = document.querySelector(".team");
let teamTableText = "";
team.forEach((member) => {
  teamTableText += `
      <div class="team__card">
        <div class="team__card-inner">
          <div class="team__card-face container">
            <h3 class="team__name">${member.name}</h3>
            <div class="team__profile-picture-container">
              <img
                src="${member.image}"
                alt="${member.name} profile picture"
                class="team__profile-picture"
              />
            </div>
            <button class="team__contact-btn">Contact</button>
          </div>
          <div class="team__card-face container card-face--back">
            <div class="team__card-back-content">
              <h3 class="team__card-back-header">Contact Me</h3>
              <h3 class="team__name">${member.name}</h3>
              <div class="team__contact-info-container">
                <div class="team__website-row--copy" data-email="${member.email}">
                  <img
                    src="../img/general/copy-icon.webp"
                    alt="copy icon"
                    class="icon"
                    width="30px"
                    height="30px"
                  />
                  <p class="text--small">Copy Email</p>
                </div>
                <a href="mailto:${member.email}">
                  <div class="team__website-row--email">
                    <img
                      src="../img/general/mail-icon.webp"
                      alt="mail icon"
                      class="icon"
                      width="30px"
                      height="30px"
                    />
                    <p class="text--small">Send Email</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      `;
});
teamTable.innerHTML += teamTableText;
document
  .querySelectorAll(".team__card-inner")
  .forEach((card) =>
    card.addEventListener("click", () => card.classList.toggle("is-flipped"))
  );

// Allows for copying of email on click
document.querySelectorAll(".team__website-row--copy").forEach((button) => {
  button.addEventListener("click", (evt) => {
    evt.stopPropagation();
    const img = button.querySelector(":scope > img");
    const text = button.querySelector(":scope > p");
    navigator.clipboard.writeText(button.dataset.email);

    const originalBackground = button.style["background-image"];
    const originalImg = img.src;
    const originalText = text.innerText;

    button.style["background-image"] = "var(--ACCENT-COLOR-GRADIENT)";
    img.src =
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcreazilla-store.fra1.digitaloceanspaces.com%2Femojis%2F47298%2Fcheck-mark-button-emoji-clipart-md.png&f=1&nofb=1&ipt=80122341395431cca881c6d289ca40cf8dd792cdc02b97150810bfa6680d260f&ipo=images";
    text.innerText = "Copied!";

    setTimeout(() => {
      button.style["background-image"] = originalBackground;
      img.src = originalImg;
      text.innerHTML = originalText;
    }, 1000);
  });
});

document.querySelectorAll(".team__website-row--email").forEach((button) => {
  button.addEventListener("click", (evt) => {
    evt.stopPropagation();
  });
});
