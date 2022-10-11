import axios from "axios";

const authCookie = {
  isAuthentication: async () => {
    try {
      const url = `http://localhost:5000/auth/login/success`;
      const { data } = await axios.get(url, { withCredentials: true });
      if (data?.error) {
        return false;
      }
      return true;
    } catch (error) {
      return false;
    }
  },
};

export default authCookie;
