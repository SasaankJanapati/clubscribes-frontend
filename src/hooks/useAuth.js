import { useSelector } from "react-redux";
import { selectCurrentToken } from "../features/auth/authSlice";
import { jwtDecode } from "jwt-decode";

const useAuth = () => {
  const token = useSelector(selectCurrentToken);
  let isCoordinator = false;
  let isAdmin = false;
  let status = "Member";

  if (token) {
    const decoded = jwtDecode(token);
    const { username, roles } = decoded.UserInfo;

    isCoordinator = roles.includes("Coordinator");
    isAdmin = roles.includes("Admin");

    if (isCoordinator) status = "Coordinator";
    if (isAdmin) status = "Admin";

    return { username, roles, status, isCoordinator, isAdmin };
  }

  return { username: "", roles: [], isCoordinator, isAdmin, status };
};
export default useAuth;
