import React from "react";

export const Cat = (props) => {
  const { resources } = props;
  const {
    fish,
    yarn,
    cardboard,
    catnip,
    scratchingPost,
    fishingPort,
    barracks,
    basicCat,
    fisherCat,
  } = props.resources;

  const isDisabled = (catnipCost, fishCost, yarnCost, cardboardCost) => {
    return basicCat.total > 0 &&
      catnipCost >= catnip.total &&
      fishCost >= fish.total &&
      yarnCost >= yarn.total &&
      cardboardCost >= cardboard.total
      ? false
      : true;
  };

  return (
    <div className="flexSection">
      <div className="rowBasicCat">
        <span style={{ flex: "30%" }}>Basic Cat: </span>
        <span style={{ flex: "40%" }}>{basicCat.total}</span>
        <span style={{ flex: "30%" }}>
          <button
            className="btnPrimary"
            disabled={props.getDisabled(basicCat.priceFish, basicCat.priceYarn, basicCat.priceCardboard, basicCat.priceCatnip)}
            onClick={() => {
              if (fish.total >= basicCat.priceFish) {
                const newBasicCat = props.currentResources();
                newBasicCat.fish.total -= basicCat.priceFish;
                newBasicCat.basicCat.total++;
                props.updateState(newBasicCat);
              } else {
                props.updateState(
                  props.prtLog("You can't afford a lure a cat")
                );
              }
            }}
          >
            Lure
          </button>
        </span>
        <span style={{ flex: "60%", fontStyle: "italic", opacity: ".7" }}>
          {basicCat.priceFish} Fish
        </span>
        <span
          style={{ flex: "10%", fontStyle: "italic", opacity: ".7" }}
        ></span>
        <span style={{ flex: "30%", fontStyle: "italic", opacity: ".7" }}>
          +1 Basic Cat
        </span>
      </div>
      <div className="rowFisherCat">
        <span style={{ flex: "30%" }}>Fisher Cat: </span>
        <span style={{ flex: "40%" }}>{resources.fisherCat.total}</span>
        <span style={{ flex: "30%" }}>
          <button
            className="btnPrimary"
            disabled={props.getDisabled(fisherCat.priceFish, fisherCat.priceYarn, fisherCat.priceCardboard, fisherCat.priceCatnip)}
            onClick={() => {
              if (yarn.total >= fisherCat.priceYarn && catnip.total >= fisherCat.priceCatnip) {
                const newFisherCat = props.currentResources();
                newFisherCat.yarn.total -= fisherCat.priceYarn;
                newFisherCat.catnip.total -= fisherCat.priceCatnip;
                newFisherCat.fisherCat.total++;
                newFisherCat.basicCat.total--;
                newFisherCat.fish.increment += .5;
                props.updateState(newFisherCat);
              } else {
                props.updateState(
                  props.prtLog("You can't afford a train a fisher cat")
                );
              }
            }}
          >
            Train
          </button>
        </span>
        <span style={{ flex: "60%", fontStyle: "italic", opacity: ".7" }}>
          {fisherCat.priceYarn} Yarn, {fisherCat.priceCatnip} Catnip
        </span>
        <span
          style={{ flex: "10%", fontStyle: "italic", opacity: ".7" }}
        ></span>
        <span style={{ flex: "30%", fontStyle: "italic", opacity: ".7" }}>
          +1 Fisher Cat
        </span>
      </div>
    </div>
  );
};

export default Cat;
