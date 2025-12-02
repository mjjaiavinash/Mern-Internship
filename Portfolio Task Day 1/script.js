// THEME TOGGLE
document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("themeToggle");

    if (toggleBtn) {
        // Toggle class and update available elements (icon may be absent)
        toggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("light-mode");

            const textSpan = toggleBtn.querySelector("span.label");

            if (document.body.classList.contains("light-mode")) {
                if (textSpan) textSpan.textContent = "Light";
            } else {
                if (textSpan) textSpan.textContent = "Dark";
            }
        });
    }

    // PROFILE IMAGE UPLOAD
    const profileImage = document.getElementById("profileImage");
    if (profileImage) {
        profileImage.addEventListener("click", enableImageUpload);
    }

    // CHATBOT BUTTON (OPEN REAL CHATBOT)
    const chatBtn = document.getElementById("chatbotBtn");
    if (chatBtn) {
        chatBtn.addEventListener("click", () => {
            window.open(
                "https://chat.openai.com/g/g-vO-pGhR6Lra35D4A8putj",
                "_blank"
            );
        });
    }
});

// IMAGE UPLOAD FUNCTION
function enableImageUpload() {
    const img = document.getElementById("profileImage");
    if (!img) return;

    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";

    input.addEventListener("change", function () {
        const file = this.files[0];
        if (file) {
            img.style.backgroundImage = `url(${URL.createObjectURL(file)})`;
        }
    });

    input.click();
}
