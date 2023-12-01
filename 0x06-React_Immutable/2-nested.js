import { Map } from 'immutable';

//This function returns the value of the object at the defined path
export default function accessImmutableObject(object, array) {
    // convert 'object' to immutable object
  const immutableObject = Map(object);

    // Used the `getIn` method to access the value at the defined path
  return immutableObject.getIn(array, undefined);
};

// USAGE:
// const result = accessImmutableObject({
//     name: {
//          first: "Guillaume",
//          last: "Salva"
//     }
// }, ['name', 'first']); // The second argument specifies the path of the data the getIn method will traverse to get it's value

// console.log(result);
