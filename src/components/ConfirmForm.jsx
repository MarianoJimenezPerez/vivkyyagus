import React, { useState } from "react";
import axios from "axios";

const ConfirmForm = () => {
  const [name, setName] = useState("");
  const [ac, setAc] = useState("no");
  const [acName, setAcName] = useState(" ");
  const [al, setAl] = useState("no");
  const [alDetail, setAlDetail] = useState(" ");

  const handleChangeAc = (e) => {
    const inputAcName = document.querySelector("#acNameContainer");
    if (e.target.value === "Si") {
      inputAcName.classList.remove("d-none");
    } else {
      inputAcName.classList.add("d-none");
    }
    setAc(e.target.value);
  };

  const handleChangeAl = (e) => {
    const inputAlDetail = document.querySelector("#alDetailContainer");
    if (e.target.value === "Si") {
      inputAlDetail.classList.remove("d-none");
    } else {
      inputAlDetail.classList.add("d-none");
    }
    setAl(e.target.value);
  };

  const handleSubmit = (e) => {
    axios.post(
      "https://sheet.best/api/sheets/5c7c7d0c-5215-47c6-8b1e-cb58a9f9d9ff",
      {
        name,
        ac,
        acName,
        al,
        alDetail,
      }
    );
    setAc("No");
    setAl("No");
  };

  return (
    <div>
      <div
        class="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalToggleLabel">
                Confirmar asistencia
              </h5>
              <button
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Apellido y Nombre
                  </label>
                  <input
                    type="text"
                    placeholder="Ej: Juán Pérez"
                    className="form-control marriage_input"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <p className="mb-3">¿Lleva Acompañante?</p>
                  <select
                    class=" form-select form-select-lg mb-3 marriage_input"
                    aria-label=".form-select-lg example"
                    onChange={(e) => handleChangeAc(e)}
                  >
                    <option selected value="No">
                      No
                    </option>
                    <option value="Si">Si</option>
                  </select>
                </div>
                <div id="acNameContainer" className="mb-3 d-none">
                  <label htmlFor="invite-text" className="col-form-label">
                    Apellido y Nombre del acompañante
                  </label>
                  <input
                    type="text"
                    placeholder="Ej: Juán Pérez 2"
                    className="form-control marriage_input"
                    onChange={(e) => setAcName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <p className="mb-3">¿Restricción de alguna comida?</p>
                  <select
                    class="form-select form-select-lg mb-3 marriage_input"
                    aria-label=".form-select-lg example"
                    onChange={(e) => handleChangeAl(e)}
                  >
                    <option selected value="No">
                      No
                    </option>
                    <option value="Si">Si</option>
                  </select>
                </div>
                <div className="mb-3 d-none" id="alDetailContainer">
                  <label htmlFor="invite-text" className="col-form-label">
                    ¿Cuál?
                  </label>
                  <input
                    type="text"
                    placeholder="Ej: Vegano"
                    className="form-control marriage_input"
                    onChange={(e) => setAlDetail(e.target.value)}
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                class="btn marriage_btn marriage_btn--brown"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
                onClick={handleSubmit}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalToggleLabel2">
                Muchas gracias!
              </h5>
              <button
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">Tu solicitud fué enviada correctamente</div>
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
      <button
        class="btn marriage_btn marriage_place_button"
        data-bs-toggle="modal"
        href="#exampleModalToggle"
      >
        Confirmar asistencia
      </button>
    </div>
  );
};

export default ConfirmForm;
