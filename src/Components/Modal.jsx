import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const Modal = ({ name, type, img, id, abilities, setIsShow, pokemon }) => {
  console.log(pokemon);

  return ReactDOM.createPortal(
    <div className={classes.overlay}>
      <div className={classes.modalContainer + " " + classes[type]}>
        <img className={classes.img} src={img} alt="poke" />
        <div className={classes.modalRigth}>
          <p
            onClick={() => {
              setIsShow(false);
            }}
            className={classes.closeModal}
          >
            X
          </p>
          <div className={classes.content}>
            <p className={classes.text}>type:{type.toUpperCase()}</p>
            <h2 className={classes.text}> name: {name.toUpperCase()}</h2>
            <h3 className={classes.text}>abilities: {abilities}</h3>
            <p className={classes.text}>#id:{id}</p>
            <button
              className={classes.btn}
              onClick={() => {
                const favorites = JSON.parse(
                  localStorage.getItem("favorites") || "[]"
                );
                localStorage.setItem(
                  "favorites",
                  JSON.stringify([...favorites, id])
                );
              }}
            >
              add to favorites
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
