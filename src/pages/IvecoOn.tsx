import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const IvecoOn = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Abre o site em nova aba
    window.open("https://www.iveco-on.com/", "_blank", "noopener,noreferrer");
    // Redireciona de volta para a home
    navigate("/");
  }, [navigate]);

  return null;
};

export default IvecoOn;
