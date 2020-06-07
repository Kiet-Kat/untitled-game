import React from "react";

export const Resources = (props) => {
  const { fish, yarn, cardboard } = props.resources;
  //console.log(props.resources);

  return (
    <div className="flexSection">
      <div id="rowFish">
        <span>Fish:</span> <span>{fish.total}</span>
        <span>
          <button
            className="btnPrimary"
            onClick={() => {
              //const newFish = update(resources, {fish: {total: {$set: resources.fish.total + 1}}});
              const newFish = props.currentResources();
              newFish.fish.total++;
              props.updateState(newFish);
            }}
          >
            Gather Fish
          </button>
        </span>
      </div>
      <div id="rowYarn">
          <span>Yarn:</span> <span>{yarn.total}</span>
          <span>
            <button
              className="btnPrimary"
              onClick={() => {
                //const newYarn = update(resources, {yarn: {total: {$set: resources.yarn.total + 1}}});
                const newYarn = props.currentResources();
                newYarn.yarn.total++;
                props.updateState(newYarn);
              }}
            >
              Make Yarn
            </button>
          </span>
      </div>
      <div id="rowCardboard">
          <span>Cardboard:</span> <span>{cardboard.total}</span>
          <span>
            <button
              className="btnPrimary"
              onClick={() => {
                //const newCardboard = update(resources, {cardboard: {total: {$set: resources.cardboard.total + 1}}});
                const newCardboard = props.currentResources();
                newCardboard.cardboard.total++;
                props.updateState(newCardboard);
              }}
            >
              Get Cardboard
            </button>
          </span>
      </div>
    </div>
  );
};

export default Resources;
