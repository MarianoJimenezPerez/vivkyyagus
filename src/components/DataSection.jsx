import React from "react";
import ConfirmForm from "./ConfirmForm";

const DataSection = () => {
  return (
    <section className="marriage_data_section">
      <div className="marriage_civil_container">
        <img src="/media/assets/civil.svg" alt="" />
      </div>
      <div className="marriage_event_date" data-aos="fade-up">
        <p>Viernes 16 / 12</p>
        <p className="marriage_event_hour">19:00hs</p>
        <button className="btn marriage_btn marriage_event_button">
          Agendar
        </button>
      </div>
      <div className="marriage_event_place" data-aos="fade-up">
        <p>Lugar</p>
        <p>Estancia Causana</p>
        <ConfirmForm />
        <p>antes del 21/11/22</p>
      </div>
      <div
        className="marriage_event_direction"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <p>Dirección</p>
        <p>Colectora Ruta 20 km18,</p>
        <p>Malagueño - Córdoba</p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.google.com/maps/dir//Colectora+ruta+20+km+18,+X5001+Malague%C3%B1o,+C%C3%B3rdoba/@-31.4530235,-64.4599783,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x942d608164ccb40f:0x5e3109b5d2460018!2m2!1d-64.3899293!2d-31.4529102"
          className="btn marriage_btn marriage_direction_button"
        >
          Ubicación
        </a>
      </div>
    </section>
  );
};

export default DataSection;
