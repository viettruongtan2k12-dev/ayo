function login() {
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");
    let linkBox = document.getElementById("linkBox");

    if (password === "123") {
        message.innerHTML = "✅ Đăng nhập thành công!";
        message.style.color = "green";

        linkBox.style.display = "block";
    } else {
        message.innerHTML = "❌ Sai mật khẩu!";
        message.style.color = "red";

        linkBox.style.display = "none";
    }
}

function goToLink() {
    window.location.href = "https://vnsextop1.com/";
}