import { RoutesPaths } from "@enums";
import { useAppSelector } from "@store/index";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute: React.FC = () => {
  const token = useAppSelector(({ auth: { token } }) => token);

  return token ? <Outlet /> : <Navigate to={RoutesPaths.Login} />;
};
