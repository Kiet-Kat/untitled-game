import update from 'immutability-helper';

export const IncrementLogic = () => {
    //const {fish, yarn, cardboard} = localResource;
    //increment resources
    localResource.fish.total += localResource.fish.increment;
    localResource.yarn.total += localResource.yarn.increment;
    localResource.cardboard.total += localResource.cardboard.increment;
}
