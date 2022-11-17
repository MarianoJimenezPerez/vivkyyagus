import React from "react";
import SongForm from "./SongForm";

const ActionSection = () => {
  return (
    <section className="marriage_action_container">
      <img
        className="asset marriage_rama_izquierda"
        src="/media/assets/rama_actions_izquierda.png"
        alt=""
        data-aos="fade-right"
      />
      <img
        className="asset marriage_rama_derecha"
        src="/media/assets/rama_actions_derecha.png"
        alt=""
        data-aos="fade-left"
      />
      <img
        className="asset marriage_rama_bottom"
        src="/media/assets/rama_actions_izquierda.png"
        alt=""
        data-aos="fade-right"
      />
      <div
        className="marriage_card_box marriage_card_box--pink"
        data-aos="flip-left"
      >
        <div className="marriage_card_header">
          <img src="/media/assets/more_icon.svg" alt="more icon" />
        </div>
        <div className="marriage_card_content">
          <img src="/media/assets/play_icon.svg" alt="play icon" />
          <h3>Playlist</h3>
          <p>Una canción</p>
          <p>que no puede faltar</p>
          <SongForm />
          <h5>Canción - Intérprete</h5>
        </div>
      </div>
      <div
        className="marriage_card_box marriage_card_box--beige"
        data-aos="flip-right"
      >
        <div className="marriage_card_header">
          <img src="/media/assets/more_icon.svg" alt="more icon" />
        </div>
        <div className="marriage_card_content">
          <img src="/media/assets/dress_icon.svg" alt="dress icon" />
          <h3>Dress Code</h3>
          <img src="/media/assets/elegante_icon.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default ActionSection;
