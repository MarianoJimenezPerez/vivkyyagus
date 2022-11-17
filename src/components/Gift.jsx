import React from "react";

const Gift = () => {
  return (
    <section className="marriage_gift_container">
      <div className="marriage_gift_header" data-aos="fade-up">
        <img src="/media/assets/gift_icon.svg" alt="" />
        <h3>Regalo</h3>
        <img src="/media/assets/separator.svg" alt="" />
        <p>
          El mejor regalo para nosotros es que nos acompañes ese día...
          Obviamente si querés hacernos un presente que será destinado a nuestra
          luna de miel vamos a estar profundamente agradecidos
        </p>
      </div>
      <div className="marriage_gift_bank_data" data-aos="flip-left">
        <p>Datos de la cuenta:</p>
        <p>Banco Galicia</p>
        <p>ALIAS: TRIO.SORTEO.MANTA</p>
        <p>CBU:</p>
        <p>0070138530004043882015</p>
        <p>CTA: 4043882-0 138-1</p>
      </div>
      <div className="marriage_gift_footer" data-aos="fade-up">
        <img src="/media/assets/gift_icon2.svg" alt="" />
        <p>
          Si preferís hacerlo presencial el día de la fiesta habrá una Urna para
          que puedas dejar tu regalo en un sobre
        </p>
      </div>
    </section>
  );
};

export default Gift;
