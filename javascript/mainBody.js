let label = document.querySelector(".switch");
let isToggled = false;

label.onclick = () => {
    isToggled = !isToggled;
    document.body.style.setProperty("--bg-color", isToggled ? "#F5F7F8" : "#171717");
    document.body.style.setProperty("--text-color", isToggled ? "black" : "#CFCFCF");
};
