import { Outlet, Navigate } from "react-router";
import { useSelector } from "react-redux";
const Protactiveroutes = () => {
  const { data } = useSelector((state) => state.Login);
  console.log("🚀 ~ file: protectiveRoutes.jsx:5 ~ Protactiveroutes ~ data", data)
  const user = data;
  return user ? <Outlet /> : <Navigate to="/" />;
};

export default Protactiveroutes;
