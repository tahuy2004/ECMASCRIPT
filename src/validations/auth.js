const valiResgister = ({ email, password, confirmPassword }) => {
  if (!email || !password || !confirmPassword) {
    return { isValid: false, message: "Vui lòng điền đầy đủ thông tin." };
  }
  if (password !== confirmPassword) {
    return {
      isValid: false,
      message: "Mật khẩu và xác nhận mật khẩu không khớp.",
    };
  }
  // Thêm các điều kiện khác nếu cần
  return { isValid: true, message: "" };
};
