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
            <Button
              style={{
                float: "right",
                marginRight: "10px",
                marginTop: "10px",
                marginLeft: "100%",
              }}
              variant="primary"
              onClick={() => handleClick(`/edit/security/${security.id}`)}
            >
              Editar
            </Button>
            <PopUp />
            <div class="profile-card__img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLCdmJA4Akj6ixyEygNfLmUCYK2spe3LTTZg&usqp=CAU"
                alt="profile card"
              />
            </div>
            <div class="profile-card__cnt js-profile-cnt">
              <div class="profile-card__name">
                {security.name} {security.lastName}
              </div>
              <div class="profile-card__txt">
                <div style={{ marginBottom: "15px" }}>
                  CUIL: {security.CUIL}
                </div>
                Vigilador residente en <strong>Argentina</strong>
              </div>
              <div class="profile-card-loc">
                <span class="profile-card-loc__txt">{security.address}</span>
              </div>
              <div class="profile-card-ctr">
                <button class="profile-card__button button--blue js-message-btn">
                  Asignar Trabajo
                </button>
                <button class="profile-card__button button--orange">
                  Ver Calendario
                </button>
              </div>
            </div>
            <div class="profile-card-message js-message">
              <form class="profile-card-form">
                <div class="profile-card-form__container">
                  <textarea placeholder="Say something..."></textarea>
                </div>
              </form>
              <div class="profile-card__overlay js-message-close"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SingleCard;
