import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SingleCard = () => {
  const navigate = useNavigate();

  const handleClick = (url) => {
    navigate(url);
  };

  return (
    <div class="wrapper">
      <div class="profile-card js-profile-card">
        <Button
          style={{
            float: "right",
            marginRight: "10px",
            marginTop: "10px",
            marginLeft: "100%",
          }}
          variant="primary"
          onClick={() => handleClick("/edit/securities")}
        >
          Editar
        </Button>
        <Button
          style={{
            float: "right",
            marginRight: "10px",
            marginTop: "10px",
            marginLeft: "100%",
          }}
          variant="danger"
        >
          Eliminar
        </Button>
        <div class="profile-card__img">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLCdmJA4Akj6ixyEygNfLmUCYK2spe3LTTZg&usqp=CAU"
            alt="profile card"
          />
        </div>
        <div class="profile-card__cnt js-profile-cnt">
          <div class="profile-card__name">Pepe Argento</div>
          <div class="profile-card__txt">
            <div style={{ marginBottom: "15px" }}>CUIT: 20-13049351-9</div>
            Vigilador residente en <strong>Argentina</strong>
          </div>
          <div class="profile-card-loc">
            <span class="profile-card-loc__txt">La Matanza, Buenos Aires</span>
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

            <div class="profile-card-form__bottom">
              <button class="profile-card__button button--blue js-message-close">
                Send
              </button>

              <button class="profile-card__button button--gray js-message-close">
                Cancel
              </button>
            </div>
          </form>
          <div class="profile-card__overlay js-message-close"></div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
