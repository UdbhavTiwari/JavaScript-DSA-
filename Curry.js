/**
 * @param {Function}
 * @return {Function}
 */
var curry = function (fn) {
    
 //   let nums = [];
//   return function curried(...args) {
//     nums = [...nums, ...args];

//     if (fn.length == nums.length) {
//       const result = fn(...nums);
//       nums = [];
//       return result;
//     } else {
//       return curried;
//     }
// };

 return  function curried (...args) {

    if(fn.length == args.length){
      return   fn(...args)
    }

    else {
            return function (...newArgs) {
                 return curried(...args,...newArgs);
            }
    }
 }

};
