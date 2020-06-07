import React from "react";

export const Training = (props) => {
  const { resources } = props;
  const {
    fish,
    yarn,
    cardboard,
    scratchingPost,
    fishingPort,
    barracks,
    basicCat,
    fisherCat,
  } = props.resources;
  const getDisabled = (fishCost, yarnCost, cardboardCost) => {
    return fish.total >= fishCost &&
      yarn.total >= yarnCost &&
      cardboard.total >= cardboardCost &&
      basicCat.total > 1
      ? false
      : true;
  };

  return (
    <div className="flexSection">
      {fishingPort.bought && (
        <div id="rowTrainFisherCat">
          <span style={{ flex: "30%" }}>Train Fisher Cat: </span>
          <span style={{ flex: "40%" }}>{fisherCat.priceYarn}</span>
          <span style={{ flex: "30%" }}>
            <button
              className="btnPrimary"
              disabled={getDisabled(0, fisherCat.priceYarn, 0)}
              onClick={() => {
                if (
                  basicCat.total >= 1 &&
                  yarn.total >= fisherCat.priceYarn
                ) {
                  const newFisherCat = new props.currentResources();
                  newFisherCat.fisherCat.total++;
                  newFisherCat.basicCat.total--;
                  newFisherCat.yarn.total -= fisherCat.priceYarn;
                  newFisherCat.fish.increment += fisherCat.increment;
                  props.updateState(newFisherCat);
                } else {
                  //props.prtLog("You can't train a fisher cat")
                }
              }}
            >
              Train
            </button>
          </span>
          <span style={{ flex: "60%", fontStyle: "italic", opacity: ".7" }}>
            {fisherCat.priceYarn} Yarn
          </span>
          <span style={{ flex: "10%" }}></span>
          <span style={{ flex: "30%", fontStyle: "italic", opacity: ".7" }}>
            +1 Fisher Cat
          </span>
        </div>
      )}
    </div>
  );
};

export default Training;
