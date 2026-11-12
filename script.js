
document.addEventListener("DOMContentLoaded", function() {

    const footer = document.querySelector("footer p");

    if (footer) {
        const currentYear = new Date().getFullYear();

        footer.textContent = "© " + currentYear +
            " Kanika | All Rights Reserved";
    }

});
