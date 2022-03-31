import * as React from "react";
import { Button } from "react-bootstrap";
import { AiOutlineFileSearch } from "react-icons/ai";
import { AiOutlineFileAdd } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import {BiEdit} from 'react-icons/bi'
import {RiDeleteBin6Line} from 'react-icons/ri'

const AdminClient = function () {
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
        top: "150px",
        right: "220px",
      }}
    >
      <Button
        onClick={() => handleClick("/client")}
        variant="secondary"
        style={{ display: "inline-block", width: "140px",height:"130px", marginRight: "20px" }}
      >
        <AiOutlineFileAdd size={70} />
        Agregar cliente
      </Button>
      <Button onClick={() => handleClick("/clients")}
        variant="secondary"
        style={{ display: "inline-block", width: "290px",height:"130px", marginLeft: "20px" }}
      >
        <AiOutlineFileSearch size={70} />
        <BiEdit size={70} />
        <RiDeleteBin6Line size={70}/>
        
        Buscar, editar y eliminar cliente
      </Button>
   


     
    </div>
  );
};
export default AdminClient;
