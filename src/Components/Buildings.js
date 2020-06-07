import React from "react";

export const Buildings = (props) => {
  const { resources } = props;
  const {
    fish,
    yarn,
    cardboard,
    scratchingPost,
    fishingPort,
    barracks,
  } = props.resources;

  const costStyle = {
    fontStyle: "italic",
    opacity: ".7",
  };

  const getDisabled = (fishCost, yarnCost, cardboardCost)=>{
    return (fish.total >= fishCost && yarn.total >= yarnCost && cardboard.total >= cardboardCost) ? false: true;
  }

  return (
    <div className="flexSection">
      <div id="rowScratchingPost">
        <span style={{ flex: "30%" }}>Scratching Post: </span>
        <span style={{ flex: "10%" }}>{resources.scratchingPost.total}</span>
        <span style={{ flex: "30%" }}>
          <button
            className="btnPrimary"
            disabled={getDisabled(0,0,scratchingPost.priceCardboard)}
            onClick={() => {
              if (
                resources.cardboard.total >=
                resources.scratchingPost.priceCardboard
              ) {
                const newScratchingPost = props.prtLog(
                  "You have bought a scratching post"
                );
                newScratchingPost.cardboard.total -=
                  newScratchingPost.scratchingPost.priceCardboard;
                newScratchingPost.scratchingPost.total++;
                newScratchingPost.scratchingPost.priceCardboard += 5;
                props.updateState(newScratchingPost);
              } else {
                props.updateState(
                  props.prtLog("You can't afford a scratching post")
                );
              }
            }}
          >
            Build
          </button>
        </span>
        {/* cost row */}
        <span style={{ flex: "60%", fontStyle: "italic", opacity: ".7" }}>
          {resources.scratchingPost.priceCardboard} Cardboard
        </span>
        <span style={{ flex: "40%", fontStyle: "italic", opacity: ".7" }}>
          +5 population
        </span>
      </div>

      {!resources.fishingPort.bought && (
        <div id="rowFishingPort">
          <span style={{ flex: "30%" }}>Fishing Port: </span>
          <span style={{ flex: "10%" }}></span>
          <span style={{ flex: "30%" }}>
            <button
              className="btnPrimary"
              disabled={getDisabled(0,0,fishingPort.priceCardboard)}
              onClick={() => {
                console.log("Button Pressed");
                console.log(fishingPort.bought);
                if (
                  resources.cardboard.total >=
                  resources.fishingPort.priceCardboard
                ) {
                  const newFishingPort = props.prtLog(
                    "You have bought the fishing post"
                  );
                  newFishingPort.fishingPort.bought = true;
                  newFishingPort.cardboard.total -=
                    newFishingPort.fishingPort.priceCardboard;
                  props.updateState(newFishingPort);
                } else {
                  props.updateState(
                    props.prtLog("You can't afford the fishing port")
                  );
                }
              }}
            >
              Build
            </button>
          </span>
          {/* cost row */}
          <span style={{ flex: "60%", fontStyle: "italic", opacity: ".7" }}>
            {fishingPort.priceCardboard} Cardboard
          </span>
          <span style={{ flex: "40%", fontStyle: "italic", opacity: ".7" }}>
            Unlock fishing cats
          </span>
        </div>
      )}

      {!resources.barracks.bought && (
        <div id="rowBarracks">
          <span style={{ flex: "30%" }}>Barracks: </span>
          <span style={{ flex: "10%" }}></span>
          <span style={{ flex: "30%" }}>
            <button
              className="btnPrimary"
              disabled={getDisabled(0,0,barracks.priceCardboard)}
              onClick={() => {
                console.log("Button Pressed");
                console.log(barracks.bought);
                if (cardboard.total >= barracks.priceCardboard) {
                  const newBarracks = props.prtLog(
                    "You have bought the barracks"
                  );
                  newBarracks.barracks.bought = true;
                  newBarracks.cardboard.total -=
                    newBarracks.barracks.priceCardboard;
                  props.updateState(newBarracks);
                } else {
                  props.updateState(
                    props.prtLog("You can't afford the barracks")
                  );
                }
              }}
            >
              Build
            </button>
          </span>
          {/* cost row */}
          <span style={{ flex: "60%", fontStyle: "italic", opacity: ".7" }}>
            {barracks.priceCardboard} Cardboard
          </span>
          <span style={{ flex: "40%", fontStyle: "italic", opacity: ".7" }}>
            Unlock warrior cats
          </span>
        </div>
      )}
    </div>
  );
};

export default Buildings;
