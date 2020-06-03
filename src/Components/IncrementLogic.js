import update from "immutability-helper";

export const IncrementLogic = (resources, updateState) => {
  const tempResources = update(resources, {
    fish: { total: { $set: resources.fish.total } },
  });
  //increment resources
  tempResources.fish.total += tempResources.fish.increment;
  tempResources.yarn.total += tempResources.yarn.increment;
  tempResources.cardboard.total += tempResources.cardboard.increment;
  updateState(tempResources);

  // setResources(currentResources =>{
  //     currentResources.fish.total += currentResources.fish.increment;
  //     currentResources.yarn.total += currentResources.yarn.increment;
  //     currentResources.cardboard.total += currentResources.cardboard.increment;
  //     return currentResources;
  // });
};
