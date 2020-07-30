/**
 * Sorts the specified array by country name first and city name (if countries are equal) in ascending order.
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Saint Petersburg' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Belarus', city: 'Brest' }
 *    ]
 *                      =>
 *    [
 *      { country: 'Belarus', city: 'Brest' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Russia',  city: 'Saint Petersburg' }
 */

//sorting the countries
const sortCitiesArray = (arr) => {
  let countryArray = arr;

  //sorting the countries
  function compare(a, b) {
    if (a.country < b.country) {
      return -1;
    }
    if (a.country > b.country) {
      return 1;
    }
    return 0;
  }

  let sortedCountryArray = countryArray.sort(compare);

  //sort the cities too

  function compareCity(a, b) {
    if (a.country == b.country) {
      if (a.city < b.city) {
        return -1;
      }
      if (a.city > b.city) {
        return 1;
      }
      return 0;
    }
  }

  let sortedCountryAndCityArray = sortedCountryArray.sort(compareCity);
  return sortedCountryAndCityArray;
};

/**
 * Returns the number rounded to specified power of 10.
 *
 * @param {number} num
 * @param {number} pow
 * @return {number}
 *
 * @example:
 *   1234, 0  => 1234
 *   1234, 1  => 1230
 *   1234, 2  => 1200
 *   1234, 3  => 1000
 *   1678, 0  => 1678
 *   1678, 1  => 1680
 *   1678, 2  => 1700
 *   1678, 3  => 2000
 */
const roundToPowerOfTen = (num, pow) => {
  let number = num;
  let power = pow;
  let roundingBase = Math.pow(10, power);
  let roundedNumber = Math.round(number / roundingBase) * roundingBase;

  return roundedNumber;
};

/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
const reverseInteger = (num) => {
  let number = num;
  let numberArray = ("" + number).split("").map(function (v, i) {
    return parseInt(v);
  });

  let reversedArray = [];
  let reversedNumber = "";
  for (i = numberArray.length - 1; i >= 0; i--) {
    reversedArray.push(numberArray[i]);
  }
  for (j = 0; j < reversedArray.length; j++) {
    reversedNumber += reversedArray[j];
  }
  return reversedNumber;
};

/**
 * Returns the human readable string of time period specified by the start and end time.
 * The result string should be constrcuted using the folliwing rules:
 *
 * ---------------------------------------------------------------------
 *   Difference                 |  Result
 * ---------------------------------------------------------------------
 *    0 to 45 seconds           |  a few seconds ago
 *   45 to 90 seconds           |  a minute ago
 *   90 seconds to 45 minutes   |  2 minutes ago ... 45 minutes ago
 *   45 to 90 minutes           |  an hour ago
 *  90 minutes to 22 hours      |  2 hours ago ... 22 hours ago
 *  22 to 36 hours              |  a day ago
 *  36 hours to 25 days         |  2 days ago ... 25 days ago
 *  25 to 45 days               |  a month ago
 *  45 to 345 days              |  2 months ago ... 11 months ago
 *  345 to 545 days (1.5 years) |  a year ago
 *  546 days+                   |  2 years ago ... 20 years ago
 * ---------------------------------------------------------------------
 *
 * @param {Date} startDate
 * @param {Date} endDate
 * @return {string}
 *
 * @example
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:00.200')  => 'a few seconds ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:05.000')  => '5 minutes ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-02 03:00:05.000')  => 'a day ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2015-01-02 03:00:05.000')  => '15 years ago'
 *
 */
