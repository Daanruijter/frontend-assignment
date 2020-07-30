/**
 * Returns the result of string template and given parameters firstName and lastName.
 * Please do not use concatenation, use template string :
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings
 *
 * @param {string} firstName
 * @param {string} lastName
 * @return {string}
 *
 * @example
 *   'John','Doe'      => 'Hello, John Doe!'
 *   'Chuck','Norris'  => 'Hello, Chuck Norris!'
 */
const getStringFromTemplate = (firstName, lastName) => {
  return `Hello, ${firstName + " " + lastName}!`;
};

/**
 * Removes a leading and trailing whitespace characters from string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   '  Abracadabra'    => 'Abracadabra'
 *   'cat'              => 'cat'
 *   '\tHello, World! ' => 'Hello, World!'
 */
const removeLeadingAndTrailingWhitespaces = (value, count) => {
  let waarde = value;

  for (i = 0; i < value.length; i++) {
    if (waarde[0] === " ") {
      waarde = waarde.slice(1);
    }

    if (waarde[waarde.length - 1] === " ") {
      waarde = waarde.substring(0, waarde.length - 1);
    }

    if (waarde[i] === "\t") {
      waarde = waarde.replace("\t", "");
    }
  }

  return waarde;
};
removeLeadingAndTrailingWhitespaces("  Abracadabra ");

/**
 * Returns a string that repeated the specified number of times.
 *
 * @param {string} value
 * @param {string} count
 * @return {string}
 *
 * @example
 *   'A', 5  => 'AAAAA'
 *   'cat', 3 => 'catcatcat'
 */
const repeatString = (value, count) => {
  let waarde = "";
  for (i = 0; i < count; i++) {
    waarde += value;
  }
  return waarde;
};

/**
 * Returns playid card id.
 *
 * Playing cards inittial deck inclides the cards in the following order:
 *
 *  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
 *  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
 *  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
 *  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
 *
 * (see https://en.wikipedia.org/wiki/Standard_52-card_deck)
 * Function returns the zero-based index of specified card in the initial deck above.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'A♣' => 0
 *   '2♣' => 1
 *   '3♣' => 2
 *     ...
 *   'Q♠' => 50
 *   'K♠' => 51
 */
const getCardId = (value) => {
  let cardArray = [
    "A♣",
    "2♣",
    "3♣",
    "4♣",
    "5♣",
    "6♣",
    "7♣",
    "8♣",
    "9♣",
    "10♣",
    "J♣",
    "Q♣",
    "K♣",
    "A♦",
    "2♦",
    "3♦",
    "4♦",
    "5♦",
    "6♦",
    "7♦",
    "8♦",
    "9♦",
    "10♦",
    "J♦",
    "Q♦",
    "K♦",
    "A♥",
    "2♥",
    "3♥",
    "4♥",
    "5♥",
    "6♥",
    "7♥",
    "8♥",
    "9♥",
    "10♥",
    "J♥",
    "Q♥",
    "K♥",
    "A♠",
    "2♠",
    "3♠",
    "4♠",
    "5♠",
    "6♠",
    "7♠",
    "8♠",
    "9♠",
    "10♠",
    "J♠",
    "Q♠",
    "K♠",
  ];
  for (i = 0; i < 52; i++)
    if (cardArray[i] === value) {
      return i;
    }
};

getCardId("A♣");

/**
 * Returns a distance beetween two points by cartesian coordinates.
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 *
 * @return {number}
 *
 * @example:
 *   (0,0) (0,1)    => 1
 *   (0,0) (1,0)    => 1
 *   (-5,0) (10,-10) => 18.027756377319946
 */
const getDistanceBetweenPoints = (x1, y1, x2, y2) => {
  return Math.sqrt(Math.pow(y2 - y1, 2) + Math.pow(x2 - x1, 2));
};

/**
 * Returns an index of the specified element in array or -1 if element is not found
 *
 * @param {array} arr
 * @param {any} value
 * @return {number}
 *
 * @example
 *    ['Ace', 10, true], 10    => 1
 *    ['Array', 'Number', 'string'], 'Date'    => -1
 *    [0, 1, 2, 3, 4, 5], 5    => 5
 */
const findElement = (arr, value) => {
  let arrayForFindingIndex = arr;
  let valueToFind = value;

  for (i = 0; i < arrayForFindingIndex.length; i++) {
    if (arrayForFindingIndex[i] === valueToFind) {
      return i;
    }
  }

  for (i = 0; i < arrayForFindingIndex.length; i++) {
    if (arrayForFindingIndex[i] !== valueToFind) {
      return -1;
    }
  }
};

findElement(["Ace", 10, true], true);

/**
 * Returns an array of positive numbers from the specified array in original order
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ 0, 1, 2, 3, 4, 5 ] => [ 1, 2, 3, 4, 5 ]
 *    [-1, 2, -5, -4, 0] => [ 2 ]
 *    [] => []
 */

const getArrayOfPositives = (arr) => {
  let arrayToAdapt = arr;

  let arrayOfPositiveNumbers = arrayToAdapt.filter(function (item) {
    return item > 0;
  });
  return arrayOfPositiveNumbers;
};

module.exports = {
  getStringFromTemplate,
  removeLeadingAndTrailingWhitespaces,
  repeatString,
  getCardId,
  getDistanceBetweenPoints,
  findElement,
  getArrayOfPositives,
};
