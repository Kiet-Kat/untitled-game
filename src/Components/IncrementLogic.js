import update from "immutability-helper";

export const IncrementLogic = (resources, setResources) => {
//   setResources((currentResources) => {
//     const tempResources = update(currentResources, {
//       fish: { total: { $set: currentResources.fish.total } },
//     });
//     //increment resources
//     tempResources.fish.total += tempResources.fish.increment;
//     tempResources.yarn.total += tempResources.yarn.increment;
//     tempResources.cardboard.total += tempResources.cardboard.increment;
//     return tempResources;
//   });
    setResources(currentResources =>{
        currentResources.fish.total += currentResources.fish.increment;
        currentResources.yarn.total += currentResources.yarn.increment;
        currentResources.cardboard.total += currentResources.cardboard.increment;
        return currentResources;
    });
};
