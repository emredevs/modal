import React from "react";
import styles from "./styles.module.css";
import Modal from "../modal";
import { useState } from "react";
export default function PokeList({ pokemonInfo }) {
  const [openModalId, setOpenModalId] = useState(null);
  const [modal, setModal] = useState(false);
  return (
    <div className={styles.listContainer}>
      {pokemonInfo.map((poke) => (
        <div className={styles.pokeCard} key={poke.id}>
          <div>
            {openModalId === poke.id && (
              <Modal modal={modal} id={poke.id}>
                <div onClick={() => setModal(false)}>X</div>
                <div>modal info</div>
                <br />
                <div>{poke.name}</div>
              </Modal>
            )}
            <img src={poke.images.small} alt="" />
            <div>{poke.name}</div>
            <button
              onClick={() => {
                setOpenModalId(poke.id);
                setModal(true);
              }}
            >
              open modal
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
