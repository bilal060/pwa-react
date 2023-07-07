const Hooks = () => {
  const token = localStorage.getItem("user-token");
  const IsUserLoggedIn = () => {
    if (token) {
      return true;
    } else {
      return false;
    }
  };

  const Logout = (navigate) => {
    localStorage.clear();
    navigate("/");
  };

  return {
    IsUserLoggedIn,
    Logout,
  };
};

export default Hooks;
