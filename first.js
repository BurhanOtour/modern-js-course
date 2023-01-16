let a = 12
let b = 12
let z = a + b

let c = 'b' // This is a string (there is no char type in JS)
let cc = "Burhan"
console.log(z)

// values in JS are one of the following types
/**
 * A number
 * The Boolean value false and true
 * The special values null and undefined
 * A String
 * A Symbol
 * An Object
 */

// typeof operator returns a "String"

console.log(typeof a)
console.log(typeof c)
console.log(typeof cc)

/**
 * Similar to Java, you can construct objects that wrap numbers, Boolean values, and strings. 
 * For example, typeof new Number(42) and typeof new String('Hello') are 'object'. 
 * However, in JavaScript, there is no good reason to construct such wrapper instances. 
 * Since they can be a cause of confusion, coding standards often forbid their use.
 */
// declare a varibale 

let x 
console.log(typeof x) // undefined

// declare a const 
const name = "Burhan"

const FREEZING = 0, BOILING = 100
let e,f

// Integer (number type)

console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)

// String to number
/**
 * JavaScript, like C++ but unlike Java, has both functions and methods. 
 * The parseFloat and parseInt functions are not methods, so you don’t invoke them with the dot notation.
 */
const notQuitePi = parseFloat('3.14')
const evenLessPi = parseInt('3')

// number to string
const notQuitePiString = notQuitePi.toString()
console.log(notQuitePiString)

/**
 * As you saw in the preceding code snippet, you can apply methods to number literals. 
 * However, you must enclose the number literal in parentheses so that the dot isn’t interpreted as a decimal separator.
 */
 const evenLessPiString = (3).toString() 



