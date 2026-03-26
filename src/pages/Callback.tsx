import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function Callback() {
  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    if (code) {
      login(code).then(() => navigate("/dashboard"));
    }
  }, []);

  return <p className="text-center mt-20 text-gray-500">Authenticating...</p>;
}
