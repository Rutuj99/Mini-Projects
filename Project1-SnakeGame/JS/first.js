document.getElementById("start-game").addEventListener("click", function() {
    var username = document.getElementById("username").value;
    var nickname = document.getElementById("nickname").value;
    if (username.trim() === "" || nickname.trim() === "") {
        alert("Username and nickname cannot be empty!");
    } else {
        localStorage.setItem("name",username);
        document.getElementById("username").value=""
        document.getElementById("nickname").value=""
        window.location.href="Page2.html"
        
    }
});

document.getElementById("show-instructions").addEventListener("click", function() {
    document.getElementById("game-instructions").style.display = "block";
});

document.getElementById("close-instructions").addEventListener("click", function() {
    document.getElementById("game-instructions").style.display = "none";
});
