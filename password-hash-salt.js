//Tutorial link: https://ciphertrick.com/2016/01/18/salt-hash-passwords-using-nodejs-crypto

'use strict';
var crypto = require('crypto');

/**
 * generates random string of characters i.e salt
 * @function
 * @param {number} length - Length of the random string.
 */
var genRandomString = function(length) {
  return crypto.randomBytes(Math.ceil(length / 2)).toString('hex')/** convert to hexadecimal format */
    .slice(0, length);/** return required number of characters */
};

/**
 * hash password with sha512.
 * @function
 * @param {string} password - List of required fields.
 * @param {string} salt - Data to be validated.
 */
var sha512 = function(password, salt) {
  var hash = crypto.createHmac('sha512', salt);/** Hashing algorithm sha512 */
  hash.update(password);
  var value = hash.digest('hex');
  return {salt: salt, passwordHash: value};
};

function saltHashPassword(userpassword) {
  var salt = genRandomString(16);/** Gives us salt of length 16 */
  var passwordData = sha512(userpassword, salt);
  console.log('UserPassword = ' + userpassword);
  console.log('Passwordhash = ' + passwordData.passwordHash);
  console.log('nSalt = ' + passwordData.salt);
}

saltHashPassword('MYPASSWORD');
saltHashPassword('MYPASSWORD');

//on your terminal run command line: "Node password-hash-salt.js"
// Results in terminal:
// Nanis-MacBook-Air:code nani$ node password-hash-salt.js
// UserPassword = MYPASSWORD
// Passwordhash = 34a4c8d83921b481ac2d9139325957ef0111c9ad26ec8280e5116d0750a4408fad2db9871d63efeeb1c4397004f3b2a9cb9cb5bd50691847927abfa8f864b816
// nSalt = c79465aa112d3a60
// UserPassword = MYPASSWORD
// Passwordhash = 476bdad6520aef2fc38e50b22d122633f6b4fa9784b4a090acfbcae2a4a5d9183efde2af97d48c98278416ef1f13089c9f89ca91eceb90fbc16f213bea72c250
// nSalt = dd80eb8533e6ce13
// Nanis-MacBook-Air:code nani$
