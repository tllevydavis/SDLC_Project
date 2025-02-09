document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("user-name")) {
        const username = localStorage.getItem("username") || "User";
        document.getElementById("user-name").textContent = username;
    }
});

function loginUser() {
    const username = document.getElementById("username").value;
    if (!username) {
        alert("Please enter a username.");
        return false;
    }
    localStorage.setItem("username", username);
    window.location.href = "welcome.html";
    return false;
}
