import authCookie from "@/utils/authCookie";
import { useLayoutEffect } from "react";
import { Outlet, useNavigate } from "react-router";

function ProtectedLayout(props) {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const checkAuth = async () => {
      const userInfo = await authCookie.isAuthentication();
      console.log(userInfo);
      if (!userInfo) {
        navigate("/");
      }
    };
    checkAuth();
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
}

ProtectedLayout.propTypes = {};

export default ProtectedLayout;
