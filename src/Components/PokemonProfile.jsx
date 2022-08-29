import React, { useState } from "react";
import Modal from "./Modal";
import classes from "./PokemonProfile.module.css";

const PokemonProfile = ({ id, image, name, type, abilities }) => {
  const [isShow, setIsShow] = useState(false);

  const HandlerShow = () => {
    if (!isShow) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.row}>
        <div className={classes.image}>
          <img
            className={classes.img}
            onClick={() => {
              HandlerShow();
            }}
            src={image}
            alt="pokemon"
          />
          {isShow ? (
            <Modal
              name={name}
              setIsShow={setIsShow}
              type={type}
              img={image}
              id={id}
              abilities={[...abilities].map(
                (abilityPok) => abilityPok.ability.name.toUpperCase() + " "
              )}
            />
          ) : (
            // <div>
            //   <h2>name:{name}</h2>
            //   <h3> type: {type}</h3>
            //   <h3>{id}</h3>
            //   {
            //     <h3>
            //       abilities :{" "}
            //       {[...abilities].map(
            //         (abilityPok) => abilityPok.ability.name + " "
            //       )}
            //     </h3>
            //   }
            // </div>
            ""
          )}
        </div>
      </div>
    </div>
  );
};
export default PokemonProfile;
