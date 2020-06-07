import React from "react";

export const Cat = (props) => {
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

  return (
    <div className="flexSection">
      <div className="rowBasicCat">
        <span style={{flex: "30%"}}>Basic Cat: </span>
        <span style={{flex: "40%"}}>{basicCat.priceFish}</span>
        <span style={{flex: "30%"}}>
          <button
            className="btnPrimary"
            disabled={props.getDisabled(basicCat.priceFish, 0, 0)}
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
          <span style={{ flex: "60%", fontStyle: "italic", opacity: ".7" }}>{basicCat.priceFish} Fish</span>
          <span style={{ flex: "10%", fontStyle: "italic", opacity: ".7" }}></span>
          <span style={{ flex: "30%", fontStyle: "italic", opacity: ".7" }}>
          +1 Basic Cat
        </span>
      </div>
      <div className="rowFisherCat">
        <span style={{flex: "30%"}}>Fisher Cat: </span>
        <span style={{ flex: "40%" }}>{resources.fisherCat.total}</span>
        <span style={{flex: "30%"}}></span>
      </div>
    </div>
  );
};

export default Cat;
