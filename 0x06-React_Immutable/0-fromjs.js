import { fromJS } from 'immutable';


/*function getImmutableObject that accepts object as a parameter and converts 
it into an immutable Map using fromJS of the Immutable.js library */
function getImmutableObject(object){
    const immutableMap = fromJS(object);

    return immutableMap;
}


//USAGE:
// const object = {
//     fear: true,
//     smell: -1033575916.9145899,
//     wall: false,
//     thing: -914767132
// }

// const immutableObject = getImmutableObject(object);
// console.log(immutableObject);
// console.log(immutableObject.toJS()); //converts immutable Map into to human readable format
