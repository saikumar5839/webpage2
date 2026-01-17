const URL = "https://script.google.com/macros/s/AKfycbytLLqaHMNHlvIzIZOx-gfeUTp_D5QI4zWHFqM7mytltGkc5SB5wjkV7p8ur3PSkZQHJg/exec";

// ---------- SIGN UP ----------
function signup() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const msg = document.getElementById("msg");

  if (!email || !password) {
    msg.innerText = "Please fill all fields";
    return;
  }

  const formData = new URLSearchParams();
  formData.append("action", "signup");
  formData.append("email", email);
  formData.append("password", password);

  fetch(URL, {
    method: "POST",
    body: formData
  })
  .then(res => res.json())
  .then(data => {
    msg.innerText = data.message || "";
    if (data.success) {
      window.location.href = "login.html";
    }
  })
  .catch(err => {
    console.error(err);
    msg.innerText = "Network error";
  });
}

// ---------- LOGIN ----------
function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const msg = document.getElementById("msg");

  if (!email || !password) {
    msg.innerText = "Please fill all fields";
    return;
  }

  const formData = new URLSearchParams();
  formData.append("action", "login");
  formData.append("email", email);
  formData.append("password", password);

  fetch(URL, {
    method: "POST",
    body: formData
  })
  .then(res => res.json())

.then(data => {
  if (data.success) {
    msg.innerText = "Login successful!";
    setTimeout(() => {
      window.location.href = "index.html";
    }, 500);
  } else {
    msg.innerText = data.message || "Invalid credentials";
  }
})


  .catch(err => {
    console.error(err);
    msg.innerText = "Network error";
  });
}

// // --------------Forgot password ----------------------------------------------//


// function forgotPassword() {
//   const email = document.getElementById("email").value.trim();
//   const msg = document.getElementById("msg");

//   if (!email) {
//     msg.innerText = "Enter your email";
//     return;
//   }

//   const formData = new URLSearchParams();
//   formData.append("action", "forgot");
//   formData.append("email", email);

//   fetch(URL, { method: "POST", body: formData })
//     .then(res => res.json())
//     .then(data => {
//       if (data.success) {
//         msg.innerText = "Your password is: " + data.password;
//       } else {
//         msg.innerText = data.message;
//       }
//     });
//}


//----------------------reset password -------------------//


function resetPassword() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();
  const msg = document.getElementById("msg");

  if (!email || !password || !confirmPassword) {
    msg.innerText = "All fields required";
    return;
  }

  if (password !== confirmPassword) {
    msg.innerText = "Passwords do not match";
    return;
  }

  const formData = new URLSearchParams();
  formData.append("action", "reset");
  formData.append("email", email);
  formData.append("password", password);

  fetch(URL, { method: "POST", body: formData })
    .then(res => res.json())
    .then(data => {
      msg.innerText = data.message;
      if (data.success) {
        setTimeout(() => {
          window.location.href = "login.html";
        }, 1500);
      }
    });
}
