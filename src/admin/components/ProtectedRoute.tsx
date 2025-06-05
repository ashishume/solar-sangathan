import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAdminAuthStore } from "../store/adminAuthStore";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireSuperAdmin?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requireSuperAdmin = false,
}) => {
  const { isAuthenticated, admin, getCurrentAdmin } = useAdminAuthStore();
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      getCurrentAdmin();
    }
  }, [isAuthenticated, getCurrentAdmin]);

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  if (requireSuperAdmin && admin?.role !== "SUPER_ADMIN") {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
