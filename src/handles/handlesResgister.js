import api from "../apis/config";
import valiResgister from "../validations/auth";

const handlesResgister = () => {
  const resgisterBtn = document.querySelector("#resgisterBtn");
  resgisterBtn.addEventListener("click", submitResgister);
};

async function submitResgister() {
  try {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const confirmPassword = document.querySelector("#confirmPassword").value;

    const users = {
      email,
      password,
      confirmPassword,
    };

    if (valiResgister(users)) {
      const res = await api.post("/register", users);
      console.log(res);
    }
  } catch (error) {
    console.error(error);
  }
}

export default handlesResgister;
