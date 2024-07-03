// document
//   .getElementById("loginForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault(); // Mencegah formulir dikirimkan secara default

//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;

//     // Validasi sederhana (Anda dapat mengganti ini dengan validasi yang lebih kompleks)
//     if (username === "user" && password === "password") {
//       document.getElementById("loginStatus").innerText = "Login successful!";
//       // Alihkan ke halaman lain atau lakukan tindakan yang diinginkan
//     } else {
//       document.getElementById("loginStatus").innerText =
//         "Invalid username or password.";
//     }
//   });

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "user" && password === "password") {
      document.getElementById("loginStatus").innerText = "Login successful!";
      // Menyimpan status log in di localStorage
      localStorage.setItem("loggedIn", "true");
      // Alihkan ke halaman lain
      window.location.href = "dashboard.html";
      //   kosongkan field
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
    } else {
      document.getElementById("loginStatus").innerText =
        "Username atau password tidak valid.";
    }
  });
