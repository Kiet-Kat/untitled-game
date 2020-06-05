import update from "immutability-helper";

export const IncrementLogic = (currentResources, updateState) => {
  //increment resources
  currentResources.fish.total += currentResources.fish.increment;
  currentResources.yarn.total += currentResources.yarn.increment;
  currentResources.cardboard.total += currentResources.cardboard.increment;
  updateState(currentResources);

  // setResources(currentResources =>{
  //     currentResources.fish.total += currentResources.fish.increment;
  //     currentResources.yarn.total += currentResources.yarn.increment;
  //     currentResources.cardboard.total += currentResources.cardboard.increment;
  //     return currentResources;
  // });
};
