import { fromJS } from 'immutable';

//This function returns the value of the object at the defined path
export default function accessImmutableObject(object, array) {
    // convert 'object' to immutable object
  const immutableObject = fromJS(object);

    // Used the `getIn` method to access the value at the defined path
  return immutableObject.getIn(array);
};

// USAGE:
// const result = accessImmutableObject({
//     name: {
//          first: "Guillaume",
//          last: "Salva"
//     }
// }, ['name', 'first']); // The second argument is the defined path the getIn method will traverse to get it's value. Returns 'undefined' if path doesn't exist.

// console.log(result);
