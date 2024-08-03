const Header = () => {
  return /*html*/ `
    <header class="header">
      <nav>
        <ul class="nav">
          <li class="nav-item"><a href="/">Home</a></li>
          
          <li class="nav-item"><a href="/login">Login</a></li>
          <li class="nav-item"><a href="/register">Register</a></li> <!-- Đã sửa từ 'resgister' thành 'register' -->
          <li class="nav-item"><a href="/admin">Admin</a></li>
        </ul>
      </nav>
    </header>
  `;
};

export default Header;
