import authCookie from "@/utils/authCookie";
import { useLayoutEffect } from "react";
import { Outlet, useNavigate } from "react-router";

function ProtectedLayout(props) {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const checkAuth = async () => {
      const userInfo = await authCookie.isAuthentication();
      if (!userInfo) {
        navigate("/");
      }
    };
    checkAuth();
  }, [navigate]);

  return (
    <>
      <Outlet />
    </>
  );
}

ProtectedLayout.propTypes = {};

export default ProtectedLayout;
