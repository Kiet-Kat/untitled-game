import React from "react";

export const Resources = (props) => {
  const { fish, yarn, cardboard, catnip } = props.resources;
  //console.log(props.resources);

  return (
    <div className="flexSection">
      <div id="rowFish">
        <span>Fish:</span> <span>{Math.trunc(fish.total)}</span>
        <span>
          <button
            className="btnPrimary"
            onClick={() => {
              const newFish = props.currentResources();
              newFish.fish.total++;
              //chance for catnip
              if (Math.random() < 0.1) {
                newFish.catnip.total++;
              }
              props.updateState(newFish);
            }}
          >
            Gather Fish
          </button>
        </span>
      </div>
      <div id="rowYarn">
        <span>Yarn:</span> <span>{Math.trunc(yarn.total)}</span>
        <span>
          <button
            className="btnPrimary"
            onClick={() => {
              const newYarn = props.currentResources();
              newYarn.yarn.total++;
              //chance for catnip
              if (Math.random() < 0.1) {
                newYarn.catnip.total++;
              }
              props.updateState(newYarn);
            }}
          >
            Make Yarn
          </button>
        </span>
      </div>
      <div id="rowCardboard">
        <span>Cardboard:</span> <span>{Math.trunc(cardboard.total)}</span>
        <span>
          <button
            className="btnPrimary"
            onClick={() => {
              const newCardboard = props.currentResources();
              newCardboard.cardboard.total++;
              //chance for catnip
              if (Math.random() < 0.1) {
                newCardboard.catnip.total++;
              }
              props.updateState(newCardboard);
            }}
          >
            Get Cardboard
          </button>
        </span>
      </div>
      <div id="rowCatnip">
        <span>Catnip:</span> <span>{Math.trunc(catnip.total)}</span>
        <span>
          {/* <button
            className="btnPrimary"
            onClick={() => {
              const newCatnip = props.currentResources();
              newCatnip.catnip.total++;
              props.updateState(newCatnip);
            }}
          >
            Get Catnip
          </button> */}
        </span>
      </div>
    </div>
  );
};

export default Resources;
