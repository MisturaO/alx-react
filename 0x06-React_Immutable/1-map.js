// import { Map } from 'immutable';
import { Map } from 'immutable';

// Convertss object into Immutable Map
export const getImmutableObject = (object) => Map(object);

export default getImmutableObject;

// USAGE:
// const object = {
//     fear: true,
//     smell: -1033575916.9145899,
//     wall: false,
//     thing: -914767132
// }

// const immutableObject = getImmutableObject(object);
// console.log(immutableObject);
