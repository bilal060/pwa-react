import Hooks from "../../hooks";

export const RegisteredRoutes = ({ component: Component }) => {
  const { IsUserLoggedIn } = Hooks();
  if (IsUserLoggedIn()) {
    window.history.back();
    return null;
  } else {
    return Component;
  }
};
