const valiResgister = (users) => {
  if (!users.email || !users.password || !users.confirmPassword) {
    console.log("Vui lòng nhập đầy đủ thông tin");
    return false;
  }
  if (users.password !== users.confirmPassword) {
    console.log("Mật khẩu và mật khẩu xác nhận không khớp");
    return false;
  }
  return true;
};

export default valiResgister;
