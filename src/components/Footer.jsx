import React from "react";

const Footer = () => {
  return (
    <footer className="marriage_footer_container">
      <img
        data-aos="fade-up"
        src="/media/assets/rama_top_footer.png"
        alt="ramillete"
      />
      <h2 data-aos="fade-up">SHARE THE LOVE</h2>
      <img
        data-aos="fade-up"
        src="/media/assets/rama_bottom_footer.png"
        alt="ramillete"
      />
      <p>
        {" "}
        <img src="/media/assets/separator2.svg" alt="" />
      </p>
      <div className="marriage_hashtag_container">
        <img src="/media/assets/hashtag_footer.png" alt="" />
      </div>
      <div
        className="modal fade"
        id="exampleModalToggle3"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel3"
        tabIndex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalToggleLabel3">
                Muchas gracias!
              </h5>
              <button
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">Tu canción fué enviada correctamente</div>
            <div class="modal-footer">
              <button
                className="btn marriage_btn marriage_btn--brown"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
