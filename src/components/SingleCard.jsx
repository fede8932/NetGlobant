import React from "react";
import { Button } from "react-bootstrap";

const SingleCard = () => {
  return (
    <div class="wrapper">
      <div class="profile-card js-profile-card">
      <Button style={{float: "right", marginRight: "10px", marginTop: "10px"}}variant="primary">Editar</Button>
        <div class="profile-card__img">
          <img
            src="https://res.cloudinary.com/muhammederdem/image/upload/v1537638518/Ba%C5%9Fl%C4%B1ks%C4%B1z-1.jpg"
            alt="profile card"
          />
        </div>

        <div class="profile-card__cnt js-profile-cnt">
          <div class="profile-card__name">Pepe Argento</div>
          <div class="profile-card__txt">
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
