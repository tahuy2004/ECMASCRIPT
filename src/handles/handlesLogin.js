import api from "../apis/config";

const handlesLogin = () => {
  const loginBtn = document.getElementById("loginBtn");
  if (loginBtn) {
    loginBtn.addEventListener("click", submitLogin);
  } else {
    console.error("Login button not found");
  }

  async function submitLogin(event) {
    event.preventDefault(); // Prevent the default form submission

    try {
      const username = document.querySelector("#username").value.trim();
      const password = document.querySelector("#password").value.trim();

      // Validate user input
      if (!username || !password) {
        alert("Vui lòng điền đầy đủ thông tin.");
        return;
      }

      // Send POST request
      const res = await api.post("/login", { username, password });
      console.log(res);

      // Handle successful login
      alert("Đăng nhập thành công!");
      // Redirect or perform any post-login actions here
      window.location.href = "/dashboard"; // Example redirect to a dashboard
    } catch (error) {
      console.error("Error during login:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        console.error("Request data:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
      alert("Đã xảy ra lỗi trong quá trình đăng nhập. Vui lòng thử lại.");
    }
  }
};

// Ensure handlesLogin is called after the DOM has loaded
document.addEventListener("DOMContentLoaded", handlesLogin);

export default handlesLogin;
