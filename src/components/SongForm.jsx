import React, { useState } from "react";
import axios from "axios";

const SongForm = () => {
  const [song, setSong] = useState(null);

  const handleSubmitSong = (e) => {
    e.preventDefault();
    axios.post(
      "https://sheet.best/api/sheets/346377b9-c9b3-4256-aab7-0c1fdb4a7057",
      { song }
    );
    setSong(null);
    const input = document.querySelector("#song_name");
    input.value = "";
  };

  return (
    <div>
      <form className="marriage_song_form">
        <input
          type="text"
          className="marriage_input"
          placeholder="Ej: Hawái - Maluma"
          id="song_name"
          onChange={(e) => setSong(e.target.value)}
        />
        <button
          onClick={handleSubmitSong}
          class="btn"
          data-bs-target="#exampleModalToggle3"
          data-bs-toggle="modal"
        >
          <img src="/media/assets/submit_icon.svg" alt="" />
        </button>
      </form>
    </div>
  );
};

export default SongForm;
