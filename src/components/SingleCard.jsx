import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PopUp from "./PopUp";

const SingleCard = () => {
  const navigate = useNavigate();
  const securities = useSelector((state) => state.security);

  const handleClick = (url) => {
    navigate(url);
  };

  return (
    <div class="wrapper">
      {securities.map((security) => {
        return (
          <div class="profile-card js-profile-card">
            <div
              style={{
                fontSize: "50px",
                position: "relative",
                left: "200px",
                top: "50px",
              }}
              variant="secondary"
            >
              {security.name} {security.lastName}
            </div>
            <div style={{ position: "relative", left: "230px", top: "80px" }}>
              <div class="profile-card__txt">
                <div style={{ marginBottom: "15px" }}>
                  CUIL: {security.CUIL}
                </div>
              </div>
              <div class="profile-card__txt">
                <div style={{ marginBottom: "15px" }}>
                  Email: {security.email}
                </div>
                Vigilador residente en <strong>Argentina</strong>
                <div style={{ marginBottom: "15px", marginRight:"470px" }}>
                  Dirección: {security.address}
                </div>
              </div>
              
            </div>
            <div>
              <Button
                style={{
                  float: "right",
                  marginRight: "10px",
                  marginTop: "100px",
                  marginLeft: "80%",
                }}
                variant="secondary"
                onClick={() => handleClick(`/edit/security/${security.id}`)}
              >
                Editar
              </Button>
              <PopUp />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SingleCard;
