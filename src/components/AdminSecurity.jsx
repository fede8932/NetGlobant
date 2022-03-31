import * as React from "react";
import { Button } from "react-bootstrap";
import { AiOutlineFileSearch } from "react-icons/ai";
import { AiOutlineFileAdd } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const AdminSecurity = function () {
  const navigate = useNavigate();

  const handleClick = (url) => {
    navigate(url);
  };
  return (
    <div
      style={{
        width: "600px",
        height: "600px",
        position: "fixed",
        top: "80px",
        right: "220px",
      }}
    >
      <Button
       onClick={() => handleClick("/security")}
        variant="secondary"
        style={{ display: "inline-block", width: "150px", marginRight: "20px" }}
      >
        <AiOutlineFileAdd size={70} />
        Agregar vigilador
      </Button>
      <Button onClick={() => handleClick("/search/securities")}
        variant="secondary"
        style={{ display: "inline-block", width: "150px", marginLeft: "20px" }}
      >
        <AiOutlineFileSearch size={70} />
        Buscar vigilador
      </Button>
    </div>
  );
};
export default AdminSecurity;
