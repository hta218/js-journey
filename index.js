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
  // console.log(y) // => Reference Error

  var foo = 10
  
  ;(function() {
    console.log(foo) // => undefined (because of hoisting)
    var foo = 20
  })
  
  // console.log(bar) // => Reference Error
  let bar = 'bar'

  // Function declaration
  fu() // => 'fu'
  function fu() { console.log('fu') }

  // Function expression (!) an expr always have a '='
  // baz() // => Reference Error
  var baz = function() { console.log('baz') }
})

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

/**
 * == check the equalty with coercion allowed
 * === check the equalty without allowing coercion
 * 
 * In case of comparing 2 non-premitive values (obj include array n func)
 * both == n === will simply check whether the refs match, not any thing about the underlying values
 */


;(function() {
  // This is anonymous function (a func that assigned to a variable n it has no name)
  let foo = function() { console.log('Foooo') }

  foo()

  // The default argument
  function multiply(a, b = 2) { console.log(a * b) }

  multiply(10)
  multiply(10, 3)

  // Arrow function does not have its own 'this', '...args' n super
  const bar = function() { console.log('bar', this) }
  // bar()
  const arrowBar = () => console.log('arrowBar', this)
  arrowBar()

})()