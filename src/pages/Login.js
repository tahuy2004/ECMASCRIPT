import Footer from "../components/Footer";
import Header from "../components/Header";

const Login = () => {
  return /*html*/ `
    ${Header()}
    <form id="loginForm">
      <label for="username">Username:</label><br>
      <input type="text" id="username" name="username" required><br>
      <label for="password">Password:</label><br>
      <input type="password" id="password" name="password" required><br>
      <button type="submit" id="loginBtn" class="btn btn-primary">Login</button>
    </form>
    ${Footer()}
  `;
};

export default Login;
