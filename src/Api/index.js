import axios from "axios";

export const postLoginData = async (API_URI, loginDetails) => {
  try {
    const fetchData = await axios.post(API_URI, loginDetails);
    localStorage.clear();
    localStorage.setItem(
      "remember-user",
      JSON.stringify(fetchData.data.userFetch)
    );
    localStorage.setItem("user-token", fetchData.data.token);
    localStorage.setItem("userdata", JSON.stringify(fetchData.data.userFetch));
  } catch (error) {
    throw error;
  }
};
