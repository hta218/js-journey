/**
 * Variable scope n hoisting
 * Function hoisting
 *
 * Before ES6: 
 *    Variables define by 'var' are only have function scope
 *    Variables define by 'var' are hoisted to the top of scope
 * ES6: let + const have block-statement scope n doesn't hoist varibles
 * 
 * Only func declaration gets hoisted
 */
;(function() {
  console.log(x) // => undefined
  if (true) {
    var x = 10
    let y = 20
  }
  console.log(x) // => 10
  console.log(y) // => Reference Error

  var foo = 10
  
  ;(function() {
    console.log(foo) // => undefined (because of hoisting)
    var foo = 20
  })
  
  console.log(bar) // => Reference Error
  let bar = 'bar'

  // Function declaration
  fu() // => 'fu'
  function fu() { console.log('fu') }

  // Function expression (!) an expr always have a '='
  baz() // => Reference Error
  var baz = function() { console.log('baz') }
})()

/**
 * Data types (JS have 7 types: 6 primitives + Object)
 * Primite type is not obj n its doesn't have methods
 * They are: null, undefined, Number, String, Boolean n Symbol ??
 * 6 falsy values: false, 0, undefined, null, "", NaN
 */

/**
 * A Promise is in one of these 4 states:
 * - Pending
 * - Fulfilled
 * - Rejected
 * - Settled: either fulfilled of rejected but not pending
 */