const timespanToHumanString = (startDate, endDate) => {
  let startDateUnix = new Date(startDate).getTime();
  let endDateUnix = new Date(endDate).getTime();

  let difference = endDateUnix - startDateUnix;

  let differenceInSeconds = difference / 1000;

  //first category
  if (differenceInSeconds <= 45) {
    return "a few seconds ago";
  }
  //second category
  if (differenceInSeconds > 45 && differenceInSeconds <= 90) {
    return "a minute ago";
  }
  //third category
  if (differenceInSeconds > 90 && differenceInSeconds <= 60 * 45) {
    if ((differenceInSeconds / 60) % 1 == 0.5) {
      return Math.floor(differenceInSeconds / 60) + " minutes ago";
    } else {
      return Math.round(differenceInSeconds / 60) + " minutes ago";
    }
  }

  //fourth category
  if (differenceInSeconds > 60 * 45 && differenceInSeconds <= 90 * 60) {
    return "an hour ago";
  }

  //fifth category
  if (differenceInSeconds > 90 * 60 && differenceInSeconds <= 60 * 60 * 22) {
    if ((differenceInSeconds / 3600) % 1 == 0.5) {
      return Math.floor(differenceInSeconds / 3600) + " hours ago";
    } else {
      return Math.round(differenceInSeconds / 3600) + " hours ago";
    }
  }

  //sixth category
  if (
    differenceInSeconds > 60 * 60 * 22 &&
    differenceInSeconds <= 60 * 60 * 36
  ) {
    return "a day ago";
  }

  //seventh category
  if (
    differenceInSeconds > 60 * 60 * 36 &&
    differenceInSeconds <= 60 * 60 * 24 * 25
  ) {
    if ((differenceInSeconds / (60 * 60 * 24)) % 1 == 0.5) {
      return Math.floor(differenceInSeconds / (60 * 60 * 24)) + " days ago";
    } else {
      return Math.round(differenceInSeconds / (60 * 60 * 24)) + " days ago";
    }
  }

  //eigth category
  if (
    differenceInSeconds > 60 * 60 * 24 * 25 &&
    differenceInSeconds <= 60 * 60 * 24 * 45
  ) {
    return "a month ago";
  }

  //ninth category
  if (
    differenceInSeconds > 60 * 60 * 24 * 45 &&
    differenceInSeconds <= 60 * 60 * 24 * 345
  ) {
    return (
      Math.round(differenceInSeconds / (60 * 60 * 24 * 30)) + " months ago"
    );
  }

  //tenth category
  if (
    differenceInSeconds > 60 * 60 * 24 * 345 &&
    differenceInSeconds <= 60 * 60 * 24 * 545
  ) {
    return "a year ago";
  }

  //eleventh category
  if (differenceInSeconds > 60 * 60 * 24 * 546) {
    return (
      Math.round(differenceInSeconds / (60 * 60 * 24 * 365)) + " years ago"
    );
  }
};

/**
 * Returns the rectagle object with width and height parameters and getArea() method
 *
 * @param {number} width
 * @param {number} height
 * @return {Object}
 *
 * @example
 *    var r = new Rectangle(10,20);
 *    console.log(r.width);       // => 10
 *    console.log(r.height);      // => 20
 *    console.log(r.getArea());   // => 200
 */

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea = function () {
    return this.width * this.height;
  };
}

/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
const findFirstSingleChar = (str) => {
  throw new Error("Not implemented");
};

/**
 * Returns the password validator regex.
 * Regex will validate a password to make sure it meets the follwing criteria:
 *  - At least specified characters long (argument minLength)
 *  - Contains a lowercase letter
 *  - Contains an uppercase letter
 *  - Contains a number
 *  - Valid passwords will only be alphanumeric characters.
 *
 * @param {number} minLength
 * @return {Regex}
 *
 * @example
 *   let validator = getPasswordValidator(6);
 *   'password'.match(validator)  => false
 *   'Pa55Word'.match(validator)  => true
 *   'PASSw0rd'.match(validator)  => true
 *   'PASSW0RD'.match(validator)  => false
 *   'Pa55'.match(validator) => false
 */
const getPasswordValidator = (minLength) => {
  let testss = new RegExp(/^(?=.{8,})[a-zA-Z0-9]{1,7}$/);

  // ^[a-zA-Z][0-9]\[a-z{6,}][a-z]*[A-Z]*

  // let testss = new RegExp("/A-Z{1}/a-z{1}/[d]{1}/");
  return testss;
};

module.exports = {
  sortCitiesArray,
  roundToPowerOfTen,
  reverseInteger,
  timespanToHumanString,
  Rectangle,
  findFirstSingleChar,
  getPasswordValidator,
};
