import Footer from "../components/Footer";
import Header from "../components/Header";

const Register = () => {
  return /*html*/ `
    ${Header()}
    <form id="registerForm">
      <h1>Đăng ký tài khoản</h1>
      <div class="mb-3">
        <label for="email" class="form-label">Email:</label>
        <input type="email" class="form-control" id="email" required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password:</label>
        <input type="password" class="form-control" id="password" required>
      </div>
      <div class="mb-3">
        <label for="confirmPassword" class="form-label">Confirm password:</label>
        <input type="password" class="form-control" id="confirmPassword" required>
      </div>
      <button type="submit" class="btn btn-primary w-100">Đăng ký</button>
      <p class="mt-3">Bạn đã có tài khoản? <a href="/login">Đăng nhập</a></p>
    </form>
    ${Footer()}
  `;
};

export default Register;
