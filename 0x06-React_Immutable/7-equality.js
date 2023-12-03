import { Map } from 'immutable';

/* Accepts two arguments map1 and map2. Both are Immutable.js Maps 
        It should return 'true' if the Maps are equal*/
export function areMapsEqual(map1, map2) {
    const mapA = Map(map1);
    const mapB = Map(map2);

    return map1.equals(map2);
}

// USAGE:

// const map1 = new Map(
//     {
//       firstName: 'Guillaume',
//       lastName: 'Salva',
//     }
//   );
//   const map2 = new Map(
//     {
//       firstName: 'Guillaume',
//       lastName: 'Salva',
//     }
//   );
  
// console.log(areMapsEqual(map1, map2));
