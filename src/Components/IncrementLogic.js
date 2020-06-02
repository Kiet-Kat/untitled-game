import update from 'immutability-helper';

export const IncrementLogic = (resources, setResources) => {
    const tempResources = update(resources);
    
    //increment resources
    tempResources.fish.total += tempResources.fish.increment;
    tempResources.yarn.total += tempResources.yarn.increment;
    tempResources.cardboard.total += tempResources.cardboard.increment;
    setResources(tempResources);
}
