import api from "../apis/config";

const handlesRegister = () => {
  const form = document.getElementById("registerForm");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
      alert("Mật khẩu và xác nhận mật khẩu không khớp.");
      return;
    }

    try {
      const response = await api.post("/register", { email, password });
      if (response.status === 201) {
        alert("Đăng ký thành công!");
        window.location.href = "/login";
      } else {
        alert("Đăng ký thất bại, vui lòng thử lại.");
      }
    } catch (error) {
      console.error("Lỗi khi đăng ký tài khoản:", error);
      alert("Đã xảy ra lỗi khi đăng ký. Vui lòng thử lại sau.");
    }
  });
};

export default handlesRegister;
